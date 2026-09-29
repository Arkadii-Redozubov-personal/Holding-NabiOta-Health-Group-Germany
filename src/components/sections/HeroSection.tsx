import React from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { IconCircle } from "@/components/ui/IconCircle";
import { heroValues } from "@/data/values";

export function HeroSection() {
  return (
    <section className="relative min-h-[640px] md:min-h-[720px] lg:min-h-[760px] flex items-stretch bg-forest-950 text-ivory-50 overflow-hidden pt-24 lg:pt-28 pb-12 lg:pb-0">
      {/* Background Image with Cinematic Grading */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/campus.jpg"
          alt="NabiOta Health Group Germany Campus"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.02]"
        />
        {/* Asymmetrical Gradient Overlay (heavier on left for text legibility) */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/95 via-forest-950/75 to-forest-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-forest-950/40" />
      </div>

      <Container size="wide" className="relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[500px]">
          {/* Left Editorial Content (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start pt-6 lg:pt-0 max-w-2xl">
            <Eyebrow variant="gold" className="tracking-[0.25em] text-gold-300">
              KOMPETENZ VERBINDEN.
            </Eyebrow>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-normal leading-[0.98] tracking-[-0.02em] text-ivory-50 mb-6">
              Gesundheit<br />
              <span className="italic font-light text-gold-200">gestalten.</span>
            </h1>

            <p className="text-base sm:text-lg text-ivory-100/90 leading-relaxed font-sans max-w-xl mb-8 font-light">
              Die NabiOta® Health Group Germany GmbH ist eine Unternehmensgruppe
              im Gesundheitswesen. Wir verbinden medizinische Kompetenz, moderne
              Strukturen und innovative Lösungen – für eine zukunftsfähige
              Gesundheitsversorgung.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="cream"
                size="lg"
                href="/about"
                className="shadow-lg"
              >
                Mehr über uns
              </Button>
              <Button
                variant="gold-outline"
                size="lg"
                href="/areas"
                className="hidden sm:inline-flex"
              >
                Unsere Bereiche
              </Button>
            </div>
          </div>

          {/* Right Strategic Values Translucent Panel (5 cols on desktop) */}
          <div className="lg:col-span-5 lg:pl-6">
            <div className="relative rounded-2xl bg-forest-900/75 backdrop-blur-md border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden">
              {/* Subtle Botanical Leaf Watermark Accent in corner */}
              <div className="absolute -top-12 -right-12 w-48 h-48 opacity-10 pointer-events-none text-gold-400">
                <svg viewBox="0 0 200 200" fill="currentColor">
                  <path d="M50 150 C30 90 90 30 150 50 C130 110 110 130 50 150 Z" />
                </svg>
              </div>

              <div className="space-y-6 sm:space-y-7 relative z-10">
                {heroValues.map((val) => (
                  <div key={val.id} className="flex items-start gap-4 sm:gap-5 group">
                    <IconCircle
                      name={val.iconName}
                      size="md"
                      variant="dark"
                      className="border-gold-400/50 text-gold-300 group-hover:scale-105 group-hover:border-gold-300"
                    />
                    <div className="flex-1">
                      <h3 className="font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-ivory-50 group-hover:text-gold-300 transition-colors">
                        {val.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-ivory-200/75 leading-relaxed mt-1">
                        {val.subtitle}
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
