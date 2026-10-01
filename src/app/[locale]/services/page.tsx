import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { holdingServices } from "@/data/services";
import { locales, SupportedLocale, getDictionary } from "@/lib/i18n";
import { Metadata } from "next";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocalizedServicesProps {
  params: Promise<{ locale: SupportedLocale }>;
}

export async function generateMetadata({ params }: LocalizedServicesProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: `${dict.services.heading} | NabiOta® Health Group`,
    description: dict.meta.description,
    alternates: {
      canonical: `https://www.nabiota-health-group.de/${locale}/services`,
      languages: {
        de: "https://www.nabiota-health-group.de/de/services",
        en: "https://www.nabiota-health-group.de/en/services",
        ru: "https://www.nabiota-health-group.de/ru/services",
        "x-default": "https://www.nabiota-health-group.de/de/services",
      },
    },
  };
}

import { ServicesPageComponent } from "@/components/pages/ServicesPageComponent";

export default async function LocalizedServicesPage({ params }: LocalizedServicesProps) {
  const { locale } = await params;
  return <ServicesPageComponent locale={locale} />;
}
