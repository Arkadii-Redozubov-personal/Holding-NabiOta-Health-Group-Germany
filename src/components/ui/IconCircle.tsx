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
    sm: "w-5 h-5",
    md: "w-7 h-7 md:w-8 md:h-8",
    lg: "w-9 h-9",
  };

  const variantClasses = {
    gold: "text-[#B89650]",
    forest: "text-[#173824]",
    dark: "text-[#ECCF96]",
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center transition-colors duration-300 flex-shrink-0",
        variantClasses[variant],
        className
      )}
    >
      <IconComponent
        className={cn(iconSizes[size])}
      />
    </div>
  );
}
