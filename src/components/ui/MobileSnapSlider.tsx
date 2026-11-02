"use client";

import React, { useRef, useState } from "react";
import { ChevronRight } from "@/lib/icons";
import { cn } from "@/lib/utils";

interface MobileSnapSliderProps {
  children: React.ReactNode;
  /** Wrapper classes. */
  className?: string;
  /**
   * Classes for the scroll track. On mobile it is a horizontal swipe track;
   * pass `sm:` classes (e.g. `sm:grid sm:grid-cols-3 sm:overflow-visible`)
   * to switch to a regular layout on larger screens.
   */
  trackClassName?: string;
  /** Classes for every slide wrapper (use it to set the slide width on mobile). */
  slideClassName?: string;
  /** Number of pagination dots. Defaults to one dot per two slides. */
  dotCount?: number;
  nextLabel?: string;
  dotLabel?: string;
}

/**
 * Swipeable scroll-snap slider shown only on mobile (< sm):
 * floating "next" arrow on the right edge + pagination dots below.
 * The arrow wraps back to the start after the last page.
 */
export function MobileSnapSlider({
  children,
  className,
  trackClassName,
  slideClassName,
  dotCount,
  nextLabel = "Next",
  dotLabel = "Go to slide",
}: MobileSnapSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const slides = React.Children.toArray(children);
  const dots = Math.max(1, dotCount ?? Math.ceil(slides.length / 2));

  const scrollToDot = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const target = Math.max(0, Math.min(index, dots - 1));
    track.scrollTo({
      left: dots > 1 ? (maxScroll * target) / (dots - 1) : 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll <= 0) return;
    setActiveDot(Math.round((track.scrollLeft / maxScroll) * (dots - 1)));
  };

  const handleNext = () => scrollToDot(activeDot >= dots - 1 ? 0 : activeDot + 1);

  return (
    <div className={cn("relative", className)}>
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className={cn(
          "flex overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          trackClassName
        )}
      >
        {slides.map((slide, index) => (
          <div key={index} className={cn("shrink-0 snap-start", slideClassName)}>
            {slide}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={handleNext}
        aria-label={nextLabel}
        className="sm:hidden absolute right-0 top-[calc(50%-1rem)] -translate-y-1/2 translate-x-1/4 z-10 w-9 h-9 rounded-full bg-white shadow-[0_4px_14px_rgba(20,35,24,0.2)] flex items-center justify-center text-[#18261C] active:scale-95 transition-transform"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="sm:hidden flex items-center justify-center mt-3">
        {Array.from({ length: dots }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => scrollToDot(index)}
            aria-label={`${dotLabel} ${index + 1}`}
            aria-current={index === activeDot}
            className="p-1.5"
          >
            <span
              className={cn(
                "block w-2 h-2 rounded-full transition-colors duration-200",
                index === activeDot ? "bg-[#D9A441]" : "bg-[#D8D5CE]"
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
