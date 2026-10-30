"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  ShieldCheck,
  Home,
  Hospital,
  Clock,
  Stethoscope,
  Pill,
  Building2,
  Accessibility,
  HeartHandshake,
  Check,
  Star,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  Plus,
  Minus,
  X,
  Activity,
  FileText,
  Info,
} from "@/lib/icons";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import type { SupportedLocale } from "@/lib/i18n";
import { HomeCareCompanySection } from "@/components/sections/HomeCareCompanySection";
import { SanitaetshausCompanySection } from "@/components/sections/SanitaetshausCompanySection";
import { PharmacyCompanySection } from "@/components/sections/PharmacyCompanySection";
import {
  CareServicesCatalog,
  SanitaetshausCatalog,
} from "@/components/sections/CareCatalogSections";
import {
  getHomeCareServices,
  getSanitaetshausServices,
  type CareServiceModalData,
} from "@/data/care-services";
import { getPflegePageTranslations } from "@/data/translations/pflege-page";

interface Props {
  locale?: SupportedLocale;
}

export function PflegePageComponent({ locale = "de" }: Props) {
  const isUz = locale === "uz";
  const isRu = locale === "ru";
  const isEn = locale === "en";
  const isTr = locale === "tr";
  const isAr = locale === "ar";

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedService, setSelectedService] = useState<CareServiceModalData | null>(null);
  const [selectedSupplyModal, setSelectedSupplyModal] = useState<CareServiceModalData | null>(null);

  // Lock body scroll and listen for Escape key on modal open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedService(null);
        setSelectedSupplyModal(null);
      }
    };

    if (selectedService || selectedSupplyModal) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedService, selectedSupplyModal]);

  // Standard Header/Hero Data
  const { heroData, heroBadges, t } = getPflegePageTranslations(locale);
  const servicesData = getHomeCareServices(locale);
  const sanitaetshausData = getSanitaetshausServices(locale);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F5] text-forest-950 font-sans selection:bg-gold-500/20">
      {/* ── 1. GLOBAL SITE NAVIGATION HEADER ── */}
      <Header currentLocale={locale} />

      {/* ── 2. SITE STANDARD PAGE HERO (Unified Header with botanical gold background) ── */}
      <PageHero
          locale={locale}
        title={heroData.title}
        eyebrow={heroData.eyebrow}
        description={heroData.desc}
        imageSrc="/images/areas/pflege.webp"
        imageAlt="NabiOta Health Group Pflege & HomeCare"
        badges={heroBadges}
      />

      <main className="flex-1 bg-[#FAF9F5]">
        {/* ========================================================================= */}
        {/* SECTION 1: WHY CHOOSE US - Personalized Care                              */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-20 bg-[#FAF9F5] relative overflow-hidden border-b border-[#EAE3D5]">
          {/* Botanical green foliage on far right */}
          <div className="absolute right-0 top-0 bottom-0 w-64 sm:w-80 md:w-96 pointer-events-none opacity-85 z-0 select-none overflow-hidden">
            <Image
              src="/images/areas/botanical-branch-clean.webp"
              alt="Botanical Foliage"
              fill
              className="object-contain object-right"
              priority
            />
          </div>

          <Container size="wide" className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Image of Nurse caring for senior */}
              <div className="lg:col-span-6 relative aspect-[16/11] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-forest-900/10">
                <Image
                  src="/images/nursing/why-choose-nurse.webp"
                  alt={t.whyChoose.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Right Column: Copy & Checklist */}
              <div className="lg:col-span-6 space-y-6">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#0F2A1D] font-normal leading-tight">
                  {t.whyChoose.title}
                </h2>

                <p className="text-sm sm:text-base text-[#4A5D52] leading-relaxed max-w-xl">
                  {t.whyChoose.desc}
                </p>

                {/* 4 Checklist Items with Dark Green Badges */}
                <div className="space-y-3.5 pt-2">
                  {t.whyChoose.checks.map((checkText, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <div className="text-[#133924] flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 stroke-[2.4]" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-[#1E382A]">
                        {checkText}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3B: NABIOTA HOMECARE GMBH - PDF SECTION IV.8                      */}
        {/* ========================================================================= */}
        <HomeCareCompanySection locale={locale} />

        {/* ========================================================================= */}
        {/* SECTION 3C: NABIOTA SANITÄTSHAUS GMBH - PDF SECTION IV.9                  */}
        {/* ========================================================================= */}
        <SanitaetshausCompanySection locale={locale} />

        {/* ========================================================================= */}
        {/* SECTION 3D: NABIOTA APOTHEKE MÖNCHENGLADBACH - PDF SECTION IV.10          */}
        {/* ========================================================================= */}
        <PharmacyCompanySection locale={locale} />

        {/* ========================================================================= */}
        {/* SECTION 2: OUR COMMITMENT (FULL-WIDTH EDGE-TO-EDGE)                       */}
        {/* ========================================================================= */}
        <section className="w-full bg-[#0B2516] text-white relative overflow-hidden border-y border-[#D5B878]/30">
          <div className="absolute inset-0 pointer-events-none z-0">
            <Image
              src="/images/bacground.webp"
              alt="Botanical Texture"
              fill
              className="object-cover object-center opacity-35 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B2516]/95 via-[#0B2516]/85 to-[#0B2516]/60" />
          </div>

          <div className="relative z-10 w-full flex flex-col lg:flex-row items-stretch">
            {/* Left: Nurse with senior */}
            <div className="w-full lg:w-[36%] xl:w-[38%] relative min-h-[240px] sm:min-h-[280px] lg:min-h-[320px] xl:min-h-[340px] overflow-hidden shrink-0">
              <div
                className="absolute inset-0 w-full h-full"
                style={{
                  WebkitMaskImage: "linear-gradient(to right, black 65%, transparent 100%)",
                  maskImage: "linear-gradient(to right, black 65%, transparent 100%)",
                }}
              >
                <Image
                  src="/images/nursing/commitment-nurse.webp"
                  alt={t.commitment.title}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div className="hidden lg:block absolute inset-y-0 right-0 w-44 xl:w-56 bg-gradient-to-r from-transparent via-[#0B2516]/70 to-[#0B2516] pointer-events-none z-10" />
              <div className="lg:hidden absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0B2516] to-transparent pointer-events-none z-10" />
            </div>

            {/* Right: Copy & 4 Circular Gold Badges */}
            <div className="w-full lg:w-[64%] xl:w-[62%] p-6 sm:p-8 lg:p-8 lg:pl-10 space-y-4 relative z-10">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] text-white font-normal leading-tight">
                {t.commitment.title}
              </h2>

              <p className="text-xs sm:text-[13px] md:text-[13.5px] text-[#D4E2D8] leading-relaxed max-w-2xl font-light">
                {t.commitment.desc}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-white/10 max-w-2xl">
                {t.commitment.badges.map((b, idx) => {
                  const IconComp = b.icon;
                  return (
                    <div key={idx} className="flex flex-col items-center text-center space-y-1.5 group">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-[#ECCF96]">
                        <IconComp className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.6]" />
                      </div>
                      <span className="text-[11.5px] sm:text-xs font-medium text-[#F4EFE6] leading-tight">
                        {b.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: THE 6 CORE PILLARS OF NABIOTA HOMECARE GMBH (User-Approved Cards) */}
        {/* ========================================================================= */}
        <CareServicesCatalog
          services={servicesData}
          title={t.servicesSection.title}
          description={t.servicesSection.desc}
          actionLabel={t.servicesSection.openModalBtn}
          onSelect={setSelectedService}
        />

        {/* ========================================================================= */}
        {/* SECTION 4: INTEGRATED NETWORK COORDINATION (Holding Verbund)              */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-20 bg-[#07160D] text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden mix-blend-screen">
            <Image
              src="/images/bacground.webp"
              alt="Watermark"
              fill
              className="object-cover object-center"
            />
          </div>

          <Container size="wide" className="relative z-10">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-white font-normal leading-tight mb-4">
                {t.verbund.title}
              </h2>
              <p className="text-sm sm:text-base text-[#C2D1C7] leading-relaxed">
                {t.verbund.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.verbund.pillars.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 rounded-3xl bg-[#0D2418]/70 border border-[#D5B878]/30 backdrop-blur-md flex flex-col justify-between hover:border-[#D5B878] transition-all duration-300 group"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-[#D5B878]/15 border border-[#D5B878]/40 flex items-center justify-center text-[#ECCF96] mb-5 group-hover:scale-105 transition-transform">
                        <IconComp className="w-6 h-6 stroke-[1.8]" />
                      </div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#A6BAAD] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4B: NABIOTA SANITÄTSHAUS GMBH & NABIOTA PHARMACY (Pages 17-19 PDF)*/}
        {/* ========================================================================= */}
        <SanitaetshausCatalog
          supplies={sanitaetshausData}
          title={t.sanitaetshausSection.title}
          description={t.sanitaetshausSection.desc}
          actionLabel={t.sanitaetshausSection.openModalBtn}
          onSelect={setSelectedSupplyModal}
        />

        {/* ========================================================================= */}
        {/* FULL-WIDTH SECTION: NABIOTA PHARMACY & KLINIKVERSORGUNG (§ 14 ApoG)      */}
        {/* ========================================================================= */}
        <section className="relative w-full py-10 sm:py-12 lg:py-14 bg-[#FAF7F2] overflow-hidden border-t border-b border-[#EDE8DE]">
          {/* Right-side pharmacy still life photo with crisp visibility and subtle edge fade */}
          <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[62%] xl:w-[56%] pointer-events-none overflow-hidden select-none">
            <Image
              src="/images/areas/pharmacy-clinic-supply.jpg"
              alt="NabiOta Pharmacy & Clinic Supply"
              fill
              className="object-cover object-center lg:object-right"
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            {/* Subtle left edge gradient fade so photo is clearly visible without heavy blur */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] from-0% via-[#FAF7F2]/50 via-18% via-[#FAF7F2]/10 via-35% to-transparent to-60%" />
            {/* Soft vertical gradient on small screens only */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/40 to-transparent lg:hidden" />
          </div>

          {/* Botanical foliage watermark in bottom-right corner */}
          <div className="absolute -bottom-10 -right-6 w-72 sm:w-88 h-72 sm:h-88 pointer-events-none opacity-35 select-none">
            <Image
              src="/images/areas/botanical-branch-clean.webp"
              alt=""
              fill
              className="object-contain object-bottom-right rotate-[18deg]"
              unoptimized
            />
          </div>

          <Container size="wide" className="relative z-10">
            <div className="max-w-6xl mx-auto space-y-7 sm:space-y-8">
              {/* Header */}
              <div className="max-w-2xl">
                {/* Title */}
                <h2 className="font-serif text-[24px] sm:text-[30px] lg:text-[35px] text-[#142318] font-normal leading-[1.2] mb-2.5 sm:mb-3">
                  {t.pharmacySection.title}
                </h2>

                {/* Lead Description */}
                <p className="text-[12px] sm:text-[12.5px] text-[#556057] leading-relaxed font-sans max-w-xl">
                  {t.pharmacySection.desc}
                </p>
              </div>

              {/* 3 Pillars Cards Grid (Compact height, no arrow buttons) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                {t.pharmacySection.points.map((pt, idx) => (
                  <div
                    key={idx}
                    className="group relative rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-xs border border-[#EAE4D7] p-5 sm:p-5.5 shadow-[0_3px_14px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-[#D5B878]/60 transition-all duration-300 overflow-hidden"
                  >
                    {/* Leaf watermark in bottom-right corner */}
                    <div className="absolute -bottom-3 -right-3 w-20 h-20 pointer-events-none opacity-15 select-none sepia">
                      <Image
                        src="/images/areas/botanical-branch-clean.webp"
                        alt=""
                        fill
                        className="object-contain object-bottom-right rotate-[25deg]"
                        unoptimized
                      />
                    </div>

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="mb-3 sm:mb-3.5">
                        <div
                          className={`w-8 h-8 flex items-center justify-center shrink-0 ${
                            idx === 0
                              ? "text-[#1E3B29]"
                              : "text-[#9E7D3B]"
                          }`}
                        >
                          {idx === 0 && <ShieldCheck className="w-7 h-7 stroke-[1.8]" />}
                          {idx === 1 && <Hospital className="w-7 h-7 stroke-[1.8]" />}
                          {idx === 2 && <Pill className="w-7 h-7 stroke-[1.8]" />}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-[16px] sm:text-[17px] text-[#142318] font-medium leading-snug mb-1.5 sm:mb-2">
                        {pt.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[11.5px] sm:text-[12px] text-[#556057] leading-relaxed font-sans">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: OUR APPROACH (Holistic Care for Every Stage of Life)           */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-20 bg-[#FAF9F5] border-t border-[#EAE3D5]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              {/* Left Column: Heading & CTA */}
              <div className="lg:col-span-5 space-y-5">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#0F2A1D] font-normal leading-tight">
                  {t.approach.title}
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-[#4A5D52] leading-relaxed">
                  {t.approach.desc}
                </p>
                <div className="pt-2">
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF9F5] hover:bg-white text-[#0D2619] border border-[#C8B896] text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm group"
                  >
                    <span>{t.approach.btn}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Right Column: 4 Stages Horizontal Cards */}
              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {t.approach.stages.map((stg, idx) => (
                  <div key={idx} className="flex flex-col space-y-2.5">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm border border-[#E2DBD0]">
                      <Image
                        src={stg.image}
                        alt={stg.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-xs sm:text-sm font-semibold text-[#0F2A1D] leading-tight mb-1">
                        {stg.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[#5A6E63] leading-snug">
                        {stg.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: TESTIMONIALS (ENLARGED REVIEWS)                                */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 bg-[#FAF9F5] border-t border-[#EAE3D5]">
          <Container size="wide">
            {/* Header with Read More button on right */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14">
              <div className="max-w-2xl space-y-2">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#0F2A1D] font-normal leading-tight">
                  {t.testimonials.title}
                </h2>
                <p className="text-sm sm:text-base text-[#4A5D52]">
                  {t.testimonials.desc}
                </p>
              </div>

              <Link
                href={`/${locale}/nabiota-homecare`}
                className="self-start sm:self-auto inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-white hover:bg-[#FAF9F5] text-[#0D2619] border border-[#C8B896] text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm"
              >
                {t.testimonials.btnMore}
              </Link>
            </div>

            {/* 3 ENLARGED Testimonial Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.testimonials.cards.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EBE4D8] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
                >
                  {/* Top: 5 Gold Stars & Quote */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, starIdx) => (
                        <Star key={starIdx} className="w-4 h-4 fill-amber-500" />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base md:text-[17px] text-[#1E382A] font-serif italic leading-relaxed">
                      {item.quote}
                    </p>
                  </div>

                  {/* Bottom: Avatar & Name */}
                  <div className="pt-5 border-t border-[#F2ECE1] flex items-center gap-4">
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#D5B878]">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-base sm:text-lg font-bold text-[#0F2A1D] leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#5B6E63] mt-0.5">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: FAQ (EDGE-TO-EDGE)                                             */}
        {/* ========================================================================= */}
        <section className="w-full bg-[#FAF9F5] border-t border-[#EAE3D5] relative overflow-hidden">
          <div className="w-full flex flex-col lg:flex-row items-stretch">
            {/* Left Photo */}
            <div className="w-full lg:w-[40%] xl:w-[38%] relative min-h-[260px] sm:min-h-[300px] lg:min-h-[380px] shrink-0 overflow-hidden">
              <Image
                src="/images/nursing/faq-nurse.webp"
                alt={t.faq.title}
                fill
                className="object-cover object-center"
              />
              <div className="hidden lg:block absolute inset-y-0 right-0 w-32 xl:w-48 bg-gradient-to-r from-transparent via-[#FAF9F5]/70 to-[#FAF9F5] backdrop-blur-[3px] pointer-events-none z-10" />
              <div className="lg:hidden absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#FAF9F5] via-[#FAF9F5]/80 to-transparent backdrop-blur-[2px] pointer-events-none z-10" />
            </div>

            {/* Right: Accordion content */}
            <div className="w-full lg:w-[60%] xl:w-[62%] py-8 sm:py-10 lg:py-10 px-6 sm:px-10 lg:px-12 xl:px-16 flex flex-col justify-center">
              <div className="max-w-2xl">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#0F2A1D] font-normal leading-tight mb-4">
                  {t.faq.title}
                </h2>

                <div className="divide-y divide-[#E6E0D3] border-y border-[#E6E0D3]">
                  {t.faq.items.map((item, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div key={idx} className="py-2.5 sm:py-3">
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                          className="w-full flex items-center justify-between gap-4 text-left group"
                        >
                          <span className="font-serif text-xs sm:text-[13.5px] md:text-sm text-[#153424] font-medium group-hover:text-[#0D2619] transition-colors">
                            {item.q}
                          </span>
                          <span className="text-[#285038] group-hover:text-[#0D2619] transition-colors flex-shrink-0">
                            {isOpen ? (
                              <Minus className="w-4 h-4" />
                            ) : (
                              <Plus className="w-4 h-4" />
                            )}
                          </span>
                        </button>

                        {isOpen && (
                          <div className="pt-2 pr-6 text-xs sm:text-[13px] text-[#4E6256] leading-relaxed">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: BOTTOM CTA BANNER (FULL-WIDTH EDGE-TO-EDGE)                     */}
        {/* ========================================================================= */}
        <section className="w-full relative overflow-hidden bg-gradient-to-r from-[#F6F4ED] via-[#F2EDE2] to-[#EAE3D3] border-t border-[#DECDB5]/60">
          <div className="absolute inset-y-0 right-0 w-full lg:w-3/5 opacity-80 lg:opacity-100 pointer-events-none">
            <Image
              src="/images/nursing/cta-hands-bg.webp"
              alt="Holding hands"
              fill
              className="object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F6F4ED] via-[#F6F4ED]/80 to-transparent lg:w-1/2" />
          </div>

          {/* Floating stamp badge top right */}
          <div className="absolute top-5 right-5 sm:top-8 sm:right-10 z-20 bg-white/85 backdrop-blur-md px-4 py-3 sm:px-6 sm:py-4 rounded-3xl shadow-lg border border-white/80 rotate-[-2deg] flex flex-col items-center justify-center">
            <p className="font-serif italic text-xs sm:text-sm font-semibold text-[#0E281C] text-center leading-tight">
              {t.cta.stamp1}
              <br />
              {t.cta.stamp2}
              <br />
              {t.cta.stamp3}
            </p>
            <Heart className="w-3.5 h-3.5 text-[#0E281C] fill-[#0E281C]/20 mt-1" />
          </div>

          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 py-12 sm:py-16 relative z-10">
            <div className="max-w-xl space-y-5">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#0F2A1D] font-normal leading-tight">
                {t.cta.title}
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-[#4A5D52] leading-relaxed">
                {t.cta.desc}
              </p>

              <div>
                <Link
                  href={`/${locale}/nabiota-homecare`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0D2619] hover:bg-[#163D29] text-white text-xs sm:text-sm font-medium transition-all duration-300 shadow-md group"
                >
                  <span>{t.cta.btn}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Bottom Contact Details Bar */}
            <div className="mt-10 pt-5 border-t border-[#DECDB5]/60 flex flex-wrap items-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#1B3A29] font-medium">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#2D5A3E]" />
                <span>{t.cta.phone}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#2D5A3E]" />
                <span>{t.cta.email}</span>
              </div>

              <div className="flex items-center gap-2.5 text-[#2C4C39]">
                <MapPin className="w-4 h-4 text-[#2D5A3E]" />
                <span>{t.cta.location}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* INTERACTIVE MODAL DIALOG FOR CARE & SANITÄTSHAUS SPECIFICATIONS          */}
        {/* ========================================================================= */}
        {(selectedService || selectedSupplyModal) && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => {
              setSelectedService(null);
              setSelectedSupplyModal(null);
            }}
          >
            {(() => {
              const activeModal = selectedService || selectedSupplyModal;
              if (!activeModal) return null;

              return (
                <div
                  className="relative w-full max-w-5xl xl:max-w-[1100px] max-h-[92vh] overflow-y-auto rounded-3xl bg-[#FAF9F6] border border-[#E8DEC8] shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 animate-in zoom-in-95 duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => {
                      setSelectedService(null);
                      setSelectedSupplyModal(null);
                    }}
                    aria-label={isUz ? "Oynani yopish" : isRu ? "Закрыть окно" : isEn ? "Close modal" : isTr ? "Pencereyi kapat" : isAr ? "إغلاق النافذة" : "Modal schließen"}
                    className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/80 border border-[#DECDB5] flex items-center justify-center text-[#1C261E] hover:bg-[#ECCF93]/30 transition-colors z-20 shadow-xs cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  {/* Modal Header */}
                  <div className="mb-6 pr-8">

                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 leading-tight">
                      {activeModal.modal.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#8D6B27] font-medium mt-1">
                      {activeModal.modal.subtitle}
                    </p>
                  </div>

                  {/* Hero Image in Modal */}
                  <div className="relative h-44 sm:h-52 w-full rounded-2xl overflow-hidden mb-6 shadow-inner border border-[#E8DEC8]">
                    <Image
                      src={activeModal.image}
                      alt={activeModal.modal.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Main Description */}
                  <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-white border border-[#EAE4D7] text-xs sm:text-[13.5px] text-[#334237] leading-relaxed shadow-2xs">
                    {activeModal.modal.description}
                  </div>

                  {/* 2-Column Grid: Indications and Scope */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                    <div className="p-5 rounded-2xl bg-white border border-[#EAE4D7] shadow-2xs space-y-3">
                      <div className="flex items-center gap-2 text-[#8D6B27]">
                        <Activity className="w-4 h-4 stroke-[2]" />
                        <h3 className="font-serif font-bold text-sm sm:text-base text-forest-950">
                          {activeModal.modal.indicationsTitle}
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {activeModal.modal.indications.map((ind, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#334237]">
                            <Check className="w-3.5 h-3.5 text-[#C5A56A] shrink-0 mt-0.5" />
                            <span>{ind}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-[#EAE4D7] shadow-2xs space-y-3">
                      <div className="flex items-center gap-2 text-[#8D6B27]">
                        <ShieldCheck className="w-4 h-4 stroke-[2]" />
                        <h3 className="font-serif font-bold text-sm sm:text-base text-forest-950">
                          {activeModal.modal.scopeTitle}
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {activeModal.modal.scopeItems.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#334237]">
                            <Check className="w-3.5 h-3.5 text-[#C5A56A] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Billing & Regulatory Info */}
                  <div className="p-5 rounded-2xl bg-[#F8F5EE] border border-[#E5D7B7] space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-[#8D6B27]">
                      <FileText className="w-4 h-4 stroke-[2]" />
                      <h3 className="font-serif font-bold text-sm sm:text-base text-forest-950">
                        {activeModal.modal.billingTitle}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-[13px] text-[#3A4A3E] leading-relaxed">
                      {activeModal.modal.billingText}
                    </p>
                  </div>

                  {/* Quality Standards */}
                  <div className="p-4 rounded-xl bg-white border border-[#EAE4D7] text-xs text-[#556358] leading-relaxed flex items-start gap-3 mb-6">
                    <Info className="w-4 h-4 text-[#C5A56A] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#142318] block mb-0.5">
                        {activeModal.modal.qualityTitle}:
                      </span>
                      {activeModal.modal.qualityText}
                    </div>
                  </div>

                  {/* Modal Footer CTA */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#EAE4D7]">
                    <button
                      onClick={() => {
                        setSelectedService(null);
                        setSelectedSupplyModal(null);
                      }}
                      className="px-5 py-2.5 rounded-full border border-[#D5B878] text-xs font-semibold text-[#142318] hover:bg-[#FAF5EE] transition-colors cursor-pointer"
                    >
                      {isUz ? "Yopish" : isRu ? "Закрыть" : isEn ? "Close" : isTr ? "Kapat" : isAr ? "إغلاق" : "Schließen"}
                    </button>
                    <Link
                      href={`/${locale}/${selectedSupplyModal ? "nabiota-sanitaetshaus" : "nabiota-homecare"}`}
                      onClick={() => {
                        setSelectedService(null);
                        setSelectedSupplyModal(null);
                      }}
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#ECCF93] to-[#D4AF67] hover:from-[#F2DAB0] hover:to-[#DEBD7A] text-[#142217] font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all hover:scale-[1.01]"
                    >
                      <span>{activeModal.modal.ctaButtonText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </main>

      <Footer currentLocale={locale} />
    </div>
  );
}
