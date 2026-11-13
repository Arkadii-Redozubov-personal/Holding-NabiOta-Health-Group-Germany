import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { execFileSync } from "child_process";
import { normalizeOverridesDocument } from "@/lib/cms/cms-engine";

export async function POST(req: NextRequest) {
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
        commitUrl: `https://github.com/Arkadii-Redozubov-personal/Holding-NabiOta-Health-Group-Germany/commit/${headSha}`,
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

