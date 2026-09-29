import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SupportedLocale } from "@/lib/i18n";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  href?: string;
  locale?: SupportedLocale;
}

export function Logo({
  variant = "dark",
  className,
  showText = true,
  size = "md",
  href,
  locale,
}: LogoProps) {
  const isDarkBg = variant === "dark";

  const sizeClasses = {
    sm: {
      imgWidth: 44,
      imgHeight: 37,
      brandText: "text-lg md:text-xl",
      subText: "text-[8px] md:text-[9px] tracking-[0.22em]",
      gap: "gap-2.5",
    },
    md: {
      imgWidth: 56,
      imgHeight: 47,
      brandText: "text-xl md:text-2xl",
      subText: "text-[9px] md:text-[10px] tracking-[0.24em]",
      gap: "gap-3",
    },
    lg: {
      imgWidth: 72,
      imgHeight: 60,
      brandText: "text-2xl md:text-3xl",
      subText: "text-[11px] md:text-[12px] tracking-[0.26em]",
      gap: "gap-3.5",
    },
  };

  const currentSize = sizeClasses[size];
  const targetHref = href || (locale ? `/${locale}` : "/");

  return (
    <Link
      href={targetHref}
      className={cn("flex items-center group focus:outline-none", currentSize.gap, className)}
      aria-label="NabiOta Health Group Germany - Startseite"
    >
      {/* Official Vector Emblem from nLogo.svg */}
      <div className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/images/nLogo.svg"
          alt="NabiOta Health Group Germany Emblem"
          width={currentSize.imgWidth}
          height={currentSize.imgHeight}
          priority
          className="object-contain drop-shadow-[0_2px_12px_rgba(190,160,107,0.3)]"
        />
      </div>

      {/* Brand Typography 1:1 matching reference */}
      {showText && (
        <div className="flex flex-col justify-center select-none">
          <span
            className={cn(
              "font-display font-bold leading-none uppercase bg-clip-text text-transparent tracking-[0.14em]",
              currentSize.brandText,
              isDarkBg
                ? "bg-gradient-to-r from-[#F7DEB0] via-[#E2C388] to-[#BEA06B]"
                : "bg-gradient-to-r from-[#8F7745] via-[#BEA06B] to-[#735A27]"
            )}
            style={{
              textShadow: isDarkBg
                ? "0 2px 10px rgba(0,0,0,0.5)"
                : "0 1px 2px rgba(190,160,107,0.2)",
            }}
          >
            NABIOTA
          </span>
          <span
            className={cn(
              "font-sans font-bold uppercase mt-1 leading-none font-semibold",
              currentSize.subText,
              isDarkBg ? "text-[#E6D4B2]" : "text-[#7B6A45]"
            )}
          >
            HEALTH GROUP GERMANY
          </span>
        </div>
      )}
    </Link>
  );
}
