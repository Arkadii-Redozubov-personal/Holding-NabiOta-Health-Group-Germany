import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getDictionary, SupportedLocale } from "@/lib/i18n";
import { AreasStrip } from "@/components/sections/AreasStrip";

interface HeroSectionProps {
  currentLocale?: SupportedLocale;
}

/* ── Custom SVGs matching Photo reference exactly ────────────────── */
function PeopleIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="14" cy="9" r="3.3" />
      <path d="M8 21.5c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="7" cy="11.5" r="2.5" />
      <path d="M2.5 21.5c0-2.3 2-4.2 4.5-4.5" />
      <circle cx="21" cy="11.5" r="2.5" />
      <path d="M21 17c2.5.3 4.5 2.2 4.5 4.5" />
    </svg>
  );
}

function DiamondIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5.5 10.5 L9.5 4.5 L18.5 4.5 L22.5 10.5 L14 23.5 Z" />
      <path d="M5.5 10.5 L22.5 10.5" />
      <path d="M9.5 4.5 L14 10.5 L18.5 4.5" />
      <path d="M9.5 10.5 L14 23.5 L18.5 10.5" />
    </svg>
  );
}

function LeafIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 22 C6 22 7.5 13 14 8.5 C18.5 5.5 22.5 5 22.5 5 C22.5 5 22 9 19 13.5 C14.5 20 6 22 6 22 Z" />
      <path d="M4 24 C5.5 22.5 9.5 18 14 14 C18 10.5 22.5 5 22.5 5" />
    </svg>
  );
}

