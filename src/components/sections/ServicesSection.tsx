import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
    <section className="bg-[#FAF8F5] py-10 sm:py-12 lg:py-14 border-b border-[#EAE5DA]">
      <div className="mx-auto w-full max-w-[1540px] 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* ── Section Header matching Photo 1 ───────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7 sm:mb-9">
          <div>
            <span className="text-[10.5px] sm:text-[11.5px] font-bold tracking-[0.22em] text-[#9C8145] uppercase block mb-1.5">
              {dict.services.eyebrow}
            </span>
            <h2 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-[#112117] tracking-tight leading-[1.15]">
              {dict.services.heading}
            </h2>
          </div>

          <Link
            href={`/${currentLocale}/services`}
            className="group inline-flex items-center gap-1.5 text-xs sm:text-[13.5px] font-semibold text-[#9C8145] hover:text-[#7D6532] transition-colors self-start sm:self-end whitespace-nowrap mb-1"
          >
            <span>{dict.services.cta}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* ── 7 Service Cards in 2 Rows matching Photo 1 ────────────── */}
        <div className="space-y-3.5 sm:space-y-4">
          {/* Row 1: 3 Larger Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
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
      </div>
    </section>
  );
}

