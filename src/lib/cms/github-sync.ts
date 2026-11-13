import { type CmsOverridesDocument } from "@/lib/cms/cms-engine";
import {
  type GitHubSyncConfig,
  fetchGitHubConfigFromFirestore,
  saveGitHubConfigToFirestore,
} from "@/lib/firebase/cms-firestore";

export interface GitHubCommitResult {
  success: boolean;
  mode: "github-rest-api" | "local-git-cli" | "local-file-only";
  commitSha?: string;
  commitUrl?: string;
  error?: string;
}

export interface GitHubWorkflowRunSummary {
  id: number;
  name: string;
  headSha: string;
  status: string;
  conclusion: string | null;
  htmlUrl: string;
  createdAt: string;
}

const DEFAULT_OWNER = "Arkadii-Redozubov-personal";
const DEFAULT_REPO = "Holding-NabiOta-Health-Group-Germany";
const DEFAULT_BRANCH = "main";
const TARGET_FILE_PATH = "src/data/cms-overrides.json";
const LOCAL_GH_CONFIG_KEY = "nabiota_github_sync_config";

function encodeUtf8Base64(text: string): string {
  const bytes = new TextEncoder().encode(text);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export function getLocalGitHubSyncConfig(): GitHubSyncConfig {
  const base: GitHubSyncConfig = {
    owner: process.env.NEXT_PUBLIC_GITHUB_OWNER || DEFAULT_OWNER,
    repo: process.env.NEXT_PUBLIC_GITHUB_REPO || DEFAULT_REPO,
    branch: process.env.NEXT_PUBLIC_GITHUB_BRANCH || DEFAULT_BRANCH,
    token: process.env.NEXT_PUBLIC_GITHUB_TOKEN || "",
  };

  if (typeof window === "undefined") return base;

  try {
    const raw = window.localStorage.getItem(LOCAL_GH_CONFIG_KEY);
    if (!raw) return base;
    const parsed = JSON.parse(raw) as Partial<GitHubSyncConfig>;
    return {
      owner: parsed.owner?.trim() || base.owner,
      repo: parsed.repo?.trim() || base.repo,
      branch: parsed.branch?.trim() || base.branch,
      token: parsed.token?.trim() || base.token,
    };
  } catch {
    return base;
  }
}

export async function resolveGitHubSyncConfig(): Promise<GitHubSyncConfig> {
  const local = getLocalGitHubSyncConfig();
  if (local.token) return local;

  const remote = await fetchGitHubConfigFromFirestore();
  if (remote) {
    return {
      owner: remote.owner?.trim() || local.owner,
      repo: remote.repo?.trim() || local.repo,
      branch: remote.branch?.trim() || local.branch,
      token: remote.token?.trim() || local.token,
    };
  }

  return local;
}

export async function persistGitHubSyncConfig(config: GitHubSyncConfig): Promise<void> {
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(LOCAL_GH_CONFIG_KEY, JSON.stringify(config));
    } catch {
      // ignore
    }
  }
  await saveGitHubConfigToFirestore(config);
}

export async function commitAndPushOverridesToGitHub(
  overridesDoc: CmsOverridesDocument,
  commitMessage: string
): Promise<GitHubCommitResult> {
  const ghConfig = await resolveGitHubSyncConfig();
  const formattedJson = `${JSON.stringify(overridesDoc, null, 2)}\n`;

  // 1. If a GitHub PAT token is configured, commit directly via GitHub Contents REST API
  //    (Works on static ALL-INKL hosting as well as local dev!)
  if (ghConfig.token) {
    try {
      const apiBase = `https://api.github.com/repos/${encodeURIComponent(
        ghConfig.owner
      )}/${encodeURIComponent(ghConfig.repo)}/contents/${TARGET_FILE_PATH}`;

      const headers: Record<string, string> = {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${ghConfig.token}`,
        "X-GitHub-Api-Version": "2022-11-28",
      };

      // Fetch current file SHA on target branch
      let existingSha: string | undefined;
      const getRes = await fetch(
        `${apiBase}?ref=${encodeURIComponent(ghConfig.branch)}`,
        {
          method: "GET",
          headers,
          cache: "no-store",
        }
      );

      if (getRes.ok) {
        const fileData = (await getRes.json()) as { sha?: string };
        existingSha = fileData.sha;
      } else if (getRes.status !== 404) {
        const errBody = await getRes.text();
        throw new Error(`GitHub GET status ${getRes.status}: ${errBody}`);
      }

      const putRes = await fetch(apiBase, {
        method: "PUT",
        headers: {
          ...headers,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: commitMessage,
          content: encodeUtf8Base64(formattedJson),
          branch: ghConfig.branch,
          ...(existingSha ? { sha: existingSha } : {}),
        }),
      });

      if (!putRes.ok) {
        const errJson = (await putRes.json().catch(() => ({}))) as {
          message?: string;
        };
        throw new Error(
          errJson.message || `GitHub PUT fehlgeschlagen (${putRes.status}).`
        );
      }

      const putData = (await putRes.json()) as {
        commit?: { sha?: string; html_url?: string };
      };

      // Also sync local file in dev if running locally
      await fetch("/api/admin/cms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          overridesDoc,
          commitMessage,
          pushToGit: false,
        }),
      }).catch(() => {});

      return {
        success: true,
        mode: "github-rest-api",
        commitSha: putData.commit?.sha?.slice(0, 7),
        commitUrl: putData.commit?.html_url,
      };
    } catch (err: unknown) {
      return {
        success: false,
        mode: "github-rest-api",
        error:
          err instanceof Error
            ? err.message
            : "Fehler beim direkten GitHub-API-Commit.",
      };
    }
  }

  // 2. Fallback: Local Dev Server Git CLI route (/api/admin/cms)
  try {
    const res = await fetch("/api/admin/cms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        overridesDoc,
        commitMessage,
        pushToGit: true,
      }),
    });

    const contentType = res.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const data = (await res.json()) as GitHubCommitResult;
      return data;
    }
  } catch {
    // Running on static host without GitHub token configured yet
  }

  return {
    success: false,
    mode: "github-rest-api",
    error:
      "Kein GitHub Personal Access Token konfiguriert. Änderungen wurden in Firebase / Browser gespeichert — bitte hinterlegen Sie im Tab 'Firebase & GitHub Setup' einen GitHub Token für automatische Commits.",
  };
}

export async function fetchLatestGitHubDeployRuns(
  perPage = 4
): Promise<GitHubWorkflowRunSummary[]> {
  const cfg = getLocalGitHubSyncConfig();
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
    };
    if (cfg.token) {
      headers.Authorization = `Bearer ${cfg.token}`;
    }

    const res = await fetch(
      `https://api.github.com/repos/${encodeURIComponent(
        cfg.owner
      )}/${encodeURIComponent(cfg.repo)}/actions/runs?per_page=${perPage}`,
      {
        headers,
        cache: "no-store",
      }
    );

    if (!res.ok) return [];
    const data = (await res.json()) as {
      workflow_runs?: Array<{
        id: number;
        name?: string;
        head_sha?: string;
        status?: string;
        conclusion?: string | null;
        html_url?: string;
        created_at?: string;
      }>;
    };

    return (data.workflow_runs || []).map((r) => ({
      id: r.id,
      name: r.name || "Deploy to ALL-INKL",
      headSha: (r.head_sha || "").slice(0, 7),
      status: r.status || "unknown",
      conclusion: r.conclusion ?? null,
      htmlUrl: r.html_url || "",
      createdAt: r.created_at || "",
    }));
  } catch {
    return [];
  }
}