export function HeroSection({ currentLocale = "de" }: HeroSectionProps) {
  const dict = getDictionary(currentLocale);

  const heroValues = [
    {
      icon: PeopleIcon,
      line1:
        currentLocale === "ru"
          ? "ЧЕЛОВЕК В ЦЕНТРЕ"
          : currentLocale === "en"
          ? "PEOPLE AT THE CENTER"
          : "MENSCHEN",
      line2: currentLocale === "de" ? "IM MITTELPUNKT" : "",
      description:
        dict.hero.values[0]?.description ||
        "Für Patienten, Angehörige, Fachkräfte und Partner.",
    },
    {
      icon: DiamondIcon,
      line1:
        currentLocale === "ru"
          ? "КАЧЕСТВО И ДОВЕРИЕ"
          : currentLocale === "en"
          ? "QUALITY & TRUST"
          : "QUALITÄT",
      line2: currentLocale === "de" ? "UND VERTRAUEN" : "",
      description:
        dict.hero.values[1]?.description ||
        "Verlässlich. Transparent. Verantwortungsvoll.",
    },
    {
      icon: LeafIcon,
      line1:
        currentLocale === "ru"
          ? "УСТОЙЧИВОЕ РАЗВИТИЕ"
          : currentLocale === "en"
          ? "SUSTAINABLE HEALTHCARE"
          : "NACHHALTIGE",
      line2: currentLocale === "de" ? "GESUNDHEITSVERSORGUNG" : "",
      description:
        dict.hero.values[2]?.description || "Heute handeln. Für morgen.",
    },
  ];

  return (
    <section className="relative w-full h-screen min-h-[640px] max-h-[1080px] flex flex-col justify-between bg-[#07130B] text-[#FAF8F5] overflow-hidden">
      {/* ── Main Hero Area (Fills height from Header down to Strip) ─ */}
      <div className="relative flex-1 flex items-center overflow-hidden w-full">
        {/* ── Background: Building photo ─────────────────── */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/hero/building_new.png"
            alt="NabiOta Health Group Germany Headquarters"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* ── Left side: Ultra-smooth feathered blur layer ────────── */}
          <div
            className="absolute inset-y-0 left-0 w-full sm:w-[70%] lg:w-[58%] pointer-events-none"
            style={{
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 25%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.15) 75%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 25%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.15) 75%, transparent 100%)",
            }}
          />

          {/* ── Left side: Smooth dark gradient overlay for text readability ── */}
          <div
            className="absolute inset-y-0 left-0 w-full sm:w-[75%] lg:w-[60%] pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(7,19,11,0.92) 0%, rgba(7,19,11,0.86) 32%, rgba(7,19,11,0.48) 58%, rgba(7,19,11,0.12) 78%, transparent 100%)",
            }}
          />

          {/* Top subtle vignette for header integration */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#07130B]/75 to-transparent pointer-events-none" />
        </div>

        {/* ── Desktop Right Panel: Graceful Glassmorphism Arc from Top to Bottom ── */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[380px] xl:w-[440px] 2xl:w-[480px] z-10 pointer-events-auto overflow-hidden">
          {/* SVG Definitions with normalized objectBoundingBox for 100% bug-free lock */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-20"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="heroGoldArcGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#DFCA98" stopOpacity="0.4" />
                <stop offset="25%" stopColor="#D4B06A" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#ECCF93" stopOpacity="1" />
                <stop offset="75%" stopColor="#C9A257" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#DFCA98" stopOpacity="0.4" />
              </linearGradient>

              <filter id="heroArcGlow" x="-30%" y="-10%" width="160%" height="120%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Normalized clip-path: 100% synchronized with the gold line */}
              <clipPath id="heroCurvedPanelClip" clipPathUnits="objectBoundingBox">
                <path d="M 0.36 0 C 0.29 0.32, 0.15 0.66, 0.02 1 L 1 1 L 1 0 Z" />
              </clipPath>
            </defs>

            {/* Glowing golden arc stroke running gracefully from top to bottom (exactly matching 0.36 -> 0.02) */}
            <path
              d="M 360 0 C 290 320, 150 660, 20 1000"
              fill="none"
              stroke="url(#heroGoldArcGrad)"
              strokeWidth="1.8"
              filter="url(#heroArcGlow)"
            />
          </svg>

          {/* ── Frosted Glass Layer (Light airy glass with soft backdrop) ── */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              clipPath: "url(#heroCurvedPanelClip)",
              WebkitClipPath: "url(#heroCurvedPanelClip)",
              background:
                "linear-gradient(180deg, rgba(8, 22, 14, 0.35) 0%, rgba(7, 20, 12, 0.44) 50%, rgba(5, 16, 10, 0.52) 100%)",
              backdropFilter: "blur(8px) saturate(118%)",
              WebkitBackdropFilter: "blur(8px) saturate(118%)",
            }}
          />

          {/* Content inside the curved glass panel (Placed safely to the right of the arc curve) */}
          <div className="relative z-30 h-full flex flex-col justify-center pl-36 xl:pl-44 pr-6 sm:pr-8 xl:pr-10 pt-16 pb-4">
            <div className="space-y-6 xl:space-y-7">
              {heroValues.map((val, idx) => {
                const IconComp = val.icon;
                return (
                  <div key={idx} className="group">
                    <div className="flex items-center gap-3.5 xl:gap-4.5">
                      {/* Lighter, Larger Gold outlined circle icon */}
                      <div className="w-13.5 h-13.5 xl:w-15 xl:h-15 rounded-full border border-[#F5E2B8]/85 bg-[#142C1E]/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 text-[#FCEECB] group-hover:border-[#FFF6E3] group-hover:text-white transition-all duration-300 shadow-[0_0_14px_rgba(245,226,184,0.22)]">
                        <IconComp className="w-6.5 h-6.5 xl:w-7 xl:h-7 stroke-[1.7]" />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-sans text-[12px] xl:text-[13.5px] font-bold uppercase tracking-[0.09em] text-white leading-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.65)]">
                          {val.line1}
                          {val.line2 && (
                            <>
                              <br />
                              {val.line2}
                            </>
                          )}
                        </h3>
                        {/* Light, clearly readable description text */}
                        <p className="text-[11.5px] xl:text-[12.5px] text-[#FAF8F5]/90 leading-relaxed font-normal mt-1 max-w-[225px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
                          {val.description}
                        </p>
                      </div>
                    </div>

                    {/* Faint divider line between items */}
                    {idx < heroValues.length - 1 && (
                      <div className="mt-5 xl:mt-6 h-[1px] bg-gradient-to-r from-transparent via-[#F5E2B8]/25 to-transparent" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Left Content: Typography 1:1 Matching Photo 1 ─────── */}
        <div className="relative z-10 w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-14">
          <div className="max-w-xl lg:max-w-2xl pt-20 lg:pt-0">
            {/* Eyebrow */}
            <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#C5A56A] uppercase mb-4">
              {dict.hero.eyebrow}
            </span>

            {/* Heading: Line 1 White, Line 2 Warm Gold (Upright Playfair serif) */}
            <h1 className="font-display text-[52px] sm:text-[66px] md:text-[74px] lg:text-[78px] xl:text-[86px] font-normal leading-[0.95] tracking-[-0.01em] mb-5">
              <span className="text-white block">
                {dict.hero.headingLine1}
              </span>
              <span className="text-[#DEC085] block font-normal">
                {dict.hero.headingLine2}
              </span>
            </h1>

            {/* Description text */}
            <p className="text-[13px] sm:text-[14.5px] text-[#FAF8F5] leading-[1.65] font-sans max-w-lg mb-7 font-light">
              {dict.hero.description}
            </p>

            {/* CTA: Golden pill button matching Photo 1 exactly */}
            <Link
              href={`/${currentLocale}/about`}
              className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#ECCF96] to-[#D8B772] text-[#142217] font-sans font-semibold text-[13px] sm:text-[13.5px] tracking-wide shadow-md hover:from-[#F2DAB0] hover:to-[#DEBD7A] transition-all duration-300"
            >
              <span>{dict.hero.ctaMore}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile / Tablet fallback for values panel (< lg) */}
          <div className="lg:hidden mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {heroValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-full border border-[#F5E2B8]/80 bg-[#142C1E]/30 flex items-center justify-center flex-shrink-0 text-[#FCEECB]">
                    <IconComp className="w-5.5 h-5.5 stroke-[1.7]" />
                  </div>
                  <div>
                    <h3 className="text-[11.5px] font-bold uppercase tracking-wider text-white">
                      {val.line1} {val.line2}
                    </h3>
                    <p className="text-[11px] text-[#FAF8F5]/85 mt-0.5 leading-snug">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Bottom Docked Strip: Embedded inside 100vh First Screen! ── */}
      <div className="relative z-30 flex-shrink-0 w-full">
        <AreasStrip currentLocale={currentLocale} />
      </div>
    </section>
  );
}
