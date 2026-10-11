import React from "react";
import { CareerPageComponent } from "@/components/pages/CareerPageComponent";
import { getLocaleAlternates } from "@/lib/seo";

export const metadata = {
  title: "Karriere | Gestalten Sie mit uns die Zukunft der Gesundheit",
  description:
    "Karrieremöglichkeiten bei der NabiOta® Health Group Germany: Ärztlicher Dienst, Pflege, Therapie, Diagnostik, Management und internationale Projekte.",
  alternates: getLocaleAlternates("de", "career"),
};

export default function CareerPage() {
  return <CareerPageComponent locale="de" />;
}
