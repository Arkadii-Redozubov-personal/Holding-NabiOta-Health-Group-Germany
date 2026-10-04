import React from "react";
import { locales, SupportedLocale } from "@/lib/i18n";
import { Metadata } from "next";
import { PartnersPageComponent } from "@/components/pages/PartnersPageComponent";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocalizedPartnersProps {
  params: Promise<{ locale: SupportedLocale }>;
}

export async function generateMetadata({ params }: LocalizedPartnersProps): Promise<Metadata> {
  const { locale } = await params;
  const titles = {
    de: "Partner & Investoren | NabiOta® Health Group Germany",
    en: "Partners & Healthcare Investors | NabiOta® Health Group Germany",
    ru: "Партнёры и инвесторы | NabiOta® Health Group Germany",
  };
  const descriptions = {
    de: "Kooperationsmodelle für Ärzte, Kliniken, Kommunen und Investoren. 2-Phasen-Architektur, Praxisnachfolge § 95 SGB V und ambulante OP-Zentren.",
    en: "Strategic partnership models for physicians, hospitals, municipalities, and healthcare investors. Practice succession, AOP centers and 2-phase architecture.",
    ru: "Модели партнерства для врачей, клиник, муниципалитетов и инвесторов. Двухфазная архитектура холдинга, преемственность практик § 95 SGB V.",
  };

  return {
    title: titles[locale] || titles.de,
    description: descriptions[locale] || descriptions.de,
    alternates: {
      canonical: `https://www.nabiota-health-group.de/${locale}/partners`,
      languages: {
        de: "https://www.nabiota-health-group.de/de/partners",
        en: "https://www.nabiota-health-group.de/en/partners",
        ru: "https://www.nabiota-health-group.de/ru/partners",
        "x-default": "https://www.nabiota-health-group.de/de/partners",
      },
    },
  };
}

export default async function LocalizedPartnersPage({ params }: LocalizedPartnersProps) {
  const { locale } = await params;
  return <PartnersPageComponent locale={locale} />;
}

