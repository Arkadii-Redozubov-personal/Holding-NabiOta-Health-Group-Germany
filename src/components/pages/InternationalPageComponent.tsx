"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  Users2,
  Leaf,
  Network,
  GraduationCap,
  Award,
  HeartHandshake,
  Heart,
  FolderKanban,
  Star,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SupportedLocale } from "@/lib/i18n";

interface Props {
  locale?: SupportedLocale;
}

export function InternationalPageComponent({ locale = "de" }: Props) {
  const isRu = locale === "ru";
  const isEn = locale === "en";

  // Standard Site PageHero Data
  const heroData = {
    title: isRu
      ? "Международное сотрудничество"
      : isEn
      ? "International Cooperation"
      : "Internationale Kooperationen",
    subtitle: isRu
      ? "Глобальные партнерства ради устойчивого здравоохранения"
      : isEn
      ? "Global Partnerships for Sustainable Healthcare Worldwide"
      : "Globale Partnerschaften für eine nachhaltige Gesundheitsversorgung",
    eyebrow: isRu
      ? "ГЛОБАЛЬНОЕ ЗДРАВООХРАНЕНИЕ"
      : isEn
      ? "GLOBAL HEALTHCARE & ALLIANCES"
      : "GLOBALE GESUNDHEIT & ALLIANZEN",
    desc: isRu
      ? "NabiOta® International развивает трансграничные альянсы с ведущими клиниками, международными организациями и правительствами. Мы объединяем опыт, ресурсы и технологии для устойчивого развития медицины."
      : isEn
      ? "NabiOta® International connects hospitals, academic centers, and global health bodies to exchange knowledge, empower local workforces, and build resilient healthcare systems worldwide."
      : "Die NabiOta® Health Group verbindet medizinisches Fachwissen, akademische Forschung und multilaterale Partnerschaften, um Gesundheitssysteme weltweit nachhaltig zu stärken und zukunftsfähige Versorgungsstrukturen zu etablieren.",
  };

  const heroBadges = [
    {
      icon: <Globe2 className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "25+ Стран" : isEn ? "25+ Countries" : "25+ Länder",
      sub: isRu ? "Глобальная сеть" : isEn ? "Global Network" : "Weltweites Netzwerk",
    },
    {
      icon: <Award className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "WHO & NGO" : isEn ? "WHO & NGOs" : "WHO & NGO Partner",
      sub: isRu ? "Официальные альянсы" : isEn ? "Official Alliances" : "Akkreditierte Allianzen",
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "Устойчивый Impact" : isEn ? "Sustainable Impact" : "Nachhaltiger Impact",
      sub: isRu ? "300.000+ пациентов" : isEn ? "300,000+ Reached" : "300.000+ Erreicht",
    },
  ];

  // Content texts matching mockup 1:1
  const t = {
    // Section 2: Vision
    s2: {
      eyebrow: isRu ? "НАШЕ ВИДЕНИЕ" : isEn ? "OUR VISION" : "UNSERE VISION",
      title: isRu
        ? "Здоровье не знает границ."
        : isEn
        ? "Health Knows No Borders."
        : "Gesundheit kennt keine Grenzen.",
      desc: isRu
        ? "Мы верим в силу сотрудничества. Благодаря международным партнерствам мы расширяем доступ к высококачественной медицинской помощи, поддерживаем специалистов на местах и способствуем долгосрочному укреплению систем здравоохранения."
        : isEn
        ? "We believe in the power of cooperation. Through international alliances, we promote access to high-quality healthcare, empower local professionals, and contribute to sustainably strengthening health systems."
        : "Wir glauben an die Kraft der Zusammenarbeit. Durch internationale Kooperationen fördern wir den Zugang zu qualitativ hochwertiger Gesundheitsversorgung, unterstützen Fachkräfte vor Ort und tragen dazu bei, die Gesundheitssysteme langfristig zu stärken.",
      btn: isRu ? "Подробнее о нашем видении" : isEn ? "Learn More About Our Vision" : "Mehr über unsere Vision",
      stampText1: isRu ? "Вместе достигать" : isEn ? "Together Achieving" : "Gemeinsam mehr",
      stampText2: isRu ? "большего. ♡" : isEn ? "More. ♡" : "erreichen. ♡",
    },

    // Section 3: Partners
    s3: {
      title: isRu ? "Наши партнеры по сотрудничеству" : isEn ? "Our Cooperation Partners" : "Unsere Kooperationspartner",
      desc: isRu
        ? "Мы сотрудничаем с признанными организациями, университетами, государственными институтами и НКО для совместной разработки устойчивых решений."
        : isEn
        ? "We collaborate with recognized organizations, universities, state institutions, and NGOs to develop sustainable healthcare solutions together."
        : "Wir arbeiten mit renommierten Organisationen, Universitäten, staatlichen Institutionen und Nichtregierungsorganisationen zusammen, um gemeinsam nachhaltige Lösungen zu entwickeln.",
      btn: isRu ? "Все партнеры" : isEn ? "View All Partners" : "Alle Partner anzeigen",
      partners: [
        {
          id: "who",
          name: "World Health Organization",
          short: "WHO",
          sub: "Weltgesundheitsorganisation",
          theme: "who",
        },
        {
          id: "giz",
          name: "Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)",
          short: "giz",
          sub: "Zusammenarbeit GmbH",
          theme: "giz",
        },
        {
          id: "worldbank",
          name: "World Bank Group",
          short: "World Bank",
          sub: "International Development",
          theme: "worldbank",
        },
        {
          id: "unicef",
          name: "UNICEF",
          short: "unicef",
          sub: isRu ? "для каждого ребенка" : isEn ? "for every child" : "für jedes Kind",
          theme: "unicef",
        },
        {
          id: "universities",
          name: isRu ? "Университеты и НИИ" : isEn ? "Universities & Research Institutes" : "Universitäten & Forschungsinstitute",
          short: "Akademie",
          sub: isRu ? "Академическая сеть" : isEn ? "Academic Excellence" : "Wissenschaft & Forschung",
          theme: "academic",
        },
        {
          id: "ngos",
          name: isRu ? "НКО и благотворительные фонды" : isEn ? "NGOs & Foundations" : "NGOs & Stiftungen",
          short: "NGOs",
          sub: isRu ? "Гуманитарная помощь" : isEn ? "Humanitarian Aid" : "Gemeinnützige Allianzen",
          theme: "ngo",
        },
      ],
    },

    // Section 4: Projects
    s4: {
      eyebrow: isRu ? "КОНСАЛТИНГ И СОТРУДНИЧЕСТВО" : isEn ? "CONSULTING & COOPERATION" : "BERATUNG & KOOPERATION",
      title: isRu ? "Наши международные проекты" : isEn ? "Our International Projects" : "Unsere internationalen Projekte",
      desc: isRu
        ? "От консультаций до практической реализации — мы сопровождаем проекты в различных странах и регионах с целостным подходом."
        : isEn
        ? "From advisory to hands-on deployment — we accompany projects across diverse countries and regions with a holistic approach."
        : "Von der Beratung bis zur praktischen Umsetzung – wir begleiten Projekte in verschiedenen Ländern und Regionen mit einem ganzheitlichen Ansatz.",
      linkAll: isRu ? "Все проекты" : isEn ? "All Projects" : "Alle Projekte anzeigen",
      projects: [
        {
          tag: isRu ? "АФРИКА" : isEn ? "AFRICA" : "AFRIKA",
          image: "/images/international/project-africa.webp",
          title: isRu
            ? "Укрепление здоровья матерей"
            : isEn
            ? "Maternal Health Enhancement"
            : "Stärkung der Müttergesundheit",
          desc: isRu
            ? "Создание акушерских и родильных отделений в сельских регионах."
            : isEn
            ? "Establishment of midwifery and maternity clinics in rural regions."
            : "Aufbau von Hebammen- und Geburtsstationen in ländlichen Regionen.",
        },
        {
          tag: isRu ? "АЗИЯ" : isEn ? "ASIA" : "ASIEN",
          image: "/images/international/project-asia.webp",
          title: isRu
            ? "Цифровизация систем здравоохранения"
            : isEn
            ? "Healthcare Digitalization"
            : "Digitalisierung von Gesundheitssystemen",
          desc: isRu
            ? "Внедрение цифровых решений для улучшения медицинского обслуживания."
            : isEn
            ? "Deployment of digital medical records and tele-diagnostics to improve care."
            : "Einführung digitaler Lösungen zur Verbesserung der medizinischen Versorgung.",
        },
        {
          tag: isRu ? "ЕВРОПА" : isEn ? "EUROPE" : "EUROPA",
          image: "/images/international/project-europe.webp",
          title: isRu
            ? "Программы обмена специалистами"
            : isEn
            ? "Professional Exchange Programs"
            : "Austauschprogramme für Fachkräfte",
          desc: isRu
            ? "Повышение квалификации и межкультурный обмен для медсестер и врачей."
            : isEn
            ? "Advanced clinical education and intercultural exchange for nursing and medical staff."
            : "Weiterbildung und interkultureller Austausch für Pflege- und Medizinisches Personal.",
        },
        {
          tag: isRu ? "ЛАТИНСКАЯ АМЕРИКА" : isEn ? "LATIN AMERICA" : "LATEINAMERIKA",
          image: "/images/international/project-latam.webp",
          title: isRu
            ? "Медицинская помощь в удаленных регионах"
            : isEn
            ? "Healthcare in Remote Regions"
            : "Gesundheitsversorgung in abgelegenen Regionen",
          desc: isRu
            ? "Мобильные клиники и программы профилактики для равных шансов на здоровье."
            : isEn
            ? "Mobile medical clinics and prevention programs delivering essential primary care."
            : "Mobile Kliniken und Präventionsprogramme für bessere Gesundheitschancen.",
        },
      ],
    },

    // Section 5: Impact Banner
    s5: {
      eyebrow: isRu ? "НАШ IMPACT" : isEn ? "OUR IMPACT" : "UNSER IMPACT",
      title: isRu
        ? "Больше здоровья. Больше возможностей."
        : isEn
        ? "More Health. More Opportunities."
        : "Mehr Gesundheit. Mehr Möglichkeiten.",
      desc: isRu
        ? "Наше международное сотрудничество способствует укреплению систем здравоохранения, улучшению жизней и созданию более справедливого будущего."
        : isEn
        ? "Our international partnerships help strengthen health systems, improve lives, and foster a more equitable future."
        : "Unsere internationalen Kooperationen tragen dazu bei, Gesundheitssysteme zu stärken, Leben zu verbessern und eine gerechtere Zukunft zu ermöglichen.",
      stampText1: isRu ? "Устойчивые решения для" : isEn ? "Sustainable Solutions for" : "Nachhaltige Lösungen für",
      stampText2: isRu ? "здоровых сообществ. ♡" : isEn ? "Healthy Communities. ♡" : "gesunde Gemeinschaften. ♡",
      stats: [
        {
          value: "25+",
          label: isRu ? "Стран-партнеров" : isEn ? "Partner Countries" : "Partnerländer",
          icon: <Globe2 className="w-5 h-5 text-[#ECCF96]" />,
        },
        {
          value: "60+",
          label: isRu ? "Проектов по всему миру" : isEn ? "Projects Worldwide" : "Projekte weltweit",
          icon: <FolderKanban className="w-5 h-5 text-[#ECCF96]" />,
        },
        {
          value: "1.000+",
          label: isRu ? "Обученных специалистов" : isEn ? "Professionals Trained" : "Fachkräfte geschult",
          icon: <Users2 className="w-5 h-5 text-[#ECCF96]" />,
        },
        {
          value: "300.000+",
          label: isRu ? "Охваченных людей" : isEn ? "People Reached" : "Menschen erreicht",
          icon: <Heart className="w-5 h-5 text-[#ECCF96]" />,
        },
      ],
    },

    // Section 6: Testimonials
    s6: {
      eyebrow: isRu ? "ОТЗЫВЫ" : isEn ? "EXPERIENCES" : "ERFAHRUNGEN",
      title: isRu ? "Голоса нашего сотрудничества" : isEn ? "Voices of Collaboration" : "Stimmen aus der Zusammenarbeit",
      subtitle: isRu
        ? "Что говорят наши партнеры и участники проектов о сотрудничестве с NABIOTA."
        : isEn
        ? "What our partners and project participants say about collaborating with NABIOTA."
        : "Was unsere Partner und Projektbeteiligten über die Zusammenarbeit mit NABIOTA sagen.",
      linkAll: isRu ? "Все отзывы" : isEn ? "More Testimonials" : "Weitere Erfahrungsberichte",
      items: [
        {
          quote: isRu
            ? "„Сотрудничество с NABIOTA открыло для нас новые горизонты и устойчиво укрепило наши локальные медицинские структуры.“"
            : isEn
            ? "“Collaborating with NABIOTA has opened new horizons for us and sustainably strengthened our local health infrastructure.”"
            : "„Die Zusammenarbeit mit NABIOTA hat uns neue Perspektiven eröffnet und unsere lokalen Strukturen nachhaltig gestärkt.“",
          avatar: "/images/international/avatar-amina.webp",
          name: "Dr. Amina Yusuf",
          role: isRu ? "Руководитель медцентра" : isEn ? "Health Center Director" : "Leiterin Gesundheitszentrum",
          location: isRu ? "Кения" : isEn ? "Kenya" : "Kenia",
        },
        {
          quote: isRu
            ? "„Профессиональная поддержка и межкультурный обмен стали огромным обогащением для всей нашей команды.“"
            : isEn
            ? "“The professional guidance and intercultural exchange were of immense value to our entire clinical team.”"
            : "„Die fachliche Unterstützung und der interkulturelle Austausch waren für unser Team eine große Bereicherung.“",
          avatar: "/images/international/avatar-keller.webp",
          name: "Prof. Dr. Martin Keller",
          role: isRu ? "Партнер проекта, Университет" : isEn ? "University Project Partner" : "Projektpartner Universität",
          location: isRu ? "Германия" : isEn ? "Germany" : "Deutschland",
        },
        {
          quote: isRu
            ? "„Благодаря сотрудничеству мы смогли существенно улучшить медицинское обслуживание в нашем регионе и помочь многим людям.“"
            : isEn
            ? "“Thanks to this partnership, we were able to significantly improve regional care and support thousands of families.”"
            : "„Dank der Kooperation konnten wir die Versorgung in unserer Region deutlich verbessern und vielen Menschen helfen.“",
          avatar: "/images/international/avatar-santos.webp",
          name: "Maria Santos",
          role: isRu ? "Координатор проекта" : isEn ? "Project Coordinator" : "Projektkoordinatorin",
          location: isRu ? "Перу" : isEn ? "Peru" : "Peru",
        },
      ],
    },

    // Section 7: Bottom CTA Banner & Contact Strip
    s7: {
      eyebrow: isRu
        ? "СТАНЬТЕ ЧАСТЬЮ НАШЕЙ МЕЖДУНАРОДНОЙ МИССИИ"
        : isEn
        ? "BECOME PART OF OUR INTERNATIONAL MISSION"
        : "WERDEN SIE TEIL UNSERER INTERNATIONALEN MISSION",
      title: isRu
        ? "Вместе ради глобального здоровья."
        : isEn
        ? "Together for Global Health."
        : "Gemeinsam für globale Gesundheit.",
      desc: isRu
        ? "В качестве партнера, спонсора или волонтера — мы рады любой форме сотрудничества ради здорового будущего."
        : isEn
        ? "Whether as an institutional partner, benefactor, or contributor — we welcome every collaboration to advance worldwide wellbeing."
        : "Ob als Partner, Förderer oder ehrenamtlicher Unterstützer – wir freuen uns über jede Form der Zusammenarbeit.",
      btn: isRu ? "Связаться с нами" : isEn ? "Contact Our Team" : "Kontakt aufnehmen",
      stampText1: isRu ? "Глобальные партнерства." : isEn ? "Global Partnerships." : "Globale Partnerschaften.",
      stampText2: isRu ? "Локальное действие. ♡" : isEn ? "Local Impact. ♡" : "Lokale Wirkung. ♡",
    },
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] flex flex-col font-sans text-[#1B3A29]">
      {/* 1. Global Navigation Header */}
      <Header currentLocale={locale} />

      <main className="flex-1">
        {/* 2. Site Page Hero with Botanical Background and Breadcrumbs */}
        <PageHero
          breadcrumb={
            <Breadcrumb
              items={[
                { label: isRu ? "Главная" : isEn ? "Home" : "Startseite", href: `/${locale}` },
                {
                  label: isRu ? "Сферы деятельности" : isEn ? "Business Areas" : "Unternehmensbereiche",
                  href: `/${locale}/areas`,
                },
                { label: heroData.title },
              ]}
            />
          }
          title={
            <>
              {heroData.title}
              <span className="block text-xl sm:text-2xl text-[#ECCF93] font-light mt-1 font-serif break-words [overflow-wrap:anywhere] hyphens-auto">
                {heroData.subtitle}
              </span>
            </>
          }
          eyebrow={heroData.eyebrow}
          description={heroData.desc}
          badges={heroBadges}
          imageSrc="/images/areas/international.webp"
        />

        {/* ========================================================================= */}
        {/* SECTION 2: VISION (GESUNDHEIT KENNT KEINE GRENZEN) - FULL WIDTH BLEED     */}
        {/* ========================================================================= */}
        <section className="relative w-full bg-[#FAF8F4] overflow-hidden border-t border-[#F0ECE1]">
          {/* Right Visual: World Map & Joined Hands spanning right edge-to-edge */}
          <div className="w-full lg:w-[58%] xl:w-[54%] h-[280px] sm:h-[360px] lg:h-full lg:absolute lg:top-0 lg:bottom-0 lg:right-0 relative pointer-events-none select-none overflow-hidden order-2 lg:order-none">
            <Image
              src="/images/international/world-hands.webp"
              alt="World Map and Joined Hands - NabiOta Vision"
              fill
              className="object-cover object-right"
              priority
            />
            {/* Soft left gradient fade into the cream background on desktop */}
            <div className="hidden lg:block absolute inset-y-0 left-0 w-32 xl:w-44 bg-gradient-to-r from-[#FAF8F4] via-[#FAF8F4]/80 to-transparent pointer-events-none" />
            <div className="lg:hidden absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#FAF8F4] to-transparent pointer-events-none" />
          </div>

          {/* Left Content: Standard Container alignment */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6 sm:pt-16 sm:pb-8 lg:py-24">
            <div className="max-w-xl space-y-6">
              <div className="text-xs font-semibold tracking-[0.25em] text-[#A07D3E] uppercase">
                {t.s2.eyebrow}
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0B2516] leading-[1.15]">
                {t.s2.title}
              </h2>

              <p className="text-sm sm:text-base text-[#4A5D52] leading-relaxed max-w-lg">
                {t.s2.desc}
              </p>

              <div className="pt-2">
                <a
                  href="#partner"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#F3EAD8] hover:bg-[#ECCF96] text-[#0B2516] border border-[#D5C096] text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm group"
                >
                  <span>{t.s2.btn}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: UNSERE KOOPERATIONSPARTNER                                      */}
        {/* ========================================================================= */}
        <section id="partner" className="py-16 sm:py-20 bg-[#FAF7F2] border-t border-[#EBE6DC]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column (1/3): Description & Action */}
              <div className="lg:col-span-4 space-y-5">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B2516] leading-tight">
                  {t.s3.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#4A5D52] leading-relaxed">
                  {t.s3.desc}
                </p>

                <div className="pt-2">
                  <Link
                    href={`/${locale}/partners`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#0B2516] hover:bg-[#0B2516] text-[#0B2516] hover:text-white text-xs sm:text-sm font-semibold transition-all duration-300 group"
                  >
                    <span>{t.s3.btn}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Right Column (2/3): 3x2 Partner Cards Grid */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {/* Card 1: WHO */}
                  <div className="bg-white rounded-xl p-5 border border-[#E5DFD3] shadow-sm hover:shadow-md hover:border-[#0093D5]/50 transition-all flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-[#EBF6FC] flex items-center justify-center shrink-0 text-[#0093D5] font-black text-xs border border-[#0093D5]/20">
                      <Globe2 className="w-6 h-6 text-[#0093D5]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0093D5] tracking-wide">
                        WHO
                      </div>
                      <div className="text-[11px] font-medium text-[#1B3A29] leading-tight">
                        World Health Organization
                      </div>
                    </div>
                  </div>

                  {/* Card 2: GIZ */}
                  <div className="bg-white rounded-xl p-5 border border-[#E5DFD3] shadow-sm hover:shadow-md hover:border-[#CD1719]/50 transition-all flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-[#FDECEC] flex items-center justify-center shrink-0 text-[#CD1719] font-black text-sm border border-[#CD1719]/20 tracking-tighter">
                      giz
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#CD1719]">
                        giz
                      </div>
                      <div className="text-[10px] text-[#4A5D52] leading-tight">
                        Deutsche Gesellschaft für Internationale Zusammenarbeit
                      </div>
                    </div>
                  </div>

                  {/* Card 3: World Bank Group */}
                  <div className="bg-white rounded-xl p-5 border border-[#E5DFD3] shadow-sm hover:shadow-md hover:border-[#002244]/50 transition-all flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-[#EBF0F6] flex items-center justify-center shrink-0 text-[#002244] border border-[#002244]/20">
                      <Network className="w-6 h-6 text-[#002244]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#002244]">
                        World Bank Group
                      </div>
                      <div className="text-[10px] text-[#4A5D52] leading-tight">
                        Global Health & Development
                      </div>
                    </div>
                  </div>

                  {/* Card 4: UNICEF */}
                  <div className="bg-white rounded-xl p-5 border border-[#E5DFD3] shadow-sm hover:shadow-md hover:border-[#1CABE2]/50 transition-all flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-[#EAF7FC] flex items-center justify-center shrink-0 text-[#1CABE2] font-black text-xs border border-[#1CABE2]/20">
                      <HeartHandshake className="w-6 h-6 text-[#1CABE2]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1CABE2] lowercase">
                        unicef
                      </div>
                      <div className="text-[11px] font-medium text-[#1B3A29] leading-tight">
                        für jedes Kind
                      </div>
                    </div>
                  </div>

                  {/* Card 5: Universities */}
                  <div className="bg-white rounded-xl p-5 border border-[#E5DFD3] shadow-sm hover:shadow-md hover:border-[#B8934A]/50 transition-all flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-[#FAF7F0] flex items-center justify-center shrink-0 text-[#B8934A] border border-[#B8934A]/30">
                      <GraduationCap className="w-6 h-6 text-[#B8934A]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1B3A29]">
                        Universitäten
                      </div>
                      <div className="text-[10px] text-[#4A5D52] leading-tight">
                        & Forschungsinstitute
                      </div>
                    </div>
                  </div>

                  {/* Card 6: NGOs & Foundations */}
                  <div className="bg-white rounded-xl p-5 border border-[#E5DFD3] shadow-sm hover:shadow-md hover:border-[#2D5A3E]/50 transition-all flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-[#EDF3EE] flex items-center justify-center shrink-0 text-[#2D5A3E] border border-[#2D5A3E]/30">
                      <Leaf className="w-6 h-6 text-[#2D5A3E]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1B3A29]">
                        NGOs & Stiftungen
                      </div>
                      <div className="text-[10px] text-[#4A5D52] leading-tight">
                        Gemeinnützige Netzwerke
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: UNSERE INTERNATIONALEN PROJEKTE (4 COLUMNS)                     */}
        {/* ========================================================================= */}
        <section id="projekte" className="py-16 sm:py-20 bg-white border-t border-[#F0ECE1]">
          <Container>
            {/* Header with Title and Link on the right */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="space-y-3 max-w-2xl">
                <div className="text-xs font-semibold tracking-[0.2em] text-[#B8934A] uppercase">
                  {t.s4.eyebrow}
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0B2516] leading-tight">
                  {t.s4.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#4A5D52] leading-relaxed">
                  {t.s4.desc}
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#B8934A] hover:text-[#0B2516] transition-colors group"
                >
                  <span>{t.s4.linkAll}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* 4 Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.s4.projects.map((proj, idx) => (
                <div
                  key={idx}
                  className="group bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#EBE6DC] shadow-sm hover:shadow-xl hover:border-[#ECCF96] transition-all duration-300 flex flex-col"
                >
                  {/* Project Image with Region Tag */}
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* Region Pill Badge (Top-Left) */}
                    <div className="absolute top-3 left-3 bg-[#0B2516]/85 backdrop-blur-sm text-[#ECCF96] text-[10px] font-bold tracking-wider px-2.5 py-1 rounded shadow-sm">
                      {proj.tag}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-base font-serif font-bold text-[#0B2516] leading-snug group-hover:text-[#B8934A] transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-[#4A5D52] leading-relaxed">
                        {proj.desc}
                      </p>
                    </div>

                    {/* Bottom Action Icon Button */}
                    <div className="pt-2 flex justify-end">
                      <div className="w-8 h-8 rounded-full border border-[#D8C7A5] flex items-center justify-center text-[#B8934A] group-hover:bg-[#0B2516] group-hover:text-[#ECCF96] group-hover:border-[#0B2516] transition-all">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: IMPACT BANNER (DARK EMERALD SPLIT SECTION)                     */}
        {/* ========================================================================= */}
        <section className="relative bg-[#0B2516] text-white overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
            {/* Left Column: Humanitarian aid worker overlooking mountain village */}
            <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-[460px]">
              <Image
                src="/images/international/impact-humanitarian.webp"
                alt="NabiOta Humanitarian Healthcare Worker"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/60 via-transparent to-[#0B2516] pointer-events-none" />

              {/* Floating Handwritten Stamp (Bottom-Left / Center-Left) */}
              <div className="absolute bottom-6 left-6 max-w-xs pointer-events-none select-none">
                <div
                  className="text-white text-lg sm:text-xl font-serif italic tracking-wide leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  <p>{t.s5.stampText1}</p>
                  <p>{t.s5.stampText2}</p>
                </div>
              </div>
            </div>

            {/* Right Column: Impact Metrics */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-8 bg-[#0B2516]">
              <div className="space-y-4">
                <div className="inline-block text-xs font-semibold tracking-[0.2em] text-[#ECCF96] uppercase">
                  {t.s5.eyebrow}
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                  {t.s5.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#D1DDD5] leading-relaxed max-w-lg">
                  {t.s5.desc}
                </p>
              </div>

              {/* 4 Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2 border-t border-white/10">
                {t.s5.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="text-[#ECCF96] mb-1">
                      {stat.icon}
                    </div>
                    <div className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-[11px] sm:text-xs text-[#D1DDD5] font-medium leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: STIMMEN AUS DER ZUSAMMENARBEIT (3 TESTIMONIALS)                 */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-[#FAF7F2] border-t border-[#EBE6DC]">
          <Container>
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="space-y-3 max-w-2xl">
                <div className="text-xs font-semibold tracking-[0.2em] text-[#B8934A] uppercase">
                  {t.s6.eyebrow}
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0B2516] leading-tight">
                  {t.s6.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#4A5D52] leading-relaxed">
                  {t.s6.subtitle}
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#B8934A] hover:text-[#0B2516] transition-colors group"
                >
                  <span>{t.s6.linkAll}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* 3 Testimonials Grid matching Screenshot 3 1:1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.s6.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E5DFD3] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-5"
                >
                  {/* Top: Avatar on left + Quote on right */}
                  <div className="flex items-start gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border border-[#D8C7A5] shrink-0">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-xs sm:text-[13px] text-[#1B3A29] leading-relaxed italic flex-1">
                      {item.quote}
                    </p>
                  </div>

                  {/* Middle: Author Info */}
                  <div className="space-y-0.5 pl-1">
                    <h4 className="text-xs sm:text-sm font-bold text-[#0B2516] leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-[#556358] leading-tight">
                      {item.role}
                    </p>
                    <p className="text-[11px] text-[#556358] leading-tight">
                      {item.location}
                    </p>
                  </div>

                  {/* Bottom: 5 Gold Stars */}
                  <div className="pt-2 flex text-[#D4AF37] gap-1 pl-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: BOTTOM CTA BANNER (FULL WIDTH PANORAMA - PHOTO 3)              */}
        {/* ========================================================================= */}
        <section className="relative w-full overflow-hidden min-h-[300px] sm:min-h-[360px] lg:min-h-[400px] flex items-center bg-[#FAF7F2] border-t border-[#EBE6DC]">
          {/* Panoramic Sunrise Mountain Photo spanning full width edge-to-edge */}
          <Image
            src="/images/international/cta-sunrise.webp"
            alt="Sunrise Mountains NabiOta Health Group"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Subtle soft gradient on left for contrast across languages & screens */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/90 via-[#FAF7F2]/60 to-transparent pointer-events-none" />

          {/* Left Text & CTA Button aligned with site container */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
            <div className="max-w-xl space-y-4">
              <div className="text-[10.5px] sm:text-xs font-semibold tracking-[0.2em] text-[#8C6527] uppercase">
                {t.s7.eyebrow}
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B2516] leading-tight">
                {t.s7.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#4A5D52] leading-relaxed max-w-lg">
                {t.s7.desc}
              </p>

              <div className="pt-2">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAF7F2] hover:bg-[#ECCF96] text-[#0B2516] border border-[#D8C7A5] text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm group"
                >
                  <span>{t.s7.btn}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 3. Global Footer */}
      <Footer currentLocale={locale} />
    </div>
  );
}
