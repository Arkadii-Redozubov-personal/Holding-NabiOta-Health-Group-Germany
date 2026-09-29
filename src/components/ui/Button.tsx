import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold-solid" | "gold-outline" | "cream" | "dark-outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  showArrow?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "gold-solid",
  size = "md",
  href,
  showArrow = true,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-medium transition-all duration-300 rounded-full group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 cursor-pointer text-center";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3 gap-2.5",
  };

  const variantStyles = {
    "gold-solid":
      "bg-gradient-to-r from-gold-400 to-gold-500 text-forest-950 font-semibold shadow-sm hover:from-gold-300 hover:to-gold-400 hover:shadow-md",
    "gold-outline":
      "border border-gold-400/60 text-ivory-50 hover:bg-gold-400/10 hover:border-gold-300",
    "cream":
      "bg-[#EFE9DF] text-forest-950 font-semibold hover:bg-gold-300 shadow-sm",
    "dark-outline":
      "border border-forest-900/20 text-forest-950 hover:border-gold-500 hover:text-gold-600 bg-transparent",
  };

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          className={cn(
            "transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0",
            size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"
          )}
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {content}
    </button>
  );
}
