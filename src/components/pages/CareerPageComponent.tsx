"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { HeroBadges } from "@/components/ui/HeroBadges";
import { SupportedLocale } from "@/lib/i18n";
import {
  Heart,
  GraduationCap,
  Users,
  Clock,
  Sparkles,
  ShieldCheck,
  Stethoscope,
  Activity,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sprout,
  CheckCircle2,
  Upload,
  FileText,
  Send,
} from "lucide-react";

interface CareerPageComponentProps {
  locale?: SupportedLocale;
}

export function CareerPageComponent({ locale = "de" }: CareerPageComponentProps) {
  // Testimonials state for interactive slider
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Application form state
  const [selectedPosition, setSelectedPosition] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleSelectJob = (title: string) => {
    setSelectedPosition(title);
    const element = document.getElementById("bewerbung");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  const t = {
    de: {
      hero: {
        eyebrow: "KARRIERE",
        titlePrefix: "Gemeinsam",
        titleMid: "für eine gesündere",
        titleHighlight: "Zukunft.",
        description:
          "Bei NabiOta® Health Group Germany glauben wir an die Kraft engagierter Menschen. Werden Sie Teil unseres Teams und gestalten Sie die Zukunft der Gesundheitsversorgung aktiv mit.",
        cta: "Offene Stellen entdecken",
        floatingQuote: "„Mehr als ein Job – eine sinnvolle Aufgabe.“",
        badge1Title: "Starkes Team",
        badge1Sub: "und Zusammenhalt",
        badge2Title: "Entwicklung",
        badge2Sub: "und Förderung",
        badge3Title: "Wertschätzung",
        badge3Sub: "auf Augenhöhe",
      },
      mission: {
        eyebrow: "UNSERE MISSION",
        title: "Mehr als nur Gesundheitsversorgung.",
        desc: "Wir bei NabiOta® glauben an eine ganzheitliche Gesundheitsversorgung, die den Menschen in den Mittelpunkt stellt. Unsere Mission ist es, hochwertige medizinische Leistungen, innovative Therapien und ein unterstützendes Netzwerk zur Verfügung zu stellen.",
        role: "Geschäftsführung",
        badge: "Wir fördern Talente, weil sie den Unterschied machen.",
      },
      benefits: {
        eyebrow: "WARUM NABIOTA®",
        title: "Ihre Vorteile bei uns.",
        desc: "Wir bieten Ihnen ein modernes Arbeitsumfeld, in dem Sie sich persönlich und beruflich weiterentwickeln können.",
        items: [
          {
            icon: Heart,
            title: "Sinnstiftende Arbeit",
            text: "Sie leisten einen direkten Beitrag zur Gesundheit und Lebensqualität von Menschen.",
          },
          {
            icon: GraduationCap,
            title: "Weiterbildung & Entwicklung",
            text: "Wir unterstützen Ihre fachliche und persönliche Weiterentwicklung mit individuellen Angeboten.",
          },
          {
            icon: Users,
            title: "Starkes Team",
            text: "Ein wertschätzendes Miteinander und offene Kommunikation sind bei uns selbstverständlich.",
          },
          {
            icon: Clock,
            title: "Flexible Arbeitsmodelle",
            text: "Wir ermöglichen eine ausgewogene Work-Life-Balance.",
          },
          {
            icon: Sparkles,
            title: "Moderne Infrastruktur",
            text: "Profitieren Sie von hochwertiger Ausstattung und digitalen Lösungen.",
          },
          {
            icon: ShieldCheck,
            title: "Attraktive Vergütung",
            text: "Wir bieten faire und leistungsgerechte Konditionen.",
          },
        ],
      },
      jobs: {
        eyebrow: "AKTUELLE STELLENANGEBOTE",
        title: "Finden Sie Ihren Platz in unserem Team.",
        desc: "Entdecken Sie spannende Karrieremöglichkeiten in verschiedenen Fachbereichen und an unterschiedlichen Standorten.",
        allButton: "Alle Stellenangebote anzeigen",
        positions: [
          {
            icon: Heart,
            title: "Pflegefachkraft (m/w/d)",
            facility: "NabiOta® Klinik Berlin",
            type: "Vollzeit / Teilzeit",
          },
          {
            icon: Stethoscope,
            title: "Arzt (m/w/d) Allgemeinmedizin",
            facility: "NabiOta® Gesundheitszentrum München",
            type: "Vollzeit",
          },
          {
            icon: Activity,
            title: "Therapeut (m/w/d) Physiotherapie",
            facility: "NabiOta® Reha-Zentrum Hamburg",
            type: "Teilzeit",
          },
          {
            icon: GraduationCap,
            title: "Auszubildende (m/w/d) Pflege",
            facility: "NabiOta® Pflegeheim Köln",
            type: "Vollzeit",
          },
        ],
      },
      culture: {
        eyebrow: "UNSERE KULTUR",
        title: "Menschen. Werte. Miteinander.",
        desc: "Wir schaffen eine Arbeitsumgebung, in der Respekt, Vertrauen und Teamgeist gelebt werden. Bei NabiOta® zählen nicht nur Qualifikationen, sondern vor allem Menschen, die etwas bewegen wollen.",
        badgeTitle: "Gemeinsam wachsen.",
        badgeSub: "Leben verbessern.",
      },
      testimonials: [
        {
          quote:
            "„Bei NabiOta® habe ich nicht nur einen Job gefunden, sondern eine Aufgabe, die mich jeden Tag erfüllt. Das Team ist unglaublich unterstützend, und ich kann mich stetig weiterentwickeln.“",
          author: "Anna Müller",
          role: "Pflegefachkraft, NabiOta® Klinik Berlin",
          avatar: "/images/careers/anna-mueller.webp",
        },
        {
          quote:
            "„Die interdisziplinäre Zusammenarbeit und der Fokus auf Spitzenmedizin bei gleichzeitiger Menschlichkeit machen NabiOta® zu einem einzigartigen Arbeitsplatz.“",
          author: "Dr. med. Thomas Weber",
          role: "Facharzt Allgemeinmedizin, NabiOta® München",
          avatar: "/images/careers/anna-mueller.webp",
        },
        {
          quote:
            "„Moderne Therapiekonzepte, beste technische Ausstattung und flexible Arbeitszeitmodelle – genau so stelle ich mir eine zukunftsorientierte Reha vor.“",
          author: "Sarah Lindemann",
          role: "Leitende Physiotherapeutin, NabiOta® Hamburg",
          avatar: "/images/careers/anna-mueller.webp",
        },
      ],
      cta: {
        eyebrow: "BEREIT FÜR IHRE ZUKUNFT?",
        title: "Werden Sie Teil von NabiOta®.",
        desc: "Entdecken Sie unsere aktuellen Stellenangebote und starten Sie Ihre Karriere in einem wachsenden Unternehmen.",
        button: "Jetzt bewerben",
      },
      applyForm: {
        eyebrow: "DIREKT BEWERBEN",
        title: "Starten Sie Ihre Zukunft bei uns.",
        desc: "Senden Sie uns Ihre Unterlagen oder bewerben Sie sich schnell und unkompliziert. Wir melden uns zeitnah bei Ihnen.",
        nameLabel: "Vor- und Nachname",
        namePlaceholder: "z.B. Maria Schmidt",
        emailLabel: "E-Mail-Adresse",
        emailPlaceholder: "ihre.email@beispiel.de",
        phoneLabel: "Telefonnummer",
        phonePlaceholder: "+49 (0) 123 456789",
        positionLabel: "Gewünschte Position",
        positionPlaceholder: "Position wählen...",
        positions: [
          "Pflegefachkraft (m/w/d)",
          "Arzt (m/w/d) Allgemeinmedizin",
          "Therapeut (m/w/d) Physiotherapie",
          "Auszubildende (m/w/d) Pflege",
          "Initiativbewerbung",
        ],
        messageLabel: "Ihre Nachricht (optional)",
        messagePlaceholder: "Erzählen Sie uns kurz von sich und Ihren Qualifikationen...",
        uploadLabel: "Lebenslauf / Dokumente anhängen (PDF, DOCX bis 10MB)",
        uploadHint: "Datei auswählen oder hierher ziehen",
        privacy: "Ich willige in die Verarbeitung meiner personenbezogenen Daten zum Zwecke des Bewerbungsverfahrens ein.",
        submitBtn: "Bewerbung absenden",
        submitting: "Wird gesendet...",
        successTitle: "Vielen Dank für Ihre Bewerbung!",
        successDesc: "Ihre Unterlagen sind erfolgreich bei unserem Personalteam eingegangen. Wir prüfen Ihre Bewerbung sorgfältig und melden uns in Kürze bei Ihnen.",
        resetBtn: "Weitere Bewerbung einreichen",
      },
    },
    en: {
      hero: {
        eyebrow: "CAREER",
        titlePrefix: "Together",
        titleMid: "for a Healthier",
        titleHighlight: "Future.",
        description:
          "At NabiOta® Health Group Germany, we believe in the power of dedicated people. Become part of our team and actively shape the future of healthcare.",
        cta: "Explore Open Positions",
        floatingQuote: "“More than a job – a meaningful mission.”",
        badge1Title: "Strong Team",
        badge1Sub: "and culture",
        badge2Title: "Growth",
        badge2Sub: "and education",
        badge3Title: "Appreciation",
        badge3Sub: "at every level",
      },
      mission: {
        eyebrow: "OUR MISSION",
        title: "More than just Healthcare.",
        desc: "At NabiOta®, we believe in holistic healthcare that puts people first. Our mission is to provide high-quality medical services, innovative therapies, and a supportive network.",
        role: "Executive Management",
        badge: "We nurture talents because they make the difference.",
      },
      benefits: {
        eyebrow: "WHY NABIOTA®",
        title: "Your Benefits with Us.",
        desc: "We offer you a modern working environment where you can develop both personally and professionally.",
        items: [
          {
            icon: Heart,
            title: "Meaningful Work",
            text: "You make a direct contribution to the health and quality of life of people.",
          },
          {
            icon: GraduationCap,
            title: "Continuous Education & Growth",
            text: "We support your professional and personal development with customized programs.",
          },
          {
            icon: Users,
            title: "Strong Team Spirit",
            text: "Appreciative collaboration and transparent communication are standard with us.",
          },
          {
            icon: Clock,
            title: "Flexible Working Models",
            text: "We enable a balanced work-life balance for our team.",
          },
          {
            icon: Sparkles,
            title: "Modern Infrastructure",
            text: "Benefit from high-end medical equipment and advanced digital workflows.",
          },
          {
            icon: ShieldCheck,
            title: "Attractive Compensation",
            text: "We offer fair and performance-oriented remuneration packages.",
          },
        ],
      },
      jobs: {
        eyebrow: "CURRENT VACANCIES",
        title: "Find Your Place in Our Team.",
        desc: "Discover exciting career opportunities across various specialized departments and multiple locations.",
        allButton: "View All Job Openings",
        positions: [
          {
            icon: Heart,
            title: "Registered Nurse (m/f/d)",
            facility: "NabiOta® Clinic Berlin",
            type: "Full-Time / Part-Time",
          },
          {
            icon: Stethoscope,
            title: "General Practitioner / Physician (m/f/d)",
            facility: "NabiOta® Health Center Munich",
            type: "Full-Time",
          },
          {
            icon: Activity,
            title: "Physiotherapist (m/f/d)",
            facility: "NabiOta® Rehabilitation Center Hamburg",
            type: "Part-Time",
          },
          {
            icon: GraduationCap,
            title: "Apprentice in Nursing Care (m/f/d)",
            facility: "NabiOta® Care Facility Cologne",
            type: "Full-Time",
          },
        ],
      },
      culture: {
        eyebrow: "OUR CULTURE",
        title: "People. Values. Together.",
        desc: "We cultivate a workplace where respect, trust, and teamwork thrive. At NabiOta®, what matters most are not just credentials, but individuals eager to make an impact.",
        badgeTitle: "Growing together.",
        badgeSub: "Improving lives.",
      },
      testimonials: [
        {
          quote:
            "“At NabiOta®, I found not just a job, but a purpose that fulfills me every single day. The team is genuinely supportive, and I have endless opportunities to grow.”",
          author: "Anna Müller",
          role: "Registered Nurse, NabiOta® Clinic Berlin",
          avatar: "/images/careers/anna-mueller.webp",
        },
        {
          quote:
            "“Interdisciplinary collaboration and clinical excellence combined with genuine human warmth make NabiOta® a truly exceptional workplace.”",
          author: "Dr. med. Thomas Weber",
          role: "Senior Physician, NabiOta® Munich",
          avatar: "/images/careers/anna-mueller.webp",
        },
        {
          quote:
            "“Modern therapeutic approaches, cutting-edge facilities, and flexible shift planning – exactly what forward-thinking healthcare should look like.”",
          author: "Sarah Lindemann",
          role: "Lead Physiotherapist, NabiOta® Hamburg",
          avatar: "/images/careers/anna-mueller.webp",
        },
      ],
      cta: {
        eyebrow: "READY FOR YOUR FUTURE?",
        title: "Become Part of NabiOta®.",
        desc: "Explore our current career opportunities and take the next step in a growing, innovative healthcare group.",
        button: "Apply Now",
      },
      applyForm: {
        eyebrow: "APPLY DIRECTLY",
        title: "Start Your Future with NabiOta®.",
        desc: "Submit your documents or send a quick application in just a few clicks. Our recruitment team will get back to you shortly.",
        nameLabel: "Full Name",
        namePlaceholder: "e.g. Maria Schmidt",
        emailLabel: "Email Address",
        emailPlaceholder: "your.email@example.com",
        phoneLabel: "Phone Number",
        phonePlaceholder: "+49 (0) 123 456789",
        positionLabel: "Desired Position",
        positionPlaceholder: "Select position...",
        positions: [
          "Registered Nurse (m/f/d)",
          "General Practitioner / Physician (m/f/d)",
          "Physiotherapist (m/f/d)",
          "Apprentice in Nursing Care (m/f/d)",
          "General Application",
        ],
        messageLabel: "Your Message (Optional)",
        messagePlaceholder: "Briefly tell us about your experience and qualifications...",
        uploadLabel: "Upload CV / Resume (PDF, DOCX up to 10MB)",
        uploadHint: "Select file or drag here",
        privacy: "I consent to the processing of my personal data for the purpose of the application process.",
        submitBtn: "Submit Application",
        submitting: "Submitting...",
        successTitle: "Thank You for Your Application!",
        successDesc: "Your application has been received. Our recruitment team is reviewing your profile and will get in touch with you soon.",
        resetBtn: "Submit Another Application",
      },
    },
    ru: {
      hero: {
        eyebrow: "КАРЬЕРА",
        titlePrefix: "Вместе",
        titleMid: "ради более здорового",
        titleHighlight: "Будущего.",
        description:
          "В NabiOta® Health Group Germany мы верим в силу увлеченных и преданных своему делу людей. Станьте частью нашей команды и активно формируйте будущее здравоохранения.",
        cta: "Смотреть открытые вакансии",
        floatingQuote: "«Больше чем просто работа — благородная миссия.»",
        badge1Title: "Сильная команда",
        badge1Sub: "и единство",
        badge2Title: "Развитие",
        badge2Sub: "и поддержка",
        badge3Title: "Забота",
        badge3Sub: "и признание",
      },
      mission: {
        eyebrow: "НАША МИССИЯ",
        title: "Больше чем медицинское обслуживание.",
        desc: "В NabiOta® мы верим в комплексную медицину, где в центре внимания всегда находится человек. Наша миссия — предоставлять высококачественные медицинские услуги, передовые терапевтические решения и поддерживающую экспертную среду.",
        role: "Руководство холдинга",
        badge: "Мы развиваем таланты, ведь именно люди меняют мир к лучшему.",
      },
      benefits: {
        eyebrow: "ПОЧЕМУ NABIOTA®",
        title: "Ваши преимущества у нас.",
        desc: "Мы предлагаем современную рабочую среду, в которой вы сможете всесторонне развиваться личностно и профессионально.",
        items: [
          {
            icon: Heart,
            title: "Значимая и благородная работа",
            text: "Вы вносите прямой вклад в здоровье, благополучие и качество жизни людей.",
          },
          {
            icon: GraduationCap,
            title: "Обучение и карьерный рост",
            text: "Мы поддерживаем ваше непрерывное повышение квалификации персональными программами.",
          },
          {
            icon: Users,
            title: "Сильная и дружная команда",
            text: "Взаимное уважение, открытая коммуникация и надежное плечо коллег — наш стандарт.",
          },
          {
            icon: Clock,
            title: "Гибкие графики работы",
            text: "Мы обеспечиваем гармоничный баланс между работой и личной жизнью.",
          },
          {
            icon: Sparkles,
            title: "Современная инфраструктура",
            text: "Работайте на первоклассном медицинском оборудовании и с передовыми цифровыми сервисами.",
          },
          {
            icon: ShieldCheck,
            title: "Достойное вознаграждение",
            text: "Мы гарантируем прозрачные, справедливые и конкурентоспособные условия труда.",
          },
        ],
      },
      jobs: {
        eyebrow: "АКТУАЛЬНЫЕ ВАКАНСИИ",
        title: "Найдите свое место в нашей команде.",
        desc: "Откройте для себя перспективные карьерные возможности в различных медицинских направлениях и филиалах.",
        allButton: "Смотреть все вакансии",
        positions: [
          {
            icon: Heart,
            title: "Дипломированная медсестра / медбрат (m/w/d)",
            facility: "NabiOta® Клиника Берлин",
            type: "Полная занятость / Частичная",
          },
          {
            icon: Stethoscope,
            title: "Врач общей практики / Терапевт (m/w/d)",
            facility: "NabiOta® Медицинский центр Мюнхен",
            type: "Полная занятость",
          },
          {
            icon: Activity,
            title: "Физиотерапевт / Реабилитолог (m/w/d)",
            facility: "NabiOta® Реабилитационный центр Гамбург",
            type: "Частичная занятость",
          },
          {
            icon: GraduationCap,
            title: "Обучение сестринскому делу (Auszubildende m/w/d)",
            facility: "NabiOta® Дом ухода Кёльн",
            type: "Полная занятость",
          },
        ],
      },
      culture: {
        eyebrow: "НАША КУЛЬТУРА",
        title: "Люди. Ценности. Единство.",
        desc: "Мы создаем рабочую атмосферу, в которой искренне ценятся уважение, доверие и командный дух. В NabiOta® важны не только дипломы, но и люди, искренне стремящиеся приносить пользу.",
        badgeTitle: "Вместе расти.",
        badgeSub: "Улучшать жизни.",
      },
      testimonials: [
        {
          quote:
            "«В NabiOta® я нашла не просто работу, а призвание, приносящее радость каждый день. Команда невероятно поддерживает, а руководство открывает все возможности для роста.»",
          author: "Анна Мюллер",
          role: "Медицинская сестра, NabiOta® Клиника Берлин",
          avatar: "/images/careers/anna-mueller.webp",
        },
        {
          quote:
            "«Междисциплинарный подход, медицина мирового уровня и искреннее человеческое тепло делают работу в NabiOta® по-настоящему особенной.»",
          author: "Д-р мед. Томас Вебер",
          role: "Врач общей практики, NabiOta® Мюнхен",
          avatar: "/images/careers/anna-mueller.webp",
        },
        {
          quote:
            "«Инновационные методики восстановления, превосходное оснащение центров и уважение к личному времени специалистов — так и должно выглядеть здравоохранение будущего.»",
          author: "Сара Линдеманн",
          role: "Ведущий физиотерапевт, NabiOta® Гамбург",
          avatar: "/images/careers/anna-mueller.webp",
        },
      ],
      cta: {
        eyebrow: "ГОТОВЫ К ВАШЕМУ БУДУЩЕМУ?",
        title: "Станьте частью NabiOta®.",
        desc: "Изучите наши открытые вакансии и начните новый этап карьеры в динамично развивающемся медицинском холдинге.",
        button: "Откликнуться сейчас",
      },
      applyForm: {
        eyebrow: "БЫСТРЫЙ ОТКЛИК",
        title: "Начните свое будущее в NabiOta®.",
        desc: "Отправьте ваши документы или заполните быструю форму. Наша команда свяжется с вами в течение 48 часов.",
        nameLabel: "Имя и фамилия",
        namePlaceholder: "например, Мария Шмидт",
        emailLabel: "Электронная почта",
        emailPlaceholder: "vasha.pochta@example.com",
        phoneLabel: "Номер телефона",
        phonePlaceholder: "+49 (0) 123 456789",
        positionLabel: "Желаемая позиция",
        positionPlaceholder: "Выберите вакансию...",
        positions: [
          "Дипломированная медсестра / медбрат (m/w/d)",
          "Врач общей практики / Терапевт (m/w/d)",
          "Физиотерапевт / Реабилитолог (m/w/d)",
          "Обучение сестринскому делу (Auszubildende m/w/d)",
          "Инициативное резюме",
        ],
        messageLabel: "Сообщение (необязательно)",
        messagePlaceholder: "Расскажите кратко о вашем опыте и квалификации...",
        uploadLabel: "Прикрепить резюме (PDF, DOCX до 10MB)",
        uploadHint: "Выберите файл или перетащите сюда",
        privacy: "Я даю согласие на обработку персональных данных в целях рассмотрения моей кандидатуры.",
        submitBtn: "Отправить заявку",
        submitting: "Отправка...",
        successTitle: "Спасибо за ваш отклик!",
        successDesc: "Ваши данные успешно получены. Наш отдел кадров свяжется с вами в ближайшее время.",
        resetBtn: "Отправить еще одну заявку",
      },
    },
  }[locale];

  return (
    <div className="flex flex-col min-h-screen bg-white text-forest-950 font-sans selection:bg-[#C5A56A]/20 selection:text-forest-950">
      <Header currentLocale={locale} />

      <main className="flex-1">
        {/* ── SECTION 1: HERO (Unified Format: Compact Dark Forest Green + Doctors + Golden Arcs) ── */}
        <section className="relative w-full min-h-[480px] sm:min-h-[520px] lg:h-[600px] lg:min-h-[600px] pt-32 sm:pt-36 lg:pt-40 pb-14 sm:pb-16 overflow-hidden flex items-center bg-[#07150C] text-[#FAF8F5] border-b border-[#D5B878]/25">
          {/* Background: Modern Healthcare Professional in scrubs holding tablet - focused on subjects on mobile */}
          <div className="absolute inset-0 lg:left-[18%] lg:w-[82%] z-0 pointer-events-none overflow-hidden">
            <Image
              src="/images/careers/hero-career-nurse.webp"
              alt="NabiOta Health Group Germany Karriere"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 82vw"
              className="object-cover object-[75%_center] sm:object-[70%_center] lg:object-[center_25%]"
            />
            {/* Desktop right-side subtle blend */}
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r lg:from-[#07150C]/25 lg:via-transparent lg:to-black/10" />
          </div>

          {/* Desktop SVG with Deep Forest Green Shape & Dual Glowing Golden Arcs */}
          <svg
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 1440 600"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Clip path for the narrower left wing (620 at top to 800 at bottom) */}
              <clipPath id="careerLeftWingClip">
                <path d="M 0,0 L 620,0 C 710,180 680,420 800,600 L 0,600 Z" />
              </clipPath>

              <linearGradient id="careerHeroGoldGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#DFC894" stopOpacity="0.4" />
                <stop offset="25%" stopColor="#ECCF93" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#D4B06A" stopOpacity="1" />
                <stop offset="75%" stopColor="#ECCF93" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#DFC894" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="careerHeroGoldGradLight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ECCF93" stopOpacity="0.08" />
                <stop offset="35%" stopColor="#ECCF93" stopOpacity="0.45" />
                <stop offset="75%" stopColor="#DFC894" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#DFC894" stopOpacity="0.08" />
              </linearGradient>
              <filter id="careerHeroGoldGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="careerDarkGreenFill" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#051208" stopOpacity="0.80" />
                <stop offset="65%" stopColor="#07170E" stopOpacity="0.75" />
                <stop offset="85%" stopColor="#081A10" stopOpacity="0.68" />
                <stop offset="100%" stopColor="#0A1E13" stopOpacity="0.58" />
              </linearGradient>
            </defs>

            {/* Botanical Gold Background Image inside the Left Wing */}
            <image
              href="/images/botanical-gold-bg.webp"
              width="1440"
              height="600"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#careerLeftWingClip)"
              opacity="0.75"
            />

            {/* Deep Dark Green shading overlay inside the Left Wing for crisp text contrast */}
            <path
              d="M 0,0 L 620,0 C 710,180 680,420 800,600 L 0,600 Z"
              fill="url(#careerDarkGreenFill)"
            />

            {/* Primary Glowing Golden Separator Arc Line (Narrower position) */}
            <path
              d="M 620,0 C 710,180 680,420 800,600"
              stroke="url(#careerHeroGoldGrad)"
              strokeWidth="2"
              fill="none"
              filter="url(#careerHeroGoldGlow)"
            />

            {/* Secondary Fine Golden Accent Curve */}
            <path
              d="M 645,0 C 735,185 705,430 825,600"
              stroke="url(#careerHeroGoldGradLight)"
              strokeWidth="1"
              fill="none"
            />
          </svg>

          {/* Mobile/Tablet: Light transparent gradient that keeps the photo vividly visible with crisp text readability */}
          <div className="lg:hidden absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#051208]/95 via-[#051208]/60 to-[#051208]/25" />

          {/* Top subtle vignette for seamless fixed header blend */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#051208]/80 to-transparent pointer-events-none z-10" />

          {/* Top-left botanical foliage silhouette */}
          <div className="absolute top-0 left-0 w-52 sm:w-64 lg:w-80 h-52 sm:h-64 lg:h-80 pointer-events-none z-10 opacity-70">
            <Image
              src="/images/values/leaves-bg.webp"
              alt="Foliage"
              fill
              className="object-contain object-left-top opacity-30 mix-blend-screen"
            />
          </div>

          <Container size="wide" className="relative z-20">
            <div className="max-w-xl lg:max-w-[480px] xl:max-w-[560px]">
              {/* Breadcrumb matching Photo 2 */}
              <nav className="flex items-center gap-2 text-xs sm:text-[12.5px] text-[#A2ADA4] mb-3.5 font-sans" aria-label="Breadcrumb">
                <Link href={`/${locale}`} className="hover:text-[#D5B878] transition-colors">
                  {locale === "ru" ? "Главная" : locale === "en" ? "Home" : "Startseite"}
                </Link>
                <span className="text-[#A2ADA4]/70 text-[10px] font-bold">›</span>
                <span className="text-white/95 font-medium">
                  {locale === "ru" ? "Карьера" : locale === "en" ? "Career" : "Karriere"}
                </span>
              </nav>

              <h1 className="page-hero-title font-serif text-[32px] sm:text-[40px] lg:text-[44px] xl:text-[50px] text-white font-normal leading-[1.12] tracking-tight mb-4 break-words [overflow-wrap:anywhere] hyphens-auto">
                {t.hero.titlePrefix}{" "}
                {t.hero.titleMid}{" "}
                <span className="italic font-serif text-[#C5A56A] font-normal block sm:inline">
                  {t.hero.titleHighlight}
                </span>
              </h1>

              <p className="hero-text-wrap text-[13.5px] sm:text-[14.5px] text-[#D2DED5] leading-[1.72] font-sans max-w-xl mb-6 font-normal break-words [overflow-wrap:anywhere] hyphens-auto">
                {t.hero.description}
              </p>

              {/* 3 Circular Feature Badges matching reference photo */}
              <div className="mb-8">
                <HeroBadges
                  items={[
                    {
                      icon: Users,
                      title: t.hero.badge1Title,
                      sub: t.hero.badge1Sub,
                    },
                    {
                      icon: GraduationCap,
                      title: t.hero.badge2Title,
                      sub: t.hero.badge2Sub,
                    },
                    {
                      icon: Heart,
                      title: t.hero.badge3Title,
                      sub: t.hero.badge3Sub,
                    },
                  ]}
                />
              </div>

              <div>
                <Link
                  href="#stellen"
                  className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-[#C5A56A] hover:bg-[#D5B878] text-[#07150C] font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all duration-200 hover:scale-[1.02]"
                >
                  <span>{t.hero.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* ── SECTION 2: UNSERE MISSION (Matching Photo 3 Reference) ────── */}
        <section className="py-12 sm:py-14 lg:py-16 bg-[#FCFAF7]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Mission Description & Executive Signature */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.24em] text-[#C5A56A] uppercase block">
                  {t.mission.eyebrow}
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-forest-950 font-normal leading-tight">
                  {t.mission.title}
                </h2>

                <p className="text-sm sm:text-[15px] text-[#4E5650] leading-[1.8] font-normal">
                  {t.mission.desc}
                </p>

                {/* Handwritten Executive Calligraphy Signature matching Photo 3 */}
                <div className="pt-6 flex flex-col items-start select-none">
                  <div className="flex items-baseline gap-1.5 sm:gap-2">
                    <span className="font-signature text-4xl sm:text-5xl lg:text-[54px] text-[#142318] tracking-wide font-normal leading-none">
                      NabiOta
                    </span>
                    <span className="text-xs text-[#C5A56A] font-serif -ml-1 -top-3.5 relative font-bold">®</span>
                    <span className="font-signature text-3xl sm:text-4xl lg:text-[42px] text-[#243327] tracking-wide font-normal leading-none">
                      Health Group Germany
                    </span>
                  </div>
                  {/* Elegant line and role */}
                  <div className="flex items-center gap-3 mt-3 w-56 sm:w-64">
                    <div className="h-[1.5px] bg-[#C5A56A] flex-1 rounded-full" />
                    <span className="text-[11px] sm:text-xs text-[#717A73] tracking-[0.2em] uppercase font-medium">
                      {t.mission.role}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Mission Image + Floating Badge in Bottom-Right Corner */}
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#EDE7D9]">
                  <Image
                    src="/images/careers/mission-doctors-highres.webp"
                    alt="Ärzte und medizinisches Fachpersonal bei NabiOta"
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Floating pill badge overlaid on bottom right matching Photo 3 */}
                <div className="relative -mt-6 sm:-mt-8 ml-auto mr-0 sm:mr-4 max-w-[92%] sm:max-w-md bg-[#FCFAF7] rounded-2xl p-4 sm:p-5 shadow-[0_12px_32px_rgba(0,0,0,0.08)] border border-[#EDE7D9] flex items-center gap-3.5 z-10">
                  <div className="w-11 h-11 rounded-2xl bg-[#FAF6EE] border border-[#E5D7B7] flex items-center justify-center flex-shrink-0 text-[#C5A56A]">
                    <Users className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <p className="text-xs sm:text-[13.5px] font-medium text-forest-950 leading-snug">
                    {t.mission.badge}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ── SECTION 3: WARUM NABIOTA® / VORTEILE (Warm Cream Background) ── */}
        <section className="py-12 sm:py-14 lg:py-16 bg-[#FAF8F5] border-t border-[#EDE7D9]">
          <Container size="wide">
            {/* Header */}
            <div className="max-w-2xl mb-12 sm:mb-16">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.24em] text-[#C5A56A] uppercase block mb-2">
                {t.benefits.eyebrow}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-forest-950 font-normal leading-tight mb-4">
                {t.benefits.title}
              </h2>
              <p className="text-sm sm:text-base text-[#4E5650] leading-relaxed">
                {t.benefits.desc}
              </p>
            </div>

            {/* 6 Benefits Cards (2x3 Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {t.benefits.items.map((b, idx) => {
                const IconComponent = b.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 rounded-2xl bg-white border border-[#EAE4D5] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-11 h-11 rounded-full bg-[#FAF6EE] border border-[#E5D7B7] flex items-center justify-center text-[#C5A56A] mb-5 group-hover:bg-[#C5A56A] group-hover:text-white transition-colors duration-200">
                        <IconComponent className="w-5 h-5 stroke-[1.75]" />
                      </div>
                      <h3 className="font-serif font-bold text-base sm:text-lg text-forest-950 mb-2 leading-snug">
                        {b.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4E5650] leading-relaxed">
                        {b.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* ── SECTION 4: AKTUELLE STELLENANGEBOTE (Matching Photo 4) ─────── */}
        <section id="stellen" className="py-10 sm:py-12 lg:py-14 bg-[#FAF7F2] border-t border-[#EDE7D9] relative overflow-hidden">
          <Container size="wide" className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Heading & Call to Action */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.24em] text-[#C5A56A] uppercase block">
                  {t.jobs.eyebrow}
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-forest-950 font-normal leading-tight">
                  {t.jobs.title}
                </h2>

                <p className="text-sm sm:text-base text-[#4E5650] leading-relaxed">
                  {t.jobs.desc}
                </p>

                <div className="pt-2">
                  <a
                    href="#bewerbung"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#142318] font-semibold text-xs sm:text-sm tracking-wide transition-all duration-200 hover:scale-[1.02] shadow-xs"
                  >
                    <span>{t.jobs.allButton}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: 4 Featured Job Cards */}
              <div className="lg:col-span-7 space-y-3.5">
                {t.jobs.positions.map((job, idx) => {
                  const JobIcon = job.icon;
                  return (
                    <div
                      key={idx}
                      onClick={() => handleSelectJob(job.title)}
                      className="p-4 sm:p-5 rounded-2xl bg-white border border-[#EDE7D9] hover:border-[#C5A56A] shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-between group cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FAF6EE] border border-[#E5D7B7] flex items-center justify-center text-[#C5A56A] flex-shrink-0 group-hover:bg-[#C5A56A] group-hover:text-white transition-colors duration-200">
                          <JobIcon className="w-5 h-5 stroke-[1.75]" />
                        </div>
                        <div>
                          <h3 className="font-serif font-bold text-sm sm:text-base text-forest-950 group-hover:text-[#8D6B27] transition-colors leading-snug">
                            {job.title}
                          </h3>
                          <p className="text-[11.5px] sm:text-xs text-[#717A73] mt-0.5">
                            {job.facility} <span className="mx-1 text-[#C5A56A]">|</span> {job.type}
                          </p>
                        </div>
                      </div>

                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#C5A56A] group-hover:translate-x-1 transition-transform">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* ── SECTION 5: UNSERE KULTUR (Dark Green Container Card) ───────── */}
        <section className="py-6 sm:py-8 bg-[#FAF8F5]">
          <Container size="wide">
            <div className="rounded-3xl bg-[#091A10] text-white p-5 sm:p-7 lg:p-8 overflow-hidden relative shadow-xl border border-white/5">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                {/* Left Column: Culture text */}
                <div className="lg:col-span-6 space-y-5">
                  <span className="text-[11px] sm:text-xs font-bold tracking-[0.24em] text-[#C5A56A] uppercase block">
                    {t.culture.eyebrow}
                  </span>

                  <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
                    {t.culture.title}
                  </h2>

                  <p className="text-sm sm:text-[15px] text-white/80 leading-relaxed font-light">
                    {t.culture.desc}
                  </p>
                </div>

                {/* Right Column: Culture Photo & Badge */}
                <div className="lg:col-span-6 relative">
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-white/10">
                    <Image
                      src="/images/careers/kultur-team-highres.webp"
                      alt="NabiOta Unternehmenskultur und Team"
                      fill
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Floating Pill Badge */}
                  <div className="relative -mt-5 sm:-mt-6 mx-auto max-w-[85%] sm:max-w-xs bg-white rounded-xl p-3 sm:p-3.5 shadow-lg flex items-center gap-3 z-10">
                    <div className="w-8 h-8 rounded-full bg-[#FAF6EE] border border-[#E5D7B7] flex items-center justify-center flex-shrink-0 text-[#C5A56A]">
                      <Sprout className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-forest-950 leading-tight">
                        {t.culture.badgeTitle}
                      </p>
                      <p className="text-[11px] text-[#717A73] leading-tight">
                        {t.culture.badgeSub}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ── SECTION 6: EMPLOYEE TESTIMONIAL (Matching Photo 5) ────────── */}
        <section className="py-10 sm:py-12 lg:py-14 bg-[#FAF7F2] border-t border-[#EDE7D9]">
          <Container size="wide">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-14 px-4 sm:px-6">
              {/* Giant Stylized Quotation Marks */}
              <div className="text-7xl sm:text-8xl lg:text-9xl font-serif text-[#C5A56A]/60 select-none leading-none -mb-6 md:mb-0 flex-shrink-0 font-normal drop-shadow-xs">
                ““
              </div>

              {/* Avatar Photo */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#C5A56A] shadow-md flex-shrink-0">
                <Image
                  src={t.testimonials[activeTestimonial].avatar}
                  alt={t.testimonials[activeTestimonial].author}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Testimonial Quote & Info */}
              <div className="flex-1 text-center md:text-left space-y-3">
                <p className="font-serif italic text-lg sm:text-xl lg:text-2xl text-forest-950 leading-[1.5]">
                  {t.testimonials[activeTestimonial].quote}
                </p>

                <div>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-forest-950">
                    {t.testimonials[activeTestimonial].author}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#717A73] mt-0.5">
                    {t.testimonials[activeTestimonial].role}
                  </p>
                </div>
              </div>

              {/* Navigation Controls & Dots */}
              <div className="flex items-center gap-3.5 flex-shrink-0 pt-2 md:pt-0">
                {/* Dots indicator */}
                <div className="flex items-center gap-1.5 mr-2">
                  {t.testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTestimonial(i)}
                      aria-label={`Testimonial ${i + 1}`}
                      className={`h-2.5 rounded-full transition-all ${
                        activeTestimonial === i
                          ? "w-7 bg-[#C5A56A]"
                          : "w-2.5 bg-[#D8D2C2] hover:bg-[#B3AB98]"
                      }`}
                    />
                  ))}
                </div>

                {/* Left arrow */}
                <button
                  onClick={() =>
                    setActiveTestimonial((prev) =>
                      prev === 0 ? t.testimonials.length - 1 : prev - 1
                    )
                  }
                  aria-label="Previous Testimonial"
                  className="w-12 h-12 rounded-full border-2 border-[#C5A56A]/80 bg-white hover:bg-[#C5A56A] text-[#142318] hover:text-white shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center cursor-pointer group active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={2.2} />
                </button>

                {/* Right arrow */}
                <button
                  onClick={() =>
                    setActiveTestimonial((prev) =>
                      prev === t.testimonials.length - 1 ? 0 : prev + 1
                    )
                  }
                  aria-label="Next Testimonial"
                  className="w-12 h-12 rounded-full border-2 border-[#C5A56A]/80 bg-white hover:bg-[#C5A56A] text-[#142318] hover:text-white shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center cursor-pointer group active:scale-95"
                >
                  <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={2.2} />
                </button>
              </div>
            </div>
          </Container>
        </section>

        {/* ── SECTION 7: PRE-FOOTER CTA BANNER (Matching About Us Get in Touch) ────────── */}
        <section className="bg-[#07160D] text-white py-10 sm:py-12 relative overflow-hidden">
          {/* Botanical leaf silhouette watermark accents matching About Us Get in Touch */}
          <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden mix-blend-screen">
            <Image
              src="/images/bacground.webp"
              alt="Watermark"
              fill
              className="object-cover object-center"
            />
          </div>

          <Container size="wide">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-2xl space-y-3">
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.24em] text-[#C5A56A] uppercase block">
                  {t.cta.eyebrow}
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
                  {t.cta.title}
                </h2>

                <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
                  {t.cta.desc}
                </p>
              </div>

              <div className="flex-shrink-0">
                <a
                  href="#bewerbung"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#07150C] font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all duration-200 hover:scale-[1.02]"
                >
                  <span>{t.cta.button}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* ── SECTION 8: DIREKT BEWERBEN / QUICK APPLY FORM ──────────────── */}
        <section id="bewerbung" className="py-12 sm:py-14 lg:py-16 bg-[#FCFAF7] border-t border-[#EDE7D9] relative overflow-hidden">
          <Container size="narrow" className="max-w-3xl relative z-10">
            <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.24em] text-[#C5A56A] uppercase block mb-2">
                {t.applyForm.eyebrow}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-forest-950 font-normal leading-tight mb-3">
                {t.applyForm.title}
              </h2>
              <p className="text-sm sm:text-[15px] text-[#4E5650] leading-relaxed">
                {t.applyForm.desc}
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5D7B7] shadow-lg text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-[#FAF6EE] border-2 border-[#C5A56A] text-[#C5A56A] flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8 stroke-[2]" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-forest-950 font-normal">
                  {t.applyForm.successTitle}
                </h3>
                <p className="text-sm sm:text-base text-[#4E5650] max-w-md mx-auto leading-relaxed">
                  {t.applyForm.successDesc}
                </p>
                <div className="pt-3">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFileName("");
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#C5A56A] text-[#142318] text-xs sm:text-sm font-semibold hover:bg-[#FAF6EE] transition-colors cursor-pointer"
                  >
                    {t.applyForm.resetBtn}
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleFormSubmit}
                className="bg-white rounded-3xl p-7 sm:p-10 lg:p-12 border border-[#EDE7D9] shadow-lg space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-forest-950 uppercase tracking-wider block">
                      {t.applyForm.nameLabel} <span className="text-[#C5A56A]">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder={t.applyForm.namePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#FCFAF7] border border-[#E2DBD0] text-forest-950 placeholder:text-[#A2ADA4] text-sm focus:outline-none focus:border-[#C5A56A] focus:ring-1 focus:ring-[#C5A56A] transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-forest-950 uppercase tracking-wider block">
                      {t.applyForm.emailLabel} <span className="text-[#C5A56A]">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      placeholder={t.applyForm.emailPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#FCFAF7] border border-[#E2DBD0] text-forest-950 placeholder:text-[#A2ADA4] text-sm focus:outline-none focus:border-[#C5A56A] focus:ring-1 focus:ring-[#C5A56A] transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-forest-950 uppercase tracking-wider block">
                      {t.applyForm.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      placeholder={t.applyForm.phonePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#FCFAF7] border border-[#E2DBD0] text-forest-950 placeholder:text-[#A2ADA4] text-sm focus:outline-none focus:border-[#C5A56A] focus:ring-1 focus:ring-[#C5A56A] transition-all"
                    />
                  </div>

                  {/* Desired Position */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-forest-950 uppercase tracking-wider block">
                      {t.applyForm.positionLabel} <span className="text-[#C5A56A]">*</span>
                    </label>
                    <select
                      required
                      value={selectedPosition}
                      onChange={(e) => setSelectedPosition(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FCFAF7] border border-[#E2DBD0] text-forest-950 text-sm focus:outline-none focus:border-[#C5A56A] focus:ring-1 focus:ring-[#C5A56A] transition-all cursor-pointer"
                    >
                      <option value="">{t.applyForm.positionPlaceholder}</option>
                      {t.applyForm.positions.map((pos, idx) => (
                        <option key={idx} value={pos}>
                          {pos}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-forest-950 uppercase tracking-wider block">
                    {t.applyForm.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={t.applyForm.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-[#FCFAF7] border border-[#E2DBD0] text-forest-950 placeholder:text-[#A2ADA4] text-sm focus:outline-none focus:border-[#C5A56A] focus:ring-1 focus:ring-[#C5A56A] transition-all resize-y"
                  />
                </div>

                {/* File Upload Box */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-forest-950 uppercase tracking-wider block">
                    {t.applyForm.uploadLabel}
                  </label>
                  <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-[#DDD5C7] hover:border-[#C5A56A] rounded-2xl bg-[#FCFAF7] cursor-pointer transition-colors group">
                    <input
                      type="file"
                      accept=".pdf,.docx,.doc"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setFileName(e.target.files[0].name);
                        }
                      }}
                    />
                    {fileName ? (
                      <div className="flex items-center gap-2.5 text-[#142318]">
                        <FileText className="w-5 h-5 text-[#C5A56A]" />
                        <span className="text-sm font-medium">{fileName}</span>
                      </div>
                    ) : (
                      <>
                        <Upload className="w-6 h-6 text-[#C5A56A] mb-2 group-hover:scale-110 transition-transform" />
                        <span className="text-xs sm:text-sm font-medium text-forest-950 text-center">
                          {t.applyForm.uploadHint}
                        </span>
                      </>
                    )}
                  </label>
                </div>

                {/* Privacy Consent */}
                <div className="flex items-start gap-3 pt-1">
                  <input
                    required
                    type="checkbox"
                    id="career-privacy"
                    className="mt-1 w-4 h-4 rounded border-[#D0C7B7] text-[#C5A56A] focus:ring-[#C5A56A] cursor-pointer"
                  />
                  <label htmlFor="career-privacy" className="text-xs text-[#555E56] leading-relaxed cursor-pointer select-none">
                    {t.applyForm.privacy}
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#ECCF93] to-[#D4AF67] hover:from-[#F2DAB0] hover:to-[#DEBD7A] text-[#142217] font-semibold text-sm tracking-wide shadow-md transition-all duration-200 hover:scale-[1.01] disabled:opacity-70 cursor-pointer"
                  >
                    <span>{isSubmitting ? t.applyForm.submitting : t.applyForm.submitBtn}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </Container>
        </section>
      </main>

      <Footer currentLocale={locale} />
    </div>
  );
}
