import React from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string;
  theme?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
  action?: React.ReactNode;
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  theme = "light",
  align = "left",
  className,
  action,
  as: HeadingTag = "h2",
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14",
        align === "center" && "text-center md:items-center",
        className
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        {eyebrow && (
          <Eyebrow variant="gold">{eyebrow}</Eyebrow>
        )}
        <HeadingTag
          className={cn(
            "font-display text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.08] tracking-[-0.015em]",
            isDark ? "text-ivory-50" : "text-forest-950"
          )}
        >
          {title}
        </HeadingTag>
        {description && (
          <p
            className={cn(
              "mt-4 text-sm sm:text-base leading-relaxed font-sans",
              isDark ? "text-ivory-200/80" : "text-text-secondary"
            )}
          >
            {description}
          </p>
        )}
      </div>

      {action && <div className="flex-shrink-0 self-start md:self-end">{action}</div>}
    </div>
  );
}
