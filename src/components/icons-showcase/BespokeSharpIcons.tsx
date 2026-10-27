"use client";

import React from "react";

export interface SharpIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

// 1. Stethoscope - Sharp surgical precision
export function SharpStethoscope({ size = 24, className = "w-6 h-6", ...props }: SharpIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      {...props}
    >
      {/* Binaural earpieces */}
      <path d="M4 3h3v5a5 5 0 0 0 10 0V3h3" />
      <path d="M3 3h2M19 3h2" />
      {/* Central tube down */}
      <path d="M12 13v4a3 3 0 0 0 3 3h1" />
      {/* Chest piece & diaphragm */}
      <circle cx="18" cy="20" r="2.5" />
      <path d="M18 19v2M17 20h2" />
    </svg>
  );
}

// 2. Microscope - Crisp laboratory optics
export function SharpMicroscope({ size = 24, className = "w-6 h-6", ...props }: SharpIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      {...props}
    >
      {/* Objective angled barrel */}
      <path d="M6 3l6 6M8 2l6 6" />
      <path d="M9 7l4-4" />
      <path d="M5 11l3-3" />
      {/* Stand arm */}
      <path d="M12 10v4a4 4 0 0 1-4 4H5" />
      {/* Specimen stage */}
      <path d="M7 14h6" />
      {/* Solid precision base */}
      <path d="M3 21h18M8 21v-3h8v3" />
    </svg>
  );
}

// 3. Heartbeat / ECG - Sharp medical pulse monitor
export function SharpHeartbeat({ size = 24, className = "w-6 h-6", ...props }: SharpIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      {...props}
    >
      {/* Geometric faceted heart */}
      <path d="M12 21L3.5 12.5C1.5 10.5 1.5 7.2 3.5 5.2a5.2 5.2 0 0 1 7.4 0L12 6.3l1.1-1.1a5.2 5.2 0 0 1 7.4 0c2 2 2 5.3 0 7.3L12 21z" />
      {/* Sharp ECG pulse across center */}
      <path d="M2 12h5l2-4 3 8 2.5-5 1.5 1h6" />
    </svg>
  );
}

// 4. Hospital / Clinic Building - Modern German medical architecture
export function SharpHospital({ size = 24, className = "w-6 h-6", ...props }: SharpIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      {...props}
    >
      {/* Central building outline */}
      <rect x="4" y="3" width="16" height="18" />
      {/* Sharp medical cross */}
      <path d="M12 6v4M10 8h4" />
      {/* Entrance portal */}
      <path d="M10 21v-4h4v4" />
      {/* Clinical windows grid */}
      <path d="M7 12h2M15 12h2M7 15h2M15 15h2" />
    </svg>
  );
}

// 5. Shield / Holding Governance & Security
export function SharpShieldCheck({ size = 24, className = "w-6 h-6", ...props }: SharpIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      {...props}
    >
      {/* Faceted shield perimeter */}
      <path d="M12 2L4 5v7c0 5.5 3.5 10 8 11 4.5-1 8-5.5 8-11V5l-8-3z" />
      {/* Sharp checkmark */}
      <path d="M8.5 12.5l2.5 2.5 5-5.5" />
    </svg>
  );
}

// 6. Scales of Justice / Legal Compliance (§ 95 SGB V)
export function SharpScales({ size = 24, className = "w-6 h-6", ...props }: SharpIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      {...props}
    >
      {/* Central column & base */}
      <path d="M12 3v18M8 21h8" />
      {/* Top beam */}
      <path d="M3 7h18" />
      {/* Left scale pan */}
      <path d="M3 7l3 6M9 7L6 13" />
      <path d="M3 13h6" />
      {/* Right scale pan */}
      <path d="M15 7l3 6M21 7l-3 6" />
      <path d="M15 13h6" />
      {/* Top finial */}
      <rect x="11" y="2" width="2" height="2" />
    </svg>
  );
}

// 7. Handshake / Strategic Partnerships
export function SharpHandshake({ size = 24, className = "w-6 h-6", ...props }: SharpIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      {...props}
    >
      <path d="M11 15l2 2 5-5-2.5-2.5-3 3-1.5-1.5" />
      <path d="M6 10l5-5 3.5 3.5-3.5 3.5" />
      <path d="M2 14l4 4 3-3" />
      <path d="M18 6l4 4-4 4" />
    </svg>
  );
}

