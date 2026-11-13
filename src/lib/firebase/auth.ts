import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirebaseAuthClient, isFirebaseConfigured } from "@/lib/firebase/config";

export interface AuthenticatedAdmin {
  email: string;
  uid: string;
  provider: "firebase" | "local-dev";
}

const SESSION_EMAIL_KEY = "nabiota_admin_email";
const SESSION_PROVIDER_KEY = "nabiota_admin_provider";
const INITIAL_ADMIN_EMAIL = "admin@nabiota-health-group-germany.de";
const INITIAL_ADMIN_PASS = "NabiOta-Admin-2026!";

export async function signInAdmin(
  email: string,
  password: string
): Promise<{ success: boolean; admin?: AuthenticatedAdmin; error?: string }> {
  const cleanEmail = email.trim().toLowerCase();
  const isInitialBootstrapAdmin =
    cleanEmail === INITIAL_ADMIN_EMAIL && password === INITIAL_ADMIN_PASS;

  // 1. Primary: Firebase Authentication when configured
  const auth = getFirebaseAuthClient();
  if (auth) {
    try {
      const credential = await signInWithEmailAndPassword(auth, cleanEmail, password);
      const userEmail = credential.user.email || cleanEmail;
      if (typeof window !== "undefined") {
        window.localStorage.setItem(SESSION_EMAIL_KEY, userEmail);
        window.localStorage.setItem(SESSION_PROVIDER_KEY, "firebase");
      }
      return {
        success: true,
        admin: {
          email: userEmail,
          uid: credential.user.uid,
          provider: "firebase",
        },
      };
    } catch (err: unknown) {
      const code =
        err && typeof err === "object" && "code" in err
          ? String((err as { code?: string }).code)
          : "";

      // Auto-provision initial admin in Firebase Auth on first login if Email/Password provider is enabled
      if (
        isInitialBootstrapAdmin &&
        (code === "auth/user-not-found" || code === "auth/invalid-credential")
      ) {
        try {
          const created = await createUserWithEmailAndPassword(
            auth,
            cleanEmail,
            password
          );
          const createdEmail = created.user.email || cleanEmail;
          if (typeof window !== "undefined") {
            window.localStorage.setItem(SESSION_EMAIL_KEY, createdEmail);
            window.localStorage.setItem(SESSION_PROVIDER_KEY, "firebase");
          }
          return {
            success: true,
            admin: {
              email: createdEmail,
              uid: created.user.uid,
              provider: "firebase",
            },
          };
        } catch {
          // If user already exists with a different password or Email/Password is not enabled yet, continue below
        }
      }

      if (
        !isInitialBootstrapAdmin &&
        (code === "auth/invalid-credential" ||
          code === "auth/wrong-password" ||
          code === "auth/user-not-found")
      ) {
        return {
          success: false,
          error: "Ungültige Firebase E-Mail-Adresse oder falsches Passwort.",
        };
      }
    }
  }

  // 2. Initial bootstrap admin fallback (works on static export even before Firebase Auth Email/Password is toggled on)
  if (isInitialBootstrapAdmin) {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(SESSION_EMAIL_KEY, cleanEmail);
      window.localStorage.setItem(SESSION_PROVIDER_KEY, "local-dev");
    }
    return {
      success: true,
      admin: {
        email: cleanEmail,
        uid: `local-${cleanEmail}`,
        provider: "local-dev",
      },
    };
  }

  // 3. Local development / server API route fallback
  try {
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: cleanEmail, password }),
    });

    const contentType = res.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const data = await res.json();
      if (!res.ok) {
        return {
          success: false,
          error: data.error || "Anmeldung fehlgeschlagen.",
        };
      }

      const resolvedEmail = data.user?.email || cleanEmail;
      if (typeof window !== "undefined") {
        window.localStorage.setItem(SESSION_EMAIL_KEY, resolvedEmail);
        window.localStorage.setItem(SESSION_PROVIDER_KEY, "local-dev");
      }
      return {
        success: true,
        admin: {
          email: resolvedEmail,
          uid: `local-${resolvedEmail}`,
          provider: "local-dev",
        },
      };
    }
  } catch {
    // Static host without API route
  }

  return {
    success: false,
    error: isFirebaseConfigured()
      ? "Firebase-Anmeldung fehlgeschlagen. Bitte prüfen Sie Ihre Zugangsdaten."
      : "Firebase ist noch nicht konfiguriert. Bitte tragen Sie Ihre Firebase-Projektdaten ein.",
  };
}

export async function signInAdminWithGoogle(): Promise<{
  success: boolean;
  admin?: AuthenticatedAdmin;
  error?: string;
}> {
  const auth = getFirebaseAuthClient();
  if (!auth) {
    return {
      success: false,
      error: "Firebase ist noch nicht konfiguriert. Bitte hinterlegen Sie zuerst die Firebase-Konfiguration.",
    };
  }

  try {
    const provider = new GoogleAuthProvider();
    const credential = await signInWithPopup(auth, provider);
    const userEmail = credential.user.email || "admin@nabiota-health-group.de";
    if (typeof window !== "undefined") {
      window.localStorage.setItem(SESSION_EMAIL_KEY, userEmail);
      window.localStorage.setItem(SESSION_PROVIDER_KEY, "firebase");
    }
    return {
      success: true,
      admin: {
        email: userEmail,
        uid: credential.user.uid,
        provider: "firebase",
      },
    };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Google-Anmeldung fehlgeschlagen.",
    };
  }
}

export function subscribeAdminSession(
  onChange: (admin: AuthenticatedAdmin | null) => void
): () => void {
  const auth = getFirebaseAuthClient();

  if (auth) {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user?.email) {
        if (typeof window !== "undefined") {
          window.localStorage.setItem(SESSION_EMAIL_KEY, user.email);
          window.localStorage.setItem(SESSION_PROVIDER_KEY, "firebase");
        }
        onChange({
          email: user.email,
          uid: user.uid,
          provider: "firebase",
        });
        return;
      }

      // Check if logged in via local dev fallback
      if (typeof window !== "undefined") {
        const storedEmail = window.localStorage.getItem(SESSION_EMAIL_KEY);
        const storedProvider = window.localStorage.getItem(SESSION_PROVIDER_KEY);
        if (storedEmail && storedProvider === "local-dev") {
          onChange({
            email: storedEmail,
            uid: `local-${storedEmail}`,
            provider: "local-dev",
          });
          return;
        }
      }

      onChange(null);
    });
    return unsubscribe;
  }

  if (typeof window !== "undefined") {
    const storedEmail = window.localStorage.getItem(SESSION_EMAIL_KEY);
    if (storedEmail) {
      onChange({
        email: storedEmail,
        uid: `local-${storedEmail}`,
        provider: "local-dev",
      });
    } else {
      onChange(null);
    }
  } else {
    onChange(null);
  }

  return () => {};
}

export async function signOutAdminSession(): Promise<void> {
  const auth = getFirebaseAuthClient();
  if (auth) {
    await signOut(auth).catch(() => {});
  }
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(SESSION_EMAIL_KEY);
    window.localStorage.removeItem(SESSION_PROVIDER_KEY);
  }
  await fetch("/api/admin/logout", { method: "POST" }).catch(() => {});
}

