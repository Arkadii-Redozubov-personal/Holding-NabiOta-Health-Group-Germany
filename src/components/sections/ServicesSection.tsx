import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
        <SectionHeading
          theme="light"
          eyebrow={dict.services.eyebrow}
          title={dict.services.heading}
          action={
            <Link
              href={`/${currentLocale}/services`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#112117] hover:text-[#BEA06B] transition-colors group mt-2"
            >
              <span>{dict.services.cta}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#BEA06B]" />
            </Link>
          }
        />

        <div className="space-y-4 sm:space-y-4.5 mt-8 sm:mt-10">
          {/* Row 1: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4.5">
            {rowOneServices.map((service) => (
              <ServiceCard key={service.id} service={service} currentLocale={currentLocale} />
            ))}
          </div>

          {/* Row 2: 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5 xl:gap-4">
            {rowTwoServices.map((service) => (
              <ServiceCard key={service.id} service={service} currentLocale={currentLocale} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
