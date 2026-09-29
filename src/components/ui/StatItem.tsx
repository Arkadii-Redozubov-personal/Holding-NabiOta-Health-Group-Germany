import React from "react";
import { cn } from "@/lib/utils";

interface StatItemProps {
  value: string;
  label: string;
  sublabel?: string;
  className?: string;
}

export function StatItem({ value, label, sublabel, className }: StatItemProps) {
  return (
    <div className={cn("flex flex-col items-center sm:items-start text-center sm:text-left", className)}>
      <span className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-gold-500 tracking-tight leading-none mb-1">
        {value}
      </span>
      <span className="text-xs sm:text-sm font-semibold text-forest-950 uppercase tracking-wider leading-tight">
        {label}
      </span>
      {sublabel && (
        <span className="text-[11px] text-text-secondary mt-0.5 hidden lg:block">
          {sublabel}
        </span>
      )}
    </div>
  );
}
