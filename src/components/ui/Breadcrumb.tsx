import React from "react";
import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav
      className={`flex items-center gap-2 text-xs sm:text-[12.5px] text-[#A2ADA4] font-sans ${className}`}
      aria-label="Breadcrumb"
    >
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            {idx > 0 && (
              <span className="text-[#A2ADA4]/70 text-[11px] font-semibold select-none px-0.5">
                ›
              </span>
            )}
            {isLast || !item.href ? (
              <span className="text-white/95 font-medium">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-[#D5B878] transition-colors"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
