"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Accessibility,
  Award,
  ArrowRight,
  Heart,
  Home,
  Pill,
  ShieldCheck,
  Stethoscope,
  Users,
} from "@/lib/icons";
import { Container } from "@/components/layout/Container";
import type { CareServiceModalData } from "@/data/care-services";

interface CareCatalogSectionProps {
  actionLabel: string;
  description: string;
  onSelect: (item: CareServiceModalData) => void;
  title: string;
}

interface CareServicesCatalogProps extends CareCatalogSectionProps {
  services: CareServiceModalData[];
}

interface SanitaetshausCatalogProps extends CareCatalogSectionProps {
  supplies: CareServiceModalData[];
}

function renderServiceIcon(iconType: string) {
  switch (iconType) {
    case "stethoscope":
      return <Stethoscope className="w-4 h-4 stroke-[1.5]" />;
    case "award":
      return <Award className="w-4 h-4 stroke-[1.5]" />;
    case "heart":
      return <Heart className="w-4 h-4 stroke-[1.5]" />;
    case "shield":
      return <ShieldCheck className="w-4 h-4 stroke-[1.5]" />;
    case "pill":
      return <Pill className="w-4 h-4 stroke-[1.5]" />;
    case "users":
      return <Users className="w-4 h-4 stroke-[1.5]" />;
    default:
      return <Heart className="w-4 h-4 stroke-[1.5]" />;
  }
}

