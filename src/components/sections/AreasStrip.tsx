import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { getLocalePath, SupportedLocale } from "@/lib/i18n";
import {
  StethoscopeIcon,
  MicroscopeIcon,
  HeartPulseIcon,
  PflegeIcon,
  OrgChartIcon,
  GlobeIcon,
  ShieldCheckIcon,
  NetworkBoxesIcon,
  TeamIcon,
  InfinityIcon,
} from "@/components/icons/AreasStripIcons";
import {
  areasStripHeadings,
  areasStripStats,
} from "@/data/translations/areas-strip";
import { MEDICAL_AREAS } from "@/data/medical-areas";

interface AreasStripProps {
  currentLocale?: SupportedLocale;
}

const CATEGORY_ICONS = [
  StethoscopeIcon,
  MicroscopeIcon,
  HeartPulseIcon,
  PflegeIcon,
  OrgChartIcon,
  GlobeIcon,
];

const STAT_ICONS = [
  ShieldCheckIcon,
  NetworkBoxesIcon,
  TeamIcon,
  InfinityIcon,
];

export function AreasStrip({ currentLocale = "de" }: AreasStripProps) {
  const heading = areasStripHeadings[currentLocale] || areasStripHeadings.de;

  const categories = MEDICAL_AREAS.map((area, idx) => ({
    icon: CATEGORY_ICONS[idx] || StethoscopeIcon,
    slug: area.slug,
    label: area.stripLabels[currentLocale] || area.stripLabels.de,
  }));

  const stats = areasStripStats.map((stat, idx) => ({
    icon: STAT_ICONS[idx] || ShieldCheckIcon,
    number: stat.number,
    title: stat.titles[currentLocale] || stat.titles.de,
    subtitle: stat.subtitles[currentLocale] || stat.subtitles.de,
  }));

  return (
    <div className="w-full max-w-full overflow-hidden select-none">
      {/* ═══════════ ROW 1: White/Cream Areas Grid Section (Compact Height) ═══════════ */}
      <div className="bg-[#FFFFFF] border-t border-[#EDE8DE] py-3.5 sm:py-4 lg:py-4.5">
        <Container size="wide">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6 xl:gap-8">
            {/* Left: Heading block */}
            <div className="flex-shrink-0 w-full lg:w-[260px] xl:w-[290px] text-left">
              <h2 className="font-display text-[22px] sm:text-[25px] lg:text-[28px] font-medium leading-[1.12] tracking-[-0.01em] text-[#142318]">
                {heading}
              </h2>
            </div>

            {/* Right: 6 Category Cards */}
            <div className="flex-1 w-full grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-1.5 sm:gap-2.5 xl:gap-3">
              {categories.map((cat, idx) => {
                const IconComp = cat.icon;
                return (
                  <Link
                    key={idx}
                    href={getLocalePath(currentLocale, `areas/${cat.slug}`)}
                    className="group bg-[#FAF8F3]/60 hover:bg-[#F3EFE6] border border-[#EFECE3]/70 hover:border-[#DFD5C2] rounded-xl sm:rounded-2xl px-1.5 py-2 sm:px-2.5 sm:py-3.5 flex flex-col items-center justify-between text-center min-h-[102px] sm:min-h-[132px] transition-all duration-200 hover:shadow-sm"
                  >
                    {/* Icon without circle */}
                    <div className="text-[#1A261D] group-hover:text-[#9C8145] transition-colors mb-1.5 flex items-center justify-center flex-shrink-0">
                      <IconComp className="w-7.5 h-7.5 sm:w-9 sm:h-9 stroke-[1.5]" />
                    </div>

                    {/* Centered Category Label */}
                    <span className="text-[10px] sm:text-[12.5px] xl:text-[13px] font-bold text-[#18261C] leading-[1.18] text-center whitespace-pre-line px-0.5 my-auto">
                      {cat.label}
                    </span>

                    {/* Gold Arrow at bottom */}
                    <span className="text-[#C5A56A] font-bold text-[10px] sm:text-sm leading-none mt-0.5 transition-transform duration-200 group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </div>

      {/* ═══════════ ROW 2: Deep Forest Green Stats Bar ═══════════ */}
      <div className="bg-[#07160D] border-t border-[#122E1B] py-4 sm:py-5 lg:py-6">
        <Container size="wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-0 lg:divide-x lg:divide-white/10">
            {stats.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 sm:gap-4 px-3 sm:px-4 lg:px-6 xl:px-8"
                >
                  <div className="text-[#ECCF96] flex items-center justify-center flex-shrink-0">
                    <IconComp className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.5]" />
                  </div>

                  <div className="flex-1 min-w-0">
                    {stat.number ? (
                      <div>
                        <div className="flex items-baseline gap-1.5 flex-wrap">
                          <span className="font-sans font-bold text-[18px] sm:text-[20px] text-white leading-none">
                            {stat.number}
                          </span>
                          <span className="text-[13px] sm:text-[13.5px] font-bold text-white leading-tight">
                            {stat.title}
                          </span>
                        </div>
                        <span className="block text-[11px] sm:text-[11.5px] text-[#A2B3A7] leading-snug mt-1">
                          {stat.subtitle}
                        </span>
                      </div>
                    ) : (
                      <div>
                        <span className="block text-[13px] sm:text-[13.5px] font-bold text-white leading-tight">
                          {stat.title}
                        </span>
                        <span className="block text-[11px] sm:text-[11.5px] text-[#A2B3A7] leading-snug mt-1">
                          {stat.subtitle}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </div>
  );
}
