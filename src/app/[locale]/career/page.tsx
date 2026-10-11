import React from "react";
import { locales, SupportedLocale } from "@/lib/i18n";
import { Metadata } from "next";
import { CareerPageComponent } from "@/components/pages/CareerPageComponent";
import { getLocaleAlternates } from "@/lib/seo";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocalizedCareerProps {
  params: Promise<{ locale: SupportedLocale }>;
}

export async function generateMetadata({ params }: LocalizedCareerProps): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    de: "Karriere | Gestalten Sie mit uns die Zukunft der Gesundheit",
    en: "Career | Shape the Future of Healthcare with Us",
    ru: "Карьера | Создавайте будущее медицины вместе с нами",
    tr: "Kariyer | Sağlığın Geleceğini Bizimle Şekillendirin",
    ar: "الوظائف | شاركنا في تشكيل مستقبل الرعاية الصحية",
    uz: "Karyera | Sog‘liqni saqlash kelajagini biz bilan yarating",
  };
  return {
    title: titles[locale] || titles.de,
    alternates: getLocaleAlternates(locale, "career"),
  };
}

export default async function LocalizedCareerPage({ params }: LocalizedCareerProps) {
  const { locale } = await params;
  return <CareerPageComponent locale={locale} />;
}
