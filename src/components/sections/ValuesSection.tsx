import React from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Diamond, ShieldCheck, Handshake, Eye, Heart, Lightbulb, LucideIcon } from "lucide-react";
import { getDictionary, SupportedLocale } from "@/lib/i18n";

interface ValuesSectionProps {
  currentLocale?: SupportedLocale;
}

interface ValueItem {
  id: string;
  icon: LucideIcon;
  title: Record<SupportedLocale, string>;
  desc: Record<SupportedLocale, string>;
}

const valuesList: ValueItem[] = [
  {
    id: "qualitaet",
    icon: Diamond,
    title: {
      de: "Qualität",
      en: "Quality",
      ru: "Качество",
    },
    desc: {
      de: "Höchste Standards in allen Bereichen.",
      en: "Highest clinical standards across all divisions.",
      ru: "Высочайшие медицинские и этические стандарты.",
    },
  },
  {
    id: "vertrauen",
    icon: ShieldCheck,
    title: {
      de: "Vertrauen",
      en: "Trust",
      ru: "Доверие",
    },
    desc: {
      de: "Ehrliche und verlässliche Partnerschaften.",
      en: "Honest, reliable and transparent partnerships.",
      ru: "Честное и надежное долгосрочное партнерство.",
    },
  },
  {
    id: "verlaesslichkeit",
    icon: Handshake,
    title: {
      de: "Verlässlichkeit",
      en: "Reliability",
      ru: "Надёжность",
    },
    desc: {
      de: "Beständigkeit in unserem Handeln.",
      en: "Consistency and integrity in our daily actions.",
      ru: "Последовательность и стабильность наших действий.",
    },
  },
  {
    id: "transparenz",
    icon: Eye,
    title: {
      de: "Transparenz",
      en: "Transparency",
      ru: "Прозрачность",
    },
    desc: {
      de: "Offene Kommunikation und klare Prozesse.",
      en: "Open communication and predictable processes.",
      ru: "Открытая коммуникация и понятные процессы.",
    },
  },
  {
    id: "menschlichkeit",
    icon: Heart,
    title: {
      de: "Menschlichkeit",
      en: "Humanity",
      ru: "Человечность",
    },
    desc: {
      de: "Der Mensch steht im Mittelpunkt.",
      en: "Placing people at the center of healthcare.",
      ru: "Человек и забота о нем — в центре нашего внимания.",
    },
  },
  {
    id: "innovation",
    icon: Lightbulb,
    title: {
      de: "Innovation",
      en: "Innovation",
      ru: "Инновации",
    },
    desc: {
      de: "Heute die Lösungen von morgen entwickeln.",
      en: "Developing tomorrow's medical solutions today.",
      ru: "Разрабатываем решения завтрашнего дня уже сегодня.",
    },
  },
];

export function ValuesSection({ currentLocale = "de" }: ValuesSectionProps) {
  const dict = getDictionary(currentLocale);

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 border-b border-[#EAE5DA] overflow-hidden bg-[#FCFAF5]">
      {/* ── Authentic Botanical Leaf Background Image (/images/bacground.png) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/bacground.png"
          alt="Botanical background with leaves and dew drops"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />
        {/* Soft center ambient gradient to ensure crisp typography readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FCFAF5]/30 to-transparent" />
      </div>

      <Container size="wide" className="relative z-10">
        {/* ── Section Header ────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-md">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#BFA267] uppercase block mb-2">
              {dict.values.eyebrow}
            </span>
            <h2 className="font-display text-[30px] sm:text-[38px] lg:text-[44px] font-normal tracking-tight text-[#112117] leading-[1.15]">
              {dict.values.heading}
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-xs sm:text-[13.5px] text-[#5E625A] leading-relaxed font-sans">
              {dict.values.description}
            </p>
          </div>
        </div>

        {/* ── 6 Values in a Single Horizontal Grid with Dividers ─ */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 lg:gap-0 lg:divide-x lg:divide-[#E5DFD4]">
          {valuesList.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.id}
                className="flex flex-col items-center text-center px-2 sm:px-3 lg:px-4 py-2 group"
              >
                {/* Gold outlined circle icon */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border border-[#D5B878] bg-white/60 backdrop-blur-sm flex items-center justify-center text-[#B89650] mb-3.5 shadow-[0_0_12px_rgba(213,184,120,0.18)] transition-all duration-300 group-hover:scale-105 group-hover:border-[#B89650] group-hover:bg-[#B89650]/15">
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>

                <h3 className="font-sans text-[13.5px] sm:text-[14.5px] font-bold text-[#112117] mb-1 group-hover:text-[#BFA267] transition-colors">
                  {val.title[currentLocale]}
                </h3>
                <p className="text-[11px] sm:text-xs text-[#6B6659] leading-relaxed max-w-[150px] mx-auto">
                  {val.desc[currentLocale]}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
