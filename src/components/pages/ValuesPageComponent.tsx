import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { HeroBadges } from "@/components/ui/HeroBadges";
import { SupportedLocale } from "@/lib/i18n";
import { getValuesPageTranslations } from "@/data/translations/values-page";
import {
  Stethoscope,
  Microscope,
  Heart,
  HandHeart,
  UserCheck,
  Building2,
  Globe,
  Lightbulb,
  Home,
  ArrowRight,
  Shield,
  CheckCircle2,
  Users,
  HeartHandshake,
  Sparkles,
} from "@/lib/icons";

interface ValuesPageComponentProps {
  locale?: SupportedLocale;
}

/* ── Custom SVGs & Signatures matching reference 1:1 ─────────────────── */

function ExecutiveSignature({ className = "w-36 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path
        d="M18 46 C32 16, 44 12, 50 26 C56 40, 66 46, 76 30 C86 16, 92 22, 102 36 C112 50, 132 16, 148 26 C162 36, 178 30, 192 20"
        stroke="#142318"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 42 C60 48, 120 46, 172 38"
        stroke="#142318"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MarikeSignature({ className = "w-44 h-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path
        d="M20 52 C35 18, 48 12, 55 28 C62 44, 75 48, 85 32 C95 16, 102 22, 115 38 C128 54, 150 16, 168 28 C185 40, 205 32, 225 22"
        stroke="#ECCF96"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35 50 C75 56, 145 54, 210 44"
        stroke="#ECCF96"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ValuesPageComponent({ locale = "de" }: ValuesPageComponentProps) {
  const isUz = locale === "uz";
  const isEn = locale === "en";
  const isRu = locale === "ru";
  const isTr = locale === "tr";
  const isAr = locale === "ar";

  const t = getValuesPageTranslations(locale);

  const divisions = [
    { name: t.comp1, icon: Stethoscope, href: `/${locale}/areas/medizinische-fachbereiche` },
    { name: t.comp2, icon: Microscope, href: `/${locale}/areas/diagnostik` },
    { name: t.comp3, icon: Heart, href: `/${locale}/areas/rehabilitation` },
    { name: t.comp4, icon: HandHeart, href: `/${locale}/areas/pflege` },
    { name: t.comp5, icon: UserCheck, href: `/${locale}/areas/beratung-projektentwicklung` },
    { name: t.comp6, icon: Building2, href: `/${locale}/areas/beratung-projektentwicklung` },
    { name: t.comp7, icon: Globe, href: `/${locale}/areas/internationale-kooperationen` },
    { name: t.comp8, icon: Lightbulb, href: `/${locale}/areas/beratung-projektentwicklung` },
    { name: t.comp9, icon: Home, href: `/${locale}/areas/pflege` },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FCFAF6] text-[#142318] selection:bg-[#EBDDC0] selection:text-[#142318]">
      <Header currentLocale={locale} />

      <main className="flex-1">
        {/* ══════════════════════════════════════════════════════════
            SECTION 1: HERO (Dark Forest Green + Sunlit Building)
        ══════════════════════════════════════════════════════════ */}
        <section dir="ltr" className="relative w-full min-h-[420px] sm:min-h-[460px] lg:h-[500px] lg:min-h-[500px] pt-28 sm:pt-32 lg:pt-36 pb-10 sm:pb-12 overflow-hidden flex items-center bg-[#07150C] text-[#FAF8F5] border-b border-[#D5B878]/25">
          {/* Background: Modern Medical Consultation - pulled back & sharp framing */}
          <div className="absolute inset-y-0 right-0 z-0 pointer-events-none overflow-hidden w-full sm:left-[28%] sm:w-[72%] lg:left-[35%] lg:w-[65%] xl:left-[38%] xl:w-[62%] 2xl:left-[40%] 2xl:w-[60%]">
            <Image
              src="/images/heroes/hero-values.webp"
              alt="NabiOta Health Group Germany Werte"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 72vw, 62vw"
              className="object-cover object-center lg:object-center"
            />
            {/* Desktop right-side subtle blend */}
            <div className="hidden sm:block absolute inset-0 bg-gradient-to-r sm:from-[#07150C]/40 sm:via-[#07150C]/10 sm:to-transparent" />
          </div>

          {/* Desktop/Tablet SVG with Deep Forest Green Shape & Dual Glowing Golden Arcs */}
          <svg
            className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 1440 600"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Clip path for the narrower left wing (620 at top to 800 at bottom) */}
              <clipPath id="valuesLeftWingClip">
                <path d="M 0,0 L 620,0 C 710,180 680,420 800,600 L 0,600 Z" />
              </clipPath>

              <linearGradient id="valuesHeroGoldGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#DFC894" stopOpacity="0.4" />
                <stop offset="25%" stopColor="#ECCF93" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#D4B06A" stopOpacity="1" />
                <stop offset="75%" stopColor="#ECCF93" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#DFC894" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="valuesHeroGoldGradLight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ECCF93" stopOpacity="0.08" />
                <stop offset="35%" stopColor="#ECCF93" stopOpacity="0.45" />
                <stop offset="75%" stopColor="#DFC894" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#DFC894" stopOpacity="0.08" />
              </linearGradient>
              <filter id="valuesHeroGoldGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="valuesDarkGreenFill" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#040F07" stopOpacity="0.15" />
                <stop offset="40%" stopColor="#040F07" stopOpacity="0.32" />
                <stop offset="70%" stopColor="#07180D" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#0A1E13" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            {/* Botanical Gold Background Image inside the Left Wing (xMin anchored for lush left leaves) */}
            <image
              href="/images/botanical-gold-bg.webp"
              x="0"
              y="0"
              width="1440"
              height="600"
              preserveAspectRatio="xMinYMid slice"
              clipPath="url(#valuesLeftWingClip)"
              opacity="1"
            />

            {/* Subtle Dark Green shading overlay inside the Left Wing for crisp text contrast */}
            <path
              d="M 0,0 L 620,0 C 710,180 680,420 800,600 L 0,600 Z"
              fill="url(#valuesDarkGreenFill)"
            />

            {/* Primary Glowing Golden Separator Arc Line (Narrower position) */}
            <path
              d="M 620,0 C 710,180 680,420 800,600"
              stroke="url(#valuesHeroGoldGrad)"
              strokeWidth="2"
              fill="none"
              filter="url(#valuesHeroGoldGlow)"
            />

            {/* Secondary Fine Golden Accent Curve */}
            <path
              d="M 645,0 C 735,185 705,430 825,600"
              stroke="url(#valuesHeroGoldGradLight)"
              strokeWidth="1"
              fill="none"
            />
          </svg>

          {/* Mobile Background: Botanical texture + light transparent gradient */}
          <div className="sm:hidden absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/images/botanical-gold-bg.webp"
              alt=""
              fill
              className="object-cover object-left"
              priority
            />
            <div className="absolute inset-0 bg-[#07150C]/65" />
          </div>

          {/* Top subtle vignette for seamless fixed header blend */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#051208]/85 to-transparent pointer-events-none z-10" />

          <Container size="wide" className="relative z-20">
            <div className="max-w-xl lg:max-w-[520px] xl:max-w-[580px] pl-2 sm:pl-6 lg:pl-8 xl:pl-10">
              {/* Main Heading */}
              <h1 dir="auto" className="page-hero-title text-left font-serif text-[30px] sm:text-[38px] lg:text-[42px] xl:text-[46px] font-normal leading-[1.12] tracking-[-0.01em] text-white mb-4 sm:mb-5 break-words [overflow-wrap:anywhere] hyphens-auto">
                {t.heroTitle1}
                <br />
                {t.heroTitle2}
              </h1>

              {/* Description */}
              <p dir="auto" className="hero-text-wrap text-left text-[13px] sm:text-[14px] text-[#D2DED5] leading-[1.65] font-sans max-w-xl mb-4 sm:mb-5 font-normal break-words [overflow-wrap:anywhere] hyphens-auto">
                {t.heroDesc}
              </p>

              {/* 3 Circular Feature Badges matching reference photo */}
              <div className="mb-2 sm:mb-3">
                <HeroBadges
                  items={[
                    {
                      icon: HeartHandshake,
                      title: t.badge1Title,
                      sub: t.badge1Sub,
                    },
                    {
                      icon: Shield,
                      title: t.badge2Title,
                      sub: t.badge2Sub,
                    },
                    {
                      icon: Sparkles,
                      title: t.badge3Title,
                      sub: t.badge3Sub,
                    },
                  ]}
                />
              </div>

            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 2: UNSERE MISSION (Mehr als nur Gesundheitsversorgung.)
        ══════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#ECE7DC] relative">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Mission Content & Signature */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h2 className="font-serif text-[34px] sm:text-[40px] lg:text-[46px] font-normal leading-[1.12] text-[#142318] mb-5">
                  {t.missionHeading1}
                  <br />
                  {t.missionHeading2}
                </h2>

                <p className="text-[14px] sm:text-[14.5px] text-[#4E5650] leading-[1.75] font-sans mb-8">
                  {t.missionText}
                </p>

                {/* Signature block */}
                <div className="pt-2">
                  <div className="flex items-baseline gap-1 select-none mb-2">
                    <span className="font-signature text-4xl sm:text-[46px] text-[#142318] tracking-wide font-normal leading-none">
                      NabiOta
                    </span>
                    <span className="text-xs text-[#C5A56A] font-serif -ml-0.5 -top-3 relative font-bold">®</span>
                  </div>
                  <p className="font-serif text-[14px] font-bold text-[#142318] leading-tight">
                    {t.signatureCompany}
                  </p>
                  <p className="text-[11.5px] text-[#717A73] font-sans">
                    {t.signatureTitle}
                  </p>
                </div>
              </div>

              {/* Right Column: Doctor Patient Photo + Floating Pill Card */}
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#EDE7D9] bg-[#F7F4EE]">
                  <Image
                    src="/images/values/values-doctor-patient.webp"
                    alt="Ärztliche Betreuung bei NabiOta Health Group"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-[center_25%]"
                  />

                  {/* Floating Pill Card Overlaid at the Bottom of Photo */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md border border-[#E8DFD0] rounded-2xl p-3.5 sm:p-4 shadow-lg flex items-center gap-3 sm:gap-3.5">
                    <div className="text-[#B89650] flex items-center justify-center flex-shrink-0">
                      <Heart className="w-7 h-7 fill-[#B89650]/20 stroke-[1.8]" />
                    </div>
                    <p className="text-[12px] sm:text-[12.5px] text-[#142318] font-sans italic leading-snug">
                      {t.missionQuote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 3: UNSERE WERTE (Das macht uns besonders)
        ══════════════════════════════════════════════════════════ */}
        <section className="relative py-10 sm:py-12 lg:py-14 bg-[#07160D] text-white overflow-hidden border-b border-[#D5B878]/20">
          {/* Background: Botanical leaves illuminated on the left matching Screenshot 2 */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <Image
              src="/images/values/leaves-bg.webp"
              alt="Botanical Background"
              fill
              sizes="100vw"
              priority
              className="object-cover object-[left_center]"
            />
            {/* Smooth gradient from transparent over leaves to rich dark forest green on the right */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#07160D]/80 to-[#07160D] hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#07160D]/65 via-[#07160D]/90 to-[#07160D] lg:hidden" />
          </div>

          <Container size="wide" className="relative z-10">
            {/* Shift content to the right so left foliage remains unobstructed */}
            <div className="lg:ml-auto lg:w-[78%] xl:w-[75%]">
              {/* Header */}
              <div className="max-w-xl mb-5 sm:mb-6">
                <h2 className="font-serif text-[28px] sm:text-[34px] lg:text-[38px] font-normal leading-[1.15] text-white mb-2 sm:mb-2.5">
                  {t.valuesHeading}
                </h2>
                <p className="text-[12.5px] sm:text-[13.5px] text-[#C2D2C5] leading-relaxed font-sans max-w-lg">
                  {t.valuesSubtitle}
                </p>
              </div>

              {/* 4 Value Cards in ONE row on desktop matching user request */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
                {/* Card 1: Verlässlicher Partner */}
                <div className="bg-[#0A1F13]/85 hover:bg-[#0D2618]/95 border border-[#D5B878]/30 hover:border-[#D5B878]/70 backdrop-blur-md rounded-xl sm:rounded-2xl p-3.5 sm:p-4 transition-all duration-300 hover:-translate-y-1 shadow-[0_6px_20px_rgba(0,0,0,0.3)] group flex flex-col justify-between">
                  <div>
                    <div className="text-[#ECCF96] mb-2.5 flex items-center transition-transform group-hover:scale-105">
                      <HeartHandshake className="w-7 h-7 stroke-[1.6]" />
                    </div>
                    <h3 className="font-serif font-bold text-[14.5px] sm:text-[15.5px] text-white mb-1 group-hover:text-[#ECCF96] transition-colors leading-snug">
                      {t.val1Title}
                    </h3>
                    <p className="text-[11px] sm:text-[11.5px] text-[#A6B8AA] leading-snug font-sans">
                      {t.val1Desc}
                    </p>
                  </div>
                </div>

                {/* Card 2: Innovative Lösungen */}
                <div className="bg-[#0A1F13]/85 hover:bg-[#0D2618]/95 border border-[#D5B878]/30 hover:border-[#D5B878]/70 backdrop-blur-md rounded-xl sm:rounded-2xl p-3.5 sm:p-4 transition-all duration-300 hover:-translate-y-1 shadow-[0_6px_20px_rgba(0,0,0,0.3)] group flex flex-col justify-between">
                  <div>
                    <div className="text-[#ECCF96] mb-2.5 flex items-center transition-transform group-hover:scale-105">
                      <Lightbulb className="w-7 h-7 stroke-[1.6]" />
                    </div>
                    <h3 className="font-serif font-bold text-[14.5px] sm:text-[15.5px] text-white mb-1 group-hover:text-[#ECCF96] transition-colors leading-snug">
                      {t.val2Title}
                    </h3>
                    <p className="text-[11px] sm:text-[11.5px] text-[#A6B8AA] leading-snug font-sans">
                      {t.val2Desc}
                    </p>
                  </div>
                </div>

                {/* Card 3: Living Responsibility */}
                <div className="bg-[#0A1F13]/85 hover:bg-[#0D2618]/95 border border-[#D5B878]/30 hover:border-[#D5B878]/70 backdrop-blur-md rounded-xl sm:rounded-2xl p-3.5 sm:p-4 transition-all duration-300 hover:-translate-y-1 shadow-[0_6px_20px_rgba(0,0,0,0.3)] group flex flex-col justify-between">
                  <div>
                    <div className="text-[#ECCF96] mb-2.5 flex items-center transition-transform group-hover:scale-105">
                      <Shield className="w-7 h-7 stroke-[1.6]" />
                    </div>
                    <h3 className="font-serif font-bold text-[14.5px] sm:text-[15.5px] text-white mb-1 group-hover:text-[#ECCF96] transition-colors leading-snug">
                      {t.val3Title}
                    </h3>
                    <p className="text-[11px] sm:text-[11.5px] text-[#A6B8AA] leading-snug font-sans">
                      {t.val3Desc}
                    </p>
                  </div>
                </div>

                {/* Card 4: People Development */}
                <div className="bg-[#0A1F13]/85 hover:bg-[#0D2618]/95 border border-[#D5B878]/30 hover:border-[#D5B878]/70 backdrop-blur-md rounded-xl sm:rounded-2xl p-3.5 sm:p-4 transition-all duration-300 hover:-translate-y-1 shadow-[0_6px_20px_rgba(0,0,0,0.3)] group flex flex-col justify-between">
                  <div>
                    <div className="text-[#ECCF96] mb-2.5 flex items-center transition-transform group-hover:scale-105">
                      <Users className="w-7 h-7 stroke-[1.6]" />
                    </div>
                    <h3 className="font-serif font-bold text-[14.5px] sm:text-[15.5px] text-white mb-1 group-hover:text-[#ECCF96] transition-colors leading-snug">
                      {t.val4Title}
                    </h3>
                    <p className="text-[11px] sm:text-[11.5px] text-[#A6B8AA] leading-snug font-sans">
                      {t.val4Desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 3B: GOVERNANCE & ÄRZTLICHE ETHIK (PDF Section II & IV)
        ══════════════════════════════════════════════════════════ */}
        <section className="py-12 sm:py-14 lg:py-16 bg-[#FAF7F2] border-b border-[#E8DFD0] relative overflow-hidden">
          {/* Subtle ambient blur */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#EBDDC0]/25 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#D5B878]/15 blur-3xl pointer-events-none" />

          <Container size="wide" className="relative z-10">
            {/* Section Header */}
            <div className="max-w-3xl mb-12 sm:mb-14">
              <h2 className="font-serif text-[30px] sm:text-[36px] lg:text-[42px] font-normal leading-[1.15] text-[#142318] mb-4">
                {t.govHeading1}{" "}
                <span className="text-[#8B7347]">{t.govHeading2}</span>
              </h2>
              <p className="text-[13.5px] sm:text-[14.5px] text-[#555E56] leading-relaxed font-sans">
                {t.govSubtitle}
              </p>
            </div>

            {/* 4 Pillars Grid Matching Reference Photo */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-7 mb-10 sm:mb-12">
              {/* Pillar 1: Weisungsfreiheit § 95 SGB V (Image LEFT, Content RIGHT) */}
              <div className="bg-white/95 rounded-2xl sm:rounded-3xl border border-[#EAE4D7] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#D5B878]/70 transition-all duration-300 flex flex-col sm:flex-row items-stretch overflow-hidden group">
                <div className="w-full sm:w-[36%] lg:w-[35%] shrink-0 relative min-h-[170px] sm:min-h-[190px] p-3 sm:p-3.5">
                  <div className="relative w-full h-full min-h-[160px] sm:min-h-[180px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xs">
                    <Image
                      src="/images/values/gov-stethoscope.webp"
                      alt={t.govPillar1Title}
                      fill
                      sizes="(min-width: 1024px) 20vw, 40vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="p-4 sm:p-5 lg:p-5.5 flex-1 flex flex-col justify-center">
                  <div>
                    <h3 className="font-serif text-[17px] sm:text-[18.5px] font-bold text-[#142318] mb-1.5 leading-snug">
                      {t.govPillar1Title}
                    </h3>
                    <p className="text-[11.5px] sm:text-[12px] text-[#556057] leading-[1.6] font-sans mb-2.5">
                      {t.govPillar1Desc}
                    </p>
                    <div className="space-y-1.5">
                      {t.govPillar1Points.map((point: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2 text-[11px] sm:text-[11.5px] text-[#2C3E31] font-medium leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B89650] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Pillar 2: QM & Patientensicherheit (Content LEFT, Image RIGHT) */}
              <div className="bg-white/95 rounded-2xl sm:rounded-3xl border border-[#EAE4D7] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#D5B878]/70 transition-all duration-300 flex flex-col-reverse sm:flex-row items-stretch overflow-hidden group">
                <div className="p-4 sm:p-5 lg:p-5.5 flex-1 flex flex-col justify-center">
                  <div>
                    <h3 className="font-serif text-[17px] sm:text-[18.5px] font-bold text-[#142318] mb-1.5 leading-snug">
                      {t.govPillar2Title}
                    </h3>
                    <p className="text-[11.5px] sm:text-[12px] text-[#556057] leading-[1.6] font-sans mb-2.5">
                      {t.govPillar2Desc}
                    </p>
                    <div className="space-y-1.5">
                      {t.govPillar2Points.map((point: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2 text-[11px] sm:text-[11.5px] text-[#2C3E31] font-medium leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B89650] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-[36%] lg:w-[35%] shrink-0 relative min-h-[170px] sm:min-h-[190px] p-3 sm:p-3.5">
                  <div className="relative w-full h-full min-h-[160px] sm:min-h-[180px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xs">
                    <Image
                      src="/images/values/gov-room.webp"
                      alt={t.govPillar2Title}
                      fill
                      sizes="(min-width: 1024px) 20vw, 40vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Pillar 3: Schweigepflicht & Datenschutz (Image LEFT, Content RIGHT) */}
              <div className="bg-white/95 rounded-2xl sm:rounded-3xl border border-[#EAE4D7] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#D5B878]/70 transition-all duration-300 flex flex-col sm:flex-row items-stretch overflow-hidden group">
                <div className="w-full sm:w-[36%] lg:w-[35%] shrink-0 relative min-h-[170px] sm:min-h-[190px] p-3 sm:p-3.5">
                  <div className="relative w-full h-full min-h-[160px] sm:min-h-[180px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xs">
                    <Image
                      src="/images/values/gov-datenschutz.webp"
                      alt={t.govPillar3Title}
                      fill
                      sizes="(min-width: 1024px) 20vw, 40vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="p-4 sm:p-5 lg:p-5.5 flex-1 flex flex-col justify-center">
                  <div>
                    <h3 className="font-serif text-[17px] sm:text-[18.5px] font-bold text-[#142318] mb-1.5 leading-snug">
                      {t.govPillar3Title}
                    </h3>
                    <p className="text-[11.5px] sm:text-[12px] text-[#556057] leading-[1.6] font-sans mb-2.5">
                      {t.govPillar3Desc}
                    </p>
                    <div className="space-y-1.5">
                      {t.govPillar3Points.map((point: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2 text-[11px] sm:text-[11.5px] text-[#2C3E31] font-medium leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B89650] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Pillar 4: Kassen & KVNO Partnerschaft (Content LEFT, Image RIGHT) */}
              <div className="bg-white/95 rounded-2xl sm:rounded-3xl border border-[#EAE4D7] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#D5B878]/70 transition-all duration-300 flex flex-col-reverse sm:flex-row items-stretch overflow-hidden group">
                <div className="p-4 sm:p-5 lg:p-5.5 flex-1 flex flex-col justify-center">
                  <div>
                    <h3 className="font-serif text-[17px] sm:text-[18.5px] font-bold text-[#142318] mb-1.5 leading-snug">
                      {t.govPillar4Title}
                    </h3>
                    <p className="text-[11.5px] sm:text-[12px] text-[#556057] leading-[1.6] font-sans mb-2.5">
                      {t.govPillar4Desc}
                    </p>
                    <div className="space-y-1.5">
                      {t.govPillar4Points.map((point: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2 text-[11px] sm:text-[11.5px] text-[#2C3E31] font-medium leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B89650] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-[36%] lg:w-[35%] shrink-0 relative min-h-[170px] sm:min-h-[190px] p-3 sm:p-3.5">
                  <div className="relative w-full h-full min-h-[160px] sm:min-h-[180px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xs">
                    <Image
                      src="/images/values/gov-handshake.webp"
                      alt={t.govPillar4Title}
                      fill
                      sizes="(min-width: 1024px) 20vw, 40vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Governance Callout Banner with Botanical Gold BG */}
            <div className="relative rounded-2xl sm:rounded-3xl border border-[#D5B878]/35 shadow-xl overflow-hidden p-6 sm:p-8 lg:p-9 bg-[#07160D] text-white">
              {/* Background image: botanical-gold-bg.webp */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                  src="/images/botanical-gold-bg.webp"
                  alt="Botanical Governance Background"
                  fill
                  sizes="100vw"
                  className="object-cover object-center opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#07160D]/95 via-[#07160D]/85 to-[#07160D]/55" />
              </div>

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex items-start sm:items-center gap-4 sm:gap-5 max-w-3xl">
                  {/* Gold monogram / emblem */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-[#ECCF96] shrink-0">
                    <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#ECCF96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2C12 7 7 12 2 12C7 12 12 17 12 22C12 17 17 12 22 12C17 12 12 7 12 2Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-[20px] sm:text-[24px] lg:text-[26px] text-white font-normal leading-tight mb-2">
                      {t.govBannerTitle}
                    </h3>
                    <p className="text-[12px] sm:text-[12.5px] text-[#C2D2C5] leading-relaxed font-sans max-w-2xl">
                      {t.govBannerDesc}
                    </p>
                  </div>
                </div>

                <div className="flex-shrink-0 flex items-center pt-2 lg:pt-0">
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-[#E5CF98] hover:bg-[#F0DDB3] text-[#142318] font-sans font-semibold text-[11px] sm:text-[11.5px] tracking-wider uppercase transition-all shadow-md shrink-0 whitespace-nowrap"
                  >
                    <span>
                      {isUz
                        ? "Rahbariyat bilan bog'lanish"
                        : isRu
                        ? "Связаться с руководством"
                        : isEn
                        ? "Contact Management"
                        : isTr
                        ? "Yönetimle İletişime Geçin"
                        : isAr
                        ? "التواصل مع إدارة المجموعة"
                        : "Kontakt zur Geschäftsführung"}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 4: UNSERE BEREICHE (Vielfältige Kompetenzen für Ihre Gesundheit)
        ══════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] border-b border-[#ECE7DC]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Heading, text, and button */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <h2 className="font-serif text-[34px] sm:text-[40px] lg:text-[46px] font-normal leading-[1.12] text-[#142318] mb-4">
                  {t.areasHeading1}
                  <br />
                  {t.areasHeading2}
                </h2>

                <p className="text-[13.5px] sm:text-[14px] text-[#555E56] leading-[1.7] font-sans mb-8">
                  {t.areasText}
                </p>

                <div>
                  <Link
                    href={`/${locale}/areas`}
                    className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-[#ECCF93] to-[#D4AF67] text-[#142217] font-sans font-semibold text-[13px] tracking-wide hover:from-[#F2DAB0] hover:to-[#DEBD7A] transition-all shadow-md group"
                  >
                    <span>{t.areasBtn}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Right Column: 3x3 Division Cards Grid */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
                  {divisions.map((divItem, idx) => {
                    const DivIcon = divItem.icon;
                    return (
                      <Link
                        key={idx}
                        href={divItem.href}
                        className="bg-white/90 hover:bg-white border border-[#EAE4D7] hover:border-[#D5B878] rounded-xl p-4 sm:p-5 flex flex-col items-center text-center justify-center transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 group shadow-[0_1px_4px_rgba(0,0,0,0.02)] min-h-[120px]"
                      >
                        <div className="text-[#B89650] mb-2.5 sm:mb-3 transition-transform duration-200 group-hover:scale-110">
                          <DivIcon className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.5]" />
                        </div>
                        <h4 className="font-serif font-medium text-[12.5px] sm:text-[13px] text-[#142318] leading-snug group-hover:text-[#BFA267] transition-colors">
                          {divItem.name}
                        </h4>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 5: STATS BAR (Unsere Zahlen sprechen für sich.)
        ══════════════════════════════════════════════════════════ */}
        <section className="relative py-14 sm:py-18 overflow-hidden bg-[#FAF6EE] border-b border-[#ECE7DC]">
          {/* Panoramic background photo with hands holding heart on the right */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/images/bacground.webp"
              alt="NabiOta Numbers & Values"
              fill
              sizes="100vw"
              className="object-cover object-center opacity-85"
            />
            {/* Soft cream gradient overlay for readability on left */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6EE] via-[#FAF6EE]/80 to-transparent" />
          </div>

          <Container size="wide" className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Heading */}
              <div className="lg:col-span-4">
                <h2 className="font-serif text-[30px] sm:text-[36px] font-normal leading-[1.18] text-[#142318]">
                  {t.statsHeading1}
                  <br />
                  {t.statsHeading2}
                </h2>
              </div>

              {/* Right Column: 4 Stats Columns */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                  {/* Stat 1 */}
                  <div className="border-l border-[#D5B878]/50 pl-4 sm:pl-5">
                    <span className="font-serif text-[36px] sm:text-[44px] font-normal text-[#B89650] leading-none block mb-1">
                      {t.stat1Num}
                    </span>
                    <span className="text-[12px] sm:text-[12.5px] font-medium text-[#4E5650] leading-tight block">
                      {t.stat1Label}
                    </span>
                  </div>

                  {/* Stat 2 */}
                  <div className="border-l border-[#D5B878]/50 pl-4 sm:pl-5">
                    <span className="font-serif text-[36px] sm:text-[44px] font-normal text-[#B89650] leading-none block mb-1">
                      {t.stat2Num}
                    </span>
                    <span className="text-[12px] sm:text-[12.5px] font-medium text-[#4E5650] leading-tight block">
                      {t.stat2Label}
                    </span>
                  </div>

                  {/* Stat 3 */}
                  <div className="border-l border-[#D5B878]/50 pl-4 sm:pl-5">
                    <span className="font-serif text-[36px] sm:text-[44px] font-normal text-[#B89650] leading-none block mb-1">
                      {t.stat3Num}
                    </span>
                    <span className="text-[12px] sm:text-[12.5px] font-medium text-[#4E5650] leading-tight block">
                      {t.stat3Label}
                    </span>
                  </div>

                  {/* Stat 4 */}
                  <div className="border-l border-[#D5B878]/50 pl-4 sm:pl-5">
                    <span className="font-serif text-[36px] sm:text-[44px] font-normal text-[#B89650] leading-none block mb-1">
                      {t.stat4Num}
                    </span>
                    <span className="text-[12px] sm:text-[12.5px] font-medium text-[#4E5650] leading-tight block">
                      {t.stat4Label}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 6: UNSER TEAM (Gemeinsam mehr erreichen.)
        ══════════════════════════════════════════════════════════ */}
        <section className="py-12 sm:py-14 lg:py-16 bg-white border-b border-[#ECE7DC] relative">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-9 items-center">
              {/* Left Column: Team Content & Button */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h2 className="font-serif text-[34px] sm:text-[40px] lg:text-[46px] font-normal leading-[1.12] text-[#142318] mb-5">
                  {t.teamHeading}
                </h2>

                <p className="text-[14px] sm:text-[14.5px] text-[#4E5650] leading-[1.75] font-sans mb-8">
                  {t.teamText}
                </p>

                <div>
                  <Link
                    href={`/${locale}/career`}
                    className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-[#ECCF93] to-[#D4AF67] text-[#142217] font-sans font-semibold text-[13px] tracking-wide hover:from-[#F2DAB0] hover:to-[#DEBD7A] transition-all shadow-md group"
                  >
                    <span>{t.teamBtn}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Medical Team Photo with Floating Pill */}
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-xl border border-[#EDE7D9] bg-[#F7F4EE]">
                  <Image
                    src="/images/values/values-team.webp"
                    alt="NabiOta Health Group Medical Team"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-[center_20%]"
                  />

                  {/* Floating Pill Card Overlaid at the Bottom of Photo */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md border border-[#E8DFD0] rounded-2xl p-3.5 sm:p-4 shadow-lg flex items-center gap-3 sm:gap-3.5">
                    <div className="w-7 h-7 flex items-center justify-center text-[#B89650] flex-shrink-0">
                      <Users className="w-6 h-6" />
                    </div>
                    <p className="text-[12.5px] sm:text-[13px] font-semibold text-[#142318] font-sans leading-snug">
                      {t.teamBadge}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 7: FOUNDER / EXECUTIVE QUOTE BANNER (Marike NabiOta®)
        ══════════════════════════════════════════════════════════ */}
        <section className="py-14 sm:py-18 bg-[#FCFAF6]">
          <Container size="wide">
            <div className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden border border-[#D5B878]/45 bg-[#09170E] shadow-2xl p-8 sm:p-10 lg:py-14 lg:px-12 min-h-[180px] sm:min-h-[210px] flex items-center">
              {/* Background: Visible Misty Panoramic Green Mountains matching Screenshot 3 */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                  src="/images/values/mountains-bg.webp"
                  alt="Misty Mountains Landscape"
                  fill
                  sizes="100vw"
                  priority
                  className="object-cover object-center opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#06140B]/85 via-[#081B10]/65 to-[#06140B]/80" />
              </div>

              {/* Content Layout: Avatar on left, Quote in middle, Cursive Signature on right */}
              <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
                {/* Left: Avatar Portrait */}
                <div className="flex items-center gap-4 sm:gap-5 flex-shrink-0">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#D5B878] shadow-[0_0_20px_rgba(213,184,120,0.3)] flex-shrink-0">
                    <Image
                      src="/images/values/marike-nabiota.webp"
                      alt={t.founderName}
                      fill
                      sizes="96px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                {/* Center: Name & Quote */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#ECCF96] tracking-wide mb-2">
                    {t.founderName}
                  </h3>
                  <blockquote className="font-sans text-[13.5px] sm:text-[14.5px] text-white/95 leading-relaxed max-w-2xl italic">
                    {t.founderQuote}
                  </blockquote>
                </div>

                {/* Right: Golden Handwritten Cursive Script Signature & Role matching Screenshot 3 */}
                <div className="flex flex-col items-center md:items-end flex-shrink-0 text-center md:text-right select-none">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="font-signature text-4xl sm:text-5xl text-[#ECCF96] tracking-wide font-normal leading-none drop-shadow-sm">
                      NabiOta
                    </span>
                    <span className="text-[11px] text-[#ECCF96] font-serif -ml-0.5 -top-3 relative font-bold">®</span>
                  </div>
                  <span className="text-[11px] font-sans font-medium text-[#C2D2C5] tracking-[0.2em] uppercase">
                    {t.founderRole}
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer currentLocale={locale} />
    </div>
  );
}
