"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Lock,
  Mail,
  ArrowRight,
  AlertCircle,
  Loader2,
  ShieldCheck,
  Settings,
  Check,
} from "@/lib/icons";
import { Logo } from "@/components/ui/Logo";
import {
  signInAdmin,
  signInAdminWithGoogle,
} from "@/lib/firebase/auth";
import {
  getRuntimeFirebaseConfig,
  saveRuntimeFirebaseConfig,
  isFirebaseConfigured,
} from "@/lib/firebase/config";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [firebaseReady, setFirebaseReady] = useState(() => isFirebaseConfigured());
  const [showConfigDrawer, setShowConfigDrawer] = useState(false);
  const [fbApiKey, setFbApiKey] = useState(
    () => getRuntimeFirebaseConfig()?.apiKey || ""
  );
  const [fbProjectId, setFbProjectId] = useState(
    () => getRuntimeFirebaseConfig()?.projectId || ""
  );
  const [fbAuthDomain, setFbAuthDomain] = useState(
    () => getRuntimeFirebaseConfig()?.authDomain || ""
  );
  const [fbAppId, setFbAppId] = useState(
    () => getRuntimeFirebaseConfig()?.appId || ""
  );
  const [configSaved, setConfigSaved] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const result = await signInAdmin(email, password);
      if (!result.success) {
        throw new Error(result.error || "Anmeldung fehlgeschlagen.");
      }

      router.push("/admin");
      router.refresh();
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "Ein Fehler ist aufgetreten."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError(null);
    setLoading(true);
    try {
      const result = await signInAdminWithGoogle();
      if (!result.success) {
        throw new Error(result.error || "Google-Anmeldung fehlgeschlagen.");
      }
      router.push("/admin");
      router.refresh();
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "Google-Anmeldung fehlgeschlagen."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSaveQuickFirebase = (e: React.FormEvent) => {
    e.preventDefault();
    if (fbApiKey.trim() && fbProjectId.trim()) {
      saveRuntimeFirebaseConfig({
        apiKey: fbApiKey.trim(),
        projectId: fbProjectId.trim(),
        authDomain:
          fbAuthDomain.trim() || `${fbProjectId.trim()}.firebaseapp.com`,
        appId: fbAppId.trim(),
      });
      setFirebaseReady(true);
      setConfigSaved(true);
      setTimeout(() => setConfigSaved(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F1EA] flex flex-col justify-center py-12 sm:px-6 lg:px-8 text-[#132018]">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center px-4">
        <div className="flex justify-center mb-5">
          <Logo variant="dark" size="md" locale="de" />
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#132B1E] text-[#ECCF96] text-xs font-semibold mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>
            {firebaseReady
              ? "Firebase Auth & CMS verbunden"
              : "Firebase CMS & Verwaltungsportal"}
          </span>
        </div>
        <h1 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#132018]">
          Verwaltungsportal · Admin
        </h1>
        <p className="mt-1.5 text-xs sm:text-sm text-[#556358]">
          Seiteninhalte bearbeiten, automatisch auf GitHub pushen & Druckzentrum
        </p>
      </div>

      <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-white py-8 px-6 rounded-2xl border border-[#E2DACE] sm:px-10 space-y-5">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {error && (
              <div className="rounded-xl bg-red-50 p-3.5 border border-red-200 text-xs sm:text-sm text-red-700 flex items-start gap-2.5">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-600" />
                <span>{error}</span>
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-wider text-[#3C4A40] mb-1.5"
              >
                E-Mail-Adresse
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#7A867E]">
                  <Mail className="h-4 w-4" />
                </div>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@nabiota-health-group.de"
                  className="block w-full pl-10 pr-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#E2DACE] rounded-xl text-[#132018] placeholder-[#7A867E] focus:outline-none focus:border-[#132B1E] transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs font-semibold uppercase tracking-wider text-[#3C4A40] mb-1.5"
              >
                Passwort
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#7A867E]">
                  <Lock className="h-4 w-4" />
                </div>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="block w-full pl-10 pr-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#E2DACE] rounded-xl text-[#132018] placeholder-[#7A867E] focus:outline-none focus:border-[#132B1E] transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-[#132B1E] hover:bg-[#1C3D2B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BEA06B] transition-colors disabled:opacity-60 cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Wird angemeldet...</span>
                </>
              ) : (
                <>
                  <span>Anmelden</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {firebaseReady && (
            <div className="pt-2 border-t border-[#EFEAE0]">
              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-[#132018] bg-[#FAF8F5] hover:bg-[#F0EAE0] border border-[#E2DACE] transition-colors cursor-pointer"
              >
                <span>Mit Google (Firebase Auth) anmelden</span>
              </button>
            </div>
          )}

          {/* Expandable Firebase Quick-Setup */}
          <div className="pt-2 border-t border-[#EFEAE0]">
            <button
              type="button"
              onClick={() => setShowConfigDrawer((v) => !v)}
              className="w-full flex items-center justify-between text-xs font-medium text-[#556358] hover:text-[#132018] cursor-pointer"
            >
              <span className="inline-flex items-center gap-1.5">
                <Settings className="w-3.5 h-3.5 text-[#8C6D2B]" />
                <span>Firebase Verbindungsdaten hinterlegen</span>
              </span>
              <span>{showConfigDrawer ? "Schließen" : "Öffnen"}</span>
            </button>

            {showConfigDrawer && (
              <form
                onSubmit={handleSaveQuickFirebase}
                className="mt-3 space-y-2.5 bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E2DACE]"
              >
                <input
                  type="text"
                  value={fbApiKey}
                  onChange={(e) => setFbApiKey(e.target.value)}
                  placeholder="Firebase apiKey (AIzaSy...)"
                  className="w-full px-3 py-1.5 text-xs rounded-lg bg-white border border-[#E2DACE]"
                />
                <input
                  type="text"
                  value={fbProjectId}
                  onChange={(e) => setFbProjectId(e.target.value)}
                  placeholder="Firebase projectId"
                  className="w-full px-3 py-1.5 text-xs rounded-lg bg-white border border-[#E2DACE]"
                />
                <input
                  type="text"
                  value={fbAuthDomain}
                  onChange={(e) => setFbAuthDomain(e.target.value)}
                  placeholder="authDomain (optional)"
                  className="w-full px-3 py-1.5 text-xs rounded-lg bg-white border border-[#E2DACE]"
                />
                <input
                  type="text"
                  value={fbAppId}
                  onChange={(e) => setFbAppId(e.target.value)}
                  placeholder="appId (optional)"
                  className="w-full px-3 py-1.5 text-xs rounded-lg bg-white border border-[#E2DACE]"
                />
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#132B1E] text-white text-xs font-semibold cursor-pointer"
                >
                  <Check className="w-3.5 h-3.5 text-[#ECCF96]" />
                  <span>
                    {configSaved
                      ? "Firebase gespeichert!"
                      : "Firebase-Daten speichern"}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-[#6E7A72]">
          <p>© {new Date().getFullYear()} NabiOta® Health Group Germany GmbH</p>
        </div>
      </div>
    </div>
  );
}
