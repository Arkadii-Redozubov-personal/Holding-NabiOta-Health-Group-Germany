import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { holdingServices } from "@/data/services";

export const metadata = {
  title: "Leistungen | Ganzheitliche Gesundheitsversorgung unter einem Dach",
  description:
    "Entdecken Sie unsere medizinischen und organisatorischen Leistungen: MVZ, Diagnostik, Rehabilitation, HomeCare, Wundversorgung, Personalvermittlung und Innovationsmanagement.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-24 lg:pt-32 pb-20">
        {/* Banner */}
        <section className="bg-forest-950 text-ivory-50 py-16 sm:py-24 relative overflow-hidden bg-botanical-dark">
          <Container size="wide">
            <div className="max-w-3xl">
              <Eyebrow variant="gold">UNSERE LEISTUNGEN</Eyebrow>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight mb-6">
                Ganzheitliche Gesundheitslösungen unter einem Dach.
              </h1>
              <p className="text-base sm:text-lg text-ivory-100/90 leading-relaxed font-light">
                Von ambulanter Diagnostik über spezialisierte Therapiekonzepte bis
                hin zu integrierten Versorgungsstrukturen begleiten wir Patienten
                und Partner verlässlich auf jedem Schritt.
              </p>
            </div>
          </Container>
        </section>

        {/* Services List */}
        <section className="py-16 sm:py-20 bg-[#FAF8F5]">
          <Container size="wide">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {holdingServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
