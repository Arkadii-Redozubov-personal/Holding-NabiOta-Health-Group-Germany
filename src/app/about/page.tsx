import React from "react";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { IconCircle } from "@/components/ui/IconCircle";
import { Button } from "@/components/ui/Button";
import { companyInfo } from "@/data/company";
import { aboutBenefits } from "@/data/values";

export const metadata = {
  title: "Über uns | Geschichte, Struktur und Vision",
  description:
    "Erfahren Sie mehr über die NabiOta® Health Group Germany GmbH: Unsere Wurzeln aus der Medical A-Z Consulting, unsere Holdingstruktur und unsere Vision für die Gesundheitsversorgung.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-24 lg:pt-32 pb-20">
        {/* Hero Banner */}
        <section className="bg-forest-950 text-ivory-50 py-16 sm:py-24 relative overflow-hidden bg-botanical-dark">
          <Container size="wide">
            <div className="max-w-3xl">
              <Eyebrow variant="gold">ÜBER DIE HOLDING</Eyebrow>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight mb-6">
                Eine starke Gruppe für eine gesündere Zukunft.
              </h1>
              <p className="text-base sm:text-lg text-ivory-100/90 leading-relaxed font-light">
                Die NabiOta® Health Group Germany GmbH mit Sitz in Mönchengladbach
                führt verschiedene Bereiche der medizinischen Versorgung unter einer
                gemeinsamen Marke zusammen.
              </p>
            </div>
          </Container>
        </section>

        {/* Origin & History Section */}
        <section className="py-16 sm:py-20 bg-[#FAF8F5]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-forest-900/10">
                <Image
                  src="/images/about/doctor-patient.jpg"
                  alt="Ärztliche Betreuung bei NabiOta"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="lg:col-span-6 space-y-6">
                <Eyebrow variant="forest">UNSERE GESCHICHTE & URSPRUNG</Eyebrow>
                <h2 className="font-display text-3xl sm:text-4xl text-forest-950 leading-tight">
                  Aus Erfahrung gewachsen. Für die Zukunft aufgestellt.
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
                  <p>
                    Die Wurzeln der heutigen Unternehmensgruppe reichen auf die{" "}
                    <strong className="text-forest-950 font-semibold">
                      Medical A-Z Consulting GmbH
                    </strong>{" "}
                    zurück. Durch strategische Weiterentwicklung und den Ausbau
                    organisatorischer Strukturen wurde die Grundlage für eine
                    langfristig ausgerichtete Gesundheitsgruppe mit nationaler
                    und internationaler Perspektive geschaffen.
                  </p>
                  <p>
                    Durch Erweiterung des Unternehmensgegenstandes und den Ausbau
                    der gesellschaftsrechtlichen Strukturen entstand eine
                    ganzheitliche Holding, die medizinische Versorgung,
                    Präzisionsdiagnostik, Rehabilitation, Pflege sowie moderne
                    Gesundheitsimmobilien unter einem Dach vereint.
                  </p>
                  <p>
                    NabiOta® ist eine geschützte Marke der NabiOta® Health Group
                    Germany GmbH. Die Marke steht für Verlässlichkeit,
                    verantwortungsbewusstes Handeln und die kontinuierliche
                    Weiterentwicklung gesundheitsbezogener Dienstleistungen.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Holding Structure Diagram Section */}
        <section className="py-16 sm:py-20 bg-white border-y border-forest-900/10">
          <Container size="wide">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <Eyebrow variant="forest">GESAMTKONZEPT & STRUKTUR</Eyebrow>
              <h2 className="font-display text-3xl sm:text-4xl text-forest-950">
                Die Unternehmensbereiche im Verbund
              </h2>
              <p className="mt-3 text-sm text-text-secondary">
                Strukturierte Synergien zwischen spezialisierten Tochtergesellschaften.
              </p>
            </div>

            {/* Holding Diagram Grid */}
            <div className="max-w-4xl mx-auto">
              {/* Holding Top Node */}
              <div className="bg-forest-900 text-ivory-50 p-6 rounded-xl border border-gold-400/40 text-center shadow-lg mb-8 max-w-md mx-auto">
                <span className="text-[10px] font-bold tracking-[0.2em] text-gold-300 uppercase block mb-1">
                  Holding / Konzern
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-medium">
                  {companyInfo.legalName}
                </h3>
              </div>

              {/* Sub-entities grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  {
                    name: "NabiOta® MVZ",
                    sub: "Hausärztliches Facharztzentrum",
                  },
                  {
                    name: "NabiOta® MVZ",
                    sub: "Chirurgisches Facharztzentrum (Orthopädie, Neurochirurgie, Plastische & Allgemeinchirurgie)",
                  },
                  {
                    name: "NabiOta® Medizinische Personalvermittlung",
                    sub: "Fachkräfteakquise & International Recruiting",
                  },
                  {
                    name: "NabiOta® Klinik Germany GmbH",
                    sub: "n. § 30 KH / Diagnostics GmbH",
                  },
                  {
                    name: "NabiOta® Diagnostics GmbH",
                    sub: "High-End CT + MRT + Digitales Röntgen",
                  },
                  {
                    name: "NabiOta® Real Estate GmbH",
                    sub: "Gesundheitsimmobilien & Praxisentwicklung",
                  },
                  {
                    name: "NabiOta® Rehabilitation Center",
                    sub: "Therapie- & Präventionszentrum",
                  },
                  {
                    name: "NabiOta® HomeCare GmbH",
                    sub: "Ambulante Pflege & Wundversorgung",
                  },
                  {
                    name: "NabiOta® Apotheke",
                    sub: "Pharmazeutische Vollversorgung",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-[#FAF8F5] border border-forest-900/10 hover:border-gold-400/60 transition-colors shadow-sm"
                  >
                    <h4 className="font-semibold text-xs sm:text-sm text-forest-950 mb-1">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-text-secondary leading-snug">
                      {item.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Mission & Values Callout */}
        <section className="py-16 sm:py-20 bg-[#FAF8F5]">
          <Container size="wide">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {aboutBenefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-white border border-forest-900/10 shadow-sm"
                >
                  <IconCircle
                    name={benefit.iconName}
                    size="md"
                    variant="gold"
                    className="mb-4"
                  />
                  <h3 className="font-sans text-base font-bold text-forest-950 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="gold-solid" size="lg" href="/contact">
                Jetzt Kontakt aufnehmen
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
