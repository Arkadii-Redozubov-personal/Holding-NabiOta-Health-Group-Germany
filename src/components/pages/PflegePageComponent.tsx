"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  ShieldCheck,
  Home,
  Clock,
  Stethoscope,
  Pill,
  Building2,
  Accessibility,
  HeartHandshake,
  Brain,
  Headset,
  Check,
  Star,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Plus,
  Minus,
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

export function PflegePageComponent({ locale = "de" }: Props) {
  const isRu = locale === "ru";
  const isEn = locale === "en";

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Standard Header/Hero Data matching our site's PageHero design
  const heroData = {
    title: isRu ? "Сестринский уход & патронаж" : isEn ? "Nursing Care & HomeCare" : "Pflege & HomeCare",
    subtitle: isRu ? "Чуткая забота и профессиональное ведение" : isEn ? "Compassionate Care & Professional Support" : "Würdevolle Fürsorge im vertrauten Umfeld",
    eyebrow: isRu ? "УХОД И ПАТРОНАЖ" : isEn ? "NURSING & HOMECARE" : "AMBULANTE & STATIONÄRE PFLEGE",
    desc: isRu
      ? "NabiOta® HomeCare обеспечивает квалифицированный сестринский уход, медицинскую помощь и заботу в привычном домашнем окружении — с высочайшим уважением к достоинству человека и поддержкой его близких."
      : isEn
      ? "NabiOta® HomeCare delivers qualified outpatient nursing, clinical treatment care, and compassionate everyday support in the comfort of your home — prioritizing human dignity, safety, and peace of mind for families."
      : "Die NabiOta® HomeCare sichert eine verlässliche Pflegeversorgung zu Hause und in kooperierenden Einrichtungen. Unser Pflegeansatz basiert auf Respekt vor der Würde des Menschen, examinierter Fachkompetenz und nachhaltiger Entlastung der Angehörigen.",
  };

  const heroBadges = [
    {
      icon: <Award className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "100% Экзамен." : isEn ? "100% Certified" : "100% Examiniert",
      sub: isRu ? "Специалисты" : isEn ? "Nursing Staff" : "Fachpflegekräfte",
    },
    {
      icon: <Stethoscope className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "SGB V & XI" : isEn ? "All Insurances" : "SGB V & SGB XI",
      sub: isRu ? "Все кассы" : isEn ? "Covered Care" : "Zugelassener Partner",
    },
    {
      icon: <Clock className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "24/7 Забота" : isEn ? "24/7 Care" : "24/7 Betreuung",
      sub: isRu ? "На связи" : isEn ? "On-Call Support" : "Rufbereitschaft",
    },
  ];

  const t = {
    services: {
      eyebrow: isRu ? "НАШИ УСЛУГИ" : isEn ? "OUR SERVICES" : "UNSERE LEISTUNGEN",
      title: isRu
        ? "Наши услуги по уходу"
        : isEn
        ? "Our Nursing Care Services"
        : "Unsere Pflegedienstleistungen",
      desc: isRu
        ? "Мы предлагаем широкий спектр профессиональных услуг сестринского ухода, адаптированных к вашим потребностям — дома или в специализированном учреждении."
        : isEn
        ? "We offer a wide range of professional nursing services tailored to meet your unique needs, whether at home or in a care facility."
        : "Wir bieten ein breites Spektrum professioneller Pflegeleistungen, passgenau abgestimmt auf Ihre individuellen Bedürfnisse – zu Hause oder in der Einrichtung.",
      items: [
        {
          title: isRu ? "Квалифицированный уход" : isEn ? "Skilled Nursing Care" : "Behandlungspflege",
          desc: isRu
            ? "Перевязки, контроль медикаментов и процедуры."
            : isEn
            ? "Wound care, medication management, and more."
            : "Wundversorgung, Medikamentengabe und mehr.",
          icon: Stethoscope,
        },
        {
          title: isRu ? "Помощь в повседневных делах" : isEn ? "Personal Care Assistance" : "Grundpflege & Hilfe",
          desc: isRu
            ? "Помощь в гигиене, питании и ежедневных делах."
            : isEn
            ? "Help with daily activities and hygiene."
            : "Unterstützung bei täglichen Aktivitäten und Hygiene.",
          icon: Heart,
        },
        {
          title: isRu ? "Хронические заболевания" : isEn ? "Chronic Disease Management" : "Chroniker-Management",
          desc: isRu
            ? "Постоянный контроль при длительных диагнозах."
            : isEn
            ? "Ongoing support for long-term conditions."
            : "Kontinuierliche Betreuung chronischer Erkrankungen.",
          icon: Pill,
        },
        {
          title: isRu ? "Послебольничный уход" : isEn ? "Post-Hospital Care" : "Nachstationäre Pflege",
          desc: isRu
            ? "Комфортное восстановление дома или в центре."
            : isEn
            ? "Smooth recovery at home or in a facility."
            : "Reibungslose Genesung zu Hause oder im Zentrum.",
          icon: Home,
        },
        {
          title: isRu ? "Уход за пожилыми" : isEn ? "Elderly Care" : "Seniorenpflege",
          desc: isRu
            ? "Комфорт, безопасность и теплое общение."
            : isEn
            ? "Comfort, safety and companionship."
            : "Komfort, Sicherheit und herzliche Begleitung.",
          icon: Accessibility,
        },
        {
          title: isRu ? "Паллиативная помощь" : isEn ? "Palliative & End-of-Life Care" : "Palliativpflege",
          desc: isRu
            ? "Достоинство и покой в самые важные моменты."
            : isEn
            ? "Dignity and comfort when it matters most."
            : "Würde und Geborgenheit, wenn es am meisten zählt.",
          icon: HeartHandshake,
        },
        {
          title: isRu ? "Специализированный уход" : isEn ? "Specialized Care" : "Spezialisierte Pflege",
          desc: isRu
            ? "Для сложных клинических и реабилитационных задач."
            : isEn
            ? "For complex medical and rehabilitation needs."
            : "Für komplexe medizinische & Reha-Bedarfe.",
          icon: Brain,
        },
        {
          title: isRu ? "Круглосуточная помощь 24/7" : isEn ? "24/7 Nursing Support" : "24/7 Pflege-Support",
          desc: isRu
            ? "Всегда рядом, когда вам необходима помощь."
            : isEn
            ? "Always there when you need us."
            : "Immer für Sie da, wann immer Sie uns brauchen.",
          icon: Headset,
        },
      ],
    },
    whyChoose: {
      eyebrow: isRu ? "ПОЧЕМУ МЫ" : isEn ? "WHY CHOOSE US" : "WARUM WIR",
      title: isRu
        ? "Индивидуальная забота. Профессиональная поддержка."
        : isEn
        ? "Personalized Care. Professional Support."
        : "Persönliche Fürsorge. Professionelle Expertise.",
      desc: isRu
        ? "Мы убеждены, что каждый человек заслуживает уважительного, чуткого ухода, разработанного с учетом его личных потребностей. Наша опытная команда медсестер стремится повысить качество вашей жизни и помочь вам чувствовать себя комфортно и независимо."
        : isEn
        ? "We believe that every person deserves care that is respectful, compassionate and tailored to their individual needs. Our experienced nursing team is dedicated to improving your quality of life and helping you live with greater comfort and independence."
        : "Wir sind überzeugt, dass jeder Mensch eine respektvolle, einfühlsame und maßgeschneiderte Pflege verdient. Unser erfahrenes Pflegeteam setzt sich dafür ein, Ihre Lebensqualität spürbar zu verbessern und Ihnen mehr Komfort sowie Unabhängigkeit zu ermöglichen.",
      checks: [
        isRu ? "Высококвалифицированные сертифицированные медсёстры" : isEn ? "Highly trained and licensed nurses" : "Hochqualifizierte, examinierte Pflegefachkräfte",
        isRu ? "Индивидуальные планы ухода" : isEn ? "Individualized care plans" : "Individuell abgestimmte Pflegepläne",
        isRu ? "Фокус на безопасности, комфорте и достоинстве" : isEn ? "Focus on safety, comfort and dignity" : "Fokus auf Sicherheit, Geborgenheit und Würde",
        isRu ? "Открытый доверительный диалог с близкими" : isEn ? "Open communication with families" : "Transparente und enge Kommunikation mit Angehörigen",
      ],
    },
    approach: {
      eyebrow: isRu ? "НАШ ПОДХОД" : isEn ? "OUR APPROACH" : "UNSER PFLEGEANSATZ",
      title: isRu
        ? "Комплексный уход на каждом этапе жизни"
        : isEn
        ? "Holistic Care for Every Stage of Life"
        : "Ganzheitliche Pflege für jede Lebensphase",
      desc: isRu
        ? "От выздоровления и реабилитации до долгосрочной поддержки — наш сестринский уход гибко подстраивается под ваши потребности, неизменно с теплом и профессионализмом."
        : isEn
        ? "From recovery and rehabilitation to long-term support, our nursing care adapts to your needs — always with compassion and professionalism."
        : "Von der Genesung und Rehabilitation bis zur Langzeitbetreuung passt sich unsere Pflege flexibel Ihren Bedürfnissen an – stets mit Mitgefühl und höchster Fachkompetenz.",
      btn: isRu ? "Узнать больше об услугах" : isEn ? "Explore Our Services" : "Leistungen entdecken",
      stages: [
        {
          title: isRu ? "Уход за новорожденными" : isEn ? "Newborn Care" : "Neugeborenenpflege",
          desc: isRu
            ? "Бережная специализированная забота о малышах."
            : isEn
            ? "Specialized care for your little one."
            : "Spezialisierte Fürsorge für die Kleinsten.",
          image: "/images/nursing/stage-newborn.webp",
        },
        {
          title: isRu ? "Уход за пожилыми" : isEn ? "Senior Care" : "Seniorenpflege",
          desc: isRu
            ? "Поддержание независимости и благополучия."
            : isEn
            ? "Promoting independence and well-being."
            : "Förderung von Selbstständigkeit & Wohlbefinden.",
          image: "/images/diagnostik/patient-anna.webp",
        },
        {
          title: isRu ? "Реабилитационный уход" : isEn ? "Rehabilitation Care" : "Rehabilitationspflege",
          desc: isRu
            ? "Помощь в восстановлении и подвижности."
            : isEn
            ? "Support for recovery and mobility."
            : "Unterstützung für Genesung und Mobilität.",
          image: "/images/nursing/stage-rehab.webp",
        },
        {
          title: isRu ? "Послеоперационный уход" : isEn ? "Post-Surgical Care" : "Postoperative Pflege",
          desc: isRu
            ? "Безопасное и надежное восстановление дома."
            : isEn
            ? "Safe and effective recovery at home."
            : "Sichere und wirksame Erholung zu Hause.",
          image: "/images/nursing/stage-postsurgical.webp",
        },
      ],
    },
    commitment: {
      eyebrow: isRu ? "НАШЕ ОБЯЗАТЕЛЬСТВО" : isEn ? "OUR COMMITMENT" : "UNSER VERSPRECHEN",
      title: isRu
        ? "Больше чем уход — мы как семья"
        : isEn
        ? "More Than Just Care — We're Family"
        : "Mehr als nur Pflege – Wir sind Familie",
      desc: isRu
        ? "Мы строим долгосрочные доверительные отношения с клиентами и их семьями, обеспечивая не только профессиональную медицинскую помощь, но и искреннее эмоциональное спокойствие. Ваше благополучие — наш главный приоритет."
        : isEn
        ? "We build lasting relationships with our clients and their families, providing not just medical care, but emotional support and peace of mind. Your well-being is our top priority."
        : "Wir bauen dauerhafte, vertrauensvolle Beziehungen zu unseren Klienten und ihren Familien auf. Dabei bieten wir nicht nur fachärztliche Pflege, sondern auch emotionalen Halt und Sicherheit. Ihr Wohlbefinden steht an erster Stelle.",
      badges: [
        {
          title: isRu ? "Чуткая команда" : isEn ? "Compassionate Team" : "Einfühlsames Team",
          icon: Heart,
        },
        {
          title: isRu ? "Безопасность и доверие" : isEn ? "Safety & Trust" : "Sicherheit & Vertrauen",
          icon: ShieldCheck,
        },
        {
          title: isRu ? "Семейный подход" : isEn ? "Family Centered" : "Familienzentriert",
          icon: Users,
        },
        {
          title: isRu ? "Высокое качество" : isEn ? "Excellence in Care" : "Exzellente Pflege",
          icon: Star,
        },
      ],
    },
    testimonials: {
      eyebrow: isRu ? "ОТЗЫВЫ" : isEn ? "TESTIMONIALS" : "ERFAHRUNGSBERICHTE",
      title: isRu
        ? "Реальные истории. Реальная помощь."
        : isEn
        ? "Real Stories. Real Impact."
        : "Echte Geschichten. Echte Hilfe.",
      desc: isRu
        ? "Узнайте от близких пациентов, как забота нашей команды изменила их жизнь к лучшему."
        : isEn
        ? "Hear from families who have experienced the difference our nursing care makes."
        : "Erfahren Sie von Familien, welchen spürbaren Unterschied unsere Pflege im Alltag macht.",
      btnMore: isRu ? "Все отзывы +" : isEn ? "Read More Reviews +" : "Weitere Bewertungen +",
      cards: [
        {
          quote: isRu
            ? "«Медсёстры невероятно чуткие, профессиональные и заботливые. Они сделали сложный период намного легче для всей нашей семьи.»"
            : isEn
            ? "“The nurses are kind, professional and truly care. They made a difficult time so much easier for our family.”"
            : "„Die Pflegekräfte sind herzlich, professionell und aufrichtig engagiert. Sie haben unserer Familie eine schwere Zeit enorm erleichtert.“",
          name: "Sarah L.",
          role: isRu ? "Дочь пациентки" : isEn ? "Daughter of Patient" : "Tochter einer Patientin",
          avatar: "/images/nursing/avatar-sarah.webp",
        },
        {
          quote: isRu
            ? "«Превосходное обслуживание и забота. Благодаря этой замечательной команде моя мама чувствует себя дома в полной безопасности и уюте.»"
            : isEn
            ? "“Excellent service and support. My mother feels safer and happier at home thanks to their amazing team.”"
            : "„Hervorragender Service und Betreuung. Meine Mutter fühlt sich zu Hause dank dieses großartigen Teams wieder rundum sicher und wohl.“",
          name: "James T.",
          role: isRu ? "Сын пациента" : isEn ? "Son of Patient" : "Sohn eines Patienten",
          avatar: "/images/nursing/avatar-james.webp",
        },
        {
          quote: isRu
            ? "«Они относятся к тебе как к члену семьи. Забота, внимание и чуткость к деталям поистине исключительны.»"
            : isEn
            ? "“They treat you like family. The care and attention to detail are truly exceptional.”"
            : "„Hier wird man wie ein Familienmitglied behandelt. Die Zuwendung und Liebe zum Detail sind schlicht außergewöhnlich.“",
          name: "Linda M.",
          role: isRu ? "Пациентка" : isEn ? "Patient" : "Patientin",
          avatar: "/images/nursing/avatar-linda.webp",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: isRu ? "Часто задаваемые вопросы" : isEn ? "Frequently Asked Questions" : "Häufig gestellte Fragen",
      items: [
        {
          q: isRu ? "Какие виды страховок вы принимаете?" : isEn ? "What types of insurance do you accept?" : "Welche Versicherungen werden akzeptiert?",
          a: isRu
            ? "Мы работаем со всеми государственными и частными больничными и страховыми кассами Германии (по SGB V и SGB XI), а также предоставляем услуги на условиях прямого расчета."
            : isEn
            ? "We accept all statutory health and nursing insurance funds (gesetzliche Kranken- und Pflegekassen) in Germany under SGB V and SGB XI, private insurance carriers, and self-pay arrangements."
            : "Wir rechnen mit allen gesetzlichen Kranken- und Pflegekassen in Deutschland nach SGB V und SGB XI ab, sowie mit privaten Krankenversicherungen und Selbstzahlern.",
        },
        {
          q: isRu ? "Как оформить услугу сестринского ухода?" : isEn ? "How do I schedule a nursing care service?" : "Wie vereinbare ich einen Pflegedienst?",
          a: isRu
            ? "Вы можете связаться с нами по телефону, электронной почте или через форму на сайте. Мы согласуем удобное время для бесплатной первичной консультации и оценки потребностей дома."
            : isEn
            ? "You can easily schedule a consultation by phone, email, or through our website. We arrange a timely, free in-home assessment to evaluate your care needs."
            : "Kontaktieren Sie uns telefonisch, per E-Mail oder über unser Kontaktformular. Wir vereinbaren innerhalb von 24–48 Stunden ein kostenfreies Erstgespräch bei Ihnen zu Hause.",
        },
        {
          q: isRu ? "Могу ли я выбрать определенную медсестру?" : isEn ? "Can I choose a specific nurse?" : "Kann ich eine bestimmte Pflegekraft auswählen?",
          a: isRu
            ? "Да, наша модель первичного ухода (Bezugspflege) направлена на то, чтобы за вами была закреплена постоянная команда специалистов для доверительных отношений."
            : isEn
            ? "Yes, our primary nursing model (Bezugspflege) prioritizes assigning familiar, dedicated caregivers to ensure continuity, comfort, and trusting relationships."
            : "Ja, unser Bezugspflegesystem sorgt dafür, dass feste, vertraute Pflegekräfte für Sie zuständig sind, um ein enges Vertrauensverhältnis aufzubauen.",
        },
        {
          q: isRu ? "Предоставляете ли вы круглосуточный уход?" : isEn ? "Do you provide 24/7 care?" : "Bieten Sie eine 24/7-Betreuung an?",
          a: isRu
            ? "Да, мы предоставляем круглосуточную экстренную телефонную поддержку, а также 24-часовой индивидуальный уход на дому в зависимости от медицинских показаний."
            : isEn
            ? "Yes, we offer 24/7 emergency on-call support as well as round-the-clock intensive home nursing and palliative support depending on individual medical needs."
            : "Ja, wir bieten eine 24-Stunden-Rufbereitschaft sowie kontinuierliche Tag- und Nachtpflege für intensiv- oder palliativmedizinische Bedarfe an.",
        },
        {
          q: isRu ? "Имеет ли персонал лицензии и страховку?" : isEn ? "Is your staff licensed and insured?" : "Ist das Personal examiniert und versichert?",
          a: isRu
            ? "Все наши медсёстры — это дипломированные специалисты государственного образца с непрерывным повышением квалификации и полным профессиональным страхованием."
            : isEn
            ? "Every nurse in our team is a fully licensed, state-certified specialist with ongoing training and comprehensive professional liability coverage."
            : "Unser gesamtes Pflegepersonal besteht aus staatlich examinierten Pflegefachkräften mit kontinuierlicher Weiterbildung und vollständigem Versicherungsschutz.",
        },
      ],
    },
    cta: {
      eyebrow: isRu ? "ДАВАЙТЕ НАЧНЕМ" : isEn ? "LET'S GET STARTED" : "JETZT STARTEN",
      title: isRu ? "Ваше здоровье. Наш приоритет." : isEn ? "Your Health. Our Priority." : "Ihre Gesundheit. Unsere Priorität.",
      desc: isRu
        ? "Свяжитесь с нами сегодня, чтобы узнать больше об услугах сестринского ухода или назначить первичную консультацию."
        : isEn
        ? "Contact us today to learn more about our nursing care services or to schedule a consultation."
        : "Kontaktieren Sie uns noch heute, um mehr über unsere Pflegedienste zu erfahren oder eine Beratung zu vereinbaren.",
      btn: isRu ? "Связаться с нами" : isEn ? "Contact Us" : "Kontakt aufnehmen",
      phone: "+49 2161 4794560",
      email: "info@nabiota-health-group.de",
      location: isRu ? "Мёнхенгладбах, Германия" : isEn ? "Mönchengladbach, Germany" : "Mönchengladbach, Deutschland",
      stamp1: isRu ? "Забота сегодня" : isEn ? "Caring Today" : "Fürsorge heute",
      stamp2: isRu ? "для здорового" : isEn ? "for a Healthier" : "für ein gesünderes",
      stamp3: isRu ? "завтра ~" : isEn ? "Tomorrow ~" : "Morgen ~",
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F5] text-forest-950 font-sans selection:bg-gold-500/20">
      {/* ── 1. GLOBAL SITE NAVIGATION HEADER (kept as-is) ── */}
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
        imageSrc="/images/areas/pflege.webp"
        imageAlt="NabiOta Health Group Pflege & HomeCare"
        badges={heroBadges}
      />

      <main className="flex-1 bg-[#FAF9F5]">
        {/* ========================================================================= */}
        {/* SECTION 1: WHY CHOOSE US - Personalized Care (FIRST SECTION, Photo 4)    */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-20 bg-[#FAF9F5] relative overflow-hidden border-b border-[#EAE3D5]">
          {/* Botanical green foliage on far right (Matching Photo 4) */}
          <div className="absolute right-0 top-0 bottom-0 w-64 sm:w-80 md:w-96 pointer-events-none opacity-85 z-0 select-none overflow-hidden">
            <Image
              src="/images/areas/botanical-branch-clean.webp"
              alt="Botanical Foliage"
              fill
              className="object-contain object-right"
              priority
            />
          </div>

          <Container size="wide" className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Image of Nurse caring for senior */}
              <div className="lg:col-span-6 relative aspect-[16/11] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-forest-900/10">
                <Image
                  src="/images/nursing/why-choose-nurse.webp"
                  alt={t.whyChoose.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Right Column: Copy & Checklist */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#9B7C38] block font-sans">
                  {t.whyChoose.eyebrow}
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#0F2A1D] font-normal leading-tight">
                  {t.whyChoose.title}
                </h2>

                <p className="text-sm sm:text-base text-[#4A5D52] leading-relaxed max-w-xl">
                  {t.whyChoose.desc}
                </p>

                {/* 4 Checklist Items with Dark Green Badges */}
                <div className="space-y-3.5 pt-2">
                  {t.whyChoose.checks.map((checkText, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#133924] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-[#1E382A]">
                        {checkText}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: OUR COMMITMENT (FULL-WIDTH EDGE-TO-EDGE, Matching Photo 5)    */}
        {/* ========================================================================= */}
        <section className="w-full bg-[#0B2516] text-white relative overflow-hidden border-y border-[#D5B878]/30">
          {/* Rich Botanical Background across the dark section */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <Image
              src="/images/bacground.webp"
              alt="Botanical Texture"
              fill
              className="object-cover object-center opacity-35 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B2516]/95 via-[#0B2516]/85 to-[#0B2516]/60" />
          </div>

          <div className="relative z-10 w-full flex flex-col lg:flex-row items-stretch">
            {/* Left: Nurse in green scrub with senior woman - completely seamless transition */}
            <div className="w-full lg:w-[36%] xl:w-[38%] relative min-h-[240px] sm:min-h-[280px] lg:min-h-[320px] xl:min-h-[340px] overflow-hidden shrink-0">
              <div 
                className="absolute inset-0 w-full h-full"
                style={{
                  WebkitMaskImage: 'linear-gradient(to right, black 65%, transparent 100%)',
                  maskImage: 'linear-gradient(to right, black 65%, transparent 100%)'
                }}
              >
                <Image
                  src="/images/nursing/commitment-nurse.webp"
                  alt={t.commitment.title}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              {/* Multi-stop smooth gradient blend into dark forest green */}
              <div className="hidden lg:block absolute inset-y-0 right-0 w-44 xl:w-56 bg-gradient-to-r from-transparent via-[#0B2516]/70 to-[#0B2516] pointer-events-none z-10" />
              <div className="lg:hidden absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0B2516] to-transparent pointer-events-none z-10" />
            </div>

            {/* Right: Copy & 4 Circular Gold Icons matching Photo 5 */}
            <div className="w-full lg:w-[64%] xl:w-[62%] p-6 sm:p-8 lg:p-8 lg:pl-10 space-y-4 relative z-10">
              <span className="text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#ECCF96] block font-sans">
                {t.commitment.eyebrow}
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] text-white font-normal leading-tight">
                {t.commitment.title}
              </h2>

              <p className="text-xs sm:text-[13px] md:text-[13.5px] text-[#D4E2D8] leading-relaxed max-w-2xl font-light">
                {t.commitment.desc}
              </p>

              {/* 4 Gold Circular Badges matching Photo 5 */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-white/10 max-w-2xl">
                {t.commitment.badges.map((b, idx) => {
                  const IconComp = b.icon;
                  return (
                    <div key={idx} className="flex flex-col items-center text-center space-y-1.5 group">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#D5B878]/70 bg-white/5 flex items-center justify-center text-[#ECCF96] transition-transform duration-300 group-hover:scale-105 shadow-[0_0_12px_rgba(213,184,120,0.12)]">
                        <IconComp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.6]" />
                      </div>
                      <span className="text-[11.5px] sm:text-xs font-medium text-[#F4EFE6] leading-tight">
                        {b.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: OUR NURSING CARE SERVICES (8 Cards Grid)                       */}
        {/* ========================================================================= */}
        <section id="services" className="py-14 sm:py-20 bg-[#FAF9F5]">
          <Container size="wide">
            {/* Header */}
            <div className="max-w-2xl mb-12 sm:mb-14">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#9B7C38] block font-sans mb-2">
                {t.services.eyebrow}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#0F2A1D] font-normal leading-tight mb-3">
                {t.services.title}
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#4A5D52] leading-relaxed">
                {t.services.desc}
              </p>
            </div>

            {/* 8 Cards: 4 columns x 2 rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {t.services.items.map((svc, idx) => {
                const IconComp = svc.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EBE4D8] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#EBF0EA] text-[#244E33] flex items-center justify-center mb-5 group-hover:bg-[#0D2619] group-hover:text-white transition-colors duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-base sm:text-lg font-medium text-[#0F2A1D] mb-2 leading-snug">
                      {svc.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#5A6E63] leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: OUR APPROACH (Holistic Care for Every Stage of Life)           */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-20 bg-[#FAF9F5] border-t border-[#EAE3D5]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              {/* Left Column: Heading & CTA */}
              <div className="lg:col-span-5 space-y-5">
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#9B7C38] block font-sans">
                  {t.approach.eyebrow}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#0F2A1D] font-normal leading-tight">
                  {t.approach.title}
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-[#4A5D52] leading-relaxed">
                  {t.approach.desc}
                </p>
                <div className="pt-2">
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF9F5] hover:bg-white text-[#0D2619] border border-[#C8B896] text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm group"
                  >
                    <span>{t.approach.btn}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Right Column: 4 Stages Horizontal Cards */}
              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {t.approach.stages.map((stg, idx) => (
                  <div key={idx} className="flex flex-col space-y-2.5">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-sm border border-[#E2DBD0]">
                      <Image
                        src={stg.image}
                        alt={stg.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-xs sm:text-sm font-semibold text-[#0F2A1D] leading-tight mb-1">
                        {stg.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[#5A6E63] leading-snug">
                        {stg.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: TESTIMONIALS (ENLARGED REVIEWS)                                */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 bg-[#FAF9F5] border-t border-[#EAE3D5]">
          <Container size="wide">
            {/* Header with Read More button on right */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14">
              <div className="max-w-2xl space-y-2">
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#9B7C38] block font-sans">
                  {t.testimonials.eyebrow}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#0F2A1D] font-normal leading-tight">
                  {t.testimonials.title}
                </h2>
                <p className="text-sm sm:text-base text-[#4A5D52]">
                  {t.testimonials.desc}
                </p>
              </div>

              <Link
                href={`/${locale}/contact`}
                className="self-start sm:self-auto inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-white hover:bg-[#FAF9F5] text-[#0D2619] border border-[#C8B896] text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm"
              >
                {t.testimonials.btnMore}
              </Link>
            </div>

            {/* 3 ENLARGED Testimonial Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.testimonials.cards.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EBE4D8] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
                >
                  {/* Top: 5 Gold Stars & Quote */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, starIdx) => (
                        <Star key={starIdx} className="w-4 h-4 fill-amber-500" />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base md:text-[17px] text-[#1E382A] font-serif italic leading-relaxed">
                      {item.quote}
                    </p>
                  </div>

                  {/* Bottom: Avatar & Name */}
                  <div className="pt-5 border-t border-[#F2ECE1] flex items-center gap-4">
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#D5B878]">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-base sm:text-lg font-bold text-[#0F2A1D] leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#5B6E63] mt-0.5">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: FAQ (EDGE-TO-EDGE, Matching Photo 2)                           */}
        {/* ========================================================================= */}
        <section className="w-full bg-[#FAF9F5] border-t border-[#EAE3D5] relative overflow-hidden">
          <div className="w-full flex flex-col lg:flex-row items-stretch">
            {/* Left Photo: Flush to the left screen edge with smooth fade & blur on the right */}
            <div className="w-full lg:w-[40%] xl:w-[38%] relative min-h-[260px] sm:min-h-[300px] lg:min-h-[380px] shrink-0 overflow-hidden">
              <Image
                src="/images/nursing/faq-nurse.webp"
                alt={t.faq.title}
                fill
                className="object-cover object-center"
              />
              {/* Right edge blur and smooth fade into #FAF9F5 */}
              <div className="hidden lg:block absolute inset-y-0 right-0 w-32 xl:w-48 bg-gradient-to-r from-transparent via-[#FAF9F5]/70 to-[#FAF9F5] backdrop-blur-[3px] pointer-events-none z-10" />
              <div className="lg:hidden absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#FAF9F5] via-[#FAF9F5]/80 to-transparent backdrop-blur-[2px] pointer-events-none z-10" />
            </div>

            {/* Right: Accordion content */}
            <div className="w-full lg:w-[60%] xl:w-[62%] py-8 sm:py-10 lg:py-10 px-6 sm:px-10 lg:px-12 xl:px-16 flex flex-col justify-center">
              <div className="max-w-2xl">
                <span className="text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9B7C38] block font-sans mb-1.5">
                  {t.faq.eyebrow}
                </span>

                <h2 className="font-serif text-2xl sm:text-3xl text-[#0F2A1D] font-normal leading-tight mb-4">
                  {t.faq.title}
                </h2>

                <div className="divide-y divide-[#E6E0D3] border-y border-[#E6E0D3]">
                  {t.faq.items.map((item, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div key={idx} className="py-2.5 sm:py-3">
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                          className="w-full flex items-center justify-between gap-4 text-left group"
                        >
                          <span className="font-serif text-xs sm:text-[13.5px] md:text-sm text-[#153424] font-medium group-hover:text-[#0D2619] transition-colors">
                            {item.q}
                          </span>
                          <span className="w-5 h-5 rounded-full flex items-center justify-center text-[#285038] group-hover:bg-[#EBF0EA] transition-colors flex-shrink-0">
                            {isOpen ? (
                              <Minus className="w-3.5 h-3.5" />
                            ) : (
                              <Plus className="w-3.5 h-3.5" />
                            )}
                          </span>
                        </button>

                        {isOpen && (
                          <div className="pt-2 pr-6 text-xs sm:text-[13px] text-[#4E6256] leading-relaxed">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: BOTTOM CTA BANNER (FULL-WIDTH EDGE-TO-EDGE, Matching Request)   */}
        {/* ========================================================================= */}
        <section className="w-full relative overflow-hidden bg-gradient-to-r from-[#F6F4ED] via-[#F2EDE2] to-[#EAE3D3] border-t border-[#DECDB5]/60">
          {/* Background Hands Image with gentle gradient fade */}
          <div className="absolute inset-y-0 right-0 w-full lg:w-3/5 opacity-80 lg:opacity-100 pointer-events-none">
            <Image
              src="/images/nursing/cta-hands-bg.webp"
              alt="Holding hands"
              fill
              className="object-cover object-right"
            />
            {/* Soft gradient mask on the left */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F6F4ED] via-[#F6F4ED]/80 to-transparent lg:w-1/2" />
          </div>

          {/* Floating stamp badge top right: "Caring Today for a Healthier Tomorrow ~ ♡" */}
          <div className="absolute top-5 right-5 sm:top-8 sm:right-10 z-20 bg-white/85 backdrop-blur-md px-4 py-3 sm:px-6 sm:py-4 rounded-3xl shadow-lg border border-white/80 rotate-[-2deg] flex flex-col items-center justify-center">
            <p className="font-serif italic text-xs sm:text-sm font-semibold text-[#0E281C] text-center leading-tight">
              {t.cta.stamp1}
              <br />
              {t.cta.stamp2}
              <br />
              {t.cta.stamp3}
            </p>
            <Heart className="w-3.5 h-3.5 text-[#0E281C] fill-[#0E281C]/20 mt-1" />
          </div>

          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 py-12 sm:py-16 relative z-10">
            {/* Content Box */}
            <div className="max-w-xl space-y-5">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#9B7C38] block font-sans">
                {t.cta.eyebrow}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#0F2A1D] font-normal leading-tight">
                {t.cta.title}
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-[#4A5D52] leading-relaxed">
                {t.cta.desc}
              </p>

              <div>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0D2619] hover:bg-[#163D29] text-white text-xs sm:text-sm font-medium transition-all duration-300 shadow-md group"
                >
                  <span>{t.cta.btn}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Bottom Contact Details Bar */}
            <div className="mt-10 pt-5 border-t border-[#DECDB5]/60 flex flex-wrap items-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#1B3A29] font-medium">
              <a
                href={`tel:${t.cta.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2.5 hover:text-[#0D2619] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#2D5A3E]" />
                <span>{t.cta.phone}</span>
              </a>

              <a
                href={`mailto:${t.cta.email}`}
                className="flex items-center gap-2.5 hover:text-[#0D2619] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#2D5A3E]" />
                <span>{t.cta.email}</span>
              </a>

              <div className="flex items-center gap-2.5 text-[#2C4C39]">
                <MapPin className="w-4 h-4 text-[#2D5A3E]" />
                <span>{t.cta.location}</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer currentLocale={locale} />
    </div>
  );
}