export function CareServicesCatalog({
  services,
  title,
  description,
  actionLabel,
  onSelect,
}: CareServicesCatalogProps) {
  const [activeId, setActiveId] = useState<string>(services[0]?.id || "");
  const activeService = services.find((s) => s.id === activeId) || services[0];

  if (!activeService) return null;

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-[#FAF9F5] border-t border-[#EDE8DE]">
      <Container size="wide">
        {/* Header - No eyebrows, no badges */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#132218] font-normal leading-tight mb-3">
            {title}
          </h2>
          <p className="text-xs sm:text-[13.5px] text-[#4E5650] leading-relaxed max-w-2xl font-sans">
            {description}
          </p>
        </div>

        {/* Top Featured Card (Matching reference photo, with no eyebrows and no badges) */}
        <div
          onClick={() => onSelect(activeService)}
          className="relative bg-white rounded-2xl sm:rounded-3xl border border-[#EAE4D7] shadow-[0_3px_20px_rgba(19,34,24,0.04)] overflow-hidden mb-6 sm:mb-8 p-4 sm:p-6 lg:p-7 transition-all duration-300 hover:shadow-md cursor-pointer group"
        >
          {/* Subtle Botanical Watermark on the Right */}
          <div className="absolute right-0 top-0 bottom-0 w-64 sm:w-80 pointer-events-none opacity-20 overflow-hidden select-none">
            <Image
              src="/images/areas/botanical-branch-clean.webp"
              alt=""
              fill
              className="object-contain object-right"
            />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-10">
            {/* Left: Featured Service Photo */}
            <div className="w-full md:w-[46%] lg:w-[44%] relative aspect-[16/10] sm:aspect-[16/9.5] rounded-xl sm:rounded-2xl overflow-hidden shadow-xs bg-neutral-100 shrink-0">
              <Image
                src={activeService.image}
                alt={activeService.title}
                fill
                className="object-cover group-hover:scale-102 transition-transform duration-500"
                priority
              />
            </div>

            {/* Right: Featured Content */}
            <div className="flex-1 min-w-0 pr-2 sm:pr-6">
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-[32px] text-[#142318] font-normal leading-tight mb-2.5">
                {activeService.title}
              </h3>
              <p className="font-sans text-xs sm:text-[13.5px] text-[#55695C] leading-relaxed max-w-xl mb-5">
                {activeService.shortDesc}
              </p>

              {/* Bottom "Подробнее →" with arrow */}
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-[13.5px] font-semibold text-[#142318] group-hover:text-[#8C6D2B] transition-colors">
                  <span>{actionLabel || "Подробнее"}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#8C6D2B]" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: 6 Cards Grid (Matching reference photo) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {services.map((svc) => {
            const isActive = svc.id === activeService.id;

            return (
              <div
                key={svc.id}
                onClick={() => setActiveId(svc.id)}
                className={`rounded-2xl p-2.5 sm:p-3 transition-all duration-300 flex flex-col justify-between cursor-pointer group bg-white ${
                  isActive
                    ? "border-2 border-[#132B1E] shadow-sm bg-[#FAF8F5]"
                    : "border border-[#EAE4D7] hover:border-[#D5B878] shadow-2xs hover:shadow-md"
                }`}
              >
                <div>
                  {/* Card Thumbnail Photo */}
                  <div className="relative aspect-[16/11] w-full rounded-xl overflow-hidden bg-neutral-100 mb-2.5">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    />
                  </div>

                  {/* Title & Gold Heraldic Icon */}
                  <div className="flex items-start justify-between gap-1.5 pt-0.5">
                    <h4
                      className={`font-serif text-[11.5px] sm:text-[12.5px] line-clamp-2 leading-snug transition-colors ${
                        isActive
                          ? "font-bold text-[#132B1E]"
                          : "font-semibold text-[#142318] group-hover:text-[#8C6D2B]"
                      }`}
                    >
                      {svc.title}
                    </h4>
                    <div className="text-[#8C6D2B] shrink-0 mt-0.5">
                      {renderServiceIcon(svc.iconType)}
                    </div>
                  </div>
                </div>

                {/* Bottom Left Circle Button */}
                <div className="pt-3 flex items-center justify-between">
                  <div
                    className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border flex items-center justify-center transition-all ${
                      isActive
                        ? "border-[#132B1E] bg-[#132B1E] text-white"
                        : "border-[#D5B878]/60 text-[#8C6D2B] group-hover:border-[#132B1E] group-hover:bg-[#132B1E] group-hover:text-white"
                    }`}
                  >
                    <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function SanitaetshausCatalog({
  supplies,
  title,
  description,
  actionLabel,
  onSelect,
}: SanitaetshausCatalogProps) {
  return (
        <section className="py-16 sm:py-24 bg-[#FCFAF6] border-t border-[#EAE3D5] relative overflow-hidden">
          <Container size="wide">
            {/* Sanitätshaus Header */}
            <div className="max-w-3xl mb-12 sm:mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#0F2A1D] font-normal leading-tight mb-4">
                {title}
              </h2>
              <p className="text-sm sm:text-base text-[#4A5D52] leading-relaxed">
                {description}
              </p>
            </div>

            {/* 4 Sanitätshaus Divisions Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supplies.map((supply) => (
                <div
                  key={supply.id}
                  className="bg-white rounded-3xl overflow-hidden border border-[#E6DFD1] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Image Header without Badge */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={supply.image}
                        alt={supply.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="text-[#93712C] mb-3 flex items-center">
                        {supply.iconType === "accessibility" && <Accessibility className="w-7 h-7" />}
                        {supply.iconType === "home" && <Home className="w-7 h-7" />}
                        {supply.iconType === "pill" && <Pill className="w-7 h-7" />}
                      </div>

                      <h3 className="font-serif text-lg font-bold text-[#0F2A1D] mb-2 leading-snug">
                        {supply.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#556358] leading-relaxed mb-4">
                        {supply.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Card Button */}
                  <div className="px-6 pb-6 pt-2">
                    <button
                      type="button"
                      onClick={() => onSelect(supply)}
                      className="w-full py-2.5 px-4 rounded-xl border border-[#D5B878] bg-[#FAF8F3] hover:bg-[#C5A56A] hover:text-white text-forest-950 font-semibold text-xs tracking-wide transition-all flex items-center justify-center gap-2 group/btn cursor-pointer shadow-xs"
                    >
                      <span>{actionLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
  );
}
