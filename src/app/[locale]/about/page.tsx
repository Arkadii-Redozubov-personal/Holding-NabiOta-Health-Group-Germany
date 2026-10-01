import React from "react";
import { AboutPageComponent } from "@/components/pages/AboutPageComponent";
import { locales, SupportedLocale } from "@/lib/i18n";
import { Metadata } from "next";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocalizedAboutProps {
  params: Promise<{ locale: SupportedLocale }>;
}

export async function generateMetadata({ params }: LocalizedAboutProps): Promise<Metadata> {
  const { locale } = await params;
  const titles = {
    de: "Über uns | Geschichte, Struktur und Vision | NabiOta®",
    en: "About Us | History, Structure and Vision | NabiOta®",
    ru: "О холдинге | История, структура и видение | NabiOta®",
  };
  return {
    title: titles[locale] || titles.de,
    alternates: {
      canonical: `https://www.nabiota-health-group.de/${locale}/about`,
      languages: {
        de: "https://www.nabiota-health-group.de/de/about",
        en: "https://www.nabiota-health-group.de/en/about",
        ru: "https://www.nabiota-health-group.de/ru/about",
        "x-default": "https://www.nabiota-health-group.de/de/about",
      },
    },
  };
}

export default async function LocalizedAboutPage({ params }: LocalizedAboutProps) {
  const { locale } = await params;
  return <AboutPageComponent locale={locale} />;
}
