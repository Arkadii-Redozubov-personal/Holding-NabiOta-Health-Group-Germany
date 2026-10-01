import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { getDictionary, SupportedLocale } from "@/lib/i18n";

interface AreasStripProps {
  currentLocale?: SupportedLocale;
}

/* ── Custom SVGs matching Reference Photo 1:1 ────────────────────────── */

// 1. Stethoscope
function StethoscopeIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
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
function MicroscopeIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 23.5h16" />
      <path d="M10 20.5h8" />
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

// 3. Heart with ECG pulse inside (Rehabilitation)
function HeartPulseIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22.5 12.5 C24 9 22.5 5.5 19 4.8 C16.5 4.2 14.5 6.2 14 7 C13.5 6.2 11.5 4.2 9 4.8 C5.5 5.5 4 9 5.5 12.5 C7.5 16.5 14 23 14 23 C14 23 20.5 16.5 22.5 12.5 Z" />
      <path d="M8.5 13.5 h2 l1.5 -3 l2 5.5 l1.8 -3.5 h2.2" />
    </svg>
  );
}

// 4. Pflege: 3 people bust outline
function PflegeIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="14" cy="9" r="3" />
      <path d="M8.5 21.5c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5" />
      <circle cx="7.5" cy="11.5" r="2.2" />
      <path d="M3 21.5c0-2.2 1.8-4 4-4.2" />
      <circle cx="20.5" cy="11.5" r="2.2" />
      <path d="M21 17.3c2.2.2 4 2 4 4.2" />
    </svg>
  );
}

// 5. Org Chart: 1 box top, 3 boxes bottom (Beratung & Projektentwicklung)
function OrgChartIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
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

// 6. Globe with latitude & longitude lines (Internationale Kooperationen)
function GlobeIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
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

// Stats Icon 1: Shield with checkmark (Starke Marke)
function ShieldCheckIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M14 3.5 L4.5 7.5 L4.5 13.5 C4.5 19.5 8.5 23.5 14 25.5 C19.5 23.5 23.5 19.5 23.5 13.5 L23.5 7.5 Z" />
      <path d="M10 13.5 L12.8 16.5 L18 10.5" />
    </svg>
  );
}

// Stats Icon 2: 3 Network Boxes (6+ Unternehmensbereiche)
function NetworkBoxesIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="11" y="4" width="6" height="5" rx="0.75" />
      <path d="M14 9v4" />
      <path d="M7 13h14" />
      <path d="M7 13v4M21 13v4" />
      <rect x="4" y="17" width="6" height="5" rx="0.75" />
      <rect x="18" y="17" width="6" height="5" rx="0.75" />
    </svg>
  );
}

// Stats Icon 3: Team People (100+ Experten)
function TeamIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="14" cy="9" r="3" />
      <path d="M8.5 21.5c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5" />
      <circle cx="7.5" cy="11.5" r="2.2" />
      <path d="M3 21.5c0-2.2 1.8-4 4-4.2" />
      <circle cx="20.5" cy="11.5" r="2.2" />
      <path d="M21 17.3c2.2.2 4 2 4 4.2" />
    </svg>
  );
}

// Stats Icon 4: Infinity Icon (Eine Mission)
function InfinityIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M23 11c3.5 0 5 2.5 5 5s-1.5 5-5 5c-4 0-6.5-5-9-5s-5 5-9 5c-3.5 0-5-2.5-5-5s1.5-5 5-5c4 0 6.5 5 9 5s5-5 9-5Z" />
    </svg>
  );
}

