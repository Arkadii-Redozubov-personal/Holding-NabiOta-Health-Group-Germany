import React from "react";
import { AreasPageComponent } from "@/components/pages/AreasPageComponent";
import { locales, SupportedLocale, getDictionary } from "@/lib/i18n";
import { Metadata } from "next";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocalizedAreasProps {
  params: Promise<{ locale: SupportedLocale }>;
}

export async function generateMetadata({ params }: LocalizedAreasProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: `${dict.areas.heading} | NabiOta® Health Group Germany`,
    description: dict.areas.description,
    alternates: {
      canonical: `https://www.nabiota-health-group.de/${locale}/areas`,
      languages: {
        de: "https://www.nabiota-health-group.de/de/areas",
        en: "https://www.nabiota-health-group.de/en/areas",
        ru: "https://www.nabiota-health-group.de/ru/areas",
        "x-default": "https://www.nabiota-health-group.de/de/areas",
      },
    },
  };
}

export default async function LocalizedAreasPage({ params }: LocalizedAreasProps) {
  const { locale } = await params;
  return <AreasPageComponent locale={locale} />;
}
