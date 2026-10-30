"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Clock,
  CheckCircle2,
  ChevronRight,
  Heart,
  Activity,
  FileText,
  User,
  Phone,
  Sparkles,
  ShieldCheck,
  Stethoscope,
  Microscope,
  X,
  Info,
} from "@/lib/icons";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { SupportedLocale } from "@/lib/i18n";
import { businessAreas } from "@/data/areas";
import { DiagnosticsCompanySection } from "@/components/sections/DiagnosticsCompanySection";
import { getDiagnostikPageTranslations } from "@/data/translations/diagnostik-page";

// ── Custom SVG Modality Icons ──
function MriScannerIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <path d="M4 14h6M14 14h6" />
      <path d="M9 16h6" />
    </svg>
  );
}

function CtScannerIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M9.5 9.5l5 5" />
    </svg>
  );
}

function UltrasoundWaveIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      <path d="M7 12c0-2.8 2.2-5 5-5s5 2.2 5 5" />
      <path d="M10 12c0-1.1.9-2 2-2s2 .9 2 2" />
      <circle cx="12" cy="12" r="1" />
      <path d="M12 13v7M9 20h6" />
    </svg>
  );
}

function XrayPulseIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M12 7v10M9 9h6M8 12h8M10 15h4" />
    </svg>
  );
}

function TestTubesIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 3h6M10 3v12a2 2 0 0 0 4 0V3M14 9h-4" />
      <path d="M5 6h4M7 6v9a2 2 0 0 0 4 0V6" />
      <path d="M15 6h4M17 6v9a2 2 0 0 0 4 0V6" />
    </svg>
  );
}

function HeartCardioIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M7 12h2l1.5-3 2 6 1.5-3H17" />
    </svg>
  );
}

function NeuroPulseIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 12h4l2-5 3 10 2-7 2 4h4l2-2" />
      <circle cx="21" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

function ScannerArchIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20V11a8 8 0 0 1 16 0v9" />
      <path d="M8 20v-9a4 4 0 0 1 8 0v9" />
      <circle cx="12" cy="14" r="1.5" fill="currentColor" />
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

export interface ProcedureModalData {
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
  icon: React.ComponentType<{ className?: string }>;
}

interface Props {
  locale?: SupportedLocale;
}

