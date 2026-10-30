import { cookies } from "next/headers";
import { createClient } from "@/lib/supabase/server";

export interface AdminUser {
  email: string;
  source: "supabase" | "env";
}

const COOKIE_NAME = "nabiota_admin_session";

export async function getAdminSession(): Promise<AdminUser | null> {
  // 1. Check Supabase session if configured
  try {
    const supabase = await createClient();
    if (supabase) {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user && user.email) {
        return { email: user.email, source: "supabase" };
      }
    }
  } catch {
    // Supabase check failed or not reachable
  }

  // 2. Check fallback session cookie
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get(COOKIE_NAME)?.value;
    if (sessionCookie) {
      // Decode simple session: email:timestamp
      const [email] = sessionCookie.split("::");
      if (email) {
        return { email, source: "env" };
      }
    }
  } catch {
    // Cookie store error
  }

  return null;
}

export async function loginAdmin(
  email: string,
  pass: string
): Promise<{ success: boolean; error?: string; user?: AdminUser }> {
  const cleanEmail = email.trim().toLowerCase();

  // Try Supabase Auth first if configured
  const supabase = await createClient();
  if (supabase) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: cleanEmail,
      password: pass,
    });
    if (!error && data.user && data.user.email) {
      const cookieStore = await cookies();
      cookieStore.set(COOKIE_NAME, `${data.user.email}::${Date.now()}`, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
      });
      return { success: true, user: { email: data.user.email, source: "supabase" } };
    }
  }

  // Check env or credentials (disallow default password in production)
  const isProd = process.env.NODE_ENV === "production";
  if (isProd && !process.env.ADMIN_PASSWORD) {
    return {
      success: false,
      error: "Admin-Zugang in der Produktionsumgebung erfordert die Konfiguration von ADMIN_PASSWORD.",
    };
  }

  const validEmail = (process.env.ADMIN_EMAIL || "admin@nabiota-health-group.de").toLowerCase();
  const validPassword = process.env.ADMIN_PASSWORD || "admin123";

  if (cleanEmail === validEmail && pass === validPassword) {
    const cookieStore = await cookies();
    cookieStore.set(COOKIE_NAME, `${cleanEmail}::${Date.now()}`, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });
    return { success: true, user: { email: cleanEmail, source: "env" } };
  }

  return { success: false, error: "Ungültige E-Mail-Adresse oder falsches Passwort." };
}

export async function logoutAdmin(): Promise<void> {
  try {
    const supabase = await createClient();
    if (supabase) {
      await supabase.auth.signOut();
    }
  } catch {
    // ignore
  }

  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}
