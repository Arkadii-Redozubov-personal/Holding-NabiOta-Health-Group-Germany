"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  Users2,
  Leaf,
  Network,
  GraduationCap,
  Award,
  HeartHandshake,
  Heart,
  FolderKanban,
  Star,
  CheckCircle2,
  ShieldCheck,
  X,
  Stethoscope,
  Building2,
  Activity,
  Phone,
  FileText,
} from "@/lib/icons";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { SupportedLocale } from "@/lib/i18n";
import { RecruitmentCompanySection } from "@/components/sections/RecruitmentCompanySection";
import { getInternationalPageTranslations, InternationalProgram } from "@/data/translations/international-page";


interface Props {
  locale?: SupportedLocale;
}

export function InternationalPageComponent({ locale = "de" }: Props) {
  const [selectedProgram, setSelectedProgram] = useState<InternationalProgram | null>(null);
  const isUz = locale === "uz";
  const isRu = locale === "ru";
  const isEn = locale === "en";
  const isTr = locale === "tr";
  const isAr = locale === "ar";

  // Standard Site PageHero Data
  const { heroData, heroBadges, t } = getInternationalPageTranslations(locale);

  return (
    <div className="min-h-screen bg-[#FBF9F5] flex flex-col font-sans text-[#1B3A29]">
      {/* 1. Global Navigation Header */}
      <Header currentLocale={locale} />

      <main className="flex-1">
        {/* 2. Site Page Hero with Botanical Background */}
        <PageHero
          locale={locale}
          title={heroData.title}
          eyebrow={heroData.eyebrow}
          description={heroData.desc}
          badges={heroBadges}
          imageSrc="/images/international/international-hero-doctors.webp"
          imagePosition="object-[right_center]"
        />

        {/* ========================================================================= */}
        {/* SECTION 2: VISION (GESUNDHEIT KENNT KEINE GRENZEN) - FULL WIDTH BLEED     */}
        {/* ========================================================================= */}
        <section className="relative w-full bg-[#FAF8F4] overflow-hidden border-t border-[#F0ECE1]">
          {/* Right Visual: World Map & Joined Hands (Photo 3) - Shifted left as requested */}
          <div className="w-full lg:w-[68%] xl:w-[65%] h-[280px] sm:h-[340px] lg:h-full lg:absolute lg:top-0 lg:bottom-0 lg:right-0 relative pointer-events-none select-none overflow-hidden order-2 lg:order-none">
            <Image
              src="/images/international/world-map-hands.webp"
              alt="World Map and Joined Hands - NabiOta Vision"
              fill
              className="object-cover object-[60%_center] sm:object-[64%_center] lg:object-[68%_center]"
              priority
            />
            {/* Soft left gradient fade into the cream background on desktop */}
            <div className="hidden lg:block absolute inset-y-0 left-0 w-36 xl:w-48 bg-gradient-to-r from-[#FAF8F4] via-[#FAF8F4]/80 to-transparent pointer-events-none" />
            <div className="lg:hidden absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#FAF8F4] to-transparent pointer-events-none" />
          </div>

          {/* Left Content: Standard Container alignment - Height reduced as requested */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 xl:py-14">
            <div className="max-w-xl space-y-3.5 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-serif font-bold text-[#0B2516] leading-[1.18] tracking-tight">
                {t.s2.title}
              </h2>

              <p className="text-xs sm:text-[13.5px] text-[#4A5D52] leading-relaxed max-w-lg">
                {t.s2.desc}
              </p>

              <div className="pt-1.5 sm:pt-2">
                <a
                  href="#projekte"
                  className="inline-flex items-center gap-2.5 px-6 py-2.5 sm:py-3 rounded-full bg-[#F3EAD8] hover:bg-[#ECCF96] text-[#0B2516] border border-[#D5C096] text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm group"
                >
                  <span>{t.s2.btn}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2B: NABIOTA MEDICAL RECRUITMENT SERVICES GMBH - PDF IV.6         */}
        {/* ========================================================================= */}
        <RecruitmentCompanySection locale={locale} />

        {/* ========================================================================= */}
        {/* SECTION 4: UNSERE INTERNATIONALEN SCHWERPUNKTE (6 PROGRAMME IN 3 SPALTEN) */}
        {/* ========================================================================= */}
        <section id="projekte" className="py-14 sm:py-18 bg-white border-t border-[#F0ECE1]">
          <Container>
            {/* Header with Title and Link on the right */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div className="space-y-2.5 max-w-2xl">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B2516] leading-tight">
                  {t.s4.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#4A5D52] leading-relaxed">
                  {t.s4.desc}
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href={`/${locale}/nabiota-medical-recruitment`}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#B8934A] hover:text-[#0B2516] transition-colors group"
                >
                  <span>{t.s4.linkAll}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* 6 Programs Grid in the authentic international card style matching reference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.s4.programs.map((prog, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedProgram(prog)}
                  className="group bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#EBE6DC] shadow-xs hover:shadow-xl hover:border-[#ECCF96] transition-all duration-300 flex flex-col cursor-pointer"
                >
                  {/* Program Image without Region Tag */}
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={prog.image}
                      alt={prog.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Program Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-base font-serif font-bold text-[#0B2516] leading-snug group-hover:text-[#B8934A] transition-colors">
                        {prog.title}
                      </h3>
                      <p className="text-xs text-[#4A5D52] leading-relaxed">
                        {prog.shortDesc}
                      </p>
                    </div>

                    {/* Bottom Action Area: Details Pill Button + Arrow */}
                    <div className="pt-2 flex items-center justify-between border-t border-[#EBE5DA]/60">
                      <span className="text-[11px] font-semibold text-[#8C6D37] group-hover:text-[#0B2516] transition-colors">
                        {t.s4.openModalBtn}
                      </span>
                      <div className="text-[#B8934A] group-hover:text-[#0B2516] transition-colors flex items-center justify-center">
                        <ArrowRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>



        {/* ========================================================================= */}
        {/* SECTION 5: IMPACT BANNER (DARK EMERALD SPLIT SECTION WITH BOTANICAL BG)    */}
        {/* ========================================================================= */}
        <section className="relative bg-[#07190F] text-white overflow-hidden border-y border-[#D5B878]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
            {/* Left Column: Camper van on canyon road (Photo 1) */}
            <div className="lg:col-span-6 relative min-h-[280px] lg:min-h-[420px]">
              <Image
                src="/images/international/impact-camper-van.webp"
                alt="Sustainable Solutions for Healthy Communities"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/30 via-transparent to-[#07190F] pointer-events-none" />
              {/* Extra right-edge fade into solid #07190F on desktop */}
              <div className="hidden lg:block absolute inset-y-0 right-0 w-32 xl:w-48 bg-gradient-to-r from-transparent to-[#07190F] pointer-events-none" />
            </div>

            {/* Right Column: Impact Metrics with botanical-gold-bg.webp background */}
            <div className="lg:col-span-6 relative overflow-hidden p-8 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-center space-y-6 sm:space-y-7 bg-[#07190F]">
              {/* Botanical Gold Background Texture across right green part */}
              <div className="absolute inset-0 pointer-events-none z-0">
                <Image
                  src="/images/botanical-gold-bg.webp"
                  alt="Botanical Texture"
                  fill
                  className="object-fill opacity-100"
                  priority
                />
                {/* Ultra-smooth seamless blend from dark seam into botanical background */}
                <div className="hidden lg:block absolute inset-y-0 left-0 w-44 xl:w-64 bg-gradient-to-r from-[#07190F] via-[#07190F]/70 to-transparent pointer-events-none" />
                <div className="lg:hidden absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#07190F] via-[#07190F]/70 to-transparent pointer-events-none" />
              </div>

              <div className="relative z-10 space-y-3 sm:space-y-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-serif font-bold text-white leading-tight">
                  {t.s5.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#D1DDD5] leading-relaxed max-w-lg">
                  {t.s5.desc}
                </p>
              </div>

              {/* 4 Stats Grid */}
              <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-5 pt-3 border-t border-white/15">
                {t.s5.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-[#ECCF96] mb-1">
                      {stat.icon}
                    </div>
                    <div className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-[11px] sm:text-xs text-[#D1DDD5] font-medium leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: STIMMEN AUS DER ZUSAMMENARBEIT (3 TESTIMONIALS - LARGER CARDS) */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-16 lg:py-20 bg-[#FAF7F2] border-t border-[#EBE6DC]">
          <Container>
            {/* Header matching Photo */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
              <div className="space-y-2.5 max-w-2xl">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B2516] leading-tight">
                  {t.s6.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#4A5D52] leading-relaxed">
                  {t.s6.subtitle}
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href={`/${locale}/nabiota-medical-recruitment`}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#B8934A] hover:text-[#0B2516] transition-colors group"
                >
                  <span>{t.s6.linkAll}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* 3 Testimonials Grid matching Photo 2: LARGER cards, prominent avatars, full quote */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
              {t.s6.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-[#E5DFD3] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 min-h-[270px] sm:min-h-[290px]"
                >
                  {/* Top: Avatar on left + Quote on right */}
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden border-2 border-[#D8C7A5]/80 shrink-0 shadow-2xs">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-xs sm:text-[14px] text-[#1B3A29] leading-relaxed italic flex-1 pt-1 font-serif sm:font-sans">
                      {item.quote}
                    </p>
                  </div>

                  {/* Middle: Author Info */}
                  <div className="space-y-1 pl-1">
                    <h4 className="text-sm sm:text-base font-bold text-[#0B2516] leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#556358] leading-tight">
                      {item.role}
                    </p>
                    <p className="text-xs text-[#556358] leading-tight">
                      {item.location}
                    </p>
                  </div>

                  {/* Bottom: 5 Gold Stars */}
                  <div className="pt-1 flex text-[#D4AF37] gap-1 pl-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-[#D4AF37]" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: BOTTOM CTA BANNER (PHOTO 2 - INCREASED HEIGHT)                 */}
        {/* ========================================================================= */}
        <section className="relative w-full overflow-hidden min-h-[340px] sm:min-h-[380px] lg:min-h-[420px] flex items-center bg-[#FAF7F2] border-t border-[#EBE6DC]">
          {/* Panoramic Sunrise Mountain Photo (Photo 2) spanning full width edge-to-edge */}
          <Image
            src="/images/international/cta-sunrise-mountains.webp"
            alt="Globale Partnerschaften. Lokale Wirkung."
            fill
            className="object-cover object-center"
            priority
          />
          {/* Subtle soft gradient on left for gentle contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/65 via-[#FAF7F2]/25 to-transparent pointer-events-none" />

          {/* Left Text & CTA Button aligned with site container - Increased height & padding */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="max-w-xl space-y-3.5 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-serif font-bold text-[#0B2516] leading-tight">
                {t.s7.title}
              </h2>

              <p className="text-xs sm:text-[13.5px] text-[#4A5D52] leading-relaxed max-w-lg">
                {t.s7.desc}
              </p>

              <div className="pt-2 sm:pt-2.5">
                <Link
                  href={`/${locale}/nabiota-medical-recruitment`}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#FAF7F2] hover:bg-[#ECCF96] text-[#0B2516] border border-[#D8C7A5] text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm group"
                >
                  <span>{t.s7.btn}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* INTERACTIVE MODAL DIALOG: INTERNATIONAL COOPERATION DOMAINS               */}
        {/* ========================================================================= */}
        {selectedProgram && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setSelectedProgram(null)}
          >
            <div
              className="relative w-full max-w-5xl xl:max-w-[1100px] max-h-[92vh] overflow-y-auto rounded-3xl bg-[#FAF9F6] border border-[#E8DEC8] shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProgram(null)}
                aria-label={
                  isUz
                    ? "Oynani yopish"
                    : isRu
                    ? "Закрыть окно"
                    : isEn
                    ? "Close modal"
                    : isTr
                    ? "Pencereyi kapat"
                    : isAr
                    ? "إغلاق النافذة"
                    : "Schließen"
                }
                className="absolute top-5 right-5 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-[#EFE8D8] hover:bg-[#E2D5BE] text-[#0E281C] flex items-center justify-center transition-colors shadow-2xs z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-3 mb-6 pr-12">


                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0E281C] leading-tight">
                  {selectedProgram.modal.title}
                </h3>

                <p className="text-xs sm:text-sm font-medium text-[#8D6B27]">
                  {selectedProgram.modal.subtitle}
                </p>
              </div>

              {/* Modal Body: Description */}
              <div className="space-y-4 mb-7 text-xs sm:text-sm text-[#405448] leading-relaxed border-t border-[#E8DEC8] pt-5">
                <p>{selectedProgram.modal.description}</p>
              </div>

              {/* Two-Column Grid: Specifications & Implementation Scope */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-7">
                {/* Column 1: Clinical Domains */}
                <div className="p-5 rounded-2xl bg-[#F4EFE6] border border-[#E5DAC4] space-y-3">
                  <h4 className="font-serif text-sm sm:text-base font-bold text-[#0E281C] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2E6845] shrink-0" />
                    <span>{selectedProgram.modal.specificationsTitle}</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-[13px] text-[#33473B]">
                    {selectedProgram.modal.specifications.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2E6845] shrink-0 mt-1.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Implementation & Scope */}
                <div className="p-5 rounded-2xl bg-[#F4EFE6] border border-[#E5DAC4] space-y-3">
                  <h4 className="font-serif text-sm sm:text-base font-bold text-[#0E281C] flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#8D6B27] shrink-0" />
                    <span>{selectedProgram.modal.scopeTitle}</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-[13px] text-[#33473B]">
                    {selectedProgram.modal.scopeItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8D6B27] shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Regulatory & Safety Standards Bar */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#EAF2ED] border border-[#C5DDCB] flex items-start gap-3.5 mb-7">
                <ShieldCheck className="w-5 h-5 text-[#215E39] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h5 className="font-sans text-xs sm:text-[13px] font-bold text-[#143B23]">
                    {selectedProgram.modal.technicalTitle}
                  </h5>
                  <p className="text-[11px] sm:text-xs text-[#30533C] leading-relaxed">
                    {selectedProgram.modal.technicalText}
                  </p>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#E8DEC8]">
                <button
                  type="button"
                  onClick={() => setSelectedProgram(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-[#D5C7B0] text-xs font-semibold text-[#405448] hover:bg-[#EFE8D8] transition-colors order-2 sm:order-1"
                >
                  {isUz
                    ? "Oynani yopish"
                    : isRu
                    ? "Закрыть окно"
                    : isEn
                    ? "Close window"
                    : isTr
                    ? "Kapat"
                    : isAr
                    ? "إغلاق"
                    : "Schließen"}
                </button>

                <Link
                  href={`/${locale}/nabiota-medical-recruitment`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#0B2516] hover:bg-[#163D29] text-white text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md group order-1 sm:order-2"
                >
                  <span>{selectedProgram.modal.ctaButtonText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* 3. Global Footer */}
      <Footer currentLocale={locale} />
    </div>
  );
}
