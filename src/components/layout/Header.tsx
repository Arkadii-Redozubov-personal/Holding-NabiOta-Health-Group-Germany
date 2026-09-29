"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "./Container";
import { mainNavigation, languages } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("DE");
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change or Escape
  useEffect(() => {
    setMobileMenuOpen(false);
    setLangDropdownOpen(false);
  }, [pathname]);

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

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
          isScrolled
            ? "py-3 header-glass border-b border-white/10 shadow-lg"
            : "py-5 sm:py-6 bg-gradient-to-b from-forest-950/80 via-forest-950/40 to-transparent"
        )}
      >
        <Container size="wide">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <Logo variant="dark" />

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-7 xl:gap-8"
              aria-label="Hauptnavigation"
            >
              {mainNavigation.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative py-1 text-sm font-medium tracking-wide transition-colors duration-200 focus:outline-none focus-visible:text-gold-300",
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
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-semibold tracking-wider text-ivory-100 hover:text-gold-300 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-gold-400"
                  aria-expanded={langDropdownOpen}
                  aria-haspopup="true"
                >
                  <Globe className="w-3.5 h-3.5 text-gold-400" />
                  <span>{currentLang}</span>
                  <ChevronDown className="w-3 h-3 text-gold-400/80" />
                </button>

                {langDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-32 py-1.5 rounded bg-forest-900 border border-gold-400/30 shadow-xl z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => {
                          setCurrentLang(lang.label);
                          setLangDropdownOpen(false);
                        }}
                        className={cn(
                          "w-full text-left px-3.5 py-1.5 text-xs font-medium transition-colors flex items-center justify-between",
                          currentLang === lang.label
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
                href="/contact"
                className="hidden sm:inline-flex"
              >
                Kontakt aufnehmen
              </Button>

              {/* Mobile Burger Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-ivory-100 hover:text-gold-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
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
        <div className="fixed inset-0 z-40 bg-forest-950/95 backdrop-blur-xl lg:hidden flex flex-col pt-24 pb-8 px-6 overflow-y-auto">
          <nav className="flex flex-col gap-5 my-auto" aria-label="Mobile Navigation">
            {mainNavigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

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
              href="/contact"
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontakt aufnehmen
            </Button>

            <div className="flex items-center justify-center gap-4 pt-2 text-xs text-ivory-200/60">
              {languages.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => {
                    setCurrentLang(l.label);
                  }}
                  className={cn(
                    "px-2 py-1 rounded transition-colors",
                    currentLang === l.label
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
