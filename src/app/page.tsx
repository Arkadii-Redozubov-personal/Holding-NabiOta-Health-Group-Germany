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

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <AreasStrip />
        <AboutSection />
        <BusinessAreasSection />
        <ServicesSection />
        <ValuesSection />
        <PartnersCareerSection />
      </main>
      <Footer />
    </div>
  );
}
