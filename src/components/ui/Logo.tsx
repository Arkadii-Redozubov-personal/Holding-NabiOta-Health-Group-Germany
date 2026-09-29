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
      imgWidth: 48,
      imgHeight: 42,
      brandText: "text-[21px] sm:text-[23px]",
      subText: "text-[8px] sm:text-[9px] tracking-[0.14em]",
      gap: "gap-2.5",
    },
    md: {
      imgWidth: 64,
      imgHeight: 56,
      brandText: "text-[26px] sm:text-[29px] xl:text-[32px]",
      subText: "text-[9.5px] sm:text-[10.5px] xl:text-[11.2px] tracking-[0.15em]",
      gap: "gap-3 sm:gap-3.5",
    },
    lg: {
      imgWidth: 78,
      imgHeight: 68,
      brandText: "text-[30px] sm:text-[34px] xl:text-[37px]",
      subText: "text-[11px] sm:text-[12px] xl:text-[13px] tracking-[0.17em]",
      gap: "gap-3.5 sm:gap-4",
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
          className="object-contain drop-shadow-[0_2px_12px_rgba(219,171,66,0.35)]"
        />
      </div>

      {/* Brand Typography with exact gold gradient sheen matching reference */}
      {showText && (
        <div className="flex flex-col justify-center select-none pt-0.5">
          <span
            className={cn(
              "font-display font-bold leading-none uppercase tracking-[0.02em]",
              currentSize.brandText,
              isDarkBg
                ? "bg-clip-text text-transparent bg-gradient-to-b from-[#FFF5D5] via-[#E2B34B] to-[#9E731C]"
                : "bg-clip-text text-transparent bg-gradient-to-b from-[#9E7A32] via-[#856524] to-[#634912]"
            )}
            style={{
              filter: isDarkBg ? "drop-shadow(0 1px 2px rgba(0,0,0,0.5))" : "none",
            }}
          >
            NABIOTA
          </span>
          <span
            className={cn(
              "font-sans font-bold uppercase mt-1 leading-none",
              currentSize.subText,
              isDarkBg ? "text-[#E8CD8C]" : "text-[#7B6A45]"
            )}
            style={{
              textShadow: isDarkBg ? "0 1px 2px rgba(0,0,0,0.4)" : "none",
            }}
          >
            HEALTH GROUP GERMANY
          </span>
        </div>
      )}
    </Link>
  );
}
