import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirebaseAuthClient } from "@/lib/firebase/config";

export interface AuthenticatedAdmin {
  email: string;
  uid: string;
  provider: "firebase";
}

function clearLegacySessionStorage() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem("nabiota_admin_email");
    window.localStorage.removeItem("nabiota_admin_provider");
  } catch {
    // ignore storage cleanup errors
  }
}

export async function signInAdmin(
  email: string,
  password: string
): Promise<{ success: boolean; admin?: AuthenticatedAdmin; error?: string }> {
  const cleanEmail = email.trim().toLowerCase();
  const auth = getFirebaseAuthClient();

  if (!auth) {
    return {
      success: false,
      error: "Authentifizierungsdienst ist derzeit nicht verfügbar.",
    };
  }

  try {
    const credential = await signInWithEmailAndPassword(auth, cleanEmail, password);
    const userEmail = credential.user.email || cleanEmail;
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

    if (
      code === "auth/invalid-credential" ||
      code === "auth/wrong-password" ||
      code === "auth/user-not-found" ||
      code === "auth/invalid-email"
    ) {
      return {
        success: false,
        error: "Ungültige E-Mail-Adresse oder falsches Passwort.",
      };
    }

    if (code === "auth/too-many-requests") {
      return {
        success: false,
        error: "Zu viele Anmeldeversuche. Bitte versuchen Sie es später erneut.",
      };
    }

    return {
      success: false,
      error: "Anmeldung fehlgeschlagen. Bitte prüfen Sie Ihre Zugangsdaten.",
    };
  }
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
      error: "Authentifizierungsdienst ist derzeit nicht verfügbar.",
    };
  }

  try {
    const provider = new GoogleAuthProvider();
    const credential = await signInWithPopup(auth, provider);
    const userEmail = credential.user.email || "";
    if (!userEmail) {
      await signOut(auth).catch(() => {});
      return {
        success: false,
        error: "Das Google-Konto enthält keine gültige E-Mail-Adresse.",
      };
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
  clearLegacySessionStorage();
  const auth = getFirebaseAuthClient();

  if (!auth) {
    onChange(null);
    return () => {};
  }

  return onAuthStateChanged(auth, (user) => {
    if (user?.email) {
      onChange({
        email: user.email,
        uid: user.uid,
        provider: "firebase",
      });
      return;
    }

    onChange(null);
  });
}

export async function signOutAdminSession(): Promise<void> {
  clearLegacySessionStorage();
  const auth = getFirebaseAuthClient();
  if (auth) {
    await signOut(auth).catch(() => {});
  }
}
