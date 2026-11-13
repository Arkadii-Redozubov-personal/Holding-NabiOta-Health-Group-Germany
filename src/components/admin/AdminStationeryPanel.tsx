"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  LogOut,
  Printer,
  Globe,
  ArrowLeft,
  User,
  FileText,
  Settings,
  Search,
  Check,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ExternalLink,
  GitMerge,
  Clock,
  Layers,
  ChevronDown,
  ChevronRight,
  X,
  Eye,
  ShieldCheck,
} from "@/lib/icons";
import { Logo } from "@/components/ui/Logo";
import { CorporateStationerySection } from "@/components/sections/CorporateStationerySection";
import { locales, type SupportedLocale } from "@/lib/i18n";
import {
  type CmsOverridesDocument,
  type CmsNamespace,
  getActiveCmsOverrides,
  getCommittedCmsOverrides,
  setLocalCmsOverridesCache,
} from "@/lib/cms/cms-engine";
import { getCmsPagesSchema, type CmsFieldDefinition } from "@/lib/cms/cms-schema";
import {
  getRuntimeFirebaseConfig,
  saveRuntimeFirebaseConfig,
  isFirebaseConfigured,
} from "@/lib/firebase/config";
import { signOutAdminSession } from "@/lib/firebase/auth";
import {
  fetchCmsOverridesFromFirestore,
  saveCmsOverridesToFirestore,
  fetchCmsRevisionHistory,
  type CmsRevisionEntry,
} from "@/lib/firebase/cms-firestore";
import {
  commitAndPushOverridesToGitHub,
  fetchLatestGitHubDeployRuns,
  resolveGitHubSyncConfig,
  persistGitHubSyncConfig,
  type GitHubWorkflowRunSummary,
} from "@/lib/cms/github-sync";
import "@/app/admin/stationery.css";

interface AdminStationeryPanelProps {
  userEmail: string;
}

type AdminTab = "cms" | "print" | "deployments" | "settings";
type FieldFilterMode = "all" | "modified" | "deleted";

const LOCALE_LABELS: Record<SupportedLocale, string> = {
  de: "Deutsch (DE)",
  ru: "Русский (RU)",
  en: "English (EN)",
  tr: "Türkçe (TR)",
  ar: "العربية (AR)",
  uz: "O'zbek (UZ)",
};

