import React from "react";

export function StethoscopeIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 4.5v5.5a7 7 0 0 0 14 0V4.5" />
      <path d="M5.5 4.5h3M19.5 4.5h3" />
      <path d="M14 17v2.5a4.5 4.5 0 0 0 9 0v-1" />
      <circle cx="23" cy="18.5" r="2.2" />
    </svg>
  );
}

export function MicroscopeIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 23.5h16" />
      <path d="M10 20.5h8" />
      <path d="M14 20.5v-4" />
      <rect
        x="13"
        y="4"
        width="5"
        height="8.5"
        rx="1.5"
        transform="rotate(45 15.5 8.25)"
      />
      <path d="M17 9.5l-4 4" />
      <path d="M19.5 15.5a5 5 0 0 1-5.5 5" />
      <circle cx="10" cy="16.5" r="1.5" />
    </svg>
  );
}

export function HeartPulseIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M14 24.5l-1.3-1.2C6 17.5 2 13.8 2 9.2 2 5.5 4.9 2.5 8.5 2.5c2.1 0 4.1 1 5.5 2.6 1.4-1.6 3.4-2.6 5.5-2.6 3.6 0 6.5 3 6.5 6.7 0 4.6-4 8.3-10.7 14.1L14 24.5z" />
      <path d="M6 10h3.2l1.6-3 3.2 7 2-4h4" />
    </svg>
  );
}

export function PflegeIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M14 18c-4.5 0-8 2.5-8 5.5V25h16v-1.5c0-3-3.5-5.5-8-5.5Z" />
      <circle cx="14" cy="9" r="4.5" />
      <path d="M4 17c.8-2 2.8-3.5 5-4" />
      <path d="M24 17c-.8-2-2.8-3.5-5-4" />
    </svg>
  );
}

export function OrgChartIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="10.5" y="3.5" width="7" height="5.5" rx="1.2" />
      <rect x="3.5" y="19" width="6.5" height="5.5" rx="1.2" />
      <rect x="11" y="19" width="6" height="5.5" rx="1.2" />
      <rect x="18" y="19" width="6.5" height="5.5" rx="1.2" />
      <path d="M14 9v5.5" />
      <path d="M6.8 14.5h14.4" />
      <path d="M6.8 14.5V19M14 14.5V19M21.2 14.5V19" />
    </svg>
  );
}

export function GlobeIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="14" cy="14" r="10.5" />
      <path d="M3.5 14h21" />
      <path d="M14 3.5c3.2 3.5 5 7.5 5 10.5s-1.8 7-5 10.5c-3.2-3.5-5-7.5-5-10.5s1.8-7 5-10.5Z" />
    </svg>
  );
}

export function ShieldCheckIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M14 3.5L5 7.5v6.5c0 6 3.8 10 9 11.5 5.2-1.5 9-5.5 9-11.5V7.5L14 3.5Z" />
      <path d="M10 14l2.8 2.8L18 11.2" />
    </svg>
  );
}

export function NetworkBoxesIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="11" y="4" width="6" height="5" rx="0.75" />
      <path d="M14 9v4" />
      <path d="M7 13h14" />
      <path d="M7 13v4M21 13v4" />
      <rect x="4" y="17" width="6" height="5" rx="0.75" />
      <rect x="18" y="17" width="6" height="5" rx="0.75" />
    </svg>
  );
}

export function TeamIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="14" cy="9" r="3" />
      <path d="M8.5 21.5c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5" />
      <circle cx="7.5" cy="11.5" r="2.2" />
      <path d="M3 21.5c0-2.2 1.8-4 4-4.2" />
      <circle cx="20.5" cy="11.5" r="2.2" />
      <path d="M21 17.3c2.2.2 4 2 4 4.2" />
    </svg>
  );
}

export function InfinityIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M23 11c3.5 0 5 2.5 5 5s-1.5 5-5 5c-4 0-6.5-5-9-5s-5 5-9 5c-3.5 0-5-2.5-5-5s1.5-5 5-5c4 0 6.5 5 9 5s5-5 9-5Z" />
    </svg>
  );
}