export function AreasStrip({ currentLocale = "de" }: AreasStripProps) {
  const dict = getDictionary(currentLocale);

  const categories = [
    {
      icon: StethoscopeIcon,
      slug: "medizinische-fachbereiche",
      label:
        currentLocale === "ru"
          ? "Медицинские\nнаправления"
          : currentLocale === "en"
          ? "Medical\nSpecialties"
          : "Medizinische\nFachbereiche",
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
          ? "Уход и\nпатронаж"
          : currentLocale === "en"
          ? "Nursing &\nCare"
          : "Pflege",
    },
    {
      icon: OrgChartIcon,
      slug: "beratung-projektentwicklung",
      label:
        currentLocale === "ru"
          ? "Консалтинг &\nпроекты"
          : currentLocale === "en"
          ? "Consulting &\nDevelopment"
          : "Beratung &\nProjektentwicklung",
    },
    {
      icon: GlobeIcon,
      slug: "internationale-kooperationen",
      label:
        currentLocale === "ru"
          ? "Международное\nсотрудничество"
          : currentLocale === "en"
          ? "International\nCooperation"
          : "Internationale\nKooperationen",
    },
  ];

  const stats = [
    {
      icon: ShieldCheckIcon,
      number: null,
      title:
        currentLocale === "ru"
          ? "Сильный бренд"
          : currentLocale === "en"
          ? "Strong Brand"
          : "Starke Marke",
      subtitle:
        currentLocale === "ru"
          ? "Для более здорового общества."
          : currentLocale === "en"
          ? "For a healthier society."
          : "Für eine gesündere Gesellschaft.",
    },
    {
      icon: NetworkBoxesIcon,
      number: "6+",
      title:
        currentLocale === "ru"
          ? "Направлений бизнеса"
          : currentLocale === "en"
          ? "Business Divisions"
          : "Unternehmensbereiche",
      subtitle:
        currentLocale === "ru"
          ? "Компетенции под одной крышей."
          : currentLocale === "en"
          ? "Competence under one roof."
          : "Kompetenz unter einem Dach.",
    },
    {
      icon: TeamIcon,
      number: "100+",
      title:
        currentLocale === "ru"
          ? "Экспертов в сети"
          : currentLocale === "en"
          ? "Experts in Network"
          : "Experten im Netzwerk",
      subtitle:
        currentLocale === "ru"
          ? "Опыт. Вовлеченность. Результат."
          : currentLocale === "en"
          ? "Experience. Commitment. Impact."
          : "Erfahrung. Engagement. Wirkung.",
    },
    {
      icon: InfinityIcon,
      number: null,
      title:
        currentLocale === "ru"
          ? "Одна миссия"
          : currentLocale === "en"
          ? "One Mission"
          : "Eine Mission",
      subtitle:
        currentLocale === "ru"
          ? "Устойчивое здравоохранение для будущих поколений."
          : currentLocale === "en"
          ? "Sustainable healthcare for coming generations."
          : "Nachhaltige Gesundheitsversorgung für kommende Generationen.",
    },
  ];

  return (
    <div className="w-full max-w-full overflow-hidden select-none">
      {/* ═══════════ ROW 1: White/Cream Areas Grid Section (Compact Height) ═══════════ */}
      <div className="bg-[#FFFFFF] border-t border-[#EDE8DE] py-3.5 sm:py-4 lg:py-4.5">
        <Container size="wide">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6 xl:gap-8">
            {/* Left: Heading block */}
            <div className="flex-shrink-0 w-full lg:w-[260px] xl:w-[290px] text-left">
              <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.22em] text-[#C5A56A] uppercase block mb-1">
                {currentLocale === "ru"
                  ? "НАШИ НАПРАВЛЕНИЯ"
                  : currentLocale === "en"
                  ? "OUR DIVISIONS"
                  : "UNSERE BEREICHE"}
              </span>
              <h2 className="font-display text-[22px] sm:text-[25px] lg:text-[28px] font-medium leading-[1.12] tracking-[-0.01em] text-[#142318]">
                {currentLocale === "ru" ? (
                  <>Многогранная компетенция для здорового будущего.</>
                ) : currentLocale === "en" ? (
                  <>Diverse expertise for a healthier future.</>
                ) : (
                  <>
                    Vielfältige Kompetenz
                    <br />
                    für eine gesündere Zukunft.
                  </>
                )}
              </h2>
            </div>

            {/* Right: 6 Category Cards arranged into 3 cards per row on mobile matching user request */}
            <div className="flex-1 w-full grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-1.5 sm:gap-2.5 xl:gap-3">
              {categories.map((cat, idx) => {
                const IconComp = cat.icon;
                return (
                  <Link
                    key={idx}
                    href={`/${currentLocale}/areas/${cat.slug}`}
                    className="group bg-[#FAF8F3]/60 hover:bg-[#F3EFE6] border border-[#EFECE3]/70 hover:border-[#DFD5C2] rounded-xl sm:rounded-2xl px-1.5 py-2 sm:px-2.5 sm:py-3.5 flex flex-col items-center justify-between text-center min-h-[102px] sm:min-h-[132px] transition-all duration-200 hover:shadow-sm"
                  >
                    {/* Icon inside soft circular disc */}
                    <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#F3EEE3]/80 group-hover:bg-[#EBE3D3] flex items-center justify-center text-[#1A261D] group-hover:text-black transition-all mb-1 flex-shrink-0">
                      <IconComp className="w-5 h-5 sm:w-6.5 sm:h-6.5 stroke-[1.6]" />
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

      {/* ═══════════ ROW 2: Deep Forest Green Stats Bar (Generous Height & Padding) ═══════════ */}
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
                  {/* Gold outlined circle icon (larger size & warm glow) */}
                  <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full border border-[#D8BC7E]/80 bg-[#142A1D]/60 text-[#ECCF96] flex items-center justify-center flex-shrink-0 shadow-[0_0_12px_rgba(216,188,126,0.18)]">
                    <IconComp className="w-6 h-6 sm:w-6.5 sm:h-6.5 stroke-[1.6]" />
                  </div>

                  {/* Text content (untruncated, clear line-height) */}
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
