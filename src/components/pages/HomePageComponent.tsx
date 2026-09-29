import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AreasStrip } from "@/components/sections/AreasStrip";
import { AboutSection } from "@/components/sections/AboutSection";
import { BusinessAreasSection } from "@/components/sections/BusinessAreasSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { PartnersCareerSection } from "@/components/sections/PartnersCareerSection";
import { SupportedLocale } from "@/lib/i18n";

interface HomePageComponentProps {
  locale?: SupportedLocale;
}

export function HomePageComponent({ locale = "de" }: HomePageComponentProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header currentLocale={locale} />
      <main id="main-content" className="flex-1">
        <HeroSection currentLocale={locale} />
        <AreasStrip currentLocale={locale} />
        <AboutSection currentLocale={locale} />
        <BusinessAreasSection currentLocale={locale} />
        <ServicesSection currentLocale={locale} />
        <ValuesSection currentLocale={locale} />
        <PartnersCareerSection currentLocale={locale} />
      </main>
      <Footer currentLocale={locale} />
    </div>
  );
}
