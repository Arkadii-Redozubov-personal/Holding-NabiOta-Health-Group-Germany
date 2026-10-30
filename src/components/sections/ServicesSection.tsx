"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Check,
} from "@/lib/icons";
import { getDictionary, getLocalePath, SupportedLocale } from "@/lib/i18n";
import { MEDICAL_AREAS } from "@/data/medical-areas";

interface ServicesSectionProps {
  currentLocale?: SupportedLocale;
}

export function ServicesSection({ currentLocale = "de" }: ServicesSectionProps) {
  const dict = getDictionary(currentLocale);
  const lang = (currentLocale as "de" | "en" | "ru" | "tr" | "ar" | "uz") || "de";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [animating, setAnimating] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const areas = MEDICAL_AREAS.map((a) => ({
    slug: a.slug,
    icon: a.icon,
    image: a.image,
    title: a.titles,
    subtitle: a.subtitles,
    highlights: a.highlights,
  }));


  const total = areas.length;
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  const goToSlide = (targetIndex: number, dir?: "next" | "prev") => {
    if (animating || targetIndex === currentIndex) return;
    const chosenDir = dir || (targetIndex > currentIndex ? "next" : "prev");
    setDirection(chosenDir);
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex(targetIndex);
      setTimeout(() => {
        setAnimating(false);
      }, 50);
    }, 220);
  };

  const handlePrev = () => {
    goToSlide(prevIndex, "prev");
  };

  const handleNext = () => {
    goToSlide(nextIndex, "next");
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 50) handleNext();
    else if (diff < -50) handlePrev();
    setTouchStartX(null);
  };

  const currentArea = areas[currentIndex];
  const prevArea = areas[prevIndex];
  const nextArea = areas[nextIndex];

  const CurrentIcon = currentArea.icon;
  const PrevIcon = prevArea.icon;
  const NextIcon = nextArea.icon;

  const sectionSubtitles = {
    de: "Moderne Medizin, menschliche Betreuung und innovative Konzepte - in allen Bereichen unserer Versorgung.",
    ru: "Современная медицина, забота о пациентах и инновационные концепции во всех сферах нашей помощи.",
    en: "Modern medicine, empathetic care, and innovative concepts across all areas of our provision.",
    tr: "Modern tıp, insani ilgi ve yenilikçi yaklaşımlar - tüm sağlık alanlarımızda.",
    ar: "طب حديث، رعاية إنسانية ومفاهيم مبتكرة في جميع مجالات الرعاية الصحية لدينا.",
    uz: "Zamonaviy tibbiyot, insoniy g'amxo'rlik va innovatsion yondashuvlar barcha xizmatlarimizda.",
  };

  const sectionTitles = {
    de: "Ganzheitliche Versorgung über alle Lebensphasen",
    ru: "Комплексная забота о здоровье на всех этапах жизни",
    en: "Comprehensive care across all life stages",
    tr: "Hayatın her aşamasında bütüncül sağlık hizmeti",
    ar: "رعاية صحية شاملة ومتكاملة عبر جميع مراحل الحياة",
    uz: "Hayotning barcha bosqichlarida kompleks salomatlik g'amxo'rligi",
  };

  const ctaLabels = {
    de: "Mehr erfahren",
    ru: "Узнать больше",
    en: "Learn more",
    tr: "Daha fazla bilgi",
    ar: "معرفة المزيد",
    uz: "Batafsil ma'lumot",
  };

  return (
    <section className="relative bg-[#FAF8F5] pt-10 sm:pt-14 pb-12 sm:pb-16 border-b border-[#EAE5DA] overflow-hidden select-none">
      {/* ── Soft Ambient Botanical Foliage Watermarks ── */}
      <div className="absolute top-0 left-0 w-56 h-56 pointer-events-none opacity-40 select-none hidden lg:block">
        <Image
          src="/images/areas/botanical-branch-clean.webp"
          alt=""
          fill
          className="object-contain object-top-left -scale-x-100"
          unoptimized
        />
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none opacity-40 select-none hidden lg:block">
        <Image
          src="/images/areas/botanical-branch-clean.webp"
          alt=""
          fill
          className="object-contain object-bottom-right"
          unoptimized
        />
      </div>

      <div className="relative z-10 w-full max-w-[1540px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* ── Section Header ───────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <h2 className="font-serif text-[26px] sm:text-[32px] lg:text-[36px] font-normal text-[#112318] tracking-tight leading-[1.15]">
              {sectionTitles[lang]}
            </h2>
            <p className="font-sans text-[12.5px] sm:text-[13.5px] text-[#556358] mt-1.5 max-w-2xl font-light">
              {sectionSubtitles[lang]}
            </p>
          </div>

          <Link
            href={getLocalePath(currentLocale, "areas")}
            className="group inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-[#9C8145] hover:text-[#7D6532] transition-colors self-start md:self-end whitespace-nowrap mb-1"
          >
            <span>{dict.areas.cta}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* ── Carousel Stage: True Flex Row of 3 Cards with 1:1 Reference Photo Match ── */}
        <div
          className="relative w-full overflow-hidden py-4"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex items-center justify-center gap-6 sm:gap-7 lg:gap-8 transition-transform duration-400 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
            style={{
              transform: animating
                ? direction === "next"
                  ? "translateX(-32px)"
                  : "translateX(32px)"
                : "translateX(0)",
            }}
          >
            {/* ── 1. LEFT PEEK CARD (Previous Area - Wider Side Card) ── */}
            <div
              onClick={handlePrev}
              className="group hidden md:flex flex-col w-[300px] lg:w-[340px] xl:w-[370px] h-[405px] sm:h-[420px] lg:h-[435px] shrink-0 rounded-[24px] sm:rounded-[28px] bg-white border border-[#EDE8DE] shadow-[0_4px_20px_rgba(20,35,24,0.04)] overflow-hidden opacity-85 hover:opacity-100 transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-0.5"
            >
              {/* Top Image (Fills ~50% of card) */}
              <div className="relative w-full h-[50%] overflow-hidden bg-[#07170E]/5 shrink-0">
                <Image
                  src={prevArea.image}
                  alt={prevArea.title[lang]}
                  fill
                  sizes="(max-width: 1280px) 340px, 370px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Bottom Info: Icon on left, Title & Subtitle on right, circle arrow on bottom right */}
              <div className="p-4 sm:p-5 lg:p-5 flex flex-col justify-between flex-1 bg-white">
                <div className="flex items-start gap-3">
                  <div className="text-[#B89650] shrink-0 mt-0.5">
                    <PrevIcon className="w-5.5 h-5.5 stroke-[1.6]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#142318] text-[15px] sm:text-[16px] leading-snug line-clamp-2">
                      {prevArea.title[lang]}
                    </h4>
                    <p className="text-[11px] sm:text-[11.5px] text-[#636861] mt-1 line-clamp-2 font-sans leading-relaxed font-light">
                      {prevArea.subtitle[lang]}
                    </p>
                  </div>
                </div>

                <div className="flex justify-end pt-1">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#EDE8DE] text-[#B89650] flex items-center justify-center transition-colors group-hover:border-[#B89650] group-hover:bg-[#FAF8F5]">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[1.8]" />
                  </div>
                </div>
              </div>
            </div>

            {/* ── 2. CENTER ACTIVE CARD (2-Column Hero Card - Slightly Narrower) ── */}
            <div className="relative w-full max-w-[660px] lg:max-w-[720px] xl:max-w-[760px] h-[405px] sm:h-[420px] lg:h-[435px] shrink-0 rounded-[24px] sm:rounded-[28px] bg-white border border-[#EDE8DE] shadow-[0_10px_35px_rgba(20,35,24,0.06),0_1px_3px_rgba(20,35,24,0.04)] overflow-visible">
              {/* Floating Left Arrow Button on the Card Seam */}
              <button
                onClick={handlePrev}
                disabled={animating}
                aria-label="Previous slide"
                className="absolute -left-5 sm:-left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-[0_6px_22px_rgba(0,0,0,0.12)] border border-[#EDE8DE] text-[#7D5F28] flex items-center justify-center hover:bg-[#FAF8F4] hover:scale-105 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
              >
                <ArrowLeft className="w-4.5 h-4.5 stroke-[1.8]" />
              </button>

              {/* Floating Right Arrow Button on the Card Seam */}
              <button
                onClick={handleNext}
                disabled={animating}
                aria-label="Next slide"
                className="absolute -right-5 sm:-right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-[0_6px_22px_rgba(0,0,0,0.12)] border border-[#EDE8DE] text-[#7D5F28] flex items-center justify-center hover:bg-[#FAF8F4] hover:scale-105 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
              >
                <ArrowRight className="w-4.5 h-4.5 stroke-[1.8]" />
              </button>

              {/* Card Inner Grid with Rounded Edges */}
              <div className="w-full h-full rounded-[24px] sm:rounded-[28px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch bg-white">
                {/* Left Column: Full-bleed Photo (No Number Badge per user instruction) */}
                <div className="relative lg:col-span-6 h-[200px] sm:h-[220px] lg:h-full overflow-hidden bg-[#07170E]/5">
                  <div
                    className="relative w-full h-full transition-all duration-400 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                    style={{
                      transform: animating
                        ? direction === "next"
                          ? "scale(1.04) translateX(-10px)"
                          : "scale(1.04) translateX(10px)"
                        : "scale(1) translateX(0)",
                      opacity: animating ? 0.45 : 1,
                    }}
                  >
                    <Image
                      key={currentArea.image}
                      src={currentArea.image}
                      alt={currentArea.title[lang]}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 380px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* Right Column: Editorial Details with Smooth Directional Fade */}
                <div
                  className="relative lg:col-span-6 p-4 sm:p-5 lg:p-6 xl:p-7 flex flex-col justify-between bg-white transition-all duration-350 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                  style={{
                    transform: animating
                      ? direction === "next"
                        ? "translateX(14px)"
                        : "translateX(-14px)"
                      : "translateX(0)",
                    opacity: animating ? 0 : 1,
                  }}
                >
                  {/* Subtle botanical branch watermark in bottom right corner */}
                  <div className="absolute -bottom-3 -right-3 w-32 h-32 pointer-events-none opacity-25 select-none hidden sm:block">
                    <Image
                      src="/images/areas/botanical-branch-clean.webp"
                      alt=""
                      fill
                      className="object-contain object-bottom-right"
                      unoptimized
                    />
                  </div>

                  <div className="relative z-10">
                    {/* Top Gold Icon */}
                    <div className="text-[#B89650] mb-2">
                      <CurrentIcon className="w-7 h-7 stroke-[1.5]" />
                    </div>

                    {/* Headline in Serif */}
                    <h3 className="font-serif text-[20px] sm:text-[23px] lg:text-[25px] font-normal text-[#112419] leading-[1.15] tracking-tight mb-1.5">
                      {currentArea.title[lang]}
                    </h3>

                    {/* Subtitle */}
                    <p className="font-sans text-[11.5px] sm:text-[12px] text-[#556358] leading-relaxed mb-3 font-light line-clamp-2">
                      {currentArea.subtitle[lang]}
                    </p>

                    {/* 3 Bespoke Checkmark Highlights */}
                    <ul className="space-y-1.5 mb-3.5 font-sans text-[11px] sm:text-[11.5px] text-[#2C3B30]">
                      {currentArea.highlights[lang].map((point, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full border border-[#CCA86A] text-[#B89650] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 stroke-[2.2]" />
                          </span>
                          <span className="leading-snug">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Camel-Gold Pill CTA Button */}
                  <div className="relative z-10 pt-1">
                    <Link
                      href={getLocalePath(currentLocale, `areas/${currentArea.slug}`)}
                      className="group inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#CCA86A] hover:bg-[#BF9A58] text-[#142318] font-sans font-medium text-[12px] sm:text-[12.5px] transition-all shadow-xs hover:shadow-sm"
                    >
                      <span>{ctaLabels[lang]}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ── 3. RIGHT PEEK CARD (Next Area - Wider Side Card) ── */}
            <div
              onClick={handleNext}
              className="group hidden md:flex flex-col w-[300px] lg:w-[340px] xl:w-[370px] h-[405px] sm:h-[420px] lg:h-[435px] shrink-0 rounded-[24px] sm:rounded-[28px] bg-white border border-[#EDE8DE] shadow-[0_4px_20px_rgba(20,35,24,0.04)] overflow-hidden opacity-85 hover:opacity-100 transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-0.5"
            >
              {/* Top Image (Fills ~50% of card) */}
              <div className="relative w-full h-[50%] overflow-hidden bg-[#07170E]/5 shrink-0">
                <Image
                  src={nextArea.image}
                  alt={nextArea.title[lang]}
                  fill
                  sizes="(max-width: 1280px) 340px, 370px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Bottom Info: Icon on left, Title & Subtitle on right, circle arrow on bottom right */}
              <div className="p-4 sm:p-5 lg:p-5 flex flex-col justify-between flex-1 bg-white">
                <div className="flex items-start gap-3">
                  <div className="text-[#B89650] shrink-0 mt-0.5">
                    <NextIcon className="w-5.5 h-5.5 stroke-[1.6]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#142318] text-[15px] sm:text-[16px] leading-snug line-clamp-2">
                      {nextArea.title[lang]}
                    </h4>
                    <p className="text-[11px] sm:text-[11.5px] text-[#636861] mt-1 line-clamp-2 font-sans leading-relaxed font-light">
                      {nextArea.subtitle[lang]}
                    </p>
                  </div>
                </div>

                <div className="flex justify-end pt-1">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#EDE8DE] text-[#B89650] flex items-center justify-center transition-colors group-hover:border-[#B89650] group-hover:bg-[#FAF8F5]">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[1.8]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Bottom Controls Matching Reference Image Exactly: [Line] • • • [Line]   [ ← ] [ → ] ── */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 mt-7 sm:mt-9 select-none">
            {/* Center Dots Group Flanked by Subtle Guidelines */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="hidden sm:block w-12 sm:w-16 h-px bg-[#EAE3D6]" />
              <div className="flex items-center gap-2">
                {areas.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx, idx > currentIndex ? "next" : "prev")}
                    disabled={animating}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx
                        ? "w-2.5 h-2.5 bg-[#B89650] scale-110 shadow-xs"
                        : "w-2 h-2 bg-[#E5DFD4] hover:bg-[#B89650]/60"
                    }`}
                  />
                ))}
              </div>
              <div className="hidden sm:block w-12 sm:w-16 h-px bg-[#EAE3D6]" />
            </div>

            {/* Right Circle Arrow Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={animating}
                aria-label="Previous slide"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#E7DFD2] bg-white text-[#7D5F28] hover:border-[#B89650] hover:text-[#5B4317] hover:bg-[#FAF8F5] active:scale-95 flex items-center justify-center transition-all cursor-pointer shadow-xs disabled:opacity-50"
              >
                <ArrowLeft className="w-4 h-4 stroke-[1.8]" />
              </button>

              <button
                onClick={handleNext}
                disabled={animating}
                aria-label="Next slide"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#E7DFD2] bg-white text-[#7D5F28] hover:border-[#B89650] hover:text-[#5B4317] hover:bg-[#FAF8F5] active:scale-95 flex items-center justify-center transition-all cursor-pointer shadow-xs disabled:opacity-50"
              >
                <ArrowRight className="w-4 h-4 stroke-[1.8]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
