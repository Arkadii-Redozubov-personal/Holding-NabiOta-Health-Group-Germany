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
    <section className="bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 overflow-hidden">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* ── LEFT: Image (4 cols) ────────────────── */}
          <div className="lg:col-span-4">
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/about/doctor-patient.jpg"
                alt="Ärztliche Fürsorge bei NabiOta Health Group"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* ── CENTER: Text content (5 cols) ───────── */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Eyebrow */}
            <span className="text-[11px] font-semibold tracking-[0.22em] text-[#BEA06B] uppercase mb-4">
              {dict.about.eyebrow}
            </span>

            {/* Heading */}
            <h2 className="font-display text-[28px] sm:text-[34px] lg:text-[40px] font-normal leading-[1.15] tracking-[-0.01em] text-[#0D1910] mb-5">
              {dict.about.heading}
            </h2>

            {/* Description */}
            <p className="text-[13px] sm:text-sm text-[#5A5647] leading-[1.75] font-sans mb-7">
              {dict.about.description}
            </p>

            {/* CTA – dark outlined pill to match reference */}
            <Link
              href={`/${currentLocale}/about`}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#0D1910]/25 text-[#0D1910] font-sans font-medium text-[13px] tracking-wide hover:border-[#BEA06B] hover:text-[#BEA06B] transition-all duration-300 self-start"
            >
              <span>{dict.about.cta}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* ── RIGHT: 3 Benefits (3 cols) ──────────── */}
          <div className="lg:col-span-3 space-y-6 lg:pl-6 lg:border-l lg:border-[#E5E0D6]">
            {dict.about.benefits.map((benefit, idx) => {
              const IconComponent = benefitIcons[idx] || Handshake;
              return (
                <div key={idx} className="flex items-start gap-3 group">
                  {/* Gold circle icon */}
                  <div className="w-10 h-10 rounded-full border border-[#BEA06B]/50 flex items-center justify-center flex-shrink-0 text-[#BEA06B] transition-all duration-300 group-hover:border-[#BEA06B] group-hover:bg-[#BEA06B]/10">
                    <IconComponent className="w-[18px] h-[18px] stroke-[1.5]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-sans text-[13px] font-bold text-[#0D1910] leading-snug mb-0.5">
                      {benefit.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#7A7568] leading-relaxed">
                      {benefit.description}
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
