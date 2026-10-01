import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { IconCircle } from "@/components/ui/IconCircle";
import { coreValues } from "@/data/values";

export const metadata = {
  title: "Unsere Werte & Verantwortung | NabiOta® Health Group Germany",
  description:
    "Verlässlichkeit, Qualität, Transparenz und Menschlichkeit bilden das Fundament unseres Handelns in allen Unternehmensbereichen.",
};

import { ValuesPageComponent } from "@/components/pages/ValuesPageComponent";

export default function ValuesPage() {
  return <ValuesPageComponent locale="de" />;
}
