import React from "react";
import { AboutPageComponent } from "@/components/pages/AboutPageComponent";
import { getLocaleAlternates } from "@/lib/seo";

export const metadata = {
  title: "Über uns | Geschichte, Struktur und Vision | NabiOta®",
  description:
    "Erfahren Sie mehr über die NabiOta® Health Group Germany GmbH: Unsere Wurzeln aus der Medical A-Z Consulting, unsere Holdingstruktur und unsere Vision für die Gesundheitsversorgung.",
  alternates: getLocaleAlternates("de", "about"),
};

export default function AboutPage() {
  return <AboutPageComponent locale="de" />;
}
