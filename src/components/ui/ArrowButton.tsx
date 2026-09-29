import React from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArrowButtonProps {
  direction?: "right" | "up-right";
  variant?: "gold" | "forest" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  "aria-label"?: string;
}

export function ArrowButton({
  direction = "right",
  variant = "gold",
  size = "md",
  className,
  onClick,
  "aria-label": ariaLabel = "Details anzeigen",
}: ArrowButtonProps) {
  const sizeClasses = {
    sm: "w-7 h-7 text-xs",
    md: "w-8 h-8 text-sm",
    lg: "w-10 h-10 text-base",
  };

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-3.5 h-3.5",
    lg: "w-4 h-4",
  };

  const variantClasses = {
    gold: "border border-gold-400/50 text-gold-500 bg-white/70 hover:bg-gold-400 hover:text-forest-950 hover:border-gold-400",
    forest: "border border-forest-900/20 text-forest-900 bg-transparent hover:bg-forest-900 hover:text-ivory-50",
    dark: "border border-white/20 text-ivory-50 bg-white/5 hover:bg-gold-400 hover:text-forest-950 hover:border-gold-400",
  };

  const Icon = direction === "right" ? ArrowRight : ArrowUpRight;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(
        "rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-105 flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 cursor-pointer",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <Icon
        className={cn(
          "transition-transform duration-300 group-hover:translate-x-0.5",
          iconSizes[size]
        )}
      />
    </button>
  );
}
