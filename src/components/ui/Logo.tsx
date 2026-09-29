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
      imgWidth: 46,
      imgHeight: 40,
      brandText: "text-[19px] sm:text-[21px]",
      subText: "text-[7.5px] sm:text-[8.2px] tracking-[0.14em]",
      spacing: "-mt-[4px]",
      gap: "gap-2.5",
    },
    md: {
      imgWidth: 62,
      imgHeight: 54,
      brandText: "text-[23px] sm:text-[25.5px] xl:text-[28px]",
      subText: "text-[8.5px] sm:text-[9.2px] xl:text-[10px] tracking-[0.15em]",
      spacing: "-mt-[5.5px] sm:-mt-[6.5px]",
      gap: "gap-3",
    },
    lg: {
      imgWidth: 74,
      imgHeight: 64,
      brandText: "text-[27px] sm:text-[30px] xl:text-[33px]",
      subText: "text-[9.5px] sm:text-[10.5px] xl:text-[11.5px] tracking-[0.16em]",
      spacing: "-mt-[6.5px] sm:-mt-[8px]",
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
          className="object-contain drop-shadow-[0_2px_12px_rgba(219,171,66,0.35)]"
        />
      </div>

      {/* Brand Typography with exact gold gradient sheen & tight locking matching reference */}
      {showText && (
        <div className="flex flex-col justify-center select-none">
          <span
            className={cn(
              "font-display font-bold leading-[0.82] uppercase tracking-[0.02em] block",
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
              "font-sans font-bold uppercase leading-none block",
              currentSize.subText,
              currentSize.spacing,
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
