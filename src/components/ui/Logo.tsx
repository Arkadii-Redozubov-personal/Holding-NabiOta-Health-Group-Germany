import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
  showText?: boolean;
}

export function Logo({
  variant = "dark",
  className,
  showText = true,
}: LogoProps) {
  const isDarkBg = variant === "dark"; // on dark green bg (white/gold text)

  return (
    <Link
      href="/"
      className={cn("flex items-center gap-3 group focus:outline-none", className)}
      aria-label="NabiOta Health Group Germany - Startseite"
    >
      {/* Golden Medical Emblem */}
      <div className="relative w-10 h-10 md:w-11 md:h-11 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_2px_8px_rgba(190,160,107,0.3)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DFC89E" />
              <stop offset="50%" stopColor="#BEA06B" />
              <stop offset="100%" stopColor="#8F7745" />
            </linearGradient>
            <linearGradient id="innerGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF3DC" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#BEA06B" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Outer Ring */}
          <circle
            cx="50"
            cy="50"
            r="46"
            stroke="url(#goldGradient)"
            strokeWidth="2.5"
            strokeDasharray="1 0"
          />

          {/* Inner Accent Ring */}
          <circle
            cx="50"
            cy="50"
            r="41"
            stroke="url(#goldGradient)"
            strokeWidth="1"
            strokeOpacity="0.6"
          />

          {/* Laurel / Botanical Leaves Motif */}
          <path
            d="M 22 58 C 21 44 26 30 38 21 C 36 26 37 34 40 37 C 36 31 38 24 45 19 C 45 27 49 32 50 35"
            stroke="url(#goldGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />
          <path
            d="M 78 58 C 79 44 74 30 62 21 C 64 26 63 34 60 37 C 64 31 62 24 55 19 C 55 27 51 32 50 35"
            stroke="url(#goldGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />

          {/* Stylized N */}
          <text
            x="44"
            y="66"
            fontFamily="var(--font-serif), Georgia, serif"
            fontSize="46"
            fontWeight="500"
            fill="url(#goldGradient)"
            textAnchor="middle"
          >
            N
          </text>

          {/* Medical Cross Plus Symbol */}
          <path
            d="M 66 38 L 74 38 M 70 34 L 70 42"
            stroke="url(#goldGradient)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Wordmark */}
      {showText && (
        <div className="flex flex-col tracking-tight">
          <span
            className={cn(
              "font-display text-xl md:text-2xl font-semibold leading-none tracking-wider uppercase",
              isDarkBg ? "text-ivory-50" : "text-forest-950"
            )}
          >
            NabiOta
          </span>
          <span
            className={cn(
              "text-[9px] md:text-[10px] font-medium tracking-[0.24em] uppercase mt-1",
              isDarkBg ? "text-gold-300" : "text-forest-700"
            )}
          >
            Health Group Germany
          </span>
        </div>
      )}
    </Link>
  );
}
