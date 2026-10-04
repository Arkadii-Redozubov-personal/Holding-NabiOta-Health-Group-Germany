import React from "react";
import { HomePageComponent } from "@/components/pages/HomePageComponent";
import { locales, SupportedLocale, getDictionary } from "@/lib/i18n";
import { Metadata } from "next";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocalizedPageProps {
  params: Promise<{ locale: SupportedLocale }>;
}

export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `https://www.nabiota-health-group.de/${locale}`,
      languages: {
        de: "https://www.nabiota-health-group.de/de",
        en: "https://www.nabiota-health-group.de/en",
        ru: "https://www.nabiota-health-group.de/ru",
        tr: "https://www.nabiota-health-group.de/tr",
        ar: "https://www.nabiota-health-group.de/ar",
        "x-default": "https://www.nabiota-health-group.de/de",
      },
    },
  };
}

export default async function LocalizedHomePage({ params }: LocalizedPageProps) {
  const { locale } = await params;
  return <HomePageComponent locale={locale} />;
}
