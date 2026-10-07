import React from "react";
import Image from "next/image";
import {
  Users,
  Building2,
  Award,
  ShieldPlus,
  Stethoscope,
  Network,
  Scale,
} from "lucide-react";
import { Container } from "@/components/layout/Container";

/**
 * PDF Section II – "Aufgaben und Unternehmensgegenstand der Holding"
 * (NabiOta Health Group Germany GmbH). Wording follows the PDF.
 */

type Lang = "de" | "en" | "ru";

interface Block {
  icon: React.ComponentType<{ className?: string }>;
  title: Record<Lang, string>;
  text: Record<Lang, string>;
  chips?: Record<Lang, string[]>;
}

const content = {
  eyebrow: { de: "UNTERNEHMENSGEGENSTAND", en: "CORPORATE PURPOSE", ru: "ПРЕДМЕТ ДЕЯТЕЛЬНОСТИ" },
  title: {
    de: "Aufgaben und Unternehmensgegenstand der Holding",
    en: "Tasks and Corporate Purpose of the Holding",
    ru: "Задачи и предмет деятельности холдинга",
  },
  lead: {
    de: "Gegenstand des Unternehmens ist der Erwerb, das Halten und die Verwaltung eigener Beteiligungen sowie die wirtschaftliche, organisatorische und strategische Führung von Unternehmen im Gesundheitswesen.",
    en: "The purpose of the company is the acquisition, holding and management of its own shareholdings as well as the economic, organizational and strategic management of companies in the healthcare sector.",
    ru: "Предметом деятельности общества является приобретение, владение и управление собственными долями участия, а также экономическое, организационное и стратегическое руководство предприятиями в сфере здравоохранения.",
  },
  blocks: [
    {
      icon: Users,
      title: { de: "Beteiligungen", en: "Shareholdings", ru: "Участия" },
      text: {
        de: "Hierzu gehören insbesondere Beteiligungen an Kliniken, medizinischen Versorgungszentren (MVZ), Diagnostikzentren, Therapie- und Rehabilitationseinrichtungen, Pflegeunternehmen sowie weiteren Gesundheitsdienstleistern. Beteiligungen werden ausschließlich unter Beachtung der jeweils geltenden gesetzlichen Anforderungen an Träger, Gesellschafter und Zulassungen eingegangen und gehalten.",
        en: "This includes in particular shareholdings in clinics, medical care centres (MVZ), diagnostic centres, therapy and rehabilitation facilities, nursing companies and other healthcare providers. Shareholdings are acquired and held exclusively in compliance with the applicable legal requirements for sponsors, shareholders and approvals.",
        ru: "Сюда относятся, в частности, участия в клиниках, медицинских центрах (MVZ), диагностических центрах, терапевтических и реабилитационных учреждениях, предприятиях по уходу и других поставщиках медицинских услуг. Участия приобретаются и удерживаются исключительно с соблюдением действующих законодательных требований к учредителям, участникам и допускам.",
      },
    },
    {
      icon: Building2,
      title: {
        de: "Zentrale Management- und Verwaltungsleistungen",
        en: "Central Management and Administrative Services",
        ru: "Централизованные управленческие и административные услуги",
      },
      text: {
        de: "Die Gesellschaft übernimmt auf vertraglicher Grundlage zentrale Management- und Verwaltungsleistungen für Beteiligungsunternehmen und kooperierende Einrichtungen. Die steuerliche Gestaltung der Unternehmensgruppe erfolgt in Zusammenarbeit mit entsprechend befugten Beratern.",
        en: "On a contractual basis, the company provides central management and administrative services for affiliated companies and cooperating facilities. The tax structuring of the group is carried out in cooperation with duly authorized advisors.",
        ru: "На договорной основе общество оказывает централизованные управленческие и административные услуги для дочерних компаний и сотрудничающих учреждений. Налоговое структурирование группы осуществляется совместно с уполномоченными консультантами.",
      },
    },
    {
      icon: Award,
      title: { de: "Marken, Lizenzen & Beratung", en: "Brands, Licences & Advisory", ru: "Бренды, лицензии и консалтинг" },
      text: {
        de: "Zum Unternehmensgegenstand gehören ferner die Entwicklung, der Erwerb, die Verwaltung und der Schutz von Marken, Lizenzen und gewerblichen Schutzrechten sowie deren Überlassung zur Nutzung. Die Gesellschaft kann Unternehmen und Projekte im Gesundheitswesen wirtschaftlich und organisatorisch beraten und begleiten.",
        en: "The corporate purpose further includes the development, acquisition, management and protection of trademarks, licences and industrial property rights as well as granting their use. The company may advise and support healthcare companies and projects economically and organizationally.",
        ru: "К предмету деятельности также относятся разработка, приобретение, управление и защита товарных знаков, лицензий и прав промышленной собственности, а также предоставление их в пользование. Общество может консультировать и сопровождать предприятия и проекты в здравоохранении в экономических и организационных вопросах.",
      },
    },
    {
      icon: ShieldPlus,
      title: {
        de: "Qualität, Hygiene, Patientensicherheit & Datenschutz",
        en: "Quality, Hygiene, Patient Safety & Data Protection",
        ru: "Качество, гигиена, безопасность пациентов и защита данных",
      },
      text: {
        de: "Die Holding unterstützt und koordiniert die organisatorischen Voraussetzungen für Qualitätsmanagement, Hygiene, Patientensicherheit und Datenschutz innerhalb des Unternehmensverbunds. Sie fördert gemeinsame Standards und unterstützt deren Umsetzung, ohne die gesetzliche und fachliche Verantwortung der jeweiligen Betreiber und zuständigen Personen zu ersetzen.",
        en: "The holding supports and coordinates the organizational prerequisites for quality management, hygiene, patient safety and data protection within the group. It promotes common standards and supports their implementation without replacing the legal and professional responsibility of the respective operators and responsible persons.",
        ru: "Холдинг поддерживает и координирует организационные условия для менеджмента качества, гигиены, безопасности пациентов и защиты данных внутри группы. Он продвигает общие стандарты и поддерживает их внедрение, не заменяя законную и профессиональную ответственность соответствующих операторов и ответственных лиц.",
      },
    },
    {
      icon: Stethoscope,
      title: {
        de: "Verantwortung der medizinischen Einrichtungen",
        en: "Responsibility of the Medical Facilities",
        ru: "Ответственность медицинских учреждений",
      },
      text: {
        de: "Die medizinischen Einrichtungen bleiben für Behandlungsentscheidungen, medizinische Organisation, qualifiziertes Personal, vorgeschriebene Personalverfügbarkeit, fachliche Qualität, Patientensicherheit, Hygiene sowie die ordnungsgemäße Leistungsdokumentation und Abrechnung verantwortlich. Die medizinische Weisungsfreiheit der ärztlichen Leitung eines MVZ bleibt uneingeschränkt gewahrt. Die Holding erhält durch ihre Management- und Verwaltungsaufgaben keine Befugnis zur Einflussnahme auf individuelle medizinische Entscheidungen.",
        en: "The medical facilities remain responsible for treatment decisions, medical organization, qualified staff, mandatory staff availability, professional quality, patient safety, hygiene and proper service documentation and billing. The medical independence of an MVZ's medical director remains fully preserved. Its management and administrative tasks give the holding no authority to influence individual medical decisions.",
        ru: "Медицинские учреждения остаются ответственными за решения о лечении, медицинскую организацию, квалифицированный персонал, обязательное наличие персонала, профессиональное качество, безопасность пациентов, гигиену, а также надлежащую документацию услуг и расчёты. Медицинская независимость врачебного руководства MVZ полностью сохраняется. Управленческие и административные задачи не дают холдингу полномочий влиять на индивидуальные медицинские решения.",
      },
    },
    {
      icon: Network,
      title: { de: "Verbindung der Einrichtungen", en: "Connecting the Facilities", ru: "Связующее звено учреждений" },
      text: {
        de: "Die Gesellschaft bildet die wirtschaftliche und organisatorische Verbindung der rechtlich selbstständigen Einrichtungen. Ziel ist es, gemeinsame Ressourcen effizient einzusetzen, Verwaltungsabläufe zu vereinheitlichen und die Weiterentwicklung der Unternehmensgruppe zu unterstützen.",
        en: "The company forms the economic and organizational link between the legally independent facilities. The aim is to use shared resources efficiently, standardize administrative processes and support the further development of the group.",
        ru: "Общество является экономическим и организационным связующим звеном юридически самостоятельных учреждений. Цель — эффективно использовать общие ресурсы, унифицировать административные процессы и поддерживать дальнейшее развитие группы.",
      },
    },
  ] as Block[],
  legalTitle: { de: "Rechtlicher Rahmen", en: "Legal Framework", ru: "Правовые рамки" },
  legal: {
    de: "Die Gesellschaft ist berechtigt, alle rechtlich zulässigen Geschäfte vorzunehmen, die dem Unternehmensgegenstand unmittelbar oder mittelbar dienen, Unternehmen zu gründen, zu erwerben oder sich an ihnen zu beteiligen sowie Zweigniederlassungen im In- und Ausland zu errichten. Erlaubnis- oder zulassungspflichtige Tätigkeiten werden erst nach Vorliegen der erforderlichen Voraussetzungen aufgenommen. Die Gründung oder Beteiligung an vertragsärztlichen MVZ setzt insbesondere die Erfüllung der Anforderungen des § 95 SGB V voraus.",
    en: "The company is entitled to carry out all legally permissible transactions that directly or indirectly serve the corporate purpose, to establish or acquire companies or participate in them, and to set up branches in Germany and abroad. Activities requiring a permit or approval are only commenced once the necessary prerequisites are met. Founding or participating in contract-physician MVZ requires in particular fulfilment of the requirements of § 95 SGB V.",
    ru: "Общество вправе совершать все законно допустимые сделки, прямо или косвенно служащие предмету деятельности, учреждать или приобретать предприятия либо участвовать в них, а также открывать филиалы в Германии и за рубежом. Деятельность, требующая разрешения или допуска, начинается только при наличии необходимых условий. Учреждение MVZ в системе обязательного страхования или участие в нём предполагает, в частности, выполнение требований § 95 SGB V.",
  },
};

