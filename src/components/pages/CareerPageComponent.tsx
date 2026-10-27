"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { SupportedLocale } from "@/lib/i18n";
import type { RecruitmentPillar } from "@/types/career";
import { getCareerTranslation } from "@/data/career-translations";
import {
  CareerApplicationForm,
  CareerHero,
  CareerJobsSection,
  CareerPillarCatalog,
  CareerPillarModal,
} from "@/components/sections/CareerPageSections";
import {
  ArrowRight,
  Building2,
  ChevronLeft,
  ChevronRight,
  FileText,
  Plane,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";

interface CareerPageComponentProps {
  locale?: SupportedLocale;
}

export function CareerPageComponent({ locale = "de" }: CareerPageComponentProps) {
  // Testimonials state for interactive slider
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Application form state
  const [selectedPosition, setSelectedPosition] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState("");

  // Modal dialog state for recruitment pillars
  const [selectedPillar, setSelectedPillar] = useState<RecruitmentPillar | null>(null);

  // Lock body scroll and handle Escape key for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPillar(null);
      }
    };

    if (selectedPillar) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPillar]);

  const handleSelectJob = (title: string) => {
    setSelectedPosition(title);
    const element = document.getElementById("bewerbung");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleApplyForPillar = (pillar: RecruitmentPillar) => {
    setSelectedPosition(pillar.title);
    setSelectedPillar(null);
    const element = document.getElementById("bewerbung");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  const t = getCareerTranslation(locale);

  return (
    <div className="flex flex-col min-h-screen bg-white text-forest-950 font-sans selection:bg-[#C5A56A]/20 selection:text-forest-950">
      <Header currentLocale={locale} />

      <main className="flex-1">
        <CareerHero locale={locale} t={t} />

        {/* ── SECTION 2: UNSERE MISSION (Matching Reference with Executive Calligraphy) ────── */}
        <section className="py-12 sm:py-16 bg-[#FCFAF7]">
          <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-6 space-y-6">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-forest-950 font-normal leading-tight">
                  {t.mission.title}
                </h2>

                <p className="text-sm sm:text-[15px] text-[#4E5650] leading-[1.8] font-normal">
                  {t.mission.desc}
                </p>

                <div className="pt-6 flex flex-col items-start select-none">
                  <div className="flex items-baseline gap-1.5 sm:gap-2">
                    <span className="font-signature text-4xl sm:text-5xl lg:text-[54px] text-[#142318] tracking-wide font-normal leading-none">
                      NabiOta
                    </span>
                    <span className="text-xs text-[#C5A56A] font-serif -ml-1 -top-3.5 relative font-bold">®</span>
                    <span className="font-signature text-3xl sm:text-4xl lg:text-[42px] text-[#243327] tracking-wide font-normal leading-none">
                      Health Group Germany
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-3 w-64 sm:w-72">
                    <div className="h-[1.5px] bg-[#C5A56A] flex-1 rounded-full" />
                    <span className="text-[11px] sm:text-xs text-[#717A73] tracking-[0.2em] uppercase font-medium">
                      {t.mission.role}
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[16/11] sm:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#EDE7D9]">
                  <Image
                    src="/images/careers/mission-doctors-highres.webp"
                    alt="NabiOta Medical Recruitment Services"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <div className="relative -mt-10 sm:-mt-12 mx-auto max-w-[92%] sm:max-w-md bg-[#FAF7F0] rounded-2xl px-6 py-4 sm:px-7 sm:py-5 shadow-[0_12px_28px_rgba(0,0,0,0.08)] border border-[#EAE3D4] flex items-center gap-4 sm:gap-5 z-20">
                  <div className="flex-shrink-0 text-[#C5A56A]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9 sm:w-10 sm:h-10">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div className="text-xs sm:text-[13.5px] text-[#1C241D] leading-snug">
                    <span className="font-medium block">{t.mission.badgeLine1}</span>
                    <span className="text-[#555C56] block mt-0.5">{t.mission.badgeLine2}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CareerPillarCatalog t={t} onSelect={setSelectedPillar} />

        {/* ── SECTION 4: DER 360°-INTEGRATIONSPFAD (Matching Photo 2 with Right Icon Badges) ────── */}
        <section className="py-14 sm:py-18 lg:py-20 bg-[#07160D] text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden mix-blend-screen">
            <Image
              src="/images/bacground.webp"
              alt="Watermark"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-white font-normal leading-tight mb-4">
                {t.pathwaySection.title}
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl font-light">
                {t.pathwaySection.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
              {t.pathway.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl sm:rounded-3xl p-6 sm:p-7 bg-[#0A2214]/60 border border-[#1E432A] backdrop-blur-xs flex flex-col justify-between space-y-4 hover:border-[#D5B878]/60 transition-all duration-300 group shadow-xs"
                >
                  <div className="space-y-4">
                    {/* Top Row: Left number circle + Right icon circle matching Photo 2 */}
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-full border border-[#D5B878]/70 text-[#ECCF96] font-serif font-bold text-xs sm:text-sm flex items-center justify-center">
                        {item.step}
                      </div>
                      <div className="text-[#ECCF96] flex items-center justify-center">
                        {idx === 0 && <FileText className="w-7 h-7" />}
                        {idx === 1 && <Search className="w-7 h-7" />}
                        {idx === 2 && <Users className="w-7 h-7" />}
                        {idx === 3 && <Building2 className="w-7 h-7" />}
                        {idx === 4 && <Plane className="w-7 h-7" />}
                      </div>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-white/70 leading-relaxed font-sans mt-2">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 5: VORTEILE (WARUM NABIOTA®) ────── */}
        <section className="py-14 sm:py-18 lg:py-20 bg-[#FAF9F6] border-t border-[#EDE8DE]">
          <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-forest-950 font-normal leading-tight mb-4">
                {t.benefits.title}
              </h2>
              <p className="text-sm sm:text-base text-[#4E5650] leading-relaxed max-w-2xl">
                {t.benefits.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {t.benefits.items.map((b, idx) => (
                <div
                  key={idx}
                  className="p-7 sm:p-8 rounded-2xl bg-white border border-[#EAE4D7] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-[#DFC894] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="text-[#C5A56A] mb-5">
                      {idx === 0 && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                      )}
                      {idx === 1 && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                          <path d="M6 12v5c3 3 9 3 12 0v-5" />
                        </svg>
                      )}
                      {idx === 2 && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      )}
                      {idx === 3 && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                      )}
                      {idx === 4 && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                        </svg>
                      )}
                      {idx === 5 && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          <path d="M12 8v8" />
                          <path d="m8.5 12.5 3.5 3.5 3.5-3.5" />
                        </svg>
                      )}
                    </div>
                    <h3 className="font-serif font-bold text-lg text-forest-950 mb-2 leading-snug">
                      {b.title}
                    </h3>
                    <p className="text-xs sm:text-[13.5px] text-[#555C56] leading-relaxed">
                      {b.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CareerJobsSection t={t} onSelectJob={handleSelectJob} />

        {/* ── SECTION 7: RECHTLICHE TRANSPARENZ & COMPLIANCE (§ 6 PDF) ────── */}
        <section className="py-14 sm:py-16 bg-[#F5EFE4] border-t border-[#E6DBC9]">
          <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#142318] font-normal leading-tight mb-3">
                {t.compliance.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#4E5650] leading-relaxed">
                {t.compliance.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
              {t.compliance.points.map((point, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E0D4C0] shadow-xs flex items-start gap-4"
                >
                  <div className="text-[#8D6B27] shrink-0 mt-0.5">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-base font-bold text-[#142318]">
                      {point.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#4E5650] leading-relaxed">
                      {point.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 8: UNSERE KULTUR ────── */}
        <section className="py-10 sm:py-12 bg-[#FAF8F5]">
          <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-[#07160C] text-white overflow-hidden relative shadow-xl border border-white/10">
              <div className="absolute inset-0 pointer-events-none z-0">
                <Image
                  src="/images/values/leaves-bg.webp"
                  alt=""
                  fill
                  className="object-cover object-left opacity-35 mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#07160C]/95 via-[#07160C]/70 to-transparent" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[280px] sm:min-h-[320px] relative z-10">
                <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-center space-y-3.5">
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] text-white font-normal leading-tight">
                    {t.culture.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-light max-w-lg">
                    {t.culture.desc}
                  </p>
                </div>

                <div className="lg:col-span-6 relative min-h-[220px] sm:min-h-[260px] lg:min-h-[320px] overflow-hidden">
                  <Image
                    src="/images/about/hero-doctors.webp"
                    alt="NabiOta Unternehmenskultur und Team"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#07160C] to-transparent pointer-events-none z-10" />
                  <div className="lg:hidden absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#07160C] to-transparent pointer-events-none z-10" />

                  <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 bg-[#FAF7F0] rounded-2xl px-5 py-3 shadow-[0_12px_28px_rgba(0,0,0,0.22)] border border-[#EAE3D4] flex items-center gap-3.5 z-20">
                    <div className="text-[#C5A56A] flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7">
                        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-serif font-bold text-xs sm:text-sm text-forest-950 leading-tight">
                        {t.culture.badgeTitle}
                      </p>
                      <p className="text-[11px] sm:text-xs text-[#5B635C] leading-tight mt-0.5">
                        {t.culture.badgeSub}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 9: EMPLOYEE TESTIMONIAL ────── */}
        <section className="py-12 sm:py-14 lg:py-16 bg-[#FAF7F2] border-t border-[#EDE7D9]">
          <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-14 px-4 sm:px-6">
              <div className="text-7xl sm:text-8xl lg:text-9xl font-serif text-[#C5A56A]/60 select-none leading-none -mb-6 md:mb-0 flex-shrink-0 font-normal drop-shadow-xs">
                ““
              </div>

              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#C5A56A] shadow-md flex-shrink-0">
                <Image
                  src={t.testimonials[activeTestimonial].avatar}
                  alt={t.testimonials[activeTestimonial].author}
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="flex-1 text-center md:text-left space-y-3">
                <p className="font-serif italic text-lg sm:text-xl lg:text-2xl text-forest-950 leading-[1.5]">
                  {t.testimonials[activeTestimonial].quote}
                </p>

                <div>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-forest-950">
                    {t.testimonials[activeTestimonial].author}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#717A73] mt-0.5">
                    {t.testimonials[activeTestimonial].role}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 flex-shrink-0 pt-2 md:pt-0">
                <div className="flex items-center gap-1.5 mr-2">
                  {t.testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTestimonial(i)}
                      aria-label={`Testimonial ${i + 1}`}
                      className={`h-2.5 rounded-full transition-all ${
                        activeTestimonial === i
                          ? "w-7 bg-[#C5A56A]"
                          : "w-2.5 bg-[#D8D2C2] hover:bg-[#B3AB98]"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() =>
                    setActiveTestimonial((prev) =>
                      prev === 0 ? t.testimonials.length - 1 : prev - 1
                    )
                  }
                  aria-label="Previous Testimonial"
                  className="w-12 h-12 rounded-full border-2 border-[#C5A56A]/80 bg-white hover:bg-[#C5A56A] text-[#142318] hover:text-white shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center cursor-pointer group active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={2.2} />
                </button>

                <button
                  onClick={() =>
                    setActiveTestimonial((prev) =>
                      prev === t.testimonials.length - 1 ? 0 : prev + 1
                    )
                  }
                  aria-label="Next Testimonial"
                  className="w-12 h-12 rounded-full border-2 border-[#C5A56A]/80 bg-white hover:bg-[#C5A56A] text-[#142318] hover:text-white shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center cursor-pointer group active:scale-95"
                >
                  <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={2.2} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 10: PRE-FOOTER CTA BANNER ────── */}
        <section className="bg-[#07160D] text-white py-12 sm:py-14 relative overflow-hidden border-t border-[#D5B878]/30">
          <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden mix-blend-screen">
            <Image
              src="/images/bacground.webp"
              alt="Watermark"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-2xl space-y-3">
                <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
                  {t.cta.title}
                </h2>

                <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
                  {t.cta.desc}
                </p>
              </div>

              <div className="flex-shrink-0">
                <a
                  href="#bewerbung"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#07150C] font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all duration-200 hover:scale-[1.02]"
                >
                  <span>{t.cta.button}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <CareerApplicationForm
          t={t}
          selectedPosition={selectedPosition}
          setSelectedPosition={setSelectedPosition}
          formSubmitted={formSubmitted}
          setFormSubmitted={setFormSubmitted}
          isSubmitting={isSubmitting}
          fileName={fileName}
          setFileName={setFileName}
          onSubmit={handleFormSubmit}
        />

        <CareerPillarModal
          t={t}
          pillar={selectedPillar}
          onClose={() => setSelectedPillar(null)}
          onApply={handleApplyForPillar}
        />
      </main>

      <Footer currentLocale={locale} />
    </div>
  );
}
