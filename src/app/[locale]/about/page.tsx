import React from "react";
import { AboutPageComponent } from "@/components/pages/AboutPageComponent";
import { locales, SupportedLocale } from "@/lib/i18n";
import { Metadata } from "next";
import { getLocaleAlternates } from "@/lib/seo";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocalizedAboutProps {
  params: Promise<{ locale: SupportedLocale }>;
}

export async function generateMetadata({ params }: LocalizedAboutProps): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    de: "Über uns | Geschichte, Struktur und Vision | NabiOta®",
    en: "About Us | History, Structure and Vision | NabiOta®",
    ru: "О холдинге | История, структура и видение | NabiOta®",
    tr: "Hakkımızda | Tarihçe, Yapı ve Vizyon | NabiOta®",
    ar: "من نحن | التاريخ، الهيكل والرؤية | NabiOta®",
    uz: "Biz haqimizda | Tarix, tuzilma va kelajak | NabiOta®",
  };
  return {
    title: titles[locale] || titles.de,
    alternates: getLocaleAlternates(locale, "about"),
  };
}

export default async function LocalizedAboutPage({ params }: LocalizedAboutProps) {
  const { locale } = await params;
  return <AboutPageComponent locale={locale} />;
}
