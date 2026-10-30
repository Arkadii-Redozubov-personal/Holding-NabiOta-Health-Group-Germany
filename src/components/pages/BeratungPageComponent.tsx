"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  Lightbulb,
  Users,
  Leaf,
  Building2,
  HardHat,
  Network,
  ShieldCheck,
  MessageSquare,
  CheckCircle2,
  Flag,
  Award,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Heart,
  Briefcase,
  Stethoscope,
  Activity,
  HeartPulse,
  Home,
  Check,
  X,
  FileText,
  Info,
} from "@/lib/icons";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { SupportedLocale } from "@/lib/i18n";
import { RealEstateCompanySection } from "@/components/sections/RealEstateCompanySection";
import { getBeratungPageTranslations, RealEstateDomain } from "@/data/translations/beratung-page";

interface Props {
  locale?: SupportedLocale;
}


export function BeratungPageComponent({ locale = "de" }: Props) {
  const isUz = locale === "uz";
  const isRu = locale === "ru";
  const isEn = locale === "en";
  const isTr = locale === "tr";
  const isAr = locale === "ar";

  const [selectedDomain, setSelectedDomain] = useState<RealEstateDomain | null>(null);

  // Lock body scroll and handle Escape key for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedDomain(null);
      }
    };

    if (selectedDomain) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedDomain]);

  // Standard Site PageHero Data
  const {
    heroData,
    heroBadges,
    realEstateDomains,
    t,
  } = getBeratungPageTranslations(locale);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F5] text-forest-950 font-sans selection:bg-gold-500/20">
      {/* ── 1. GLOBAL SITE NAVIGATION HEADER ── */}
      <Header currentLocale={locale} />

      {/* ── 2. SITE STANDARD PAGE HERO ── */}
      <PageHero
          locale={locale}
        title={heroData.title}
        eyebrow={heroData.eyebrow}
        description={heroData.desc}
        imageSrc="/images/areas/consulting.webp"
        imageAlt="NabiOta Health Group Beratung & Projektentwicklung"
        badges={heroBadges}
      />

      <main className="flex-1 bg-[#FAF9F5]">
        {/* ========================================================================= */}
        {/* SECTION 1: UNSERE BERATUNGSLEISTUNGEN (Holding Management & Projektierung)*/}
        {/* ========================================================================= */}
        <section className="py-8 sm:py-10 lg:py-11 bg-[#FAF9F5]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              {/* Left Column (Copy + Button) */}
              <div className="lg:col-span-4 space-y-3.5 sm:space-y-4 flex flex-col justify-center">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] text-[#0F2A1D] font-normal leading-[1.18] tracking-tight">
                  {t.s1.title}
                </h2>

                <p className="text-xs sm:text-[13px] text-[#4A5D52] font-normal leading-relaxed">
                  {t.s1.desc}
                </p>

                <div className="pt-1.5 sm:pt-2">
                  <Link
                    href={`/${locale}/nabiota-real-estate`}
                    className="inline-flex items-center gap-3 px-6 sm:px-7 py-3 rounded-full bg-[#FAF9F5] hover:bg-white text-[#0D2619] border border-[#BFA87E] hover:border-[#9B7C38] text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm hover:shadow group hover:scale-[1.01]"
                  >
                    <span>{t.s1.btn}</span>
                    <ArrowRight className="w-4 h-4 text-[#0D2619] transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Center Column: Meeting Photo */}
              <div className="lg:col-span-5 relative min-h-[290px] lg:min-h-0 h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-[#EAE5DC]">
                <Image
                  src="/images/beratung/consulting-meeting.webp"
                  alt={t.s1.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right Column: Consulting Approach Box */}
              <div className="lg:col-span-3 bg-[#EEF4EE] rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#DFE8DF] shadow-xs flex flex-col justify-between h-full">
                <h3 className="font-serif text-base sm:text-lg font-medium text-[#0F2A1D]">
                  {t.s1.cardTitle}
                </h3>

                <div className="space-y-3 sm:space-y-3.5 my-auto py-2">
                  {t.s1.items.map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3 sm:gap-3.5">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#D5B878]/70 bg-white/90 text-[#1E3E2B] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                          <IconComp className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.6]" />
                        </div>
                        <span className="text-xs sm:text-[12.5px] text-[#2C4737] font-medium leading-snug pt-1">
                          {item.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 1B: NABIOTA REAL ESTATE GMBH - PDF SECTION IV.7                   */}
        {/* ========================================================================= */}
        <RealEstateCompanySection locale={locale} />

        {/* ========================================================================= */}
        {/* SECTION 1C: SPECIALIZED HEALTHCARE REAL ESTATE PORTFOLIO       */}
        {/* ========================================================================= */}
        <section id="immobilien" className="py-14 sm:py-20 bg-[#FAF9F5] border-t border-[#EAE3D5]">
          <Container size="wide">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-forest-950 font-normal leading-tight mb-4">
                {t.s4.title}
              </h2>
              <p className="text-sm sm:text-base text-[#4E5650] leading-relaxed max-w-2xl">
                {t.s4.desc}
              </p>
            </div>

            {/* 6 Cards Grid: 3 cols x 2 rows with User-Approved Styling */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {realEstateDomains.map((domain) => (
                <div
                  key={domain.id}
                  onClick={() => setSelectedDomain(domain)}
                  className="rounded-3xl bg-white border border-[#EAE4D7] shadow-sm hover:shadow-xl hover:border-[#C5A56A] transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
                >
                  {/* Photo without pill badge */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#07150C]">
                    <Image
                      src={domain.image}
                      alt={domain.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Card Content with circular icon overlapping the image & gentle wave */}
                  <div className="relative bg-white pt-2 pb-6 px-6 sm:px-7 flex-1 flex flex-col justify-between">
                    {/* Curved wave transition at top */}
                    <div className="absolute -top-6 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
                      <svg
                        viewBox="0 0 400 32"
                        preserveAspectRatio="none"
                        className="w-full h-7 fill-white"
                      >
                        <path d="M 0,16 C 18,5 34,0 64,0 C 98,0 118,13 145,17 C 225,27 325,16 400,13 L 400,32 L 0,32 Z" />
                      </svg>
                    </div>

                    {/* Circular Icon with light green background overlapping photo */}
                    <div className="relative -mt-9 mb-3.5 z-10">
                      <div className="w-12 h-12 rounded-full bg-[#E5F0E8] border border-[#CCE0D2] flex items-center justify-center text-[#1C3E2A] shadow-xs group-hover:scale-105 transition-transform">
                        {domain.iconType === "building" && <Building2 className="w-6 h-6 stroke-[1.8]" />}
                        {domain.iconType === "stethoscope" && <Stethoscope className="w-6 h-6 stroke-[1.8]" />}
                        {domain.iconType === "activity" && <Activity className="w-6 h-6 stroke-[1.8]" />}
                        {domain.iconType === "heartpulse" && <HeartPulse className="w-6 h-6 stroke-[1.8]" />}
                        {domain.iconType === "heart" && <Heart className="w-6 h-6 stroke-[1.8]" />}
                        {domain.iconType === "home" && <Home className="w-6 h-6 stroke-[1.8]" />}
                      </div>
                    </div>

                    {/* Title & Description on white background */}
                    <div className="space-y-2 mb-4">
                      <h3 className="font-serif text-xl sm:text-[21px] font-bold text-[#142318] leading-tight group-hover:text-[#8D6B27] transition-colors">
                        {domain.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#55695C] leading-relaxed">
                        {domain.shortDesc}
                      </p>
                    </div>

                    {/* Bottom Action Area: Pill Button + Circle Arrow Button */}
                    <div className="pt-4 mt-auto border-t border-[#F2ECE1] flex items-center justify-between">
                      <span className="px-4 py-2 rounded-full bg-[#FAF3E7] text-[#93712C] text-xs font-semibold group-hover:bg-[#F5EAD4] transition-colors">
                        {t.s4.openModalBtn}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-[#FAF3E7] border border-[#EADBBE] flex items-center justify-center text-[#93712C] group-hover:bg-[#C5A56A] group-hover:text-white group-hover:border-[#C5A56A] transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 2: PROJEKTENTWICKLUNG - VON DER IDEE ZUR UMSETZUNG               */}
        {/* ========================================================================= */}
        <section className="w-full bg-[#08170D] text-white relative overflow-hidden border-y border-[#D5B878]/30 my-8 sm:my-12">
          <div className="absolute inset-0 pointer-events-none z-0">
            <Image
              src="/images/botanical-gold-bg.webp"
              alt="Botanical Gold Texture"
              fill
              className="object-cover object-left opacity-35 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08170D]/95 via-[#08170D]/85 to-[#08170D]/40" />
          </div>

          <div className="w-full flex flex-col lg:flex-row items-stretch min-h-[300px] lg:min-h-[340px] relative z-10">
            {/* Left: Text & CTA */}
            <div className="w-full lg:w-[40%] xl:w-[38%] p-6 sm:p-8 lg:p-10 lg:pl-14 xl:pl-20 flex flex-col justify-center space-y-3.5 sm:space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] text-white font-normal leading-[1.15]">
                {t.s2.title}
              </h2>

              <p className="text-white/85 text-xs sm:text-[13px] leading-relaxed max-w-lg font-sans">
                {t.s2.desc}
              </p>

              <div className="pt-1.5 sm:pt-2">
                <Link
                  href={`/${locale}/nabiota-real-estate`}
                  className="inline-flex items-center gap-2.5 px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#ECCF96] via-[#DFBF76] to-[#C8A050] hover:from-[#F4DCAC] hover:to-[#D4AC5B] text-[#08170D] text-xs sm:text-[13px] font-semibold transition-all duration-300 shadow-md group hover:scale-[1.02]"
                >
                  <span>{t.s2.btn}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Center: 4 Gold Circular Features */}
            <div className="w-full lg:w-[28%] xl:w-[27%] px-6 sm:px-8 lg:px-4 py-4 sm:py-6 lg:py-0 flex flex-col justify-center space-y-3.5 sm:space-y-4">
              {t.s2.features.map((feat, idx) => {
                const IconComp = feat.icon;
                return (
                  <div key={idx} className="flex items-center gap-3.5">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#D5B878]/80 bg-[#08170D] flex items-center justify-center text-[#ECCF96] flex-shrink-0 shadow-[0_0_12px_rgba(213,184,120,0.15)]">
                      <IconComp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.6]" />
                    </div>
                    <span className="text-[12.5px] sm:text-[13.5px] font-medium text-white/95 leading-snug">
                      {feat.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Right: Modern Building Photo with smooth fade */}
            <div className="w-full lg:w-[32%] xl:w-[35%] relative min-h-[220px] sm:min-h-[260px] lg:min-h-full shrink-0 overflow-hidden">
              <Image
                src="/images/beratung/project-building.webp"
                alt={t.s2.title}
                fill
                className="object-cover object-center"
              />
              <div className="hidden lg:block absolute inset-y-0 left-0 w-36 sm:w-48 bg-gradient-to-r from-[#08170D] via-[#08170D]/80 via-[#08170D]/40 to-transparent pointer-events-none z-10" />
              <div className="lg:hidden absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#08170D] via-[#08170D]/80 to-transparent pointer-events-none z-10" />

              <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-6 pointer-events-none select-none z-20 text-right">
                <p className="font-serif italic text-white/95 text-base sm:text-lg md:text-xl tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
                  {t.s2.stamp}
                </p>
                <div className="flex justify-end pt-1">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white/95 fill-transparent stroke-[1.5] drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: UNSER PROZESS (In 5 Schritten zum Projekterfolg)               */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 bg-[#FAF9F5] border-t border-[#EAE3D5]">
          <Container size="wide">
            <div className="max-w-2xl mb-10 sm:mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#0F2A1D] font-normal leading-tight mb-3">
                {t.s3.title}
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#4A5D52] leading-relaxed">
                {t.s3.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-4 relative">
              {t.s3.steps.map((st, idx) => {
                const IconComp = st.icon;
                return (
                  <div key={idx} className="relative flex flex-col space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0D2619] text-white flex items-center justify-center text-xs sm:text-sm font-bold font-serif shrink-0 shadow-xs">
                          {st.num}
                        </div>
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D5B878]/80 bg-white flex items-center justify-center text-[#0D2619] shrink-0 shadow-2xs">
                          <IconComp className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[1.8]" />
                        </div>
                      </div>

                      {idx < 4 && (
                        <div className="hidden md:flex items-center text-[#C5A56A] pl-2 pr-1">
                          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.4]" />
                        </div>
                      )}
                    </div>

                    <div className="pt-1">
                      <h4 className="font-serif text-sm sm:text-base font-bold text-[#0F2A1D] mb-1.5 leading-snug">
                        {st.title}
                      </h4>
                      <p className="text-xs sm:text-[13px] text-[#4A5D52] leading-relaxed">
                        {st.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: STIMMEN UNSERER PARTNER (COMPACT RIBBON)                       */}
        {/* ========================================================================= */}
        <section className="w-full bg-[#08170D] text-white relative overflow-hidden border-t border-[#D5B878]/30 py-4 sm:py-5 lg:py-5.5 mb-0">
          <div className="absolute inset-0 pointer-events-none z-0">
            <Image
              src="/images/botanical-gold-bg.webp"
              alt="Botanical Gold Texture"
              fill
              className="object-cover object-left opacity-75 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08170D]/90 via-[#08170D]/75 to-[#08170D]/60" />
          </div>

          <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-6 xl:gap-8">
              <div className="w-full lg:w-[35%] xl:w-[36%] shrink-0 space-y-2 lg:pl-6 xl:pl-10">
                <h2 className="font-serif text-2xl sm:text-[26px] lg:text-[28px] text-white font-normal leading-[1.15]">
                  {t.s5.title}
                </h2>

                <p className="text-white/80 text-[11px] sm:text-xs leading-relaxed max-w-md">
                  {t.s5.desc}
                </p>

                <div className="pt-1">
                  <Link
                    href={`/${locale}/nabiota-real-estate`}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#D5B878]/70 hover:border-[#D5B878] bg-white/5 hover:bg-white/10 text-white text-[11px] sm:text-xs font-medium transition-all duration-300"
                  >
                    <span>{t.s5.btn}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#ECCF96]" />
                  </Link>
                </div>
              </div>

              {/* 3 Compact Testimonial Cards on White rounded cards matching reference photo */}
              <div className="w-full lg:w-[61%] xl:w-[59%] lg:ml-auto grid grid-cols-1 md:grid-cols-3 gap-3.5 lg:gap-4 xl:gap-4.5 items-stretch">
                {t.s5.testimonials.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-[18px] sm:p-5 xl:p-[20px_22px] text-[#0F2A1D] shadow-sm flex flex-col justify-between border border-[#E8E2D6] min-h-[195px] max-h-[225px]"
                  >
                    <div className="flex items-start gap-3 sm:gap-3.5">
                      <div className="relative w-[50px] h-[50px] sm:w-[52px] sm:h-[52px] rounded-full overflow-hidden shrink-0 border border-[#E2DBD0] shadow-2xs">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[11.5px] sm:text-[12px] xl:text-[12.5px] text-[#2C4436] leading-[1.38] font-sans">
                          {item.quote}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 sm:pt-2.5">
                      <h4 className="font-sans text-[12.5px] sm:text-[13px] font-bold text-[#0F2A1D] leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-[10px] sm:text-[10.5px] text-[#6E8177] leading-tight mt-0.5 font-sans">
                        {item.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: BOTTOM CONTACT BANNER (3-COLUMN DESK LAYOUT)                    */}
        {/* ========================================================================= */}
        <section className="w-full relative overflow-hidden bg-[#FAF7F2] border-t border-[#DECDB5]/60 py-8 sm:py-9 lg:py-10 mt-0">
          <div className="absolute inset-0 pointer-events-none z-0">
            <Image
              src="/images/beratung/cta-desk-clean.webp"
              alt="Desk notebook background"
              fill
              className="object-cover object-center opacity-85"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/50 to-white/20 backdrop-blur-[0.5px]" />
          </div>

          <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Column: Italic statement stamp with subtle heart */}
              <div className="lg:col-span-4 flex flex-col justify-center py-2 lg:py-4">
                <p className="font-serif italic text-2xl sm:text-[28px] lg:text-[32px] text-[#2F4F3E] leading-[1.18] select-none">
                  {t.s6.stamp1}
                  <br />
                  {t.s6.stamp2}
                </p>
                <div className="flex items-center gap-2 pt-2.5">
                  <div className="w-8 h-[1px] bg-[#2F4F3E]/60" />
                  <Heart className="w-3.5 h-3.5 text-[#2F4F3E] fill-transparent stroke-[1.8]" />
                  <div className="w-8 h-[1px] bg-[#2F4F3E]/60" />
                </div>
              </div>

              {/* Center Column: Heading, Desc, Gold Button */}
              <div className="lg:col-span-4 space-y-3 sm:space-y-3.5">
                <h2 className="font-serif text-2xl sm:text-[28px] lg:text-[30px] xl:text-[32px] text-[#0F2A1D] font-normal leading-[1.2]">
                  {t.s6.title}
                </h2>

                <p className="text-xs sm:text-[13px] text-[#4A5D52] leading-relaxed max-w-sm font-sans">
                  {t.s6.desc}
                </p>

                <div className="pt-1.5">
                  <Link
                    href={`/${locale}/nabiota-real-estate`}
                    className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 h-[48px] sm:h-[50px] rounded-full bg-gradient-to-r from-[#ECCF96] via-[#DFBF76] to-[#C8A050] hover:from-[#F4DCAC] hover:to-[#D4AC5B] text-[#08170D] text-xs sm:text-[13.5px] font-semibold transition-all duration-300 shadow-sm group hover:scale-[1.02]"
                  >
                    <span>{t.s6.btn}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Right Column: 3 Contact entries with round icons */}
              <div className="lg:col-span-4 flex justify-start lg:justify-start lg:pl-4 xl:pl-6">
                <div className="w-full max-w-[340px] space-y-3.5 sm:space-y-4">
                  <div className="flex items-center gap-3.5 text-xs sm:text-[13.5px] text-[#1B3A29]">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/80 border border-[#DFCDBA] flex items-center justify-center text-[#8C6D37] shrink-0 shadow-2xs group-hover:bg-[#E5DFC9] transition-colors">
                      <Phone className="w-4 h-4 fill-[#8C6D37] text-[#8C6D37]" />
                    </div>
                    <span className="font-medium font-sans">{t.s6.phone}</span>
                  </div>

                  <div className="flex items-center gap-3.5 text-xs sm:text-[13.5px] text-[#1B3A29]">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/80 border border-[#DFCDBA] flex items-center justify-center text-[#0F2A1D] shrink-0 shadow-2xs group-hover:bg-[#E5DFC9] transition-colors">
                      <Mail className="w-4 h-4 fill-[#0F2A1D] text-[#0F2A1D]" />
                    </div>
                    <span className="font-medium font-sans">{t.s6.email}</span>
                  </div>

                  <div className="flex items-center gap-3.5 text-xs sm:text-[13.5px] text-[#1B3A29]">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/80 border border-[#DFCDBA] flex items-center justify-center text-[#0F2A1D] shrink-0 shadow-2xs">
                      <MapPin className="w-4 h-4 fill-[#0F2A1D] text-[#0F2A1D]" />
                    </div>
                    <span className="font-medium font-sans">{t.s6.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* INTERACTIVE MODAL DIALOG FOR REAL ESTATE & INFRASTRUCTURE DOMAINS         */}
        {/* ========================================================================= */}
        {selectedDomain && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setSelectedDomain(null)}
          >
            <div
              className="relative w-full max-w-5xl xl:max-w-[1100px] max-h-[92vh] overflow-y-auto rounded-3xl bg-[#FAF9F6] border border-[#E8DEC8] shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDomain(null)}
                aria-label={isUz ? "Oynani yopish" : isRu ? "Закрыть окно" : isEn ? "Close modal" : isTr ? "Pencereyi kapat" : isAr ? "إغلاق النافذة" : "Modal schließen"}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/80 border border-[#DECDB5] flex items-center justify-center text-[#1C261E] hover:bg-[#ECCF93]/30 transition-colors z-20 shadow-xs"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="mb-6 pr-8">

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 leading-tight">
                  {selectedDomain.modal.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#8D6B27] font-medium mt-1">
                  {selectedDomain.modal.subtitle}
                </p>
              </div>

              {/* Hero Image in Modal */}
              <div className="relative h-48 sm:h-60 md:h-72 w-full rounded-2xl overflow-hidden mb-6 shadow-inner border border-[#E8DEC8]">
                <Image
                  src={selectedDomain.image}
                  alt={selectedDomain.modal.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Main Description */}
              <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-white border border-[#EAE4D7] text-xs sm:text-[13.5px] text-[#334237] leading-relaxed shadow-2xs">
                {selectedDomain.modal.description}
              </div>

              {/* 2-Column Grid: Specifications and Developer Scope */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div className="p-5 rounded-2xl bg-white border border-[#EAE4D7] shadow-2xs space-y-3">
                  <div className="flex items-center gap-2 text-[#8D6B27]">
                    <Building2 className="w-4 h-4 stroke-[2]" />
                    <h3 className="font-serif font-bold text-sm sm:text-base text-forest-950">
                      {selectedDomain.modal.specificationsTitle}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {selectedDomain.modal.specifications.map((spec, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#334237]">
                        <Check className="w-3.5 h-3.5 text-[#C5A56A] shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#EAE4D7] shadow-2xs space-y-3">
                  <div className="flex items-center gap-2 text-[#8D6B27]">
                    <HardHat className="w-4 h-4 stroke-[2]" />
                    <h3 className="font-serif font-bold text-sm sm:text-base text-forest-950">
                      {selectedDomain.modal.scopeTitle}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {selectedDomain.modal.scopeItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#334237]">
                        <Check className="w-3.5 h-3.5 text-[#C5A56A] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technical Norms & Legal Notice */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-[#F8F5EE] border border-[#E5D7B7] text-xs text-[#556358] leading-relaxed">
                  <div className="flex items-center gap-1.5 text-[#8D6B27] font-bold mb-1">
                    <FileText className="w-3.5 h-3.5" />
                    <span>{selectedDomain.modal.technicalTitle}</span>
                  </div>
                  <p className="text-[#3A4A3E]">{selectedDomain.modal.technicalText}</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#EAE4D7] text-xs text-[#556358] leading-relaxed">
                  <div className="flex items-center gap-1.5 text-[#8D6B27] font-bold mb-1">
                    <Info className="w-3.5 h-3.5" />
                    <span>{selectedDomain.modal.legalTitle}</span>
                  </div>
                  <p className="text-[#3A4A3E]">{selectedDomain.modal.legalText}</p>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#EAE4D7]">
                <button
                  onClick={() => setSelectedDomain(null)}
                  className="px-5 py-2.5 rounded-full border border-[#D5B878] text-xs font-semibold text-[#142318] hover:bg-[#FAF5EE] transition-colors"
                >
                  {isUz ? "Yopish" : isRu ? "Закрыть" : isEn ? "Close" : isTr ? "Kapat" : isAr ? "إغلاق" : "Schließen"}
                </button>
                <Link
                  href={`/${locale}/nabiota-real-estate`}
                  onClick={() => setSelectedDomain(null)}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#ECCF96] to-[#D4AF67] hover:from-[#F2DAB0] hover:to-[#DEBD7A] text-[#142217] font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all hover:scale-[1.01]"
                >
                  <span>{selectedDomain.modal.ctaButtonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer currentLocale={locale} />
    </div>
  );
}
