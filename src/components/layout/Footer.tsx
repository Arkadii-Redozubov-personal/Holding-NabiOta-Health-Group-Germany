import React from "react";
import Link from "next/link";
import { MapPin, Globe, Mail, Phone, Linkedin, Instagram, Youtube, Briefcase } from "lucide-react";
import { Container } from "./Container";
import { Logo } from "@/components/ui/Logo";
import { companyInfo } from "@/data/company";
import { footerLegalNavigation } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-[#F6F3EC] border-t border-forest-900/10 text-forest-950 pt-16 pb-12">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-forest-900/10">
          {/* Col 1: Brand & Logo (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <Logo variant="light" />
              <p className="mt-4 text-xs sm:text-sm text-text-secondary leading-relaxed font-sans max-w-xs">
                {companyInfo.slogan}
              </p>
            </div>
            <div className="mt-6 text-[11px] text-text-secondary/80">
              Handelsregister: {companyInfo.commercialRegister.court}, {companyInfo.commercialRegister.number}
            </div>
          </div>

          {/* Col 2: Address & Digital (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-forest-950 mb-3">
              Standort & Digital
            </h4>
            <div className="flex items-start gap-3 text-xs sm:text-sm text-text-secondary">
              <MapPin className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-forest-950">{companyInfo.legalName}</p>
                <p>{companyInfo.street}</p>
                <p>{companyInfo.postalCode} {companyInfo.city}, {companyInfo.country}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs sm:text-sm text-text-secondary pt-1">
              <Globe className="w-4 h-4 text-gold-600 flex-shrink-0" />
              <a
                href={`https://${companyInfo.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-600 transition-colors"
              >
                {companyInfo.website}
              </a>
            </div>

            <div className="flex items-center gap-3 text-xs sm:text-sm text-text-secondary">
              <Mail className="w-4 h-4 text-gold-600 flex-shrink-0" />
              <a
                href={`mailto:${companyInfo.email}`}
                className="hover:text-gold-600 transition-colors"
              >
                {companyInfo.email}
              </a>
            </div>
          </div>

          {/* Col 3: Direct Phone Lines (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-forest-950 mb-3">
              Telefonische Erreichbarkeit
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-text-secondary">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-600 flex-shrink-0" />
                <div>
                  <span className="text-text-secondary/70">Sekretariat: </span>
                  <a
                    href={`tel:${companyInfo.phones.sekretariat.replace(/\s+/g, "")}`}
                    className="font-medium text-forest-950 hover:text-gold-600 transition-colors"
                  >
                    {companyInfo.phones.sekretariat}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-600 flex-shrink-0" />
                <div>
                  <span className="text-text-secondary/70">Aufnahme: </span>
                  <a
                    href={`tel:${companyInfo.phones.aufnahme.replace(/\s+/g, "")}`}
                    className="font-medium text-forest-950 hover:text-gold-600 transition-colors"
                  >
                    {companyInfo.phones.aufnahme}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-600 flex-shrink-0" />
                <div>
                  <span className="text-text-secondary/70">Geschäftsführung: </span>
                  <a
                    href={`tel:${companyInfo.phones.geschaeftsfuehrung.replace(/\s+/g, "")}`}
                    className="font-medium text-forest-950 hover:text-gold-600 transition-colors"
                  >
                    {companyInfo.phones.geschaeftsfuehrung}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Social & Legal (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-forest-950 mb-3">
                Netzwerk & Medien
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-forest-900/15 flex items-center justify-center text-forest-800 hover:border-gold-500 hover:text-gold-600 transition-colors"
                  aria-label="NabiOta auf LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.xing.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-forest-900/15 flex items-center justify-center text-forest-800 hover:border-gold-500 hover:text-gold-600 transition-colors"
                  aria-label="NabiOta auf XING"
                >
                  <Briefcase className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-forest-900/15 flex items-center justify-center text-forest-800 hover:border-gold-500 hover:text-gold-600 transition-colors"
                  aria-label="NabiOta auf Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-forest-900/15 flex items-center justify-center text-forest-800 hover:border-gold-500 hover:text-gold-600 transition-colors"
                  aria-label="NabiOta auf YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-text-secondary">
              {footerLegalNavigation.map((legal) => (
                <Link
                  key={legal.href}
                  href={legal.href}
                  className="hover:text-gold-600 transition-colors"
                >
                  {legal.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-secondary/70">
          <p>© 2026 {companyInfo.legalName}. Alle Rechte vorbehalten.</p>
          <p>NabiOta® ist eine eingetragene und geschützte Marke.</p>
        </div>
      </Container>
    </footer>
  );
}
