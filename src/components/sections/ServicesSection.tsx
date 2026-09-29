import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { holdingServices } from "@/data/services";

export function ServicesSection() {
  const rowOneServices = holdingServices.slice(0, 3);
  const rowTwoServices = holdingServices.slice(3, 7);

  return (
    <section className="bg-[#FAF8F5] py-16 sm:py-20 lg:py-28 border-b border-forest-900/10">
      <Container size="wide">
        {/* Section Heading */}
        <SectionHeading
          theme="light"
          eyebrow="UNSERE LEISTUNGEN"
          title="Ganzheitliche Gesundheitslösungen unter einem Dach."
          action={
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-forest-900 hover:text-gold-600 transition-colors group mt-2"
            >
              <span>Alle Leistungen entdecken</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-gold-500" />
            </Link>
          }
        />

        {/* Services Grid (Row 1: 3 cards, Row 2: 4 cards) */}
        <div className="space-y-4 sm:space-y-5">
          {/* Row 1 (3 items on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {rowOneServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Row 2 (4 items on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {rowTwoServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
