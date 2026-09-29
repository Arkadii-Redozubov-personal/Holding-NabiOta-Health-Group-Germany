import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SupportedLocale } from "@/lib/i18n";

interface AreasStripProps {
  currentLocale?: SupportedLocale;
}

/* ── Custom SVGs matching reference Photo exactly ───────────────── */

// 1. Stethoscope
function StethoscopeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 4.5v5.5a7 7 0 0 0 14 0V4.5" />
      <path d="M5.5 4.5h3M19.5 4.5h3" />
      <path d="M14 17v2.5a4.5 4.5 0 0 0 9 0v-1" />
      <circle cx="23" cy="18.5" r="2.2" />
    </svg>
  );
}

// 2. Microscope
function MicroscopeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 23.5h14" />
      <path d="M11 20.5h6" />
      <path d="M14 20.5v-4" />
      <rect
        x="13"
        y="4"
        width="5"
        height="8.5"
        rx="1.5"
        transform="rotate(45 15.5 8.25)"
      />
      <path d="M17 9.5l-4 4" />
      <path d="M19.5 15.5a5 5 0 0 1-5.5 5" />
      <circle cx="10" cy="16.5" r="1.5" />
    </svg>
  );
}

// 3. Heart with ECG pulse inside
function HeartPulseIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22.5 12.5 C24 9 22.5 5.5 19 4.8 C16.5 4.2 14.5 6.2 14 7 C13.5 6.2 11.5 4.2 9 4.8 C5.5 5.5 4 9 5.5 12.5 C7.5 16.5 14 23 14 23 C14 23 20.5 16.5 22.5 12.5 Z" />
      <path d="M8 12.5 h2.5 l1.8 -3.2 l2.2 6.5 l2 -4.3 h2.2" />
    </svg>
  );
}

// 4. Pflege: 3 people bust outline (matching screenshot)
function PflegeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Center person */}
      <circle cx="14" cy="9" r="3" />
      <path d="M8.5 21.5c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5" />
      {/* Left person */}
      <circle cx="7.5" cy="11.5" r="2.2" />
      <path d="M3 21.5c0-2.2 1.8-4 4-4.2" />
      {/* Right person */}
      <circle cx="20.5" cy="11.5" r="2.2" />
      <path d="M21 17.3c2.2.2 4 2 4 4.2" />
    </svg>
  );
}

// 5. Org Chart: 1 box top, line down, 3 boxes bottom
function OrgChartIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="11" y="3.5" width="6" height="5" rx="0.75" />
      <path d="M14 8.5v3.5" />
      <path d="M6 12h16" />
      <path d="M6 12v3.5M14 12v3.5M22 12v3.5" />
      <rect x="3" y="15.5" width="6" height="5" rx="0.75" />
      <rect x="11" y="15.5" width="6" height="5" rx="0.75" />
      <rect x="19" y="15.5" width="6" height="5" rx="0.75" />
    </svg>
  );
}

// 6. Globe with latitude & longitude lines
function GlobeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="14" cy="14" r="9.5" />
      <path d="M4.5 14h19" />
      <ellipse cx="14" cy="14" rx="4.8" ry="9.5" />
    </svg>
  );
}

// Infinity icon for "Eine Mission"
function InfinityIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M23 11c3.5 0 5 2.5 5 5s-1.5 5-5 5c-4 0-6.5-5-9-5s-5 5-9 5c-3.5 0-5-2.5-5-5s1.5-5 5-5c4 0 6.5 5 9 5s5-5 9-5Z" />
    </svg>
  );
}

