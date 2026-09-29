import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { holdingServices } from "@/data/services";
import { getDictionary, SupportedLocale } from "@/lib/i18n";

interface ServicesSectionProps {
  currentLocale?: SupportedLocale;
}

export function ServicesSection({ currentLocale = "de" }: ServicesSectionProps) {
  const dict = getDictionary(currentLocale);
  const rowOneServices = holdingServices.slice(0, 3);
  const rowTwoServices = holdingServices.slice(3, 7);

  return (
    <section className="bg-[#FAF8F5] py-14 sm:py-18 lg:py-22 border-b border-[#EAE5DA]">
      <Container size="wide">
        {/* ── Section Header matching reference ───────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#BFA267] uppercase block mb-2">
              {dict.services.eyebrow}
            </span>
            <h2 className="font-display text-[28px] sm:text-[34px] lg:text-[40px] font-normal text-[#112117] tracking-tight leading-[1.15]">
              {dict.services.heading}
            </h2>
          </div>

          <Link
            href={`/${currentLocale}/services`}
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#112117] hover:text-[#BFA267] transition-colors self-start sm:self-end whitespace-nowrap mb-1"
          >
            <span>{dict.services.cta}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#BFA267]" />
          </Link>
        </div>

        {/* ── 7 Service Cards in 2 Rows ────────────────────── */}
        <div className="space-y-3.5 sm:space-y-4">
          {/* Row 1: 3 Larger Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4.5">
            {rowOneServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                currentLocale={currentLocale}
                isLargeRow={true}
              />
            ))}
          </div>

          {/* Row 2: 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5 xl:gap-4">
            {rowTwoServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                currentLocale={currentLocale}
                isLargeRow={false}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
