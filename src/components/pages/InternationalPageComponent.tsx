"use client";

import React, { useState } from "react";
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
  CheckCircle2,
  ShieldCheck,
  X,
  Stethoscope,
  Building2,
  Activity,
  Phone,
  FileText,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SupportedLocale } from "@/lib/i18n";
import { RecruitmentCompanySection } from "@/components/sections/RecruitmentCompanySection";

interface InternationalProgram {
  id: string;
  tag: string;
  image: string;
  iconType: "hospital" | "telehealth" | "recruitment" | "academy" | "humanitarian" | "medicalTravel";
  title: string;
  shortDesc: string;
  modal: {
    title: string;
    subtitle: string;
    description: string;
    specificationsTitle: string;
    specifications: string[];
    scopeTitle: string;
    scopeItems: string[];
    technicalTitle: string;
    technicalText: string;
    ctaButtonText: string;
  };
}

interface Props {
  locale?: SupportedLocale;
}

export function InternationalPageComponent({ locale = "de" }: Props) {
  const [selectedProgram, setSelectedProgram] = useState<InternationalProgram | null>(null);
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

    // Section 4: 6 Key Strategic Programs & Cooperation Pillars (PDF Scope)
    s4: {
      eyebrow: isRu ? "СТРАТЕГИЧЕСКИЕ НАПРАВЛЕНИЯ" : isEn ? "STRATEGIC COOPERATION FIELDS" : "STRATEGISCHE KOOPERATIONSFELDER",
      title: isRu ? "Ключевые сферы международного партнерства" : isEn ? "Key Areas of International Partnership" : "Schlüsselfelder unserer internationalen Zusammenarbeit",
      desc: isRu
        ? "Шесть взаимосвязанных программ холдинга NabiOta®: от трансграничных клинических альянсов и телемедицины до рекрутинга врачей, академии и гуманитарных инициатив."
        : isEn
        ? "Six interconnected NabiOta® programs: from cross-border hospital alliances and telemedicine to physician recruitment, clinical academy, and humanitarian care."
        : "Sechs strukturierte Leistungsfelder der NabiOta® Gruppe: von grenzüberschreitenden Klinikallianzen und Telemedizin bis hin zur Fachkräfteintegration, Akademie und humanitären Projekten.",
      linkAll: isRu ? "Все программы" : isEn ? "All Programs" : "Alle Schwerpunkte",
      openModalBtn: isRu ? "Подробнее о программе" : isEn ? "Explore program" : "Details ansehen",
      programs: [
        {
          id: "klinikpartnerschaften",
          tag: isRu ? "КЛИНИЧЕСКИЕ АЛЬЯНСЫ" : isEn ? "HOSPITAL ALLIANCES" : "KLINIKALLIANZEN",
          image: "/images/international/project-europe.webp",
          iconType: "hospital",
          title: isRu
            ? "Трансграничные клинические альянсы & Госпитальные партнерства"
            : isEn
            ? "Cross-Border Clinical Alliances & Hospital Partnerships"
            : "Grenzüberschreitende Klinikallianzen & Hospital Networks",
          shortDesc: isRu
            ? "Стратегическое партнерство с международными университетскими клиниками: синхронизация стандартов лечения, консилиумы и обмен опытом."
            : isEn
            ? "Strategic collaborations with international university hospitals for evidence-based care pathways and shared clinical protocols."
            : "Strategische Kooperationen mit internationalen Universitätskliniken für evidenzbasierte Behandlungspfade und gemeinsame klinische Protokolle.",
          modal: {
            title: isRu
              ? "Трансграничные клинические альянсы & Госпитальные партнерства"
              : isEn
              ? "Cross-Border Clinical Alliances & Hospital Partnerships"
              : "Grenzüberschreitende Klinikallianzen & Partnerschaften",
            subtitle: isRu
              ? "Синхронизация стандартов лечения, консилиумы и обмен опытом с ведущими медицинскими центрами"
              : isEn
              ? "Harmonizing standards of care, clinical boards, and institutional peer exchange"
              : "Harmonisierung klinischer Behandlungspfade, interdisziplinäre Konsile und Wissenstransfer",
            description: isRu
              ? "NabiOta® International развивает институциональные партнерства с ведущими клиниками Европы и мира. В рамках долгосрочных соглашений мы внедряем совместные клинические протоколы в хирургии, онкологии, кардиологии и реабилитации, организуем регулярные экспертные советы и обеспечиваем преемственность в ведении сложных пациентов."
              : isEn
              ? "NabiOta® International establishes institutional alliances with premier hospital networks across Europe and globally. Under bilateral cooperation agreements, we implement standardized care pathways in surgery, oncology, cardiology, and rehabilitation, conduct regular multidisciplinary tumor boards, and ensure seamless continuum of care for complex cases."
              : "Die NabiOta® Health Group etabliert strukturierte bilaterale Klinikpartnerschaften mit universitären und überregionalen Maximalversorgern in Europa und weltweit. Im Fokus stehen der Wissenstransfer in hochspezialisierten operativen Disziplinen, die Entwicklung einheitlicher Behandlungspfade nach deutschen und internationalen Leitlinien sowie die gemeinsame Betreuung komplexer Patientenfälle.",
            specificationsTitle: isRu ? "Направления сотрудничества" : isEn ? "Cooperation Domains" : "Klinische Schwerpunkte der Allianzen",
            specifications: isRu
              ? [
                  "Совместные междисциплинарные онкологические и хирургические борды (Tumorboards)",
                  "Синхронизация стандартов госпитальной гигиены и безопасности пациентов (RKI / WHO)",
                  "Внедрение протоколов ранней постоперационной активизации (ERAS / Fast-Track)",
                  "Партнерские программы ротации врачей и клинических ординаторов",
                  "Трансфер передовых диагностических алгоритмов в радиологии (MRT 3T / Low-Dose CT)",
                  "Создание совместных регистров исходов лечения и контроля качества",
                ]
              : isEn
              ? [
                  "Joint multidisciplinary oncology and surgical tumor boards and case conferences",
                  "Harmonization of hospital hygiene and infection control standards (RKI / WHO)",
                  "Implementation of enhanced recovery after surgery (ERAS / Fast-Track) protocols",
                  "Bilateral physician rotation and clinical fellowship training exchanges",
                  "Transfer of cutting-edge radiology algorithms in MRI (3T) and low-dose CT imaging",
                  "Collaborative clinical outcome registries and longitudinal quality monitoring",
                ]
              : [
                  "Gemeinsame interdisziplinäre Tumor- und Fallkonferenzen (Tumorboards)",
                  "Angleichung von Krankenhaushygiene- und Sicherheitsstandards (RKI / WHO)",
                  "Implementierung von Fast-Track- und ERAS-Konzepten in der Chirurgie",
                  "Strukturierte Hospitations- und Austauschprogramme für Chef- und Oberärzte",
                  "Transfer hochmoderner radiologischer Befundungsstandards (3T MRT / Niedrigdosis-CT)",
                  "Aufbau gemeinsamer Qualitätsregister zur evidenzbasierten Therapiekontrolle",
                ],
            scopeTitle: isRu ? "Форматы реализации" : isEn ? "Implementation Scope" : "Kooperations- & Umsetzungsformate",
            scopeItems: isRu
              ? [
                  "Заключение двусторонних меморандумов о сотрудничестве (MoU) и договоров об обмене",
                  "Проведение очных и гибридных клинических консилиумов по сложным случаям",
                  "Организация клинических стажировок в Германии для ведущих хирургов и диагностов",
                  "Техническая интеграция защищенных каналов передачи медицинских снимков (DICOM)",
                  "Совместные научные публикации и участие в международных медицинских конгрессах",
                ]
              : isEn
              ? [
                  "Execution of bilateral Memorandums of Understanding (MoU) and institutional contracts",
                  "Holding scheduled hybrid and in-person peer case consultations for complex indications",
                  "Organizing clinical observation fellowships in Germany for senior surgical specialists",
                  "Technical integration of certified encrypted medical imaging transmission (DICOM / PACS)",
                  "Joint clinical research publications and contributions to international medical congresses",
                ]
              : [
                  "Abschluss rechtssicherer Kooperationsvereinbarungen (MoU) und Klinikverträge",
                  "Regelmäßige Durchführung telemedizinischer und Vor-Ort-Konsile bei Problemfällen",
                  "Organisation mehrwöchiger klinischer Hospitationen in deutschen NabiOta-Zentren",
                  "Einbindung gesicherter digitaler Bilddatenübertragungen nach DICOM/PACS-Standards",
                  "Gemeinsame wissenschaftliche Publikationen und Fachvorträge auf Kongressen",
                ],
            technicalTitle: isRu ? "Стандарты и безопасность" : isEn ? "Standards & Governance" : "Qualitäts- & Sicherheitsstandards",
            technicalText: isRu
              ? "Все международные партнерства осуществляются в строгом соответствии с нормами врачебной тайны (§ 203 StGB), европейским регламентом защиты данных (GDPR/DSGVO) и руководствами ВОЗ по безопасности пациентов."
              : isEn
              ? "All international partnerships strictly comply with German medical confidentiality (§ 203 StGB), European data privacy regulations (GDPR/DSGVO), and WHO Patient Safety guidelines."
              : "Sämtliche Kooperationsprozesse unterliegen der strikten ärztlichen Schweigepflicht (§ 203 StGB), den Anforderungen der DSGVO sowie den Richtlinien der WHO für Patientensicherheit.",
            ctaButtonText: isRu ? "Обсудить партнерство клиник" : isEn ? "Inquire Clinic Partnership" : "Klinikpartnerschaft anfragen",
          },
        },
        {
          id: "telemedizin",
          tag: isRu ? "ТЕЛЕМЕДИЦИНА" : isEn ? "TELEHEALTH" : "TELEMEDIZIN",
          image: "/images/international/project-asia.webp",
          iconType: "telehealth",
          title: isRu
            ? "Телемедицина & Международные экспертные телеконсилиумы"
            : isEn
            ? "Telemedicine & Global Expert Teleconsultations"
            : "Telemedizin & Internationale Experten-Telekonsile",
          shortDesc: isRu
            ? "Защищенные цифровые каналы для второго мнения немецких профессоров, онлайн-консилиумов и телерадиологии."
            : isEn
            ? "Secure digital bridges for second opinions from German chief physicians, live boards, and teleradiology reading."
            : "Sichere digitale Brücken für Zweitmeinungen deutscher Chefärzte, Live-Konsile und teleradiologische Befundung.",
          modal: {
            title: isRu
              ? "Телемедицина & Международные экспертные телеконсилиумы"
              : isEn
              ? "Telemedicine & Global Expert Teleconsultations"
              : "Telemedizin & Internationale Experten-Telekonsile",
            subtitle: isRu
              ? "Второе мнение немецких профессоров, дистанционный разбор сложных случаев и телерадиология"
              : isEn
              ? "German specialist second opinions, remote case reviews, and cross-border teleradiology"
              : "Fachärztliche Zweitmeinungen, teleradiologische Befundung und interdisziplinäre Fallbesprechung",
            description: isRu
              ? "Телемедицинская платформа NabiOta® связывает зарубежные клиники и пациентов с узкопрофильными специалистами Германии. Мы обеспечиваем дистанционный аудит радиологических исследований (КТ/МРТ), экспертное второе мнение перед проведением сложных операций и регулярные онлайн-консилиумы по спорным диагнозам в режиме защищенного видео- и дата-канала."
              : isEn
              ? "The NabiOta® Telehealth platform connects overseas healthcare providers and patients with premier German specialists. We deliver certified teleradiology image audits (CT/MRI), comprehensive second opinions prior to major surgical interventions, and structured remote tumor boards over end-to-end encrypted medical networks."
              : "Über die zertifizierte Telemedizin-Plattform der NabiOta-Gruppe erhalten internationale Partnerkliniken und Patienten direkten Zugang zu führenden deutschen Fachärzten. Das Leistungsspektrum umfasst die teleradiologische Zweitbefundung hochkomplexer Schnittbildaufnahmen, unabhängige Zweitmeinungen vor schweren operativen Eingriffen sowie regelmäßige interdisziplinäre Konsile via verschlüsselter Videoschaltung.",
            specificationsTitle: isRu ? "Телемедицинские возможности" : isEn ? "Telehealth Modalities" : "Telemedizinische Leistungen",
            specifications: isRu
              ? [
                  "Экспертное второе мнение (Second Opinion) ведущих хирургов и онкологов Германии",
                  "Телерадиология: удаленный аудит снимков МРТ, КТ и рентгена с заключением за 24–48 часов",
                  "Интерактивные телеконсилиумы в режиме реального времени с демонстрацией операционного поля",
                  "Телекардиология: дистанционный анализ холтеровского мониторирования и ЭКГ",
                  "Телепатология: цифровой пересмотр гистологических и цитологических микропрепаратов",
                  "Защищенный личный кабинет врача и пациента с доступом к оригинальным протоколам",
                ]
              : isEn
              ? [
                  "Specialist German second opinions in spine surgery, joint replacement, oncology, and neurology",
                  "Teleradiology: remote audit of MRI, CT, and X-ray studies with verified report within 24–48 hours",
                  "Real-time interactive tele-consultations with live surgical view and diagnostic sharing",
                  "Telecardiology: remote interpretation of multi-day Holter ECGs and stress telemetry",
                  "Telepathology: digital slide scanning and histological second reviews for oncology staging",
                  "Fully encrypted physician/patient portal for seamless, GDPR-compliant medical record transfer",
                ]
              : [
                  "Facharzt-Zweitmeinungen (Second Opinion) für Orthopädie, Neurochirurgie, Onkologie und Kardiologie",
                  "Teleradiologie: Unabhängige Zweitbefundung von MRT- und CT-Aufnahmen binnen 24–48 Stunden",
                  "Live-Telekonsile zwischen behandelndem Arzt vor Ort und NabiOta-Spezialisten",
                  "Telekardiologische Beurteilung von Langzeit-EKGs, Schrittmacher- und Belastungsdaten",
                  "Digitale Telepathologie zur Verifizierung bioptischer und onkologischer Gewebebefunde",
                  "Ende-zu-Ende verschlüsseltes Portal für DICOM-Bilder und Arztbriefübermittlung",
                ],
            scopeTitle: isRu ? "Техническая инфраструктура" : isEn ? "Technical Infrastructure" : "Plattform & Schnittstellen",
            scopeItems: isRu
              ? [
                  "Облачный PACS-архив с поддержкой передачи несжатых DICOM-файлов ультравысокого разрешения",
                  "Соответствие стандарту передачи медицинских данных FHIR / HL7 для интеграции с МИС клиник",
                  "Двухфакторная аутентификация и сквозное 256-битное шифрование видеопотоков",
                  "Подготовка экспертных заключений на немецком, английском и русском языках",
                  "Официальное подписание заключений квалифицированной электронной подписью (eHBA)",
                ]
              : isEn
              ? [
                  "Cloud-based PACS server supporting lossless ultra-high-resolution DICOM transmission",
                  "Interoperability with hospital information systems via HL7 and FHIR clinical standards",
                  "Two-factor authentication and AES-256 end-to-end encryption for video and data streams",
                  "Comprehensive expert consultation reports issued in German, English, or Russian",
                  "Legally binding reports signed with German electronic health professional card (eHBA)",
                ]
              : [
                  "Zertifizierter Cloud-PACS-Server für verlustfreie Übertragung hochauflösender DICOM-Datensätze",
                  "Interoperabilität mit internationalen Krankenhausinformationssystemen über HL7/FHIR",
                  "Zwei-Faktor-Authentifizierung und AES-256-Verschlüsselung aller Video- und Bilddaten",
                  "Erstellung detaillierter schriftlicher Gutachten auf Deutsch, Englisch oder Russisch",
                  "Rechtsverbindliche Signatur durch zugelassene Fachärzte mittels elektronischem Heilberufsausweis (eHBA)",
                ],
            technicalTitle: isRu ? "Правовая база" : isEn ? "Regulatory Framework" : "Rechtliche Grundlagen",
            technicalText: isRu
              ? "Предоставление телемедицинских услуг осуществляется в рамках § 7 Abs. 4 (MBO-Ä) Федерального врачебного кодекса Германии и с соблюдением европейских регламентов защиты персональных данных (DSGVO)."
              : isEn
              ? "Telemedical services are delivered in strict compliance with § 7(4) MBO-Ä (German Medical Association Fernbehandlung guidelines) and European GDPR privacy laws."
              : "Die Durchführung telemedizinischer Konsile erfolgt unter strikter Einhaltung der berufsrechtlichen Vorgaben (§ 7 Abs. 4 MBO-Ä) und den Vorgaben der Datenschutz-Grundverordnung (DSGVO).",
            ctaButtonText: isRu ? "Запросить телеконсилиум" : isEn ? "Request Teleconsultation" : "Telekonsil anfragen",
          },
        },
        {
          id: "fachkraefte-recruitment",
          tag: isRu ? "РЕКРУТИНГ & КАДРЫ" : isEn ? "RECRUITMENT" : "FACHKRÄFTE",
          image: "/images/services/staffing.webp",
          iconType: "recruitment",
          title: isRu
            ? "Международный рекрутинг врачей & Программы Approbation"
            : isEn
            ? "International Healthcare Recruitment & Medical Licensing"
            : "Internationale Fachkräftegewinnung & Approbationsprogramme",
          shortDesc: isRu
            ? "Системный подбор и интеграция врачей и медперсонала с полным юридическим сопровождением апробации по § 3 BÄO."
            : isEn
            ? "Structured recruitment and sustainable onboarding of physicians and nurses with licensing (Approbation § 3 BÄO)."
            : "Strukturierte Gewinnung und nachhaltige Integration von Medizinern und Pflegekräften mit Approbationsbegleitung nach § 3 BÄO.",
          modal: {
            title: isRu
              ? "Международный рекрутинг кадров & Approbation"
              : isEn
              ? "International Healthcare Recruitment & Licensing"
              : "Internationale Fachkräftegewinnung & Approbation",
            subtitle: isRu
              ? "NabiOta Medical Recruitment Services GmbH: от языковой подготовки до немецкой врачебной лицензии"
              : isEn
              ? "NabiOta Medical Recruitment Services GmbH: From language training to full German medical licensure"
              : "NabiOta Medical Recruitment Services GmbH: Qualifizierte Ärzte- und Pflegekräfteintegration",
            description: isRu
              ? "NabiOta Medical Recruitment Services GmbH специализируется на этичном, системном привлечении квалифицированных врачей, медсестер и терапевтов из-за рубежа. Мы сопровождаем специалистов на каждом шаге: от проверки диплома в ZAB/ZSBA и визы до сдачи экзаменов Fachsprachenprüfung (FSP) и Kenntnisprüfung (KP), обеспечивая полную немецкую апробацию и долгосрочное трудоустройство."
              : isEn
              ? "NabiOta Medical Recruitment Services GmbH provides ethical, comprehensive international recruitment for physicians, registered nurses, and therapists. We guide professionals across all administrative stages: from academic degree validation (ZAB/ZSBA) and visa processing to German medical language (FSP) and clinical knowledge (KP) examinations, securing permanent medical licensure (Approbation § 3 BÄO)."
              : "Die NabiOta Medical Recruitment Services GmbH übernimmt die strukturierte, ethische Rekrutierung und nachhaltige Eingliederung internationaler Mediziner, Pflegefachkräfte und Therapeuten. Wir begleiten Fachkräfte ganzheitlich von der ersten Äquivalenzprüfung über die Fachsprachprüfung (FSP) bis zur Kenntnisprüfung (KP) zur Erlangung der deutschen Approbation (§ 3 BÄO).",
            specificationsTitle: isRu ? "Этапы сопровождения" : isEn ? "Integration Stages" : "Integrations- & Begleitschritte",
            specifications: isRu
              ? [
                  "Предварительный аудит дипломов и документов в соответствии со стандартами ZAB и Bezirksregierung",
                  "Специализированные курсы медицинского немецкого (B2/C1 Medizin) с фокусом на анамнез и клиническую речь",
                  "Полное ведение визового процесса (§ 16d / § 18b AufenthG) и документов для посольства Германии",
                  "Подготовка к экзамену по профильному языку (Fachsprachenprüfung) при земельной врачебной палате",
                  "Клиническая практика (Hospitation) в клиниках холдинга с закрепленным врачом-наставником",
                  "Целевая подготовка и симуляционные тренинги к экзамену на апробацию (Kenntnisprüfung)",
                ]
              : isEn
              ? [
                  "Comprehensive preliminary diploma equivalence evaluation in line with ZAB and regional health boards",
                  "Intensive specialized medical German language training (B2/C1 Medizin) focused on doctor-patient communication",
                  "End-to-end visa and immigration filing (§ 16d / § 18b AufenthG) with German embassies worldwide",
                  "Targeted preparation for the medical language exam (Fachsprachenprüfung) at state chambers of physicians",
                  "Clinical observation fellowship (Hospitation) inside NabiOta medical centers with personal mentors",
                  "Practical simulation training and prep courses for the full medical licensing exam (Kenntnisprüfung)",
                ]
              : [
                  "Vorprüfung ausländischer Ausbildungsnachweise gemäß Vorgaben der ZAB und Bezirksregierungen",
                  "Fachsprachkurse B2/C1 Medizin mit Fokus auf Anamnese, Patientenkommunikation und Dokumentation",
                  "Komplettes Visums- und Behördenmanagement nach § 16d / § 18b AufenthG",
                  "Gezielte Prüfungsvorbereitung auf die Fachsprachenprüfung (FSP) bei den Landesärztekammern",
                  "Mehrwöchige klinische Hospitationen in MVZ und Fachabteilungen mit festem Mentoring",
                  "Praktische Falltrainings zur erfolgreichen Vorbereitung auf die Kenntnisprüfung (KP § 3 BÄO)",
                ],
            scopeTitle: isRu ? "Пакет для специалистов" : isEn ? "Candidate Services" : "Leistungsportfolio für Fachkräfte",
            scopeItems: isRu
              ? [
                  "Официальный бессрочный трудовой договор с клиникой группы после успешной сдачи экзаменов",
                  "Помощь в поиске жилья, регистрации по месту жительства и открытии банковских счетов",
                  "Семейная интеграция: содействие в получении виз для воссоединения семьи и устройстве детей в школы",
                  "Юридическая поддержка по всем вопросам трудового права и признания квалификации",
                  "Прозрачные условия без скрытых комиссий в соответствии с кодексом ВОЗ по этичному найму",
                ]
              : isEn
              ? [
                  "Permanent, legally protected German employment contract upon successful licensure",
                  "Hands-on relocation support: housing search, municipal registration, and banking setup",
                  "Family integration: support for family reunification visas, daycare, and schooling",
                  "Full legal guidance on healthcare labor law, collective agreements, and career progression",
                  "Transparent, zero-placement-fee model compliant with WHO Global Code of Practice on International Recruitment",
                ]
              : [
                  "Unbefristeter Arbeitsvertrag mit tarifkonformer Vergütung nach bestandener Approbationsprüfung",
                  "Praktische Relocation-Hilfe: Wohnungssuche, Behördengänge, Anmeldung und Bankkonteneröffnung",
                  "Familienbegleitung: Unterstützung beim Familiennachzug, Kitaplätzen und Schulzulassungen",
                  "Rechtliche und arbeitsrechtliche Betreuung während des gesamten Anerkennungsprozesses",
                  "Verpflichtung auf den ethischen WHO-Verhaltenskodex für die internationale Rekrutierung von Gesundheitsfachkräften",
                ],
            technicalTitle: isRu ? "Законодательная база" : isEn ? "Legal Framework" : "Rechtliche Grundlagen",
            technicalText: isRu
              ? "Процедура признания квалификации и найма строго регулируется § 3 Bundesärzteordnung (BÄO), § 10 BÄO (Berufserlaubnis), Pflegeberufegesetz (PflBG) и Aufenthaltsgesetz (AufenthG)."
              : isEn
              ? "Professional licensing and immigration operate strictly under § 3 BÄO (Federal Medical Code), § 10 BÄO (Temporary permit), PflBG (Nursing Professions Act), and German AufenthG."
              : "Das Anerkennungsverfahren und die Zuwanderung erfolgen strikt auf Grundlage von § 3 BÄO, § 10 BÄO, des Pflegeberufegesetzes (PflBG) sowie der §§ 16d, 18b des Aufenthaltsgesetzes.",
            ctaButtonText: isRu ? "Подать заявку на программу" : isEn ? "Apply for Program" : "Bewerbung / Programm anfragen",
          },
        },
        {
          id: "wissenstransfer-akademie",
          tag: isRu ? "АКАДЕМИЯ & ОБУЧЕНИЕ" : isEn ? "EDUCATION" : "AKADEMIE",
          image: "/images/international/world-hands.webp",
          iconType: "academy",
          title: isRu
            ? "Wissenstransfer & Klinische Weiterbildung (NabiOta Academy)"
            : isEn
            ? "Knowledge Transfer & Clinical Education (NabiOta Academy)"
            : "Wissenstransfer & Klinische Weiterbildung (NabiOta Academy)",
          shortDesc: isRu
            ? "Клинические стажировки, практические мастер-классы по малоинвазивной хирургии и симпозиумы."
            : isEn
            ? "Clinical fellowships, hands-on surgical masterclasses, and international academic symposia."
            : "Klinische Hospitationen, Hands-on-Workshops in minimalinvasiver Chirurgie und interdisziplinäre Symposien.",
          modal: {
            title: isRu
              ? "Трансфер знаний & Клиническая академия (NabiOta Academy)"
              : isEn
              ? "Knowledge Transfer & Clinical Academy (NabiOta Academy)"
              : "Wissenstransfer & Klinische Weiterbildung (NabiOta Academy)",
            subtitle: isRu
              ? "Практические курсы малоинвазивной хирургии, стажировки и сертификационные программы"
              : isEn
              ? "Advanced surgical masterclasses, clinical observerships, and certified training modules"
              : "Zertifizierte Fortbildungskonzepte, chirurgische Masterclasses und interdisziplinärer Wissenstransfer",
            description: isRu
              ? "NabiOta Academy — образовательное подразделение холдинга, реализующее программы повышения квалификации для зарубежных врачей и медицинских менеджеров. Мы организуем интенсивные клинические стажировки в центрах холдинга, мастер-классы по артроскопии, эндоскопии, микрохирургии и радиационной безопасности, транслируя передовой немецкий медицинский опыт."
              : isEn
              ? "NabiOta Academy is the group's educational arm dedicated to international physician education and healthcare management training. We offer intensive surgical observerships, hands-on workshops in arthroscopy, endoscopy, and microsurgery, and structured courses in radiation protection, equipping global clinicians with German medical excellence."
              : "Die NabiOta Academy bildet die wissenschaftliche und didaktische Brücke zu unseren internationalen Partnern. Wir bieten maßgeschneiderte Weiterbildungscurricula, chirurgische Hands-on-Workshops, strukturierte Hospitationsprogramme sowie Management-Seminare für ärztliche Führungskräfte und Pflegedienstleitungen.",
            specificationsTitle: isRu ? "Образовательные форматы" : isEn ? "Curriculum Modules" : "Curricula & Weiterbildungsformate",
            specifications: isRu
              ? [
                  "Клинические стажировки (Observership & Fellowship) продолжительностью от 2 до 12 недель",
                  "Hands-on мастер-классы по малоинвазивной хирургии позвоночника и суставов",
                  "Курсы по интервенционной радиологии и современной протокольной диагностике 3T MRT",
                  "Обучение стандартам сестринского ухода и современному лечению ран (ICW)",
                  "Курсы по медицинскому менеджменту, организации центров MVZ и оптимизации клинических процессов",
                  "Выдача официальных сертификатов о прохождении обучения с баллами CME",
                ]
              : isEn
              ? [
                  "Structured clinical observerships and advanced fellowships ranging from 2 to 12 weeks",
                  "Hands-on simulation wet-lab masterclasses in minimally invasive joint and spine surgery",
                  "Advanced diagnostic imaging workshops covering 3T MRI, low-dose CT, and ultrasound protocols",
                  "Certified clinical wound management (ICW standards) and modern geriatric nursing seminars",
                  "Executive healthcare management programs: establishing MVZ networks and Lean hospital workflows",
                  "Accredited certificates of completion with recognized European continuing medical education (CME) credits",
                ]
              : [
                  "Strukturierte klinische Hospitationen (2 bis 12 Wochen) in unseren Fachzentren und OP-Sälen",
                  "Hands-on-Workshops für minimalinvasive arthroskopische und neurochirurgische Techniken",
                  "Fachseminare für High-End-Schnittbilddiagnostik (3T MRT, Low-Dose CT) und Strahlenschutz",
                  "Zertifizierte Weiterbildungsmodule für modernes Wundmanagement (nach ICW-Richtlinien)",
                  "Führungskräfte-Workshops zur ambulanten MVZ-Organisation, Qualitätsmanagement und Controlling",
                  "Vergabe zertifizierter Fortbildungsnachweise mit offizieller CME-Punkte-Anerkennung",
                ],
            scopeTitle: isRu ? "Оснащение академии" : isEn ? "Academy Infrastructure" : "Didaktische Ausstattung",
            scopeItems: isRu
              ? [
                  "Прямая видеотрансляция из чистых операционных залов класса 1a в конференц-зал в формате 4K",
                  "Симуляционные тренировочные стенды для отработки артроскопических и эндоскопических навыков",
                  "Индивидуальное кураторство ведущими главными врачами и профессорами холдинга",
                  "Синхронный перевод лекций и клинических разборов на английский и русский языки",
                  "Полный доступ к цифровой медицинской библиотеке и клиническим стандартам холдинга",
                ]
              : isEn
              ? [
                  "Live 4K Ultra-HD audiovisual broadcasting directly from Class 1a surgical cleanroom suites to lecture halls",
                  "Advanced anatomical simulation workstations for hands-on arthroscopic and endoscopic dexterity training",
                  "One-on-one mentorship led by NabiOta chief surgeons and senior medical faculty members",
                  "Simultaneous interpretation of clinical rounds and operative case reviews into English and Russian",
                  "Comprehensive digital repository access containing all standard operating procedures (SOPs) and clinical protocols",
                ]
              : [
                  "Live-Übertragung von Eingriffen aus Reinraum-OP-Sälen der Klasse 1a in 4K-Ultra-HD-Auflösung",
                  "Moderne Wet-Lab- und Simulatoren-Arbeitsplätze für endoskopische und mikrochirurgische Übungen",
                  "Persönliche Betreuung durch erfahrene NabiOta-Chefärzte und Lehrbeauftragte",
                  "Simultanübersetzung klinischer Fallvorstellungen auf Englisch und Russisch",
                  "Vollständiger Zugriff auf das klinikinterne digitale SOP- und Qualitätsmanagementsystem",
                ],
            technicalTitle: isRu ? "Аккредитация" : isEn ? "Accreditation" : "Akkreditierung & Zertifizierung",
            technicalText: isRu
              ? "Программы академии сертифицированы в соответствии с требованиями Landesärztekammer (Врачебной палаты земли Северный Рейн-Вестфалия) и соответствуют международным рекомендациям CME/CPD."
              : isEn
              ? "Academy curricula comply with continuing medical education directives of the State Medical Chamber of North Rhine-Westphalia (ÄkNo) and international CME/CPD criteria."
              : "Die Fortbildungsveranstaltungen werden nach den Richtlinien der Ärztekammer Nordrhein zertifiziert und mit anerkannten Fortbildungspunkten (CME) bewertet.",
            ctaButtonText: isRu ? "Запросить программу обучения" : isEn ? "Inquire Academy Course" : "Weiterbildung anfragen",
          },
        },
        {
          id: "humanitaere-projekte",
          tag: isRu ? "ГУМАНИТАРНЫЕ МИССИИ" : isEn ? "HUMANITARIAN" : "HUMANITÄR",
          image: "/images/international/project-africa.webp",
          iconType: "humanitarian",
          title: isRu
            ? "Гуманитарные медицинские проекты & Мобильная помощь"
            : isEn
            ? "Humanitarian Health Initiatives & Mobile Primary Care"
            : "Humanitäre Gesundheitsprojekte & Mobiler Primärversorgungsaufbau",
          shortDesc: isRu
            ? "Укрепление сельских пунктов помощи, мобильные диагностические комплексы и охрана материнства."
            : isEn
            ? "Sustainable enhancement of rural health posts, mobile screening units, and maternal-child care."
            : "Nachhaltige Stärkung ländlicher Gesundheitsstationen, mobile Screening-Einheiten und Schutz von Mutter & Kind.",
          modal: {
            title: isRu
              ? "Гуманитарные проекты & Мобильная первичная помощь"
              : isEn
              ? "Humanitarian Health Initiatives & Mobile Primary Care"
              : "Humanitäre Gesundheitsprojekte & Mobiler Primärversorgungsaufbau",
            subtitle: isRu
              ? "Создание автономных фельдшерских пунктов, охрана здоровья матерей и мобильные скрининги"
              : isEn
              ? "Empowering rural clinics, maternal-child health infrastructure, and mobile screening units"
              : "Nachhaltige Stärkung ländlicher Versorgungsstrukturen und mobile Präventionsmedizin",
            description: isRu
              ? "В рамках корпоративной социальной ответственности (CSR) NabiOta® реализует гуманитарные медицинские проекты в развивающихся регионах. Мы поставляем сертифицированное диагностическое оборудование, организуем автономные акушерские и мобильные смотровые пункты на базе полноприводных шасси, а также обучаем местный медицинский персонал основам скрининга и профилактики."
              : isEn
              ? "As part of our commitment to global health equity, NabiOta® leads humanitarian healthcare deployments in underserved regions. We provide certified refurbished medical hardware, build decentralized maternity and primary care posts, deploy 4x4 mobile health clinics for remote populations, and train community health workers in early disease detection."
              : "Gemäß unserer gesellschaftlichen Verantwortung engagiert sich die NabiOta-Gruppe in humanitären Gesundheitsprojekten weltweit. Der Fokus liegt auf dem nachhaltigen Aufbau autarker Geburts- und Basisgesundheitsstationen in ländlichen Regionen, der Entsendung mobiler Ambulanz- und Screening-Fahrzeuge sowie der praxisnahen Schulung des medizinischen Personals vor Ort.",
            specificationsTitle: isRu ? "Гуманитарные инициативы" : isEn ? "Project Pillars" : "Projektschwerpunkte",
            specifications: isRu
              ? [
                  "Оснащение сельских родильных и акушерских пунктов базовым мониторингом и стерилизаторами",
                  "Мобильные диагностические модули (УЗИ, экспресс-лаборатория, офтальмологический скрининг)",
                  "Программы профилактики и раннего выявления инфекционных и сердечно-сосудистых патологий",
                  "Поставка сертифицированных функциональных медицинских кроватей и инвалидных колясок",
                  "Обучение местных акушерок и медсестер основам реанимации новорожденных (Neonatal Life Support)",
                  "Создание систем автономного солнечного электроснабжения для холодильников с вакцинами",
                ]
              : isEn
              ? [
                  "Equipping rural maternity and midwifery centers with fetal monitors, ultrasound, and autoclaves",
                  "Mobile 4x4 clinic units equipped with point-of-care lab analyzers and ultrasound scanners",
                  "Screening initiatives targeting early detection of infectious diseases, diabetes, and hypertension",
                  "Donation and installation of hospital beds, orthopedic mobility aids, and specialized surgical gear",
                  "Train-the-trainer workshops for local nurses and midwives in Neonatal Resuscitation & Life Support",
                  "Solar-powered mini-grid and cold-chain vaccine refrigeration installations for off-grid clinics",
                ]
              : [
                  "Ausstattung ländlicher Geburtsstationen mit Ultraschallgeräten, CTG-Monitoren und Sterilisatoren",
                  "Einsatz allradgetriebener mobiler Untersuchungsfahrzeuge für schwer zugängliche ländliche Räume",
                  "Strukturierte Vorsorgeprogramme zur Früherkennung von Diabetes, Hypertonie und Infektionskrankheiten",
                  "Bereitstellung von Pflegebetten, Gehhilfen und Rollstühlen aus NabiOta-Beständen",
                  "Train-the-Trainer-Seminare für Hebammen und Pflegekräfte in Neugeborenen-Notfallversorgung",
                  "Installation solarbetriebener Kühlketten für die zuverlässige Lagerung lebenswichtiger Impfstoffe",
                ],
            scopeTitle: isRu ? "Принципы устойчивости" : isEn ? "Sustainability Principles" : "Nachhaltigkeitskonzept",
            scopeItems: isRu
              ? [
                  "Партнерство с местными министерствами здравоохранения и аккредитованными НКО",
                  "Отказ от разовых акций — акцент на обучении местных специалистов для самостоятельной работы",
                  "Обеспечение долгосрочной доступности запасных частей и сервиса оборудования",
                  "Прозрачная отчетность и аудит целевого использования направляемых средств",
                  "Соответствие целям устойчивого развития ООН (SDG 3: Хорошее здоровье и благополучие)",
                ]
              : isEn
              ? [
                  "Close cooperation with regional health ministries, community leaders, and accredited NGOs",
                  "Long-term local capacity building ensuring independence from ongoing foreign intervention",
                  "Secured supply chains for consumable parts, device maintenance, and clinical consumables",
                  "Rigorous financial transparency, donor impact reporting, and annual on-site audits",
                  "Direct alignment with United Nations Sustainable Development Goals (UN SDG 3: Good Health and Well-Being)",
                ]
              : [
                  "Enge Zusammenarbeit mit lokalen Gesundheitsbehörden, Dorfvorstehern und akkreditierten NGOs",
                  "Fokus auf 'Hilfe zur Selbsthilfe' durch Qualifizierung des lokalen Personals",
                  "Langfristige Ersatzteilversorgung und Schulung von Medizintechnikern vor Ort",
                  "Lückenlose Dokumentation und Auditierung aller eingesetzten Sach- und Geldmittel",
                  "Ausrichtung an den UN-Nachhaltigkeitszielen (SDG 3: Gesundheit und Wohlergehen für alle)",
                ],
            technicalTitle: isRu ? "Международные нормы" : isEn ? "International Guidelines" : "Internationale Richtlinien",
            technicalText: isRu
              ? "Все проекты реализуются в соответствии с гуманитарными принципами Sphere Project, стандартами ВОЗ и требованиями европейского экспортного контроля медицинских технологий."
              : isEn
              ? "All deployments strictly adhere to Sphere Humanitarian Charter standards, WHO Essential Health Package guidelines, and German medical device export compliance."
              : "Die Durchführung erfolgt gemäß den humanitären Mindeststandards des Sphere-Projekts sowie den Leitlinien der Weltgesundheitsorganisation (WHO).",
            ctaButtonText: isRu ? "Поддержать гуманитарный проект" : isEn ? "Support Humanitarian Project" : "Projektanfrage stellen",
          },
        },
        {
          id: "medical-travel",
          tag: isRu ? "МЕДИЦИНСКИЙ ТУРИЗМ" : isEn ? "MEDICAL TRAVEL" : "PATIENTENSERVICE",
          image: "/images/about/hero-doctors.webp",
          iconType: "medicalTravel",
          title: isRu
            ? "Международный сервис для пациентов (Cross-Border Medical Care)"
            : isEn
            ? "International Patient Service & Cross-Border Medical Care"
            : "Internationale Patientenbetreuung & Medical Travel Service",
          shortDesc: isRu
            ? "Комплексная организация лечения в Германии: врачебный консилиум, медицинская виза, переводчики и сопровождение."
            : isEn
            ? "End-to-end coordination of premier care in Germany: medical review, visa support, interpreters & aftercare."
            : "Ganzheitliche Koordination von Spitzenbehandlungen in Deutschland: Zweitmeinung, Visum, Dolmetscher & Nachsorge.",
          modal: {
            title: isRu
              ? "Международный сервис для пациентов (Medical Travel & Cross-Border Care)"
              : isEn
              ? "International Patient Office (Cross-Border Medical Care)"
              : "Internationale Patientenbetreuung & Medical Travel Service",
            subtitle: isRu
              ? "Организация планового лечения в клиниках холдинга NabiOta® в Германии под ключ"
              : isEn
              ? "End-to-end coordination for specialized treatment in German NabiOta® clinical centers"
              : "Ganzheitliche Betreuung und Organisation medizinischer Behandlungen in Deutschland",
            description: isRu
              ? "Международный отдел NabiOta® организует плановое лечение пациентов из любой точки мира в наших хирургических и диагностических центрах в Германии. Мы берем на себя предварительный анализ выписок ведущими немецкими профессорами, составление индивидуального сметного плана лечения, визовую поддержку, трансфер, сопровождение сертифицированными медицинскими переводчиками и реабилитационную реадаптацию."
              : isEn
              ? "The NabiOta® International Patient Department coordinates comprehensive clinical care in Germany for overseas patients. Our multilingual team manages case review by senior department heads, cost transparency through preliminary medical estimates, visa invitation letters, airport transfers, certified medical interpreters, and personalized inpatient or outpatient recovery."
              : "Das International Patient Office der NabiOta-Gruppe bietet Patienten aus aller Welt eine lückenlose, hochprofessionelle Betreuung bei Behandlungen in Deutschland. Von der ersten fachärztlichen Sichtung der Vorbefunde über die transparente Kostenschätzung bis hin zur Visumsunterstützung, Begleitung durch Dolmetscher und ambulanten Rehabilitation begleiten wir Sie persönlich.",
            specificationsTitle: isRu ? "Спектр медицинских услуг" : isEn ? "Clinical Services Provided" : "Leistungsspektrum für internationale Patienten",
            specifications: isRu
              ? [
                  "Малоинвазивная ортопедическая хирургия: эндопротезирование тазобедренных и коленных суставов",
                  "Специализированная нейрохирургия позвоночника (грыжи дисков, спондилодез, декомпрессия)",
                  "Комплексные программы Check-up обследования с 3T MRT и кардиоваскулярной диагностикой за 1–2 дня",
                  "Реконструктивная, пластическая и эстетическая хирургия с постоперационным стационаром",
                  "Курсы ранней нейрологической и ортопедической реабилитации в собственном терапевтическом центре",
                  "Амбулаторная специализированная онкологическая и кардиологическая диагностика",
                ]
              : isEn
              ? [
                  "Minimally invasive joint replacement: computer-assisted hip, knee, and shoulder arthroplasty",
                  "Micro-neurosurgical spine treatments: endoscopic herniated disc ablation and lumbar stabilization",
                  "Comprehensive 1-2 day executive executive health check-ups featuring 3T MRI and cardiovascular workups",
                  "Aesthetic and reconstructive plastic surgery with dedicated inpatient recovery suites",
                  "Post-operative multidisciplinary orthopedic and neurological inpatient/outpatient rehabilitation",
                  "Outpatient cardiology, gastroenterology, and early cancer detection clinics",
                ]
              : [
                  "Endoprothetische Gelenkchirurgie (Hüft-, Knie- und Schulter-TEP) mit minimalinvasiven Zugängen",
                  "Mikrochirurgische Wirbelsäulentherapie: Bandscheibenoperationen, Dekompression und Versteifungen",
                  "Komprimierte 1- bis 2-tägige Executive Check-ups mit 3T MRT, Low-Dose CT und Kardiologie",
                  "Plastisch-rekonstruktive und ästhetische Chirurgie mit hochmodernen Bettenstationen",
                  "Integrierte ambulante Anschlussheilbehandlung (AHB) und Physiotherapie im NabiOta-Rehazentrum",
                  "Ambulante multimodale Schmerztherapie und interventionelle Infiltrationen",
                ],
            scopeTitle: isRu ? "Сервис и координация" : isEn ? "Concierge & Coordination" : "Koordination & Patientenservice",
            scopeItems: isRu
              ? [
                  "Первичный аудит медицинских документов немецким врачом в течение 24–48 часов",
                  "Официальное медицинское приглашение (Einladung) для ускоренного оформления визы в посольстве",
                  "Прозрачная смета расходов (Kostenvoranschlag) на основе немецкого тарифного справочника GOÄ",
                  "Встреча в аэропорту Дюссельдорфа/Кёльна и персональный трансфер в клинику или отель",
                  "Предоставление персонального медицинского координатора и переводчика на весь период лечения",
                  "Перевод всех заключений и выписных эпикризов на английский или русский язык",
                ]
              : isEn
              ? [
                  "Physician review and preliminary clinical assessment within 24–48 hours of file submission",
                  "Official hospital visa invitation letter for accelerated processing at German embassies and consulates",
                  "Transparent cost estimates based strictly on official German medical fee schedules (GOÄ)",
                  "VIP airport pickup at Düsseldorf (DUS) or Cologne-Bonn (CGN) with private clinic transfer",
                  "Dedicated multilingual case manager and certified medical interpreters during all doctor visits",
                  "Translation of full discharge summaries, operative reports, and medication plans into English or Russian",
                ]
              : [
                  "Vorab-Prüfung der Unterlagen durch Chefärzte mit Therapieempfehlung binnen 24–48 Stunden",
                  "Ausstellung offizieller medizinischer Einladungsschreiben für das beschleunigte Visumverfahren",
                  "Transparenter Kostenvoranschlag auf Basis der Gebührenordnung für Ärzte (GOÄ)",
                  "VIP-Abholservice vom Flughafen Düsseldorf (DUS) oder Köln/Bonn (CGN) mit Hotelkoordination",
                  "Persönliche Begleitung durch mehrsprachige Patientenbetreuer und medizinische Dolmetscher",
                  "Vollständige Übersetzung aller Entlassungsberichte, OP-Berichte und Medikationspläne",
                ],
            technicalTitle: isRu ? "Финансовая и правовая прозрачность" : isEn ? "Financial & Legal Standards" : "Abrechnung & Rechtssicherheit",
            technicalText: isRu
              ? "Все расчеты ведутся строго на основе официального немецкого регламента оплаты медицинских услуг (Gebührenordnung für Ärzte - GOÄ) с открытым перечнем процедур и возвратом неиспользованных депозитных средств."
              : isEn
              ? "All medical invoicing strictly conforms to the statutory German fee schedule for physicians (GOÄ), ensuring itemized transparency and automatic refund of unused deposit balances."
              : "Die Abrechnung erfolgt transparent und gesetzeskonform nach der amtlichen Gebührenordnung für Ärzte (GOÄ). Nicht in Anspruch genommene Vorauszahlungen werden unverzüglich rückerstattet.",
            ctaButtonText: isRu ? "Запросить план лечения" : isEn ? "Request Treatment Plan" : "Behandlungsanfrage stellen",
          },
        },
      ] as InternationalProgram[],
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
          locale={locale}
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
          imageSrc="/images/international/international-hero-doctors.webp"
          imagePosition="object-[right_center]"
        />

        {/* ========================================================================= */}
        {/* SECTION 2: VISION (GESUNDHEIT KENNT KEINE GRENZEN) - FULL WIDTH BLEED     */}
        {/* ========================================================================= */}
        <section className="relative w-full bg-[#FAF8F4] overflow-hidden border-t border-[#F0ECE1]">
          {/* Right Visual: World Map & Joined Hands (Photo 3) - Shifted left as requested */}
          <div className="w-full lg:w-[68%] xl:w-[65%] h-[280px] sm:h-[340px] lg:h-full lg:absolute lg:top-0 lg:bottom-0 lg:right-0 relative pointer-events-none select-none overflow-hidden order-2 lg:order-none">
            <Image
              src="/images/international/world-map-hands.webp"
              alt="World Map and Joined Hands - NabiOta Vision"
              fill
              className="object-cover object-[60%_center] sm:object-[64%_center] lg:object-[68%_center]"
              priority
            />
            {/* Soft left gradient fade into the cream background on desktop */}
            <div className="hidden lg:block absolute inset-y-0 left-0 w-36 xl:w-48 bg-gradient-to-r from-[#FAF8F4] via-[#FAF8F4]/80 to-transparent pointer-events-none" />
            <div className="lg:hidden absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#FAF8F4] to-transparent pointer-events-none" />
          </div>

          {/* Left Content: Standard Container alignment - Height reduced as requested */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 xl:py-14">
            <div className="max-w-xl space-y-3.5 sm:space-y-4">
              <div className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#A07D3E] uppercase font-sans">
                {t.s2.eyebrow}
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-serif font-bold text-[#0B2516] leading-[1.18] tracking-tight">
                {t.s2.title}
              </h2>

              <p className="text-xs sm:text-[13.5px] text-[#4A5D52] leading-relaxed max-w-lg">
                {t.s2.desc}
              </p>

              <div className="pt-1.5 sm:pt-2">
                <a
                  href="#projekte"
                  className="inline-flex items-center gap-2.5 px-6 py-2.5 sm:py-3 rounded-full bg-[#F3EAD8] hover:bg-[#ECCF96] text-[#0B2516] border border-[#D5C096] text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm group"
                >
                  <span>{t.s2.btn}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: UNSERE INTERNATIONALEN SCHWERPUNKTE (6 PROGRAMME IN 3 SPALTEN) */}
        {/* ========================================================================= */}
        <section id="projekte" className="py-14 sm:py-18 bg-white border-t border-[#F0ECE1]">
          <Container>
            {/* Header with Title and Link on the right */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div className="space-y-2.5 max-w-2xl">
                <div className="text-xs font-semibold tracking-[0.2em] text-[#B8934A] uppercase font-sans">
                  {t.s4.eyebrow}
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B2516] leading-tight">
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

            {/* 6 Programs Grid in the authentic international card style matching reference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.s4.programs.map((prog, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedProgram(prog)}
                  className="group bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#EBE6DC] shadow-xs hover:shadow-xl hover:border-[#ECCF96] transition-all duration-300 flex flex-col cursor-pointer"
                >
                  {/* Program Image without Region Tag */}
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={prog.image}
                      alt={prog.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Program Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-base font-serif font-bold text-[#0B2516] leading-snug group-hover:text-[#B8934A] transition-colors">
                        {prog.title}
                      </h3>
                      <p className="text-xs text-[#4A5D52] leading-relaxed">
                        {prog.shortDesc}
                      </p>
                    </div>

                    {/* Bottom Action Area: Details Pill Button + Circle Arrow Button */}
                    <div className="pt-2 flex items-center justify-between border-t border-[#EBE5DA]/60">
                      <span className="text-[11px] font-semibold text-[#8C6D37] group-hover:text-[#0B2516] transition-colors">
                        {t.s4.openModalBtn}
                      </span>
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
        {/* SECTION 4B: NABIOTA MEDICAL RECRUITMENT SERVICES GMBH – PDF IV.6         */}
        {/* ========================================================================= */}
        <RecruitmentCompanySection locale={locale} />

        {/* ========================================================================= */}
        {/* SECTION 5: IMPACT BANNER (DARK EMERALD SPLIT SECTION WITH BOTANICAL BG)    */}
        {/* ========================================================================= */}
        <section className="relative bg-[#07190F] text-white overflow-hidden border-y border-[#D5B878]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
            {/* Left Column: Camper van on canyon road (Photo 1) */}
            <div className="lg:col-span-6 relative min-h-[280px] lg:min-h-[420px]">
              <Image
                src="/images/international/impact-camper-van.webp"
                alt="Sustainable Solutions for Healthy Communities"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/30 via-transparent to-[#07190F] pointer-events-none" />
              {/* Extra right-edge fade into solid #07190F on desktop */}
              <div className="hidden lg:block absolute inset-y-0 right-0 w-32 xl:w-48 bg-gradient-to-r from-transparent to-[#07190F] pointer-events-none" />
            </div>

            {/* Right Column: Impact Metrics with botanical-gold-bg.webp background */}
            <div className="lg:col-span-6 relative overflow-hidden p-8 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-center space-y-6 sm:space-y-7 bg-[#07190F]">
              {/* Botanical Gold Background Texture across right green part */}
              <div className="absolute inset-0 pointer-events-none z-0">
                <Image
                  src="/images/botanical-gold-bg.webp"
                  alt="Botanical Texture"
                  fill
                  className="object-fill opacity-100"
                  priority
                />
                {/* Ultra-smooth seamless blend from dark seam into botanical background */}
                <div className="hidden lg:block absolute inset-y-0 left-0 w-44 xl:w-64 bg-gradient-to-r from-[#07190F] via-[#07190F]/70 to-transparent pointer-events-none" />
                <div className="lg:hidden absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#07190F] via-[#07190F]/70 to-transparent pointer-events-none" />
              </div>

              <div className="relative z-10 space-y-3 sm:space-y-4">
                <div className="inline-block text-xs font-semibold tracking-[0.2em] text-[#ECCF96] uppercase font-sans">
                  {t.s5.eyebrow}
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-serif font-bold text-white leading-tight">
                  {t.s5.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#D1DDD5] leading-relaxed max-w-lg">
                  {t.s5.desc}
                </p>
              </div>

              {/* 4 Stats Grid */}
              <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-5 pt-3 border-t border-white/15">
                {t.s5.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
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
        {/* SECTION 6: STIMMEN AUS DER ZUSAMMENARBEIT (3 TESTIMONIALS - LARGER CARDS) */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-16 lg:py-20 bg-[#FAF7F2] border-t border-[#EBE6DC]">
          <Container>
            {/* Header matching Photo */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
              <div className="space-y-2.5 max-w-2xl">
                <div className="text-xs font-semibold tracking-[0.2em] text-[#B8934A] uppercase font-sans">
                  {t.s6.eyebrow}
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0B2516] leading-tight">
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

            {/* 3 Testimonials Grid matching Photo 2: LARGER cards, prominent avatars, full quote */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
              {t.s6.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-[#E5DFD3] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 min-h-[270px] sm:min-h-[290px]"
                >
                  {/* Top: Avatar on left + Quote on right */}
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden border-2 border-[#D8C7A5]/80 shrink-0 shadow-2xs">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-xs sm:text-[14px] text-[#1B3A29] leading-relaxed italic flex-1 pt-1 font-serif sm:font-sans">
                      {item.quote}
                    </p>
                  </div>

                  {/* Middle: Author Info */}
                  <div className="space-y-1 pl-1">
                    <h4 className="text-sm sm:text-base font-bold text-[#0B2516] leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#556358] leading-tight">
                      {item.role}
                    </p>
                    <p className="text-xs text-[#556358] leading-tight">
                      {item.location}
                    </p>
                  </div>

                  {/* Bottom: 5 Gold Stars */}
                  <div className="pt-1 flex text-[#D4AF37] gap-1 pl-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-[#D4AF37]" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: BOTTOM CTA BANNER (PHOTO 2 - INCREASED HEIGHT)                 */}
        {/* ========================================================================= */}
        <section className="relative w-full overflow-hidden min-h-[340px] sm:min-h-[380px] lg:min-h-[420px] flex items-center bg-[#FAF7F2] border-t border-[#EBE6DC]">
          {/* Panoramic Sunrise Mountain Photo (Photo 2) spanning full width edge-to-edge */}
          <Image
            src="/images/international/cta-sunrise-mountains.webp"
            alt="Globale Partnerschaften. Lokale Wirkung."
            fill
            className="object-cover object-center"
            priority
          />
          {/* Subtle soft gradient on left for gentle contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/65 via-[#FAF7F2]/25 to-transparent pointer-events-none" />

          {/* Left Text & CTA Button aligned with site container - Increased height & padding */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="max-w-xl space-y-3.5 sm:space-y-4">
              <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-[#8C6527] uppercase font-sans">
                {t.s7.eyebrow}
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-serif font-bold text-[#0B2516] leading-tight">
                {t.s7.title}
              </h2>

              <p className="text-xs sm:text-[13.5px] text-[#4A5D52] leading-relaxed max-w-lg">
                {t.s7.desc}
              </p>

              <div className="pt-2 sm:pt-2.5">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#FAF7F2] hover:bg-[#ECCF96] text-[#0B2516] border border-[#D8C7A5] text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm group"
                >
                  <span>{t.s7.btn}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* INTERACTIVE MODAL DIALOG: INTERNATIONAL COOPERATION DOMAINS               */}
        {/* ========================================================================= */}
        {selectedProgram && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setSelectedProgram(null)}
          >
            <div
              className="relative w-full max-w-5xl xl:max-w-[1100px] max-h-[92vh] overflow-y-auto rounded-3xl bg-[#FAF9F6] border border-[#E8DEC8] shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProgram(null)}
                aria-label="Close modal"
                className="absolute top-5 right-5 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-[#EFE8D8] hover:bg-[#E2D5BE] text-[#0E281C] flex items-center justify-center transition-colors shadow-2xs z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-3 mb-6 pr-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2516] text-[#ECCF96] text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                  <Globe2 className="w-3.5 h-3.5" />
                  <span>{selectedProgram.tag}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0E281C] leading-tight">
                  {selectedProgram.modal.title}
                </h3>

                <p className="text-xs sm:text-sm font-medium text-[#8D6B27]">
                  {selectedProgram.modal.subtitle}
                </p>
              </div>

              {/* Modal Body: Description */}
              <div className="space-y-4 mb-7 text-xs sm:text-sm text-[#405448] leading-relaxed border-t border-[#E8DEC8] pt-5">
                <p>{selectedProgram.modal.description}</p>
              </div>

              {/* Two-Column Grid: Specifications & Implementation Scope */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-7">
                {/* Column 1: Clinical Domains */}
                <div className="p-5 rounded-2xl bg-[#F4EFE6] border border-[#E5DAC4] space-y-3">
                  <h4 className="font-serif text-sm sm:text-base font-bold text-[#0E281C] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#2E6845] shrink-0" />
                    <span>{selectedProgram.modal.specificationsTitle}</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-[13px] text-[#33473B]">
                    {selectedProgram.modal.specifications.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2E6845] shrink-0 mt-1.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Implementation & Scope */}
                <div className="p-5 rounded-2xl bg-[#F4EFE6] border border-[#E5DAC4] space-y-3">
                  <h4 className="font-serif text-sm sm:text-base font-bold text-[#0E281C] flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#8D6B27] shrink-0" />
                    <span>{selectedProgram.modal.scopeTitle}</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-[13px] text-[#33473B]">
                    {selectedProgram.modal.scopeItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8D6B27] shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Regulatory & Safety Standards Bar */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#EAF2ED] border border-[#C5DDCB] flex items-start gap-3.5 mb-7">
                <ShieldCheck className="w-5 h-5 text-[#215E39] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h5 className="font-sans text-xs sm:text-[13px] font-bold text-[#143B23]">
                    {selectedProgram.modal.technicalTitle}
                  </h5>
                  <p className="text-[11px] sm:text-xs text-[#30533C] leading-relaxed">
                    {selectedProgram.modal.technicalText}
                  </p>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#E8DEC8]">
                <button
                  type="button"
                  onClick={() => setSelectedProgram(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-[#D5C7B0] text-xs font-semibold text-[#405448] hover:bg-[#EFE8D8] transition-colors order-2 sm:order-1"
                >
                  {isRu ? "Закрыть окно" : isEn ? "Close window" : "Schließen"}
                </button>

                <Link
                  href={`/${locale}/contact`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#0B2516] hover:bg-[#163D29] text-white text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md group order-1 sm:order-2"
                >
                  <span>{selectedProgram.modal.ctaButtonText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* 3. Global Footer */}
      <Footer currentLocale={locale} />
    </div>
  );
}
