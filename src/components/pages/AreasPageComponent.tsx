"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Stethoscope,
  Microscope,
  HeartPulse,
  Users,
  Briefcase,
  Globe,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Heart,
  Lightbulb,
} from "@/lib/icons";
import { Container } from "@/components/layout/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { SupportedLocale } from "@/lib/i18n";
import {
  areasHero,
  areasIntro,
  areasDivisions,
  areasWhyNabiota,
  areasPatientStories,
  areasCta,
} from "@/data/translations/areas-page";

// ── Small decorative SVG icons ─────────────────────────────────────────────
function QualityHeartIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function CollaborationIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 4.5C10.5 4.5 9 5.5 9 7.5c0 2.2 3 4.5 3 4.5s3-2.3 3-4.5c0-2-1.5-3-3-3Z" />
      <path d="M12 19.5c1.5 0 3-1 3-3 0-2.2-3-4.5-3-4.5s-3 2.3-3 4.5c0 2 1.5 3 3 3Z" />
      <path d="M4.5 12C4.5 10.5 5.5 9 7.5 9c2.2 0 4.5 3 4.5 3s-2.3 3-4.5 3c-2 0-3-1.5-3-3Z" />
      <path d="M19.5 12c0 1.5-1 3-3 3-2.2 0-4.5-3-4.5-3s2.3-3 4.5-3c2 0 3 1.5 3 3Z" />
      <circle cx="12" cy="12" r="1.5" />
    </svg>
  );
}

function TechnologyIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="8" cy="8" r="2.2" />
      <circle cx="16" cy="8" r="2.2" />
      <circle cx="8" cy="16" r="2.2" />
      <circle cx="16" cy="16" r="2.2" />
      <path d="M10.2 8h3.6M8 10.2v3.6M16 10.2v3.6M10.2 16h3.6" />
    </svg>
  );
}

function CarePeopleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="8" r="2.5" />
      <path d="M7 19v-2a5 5 0 0 1 10 0v2" />
      <circle cx="5" cy="11" r="1.8" />
      <path d="M2.5 19v-1.5a3.5 3.5 0 0 1 3.5-3.5" />
      <circle cx="19" cy="11" r="1.8" />
      <path d="M21.5 19v-1.5a3.5 3.5 0 0 0-3.5-3.5" />
    </svg>
  );
}

// Icon map matching division slugs
const DIVISION_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "medizinische-fachbereiche": Stethoscope,
  "diagnostik": Microscope,
  "rehabilitation": HeartPulse,
  "pflege": Users,
  "beratung-projektentwicklung": Briefcase,
  "internationale-kooperationen": Globe,
};

interface AreasPageComponentProps {
  locale: SupportedLocale;
}

