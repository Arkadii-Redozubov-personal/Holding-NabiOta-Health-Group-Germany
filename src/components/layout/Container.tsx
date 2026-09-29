import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
}

export function Container({
  children,
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-full px-5 sm:px-8 md:px-12 lg:px-16",
        size === "default" && "max-w-[1240px]",
        size === "wide" && "max-w-[1400px]",
        size === "narrow" && "max-w-[960px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
