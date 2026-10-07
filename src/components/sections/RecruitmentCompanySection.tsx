"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users2,
  Stethoscope,
  GraduationCap,
  Globe2,
  FileCheck2,
  Scale,
  ShieldCheck,
  Building2,
  Home,
  CheckCircle2,
  Briefcase,
  UserCheck,
  Languages,
  ShieldAlert,
  Award,
  ArrowRight,
  HeartPulse,
  Microscope,
  Activity,
} from "lucide-react";
import { Container } from "@/components/layout/Container";

/**
 * PDF Section IV.6 – "NabiOta Medical Recruitment Services GmbH"
 * (Medizinische Fachkraft Vermittlungsservice)
 * Unternehmensgegenstand, Fachberufe, 4 Leistungsbereiche,
 * Behördenzuständigkeit, Trennung Personalvermittlung vs. Arbeitnehmerüberlassung (AÜG).
 */

type Lang = "de" | "en" | "ru";
type T = Record<Lang, string>;
type Icon = React.ComponentType<{ className?: string; strokeWidth?: number }>;

const professionIcons = [
  Stethoscope,
  HeartPulse,
  UserCheck,
  Microscope,
  Activity,
  Briefcase,
];

const c = {
  tag: {
    de: "GmbH · Personalvermittlung & Integration · AÜG-Konform",
    en: "GmbH · Recruitment & Integration · AÜG-Compliant",
    ru: "GmbH · Подбор персонала и интеграция · Стандарты AÜG",
  } as T,
  title: "NabiOta Medical Recruitment Services GmbH",
  subtitle: {
    de: "Medizinische Fachkraft Vermittlungsservice",
    en: "Healthcare Professional Placement & Recruitment Services",
    ru: "Сервис подбора и интеграции медицинских специалистов",
  } as T,
  lead: {
    de: "Gegenstand des Unternehmens ist die nationale und internationale Gewinnung, Auswahl und Vermittlung medizinischer, pflegerischer, therapeutischer und weiterer Fachkräfte für Einrichtungen des Gesundheitswesens in Deutschland und im Ausland sowie die Erbringung damit verbundener organisatorischer Personal- und Integrationsdienstleistungen.",
    en: "The company's purpose is the national and international sourcing, selection, and placement of medical, nursing, therapeutic, and allied healthcare professionals for institutions in Germany and abroad, as well as providing associated organizational personnel and integration services.",
    ru: "Предметом деятельности компании является национальный и международный поиск, отбор и трудоустройство врачебных, сестринских, терапевтических и руководящих кадров для учреждений здравоохранения в Германии и за рубежом, а также оказание сопутствующих организационных услуг по адаптации и интеграции.",
  } as T,

  professionsTitle: {
    de: "Vermittelte Berufsgruppen & Einrichtungen",
    en: "Placements by Profession & Healthcare Facility",
    ru: "Охватываемые профессии и медицинские учреждения",
  } as T,
  professionsDesc: {
    de: "Die Gesellschaft vermittelt qualifiziertes Fachpersonal an Krankenhäuser, Fachkliniken, Medizinische Versorgungszentren (MVZ), Praxen sowie Pflege-, Therapie- und Rehabilitationseinrichtungen:",
    en: "The company places qualified clinical and operational talent into hospitals, specialty clinics, outpatient medical centers (MVZs), private practices, nursing homes, and rehabilitation institutes:",
    ru: "Компания подбирает квалифицированный персонал для стационаров, профильных клиник, амбулаторных центров (MVZ), частных практик, а также учреждений ухода и реабилитации:",
  } as T,
  professionsList: [
    { de: "Ärztliches Fachpersonal (Assistenz-, Fach- & Oberärzte)", en: "Medical Doctors (Residents, Specialists, Senior Physicians)", ru: "Врачи (ассистенты, профильные специалисты, заведующие)" },
    { de: "Pflegefachkräfte (Intensiv-, Anästhesie-, OP- & Stationspflege)", en: "Registered Nurses (ICU, Anesthesia, Surgical & Ward Care)", ru: "Медсёстры и медбратья (реанимация, анестезия, оперблок, палата)" },
    { de: "Medizinische Fachangestellte (MFA)", en: "Certified Medical Assistants (MFA)", ru: "Медицинские ассистенты (MFA)" },
    { de: "Medizinisch-technisches Personal (MTRA, MTLA, MTA)", en: "Radiology & Laboratory Technologists (MTRA, MTLA, MTA)", ru: "Рентген-лаборанты и медицинские техники (MTRA, MTLA, MTA)" },
    { de: "Therapeuten (Physiotherapeuten, Ergotherapeuten, Logopäden)", en: "Therapists (Physical, Occupational, and Speech-Language Therapists)", ru: "Терапевты (физиотерапевты, эрготерапевты, логопеды)" },
    { de: "Verwaltungs- und Führungskräfte im Gesundheitswesen", en: "Healthcare Management & Healthcare Administration Executives", ru: "Административный и руководящий персонал здравоохранения" },
  ] as T[],

  pillars: [
    {
      icon: Users2 as Icon,
      title: {
        de: "Bedarfsanalyse, Direct Search & Matching",
        en: "Needs Analysis, Direct Search & Matching",
        ru: "Анализ потребностей, прямой поиск и отбор",
      } as T,
      text: {
        de: "Ermittlung des konkreten Personalbedarfs, Erstellung präziser Anforderungsprofile, internationales Personalmarketing, strukturierte Eignungsprüfungen, Prüfung von Zeugnissen und Koordination mehrsprachiger Auswahlgespräche.",
        en: "Determining precise staffing requirements, drafting requirement profiles, global HR marketing, candidate screening, qualification document reviews, and orchestrating structured bilingual interviews.",
        ru: "Определение потребности в кадрах, составление профилей вакансий, международный маркетинг, скрининг квалификационных документов и проведение структурированных собеседований.",
      } as T,
      image: "/images/areas/consulting.webp",
    },
    {
      icon: GraduationCap as Icon,
      title: {
        de: "Approbation, Anerkennung & Behördenmanagement",
        en: "Medical Licensure, Recognition & Visas",
        ru: "Апробация, признание дипломов и ведомства",
      } as T,
      text: {
        de: "Organisatorische Unterstützung bei der Gleichwertigkeitsprüfung, Approbation und Berufserlaubnis. Betreuung von Visa-, Aufenthalts- und Beschäftigungsverfahren, Beglaubigungen, FSP- & Kenntnisprüfungsvorbereitung.",
        en: "End-to-end guidance through degree equivalence evaluations, medical licensure (Approbation), and temporary work permits. Coordination of visa, residence, certified translations, FSP, and KP exams.",
        ru: "Организационная помощь в проверке эквивалентности диплома, получении апробации (Approbation) и Berufserlaubnis. Полное сопровождение виз, ВНЖ, заверений и подготовки к экзаменам FSP/KP.",
      } as T,
      image: "/images/areas/stethoscope-clinic.webp",
    },
    {
      icon: Home as Icon,
      title: {
        de: "Relocation, Wohnungssuche & soziale Integration",
        en: "Relocation, Housing & Social Onboarding",
        ru: "Релокация, жильё и бытовая интеграция",
      } as T,
      text: {
        de: "Ganzheitliche Begleitung bei Einreise, administrativer Registrierung, Wohnungssuche, Umzug und Eröffnung von Bankkonten. Unterstützung bei Familiennachzug, Schulplätzen und langfristiger sozialer Verwurzelung.",
        en: "Holistic relocation assistance covering arrival, municipal registration, housing search, moves, and local banking. Hands-on assistance for family reunification visas, schooling, and community integration.",
        ru: "Комплексное содействие при въезде, регистрации, поиске жилья, переезде и открытии счетов. Поддержка в воссоединении семей, устройстве детей в сады/школы и долгосрочной адаптации.",
      } as T,
      image: "/images/areas/card-plant.webp",
    },
    {
      icon: Briefcase as Icon,
      title: {
        de: "Klinisches Onboarding & Mitarbeiterbindung",
        en: "Clinical Onboarding & Retention Management",
        ru: "Клиническая адаптация и удержание кадров",
      } as T,
      text: {
        de: "Strukturierte Begleitung des Einarbeitungsprozesses im klinischen Alltag. Beratung von Arbeitgebern bei Personalentwicklung, interkultureller Teamintegration und Maßnahmen zur nachhaltigen Mitarbeiterbindung.",
        en: "Structured workplace onboarding inside clinic environments. Strategic consultation for employers on professional growth pathways, cross-cultural team integration, and sustainable talent retention.",
        ru: "Структурированное сопровождение процесса ввода в должность в клинике. Консультирование работодателей по развитию персонала, межкультурной интеграции и долгосрочному удержанию сотрудников.",
      } as T,
      image: "/images/careers/team.webp",
    },
  ],

  governanceTitle: {
    de: "Rechtliche Rahmenbedingungen, AÜG & Haftungsausschluss",
    en: "Statutory Governance, AÜG Compliance & Disclaimers",
    ru: "Правовые основы, соблюдение AÜG и правовые оговорки",
  } as T,
  governanceItems: [
    {
      icon: Scale as Icon,
      title: {
        de: "Behördenzuständigkeit & Keine Verfahrensgarantie",
        en: "Public Authority Mandate & No Outcome Guarantee",
        ru: "Прерогатива госорганов и отсутствие гарантии решения",
      } as T,
      desc: {
        de: "Entscheidungen über berufliche Anerkennung, Approbation, Berufserlaubnis und Aufenthaltsrechte obliegen ausschließlich den zuständigen Landes- und Ausländerbehörden. Verbindliche Verfahrensergebnisse können nicht garantiert werden. Rechts- und Steuerberatung erfolgen ausschließlich durch befugte Berufsträger.",
        en: "Final decisions regarding qualification recognition, medical licensure, and residency permits rest exclusively with responsible German state authorities. Specific legal outcomes cannot be guaranteed. Legal and tax advice is rendered solely by authorized professionals.",
        ru: "Решения о признании квалификации, апробации, разрешении на работу и виде на жительство принимают исключительно компетентные земельные ведомства ФРГ. Результат рассмотрения не гарантируется. Юридические и налоговые консультации проводятся только уполномоченными лицами.",
      } as T,
    },
    {
      icon: Briefcase as Icon,
      title: {
        de: "Strikte Trennung: Vermittlung vs. Arbeitnehmerüberlassung (AÜG)",
        en: "Strict Separation: Direct Placement vs. Staff Leasing (AÜG)",
        ru: "Разделение: прямой подбор vs. лизинг персонала (AÜG)",
      } as T,
      desc: {
        de: "Personalvermittlung und Arbeitnehmerüberlassung werden organisatorisch und vertraglich strikt getrennt. Bei der Personalvermittlung entsteht das Arbeitsverhältnis unmittelbar zwischen Fachkraft und Arbeitgeber. Eine Arbeitnehmerüberlassung erfolgt nur bei Vorliegen der Erlaubnis nach dem Arbeitnehmerüberlassungsgesetz (AÜG).",
        en: "Direct permanent placement and temporary staff leasing are strictly separated organizationally and contractually. In permanent placement, employment contracts arise exclusively between the professional and the hospital. Staff leasing operates solely under valid AÜG permits.",
        ru: "Прямой рекрутинг и заёмный труд (лизинг) разделены организационно и договорно. При прямом подборе трудовой договор заключается строго между специалистом и клиникой. Лизинг персонала возможен только при наличии специального разрешения по закону AÜG.",
      } as T,
    },
    {
      icon: ShieldCheck as Icon,
      title: {
        de: "Datenschutz (DSGVO) & Zulassungskonforme Ausübung",
        en: "GDPR Data Compliance & Authorized Practice Scope",
        ru: "Защита данных (DSGVO) и работа в рамках лицензий",
      } as T,
      desc: {
        de: "Die Verarbeitung personenbezogener Bewerber- und Mitarbeiterdaten erfolgt unter strikter Einhaltung der geltenden Datenschutzbestimmungen (DSGVO). Berufszulassungspflichtige Tätigkeiten dürfen von Fachkräften ausschließlich im Rahmen ihrer tatsächlich bestehenden behördlichen Berechtigungen ausgeübt werden.",
        en: "Candidate and personnel data are processed under rigorous compliance with European privacy standards (GDPR). Regulated healthcare activities may be performed by placed professionals strictly within the boundaries of their active credentials.",
        ru: "Обработка персональных данных кандидатов ведётся в строгом соответствии с европейскими нормами (DSGVO). Регулируемая медицинская деятельность осуществляется специалистами исключительно в объёме действующих государственных допусков.",
      } as T,
    },
  ],
};

