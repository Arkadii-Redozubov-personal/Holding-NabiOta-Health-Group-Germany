import React from "react";
import Link from "next/link";
import {
  Stethoscope,
  Microscope,
  HeartPulse,
  Users,
  Network,
  Globe,
  LucideIcon,
  Infinity,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { getDictionary, SupportedLocale } from "@/lib/i18n";

interface StripItem {
  icon: LucideIcon;
  label: Record<SupportedLocale, string>;
  slug: string;
}

const stripItems: StripItem[] = [
  {
    icon: Stethoscope,
    label: {
      de: "Medizinische Fachbereiche",
      en: "Medical Specialties",
      ru: "Медицинские направления",
    },
    slug: "medizinische-fachbereiche",
  },
  {
    icon: Microscope,
    label: { de: "Diagnostik", en: "Diagnostics", ru: "Диагностика" },
    slug: "diagnostik",
  },
  {
    icon: HeartPulse,
    label: {
      de: "Rehabilitation",
      en: "Rehabilitation",
      ru: "Реабилитация",
    },
    slug: "rehabilitation",
  },
  {
    icon: Users,
    label: { de: "Pflege", en: "Nursing & Care", ru: "Уход и патронаж" },
    slug: "pflege",
  },
  {
    icon: Network,
    label: {
      de: "Beratung & Projektentwicklung",
      en: "Consulting & Development",
      ru: "Консалтинг и девелопмент",
    },
    slug: "beratung-projektentwicklung",
  },
  {
    icon: Globe,
    label: {
      de: "Internationale Kooperationen",
      en: "International Cooperation",
      ru: "Международные проекты",
    },
    slug: "internationale-kooperationen",
  },
];

interface AreasStripProps {
  currentLocale?: SupportedLocale;
}

export function AreasStrip({ currentLocale = "de" }: AreasStripProps) {
  const dict = getDictionary(currentLocale);

  // Stats with icons for right side
  const statData = dict.strip.stats;

  return (
    <section className="bg-[#F6F3ED] border-y border-[#E5E0D6] py-5 sm:py-6">
      <Container size="wide">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4">
          {/* Left: 6 category icons */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 flex-1">
            {stripItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={`/${currentLocale}/areas/${item.slug}`}
                  className="group flex flex-col items-center text-center gap-1.5 py-1 transition-transform hover:-translate-y-0.5"
                >
                  <Icon className="w-6 h-6 stroke-[1.3] text-[#6B6556] group-hover:text-[#BEA06B] transition-colors" />
                  <span className="text-[10px] sm:text-[11px] font-medium text-[#3B3929] group-hover:text-[#BEA06B] transition-colors leading-tight max-w-[110px]">
                    {item.label[currentLocale]}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-[1px] h-12 bg-[#D8D3C8]" />

          {/* Right: 4 stats */}
          <div className="grid grid-cols-4 gap-5 sm:gap-8 flex-shrink-0">
            {statData.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center"
              >
                <span className="font-display text-2xl sm:text-3xl font-normal text-[#BEA06B] tracking-tight leading-none">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-[#3B3929] uppercase tracking-wider leading-tight mt-1">
                  {stat.label}
                </span>
              </div>
            ))}

            {/* Infinity icon for "Eine Mission" */}
            <div className="flex flex-col items-center text-center">
              <Infinity className="w-7 h-7 sm:w-8 sm:h-8 text-[#BEA06B] stroke-[1.5]" />
              <span className="text-[10px] sm:text-[11px] font-semibold text-[#3B3929] uppercase tracking-wider leading-tight mt-1">
                {currentLocale === "ru"
                  ? "Одна миссия"
                  : currentLocale === "en"
                  ? "One Mission"
                  : "Eine Mission"}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
