"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  HeartPulse,
  Brain,
  ShieldCheck,
  Scale,
  Building2,
  Sparkles,
  Award,
  Stethoscope,
  Wind,
  ArrowRight,
  Info,
} from "lucide-react";
import { Container } from "@/components/layout/Container";

/**
 * PDF Section IV.5 – "NabiOta Rehabilitation & Therapy GmbH"
 * (Ambulante Reha, Physiotherapie und Rehabilitation)
 * Unternehmensgegenstand, Zielgruppen, 4 Leistungssäulen,
 * Reha-Ziele (Teilhabe) & Abrechnung mit Kostenträgern (GKV, DRV, BG).
 */

type Lang = "de" | "en" | "ru";
type T = Record<Lang, string>;
type Icon = React.ComponentType<{ className?: string }>;

const specialtyIconsList: Icon[] = [
  Activity,
  HeartPulse,
  Brain,
  Stethoscope,
  Wind,
];

const payerIcons: Icon[] = [
  ShieldCheck,
  Building2,
  Scale,
  Award,
];

const c = {
  tag: {
    de: "GmbH · Ambulante Reha & Heilmittel · § 111c / § 124 SGB V",
    en: "GmbH · Outpatient Rehab & Remedies · § 111c / § 124 SGB V",
    ru: "GmbH · Амбулаторная реабилитация и терапия · § 111c / § 124 SGB V",
  } as T,
  title: "NabiOta Rehabilitation & Therapy GmbH",
  subtitle: {
    de: "Ambulante Reha, Physiotherapie und Rehabilitation",
    en: "Outpatient Rehabilitation, Physical Therapy & Recovery",
    ru: "Амбулаторная реабилитация, физиотерапия и восстановительное лечение",
  } as T,
  lead: {
    de: "Gegenstand des Unternehmens ist der Aufbau, die Organisation und der Betrieb von Therapie- und Rehabilitationseinrichtungen sowie die Erbringung physiotherapeutischer, ergotherapeutischer, logopädischer und weiterer rehabilitativer Leistungen im jeweils rechtlich zulässigen Umfang.",
    en: "The company's purpose is the establishment, organization, and operation of therapy and rehabilitation facilities, as well as the provision of physiotherapy, occupational therapy, speech therapy, and further rehabilitative services within the legally permissible scope.",
    ru: "Предметом деятельности компании является создание, организация и эксплуатация терапевтических и реабилитационных центров, а также оказание услуг по физиотерапии, эрготерапии, логопедии и иных видов восстановительного лечения в законно допустимом объёме.",
  } as T,

  patientGroupsTitle: {
    de: "Zielgruppen & Indikationsschwerpunkte",
    en: "Target Patient Populations & Clinical Focus",
    ru: "Целевые группы пациентов и клинические показания",
  } as T,
  patientGroupsDesc: {
    de: "Die Angebote richten sich an postoperative Patienten sowie an Menschen mit akuten oder chronischen Erkrankungen, Verletzungsfolgen, Behinderungen und funktionellen Einschränkungen in folgenden Fachdisziplinen:",
    en: "Services are tailored to post-operative patients and individuals with acute or chronic conditions, consequences of injuries, disabilities, and functional limitations across core specialties:",
    ru: "Программы ориентированы на постоперационных пациентов, а также людей с острыми или хроническими заболеваниями, последствиями травм, ограничениями подвижности и инвалидностью по направлениям:",
  } as T,
  specialties: [
    { de: "Orthopädische Rehabilitation", en: "Orthopedic Rehabilitation", ru: "Ортопедическая реабилитация" },
    { de: "Unfallchirurgische Nachbehandlung", en: "Trauma Surgical Aftercare", ru: "Травматологическое долечивание" },
    { de: "Neurologische Rehabilitation", en: "Neurological Rehabilitation", ru: "Неврологическая реабилитация" },
    { de: "Kardiologische Rehabilitation", en: "Cardiological Rehabilitation", ru: "Кардиологическая реабилитация" },
    { de: "Pneumologische Therapie (Lunge & Atemwege)", en: "Pneumological Therapy (Pulmonary & Respiratory)", ru: "Пульмонологическая терапия (легкие и дыхание)" },
  ] as T[],

  pillars: [
    {
      icon: Activity as Icon,
      title: {
        de: "Physiotherapie & Medizinische Trainingstherapie",
        en: "Physiotherapy & Medical Training Therapy",
        ru: "Физиотерапия и медицинская тренировочная терапия",
      } as T,
      text: {
        de: "Krankengymnastik, manuelle Therapie, gerätegestützte Krankengymnastik (KGG), medizinische Trainingstherapie (MTT), Gang-, Gleichgewichts- und Koordinationstraining, Atemtherapie, manuelle Lymphdrainage (MLD) sowie physikalische Anwendungen.",
        en: "Physical therapy, manual therapy, equipment-assisted physiotherapy (KGG), medical training therapy (MTT), gait, balance and coordination training, respiratory therapy, manual lymphatic drainage (MLD), and physical modalities.",
        ru: "Лечебная гимнастика, мануальная терапия, аппаратная гимнастика (KGG), медицинская тренировочная терапия (MTT), тренировки ходьбы, равновесия и координации, дыхательная терапия, мануальный лимфодренаж и физиопроцедуры.",
      } as T,
      image: "/images/rehabilitation/equipment-gait.webp",
    },
    {
      icon: Brain as Icon,
      title: {
        de: "Ergotherapie & Alltagsselbstständigkeit (ADL)",
        en: "Occupational Therapy & ADL Independence",
        ru: "Эрготерапия и самостоятельность в быту (ADL)",
      } as T,
      text: {
        de: "Gezielte ergotherapeutische Maßnahmen zur Förderung motorischer, sensorischer und kognitiver Fähigkeiten. Training von Alltagskompetenzen (Activities of Daily Living) zur schnellen Wiedererlangung persönlicher Unabhängigkeit.",
        en: "Targeted occupational therapy promoting motor, sensory, and cognitive capacities. Training of Activities of Daily Living (ADL) to restore maximum autonomy in everyday personal and professional life.",
        ru: "Целевая эрготерапия для развития моторных, сенсорных и когнитивных функций. Тренировка бытовых навыков (Activities of Daily Living) для быстрого возвращения к самостоятельности.",
      } as T,
      image: "/images/rehabilitation/parallel-bars.webp",
    },
    {
      icon: Wind as Icon,
      title: {
        de: "Logopädie & Schlucktherapie (Dysphagie)",
        en: "Speech & Dysphagia Therapy",
        ru: "Логопедия и терапия глотания (дисфагия)",
      } as T,
      text: {
        de: "Qualifizierte logopädische Behandlungen von Sprach-, Sprech-, Stimm- und Schluckstörungen (Dysphagie) infolge von neurologischen Ereignissen (z. B. Schlaganfall) oder operativen Eingriffen im Kopf-Hals-Bereich.",
        en: "Qualified speech-language therapy treating language, speech, voice, and swallowing disorders (dysphagia) resulting from neurological events (e.g. stroke) or surgical head and neck procedures.",
        ru: "Квалифицированное логопедическое лечение нарушений речи, голоса и глотания (дисфагии) вследствие неврологических патологий (инсульт) или операций в области головы и шеи.",
      } as T,
      image: "/images/areas/stethoscope-clinic.webp",
    },
    {
      icon: Sparkles as Icon,
      title: {
        de: "Ambulante Reha, Prävention & Teilhabe",
        en: "Outpatient Rehab, Prevention & Participation",
        ru: "Амбулаторная реабилитация, профилактика и участие",
      } as T,
      text: {
        de: "Ambulante medizinische Rehabilitation, rehabilitative Nachsorge (IRENA/T-RENA), Präventionsprogramme, Patientenschulungen und interdisziplinäre Schmerztherapie zur Sicherung von Mobilität und beruflicher Teilhabe.",
        en: "Outpatient medical rehabilitation, structured aftercare programs, prevention courses, patient education, and multidisciplinary pain therapy safeguarding health, mobility, and vocational participation.",
        ru: "Амбулаторная медицинская реабилитация, восстановительное долечивание, профилактические курсы, школы пациентов и мультимодальная терапия боли для поддержания здоровья и трудоспособности.",
      } as T,
      image: "/images/rehabilitation/facility-pool.webp",
    },
  ],

  purposeGoalsTitle: {
    de: "Übergeordnetes Rehabilitationsziel",
    en: "Overarching Rehabilitation Mandate",
    ru: "Главная цель реабилитации",
  } as T,
  purposeGoalsText: {
    de: "Die Maßnahmen der Gesellschaft dienen der nachhaltigen Verbesserung oder Erhaltung von Gesundheit, Mobilität, persönlicher Selbstständigkeit sowie gesellschaftlicher und beruflicher Teilhabe der Patienten. Sämtliche Therapie- und Nachsorgeangebote werden eng mit den behandelnden Fachärzten, Kliniken und MVZ der NabiOta-Gruppe abgestimmt.",
    en: "All company interventions are dedicated to sustainably improving or preserving health, physical mobility, personal independence, and active social and occupational participation. Programs are strictly synchronized with treating physicians, clinics, and group MVZs.",
    ru: "Все терапевтические меры направлены на устойчивое улучшение или сохранение здоровья, подвижности, личной независимости, а также интеграцию в социальную и трудовую жизнь. Программы согласовываются с лечащими врачами, клиниками и центрами холдинга.",
  } as T,

  payersTitle: {
    de: "Rechtliche Grundlagen, Zulassungen & Abrechnung mit Kostenträgern",
    en: "Regulatory Foundations, Accreditations & Payer Remuneration",
    ru: "Правовые основы, допуски и расчёты со страховыми институтами",
  } as T,
  payersLead: {
    de: "Heilmittelbehandlungen und medizinische Rehabilitationsleistungen unterliegen rechtlich unterschiedlichen Zulassungs- und Vertragsanforderungen. Die Abrechnung erfolgt ausschließlich auf Grundlage der jeweils erforderlichen behördlichen und kassenrechtlichen Genehmigungen:",
    en: "Therapeutic remedy treatments and medical rehabilitation services are governed by distinct statutory accreditations and contracts. Remuneration is conducted strictly pursuant to applicable institutional authorizations:",
    ru: "Амбулаторные лечебные процедуры и медицинская реабилитация регулируются различными законодательными требованиями к лицензированию. Расчёты производятся строго на основании действующих допусков и договоров:",
  } as T,
  payersList: [
    {
      title: { de: "Gesetzliche & private Krankenversicherungen", en: "Statutory & Private Health Insurances", ru: "Государственные и частные больничные кассы (GKV / PKV)" } as T,
      desc: {
        de: "Heilmittelverordnungen (Muster 13 für Physiotherapie, Ergotherapie, Logopädie) gemäß Heilmittel-Richtlinie nach § 124 SGB V sowie ambulante Reha-Versorgungsverträge nach § 111c SGB V.",
        en: "Therapy prescriptions (Remedy Form 13) pursuant to § 124 SGB V remedy guidelines, as well as formal outpatient rehabilitation supply agreements under § 111c SGB V.",
        ru: "Рецепты на лечебные процедуры (форма 13) по директивам § 124 SGB V, а также договоры на амбулаторную реабилитацию по § 111c SGB V.",
      } as T,
    },
    {
      title: { de: "Rentenversicherungsträger (DRV)", en: "Pension Insurance Institutions (DRV)", ru: "Пенсионные фонды Германии (DRV)" } as T,
      desc: {
        de: "Ambulante medizinische Rehabilitation zur Wiederherstellung der Erwerbsfähigkeit ('Reha vor Rente') sowie strukturierte Nachsorgeprogramme (IRENA, T-RENA) nach SGB VI.",
        en: "Outpatient medical rehabilitation to restore occupational earning capacity ('Rehab before Pension') and structured aftercare regimens (IRENA, T-RENA) under SGB VI.",
        ru: "Амбулаторная реабилитация для восстановления трудоспособности («реабилитация вместо пенсии») и долечивание (IRENA, T-RENA) по нормам SGB VI.",
      } as T,
    },
    {
      title: { de: "Unfallversicherungsträger & Berufsgenossenschaften (BG)", en: "Accident Insurance & Occupational Guilds (BG)", ru: "Фонды страхования от несчастных случаев (BG / DGUV)" } as T,
      desc: {
        de: "Erweiterte Ambulante Physiotherapie (EAP), berufsgenossenschaftliche Heilverfahren und arbeitsplatzbezogene Rehabilitation nach Arbeitsunfällen und Wegeunfällen nach SGB VII.",
        en: "Extended Outpatient Physiotherapy (EAP), occupational guild therapies, and workplace-tailored rehabilitation following work and commuting accidents under SGB VII.",
        ru: "Расширенная амбулаторная физиотерапия (EAP) и специализированные программы восстановления после производственных травм по SGB VII.",
      } as T,
    },
    {
      title: { de: "Beihilfe, Selbstzahler & internationale Träger", en: "Aid Funds, Self-Payers & International Payers", ru: "Госслужащие (Beihilfe), частные пациенты и международные фонды" } as T,
      desc: {
        de: "Transparente Abrechnung nach der Gebührenordnung für Therapeuten (GebüTh) bzw. individuellen Vereinbarungen für maßgeschneiderte Präventions- und Kompaktkuren.",
        en: "Transparent billing under standardized therapy fee schedules (GebüTh) or individualized service agreements for intensive recovery protocols.",
        ru: "Прозрачный расчёт по прейскуранту GebüTh или индивидуальным соглашениям на комплексные восстановительные курсы.",
      } as T,
    },
  ],
};

