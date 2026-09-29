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
      imgWidth: 42,
      imgHeight: 36,
      brandText: "text-lg md:text-[20px]",
      subText: "text-[7.5px] md:text-[8.5px] tracking-[0.13em]",
      gap: "gap-2.5",
    },
    md: {
      imgWidth: 52,
      imgHeight: 44,
      brandText: "text-xl md:text-[23px]",
      subText: "text-[8.5px] md:text-[9.5px] tracking-[0.14em]",
      gap: "gap-2.5",
    },
    lg: {
      imgWidth: 68,
      imgHeight: 58,
      brandText: "text-2xl md:text-[28px]",
      subText: "text-[10px] md:text-[11px] tracking-[0.14em]",
      gap: "gap-3",
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
          className="object-contain drop-shadow-[0_2px_10px_rgba(190,160,107,0.3)]"
        />
      </div>

      {/* Brand Typography 1:1 matching Photo 3 */}
      {showText && (
        <div className="flex flex-col justify-center select-none pt-0.5">
          <span
            className={cn(
              "font-display font-bold leading-none uppercase tracking-[0.02em]",
              currentSize.brandText,
              isDarkBg
                ? "text-[#E2C388] bg-clip-text text-transparent bg-gradient-to-r from-[#F5DEB3] via-[#E2C388] to-[#C9A35A]"
                : "text-[#8F7745] bg-clip-text text-transparent bg-gradient-to-r from-[#8F7745] via-[#A88C52] to-[#735A27]"
            )}
            style={{
              textShadow: isDarkBg
                ? "0 2px 8px rgba(0,0,0,0.4)"
                : "none",
            }}
          >
            NABIOTA
          </span>
          <span
            className={cn(
              "font-sans font-bold uppercase mt-1 leading-none",
              currentSize.subText,
              isDarkBg ? "text-[#DFC48A]" : "text-[#7B6A45]"
            )}
          >
            HEALTH GROUP GERMANY
          </span>
        </div>
      )}
    </Link>
  );
}
