import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { IconCircle } from "@/components/ui/IconCircle";
import { coreValues } from "@/data/values";
import { locales, SupportedLocale, getDictionary } from "@/lib/i18n";
import { Metadata } from "next";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocalizedValuesProps {
  params: Promise<{ locale: SupportedLocale }>;
}

export async function generateMetadata({ params }: LocalizedValuesProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: `${dict.values.heading} | NabiOta® Health Group`,
    description: dict.values.description,
    alternates: {
      canonical: `https://www.nabiota-health-group.de/${locale}/values`,
      languages: {
        de: "https://www.nabiota-health-group.de/de/values",
        en: "https://www.nabiota-health-group.de/en/values",
        ru: "https://www.nabiota-health-group.de/ru/values",
        "x-default": "https://www.nabiota-health-group.de/de/values",
      },
    },
  };
}

import { ValuesPageComponent } from "@/components/pages/ValuesPageComponent";

export default async function LocalizedValuesPage({ params }: LocalizedValuesProps) {
  const { locale } = await params;
  return <ValuesPageComponent locale={locale} />;
}
