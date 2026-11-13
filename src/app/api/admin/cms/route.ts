import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { execFileSync } from "child_process";
import { normalizeOverridesDocument } from "@/lib/cms/cms-engine";
import { getEnvFirebaseConfig } from "@/lib/firebase/config";

async function verifyFirebaseIdToken(idToken: string): Promise<boolean> {
  const cfg = getEnvFirebaseConfig();
  if (!cfg?.apiKey || !idToken) return false;

  try {
    const res = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${encodeURIComponent(
        cfg.apiKey
      )}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      }
    );
    if (!res.ok) return false;
    const data = (await res.json()) as { users?: Array<{ email?: string }> };
    return Boolean(data.users && data.users.length > 0);
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json(
      { success: false, error: "Forbidden in static production build." },
      { status: 403 }
    );
  }

  const authHeader = req.headers.get("authorization") || "";
  const idToken = authHeader.startsWith("Bearer ")
    ? authHeader.slice(7).trim()
    : "";
  const isVerified = await verifyFirebaseIdToken(idToken);
  if (!isVerified) {
    return NextResponse.json(
      { success: false, error: "Nicht autorisiert. Bitte erneut anmelden." },
      { status: 401 }
    );
  }

  try {
    const body = await req.json();
    const doc = normalizeOverridesDocument(body.overridesDoc);
    const commitMessage =
      typeof body.commitMessage === "string" && body.commitMessage.trim()
        ? body.commitMessage.trim()
        : `CMS content update (${new Date().toISOString()})`;
    const pushToGit = body.pushToGit !== false;

    const targetPath = path.join(process.cwd(), "src/data/cms-overrides.json");
    fs.writeFileSync(targetPath, `${JSON.stringify(doc, null, 2)}\n`, "utf8");

    if (!pushToGit) {
      return NextResponse.json({
        success: true,
        mode: "local-file-only",
      });
    }

    try {
      execFileSync("git", ["add", "src/data/cms-overrides.json"], {
        cwd: process.cwd(),
        stdio: "pipe",
      });

      const statusOut = execFileSync(
        "git",
        ["status", "--porcelain", "src/data/cms-overrides.json"],
        {
          cwd: process.cwd(),
          encoding: "utf8",
        }
      ).trim();

      if (statusOut) {
        execFileSync("git", ["commit", "-m", commitMessage], {
          cwd: process.cwd(),
          stdio: "pipe",
        });
        execFileSync("git", ["push", "origin", "main"], {
          cwd: process.cwd(),
          stdio: "pipe",
        });
      }

      const headSha = execFileSync("git", ["rev-parse", "--short", "HEAD"], {
        cwd: process.cwd(),
        encoding: "utf8",
      }).trim();

      return NextResponse.json({
        success: true,
        mode: "local-git-cli",
        commitSha: headSha,
      });
    } catch (gitErr: unknown) {
      return NextResponse.json({
        success: true,
        mode: "local-file-only",
        error:
          gitErr instanceof Error
            ? `Lokale Datei gespeichert, Git-Push Warnung: ${gitErr.message}`
            : "Lokale Datei gespeichert.",
      });
    }
  } catch (err: unknown) {
    return NextResponse.json(
      {
        success: false,
        mode: "local-git-cli",
        error:
          err instanceof Error
            ? err.message
            : "Fehler beim Speichern der CMS-Daten.",
      },
      { status: 500 }
    );
  }
}
