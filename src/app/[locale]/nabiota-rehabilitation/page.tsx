import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SupportedLocale } from "@/lib/i18n";
import { getLocaleAlternates } from "@/lib/seo";
import { CompanyPlaceholderPageComponent } from "@/components/pages/CompanyPlaceholderPageComponent";
import { getCompanyPlaceholderData, companyPlaceholders } from "@/data/company-placeholders";

interface PageProps {
  params: Promise<{ locale: SupportedLocale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const meta = companyPlaceholders["nabiota-rehabilitation"];
  const title = meta?.copy[locale]?.title || meta?.copy.de.title || "nabiota-rehabilitation";
  return {
    title: `${title} | NabiOta Health Group`,
    alternates: getLocaleAlternates(locale, "nabiota-rehabilitation"),
  };
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  const data = getCompanyPlaceholderData("nabiota-rehabilitation", locale);
  if (!data) notFound();
  return <CompanyPlaceholderPageComponent locale={locale} data={data} />;
}
