import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Handshake, Lightbulb, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { getDictionary, SupportedLocale } from "@/lib/i18n";

interface AboutSectionProps {
  currentLocale?: SupportedLocale;
}

export function AboutSection({ currentLocale = "de" }: AboutSectionProps) {
  const dict = getDictionary(currentLocale);

  const benefitIcons = [Handshake, Lightbulb, ShieldCheck];

  return (
    <section className="bg-[#FAF7F0] py-14 sm:py-20 lg:py-24 overflow-hidden relative border-b border-[#E8E2D4]">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-10 items-center">
          {/* ── LEFT: Doctor-Patient Photo with SWEEPING GOLD METALLIC ARC ─ */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] xl:aspect-[5/4] max-w-[540px] mx-auto">
              {/* SVG with ClipPath for the image + Metallic Gold Arc Border */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                viewBox="0 0 500 500"
                preserveAspectRatio="none"
              >
                <defs>
                  {/* Rich 3D metallic gold gradient */}
                  <linearGradient id="aboutGoldMetallic" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#DFCA98" />
                    <stop offset="25%" stopColor="#C8A055" />
                    <stop offset="50%" stopColor="#FCEBCC" />
                    <stop offset="75%" stopColor="#B38938" />
                    <stop offset="100%" stopColor="#DFC894" />
                  </linearGradient>

                  {/* Soft gold glow filter */}
                  <filter id="goldArcShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* ClipPath: Left side straight, right side sweeping convex curve */}
                  <clipPath id="aboutDoctorArcMask">
                    <path d="M 0 0 L 385 0 C 475 140, 475 360, 385 500 L 0 500 Z" />
                  </clipPath>
                </defs>

                {/* Outer soft gold ambient shadow */}
                <path
                  d="M 385 0 C 475 140, 475 360, 385 500"
                  fill="none"
                  stroke="#C9A35A"
                  strokeWidth="10"
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

                {/* Crisp inner highlight reflection */}
                <path
                  d="M 385 0 C 475 140, 475 360, 385 500"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                  strokeOpacity="0.65"
                />
              </svg>

              {/* The clipped doctor and patient photo */}
              <div
                className="relative w-full h-full"
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
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center scale-[1.03]"
                />
              </div>
            </div>
          </div>

          {/* ── CENTER: Text & Golden CTA Button (4 cols on xl) ─────── */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-center">
            {/* Eyebrow */}
            <span className="text-[11px] font-bold tracking-[0.24em] text-[#BFA267] uppercase mb-3">
              {dict.about.eyebrow}
            </span>

            {/* Headline */}
            <h2 className="font-display text-[30px] sm:text-[36px] xl:text-[40px] font-normal leading-[1.18] tracking-[-0.01em] text-[#1A1915] mb-5">
              {dict.about.heading}
            </h2>

            {/* Description */}
            <p className="text-[13px] sm:text-[14px] text-[#4A473E] leading-[1.75] font-sans mb-7 font-normal">
              {dict.about.description}
            </p>

            {/* CTA – Golden pill button matching Photo 3 */}
            <Link
              href={`/${currentLocale}/about`}
              className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#ECCF93] to-[#D4AF67] text-[#1A1915] font-sans font-semibold text-[13px] tracking-wide shadow-sm hover:from-[#F2DAB0] hover:to-[#DEBD7A] transition-all duration-300 self-start"
            >
              <span>{dict.about.cta}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* ── RIGHT: 3 Benefits with Divider (3 cols) ─────────────── */}
          <div className="lg:col-span-3 xl:col-span-3 flex items-center">
            {/* Hairline vertical divider */}
            <div className="w-[1px] h-36 bg-[#E2DBD0] hidden lg:block mr-6 xl:mr-8 flex-shrink-0" />

            <div className="space-y-6 sm:space-y-7 flex-1">
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
      </Container>
    </section>
  );
}
