"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Stethoscope,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Heart,
  Clock,
  Users,
} from "@/lib/icons";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { MvzPrimaryCareSection } from "@/components/sections/MvzPrimaryCareSection";
import { MvzSurgeryCareSection } from "@/components/sections/MvzSurgeryCareSection";
import { ClinicsGermanySection } from "@/components/sections/ClinicsGermanySection";
import { PageHero } from "@/components/layout/PageHero";
import { SupportedLocale } from "@/lib/i18n";
import { businessAreas } from "@/data/areas";
import { getMedizinischeFachbereicheTranslations } from "@/data/translations/medizinische-fachbereiche-page";

// ── Custom SVG Icons Matching User Design ──
function ScalpelIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m18 2-4 4-9.5 9.5a1 1 0 0 0 0 1.4l2.1 2.1a1 1 0 0 0 1.4 0L17.5 9.5 22 5Z" />
      <path d="m14 6 4 4" />
    </svg>
  );
}

// ── Custom SVG Icons Matching User Design ──
function CloverEmblemIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 4.5C10.5 4.5 9 5.5 9 7.5c0 2.2 3 4.5 3 4.5s3-2.3 3-4.5c0-2-1.5-3-3-3Z" />
      <path d="M12 19.5c1.5 0 3-1 3-3 0-2.2-3-4.5-3-4.5s-3 2.3-3 4.5c0 2 1.5 3 3 3Z" />
      <path d="M4.5 12C4.5 10.5 5.5 9 7.5 9c2.2 0 4.5 3 4.5 3s-2.3 3-4.5 3c-2 0-3-1.5-3-3Z" />
      <path d="M19.5 12c0 1.5-1 3-3 3-2.2 0-4.5-3-4.5-3s2.3-3 4.5-3c2 0 3 1.5 3 3Z" />
      <circle cx="12" cy="12" r="1.5" />
    </svg>
  );
}

function TeamSpecialistsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="8" r="2.5" />
      <path d="M7 19v-2a5 5 0 0 1 10 0v2" />
      <circle cx="5" cy="11" r="1.8" />
      <path d="M2.5 19v-1.5a3.5 3.5 0 0 1 3.5-3.5" />
      <circle cx="19" cy="11" r="1.8" />
      <path d="M21.5 19v-1.5a3.5 3.5 0 0 0-3.5-3.5" />
    </svg>
  );
}

function TechNodesIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="8" cy="8" r="2.2" />
      <circle cx="16" cy="8" r="2.2" />
      <circle cx="8" cy="16" r="2.2" />
      <circle cx="16" cy="16" r="2.2" />
      <path d="M10.2 8h3.6M8 10.2v3.6M16 10.2v3.6M10.2 16h3.6" />
    </svg>
  );
}

function HeartContourIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function DiagnosticIcon({ className = "w-4.5 h-4.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

function MinimallyInvasiveIcon({ className = "w-4.5 h-4.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m14 4 6 6-9 9-6-6Z" />
      <path d="M4 20h4" />
    </svg>
  );
}

function TherapyPlanIcon({ className = "w-4.5 h-4.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="8" cy="8" r="2.2" />
      <circle cx="16" cy="8" r="2.2" />
      <circle cx="8" cy="16" r="2.2" />
      <circle cx="16" cy="16" r="2.2" />
    </svg>
  );
}

interface MedizinischeFachbereicheProps {
  locale: SupportedLocale;
}

export function MedizinischeFachbereichePageComponent({ locale }: MedizinischeFachbereicheProps) {
  const isRu = locale === "ru";
  const isEn = locale === "en";
  const isTr = locale === "tr";
  const isAr = locale === "ar";
  const isUz = locale === "uz";

  const area = businessAreas.find((a) => a.slug === "medizinische-fachbereiche") || businessAreas[0];

  // ── Hero Data ──
  const {
    heroData,
    overviewData,
    spotlight,
    whySection,
    teamSection,
    ctaSection,
  } = getMedizinischeFachbereicheTranslations(locale);

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentLocale={locale} />

      {/* ── Page Hero ── */}
      <PageHero
          locale={locale}
        title={heroData.title}
        description={heroData.description}
        imageSrc={area.image || "/images/heroes/hero-areas.webp"}
        imageAlt="Medizinische Fachbereiche NabiOta Health Group"
        badges={heroData.badges}
      />

      <main className="flex-1 bg-[#FAF8F5]">
        {/* ══════════════════════════════════════════════════════════
            SECTION 1: OVERVIEW HEADER (EYEBROW + TITLE + DESCRIPTION)
            - "вот эту часть отсаедеине от контейнера и оставь сверху"
        ══════════════════════════════════════════════════════════ */}
        <section className="pt-10 sm:pt-14 pb-8 sm:pb-10 bg-[#FAF8F5]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end">
              <div className="lg:col-span-6 space-y-2">
                <h2 className="font-serif text-3xl sm:text-4xl text-[#132218] font-normal leading-tight">
                  {overviewData.title}
                </h2>
              </div>
              <div className="lg:col-span-6 border-l-2 border-[#D5B878]/60 pl-5 sm:pl-7">
                <p className="text-xs sm:text-[13.5px] text-[#556358] leading-relaxed font-sans">
                  {overviewData.desc}
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 2: SPOTLIGHT KARDIOLOGIE
            - "а под ней должна сразу быть часть Кардиология - точность для здорового сердца"
            - Left: Ultrasound doctor photo with floating card
            - Right: Heart contour background, Eyebrow, Title, Description, 3 feature icons, Link
        ══════════════════════════════════════════════════════════ */}
        <section className="py-10 sm:py-14 lg:py-16 bg-[#FAF8F5] relative overflow-hidden border-t border-[#EDE8DE]/60">
          {/* Subtle Decorative Heart Contour & Wavy Gold Line in Top-Right */}
          <div className="absolute top-4 sm:top-8 right-6 sm:right-16 w-60 sm:w-80 h-60 sm:h-80 pointer-events-none opacity-45 z-0">
            <svg
              viewBox="0 0 200 200"
              fill="none"
              className="w-full h-full text-[#D5B878]"
            >
              {/* Delicate Heart Silhouette */}
              <path
                d="M100 65 C85 30, 42 35, 42 75 C42 115, 100 155, 100 155 C100 155, 158 115, 158 75 C158 35, 115 30, 100 65 Z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Smooth Elegant Flow Line */}
              <path
                d="M10 110 Q 60 70, 100 115 T 195 105"
                stroke="#C5A56A"
                strokeWidth="0.8"
                opacity="0.6"
              />
            </svg>
          </div>

          <Container size="wide" className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Ultrasound Photo + Floating Bottom Pill Badge */}
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[16/10] sm:aspect-[16/10.5] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-[#EDE8DE]">
                  <Image
                    src="/images/areas/cardiology-focus.webp"
                    alt={spotlight.title}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  {/* Subtle vignette on bottom for card contrast */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

                  {/* Floating Pill Overlay Card */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-auto sm:max-w-md bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full px-4 sm:px-5 py-2.5 sm:py-3 shadow-lg flex items-center justify-between gap-3 border border-white/60">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 flex items-center justify-center text-[#ECCF96] shrink-0">
                        <CloverEmblemIcon className="w-7 h-7 stroke-[1.6]" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-[13.5px] sm:text-[14px] font-bold text-[#142318] truncate leading-tight">
                          {spotlight.pillTitle}
                        </h4>
                        <p className="text-[11px] text-[#6E756D] truncate font-sans mt-0.5">
                          {spotlight.pillSubtitle}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={`/${locale}/mvz-hausarzt-facharzt`}
                      aria-label={spotlight.linkText}
                      className="text-[#142318] hover:text-[#B89650] transition-colors flex items-center justify-center shrink-0 ml-1 p-1"
                    >
                      <ArrowRight className="w-4 h-4 transition-transform hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column: Title, Description, 3 Badges, Link */}
              <div className="lg:col-span-6 space-y-4 sm:space-y-5 lg:pl-2">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#132218] font-normal leading-[1.18] whitespace-pre-line">
                  {spotlight.title}
                </h2>

                <p className="text-xs sm:text-[13.5px] text-[#556358] leading-relaxed font-sans max-w-lg">
                  {spotlight.desc}
                </p>

                {/* 3 Horizontal Badges with Gold Outline Icons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2 sm:pt-3">
                  {spotlight.features.map((feat, idx) => {
                    const FeatureIcon = feat.icon;
                    return (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="text-[#B89650] flex items-center justify-center shrink-0">
                          <FeatureIcon className="w-6 h-6 stroke-[1.6]" />
                        </div>
                        <span className="text-[11.5px] sm:text-xs font-medium text-[#425046] leading-snug">
                          {feat.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Link with underline and arrow */}
                <div className="pt-2 sm:pt-4">
                  <Link
                    href={`/${locale}/mvz-hausarzt-facharzt`}
                    className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-[#142318] hover:text-[#B89650] underline decoration-[#D5B878] underline-offset-4 transition-colors"
                  >
                    <span>{spotlight.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 3: CORE CAPABILITIES & GROUP ADVANTAGES CARDS
            - Redesigned into premium editorial corporate layout matching reference photos
            - Left: Struktur der Fachbereiche & Zentren with enlarged emblem, thin green curved arc, soft blur & stethoscope photo
            - Right: Ihre Vorteile im Verbund with enlarged advantage icons/text & prominent stats
            - Middle: Centered group heading
            - Bottom: 3 company cards with enlarged icons and compact height
        ══════════════════════════════════════════════════════════ */}
        <section className="pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 lg:pb-12 bg-[#FAF8F5] border-t border-[#EDE8DE]/60">
          <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Top Two Feature Cards (Left wider, Right narrower with lower height) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
              {/* Card 1: Core Capabilities (Wider ~58% width: lg:col-span-7) */}
              <div className="lg:col-span-7 bg-white rounded-[22px] sm:rounded-[24px] border border-[#EDE8DE] shadow-[0_2px_14px_rgba(0,0,0,0.03)] relative overflow-hidden flex flex-col justify-between p-5 sm:p-6 lg:p-6.5 h-full">
                {/* Right Side: Organic Stethoscope Photo with soft blur and thin green arc */}
                <div className="absolute -top-3 right-0 -bottom-3 w-[42%] sm:w-[44%] lg:w-[44%] pointer-events-none select-none">
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src="/images/areas/stethoscope-clinic.webp"
                      alt="Klinische Umgebung und Stethoskop"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                    {/* Soft gradient fade into white card background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
                    {/* Delicate blur transition on the left edge of photo */}
                    <div className="absolute inset-y-0 left-0 w-20 sm:w-24 bg-gradient-to-r from-white via-white/80 to-transparent backdrop-blur-[2px]" />

                    {/* Thin delicate green curved outline/arc seamlessly framing the photo from top to bottom edge */}
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
                      viewBox="0 0 300 600"
                      preserveAspectRatio="none"
                      fill="none"
                    >
                      <path
                        d="M 45 -20 C -5 170, 25 380, 195 650"
                        stroke="#1C452F"
                        strokeWidth="1.3"
                        strokeOpacity="0.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  {/* Light Holding Emblem */}
                  <div className="absolute top-8 left-2 sm:left-3 text-[#9E7D3B] z-20">
                    <Building2 className="w-8 h-8 sm:w-9 sm:h-9" />
                  </div>
                </div>

                {/* Content Layer (Left ~60%) */}
                <div className="relative z-10 max-w-[62%] sm:max-w-[60%] flex flex-col justify-between h-full">
                  <div>
                    {/* Main Heading */}
                    <h3 className="font-serif text-[22px] sm:text-[25px] lg:text-[27px] text-[#142318] font-normal leading-[1.18] mb-3">
                      {overviewData.capabilitiesTitle}
                    </h3>

                    {/* 5 Bullet Points (Compact & readable) */}
                    <div className="space-y-2 sm:space-y-2.5 mb-4">
                      {overviewData.capabilities.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#B89650] shrink-0 mt-0.5" />
                          <span className="text-[11px] sm:text-[11.5px] text-[#2C3B30] font-normal leading-snug font-sans">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom-left CTA Button */}
                  <div className="pt-2">
                    <Link
                      href={`/${locale}/mvz-hausarzt-facharzt`}
                      className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-gradient-to-r from-[#EED4A2] via-[#E4C58B] to-[#D5B878] text-[#142318] hover:brightness-105 font-semibold text-[12px] sm:text-[12.5px] shadow-sm transition-all"
                    >
                      <span>{isUz ? "Qabulga yozilish" : isRu ? "Записаться на прием" : isEn ? "Book an Appointment" : isTr ? "Randevu Alın" : isAr ? "حجز موعد" : "Termin vereinbaren"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 2: Group Advantages (Narrower ~42% width: lg:col-span-5) */}
              <div className="lg:col-span-5 bg-white rounded-[22px] sm:rounded-[24px] border border-[#EDE8DE] shadow-[0_2px_14px_rgba(0,0,0,0.03)] relative overflow-hidden flex flex-col justify-between p-5 sm:p-6 lg:p-6 h-full">
                {/* Subtle botanical branch on right edge */}
                <div className="absolute top-0 right-0 w-32 sm:w-36 lg:w-40 pointer-events-none opacity-80 z-0 select-none">
                  <Image
                    src="/images/areas/botanical-branch-clean.webp"
                    alt="Botanical detail"
                    width={160}
                    height={220}
                    className="object-contain object-top-right ml-auto"
                  />
                </div>

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    {/* Heading */}
                    <h3 className="font-serif text-[21px] sm:text-[24px] lg:text-[26px] text-[#142318] font-normal leading-[1.18] mb-3">
                      {overviewData.advantagesTitle}
                    </h3>

                    {/* 4 Advantages with elegant circular icons & compact text */}
                    <div className="space-y-2 sm:space-y-2.5">
                      {overviewData.advantages.map((item, idx) => {
                        const AdvantageIcon = [Users, Heart, Clock, ShieldCheck][idx] || ShieldCheck;
                        return (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="text-[#1E3B29] flex items-center justify-center shrink-0">
                              <AdvantageIcon className="w-6 h-6 sm:w-6.5 sm:h-6.5 stroke-[1.6]" />
                            </div>
                            <span className="text-[11.5px] sm:text-[12px] text-[#334237] font-normal leading-snug font-sans">
                              {item}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Editorial Statistics Row */}
                  <div className="grid grid-cols-3 gap-2 pt-3 sm:pt-3.5 mt-3.5 border-t border-[#EAE3D5]">
                    {overviewData.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className={`flex flex-col ${idx < 2 ? "border-r border-[#EAE3D5] pr-2" : "pl-1"}`}
                      >
                        <span className="font-serif text-[22px] sm:text-[25px] text-[#B89650] font-normal leading-none mb-1">
                          {stat.value}
                        </span>
                        <span className="text-[9.5px] sm:text-[10px] text-[#6E756D] font-sans leading-tight">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section Divider & Centered Company Entities Header */}
            <div className="my-12 sm:my-16">
              <h3 className="font-serif text-2xl sm:text-[30px] lg:text-[32px] text-[#142318] font-normal text-center leading-[1.25] max-w-3xl mx-auto">
                {isUz
                  ? "Yuqori darajadagi ambulator va statsionar tibbiyot uchun guruhning ixtisoslashtirilgan bo'linmalari"
                  : isRu
                  ? "Специализированные подразделения группы для амбулаторной и стационарной медицины высшего уровня"
                  : isEn
                  ? "Specialized group entities for outpatient and inpatient medicine of excellence"
                  : isTr
                  ? "En üst düzey ayakta ve yatarak tıp hizmetleri için grubun uzmanlaşmış kuruluşları"
                  : isAr
                  ? "مؤسسات المجموعة المتخصصة لتقديم أرقى خدمات الطب الخارجي والسريري"
                  : "Spezialisierte Gesellschaften der Gruppe für ambulante und stationäre Spitzenmedizin"}
              </h3>
            </div>

            {/* 3 Medical Entities Grid matching corporate structure (compact height, larger icons) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
              {overviewData.entities.map((entity, eIdx) => {
                const EntityIcon = [Stethoscope, ScalpelIcon, Building2][eIdx] || Building2;
                const entityHref =
                    eIdx === 0
                    ? `/${locale}/mvz-hausarzt-facharzt`
                    : eIdx === 1
                    ? "https://my-bandscheibe.de/"
                    : eIdx === 2
                    ? `/${locale}/nabiota-clinics-germany`
                    : null;
                return (
                  <div
                    key={eIdx}
                    className="bg-white rounded-[20px] sm:rounded-[22px] p-5 sm:p-5.5 border border-[#EDE8DE] hover:border-[#D5B878] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Entity descriptor */}
                      <div className="mb-3 text-[11px] sm:text-[11.5px] text-[#7A857D] font-sans">
                        {entity.sub}
                      </div>

                      {/* Icon & Title Row */}
                      <div className="flex items-center gap-3 mb-2.5">
                        <div className="text-[#183B26] group-hover:text-[#8C6D2B] flex items-center justify-center shrink-0 transition-colors">
                          <EntityIcon className="w-8 h-8 sm:w-9 sm:h-9" />
                        </div>
                        <h4 className="font-serif text-[15.5px] sm:text-[16.5px] text-[#142318] font-bold leading-snug group-hover:text-[#B89650] transition-colors">
                          {entity.title}
                        </h4>
                      </div>

                      {/* Bullet points (Compact & Readable) */}
                      <div className="space-y-1.5 mt-2">
                        {entity.items.map((item, iIdx) => (
                          <div key={iIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#B89650] shrink-0 mt-0.5" />
                            <span className="text-[11px] sm:text-[11.5px] text-[#556358] leading-relaxed font-sans">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom-right corner arrow button */}
                    <div className="pt-2.5 flex justify-end">
                      {entityHref ? (
                        <Link
                          href={entityHref}
                          aria-label={entity.title}
                          target={eIdx === 1 ? "_blank" : undefined}
                          rel={eIdx === 1 ? "noopener noreferrer" : undefined}
                          className="text-[#B89650] hover:text-[#8C6D2B] flex items-center justify-center transition-colors p-1"
                        >
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      ) : (
                        <div className="text-[#B89650] flex items-center justify-center p-1">
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 3B: MVZ HAUSÄRZTLICH / FACHÄRZTLICH - PDF IV.1 */}
        <MvzPrimaryCareSection locale={locale} />

        {/* SECTION 3C: MVZ CHIRURGIE & ANÄSTHESIOLOGIE - PDF IV.2 */}
        <MvzSurgeryCareSection locale={locale} />

        {/* SECTION 3D: NABIOTA CLINICS GERMANY - PDF IV.3 */}
        <ClinicsGermanySection locale={locale} />



        {/* ══════════════════════════════════════════════════════════
            SECTION 5 (PHOTO 2): UNSER TEAM
            - "фото 2 сделай карточки докторов больше и с небольшим описанием"
            - Light cream background with botanical watermark in top-left
            - Left: Header content
            - Right: 3 ENLARGED Doctor Profile Cards with Descriptions & Photos
        ══════════════════════════════════════════════════════════ */}
        <section className="py-14 sm:py-18 lg:py-24 bg-[#FAF8F5] relative overflow-hidden">
          {/* Top-Left Botanical Watermark Accent (Photo 2) */}
          <div className="absolute -top-4 -left-4 w-52 sm:w-72 md:w-88 h-52 sm:h-72 md:h-88 pointer-events-none opacity-85 z-0 select-none">
            <Image
              src="/images/areas/botanical-branch-clean.webp"
              alt="Botanical Foliage"
              fill
              className="object-contain object-top-left -scale-x-100"
              priority
            />
          </div>

          <Container size="wide" className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left Column: Eyebrow, Title, Description, Button */}
              <div className="lg:col-span-4 space-y-4 pt-2">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#132218] font-normal leading-[1.18] whitespace-pre-line">
                  {teamSection.title}
                </h2>

                <p className="text-xs sm:text-[13.5px] text-[#556358] leading-relaxed font-sans max-w-sm">
                  {teamSection.desc}
                </p>

                <div className="pt-2">
                  <Link
                    href={`/${locale}/mvz-hausarzt-facharzt`}
                    className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#132218] font-semibold text-xs sm:text-[13px] tracking-wide shadow-sm hover:shadow transition-all duration-200 hover:scale-[1.02]"
                  >
                    <span>{teamSection.btn}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: 3 ENLARGED Doctor Profile Cards with Descriptions (Photo 2) */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
                  {teamSection.doctors.map((doc, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-[#EDE8DE] hover:border-[#D5B878] shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_28px_rgba(213,184,120,0.16)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                    >
                      <div>
                        {/* Doctor Photo - Generous Aspect Ratio */}
                        <div className="relative aspect-[4/3.2] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#0C1C11]/5 mb-3.5">
                          <Image
                            src={doc.image}
                            alt={doc.name}
                            fill
                            className="object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                            sizes="(max-width: 768px) 100vw, 320px"
                          />
                        </div>

                        {/* Doctor Info */}
                        <div className="space-y-1 px-0.5">
                          <span className="text-[11px] font-medium text-[#6E756D] block">
                            {doc.role}
                          </span>
                          <h4 className="text-[15px] sm:text-[16.5px] font-serif font-medium text-[#142318] group-hover:text-[#B89650] transition-colors leading-snug">
                            {doc.name}
                          </h4>
                          {/* Doctor Description */}
                          <p className="text-[11.5px] sm:text-xs text-[#556358] leading-relaxed font-sans line-clamp-3 pt-1">
                            {doc.desc}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Row with Arrow Button */}
                      <div className="pt-3.5 mt-3.5 border-t border-[#EDE8DE]/70 flex items-center justify-between">
                        <span className="text-[11px] font-medium text-[#142318]/70 group-hover:text-[#142318] transition-colors">
                          {isUz ? "Shifokor profili" : isRu ? "Профиль врача" : isEn ? "View Profile" : isTr ? "Hekim Profili" : isAr ? "الملف التعريفي للطبيب" : "Arztprofil"}
                        </span>
                        <Link
                          href={idx === 1 ? "https://my-bandscheibe.de/" : `/${locale}/mvz-hausarzt-facharzt`}
                          aria-label={isRu ? `Открыть подразделение: ${doc.role}` : isEn ? `Open department: ${doc.role}` : isTr ? `Bölümü aç: ${doc.role}` : isAr ? `افتح القسم: ${doc.role}` : isUz ? `Bo‘limni ochish: ${doc.role}` : `Fachbereich öffnen: ${doc.role}`}
                          target={idx === 1 ? "_blank" : undefined}
                          rel={idx === 1 ? "noopener noreferrer" : undefined}
                          className="text-[#142318] group-hover:text-[#B89650] flex items-center justify-center transition-colors shrink-0 p-1"
                        >
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 4 (PHOTO 4): PRE-FOOTER MOUNTAIN CTA BANNER
            - Full-width panoramic container with gold borders
            - Mountains landscape background (/images/values/mountains-bg.webp)
            - Right: delicate botanical leaf watermark in gold
            - Left: GESUNDHEIT BEGINNT MIT VERTRAUEN + Sie haben Fragen...
            - Right: Kontakt aufnehmen →
        ══════════════════════════════════════════════════════════ */}
        <section className="relative w-full overflow-hidden border-y border-[#D5B878]/60 bg-[#08170D]">
          {/* Mountains Background Image */}
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/images/values/mountains-bg.webp"
              alt="Mountain Forest Landscape"
              fill
              className="object-cover object-[center_60%]"
              priority
            />
            {/* Dark green overlay matching Photo 4 */}
            <div className="absolute inset-0 bg-[#06140B]/55 backdrop-blur-[0.5px]" />
          </div>

          {/* Right Gold Botanical Leaf Silhouette Watermark (Photo 4) */}
          <div className="absolute right-0 top-0 bottom-0 w-64 sm:w-80 pointer-events-none opacity-30 overflow-hidden select-none">
            <Image
              src="/images/areas/botanical-branch-clean.webp"
              alt="Botanical Foliage"
              fill
              className="object-contain object-right"
            />
          </div>

          <Container size="wide" className="relative z-10 py-10 sm:py-12 lg:py-14">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10">
              {/* Left: Eyebrow + Title */}
              <div className="space-y-1.5 lg:max-w-md shrink-0">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] text-white font-normal leading-[1.2] whitespace-pre-line">
                  {ctaSection.title}
                </h2>
              </div>

              {/* Middle: Text */}
              <div className="max-w-md lg:max-w-lg">
                <p className="text-xs sm:text-[13.5px] text-white/85 leading-relaxed font-sans">
                  {ctaSection.desc}
                </p>
              </div>

              {/* Right: Gold Pill Button */}
              <div className="shrink-0">
                <Link
                  href={`/${locale}/nabiota-clinics-germany`}
                  className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#07150C] font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all duration-200 hover:scale-[1.03]"
                >
                  <span>{ctaSection.btn}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer currentLocale={locale} />
    </div>
  );
}
