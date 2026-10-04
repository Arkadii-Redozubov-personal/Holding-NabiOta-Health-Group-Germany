import React from "react";
import { Metadata } from "next";
import { PartnersPageComponent } from "@/components/pages/PartnersPageComponent";

export const metadata: Metadata = {
  title: "Partner & Investoren | NabiOta® Health Group Germany",
  description:
    "Kooperationsmodelle für Ärzte, Kliniken, Kommunen und Investoren. 2-Phasen-Architektur, Praxisnachfolge § 95 SGB V und ambulante OP-Zentren.",
  alternates: {
    canonical: "https://www.nabiota-health-group.de/partners",
    languages: {
      de: "https://www.nabiota-health-group.de/de/partners",
      en: "https://www.nabiota-health-group.de/en/partners",
      ru: "https://www.nabiota-health-group.de/ru/partners",
      "x-default": "https://www.nabiota-health-group.de/de/partners",
    },
  },
};

export default function PartnersPage() {
  return <PartnersPageComponent locale="de" />;
}

