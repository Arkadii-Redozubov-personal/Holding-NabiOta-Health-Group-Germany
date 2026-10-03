import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { holdingServices } from "@/data/services";
import { SupportedLocale } from "@/lib/i18n";
import {
  Building2,
  ActivitySquare,
  UserCheck,
  Home,
  ShieldPlus,
  Users2,
  Building,
  Globe2,
  CheckCircle2,
  ArrowRight,
  Stethoscope,
  Activity,
} from "lucide-react";

interface ServicesPageComponentProps {
  locale?: SupportedLocale;
}

export function ServicesPageComponent({ locale = "de" }: ServicesPageComponentProps) {
  const isRu = locale === "ru";
  const isEn = locale === "en";

  const t = {
    breadcrumbHome: isRu ? "Главная" : isEn ? "Home" : "Startseite",
    breadcrumbServices: isRu ? "Наши услуги" : isEn ? "Our Services" : "Unsere Leistungen",

    heroEyebrow: isRu ? "НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ" : isEn ? "AREAS OF ACTIVITY" : "UNSERE LEISTUNGEN",
    heroHeading: isRu
      ? "Комплексные медицинские решения под единым брендом."
      : isEn
      ? "Integrated Healthcare Solutions Under One Brand."
      : "Ganzheitliche Gesundheitslösungen unter einem Dach.",
    heroLead: isRu
      ? "NabiOta® Health Group Germany GmbH содействует развитию, координации и стратегическому позиционированию различных направлений медицинских и деловых услуг в здравоохранении."
      : isEn
      ? "NabiOta® Health Group Germany GmbH supports the development, coordination, and strategic alignment of diverse service and business areas in the healthcare sector."
      : "Die NabiOta® Health Group Germany GmbH unterstützt die Entwicklung, Koordination und strategische Ausrichtung verschiedener Leistungs- und Geschäftsbereiche im Gesundheitswesen.",

    tasksTitle: isRu ? "Ключевые стратегические задачи" : isEn ? "Core Strategic Responsibilities" : "Zentrale Aufgaben der Holding",
    tasksText: isRu
      ? "К нашим ключевым задачам относятся стратегическое корпоративное развитие, инвестиционный менеджмент и управление проектами, внедрение единых стандартов качества, а также сопровождение процессов цифровизации и инноваций. Кроме того, мы поддерживаем современные концепции комплексного ухода и объединяем разрозненные сегменты системы здравоохранения."
      : isEn
      ? "Our core responsibilities encompass strategic corporate development, investment and project management, fostering unified quality standards, and steering digitalization and innovation processes. Moreover, we advance modern healthcare concepts and the network integration of diverse healthcare disciplines."
      : "Zu unseren zentralen Aufgaben gehören die strategische Unternehmensentwicklung, das Beteiligungs- und Projektmanagement, die Förderung einheitlicher Qualitätsstandards sowie die Begleitung von Digitalisierungs- und Innovationsprozessen. Darüber hinaus unterstützen wir moderne Versorgungskonzepte und die Vernetzung unterschiedlicher Bereiche des Gesundheitswesens.",

    areasTitle: isRu ? "Сферы деятельности группы" : isEn ? "Group Business & Healthcare Areas" : "Geschäftsbereiche der Gruppe",
    areasSubtitle: isRu
      ? "Группа компаний активно участвует в развитии следующих ключевых направлений:"
      : isEn
      ? "The corporate group is actively engaged in developing and advancing several core healthcare areas:"
      : "Die Unternehmensgruppe engagiert sich in der Entwicklung und Weiterentwicklung verschiedener gesundheitsbezogener Geschäftsbereiche. Hierzu gehören insbesondere:",

    structureTitle: isRu ? "Модель реализации и устойчивое качество" : isEn ? "Implementation Model & Sustainable Quality" : "Umsetzung & Qualitätsentwicklung",
    structureP1: isRu
      ? "Отдельные направления деятельности могут реализовываться и развиваться через собственные дочерние общества, долевое участие, партнерские соглашения или целевые проекты внутри группы компаний."
      : isEn
      ? "Individual business segments may be executed and advanced through dedicated subsidiaries, equity participations, strategic collaborations, or focused projects within the corporate group."
      : "Die einzelnen Geschäftsbereiche können durch eigene Gesellschaften, Beteiligungen, Kooperationen oder Projekte innerhalb der Unternehmensgruppe umgesetzt und weiterentwickelt werden.",
    structureP2: isRu
      ? "Благодаря объединению экспертных знаний, практического опыта и организационной компетентности мы создаем фундамент для эффективных структур, долгосрочного сотрудничества и непрерывного роста качества."
      : isEn
      ? "By bundling specialized knowledge, clinical experience, and organizational competence, we build the foundation for efficient structures, sustainable partnerships, and continuous quality advancement."
      : "Durch die Bündelung von Fachwissen, Erfahrung und organisatorischer Kompetenz schaffen wir die Grundlage für effiziente Strukturen, nachhaltige Zusammenarbeit und eine kontinuierliche Qualitätsentwicklung.",
    structureP3: isRu
      ? "Наша цель — создавать долгосрочную ценность и вносить вклад в развитие современных, ориентированных на пациента и готовых к будущему медицинских решений."
      : isEn
      ? "Our ambition is to generate lasting value and contribute to the advancement of modern, patient-centered, and resilient healthcare solutions."
      : "Unser Anspruch ist es, langfristige Werte zu schaffen und einen Beitrag zur Weiterentwicklung moderner, patientenorientierter und zukunftsfähiger Gesundheitslösungen zu leisten.",

    catalogTitle: isRu ? "Детализированные направления" : isEn ? "Detailed Healthcare Services" : "Detaillierte Leistungsbereiche",
  };

  const focusAreas = [
    { title: "Medizinische Versorgungszentren (MVZ)", icon: Building2, href: `/${locale}/services/medizinische-versorgungszentren` },
    { title: "Diagnostikzentren", icon: ActivitySquare, href: `/${locale}/services/diagnostikzentren` },
    { title: "Therapie- und Rehabilitationseinrichtungen", icon: UserCheck, href: `/${locale}/services/therapie-rehabilitation` },
    { title: "HomeCare- und Pflegeangebote", icon: Home, href: `/${locale}/services/homecare-pflege` },
    { title: "Wundversorgung", icon: ShieldPlus, href: `/${locale}/services/wundversorgung` },
    { title: "Medizinische Personalvermittlung", icon: Users2, href: `/${locale}/services/medizinische-personalvermittlung` },
    { title: "Gesundheitsimmobilien", icon: Building, href: `/${locale}/services/gesundheitsimmobilien` },
    { title: "Internationale Gesundheitsprojekte & Kooperationen", icon: Globe2, href: `/${locale}/services/internationale-projekte` },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FCFAF6] text-[#142318] selection:bg-[#EBDDC0] selection:text-[#142318]">
      <Header currentLocale={locale} />

      <main className="flex-1">
        {/* ══════════════════════════════════════════════════════════
            HERO HEADER
        ══════════════════════════════════════════════════════════ */}
        <PageHero
          breadcrumb={
            <Breadcrumb
              items={[
                { label: locale === "ru" ? "Главная" : locale === "en" ? "Home" : "Startseite", href: `/${locale}` },
                { label: locale === "ru" ? "Услуги" : locale === "en" ? "Services" : "Leistungen" },
              ]}
            />
          }
          title={t.heroHeading}
          description={t.heroLead}
          badges={[
            {
              icon: Stethoscope,
              title: locale === "ru" ? "Комплексная" : locale === "en" ? "Holistic" : "Ganzheitliche",
              sub: locale === "ru" ? "медицина" : locale === "en" ? "care" : "Versorgung",
            },
            {
              icon: Activity,
              title: locale === "ru" ? "Точная" : locale === "en" ? "Precise" : "Präzise",
              sub: locale === "ru" ? "диагностика" : locale === "en" ? "diagnostics" : "Diagnostik",
            },
            {
              icon: Building2,
              title: locale === "ru" ? "Единая" : locale === "en" ? "Connected" : "Vernetzte",
              sub: locale === "ru" ? "сеть экспертов" : locale === "en" ? "network" : "Kompetenz",
            },
          ]}
          imageSrc="/images/heroes/hero-services.webp"
          imageAlt="NabiOta Health Group Germany Leistungen"
        />

        {/* ══════════════════════════════════════════════════════════
            SECTION 7 SPECIFICATION: ZENTRALE AUFGABEN & BEREICHE
        ══════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#ECE7DC]">
          <Container size="wide">
            {/* Top Split: Aufgaben & Description */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
              <div className="lg:col-span-5">
                <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase block mb-2">
                  STRATEGIE & QUALITÄT
                </span>
                <h2 className="font-serif text-[30px] sm:text-[36px] font-normal leading-[1.18] text-[#142318] mb-4">
                  {t.tasksTitle}
                </h2>
                <div className="w-16 h-0.5 bg-[#C5A56A] mb-5" />
                <p className="text-[13.5px] sm:text-[14px] text-[#555E56] leading-[1.75] font-sans">
                  {t.tasksText}
                </p>
              </div>

              <div className="lg:col-span-7 bg-[#FAF8F5] p-7 sm:p-9 rounded-3xl border border-[#ECE7DC]">
                <h3 className="font-serif font-bold text-[18px] sm:text-[19px] text-[#142318] mb-2">
                  {t.areasTitle}
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-[#606962] leading-relaxed mb-6 font-sans">
                  {t.areasSubtitle}
                </p>

                {/* 8 Areas 2-column list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {focusAreas.map((area, idx) => {
                    const IconComp = area.icon;
                    return (
                      <Link
                        key={idx}
                        href={area.href}
                        className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#E8E2D4] hover:border-[#D5B878] hover:shadow-sm transition-all group"
                      >
                        <div className="w-9 h-9 rounded-full border border-[#D5B878] bg-[#FCFAF6] flex items-center justify-center text-[#B89650] flex-shrink-0 group-hover:scale-105 transition-transform">
                          <IconComp className="w-4.5 h-4.5 stroke-[1.6]" />
                        </div>
                        <span className="text-[12.5px] sm:text-[13px] font-sans font-medium text-[#142318] group-hover:text-[#BFA267] transition-colors leading-snug">
                          {area.title}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom 3 Principles / Implementation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#EDE7D9]">
              <div className="p-6 rounded-2xl bg-[#FCFAF6] border border-[#EDE7D9]">
                <h4 className="font-serif font-bold text-[16px] text-[#142318] mb-2">
                  Gesellschaftsrechtliche Strukturen
                </h4>
                <p className="text-[12.5px] sm:text-[13px] text-[#606962] leading-relaxed font-sans">
                  {t.structureP1}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FCFAF6] border border-[#EDE7D9]">
                <h4 className="font-serif font-bold text-[16px] text-[#142318] mb-2">
                  Bündelung von Kompetenzen
                </h4>
                <p className="text-[12.5px] sm:text-[13px] text-[#606962] leading-relaxed font-sans">
                  {t.structureP2}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FCFAF6] border border-[#EDE7D9]">
                <h4 className="font-serif font-bold text-[16px] text-[#142318] mb-2">
                  Zukunftsfähige Werte
                </h4>
                <p className="text-[12.5px] sm:text-[13px] text-[#606962] leading-relaxed font-sans">
                  {t.structureP3}
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════
            DETAILED SERVICES CATALOG
        ══════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] border-b border-[#ECE7DC]">
          <Container size="wide">
            <div className="max-w-2xl mb-12">
              <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase block mb-2">
                MEDIZINISCHE LEISTUNGEN
              </span>
              <h2 className="font-serif text-[32px] sm:text-[38px] font-normal leading-[1.15] text-[#142318]">
                {t.catalogTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {holdingServices.map((service) => (
                <ServiceCard key={service.id} service={service} currentLocale={locale} />
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer currentLocale={locale} />
    </div>
  );
}
