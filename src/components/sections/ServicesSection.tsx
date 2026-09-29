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
    <section className="bg-[#FAF8F5] py-16 sm:py-20 lg:py-28 border-b border-forest-900/10">
      <Container size="wide">
        <SectionHeading
          theme="light"
          eyebrow={dict.services.eyebrow}
          title={dict.services.heading}
          action={
            <Link
              href={`/${currentLocale}/services`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-forest-900 hover:text-gold-600 transition-colors group mt-2"
            >
              <span>{dict.services.cta}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-gold-500" />
            </Link>
          }
        />

        <div className="space-y-4 sm:space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {rowOneServices.map((service) => (
              <ServiceCard key={service.id} service={service} currentLocale={currentLocale} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {rowTwoServices.map((service) => (
              <ServiceCard key={service.id} service={service} currentLocale={currentLocale} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