export function HoldingPurposeSection({ locale = "de" }: { locale?: string }) {
  const l: Lang = locale === "ru" ? "ru" : locale === "en" ? "en" : "de";

  return (
    <section
      id="unternehmensgegenstand"
      className="relative pt-0 pb-16 sm:pb-20 lg:pb-24 bg-[#FAF8F5] border-t border-[#EDE8DE]/60 overflow-hidden"
    >
      {/* Subtle background glow accents */}
      <div className="absolute -top-40 -left-32 w-[500px] h-[500px] rounded-full bg-[#D5B878]/[0.06] blur-3xl pointer-events-none" />
      <div className="absolute top-[40%] -right-24 w-[400px] h-[400px] rounded-full bg-[#E8DFC8]/25 blur-3xl pointer-events-none" />

      {/* ── Hero Banner: Full-width banner with soft right-photo fade (MVZ Style) ── */}
      <div className="relative z-10 w-full overflow-hidden pb-8 sm:pb-10 lg:pb-12">
        {/* Soft Background Photo with smooth horizontal fade */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[62%] xl:w-[58%] pointer-events-none overflow-hidden select-none">
          <Image
            src="/images/areas/atrium-lounge.webp"
            alt="Tasks and Corporate Purpose of the Holding"
            fill
            className="object-cover object-center lg:object-right"
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
          {/* Horizontal gradient fade into page background #FAF8F5 */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] from-0% via-[#FAF8F5]/80 via-20% via-[#FAF8F5]/25 via-42% to-transparent to-75%" />
          {/* Vertical gradient fade for mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/50 via-15% to-transparent lg:hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] from-0% via-[#FAF8F5]/20 via-10% to-transparent hidden lg:block" />
        </div>

        {/* Botanical foliage watermark on far left (matching MVZ reference) */}
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
        <Container size="wide" className="relative z-10 pt-8 sm:pt-12 lg:pt-14">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-xl lg:max-w-2xl">
              {/* Eyebrow with gold line */}
              <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
                <span className="w-6 h-[1.5px] bg-[#C5A56A]" />
                <span className="text-[10.5px] sm:text-[11px] font-semibold tracking-[0.24em] text-[#C5A56A] uppercase font-sans">
                  {content.eyebrow[l]}
                </span>
              </div>

              {/* Title with styled italic word in serif */}
              <h2 className="font-serif text-[26px] sm:text-[34px] lg:text-[40px] text-[#142318] font-normal leading-[1.18] mb-3 sm:mb-3.5">
                {l === "ru" ? (
                  <>
                    Задачи и предмет деятельности{" "}
                    <span className="font-serif italic text-[#C5A56A]">холдинга</span>
                  </>
                ) : l === "en" ? (
                  <>
                    Tasks and Corporate Purpose of the{" "}
                    <span className="font-serif italic text-[#C5A56A]">Holding</span>
                  </>
                ) : (
                  <>
                    Aufgaben und Unternehmensgegenstand der{" "}
                    <span className="font-serif italic text-[#C5A56A]">Holding</span>
                  </>
                )}
              </h2>

              {/* Lead text */}
              <p className="text-[12.5px] sm:text-[13.5px] text-[#556057] leading-relaxed max-w-xl">
                {content.lead[l]}
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* ── Cards Container (Photo 2 design: 6 cards in 3 cols + 1 wide banner below) ── */}
      <Container size="wide" className="relative z-10 mt-6 sm:mt-8">
        <div className="max-w-6xl mx-auto space-y-5 sm:space-y-6">
          {/* 6 Cards in 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5 sm:gap-5 items-stretch">
            {content.blocks.map((b, idx) => {
              const Icon = b.icon;
              const numStr = String(idx + 1).padStart(2, "0");
              const hasLeaf = idx === 0 || idx === 2 || idx === 3 || idx === 5;

              return (
                <article
                  key={idx}
                  className="group relative rounded-[20px] sm:rounded-[22px] p-4.5 sm:p-5 bg-white border border-[#EAE4D7] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-[#C5A56A]/80 hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Subtle botanical branch in bottom-left corner */}
                  {hasLeaf && (
                    <div className="absolute -bottom-4 -left-4 w-24 h-24 pointer-events-none opacity-25 group-hover:opacity-35 transition-opacity select-none">
                      <Image
                        src="/images/areas/botanical-branch-clean.webp"
                        alt=""
                        fill
                        className="object-contain object-bottom-left"
                        unoptimized
                      />
                    </div>
                  )}

                  {/* Top Row: Icon + Number & Title */}
                  <div className="relative z-10">
                    <div className="flex items-start gap-3 mb-2.5">
                      <div className="w-10 h-10 sm:w-10.5 sm:h-10.5 rounded-full bg-[#FAF5EB] border border-[#E8DFC8] flex items-center justify-center text-[#2A4736] shrink-0 group-hover:bg-[#F0E6D5] transition-colors shadow-2xs">
                        <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[1.75]" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10.5px] sm:text-[11px] font-medium text-[#C5A56A] tracking-wider font-sans block mb-0.5">
                          {numStr} —
                        </span>
                        <h3 className="font-serif text-[16px] sm:text-[17.5px] font-medium text-[#142318] leading-snug">
                          {b.title[l]}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[11.5px] sm:text-[12px] text-[#556057] leading-[1.65] font-sans">
                      {b.text[l]}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Card 7 – Legal Framework Wide Banner */}
          <div className="group relative rounded-[20px] sm:rounded-[22px] p-4 sm:p-5 lg:py-4.5 lg:px-6 bg-[#FAF8F4] border border-[#EAE4D7] shadow-xs flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-5 overflow-hidden">
            {/* Watercolor botanical branch on far right */}
            <div className="absolute right-0 top-0 bottom-0 w-36 sm:w-44 pointer-events-none opacity-35 select-none overflow-hidden hidden sm:block">
              <Image
                src="/images/areas/botanical-branch-clean.webp"
                alt=""
                fill
                className="object-contain object-right"
                unoptimized
              />
            </div>

            {/* Left: Icon + Title */}
            <div className="flex items-center gap-3 shrink-0 lg:w-[240px] xl:w-[260px]">
              <div className="w-10.5 h-10.5 sm:w-11 sm:h-11 rounded-full bg-[#163826] text-[#EADBBD] border border-[#D5B878]/50 flex items-center justify-center shrink-0 shadow-sm">
                <Scale className="w-5 h-5 stroke-[1.8]" />
              </div>
              <h3 className="font-serif text-[17.5px] sm:text-[19px] font-medium text-[#142318] leading-tight">
                {content.legalTitle[l]}
              </h3>
            </div>

            {/* Middle: Text */}
            <p className="text-[11.5px] sm:text-[12px] text-[#556057] leading-relaxed flex-1 relative z-10 font-sans pr-2">
              {content.legal[l]}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
