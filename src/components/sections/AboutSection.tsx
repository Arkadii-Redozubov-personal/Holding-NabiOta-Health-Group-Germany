import React from "react";
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
        {/* ── LEFT: Doctor-Patient Photo FLUSH TO THE EDGE with METALLIC GOLD ARC (Compact Height) ─ */}
        <div className="w-full lg:w-[44%] xl:w-[42%] 2xl:w-[40%] relative min-h-[300px] sm:min-h-[350px] lg:min-h-[390px] xl:min-h-[410px] flex-shrink-0">
          <svg
            className="w-full h-full block"
            viewBox="0 0 540 400"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Rich 3D metallic gold gradient matching reference photo */}
              <linearGradient id="aboutGoldMetallic" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#DFCA98" />
                <stop offset="25%" stopColor="#C8A055" />
                <stop offset="50%" stopColor="#FCEBCC" />
                <stop offset="75%" stopColor="#B38938" />
                <stop offset="100%" stopColor="#DFC894" />
              </linearGradient>

              {/* ClipPath: Left side touches screen edge (x=0), right side sweeps out in convex curve */}
              <clipPath id="aboutDoctorArcMask">
                <path d="M 0 0 L 415 0 C 510 110, 510 290, 415 400 L 0 400 Z" />
              </clipPath>
            </defs>

            {/* Doctor and patient photo clipped to the exact arc with zero gap */}
            <g clipPath="url(#aboutDoctorArcMask)">
              <image
                href="/images/about/doctor-patient.webp"
                x="0"
                y="0"
                width="540"
                height="400"
                preserveAspectRatio="xMidYMid slice"
              />
            </g>

            {/* Ambient gold glow */}
            <path
              d="M 415 0 C 510 110, 510 290, 415 400"
              fill="none"
              stroke="#C9A35A"
              strokeWidth="10"
              strokeOpacity="0.22"
            />

            {/* Main metallic gold ribbon arc */}
            <path
              d="M 415 0 C 510 110, 510 290, 415 400"
              fill="none"
              stroke="url(#aboutGoldMetallic)"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* Sharp inner highlight reflection */}
            <path
              d="M 415 0 C 510 110, 510 290, 415 400"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeOpacity="0.75"
            />
          </svg>
        </div>

        {/* ── RIGHT: Center Content & Benefits (Compact Height) ─ */}
        <div className="flex-1 flex flex-col xl:flex-row items-center justify-between py-6 sm:py-8 lg:py-9 pl-6 sm:pl-8 lg:pl-10 xl:pl-12 pr-6 sm:pr-8 lg:pr-10 xl:pr-14 gap-6 xl:gap-8">
          {/* ── Center Content: Eyebrow, Heading, Text, Button ── */}
          <div className="flex-1 max-w-xl flex flex-col justify-center">
            {/* Eyebrow */}
            <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase mb-1.5 sm:mb-2">
              {dict.about.eyebrow}
            </span>

            {/* Heading in serif */}
            <h2 className="font-serif text-[26px] sm:text-[30px] xl:text-[34px] font-normal leading-[1.16] tracking-[-0.01em] text-[#142318] mb-3 sm:mb-3.5">
              {dict.about.heading}
            </h2>

            {/* Description */}
            <p className="text-[13px] sm:text-[13.5px] text-[#4A473E] leading-[1.65] font-sans mb-4 sm:mb-5 font-normal">
              {dict.about.description}
            </p>

            {/* CTA – Golden pill button */}
            <Link
              href={`/${currentLocale}/about`}
              className="group inline-flex items-center gap-2 px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#ECCF93] to-[#D4AF67] text-[#142217] font-sans font-semibold text-[12px] sm:text-[12.5px] tracking-wide shadow-sm hover:from-[#F2DAB0] hover:to-[#DEBD7A] transition-all duration-300 self-start"
            >
              <span>{dict.about.cta}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* ── Hairline vertical divider ───────────────────── */}
          <div className="w-[1px] h-32 bg-[#E2DBD0] hidden xl:block flex-shrink-0 mx-1" />

          {/* ── Right: 3 Benefits with Golden Circles ───────── */}
          <div className="w-full xl:w-[270px] 2xl:w-[290px] space-y-3.5 sm:space-y-4 flex-shrink-0">
            {dict.about.benefits.map((benefit, idx) => {
              const IconComponent = benefitIcons[idx] || Handshake;
              return (
                <div key={idx} className="flex items-center gap-3 group">
                  {/* Gold circle icon */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#D5B878] bg-white/70 flex items-center justify-center flex-shrink-0 text-[#B89650] transition-all duration-300 group-hover:border-[#B89650] group-hover:bg-[#B89650]/10 shadow-[0_0_8px_rgba(213,184,120,0.15)]">
                    <IconComponent className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[1.6]" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans text-[12.5px] sm:text-[13px] font-bold text-[#142318] leading-tight mb-0.5">
                      {benefit.title}
                    </h3>
                    <p className="text-[11px] sm:text-[11.5px] text-[#6E756D] leading-snug">
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