export function RehabilitationCompanySection({ locale = "de" }: { locale?: string }) {
  const l: Lang = locale === "ru" ? "ru" : locale === "en" ? "en" : "de";

  return (
    <>
      {/* ── Main Rehabilitation Section: Hero & 4 Pillar Cards ── */}
      <section
        id="nabiota-reha-therapy-gmbh-structure"
        className="relative pt-0 pb-12 sm:pb-16 lg:pb-20 bg-[#FAF7F2] border-t border-[#EDE8DE] overflow-hidden"
      >
        {/* ── Hero Banner: Matching MVZ 1 & 2 design (soft right-photo fade & full-width specialty cards along bottom) ── */}
        <div className="relative z-10 w-full overflow-hidden pb-4 sm:pb-6">
          {/* Soft Background Photo with smooth horizontal fade / blur effect */}
          <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[64%] xl:w-[60%] pointer-events-none overflow-hidden select-none">
            <Image
              src="/images/areas/rehabilitation.webp"
              alt="NabiOta Rehabilitation & Therapy GmbH"
              fill
              className="object-cover object-center lg:object-right"
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            {/* Subtle horizontal gradient fade - softer and crisper photo visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] from-0% via-[#FAF7F2]/75 via-18% via-[#FAF7F2]/20 via-38% to-transparent to-75%" />
            {/* Subtle vertical gradient fade for mobile & bottom blending */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/50 via-15% to-transparent lg:hidden" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] from-0% via-[#FAF7F2]/20 via-10% to-transparent hidden lg:block" />
          </div>

          {/* Botanical foliage watermark on far left (matching reference) */}
          <div className="absolute top-2 left-0 w-44 sm:w-56 h-72 pointer-events-none opacity-35 select-none sepia hue-rotate-[15deg]">
            <Image
              src="/images/areas/botanical-branch-clean.webp"
              alt=""
              fill
              className="object-contain object-left"
              unoptimized
            />
          </div>

          {/* Hero Content Container */}
          <Container size="wide" className="relative z-10 pt-4 sm:pt-6">
            <div className="max-w-6xl mx-auto">
              {/* Top Row: Title, Eyebrow & Lead on the left (No buttons) */}
              <div className="max-w-xl lg:max-w-2xl mb-5 sm:mb-6 lg:mb-7">
                {/* Eyebrow with gold line matching unified holding sections */}
                <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
                  <span className="w-6 h-[1.5px] bg-[#C5A56A]" />
                  <span className="text-[10px] sm:text-[10.5px] font-semibold tracking-[0.22em] text-[#C5A56A] uppercase font-sans">
                    {c.subtitle[l]}
                  </span>
                </div>

                {/* Title with styled italic phrase & distinct GmbH */}
                <h2 className="font-serif text-[24px] sm:text-[28px] lg:text-[34px] xl:text-[38px] text-[#142318] font-normal leading-[1.18] mb-3">
                  NabiOta{" "}
                  <span className="font-serif italic text-[#C5A56A]">Rehabilitation & Therapy</span>{" "}
                  <span className="text-[#C5A56A] font-sans font-semibold text-[0.72em] tracking-wider uppercase ml-1 align-baseline">
                    GmbH
                  </span>
                </h2>

                <p className="text-[12.5px] sm:text-[13px] text-[#556057] leading-relaxed max-w-xl font-sans">
                  {c.lead[l]}
                </p>
              </div>

              {/* Bottom: 5 Specialty Cards spanning along the entire width (No numbers, centered text) */}
              <div className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-2.5">
                  {c.specialties.map((item, idx) => {
                    const SpecIcon = specialtyIconsList[idx % specialtyIconsList.length];
                    return (
                      <div
                        key={idx}
                        className="group relative rounded-xl bg-white/85 hover:bg-white border border-[#EAE4D7] hover:border-[#D5B878]/70 py-2.5 px-3 sm:py-2.5 sm:px-3.5 flex items-center gap-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-sm transition-all duration-300 backdrop-blur-xs"
                      >
                        <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-[#FAF5EB] border border-[#EFE5D5] flex items-center justify-center shrink-0 group-hover:bg-[#F3EAD9] transition-colors">
                          <SpecIcon className="w-3.5 h-3.5 text-[#9E7D3B]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-[12px] sm:text-[12.5px] text-[#142318] font-medium leading-tight">
                            {item[l]}
                          </h4>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Patient Populations Note banner matching MVZ 1 & 2 */}
                <div className="flex items-start sm:items-center gap-2.5 mt-2.5 sm:mt-3 px-3.5 py-2 rounded-xl border border-[#E8DFC8]/75 bg-white/75 backdrop-blur-xs text-[#556057]">
                  <Info className="w-3.5 h-3.5 text-[#9E7D3B] shrink-0 mt-0.5 sm:mt-0" />
                  <p className="text-[11px] sm:text-[11.5px] leading-relaxed">
                    <span className="font-semibold text-[#142318] mr-1">{c.patientGroupsTitle[l]}:</span>
                    {c.patientGroupsDesc[l]}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* ── 4 Therapy Pillars (Photo 3 design) + Overarching Mandate ── */}
        <Container size="wide" className="relative z-10 mt-8 sm:mt-10">
          <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
            {/* 4 Pillar Cards in Photo 3 Style (ClinicsGermanySection style) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {c.pillars.map((p, i) => {
                const Icon = p.icon;
                const numStr = String(i + 1).padStart(2, "0");
                return (
                  <article
                    key={i}
                    className="group relative rounded-[20px] sm:rounded-[22px] bg-white border border-[#EAE4D7] hover:border-[#D5B878]/60 hover:shadow-xl transition-all duration-300 shadow-sm overflow-hidden flex flex-col justify-between min-h-[200px]"
                  >
                    {/* Right faded photo */}
                    <div className="absolute right-0 top-0 bottom-0 w-[40%] sm:w-[38%] pointer-events-none overflow-hidden select-none">
                      <Image
                        src={p.image}
                        alt=""
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
                    </div>

                    {/* Left content */}
                    <div className="relative z-10 p-5 sm:p-6 flex flex-col justify-between h-full">
                      <div>
                        {/* Number + Icon row */}
                        <div className="flex items-center gap-3 mb-2.5">
                          <span className="font-serif text-[22px] sm:text-[24px] text-[#C5A56A] font-normal leading-none w-8 shrink-0">
                            {numStr}
                          </span>
                          <div className="w-9 h-9 rounded-full bg-[#FAF3E8] border border-[#E8DFC8] text-[#9E7D3B] flex items-center justify-center shrink-0 group-hover:bg-[#F0E5CD] transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="font-serif text-[17px] sm:text-[18.5px] text-[#142318] font-medium leading-snug mb-2.5 max-w-[62%] sm:max-w-[60%]">
                          {p.title[l]}
                        </h3>

                        {/* Body text */}
                        <p className="text-[12px] sm:text-[12.5px] text-[#4E5650] leading-relaxed max-w-[64%] sm:max-w-[62%]">
                          {p.text[l]}
                        </p>
                      </div>

                      {/* Learn more link */}
                      <div className="mt-4 pt-3.5 border-t border-[#EDE8DE]">
                        <Link
                          href={`/${l}/contact`}
                          className="inline-flex items-center gap-1.5 text-[11.5px] sm:text-[12px] font-semibold text-[#9E7D3B] hover:text-[#142318] transition-colors"
                        >
                          <span>{l === "ru" ? "Подробнее" : l === "en" ? "Learn more" : "Mehr erfahren"}</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Overarching Rehabilitation Mandate Callout */}
            <div className="flex flex-col sm:flex-row items-start gap-4 rounded-xl sm:rounded-2xl border border-[#E0D5C1] bg-[#FAF5EC] p-5 sm:p-6 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#FAF0DC] border border-[#E0D0AE] text-[#9E7D3B] flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-[16px] sm:text-[17.5px] text-[#142318] font-semibold">
                  {c.purposeGoalsTitle[l]}
                </h4>
                <p className="text-[12.5px] sm:text-[13px] text-[#556057] leading-relaxed font-sans">
                  {c.purposeGoalsText[l]}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Regulatory Foundations, Accreditations & Payer Remuneration (Photo 4 design: Full width with leaves_bag.png) ── */}
      <section className="relative w-full bg-[#011B0B] text-white py-12 sm:py-16 lg:py-20 overflow-hidden border-t border-[#D5B878]/25">
        {/* Full-width foliage & background layer spanning 100% of the screen width */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <Image
            src="/images/areas/leaves_bag.png"
            alt=""
            fill
            priority
            unoptimized
            className="object-cover object-top opacity-95"
          />
        </div>

        {/* Full-width container with generous max-width */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          {/* Header */}
          <div className="max-w-2xl mb-7 sm:mb-9">
            <div className="flex items-center gap-3 mb-2.5">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase">
                {l === "ru" ? "НАШИ ОБЯЗАТЕЛЬСТВА" : l === "en" ? "OUR COMMITMENT" : "UNSERE VERPFLICHTUNGEN"}
              </span>
              <span className="h-px w-8 bg-[#C5A56A]" />
            </div>
            <h3 className="font-serif text-[26px] sm:text-[32px] lg:text-[38px] text-white font-normal leading-[1.15] mb-2.5">
              {c.payersTitle[l]}
            </h3>
            <p className="text-[12.5px] sm:text-[13.5px] text-[#A6BCB0] leading-relaxed">
              {c.payersLead[l]}
            </p>
          </div>

          {/* 4 Cards Grid (2 Columns, 2 Rows) – Matching Photo 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4.5">
            {c.payersList.map((payer, idx) => {
              const Icon = payerIcons[idx % payerIcons.length];
              const numStr = String(idx + 1).padStart(2, "0");

              return (
                <article
                  key={idx}
                  className="group relative rounded-[18px] sm:rounded-[20px] p-4.5 sm:p-5 bg-gradient-to-br from-[#123824]/92 via-[#0e301e]/92 to-[#092617]/92 backdrop-blur-md border border-[#D5B878]/40 hover:border-[#ECCF96]/80 hover:from-[#17462d]/95 hover:to-[#0f3420]/95 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.35)] flex flex-col justify-center overflow-hidden"
                >
                  {/* Subtle botanical leaf watermark on the right edge */}
                  <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-28 pointer-events-none overflow-hidden select-none opacity-20 group-hover:opacity-30 transition-opacity">
                    <Image
                      src="/images/areas/botanical-branch-clean.webp"
                      alt=""
                      fill
                      className="object-contain object-right"
                    />
                  </div>

                  <div className="relative z-10">
                    {/* Top Row: Number 01 + Circular Icon + Title */}
                    <div className="flex items-center gap-3 mb-2 sm:mb-2.5">
                      <span className="font-serif text-[22px] sm:text-[25px] text-[#F4DFC0] font-normal leading-none shrink-0 w-7 sm:w-8">
                        {numStr}
                      </span>
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D5B878]/50 bg-[#164329] text-[#F4DFC0] flex items-center justify-center shrink-0 group-hover:border-[#ECCF96] group-hover:bg-[#1b4e31] group-hover:scale-105 transition-all shadow-xs">
                        <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                      </div>
                      <h4 className="font-serif font-medium text-[15px] sm:text-[16px] text-white leading-snug">
                        {payer.title[l]}
                      </h4>
                    </div>

                    {/* Description Text with high contrast readable color */}
                    <p className="text-[12px] sm:text-[12.5px] text-[#E4EFE8] leading-relaxed pl-0.5 font-normal">
                      {payer.desc[l]}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
