import "./globals.css";
import type { Metadata } from "next";
import { RootDocument } from "@/components/layout/RootDocument";
import { NotFoundView } from "@/components/layout/NotFoundView";

export const metadata: Metadata = {
  title: "404 | NabiOta Health Group Germany",
  description: "Die angeforderte Seite wurde nicht gefunden.",
};

export default function GlobalNotFound() {
  return (
    <RootDocument locale="de">
      <NotFoundView />
    </RootDocument>
  );
}
