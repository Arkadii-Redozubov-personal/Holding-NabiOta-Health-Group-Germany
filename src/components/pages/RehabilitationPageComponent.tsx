"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Activity,
  FileText,
  Phone,
  ShieldCheck,
  Stethoscope,
  Check,
  MapPin,
  ChevronDown,
  ChevronRight,
  X,
  Info,
} from "@/lib/icons";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { SupportedLocale } from "@/lib/i18n";
import { RehabilitationCompanySection } from "@/components/sections/RehabilitationCompanySection";
import { getRehabilitationPageTranslations } from "@/data/translations/rehabilitation-page";

export interface SpecializationModalData {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  desc: string;
  fullDesc: string;
  indicationsTitle: string;
  indications: string[];
  standards: string;
  image: string;
  features: string[];
}

// ── Custom SVG Icons for Rehabilitation Modalities ──
function WalkingExoskeletonIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="4" r="2" />
      <path d="M9 20l3-6 3 6" />
      <path d="M6 12l6-4 6 4" />
      <path d="M12 8v6" />
      <circle cx="6" cy="12" r="1.5" />
      <circle cx="18" cy="12" r="1.5" />
    </svg>
  );
}

function SpineMobilityIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2v20" />
      <path d="M8 5c2-1 6-1 8 0" />
      <path d="M7 9c3-1.2 7-1.2 10 0" />
      <path d="M6 13c4-1.5 8-1.5 12 0" />
      <path d="M7 17c3-1.2 7-1.2 10 0" />
      <path d="M8 21c2-1 6-1 8 0" />
    </svg>
  );
}

function GoldCircleCheckIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8.5" stroke="#B89650" strokeWidth="1.2" />
      <path d="M6.5 10.2L8.8 12.5L13.5 7.8" stroke="#B89650" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── 6 Bespoke Heraldic Icons for Clinical Programs (Matching Reference Design) ──
function OrthoHeraldicIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2L4 6v6c0 5.5 3.5 10 8 11 4.5-1 8-5.5 8-11V6l-8-4z" />
      <path d="M12 7v10" />
      <path d="M9 10h6" />
      <path d="M9 14h6" />
      <circle cx="12" cy="7" r="1.5" fill="currentColor" />
      <circle cx="12" cy="17" r="1.5" fill="currentColor" />
    </svg>
  );
}

function NeuroLotusIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      <path d="M12 3c-2 3-2 6 0 6.5 2-0.5 2-3.5 0-6.5z" />
      <path d="M12 21c-2-3-2-6 0-6.5 2 0.5 2 3.5 0 6.5z" />
      <path d="M3 12c3-2 6-2 6.5 0-.5 2-3.5 2-6.5 0z" />
      <path d="M21 12c-3-2-6-2-6.5 0 .5 2 3.5 2 6.5 0z" />
      <circle cx="6" cy="6" r="1" fill="currentColor" />
      <circle cx="18" cy="6" r="1" fill="currentColor" />
      <circle cx="6" cy="18" r="1" fill="currentColor" />
      <circle cx="18" cy="18" r="1" fill="currentColor" />
    </svg>
  );
}

function SportKineticIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="4" r="2" />
      <path d="M6 9l4 2 2-3 3 2 3-1" />
      <path d="M10 13l-3 7" />
      <path d="M12 11v4l4 5" />
      <path d="M4 17l4-2" />
      <path d="M16 15l4 2" />
    </svg>
  );
}

function CardioEmblemIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 21s-7-4.5-9-9a5.5 5.5 0 0 1 9-3 5.5 5.5 0 0 1 9 3c-2 4.5-9 9-9 9z" />
      <path d="M7 12h2.5l1.5-3 2 6 1.5-3H17" strokeWidth="1.6" />
    </svg>
  );
}

function HydroVesselIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M8 3h8M9 3v2c0 2-2 3-2 5 0 4 2.5 7 5 7s5-3 5-7c0-2-2-3-2-5V3" />
      <path d="M6 10c-1.5 0-2 1-2 2s1 2 3 2" />
      <path d="M18 10c1.5 0 2 1 2 2s-1 2-3 2" />
      <path d="M9 21h6M12 17v4" />
      <path d="M10 12c1 .5 3 .5 4 0" />
    </svg>
  );
}

function ErgoBalanceIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="7" r="2.5" />
      <path d="M6 21v-3c0-2 2-3 4-3h4c2 0 4 1 4 3v3" />
      <path d="M3 13c1-3 3-5 5-6" />
      <path d="M21 13c-1-3-3-5-5-6" />
      <circle cx="4" cy="9" r="1" fill="currentColor" />
      <circle cx="20" cy="9" r="1" fill="currentColor" />
      <path d="M9 18h6" />
    </svg>
  );
}

const specIconsMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ortho: OrthoHeraldicIcon,
  neuro: NeuroLotusIcon,
  sport: SportKineticIcon,
  cardio: CardioEmblemIcon,
  hydro: HydroVesselIcon,
  ergo: ErgoBalanceIcon,
};

interface Props {
  locale?: SupportedLocale;
}

export function RehabilitationPageComponent({ locale = "de" }: Props) {
  const isUz = locale === "uz";
  const isRu = locale === "ru";
  const isEn = locale === "en";
  const isTr = locale === "tr";
  const isAr = locale === "ar";

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedSpecialization, setSelectedSpecialization] = useState<SpecializationModalData | null>(null);
  const [activeSpecId, setActiveSpecId] = useState<string>("ortho");

  // Keyboard escape listener and body scroll lock for modal
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSelectedSpecialization(null);
      }
    }
    if (selectedSpecialization) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedSpecialization]);

  const {
    heroData,
    heroBadges,
    specializations,
    processData,
    facilitiesCard,
    innovationCard,
    faqs,
  } = getRehabilitationPageTranslations(locale);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5]">
      <Header currentLocale={locale} />

      <main className="flex-1">

      {/* ══════════════════════════════════════════════════════════
          HERO SECTION (UNIFIED PHOTO 4 FORMAT WITH BOTANICAL GOLD)
      ══════════════════════════════════════════════════════════ */}
      <PageHero
          locale={locale}
        eyebrow={heroData.eyebrow}
        title={heroData.title}
        description={heroData.desc}
        badges={heroBadges}
        imageSrc="/images/areas/rehabilitation.webp"
        imageAlt="NabiOta Health Group Rehabilitation"
      >
        <Link
          href={`/${locale}/nabiota-rehabilitation`}
          className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-gradient-to-r from-[#EED4A2] via-[#E4C58B] to-[#D5B878] text-[#142318] hover:brightness-105 font-semibold text-[12px] sm:text-[12.5px] shadow-sm transition-all"
        >
          <span>{isUz ? "Reabilitatsiya sayti" : isRu ? "Сайт реабилитации" : isEn ? "Rehabilitation website" : isTr ? "Rehabilitasyon sitesi" : isAr ? "موقع إعادة التأهيل" : "Rehabilitations-Website"}</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </PageHero>

      {/* ══════════════════════════════════════════════════════════
          SECTION 1: REHABILITATION FACILITIES & INNOVATION
      ══════════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-18 bg-[#FAF8F5]">
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Left Card: Pool Photo with Button */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#EDE8DE] min-h-[380px] sm:min-h-[420px] flex flex-col justify-end p-7 sm:p-9 group">
              <Image
                src="/images/rehabilitation/facility-pool.webp"
                alt="Moderne Einrichtungen"
                fill
                className="object-cover object-center group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

              {/* Bottom Info */}
              <div className="relative z-10 space-y-3">
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-snug">
                  {facilitiesCard.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-white/85 leading-relaxed max-w-md">
                  {facilitiesCard.desc}
                </p>
                <div className="pt-2">
                  <Link
                    href={`/${locale}/nabiota-rehabilitation`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#132218] font-semibold text-xs tracking-wide shadow-md transition-all duration-200 hover:scale-[1.02]"
                  >
                    <span>{facilitiesCard.btn}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Card: Innovation & Checklist */}
            <div className="relative rounded-3xl bg-[#EEF4EE] border border-[#DEE7DE] shadow-xs p-7 sm:p-9 lg:p-10 flex flex-col justify-between overflow-hidden min-h-[380px] sm:min-h-[420px]">
              {/* Botanical foliage watermark on right edge */}
              <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-64 sm:w-80 h-72 sm:h-96 pointer-events-none opacity-40 select-none">
                <Image
                  src="/images/areas/botanical-branch-clean.webp"
                  alt=""
                  fill
                  className="object-contain object-right"
                />
              </div>

              <div className="relative z-10 space-y-3 max-w-xl">
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-[34px] text-[#0B2516] font-normal leading-snug">
                  {innovationCard.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#4B5E50] leading-relaxed pt-1">
                  {innovationCard.desc}
                </p>
              </div>

              {/* Checklist with gold circular checkmarks */}
              <div className="relative z-10 space-y-3 pt-6">
                {innovationCard.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className="text-[#8C6D2B] shrink-0 flex items-center justify-center">
                      <Check className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <span className="font-sans text-xs sm:text-[13px] text-[#1A2E20] font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 5B: NABIOTA REHABILITATION & THERAPY GMBH - PDF IV.5
          - Corporate purpose, 4 pillars, goals & payer framework
      ══════════════════════════════════════════════════════════ */}
      <RehabilitationCompanySection locale={locale}>
        {/* ══════════════════════════════════════════════════════════
            SECTION 3: SPECIALIZED REHABILITATION SPECIALIZATIONS
            - Matching Reference Photo Layout 1:1
            - Featured Left Card + Right Interactive Specialty Tabs
        ══════════════════════════════════════════════════════════ */}
        <section className="relative pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24 bg-[#FAF8F5] overflow-hidden">
          {/* Botanical leaf watermark in bottom-right matching reference photo */}
          <div className="absolute -bottom-8 -right-8 w-64 h-64 sm:w-80 sm:h-80 pointer-events-none opacity-20 select-none sepia">
            <Image
              src="/images/areas/botanical-branch-clean.webp"
              alt=""
              fill
              className="object-contain rotate-12"
              unoptimized
            />
          </div>

          <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header: Left big title, right lead subtitle */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
              <div className="max-w-2xl">
                <h2 className="font-serif text-[28px] sm:text-[36px] lg:text-[42px] text-[#132218] font-normal leading-[1.16]">
                  {isUz
                    ? "Har bir klinik maqsad uchun individual dasturlar"
                    : isRu
                    ? "Индивидуальные программы для каждой клинической цели"
                    : isEn
                    ? "Targeted Rehabilitation for Every Clinical Indication"
                    : isTr
                    ? "Kalıcı İyileşme İçin Bireysel Terapi Konseptleri"
                    : isAr
                    ? "مفاهيم علاجية مخصصة لتحقيق تعافٍ مستدام"
                    : "Individuelle Therapiekonzepte für nachhaltige Genesung"}
                </h2>
              </div>
              <div className="max-w-sm lg:max-w-md pb-1">
                <p className="font-sans text-[12px] sm:text-[13px] text-[#556358] leading-relaxed">
                  {isUz
                    ? "Endoprotezlashdan keyin yurish qobiliyatini tiklashdan erta nevrologik reabilitatsiyagacha - biz tibbiy bilim va zamonaviy harakat terapiyasini birlashtiramiz."
                    : isRu
                    ? "От ортопедического восстановления после эндопротезирования до тонкой нейрореабилитации и возвращения в спорт - мы объединяем врачебную экспертизу и современные методики."
                    : isEn
                    ? "From orthopedic post-operative recovery to neurological re-education and competitive athletic return-to-play - our certified specialists guide every milestone."
                    : isTr
                    ? "Eklem protezi sonrası yürüme kabiliyetinin yeniden kazanılmasından erken nörolojik rehabilitasyona kadar tıbbi uzmanlığı modern hareket terapisiyle birleştiriyoruz."
                    : isAr
                    ? "من استعادة القدرة على المشي بعد استبدال المفاصل وحتى التأهيل العصبي المبكر، ندمج الخبرة الطبية المرموقة مع أحدث تقنيات العلاج الحركي."
                    : "Von der Wiedererlangung der Gehfähigkeit nach Gelenkersatz bis hin zur neurologischen Frühreha bündeln wir medizinisches Fachwissen mit modernster Bewegungstherapie."}
                </p>
              </div>
            </div>

            {/* 2-Column Layout Matching Photo 1:1 */}
            {(() => {
              const activeSpec = specializations.find((s) => s.id === activeSpecId) || specializations[0];

              return (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-7 items-stretch">
                  {/* Left Column: Featured Card (smaller, compact size) */}
                  <div className="lg:col-span-7 xl:col-span-7 flex flex-col">
                    <div className="bg-white rounded-[22px] sm:rounded-[26px] border border-[#EAE4D7] shadow-[0_4px_24px_rgba(19,34,24,0.04)] overflow-hidden flex-1 flex flex-col justify-between transition-all duration-300">
                      {/* Photo - compact height */}
                      <div className="relative h-[190px] sm:h-[210px] lg:h-[225px] w-full overflow-hidden bg-neutral-100">
                        <Image
                          src={activeSpec.image}
                          alt={activeSpec.title}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-102"
                          priority
                        />
                      </div>

                      {/* Content Area */}
                      <div className="p-4 sm:p-5 lg:p-5.5 flex-1 flex flex-col justify-between">
                        <div>
                          {/* Title */}
                          <h3 className="font-serif text-[19px] sm:text-[21px] lg:text-[22px] text-[#132218] font-normal leading-snug">
                            {activeSpec.title}
                          </h3>

                          {/* Description */}
                          <p className="font-sans text-[12px] sm:text-[12.5px] text-[#556358] leading-relaxed mt-1.5 mb-3">
                            {activeSpec.desc}
                          </p>

                          {/* Features Checklist with gold checkmarks matching Photo 3 */}
                          <div className="space-y-1.5 sm:space-y-2 pt-3 border-t border-[#F0ECE1]">
                            {activeSpec.features.map((feat, fIdx) => (
                              <div key={fIdx} className="flex items-center gap-2">
                                <GoldCircleCheckIcon className="w-3.5 h-3.5 shrink-0 text-[#B89650]" />
                                <span className="font-sans text-[12px] sm:text-[12.5px] text-[#2C382F] font-normal">
                                  {feat}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Bottom link: "Подробнее о программе" with arrow */}
                        <div className="pt-3 mt-1 border-t border-[#F0ECE1]/60">
                          <button
                            type="button"
                            onClick={() => setSelectedSpecialization(activeSpec)}
                            className="inline-flex items-center gap-2 text-[12.5px] sm:text-[13px] font-medium text-[#8C6D2B] hover:text-[#6D521B] transition-colors group/link cursor-pointer"
                          >
                            <span>
                              {isUz
                                ? "Dastur haqida batafsil"
                                : isRu
                                ? "Подробнее о программе"
                                : isEn
                                ? "Learn more about the program"
                                : isTr
                                ? "Program hakkında detaylı bilgi"
                                : isAr
                                ? "المزيد عن البرنامج"
                                : "Mehr über das Programm"}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: 6 Specialty Tabs Stack (taller cards, same gaps between them) */}
                  <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between gap-2 sm:gap-2.5">
                    {specializations.map((spec) => {
                      const isActive = spec.id === activeSpecId;

                      return (
                        <button
                          key={spec.id}
                          type="button"
                          onClick={() => setActiveSpecId(spec.id)}
                          className={`group w-full text-left rounded-xl sm:rounded-2xl p-2 sm:p-2.5 pr-3.5 sm:pr-4 min-h-[68px] sm:min-h-[74px] flex items-center gap-3 sm:gap-3.5 transition-all duration-200 cursor-pointer bg-white ${
                            isActive
                              ? "border-2 border-[#132B1E] shadow-sm"
                              : "border-2 border-[#EAE4D7] hover:border-[#D5B878]/80 shadow-[0_1px_6px_rgba(0,0,0,0.02)]"
                          }`}
                        >
                          {/* Left: Thumbnail Image */}
                          <div className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl overflow-hidden shrink-0 bg-neutral-100 border border-[#EAE4D7]">
                            <Image
                              src={spec.image}
                              alt={spec.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              sizes="56px"
                            />
                          </div>

                          {/* Middle: Title */}
                          <div className="flex-1 min-w-0 pr-1">
                            <h4
                              className={`text-[13px] sm:text-[13.5px] leading-snug line-clamp-2 transition-colors ${
                                isActive
                                  ? "font-semibold text-[#132B1E]"
                                  : "font-medium text-[#142318] group-hover:text-[#8C6D2B]"
                              }`}
                            >
                              {spec.title}
                            </h4>
                          </div>

                          {/* Right: Chevron */}
                          <ChevronRight
                            className={`w-4 h-4 shrink-0 transition-transform ${
                              isActive
                                ? "text-[#132B1E] translate-x-0.5"
                                : "text-[#9EAAA0] group-hover:text-[#132B1E] group-hover:translate-x-0.5"
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })()}
          </div>
        </section>
      </RehabilitationCompanySection>

      {/* ══════════════════════════════════════════════════════════
          SECTION 4: REHABILITATION PROCESS (YOUR PATHWAY BACK TO GREATER QUALITY OF LIFE)
          - Continues the rehabilitation pathway with a step-by-step process
          - Background: /images/about/photo2.webp
      ══════════════════════════════════════════════════════════ */}
      <section className="w-full relative py-16 sm:py-22 overflow-hidden bg-[#FAF6EE] border-t border-[#EDE8DE]">
        {/* Full-bleed background: photo2.webp */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src="/images/about/photo2.webp"
            alt="Process Background"
            fill
            className="object-cover object-center opacity-95"
            priority
          />
        </div>

        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left title */}
            <div className="lg:col-span-4 space-y-3">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#0B2516] font-normal leading-[1.18]">
                {processData.title}
              </h2>
            </div>

            {/* Right 4-step cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 pt-4 sm:pt-0 relative">
              {processData.steps.map((st, idx) => (
                <div
                  key={idx}
                  className="bg-white/95 backdrop-blur-xs rounded-2xl p-5 sm:p-6 border border-[#E5ECE3] shadow-md relative flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div>
                    <div className="text-[#0B2516] mb-3 flex items-center">
                      {st.icon}
                    </div>

                    <h4 className="font-serif text-base text-[#0B2516] font-medium leading-snug mb-2">
                      {st.title}
                    </h4>

                    <p className="font-sans text-[11.5px] text-[#526356] leading-relaxed">
                      {st.desc}
                    </p>
                  </div>

                  {/* Connecting subtle arrow on desktop */}
                  {idx < 3 && (
                    <span className="hidden lg:block absolute -right-3 top-8 text-[#C5A56A] text-sm z-20 pointer-events-none">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 7: INSURANCE & REFERRAL ACCORDION
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-white border-y border-[#EDE8DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#132218] font-normal">
              {isUz
                ? "Reabilitatsiya va yo'llanma bo'yicha muhim savollar"
                : isRu
                ? "Часто задаваемые вопросы о реабилитации"
                : isEn
                ? "Insurance & Referral Questions"
                : isTr
                ? "Rehabilitasyon ve Sevk Hakkında Önemli Sorular"
                : isAr
                ? "أسئلة شائعة حول وصفات وبرامج التأهيل"
                : "Wichtige Fragen zur Reha-Verordnung"}
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-[#EDE8DE] rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-white hover:bg-[#FAF8F5] transition-colors"
                >
                  <span className="font-serif text-sm sm:text-base text-[#142318] font-normal pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#B89650] shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="p-4 sm:p-5 pt-0 bg-white border-t border-[#F0ECE1]">
                    <p className="font-sans text-xs sm:text-[13px] text-[#556358] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ══════════════════════════════════════════════════════════
          SECTION 9: CONTACT & BOOKING BANNER (FULL-WIDTH WITH BACGROUND.WEBP)
      ══════════════════════════════════════════════════════════ */}
      <section className="w-full relative overflow-hidden bg-[#07150C] text-white py-16 sm:py-24 border-t border-[#D5B878]/30">
        {/* Full bleed leaf background: /images/bacground.webp */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src="/images/bacground.webp"
            alt="Botanical Leaf Background"
            fill
            className="object-cover object-center opacity-40 mix-blend-screen"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07150C]/95 via-[#07150C]/85 to-[#07150C]/75" />
        </div>

        {/* Botanical leaf watermark */}
        <div className="absolute -right-6 -bottom-6 w-64 sm:w-80 h-64 sm:h-80 pointer-events-none opacity-25 select-none z-0">
          <Image
            src="/images/areas/botanical-branch-clean.webp"
            alt=""
            fill
            className="object-contain object-bottom-right"
          />
        </div>

        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <h3 className="page-hero-title font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-tight">
                {isUz
                  ? "Harakatlanishingizni tiklash sari keyingi qadamga tayyormisiz?"
                  : isRu
                  ? "Готовы вернуться к активной и полноценной жизни?"
                  : isEn
                  ? "Ready to Regain Your Mobility and Independence?"
                  : isTr
                  ? "Hareketliliğinize ve Sağlığınıza Yeniden Kavuşmaya Hazır mısınız?"
                  : isAr
                  ? "هل أنتم مستعدون للخطوة التالية نحو استعادة حركتكم ونشاطكم؟"
                  : "Bereit für den nächsten Schritt zurück in Ihre Mobilität?"}
              </h3>
              <p className="hero-text-wrap text-white/75 text-xs sm:text-sm font-sans max-w-2xl leading-relaxed">
                {isUz
                  ? "Birlamchi ko'rik uchun hoziroq qabulga yoziling yoki yo'llanma va xarajatlarni qoplash shartlari bo'yicha bepul maslahat oling."
                  : isRu
                  ? "Свяжитесь с нами для первичной консультации или быстрой записи на амбулаторную реабилитацию в NabiOta Health Group Germany."
                  : isEn
                  ? "Contact our admissions team directly to discuss your referral, insurance authorization, and therapy scheduling."
                  : isTr
                  ? "İlk muayeneniz için hemen randevu alın veya sevk süreci ve sigorta karşılama koşulları hakkında ücretsiz danışmanlık talep edin."
                  : isAr
                  ? "احجزوا موعدكم الآن للفحص الأولي أو استشيرونا دون التزام بشأن الوصفات الطبية وتحمل التكاليف التأمينية."
                  : "Vereinbaren Sie jetzt einen Termin für Ihre Eingangsuntersuchung oder lassen Sie sich unverbindlich zu Verordnung und Kostenübernahme beraten."}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3 text-xs text-[#ECCF96]">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#D5B878]" />
                  <span>+49 (0) 2161 / 9988-77</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D5B878]" />
                  <span>Mönchengladbach & Partner-Kliniken NRW</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                href={`/${locale}/nabiota-rehabilitation`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#07150C] font-semibold text-xs sm:text-sm tracking-wide shadow-lg transition-all duration-200 hover:scale-[1.02] text-center"
              >
                <span>{isUz ? "Onlayn qabulga yozilish" : isRu ? "Записаться на прием" : isEn ? "Request appointment" : isTr ? "Online Randevu Alın" : isAr ? "طلب موعد عبر الإنترنت" : "Termin online anfragen"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href={`/${locale}/nabiota-rehabilitation`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/30 hover:border-[#D5B878] text-white hover:text-[#ECCF96] font-medium text-xs sm:text-sm transition-all bg-white/5 text-center"
              >
                <span>{isUz ? "Xolding yo'nalishlari sharhi" : isRu ? "Все направления холдинга" : isEn ? "All corporate divisions" : isTr ? "Tüm Şirket Alanları" : isAr ? "نظرة عامة على قطاعات المجموعة" : "Unternehmensbereiche Übersicht"}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MODAL DIALOG: SPECIALIZED REHABILITATION PROGRAM (PDF SECTION 5)
      ══════════════════════════════════════════════════════════ */}
      {selectedSpecialization && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-[#08170D]/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedSpecialization(null)}
        >
          <div
            className="relative w-full max-w-4xl xl:max-w-5xl bg-white rounded-2xl sm:rounded-3xl border border-[#D5B878]/40 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="rehab-modal-title"
          >
            {/* Modal Top Header Image & Badges */}
            <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden shrink-0 bg-[#08170D]">
              <Image
                src={selectedSpecialization.image}
                alt={selectedSpecialization.title}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08170D] via-[#08170D]/40 to-black/30" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedSpecialization(null)}
                aria-label={isUz ? "Yopish" : isRu ? "Закрыть" : isEn ? "Close" : isTr ? "Kapat" : isAr ? "إغلاق" : "Schließen"}
                className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-[#08170D]/80 hover:bg-[#D5B878] text-white hover:text-[#08170D] border border-white/20 hover:border-[#D5B878] flex items-center justify-center transition-all duration-200 shadow-md z-10 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Badge & Title */}
              <div className="absolute bottom-3 left-4 sm:left-6 right-4 sm:right-6">

                <h2 id="rehab-modal-title" className="font-serif text-xl sm:text-2xl text-white font-normal leading-tight drop-shadow-sm">
                  {selectedSpecialization.title}
                </h2>
              </div>
            </div>

            {/* Modal Scrollable Content Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4 sm:space-y-5 text-left font-sans">
              {/* Subtitle / Focus Callout */}
              <div className="bg-[#FAF8F5] border border-[#EDE6D8] px-4 py-3 rounded-xl shadow-xs">
                <p className="text-[12px] sm:text-[13px] font-medium text-[#142318] leading-snug">
                  {selectedSpecialization.subtitle}
                </p>
              </div>

              {/* Full Description from PDF Section 5 */}
              <div className="space-y-2">

                <p className="text-xs sm:text-[13px] text-[#425246] leading-relaxed">
                  {selectedSpecialization.fullDesc}
                </p>
              </div>

              {/* Key Indications Checklist */}
              <div className="space-y-2.5 pt-1">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedSpecialization.indications.map((ind, i) => (
                    <div key={i} className="flex items-start gap-2 bg-[#FAF8F5] p-2.5 rounded-xl border border-[#EDE8DE]">
                      <GoldCircleCheckIcon className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span className="text-[11.5px] sm:text-xs text-[#1F2E24] leading-snug font-normal">
                        {ind}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Regulatory & Safety Standards Bar (PDF Section 5 Requirements) */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#08170D]/5 border border-[#D5B878]/30 text-[#142318]">
                <ShieldCheck className="w-5 h-5 text-[#B89650] shrink-0" />
                <p className="text-[11px] sm:text-[11.5px] leading-tight text-[#3A4A3E]">
                  <strong className="font-semibold text-[#142318]">{isUz ? "Xarajatlarni qoplash: " : isRu ? "Покрытие расходов: " : isEn ? "Insurance & Coverage: " : isTr ? "Maliyet Karşılama ve Esaslar: " : isAr ? "الجهات الضامنة والمعايير: " : "Kostenträger & Richtlinien: "}</strong>
                  {selectedSpecialization.standards}
                </p>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 sm:p-5 bg-[#FAF8F5] border-t border-[#EDE8DE] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setSelectedSpecialization(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-[#D0C8B8] hover:bg-white text-[#556358] text-xs font-medium transition-colors cursor-pointer"
              >
                {isUz ? "Oynani yopish" : isRu ? "Закрыть окно" : isEn ? "Close window" : isTr ? "Pencereyi Kapat" : isAr ? "إغلاق النافذة" : "Fenster schließen"}
              </button>

              <Link
                href={`/${locale}/nabiota-rehabilitation`}
                onClick={() => setSelectedSpecialization(null)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#08170D] hover:bg-[#0C2B1B] text-[#ECCF96] border border-[#D5B878] text-xs font-semibold tracking-wide transition-all shadow-sm"
              >
                <span>{isUz ? "Kursga yozilish" : isRu ? "Записаться на курс" : isEn ? "Request Therapy Consultation" : isTr ? "Terapi / Danışmanlık Talebi" : isAr ? "طلب استشارة / علاج" : "Therapie / Beratung anfragen"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
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
