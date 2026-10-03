"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  Lightbulb,
  Users,
  Leaf,
  Building2,
  HardHat,
  Network,
  ShieldCheck,
  MessageSquare,
  CheckCircle2,
  Flag,
  Award,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Heart,
  Briefcase,
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

export function BeratungPageComponent({ locale = "de" }: Props) {
  const isRu = locale === "ru";
  const isEn = locale === "en";

  // Standard Site PageHero Data
  const heroData = {
    title: isRu
      ? "Консалтинг & Девелопмент"
      : isEn
      ? "Consulting & Project Development"
      : "Beratung & Projektentwicklung",
    subtitle: isRu
      ? "Стратегическая экспертиза для медицины будущего"
      : isEn
      ? "Strategic Healthcare Consulting & Project Development"
      : "Strategische Expertise für das Gesundheitswesen von morgen",
    eyebrow: isRu
      ? "СТРАТЕГИЯ И РЕАЛИЗАЦИЯ"
      : isEn
      ? "STRATEGY & DEVELOPMENT"
      : "STRATEGIE & PROJEKTENTWICKLUNG",
    desc: isRu
      ? "NabiOta® Consulting & Project Development сопровождает медицинские учреждения, инвесторов и муниципалитеты на всех этапах: от анализа и концепции до ввода в эксплуатацию и эффективного управления."
      : isEn
      ? "NabiOta® Consulting & Project Development guides healthcare operators, investors, and municipalities through the future-proof design, planning, and turnkey realization of modern medical facilities."
      : "Die NabiOta® Consulting begleitet Träger, Investoren und Kommunen bei der zukunftssicheren Konzeption, Planung und wirtschaftlichen Realisierung moderner Gesundheitseinrichtungen – von der ersten Idee bis zur schlüsselfertigen Übergabe.",
  };

  const heroBadges = [
    {
      icon: <Award className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "360° Экспертиза" : isEn ? "360° Consulting" : "360° Beratung",
      sub: isRu ? "Все фазы проекта" : isEn ? "Full Lifecycle" : "Alle Projektphasen",
    },
    {
      icon: <Building2 className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "Turnkey" : isEn ? "Turnkey" : "Schlüsselfertig",
      sub: isRu ? "Под ключ" : isEn ? "Realization" : "Realisierung",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "Устойчивость" : isEn ? "Sustainable" : "Wirtschaftlich",
      sub: isRu ? "И рентабельность" : isEn ? "& Profitable" : "& Tragfähig",
    },
  ];

  const t = {
    s1: {
      eyebrow: isRu ? "НАШИ КОНСАЛТИНГОВЫЕ УСЛУГИ" : isEn ? "OUR CONSULTING SERVICES" : "UNSERE BERATUNGSLEISTUNGEN",
      title: isRu
        ? "Комплексный консалтинг для устойчивых решений."
        : isEn
        ? "Holistic Consulting for Sustainable Solutions."
        : "Ganzheitliche Beratung für nachhaltige Lösungen.",
      desc: isRu
        ? "Мы анализируем, консультируем и разрабатываем вместе с вами перспективные концепции — индивидуально, практично и с четким фокусом на качестве, эффективности и человечности."
        : isEn
        ? "We analyze, advise, and develop future-proof concepts together with you — personalized, hands-on, and with a clear focus on quality, efficiency, and human-centric care."
        : "Wir analysieren, beraten und entwickeln gemeinsam mit Ihnen zukunftsfähige Konzepte – individuell, praxisnah und mit einem klaren Fokus auf Qualität, Effizienz und Menschlichkeit.",
      btn: isRu ? "Подробнее об услугах" : isEn ? "Explore Our Services" : "Mehr zu unseren Leistungen",
      cardTitle: isRu ? "Наш подход к консалтингу" : isEn ? "Our Consulting Approach" : "Unser Beratungsansatz",
      items: [
        {
          icon: Search,
          text: isRu ? "Анализ потребностей и оценка текущего состояния" : isEn ? "Needs analysis & current-state evaluation" : "Bedarfsanalyse und Ist-Stand-Bewertung",
        },
        {
          icon: Lightbulb,
          text: isRu ? "Разработка индивидуальных решений" : isEn ? "Development of tailored solution strategies" : "Entwicklung individueller Lösungsansätze",
        },
        {
          icon: Users,
          text: isRu ? "Сопровождение на всех этапах проекта" : isEn ? "End-to-end guidance across all project phases" : "Begleitung in allen Projektphasen",
        },
        {
          icon: Leaf,
          text: isRu ? "Устойчивые и долгосрочные результаты" : isEn ? "Sustainable, future-proof, long-term results" : "Nachhaltige und langfristige Ergebnisse",
        },
      ],
    },
    s2: {
      eyebrow: isRu ? "ДЕВЕЛОПМЕНТ ПРОЕКТОВ" : isEn ? "PROJECT DEVELOPMENT" : "PROJEKTENTWICKLUNG",
      title: isRu ? "От идеи к реализации." : isEn ? "From Concept to Completion." : "Von der Idee zur Umsetzung.",
      desc: isRu
        ? "Мы разрабатываем и реализуем проекты в сфере здравоохранения — от новых медицинских центров и клиник до расширения и реструктуризации существующих объектов. При этом мы сочетаем экономическую рентабельность с социальной ответственностью и высочайшим качеством."
        : isEn
        ? "We develop and implement healthcare infrastructure projects — whether new medical facilities, expansions, or restructuring programs. We combine economic viability with social responsibility and top-tier quality."
        : "Wir entwickeln und realisieren Projekte im Gesundheitswesen – ob neue Einrichtungen, Erweiterungen oder Umstrukturierungen. Dabei verbinden wir wirtschaftliche Tragfähigkeit mit sozialer Verantwortung und höchster Qualität.",
      btn: isRu ? "Ознакомиться с проектами" : isEn ? "Discover Our Projects" : "Unsere Projekte entdecken",
      stamp: isRu ? "Пространства здоровья будущего." : isEn ? "Sustainable Healthcare Spaces." : "Nachhaltige Gesundheitsräume.",
      features: [
        {
          icon: Building2,
          text: isRu ? "ТЭО и разработка концепций" : isEn ? "Feasibility studies & concept development" : "Machbarkeitsstudien und Konzeptentwicklung",
        },
        {
          icon: HardHat,
          text: isRu ? "Проектирование и реализация строительных проектов" : isEn ? "Planning & execution of capital construction" : "Planung und Umsetzung von Bau- und Investitionsprojekten",
        },
        {
          icon: Network,
          text: isRu ? "Координация участников и ведомств" : isEn ? "Coordination of all stakeholders & authorities" : "Koordination aller Beteiligten und Behörden",
        },
        {
          icon: ShieldCheck,
          text: isRu ? "Управление качеством и рисками" : isEn ? "Comprehensive quality & risk management" : "Qualitäts- und Risikomanagement",
        },
      ],
    },
    s3: {
      eyebrow: isRu ? "НАШ ПРОЦЕСС" : isEn ? "OUR PROCESS" : "UNSER PROZESS",
      title: isRu ? "5 шагов к успеху вашего проекта." : isEn ? "In 5 Steps to Project Success." : "In 5 Schritten zu Ihrem Projekterfolg.",
      desc: isRu
        ? "Прозрачные процессы, тесное взаимодействие и опытная команда экспертов — так мы надежно доводим ваш проект до цели."
        : isEn
        ? "Transparent workflows, close collaboration, and an experienced interdisciplinary team — ensuring your healthcare project reaches its goals safely."
        : "Transparente Abläufe, enge Zusammenarbeit und ein erfahrenes Team – so bringen wir Ihr Projekt sicher ans Ziel.",
      steps: [
        {
          num: "1",
          icon: MessageSquare,
          title: isRu ? "Первичная беседа и анализ" : isEn ? "Initial Consultation & Analysis" : "Erstgespräch & Analyse",
          desc: isRu
            ? "Мы внимательно изучаем исходную ситуацию, цели и требования."
            : isEn
            ? "We listen carefully, analyze your current situation, and define shared goals."
            : "Wir hören zu, analysieren Ihre Situation und definieren gemeinsam die Ziele.",
        },
        {
          num: "2",
          icon: Lightbulb,
          title: isRu ? "Концепция и планирование" : isEn ? "Concept & Planning" : "Konzept & Planung",
          desc: isRu
            ? "Разрабатываем индивидуальные решения и детальный план проекта."
            : isEn
            ? "We create tailored solutions and establish rigorous project blueprints."
            : "Wir entwickeln maßgeschneiderte Lösungen und erstellen eine fundierte Projektplanung.",
        },
        {
          num: "3",
          icon: Users,
          title: isRu ? "Реализация" : isEn ? "Execution & Coordination" : "Umsetzung",
          desc: isRu
            ? "Координируем всех подрядчиков и контролируем сроки."
            : isEn
            ? "We coordinate all parties involved and ensure efficient implementation."
            : "Wir koordinieren alle Beteiligten und sorgen für eine effiziente Realisierung.",
        },
        {
          num: "4",
          icon: CheckCircle2,
          title: isRu ? "Сопровождение и контроль" : isEn ? "Supervision & Quality Control" : "Begleitung & Kontrolle",
          desc: isRu
            ? "Держим на постоянном контроле расходы, график и качество."
            : isEn
            ? "We maintain rigorous oversight of costs, timelines, and construction quality."
            : "Wir behalten Kosten, Zeit und Qualität im Blick – für ein sicheres Ergebnis.",
        },
        {
          num: "5",
          icon: Flag,
          title: isRu ? "Успешный ввод и развитие" : isEn ? "Launch & Future Growth" : "Erfolg & Weiterentwicklung",
          desc: isRu
            ? "Сопровождаем ввод в эксплуатацию и поддерживаем развитие объекта."
            : isEn
            ? "We oversee commissioning and remain your trusted strategic partner."
            : "Wir begleiten die Inbetriebnahme und stehen Ihnen auch danach zur Seite.",
        },
      ],
    },
    s4: {
      eyebrow: isRu ? "РЕФЕРЕНЦИИ И ПРОЕКТЫ" : isEn ? "REFERENCES & PROJECTS" : "REFERENZEN & PROJEKTE",
      title: isRu
        ? "Успешные проекты для медицины будущего."
        : isEn
        ? "Successful Projects for Better Healthcare."
        : "Erfolgreiche Projekte für eine bessere Versorgung.",
      desc: isRu
        ? "От концепции до ввода в эксплуатацию — мы успешно реализовали множество объектов в сфере здравоохранения. Ознакомьтесь с нашими референсными проектами."
        : isEn
        ? "From initial feasibility to turnkey handover — we have guided numerous healthcare facilities to fruition. Get inspired by our completed references."
        : "Von der Konzeption bis zur Realisierung – wir haben bereits zahlreiche Projekte im Gesundheitswesen erfolgreich begleitet. Lassen Sie sich von unseren Referenzen inspirieren.",
      btn: isRu ? "Все проекты" : isEn ? "View All Projects" : "Alle Projekte ansehen",
      projects: [
        {
          tag: isRu ? "Амбулаторное звено" : isEn ? "Outpatient Care" : "Ambulante Versorgung",
          title: isRu ? "Новое строительство амбулаторного медцентра" : isEn ? "Construction of a New Medical Center (MVZ)" : "Neubau eines Medizinischen Versorgungszentrums",
          sub: isRu ? "Концепция · Проектирование · Реализация" : isEn ? "Concept · Planning · Implementation" : "Konzept · Planung · Umsetzung",
          image: "/images/beratung/project-mvz.webp",
        },
        {
          tag: isRu ? "Уход и стационар" : isEn ? "Nursing & Elderly Care" : "Pflege & Betreuung",
          title: isRu ? "Расширение и модернизация дома ухода" : isEn ? "Expansion of a Modern Senior Living Facility" : "Erweiterung einer Pflegeeinrichtung",
          sub: isRu ? "Консалтинг · Проект-менеджмент · Авторский надзор" : isEn ? "Consulting · Project Management · Site Oversight" : "Beratung · Projektmanagement · Bauleitung",
          image: "/images/beratung/project-pflege.webp",
        },
        {
          tag: isRu ? "Реабилитация" : isEn ? "Rehabilitation" : "Rehabilitation",
          title: isRu ? "Реновация и технологическое обновление реабилитационной клиники" : isEn ? "Modernization & Technical Refit of a Rehab Clinic" : "Sanierung und Modernisierung einer Rehabilitationsklinik",
          sub: isRu ? "Анализ · Планирование · Ввод" : isEn ? "Analysis · Planning · Delivery" : "Analyse · Planung · Umsetzung",
          image: "/images/beratung/project-reha.webp",
        },
      ],
    },
    s5: {
      eyebrow: isRu ? "ОТЗЫВЫ ПАРТНЕРОВ" : isEn ? "PARTNER VOICES" : "STIMMEN UNSERER PARTNER",
      title: isRu ? "Доверие создает прогресс." : isEn ? "Trust Drives Progress." : "Vertrauen schafft Fortschritt.",
      desc: isRu
        ? "Что говорят наши партнеры и заказчики о совместной работе над проектами развития инфраструктуры."
        : isEn
        ? "What healthcare leaders and executives say about partnering with us on consulting and development projects."
        : "Das sagen unsere Kundinnen und Kunden über die Zusammenarbeit in Beratungs- und Projektentwicklungsprojekten.",
      btn: isRu ? "Связаться с нами" : isEn ? "Contact Our Team" : "Kontakt aufnehmen",
      testimonials: [
        {
          name: "Dr. Thomas Berger",
          role: isRu ? "Управляющий директор, MVZ" : isEn ? "Managing Director, Medical Center" : "Geschäftsführer, MVZ",
          avatar: "/images/beratung/avatar-berger.webp",
          quote: isRu
            ? "«Сотрудничество с самого начала было высокопрофессиональным, ориентированным на решение задач и невероятно комфортным. Нас впечатлил баланс глубоких экспертных знаний и человеческого подхода.»"
            : isEn
            ? "“The collaboration was professional, solution-oriented, and remarkably pleasant right from day one. We were particularly impressed by the blend of deep technical expertise and genuine humanity.”"
            : "„Die Zusammenarbeit war von Anfang an professionell, lösungsorientiert und äußerst angenehm. Besonders beeindruckt hat uns die Kombination aus Fachwissen und Menschlichkeit.“",
        },
        {
          name: "Sabine Keller",
          role: isRu ? "Руководитель строительной инфраструктуры" : isEn ? "Head of Construction & Infrastructure" : "Leiterin Bau & Infrastruktur",
          avatar: "/images/beratung/avatar-keller.webp",
          quote: isRu
            ? "«Благодаря структурированному подходу и постоянному сопровождению мы смогли завершить проект точно в срок и строго в рамках утвержденного бюджета.»"
            : isEn
            ? "“Thanks to their structured methodology and continuous oversight, we were able to deliver our healthcare facility strictly on schedule and within budget.”"
            : "„Dank der strukturierten Vorgehensweise und der engen Begleitung konnten wir unser Projekt termingerecht und budgetgerecht realisieren.“",
        },
        {
          name: "Prof. Dr. Markus Weber",
          role: isRu ? "Главный врач медицинского центра" : isEn ? "Medical Director, Healthcare Campus" : "Leitung Gesundheitszentrum",
          avatar: "/images/beratung/avatar-weber.webp",
          quote: isRu
            ? "«Компетентность, вовлеченность и глубокое понимание клинических потребностей — именно это делает NABIOTA по-настоящему ценным партнером.»"
            : isEn
            ? "“Uncompromising competence, commitment, and a deep understanding of our clinical workflows — that is what makes NABIOTA an invaluable partner.”"
            : "„Kompetenz, Engagement und ein tiefes Verständnis für unsere Bedürfnisse – das macht NABIOTA zu einem wertvollen Partner.“",
        },
      ],
    },
    s6: {
      eyebrow: isRu ? "КОНТАКТ" : isEn ? "CONTACT" : "KONTAKT",
      title: isRu ? "Будем рады вашему обращению." : isEn ? "We Look Forward to Your Inquiry." : "Wir freuen uns auf Ihre Anfrage.",
      desc: isRu
        ? "Будь то первая идея или конкретный проект расширения — наша команда с удовольствием проконсультирует вас лично и без обязательств."
        : isEn
        ? "Whether an initial concept or an imminent development project — our team will be delighted to advise you personally."
        : "Ob erste Idee oder konkretes Vorhaben – unser Team berät Sie gerne persönlich und unverbindlich zu Ihren Möglichkeiten.",
      btn: isRu ? "Связаться с нами" : isEn ? "Contact Us" : "Kontakt aufnehmen",
      stamp1: isRu ? "Давайте поговорим" : isEn ? "Let's talk about" : "Lassen Sie uns",
      stamp2: isRu ? "о вашем проекте." : isEn ? "your project." : "über Ihr Projekt sprechen.",
      phone: "+49 2161 4794000",
      email: "info@nabiota-health-group.de",
      location: isRu ? "Мёнхенгладбах, Германия" : isEn ? "Mönchengladbach, Germany" : "Mönchengladbach, Germany",
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F5] text-forest-950 font-sans selection:bg-gold-500/20">
      {/* ── 1. GLOBAL SITE NAVIGATION HEADER (kept intact) ── */}
      <Header currentLocale={locale} />

      {/* ── 2. SITE STANDARD PAGE HERO (Unified Header with botanical gold background) ── */}
      <PageHero
        breadcrumb={
          <Breadcrumb
            items={[
              { label: isRu ? "Главная" : isEn ? "Home" : "Startseite", href: `/${locale}` },
              {
                label: isRu ? "Направления холдинга" : isEn ? "Divisions" : "Unternehmensbereiche",
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
        imageSrc="/images/areas/consulting.webp"
        imageAlt="NabiOta Health Group Beratung & Projektentwicklung"
        badges={heroBadges}
      />

      <main className="flex-1 bg-[#FAF9F5]">
        {/* ========================================================================= */}
        {/* SECTION 1 (from Photo): UNSERE BERATUNGSLEISTUNGEN                        */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-20 bg-[#FAF9F5]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column (Copy + Button) */}
              <div className="lg:col-span-4 space-y-5">
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#9B7C38] block font-sans">
                  {t.s1.eyebrow}
                </span>

                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] text-[#0F2A1D] font-normal leading-[1.18] tracking-tight">
                  {t.s1.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#4A5D52] font-normal leading-relaxed">
                  {t.s1.desc}
                </p>

                <div className="pt-2">
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF9F5] hover:bg-white text-[#0D2619] border border-[#C8B896] text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm group"
                  >
                    <span>{t.s1.btn}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Center Column: Meeting Photo */}
              <div className="lg:col-span-5 relative aspect-[16/11] sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-[#EAE5DC]">
                <Image
                  src="/images/beratung/consulting-meeting.webp"
                  alt={t.s1.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right Column: Consulting Approach Box */}
              <div className="lg:col-span-3 bg-[#F6F5EF] rounded-2xl p-6 border border-[#EBE7DF] shadow-xs space-y-4">
                <h3 className="font-serif text-base sm:text-lg font-medium text-[#0F2A1D] border-b border-[#E6E1D6] pb-3">
                  {t.s1.cardTitle}
                </h3>

                <div className="space-y-3.5">
                  {t.s1.items.map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-full bg-white border border-[#DDD6C8] text-[#244E33] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                          <IconComp className="w-3.5 h-3.5 stroke-[1.8]" />
                        </div>
                        <span className="text-xs text-[#2C4737] font-medium leading-snug">
                          {item.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2 (from Photo): PROJEKTENTWICKLUNG - VON DER IDEE ZUR UMSETZUNG    */}
        {/* ========================================================================= */}
        <section className="py-8 sm:py-14">
          <Container size="wide">
            <div className="bg-[#0B2516] rounded-3xl overflow-hidden shadow-2xl relative">
              {/* Subtle Botanical texture */}
              <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
                <Image
                  src="/images/values/leaves-bg.webp"
                  alt="Leaves texture"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 items-center relative z-10">
                {/* Left: Text & CTA */}
                <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 space-y-5">
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#ECCF96] block font-sans">
                    {t.s2.eyebrow}
                  </span>

                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal leading-tight">
                    {t.s2.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#D4E2D8] leading-relaxed">
                    {t.s2.desc}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/${locale}/contact`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#ECCF96] to-[#D4AF37] hover:from-[#F2DCAE] hover:to-[#DFBB45] text-[#0B2516] text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md group"
                    >
                      <span>{t.s2.btn}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Center: 4 Gold Circular Features */}
                <div className="lg:col-span-3 px-8 py-4 sm:px-10 lg:px-4 space-y-4">
                  {t.s2.features.map((feat, idx) => {
                    const IconComp = feat.icon;
                    return (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full border border-[#D4AF37]/60 bg-white/5 flex items-center justify-center text-[#ECCF96] flex-shrink-0">
                          <IconComp className="w-4 h-4 stroke-[1.5]" />
                        </div>
                        <span className="text-xs font-medium text-[#F4EFE6] leading-snug">
                          {feat.text}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Right: Modern Building Photo with Cursive Stamp */}
                <div className="lg:col-span-4 relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px] sm:min-h-[360px] overflow-hidden">
                  <Image
                    src="/images/beratung/project-building.webp"
                    alt={t.s2.title}
                    fill
                    className="object-cover object-center"
                  />
                  {/* Soft gradient blend on the left edge on desktop */}
                  <div className="hidden lg:block absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0B2516] to-transparent pointer-events-none" />

                  {/* Stamp Badge Bottom Right: "Nachhaltige Gesundheitsräume. ♡" */}
                  <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#0B2516]/80 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/20 rotate-[-2deg] flex items-center gap-2 shadow-lg">
                    <span className="font-serif italic text-xs sm:text-sm text-[#F7F3E8] font-medium">
                      {t.s2.stamp}
                    </span>
                    <Heart className="w-3.5 h-3.5 text-[#ECCF96] fill-[#ECCF96]/30 flex-shrink-0" />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3 (from Photo): UNSER PROZESS (In 5 Schritten zu Ihrem Erfolg)    */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-20 bg-[#FAF9F5] border-t border-[#EAE3D5]">
          <Container size="wide">
            {/* Header */}
            <div className="max-w-2xl mb-12 sm:mb-14">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#9B7C38] block font-sans mb-2">
                {t.s3.eyebrow}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#0F2A1D] font-normal leading-tight mb-3">
                {t.s3.title}
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#4A5D52] leading-relaxed">
                {t.s3.desc}
              </p>
            </div>

            {/* 5 Steps Connected in a Row */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-4 relative">
              {t.s3.steps.map((st, idx) => {
                const IconComp = st.icon;
                return (
                  <div key={idx} className="relative flex flex-col space-y-3">
                    {/* Top Row: Number badge + Icon + Chevron divider */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-[#0D2619] text-white flex items-center justify-center text-xs font-bold font-serif">
                          {st.num}
                        </div>
                        <div className="w-8 h-8 rounded-full bg-[#EBF0EA] text-[#244E33] flex items-center justify-center">
                          <IconComp className="w-4 h-4 stroke-[1.8]" />
                        </div>
                      </div>

                      {/* Arrow to next item (hidden on last item and mobile) */}
                      {idx < 4 && (
                        <span className="hidden md:block text-[#C8B896] text-sm pr-2">
                          ›
                        </span>
                      )}
                    </div>

                    {/* Step Title & Text */}
                    <div className="pt-1">
                      <h4 className="font-serif text-xs sm:text-sm font-semibold text-[#0F2A1D] mb-1.5 leading-snug">
                        {st.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[#5A6E63] leading-relaxed">
                        {st.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4 (from Photo): REFERENZEN & PROJEKTE                             */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-20 bg-[#FAF9F5] border-t border-[#EAE3D5]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-8 sm:mb-12">
              {/* Left Column: Heading + Button */}
              <div className="lg:col-span-4 space-y-4">
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#9B7C38] block font-sans">
                  {t.s4.eyebrow}
                </span>

                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#0F2A1D] font-normal leading-tight">
                  {t.s4.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#4A5D52] leading-relaxed">
                  {t.s4.desc}
                </p>

                <div className="pt-2">
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF9F5] hover:bg-white text-[#0D2619] border border-[#C8B896] text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm group"
                  >
                    <span>{t.s4.btn}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Right: 3 Project Cards */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
                {t.s4.projects.map((proj, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl overflow-hidden border border-[#EBE4D8] shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Photo */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={proj.image}
                          alt={proj.title}
                          fill
                          className="object-cover group-hover:scale-104 transition-transform duration-500"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-4 sm:p-5">
                        <span className="text-[10px] sm:text-[11px] font-semibold text-[#9B7C38] block uppercase tracking-wider mb-1 font-sans">
                          {proj.tag}
                        </span>
                        <h4 className="font-serif text-xs sm:text-sm font-semibold text-[#0F2A1D] leading-snug mb-2">
                          {proj.title}
                        </h4>
                      </div>
                    </div>

                    {/* Bottom Subtitle + Circle Arrow */}
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-2 border-t border-[#F2ECE1] flex items-center justify-between">
                      <span className="text-[10.5px] sm:text-[11px] text-[#6E8177]">
                        {proj.sub}
                      </span>
                      <div className="w-6 h-6 rounded-full border border-[#D5C9B4] flex items-center justify-center text-[#244E33] group-hover:bg-[#0D2619] group-hover:text-white transition-colors duration-300 flex-shrink-0">
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5 (from Photo): STIMMEN UNSERER PARTNER                           */}
        {/* ========================================================================= */}
        <section className="py-8 sm:py-14">
          <Container size="wide">
            <div className="bg-[#0B2516] rounded-3xl overflow-hidden shadow-2xl relative p-8 sm:p-12 lg:p-14">
              {/* Botanical leaves on left */}
              <div className="absolute top-0 left-0 w-64 h-64 opacity-15 pointer-events-none hidden lg:block">
                <Image
                  src="/images/areas/botanical-branch-clean.webp"
                  alt="Leaves ornament"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                {/* Left: Heading + Button */}
                <div className="lg:col-span-4 space-y-4">
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#ECCF96] block font-sans">
                    {t.s5.eyebrow}
                  </span>

                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal leading-tight">
                    {t.s5.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#D4E2D8] leading-relaxed">
                    {t.s5.desc}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/${locale}/contact`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#0B2516] border border-white/30 text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm group"
                    >
                      <span>{t.s5.btn}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Right: 3 White Testimonial Cards */}
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                  {t.s5.testimonials.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl p-5 sm:p-6 text-forest-950 flex flex-col justify-between shadow-md"
                    >
                      {/* Top: Avatar & Quote */}
                      <div>
                        <div className="relative w-10 h-10 rounded-full overflow-hidden mb-3 border border-[#E2DBD0]">
                          <Image
                            src={item.avatar}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="text-[11.5px] sm:text-xs text-[#2C4436] italic leading-relaxed mb-4">
                          {item.quote}
                        </p>
                      </div>

                      {/* Bottom: Name & Role */}
                      <div className="pt-3 border-t border-[#F2ECE1]">
                        <h4 className="font-serif text-xs font-semibold text-[#0F2A1D]">
                          {item.name}
                        </h4>
                        <p className="text-[10px] text-[#6E8177]">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6 (from Photo): KONTAKT (Wir freuen uns auf Ihre Anfrage)          */}
        {/* ========================================================================= */}
        <section className="py-10 sm:py-16">
          <Container size="wide">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#DECDB5]/50 bg-gradient-to-r from-[#F6F4ED] via-[#F2EDE2] to-[#EAE3D3]">
              {/* Background Desk with notebook on left */}
              <div className="absolute inset-y-0 left-0 w-full sm:w-2/5 opacity-80 sm:opacity-100 pointer-events-none">
                <Image
                  src="/images/beratung/cta-desk.webp"
                  alt="Desk notebook"
                  fill
                  className="object-cover object-left"
                />
                {/* Gradient blend to center */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F6F4ED]/60 to-[#F6F4ED] sm:w-full" />
              </div>

              {/* Floating stamp top left: "Lassen Sie uns über Ihr Projekt sprechen. ♡" */}
              <div className="absolute top-5 left-5 sm:top-8 sm:left-10 z-20 bg-white/85 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-white/80 rotate-[-2deg] flex flex-col items-center">
                <p className="font-serif italic text-xs sm:text-sm font-semibold text-[#0E281C] text-center leading-tight">
                  {t.s6.stamp1}
                  <br />
                  {t.s6.stamp2}
                </p>
                <Heart className="w-3.5 h-3.5 text-[#0E281C] fill-[#0E281C]/20 mt-1" />
              </div>

              {/* Center Content Box + Right Glass Contact Box */}
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 lg:p-14">
                {/* Center / Middle Text (Left on Desktop after the stamp area) */}
                <div className="lg:col-start-5 lg:col-span-4 space-y-4 pt-12 sm:pt-0">
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#9B7C38] block font-sans">
                    {t.s6.eyebrow}
                  </span>

                  <h2 className="font-serif text-2xl sm:text-3xl text-[#0F2A1D] font-normal leading-tight">
                    {t.s6.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#4A5D52] leading-relaxed">
                    {t.s6.desc}
                  </p>

                  <div>
                    <Link
                      href={`/${locale}/contact`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#ECCF96] to-[#D4AF37] hover:from-[#F2DCAE] hover:to-[#DFBB45] text-[#0B2516] text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md group"
                    >
                      <span>{t.s6.btn}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Right: Glassmorphism Contact Card */}
                <div className="lg:col-span-4 bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-white/80 shadow-md space-y-4">
                  <a
                    href={`tel:${t.s6.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-3 text-xs sm:text-sm text-[#1B3A29] hover:text-[#0D2619] transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#EBF0EA] flex items-center justify-center text-[#2D5A3E] group-hover:bg-[#0D2619] group-hover:text-white transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{t.s6.phone}</span>
                  </a>

                  <a
                    href={`mailto:${t.s6.email}`}
                    className="flex items-center gap-3 text-xs sm:text-sm text-[#1B3A29] hover:text-[#0D2619] transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#EBF0EA] flex items-center justify-center text-[#2D5A3E] group-hover:bg-[#0D2619] group-hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{t.s6.email}</span>
                  </a>

                  <div className="flex items-center gap-3 text-xs sm:text-sm text-[#1B3A29]">
                    <div className="w-8 h-8 rounded-full bg-[#EBF0EA] flex items-center justify-center text-[#2D5A3E]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{t.s6.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer currentLocale={locale} />
    </div>
  );
}
