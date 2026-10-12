import { NextRequest, NextResponse } from "next/server";
import { loginAdmin } from "@/lib/admin-auth";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Bitte geben Sie E-Mail und Passwort ein." },
        { status: 400 }
      );
    }

    const result = await loginAdmin(email, password);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || "Ungültige Anmeldedaten." },
        { status: 401 }
      );
    }

    return NextResponse.json({ success: true, user: result.user });
  } catch (error) {
    console.error("Admin login error:", error);
    return NextResponse.json(
      { error: "Ein interner Fehler ist aufgetreten." },
      { status: 500 }
    );
  }
}
