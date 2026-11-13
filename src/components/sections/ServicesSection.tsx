"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";
import { ArrowRight, ArrowLeft, Check } from "@/lib/icons";
import { getDictionary, getLocalePath, SupportedLocale } from "@/lib/i18n";
import { MEDICAL_AREAS } from "@/data/medical-areas";
import { applyNamespaceOverrides } from "@/lib/cms/cms-engine";

interface ServicesSectionProps {
  currentLocale?: SupportedLocale;
}

const SECTION_SUBTITLES: Record<SupportedLocale, string> = {
  de: "Moderne Medizin, menschliche Betreuung und innovative Konzepte - in allen Bereichen unserer Versorgung.",
  ru: "Современная медицина, забота о пациентах и инновационные концепции во всех сферах нашей помощи.",
  en: "Modern medicine, empathetic care, and innovative concepts across all areas of our provision.",
  tr: "Modern tıp, insani ilgi ve yenilikçi yaklaşımlar - tüm sağlık alanlarımızda.",
  ar: "طب حديث، رعاية إنسانية ومفاهيم مبتكرة في جميع مجالات الرعاية الصحية لدينا.",
  uz: "Zamonaviy tibbiyot, insoniy g'amxo'rlik va innovatsion yondashuvlar barcha xizmatlarimizda.",
};

const SECTION_TITLES: Record<SupportedLocale, string> = {
  de: "Ganzheitliche Versorgung über alle Lebensphasen",
  ru: "Комплексная забота о здоровье на всех этапах жизни",
  en: "Comprehensive care across all life stages",
  tr: "Hayatın her aşamasında bütüncül sağlık hizmeti",
  ar: "رعاية صحية شاملة ومتكاملة عبر جميع مراحل الحياة",
  uz: "Hayotning barcha bosqichlarida kompleks salomatlik g'amxo'rligi",
};

const CTA_LABELS: Record<SupportedLocale, string> = {
  de: "Mehr erfahren",
  ru: "Узнать больше",
  en: "Learn more",
  tr: "Daha fazla bilgi",
  ar: "معرفة المزيد",
  uz: "Batafsil ma'lumot",
};