export function RecruitmentCompanySection({ locale = "de" }: { locale?: string }) {
  const l: Lang = locale === "ru" ? "ru" : locale === "en" ? "en" : "de";

  return (
    <section
      id="nabiota-recruitment-services-gmbh-structure"
      className="relative pt-0 pb-16 sm:pb-20 lg:pb-24 bg-[#FAF8F5] border-t border-[#EDE8DE]/60 overflow-hidden"
    >
      {/* Subtle background glow accents */}
      <div className="absolute -top-40 -left-32 w-[500px] h-[500px] rounded-full bg-[#D5B878]/[0.06] blur-3xl pointer-events-none" />
      <div className="absolute top-[40%] -right-24 w-[400px] h-[400px] rounded-full bg-[#E8DFC8]/25 blur-3xl pointer-events-none" />

      {/* ── Hero Banner: Full-width banner with soft right-photo fade & profession cards along bottom (Matching MVZ style) ── */}
      <div className="relative z-10 w-full overflow-hidden pb-4 sm:pb-6">
        {/* Soft Background Photo with smooth horizontal fade / blur effect */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[64%] xl:w-[60%] pointer-events-none overflow-hidden select-none">
          <Image
            src="/images/about/hero-doctors.webp"
            alt="NabiOta Medical Recruitment Services GmbH"
            fill
            className="object-cover object-center lg:object-right"
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
          {/* Subtle horizontal gradient fade - softer and crisper photo visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] from-0% via-[#FAF8F5]/75 via-18% via-[#FAF8F5]/20 via-38% to-transparent to-75%" />
          {/* Subtle vertical gradient fade for mobile & bottom blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/50 via-15% to-transparent lg:hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] from-0% via-[#FAF8F5]/20 via-10% to-transparent hidden lg:block" />
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
            {/* Top Row: Title, Eyebrow & Lead on the left */}
            <div className="max-w-xl lg:max-w-2xl mb-6 sm:mb-8 lg:mb-9">
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
                <span className="font-serif italic text-[#C5A56A]">Medical Recruitment Services</span>{" "}
                <span className="text-[#C5A56A] font-sans font-semibold text-[0.72em] tracking-wider uppercase ml-1 align-baseline">
                  GmbH
                </span>
              </h2>

              <p className="text-[12.5px] sm:text-[13px] text-[#556057] leading-relaxed max-w-xl font-sans">
                {c.lead[l]}
              </p>
            </div>

            {/* Bottom: 6 Profession Cards spanning across width (Matching MVZ style) */}
            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2.5">
                {c.professionsList.map((item, idx) => {
                  const ProfIcon = professionIcons[idx % professionIcons.length] || UserCheck;
                  return (
                    <div
                      key={idx}
                      className="group relative rounded-xl bg-white/85 hover:bg-white border border-[#EAE4D7] hover:border-[#D5B878]/70 py-2.5 px-3 sm:px-3.5 flex items-center gap-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-sm transition-all duration-300 backdrop-blur-xs"
                    >
                      <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-[#FAF5EB] border border-[#EFE5D5] flex items-center justify-center shrink-0 group-hover:bg-[#F3EAD9] transition-colors">
                        <ProfIcon className="w-3.5 h-3.5 text-[#9E7D3B]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif text-[11.5px] sm:text-[12px] text-[#142318] font-medium leading-tight">
                          {item[l]}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Neat plaque / note below the profession cards (as requested: "надпись под ним снизу карточек аккуратным текстом или плажкой") */}
              <div className="mt-3.5 sm:mt-4 p-3 sm:py-2.5 sm:px-4 rounded-xl sm:rounded-full bg-white/80 border border-[#EDE8DE] backdrop-blur-xs flex items-center gap-2.5 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#C5A56A] shrink-0" />
                <p className="text-[11.5px] sm:text-[12px] text-[#556057] font-sans leading-relaxed">
                  {c.professionsDesc[l]}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ── Main Content Container ── */}
      <Container size="wide" className="relative z-10 mt-6 sm:mt-8">
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          {/* 4 Service Pillars (in exact style of MVZ 3 / Photo 3) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {c.pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              const numStr = String(i + 1).padStart(2, "0");
              return (
                <article
                  key={i}
                  className="group relative rounded-[20px] sm:rounded-[22px] bg-white border border-[#EAE4D7] hover:border-[#D5B878]/60 hover:shadow-xl transition-all duration-300 shadow-sm overflow-hidden flex flex-col justify-between min-h-[200px]"
                >
                  {/* Right faded photo */}
                  <div className="absolute right-0 top-0 bottom-0 w-[40%] sm:w-[38%] pointer-events-none overflow-hidden select-none">
                    <Image
                      src={pillar.image}
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
                        {pillar.title[l]}
                      </h3>

                      {/* Body text */}
                      <p className="text-[12px] sm:text-[12.5px] text-[#4E5650] leading-relaxed max-w-[64%] sm:max-w-[62%] font-sans">
                        {pillar.text[l]}
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
        </div>
      </Container>
    </section>
  );
}