export function DiagnostikPageComponent({ locale = "de" }: Props) {
  const isUz = locale === "uz";
  const isRu = locale === "ru";
  const isEn = locale === "en";
  const isTr = locale === "tr";
  const isAr = locale === "ar";

  const [selectedProcedure, setSelectedProcedure] = useState<ProcedureModalData | null>(null);
  const [activeProcId, setActiveProcId] = useState<string>("mrt");

  // Keyboard escape listener and body scroll lock for modal
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSelectedProcedure(null);
      }
    }
    if (selectedProcedure) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProcedure]);

  const area = businessAreas.find((a) => a.slug === "diagnostik") || {
    id: "diagnostik",
    slug: "diagnostik",
    title: "Diagnostik",
    subtitle: "Präzisionstechnologie für fundierte Befunde",
    description:
      "Hochmoderne bildgebende Diagnostik mit CT, MRT und digitalem Röntgen für frühzeitige und exakte therapeutische Entscheidungen.",
    image: "/images/areas/diagnostics.webp",
  };

  // ── Hero Content ──
  const {
    heroData,
    procedures,
    processSteps,
    indicationsCol1,
    indicationsCol2,
  } = getDiagnostikPageTranslations(locale);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5]">
      <Header currentLocale={locale} />

      {/* ── Page Hero ── */}
      <PageHero
          locale={locale}
        title={heroData.title}
        description={heroData.description}
        imageSrc={area.image || "/images/areas/diagnostics.webp"}
        imageAlt="NabiOta Diagnostics High-End Medical Imaging"
        badges={heroData.badges}
      >
        <Link
          href={`/${locale}/nabiota-diagnostics`}
          className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-gradient-to-r from-[#EED4A2] via-[#E4C58B] to-[#D5B878] text-[#142318] hover:brightness-105 font-semibold text-[12px] sm:text-[12.5px] shadow-sm transition-all"
        >
          <span>{isUz ? "Diagnostika sayti" : isRu ? "Сайт диагностики" : isEn ? "Diagnostics website" : isTr ? "Tanı sitesi" : isAr ? "موقع التشخيص" : "Diagnostik-Website"}</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </PageHero>

      <main className="flex-1 bg-[#FAF8F5]">

        {/* ══════════════════════════════════════════════════════════
            SECTION 1: MODERNE VERFAHREN FÜR GENAUE ERGEBNISSE
            - Header: Left title, right lead text
            - 2-Column interactive layout matching Rehabilitation:
              - Left: Featured Card (compact photo, title, subtitle/desc, gold checkmarks, "Mehr über das Verfahren →")
              - Right: Vertical stack of 6 modality tabs (thumbnail, title, chevron, active dark green border)
        ══════════════════════════════════════════════════════════ */}
        <section className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-12 sm:pb-16">
          {/* Header: Left big title, right lead subtitle */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div className="max-w-2xl">
              <h2 className="font-serif text-[28px] sm:text-[36px] lg:text-[42px] text-[#132218] font-normal leading-[1.16]">
                {isUz
                  ? "Aniq natijalar uchun zamonaviy usullar"
                  : isRu
                  ? "Современные методы для точных результатов"
                  : isEn
                  ? "Advanced Methods for Accurate Results"
                  : isTr
                  ? "Kesin Sonuçlar İçin Modern Yöntemler"
                  : isAr
                  ? "تقنيات متقدمة لنتائج تشخيصية دقيقة"
                  : "Moderne Verfahren für genaue Ergebnisse"}
              </h2>
            </div>
            <div className="max-w-sm lg:max-w-md pb-1">
              <p className="font-sans text-[12px] sm:text-[13px] text-[#556358] leading-relaxed">
                {isUz
                  ? "Bizning diagnostika bo'limimiz ilg'or tibbiy texnologiyalarni ko'p yillik klinik tajriba bilan birlashtiradi. Bu kasalliklarni erta bosqichda aniqlash va eng maqbul davolashni belgilash imkonini beradi."
                  : isRu
                  ? "Наша диагностика объединяет передовую медицинскую технику с многолетним клиническим опытом. Это позволяет распознавать заболевания на ранних стадиях и назначать оптимальную терапию."
                  : isEn
                  ? "Our diagnostic division unites cutting-edge medical technology with decades of clinical experience. We detect conditions early, evaluate them accurately, and establish the best possible treatment."
                  : isTr
                  ? "Tanı birimimiz en son tıbbi teknolojiyi uzun yıllara dayanan klinik tecrübeyle birleştirir. Böylece hastalıkları erken aşamada teşhis edip sizin için en iyi tedaviyi başlatabiliyoruz."
                  : isAr
                  ? "يجمع قسم التشخيص الطبي لدينا بين أحدث التقنيات الطبية والخبرة السريرية العريقة. هذا يتيح لنا الكشف عن الأمراض مبكراً وبدء أفضل مسار علاجي متاح."
                  : "Unsere Diagnostik vereint modernste Medizintechnik mit langjähriger Erfahrung. So können wir Erkrankungen frühzeitig erkennen, präzise beurteilen und die bestmögliche Therapie für Sie einleiten."}
              </p>
            </div>
          </div>

          {/* 2-Column Layout */}
          {(() => {
            const activeProc = procedures.find((p) => p.id === activeProcId) || procedures[0];

            return (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-7 items-stretch">
                {/* Left Column: Featured Card (compact size) */}
                <div className="lg:col-span-7 xl:col-span-7 flex flex-col">
                  <div className="bg-white rounded-[22px] sm:rounded-[26px] border border-[#EAE4D7] shadow-[0_4px_24px_rgba(19,34,24,0.04)] overflow-hidden flex-1 flex flex-col justify-between transition-all duration-300">
                    {/* Photo - compact height */}
                    <div
                      className="relative h-[190px] sm:h-[210px] lg:h-[225px] w-full overflow-hidden bg-neutral-100 cursor-pointer"
                      onClick={() => setSelectedProcedure(activeProc)}
                    >
                      <Image
                        src={activeProc.image}
                        alt={activeProc.title}
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
                          {activeProc.title}
                        </h3>

                        {/* Description */}
                        <p className="font-sans text-[12px] sm:text-[12.5px] text-[#556358] leading-relaxed mt-1.5 mb-3">
                          {activeProc.subtitle || activeProc.desc}
                        </p>

                        {/* Features Checklist with gold checkmarks */}
                        <div className="space-y-1.5 sm:space-y-2 pt-3 border-t border-[#F0ECE1]">
                          {activeProc.indications.slice(0, 3).map((ind, iIdx) => (
                            <div key={iIdx} className="flex items-center gap-2">
                              <GoldCircleCheckIcon className="w-3.5 h-3.5 shrink-0 text-[#B89650]" />
                              <span className="font-sans text-[12px] sm:text-[12.5px] text-[#2C382F] font-normal">
                                {ind}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom link: "Подробнее о процедуре" with arrow */}
                      <div className="pt-3 mt-1 border-t border-[#F0ECE1]/60">
                        <button
                          type="button"
                          onClick={() => setSelectedProcedure(activeProc)}
                          className="inline-flex items-center gap-2 text-[12.5px] sm:text-[13px] font-medium text-[#8C6D2B] hover:text-[#6D521B] transition-colors group/link cursor-pointer"
                        >
                          <span>
                            {isUz
                              ? "Muolaja haqida batafsil"
                              : isRu
                              ? "Подробнее о процедуре"
                              : isEn
                              ? "Learn more about the procedure"
                              : isTr
                              ? "Yöntem hakkında detaylı bilgi"
                              : isAr
                              ? "المزيد عن الإجراء التشخيصي"
                              : "Mehr über das Verfahren"}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: 6 Modality Tabs Stack */}
                <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between gap-2 sm:gap-2.5">
                  {procedures.map((proc) => {
                    const isActive = proc.id === activeProcId;

                    return (
                      <button
                        key={proc.id}
                        type="button"
                        onClick={() => setActiveProcId(proc.id)}
                        className={`group w-full text-left rounded-xl sm:rounded-2xl p-2 sm:p-2.5 pr-3.5 sm:pr-4 min-h-[68px] sm:min-h-[74px] flex items-center gap-3 sm:gap-3.5 transition-all duration-200 cursor-pointer bg-white ${
                          isActive
                            ? "border-2 border-[#132B1E] shadow-sm"
                            : "border-2 border-[#EAE4D7] hover:border-[#D5B878]/80 shadow-[0_1px_6px_rgba(0,0,0,0.02)]"
                        }`}
                      >
                        {/* Left: Thumbnail Image */}
                        <div className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl overflow-hidden shrink-0 bg-neutral-100 border border-[#EAE4D7]">
                          <Image
                            src={proc.image}
                            alt={proc.title}
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
                            {proc.title}
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
        </section>


        {/* ══════════════════════════════════════════════════════════
            SECTION 4B: NABIOTA DIAGNOSTICS GMBH - PDF SECTION IV.4
            - Corporate purpose, legal separation, 8 core tasks
        ══════════════════════════════════════════════════════════ */}
        <DiagnosticsCompanySection locale={locale} />

        {/* ══════════════════════════════════════════════════════════
            SECTION 2 (PHOTO 3): FULL-WIDTH BANNER
            "MODERNE TECHNOLOGIE - Mehr als nur Bilder - klare Antworten."
            - Full-width edge-to-edge
            - Left: Scanner room image
            - Center: Heading & Description
            - Right: 3 Stats (3T, <24h, 99%) + Crisp Botanical Leaves Background
        ══════════════════════════════════════════════════════════ */}
        <section className="w-full bg-[#08170D] text-white relative overflow-hidden border-y border-[#D5B878]/30 my-8 sm:my-12">
          {/* Botanical Gold Background on Right Side */}
          <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[65%] lg:w-[48%] pointer-events-none z-0 select-none overflow-hidden">
            <Image
              src="/images/botanical-gold-bg.webp"
              alt="Botanical Gold Background"
              fill
              className="object-cover object-right opacity-70"
              priority
            />
            {/* Multi-stop smooth fade from dark center into botanical-gold-bg */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#08170D] via-[#08170D]/70 to-[#08170D]/20" />
          </div>

          <div className="relative z-10 w-full flex flex-col lg:flex-row items-center">
            {/* Left Column: Scanner Image */}
            <div className="w-full lg:w-[35%] xl:w-[38%] relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[260px] sm:min-h-[300px] lg:min-h-[360px] overflow-hidden shrink-0">
              <Image
                src="/images/diagnostik/scanner-suite.webp"
                alt="NabiOta CT Scanner Suite"
                fill
                className="object-cover object-center"
                priority
              />
              {/* Seamless gradient fade into dark forest green */}
              <div className="hidden lg:block absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#08170D] to-transparent pointer-events-none z-10" />
              <div className="lg:hidden absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#08170D] to-transparent pointer-events-none z-10" />
            </div>

            {/* Middle Column: Heading & Description */}
            <div className="w-full lg:w-[42%] xl:w-[40%] p-6 sm:p-10 lg:p-12 space-y-3 relative z-10">
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-[34px] text-white font-normal leading-tight">
                {isUz
                  ? "Shunchaki tasvirlar emas - aniq javoblar."
                  : isRu
                  ? "Больше чем снимки - ясные ответы."
                  : isEn
                  ? "More than Images - Clear Answers."
                  : isTr
                  ? "Yalnızca Görüntü Değil - Net Yanıtlar."
                  : isAr
                  ? "أكثر من مجرد صور - إجابات سريرية واضحة."
                  : "Mehr als nur Bilder - klare Antworten."}
              </h3>

              <p className="text-white/85 text-xs sm:text-[13.5px] leading-relaxed font-sans max-w-lg">
                {isUz
                  ? "Yuqori texnologiyali uskunalarimiz favqulodda aniq va xavfsiz diagnostikani ta'minlaydi - maksimal ishonch, to'g'ri qarorlar va samarali davolash uchun."
                  : isRu
                  ? "Наше высокотехнологичное оборудование обеспечивает исключительно точную и щадящую диагностику - для максимальной уверенности, правильных решений и эффективного лечения."
                  : isEn
                  ? "Our cutting-edge equipment enables exceptionally precise and gentle diagnostics-for greater security, informed clinical decisions, and targeted therapy."
                  : isTr
                  ? "Son teknoloji cihazlarımız son derece hassas ve konforlu bir tanı süreci sunar; daha yüksek güvenlik, doğru kararlar ve hedefe yönelik tedavi için."
                  : isAr
                  ? "تتيح أجهزتنا الحديثة تشخيصاً عالي الدقة دون إجهاد للجسم - لمزيد من الأمان واتخاذ القرارات السريرية الصائبة."
                  : "Unsere hochmodernen Geräte ermöglichen eine besonders präzise und schonende Diagnostik - für mehr Sicherheit, bessere Entscheidungen und eine gezielte Behandlung."}
              </p>
            </div>

            {/* Right Column: 3 Stats separated by dividers (Photo 3) */}
            <div className="w-full lg:w-[23%] xl:w-[22%] p-6 sm:p-10 lg:p-8 lg:border-l lg:border-white/15 grid grid-cols-3 lg:grid-cols-1 gap-5 relative z-10">
              <div className="space-y-1">
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#ECCF96] font-normal leading-none block">
                  3T
                </span>
                <span className="text-[11px] sm:text-xs text-white/80 font-sans leading-tight block">
                  {isUz ? "MRT maydon quvvati" : isRu ? "Мощность поля МРТ" : isEn ? "MRI Magnet Strength" : isTr ? "MR Manyetik Alan Gücü" : isAr ? "قوة المجال المغناطيسي للرنين" : "MRT-Magnetfeldstärke"}
                </span>
              </div>

              <div className="space-y-1 pt-0 lg:pt-4 lg:border-t lg:border-white/10">
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#ECCF96] font-normal leading-none block">
                  &lt;24h
                </span>
                <span className="text-[11px] sm:text-xs text-white/80 font-sans leading-tight block">
                  {isUz ? "Xulosa tayyorlash" : isRu ? "Готовность заключения" : isEn ? "Report Turnaround" : isTr ? "Rapor Teslim Süresi" : isAr ? "إعداد التقرير الطبي" : "Befunderstellung"}
                </span>
              </div>

              <div className="space-y-1 pt-0 lg:pt-4 lg:border-t lg:border-white/10">
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#ECCF96] font-normal leading-none block">
                  99%
                </span>
                <span className="text-[11px] sm:text-xs text-white/80 font-sans leading-tight block">
                  {isUz ? "Bemorlar mamnunligi" : isRu ? "Удовлетворенность пациентов" : isEn ? "Patient Satisfaction" : isTr ? "Hasta Memnuniyeti" : isAr ? "معدل رضا المرضى" : "Patientenzufriedenheit"}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 3 (PHOTO 2): UNSER DIAGNOSTIK-PROZESS (1-IN-1 DESIGN)
            - Left: Eyebrow, Title, Description, Button
            - Right: 4 Connected steps directly on background with connecting line
        ══════════════════════════════════════════════════════════ */}
        <section className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Header Area */}
            <div className="lg:col-span-4 space-y-3">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#132218] font-normal leading-tight">
                {isUz
                  ? "Aniq natijalarga 4 qadamda"
                  : isRu
                  ? "В 4 шага к ясным результатам"
                  : isEn
                  ? "In 4 Steps to Clear Results"
                  : isTr
                  ? "4 Adımda Net Sonuçlara"
                  : isAr
                  ? "في 4 خطوات نحو نتائج واضحة"
                  : "In 4 Schritten zu klaren Ergebnissen"}
              </h2>

              <p className="text-xs sm:text-[13px] text-[#556358] leading-relaxed font-sans max-w-sm">
                {isUz
                  ? "Birinchi murojaatdan xulosani olishgacha - biz har bir bosqichda sizga hamrohlik qilamiz."
                  : isRu
                  ? "От первого обращения до получения заключения - мы бережно сопровождаем вас на каждом этапе."
                  : isEn
                  ? "From initial inquiry to diagnostic report-we guide you through every single step."
                  : isTr
                  ? "İlk başvurudan ayrıntılı rapora kadar her adımda yanınızdayız."
                  : isAr
                  ? "من الاستفسار الأول وحتى تسليم التقرير النهائي - نرعاكم في كل خطوة."
                  : "Von der ersten Untersuchung bis zum Befund - wir begleiten Sie auf jedem Schritt."}
              </p>

              <div className="pt-2">
                <Link
                  href={`/${locale}/nabiota-diagnostics`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D5B878] text-[#142318] hover:bg-[#D5B878] hover:text-[#0C1C11] font-semibold text-xs tracking-wide transition-all shadow-sm bg-transparent"
                >
                  <span>{isUz ? "Qanday ishlaydi →" : isRu ? "Как это работает →" : isEn ? "How it works →" : isTr ? "Nasıl Çalışır →" : isAr ? "كيف تسير الإجراءات ←" : "So funktioniert es →"}</span>
                </Link>
              </div>
            </div>

            {/* Right Area: 4 Connected Steps directly on the warm cream background (Photo 2) */}
            <div className="lg:col-span-8 relative">
              {/* Subtle decorative leaf on the right edge */}
              <div className="hidden xl:block absolute -right-6 top-1/2 -translate-y-1/2 w-24 h-36 pointer-events-none opacity-20 select-none z-0">
                <svg viewBox="0 0 100 160" fill="none" className="w-full h-full text-[#2C4A34]">
                  <path d="M20 150 C 40 100, 60 60, 90 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  <path d="M40 100 C 25 85, 20 70, 35 65 C 50 60, 48 85, 40 100 Z" fill="currentColor" opacity="0.6" />
                  <path d="M60 65 C 75 50, 85 45, 80 35 C 75 25, 60 45, 60 65 Z" fill="currentColor" opacity="0.6" />
                  <path d="M75 35 C 90 20, 98 15, 95 8 C 90 2, 75 18, 75 35 Z" fill="currentColor" opacity="0.6" />
                </svg>
              </div>

              {/* Thin horizontal connecting line between step headers on desktop */}
              <div className="hidden md:block absolute top-[21px] left-[35px] right-[45px] h-[1px] bg-[#E2DDD2] z-0" />

              {/* 4 Process Step Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-6 relative z-10">
                {processSteps.map((step) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={step.num} className="flex flex-col">
                      {/* Header Row: Beige Circle Badge with Icon + Step Number */}
                      <div className="flex items-center gap-2.5">
                        <div className="w-11 h-11 rounded-full bg-[#F3EDE2] border border-[#E5DECF] shadow-xs flex items-center justify-center text-[#142318] shrink-0">
                          <StepIcon className="w-5 h-5 stroke-[1.5]" />
                        </div>
                        <span className="font-serif text-[17px] text-[#B89650] font-normal tracking-wide">
                          {step.num}
                        </span>
                      </div>

                      {/* Title & Description directly on background */}
                      <div className="mt-3.5">
                        <h3 className="font-serif text-[16px] sm:text-[17px] text-[#142318] font-medium leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-[12.5px] text-[#556358] leading-relaxed font-sans mt-1.5">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 4 (PHOTO 3): UNIFIED 2-COLUMN SECTION
            - Compact height matching Photo 3
            - Left (Deep Forest Green): "Fragen zur Diagnostik?" + consultation photo on right + button
            - Right (Pure White): "Was wir für Sie untersuchen können" + 2-col checklist with gold checkmarks
        ══════════════════════════════════════════════════════════ */}
        <section className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-14 sm:pb-20">
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#EDE8DE] shadow-[0_4px_24px_rgba(0,0,0,0.03)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Part: Deep Forest Green with consultation photo on right */}
            <div className="lg:col-span-5 relative bg-[#08170D] text-white p-6 sm:p-7 flex flex-col justify-between overflow-hidden min-h-[260px] sm:min-h-[280px]">
              {/* Background Image on Right side of the dark card */}
              <div className="absolute right-0 top-0 bottom-0 w-[55%] sm:w-[50%] overflow-hidden pointer-events-none">
                <Image
                  src="/images/diagnostik/consultation.webp"
                  alt="Doctor consultation with patient"
                  fill
                  className="object-cover object-center"
                />
                {/* Smooth horizontal gradient into dark green on left */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#08170D] via-[#08170D]/75 to-transparent" />
              </div>

              {/* Content over background on left */}
              <div className="relative z-10 max-w-[230px] sm:max-w-[250px] space-y-2">
                <h3 className="font-serif text-2xl sm:text-[27px] text-white font-normal leading-tight">
                  {isUz
                    ? "Diagnostika bo'yicha savollaringiz bormi?"
                    : isRu
                    ? "Вопросы по диагностике?"
                    : isEn
                    ? "Questions about Diagnostics?"
                    : isTr
                    ? "Tanı ile İlgili Sorularınız mı Var?"
                    : isAr
                    ? "هل لديك استفسارات حول الفحوصات؟"
                    : "Fragen zur Diagnostik?"}
                </h3>
                <p className="text-white/80 text-[11.5px] sm:text-xs font-sans leading-relaxed">
                  {isUz
                    ? "Jamoamiz har doim xizmatingizda va barcha tekshiruvlar hamda imkoniyatlar bo'yicha mamnuniyat bilan maslahat beradi."
                    : isRu
                    ? "Наша команда всегда к вашим услугам и с радостью проконсультирует вас обо всех обследованиях и возможностях."
                    : isEn
                    ? "Our team is always at your service and will gladly advise you on all examinations and modalities."
                    : isTr
                    ? "Uzman ekibimiz her zaman hizmetinizde olup tüm tetkikler ve seçenekler hakkında size danışmanlık yapmaktan memnuniyet duyar."
                    : isAr
                    ? "فريقنا الاستشاري في خدمتكم دائماً ويسعده تقديم المشورة الشاملة حول جميع الفحوصات والخيارات المتاحة."
                    : "Unser Team steht Ihnen jederzeit zur Verfügung und berät Sie gerne zu allen Untersuchungen und Möglichkeiten."}
                </p>
              </div>

              <div className="relative z-10 pt-3">
                <Link
                  href={`/${locale}/nabiota-diagnostics`}
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#ECCF96] hover:bg-[#D5B878] text-[#0C1C11] font-semibold text-xs tracking-wide transition-all shadow-sm"
                >
                  <span>{isUz ? "Bog'lanish →" : isRu ? "Связаться с нами →" : isEn ? "Contact us →" : isTr ? "İletişime Geçin →" : isAr ? "تواصل معنا ←" : "Kontakt aufnehmen →"}</span>
                </Link>
              </div>
            </div>

            {/* Right Part: Pure White with Checklist */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-7 lg:p-8 flex flex-col justify-center">
              <h3 className="font-serif text-xl sm:text-[23px] text-[#142318] font-normal leading-tight mb-4 sm:mb-5">
                {isUz
                  ? "Siz uchun nimalarni tekshirishimiz mumkin"
                  : isRu
                  ? "Что мы можем исследовать для вас"
                  : isEn
                  ? "What We Can Examine for You"
                  : isTr
                  ? "Sizin İçin Neleri İnceleyebiliriz"
                  : isAr
                  ? "ما يمكننا فحصه وتشخيصه بدقة"
                  : "Was wir für Sie untersuchen können"}
              </h3>

              {/* 2-Column Checklist with Gold Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 sm:gap-y-2.5">
                <div className="space-y-2 sm:space-y-2.5">
                  {indicationsCol1.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <GoldCircleCheckIcon className="w-3.5 h-3.5 text-[#B89650] shrink-0" />
                      <span className="text-xs sm:text-[12.5px] text-[#2C3B30] font-normal leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 sm:space-y-2.5">
                  {indicationsCol2.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <GoldCircleCheckIcon className="w-3.5 h-3.5 text-[#B89650] shrink-0" />
                      <span className="text-xs sm:text-[12.5px] text-[#2C3B30] font-normal leading-snug">
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
            SECTION 6: SIGNATURE PANORAMIC MOUNTAIN CTA BANNER
            - "фото 5 лищние белые пробелы снизу и сверху"
            - Directly adjacent to Section 5 with only a gold divider border
            - Directly adjacent to Footer with NO bottom margin or padding!
        ══════════════════════════════════════════════════════════ */}
        <section className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-[#D5B878]/30">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/values/mountains-bg.webp"
              alt="Alps panoramic background"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08170D]/94 via-[#08170D]/88 to-[#08170D]/94" />
          </div>

          <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 text-center">
            <div className="max-w-2xl mx-auto space-y-4 sm:space-y-5">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-white font-normal leading-[1.18]">
                {isUz
                  ? "O'z vaqtida va aniq diagnostika kerakmi?"
                  : isRu
                  ? "Нужна своевременная и точная диагностика?"
                  : isEn
                  ? "Require Timely & Precise Diagnostics?"
                  : isTr
                  ? "Zamanında ve Hassas Bir Tanıya mı İhtiyacınız Var?"
                  : isAr
                  ? "هل تحتاج إلى فحص تشخيصي فوري ودقيق؟"
                  : "Benötigen Sie eine zeitnahe Diagnostik?"}
              </h2>

              <p className="text-white/85 text-xs sm:text-[14px] leading-relaxed font-sans max-w-xl mx-auto">
                {isUz
                  ? "NabiOta® markazlarida 3-Tesla MRT, past dozali KT yoki raqamli rentgenga yoziling. Biz ehtiyotkor munosabat, minimal kutish muddati va shifokorlaringiz uchun to'liq tibbiy xulosani kafolatlaymiz."
                  : isRu
                  ? "Запишитесь на МРТ 3 Тесла, низкодозовую КТ или цифровой рентген в центрах NabiOta®. Мы гарантируем бережное отношение, минимальные сроки ожидания и исчерпывающее врачебное заключение."
                  : isEn
                  ? "Schedule your 3-Tesla MRI, low-dose CT, or digital X-ray at NabiOta® diagnostics centers. Fast appointments, maximum patient comfort, and reliable reports for you and your physicians."
                  : isTr
                  ? "NabiOta® tanı merkezlerimizde 3T MR, düşük dozlu BT veya dijital röntgen için randevunuzu hemen planlayın - hızlı, dijital ve en yüksek radyolojik uzmanlıkla."
                  : isAr
                  ? "احجز موعدك للتصوير بالرنين المغناطيسي 3 تسلا، الأشعة المقطعية منخفضة الجرعة أو الأشعة الرقمية في مراكز NabiOta® - سرعة في المواعيد وخبرة طبية لا تضاهى."
                  : "Vereinbaren Sie Ihren Untersuchungstermin für 3T-MRT, Niedrigdosis-CT oder volldigitales Röntgen - schnell, digital und mit höchster radiologischer Fachexpertise."}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <Link
                  href={`/${locale}/nabiota-diagnostics`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#07150C] font-semibold text-xs sm:text-[13.5px] tracking-wide shadow-lg transition-all duration-200 hover:scale-102"
                >
                  <span>{isUz ? "Qabulga yozilish" : isRu ? "Запись на прием" : isEn ? "Book an Appointment" : isTr ? "Randevu Al" : isAr ? "حجز موعد فحص" : "Termin vereinbaren"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href={`/${locale}/nabiota-diagnostics`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-white/30 hover:border-[#D5B878] text-white hover:text-[#ECCF96] font-medium text-xs sm:text-[13px] transition-all bg-white/5 backdrop-blur-sm"
                >
                  <span>{isUz ? "Markaz bilan bog'lanish" : isRu ? "Связаться с центром" : isEn ? "Direct Contact" : isTr ? "Merkezle İletişim" : isAr ? "التواصل المباشر" : "Direkter Kontakt"}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            MODAL DIALOG: DETAILED DIAGNOSTIC MODALITY (PDF SECTION 4)
        ══════════════════════════════════════════════════════════ */}
        {selectedProcedure && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-[#08170D]/80 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedProcedure(null)}
          >
            <div
              className="relative w-full max-w-4xl xl:max-w-5xl bg-white rounded-2xl sm:rounded-3xl border border-[#D5B878]/40 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              {/* Modal Top Header Image & Badges */}
              <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden shrink-0 bg-[#08170D]">
                <Image
                  src={selectedProcedure.image}
                  alt={selectedProcedure.title}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08170D] via-[#08170D]/40 to-black/30" />

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedProcedure(null)}
                  aria-label={isUz ? "Yopish" : isRu ? "Закрыть" : isEn ? "Close" : isTr ? "Kapat" : isAr ? "إغلاق" : "Schließen"}
                  className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-[#08170D]/80 hover:bg-[#D5B878] text-white hover:text-[#08170D] border border-white/20 hover:border-[#D5B878] flex items-center justify-center transition-all duration-200 shadow-md z-10 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Badge & Floating Modality Icon */}
                <div className="absolute bottom-3 left-4 sm:left-6 right-4 sm:right-6 flex items-end justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#08170D] border border-[#D5B878] flex items-center justify-center text-[#ECCF96] shadow-lg shrink-0">
                      {React.createElement(selectedProcedure.icon, { className: "w-5 h-5 stroke-[1.6]" })}
                    </div>
                    <div>

                      <h2 id="modal-title" className="font-serif text-xl sm:text-2xl text-white font-normal leading-tight drop-shadow-sm">
                        {selectedProcedure.title}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Scrollable Content Body */}
              <div className="p-5 sm:p-6 overflow-y-auto space-y-4 sm:space-y-5 text-left font-sans">
                {/* Subtitle / Clinical Scope */}
                <div className="bg-[#FAF8F5] border border-[#EDE6D8] px-4 py-3 rounded-xl shadow-xs">
                  <p className="text-[12px] sm:text-[13px] font-medium text-[#142318] leading-snug">
                    {selectedProcedure.subtitle}
                  </p>
                </div>

                {/* Full Description from PDF Section 4 */}
                <div className="space-y-2">

                  <p className="text-xs sm:text-[13px] text-[#425246] leading-relaxed">
                    {selectedProcedure.fullDesc}
                  </p>
                </div>

                {/* Key Indications Checklist */}
                <div className="space-y-2.5 pt-1">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProcedure.indications.map((ind, i) => (
                      <div key={i} className="flex items-start gap-2 bg-[#FAF8F5] p-2.5 rounded-xl border border-[#EDE8DE]">
                        <GoldCircleCheckIcon className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                        <span className="text-[11.5px] sm:text-xs text-[#1F2E24] leading-snug font-normal">
                          {ind}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Regulatory & Safety Standards Bar (PDF Section 4 Requirements) */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#08170D]/5 border border-[#D5B878]/30 text-[#142318]">
                  <ShieldCheck className="w-5 h-5 text-[#B89650] shrink-0" />
                  <p className="text-[11px] sm:text-[11.5px] leading-tight text-[#3A4A3E]">
                    <strong className="font-semibold text-[#142318]">{isUz ? "Xavfsizlik standartlari: " : isRu ? "Стандарты безопасности: " : isEn ? "Standards & Quality: " : isTr ? "Güvenlik & Kalite Standardı: " : isAr ? "معايير الجودة والسلامة: " : "Qualitäts- & Sicherheitsstandard: "}</strong>
                    {selectedProcedure.standards}
                  </p>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="p-4 sm:p-5 bg-[#FAF8F5] border-t border-[#EDE8DE] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedProcedure(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-[#D0C8B8] hover:bg-white text-[#556358] text-xs font-medium transition-colors cursor-pointer"
                >
                  {locale === "uz" ? "Oynani yopish" : locale === "ru" ? "Закрыть окно" : locale === "tr" ? "Pencereyi Kapat" : locale === "ar" ? "إغلاق النافذة" : isEn ? "Close window" : "Fenster schließen"}
                </button>

                <Link
                  href={`/${locale}/nabiota-diagnostics`}
                  onClick={() => setSelectedProcedure(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#08170D] hover:bg-[#0C2B1B] text-[#ECCF96] border border-[#D5B878] text-xs font-semibold tracking-wide transition-all shadow-sm"
                >
                  <span>{locale === "uz" ? "Tekshiruvga yozilish" : locale === "ru" ? "Записаться на процедуру" : locale === "tr" ? "Muayene Randevusu Al" : locale === "ar" ? "طلب موعد فحص طبي" : isEn ? "Book Examination" : "Termin für Untersuchung anfragen"}</span>
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