export function ServicesSection({ currentLocale = "de" }: ServicesSectionProps) {
  const dict = getDictionary(currentLocale);
  const lang = currentLocale;
  const isRtl = lang === "ar";
  const sliderHeader = applyNamespaceOverrides(
    {
      sliderTitle: SECTION_TITLES[lang],
      sliderSubtitle: SECTION_SUBTITLES[lang],
      sliderCta: CTA_LABELS[lang],
    },
    lang,
    "homeExtras"
  );
  const sliderAreas = applyNamespaceOverrides(MEDICAL_AREAS, lang, "medicalAreas");

  const splideRef = useRef<HTMLDivElement | null>(null);
  const splideInstanceRef = useRef<Splide | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const root = splideRef.current;
    if (!root) return;

    const splide = new Splide(root, {
      type: "loop",
      perPage: 3,
      perMove: 1,
      focus: "center",
      gap: "0.5rem",
      padding: 0,
      speed: 550,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      updateOnMove: true,
      arrows: false,
      pagination: false,
      direction: isRtl ? "rtl" : "ltr",
      drag: true,
      flickPower: 400,
      reducedMotion: {
        speed: 0,
        rewindSpeed: 0,
      },
      breakpoints: {
        1279: {
          perPage: 3,
          focus: "center",
          gap: "0.5rem",
          padding: 0,
        },
        1023: {
          perPage: 1,
          focus: "center",
          gap: "0.5rem",
          padding: { left: "5.5rem", right: "5.5rem" },
        },
        639: {
          perPage: 1,
          focus: "center",
          gap: "0.375rem",
          padding: { left: "1.75rem", right: "1.75rem" },
        },
      },
    });

    splide.on("mounted move", (newIndex?: number) => {
      const idx = typeof newIndex === "number" ? newIndex : splide.index;
      setActiveIndex(idx);
    });

    splide.on("click", (slide) => {
      if (!slide.slide.classList.contains("is-active")) {
        splide.go(slide.index);
      }
    });

    splide.mount();
    splideInstanceRef.current = splide;

    return () => {
      splide.destroy();
      splideInstanceRef.current = null;
    };
  }, [isRtl]);

  const handlePrev = () => {
    splideInstanceRef.current?.go("<");
  };

  const handleNext = () => {
    splideInstanceRef.current?.go(">");
  };

  const handleGoTo = (idx: number) => {
    splideInstanceRef.current?.go(idx);
  };

  return (
    <section className="relative bg-[#FAF8F5] pt-12 sm:pt-16 pb-14 sm:pb-18 border-b border-[#EAE5DA] overflow-hidden select-none">
      {/* Subtle Ambient Botanical Watermarks */}
      <div className="absolute top-0 left-0 w-56 h-56 pointer-events-none opacity-35 select-none hidden lg:block">
        <Image
          src="/images/areas/botanical-branch-clean.webp"
          alt=""
          fill
          className="object-contain object-top-left -scale-x-100"
          unoptimized
        />
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none opacity-35 select-none hidden lg:block">
        <Image
          src="/images/areas/botanical-branch-clean.webp"
          alt=""
          fill
          className="object-contain object-bottom-right"
          unoptimized
        />
      </div>

      <div className="relative z-10 w-full max-w-[1540px] 2xl:max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-7 sm:mb-9">
          <div>
            <h2 className="font-serif text-[26px] sm:text-[32px] lg:text-[36px] font-normal text-[#132018] tracking-tight leading-[1.15]">
              {sliderHeader.sliderTitle}
            </h2>
            {sliderHeader.sliderSubtitle && (
              <p className="font-sans text-[13px] sm:text-[14px] text-[#556358] mt-1.5 max-w-2xl font-light">
                {sliderHeader.sliderSubtitle}
              </p>
            )}
          </div>

          <Link
            href={getLocalePath(currentLocale, "areas")}
            className="group inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-[#8F7745] hover:text-[#6F592E] transition-colors self-start md:self-end whitespace-nowrap mb-1 focus-visible:outline-2 focus-visible:outline-[#BEA06B] focus-visible:outline-offset-4 rounded-sm"
          >
            <span>{dict.areas.cta}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </Link>
        </div>

        {/* Splide Focus-Center Slider */}
        <div className="relative">
          <div
            ref={splideRef}
            className="splide nabiota-areas-splide"
            role="region"
            aria-roledescription="carousel"
            aria-label={SECTION_TITLES[lang]}
          >
            <div className="splide__track">
              <ul className="splide__list">
                {sliderAreas.map((area, idx) => {
                  const Icon = area.icon;
                  const areaHref = getLocalePath(currentLocale, `areas/${area.slug}`);
                  const isFocused = activeIndex === idx;

                  return (
                    <li key={area.id} className="splide__slide">
                      <article className="area-slide-card flex flex-col w-full self-stretch rounded-2xl bg-white overflow-hidden">
                        {/* Top Photograph */}
                        <div className="relative w-full h-[200px] sm:h-[225px] lg:h-[235px] overflow-hidden bg-[#112117]/5 shrink-0">
                          <Image
                            src={area.image}
                            alt={area.titles[lang]}
                            fill
                            sizes="(max-width: 639px) 88vw, (max-width: 1023px) 75vw, 33vw"
                            className="object-cover object-center transition-transform duration-700 ease-out"
                          />
                          <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#0D1910]/20 to-transparent pointer-events-none" />
                        </div>

                        {/* Editorial Content */}
                        <div className="relative p-5 sm:p-6 flex flex-col justify-between flex-1 bg-white">
                          {/* Subtle corner watermark */}
                          <div className="absolute -bottom-2 -right-2 w-24 h-24 pointer-events-none opacity-20 select-none">
                            <Image
                              src="/images/areas/botanical-branch-clean.webp"
                              alt=""
                              fill
                              className="object-contain object-bottom-right"
                              unoptimized
                            />
                          </div>

                          <div className="relative z-10">
                            <div className="flex items-start gap-3 mb-2.5">
                              <div className="text-[#9C8145] shrink-0 mt-0.5">
                                <Icon className="w-6 h-6 stroke-[1.6]" />
                              </div>
                              <h3 className="font-serif text-[19px] sm:text-[21px] font-medium text-[#132018] leading-[1.2] tracking-tight">
                                {area.titles[lang]}
                              </h3>
                            </div>

                            <p className="font-sans text-[12.5px] sm:text-[13px] text-[#5E625A] leading-relaxed mb-4 line-clamp-2 font-light">
                              {area.subtitles[lang]}
                            </p>

                            <ul className="space-y-1.5 mb-5 font-sans text-[12px] text-[#2C3B30]">
                              {area.highlights[lang].map((point, pointIdx) => (
                                <li key={pointIdx} className="flex items-center gap-2">
                                  <span className="w-4 h-4 rounded-full border border-[#BEA06B]/70 text-[#8F7745] flex items-center justify-center shrink-0">
                                    <Check className="w-2.5 h-2.5 stroke-[2.2]" />
                                  </span>
                                  <span className="leading-snug">{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="relative z-10 pt-3 border-t border-[#F0EBE1] flex items-center">
                            <Link
                              href={areaHref}
                              tabIndex={isFocused ? 0 : -1}
                              className="area-slide-cta group/cta inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-[#D7BF95] hover:bg-[#BEA06B] text-[#112117] font-sans font-semibold text-[12.5px] transition-colors focus-visible:outline-2 focus-visible:outline-[#112117] focus-visible:outline-offset-2"
                            >
                              <span>{sliderHeader.sliderCta}</span>
                              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/cta:translate-x-1 rtl:rotate-180 rtl:group-hover/cta:-translate-x-1" />
                            </Link>
                          </div>
                        </div>
                      </article>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Floating Arrows flanking each outer side of the slider */}
          <button
            type="button"
            onClick={isRtl ? handleNext : handlePrev}
            aria-label={isRtl ? "Next slide" : "Previous slide"}
            className="hidden sm:flex absolute -left-5 lg:-left-7 top-[46%] -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white shadow-[0_8px_24px_rgba(17,33,23,0.14)] border border-[#E7DFD2] text-[#7D5F28] items-center justify-center hover:bg-[#FAF8F4] hover:border-[#BEA06B] hover:scale-105 active:scale-95 transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#BEA06B]"
          >
            <ArrowLeft className="w-4.5 h-4.5 stroke-[1.8]" />
          </button>

          <button
            type="button"
            onClick={isRtl ? handlePrev : handleNext}
            aria-label={isRtl ? "Previous slide" : "Next slide"}
            className="hidden sm:flex absolute -right-5 lg:-right-7 top-[46%] -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white shadow-[0_8px_24px_rgba(17,33,23,0.14)] border border-[#E7DFD2] text-[#7D5F28] items-center justify-center hover:bg-[#FAF8F4] hover:border-[#BEA06B] hover:scale-105 active:scale-95 transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#BEA06B]"
          >
            <ArrowRight className="w-4.5 h-4.5 stroke-[1.8]" />
          </button>
        </div>

        {/* Bottom Editorial Pagination & Controls */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 mt-6 sm:mt-8 select-none">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="hidden sm:block w-12 sm:w-16 h-px bg-[#EAE3D6]" />
            <div className="flex items-center gap-2">
              {MEDICAL_AREAS.map((area, idx) => (
                <button
                  key={area.id}
                  type="button"
                  onClick={() => handleGoTo(idx)}
                  aria-label={`Go to slide ${idx + 1}: ${area.titles[lang]}`}
                  aria-current={activeIndex === idx ? "true" : undefined}
                  className={`rounded-full transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#BEA06B] focus-visible:outline-offset-2 ${
                    activeIndex === idx
                      ? "w-6 h-2 bg-[#B89650]"
                      : "w-2 h-2 bg-[#E2DACD] hover:bg-[#B89650]/60"
                  }`}
                />
              ))}
            </div>
            <div className="hidden sm:block w-12 sm:w-16 h-px bg-[#EAE3D6]" />
          </div>

          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous slide"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#E7DFD2] bg-white text-[#7D5F28] hover:border-[#B89650] hover:text-[#5B4317] hover:bg-[#FAF8F5] active:scale-95 flex items-center justify-center transition-all cursor-pointer shadow-xs focus-visible:outline-2 focus-visible:outline-[#BEA06B]"
            >
              <ArrowLeft className="w-4 h-4 stroke-[1.8] rtl:rotate-180" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next slide"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#E7DFD2] bg-white text-[#7D5F28] hover:border-[#B89650] hover:text-[#5B4317] hover:bg-[#FAF8F5] active:scale-95 flex items-center justify-center transition-all cursor-pointer shadow-xs focus-visible:outline-2 focus-visible:outline-[#BEA06B]"
            >
              <ArrowRight className="w-4 h-4 stroke-[1.8] rtl:rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