export function AreasPageComponent({ locale }: AreasPageComponentProps) {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const l = locale;

  const totalStories = areasPatientStories.stories.length;
  const currentFirstStory = areasPatientStories.stories[activeStoryIndex];
  const currentSecondStory = areasPatientStories.stories[(activeStoryIndex + 1) % totalStories];

  const handleNextStory = () => setActiveStoryIndex((prev) => (prev + 1) % totalStories);
  const handlePrevStory = () => setActiveStoryIndex((prev) => (prev - 1 + totalStories) % totalStories);

  const heroBadges = [
    {
      icon: <Users className="w-5 h-5 text-[#ECCF96]" />,
      title: areasHero.badge1Title[l],
      sub: areasHero.badge1Sub[l],
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#ECCF96]" />,
      title: areasHero.badge2Title[l],
      sub: areasHero.badge2Sub[l],
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-[#ECCF96]" />,
      title: areasHero.badge3Title[l],
      sub: areasHero.badge3Sub[l],
    },
  ];

  const introFeatures = [
    { icon: QualityHeartIcon, label: areasIntro.featureQuality[l] },
    { icon: CollaborationIcon, label: areasIntro.featureCollaboration[l] },
    { icon: TechnologyIcon, label: areasIntro.featureTechnology[l] },
    { icon: CarePeopleIcon, label: areasIntro.featureCare[l] },
  ];

  const whyPillars = [
    { icon: Users, title: areasWhyNabiota.pillarCollaborationTitle[l], desc: areasWhyNabiota.pillarCollaborationDesc[l] },
    { icon: ShieldCheck, title: areasWhyNabiota.pillarQualityTitle[l], desc: areasWhyNabiota.pillarQualityDesc[l] },
    { icon: Lightbulb, title: areasWhyNabiota.pillarInnovationTitle[l], desc: areasWhyNabiota.pillarInnovationDesc[l] },
    { icon: Heart, title: areasWhyNabiota.pillarPeopleTitle[l], desc: areasWhyNabiota.pillarPeopleDesc[l] },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentLocale={locale} />

      {/* ── Page Hero with Badges ── */}
      <PageHero
        locale={locale}
        title={areasHero.title[l]}
        description={areasHero.description[l]}
        badges={heroBadges}
        imageSrc="/images/heroes/hero-areas.webp"
        imageAlt="NabiOta Health Group Germany Unternehmensbereiche"
      />

      <main className="flex-1 bg-[#FAF8F5]">
        {/* ══════════════════════════════════════════════════════════
            SECTION 1: SPECIALIZED CARE FOR EVERY NEED + 6 CARDS GRID
        ══════════════════════════════════════════════════════════ */}
        <section className="relative w-full overflow-hidden bg-[#FAF8F5]">
          {/* Top panoramic banner */}
          <div className="w-full relative overflow-hidden py-12 sm:py-16 lg:py-20 border-b border-[#EDE8DE]/70">
            <div className="absolute inset-0 pointer-events-none select-none z-0">
              <Image
                src="/images/areas/facilities-cooperation-bg.webp"
                alt="Our Specialties"
                fill
                className="object-cover object-bottom sm:object-center"
                priority
                unoptimized
              />
            </div>

            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column */}
                <div className="lg:col-span-5 space-y-4">
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#142318] font-normal leading-[1.16] whitespace-pre-line">
                    {areasIntro.title[l]}
                  </h2>

                  <p className="text-xs sm:text-[13.5px] text-[#4E5650] leading-relaxed font-sans max-w-md">
                    {areasIntro.description[l]}
                  </p>

                  <div className="pt-2">
                    <a
                      href="#divisions-grid"
                      className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-[#8C9886] bg-white/75 hover:bg-[#142318] hover:text-white hover:border-[#142318] text-[#2C3B2E] font-medium text-xs sm:text-[13px] tracking-wide shadow-xs transition-all duration-200"
                    >
                      <span>{areasIntro.btn[l]}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Right Column: feature badges */}
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    {introFeatures.map((item, idx) => {
                      const FeatureIcon = item.icon;
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/75 backdrop-blur-xs border border-[#EDE8DE] hover:border-[#D5B878]/60 hover:bg-white/95 transition-all shadow-xs"
                        >
                          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#D5B878]/60 bg-white/95 flex items-center justify-center text-[#9E7D3B] shrink-0 shadow-2xs">
                            <FeatureIcon className="w-5 h-5 stroke-[1.6]" />
                          </div>
                          <span className="text-[12px] sm:text-[13px] font-medium text-[#2C3B2E] leading-snug">
                            {item.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6 Cards Grid */}
          <Container size="wide" className="py-12 sm:py-16">
            <div id="divisions-grid" className="scroll-mt-24 mb-6 sm:mb-8" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {areasDivisions.map((item) => {
                const ItemIcon = DIVISION_ICONS[item.slug] || Stethoscope;
                return (
                  <Link
                    key={item.id}
                    href={`/${locale}/areas/${item.slug}`}
                    className="group bg-white rounded-2xl p-3 sm:p-3.5 border border-[#EDE8DE] hover:border-[#D5B878] shadow-[0_3px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(213,184,120,0.14)] transition-all duration-300 flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#0C1C11]/5">
                      <Image
                        src={item.image}
                        alt={item.title[l]}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    {/* Card Content Row */}
                    <div className="pt-3.5 pb-1.5 px-1 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#FAF3E8] border border-[#E8DFC8] flex items-center justify-center text-[#9E7D3B] shadow-2xs shrink-0 group-hover:bg-[#F0E5CD] group-hover:border-[#D5B878] group-hover:scale-105 transition-all">
                          <ItemIcon className="w-5.5 h-5.5 sm:w-6 sm:h-6 stroke-[1.6]" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-[14.5px] sm:text-[15px] font-bold text-[#142318] group-hover:text-[#B89650] transition-colors truncate">
                            {item.title[l]}
                          </h3>
                          <p className="text-[11.5px] text-[#6E756D] leading-snug line-clamp-2 mt-0.5 font-sans">
                            {item.desc[l]}
                          </p>
                        </div>
                      </div>

                      <div className="w-8 h-8 rounded-full border border-[#142318]/15 group-hover:border-[#D5B878] group-hover:bg-[#D5B878] group-hover:text-[#0C1C11] flex items-center justify-center text-[#142318] transition-all shrink-0 ml-1">
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 2: WHY NABIOTA
        ══════════════════════════════════════════════════════════ */}
        <section className="w-full relative overflow-hidden py-14 sm:py-18 lg:py-22 my-4 sm:my-6 border-t border-b border-[#EDE8DE]/70">
          <div className="absolute inset-0 pointer-events-none select-none z-0">
            <Image
              src="/images/areas/facilities-cooperation-bg.webp"
              alt="Facilities & Cooperations"
              fill
              className="object-cover object-bottom sm:object-center"
              priority
              unoptimized
            />
          </div>

          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-14 w-full">
              {/* Left Column */}
              <div className="w-full lg:w-[48%] xl:w-[44%]">
                <h2 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-normal text-[#142318] leading-[1.18] mb-3.5 sm:mb-4 whitespace-pre-line">
                  {areasWhyNabiota.title[l]}
                </h2>

                <p className="text-[13px] sm:text-[13.5px] text-[#4E5650] leading-relaxed max-w-xl mb-6 font-sans">
                  {areasWhyNabiota.description[l]}
                </p>

                <Link
                  href={`/${locale}/values`}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#8C9886] bg-white/75 hover:bg-[#142318] hover:text-white hover:border-[#142318] text-[#2C3B2E] text-[12.5px] font-medium tracking-wide transition-all shadow-xs"
                >
                  <span>{areasWhyNabiota.btn[l]}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform" />
                </Link>
              </div>

              {/* Right Column: 4 Pillars */}
              <div className="w-full lg:w-[52%] xl:w-[56%] flex justify-center lg:justify-end">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full max-w-xl lg:max-w-none pt-2 lg:pt-0">
                  {whyPillars.map((pillar, pIdx) => {
                    const PillarIcon = pillar.icon;
                    return (
                      <div
                        key={pIdx}
                        className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white/75 backdrop-blur-xs border border-[#EAE4D7] hover:border-[#D5B878]/70 hover:bg-white transition-all shadow-2xs"
                      >
                        <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full border border-[#D5B878]/60 bg-[#FAF3E8] flex items-center justify-center text-[#9E7D3B] shrink-0 shadow-2xs hover:bg-[#F0E5CD] transition-colors">
                          <PillarIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[1.6]" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-serif text-[15px] sm:text-[16px] font-medium text-[#142318] leading-tight mb-1">
                            {pillar.title}
                          </h3>
                          <p className="text-[12px] sm:text-[12.5px] text-[#4E5650] leading-snug font-sans">
                            {pillar.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 3: PATIENT STORIES
        ══════════════════════════════════════════════════════════ */}
        <section className="py-10 sm:py-12 lg:py-14 bg-[#FAF8F5]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column */}
              <div className="lg:col-span-4 space-y-3">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#132218] font-normal leading-tight whitespace-pre-line">
                  {areasPatientStories.title[l]}
                </h2>

                <p className="text-xs sm:text-sm text-[#556358] leading-relaxed font-sans max-w-sm">
                  {areasPatientStories.desc[l]}
                </p>

                {/* Navigation */}
                <div className="flex items-center gap-3 pt-4 sm:pt-6">
                  <button
                    onClick={handlePrevStory}
                    aria-label="Previous patient story"
                    className="w-8 h-8 rounded-full border border-[#142318]/25 hover:border-[#142318] hover:bg-[#142318] hover:text-white flex items-center justify-center text-[#142318] transition-all cursor-pointer shadow-sm"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handleNextStory}
                    aria-label="Next patient story"
                    className="w-8 h-8 rounded-full border border-[#142318]/25 hover:border-[#142318] hover:bg-[#142318] hover:text-white flex items-center justify-center text-[#142318] transition-all cursor-pointer shadow-sm"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2.5 pl-3 text-xs font-mono font-medium text-[#7C857E]">
                    {areasPatientStories.stories.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveStoryIndex(idx)}
                        className={`transition-all cursor-pointer ${
                          activeStoryIndex === idx
                            ? "text-[#142318] font-bold text-sm underline decoration-[#D5B878] underline-offset-4"
                            : "hover:text-[#142318]"
                        }`}
                      >
                        0{idx + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Story Cards */}
              <div className="lg:col-span-8 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  {[currentFirstStory, currentSecondStory].map((story, idx) => (
                    <div
                      key={`${story.id}-${idx}`}
                      className="bg-white rounded-2xl border border-[#EDE8DE] p-4 sm:p-5 shadow-[0_4px_16px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row gap-4 sm:gap-5 items-stretch transition-all duration-300"
                    >
                      <div className="relative w-full sm:w-44 md:w-48 h-52 sm:h-60 rounded-xl overflow-hidden shrink-0 shadow-sm border border-[#EDE8DE]">
                        <Image
                          src={story.photo}
                          alt={story.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 240px"
                        />
                      </div>

                      <div className="flex flex-col justify-between py-1">
                        <div>
                          <span className="font-serif text-3xl sm:text-4xl text-[#D5B878] leading-none block select-none mb-1">
                            &ldquo;
                          </span>
                          <p className="text-xs sm:text-[12.5px] text-[#556358] leading-relaxed font-sans italic">
                            &ldquo;{story.quote[l]}&rdquo;
                          </p>
                        </div>

                        <div className="pt-3 border-t border-[#EDE8DE]/60 mt-2">
                          <h4 className="font-bold text-sm text-[#142318]">{story.name}</h4>
                          <span className="text-[11px] text-[#869088] font-sans block">{story.role[l]}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleNextStory}
                  aria-label="Next story"
                  className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border border-[#142318]/20 shadow-md items-center justify-center text-[#142318] hover:bg-[#D5B878] hover:border-[#D5B878] hover:text-[#0C1C11] transition-all cursor-pointer"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 4: CTA BANNER WITH MOUNTAINS
        ══════════════════════════════════════════════════════════ */}
        <section className="relative w-full overflow-hidden border-y border-[#D5B878]/60 bg-[#08170D]">
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/images/values/mountains-bg.webp"
              alt="Mountain Forest Landscape"
              fill
              className="object-cover object-[center_60%]"
              priority
            />
            <div className="absolute inset-0 bg-[#06140B]/55 backdrop-blur-[0.5px]" />
          </div>

          <Container size="wide" className="relative z-10 py-10 sm:py-12 lg:py-14">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10">
              <div className="space-y-1.5 lg:max-w-xs shrink-0">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] text-white font-normal leading-[1.2] whitespace-pre-line">
                  {areasCta.title[l]}
                </h2>
              </div>

              <div className="max-w-md lg:max-w-lg">
                <p className="text-xs sm:text-[13.5px] text-white/85 leading-relaxed font-sans">
                  {areasCta.desc[l]}
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#07150C] font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all duration-200 hover:scale-[1.03]"
                >
                  <span>{areasCta.btn[l]}</span>
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
