import React from "react";
import { Container } from "@/components/layout/Container";
import { AreaCategoryCard } from "@/components/ui/AreaCategoryCard";
import { MobileSnapSlider } from "@/components/ui/MobileSnapSlider";
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
      <div className="bg-[#FFFFFF] border-t border-[#EDE8DE] pt-6 pb-4 sm:py-4 lg:py-4.5">
        <Container size="wide">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6 xl:gap-8">
            {/* Left: Heading block */}
            <div className="flex-shrink-0 w-full lg:w-[260px] xl:w-[290px] text-left">
              <h2 className="font-display text-[22px] sm:text-[25px] lg:text-[28px] font-semibold lg:font-medium leading-[1.15] tracking-[-0.01em] text-[#142318]">
                {heading}
              </h2>
            </div>

            {/* Right: 6 category cards — swipe slider on mobile, grid from sm up */}
            <MobileSnapSlider
              className="flex-1 w-full"
              trackClassName="gap-2.5 sm:grid sm:grid-cols-3 lg:grid-cols-6 xl:gap-3 sm:overflow-visible"
              slideClassName="w-[calc((100%-1.25rem)/3)] sm:w-auto"
            >
              {categories.map((cat) => (
                <AreaCategoryCard
                  key={cat.slug}
                  href={getLocalePath(currentLocale, `areas/${cat.slug}`)}
                  label={cat.label}
                  icon={cat.icon}
                  className="h-full"
                />
              ))}
            </MobileSnapSlider>
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
