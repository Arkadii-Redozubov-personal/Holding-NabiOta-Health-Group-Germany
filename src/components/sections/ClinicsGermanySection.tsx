"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Stethoscope,
  Users,
  Scale,
  Network,
  Microscope,
  Brain,
  Syringe,
  Shield,
  MapPin,
  ClipboardList,
  BarChart3,
  Settings,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/layout/Container";

/**
 * PDF Section IV.3 – "NabiOta Clinics Germany GmbH"
 * Unternehmensgegenstand, geplante Fachabteilungen, stationäre Entwicklung.
 */

type Lang = "de" | "en" | "ru";
type T = Record<Lang, string>;
type Icon = React.ComponentType<{ className?: string; strokeWidth?: number }>;

const c = {
  tag: { de: "MVZ 3 · § 30 GewO · § 108 SGB V", en: "MVZ 3 · § 30 GewO · § 108 SGB V", ru: "MVZ 3 · § 30 GewO · § 108 SGB V" } as T,
  title: "NabiOta Clinics Germany GmbH",
  subtitle: {
    de: "Errichtung, Betrieb und Entwicklung medizinischer Kliniken",
    en: "Establishment, operation and development of medical clinics",
    ru: "Создание, эксплуатация и развитие медицинских клиник",
  } as T,
  lead: {
    de: "Gegenstand des Unternehmens ist die Errichtung, der Erwerb, der Betrieb und die Organisation von Kliniken und medizinischen Einrichtungen an einem oder mehreren Standorten in Deutschland, insbesondere von Privatkrankenanstalten nach § 30 Gewerbeordnung (GewO), sowie die Erbringung stationärer, teilstationärer und ambulanter medizinischer, chirurgischer, diagnostischer, therapeutischer und pflegerischer Leistungen.",
    en: "The company's purpose is the establishment, acquisition, operation and organisation of clinics and medical facilities at one or more locations in Germany, in particular private hospitals pursuant to § 30 GewO, and the provision of inpatient, day-case and outpatient medical, surgical, diagnostic, therapeutic and nursing services.",
    ru: "Предметом деятельности общества является создание, приобретение, эксплуатация и организация клиник и медицинских учреждений в одном или нескольких местах в Германии, в частности частных больниц по § 30 GewO, а также оказание стационарных, частично стационарных и амбулаторных медицинских, хирургических, диагностических, терапевтических и сестринских услуг.",
  } as T,

  pillars: [
    {
      icon: Building2 as Icon,
      title: { de: "Klinischer Betrieb", en: "Clinical operations", ru: "Клинический комплекс" } as T,
      text: {
        de: "Hierzu gehören insbesondere der Betrieb von Operationszentren, Diagnostik- und Therapiebereichen sowie die pflegerische und postoperative Versorgung. Das Leistungsangebot kann schmerztherapeutische, rehabilitative und sonstige Nachsorgeleistungen umfassen.",
        en: "This includes in particular the operation of operating centres, diagnostic and therapy areas, as well as nursing and post-operative care. The range of services may include pain management, rehabilitative and other aftercare services.",
        ru: "Это включает работу операционных центров, диагностических и терапевтических отделений, а также сестринский уход и послеоперационное обеспечение. Спектр может охватывать обезболивание, реабилитацию и другие виды последующего ухода.",
      } as T,
      image: "/images/areas/surgical-center.webp",
    },
    {
      icon: Users as Icon,
      title: { de: "Personal & Kooperationen", en: "Staff & cooperations", ru: "Персонал и кооперации" } as T,
      text: {
        de: "Die Gesellschaft ist berechtigt, ärztliches und nichtärztliches Personal zu beschäftigen sowie Kooperationen mit Ärzten, Krankenhäusern, medizinischen Versorgungszentren, Pflege-, Therapie-, Rehabilitations- und Forschungseinrichtungen einzugehen. Ambulante Operationen und die Zusammenarbeit mit Belegärzten erfolgen unter Beachtung der jeweils geltenden gesetzlichen, berufsrechtlichen und vertraglichen Voraussetzungen.",
        en: "The company is entitled to employ medical and non-medical staff and to enter into cooperations with physicians, hospitals, MVZs, nursing, therapy, rehabilitation and research facilities. Outpatient operations and cooperation with attending physicians are subject to applicable legal, professional and contractual requirements.",
        ru: "Общество вправе нанимать медицинский и немедицинский персонал, а также заключать соглашения о сотрудничестве с врачами, больницами, MVZ, учреждениями по уходу, терапии, реабилитации и исследованиям. Амбулаторные операции и работа с ординаторами осуществляются в рамках закона.",
      } as T,
      image: "/images/areas/stethoscope-clinic.webp",
    },
    {
      icon: Scale as Icon,
      title: { de: "GKV-Zulassung & SGB V", en: "SHI approval & SGB V", ru: "Допуск GKV и SGB V" } as T,
      text: {
        de: "Die Gesellschaft kann die Zulassung ihrer Krankenhäuser nach § 108 SGB V anstreben, insbesondere durch Aufnahme in den Krankenhausplan oder durch Abschluss eines Versorgungsvertrags nach § 109 SGB V. Leistungen zulasten der gesetzlichen Krankenversicherung werden ausschließlich auf Grundlage der erforderlichen Zulassungen, Genehmigungen und Verträge erbracht.",
        en: "The company may seek approval of its hospitals under § 108 SGB V, in particular through inclusion in the hospital plan or by concluding a care contract under § 109 SGB V. Services at the expense of the statutory health insurance are only provided on the basis of the required approvals, permits and contracts.",
        ru: "Общество может добиваться допуска своих больниц по § 108 SGB V, в частности путём включения в больничный план или заключения договора об оказании помощи по § 109 SGB V. Услуги за счёт обязательного медицинского страхования оказываются исключительно на основе необходимых разрешений и договоров.",
      } as T,
      image: "/images/areas/diagnostics.webp",
    },
    {
      icon: Network as Icon,
      title: { de: "Beteiligungen & Expansion", en: "Investments & expansion", ru: "Участия и экспансия" } as T,
      text: {
        de: "Die Gesellschaft ist berechtigt, Unternehmen mit gleichem oder verwandtem Unternehmensgegenstand zu gründen, zu erwerben oder sich an ihnen zu beteiligen sowie Betriebsstätten, Zweigniederlassungen und Tochtergesellschaften im In- und Ausland zu errichten. Die Gründung oder das Halten von Beteiligungen an vertragsärztlichen MVZ setzt die Erfüllung der geltenden Anforderungen des § 95 SGB V voraus.",
        en: "The company is entitled to found, acquire or acquire interests in companies with the same or related purpose, and to establish branch offices, subsidiaries and affiliated companies in Germany and abroad. The founding or holding of interests in contracted MVZ is subject to the applicable requirements of § 95 SGB V.",
        ru: "Общество вправе основывать, приобретать или участвовать в компаниях с аналогичным предметом деятельности, а также создавать филиалы, дочерние компании в Германии и за рубежом. Участие в MVZ по договорной медицине возможно при соблюдении § 95 SGB V.",
      } as T,
      image: "/images/areas/consulting.webp",
    },
  ],

  legalNote: {
    de: "Alle Tätigkeiten werden im rechtlich zulässigen Umfang ausgeübt. Erlaubnis- und zulassungspflichtige Tätigkeiten werden an jedem Standort erst nach Vorliegen der jeweils erforderlichen Voraussetzungen aufgenommen. Eine Konzession nach § 30 GewO begründet für sich allein weder eine Zulassung nach § 108 SGB V noch eine MVZ-Gründungsberechtigung als zugelassenes Krankenhaus.",
    en: "All activities are carried out within the legally permissible scope. Activities requiring a permit or approval are not commenced at any location until the respective required prerequisites are met. A concession under § 30 GewO alone does not constitute approval under § 108 SGB V or a right to establish an MVZ as an approved hospital.",
    ru: "Вся деятельность осуществляется в законно допустимых рамках. Лицензируемые виды деятельности начинаются в каждом месте только после выполнения соответствующих условий. Разрешение по § 30 GewO само по себе не является ни допуском по § 108 SGB V, ни правом на создание MVZ как допущенной больницы.",
  } as T,

  deptEyebrow: {
    de: "UNSERE PERSPEKTIVE",
    en: "OUR PERSPECTIVE",
    ru: "НАША ПЕРСПЕКТИВА",
  } as T,

  deptIntro: {
    de: "Die ambulanten Fachrichtungen werden anhand des geplanten stationären Eingriffsspektrums weiterentwickelt. Maßgeblich sind die beantragten Leistungsgruppen, ihre Qualitätskriterien und der regionale Bedarf. Ärztliche Vollzeitäquivalente, Dienstbereitschaft, Pflege, Ausstattung und zulässige Kooperationen sind für den Krankenhausstandort gesondert nachzuweisen. Eine automatische Umwandlung von MVZ-Fachrichtungen in Krankenhausabteilungen wird nicht vorausgesetzt.",
    en: "The outpatient specialties will be further developed based on the planned inpatient procedure spectrum. Decisive factors are the applied-for service groups, their quality criteria and regional demand. Medical full-time equivalents, on-call duty, nursing, equipment and permitted cooperations must be demonstrated separately for the hospital site. An automatic conversion of MVZ specialties into hospital departments is not assumed.",
    ru: "Амбулаторные специальности будут развиваться с учётом планируемого стационарного спектра вмешательств. Ключевыми факторами являются заявленные группы услуг, их критерии качества и региональный спрос. Врачебные ставки полного рабочего времени, дежурства, уход, оснащение и разрешённые кооперации должны подтверждаться отдельно для больничного места. Автоматическая трансформация специальностей MVZ в отделения больницы не предполагается.",
  } as T,

  depts: [
    {
      icon: Syringe as Icon,
      title: {
        de: "Anästhesiologie",
        en: "Anaesthesiology",
        ru: "Анестезиология",
      } as T,
      text: {
        de: "Anästhesiologie, intensivmedizinische Kompetenz und internistische Versorgung werden frühzeitig eingeplant.",
        en: "Anaesthesiology, intensive care expertise and internal medicine are planned at an early stage.",
        ru: "Анестезиология, реанимационная компетенция и терапевтическое обеспечение планируются на раннем этапе.",
      } as T,
    },
    {
      icon: Microscope as Icon,
      title: {
        de: "Radiologie",
        en: "Radiology",
        ru: "Радиология",
      } as T,
      text: {
        de: "Radiologie wird je nach OP-Spektrum angebunden.",
        en: "Radiology is integrated according to the surgical spectrum.",
        ru: "Радиология подключается в зависимости от операционного спектра.",
      } as T,
    },
    {
      icon: Brain as Icon,
      title: {
        de: "Neurologie",
        en: "Neurology",
        ru: "Неврология",
      } as T,
      text: {
        de: "Neurologie wird je nach OP-Spektrum angebunden.",
        en: "Neurology is integrated according to the surgical spectrum.",
        ru: "Неврология — в зависимости от операционного спектра.",
      } as T,
    },
    {
      icon: Stethoscope as Icon,
      title: {
        de: "Endoskopie",
        en: "Endoscopy",
        ru: "Эндоскопия",
      } as T,
      text: {
        de: "Endoskopie wird je nach OP-Spektrum angebunden.",
        en: "Endoscopy is integrated according to the surgical spectrum.",
        ru: "Эндоскопия — в зависимости от операционного спектра.",
      } as T,
    },
    {
      icon: BarChart3 as Icon,
      title: {
        de: "Planung und Struktur",
        en: "Planning and structure",
        ru: "Планирование и структура",
      } as T,
      text: {
        de: "Der erforderliche Umfang eigener Strukturen wird vor Investitionsentscheidungen mit der Krankenhausplanung abgestimmt.",
        en: "The required scope of own structures is coordinated with hospital planning prior to investment decisions.",
        ru: "Необходимый объём собственной инфраструктуры согласовывается с планированием больницы до принятия инвестиционных решений.",
      } as T,
    },
    {
      icon: ClipboardList as Icon,
      title: {
        de: "Leistungsgruppen und Qualität",
        en: "Service groups and quality",
        ru: "Группы услуг и качество",
      } as T,
      text: {
        de: "Maßgeblich sind die beantragten Leistungsgruppen, ihre Qualitätskriterien und der regionale Bedarf.",
        en: "Decisive are the applied-for service groups, their quality criteria and regional demand.",
        ru: "Ключевыми являются заявленные группы услуг, их критерии качества и региональный спрос.",
      } as T,
    },
    {
      icon: Settings as Icon,
      title: {
        de: "Personal und Ausstattung",
        en: "Staffing and equipment",
        ru: "Персонал и оснащение",
      } as T,
      text: {
        de: "Ärztliche Vollzeitäquivalente, Dienstbereitschaft, Pflege und Ausstattung sind gesondert nachzuweisen.",
        en: "Medical full-time equivalents, on-call duty, nursing and equipment must be demonstrated separately.",
        ru: "Врачебные ставки, дежурства, уход и оснащение подтверждаются отдельно.",
      } as T,
    },
    {
      icon: MapPin as Icon,
      title: {
        de: "Kooperationen",
        en: "Cooperations",
        ru: "Кооперации",
      } as T,
      text: {
        de: "Zulässige Kooperationen sind für den Krankenhausstandort gesondert nachzuweisen.",
        en: "Permitted cooperations must be demonstrated separately for the hospital site.",
        ru: "Разрешённые кооперации подтверждаются отдельно для каждого места больницы.",
      } as T,
    },
  ],
};

