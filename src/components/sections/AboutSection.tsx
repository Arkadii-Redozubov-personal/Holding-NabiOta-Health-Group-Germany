import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Handshake, Lightbulb, ShieldCheck } from "lucide-react";
import { getDictionary, SupportedLocale } from "@/lib/i18n";

interface AboutSectionProps {
  currentLocale?: SupportedLocale;
}

export function AboutSection({ currentLocale = "de" }: AboutSectionProps) {
  const dict = getDictionary(currentLocale);

  const benefitIcons = [Handshake, Lightbulb, ShieldCheck];

  return (
    <section className="bg-[#FAF7F0] overflow-hidden relative border-b border-[#E8E2D4]">
      {/* ── Full-width banner: Image FLUSH to left edge ─────────── */}
      <div className="w-full flex flex-col lg:flex-row items-stretch">
        {/* ── LEFT: Doctor-Patient Photo FLUSH TO THE EDGE with GOLD METALLIC ARC ─ */}
        <div className="w-full lg:w-[42%] xl:w-[40%] 2xl:w-[38%] relative min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] flex-shrink-0 overflow-hidden">
          {/* SVG Definition & Metallic Golden Arc Border */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-20"
            viewBox="0 0 500 500"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Rich 3D metallic gold gradient matching Photo 2 */}
              <linearGradient id="aboutGoldMetallic" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#DFCA98" />
                <stop offset="25%" stopColor="#C8A055" />
                <stop offset="50%" stopColor="#FCEBCC" />
                <stop offset="75%" stopColor="#B38938" />
                <stop offset="100%" stopColor="#DFC894" />
              </linearGradient>

              {/* Soft gold ambient shadow for depth */}
              <filter id="goldArcShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* ClipPath: Left side touches screen edge (x=0), right side sweeps out in convex curve */}
              <clipPath id="aboutDoctorArcMask">
                <path d="M 0 0 L 385 0 C 475 140, 475 360, 385 500 L 0 500 Z" />
              </clipPath>
            </defs>

            {/* Ambient gold glow */}
            <path
              d="M 385 0 C 475 140, 475 360, 385 500"
              fill="none"
              stroke="#C9A35A"
              strokeWidth="11"
              strokeOpacity="0.25"
              filter="url(#goldArcShadow)"
            />

            {/* Main metallic gold ribbon arc */}
            <path
              d="M 385 0 C 475 140, 475 360, 385 500"
              fill="none"
              stroke="url(#aboutGoldMetallic)"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* Sharp inner highlight reflection */}
            <path
              d="M 385 0 C 475 140, 475 360, 385 500"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1.2"
              strokeOpacity="0.75"
            />
          </svg>

          {/* Photo clipped to the golden arc, completely flush to the left edge */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              clipPath: "url(#aboutDoctorArcMask)",
              WebkitClipPath: "url(#aboutDoctorArcMask)",
            }}
          >
            <Image
              src="/images/about/doctor-patient.jpg"
              alt="Ärztliche Fürsorge bei NabiOta Health Group"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center scale-[1.03]"
            />
          </div>
        </div>

        {/* ── RIGHT: Center Content & Benefits (Structured matching Photo 2) ─ */}
        <div className="flex-1 flex flex-col xl:flex-row items-center justify-between py-12 sm:py-16 lg:py-20 pl-6 sm:pl-10 lg:pl-10 xl:pl-14 pr-6 sm:pr-10 lg:pr-14 xl:pr-18 gap-8 xl:gap-10">
          {/* ── Center Content: Eyebrow, Heading, Text, Button ── */}
          <div className="flex-1 max-w-xl flex flex-col justify-center">
            {/* Eyebrow */}
            <span className="text-[11px] font-bold tracking-[0.24em] text-[#BFA267] uppercase mb-3">
              {dict.about.eyebrow}
            </span>

            {/* Heading in Playfair Display serif */}
            <h2 className="font-display text-[32px] sm:text-[38px] xl:text-[42px] font-normal leading-[1.18] tracking-[-0.01em] text-[#1A1915] mb-5">
              {dict.about.heading}
            </h2>

            {/* Description */}
            <p className="text-[13.5px] sm:text-[14.5px] text-[#4A473E] leading-[1.75] font-sans mb-7 font-normal">
              {dict.about.description}
            </p>

            {/* CTA – Golden pill button matching Photo 2 */}
            <Link
              href={`/${currentLocale}/about`}
              className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#ECCF93] to-[#D4AF67] text-[#1A1915] font-sans font-semibold text-[13px] tracking-wide shadow-sm hover:from-[#F2DAB0] hover:to-[#DEBD7A] transition-all duration-300 self-start"
            >
              <span>{dict.about.cta}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* ── Hairline vertical divider ───────────────────── */}
          <div className="w-[1px] h-40 bg-[#E2DBD0] hidden xl:block flex-shrink-0 mx-2" />

          {/* ── Right: 3 Benefits with Golden Circles ───────── */}
          <div className="w-full xl:w-[280px] 2xl:w-[310px] space-y-6 sm:space-y-7 flex-shrink-0">
            {dict.about.benefits.map((benefit, idx) => {
              const IconComponent = benefitIcons[idx] || Handshake;
              return (
                <div key={idx} className="flex items-center gap-3.5 group">
                  {/* Gold circle icon */}
                  <div className="w-12 h-12 rounded-full border border-[#D5B878] flex items-center justify-center flex-shrink-0 text-[#B89650] transition-all duration-300 group-hover:border-[#B89650] group-hover:bg-[#B89650]/10 shadow-[0_0_10px_rgba(213,184,120,0.18)]">
                    <IconComponent className="w-5 h-5 stroke-[1.6]" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-sans text-[13.5px] font-bold text-[#1A1915] leading-snug mb-0.5">
                      {benefit.title}
                    </h3>
                    <p className="text-[11.5px] text-[#706B5F] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
