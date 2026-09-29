import React from "react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { IconCircle } from "@/components/ui/IconCircle";
import { coreValues } from "@/data/values";

export function ValuesSection() {
  return (
    <section className="relative bg-[#F9F7F1] py-16 sm:py-20 lg:py-24 border-b border-forest-900/10 overflow-hidden">
      {/* Delicate Botanical Leaves Background Accent on the right */}
      <div className="absolute top-0 right-0 w-80 h-80 opacity-20 pointer-events-none text-forest-700 translate-x-20 -translate-y-10">
        <svg viewBox="0 0 300 300" fill="currentColor">
          <path d="M250 20 C230 140 120 220 20 240 C50 120 140 40 250 20 Z" />
          <path d="M190 70 C140 120 80 180 30 230" stroke="currentColor" strokeWidth="2.5" fill="none" />
        </svg>
      </div>

      <Container size="wide" className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-md">
            <Eyebrow variant="forest">UNSERE WERTE</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-forest-950">
              Was uns leitet.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Unsere Werte bilden das Fundament unseres Handelns und prägen die
              Zusammenarbeit in der gesamten Unternehmensgruppe.
            </p>
          </div>
        </div>

        {/* 6 Values Horizontal Row with Dividers */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 lg:gap-0 lg:divide-x lg:divide-forest-900/15">
          {coreValues.map((val) => (
            <div
              key={val.id}
              className="flex flex-col items-center text-center px-2 sm:px-4 py-2 group"
            >
              <IconCircle
                name={val.iconName}
                size="md"
                variant="gold"
                className="mb-4 group-hover:scale-105 group-hover:border-gold-500"
              />
              <h3 className="font-sans text-sm sm:text-base font-bold text-forest-950 mb-1 group-hover:text-gold-700 transition-colors">
                {val.title}
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed max-w-[160px]">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
