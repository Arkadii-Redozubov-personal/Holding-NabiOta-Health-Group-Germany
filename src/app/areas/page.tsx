import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
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
      <main className="flex-1 pb-20">
        <PageHero
          breadcrumb={
            <Breadcrumb
              items={[
                { label: "Startseite", href: "/" },
                { label: "Unternehmensbereiche" },
              ]}
            />
          }
          title={
            <>
              Vielfältige Kompetenzen.<br />Eine gemeinsame Vision.
            </>
          }
          description="Unsere Unternehmensbereiche decken zentrale Segmente der modernen Gesundheitsversorgung ab – von der ambulanten Spitzenmedizin über präzise Diagnostik bis hin zu internationalen Partnerschaften."
          imageSrc="/images/heroes/hero-areas.jpg"
          imageAlt="NabiOta Health Group Germany Unternehmensbereiche"
        />

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
