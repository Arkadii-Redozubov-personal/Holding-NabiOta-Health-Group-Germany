import React from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { HeroBadges, HeroBadgeItem } from "@/components/ui/HeroBadges";

interface PageHeroProps {
  eyebrow?: string;
  breadcrumb?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  badges?: HeroBadgeItem[];
  children?: React.ReactNode; // e.g. badges, buttons, breadcrumbs
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: string;
  className?: string;
}

export function PageHero({
  eyebrow,
  breadcrumb,
  title,
  description,
  badges,
  children,
  imageSrc = "/images/about/hero-doctors.webp",
  imageAlt = "NabiOta Health Group Germany",
  imagePosition,
  className = "",
}: PageHeroProps) {
  return (
    <section
      className={`relative w-full min-h-[480px] sm:min-h-[520px] lg:h-[600px] lg:min-h-[600px] pt-32 sm:pt-36 lg:pt-40 pb-14 sm:pb-16 overflow-hidden flex items-center bg-[#07150C] text-[#FAF8F5] border-b border-[#D5B878]/25 ${className}`}
    >
      {/* ── Background: Right Medical / Clinic Photo - focused on subjects on mobile, crisp on desktop ── */}
      <div className="absolute inset-0 lg:left-[18%] lg:w-[82%] z-0 pointer-events-none overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 82vw"
          className={`object-cover object-[72%_center] sm:object-[68%_center] lg:${imagePosition || "object-[center_25%]"}`}
        />
        {/* Desktop right-side subtle blend */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r lg:from-[#07150C]/25 lg:via-transparent lg:to-black/10" />
      </div>

      {/* ── Desktop SVG Diagonal Divider with Botanical Gold Background in Left Wing ── */}
      <svg
        className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-10"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Clip path for the narrower left wing (620 at top to 800 at bottom) */}
          <clipPath id="pageHeroLeftWingClip">
            <path d="M 0,0 L 620,0 C 710,180 680,420 800,600 L 0,600 Z" />
          </clipPath>

          <linearGradient id="pageHeroGoldGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DFC894" stopOpacity="0.4" />
            <stop offset="25%" stopColor="#ECCF93" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#D4B06A" stopOpacity="1" />
            <stop offset="75%" stopColor="#ECCF93" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#DFC894" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="pageHeroGoldGradLight" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ECCF93" stopOpacity="0.08" />
            <stop offset="35%" stopColor="#ECCF93" stopOpacity="0.45" />
            <stop offset="75%" stopColor="#DFC894" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#DFC894" stopOpacity="0.08" />
          </linearGradient>

          <filter id="pageHeroGoldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="pageHeroDarkFill" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#040F07" stopOpacity="0.45" />
            <stop offset="35%" stopColor="#051309" stopOpacity="0.55" />
            <stop offset="70%" stopColor="#07180D" stopOpacity="0.52" />
            <stop offset="100%" stopColor="#0A1E13" stopOpacity="0.38" />
          </linearGradient>
        </defs>

        {/* Botanical Gold Background Image inside the Left Wing (Photo 4) */}
        <image
          href="/images/botanical-gold-bg.webp"
          width="1440"
          height="600"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#pageHeroLeftWingClip)"
          opacity="0.95"
        />

        {/* Deep Dark Green shading overlay inside the Left Wing with reduced blur for crisp botanical visibility */}
        <path
          d="M 0,0 L 620,0 C 710,180 680,420 800,600 L 0,600 Z"
          fill="url(#pageHeroDarkFill)"
        />

        {/* Primary Glowing Golden Separator Arc Line (Narrower left position) */}
        <path
          d="M 620,0 C 710,180 680,420 800,600"
          stroke="url(#pageHeroGoldGrad)"
          strokeWidth="2"
          fill="none"
          filter="url(#pageHeroGoldGlow)"
        />

        {/* Secondary Fine Golden Accent Curve */}
        <path
          d="M 645,0 C 735,185 705,430 825,600"
          stroke="url(#pageHeroGoldGradLight)"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      {/* Mobile/Tablet: Botanical background texture + light transparent gradient */}
      <div className="lg:hidden absolute inset-0 z-0 pointer-events-none opacity-40">
        <Image
          src="/images/botanical-gold-bg.webp"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="lg:hidden absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#051208]/90 via-[#051208]/55 to-[#051208]/20" />

      {/* Top subtle vignette for seamless fixed header blend */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#051208]/85 to-transparent pointer-events-none z-10" />

      {/* ── Content Container (Comfortable max-w within narrower left wing) ── */}
      <Container size="wide" className="relative z-20">
        <div className="max-w-xl lg:max-w-[520px] xl:max-w-[600px]">
          {breadcrumb && <div className="mb-3.5 sm:mb-4">{breadcrumb}</div>}

          <div className="page-hero-title font-serif text-[28px] sm:text-[36px] lg:text-[38px] xl:text-[44px] font-normal leading-[1.15] tracking-[-0.01em] text-white mb-3 sm:mb-3.5 break-words [overflow-wrap:anywhere] hyphens-auto">
            {title}
          </div>

          {description && (
            <div className="hero-text-wrap text-[12.5px] sm:text-[13.5px] lg:text-[14px] text-[#D2DED5] leading-[1.65] font-sans max-w-xl font-normal mb-4 sm:mb-5 break-words [overflow-wrap:anywhere] hyphens-auto">
              {description}
            </div>
          )}

          {badges && badges.length > 0 && (
            <div className="mb-4 sm:mb-5">
              <HeroBadges items={badges} />
            </div>
          )}

          {children && <div className="pt-0.5">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
