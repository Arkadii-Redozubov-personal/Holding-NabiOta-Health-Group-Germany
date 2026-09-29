import React from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function PartnersCareerSection() {
  return (
    <section className="bg-[#FAF8F5] py-16 sm:py-20 lg:py-28">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* LEFT PANEL: Partners & Kooperationen (Light Ivory) */}
          <div className="flex flex-col justify-between rounded-xl bg-white border border-forest-900/10 shadow-sm overflow-hidden p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-md">
            <div>
              <Eyebrow variant="forest">PARTNER & KOOPERATIONEN</Eyebrow>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-forest-950 mb-4 leading-tight">
                Gemeinsam mehr erreichen.
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans mb-6">
                Wir arbeiten eng mit medizinischen Einrichtungen, Kliniken,
                Rehabilitationszentren, Pflegeeinrichtungen, Bildungsträgern sowie
                nationalen und internationalen Partnern zusammen. Starke
                Kooperationen für eine starke Gesundheitsversorgung.
              </p>
              <Button
                variant="dark-outline"
                size="md"
                href="/partners"
                className="mb-8"
              >
                Mehr zu unseren Partnern
              </Button>
            </div>

            {/* Atrium Photo + Strategic Quote */}
            <div className="relative aspect-[16/9] sm:aspect-[2/1] w-full rounded-lg overflow-hidden border border-forest-900/5 mt-auto">
              <Image
                src="/images/partners/atrium.jpg"
                alt="Kooperationspartner im medizinischen Atrium"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-forest-950/70 via-transparent to-transparent" />
              <div className="absolute left-4 sm:left-6 bottom-4 sm:bottom-6 max-w-[200px] sm:max-w-xs text-white">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] leading-relaxed block text-gold-300">
                  Starke Partnerschaften für eine gesündere Zukunft.
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Karriere (Dark Forest Green) */}
          <div className="flex flex-col justify-between rounded-xl bg-forest-900 text-ivory-50 border border-white/10 shadow-md overflow-hidden p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-lg">
            <div>
              <Eyebrow variant="gold">KARRIERE</Eyebrow>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-ivory-50 mb-4 leading-tight">
                Gestalten Sie mit uns<br />
                die Zukunft der Gesundheit.
              </h2>
              <p className="text-xs sm:text-sm text-ivory-200/80 leading-relaxed font-sans mb-6">
                Wir suchen engagierte und qualifizierte Fachkräfte, die unsere
                Vision teilen und gemeinsam mit uns neue Wege in der
                Gesundheitsversorgung gehen möchten.
              </p>
              <Button
                variant="gold-solid"
                size="md"
                href="/career"
                className="mb-8"
              >
                Jetzt bewerben
              </Button>
            </div>

            {/* Medical Team Photo */}
            <div className="relative aspect-[16/9] sm:aspect-[2/1] w-full rounded-lg overflow-hidden border border-white/10 mt-auto">
              <Image
                src="/images/careers/team.jpg"
                alt="Medizinisches Team der NabiOta Health Group"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
