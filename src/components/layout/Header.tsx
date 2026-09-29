"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "./Container";
import { languages } from "@/data/navigation";
import { getDictionary, locales, SupportedLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface HeaderProps {
  currentLocale?: SupportedLocale;
}

export function Header({ currentLocale = "de" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
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
    { label: dict.nav.news, href: `/${activeLocale}/news` },
    { label: dict.nav.contact, href: `/${activeLocale}/contact` },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setLangDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSwitchLanguage = (newLocale: string) => {
    setLangDropdownOpen(false);
    setMobileMenuOpen(false);

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

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative py-1 text-xs xl:text-sm font-medium tracking-wide transition-colors duration-200 focus:outline-none focus-visible:text-gold-300",
                      isActive
                        ? "text-ivory-50 font-semibold"
                        : "text-ivory-200/80 hover:text-gold-300"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-400 to-gold-500 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Language + CTA */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-semibold tracking-wider text-ivory-100 hover:text-gold-300 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 cursor-pointer"
                  aria-expanded={langDropdownOpen}
                  aria-haspopup="true"
                >
                  <Globe className="w-3.5 h-3.5 text-gold-400" />
                  <span className="uppercase">{activeLocale}</span>
                  <ChevronDown className="w-3 h-3 text-gold-400/80" />
                </button>

                {langDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-32 py-1.5 rounded-lg bg-forest-900 border border-gold-400/30 shadow-xl z-50 backdrop-blur-md">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => handleSwitchLanguage(lang.code)}
                        className={cn(
                          "w-full text-left px-3.5 py-2 text-xs font-medium transition-colors flex items-center justify-between cursor-pointer",
                          activeLocale === lang.code
                            ? "text-gold-400 bg-forest-800"
                            : "text-ivory-100 hover:bg-forest-800/60 hover:text-gold-300"
                        )}
                      >
                        <span>{lang.name}</span>
                        <span className="text-[10px] text-ivory-100/50 uppercase">
                          {lang.code}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Header CTA */}
              <Button
                variant="gold-outline"
                size="sm"
                href={`/${activeLocale}/contact`}
                className="hidden sm:inline-flex"
              >
                {dict.nav.contactCta}
              </Button>

              {/* Mobile Burger Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
        <div className="fixed inset-0 z-40 bg-forest-950/98 backdrop-blur-2xl lg:hidden flex flex-col pt-24 pb-8 px-6 overflow-y-auto">
          <nav className="flex flex-col gap-4 my-auto" aria-label="Mobile Navigation">
            {localizedNav.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== `/${activeLocale}` && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-xl font-display tracking-wide py-2 border-b border-white/5 flex items-center justify-between",
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
