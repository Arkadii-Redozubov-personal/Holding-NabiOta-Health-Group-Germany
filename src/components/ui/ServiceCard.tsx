import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
      className="group relative flex items-center gap-3 xl:gap-3.5 p-3 sm:p-3.5 rounded-xl bg-white border border-[#EAE5DA] shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-[#D5B878] hover:shadow-[0_6px_20px_rgba(190,160,107,0.12)] hover:-translate-y-0.5 focus:outline-none"
    >
      {/* Thumbnail Image */}
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 xl:w-[74px] xl:h-[74px] rounded-lg overflow-hidden flex-shrink-0 bg-forest-900/5">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 640px) 100vw, 80px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 pr-1">
        <div className="flex items-start gap-1.5 mb-1">
          <IconCircle
            name={service.iconName}
            size="sm"
            variant="gold"
            className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5"
          />
          <h3 className="font-sans text-[12px] sm:text-[13px] xl:text-[13.5px] font-bold text-[#112117] leading-snug group-hover:text-[#A78848] transition-colors break-words">
            {service.title}
          </h3>
        </div>
        <p className="text-[10.5px] xl:text-[11.5px] text-[#60655D] leading-relaxed line-clamp-2">
          {service.shortDescription}
        </p>
      </div>

      {/* Arrow Button */}
      <div className="w-6 h-6 rounded-full border border-[#D5B878]/60 flex items-center justify-center text-[#B89650] flex-shrink-0 self-center group-hover:border-[#B89650] group-hover:bg-[#B89650] group-hover:text-white transition-all">
        <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
