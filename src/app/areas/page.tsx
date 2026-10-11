import React from "react";
import { AreasPageComponent } from "@/components/pages/AreasPageComponent";
import { getLocaleAlternates } from "@/lib/seo";

export const metadata = {
  title: "Unternehmensbereiche | NabiOta® Health Group Germany",
  description:
    "Erkunden Sie unsere Unternehmensbereiche: Medizinische Fachbereiche, Diagnostik, Rehabilitation, Pflege, Beratung & Projektentwicklung sowie Internationale Kooperationen.",
  alternates: getLocaleAlternates("de", "areas"),
};

export default function AreasPage() {
  return <AreasPageComponent locale="de" />;
}
