import React from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  variant?: "gold" | "forest" | "cream";
  className?: string;
}

export function Eyebrow({
  children,
  variant = "gold",
  className,
}: EyebrowProps) {
  const variantStyles = {
    gold: "text-gold-400",
    forest: "text-forest-700",
    cream: "text-ivory-100/90",
  };

  return (
    <span
      className={cn(
        "inline-block text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase mb-3",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
