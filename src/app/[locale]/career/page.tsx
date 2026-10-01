import React from "react";
import { locales, SupportedLocale } from "@/lib/i18n";
import { Metadata } from "next";
import { CareerPageComponent } from "@/components/pages/CareerPageComponent";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocalizedCareerProps {
  params: Promise<{ locale: SupportedLocale }>;
}

export async function generateMetadata({ params }: LocalizedCareerProps): Promise<Metadata> {
  const { locale } = await params;
  const titles = {
    de: "Karriere | Gestalten Sie mit uns die Zukunft der Gesundheit",
    en: "Career | Shape the Future of Healthcare with Us",
    ru: "Карьера | Создавайте будущее медицины вместе с нами",
  };
  return {
    title: titles[locale] || titles.de,
    alternates: {
      canonical: `https://www.nabiota-health-group.de/${locale}/career`,
      languages: {
        de: "https://www.nabiota-health-group.de/de/career",
        en: "https://www.nabiota-health-group.de/en/career",
        ru: "https://www.nabiota-health-group.de/ru/career",
        "x-default": "https://www.nabiota-health-group.de/de/career",
      },
    },
  };
}

export default async function LocalizedCareerPage({ params }: LocalizedCareerProps) {
  const { locale } = await params;
  return <CareerPageComponent locale={locale} />;
}