export function ClinicsGermanySection({ locale = "de" }: { locale?: string }) {
  const l: Lang = locale === "ru" ? "ru" : locale === "en" ? "en" : "de";

  return (
    <section
      id="nabiota-clinics-germany"
      className="relative pt-0 pb-16 sm:pb-20 lg:pb-24 bg-[#FAF8F5] border-t border-[#EDE8DE]/60 overflow-hidden"
    >
      {/* Subtle background glow accents */}
      <div className="absolute -top-40 -left-32 w-[500px] h-[500px] rounded-full bg-[#D5B878]/[0.06] blur-3xl pointer-events-none" />
      <div className="absolute top-[40%] -right-24 w-[400px] h-[400px] rounded-full bg-[#E8DFC8]/25 blur-3xl pointer-events-none" />

      {/* ── Hero Banner: Full-width banner with soft right-photo fade (Matching MVZ 1 & 2 design) ── */}
      <div className="relative z-10 w-full overflow-hidden pb-4 sm:pb-6">
        {/* Soft Background Photo with smooth horizontal fade / blur effect */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[64%] xl:w-[60%] pointer-events-none overflow-hidden select-none">
          <Image
            src="/images/areas/atrium-lounge.webp"
            alt="NabiOta Clinics Germany GmbH"
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
            {/* Top Row: Title, Eyebrow & Lead on the left (No buttons) */}
            <div className="max-w-xl lg:max-w-2xl mb-6 sm:mb-8 lg:mb-9">
              {/* Eyebrow with gold line: incorporating MVZ 3 · § 30 GewO · § 108 SGB V & subtitle */}
              <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3 flex-wrap">
                <span className="w-6 h-[1.5px] bg-[#C5A56A]" />
                <span className="text-[11px] sm:text-[11.5px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase">
                  {c.tag[l]}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#C5A56A]/60" />
                <span className="text-[10px] sm:text-[10.5px] font-medium tracking-[0.2em] text-[#6E7870] uppercase">
                  {c.subtitle[l]}
                </span>
              </div>

              {/* Title with styled italic phrase */}
              <h2 className="font-serif text-[24px] sm:text-[28px] lg:text-[34px] xl:text-[38px] text-[#142318] font-normal leading-[1.18] mb-3">
                {(() => {
                  const phrase = "Clinics Germany";
                  const [before, after] = c.title.split(phrase);
                  return after === undefined ? (
                    c.title
                  ) : (
                    <>
                      {before}
                      <span className="font-serif italic text-[#C5A56A]">{phrase}</span>
                      {after}
                    </>
                  );
                })()}
              </h2>

              <p className="text-[12.5px] sm:text-[13px] text-[#556057] leading-relaxed max-w-xl">
                {c.lead[l]}
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* ── Top Part: 4 Pillars & Legal Disclaimer ── */}
      <Container size="wide" className="relative z-10 mt-4 sm:mt-6">
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          {/* 4 Pillar Cards */}
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

                    {/* Mehr erfahren link */}
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

          {/* Legal disclaimer */}
          <div className="flex gap-4 rounded-xl sm:rounded-2xl border border-[#E0D5C1] bg-[#FAF5EC] p-5 sm:p-6">
            <Shield className="w-5 h-5 text-[#9E7D3B] shrink-0 mt-0.5" />
            <p className="text-[12.5px] sm:text-[13px] text-[#556057] leading-relaxed">{c.legalNote[l]}</p>
          </div>
        </div>
      </Container>

      {/* ── Preparation of future departments (Full Page Width Section, Real Vector Arc Transition, Compact Height) ── */}
      <div className="relative mt-8 sm:mt-10 lg:mt-12 w-full overflow-hidden">
        {/* Full-bleed Top Hero: Description on Left, mvz.webp on Right with Real Vector Curve Arc */}
        <div className="w-full flex flex-col lg:flex-row items-stretch min-h-[250px] sm:min-h-[280px] lg:min-h-[320px] xl:min-h-[340px] relative">
          
          {/* Left Column: Eyebrow, Title, Description */}
          <div className="w-full lg:w-[52%] xl:w-[54%] flex flex-col justify-center py-6 sm:py-8 lg:py-10 px-6 sm:px-10 lg:pl-16 xl:pl-28 2xl:pl-36 lg:pr-10 z-10">
            <div className="max-w-xl">
              {/* Eyebrow with gold line */}
              <div className="flex items-center gap-2.5 mb-2 sm:mb-2.5">
                <span className="w-6 h-[1.5px] bg-[#C5A56A]" />
                <span className="text-[10.5px] sm:text-[11px] font-semibold tracking-[0.22em] text-[#C5A56A] uppercase">
                  {c.deptEyebrow[l]}
                </span>
              </div>

              {/* Main Title with styled italic word */}
              <h3 className="font-serif text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[36px] text-[#142318] font-normal leading-[1.18] mb-2.5 sm:mb-3">
                {l === "en" ? (
                  <>
                    Preparation of{" "}
                    <span className="font-serif italic text-[#C5A56A]">future</span>{" "}
                    departments
                  </>
                ) : l === "ru" ? (
                  <>
                    Подготовка{" "}
                    <span className="font-serif italic text-[#C5A56A]">будущих</span>{" "}
                    отделений
                  </>
                ) : (
                  <>
                    Vorbereitung der{" "}
                    <span className="font-serif italic text-[#C5A56A]">späteren</span>{" "}
                    Fachabteilungen
                  </>
                )}
              </h3>

              {/* Description */}
              <p className="text-[12.5px] sm:text-[13px] text-[#556057] leading-relaxed max-w-lg">
                {c.deptIntro[l]}
              </p>
            </div>
          </div>

          {/* Right Column: Full-bleed mvz.webp with Real Curved Vector Transition */}
          <div className="w-full lg:w-[48%] xl:w-[46%] relative min-h-[200px] sm:min-h-[240px] lg:min-h-full overflow-hidden">
            <Image
              src="/images/services/mvz.webp"
              alt="MVZ Medical Care"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />

            {/* ── Real SVG Curved Arc Transition (Desktop) ── */}
            <div className="hidden lg:block absolute inset-y-0 left-0 w-36 sm:w-44 lg:w-56 xl:w-64 h-full pointer-events-none z-10">
              <svg
                viewBox="0 0 200 600"
                preserveAspectRatio="none"
                className="w-full h-full"
              >
                <defs>
                  <linearGradient id="curveRibbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C5A56A" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#EADEC7" stopOpacity="0.15" />
                  </linearGradient>
                </defs>

                {/* Solid fill matching section background #FAF8F5 on the left */}
                <path
                  d="M 0,0 L 50,0 C 130,120 160,260 110,410 C 85,485 45,550 0,600 L 0,600 Z"
                  fill="#FAF8F5"
                />

                {/* Soft beige gradient ribbon band */}
                <path
                  d="M 50,0 C 130,120 160,260 110,410 C 85,485 45,550 0,600 L 16,600 C 62,550 102,485 128,410 C 178,260 148,120 68,0 Z"
                  fill="url(#curveRibbonGrad)"
                />

                {/* Primary gold wave line */}
                <path
                  d="M 50,0 C 130,120 160,260 110,410 C 85,485 45,550 0,600"
                  fill="none"
                  stroke="#C5A56A"
                  strokeWidth="1.6"
                  strokeOpacity="0.8"
                  vectorEffect="non-scaling-stroke"
                />

                {/* Secondary champagne ribbon line */}
                <path
                  d="M 68,0 C 148,120 178,260 128,410 C 102,485 62,550 16,600"
                  fill="none"
                  stroke="#E2D4BD"
                  strokeWidth="1.2"
                  strokeOpacity="0.75"
                  vectorEffect="non-scaling-stroke"
                />

                {/* Third delicate dashed line */}
                <path
                  d="M 84,0 C 164,120 194,260 144,410 C 118,485 78,550 28,600"
                  fill="none"
                  stroke="#C5A56A"
                  strokeWidth="0.8"
                  strokeOpacity="0.45"
                  strokeDasharray="4 3"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Delicate botanical leaf watermark sitting along the curved wave */}
              <div className="absolute top-[48%] left-6 -translate-y-1/2 w-44 h-44 pointer-events-none opacity-40 select-none sepia hue-rotate-[15deg]">
                <Image
                  src="/images/areas/botanical-branch-clean.webp"
                  alt=""
                  fill
                  className="object-contain -rotate-12"
                  unoptimized
                />
              </div>
            </div>

            {/* ── Real SVG Curved Arc Transition (Mobile) ── */}
            <div className="lg:hidden absolute inset-x-0 top-0 h-16 pointer-events-none z-10">
              <svg
                viewBox="0 0 600 80"
                preserveAspectRatio="none"
                className="w-full h-full"
              >
                <path
                  d="M 0,0 L 600,0 L 600,30 C 450,75 250,15 0,55 Z"
                  fill="#FAF8F5"
                />
                <path
                  d="M 0,55 C 250,15 450,75 600,30"
                  fill="none"
                  stroke="#C5A56A"
                  strokeWidth="1.5"
                  strokeOpacity="0.8"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M 0,63 C 250,23 450,83 600,38"
                  fill="none"
                  stroke="#E2D4BD"
                  strokeWidth="1.2"
                  strokeOpacity="0.6"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* ── 8 Cards Grid (Clean and compact, without enclosing frame) ── */}
        <div className="max-w-6xl mx-auto px-5 sm:px-8 mt-6 sm:mt-8 pb-3 relative">
          {/* Subtle botanical leaves watermark in bottom-right behind cards */}
          <div className="absolute -bottom-8 -right-8 w-64 h-64 pointer-events-none opacity-20 select-none sepia">
            <Image
              src="/images/areas/botanical-branch-clean.webp"
              alt=""
              fill
              className="object-contain rotate-12"
              unoptimized
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3.5">
            {c.depts.map((d, i) => {
              const Icon = d.icon;
              return (
                <div
                  key={i}
                  className="group relative rounded-[18px] bg-white border border-[#EAE4D7] p-3.5 sm:p-4 flex items-center gap-3.5 sm:gap-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-[#D5B878]/60 transition-all duration-300"
                >
                  {/* Left: Icon circle */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FAF5EB] border border-[#EFE5D5] flex items-center justify-center shrink-0 group-hover:bg-[#F3EAD9] transition-colors">
                    <Icon className="w-5 h-5 text-[#9E7D3B]" strokeWidth={1.7} />
                  </div>

                  {/* Center: Title + Description */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-[15px] sm:text-[16px] text-[#142318] font-medium leading-snug mb-0.5">
                      {d.title[l]}
                    </h4>
                    <p className="text-[11.5px] sm:text-[12px] text-[#556057] leading-relaxed">
                      {d.text[l]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
