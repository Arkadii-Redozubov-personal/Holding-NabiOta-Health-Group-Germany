import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { BusinessCard } from "@/components/ui/BusinessCard";
import { businessAreas } from "@/data/areas";

export const metadata = {
  title: "Unternehmensbereiche | NabiOta® Health Group Germany",
  description:
    "Erkunden Sie unsere Unternehmensbereiche: Medizinische Fachbereiche, Diagnostik, Rehabilitation, Pflege, Beratung & Projektentwicklung sowie Internationale Kooperationen.",
};

export default function AreasPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-24 lg:pt-32 pb-20">
        {/* Banner */}
        <section className="bg-forest-950 text-ivory-50 py-16 sm:py-24 relative overflow-hidden bg-botanical-dark">
          <Container size="wide">
            <div className="max-w-3xl">
              <Eyebrow variant="gold">UNTERNEHMENSBEREICHE</Eyebrow>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight mb-6">
                Vielfältige Kompetenzen.<br />Eine gemeinsame Vision.
              </h1>
              <p className="text-base sm:text-lg text-ivory-100/90 leading-relaxed font-light">
                Unsere Unternehmensbereiche decken zentrale Segmente der modernen
                Gesundheitsversorgung ab – von der ambulanten Spitzenmedizin über
                präzise Diagnostik bis hin zu internationalen Partnerschaften.
              </p>
            </div>
          </Container>
        </section>

        {/* Listing Grid */}
        <section className="py-16 sm:py-20 bg-[#FAF8F5]">
          <Container size="wide">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {businessAreas.map((area) => (
                <BusinessCard key={area.id} area={area} />
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
