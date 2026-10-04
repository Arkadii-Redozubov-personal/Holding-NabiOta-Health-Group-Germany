"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Navigation,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Stethoscope,
  Microscope,
  HandHeart,
  Building2,
  Car,
  Train,
} from "lucide-react";
import { SupportedLocale } from "@/lib/i18n";
import { Container } from "@/components/layout/Container";

interface RegionalPresenceMapProps {
  currentLocale?: SupportedLocale;
  className?: string;
}

interface RegionalHub {
  id: string;
  name: string;
  tag: string;
  category: "all" | "clinics" | "diagnostics" | "care";
  badge: string;
  title: string;
  address: string;
  phone: string;
  email: string;
  svgPos: { x: number; y: number }; // percentage on regional map
  services: string[];
  reachText: string;
  transitText: string;
}

export function RegionalPresenceMap({
  currentLocale = "de",
  className = "",
}: RegionalPresenceMapProps) {
  const isRu = currentLocale === "ru";
  const isEn = currentLocale === "en";

  const [activeHubId, setActiveHubId] = useState<string>("moenchengladbach");
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const t = {
    eyebrow: isRu
      ? "РЕГИОНАЛЬНАЯ СЕТЬ И ПРИСУТСТВИЕ"
      : isEn
      ? "REGIONAL NETWORK & PRESENCE"
      : "REGIONALES VERSORGUNGSNETZ",
    title: isRu
      ? "Присутствие холдинга в регионе Рейн-Рур"
      : isEn
      ? "Healthcare Hubs Across the Rhine-Ruhr Region"
      : "Präsenz & Standorte in der Metropolregion Rhein-Ruhr",
    subtitle: isRu
      ? "От штаб-квартиры в Мёнхенгладбахе до ключевых медицинских центров Дюссельдорфа, Кёльна и близлежащих районов: интегрированная помощь, логистика и выездные службы на земле Северный Рейн-Вестфалия."
      : isEn
      ? "From our corporate headquarters in Mönchengladbach to specialized clinical nodes in Düsseldorf, Cologne, and surrounding districts: integrated care, logistics, and mobile healthcare across North Rhine-Westphalia."
      : "Von der Holding-Zentrale in Mönchengladbach bis zu spezialisierten Praxis- und Klinikachsen in Düsseldorf, Köln und dem Umland: lückenlose ambulante, diagnostische und pflegerische Versorgung in Nordrhein-Westfalen.",

    filterAll: isRu ? "Все локации" : isEn ? "All Locations" : "Alle Standorte",
    filterClinics: isRu ? "MVZ & Клиники" : isEn ? "MVZ & Clinics" : "MVZ & Kliniken",
    filterDiagnostics: isRu ? "Диагностика & Reha" : isEn ? "Diagnostics & Rehab" : "Diagnostik & Reha",
    filterCare: isRu ? "Уход & Sanitätshaus" : isEn ? "Care & Medical Supplies" : "Pflege & Sanitätshaus",

    hubDetailsTitle: isRu ? "Данные локации и филиала" : isEn ? "Location Details" : "Standort- & Leistungsdetails",
    servicesHeading: isRu ? "Ключевые направления и функции" : isEn ? "Key Specialties & Functions" : "Schwerpunkte & Fachbereiche",
    accessibilityHeading: isRu ? "Транспортная доступность" : isEn ? "Transit & Accessibility" : "Verkehrsanbindung & Erreichbarkeit",
    directContactBtn: isRu ? "Связаться с филиалом" : isEn ? "Contact this Hub" : "Standort kontaktieren",
    routeBtn: isRu ? "Маршрут в Google Maps" : isEn ? "Route in Google Maps" : "Route in Google Maps",
    holdingHqBadge: isRu ? "ШТАБ-КВАРТИРА ХОЛДИНГА" : isEn ? "HOLDING HEADQUARTERS" : "HOLDING-ZENTRALE",
  };

  const hubs: RegionalHub[] = [
    {
      id: "moenchengladbach",
      name: "Mönchengladbach",
      tag: t.holdingHqBadge,
      category: "clinics",
      badge: isRu ? "Главный кампус" : isEn ? "Main Campus" : "Hauptstandort",
      title: isRu
        ? "Штаб-квартира холдинга & Флагманский медицинский кампус"
        : isEn
        ? "Holding Headquarters & Flagship Healthcare Campus"
        : "Holding-Zentrale & Zentraler Gesundheitscampus",
      address: "Aachener Straße 114, 41061 Mönchengladbach",
      phone: "+49 2161 9170018",
      email: "holding@nabiota-health-group.de",
      svgPos: { x: 26, y: 52 },
      services: [
        isRu ? "NabiOta MVZ Hausarzt & Internist (терапия, кардиология)" : isEn ? "NabiOta MVZ Primary Care & Internal Medicine" : "NabiOta MVZ Hausärztlich-Internistisch",
        isRu ? "NabiOta MVZ Chirurgie & Anästhesie (оперблок, ортопедия)" : isEn ? "NabiOta MVZ Surgery & Outpatient OR Center" : "NabiOta MVZ Chirurgie & Ambulantes OP-Zentrum",
        isRu ? "NabiOta Diagnostics (3T MRT, Low-Dose КТ, цифр. рентген)" : isEn ? "NabiOta Diagnostics (3T MRI, Low-Dose CT, X-Ray)" : "NabiOta Diagnostics (3T-MRT, Low-Dose-CT, Röntgen)",
        isRu ? "NabiOta Rehabilitation & Therapy (бассейн 32°C, физио-, эрго-)" : isEn ? "NabiOta Rehabilitation & Therapy (32°C Pool, Physio, Ergo)" : "NabiOta Rehabilitation (32°C Bewegungsbad, Physio, Ergo)",
        isRu ? "Sanitätshaus GmbH & Центральный логистический хаб" : isEn ? "Sanitätshaus GmbH & Central Logistics Supply Hub" : "NabiOta Sanitätshaus Zentrallager & Hilfsmittel-Stützpunkt",
      ],
      reachText: isRu
        ? "Радиус 45 км: Мёнхенгладбах, Фирзен, Коршенброх, Эркеленц, Вегберг."
        : isEn
        ? "45 km radius: Mönchengladbach, Viersen, Korschenbroich, Erkelenz, Wegberg."
        : "45 km Kernversorgungsradius: Mönchengladbach, Viersen, Korschenbroich, Erkelenz, Wegberg.",
      transitText: isRu
        ? "Автомагистрали A52 (съезд MG-Nord) и A61 (съезд MG-Zentrum). 7 мин. от главного вокзала (Hbf)."
        : isEn
        ? "Direct access via A52 (exit MG-Nord) and A61 (exit MG-Zentrum). 7 min from Central Station."
        : "Direkte Autobahnanbindung über A52 (Ausfahrt MG-Nord) und A61. 7 Min. zum Hbf Mönchengladbach.",
    },
    {
      id: "duesseldorf",
      name: "Düsseldorf",
      tag: isRu ? "МЕТРОПОЛИЯ РЕЙНЛАНД" : isEn ? "RHINE METROPOLIS" : "METROPOLREGION",
      category: "diagnostics",
      badge: isRu ? "Консультативный хаб" : isEn ? "Consulting Hub" : "Konsiliar- & Rekrutierungszentrum",
      title: isRu
        ? "Центр рекрутинга, нострификации и международной медицины"
        : isEn
        ? "Medical Recruitment, Approbation & International Hub"
        : "Rekrutierungs- & Internationales Koordinationszentrum",
      address: "Königsallee / Medienhafen Achse, 40212 Düsseldorf",
      phone: "+49 2161 9170017",
      email: "recruiting@nabiota.de",
      svgPos: { x: 58, y: 44 },
      services: [
        isRu ? "NabiOta Medical Recruitment Services (признание Approbation)" : isEn ? "Medical Recruitment Services (Approbation recognition)" : "Medical Recruitment Services (Approbation & Defizitbescheid)",
        isRu ? "Координация трансграничных пациентов и VIP-консьерж" : isEn ? "International patient coordination & clinical concierge" : "Internationale Patientenbetreuung & Zweitmeinungs-Service",
        isRu ? "Консультативный совет ведущих специалистов региона" : isEn ? "Consiliary specialist network across Düsseldorf clinics" : "Fachübergreifendes Konsiliarnetzwerk mit Düsseldorfer Kliniken",
        isRu ? "NabiOta Real Estate GmbH (девелопмент мед. объектов)" : isEn ? "Real estate development & medical practice planning" : "Projektentwicklung für moderne Praxiskomplexe",
      ],
      reachText: isRu
        ? "Агломерация Дюссельдорф, Ратинген, Меербуш, Нойс."
        : isEn
        ? "Düsseldorf metropolitan area, Ratingen, Meerbusch, Neuss."
        : "Metropolraum Düsseldorf, Ratingen, Meerbusch, Neuss.",
      transitText: isRu
        ? "Аэропорт DUS (15 мин.), скоростной поезд ICE / главные развязки A44, A52, A57."
        : isEn
        ? "DUS International Airport (15 min), ICE High-Speed Train, motorways A44, A52, A57."
        : "Flughafen Düsseldorf (15 Min.), ICE-Hauptbahnhof, direkter Anschluss an A52, A44 und A57.",
    },
    {
      id: "koeln",
      name: "Köln",
      tag: isRu ? "КЛИНИЧЕСКАЯ ОСЬ" : isEn ? "CLINICAL AXIS" : "KLINIKACHSE",
      category: "clinics",
      badge: isRu ? "Партнерская сеть" : isEn ? "Hospital Alliance" : "Klinik-Kooperationsachse",
      title: isRu
        ? "Клинический союз и стационарная подготовка (§ 30 GewO)"
        : isEn
        ? "Clinical Hospital Alliance & Inpatient Preparation (§ 30 GewO)"
        : "Klinische Kooperationsachse & Stationäre Vorbereitung",
      address: "Hohenstaufenring / Klinikachse, 50674 Köln",
      phone: "+49 2161 9170018",
      email: "partner@nabiota-health-group.de",
      svgPos: { x: 68, y: 78 },
      services: [
        isRu ? "Партнерство с профильными стационарами по § 108/109 SGB V" : isEn ? "Hospital cooperation contracts under § 108/109 SGB V" : "Integrierte Versorgungsverträge mit Fachkliniken (§ 140a SGB V)",
        isRu ? "NabiOta Klinik Germany GmbH (проектирование клиники § 30 GewO)" : isEn ? "NabiOta Klinik Germany GmbH (§ 30 GewO hospital framework)" : "Vorbereitung privater Fachkrankenhausstrukturen (§ 30 GewO)",
        isRu ? "Аптечное снабжение стационаров по § 14 ApoG" : isEn ? "Hospital pharmaceutical supply contracts under § 14 ApoG" : "Apothekengestützte Klinik-Arzneimittelversorgung (§ 14 ApoG)",
        isRu ? "Последипломное образование врачей и ординатура" : isEn ? "Academic medical education & residency collaborations" : "Kooperationen zur ärztlichen Weiterbildung & Facharztausbildung",
      ],
      reachText: isRu
        ? "Кёльн, Леверкузен, Бонн, Рейн-Эрфт."
        : isEn
        ? "Cologne, Leverkusen, Bonn, Rhein-Erft district."
        : "Großraum Köln, Leverkusen, Bonn und Rhein-Erft-Kreis.",
      transitText: isRu
        ? "Развязка A1 / A3 / A4, аэропорт Кёльн/Бонн (CGN) 20 мин."
        : isEn
        ? "Motorways A1 / A3 / A4, Cologne/Bonn Airport (CGN) 20 min."
        : "Autobahnkreuz Köln (A1/A3/A4/A57), Flughafen Köln/Bonn (20 Min.).",
    },
    {
      id: "neuss-krefeld",
      name: "Neuss & Krefeld",
      tag: isRu ? "МОБИЛЬНЫЙ УХОД" : isEn ? "MOBILE HEALTHCARE" : "MOBILE PFLEGE & SANITÄTSHAUS",
      category: "care",
      badge: isRu ? "Зона оперативного выезда" : isEn ? "Outreach Radius" : "Flächendeckende Versorgung",
      title: isRu
        ? "Служба патронажа HomeCare & Выездное снабжение Sanitätshaus"
        : isEn
        ? "HomeCare Mobile Nursing & Fast-Track Sanitätshaus Delivery"
        : "Ambulante HomeCare-Dienste & Mobile Rehatechnik",
      address: "Regionalbüro Niederrhein, 41460 Neuss / 47798 Krefeld",
      phone: "+49 2161 9170019",
      email: "pflege@nabiota-health-group.de",
      svgPos: { x: 44, y: 32 },
      services: [
        isRu ? "NabiOta HomeCare GmbH (патронажный сестринский уход SGB V/XI)" : isEn ? "NabiOta HomeCare (specialized home nursing SGB V/XI)" : "Häusliche Krankenpflege (SGB V) & Pflegegrad-Versorgung (SGB XI)",
        isRu ? "Специализированный уход за ранами (Wundmanagement) на дому" : isEn ? "Certified chronic & post-op wound treatment at patient home" : "Zertifiziertes Wundmanagement für chronische Wunden zu Hause",
        isRu ? "Срочная доставка ортопедии, бандажей и функциональных кроватей" : isEn ? "Fast delivery of care beds, wheelchairs & orthopedic braces" : "24h-Belieferung mit Pflegebetten, Rollstühlen & Bandagen",
        isRu ? "Ежемесячные наборы средств гигиены (40 € по § 40 SGB XI)" : isEn ? "Monthly hygiene supply packages (up to €40 under § 40 SGB XI)" : "Kostenfreie Pflegehilfsmittel-Boxen (PG 54) direkt nach Hause",
      ],
      reachText: isRu
        ? "Нойс, Крефельд, Меербуш, Каарст, Юлих, Гревенброх."
        : isEn
        ? "Neuss, Krefeld, Meerbusch, Kaarst, Jülich, Grevenbroich."
        : "Niederrhein-Region: Neuss, Krefeld, Kaarst, Meerbusch, Grevenbroich.",
      transitText: isRu
        ? "Быстрый выезд мобильных бригад по трассам A57, A44 и A46 в течение 30-45 минут."
        : isEn
        ? "Mobile healthcare response units operating via A57, A44, and A46 within 30-45 min."
        : "Schnelle Vor-Ort-Betreuung über A57, A44 und A46 im 30-45-Minuten-Takt.",
    },
  ];

  const filteredHubs = filterCategory === "all"
    ? hubs
    : hubs.filter((h) => h.category === filterCategory || h.id === "moenchengladbach");

  const currentHub = hubs.find((h) => h.id === activeHubId) || hubs[0];

  return (
    <section className={`py-14 sm:py-18 lg:py-22 bg-[#FAF8F5] border-t border-[#EDE7D9] relative overflow-hidden ${className}`}>
      {/* Subtle ambient blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#EBDDC0]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#D5B878]/15 blur-3xl pointer-events-none" />

      <Container size="wide" className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase mb-2 block font-sans">
              {t.eyebrow}
            </span>
            <h2 className="font-serif text-[28px] sm:text-[36px] lg:text-[42px] font-normal leading-[1.16] text-[#142318] mb-3">
              {t.title}
            </h2>
            <p className="text-[13px] sm:text-[14px] text-[#556057] leading-relaxed font-sans">
              {t.subtitle}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setFilterCategory("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filterCategory === "all"
                  ? "bg-[#0B2516] text-[#ECCF96] shadow-xs"
                  : "bg-white text-[#556057] border border-[#E0D8C8] hover:border-[#C5A56A]"
              }`}
            >
              {t.filterAll}
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory("clinics")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filterCategory === "clinics"
                  ? "bg-[#0B2516] text-[#ECCF96] shadow-xs"
                  : "bg-white text-[#556057] border border-[#E0D8C8] hover:border-[#C5A56A]"
              }`}
            >
              {t.filterClinics}
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory("diagnostics")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filterCategory === "diagnostics"
                  ? "bg-[#0B2516] text-[#ECCF96] shadow-xs"
                  : "bg-white text-[#556057] border border-[#E0D8C8] hover:border-[#C5A56A]"
              }`}
            >
              {t.filterDiagnostics}
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory("care")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filterCategory === "care"
                  ? "bg-[#0B2516] text-[#ECCF96] shadow-xs"
                  : "bg-white text-[#556057] border border-[#E0D8C8] hover:border-[#C5A56A]"
              }`}
            >
              {t.filterCare}
            </button>
          </div>
        </div>

        {/* ── Main Interactive Section: Map View + Hub Details ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8 items-stretch">
          {/* Left Column (7 cols): Interactive Regional Canvas */}
          <div className="lg:col-span-7 bg-[#07160D] rounded-3xl p-5 sm:p-7 border border-[#D5B878]/30 shadow-xl flex flex-col justify-between relative overflow-hidden min-h-[460px] sm:min-h-[520px]">
            {/* Dark Map Grid & River Lines Background */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="regionalGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D5B878" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#regionalGrid)" />
              </svg>
            </div>

            {/* Stylized Regional Rhine River Curve & Highways */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 800 600"
              preserveAspectRatio="none"
              fill="none"
            >
              {/* Rhine River: curved pathway from south-east to north-west */}
              <path
                d="M 580 600 C 560 480, 520 380, 480 280 C 440 180, 390 120, 320 0"
                stroke="#1B422B"
                strokeWidth="24"
                strokeLinecap="round"
                opacity="0.6"
              />
              <path
                d="M 580 600 C 560 480, 520 380, 480 280 C 440 180, 390 120, 320 0"
                stroke="#2B6B46"
                strokeWidth="10"
                strokeLinecap="round"
                opacity="0.8"
              />
              {/* Highway corridors connecting nodes (A52, A61, A44) */}
              <path
                d="M 208 312 L 464 264" // MG to DUS (A52)
                stroke="#D5B878"
                strokeWidth="2"
                strokeDasharray="4 4"
                opacity="0.45"
              />
              <path
                d="M 464 264 L 544 468" // DUS to Cologne (A57/A3)
                stroke="#D5B878"
                strokeWidth="2"
                strokeDasharray="4 4"
                opacity="0.45"
              />
              <path
                d="M 208 312 L 352 192" // MG to Neuss/Krefeld
                stroke="#D5B878"
                strokeWidth="2"
                strokeDasharray="4 4"
                opacity="0.45"
              />
              <path
                d="M 352 192 L 464 264" // Neuss to DUS
                stroke="#D5B878"
                strokeWidth="2"
                strokeDasharray="4 4"
                opacity="0.45"
              />
            </svg>

            {/* Top Bar on Map */}
            <div className="relative z-10 flex items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-2 text-[#ECCF96] text-xs font-bold uppercase tracking-wider font-sans">
                <Navigation className="w-4 h-4 text-[#ECCF96]" />
                <span>Nordrhein-Westfalen • Metropolachse</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#A6B8AA]">
                <span className="w-2 h-2 rounded-full bg-[#ECCF96] animate-ping" />
                <span>4 vernetzte Koordinationszonen</span>
              </div>
            </div>

            {/* Interactive Nodes Layer */}
            <div className="relative z-10 flex-1 min-h-[300px] w-full">
              {filteredHubs.map((hub) => {
                const isActive = hub.id === activeHubId;
                const isHq = hub.id === "moenchengladbach";

                return (
                  <button
                    key={hub.id}
                    type="button"
                    onClick={() => setActiveHubId(hub.id)}
                    style={{
                      left: `${hub.svgPos.x}%`,
                      top: `${hub.svgPos.y}%`,
                    }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-transform duration-300 ${
                      isActive ? "scale-115 z-20" : "hover:scale-110 z-10"
                    }`}
                  >
                    {/* Pulsing ring for HQ or Active */}
                    {(isHq || isActive) && (
                      <span className="absolute -inset-3 rounded-full bg-[#ECCF96]/20 animate-pulse pointer-events-none" />
                    )}

                    {/* Pin Marker */}
                    <div
                      className={`relative flex items-center justify-center rounded-2xl p-2.5 transition-all shadow-lg ${
                        isActive
                          ? "bg-[#ECCF96] text-[#07160D] ring-4 ring-[#ECCF96]/30 shadow-[#ECCF96]/20"
                          : "bg-[#0D2919] text-[#ECCF96] border border-[#D5B878]/50 hover:bg-[#123621]"
                      }`}
                    >
                      {isHq ? (
                        <Building2 className="w-5 h-5 stroke-[2]" />
                      ) : hub.category === "diagnostics" ? (
                        <Microscope className="w-5 h-5 stroke-[2]" />
                      ) : hub.category === "care" ? (
                        <HandHeart className="w-5 h-5 stroke-[2]" />
                      ) : (
                        <Stethoscope className="w-5 h-5 stroke-[2]" />
                      )}
                    </div>

                    {/* Node Tooltip Label */}
                    <div
                      className={`mt-2 px-2.5 py-1 rounded-md text-[11px] font-bold whitespace-nowrap transition-all shadow-md ${
                        isActive
                          ? "bg-white text-[#07160D]"
                          : "bg-[#0D2919]/90 text-white/90 border border-white/10 group-hover:bg-[#123621]"
                      }`}
                    >
                      {hub.name}
                      {isHq && <span className="text-[#C5A56A] ml-1">★ HQ</span>}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Legend on Map */}
            <div className="relative z-10 pt-4 mt-auto border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-[11px] text-[#A6B8AA]">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ECCF96]" />
                  <span>Holding-HQ</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2B6B46] border border-[#ECCF96]" />
                  <span>Klinik- & Partnerachse</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-4 h-0.5 border-t border-dashed border-[#D5B878]" />
                  <span>A52 / A61 / A44</span>
                </span>
              </div>
              <div className="text-[#ECCF96]/80 text-[10.5px]">
                Klick auf Standort zur Detailansicht
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Selected Hub Details Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-[#E7DFD2] shadow-sm flex flex-col justify-between">
            <div>
              {/* Header Badge & Title */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10.5px] font-bold tracking-wider uppercase bg-[#F3EDE2] text-[#8B7347] border border-[#D5B878]/40">
                  {currentHub.tag}
                </span>
                <span className="text-xs font-semibold text-[#8B7347]">
                  {currentHub.badge}
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#142318] leading-snug mb-2">
                {currentHub.title}
              </h3>

              {/* Address with Icon */}
              <div className="flex items-start gap-2 text-xs sm:text-[13px] text-[#556057] mb-5">
                <MapPin className="w-4 h-4 text-[#8B7347] shrink-0 mt-0.5" />
                <span className="font-sans">{currentHub.address}</span>
              </div>

              {/* Services List */}
              <div className="space-y-2 mb-6">
                <span className="text-[11px] font-bold tracking-wider text-[#8A764A] uppercase block">
                  {t.servicesHeading}
                </span>
                <div className="space-y-1.5 pt-1">
                  {currentHub.services.map((srv, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-[12.5px] text-[#2C3E31] leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8B7347] shrink-0 mt-0.5" />
                      <span>{srv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transit & Reach info boxes */}
              <div className="space-y-2.5 pt-4 border-t border-[#F0EBE1] text-xs text-[#556057]">
                <div className="flex items-start gap-2">
                  <Car className="w-4 h-4 text-[#8B7347] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#142318]">{t.accessibilityHeading}: </strong>
                    <span>{currentHub.transitText}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#8B7347] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#142318]">Versorgungsradius: </strong>
                    <span>{currentHub.reachText}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contacts & Actions */}
            <div className="pt-6 mt-6 border-t border-[#F0EBE1] space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                <a
                  href={`tel:${currentHub.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-1.5 font-bold text-[#0B2516] hover:text-[#8B7347] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#8B7347]" />
                  <span>{currentHub.phone}</span>
                </a>
                <a
                  href={`mailto:${currentHub.email}`}
                  className="inline-flex items-center gap-1.5 text-[#556057] hover:text-[#0B2516] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#8B7347]" />
                  <span>{currentHub.email}</span>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(currentHub.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl border border-[#DCD6C8] bg-[#FAF8F5] hover:bg-white text-xs font-semibold text-[#142318] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#8B7347]" />
                  <span>{t.routeBtn}</span>
                  <ExternalLink className="w-3 h-3 text-[#A1A8A2]" />
                </a>

                <Link
                  href={`/${currentLocale}/contact`}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-[#0B2516] hover:bg-[#133821] text-xs font-semibold text-[#ECCF96] transition-colors shadow-xs"
                >
                  <span>{t.directContactBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
