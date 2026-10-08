"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  Stethoscope,
  Microscope,
  HeartPulse,
  Users,
  Network,
  ArrowRight,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "./Container";
import { languages } from "@/data/navigation";
import { getDictionary, locales, SupportedLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface HeaderProps {
  currentLocale?: SupportedLocale;
}

const areaNavItems = [
  {
    slug: "medizinische-fachbereiche",
    icon: Stethoscope,
    titles: {
      de: "Medizinische Fachbereiche",
      en: "Medical Departments",
      ru: "Медицинские направления",
      tr: "Tıbbi Bölümler",
      ar: "الأقسام الطبية التخصصية",
    },
    subtitles: {
      de: "Ambulante & Fachärztliche Spitzenmedizin",
      en: "Outpatient & Specialist Medicine",
      ru: "Амбулаторная и специализированная медицина",
      tr: "Ayakta Tedavi & Uzman Hekimlik",
      ar: "الرعاية المتنقلة والطب التخصصي",
    },
  },
  {
    slug: "diagnostik",
    icon: Microscope,
    titles: {
      de: "Diagnostik",
      en: "Diagnostics",
      ru: "Диагностика",
      tr: "Tanı & Görüntüleme",
      ar: "التشخيص والتصوير الطبي",
    },
    subtitles: {
      de: "MRT, CT & Präzisionstechnologie",
      en: "MRI, CT & High-Precision Imaging",
      ru: "МРТ, КТ и высокоточная диагностика",
      tr: "3T MRT, CT & Yüksek Teknoloji",
      ar: "الرنين المغناطيسي والأشعة المقطعية",
    },
  },
  {
    slug: "rehabilitation",
    icon: HeartPulse,
    titles: {
      de: "Rehabilitation",
      en: "Rehabilitation",
      ru: "Реабилитация",
      tr: "Rehabilitasyon",
      ar: "التأهيل والعلاج الطبيعي",
    },
    subtitles: {
      de: "Ganzheitliche Genesung & Therapie",
      en: "Holistic Recovery & Therapy",
      ru: "Комплексное восстановление и терапия",
      tr: "Bütüncül İyileşme & Fizik Tedavi",
      ar: "التعافي الشامل والبرامج العلاجية",
    },
  },
  {
    slug: "pflege",
    icon: Users,
    titles: {
      de: "Pflege",
      en: "Nursing Care",
      ru: "Патронаж и уход",
      tr: "Hasta Bakımı & HomeCare",
      ar: "التمريض والرعاية المنزلية",
    },
    subtitles: {
      de: "Ambulante Pflege & HomeCare",
      en: "Outpatient Care & HomeCare",
      ru: "Амбулаторная помощь и HomeCare",
      tr: "Evde Bakım & Medikal Malzeme",
      ar: "الرعاية المتنقلة والمستلزمات الطبية",
    },
  },
  {
    slug: "beratung-projektentwicklung",
    icon: Network,
    titles: {
      de: "Beratung & Projektentwicklung",
      en: "Consulting & Development",
      ru: "Консалтинг и девелопмент",
      tr: "Danışmanlık & Proje Geliştirme",
      ar: "الاستشارات والتطوير الطبي",
    },
    subtitles: {
      de: "Gesundheitsimmobilien & MVZ-Strukturen",
      en: "Healthcare Facilities & Centers",
      ru: "Медицинские центры и девелопмент",
      tr: "Sağlık Tesisleri & Klinik Projeleri",
      ar: "تطوير المرافق والمجمعات الطبية",
    },
  },
  {
    slug: "internationale-kooperationen",
    icon: Globe,
    titles: {
      de: "Internationale Kooperationen",
      en: "International Cooperations",
      ru: "Международное сотрудничество",
      tr: "Uluslararası İş Birlikleri",
      ar: "التعاون الطبي الدولي",
    },
    subtitles: {
      de: "Partnerschaften & Wissenstransfer",
      en: "Partnerships & Knowledge Transfer",
      ru: "Партнёрство и трансфер знаний",
      tr: "Stratejik Ortaklıklar & Bilgi Transferi",
      ar: "الشراكات ونقل المعرفة والخبرات",
    },
  },
];

const overviewLabels: Record<string, string> = {
  de: "Alle Bereiche im Überblick",
  en: "All Divisions Overview",
  ru: "Все направления холдинга",
  tr: "Tüm Faaliyet Alanlarına Genel Bakış",
  ar: "نظرة شاملة على جميع القطاعات",
};

const dropdownEyebrow: Record<string, string> = {
  de: "UNTERNEHMENSBEREICHE",
  en: "BUSINESS DIVISIONS",
  ru: "НАПРАВЛЕНИЯ ХОЛДИНГА",
  tr: "KURUMSAL ALANLAR",
  ar: "قطاعات المجموعة",
};

export function Header({ currentLocale = "de" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);

  const areasDropdownRef = useRef<HTMLDivElement>(null);
  const areasTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const langDropdownRef = useRef<HTMLDivElement>(null);
  const langTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();
  const router = useRouter();

  // Detect current locale from pathname if possible
  const pathSegments = pathname.split("/").filter(Boolean);
  const activeLocale: SupportedLocale = locales.includes(pathSegments[0] as SupportedLocale)
    ? (pathSegments[0] as SupportedLocale)
    : currentLocale;

  const dict = getDictionary(activeLocale);

  const localizedNav = [
    { label: dict.nav.home, href: `/${activeLocale}` },
    { label: dict.nav.about, href: `/${activeLocale}/about` },
    { label: dict.nav.areas, href: `/${activeLocale}/areas` },
    { label: dict.nav.values, href: `/${activeLocale}/values` },
    { label: dict.nav.career, href: `/${activeLocale}/career` },
    { label: dict.nav.partners, href: `/${activeLocale}/partners` },
    { label: dict.nav.contact, href: `/${activeLocale}/contact` },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        areasDropdownRef.current &&
        !areasDropdownRef.current.contains(e.target as Node)
      ) {
        setAreasDropdownOpen(false);
      }
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(e.target as Node)
      ) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setMobileAreasOpen(false);
        setLangDropdownOpen(false);
        setAreasDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Sync document lang and dir with activeLocale
  useEffect(() => {
    document.documentElement.lang = activeLocale;
    document.documentElement.dir = activeLocale === "ar" ? "rtl" : "ltr";
  }, [activeLocale]);

  // Close dropdowns on route navigation
  useEffect(() => {
    setAreasDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileAreasOpen(false);
    setLangDropdownOpen(false);
  }, [pathname]);

  const handleAreasMouseEnter = () => {
    if (areasTimeoutRef.current) {
      clearTimeout(areasTimeoutRef.current);
      areasTimeoutRef.current = null;
    }
    setAreasDropdownOpen(true);
  };

  const handleAreasMouseLeave = () => {
    if (areasTimeoutRef.current) {
      clearTimeout(areasTimeoutRef.current);
    }
    areasTimeoutRef.current = setTimeout(() => {
      setAreasDropdownOpen(false);
    }, 180);
  };

  const handleLangMouseEnter = () => {
    if (langTimeoutRef.current) {
      clearTimeout(langTimeoutRef.current);
      langTimeoutRef.current = null;
    }
    setLangDropdownOpen(true);
  };

  const handleLangMouseLeave = () => {
    if (langTimeoutRef.current) {
      clearTimeout(langTimeoutRef.current);
    }
    langTimeoutRef.current = setTimeout(() => {
      setLangDropdownOpen(false);
    }, 180);
  };

  const handleAreasButtonClick = (e: React.MouseEvent) => {
    // If not open, open it. If already open, navigate to overview page
    if (!areasDropdownOpen) {
      e.preventDefault();
      setAreasDropdownOpen(true);
    } else {
      setAreasDropdownOpen(false);
      router.push(`/${activeLocale}/areas`);
    }
  };

  const handleSwitchLanguage = (newLocale: string) => {
    setLangDropdownOpen(false);
    setMobileMenuOpen(false);
    setAreasDropdownOpen(false);

    // Replace locale in path
    if (locales.includes(pathSegments[0] as SupportedLocale)) {
      const rest = pathSegments.slice(1).join("/");
      router.push(`/${newLocale}${rest ? `/${rest}` : ""}`);
    } else {
      router.push(`/${newLocale}`);
    }
  };

  return (
    <>
      <header
        dir="ltr"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
          isScrolled
            ? "py-2.5 header-glass border-b border-white/10 shadow-lg"
            : "py-4 sm:py-5 bg-gradient-to-b from-forest-950/85 via-forest-950/45 to-transparent"
        )}
      >
        <Container size="wide">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo with Official nLogo.svg Emblem */}
            <Logo variant="dark" locale={activeLocale} />

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-3.5 xl:gap-5 2xl:gap-7"
              aria-label="Hauptnavigation"
            >
              {localizedNav.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== `/${activeLocale}` && pathname.startsWith(item.href));
                const isAreas = item.href.includes("/areas");

                if (isAreas) {
                  return (
                    <div
                      key={item.href}
                      ref={areasDropdownRef}
                      className="relative"
                      onMouseEnter={handleAreasMouseEnter}
                      onMouseLeave={handleAreasMouseLeave}
                    >
                      <button
                        type="button"
                        onClick={handleAreasButtonClick}
                        className={cn(
                          "relative py-1 text-xs xl:text-sm font-medium tracking-wide transition-colors duration-200 inline-flex items-center gap-1.5 focus:outline-none focus-visible:text-gold-300 cursor-pointer",
                          isActive
                            ? "text-ivory-50 font-semibold"
                            : areasDropdownOpen
                            ? "text-gold-300"
                            : "text-ivory-200/85 hover:text-gold-300"
                        )}
                        aria-expanded={areasDropdownOpen}
                        aria-haspopup="true"
                        aria-label={item.label}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={cn(
                            "w-3.5 h-3.5 transition-transform duration-200",
                            areasDropdownOpen
                              ? "rotate-180 text-gold-300"
                              : "opacity-75 group-hover:translate-y-0.5"
                          )}
                        />
                        {isActive && (
                          <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ECCF96] to-[#D8B772] rounded-full" />
                        )}
                      </button>

                      {/* Desktop Dropdown — compact glassmorphism */}
                      {areasDropdownOpen && (
                        <div
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 pointer-events-auto"
                          onMouseEnter={handleAreasMouseEnter}
                          onMouseLeave={handleAreasMouseLeave}
                        >
                          <div
                            className="relative"
                            style={{
                              animation: "dropdownFadeIn 0.16s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                            }}
                          >
                            {/* arrow tip */}
                            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 bg-[#0a140d] border-l border-t border-[#D5B878]/30 z-10 pointer-events-none" />

                            <div
                              className="w-[260px] rounded-xl overflow-hidden relative z-0"
                              style={{
                                background: "rgba(8, 14, 10, 0.78)",
                                backdropFilter: "blur(24px) saturate(160%)",
                                WebkitBackdropFilter: "blur(24px) saturate(160%)",
                                border: "1px solid rgba(213,184,120,0.18)",
                                boxShadow: "0 16px 48px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04) inset",
                              }}
                            >
                              {/* compact list */}
                              <div className="py-1.5">
                                {areaNavItems.map((area) => {
                                  const isSubActive =
                                    pathname === `/${activeLocale}/areas/${area.slug}`;
                                  const AreaIcon = area.icon;

                                  return (
                                    <Link
                                      key={area.slug}
                                      href={`/${activeLocale}/areas/${area.slug}`}
                                      onClick={() => setAreasDropdownOpen(false)}
                                      className={cn(
                                        "group/item flex items-center gap-2.5 px-3.5 py-2 transition-all duration-150",
                                        isSubActive
                                          ? "bg-gold-400/12 text-gold-300"
                                          : "text-ivory-200/85 hover:bg-white/[0.06] hover:text-ivory-50"
                                      )}
                                    >
                                      <AreaIcon
                                        className={cn(
                                          "w-3.5 h-3.5 shrink-0 transition-colors",
                                          isSubActive
                                            ? "text-gold-400"
                                            : "text-gold-400/60 group-hover/item:text-gold-400"
                                        )}
                                      />
                                      <span className="text-[13px] font-medium leading-none truncate">
                                        {area.titles[activeLocale]}
                                      </span>
                                    </Link>
                                  );
                                })}
                              </div>

                              {/* overview link */}
                              <div className="border-t border-white/10 mx-3 mb-1.5" />
                              <Link
                                href={`/${activeLocale}/areas`}
                                onClick={() => setAreasDropdownOpen(false)}
                                className="flex items-center justify-between px-3.5 pb-2.5 pt-1.5 text-[11px] font-semibold tracking-wide text-gold-400/80 hover:text-gold-300 transition-colors group/overview"
                              >
                                <span>{overviewLabels[activeLocale]}</span>
                                <ArrowRight className="w-3 h-3 transition-transform duration-150 group-hover/overview:translate-x-0.5" />
                              </Link>
                            </div>
                          </div>

                          <style>{`
                            @keyframes dropdownFadeIn {
                              from {
                                opacity: 0;
                                transform: translateY(-5px);
                              }
                              to {
                                opacity: 1;
                                transform: translateY(0);
                              }
                            }
                          `}</style>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative py-1 text-xs xl:text-sm font-medium tracking-wide transition-colors duration-200 inline-flex items-center gap-1 focus:outline-none focus-visible:text-gold-300",
                      isActive
                        ? "text-ivory-50 font-semibold"
                        : "text-ivory-200/85 hover:text-gold-300"
                    )}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ECCF96] to-[#D8B772] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Language + CTA */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Language Selector - hidden on mobile screens, available in mobile drawer */}
              <div
                ref={langDropdownRef}
                className="relative hidden sm:block"
                onMouseEnter={handleLangMouseEnter}
                onMouseLeave={handleLangMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className={cn(
                    "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 cursor-pointer",
                    langDropdownOpen
                      ? "text-gold-300 bg-white/10"
                      : "text-ivory-100 hover:text-gold-300 hover:bg-white/5"
                  )}
                  aria-expanded={langDropdownOpen}
                  aria-haspopup="true"
                  aria-label="Sprache auswählen"
                >
                  <Globe className={cn("w-3.5 h-3.5 transition-colors", langDropdownOpen ? "text-gold-300" : "text-gold-400")} />
                  <span className="uppercase">{activeLocale}</span>
                  <ChevronDown
                    className={cn(
                      "w-3 h-3 text-gold-400/80 transition-transform duration-200",
                      langDropdownOpen && "rotate-180 text-gold-300"
                    )}
                  />
                </button>

                {langDropdownOpen && (
                  <div
                    className="absolute top-full right-0 pt-2 z-50 pointer-events-auto"
                    onMouseEnter={handleLangMouseEnter}
                    onMouseLeave={handleLangMouseLeave}
                  >
                    <div
                      className="w-36 rounded-xl overflow-hidden py-1.5 shadow-2xl relative"
                      style={{
                        background: "rgba(8, 14, 10, 0.88)",
                        backdropFilter: "blur(24px) saturate(160%)",
                        WebkitBackdropFilter: "blur(24px) saturate(160%)",
                        border: "1px solid rgba(213,184,120,0.22)",
                        boxShadow: "0 16px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05) inset",
                        animation: "dropdownFadeIn 0.16s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                      }}
                    >
                      {/* arrow tip */}
                      <div className="absolute -top-1 right-5 w-2 h-2 rotate-45 bg-[#0a140d] border-l border-t border-[#D5B878]/30 z-10 pointer-events-none" />

                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          type="button"
                          onClick={() => handleSwitchLanguage(lang.code)}
                          className={cn(
                            "w-full text-left px-3.5 py-2 text-xs font-medium transition-colors flex items-center justify-between cursor-pointer",
                            activeLocale === lang.code
                              ? "text-gold-300 bg-gold-400/15 font-semibold"
                              : "text-ivory-100 hover:bg-white/[0.08] hover:text-gold-300"
                          )}
                        >
                          <span>{lang.name}</span>
                          <span
                            className={cn(
                              "text-[10px] uppercase font-mono px-1.5 py-0.5 rounded",
                              activeLocale === lang.code
                                ? "text-gold-300 bg-gold-400/20"
                                : "text-ivory-100/50"
                            )}
                          >
                            {lang.code}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Header CTA - Solid Warm Sand/Gold Pill with Arrow matching 1:1 */}
              <Link
                href={`/${activeLocale}/contact`}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ECCF96] to-[#D8B772] text-[#142217] font-sans font-semibold text-xs tracking-wide shadow-md hover:from-[#F2DAB0] hover:to-[#DEBD7A] transition-all duration-300 group"
              >
                <span>{dict.nav.contactCta}</span>
                <span className="transition-transform duration-200 font-bold group-hover:translate-x-0.5">→</span>
              </Link>

              {/* Mobile Burger Menu Button */}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(!mobileMenuOpen);
                  if (mobileMenuOpen) {
                    setMobileAreasOpen(false);
                  }
                }}
                className="lg:hidden p-2 rounded-md text-ivory-100 hover:text-gold-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 cursor-pointer"
                aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div dir="ltr" className="fixed inset-0 z-40 bg-forest-950/98 backdrop-blur-2xl lg:hidden flex flex-col pt-24 pb-8 px-6 overflow-y-auto">
          <nav className="flex flex-col gap-2 my-auto" aria-label="Mobile Navigation">
            {localizedNav.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== `/${activeLocale}` && pathname.startsWith(item.href));
              const isAreas = item.href.includes("/areas");

              if (isAreas) {
                return (
                  <div key={item.href} className="border-b border-white/5 py-1">
                    <div className="flex items-center justify-between py-2">
                      <Link
                        href={item.href}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileAreasOpen(false);
                        }}
                        className={cn(
                          "text-xl font-display tracking-wide flex-1",
                          isActive ? "text-gold-400 font-medium" : "text-ivory-100"
                        )}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                        className="p-2.5 -mr-2 text-gold-400 hover:text-gold-300 focus:outline-none cursor-pointer rounded-lg active:bg-white/10"
                        aria-label="Bereiche aufklappen"
                        aria-expanded={mobileAreasOpen}
                      >
                        <ChevronDown
                          className={cn(
                            "w-5 h-5 transition-transform duration-200",
                            mobileAreasOpen && "rotate-180"
                          )}
                        />
                      </button>
                    </div>

                    {mobileAreasOpen && (
                      <div className="pl-2 pr-1 pb-3 pt-1 flex flex-col gap-1.5 bg-forest-900/60 rounded-xl mb-2 border border-gold-400/15">
                        {areaNavItems.map((area) => {
                          const AreaIcon = area.icon;
                          const isSubActive =
                            pathname === `/${activeLocale}/areas/${area.slug}`;
                          return (
                            <Link
                              key={area.slug}
                              href={`/${activeLocale}/areas/${area.slug}`}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileAreasOpen(false);
                              }}
                              className={cn(
                                "flex items-center gap-2.5 py-2 px-3 rounded-lg text-sm transition-colors",
                                isSubActive
                                  ? "text-gold-300 bg-gold-400/15 font-semibold"
                                  : "text-ivory-200/85 hover:text-gold-300 hover:bg-white/5"
                              )}
                            >
                              <AreaIcon className="w-4 h-4 text-gold-400 shrink-0" />
                              <span className="truncate">{area.titles[activeLocale]}</span>
                            </Link>
                          );
                        })}
                        <Link
                          href={`/${activeLocale}/areas`}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileAreasOpen(false);
                          }}
                          className="flex items-center justify-between py-2 px-3 text-xs font-semibold text-gold-400 hover:text-gold-300 pt-2 border-t border-white/10"
                        >
                          <span>{overviewLabels[activeLocale]}</span>
                          <span>→</span>
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-xl font-display tracking-wide py-2.5 border-b border-white/5 flex items-center justify-between",
                    isActive ? "text-gold-400 font-medium" : "text-ivory-100"
                  )}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-gold-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
            <Button
              variant="gold-solid"
              size="md"
              href={`/${activeLocale}/contact`}
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              {dict.nav.contactCta}
            </Button>

            <div className="flex items-center justify-center gap-4 pt-2 text-xs text-ivory-200/60">
              {languages.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => handleSwitchLanguage(l.code)}
                  className={cn(
                    "px-2.5 py-1 rounded transition-colors cursor-pointer",
                    activeLocale === l.code
                      ? "text-gold-400 font-bold bg-white/10"
                      : "text-ivory-200/80 hover:text-white"
                  )}
                >
                  {l.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
