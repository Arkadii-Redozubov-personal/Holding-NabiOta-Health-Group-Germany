import React from "react";

export interface HeroBadgeItem {
  icon: React.ComponentType<{ className?: string }> | React.ReactNode;
  title: string;
  sub: string;
}

interface HeroBadgesProps {
  items: HeroBadgeItem[];
  className?: string;
}

export function HeroBadges({ items, className = "" }: HeroBadgesProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className={`flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-7 pt-2 ${className}`}>
      {items.map((item, idx) => {
        const renderIcon = () => {
          if (React.isValidElement(item.icon)) {
            return item.icon;
          }
          if (typeof item.icon === "function" || (typeof item.icon === "object" && item.icon !== null)) {
            const IconComp = item.icon as React.ComponentType<{ className?: string }>;
            return <IconComp className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[1.6]" />;
          }
          return null;
        };

        return (
          <div key={idx} className="flex items-center gap-3 sm:gap-3.5">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#D5B878]/65 bg-[#0C1C11]/70 backdrop-blur-md shadow-[0_0_12px_rgba(213,184,120,0.18)] flex items-center justify-center text-[#ECCF96] shrink-0">
              {renderIcon()}
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[12.5px] sm:text-[13px] font-medium text-white tracking-wide leading-tight">
                {item.title}
              </span>
              <span className="text-[11px] sm:text-[11.5px] font-normal text-[#9FB3A5] tracking-normal leading-tight mt-0.5">
                {item.sub}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
