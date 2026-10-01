import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
      // Medical building / clinic with cross matching photo
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-[#C5A56A]"
        >
          <path d="M3 21h18M5 21V7l7-4 7 4v14" />
          <path d="M10 11h4M12 9v4" />
        </svg>
      );
    case "diagnostikzentren":
      // Monitor with EKG pulse curve matching photo
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-[#C5A56A]"
        >
          <rect x="2" y="3" width="20" height="13" rx="2" />
          <path d="M8 21h8M12 16v5" />
          <path d="M5 9.5h2.5l2-3 2.5 6 2-4.5 1.5 2h3.5" />
        </svg>
      );
    case "therapie-reha":
      // Therapy / Person silhouette matching photo
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-[#C5A56A]"
        >
          <circle cx="12" cy="7" r="3.5" />
          <path d="M6 21v-2a6 6 0 0 1 12 0v2" />
        </svg>
      );
    case "homecare-pflege":
      // Home / Care outline matching photo
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-[#C5A56A]"
        >
          <path d="M3 10.5 12 3l9 7.5v9.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.5z" />
          <path d="M9 21v-6h6v6" />
        </svg>
      );
    case "wundversorgung":
      // Medical cross outline matching photo
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-[#C5A56A]"
        >
          <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3z" />
        </svg>
      );
    case "personalvermittlung":
      // Medical staffing / 3 People group matching photo
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-[#C5A56A]"
        >
          <circle cx="12" cy="7" r="2.5" />
          <path d="M7 19v-1a5 5 0 0 1 10 0v1" />
          <circle cx="5" cy="9" r="2" />
          <path d="M2 18v-1a3.5 3.5 0 0 1 3.5-3.5" />
          <circle cx="19" cy="9" r="2" />
          <path d="M22 18v-1a3.5 3.5 0 0 0-3.5-3.5" />
        </svg>
      );
    case "innovationsmanagement":
      // Innovation lightbulb with rays matching photo
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-[#C5A56A]"
        >
          <path d="M9 18h6M10 22h4" />
          <path d="M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3 6h8c1.5-1.5 3-3.5 3-6a7 7 0 0 0-7-7z" />
          <path d="M12 6v3M6 12H3M21 12h-3M7.5 7.5l-2-2M18.5 7.5l2-2" />
        </svg>
      );
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-5.5 h-5.5 text-[#C5A56A]"
        >
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
      className={`group relative flex flex-row items-stretch rounded-2xl bg-white border border-[#EDE8DE] shadow-[0_2px_10px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300 hover:border-[#D5B878] hover:shadow-[0_6px_20px_rgba(197,165,106,0.14)] hover:-translate-y-0.5 focus:outline-none ${
        isLargeRow
          ? "h-[142px] sm:h-[150px] lg:h-[154px] xl:h-[158px]"
          : "h-[136px] sm:h-[144px] lg:h-[148px]"
      }`}
    >
      {/* Left Thumbnail Image matching reference photo 1:1 */}
      <div
        className={`relative h-full flex-shrink-0 overflow-hidden bg-forest-900/5 ${
          isLargeRow
            ? "w-[40%] sm:w-[42%] lg:w-[44%]"
            : "w-[36%] sm:w-[38%] lg:w-[40%]"
        }`}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 640px) 140px, 220px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Right Content */}
      <div className="flex-1 min-w-0 p-3 sm:p-3.5 lg:p-4 flex flex-col justify-between h-full bg-white">
        {/* Top: Icon + Title */}
        <div>
          <div className="flex items-start gap-2 sm:gap-2.5">
            <div className="flex-shrink-0 text-[#C5A56A] mt-0.5">
              <ServiceIcon id={service.id} />
            </div>
            <h3
              className={`font-serif font-bold text-[#142318] leading-[1.2] group-hover:text-[#BFA267] transition-colors line-clamp-2 ${
                isLargeRow
                  ? "text-[13px] sm:text-[14px] lg:text-[14.5px]"
                  : "text-[12px] sm:text-[12.8px] lg:text-[13.5px]"
              }`}
            >
              {service.title}
            </h3>
          </div>

          {/* Subtitle / Short Description */}
          <p className="text-[10.5px] sm:text-[11px] lg:text-[11.5px] text-[#636861] leading-[1.35] line-clamp-2 mt-1.5">
            {service.shortDescription}
          </p>
        </div>

        {/* Bottom-right: Small gold circular outline with ArrowRight */}
        <div className="flex justify-end mt-auto pt-1">
          <div className="w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-full border border-[#D5BE8A] text-[#B89650] flex items-center justify-center flex-shrink-0 group-hover:border-[#B89650] group-hover:bg-[#B89650] group-hover:text-white transition-all shadow-[0_1px_4px_rgba(213,190,138,0.2)]">
            <ArrowRight className="w-3.5 h-3.5 stroke-[1.8] transition-transform duration-300 group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
