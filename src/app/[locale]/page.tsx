import React from "react";
import { HomePageComponent } from "@/components/pages/HomePageComponent";
import { locales, SupportedLocale, getDictionary } from "@/lib/i18n";
import { Metadata } from "next";
import { getLocaleAlternates } from "@/lib/seo";

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
    alternates: getLocaleAlternates(locale, ""),
  };
}

export default async function LocalizedHomePage({ params }: LocalizedPageProps) {
  const { locale } = await params;
  return <HomePageComponent locale={locale} />;
}
