import React from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { IconCircle } from "@/components/ui/IconCircle";
import { aboutBenefits } from "@/data/values";

export function AboutSection() {
  return (
    <section className="bg-[#FAF8F5] py-16 sm:py-20 lg:py-28 overflow-hidden">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left: Warm Doctor-Patient Image with Gold Arc Framing (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] sm:aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl border border-forest-900/10">
              <Image
                src="/images/about/doctor-patient.jpg"
                alt="Ärztliche Fürsorge und menschliche Zuwendung bei NabiOta Health Group"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>

            {/* Subtle Gold Arc Accent at bottom-right corner */}
            <div className="absolute -bottom-4 -right-4 w-28 h-28 border-r-2 border-b-2 border-gold-400/50 rounded-br-3xl pointer-events-none hidden sm:block" />
          </div>

          {/* Right: Editorial Content & 3 Benefits (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
              {/* Text content (7 cols in subgrid) */}
              <div className="xl:col-span-7">
                <Eyebrow variant="forest">ÜBER UNS</Eyebrow>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.12] tracking-tight text-forest-950 mb-5">
                  Eine starke Gruppe<br />
                  für eine gesündere Zukunft.
                </h2>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans mb-8">
                  Die NabiOta® Health Group Germany GmbH mit Sitz in
                  Mönchengladbach ist eine Unternehmensgruppe im
                  Gesundheitswesen. Wir bündeln medizinische Versorgung,
                  Diagnostik, Rehabilitation, Pflege sowie weitere Leistungen
                  unter einer gemeinsamen Marke und schaffen nachhaltig Mehrwert
                  für Patienten, Fachkräfte und Partner.
                </p>
                <Button
                  variant="gold-solid"
                  size="md"
                  href="/about"
                >
                  Unsere Geschichte
                </Button>
              </div>

              {/* 3 Benefits column with gold circle icons (5 cols in subgrid) */}
              <div className="xl:col-span-5 space-y-6 pt-2 xl:pt-4 xl:border-l xl:border-forest-900/10 xl:pl-8">
                {aboutBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 group">
                    <IconCircle
                      name={benefit.iconName}
                      size="sm"
                      variant="gold"
                      className="mt-0.5 group-hover:scale-105 group-hover:border-gold-500"
                    />
                    <div>
                      <h3 className="font-sans text-xs sm:text-sm font-bold text-forest-950 group-hover:text-gold-700 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-xs text-text-secondary leading-relaxed mt-0.5">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
