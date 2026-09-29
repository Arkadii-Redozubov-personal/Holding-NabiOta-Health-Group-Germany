import React from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { BusinessCard } from "@/components/ui/BusinessCard";
import { businessAreas } from "@/data/areas";

export function BusinessAreasSection() {
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
        {/* Section Header */}
        <SectionHeading
          theme="dark"
          eyebrow="UNSERE UNTERNEHMENSBEREICHE"
          title={
            <>
              Vielfältige Kompetenzen.<br />
              Eine gemeinsame Vision.
            </>
          }
          description="Unsere Unternehmensbereiche decken zentrale Bereiche des Gesundheitswesens ab – von medizinischer Versorgung und Diagnostik über Rehabilitation und Pflege bis hin zu Beratung, Projektentwicklung und internationalen Kooperationen."
          action={
            <Button
              variant="cream"
              size="md"
              href="/areas"
              className="mt-2"
            >
              Alle Bereiche entdecken
            </Button>
          }
        />

        {/* 6 Cards Grid (2 cols mobile, 3 cols tablet, 6 cols desktop or 2x3 grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5">
          {businessAreas.map((area, idx) => (
            <BusinessCard key={area.id} area={area} priority={idx < 2} />
          ))}
        </div>
      </Container>
    </section>
  );
}
