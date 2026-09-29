import React from "react";
import {
  Stethoscope,
  Microscope,
  HeartPulse,
  Users,
  Network,
  Globe,
  Building2,
  ActivitySquare,
  UserCheck,
  Home,
  PlusCircle,
  Users2,
  Cog,
  Handshake,
  Lightbulb,
  Shield,
  ShieldCheck,
  Eye,
  Heart,
  Diamond,
  Leaf,
  Briefcase,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  Microscope,
  HeartPulse,
  Users,
  Network,
  Globe,
  Building2,
  ActivitySquare,
  UserCheck,
  Home,
  PlusCircle,
  Users2,
  Cog,
  Handshake,
  Lightbulb,
  Shield,
  ShieldCheck,
  Eye,
  Heart,
  Diamond,
  Leaf,
  Briefcase,
};

interface IconCircleProps {
  name: string;
  size?: "sm" | "md" | "lg";
  variant?: "gold" | "forest" | "dark";
  className?: string;
}

export function IconCircle({
  name,
  size = "md",
  variant = "gold",
  className,
}: IconCircleProps) {
  const IconComponent = iconMap[name] || Heart;

  const sizeClasses = {
    sm: "w-9 h-9",
    md: "w-12 h-12 md:w-14 md:h-14",
    lg: "w-16 h-16",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5 md:w-6 md:h-6",
    lg: "w-7 h-7",
  };

  const variantClasses = {
    gold: "border border-gold-400/50 text-gold-500 bg-gold-400/5",
    forest: "border border-forest-800/30 text-forest-800 bg-forest-800/5",
    dark: "border border-gold-400/40 text-gold-300 bg-forest-900/60 shadow-inner",
  };

  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <IconComponent
        className={cn(iconSizes[size])}
        strokeWidth={1.5}
      />
    </div>
  );
}
