import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAnalytics, isSupported as isAnalyticsSupported, type Analytics } from "firebase/analytics";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

export interface FirebaseClientConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId?: string;
  measurementId?: string;
}

const RUNTIME_CONFIG_STORAGE_KEY = "nabiota_firebase_runtime_config";

export const DEFAULT_FIREBASE_CONFIG: FirebaseClientConfig = {
  apiKey: "AIzaSyASEM7Hapu5o7drqeYL7zS_d8LlzFvJNzM",
  authDomain: "nabiota-health-group-cms.firebaseapp.com",
  projectId: "nabiota-health-group-cms",
  storageBucket: "nabiota-health-group-cms.firebasestorage.app",
  messagingSenderId: "218201285404",
  appId: "1:218201285404:web:aa825bcaa403d957ba10d9",
  measurementId: "G-NBRHJ91E0G",
};

export function getEnvFirebaseConfig(): FirebaseClientConfig | null {
  const apiKey =
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY?.trim() ||
    DEFAULT_FIREBASE_CONFIG.apiKey;
  const authDomain =
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN?.trim() ||
    DEFAULT_FIREBASE_CONFIG.authDomain;
  const projectId =
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID?.trim() ||
    DEFAULT_FIREBASE_CONFIG.projectId;
  const storageBucket =
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET?.trim() ||
    DEFAULT_FIREBASE_CONFIG.storageBucket ||
    "";
  const messagingSenderId =
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID?.trim() ||
    DEFAULT_FIREBASE_CONFIG.messagingSenderId ||
    "";
  const appId =
    process.env.NEXT_PUBLIC_FIREBASE_APP_ID?.trim() ||
    DEFAULT_FIREBASE_CONFIG.appId ||
    "";
  const measurementId =
    process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID?.trim() ||
    DEFAULT_FIREBASE_CONFIG.measurementId ||
    "";

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
    measurementId,
  };
}

export function getRuntimeFirebaseConfig(): FirebaseClientConfig | null {
  if (typeof window !== "undefined") {
    try {
      const raw = window.localStorage.getItem(RUNTIME_CONFIG_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<FirebaseClientConfig>;
        if (parsed.apiKey && parsed.projectId) {
          return {
            apiKey: parsed.apiKey.trim(),
            authDomain:
              parsed.authDomain?.trim() ||
              `${parsed.projectId.trim()}.firebaseapp.com`,
            projectId: parsed.projectId.trim(),
            storageBucket:
              parsed.storageBucket?.trim() ||
              `${parsed.projectId.trim()}.firebasestorage.app`,
            messagingSenderId: parsed.messagingSenderId?.trim() || "",
            appId: parsed.appId?.trim() || "",
            measurementId: parsed.measurementId?.trim() || "",
          };
        }
      }
    } catch {
      // ignore storage errors and fall back to default/env config
    }
  }

  return getEnvFirebaseConfig();
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

let cachedAnalytics: Analytics | null = null;

export function getFirebaseApp(): FirebaseApp | null {
  const cfg = getRuntimeFirebaseConfig();
  if (!cfg) return null;

  try {
    const app = getApps().length > 0 ? getApp() : initializeApp(cfg);
    if (typeof window !== "undefined" && !cachedAnalytics && cfg.measurementId) {
      void isAnalyticsSupported()
        .then((supported) => {
          if (supported && !cachedAnalytics) {
            cachedAnalytics = getAnalytics(app);
          }
        })
        .catch(() => {
          // ignore analytics init errors in restricted browsers
        });
    }
    return app;
  } catch {
    return null;
  }
}

export function getFirebaseAnalyticsClient(): Analytics | null {
  return cachedAnalytics;
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