// 8. Diamond / Excellence & Highest Medical Quality
export function SharpDiamond({ size = 24, className = "w-6 h-6", ...props }: SharpIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      {...props}
    >
      <path d="M6 3h12l4 7-10 11L2 10l4-7z" />
      <path d="M2 10h20M12 21L8 10l4-7 4 7-4 11" />
    </svg>
  );
}

// 9. Users / Holding Board & Leadership Team
export function SharpUsers({ size = 24, className = "w-6 h-6", ...props }: SharpIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      {...props}
    >
      {/* Center user */}
      <circle cx="12" cy="7" r="3.5" />
      <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      {/* Left side user */}
      <path d="M5 9a3 3 0 1 0 0-6" />
      <path d="M2 18v-1.5a3.5 3.5 0 0 1 3-3.5" />
      {/* Right side user */}
      <path d="M19 9a3 3 0 1 1 0-6" />
      <path d="M22 18v-1.5a3.5 3.5 0 0 0-3-3.5" />
    </svg>
  );
}

// 10. Rehabilitation / Mobility Recovery
export function SharpRehabilitation({ size = 24, className = "w-6 h-6", ...props }: SharpIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      {...props}
    >
      <circle cx="13" cy="4" r="2" />
      {/* Kinetic stride */}
      <path d="M7 21l3-7 3 2v5" />
      <path d="M10 14l3-5 4 3 2-2" />
      {/* Precision cane / rehabilitation support ray */}
      <path d="M19 12v9" />
    </svg>
  );
}

// 11. Home Care & Nursing / Schutz & Fürsorge
export function SharpHomeCare({ size = 24, className = "w-6 h-6", ...props }: SharpIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      {...props}
    >
      {/* House outline */}
      <path d="M3 10l9-7 9 7v10H3V10z" />
      {/* Heart inside home */}
      <path d="M12 16.5l-2-2a2 2 0 0 1 0-2.8 2 2 0 0 1 2.8 0L12 12l.2-.3a2 2 0 0 1 2.8 0 2 2 0 0 1 0 2.8l-2 2z" />
    </svg>
  );
}

// 12. Real Estate / Healthcare Infrastructure
export function SharpRealEstate({ size = 24, className = "w-6 h-6", ...props }: SharpIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      {...props}
    >
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 10h2M13 10h2M9 14h2M13 14h2M11 21v-4h2v4" />
    </svg>
  );
}

// 13. International / Global Network
export function SharpGlobe({ size = 24, className = "w-6 h-6", ...props }: SharpIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a13 13 0 0 1 4 9 13 13 0 0 1-4 9 13 13 0 0 1-4-9 13 13 0 0 1 4-9z" />
    </svg>
  );
}

// 14. Arrow Right - Crisp precision arrow
export function SharpArrowRight({ size = 24, className = "w-6 h-6", ...props }: SharpIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      {...props}
    >
      <path d="M4 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

// 15. Arrow Up Right - External / Action link
export function SharpArrowUpRight({ size = 24, className = "w-6 h-6", ...props }: SharpIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      {...props}
    >
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

// 16. Chevron Down - Sharp Accordion toggle
export function SharpChevronDown({ size = 24, className = "w-6 h-6", ...props }: SharpIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      {...props}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

// 17. Chevron Up
export function SharpChevronUp({ size = 24, className = "w-6 h-6", ...props }: SharpIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      {...props}
    >
      <path d="M18 15l-6-6-6 6" />
    </svg>
  );
}

// 18. Award / German Certification
export function SharpAward({ size = 24, className = "w-6 h-6", ...props }: SharpIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      {...props}
    >
      <circle cx="12" cy="8" r="5" />
      <path d="M8.2 12.5L7 21l5-3 5 3-1.2-8.5" />
    </svg>
  );
}

// 19. Network / Healthcare Ecosystem
export function SharpNetwork({ size = 24, className = "w-6 h-6", ...props }: SharpIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      {...props}
    >
      <rect x="9" y="2" width="6" height="5" />
      <rect x="2" y="16" width="6" height="6" />
      <rect x="16" y="16" width="6" height="6" />
      <path d="M12 7v5M5 16v-4h14v4" />
    </svg>
  );
}

// 20. Pharmacy / Pill & Medication
export function SharpPill({ size = 24, className = "w-6 h-6", ...props }: SharpIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      {...props}
    >
      <rect x="3" y="10" width="18" height="8" transform="rotate(-45 12 14)" />
      <path d="M7 17l10-10" />
    </svg>
  );
}