export function AdminStationeryPanel({ userEmail }: AdminStationeryPanelProps) {
  const router = useRouter();

  // Navigation & Filter State
  const [activeTab, setActiveTab] = useState<AdminTab>("cms");
  const [activeLocale, setActiveLocale] = useState<SupportedLocale>("ru");
  const [stationeryLocale, setStationeryLocale] = useState<SupportedLocale>("de");
  const [activePageId, setActivePageId] = useState<string>("home");
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterMode, setFilterMode] = useState<FieldFilterMode>("all");

  // CMS Data State
  const [overridesDoc, setOverridesDoc] = useState<CmsOverridesDocument>(() =>
    getActiveCmsOverrides()
  );
  const [savedSnapshotJson, setSavedSnapshotJson] = useState<string>(() =>
    JSON.stringify(getCommittedCmsOverrides().overrides)
  );
  const [commitMessage, setCommitMessage] = useState<string>("");
  const [saving, setSaving] = useState<boolean>(false);
  const [saveBanner, setSaveBanner] = useState<{
    type: "success" | "warning" | "error";
    text: string;
    commitUrl?: string;
  } | null>(null);

  // Revisions & GitHub Actions State
  const [revisions, setRevisions] = useState<CmsRevisionEntry[]>([]);
  const [deployRuns, setDeployRuns] = useState<GitHubWorkflowRunSummary[]>([]);
  const [loadingRuns, setLoadingRuns] = useState<boolean>(false);

  // Firebase & GitHub Setup Form State
  const [fbApiKey, setFbApiKey] = useState<string>(
    () => getRuntimeFirebaseConfig()?.apiKey || ""
  );
  const [fbAuthDomain, setFbAuthDomain] = useState<string>(
    () => getRuntimeFirebaseConfig()?.authDomain || ""
  );
  const [fbProjectId, setFbProjectId] = useState<string>(
    () => getRuntimeFirebaseConfig()?.projectId || ""
  );
  const [fbStorageBucket, setFbStorageBucket] = useState<string>(
    () => getRuntimeFirebaseConfig()?.storageBucket || ""
  );
  const [fbMessagingSenderId, setFbMessagingSenderId] = useState<string>(
    () => getRuntimeFirebaseConfig()?.messagingSenderId || ""
  );
  const [fbAppId, setFbAppId] = useState<string>(
    () => getRuntimeFirebaseConfig()?.appId || ""
  );
  const [firebaseReady, setFirebaseReady] = useState<boolean>(() =>
    isFirebaseConfigured()
  );

  const [ghOwner, setGhOwner] = useState<string>("Arkadii-Redozubov-personal");
  const [ghRepo, setGhRepo] = useState<string>("Holding-NabiOta-Health-Group-Germany");
  const [ghBranch, setGhBranch] = useState<string>("main");
  const [ghToken, setGhToken] = useState<string>("");
  const [settingsSavedMsg, setSettingsSavedMsg] = useState<string | null>(null);

  const [loggingOut, setLoggingOut] = useState<boolean>(false);

  // Load initial Firestore data, GitHub config, and workflow runs
  useEffect(() => {
    let mounted = true;

    async function hydrateRemoteData() {
      const [remoteDoc, revList, ghCfg, runs] = await Promise.all([
        fetchCmsOverridesFromFirestore(),
        fetchCmsRevisionHistory(15),
        resolveGitHubSyncConfig(),
        fetchLatestGitHubDeployRuns(5),
      ]);

      if (!mounted) return;

      if (remoteDoc) {
        setOverridesDoc((prev) => {
          if (remoteDoc.updatedAt > prev.updatedAt) {
            setLocalCmsOverridesCache(remoteDoc);
            setSavedSnapshotJson(JSON.stringify(remoteDoc.overrides));
            return remoteDoc;
          }
          return prev;
        });
      }

      setRevisions(revList);
      setGhOwner(ghCfg.owner);
      setGhRepo(ghCfg.repo);
      setGhBranch(ghCfg.branch);
      setGhToken(ghCfg.token);
      setDeployRuns(runs);
    }

    hydrateRemoteData();
    return () => {
      mounted = false;
    };
  }, []);

  // Build schema for active locale
  const pagesSchema = useMemo(
    () => getCmsPagesSchema(activeLocale),
    [activeLocale]
  );

  const activePage = useMemo(
    () => pagesSchema.find((p) => p.id === activePageId) || pagesSchema[0],
    [pagesSchema, activePageId]
  );

  // Count unsaved changes and total active overrides
  const hasUnsavedChanges = useMemo(() => {
    return JSON.stringify(overridesDoc.overrides) !== savedSnapshotJson;
  }, [overridesDoc, savedSnapshotJson]);

  const localeOverrideCounts = useMemo(() => {
    const counts: Record<SupportedLocale, number> = {
      de: 0,
      en: 0,
      ru: 0,
      tr: 0,
      ar: 0,
      uz: 0,
    };
    for (const loc of locales) {
      const nsMap = overridesDoc.overrides[loc] || {};
      let sum = 0;
      for (const fields of Object.values(nsMap)) {
        if (fields) sum += Object.keys(fields).length;
      }
      counts[loc] = sum;
    }
    return counts;
  }, [overridesDoc]);

  const getFieldValue = (field: CmsFieldDefinition): string => {
    const customVal =
      overridesDoc.overrides?.[activeLocale]?.[field.namespace]?.[field.path];
    return typeof customVal === "string" ? customVal : field.defaultValue;
  };

  const isFieldModified = (field: CmsFieldDefinition): boolean => {
    const customVal =
      overridesDoc.overrides?.[activeLocale]?.[field.namespace]?.[field.path];
    return typeof customVal === "string" && customVal !== field.defaultValue;
  };

  const isFieldDeleted = (field: CmsFieldDefinition): boolean => {
    const customVal =
      overridesDoc.overrides?.[activeLocale]?.[field.namespace]?.[field.path];
    return customVal === "" && field.defaultValue !== "";
  };

  const updateFieldOverride = (
    namespace: CmsNamespace,
    path: string,
    newValue: string,
    defaultValue: string
  ) => {
    setSaveBanner(null);
    setOverridesDoc((prev) => {
      const nextLocaleMap = { ...(prev.overrides[activeLocale] || {}) };
      const nextNsFields = { ...(nextLocaleMap[namespace] || {}) };

      if (newValue === defaultValue) {
        delete nextNsFields[path];
      } else {
        nextNsFields[path] = newValue;
      }

      if (Object.keys(nextNsFields).length === 0) {
        delete nextLocaleMap[namespace];
      } else {
        nextLocaleMap[namespace] = nextNsFields;
      }

      return {
        ...prev,
        updatedAt: new Date().toISOString(),
        updatedBy: userEmail,
        overrides: {
          ...prev.overrides,
          [activeLocale]: nextLocaleMap,
        },
      };
    });
  };

  const handleSaveAndPush = async () => {
    setSaving(true);
    setSaveBanner(null);

    try {
      const totalModified = Object.values(localeOverrideCounts).reduce(
        (acc, n) => acc + n,
        0
      );
      const finalMessage =
        commitMessage.trim() ||
        `CMS Update (${activeLocale.toUpperCase()}) by ${userEmail}`;

      const updatedDoc: CmsOverridesDocument = {
        ...overridesDoc,
        updatedAt: new Date().toISOString(),
        updatedBy: userEmail,
      };

      // 1. Update local browser cache immediately
      setLocalCmsOverridesCache(updatedDoc);
      setOverridesDoc(updatedDoc);

      // 2. Commit & push to GitHub (REST API or local Git CLI)
      const ghResult = await commitAndPushOverridesToGitHub(
        updatedDoc,
        finalMessage
      );

      // 3. Persist to Firebase Firestore + revision history
      await saveCmsOverridesToFirestore(updatedDoc, {
        commitMessage: finalMessage,
        commitSha: ghResult.commitSha,
        commitUrl: ghResult.commitUrl,
        changedKeysCount: totalModified,
      });

      setSavedSnapshotJson(JSON.stringify(updatedDoc.overrides));
      setCommitMessage("");

      const [updatedRevs, updatedRuns] = await Promise.all([
        fetchCmsRevisionHistory(15),
        fetchLatestGitHubDeployRuns(5),
      ]);
      setRevisions(updatedRevs);
      setDeployRuns(updatedRuns);

      if (ghResult.success) {
        setSaveBanner({
          type: "success",
          text:
            ghResult.mode === "github-rest-api"
              ? `Gespeichert in Firebase & automatisch auf GitHub gepusht (${ghResult.commitSha || "main"}).`
              : ghResult.mode === "local-git-cli"
              ? `Gespeichert & per Git-CLI auf GitHub (main) gepusht (${ghResult.commitSha || "HEAD"}).`
              : "In lokaler Datei & Firebase gespeichert.",
          commitUrl: ghResult.commitUrl,
        });
      } else {
        setSaveBanner({
          type: "warning",
          text:
            ghResult.error ||
            "In Firebase & Browser gespeichert. Für automatische GitHub-Commits bitte GitHub Token im Setup hinterlegen.",
        });
      }
    } catch (err: unknown) {
      setSaveBanner({
        type: "error",
        text:
          err instanceof Error
            ? err.message
            : "Fehler beim Speichern und Pushen.",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleRefreshDeployRuns = async () => {
    setLoadingRuns(true);
    try {
      const runs = await fetchLatestGitHubDeployRuns(5);
      setDeployRuns(runs);
    } finally {
      setLoadingRuns(false);
    }
  };

  const handleSaveSetup = async (e: React.FormEvent) => {
    e.preventDefault();
    setSettingsSavedMsg(null);

    if (fbApiKey.trim() && fbProjectId.trim()) {
      saveRuntimeFirebaseConfig({
        apiKey: fbApiKey.trim(),
        authDomain:
          fbAuthDomain.trim() || `${fbProjectId.trim()}.firebaseapp.com`,
        projectId: fbProjectId.trim(),
        storageBucket:
          fbStorageBucket.trim() || `${fbProjectId.trim()}.firebasestorage.app`,
        messagingSenderId: fbMessagingSenderId.trim(),
        appId: fbAppId.trim(),
      });
      setFirebaseReady(true);
    } else {
      saveRuntimeFirebaseConfig(null);
      setFirebaseReady(isFirebaseConfigured());
    }

    await persistGitHubSyncConfig({
      owner: ghOwner.trim() || "Arkadii-Redozubov-personal",
      repo: ghRepo.trim() || "Holding-NabiOta-Health-Group-Germany",
      branch: ghBranch.trim() || "main",
      token: ghToken.trim(),
    });

    setSettingsSavedMsg(
      "Firebase- & GitHub-Konfiguration erfolgreich gespeichert."
    );
  };

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await signOutAdminSession();
      router.push("/admin/login");
      router.refresh();
    } catch {
      setLoggingOut(false);
    }
  };

  const toggleSection = (secId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [secId]: prev[secId] === undefined ? false : !prev[secId],
    }));
  };

  const latestRun = deployRuns[0];

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#132018] flex flex-col font-sans">
      {/* Top Admin Header */}
      <header className="sticky top-0 z-50 bg-[#0D1910] text-[#FAF8F5] border-b border-[#243829] px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-[1600px] mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Left: Brand & Portal Badge */}
          <div className="flex items-center gap-3 sm:gap-5">
            <Logo variant="light" size="sm" locale="de" />
            <span className="hidden sm:inline-block w-px h-6 bg-white/15" />
            <div className="flex items-center gap-2">
              <span className="bg-[#BEA06B] text-[#0D1910] text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Firebase CMS
              </span>
              <span className="text-sm font-medium text-white/90 hidden md:inline">
                Content, GitHub Sync & Druckzentrum
              </span>
            </div>
          </div>

          {/* Right: Status Badges, Save CTA & User Controls */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {/* Firebase Connection Badge */}
            <button
              type="button"
              onClick={() => setActiveTab("settings")}
              className="hidden xl:inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white/90 transition-colors cursor-pointer"
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  firebaseReady ? "bg-emerald-400" : "bg-[#ECCF96]"
                }`}
              />
              <span>
                {firebaseReady
                  ? `Firebase: ${fbProjectId || "Verbunden"}`
                  : "Firebase: Setup bereit"}
              </span>
            </button>

            {/* Latest GitHub Action Status Badge */}
            {latestRun && (
              <a
                href={latestRun.htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white/90 transition-colors"
              >
                <GitMerge className="w-3.5 h-3.5 text-[#ECCF96]" />
                <span>
                  Deploy ({latestRun.headSha}):{" "}
                  {latestRun.status === "completed"
                    ? latestRun.conclusion || "fertig"
                    : "läuft..."}
                </span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            )}

            {/* Save & GitHub Push Button */}
            <button
              type="button"
              onClick={handleSaveAndPush}
              disabled={saving}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-[13px] font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ECCF96] ${
                hasUnsavedChanges
                  ? "bg-[#ECCF96] hover:bg-[#D8B772] text-[#0D1910]"
                  : "bg-[#1B3322] hover:bg-[#24422D] text-[#ECCF96] border border-[#BEA06B]/40"
              }`}
            >
              {saving ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Speichert & pusht...</span>
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  <span>
                    {hasUnsavedChanges
                      ? "Speichern & GitHub Push *"
                      : "Speichern & GitHub Push"}
                  </span>
                </>
              )}
            </button>

            {/* User Badge */}
            <div className="hidden md:flex items-center gap-1.5 text-xs text-white/80 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
              <User className="w-3.5 h-3.5 text-[#ECCF96]" />
              <span className="truncate max-w-[160px]">{userEmail}</span>
            </div>

            {/* Live Site Link */}
            <Link
              href={`/${activeLocale === "de" ? "" : activeLocale}`}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-white/90 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 px-3 py-1.5 rounded-full transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Website</span>
            </Link>

            {/* Logout */}
            <button
              type="button"
              onClick={handleLogout}
              disabled={loggingOut}
              aria-label="Abmelden"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-red-200 hover:text-white bg-red-950/60 hover:bg-red-900/70 border border-red-400/30 px-3 py-1.5 rounded-full transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">
                {loggingOut ? "..." : "Abmelden"}
              </span>
            </button>
          </div>
        </div>

        {/* Sub-Nav Tabs */}
        <div className="max-w-[1600px] mx-auto mt-3 pt-2.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <nav
            aria-label="Admin Module"
            className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0"
          >
            <button
              type="button"
              onClick={() => setActiveTab("cms")}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-[13px] font-medium whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === "cms"
                  ? "bg-[#FAF8F5] text-[#0D1910] font-semibold"
                  : "text-white/75 hover:text-white hover:bg-white/10"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Seiteninhalte & Text-CMS</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("print")}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-[13px] font-medium whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === "print"
                  ? "bg-[#FAF8F5] text-[#0D1910] font-semibold"
                  : "text-white/75 hover:text-white hover:bg-white/10"
              }`}
            >
              <Printer className="w-4 h-4" />
              <span>Druckzentrum · Briefbogen & Visitenkarten</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("deployments")}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-[13px] font-medium whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === "deployments"
                  ? "bg-[#FAF8F5] text-[#0D1910] font-semibold"
                  : "text-white/75 hover:text-white hover:bg-white/10"
              }`}
            >
              <GitMerge className="w-4 h-4" />
              <span>GitHub Commits & Deployments</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("settings")}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-[13px] font-medium whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === "settings"
                  ? "bg-[#FAF8F5] text-[#0D1910] font-semibold"
                  : "text-white/75 hover:text-white hover:bg-white/10"
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>Firebase & GitHub Setup</span>
            </button>
          </nav>

          {/* Optional Commit Message Input when in CMS tab */}
          {activeTab === "cms" && (
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <input
                type="text"
                value={commitMessage}
                onChange={(e) => setCommitMessage(e.target.value)}
                placeholder="Optionale GitHub Commit-Nachricht..."
                className="w-full sm:w-64 px-3 py-1 text-xs rounded-lg bg-white/10 border border-white/15 text-white placeholder-white/50 focus:outline-none focus:border-[#ECCF96]"
              />
            </div>
          )}
        </div>
      </header>

      {/* Notification Banner after Save/Push */}
      {saveBanner && (
        <div
          className={`border-b px-4 sm:px-8 py-3 text-xs sm:text-sm ${
            saveBanner.type === "success"
              ? "bg-emerald-950 text-emerald-100 border-emerald-800"
              : saveBanner.type === "warning"
              ? "bg-amber-950 text-amber-100 border-amber-800"
              : "bg-red-950 text-red-100 border-red-800"
          }`}
        >
          <div className="max-w-[1600px] mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              {saveBanner.type === "success" ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
              )}
              <span>{saveBanner.text}</span>
              {saveBanner.commitUrl && (
                <a
                  href={saveBanner.commitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold inline-flex items-center gap-1 ml-2 text-[#ECCF96]"
                >
                  <span>Commit auf GitHub ansehen</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
            <button
              type="button"
              onClick={() => setSaveBanner(null)}
              className="text-white/70 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-[1600px] w-full mx-auto p-4 sm:p-6 lg:p-8">
        {/* TAB 1: SEITENINHALTE & TEXT-CMS */}
        {activeTab === "cms" && (
          <div className="space-y-6">
            {/* Top Language & Search Bar */}
            <div className="bg-white rounded-2xl border border-[#E2DACE] p-4 sm:p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              {/* Language Switcher */}
              <div className="flex flex-wrap items-center gap-1.5">
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#556358] mr-2">
                  <Globe className="w-4 h-4 text-[#8C6D2B]" />
                  <span>Sprache bearbeiten:</span>
                </div>
                {locales.map((loc) => {
                  const count = localeOverrideCounts[loc];
                  const isCurrent = activeLocale === loc;
                  return (
                    <button
                      key={loc}
                      type="button"
                      onClick={() => setActiveLocale(loc)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                        isCurrent
                          ? "bg-[#132B1E] text-white"
                          : "bg-[#FAF8F5] text-[#2C382F] border border-[#E6DFD3] hover:border-[#BEA06B]"
                      }`}
                    >
                      <span>{LOCALE_LABELS[loc]}</span>
                      {count > 0 && (
                        <span
                          className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                            isCurrent
                              ? "bg-[#ECCF96] text-[#0D1910]"
                              : "bg-[#132B1E] text-white"
                          }`}
                        >
                          {count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Search & Filter Controls */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <div className="relative">
                  <Search className="w-4 h-4 text-[#7A867E] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Text oder Feld suchen..."
                    className="w-full sm:w-64 pl-9 pr-3 py-2 text-xs rounded-xl bg-[#FAF8F5] border border-[#E2DACE] text-[#132018] placeholder-[#7A867E] focus:outline-none focus:border-[#132B1E]"
                  />
                </div>

                <div className="flex items-center bg-[#FAF8F5] border border-[#E2DACE] rounded-xl p-1 text-xs">
                  {(
                    [
                      { id: "all", label: "Alle" },
                      { id: "modified", label: "Geändert" },
                      { id: "deleted", label: "Gelöscht" },
                    ] as { id: FieldFilterMode; label: string }[]
                  ).map((mode) => (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => setFilterMode(mode.id)}
                      className={`px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                        filterMode === mode.id
                          ? "bg-[#132B1E] text-white"
                          : "text-[#556358] hover:text-[#132018]"
                      }`}
                    >
                      {mode.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Grid: Left Page Selector + Right Section & Field Editor */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Sidebar: Pages */}
              <aside className="lg:col-span-3 bg-white rounded-2xl border border-[#E2DACE] p-3.5 space-y-1.5">
                <div className="px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#6E7A72]">
                  Hauptseiten ({pagesSchema.length})
                </div>
                {pagesSchema.map((page) => {
                  const isSelected = page.id === activePage.id;
                  const modifiedInPage = page.sections.reduce(
                    (acc, sec) =>
                      acc +
                      sec.fields.filter((f) => isFieldModified(f)).length,
                    0
                  );

                  return (
                    <button
                      key={page.id}
                      type="button"
                      onClick={() => setActivePageId(page.id)}
                      className={`w-full text-left px-3.5 py-3 rounded-xl transition-colors flex items-center justify-between gap-2 cursor-pointer ${
                        isSelected
                          ? "bg-[#132B1E] text-white"
                          : "hover:bg-[#FAF8F5] text-[#132018]"
                      }`}
                    >
                      <div className="min-w-0">
                        <div className="font-serif text-sm font-medium truncate">
                          {page.title}
                        </div>
                        <div
                          className={`text-[11px] truncate ${
                            isSelected ? "text-white/75" : "text-[#6E7A72]"
                          }`}
                        >
                          {page.routeHint} · {page.badge}
                        </div>
                      </div>

                      {modifiedInPage > 0 && (
                        <span
                          className={`px-2 py-0.5 rounded-full text-[11px] font-semibold shrink-0 ${
                            isSelected
                              ? "bg-[#ECCF96] text-[#0D1910]"
                              : "bg-[#132B1E] text-white"
                          }`}
                        >
                          {modifiedInPage}
                        </span>
                      )}
                    </button>
                  );
                })}
              </aside>

              {/* Right Column: Sections & Editable Fields */}
              <div className="lg:col-span-9 space-y-4">
                {/* Active Page Header Bar */}
                <div className="bg-white rounded-2xl border border-[#E2DACE] p-5 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <Layers className="w-5 h-5 text-[#8C6D2B]" />
                      <h1 className="font-serif text-xl sm:text-2xl font-medium text-[#132018]">
                        {activePage.title}
                      </h1>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#FAF8F5] border border-[#E2DACE] text-[#556358]">
                        {LOCALE_LABELS[activeLocale]}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#556358] mt-1">
                      Bearbeiten Sie beliebige Texte oder klicken Sie auf{" "}
                      <strong>„Text löschen / ausblenden“</strong>, um einen
                      Textblock von der Seite zu entfernen. Danach oben auf{" "}
                      <strong>„Speichern & GitHub Push“</strong> klicken.
                    </p>
                  </div>

                  {activePage.routeHint.startsWith("/") && (
                    <Link
                      href={activePage.routeHint}
                      target="_blank"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[#D5C7AF] hover:border-[#132B1E] bg-[#FAF8F5] text-xs font-semibold text-[#132018] transition-colors"
                    >
                      <Eye className="w-4 h-4 text-[#8C6D2B]" />
                      <span>Live-Vorschau öffnen</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                    </Link>
                  )}
                </div>

                {/* Sections Accordion */}
                {activePage.sections.map((section) => {
                  const filteredFields = section.fields.filter((f) => {
                    const currentVal = getFieldValue(f);
                    const matchesSearch =
                      !searchQuery.trim() ||
                      f.label
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                      f.path
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                      currentVal
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                      f.defaultValue
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase());

                    if (!matchesSearch) return false;
                    if (filterMode === "modified") return isFieldModified(f);
                    if (filterMode === "deleted") return isFieldDeleted(f);
                    return true;
                  });

                  if (filteredFields.length === 0) return null;

                  const isOpen = expandedSections[section.id] ?? true;
                  const modifiedCount = section.fields.filter((f) =>
                    isFieldModified(f)
                  ).length;

                  return (
                    <div
                      key={section.id}
                      className="bg-white rounded-2xl border border-[#E2DACE] overflow-hidden"
                    >
                      {/* Section Header */}
                      <button
                        type="button"
                        onClick={() => toggleSection(section.id)}
                        className="w-full px-5 py-4 bg-[#FAF8F5] border-b border-[#EAE3D5] flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-[#F4EFE6] transition-colors"
                      >
                        <div>
                          <div className="flex items-center gap-2.5">
                            <h2 className="font-serif text-base sm:text-lg font-medium text-[#132018]">
                              {section.title}
                            </h2>
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-white border border-[#E2DACE] text-[#556358]">
                              {filteredFields.length} Felder
                            </span>
                            {modifiedCount > 0 && (
                              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#132B1E] text-[#ECCF96] font-semibold">
                                {modifiedCount} geändert
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-[#556358] mt-0.5">
                            {section.subtitle}
                          </p>
                        </div>

                        {isOpen ? (
                          <ChevronDown className="w-5 h-5 text-[#556358] shrink-0" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-[#556358] shrink-0" />
                        )}
                      </button>

                      {/* Section Fields */}
                      {isOpen && (
                        <div className="p-5 divide-y divide-[#EFEAE0] space-y-5">
                          {filteredFields.map((field) => {
                            const val = getFieldValue(field);
                            const modified = isFieldModified(field);
                            const deleted = isFieldDeleted(field);

                            return (
                              <div
                                key={field.id}
                                className="pt-5 first:pt-0 space-y-2"
                              >
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                  <div className="flex flex-wrap items-center gap-2">
                                    <label
                                      htmlFor={field.id}
                                      className="text-xs sm:text-[13px] font-semibold text-[#132018]"
                                    >
                                      {field.label}
                                    </label>
                                    <code className="text-[11px] px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#E6DFD3] text-[#6E7A72]">
                                      {field.path}
                                    </code>
                                    {deleted ? (
                                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-red-100 text-red-800 font-semibold">
                                        Gelöscht / Ausgeblendet
                                      </span>
                                    ) : modified ? (
                                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-semibold">
                                        Bearbeitet
                                      </span>
                                    ) : null}
                                  </div>

                                  {/* Field Action Buttons */}
                                  <div className="flex items-center gap-2">
                                    {val !== "" && (
                                      <button
                                        type="button"
                                        onClick={() =>
                                          updateFieldOverride(
                                            field.namespace,
                                            field.path,
                                            "",
                                            field.defaultValue
                                          )
                                        }
                                        className="text-[11px] font-medium px-2.5 py-1 rounded-lg border border-red-200 bg-red-50/70 text-red-700 hover:bg-red-100 transition-colors cursor-pointer"
                                      >
                                        Text löschen / ausblenden
                                      </button>
                                    )}
                                    {modified && (
                                      <button
                                        type="button"
                                        onClick={() =>
                                          updateFieldOverride(
                                            field.namespace,
                                            field.path,
                                            field.defaultValue,
                                            field.defaultValue
                                          )
                                        }
                                        className="text-[11px] font-medium px-2.5 py-1 rounded-lg border border-[#D5C7AF] bg-[#FAF8F5] text-[#132018] hover:border-[#132B1E] transition-colors cursor-pointer"
                                      >
                                        Standard wiederherstellen
                                      </button>
                                    )}
                                  </div>
                                </div>

                                {field.multiline ? (
                                  <textarea
                                    id={field.id}
                                    dir={activeLocale === "ar" ? "rtl" : "ltr"}
                                    rows={Math.min(
                                      6,
                                      Math.max(
                                        2,
                                        Math.ceil((val.length || 60) / 90)
                                      )
                                    )}
                                    value={val}
                                    onChange={(e) =>
                                      updateFieldOverride(
                                        field.namespace,
                                        field.path,
                                        e.target.value,
                                        field.defaultValue
                                      )
                                    }
                                    placeholder="(Text gelöscht / ausgeblendet)"
                                    className={`w-full rounded-xl px-3.5 py-2.5 text-xs sm:text-sm border transition-colors focus:outline-none ${
                                      deleted
                                        ? "bg-red-50/40 border-red-300 text-red-900 placeholder-red-400"
                                        : modified
                                        ? "bg-[#FFFDF7] border-[#BEA06B] text-[#132018]"
                                        : "bg-[#FAF8F5] border-[#E2DACE] text-[#132018] focus:border-[#132B1E] focus:bg-white"
                                    }`}
                                  />
                                ) : (
                                  <input
                                    id={field.id}
                                    type="text"
                                    dir={activeLocale === "ar" ? "rtl" : "ltr"}
                                    value={val}
                                    onChange={(e) =>
                                      updateFieldOverride(
                                        field.namespace,
                                        field.path,
                                        e.target.value,
                                        field.defaultValue
                                      )
                                    }
                                    placeholder="(Text gelöscht / ausgeblendet)"
                                    className={`w-full rounded-xl px-3.5 py-2 text-xs sm:text-sm border transition-colors focus:outline-none ${
                                      deleted
                                        ? "bg-red-50/40 border-red-300 text-red-900 placeholder-red-400"
                                        : modified
                                        ? "bg-[#FFFDF7] border-[#BEA06B] text-[#132018]"
                                        : "bg-[#FAF8F5] border-[#E2DACE] text-[#132018] focus:border-[#132B1E] focus:bg-white"
                                    }`}
                                  />
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: DRUCKZENTRUM (CORPORATE STATIONERY) */}
        {activeTab === "print" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-[#E2DACE] p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Printer className="w-5 h-5 text-[#132B1E]" />
                  <h1 className="font-serif text-xl sm:text-2xl font-medium text-[#132018]">
                    Druckzentrum · Briefbogen & Visitenkarten
                  </h1>
                </div>
                <p className="text-xs sm:text-sm text-[#556358]">
                  Erstellen und drucken Sie offizielle A4-Briefbögen und
                  doppelseitige Visitenkarten der NabiOta® Health Group Germany.
                </p>
              </div>

              <div className="flex items-center gap-1.5 self-start md:self-auto bg-[#FAF8F5] border border-[#E2DACE] p-1 rounded-xl">
                <Globe className="w-4 h-4 text-[#8C6D2B] ml-2" />
                <span className="text-xs font-medium text-[#556358] mr-1 hidden sm:inline">
                  Sprache:
                </span>
                {(["de", "ru", "en", "uz", "tr"] as SupportedLocale[]).map(
                  (l) => (
                    <button
                      key={l}
                      type="button"
                      onClick={() => setStationeryLocale(l)}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors uppercase cursor-pointer ${
                        stationeryLocale === l
                          ? "bg-[#132B1E] text-white"
                          : "text-[#556358] hover:text-[#132018]"
                      }`}
                    >
                      {l}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#E2DACE] overflow-hidden">
              <CorporateStationerySection locale={stationeryLocale} />
            </div>
          </div>
        )}

        {/* TAB 3: GITHUB COMMITS & DEPLOYMENTS */}
        {activeTab === "deployments" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left: GitHub Actions Live Runs */}
            <div className="bg-white rounded-2xl border border-[#E2DACE] p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <h2 className="font-serif text-lg sm:text-xl font-medium text-[#132018]">
                    GitHub Actions · ALL-INKL Deployments
                  </h2>
                  <p className="text-xs text-[#556358]">
                    Jeder Klick auf „Speichern & GitHub Push“ committet{" "}
                    <code>src/data/cms-overrides.json</code> und startet
                    automatisch das Live-Deployment.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleRefreshDeployRuns}
                  disabled={loadingRuns}
                  className="px-3 py-1.5 rounded-xl border border-[#D5C7AF] bg-[#FAF8F5] hover:border-[#132B1E] text-xs font-semibold text-[#132018] cursor-pointer"
                >
                  {loadingRuns ? "Aktualisiert..." : "Status prüfen"}
                </button>
              </div>

              <div className="space-y-2.5">
                {deployRuns.length === 0 ? (
                  <p className="text-xs text-[#6E7A72] py-4">
                    Keine aktuellen Workflow-Runs gefunden.
                  </p>
                ) : (
                  deployRuns.map((run) => (
                    <div
                      key={run.id}
                      className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E6DFD3] flex items-center justify-between gap-3"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-2.5 h-2.5 rounded-full ${
                              run.status !== "completed"
                                ? "bg-amber-500 animate-pulse"
                                : run.conclusion === "success"
                                ? "bg-emerald-600"
                                : "bg-red-600"
                            }`}
                          />
                          <span className="text-xs sm:text-sm font-semibold text-[#132018]">
                            {run.name} · Commit <code>{run.headSha}</code>
                          </span>
                        </div>
                        <div className="text-[11px] text-[#6E7A72] mt-0.5">
                          Status: {run.status}{" "}
                          {run.conclusion ? `(${run.conclusion})` : ""} ·{" "}
                          {new Date(run.createdAt).toLocaleString("de-DE")}
                        </div>
                      </div>

                      <a
                        href={run.htmlUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#8C6D2B] hover:underline"
                      >
                        <span>Details</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Right: Firebase & CMS Revision Log */}
            <div className="bg-white rounded-2xl border border-[#E2DACE] p-5 sm:p-6 space-y-4">
              <div>
                <h2 className="font-serif text-lg sm:text-xl font-medium text-[#132018]">
                  Firebase Revisions-Historie
                </h2>
                <p className="text-xs text-[#556358]">
                  Protokollierte Text-Speicherungen in Firestore (
                  <code>cms_revisions</code>) & Browser.
                </p>
              </div>

              <div className="space-y-2.5">
                {revisions.length === 0 ? (
                  <p className="text-xs text-[#6E7A72] py-4">
                    Noch keine Revisionen gespeichert.
                  </p>
                ) : (
                  revisions.map((rev) => (
                    <div
                      key={rev.id}
                      className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E6DFD3] space-y-1"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-semibold text-[#132018]">
                          {rev.commitMessage}
                        </span>
                        {rev.commitSha && (
                          <code className="text-[11px] px-2 py-0.5 rounded bg-white border border-[#E2DACE] text-[#132B1E]">
                            {rev.commitSha}
                          </code>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-[11px] text-[#6E7A72]">
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {new Date(rev.updatedAt).toLocaleString("de-DE")}
                        </span>
                        <span>von {rev.updatedBy}</span>
                        <span>{rev.changedKeysCount} aktive Anpassungen</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: FIREBASE & GITHUB SETUP */}
        {activeTab === "settings" && (
          <form
            onSubmit={handleSaveSetup}
            className="max-w-4xl mx-auto space-y-6"
          >
            {settingsSavedMsg && (
              <div className="p-4 rounded-2xl bg-emerald-950 text-emerald-100 border border-emerald-800 flex items-center gap-2.5 text-xs sm:text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{settingsSavedMsg}</span>
              </div>
            )}

            {/* Firebase Configuration Box */}
            <div className="bg-white rounded-2xl border border-[#E2DACE] p-5 sm:p-6 space-y-4">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#132B1E]" />
                <div>
                  <h2 className="font-serif text-lg sm:text-xl font-medium text-[#132018]">
                    1. Firebase Projekt-Konfiguration (Auth & Firestore)
                  </h2>
                  <p className="text-xs text-[#556358]">
                    Hinterlegen Sie hier Ihre Firebase Web-App-Zugangsdaten (oder
                    über <code>NEXT_PUBLIC_FIREBASE_*</code> in{" "}
                    <code>.env.local</code> / GitHub Secrets).
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#132018] mb-1">
                    Firebase API Key (apiKey)
                  </label>
                  <input
                    type="text"
                    value={fbApiKey}
                    onChange={(e) => setFbApiKey(e.target.value)}
                    placeholder="AIzaSy..."
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-[#FAF8F5] border border-[#E2DACE] text-[#132018]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#132018] mb-1">
                    Project ID (projectId)
                  </label>
                  <input
                    type="text"
                    value={fbProjectId}
                    onChange={(e) => setFbProjectId(e.target.value)}
                    placeholder="nabiota-cms"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-[#FAF8F5] border border-[#E2DACE] text-[#132018]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#132018] mb-1">
                    Auth Domain (authDomain)
                  </label>
                  <input
                    type="text"
                    value={fbAuthDomain}
                    onChange={(e) => setFbAuthDomain(e.target.value)}
                    placeholder="nabiota-cms.firebaseapp.com"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-[#FAF8F5] border border-[#E2DACE] text-[#132018]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#132018] mb-1">
                    App ID (appId)
                  </label>
                  <input
                    type="text"
                    value={fbAppId}
                    onChange={(e) => setFbAppId(e.target.value)}
                    placeholder="1:123456789:web:abcdef"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-[#FAF8F5] border border-[#E2DACE] text-[#132018]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#132018] mb-1">
                    Storage Bucket (optional)
                  </label>
                  <input
                    type="text"
                    value={fbStorageBucket}
                    onChange={(e) => setFbStorageBucket(e.target.value)}
                    placeholder="nabiota-cms.firebasestorage.app"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-[#FAF8F5] border border-[#E2DACE] text-[#132018]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#132018] mb-1">
                    Messaging Sender ID (optional)
                  </label>
                  <input
                    type="text"
                    value={fbMessagingSenderId}
                    onChange={(e) => setFbMessagingSenderId(e.target.value)}
                    placeholder="1234567890"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-[#FAF8F5] border border-[#E2DACE] text-[#132018]"
                  />
                </div>
              </div>
            </div>

            {/* GitHub Auto-Commit Configuration Box */}
            <div className="bg-white rounded-2xl border border-[#E2DACE] p-5 sm:p-6 space-y-4">
              <div className="flex items-center gap-2.5">
                <GitMerge className="w-5 h-5 text-[#8C6D2B]" />
                <div>
                  <h2 className="font-serif text-lg sm:text-xl font-medium text-[#132018]">
                    2. GitHub Auto-Commit & Push Verbindung
                  </h2>
                  <p className="text-xs text-[#556358]">
                    Ermöglicht direktes Committen & Pushen von{" "}
                    <code>src/data/cms-overrides.json</code> auf GitHub (auch
                    vom statischen ALL-INKL Webhosting aus).
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#132018] mb-1">
                    GitHub Owner
                  </label>
                  <input
                    type="text"
                    value={ghOwner}
                    onChange={(e) => setGhOwner(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-[#FAF8F5] border border-[#E2DACE] text-[#132018]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#132018] mb-1">
                    Repository Name
                  </label>
                  <input
                    type="text"
                    value={ghRepo}
                    onChange={(e) => setGhRepo(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-[#FAF8F5] border border-[#E2DACE] text-[#132018]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#132018] mb-1">
                    Branch
                  </label>
                  <input
                    type="text"
                    value={ghBranch}
                    onChange={(e) => setGhBranch(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-[#FAF8F5] border border-[#E2DACE] text-[#132018]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#132018] mb-1">
                  GitHub Personal Access Token (Fine-Grained PAT mit{" "}
                  <code>Contents: Read & Write</code>)
                </label>
                <input
                  type="password"
                  value={ghToken}
                  onChange={(e) => setGhToken(e.target.value)}
                  placeholder="github_pat_... oder ghp_..."
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-[#FAF8F5] border border-[#E2DACE] text-[#132018]"
                />
                <p className="text-[11px] text-[#6E7A72] mt-1">
                  Im lokalen Entwicklungsmodus (<code>next dev</code>) wird
                  automatisch die lokale Git-CLI genutzt, falls kein Token
                  eingetragen ist. Auf dem Live-Server nutzt das Admin-Portal
                  diesen Token für den GitHub-Push.
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#132B1E] hover:bg-[#1C3D2B] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  <Check className="w-4 h-4 text-[#ECCF96]" />
                  <span>Konfiguration speichern</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#E2DACE] py-4 px-6 text-center text-xs text-[#6E7A72]">
        NabiOta® Health Group Germany GmbH · Firebase CMS, GitHub Auto-Deploy &
        Druckportal
      </footer>
    </div>
  );
}
export const AdminPortal = AdminStationeryPanel;
