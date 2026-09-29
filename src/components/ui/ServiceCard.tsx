import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Activity,
  UserCheck,
  Home,
  PlusCircle,
  Users2,
  Cog,
  LucideIcon,
} from "lucide-react";
import { Service } from "@/types/content";
import { SupportedLocale } from "@/lib/i18n";

interface ServiceCardProps {
  service: Service;
  currentLocale?: SupportedLocale;
  isLargeRow?: boolean;
}

const iconMap: Record<string, LucideIcon> = {
  Building2,
  ActivitySquare: Activity,
  Activity,
  UserCheck,
  Home,
  PlusCircle,
  Users2,
  Users: Users2,
  Cog,
};

export function ServiceCard({
  service,
  currentLocale = "de",
  isLargeRow = false,
}: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || Building2;

  return (
    <Link
      href={`/${currentLocale}/services/${service.slug}`}
      className="group relative flex items-center gap-3.5 xl:gap-4 p-3 sm:p-3.5 xl:p-4 rounded-xl bg-white border border-[#EAE5DA] shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-[#D5B878] hover:shadow-[0_6px_20px_rgba(190,160,107,0.12)] hover:-translate-y-0.5 focus:outline-none"
    >
      {/* Thumbnail Image */}
      <div
        className={`relative rounded-lg overflow-hidden flex-shrink-0 bg-forest-900/5 ${
          isLargeRow
            ? "w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
            : "w-16 h-16 sm:w-20 sm:h-20 xl:w-[78px] xl:h-[78px]"
        }`}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 640px) 100vw, 120px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 pr-1">
        <div className="flex items-start gap-2 mb-1">
          <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 text-[#BFA267] mt-0.5">
            <IconComponent className="w-4 h-4 stroke-[1.6]" />
          </div>
          <h3
            className={`font-sans font-bold text-[#112117] leading-snug group-hover:text-[#BFA267] transition-colors break-words ${
              isLargeRow
                ? "text-[13px] sm:text-[14px] xl:text-[15px]"
                : "text-[12px] sm:text-[12.5px] xl:text-[13.5px]"
            }`}
          >
            {service.title}
          </h3>
        </div>
        <p className="text-[11px] xl:text-[11.5px] text-[#60655D] leading-relaxed line-clamp-2">
          {service.shortDescription}
        </p>
      </div>

      {/* Arrow Button */}
      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[#D5B878]/60 flex items-center justify-center text-[#B89650] flex-shrink-0 self-center group-hover:border-[#B89650] group-hover:bg-[#B89650] group-hover:text-white transition-all">
        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
