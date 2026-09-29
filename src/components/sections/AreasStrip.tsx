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
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { StatItem } from "@/components/ui/StatItem";
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
    label: {
      de: "Diagnostik",
      en: "Diagnostics",
      ru: "Диагностика",
    },
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
    label: {
      de: "Pflege",
      en: "Nursing & Care",
      ru: "Уход и патронаж",
    },
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

  return (
    <section className="bg-[#FAF8F4] border-y border-forest-900/10 py-6 sm:py-8">
      <Container size="wide">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
          {/* Left: 6 Business Categories Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-6 sm:gap-8 w-full lg:w-auto flex-1">
            {stripItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={`/${currentLocale}/areas/${item.slug}`}
                  className="group flex flex-col items-center text-center p-2 rounded transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-gold-500"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-forest-800 group-hover:text-gold-600 transition-colors mb-2">
                    <Icon className="w-6 h-6 stroke-[1.4]" />
                  </div>
                  <span className="text-xs font-medium text-forest-950 group-hover:text-gold-700 transition-colors leading-tight max-w-[130px]">
                    {item.label[currentLocale]}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Vertical Divider (hidden on mobile) */}
          <div className="hidden lg:block w-[1px] h-14 bg-forest-900/15" />

          {/* Right: 4 Corporate Statistics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 w-full lg:w-auto flex-shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-forest-900/10">
            {dict.strip.stats.map((stat, idx) => (
              <StatItem
                key={idx}
                value={stat.value}
                label={stat.label}
                sublabel={stat.sublabel}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
