import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowButton } from "./ArrowButton";
import { IconCircle } from "./IconCircle";
import { Service } from "@/types/content";
import { SupportedLocale } from "@/lib/i18n";

interface ServiceCardProps {
  service: Service;
  currentLocale?: SupportedLocale;
}

export function ServiceCard({ service, currentLocale = "de" }: ServiceCardProps) {
  return (
    <Link
      href={`/${currentLocale}/services/${service.slug}`}
      className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-md bg-white/95 border border-forest-900/10 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-gold-400/50 hover:shadow-[0_6px_20px_rgba(190,160,107,0.12)] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
    >
      {/* Thumbnail Image */}
      <div className="relative w-full sm:w-24 sm:h-24 md:w-28 md:h-28 aspect-video sm:aspect-square rounded overflow-hidden flex-shrink-0 bg-forest-900/5">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 640px) 100vw, 120px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2.5 mb-1.5">
          <IconCircle
            name={service.iconName}
            size="sm"
            variant="gold"
            className="w-7 h-7"
          />
          <h3 className="font-sans text-sm sm:text-base font-semibold text-forest-950 tracking-tight leading-snug group-hover:text-gold-600 transition-colors">
            {service.title}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-2">
          {service.shortDescription}
        </p>
      </div>

      {/* Arrow Button */}
      <div className="self-end sm:self-center flex-shrink-0">
        <ArrowButton size="sm" variant="gold" />
      </div>
    </Link>
  );
}
