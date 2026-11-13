import {
  doc,
  getDoc,
  setDoc,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { getFirebaseFirestoreClient } from "@/lib/firebase/config";
import {
  type CmsOverridesDocument,
  normalizeOverridesDocument,
} from "@/lib/cms/cms-engine";

export interface CmsRevisionEntry {
  id: string;
  updatedAt: string;
  updatedBy: string;
  commitMessage: string;
  commitSha?: string;
  commitUrl?: string;
  changedKeysCount: number;
}

export interface GitHubSyncConfig {
  owner: string;
  repo: string;
  branch: string;
  token: string;
}

const CMS_COLLECTION = "cms_config";
const OVERRIDES_DOC_ID = "site_overrides";
const GITHUB_DOC_ID = "github_integration";
const REVISIONS_COLLECTION = "cms_revisions";

const LOCAL_REVISIONS_KEY = "nabiota_cms_revisions_local";

export async function fetchCmsOverridesFromFirestore(): Promise<CmsOverridesDocument | null> {
  const db = getFirebaseFirestoreClient();
  if (!db) return null;

  try {
    const snap = await getDoc(doc(db, CMS_COLLECTION, OVERRIDES_DOC_ID));
    if (!snap.exists()) return null;
    return normalizeOverridesDocument(snap.data());
  } catch {
    return null;
  }
}

export async function saveCmsOverridesToFirestore(
  overridesDoc: CmsOverridesDocument,
  meta: {
    commitMessage: string;
    commitSha?: string;
    commitUrl?: string;
    changedKeysCount: number;
  }
): Promise<{ savedToFirestore: boolean; revisionId?: string }> {
  const revisionEntry: CmsRevisionEntry = {
    id: `rev-${Date.now()}`,
    updatedAt: overridesDoc.updatedAt,
    updatedBy: overridesDoc.updatedBy,
    commitMessage: meta.commitMessage,
    commitSha: meta.commitSha,
    commitUrl: meta.commitUrl,
    changedKeysCount: meta.changedKeysCount,
  };

  // Always record in local revision history as well
  if (typeof window !== "undefined") {
    try {
      const existingRaw = window.localStorage.getItem(LOCAL_REVISIONS_KEY);
      const list: CmsRevisionEntry[] = existingRaw ? JSON.parse(existingRaw) : [];
      const next = [revisionEntry, ...list].slice(0, 30);
      window.localStorage.setItem(LOCAL_REVISIONS_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
  }

  const db = getFirebaseFirestoreClient();
  if (!db) {
    return { savedToFirestore: false, revisionId: revisionEntry.id };
  }

  try {
    await setDoc(doc(db, CMS_COLLECTION, OVERRIDES_DOC_ID), {
      version: overridesDoc.version,
      updatedAt: overridesDoc.updatedAt,
      updatedBy: overridesDoc.updatedBy,
      overrides: overridesDoc.overrides,
    });

    const revRef = await addDoc(collection(db, REVISIONS_COLLECTION), {
      updatedAt: overridesDoc.updatedAt,
      updatedBy: overridesDoc.updatedBy,
      commitMessage: meta.commitMessage,
      commitSha: meta.commitSha || "",
      commitUrl: meta.commitUrl || "",
      changedKeysCount: meta.changedKeysCount,
    });

    return { savedToFirestore: true, revisionId: revRef.id };
  } catch {
    return { savedToFirestore: false, revisionId: revisionEntry.id };
  }
}

export async function fetchCmsRevisionHistory(maxItems = 15): Promise<CmsRevisionEntry[]> {
  const db = getFirebaseFirestoreClient();
  if (db) {
    try {
      const q = query(
        collection(db, REVISIONS_COLLECTION),
        orderBy("updatedAt", "desc"),
        limit(maxItems)
      );
      const snap = await getDocs(q);
      if (!snap.empty) {
        return snap.docs.map((d) => {
          const data = d.data() as Omit<CmsRevisionEntry, "id">;
          return {
            id: d.id,
            updatedAt: data.updatedAt || "",
            updatedBy: data.updatedBy || "",
            commitMessage: data.commitMessage || "",
            commitSha: data.commitSha,
            commitUrl: data.commitUrl,
            changedKeysCount: data.changedKeysCount || 0,
          };
        });
      }
    } catch {
      // fall back to local revisions
    }
  }

  if (typeof window !== "undefined") {
    try {
      const raw = window.localStorage.getItem(LOCAL_REVISIONS_KEY);
      if (raw) {
        return (JSON.parse(raw) as CmsRevisionEntry[]).slice(0, maxItems);
      }
    } catch {
      // ignore
    }
  }

  return [];
}

export async function fetchGitHubConfigFromFirestore(): Promise<Partial<GitHubSyncConfig> | null> {
  const db = getFirebaseFirestoreClient();
  if (!db) return null;

  try {
    const snap = await getDoc(doc(db, CMS_COLLECTION, GITHUB_DOC_ID));
    if (!snap.exists()) return null;
    return snap.data() as Partial<GitHubSyncConfig>;
  } catch {
    return null;
  }
}

export async function saveGitHubConfigToFirestore(
  config: GitHubSyncConfig
): Promise<boolean> {
  const db = getFirebaseFirestoreClient();
  if (!db) return false;

  try {
    await setDoc(doc(db, CMS_COLLECTION, GITHUB_DOC_ID), {
      owner: config.owner,
      repo: config.repo,
      branch: config.branch,
      token: config.token,
      updatedAt: new Date().toISOString(),
    });
    return true;
  } catch {
    return false;
  }
}

