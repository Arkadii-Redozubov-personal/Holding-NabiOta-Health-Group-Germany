import React from "react";
import Link from "next/link";
import { ArrowRight, Handshake, Lightbulb, ShieldCheck } from "lucide-react";
import { getDictionary, getLocalePath, SupportedLocale } from "@/lib/i18n";

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
        <div className="w-full lg:w-[44%] xl:w-[42%] 2xl:w-[40%] relative min-h-[220px] sm:min-h-[260px] lg:min-h-[290px] xl:min-h-[310px] 2xl:min-h-[320px] flex-shrink-0">
          <svg
            className="w-full h-full block"
            viewBox="0 0 540 310"
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
                <path d="M 0 0 L 415 0 C 505 80, 505 230, 415 310 L 0 310 Z" />
              </clipPath>
            </defs>

            {/* Doctor and patient photo clipped to the exact arc with zero gap */}
            <g clipPath="url(#aboutDoctorArcMask)">
              <image
                href="/images/about/doctor-patient.webp"
                x="0"
                y="0"
                width="540"
                height="310"
                preserveAspectRatio="xMidYMid slice"
              />
            </g>

            {/* Ambient gold glow */}
            <path
              d="M 415 0 C 505 80, 505 230, 415 310"
              fill="none"
              stroke="#C9A35A"
              strokeWidth="9"
              strokeOpacity="0.22"
            />

            {/* Main metallic gold ribbon arc */}
            <path
              d="M 415 0 C 505 80, 505 230, 415 310"
              fill="none"
              stroke="url(#aboutGoldMetallic)"
              strokeWidth="4.5"
              strokeLinecap="round"
            />

            {/* Sharp inner highlight reflection */}
            <path
              d="M 415 0 C 505 80, 505 230, 415 310"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeOpacity="0.75"
            />
          </svg>
        </div>

        {/* ── RIGHT: Center Content & Benefits (Compact Height) ─ */}
        <div className="flex-1 flex flex-col xl:flex-row items-center justify-between py-4 sm:py-5 lg:py-6 pl-5 sm:pl-7 lg:pl-8 xl:pl-10 pr-5 sm:pr-7 lg:pr-8 xl:pr-10 gap-5 xl:gap-6">
          {/* ── Center Content: Heading, Text, Button ── */}
          <div className="flex-1 max-w-xl flex flex-col justify-center">
            {/* Heading in serif */}
            <h2 className="font-serif text-[22px] sm:text-[25px] xl:text-[28px] font-normal leading-[1.16] tracking-[-0.01em] text-[#142318] mb-2 sm:mb-2.5">
              {dict.about.heading}
            </h2>

            {/* Description */}
            <p className="text-[12px] sm:text-[12.5px] text-[#4A473E] leading-[1.55] font-sans mb-3 sm:mb-3.5 font-normal">
              {dict.about.description}
            </p>

            {/* CTA - Golden pill button */}
            <Link
              href={getLocalePath(currentLocale, "about")}
              className="group inline-flex items-center gap-2 px-4.5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#ECCF93] to-[#D4AF67] text-[#142217] font-sans font-semibold text-[11.5px] sm:text-[12px] tracking-wide shadow-xs hover:from-[#F2DAB0] hover:to-[#DEBD7A] transition-all duration-300 self-start"
            >
              <span>{dict.about.cta}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* ── Hairline vertical divider ───────────────────── */}
          <div className="w-[1px] h-20 bg-[#E2DBD0] hidden xl:block flex-shrink-0 mx-1" />

          {/* ── Right: 3 Benefits with Golden Circles ───────── */}
          <div className="w-full xl:w-[260px] 2xl:w-[280px] space-y-2 sm:space-y-2.5 flex-shrink-0">
            {dict.about.benefits.map((benefit, idx) => {
              const IconComponent = benefitIcons[idx] || Handshake;
              return (
                <div key={idx} className="flex items-center gap-3 group">
                  {/* Icon without circle */}
                  <div className="text-[#9C8145] group-hover:text-[#7D6532] flex items-center justify-center flex-shrink-0 transition-colors">
                    <IconComponent className="w-5.5 h-5.5 sm:w-6 sm:h-6 stroke-[1.5]" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans text-[12px] sm:text-[12.5px] font-bold text-[#142318] leading-tight mb-0.5">
                      {benefit.title}
                    </h3>
                    <p className="text-[10.5px] sm:text-[11px] text-[#6E756D] leading-snug">
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
