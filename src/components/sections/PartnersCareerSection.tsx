import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { getDictionary, SupportedLocale } from "@/lib/i18n";

interface PartnersCareerSectionProps {
  currentLocale?: SupportedLocale;
}

export function PartnersCareerSection({ currentLocale = "de" }: PartnersCareerSectionProps) {
  const dict = getDictionary(currentLocale);

  return (
    <section className="bg-[#FAF8F5] py-14 sm:py-18 lg:py-22">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8 items-stretch">
          {/* ── LEFT CARD: Partner & Kooperationen ───────────── */}
          <div className="rounded-2xl bg-white border border-[#EAE5DA] shadow-[0_2px_14px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col sm:flex-row items-stretch transition-all duration-300 hover:shadow-md group">
            {/* Left text column */}
            <div className="flex-1 p-6 sm:p-7 xl:p-8 flex flex-col justify-between">
              <div>
                <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.2em] text-[#BFA267] uppercase block mb-2">
                  {dict.split.partners.eyebrow}
                </span>
                <h2 className="font-display text-[24px] sm:text-[26px] xl:text-[30px] font-normal text-[#112117] tracking-tight leading-[1.2] mb-3">
                  {dict.split.partners.heading}
                </h2>
                <p className="text-xs sm:text-[12.5px] text-[#555A52] leading-[1.65] mb-6 font-sans">
                  {dict.split.partners.description}
                </p>
              </div>

              <Link
                href={`/${currentLocale}/partners`}
                className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#112117]/30 text-[#112117] font-medium text-xs tracking-wide hover:border-[#BEA06B] hover:text-[#BEA06B] transition-all self-start mt-auto"
              >
                <span>{dict.split.partners.cta}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>

            {/* Right image column with atrium photo & slogan overlay */}
            <div className="w-full sm:w-[44%] xl:w-[42%] relative min-h-[220px] sm:min-h-full overflow-hidden flex-shrink-0 bg-forest-900/5">
              <Image
                src="/images/partners/atrium.jpg"
                alt="Kooperationspartner im medizinischen Atrium"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent hidden sm:block pointer-events-none" />

              {/* Slogan overlay on photo */}
              <div className="absolute right-3.5 sm:right-4 bottom-3.5 sm:bottom-5 max-w-[135px] text-right pointer-events-none">
                <span className="text-[10px] xl:text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#112117] leading-tight block drop-shadow-sm font-sans">
                  {currentLocale === "ru" ? (
                    <>
                      НАДЕЖНЫЕ
                      <br />
                      ПАРТНЕРСТВА
                      <br />
                      ДЛЯ ЗДОРОВОГО
                      <br />
                      БУДУЩЕГО.
                    </>
                  ) : currentLocale === "en" ? (
                    <>
                      STRONG
                      <br />
                      PARTNERSHIPS
                      <br />
                      FOR A HEALTHIER
                      <br />
                      FUTURE.
                    </>
                  ) : (
                    <>
                      STARKE
                      <br />
                      PARTNERSCHAFTEN
                      <br />
                      FÜR EINE
                      <br />
                      GESÜNDERE
                      <br />
                      ZUKUNFT.
                    </>
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* ── RIGHT CARD: Karriere ─────────────────────────── */}
          <div className="rounded-2xl bg-gradient-to-r from-[#0C1E14] via-[#0E2418] to-[#122A1C] text-white border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col sm:flex-row items-stretch transition-all duration-300 hover:shadow-xl group">
            {/* Left text column */}
            <div className="flex-1 p-6 sm:p-7 xl:p-8 flex flex-col justify-between">
              <div>
                <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.2em] text-[#C5A56A] uppercase block mb-2">
                  {dict.split.career.eyebrow}
                </span>
                <h2 className="font-display text-[24px] sm:text-[26px] xl:text-[30px] font-normal text-white tracking-tight leading-[1.2] mb-3">
                  {dict.split.career.heading}
                </h2>
                <p className="text-xs sm:text-[12.5px] text-[#D0CDC4] leading-[1.65] mb-6 font-sans font-light">
                  {dict.split.career.description}
                </p>
              </div>

              <Link
                href={`/${currentLocale}/career`}
                className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ECCF96] to-[#D8B772] text-[#142217] font-semibold text-xs tracking-wide shadow-sm hover:from-[#F2DAB0] hover:to-[#DEBD7A] transition-all self-start mt-auto"
              >
                <span>{dict.split.career.cta}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>

            {/* Right image column with medical team photo */}
            <div className="w-full sm:w-[44%] xl:w-[42%] relative min-h-[220px] sm:min-h-full overflow-hidden flex-shrink-0">
              <Image
                src="/images/careers/team.jpg"
                alt="Medizinisches Team der NabiOta Health Group"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#0C1E14] to-transparent hidden sm:block pointer-events-none" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
