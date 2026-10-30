import React from "react";
import { ArrowUpRight, ArrowRight } from "@/lib/icons";
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
    sm: "w-5.5 h-5.5 text-xs",
    md: "w-6.5 h-6.5 text-sm",
    lg: "w-7.5 h-7.5 text-base",
  };

  const iconSizes = {
    sm: "w-4.5 h-4.5",
    md: "w-5 h-5",
    lg: "w-5.5 h-5.5",
  };

  const variantClasses = {
    gold: "text-[#B89650] hover:text-[#8C6D2D]",
    forest: "text-forest-900 hover:text-forest-700",
    dark: "text-ivory-50 hover:text-gold-400",
  };

  const Icon = direction === "right" ? ArrowRight : ArrowUpRight;

  return (
    <div
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(
        "flex items-center justify-center transition-all duration-300 flex-shrink-0 cursor-pointer",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <Icon
        className={cn(
          "transition-transform duration-300 group-hover:translate-x-1",
          iconSizes[size]
        )}
      />
    </div>
  );
}
