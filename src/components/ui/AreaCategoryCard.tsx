import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface AreaCategoryCardProps {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
}

/**
 * Compact category card used in the home page AreasStrip
 * (icon on top, centered label, gold arrow at the bottom).
 */
export function AreaCategoryCard({ href, label, icon: Icon, className }: AreaCategoryCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col items-center justify-between text-center transition-all duration-200",
        "min-h-[100px] sm:min-h-[132px] px-1 py-2 sm:px-2.5 sm:py-3.5",
        "rounded-2xl border border-[#EFECE3]/70 hover:border-[#DFD5C2]",
        "bg-[#FAF8F3] shadow-[0_2px_10px_rgba(20,35,24,0.07)] hover:bg-[#F3EFE6]",
        "sm:bg-[#FAF8F3]/60 sm:shadow-none hover:shadow-sm",
        className
      )}
    >
      {/* Icon without circle */}
      <div className="text-[#1A261D] group-hover:text-[#9C8145] transition-colors mb-1 flex items-center justify-center flex-shrink-0">
        <Icon className="w-9 h-9 sm:w-9 sm:h-9 stroke-[1.5]" />
      </div>

      {/* Centered category label */}
      <span className="text-[10.5px] sm:text-[12.5px] xl:text-[13px] font-bold text-[#18261C] leading-[1.18] text-center whitespace-pre-line px-0.5 my-auto">
        {label}
      </span>

      {/* Gold arrow at bottom */}
      <span className="text-[#C5A56A] font-bold text-[12px] sm:text-sm leading-none mt-0.5 transition-transform duration-200 group-hover:translate-x-0.5">
        →
      </span>
    </Link>
  );
}
