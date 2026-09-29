import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowButton } from "./ArrowButton";
import { BusinessArea } from "@/types/content";
import { SupportedLocale } from "@/lib/i18n";

interface BusinessCardProps {
  area: BusinessArea;
  priority?: boolean;
  currentLocale?: SupportedLocale;
}

export function BusinessCard({ area, priority = false, currentLocale = "de" }: BusinessCardProps) {
  return (
    <Link
      href={`/${currentLocale}/areas/${area.slug}`}
      className="group flex flex-col bg-white rounded-xl overflow-hidden border border-forest-900/10 shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
    >
      {/* Card Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-forest-950/10">
        <Image
          src={area.image}
          alt={area.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
      </div>

      {/* Card Footer / Content */}
      <div className="p-4 sm:p-5 flex items-center justify-between gap-3 bg-[#F8F5EE] border-t border-forest-900/5">
        <h3 className="font-sans text-sm sm:text-base font-semibold text-forest-950 tracking-tight leading-snug line-clamp-1 group-hover:text-gold-600 transition-colors">
          {area.title}
        </h3>
        <ArrowButton size="sm" variant="gold" />
      </div>
    </Link>
  );
}
