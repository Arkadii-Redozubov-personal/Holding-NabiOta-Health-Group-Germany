import React from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { BusinessCard } from "@/components/ui/BusinessCard";
import { businessAreas } from "@/data/areas";
import { getDictionary, SupportedLocale } from "@/lib/i18n";

interface BusinessAreasSectionProps {
  currentLocale?: SupportedLocale;
}

export function BusinessAreasSection({ currentLocale = "de" }: BusinessAreasSectionProps) {
  const dict = getDictionary(currentLocale);

  return (
    <section className="relative bg-forest-900 text-ivory-50 py-16 sm:py-20 lg:py-28 overflow-hidden bg-botanical-dark">
      {/* Subtle Botanical Leaf Artwork on Edges */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-15 pointer-events-none text-gold-400 -translate-x-12 -translate-y-12">
        <svg viewBox="0 0 300 300" fill="currentColor">
          <path d="M10 250 C20 120 120 30 260 20 C230 140 140 230 10 250 Z" />
          <path d="M50 180 C80 120 160 80 240 50" stroke="currentColor" strokeWidth="3" fill="none" />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-72 h-72 opacity-15 pointer-events-none text-gold-400 translate-x-16 translate-y-16">
        <svg viewBox="0 0 300 300" fill="currentColor">
          <path d="M290 50 C280 180 180 270 40 280 C70 160 160 70 290 50 Z" />
          <path d="M250 120 C220 180 140 220 60 250" stroke="currentColor" strokeWidth="3" fill="none" />
        </svg>
      </div>

      <Container size="wide" className="relative z-10">
        <SectionHeading
          theme="dark"
          eyebrow={dict.areas.eyebrow}
          title={dict.areas.heading}
          description={dict.areas.description}
          action={
            <Button
              variant="cream"
              size="md"
              href={`/${currentLocale}/areas`}
              className="mt-2"
            >
              {dict.areas.cta}
            </Button>
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5">
          {businessAreas.map((area, idx) => (
            <BusinessCard key={area.id} area={area} priority={idx < 2} currentLocale={currentLocale} />
          ))}
        </div>
      </Container>
    </section>
  );
}
