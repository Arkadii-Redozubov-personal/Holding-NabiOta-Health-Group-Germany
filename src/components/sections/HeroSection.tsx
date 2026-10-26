import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { getDictionary, getLocalePath, SupportedLocale } from "@/lib/i18n";
import { AreasStrip } from "@/components/sections/AreasStrip";

interface HeroSectionProps {
  currentLocale?: SupportedLocale;
}

export function HeroSection({ currentLocale = "de" }: HeroSectionProps) {
  const dict = getDictionary(currentLocale);

  return (
    <section dir="ltr" className="relative w-full min-h-screen lg:h-screen lg:min-h-[700px] lg:max-h-[1080px] flex flex-col justify-between bg-[#07130B] text-[#FAF8F5] overflow-x-hidden">
      {/* ── Main Hero Area (Fills height from Header down to Strip) ─ */}
      <div className="relative flex-1 flex items-center overflow-hidden w-full py-10 lg:py-0">
        {/* ── Background: Building photo ─────────────────── */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/hero/building_new.webp"
            alt="NabiOta Health Group Germany Headquarters"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* ── Left side: feathered blur layer ────────── */}
          <div
            className="absolute inset-y-0 w-full sm:w-[70%] lg:w-[58%] pointer-events-none left-0"
            style={{
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              maskImage: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 25%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.15) 75%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 25%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.15) 75%, transparent 100%)",
            }}
          />

          {/* ── Left side: dark gradient overlay for text readability ── */}
          <div
            className="absolute inset-y-0 w-full sm:w-[75%] lg:w-[60%] pointer-events-none left-0"
            style={{
              background:
                "linear-gradient(to right, rgba(7,19,11,0.92) 0%, rgba(7,19,11,0.86) 32%, rgba(7,19,11,0.48) 58%, rgba(7,19,11,0.12) 78%, transparent 100%)",
            }}
          />

          {/* Top subtle vignette for header integration */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#07130B]/75 to-transparent pointer-events-none" />
        </div>


        {/* ── Left Content: Typography (same layout for all locales) ─────── */}
        <div className="relative z-10 w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-14">
          <div className="max-w-xl lg:max-w-[560px] xl:max-w-[660px] 2xl:max-w-[720px] pt-20 sm:pt-24 lg:pt-10 xl:pt-12">
            {/* Heading: Both lines white (Upright elegant serif) matching reference 1:1 */}
            <h1 className="font-display text-[40px] sm:text-[54px] md:text-[64px] lg:text-[68px] xl:text-[80px] 2xl:text-[86px] font-normal leading-[0.98] tracking-[-0.01em] mb-4 sm:mb-5 break-words [overflow-wrap:anywhere] hyphens-auto">
              <span className="text-white block">
                {dict.hero.headingLine1}
              </span>
              <span className="text-white block font-normal">
                {dict.hero.headingLine2}
              </span>
            </h1>

            {/* Description text */}
            <p className="text-[13.5px] sm:text-[14.5px] text-[#FAF8F5] leading-[1.65] font-sans max-w-lg mb-7 font-light drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] break-words [overflow-wrap:anywhere] hyphens-auto">
              {dict.hero.description}
            </p>

            {/* CTAs: 2 buttons side-by-side in one row on mobile without column wrapping */}
            <div className="flex flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto">
              {/* Primary: Warm sand/gold filled pill */}
              <Link
                href={getLocalePath(currentLocale, "about")}
                className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-3.5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#ECCF96] to-[#D8B772] text-[#142217] font-sans font-semibold text-[12px] sm:text-[13.5px] tracking-wide shadow-lg hover:from-[#F2DAB0] hover:to-[#DEBD7A] transition-all duration-300 text-center whitespace-nowrap"
              >
                <span>{dict.hero.ctaMore}</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
              </Link>

              {/* Secondary: Outlined "Termin anfragen" with calendar icon */}
              <Link
                href={getLocalePath(currentLocale, "contact")}
                className="group flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-3.5 sm:px-7 py-2.5 sm:py-3 rounded-full border border-white/60 hover:border-white bg-black/25 hover:bg-white/10 backdrop-blur-sm text-white font-sans font-semibold text-[12px] sm:text-[13.5px] tracking-wide transition-all duration-300 text-center whitespace-nowrap"
              >
                <CalendarDays className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90 shrink-0" />
                <span>{dict.hero.ctaTermin}</span>
              </Link>
            </div>
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
