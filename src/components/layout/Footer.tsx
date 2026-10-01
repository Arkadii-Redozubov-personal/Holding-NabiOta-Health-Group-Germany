"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Globe, Mail, Phone, Linkedin, Instagram, Youtube, Briefcase } from "lucide-react";
import { Container } from "./Container";
import { Logo } from "@/components/ui/Logo";
import { companyInfo } from "@/data/company";
import { getDictionary, SupportedLocale } from "@/lib/i18n";

interface FooterProps {
  currentLocale?: SupportedLocale;
}

export function Footer({ currentLocale = "de" }: FooterProps) {
  const dict = getDictionary(currentLocale);

  const legalNav = [
    {
      label: currentLocale === "ru" ? "Выходные данные" : currentLocale === "en" ? "Imprint" : "Impressum",
      href: `/${currentLocale}/imprint`,
    },
    {
      label: currentLocale === "ru" ? "Конфиденциальность" : currentLocale === "en" ? "Privacy Policy" : "Datenschutz",
      href: `/${currentLocale}/privacy`,
    },
    {
      label: currentLocale === "ru" ? "Настройки Cookies" : currentLocale === "en" ? "Cookie Settings" : "Cookie-Einstellungen",
      href: "#cookies",
    },
  ];

  return (
    <footer className="relative bg-[#07150C] text-white pt-16 pb-12 overflow-hidden border-t border-[#D5B878]/35">
      {/* ── Botanical Gold Background matching user design ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/botanical-gold-bg.jpg"
          alt="Botanical background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07150C]/82 via-[#07150C]/68 to-[#07150C]/86" />
      </div>

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <Logo variant="dark" locale={currentLocale} size="lg" />
              <p className="mt-4 text-xs sm:text-sm text-white/75 leading-relaxed font-sans max-w-xs">
                {dict.footer.slogan}
              </p>
            </div>
            <div className="mt-6 text-[11px] text-white/50">
              Handelsregister: {companyInfo.commercialRegister.court}, {companyInfo.commercialRegister.number}
            </div>
          </div>

          {/* Col 2: Address & Digital */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#ECCF96] mb-3">
              {dict.footer.addressTitle}
            </h4>
            <div className="flex items-start gap-3 text-xs sm:text-sm text-white/80">
              <MapPin className="w-4 h-4 text-[#C5A56A] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">{companyInfo.legalName}</p>
                <p>{companyInfo.street}</p>
                <p>{companyInfo.postalCode} {companyInfo.city}, Deutschland</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs sm:text-sm text-white/80 pt-1">
              <Globe className="w-4 h-4 text-[#C5A56A] flex-shrink-0" />
              <a
                href={`https://${companyInfo.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ECCF96] transition-colors"
              >
                {companyInfo.website}
              </a>
            </div>

            <div className="flex items-center gap-3 text-xs sm:text-sm text-white/80">
              <Mail className="w-4 h-4 text-[#C5A56A] flex-shrink-0" />
              <a
                href={`mailto:${companyInfo.email}`}
                className="hover:text-[#ECCF96] transition-colors"
              >
                {companyInfo.email}
              </a>
            </div>
          </div>

          {/* Col 3: Direct Phone Lines */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#ECCF96] mb-3">
              {dict.footer.phonesTitle}
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-white/80">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C5A56A] flex-shrink-0" />
                <div>
                  <span className="text-white/60">Sekretariat: </span>
                  <a
                    href={`tel:${companyInfo.phones.sekretariat.replace(/\s+/g, "")}`}
                    className="font-medium text-white hover:text-[#ECCF96] transition-colors"
                  >
                    {companyInfo.phones.sekretariat}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C5A56A] flex-shrink-0" />
                <div>
                  <span className="text-white/60">Aufnahme: </span>
                  <a
                    href={`tel:${companyInfo.phones.aufnahme.replace(/\s+/g, "")}`}
                    className="font-medium text-white hover:text-[#ECCF96] transition-colors"
                  >
                    {companyInfo.phones.aufnahme}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C5A56A] flex-shrink-0" />
                <div>
                  <span className="text-white/60">Geschäftsführung: </span>
                  <a
                    href={`tel:${companyInfo.phones.geschaeftsfuehrung.replace(/\s+/g, "")}`}
                    className="font-medium text-white hover:text-[#ECCF96] transition-colors"
                  >
                    {companyInfo.phones.geschaeftsfuehrung}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Social & Legal */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#ECCF96] mb-3">
                {dict.footer.networkTitle}
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/80 hover:border-[#ECCF96] hover:text-[#ECCF96] transition-colors"
                  aria-label="NabiOta auf LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.xing.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/80 hover:border-[#ECCF96] hover:text-[#ECCF96] transition-colors"
                  aria-label="NabiOta auf XING"
                >
                  <Briefcase className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/80 hover:border-[#ECCF96] hover:text-[#ECCF96] transition-colors"
                  aria-label="NabiOta auf Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/80 hover:border-[#ECCF96] hover:text-[#ECCF96] transition-colors"
                  aria-label="NabiOta auf YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/70">
              {legalNav.map((legal) => (
                <Link
                  key={legal.href}
                  href={legal.href}
                  className="hover:text-[#ECCF96] transition-colors"
                >
                  {legal.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© 2026 {companyInfo.legalName}. {dict.footer.allRights}</p>
          <p>{dict.footer.brandNotice}</p>
        </div>
      </Container>
    </footer>
  );
}