export function AreasStrip({ currentLocale = "de" }: AreasStripProps) {
  const categories = [
    {
      icon: StethoscopeIcon,
      slug: "medizinische-fachbereiche",
      label:
        currentLocale === "ru"
          ? "Медицинские направления"
          : currentLocale === "en"
          ? "Medical Specialties"
          : "Medizinische Fachbereiche",
    },
    {
      icon: MicroscopeIcon,
      slug: "diagnostik",
      label:
        currentLocale === "ru"
          ? "Диагностика"
          : currentLocale === "en"
          ? "Diagnostics"
          : "Diagnostik",
    },
    {
      icon: HeartPulseIcon,
      slug: "rehabilitation",
      label:
        currentLocale === "ru"
          ? "Реабилитация"
          : currentLocale === "en"
          ? "Rehabilitation"
          : "Rehabilitation",
    },
    {
      icon: PflegeIcon,
      slug: "pflege",
      label:
        currentLocale === "ru"
          ? "Уход и патронаж"
          : currentLocale === "en"
          ? "Nursing & Care"
          : "Pflege",
    },
    {
      icon: OrgChartIcon,
      slug: "beratung-projektentwicklung",
      label:
        currentLocale === "ru"
          ? "Консалтинг и проекты"
          : currentLocale === "en"
          ? "Consulting & Projects"
          : "Beratung & Projektentwicklung",
    },
    {
      icon: GlobeIcon,
      slug: "internationale-kooperationen",
      label:
        currentLocale === "ru"
          ? "Международное сотрудничество"
          : currentLocale === "en"
          ? "International Cooperation"
          : "Internationale Kooperationen",
    },
  ];

  const stats = [
    {
      num: "1",
      label:
        currentLocale === "ru"
          ? "Starke Marke"
          : currentLocale === "en"
          ? "Strong Brand"
          : "Starke Marke",
    },
    {
      num: "6+",
      label:
        currentLocale === "ru"
          ? "Unternehmensbereiche"
          : currentLocale === "en"
          ? "Divisions"
          : "Unternehmensbereiche",
    },
    {
      num: "100+",
      label:
        currentLocale === "ru"
          ? "Experten im Netzwerk"
          : currentLocale === "en"
          ? "Network Experts"
          : "Experten im Netzwerk",
    },
    {
      num: "inf",
      label:
        currentLocale === "ru"
          ? "Eine Mission"
          : currentLocale === "en"
          ? "One Mission"
          : "Eine Mission",
    },
  ];

  return (
    <div className="w-full bg-[#FCFAF6] border-t border-[#EAE5DA] py-2 sm:py-2.5 lg:py-3 overflow-x-auto shadow-[0_-2px_12px_rgba(0,0,0,0.03)]">
      <Container size="wide">
        <div className="flex items-center justify-between min-w-[980px] lg:min-w-0">
          {/* ── Left: 6 Category Icons with Labels ──────────── */}
          <div className="flex items-center justify-between flex-1 gap-2 xl:gap-3">
            {categories.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <Link
                  key={idx}
                  href={`/${currentLocale}/areas/${cat.slug}`}
                  className="group flex flex-col items-center text-center gap-1 px-1.5 py-0.5 transition-all duration-200 hover:-translate-y-0.5 flex-1"
                >
                  <div className="w-7 h-7 flex items-center justify-center text-[#554F42] group-hover:text-[#BFA267] transition-colors">
                    <IconComp className="w-5 h-5 stroke-[1.25]" />
                  </div>
                  <span className="text-[10px] xl:text-[10.5px] font-medium text-[#2C2A24] group-hover:text-[#BFA267] transition-colors leading-[1.2] text-center max-w-[105px]">
                    {cat.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* ── Vertical Hairline Divider ──────────────────── */}
          <div className="w-[1px] h-9 bg-[#D8D0BF] mx-3 xl:mx-5 flex-shrink-0" />

          {/* ── Right: 4 Stats in one horizontal row ───────── */}
          <div className="flex items-center gap-5 xl:gap-7 flex-shrink-0 pr-1">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center min-w-[65px] xl:min-w-[80px]"
              >
                {stat.num === "inf" ? (
                  <div className="h-6 xl:h-7 flex items-center justify-center text-[#BFA267]">
                    <InfinityIcon className="w-6 h-6 xl:w-7 xl:h-7 stroke-[1.4]" />
                  </div>
                ) : (
                  <span className="font-display text-[22px] xl:text-[26px] font-normal text-[#BFA267] leading-none tracking-tight">
                    {stat.num}
                  </span>
                )}
                <span className="text-[9px] xl:text-[10px] font-semibold text-[#2C2A24] tracking-normal whitespace-nowrap mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
