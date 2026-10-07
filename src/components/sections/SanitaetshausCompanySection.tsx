"use client";
import React from "react";
import Image from "next/image";
import {
  Bandage,
  ShoppingCart,
  BedDouble,
  PackageCheck,
  ClipboardList,
  Truck,
  Wrench,
  FileText,
  ShieldCheck,
  Scale,
  Lock,
  HardHat,
  Network,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/layout/Container";

/**
 * PDF Section IV.9 – "NabiOta Sanitätshaus GmbH"
 * (NabiOta Medical Supplies GmbH)
 * 8 service pillars + legal requirements table (§§ 126/127 SGB V,
 * Handwerksordnung, EU-MDR/MPDG, DSGVO).
 */

type Lang = "de" | "en" | "ru";
type T = Record<Lang, string>;
type Icon = React.ComponentType<{ className?: string }>;

const c = {
  tag: {
    de: "GmbH · Sanitätshaus · §§ 126/127 SGB V",
    en: "GmbH · Medical Supply Store · §§ 126/127 SGB V",
    ru: "GmbH · Медицинский магазин · §§ 126/127 SGB V",
  } as T,
  title: "NabiOta Sanitätshaus GmbH",
  titleAlt: "NabiOta Medical Supplies GmbH",
  subtitle: {
    de: "Hilfsmittel, Medizinprodukte & Pflegeversorgung",
    en: "Medical Aids, Devices & Home Care Supplies",
    ru: "Средства реабилитации, медицинские изделия и товары по уходу",
  } as T,
  lead: {
    de: "Gegenstand des Unternehmens ist der Betrieb von Sanitätshäusern sowie der Handel, die Bereitstellung, der Verkauf und die Vermietung von medizinischen Hilfsmitteln, Pflegehilfsmitteln, Medizinprodukten, Rehabilitationsmitteln und medizinischen Verbrauchsmaterialien. Die Gesellschaft versorgt insbesondere Menschen nach Operationen, bei Erkrankungen des Bewegungsapparates, neurologischen und chronischen Erkrankungen sowie Pflegebedürftigkeit – für Patienten der NabiOta-Einrichtungen ebenso wie für externe Kunden und medizinische Einrichtungen.",
    en: "The company's purpose is the operation of medical supply stores and the trade, provision, sale, and rental of medical aids, care appliances, medical devices, rehabilitation equipment, and clinical consumables. The company serves post-surgical patients, individuals with musculoskeletal, neurological and chronic conditions, and those in need of care – both within the NabiOta network and for external customers and healthcare facilities.",
    ru: "Предметом деятельности компании является эксплуатация санитарных домов, а также торговля, поставка, продажа и аренда медицинских вспомогательных средств, изделий по уходу, медицинских изделий, реабилитационного оборудования и расходных материалов. Компания обслуживает пациентов после операций, лиц с заболеваниями опорно-двигательного аппарата, неврологическими и хроническими заболеваниями, а также нуждающихся в уходе.",
  } as T,

  servicesTitle: {
    de: "Das 8-Säulen-Leistungsspektrum der NabiOta Sanitätshaus GmbH",
    en: "The 8 Core Service Pillars of NabiOta Sanitätshaus GmbH",
    ru: "8 ключевых направлений работы NabiOta Sanitätshaus GmbH",
  } as T,
  services: [
    {
      num: "01",
      icon: Bandage as Icon,
      title: {
        de: "Orthopädische Versorgung",
        en: "Orthopaedic Supply",
        ru: "Ортопедическое снабжение",
      } as T,
      desc: {
        de: "Bereitstellung und fachgerechte Anpassung von Bandagen, Orthesen, Stützkorsetts, Kompressionsprodukten und weiteren orthopädischen Hilfsmitteln.",
        en: "Professional fitting and supply of bandages, orthoses, supportive corsets, compression garments, and further orthopaedic aids.",
        ru: "Профессиональный подбор и поставка бандажей, ортезов, корсетов, компрессионных изделий и иных ортопедических вспомогательных средств.",
      } as T,
    },
    {
      num: "02",
      icon: ShoppingCart as Icon,
      title: {
        de: "Mobilitäts- & Rehabilitationsversorgung",
        en: "Mobility & Rehabilitation Aids",
        ru: "Средства мобильности и реабилитации",
      } as T,
      desc: {
        de: "Verkauf und Vermietung von Gehstützen, Rollatoren, Rollstühlen, Transferhilfen und weiteren Hilfsmitteln zur Unterstützung der Mobilität und Selbstständigkeit.",
        en: "Sale and rental of crutches, rollators, wheelchairs, transfer aids, and other devices supporting mobility and independence.",
        ru: "Продажа и аренда костылей, ходунков, инвалидных колясок, средств перемещения и иных устройств для мобильности и самостоятельности.",
      } as T,
    },
    {
      num: "03",
      icon: BedDouble as Icon,
      title: {
        de: "Häusliche Pflegeversorgung",
        en: "Home Care Equipment",
        ru: "Оборудование для домашнего ухода",
      } as T,
      desc: {
        de: "Bereitstellung von Pflegebetten, Lagerungs- und Positionierungshilfen, Hilfsmitteln zur Dekubitusprophylaxe sowie geeigneten Hilfsmitteln für Bad, Toilette und Alltag.",
        en: "Supply of care beds, positioning aids, pressure ulcer prevention devices, and appropriate aids for bathroom, toilet, and everyday living.",
        ru: "Поставка функциональных кроватей, средств позиционирования, противопролежневых устройств и принадлежностей для ванной, туалета и повседневной жизни.",
      } as T,
    },
    {
      num: "04",
      icon: PackageCheck as Icon,
      title: {
        de: "Wund- & Verbrauchsmaterialversorgung",
        en: "Wound Care & Consumable Supplies",
        ru: "Расходные материалы для ухода за ранами",
      } as T,
      desc: {
        de: "Lieferung von Verbandstoffen, Wundversorgungsprodukten, Inkontinenzprodukten und weiteren zulässigen Pflege- und Verbrauchsmaterialien.",
        en: "Delivery of wound dressings, advanced wound care products, incontinence supplies, and all permissible care and consumable materials.",
        ru: "Поставка перевязочных материалов, продуктов для ухода за ранами, средств при недержании и иных разрешённых расходных материалов.",
      } as T,
    },
    {
      num: "05",
      icon: ClipboardList as Icon,
      title: {
        de: "Beratung & Einweisung",
        en: "Consultation & Patient Education",
        ru: "Консультирование и обучение пациентов",
      } as T,
      desc: {
        de: "Ermittlung des Hilfsmittelbedarfs, Produktauswahl, Anpassung sowie verständliche Einweisung der Kunden, Angehörigen und Betreuungspersonen.",
        en: "Assessment of aid requirements, product selection, fitting, and clear instruction for clients, family members, and care personnel.",
        ru: "Определение потребностей, выбор продукта, подгонка и понятный инструктаж клиентов, родственников и ухаживающего персонала.",
      } as T,
    },
    {
      num: "06",
      icon: Truck as Icon,
      title: {
        de: "Lieferung & Betreuung",
        en: "Delivery & After-Sales Support",
        ru: "Доставка и послепродажное обслуживание",
      } as T,
      desc: {
        de: "Organisation von Hausbesuchen, Lieferung, Aufbau, Abholung und bedarfsgerechter Nachbetreuung der bereitgestellten Hilfsmittel.",
        en: "Organisation of home visits, delivery, installation, collection, and tailored follow-up care for all supplied aids and devices.",
        ru: "Организация домашних визитов, доставка, сборка, забор оборудования и индивидуальное последующее обслуживание.",
      } as T,
    },
    {
      num: "07",
      icon: Wrench as Icon,
      title: {
        de: "Technischer Service",
        en: "Technical Maintenance Service",
        ru: "Техническое обслуживание",
      } as T,
      desc: {
        de: "Wartung, Reparatur, sicherheitstechnische Prüfungen und Aufbereitung zur erneuten Verwendung, soweit die erforderlichen Voraussetzungen vorliegen.",
        en: "Maintenance, repair, safety inspections, and reprocessing for re-use, provided all statutory requirements and professional qualifications are met.",
        ru: "Техническое обслуживание, ремонт, проверки безопасности и подготовка к повторному использованию при наличии всех требований.",
      } as T,
    },
    {
      num: "08",
      icon: FileText as Icon,
      title: {
        de: "Versorgungsorganisation",
        en: "Supply Administration",
        ru: "Организация обеспечения",
      } as T,
      desc: {
        de: "Erstellung von Kostenvoranschlägen, Bearbeitung von Versorgungsanträgen, Abstimmung mit Kostenträgern sowie vertragsgemäße Dokumentation und Abrechnung.",
        en: "Preparation of cost estimates, processing of supply applications, coordination with cost carriers, and contractually compliant documentation and billing.",
        ru: "Составление смет, обработка заявок, согласование с плательщиками, документирование и расчёты в соответствии с договором.",
      } as T,
    },
  ],

  networkTitle: {
    de: "Netzwerk & Kooperationen",
    en: "Network & Cooperation Partners",
    ru: "Сеть и партнёрства",
  } as T,
  networkText: {
    de: "Die Gesellschaft kann mit Arztpraxen, medizinischen Versorgungszentren, Krankenhäusern, Therapie- und Rehabilitationseinrichtungen sowie ambulanten Pflegediensten zusammenarbeiten – insbesondere für die rechtzeitige Hilfsmittelversorgung und die abgestimmte Versorgung nach Entlassung. Ärztliche Verordnungsentscheidungen bleiben unabhängig; die freie Wahl des Leistungserbringers durch die Patienten ist zu wahren.",
    en: "The company may cooperate with medical practices, outpatient clinics, hospitals, therapy and rehabilitation centres, and outpatient nursing services – particularly for timely supply of aids and coordinated post-discharge care. Physicians' prescribing decisions remain independent; patients' free choice of provider is preserved.",
    ru: "Компания может сотрудничать с врачебными практиками, амбулаторными клиниками, больницами, терапевтическими и реабилитационными учреждениями и патронажными службами — в первую очередь для своевременного обеспечения вспомогательными средствами и скоординированного ухода после выписки.",
  } as T,

  pharmacyTitle: {
    de: "Arzneimittelversorgung verbundener Kliniken",
    en: "Pharmaceutical Supply for Affiliated Clinics",
    ru: "Лекарственное обеспечение аффилированных клиник",
  } as T,
  pharmacyText: {
    de: "Die Arzneimittelversorgung der verbundenen Kliniken erfolgt über eine hierzu berechtigte Apotheke auf Grundlage der erforderlichen Verträge. Die NabiOta Medical Supplies GmbH kann im rechtlich zulässigen Umfang organisatorische und logistische Unterstützungsleistungen übernehmen. Eine eigene apothekenrechtliche Betriebs- oder Abgabeberechtigung wird hierdurch nicht begründet.",
    en: "Pharmaceutical supply for affiliated clinics is handled by a licensed pharmacy. NabiOta Medical Supplies GmbH may provide organisational and logistical support within the legally permissible scope. This does not constitute an independent pharmacy operating or dispensing licence.",
    ru: "Лекарственное обеспечение аффилированных клиник осуществляется через уполномоченную аптеку. NabiOta Medical Supplies GmbH может оказывать организационную и логистическую поддержку в объёме, разрешённом законом. Это не является основанием для получения собственной аптечной лицензии.",
  } as T,

  legalEyebrow: {
    de: "Gesetzliche Vorgaben",
    en: "Legal & Regulatory Framework",
    ru: "Законодательные требования",
  } as T,
  legalTitle: {
    de: "Für die Umsetzung sind insbesondere diese Vorschriften relevant",
    en: "Key Legal Requirements for Implementation",
    ru: "Ключевые правовые требования к реализации",
  } as T,
  legalRows: [
    {
      icon: ShieldCheck as Icon,
      area: {
        de: "Hilfsmittel für gesetzlich Versicherte",
        en: "Aids for Statutory Insurees",
        ru: "Вспомогательные средства для застрахованных по GKV",
      } as T,
      req: {
        de: "§§ 126 und 127 SGB V: Eignungsnachweise und entsprechende Versorgungsverträge. Eine Präqualifizierung allein begründet keine umfassende Abrechnungsberechtigung.",
        en: "§§ 126 and 127 SGB V: Evidence of suitability and supply contracts. Pre-qualification alone does not establish a comprehensive billing entitlement.",
        ru: "§§ 126 и 127 SGB V: подтверждение соответствия требованиям и соответствующие договоры снабжения. Предварительная квалификация сама по себе не даёт полного права на расчёты.",
      } as T,
    },
    {
      icon: HardHat as Icon,
      area: {
        de: "Orthopädietechnische Werkstatt",
        en: "Orthopaedic Workshop",
        ru: "Ортопедическая мастерская",
      } as T,
      req: {
        de: "Handwerksordnung: Orthopädietechniker und Orthopädieschuhmacher gehören zu den zulassungspflichtigen Handwerken. Handwerksrolleneintragung und qualifizierte Betriebsleitung sind zu prüfen.",
        en: "Trades Regulation Act: Orthopaedic technicians and shoe-makers are licensed trades. Entry in the Crafts Register and a qualified business manager must be verified.",
        ru: "Положение о ремёслах: ортопедические техники и сапожники относятся к лицензируемым ремёслам. Необходима регистрация в реестре ремёсел и наличие квалифицированного руководителя.",
      } as T,
    },
    {
      icon: Scale as Icon,
      area: {
        de: "Medizinprodukte",
        en: "Medical Devices",
        ru: "Медицинские изделия",
      } as T,
      req: {
        de: "EU-Medizinprodukteverordnung (MDR), MPDG und Medizinprodukte-Betreiberverordnung. Handel, Herstellung, Wartung und Aufbereitung bringen unterschiedliche Pflichten mit sich.",
        en: "EU MDR, MPDG and the Medical Devices Operator Ordinance. Trade, manufacture, maintenance, and reprocessing each carry distinct obligations.",
        ru: "Регламент ЕС MDR, MPDG и Постановление об эксплуатации изделий. Торговля, производство, обслуживание и подготовка к повторному использованию влекут различные обязательства.",
      } as T,
    },
    {
      icon: Lock as Icon,
      area: {
        de: "Patientendaten",
        en: "Patient Data",
        ru: "Данные пациентов",
      } as T,
      req: {
        de: "DSGVO und ergänzende Datenschutzvorschriften: geschützte Verarbeitung von Gesundheitsdaten und zulässige Datenübermittlung zwischen Sanitätshaus, MVZ, Klinik und HomeCare.",
        en: "GDPR and supplementary data protection provisions: protected processing of health data and lawful data transmission between the supply store, MVZ, clinic, and HomeCare.",
        ru: "DSGVO и дополнительные нормы защиты данных: защищённая обработка медицинских данных и допустимая передача между санитарным домом, MVZ, клиникой и HomeCare.",
      } as T,
    },
  ],
};

export function SanitaetshausCompanySection({ locale = "de" }: { locale?: string }) {
  const l: Lang = locale === "ru" ? "ru" : locale === "en" ? "en" : "de";

  return (
    <section
      id="nabiota-sanitaetshaus-gmbh-structure"
      className="relative pt-0 pb-0 bg-[#FAF7F2] border-t border-[#EDE8DE] overflow-hidden"
    >
      <div className="absolute top-0 right-10 w-[500px] h-[500px] rounded-full bg-[#1E3B29]/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] rounded-full bg-[#D5B878]/[0.07] blur-3xl pointer-events-none" />

      {/* ── Hero Banner: Full-width banner with soft right-photo fade (Matching MVZ style) ── */}
      <div className="relative z-10 w-full overflow-hidden pb-4 sm:pb-6">
        {/* Soft Background Photo with smooth horizontal fade / blur effect */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[64%] xl:w-[60%] pointer-events-none overflow-hidden select-none">
          <Image
            src="/images/areas/sanitaetshaus-store.jpg"
            alt="NabiOta Sanitätshaus GmbH"
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
            <div className="max-w-xl lg:max-w-2xl mb-6 sm:mb-8 lg:mb-9">
              {/* Eyebrow with gold line matching unified holding sections */}
              <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
                <span className="w-6 h-[1.5px] bg-[#C5A56A]" />
                <span className="text-[10px] sm:text-[10.5px] font-semibold tracking-[0.22em] text-[#C5A56A] uppercase font-sans">
                  {c.subtitle[l]}
                </span>
              </div>

              {/* Title with styled italic phrase & distinct GmbH */}
              <h2 className="font-serif text-[24px] sm:text-[28px] lg:text-[34px] xl:text-[38px] text-[#142318] font-normal leading-[1.18] mb-1.5">
                NabiOta{" "}
                <span className="font-serif italic text-[#C5A56A]">Sanitätshaus</span>{" "}
                <span className="text-[#C5A56A] font-sans font-semibold text-[0.72em] tracking-wider uppercase ml-1 align-baseline">
                  GmbH
                </span>
              </h2>

              <p className="text-[11px] font-bold tracking-[0.22em] text-[#C5A56A] uppercase mb-3">
                {c.titleAlt}
              </p>

              <p className="text-[12.5px] sm:text-[13px] text-[#556057] leading-relaxed max-w-xl font-sans">
                {c.lead[l]}
              </p>
            </div>
          </div>
        </Container>
      </div>

      <Container size="wide" className="relative z-10 mt-6 sm:mt-8">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">
          {/* 8 Services Grid (Preparation of future departments style) */}
          <div>
            <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
              <span className="w-6 h-[1.5px] bg-[#C5A56A]" />
              <h3 className="font-serif text-[20px] sm:text-[23px] text-[#142318] font-normal">
                {c.servicesTitle[l]}
              </h3>
            </div>

            <div className="relative">
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
                {c.services.map((item, i) => {
                  const ItemIcon = item.icon;
                  return (
                    <div
                      key={item.num}
                      className="group relative rounded-[18px] bg-white border border-[#EAE4D7] p-3.5 sm:p-4 flex items-center justify-between gap-3 sm:gap-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-[#D5B878]/60 transition-all duration-300"
                    >
                      {/* Left: Icon circle */}
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FAF5EB] border border-[#EFE5D5] flex items-center justify-center shrink-0 group-hover:bg-[#F3EAD9] transition-colors">
                        <ItemIcon className="w-5 h-5 text-[#9E7D3B]" />
                      </div>

                      {/* Center: Title + Description */}
                      <div className="flex-1 min-w-0 pr-1">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[10px] font-bold tracking-wider text-[#C5A56A] font-mono">
                            {item.num}
                          </span>
                          <h4 className="font-serif text-[15px] sm:text-[16px] text-[#142318] font-medium leading-snug">
                            {item.title[l]}
                          </h4>
                        </div>
                        <p className="text-[11.5px] sm:text-[12px] text-[#556057] leading-relaxed font-sans">
                          {item.desc[l]}
                        </p>
                      </div>

                      {/* Right: Round button with arrow */}
                      <div className="w-8.5 h-8.5 rounded-full border border-[#D5B878]/50 flex items-center justify-center text-[#9E7D3B] shrink-0 group-hover:bg-[#9E7D3B] group-hover:text-white group-hover:border-[#9E7D3B] transition-all duration-300">
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Network + Pharmacy info cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-7 bg-[#F4F9F6] border border-[#D0E3D6] flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1E3B29]/10 border border-[#1E3B29]/30 flex items-center justify-center text-[#1E3B29] shrink-0 mt-0.5">
                <Network className="w-5 h-5" />
              </div>
              <div className="space-y-1.5 flex-1">
                <h4 className="font-serif text-[16.5px] sm:text-[17.5px] text-[#142318] font-semibold">
                  {c.networkTitle[l]}
                </h4>
                <p className="text-[12px] sm:text-[12.5px] text-[#556358] leading-relaxed font-sans">
                  {c.networkText[l]}
                </p>
              </div>
            </div>

            <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-7 bg-[#FAF5EB] border border-[#E7DDC9] flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#C5A56A]/20 border border-[#C5A56A] flex items-center justify-center text-[#8C6D2B] shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1.5 flex-1">
                <h4 className="font-serif text-[16.5px] sm:text-[17.5px] text-[#142318] font-semibold">
                  {c.pharmacyTitle[l]}
                </h4>
                <p className="text-[12px] sm:text-[12.5px] text-[#556358] leading-relaxed font-sans">
                  {c.pharmacyText[l]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* FULL-WIDTH Legal requirements section (Values Page Design Style) */}
      <div className="relative w-full py-12 sm:py-16 lg:py-20 bg-[#07160D] text-white overflow-hidden border-t border-b border-[#D5B878]/30 shadow-2xl mt-12 sm:mt-16">
        {/* Background: Botanical leaves illuminated on the left matching Our Values */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Image
            src="/images/values/leaves-bg.webp"
            alt="Botanical Background"
            fill
            sizes="100vw"
            className="object-cover object-[left_center]"
          />
          {/* Smooth gradient from transparent over leaves to rich dark forest green on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#07160D]/85 to-[#07160D] hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07160D]/65 via-[#07160D]/90 to-[#07160D] lg:hidden" />
        </div>

        <Container size="wide" className="relative z-10">
          {/* Shift content to the right so left foliage remains unobstructed */}
          <div className="lg:ml-auto lg:w-[78%] xl:w-[75%]">
            {/* Header */}
            <div className="max-w-xl mb-6 sm:mb-7">
              <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.24em] text-[#D5B878] uppercase mb-1.5 block font-sans">
                {c.legalEyebrow[l]}
              </span>
              <h3 className="font-serif text-[26px] sm:text-[30px] lg:text-[36px] font-normal leading-[1.2] text-white mb-2 sm:mb-2.5">
                {c.legalTitle[l]}
              </h3>
            </div>

            {/* 4 Legal Cards in row on desktop matching Our Values 4 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
              {c.legalRows.map((row, idx) => {
                const RowIcon = row.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#0A1F13]/85 hover:bg-[#0D2618]/95 border border-[#D5B878]/30 hover:border-[#D5B878]/70 backdrop-blur-md rounded-xl sm:rounded-2xl p-3.5 sm:p-4 transition-all duration-300 hover:-translate-y-1 shadow-[0_6px_20px_rgba(0,0,0,0.3)] group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#D5B878] bg-[#122B1B]/80 flex items-center justify-center text-[#ECCF96] mb-2.5 shadow-[0_0_8px_rgba(213,184,120,0.2)] group-hover:scale-105 transition-transform">
                        <RowIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.6]" />
                      </div>
                      <h4 className="font-serif font-bold text-[14.5px] sm:text-[15.5px] text-white mb-1 group-hover:text-[#ECCF96] transition-colors leading-snug">
                        {row.area[l]}
                      </h4>
                      <p className="text-[11px] sm:text-[11.5px] text-[#A6B8AA] leading-relaxed font-sans">
                        {row.req[l]}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
