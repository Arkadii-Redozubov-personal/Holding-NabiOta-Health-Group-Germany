import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Diamond, Leaf } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { getDictionary, SupportedLocale } from "@/lib/i18n";

interface HeroSectionProps {
  currentLocale?: SupportedLocale;
}

export function HeroSection({ currentLocale = "de" }: HeroSectionProps) {
  const dict = getDictionary(currentLocale);

  const heroValues = [
    {
      icon: Users,
      title: dict.hero.values[0]?.title || "MENSCHEN IM MITTELPUNKT",
      description: dict.hero.values[0]?.description || "Für Patienten, Angehörige, Fachkräfte und Partner.",
    },
    {
      icon: Diamond,
      title: dict.hero.values[1]?.title || "QUALITÄT UND VERTRAUEN",
      description: dict.hero.values[1]?.description || "Verlässlich. Transparent. Verantwortungsvoll.",
    },
    {
      icon: Leaf,
      title: dict.hero.values[2]?.title || "NACHHALTIGE GESUNDHEITSVERSORGUNG",
      description: dict.hero.values[2]?.description || "Heute handeln. Für morgen.",
    },
  ];

  return (
    <section className="relative min-h-[640px] md:min-h-[700px] lg:min-h-[760px] flex items-center bg-[#0C1810] text-[#FAF8F5] overflow-hidden pt-28 lg:pt-32 pb-16 lg:pb-20">
      {/* 1:1 Medical Clinic Building Facade Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Deep base background */}
        <div className="absolute inset-0 bg-[#0C1810]" />

        {/* Building Image - Positioned centrally/right exactly matching reference screenshot */}
        <div className="absolute top-0 right-0 lg:right-0 xl:right-0 w-full lg:w-[70%] xl:w-[65%] h-full opacity-75 lg:opacity-95">
          <Image
            src="/images/hero/building.png"
            alt="NabiOta Health Group Germany Clinic Headquarters"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-cover object-center lg:object-right"
          />

          {/* Seamless feathered vignette overlays merging image into #0C1810 */}
          {/* Left blend mask */}
          <div className="absolute inset-y-0 left-0 w-24 sm:w-48 lg:w-72 bg-gradient-to-r from-[#0C1810] via-[#0C1810]/70 to-transparent" />
          {/* Right blend mask */}
          <div className="absolute inset-y-0 right-0 w-24 sm:w-48 lg:w-72 bg-gradient-to-l from-[#0C1810] via-[#0C1810]/70 to-transparent" />
          {/* Top blend mask under header */}
          <div className="absolute inset-x-0 top-0 h-28 sm:h-36 bg-gradient-to-b from-[#0C1810] via-[#0C1810]/60 to-transparent" />
          {/* Bottom blend mask towards strip */}
          <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-[#0C1810] via-[#0C1810]/60 to-transparent" />
        </div>

        {/* Overall text legibility gradient on mobile & tablet */}
        <div className="absolute inset-0 lg:hidden bg-gradient-to-t from-[#0C1810] via-[#0C1810]/85 to-[#0C1810]/50" />

        {/* Framing Botanical Leaves Overlay (Top-Left & Top-Right) matching reference */}
        <div className="absolute -top-10 -left-10 w-72 h-72 opacity-25 text-[#1A3822] pointer-events-none">
          <svg viewBox="0 0 300 300" fill="currentColor">
            <path d="M20 280 C40 140 160 30 280 20 C240 160 140 250 20 280 Z" />
            <path d="M60 200 C100 130 180 80 260 40" stroke="#2D5E3A" strokeWidth="4" fill="none" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-80 h-80 opacity-30 text-[#142C1B] pointer-events-none translate-x-12 -translate-y-8">
          <svg viewBox="0 0 300 300" fill="currentColor">
            <path d="M280 20 C260 160 140 270 20 280 C60 140 160 50 280 20 Z" />
            <path d="M240 100 C190 170 120 220 40 260" stroke="#2D5E3A" strokeWidth="4" fill="none" />
          </svg>
        </div>
      </div>

      <Container size="wide" className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Eyebrow, Editorial Roman Headline & CTA Button (approx 5 cols) */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start max-w-xl">
            {/* Eyebrow */}
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.26em] text-[#C5A56A] uppercase mb-4 sm:mb-5">
              {dict.hero.eyebrow}
            </span>

            {/* Headline 1:1 Roman Cormorant Garamond */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[82px] font-normal leading-[1.0] tracking-[-0.02em] text-[#FFFFFF] mb-6 drop-shadow-sm">
              {dict.hero.headingLine1}
              <br />
              {dict.hero.headingLine2}
            </h1>

            {/* Subtitle Paragraph */}
            <p className="text-sm sm:text-base text-[#D5D2C8] leading-relaxed font-sans max-w-lg mb-8 font-light">
              {dict.hero.description}
            </p>

            {/* Single Gold Pill CTA Button matching reference */}
            <Link
              href={`/${currentLocale}/about`}
              className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-[#D5B57A] via-[#C5A56A] to-[#B39358] text-[#0C1810] font-sans font-bold text-xs sm:text-sm tracking-wide shadow-[0_4px_20px_rgba(197,165,106,0.25)] hover:shadow-[0_6px_25px_rgba(197,165,106,0.4)] transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#C5A56A]"
            >
              <span>{dict.hero.ctaMore}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Spacer / Center Clearance for Building Facade (3 cols on desktop) */}
          <div className="hidden lg:block lg:col-span-2 xl:col-span-3 pointer-events-none" />

          {/* Right Column: 3 Strategic Values on deep forest background (approx 4 cols) */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-center space-y-6 sm:space-y-7 pl-0 lg:pl-4">
            {heroValues.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <div key={idx} className="flex items-start gap-4 sm:gap-4.5 group">
                  {/* Gold Thin Circle Icon matching reference */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#C5A56A]/60 flex items-center justify-center flex-shrink-0 text-[#C5A56A] transition-all duration-300 group-hover:border-[#C5A56A] group-hover:scale-105 group-hover:bg-[#C5A56A]/10">
                    <IconComponent className="w-5 h-5 stroke-[1.5]" />
                  </div>

                  {/* Text */}
                  <div className="flex-1 pt-0.5">
                    <h3 className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#FFFFFF] group-hover:text-[#C5A56A] transition-colors leading-snug">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#C5C2B7] leading-relaxed mt-1 font-light">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
