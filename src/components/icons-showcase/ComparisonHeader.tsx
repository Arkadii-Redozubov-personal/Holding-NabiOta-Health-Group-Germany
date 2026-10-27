"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ComparisonHeaderProps {
  currentTab?: "option-1" | "option-2" | "option-3" | "all";
}

export function ComparisonHeader({ currentTab }: ComparisonHeaderProps) {
  const pathname = usePathname();

  // If currentTab wasn't passed explicitly, infer from pathname
  const activeKey =
    currentTab ||
    (pathname?.includes("option-1")
      ? "option-1"
      : pathname?.includes("option-2")
      ? "option-2"
      : pathname?.includes("option-3")
      ? "option-3"
      : "all");

  const tabs = [
    {
      key: "option-1",
      href: "/icons-comparison/option-1",
      badge: "Вариант 1",
      title: "Phosphor Icons",
      subtitle: "Light Weight (Швейцарский минимализм)",
    },
    {
      key: "option-2",
      href: "/icons-comparison/option-2",
      badge: "Вариант 2",
      title: "Tabler Icons",
      subtitle: "Stroke 1.35 (Немецкий инжиниринг / Bauhaus)",
    },
    {
      key: "option-3",
      href: "/icons-comparison/option-3",
      badge: "Вариант 3",
      title: "Bespoke Sharp SVGs",
      subtitle: "Square Caps (Хирургическая точность)",
    },
    {
      key: "all",
      href: "/icons-comparison",
      badge: "Сравнение",
      title: "Бок о бок (Side-by-Side)",
      subtitle: "Матрица прямого сравнения всех 3-х",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#07130B]/95 backdrop-blur-md border-b border-[#D5B878]/25 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          {/* Left: Brand & Return */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D5B878] to-[#9C8145] flex items-center justify-center text-[#07130B] font-bold text-sm shadow-md">
                NH
              </div>
              <div>
                <div className="text-xs tracking-wider uppercase text-[#D5B878] font-semibold">
                  Сравнение стилей иконок
                </div>
                <div className="text-sm font-medium text-white/90">
                  NabiOta Health Group Germany
                </div>
              </div>
            </div>

            <Link
              href="/"
              className="lg:hidden text-xs text-[#D5B878] hover:text-white px-2 py-1 rounded border border-[#D5B878]/30 transition-colors"
            >
              ← Сайт
            </Link>
          </div>

          {/* Center: Tabs Switcher */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-1.5 p-1 bg-[#0F2417] rounded-xl border border-white/10">
            {tabs.map((tab) => {
              const isActive = activeKey === tab.key;
              return (
                <Link
                  key={tab.key}
                  href={tab.href}
                  className={`group relative flex-1 min-w-[140px] sm:min-w-0 px-3 py-1.5 rounded-lg text-center transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-[#D5B878] to-[#BEA06B] text-[#07130B] shadow-md font-semibold"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-center gap-1.5">
                    <span
                      className={`text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded ${
                        isActive
                          ? "bg-[#07130B]/20 text-[#07130B]"
                          : "bg-white/10 text-[#D5B878]"
                      }`}
                    >
                      {tab.badge}
                    </span>
                    <span className="text-xs truncate">{tab.title}</span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Right: Link back to main site on desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/"
              className="text-xs text-[#D5B878] hover:text-white transition-colors flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#D5B878]/40 hover:border-[#D5B878] hover:bg-white/5"
            >
              <span>← На главную сайта</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
