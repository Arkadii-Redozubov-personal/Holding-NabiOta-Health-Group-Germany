import React from "react";
import { AreasPageComponent } from "@/components/pages/AreasPageComponent";
import { SupportedLocale, getDictionary } from "@/lib/i18n";
import { Metadata } from "next";
import { getLocaleAlternates } from "@/lib/seo";

interface LocalizedAreasProps {
  params: Promise<{ locale: SupportedLocale }>;
}

export async function generateMetadata({ params }: LocalizedAreasProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: `${dict.areas.heading} | NabiOta® Health Group Germany`,
    description: dict.areas.description,
    alternates: getLocaleAlternates(locale, "areas"),
  };
}

export default async function LocalizedAreasPage({ params }: LocalizedAreasProps) {
  const { locale } = await params;
  return <AreasPageComponent locale={locale} />;
}
