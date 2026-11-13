import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

export interface FirebaseClientConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId?: string;
}

const RUNTIME_CONFIG_STORAGE_KEY = "nabiota_firebase_runtime_config";

export function getEnvFirebaseConfig(): FirebaseClientConfig | null {
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY?.trim() || "";
  const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN?.trim() || "";
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID?.trim() || "";
  const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET?.trim() || "";
  const messagingSenderId =
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID?.trim() || "";
  const appId = process.env.NEXT_PUBLIC_FIREBASE_APP_ID?.trim() || "";

  if (!apiKey || !projectId) {
    return null;
  }

  return {
    apiKey,
    authDomain: authDomain || `${projectId}.firebaseapp.com`,
    projectId,
    storageBucket: storageBucket || `${projectId}.firebasestorage.app`,
    messagingSenderId,
    appId,
  };
}

export function getRuntimeFirebaseConfig(): FirebaseClientConfig | null {
  const envCfg = getEnvFirebaseConfig();
  if (envCfg) return envCfg;

  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(RUNTIME_CONFIG_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<FirebaseClientConfig>;
    if (!parsed.apiKey || !parsed.projectId) return null;
    return {
      apiKey: parsed.apiKey.trim(),
      authDomain:
        parsed.authDomain?.trim() || `${parsed.projectId.trim()}.firebaseapp.com`,
      projectId: parsed.projectId.trim(),
      storageBucket:
        parsed.storageBucket?.trim() ||
        `${parsed.projectId.trim()}.firebasestorage.app`,
      messagingSenderId: parsed.messagingSenderId?.trim() || "",
      appId: parsed.appId?.trim() || "",
    };
  } catch {
    return null;
  }
}

export function saveRuntimeFirebaseConfig(config: FirebaseClientConfig | null): void {
  if (typeof window === "undefined") return;
  try {
    if (!config || !config.apiKey || !config.projectId) {
      window.localStorage.removeItem(RUNTIME_CONFIG_STORAGE_KEY);
    } else {
      window.localStorage.setItem(RUNTIME_CONFIG_STORAGE_KEY, JSON.stringify(config));
    }
  } catch {
    // ignore storage errors
  }
}

export function isFirebaseConfigured(): boolean {
  return getRuntimeFirebaseConfig() !== null;
}

export function getFirebaseApp(): FirebaseApp | null {
  const cfg = getRuntimeFirebaseConfig();
  if (!cfg) return null;

  try {
    if (getApps().length > 0) {
      return getApp();
    }
    return initializeApp(cfg);
  } catch {
    return null;
  }
}

export function getFirebaseAuthClient(): Auth | null {
  const app = getFirebaseApp();
  if (!app) return null;
  try {
    return getAuth(app);
  } catch {
    return null;
  }
}

export function getFirebaseFirestoreClient(): Firestore | null {
  const app = getFirebaseApp();
  if (!app) return null;
  try {
    return getFirestore(app);
  } catch {
    return null;
  }
}

