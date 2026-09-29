import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Service } from "@/types/content";
import { SupportedLocale } from "@/lib/i18n";

interface ServiceCardProps {
  service: Service;
  currentLocale?: SupportedLocale;
  isLargeRow?: boolean;
}

function ServiceIcon({ id }: { id: string }) {
  switch (id) {
    case "mvz":
      // Clinic / Medical building
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5 sm:w-5.5 sm:h-5.5">
          <path d="M3 21h18M5 21V7l7-4 7 4v14" />
          <path d="M9 10h2M13 10h2M9 14h2M13 14h2M11 21v-4h2v4" />
        </svg>
      );
    case "diagnostikzentren":
      // Monitor with EKG pulse curve
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5 sm:w-5.5 sm:h-5.5">
          <rect x="2" y="3" width="20" height="13" rx="2" />
          <path d="M8 21h8M12 16v5" />
          <path d="M5 9.5h2.5l2-3 2.5 6 2-4.5 1.5 2h3.5" />
        </svg>
      );
    case "therapie-reha":
      // Therapy / Person silhouette
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5 sm:w-5.5 sm:h-5.5">
          <circle cx="12" cy="7" r="3.5" />
          <path d="M6 21v-2a6 6 0 0 1 12 0v2" />
        </svg>
      );
    case "homecare-pflege":
      // Home / Care outline
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5 sm:w-5.5 sm:h-5.5">
          <path d="M3 10.5 12 3l9 7.5v9.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.5z" />
          <path d="M9 21v-6h6v6" />
        </svg>
      );
    case "wundversorgung":
      // Medical cross outline
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-5 h-5 sm:w-5.5 sm:h-5.5">
          <path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h4V4z" />
        </svg>
      );
    case "personalvermittlung":
      // Medical staffing / 3 People group
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5 sm:w-5.5 sm:h-5.5">
          <circle cx="12" cy="7" r="2.8" />
          <path d="M7 20v-1.5a5 5 0 0 1 10 0V20" />
          <circle cx="5" cy="9" r="2" />
          <path d="M2 19v-1a3.5 3.5 0 0 1 3.5-3.5" />
          <circle cx="19" cy="9" r="2" />
          <path d="M22 19v-1a3.5 3.5 0 0 0-3.5-3.5" />
        </svg>
      );
    case "innovationsmanagement":
      // Innovation / Cog with lightbulb or gear outline
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5 sm:w-5.5 sm:h-5.5">
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

export function ServiceCard({
  service,
  currentLocale = "de",
  isLargeRow = false,
}: ServiceCardProps) {
  return (
    <Link
      href={`/${currentLocale}/services/${service.slug}`}
      className="group relative flex flex-row items-stretch rounded-xl sm:rounded-2xl bg-white border border-[#E5DFD5] shadow-[0_2px_10px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300 hover:border-[#D5B878] hover:shadow-[0_4px_18px_rgba(190,160,107,0.12)] hover:-translate-y-0.5 focus:outline-none h-[126px] sm:h-[134px] xl:h-[140px]"
    >
      {/* Full-height Left Thumbnail Image matching Photo 1 */}
      <div
        className={`relative h-full flex-shrink-0 overflow-hidden bg-forest-900/5 ${
          isLargeRow
            ? "w-[105px] sm:w-[125px] xl:w-[138px]"
            : "w-[85px] sm:w-[96px] xl:w-[105px]"
        }`}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 640px) 110px, 150px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Right Content */}
      <div className="flex-1 min-w-0 p-3 sm:p-3.5 xl:p-4 flex flex-col justify-between h-full bg-white">
        {/* Top: Icon + Title */}
        <div className="flex items-start gap-2 sm:gap-2.5">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded flex items-center justify-center flex-shrink-0 text-[#BFA267] mt-0.5">
            <ServiceIcon id={service.id} />
          </div>
          <h3
            className={`font-serif font-bold text-[#142318] leading-[1.18] group-hover:text-[#BFA267] transition-colors break-words ${
              isLargeRow
                ? "text-[13.5px] sm:text-[14.5px] xl:text-[15.5px]"
                : "text-[12px] sm:text-[12.8px] xl:text-[13.5px]"
            }`}
          >
            {service.title}
          </h3>
        </div>

        {/* Bottom: Description + Round Chevron Button */}
        <div className="flex items-end justify-between gap-1.5 mt-auto pt-1">
          <p className="text-[10.5px] sm:text-[11.2px] xl:text-[11.8px] text-[#5A6058] leading-snug line-clamp-2 pr-1">
            {service.shortDescription}
          </p>
          <div className="w-6.5 h-6.5 sm:w-7 sm:h-7 rounded-full border border-[#D5BE8A] text-[#B89650] flex items-center justify-center flex-shrink-0 group-hover:border-[#B89650] group-hover:bg-[#B89650] group-hover:text-white transition-all">
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.8] transition-transform duration-300 group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}

