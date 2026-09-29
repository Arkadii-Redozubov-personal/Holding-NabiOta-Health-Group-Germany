import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { IconCircle } from "@/components/ui/IconCircle";
import { coreValues } from "@/data/values";

export const metadata = {
  title: "Unsere Werte & Verantwortung | NabiOta® Health Group Germany",
  description:
    "Verlässlichkeit, Qualität, Transparenz und Menschlichkeit bilden das Fundament unseres Handelns in allen Unternehmensbereichen.",
};

export default function ValuesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-24 lg:pt-32 pb-20">
        <section className="bg-forest-950 text-ivory-50 py-16 sm:py-24 relative overflow-hidden bg-botanical-dark">
          <Container size="wide">
            <div className="max-w-3xl">
              <Eyebrow variant="gold">UNSERE LEITLINIEN</Eyebrow>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight mb-6">
                Was uns leitet.<br />Werte mit Verantwortung.
              </h1>
              <p className="text-base sm:text-lg text-ivory-100/90 leading-relaxed font-light">
                Im Mittelpunkt unseres Handelns stehen Menschen – Patienten,
                Angehörige, medizinische Fachkräfte und Partner. Diese Grundsätze
                prägen unseren Alltag.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 bg-[#FAF8F5]">
          <Container size="wide">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((val) => (
                <div
                  key={val.id}
                  className="p-8 rounded-xl bg-white border border-forest-900/10 shadow-sm flex flex-col items-start"
                >
                  <IconCircle
                    name={val.iconName}
                    size="lg"
                    variant="gold"
                    className="mb-5"
                  />
                  <span className="text-xs uppercase tracking-wider text-gold-600 font-semibold mb-1">
                    {val.tagline}
                  </span>
                  <h2 className="font-display text-2xl text-forest-950 mb-3">
                    {val.title}
                  </h2>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
