import React from "react";
import { NewsPageComponent } from "@/components/pages/NewsPageComponent";
import { locales, SupportedLocale } from "@/lib/i18n";
import { Metadata } from "next";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocalizedNewsProps {
  params: Promise<{ locale: SupportedLocale }>;
}

export async function generateMetadata({ params }: LocalizedNewsProps): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    de: "Latest News & Insights | NabiOta® Health Group Germany",
    en: "Latest News & Updates | NabiOta® Health Group Germany",
    ru: "Новости и события | NabiOta® Health Group Germany",
    tr: "Haberler ve Gelişmeler | NabiOta® Health Group Germany",
    ar: "الأخبار والتحديثات | مجموعة نابي أوتا الصحية بألمانيا",
  };
  const descriptions: Record<string, string> = {
    de: "Bleiben Sie informiert über unsere neuesten Meilensteine, Innovationen, Veranstaltungen und Entwicklungen der NabiOta Health Group Germany.",
    en: "Stay informed about our latest achievements, innovations, events and important updates from NabiOta Health Group Germany.",
    ru: "Будьте в курсе последних достижений, инноваций, событий и важных обновлений NabiOta Health Group Germany.",
    tr: "NabiOta Health Group Germany ile ilgili en son gelişmeler, yenilikler ve etkinliklerden haberdar olun.",
    ar: "ابق على اطلاع دائم بأحدث إنجازات وتطورات وابتكارات مجموعة نابي أوتا الصحية بألمانيا.",
  };
  return {
    title: titles[locale] || titles.de,
    description: descriptions[locale] || descriptions.de,
    alternates: {
      canonical: `https://www.nabiota-health-group.de/${locale}/news`,
      languages: {
        de: "https://www.nabiota-health-group.de/de/news",
        en: "https://www.nabiota-health-group.de/en/news",
        ru: "https://www.nabiota-health-group.de/ru/news",
        tr: "https://www.nabiota-health-group.de/tr/news",
        ar: "https://www.nabiota-health-group.de/ar/news",
        "x-default": "https://www.nabiota-health-group.de/de/news",
      },
    },
  };
}

export default async function LocalizedNewsPage({ params }: LocalizedNewsProps) {
  const { locale } = await params;
  return <NewsPageComponent locale={locale} />;
}
