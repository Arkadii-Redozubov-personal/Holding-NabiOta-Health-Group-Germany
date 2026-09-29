import React from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { getDictionary, SupportedLocale } from "@/lib/i18n";

interface PartnersCareerSectionProps {
  currentLocale?: SupportedLocale;
}

export function PartnersCareerSection({ currentLocale = "de" }: PartnersCareerSectionProps) {
  const dict = getDictionary(currentLocale);

  return (
    <section className="bg-[#FAF8F5] py-16 sm:py-20 lg:py-28">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* LEFT PANEL: Partners & Kooperationen */}
          <div className="flex flex-col justify-between rounded-xl bg-white border border-forest-900/10 shadow-sm overflow-hidden p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-md">
            <div>
              <Eyebrow variant="gold">{dict.split.partners.eyebrow}</Eyebrow>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-forest-950 mb-4 leading-tight">
                {dict.split.partners.heading}
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-sans mb-6">
                {dict.split.partners.description}
              </p>
              <Button
                variant="dark-outline"
                size="md"
                href={`/${currentLocale}/partners`}
                className="mb-8"
              >
                {dict.split.partners.cta}
              </Button>
            </div>

            <div className="relative aspect-[16/9] sm:aspect-[2/1] w-full rounded-lg overflow-hidden border border-forest-900/5 mt-auto">
              <Image
                src="/images/partners/atrium.jpg"
                alt="Kooperationspartner im medizinischen Atrium"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-forest-950/70 via-transparent to-transparent" />
              <div className="absolute left-4 sm:left-6 bottom-4 sm:bottom-6 max-w-[200px] sm:max-w-xs text-white">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] leading-relaxed block text-gold-300">
                  {dict.split.partners.quote}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Karriere */}
          <div className="flex flex-col justify-between rounded-xl bg-forest-900 text-ivory-50 border border-white/10 shadow-md overflow-hidden p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-lg">
            <div>
              <Eyebrow variant="gold">{dict.split.career.eyebrow}</Eyebrow>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-ivory-50 mb-4 leading-tight">
                {dict.split.career.heading}
              </h2>
              <p className="text-xs sm:text-sm text-ivory-200/80 leading-relaxed font-sans mb-6">
                {dict.split.career.description}
              </p>
              <Button
                variant="gold-solid"
                size="md"
                href={`/${currentLocale}/career`}
                className="mb-8"
              >
                {dict.split.career.cta}
              </Button>
            </div>

            <div className="relative aspect-[16/9] sm:aspect-[2/1] w-full rounded-lg overflow-hidden border border-white/10 mt-auto">
              <Image
                src="/images/careers/team.jpg"
                alt="Medizinisches Team der NabiOta Health Group"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
