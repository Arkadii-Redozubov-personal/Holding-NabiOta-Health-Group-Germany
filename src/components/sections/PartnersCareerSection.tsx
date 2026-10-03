import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getDictionary, SupportedLocale } from "@/lib/i18n";

interface PartnersCareerSectionProps {
  currentLocale?: SupportedLocale;
}

export function PartnersCareerSection({ currentLocale = "de" }: PartnersCareerSectionProps) {
  const dict = getDictionary(currentLocale);

  return (
    <section className="bg-[#FAF8F5] py-5 sm:py-6 lg:py-8">
      <div className="mx-auto w-full max-w-[1540px] 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-6 items-stretch">
          {/* ── LEFT CARD: Partner & Kooperationen ───────────── */}
          <div className="rounded-2xl bg-white border border-[#E5DFD5] shadow-[0_2px_14px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col sm:flex-row items-stretch transition-all duration-300 hover:shadow-md group min-h-[290px] xl:min-h-[310px]">
            {/* Left text column */}
            <div className="flex-1 p-6 sm:p-7 xl:p-8 flex flex-col justify-between">
              <div>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#9C8145] uppercase block mb-2">
                  {dict.split.partners.eyebrow}
                </span>
                <h2 className="font-serif text-[24px] sm:text-[27px] xl:text-[31px] font-bold text-[#142318] tracking-tight leading-[1.18] mb-3">
                  {dict.split.partners.heading}
                </h2>
                <p className="text-[12px] sm:text-[12.5px] xl:text-[13px] text-[#4E544D] leading-[1.65] mb-5 font-sans">
                  {dict.split.partners.description}
                </p>
              </div>

              <Link
                href={`/${currentLocale}/partners`}
                className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D5BE8A] text-[#142318] font-medium text-xs tracking-wide bg-white hover:bg-[#FAF6F0] hover:border-[#BFA267] transition-all self-start mt-auto shadow-sm"
              >
                <span>{dict.split.partners.cta}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1 text-[#142318]" />
              </Link>
            </div>

            {/* Right image column with atrium photo & slogan overlay */}
            <div className="w-full sm:w-[45%] xl:w-[44%] relative min-h-[220px] sm:min-h-full overflow-hidden flex-shrink-0 bg-neutral-100">
              <Image
                src="/images/partners/atrium.webp"
                alt="Kooperationspartner im medizinischen Atrium"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent hidden sm:block pointer-events-none" />

              {/* Slogan overlay on photo */}
              <div className="absolute right-4 xl:right-6 top-1/2 -translate-y-1/2 max-w-[130px] xl:max-w-[145px] text-left pointer-events-none">
                <span className="text-[9.5px] xl:text-[10px] font-bold uppercase tracking-[0.14em] text-[#142318] leading-[1.35] block drop-shadow-sm font-sans">
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
          <div className="rounded-2xl bg-[#0C2417] text-white border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col sm:flex-row items-stretch transition-all duration-300 hover:shadow-xl group min-h-[290px] xl:min-h-[310px]">
            {/* Left text column */}
            <div className="flex-1 p-6 sm:p-7 xl:p-8 flex flex-col justify-between">
              <div>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#D8B979] uppercase block mb-2">
                  {dict.split.career.eyebrow}
                </span>
                <h2 className="font-serif text-[24px] sm:text-[27px] xl:text-[31px] font-bold text-white tracking-tight leading-[1.18] mb-3">
                  {dict.split.career.heading}
                </h2>
                <p className="text-[12px] sm:text-[12.5px] xl:text-[13px] text-[#C5CCC5] leading-[1.65] mb-5 font-sans font-light">
                  {dict.split.career.description}
                </p>
              </div>

              <Link
                href={`/${currentLocale}/career`}
                className="group/btn inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#ECCF96] to-[#D5B066] text-[#112117] font-semibold text-xs tracking-wide shadow-md hover:from-[#F3D9A5] hover:to-[#DEC07B] transition-all self-start mt-auto"
              >
                <span>{dict.split.career.cta}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1 text-[#112117]" />
              </Link>
            </div>

            {/* Right image column with medical team photo */}
            <div className="w-full sm:w-[45%] xl:w-[44%] relative min-h-[220px] sm:min-h-full overflow-hidden flex-shrink-0 bg-[#0C2417]">
              <Image
                src="/images/careers/team.webp"
                alt="Medizinisches Team der NabiOta Health Group"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-[#0C2417] to-transparent hidden sm:block pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

