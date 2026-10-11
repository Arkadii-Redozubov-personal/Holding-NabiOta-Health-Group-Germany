"use client";

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
} from "lucide-react";
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

export function CareServicesCatalog({
  services,
  title,
  description,
  actionLabel,
  onSelect,
}: CareServicesCatalogProps) {
  return (
        <section id="services" className="py-14 sm:py-20 bg-[#FAF9F5]">
          <Container size="wide">
            {/* Header */}
            <div className="max-w-3xl mb-12 sm:mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-forest-950 font-normal leading-tight mb-4">
                {title}
              </h2>
              <p className="text-sm sm:text-base text-[#4E5650] leading-relaxed max-w-2xl">
                {description}
              </p>
            </div>

            {/* 6 Cards Grid: 3 cols x 2 rows */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {services.map((svc) => (
                <div
                  key={svc.id}
                  onClick={() => onSelect(svc)}
                  className="rounded-3xl bg-white border border-[#EAE4D7] shadow-sm hover:shadow-xl hover:border-[#C5A56A] transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
                >
                  {/* Photo without badge */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#07150C]">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Card Content with circular icon overlapping the image & gentle wave */}
                  <div className="relative bg-white pt-2 pb-6 px-6 sm:px-7 flex-1 flex flex-col justify-between">
                    {/* Curved wave transition at top */}
                    <div className="absolute -top-6 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
                      <svg
                        viewBox="0 0 400 32"
                        preserveAspectRatio="none"
                        className="w-full h-7 fill-white"
                      >
                        <path d="M 0,16 C 18,5 34,0 64,0 C 98,0 118,13 145,17 C 225,27 325,16 400,13 L 400,32 L 0,32 Z" />
                      </svg>
                    </div>

                    {/* Circular Icon with light green background overlapping photo */}
                    <div className="relative -mt-9 mb-3.5 z-10">
                      <div className="w-12 h-12 rounded-full bg-[#E5F0E8] border border-[#CCE0D2] flex items-center justify-center text-[#1C3E2A] shadow-xs group-hover:scale-105 transition-transform">
                        {svc.iconType === "stethoscope" && <Stethoscope className="w-6 h-6 stroke-[1.8]" />}
                        {svc.iconType === "award" && <Award className="w-6 h-6 stroke-[1.8]" />}
                        {svc.iconType === "heart" && <Heart className="w-6 h-6 stroke-[1.8]" />}
                        {svc.iconType === "shield" && <ShieldCheck className="w-6 h-6 stroke-[1.8]" />}
                        {svc.iconType === "pill" && <Pill className="w-6 h-6 stroke-[1.8]" />}
                        {svc.iconType === "users" && <Users className="w-6 h-6 stroke-[1.8]" />}
                      </div>
                    </div>

                    {/* Title & Description on white background */}
                    <div className="space-y-2 mb-4">
                      <h3 className="font-serif text-xl sm:text-[21px] font-bold text-[#142318] leading-tight group-hover:text-[#8D6B27] transition-colors">
                        {svc.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#55695C] leading-relaxed">
                        {svc.shortDesc}
                      </p>
                    </div>

                    {/* Bottom Action Area: Pill Button + Circle Arrow Button */}
                    <div className="pt-4 mt-auto border-t border-[#F2ECE1] flex items-center justify-between">
                      <span className="px-4 py-2 rounded-full bg-[#FAF3E7] text-[#93712C] text-xs font-semibold group-hover:bg-[#F5EAD4] transition-colors">
                        {actionLabel}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-[#FAF3E7] border border-[#EADBBE] flex items-center justify-center text-[#93712C] group-hover:bg-[#C5A56A] group-hover:text-white group-hover:border-[#C5A56A] transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
                      <div className="w-10 h-10 rounded-2xl bg-[#FAF6EE] border border-[#EADBBE] flex items-center justify-center text-[#93712C] mb-4 group-hover:bg-[#C5A56A] group-hover:text-white transition-colors">
                        {supply.iconType === "accessibility" && <Accessibility className="w-5 h-5 stroke-[1.8]" />}
                        {supply.iconType === "home" && <Home className="w-5 h-5 stroke-[1.8]" />}
                        {supply.iconType === "pill" && <Pill className="w-5 h-5 stroke-[1.8]" />}
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
