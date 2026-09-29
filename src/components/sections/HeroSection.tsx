import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Diamond, Leaf } from "lucide-react";
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
      description:
        dict.hero.values[0]?.description ||
        "Für Patienten, Angehörige, Fachkräfte und Partner.",
    },
    {
      icon: Diamond,
      title: dict.hero.values[1]?.title || "QUALITÄT UND VERTRAUEN",
      description:
        dict.hero.values[1]?.description ||
        "Verlässlich. Transparent. Verantwortungsvoll.",
    },
    {
      icon: Leaf,
      title: dict.hero.values[2]?.title || "NACHHALTIGE GESUNDHEITSVERSORGUNG",
      description:
        dict.hero.values[2]?.description || "Heute handeln. Für morgen.",
    },
  ];

  return (
    <section className="relative h-screen min-h-[600px] max-h-[1100px] flex items-center bg-[#0D1910] text-[#FAF8F5] overflow-hidden">
      {/* ── Background layers ─────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Base deep forest */}
        <div className="absolute inset-0 bg-[#0D1910]" />

        {/* Building facade photo – fills entire hero */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/building.png"
            alt="NabiOta Health Group Germany Headquarters"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Left side: heavy blur + dark gradient for text readability (NOT solid black) */}
        <div
          className="absolute inset-y-0 left-0 w-[55%] lg:w-[48%]"
          style={{
            background:
              "linear-gradient(to right, rgba(13,25,16,0.92) 0%, rgba(13,25,16,0.85) 40%, rgba(13,25,16,0.6) 70%, transparent 100%)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
        />

        {/* Top gradient for header area */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0D1910]/80 to-transparent" />

        {/* Bottom gradient for strip transition */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0D1910]/60 to-transparent" />

        {/* Botanical leaves framing – top-left */}
        <div className="absolute -top-6 -left-6 w-64 h-64 opacity-20 text-[#1A3822] pointer-events-none">
          <svg viewBox="0 0 300 300" fill="currentColor">
            <path d="M20 280 C40 140 160 30 280 20 C240 160 140 250 20 280 Z" />
          </svg>
        </div>
        {/* Botanical leaves framing – top-right */}
        <div className="absolute top-0 right-0 w-72 h-72 opacity-20 text-[#142C1B] pointer-events-none translate-x-10 -translate-y-6">
          <svg viewBox="0 0 300 300" fill="currentColor">
            <path d="M280 20 C260 160 140 270 20 280 C60 140 160 50 280 20 Z" />
          </svg>
        </div>
      </div>

      {/* ── Content grid ─────────────────────────────── */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* ── LEFT: Text column (5 cols) ────────────── */}
          <div className="lg:col-span-5 flex flex-col items-start max-w-lg pt-20 lg:pt-0">
            {/* Eyebrow */}
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#C5A56A] uppercase mb-5">
              {dict.hero.eyebrow}
            </span>

            {/* Heading – line1 regular, line2 italic */}
            <h1 className="font-display text-[52px] sm:text-[64px] md:text-[72px] lg:text-[78px] xl:text-[86px] font-normal leading-[0.95] tracking-[-0.02em] text-white mb-6">
              {dict.hero.headingLine1}
              <br />
              <span className="italic">{dict.hero.headingLine2}</span>
            </h1>

            {/* Description */}
            <p className="text-[13px] sm:text-[15px] text-[#CCC9BF] leading-[1.7] font-sans max-w-md mb-8 font-light">
              {dict.hero.description}
            </p>

            {/* CTA – dark outlined pill, NOT gold gradient */}
            <Link
              href={`/${currentLocale}/about`}
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-[#C5C0B4]/40 text-white font-sans font-medium text-[13px] tracking-wide hover:border-[#C5A56A]/70 hover:text-[#E8D5A8] transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[#C5A56A]/50"
            >
              <span>{dict.hero.ctaMore}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* ── CENTER: building visible through gap (3 cols) ─ */}
          <div className="hidden lg:block lg:col-span-3 pointer-events-none" />

          {/* ── RIGHT: Values panel with curved left edge (4 cols) ─ */}
          <div className="lg:col-span-4 flex items-center justify-end">
            <div
              className="relative w-full max-w-[320px] xl:max-w-[340px] py-8 px-7 sm:px-8 space-y-7"
              style={{
                background:
                  "linear-gradient(135deg, rgba(13,25,16,0.88) 0%, rgba(16,30,20,0.92) 50%, rgba(13,25,16,0.85) 100%)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                borderRadius: "40px 20px 20px 40px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {heroValues.map((val, idx) => {
                const IconComponent = val.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 group">
                    {/* Circle icon */}
                    <div className="w-11 h-11 rounded-full border border-[#C5A56A]/50 flex items-center justify-center flex-shrink-0 text-[#C5A56A] transition-all duration-300 group-hover:border-[#C5A56A] group-hover:bg-[#C5A56A]/10">
                      <IconComponent className="w-[18px] h-[18px] stroke-[1.5]" />
                    </div>

                    <div className="flex-1 pt-0.5">
                      <h3 className="font-sans text-[11px] sm:text-xs font-bold uppercase tracking-[0.08em] text-white leading-snug mb-1">
                        {val.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-[#A8A498] leading-relaxed font-light">
                        {val.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
