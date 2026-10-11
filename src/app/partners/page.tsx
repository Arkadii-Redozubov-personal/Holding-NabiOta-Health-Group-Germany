import React from "react";
import { Metadata } from "next";
import { PartnersPageComponent } from "@/components/pages/PartnersPageComponent";
import { getLocaleAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Partner & Investoren | NabiOta® Health Group Germany",
  description:
    "Kooperationsmodelle für Ärzte, Kliniken, Kommunen und Investoren. 2-Phasen-Architektur, Praxisnachfolge § 95 SGB V und ambulante OP-Zentren.",
  alternates: getLocaleAlternates("de", "partners"),
};

export default function PartnersPage() {
  return <PartnersPageComponent locale="de" />;
}

