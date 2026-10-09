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
  const isUz = locale === "uz";
  const isRu = locale === "ru";
  const isEn = locale === "en";
  const isTr = locale === "tr";
  const isAr = locale === "ar";

  // Standard Site PageHero Data
  const heroData = {
    title: isUz
      ? "Xalqaro hamkorlik"
      : isRu
      ? "Международное сотрудничество"
      : isEn
      ? "International Cooperation"
      : isTr
      ? "Uluslararası İşbirliği"
      : isAr
      ? "التعاون والشراكات الدولية"
      : "Internationale Kooperationen",
    subtitle: isUz
      ? "Butun dunyo bo'ylab barqaror sog'liqni saqlash tizimi uchun global hamkorliklar"
      : isRu
      ? "Глобальные партнерства ради устойчивого здравоохранения"
      : isEn
      ? "Global Partnerships for Sustainable Healthcare Worldwide"
      : isTr
      ? "Dünya Çapında Sürdürülebilir Sağlık Hizmetleri İçin Küresel Ortaklıklar"
      : isAr
      ? "شراكات عالمية من أجل رعاية صحية مستدامة حول العالم"
      : "Globale Partnerschaften für eine nachhaltige Gesundheitsversorgung",
    eyebrow: isUz
      ? "GLOBAL SOG'LIQNI SAQLASH VA AL'YANSLAR"
      : isRu
      ? "ГЛОБАЛЬНОЕ ЗДРАВООХРАНЕНИЕ"
      : isEn
      ? "GLOBAL HEALTHCARE & ALLIANCES"
      : isTr
      ? "KÜRESEL SAĞLIK VE İTTİFAKLAR"
      : isAr
      ? "الرعاية الصحية العالمية والتحالفات"
      : "GLOBALE GESUNDHEIT & ALLIANZEN",
    desc: isUz
      ? "NabiOta® Health Group butun dunyo bo'ylab sog'liqni saqlash tizimlarini barqaror mustahkamlash va kelajakka mos tibbiy xizmat ko'rsatish tuzilmalarini barpo etish maqsadida ilg'or tibbiy tajriba, akademik tadqiqotlar va ko'p tomonlama strategik hamkorlikni birlashtiradi."
      : isRu
      ? "NabiOta® International развивает трансграничные альянсы с ведущими клиниками, международными организациями и правительствами. Мы объединяем опыт, ресурсы и технологии для устойчивого развития медицины."
      : isEn
      ? "NabiOta® International connects hospitals, academic centers, and global health bodies to exchange knowledge, empower local workforces, and build resilient healthcare systems worldwide."
      : isTr
      ? "NabiOta® Health Group; dünya çapında sağlık sistemlerini sürdürülebilir biçimde güçlendirmek ve geleceğe hazır bakım yapıları kurmak için tıbbi uzmanlığı, akademik araştırmayı ve çok taraflı ortaklıkları bir araya getirir."
      : isAr
      ? "تجمع مجموعة NabiOta® الصحية بين الخبرة الطبية المتقدمة والبحوث الأكاديمية والشراكات متعددة الأطراف لتعزيز النظم الصحية عالمياً وبناء هياكل رعاية مستقبلية مستدامة."
      : "Die NabiOta® Health Group verbindet medizinisches Fachwissen, akademische Forschung und multilaterale Partnerschaften, um Gesundheitssysteme weltweit nachhaltig zu stärken und zukunftsfähige Versorgungsstrukturen zu etablieren.",
  };

  const heroBadges = [
    {
      icon: <Globe2 className="w-5 h-5 text-[#ECCF96]" />,
      title: isUz
        ? "25+ Mamlakat"
        : isRu
        ? "25+ Стран"
        : isEn
        ? "25+ Countries"
        : isTr
        ? "25+ Ülke"
        : isAr
        ? "+25 دولة"
        : "25+ Länder",
      sub: isUz
        ? "Global tarmoq"
        : isRu
        ? "Глобальная сеть"
        : isEn
        ? "Global Network"
        : isTr
        ? "Küresel Ağ"
        : isAr
        ? "شبكة عالمية"
        : "Weltweites Netzwerk",
    },
    {
      icon: <Award className="w-5 h-5 text-[#ECCF96]" />,
      title: isUz
        ? "JSST va NNT hamkorlari"
        : isRu
        ? "WHO & NGO"
        : isEn
        ? "WHO & NGOs"
        : isTr
        ? "DSÖ ve STK Ortakları"
        : isAr
        ? "منظمة الصحة العالمية والمنظمات غير الحكومية"
        : "WHO & NGO Partner",
      sub: isUz
        ? "Akkreditatsiyalangan al'yanslar"
        : isRu
        ? "Официальные альянсы"
        : isEn
        ? "Official Alliances"
        : isTr
        ? "Akredite İttifaklar"
        : isAr
        ? "تحالفات معتمدة"
        : "Akkreditierte Allianzen",
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#ECCF96]" />,
      title: isUz
        ? "Barqaror natija"
        : isRu
        ? "Устойчивый Impact"
        : isEn
        ? "Sustainable Impact"
        : isTr
        ? "Sürdürülebilir Etki"
        : isAr
        ? "أثر مستدام"
        : "Nachhaltiger Impact",
      sub: isUz
        ? "300.000+ qamrab olingan inson"
        : isRu
        ? "300.000+ пациентов"
        : isEn
        ? "300,000+ Reached"
        : isTr
        ? "300.000+ Ulaşılan Kişi"
        : isAr
        ? "+300,000 مستفيد"
        : "300.000+ Erreicht",
    },
  ];

  // Content texts matching mockup 1:1
  const t = {
    // Section 2: Vision
    s2: {
      eyebrow: isUz
        ? "BIZNING QARASHIMIZ"
        : isRu
        ? "НАШЕ ВИДЕНИЕ"
        : isEn
        ? "OUR VISION"
        : isTr
        ? "VİZYONUMUZ"
        : isAr
        ? "رؤيتنا"
        : "UNSERE VISION",
      title: isUz
        ? "Salomatlik chegara bilmaydi."
        : isRu
        ? "Здоровье не знает границ."
        : isEn
        ? "Health Knows No Borders."
        : isTr
        ? "Sağlık Sınır Tanımaz."
        : isAr
        ? "الصحة لا تعرف حدوداً."
        : "Gesundheit kennt keine Grenzen.",
      desc: isUz
        ? "Biz hamkorlik kuchiga ishonamiz. Xalqaro al'yanslar orqali yuqori sifatli tibbiy yordamdan foydalanish imkoniyatini kengaytiramiz, mahalliy mutaxassislarni qo'llab-quvvatlaymiz va sog'liqni saqlash tizimlarining uzoq muddatli mustahkamlanishiga hissa qo'shamiz."
        : isRu
        ? "Мы верим в силу сотрудничества. Благодаря международным партнерствам мы расширяем доступ к высококачественной медицинской помощи, поддерживаем специалистов на местах и способствуем долгосрочному укреплению систем здравоохранения."
        : isEn
        ? "We believe in the power of cooperation. Through international alliances, we promote access to high-quality healthcare, empower local professionals, and contribute to sustainably strengthening health systems."
        : isTr
        ? "İşbirliğinin gücüne inanıyoruz. Uluslararası ortaklıklar aracılığıyla yüksek kaliteli sağlık hizmetlerine erişimi teşvik ediyor, yerel uzmanları destekliyor ve sağlık sistemlerinin uzun vadeli güçlendirilmesine katkıda bulunuyoruz."
        : isAr
        ? "نؤمن بقوة التعاون المشترك. من خلال الشراكات الدولية، نعزز الوصول إلى رعاية صحية عالية الجودة، وندعم الكفاءات المحلية، ونسهم في تقوية النظم الصحية على المدى الطويل."
        : "Wir glauben an die Kraft der Zusammenarbeit. Durch internationale Kooperationen fördern wir den Zugang zu qualitativ hochwertiger Gesundheitsversorgung, unterstützen Fachkräfte vor Ort und tragen dazu bei, die Gesundheitssysteme langfristig zu stärken.",
      btn: isUz
        ? "Bizning qarashimiz haqida batafsil"
        : isRu
        ? "Подробнее о нашем видении"
        : isEn
        ? "Learn More About Our Vision"
        : isTr
        ? "Vizyonumuz Hakkında Daha Fazla"
        : isAr
        ? "المزيد عن رؤيتنا"
        : "Mehr über unsere Vision",
      stampText1: isUz
        ? "Birgalikda ko'proq"
        : isRu
        ? "Вместе достигать"
        : isEn
        ? "Together Achieving"
        : isTr
        ? "Birlikte daha fazlasını"
        : isAr
        ? "معاً نحقق"
        : "Gemeinsam mehr",
      stampText2: isUz
        ? "natijaga erishish. ♡"
        : isRu
        ? "большего. ♡"
        : isEn
        ? "More. ♡"
        : isTr
        ? "başarmak. ♡"
        : isAr
        ? "المزيد. ♡"
        : "erreichen. ♡",
    },

    // Section 3: Partners
    s3: {
      title: isUz
        ? "Bizning hamkorlik bo'yicha sheriklarimiz"
        : isRu
        ? "Наши партнеры по сотрудничеству"
        : isEn
        ? "Our Cooperation Partners"
        : isTr
        ? "İşbirliği Ortaklarımız"
        : isAr
        ? "شركاؤنا في التعاون"
        : "Unsere Kooperationspartner",
      desc: isUz
        ? "Biz barqaror sog'liqni saqlash yechimlarini birgalikda ishlab chiqish uchun xalqaro e'tirof etilgan tashkilotlar, universitetlar, davlat institutlari va nodavlat tashkilotlar (NNT) bilan hamkorlik qilamiz."
        : isRu
        ? "Мы сотрудничаем с признанными организациями, университетами, государственными институтами и НКО для совместной разработки устойчивых решений."
        : isEn
        ? "We collaborate with recognized organizations, universities, state institutions, and NGOs to develop sustainable healthcare solutions together."
        : isTr
        ? "Sürdürülebilir sağlık çözümlerini birlikte geliştirmek için saygın kuruluşlar, üniversiteler, devlet kurumları ve sivil toplum kuruluşlarıyla işbirliği yapıyoruz."
        : isAr
        ? "نتعاون مع منظمات مرموقة وجامعات ومؤسسات حكومية وهيئات غير حكومية لتطوير حلول صحية مستدامة معاً."
        : "Wir arbeiten mit renommierten Organisationen, Universitäten, staatlichen Institutionen und Nichtregierungsorganisationen zusammen, um gemeinsam nachhaltige Lösungen zu entwickeln.",
      btn: isUz
        ? "Barcha hamkorlarni ko'rish"
        : isRu
        ? "Все партнеры"
        : isEn
        ? "View All Partners"
        : isTr
        ? "Tüm Ortakları Göster"
        : isAr
        ? "عرض جميع الشركاء"
        : "Alle Partner anzeigen",
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
          sub: isUz
            ? "har bir bola uchun"
            : isRu
            ? "для каждого ребенка"
            : isEn
            ? "for every child"
            : isTr
            ? "her çocuk için"
            : isAr
            ? "لكل طفل"
            : "für jedes Kind",
          theme: "unicef",
        },
        {
          id: "universities",
          name: isUz
            ? "Universitetlar va ilmiy-tadqiqot institutlari"
            : isRu
            ? "Университеты и НИИ"
            : isEn
            ? "Universities & Research Institutes"
            : isTr
            ? "Üniversiteler & Araştırma Enstitüleri"
            : isAr
            ? "الجامعات ومعاهد البحوث"
            : "Universitäten & Forschungsinstitute",
          short: "Akademie",
          sub: isUz
            ? "Akademik mukammallik va tadqiqotlar"
            : isRu
            ? "Академическая сеть"
            : isEn
            ? "Academic Excellence"
            : isTr
            ? "Bilim ve Araştırma"
            : isAr
            ? "التميز الأكاديمي والبحثي"
            : "Wissenschaft & Forschung",
          theme: "academic",
        },
        {
          id: "ngos",
          name: isUz
            ? "NNTlar va xayriya fondlari"
            : isRu
            ? "НКО и благотворительные фонды"
            : isEn
            ? "NGOs & Foundations"
            : isTr
            ? "STK'lar & Vakıflar"
            : isAr
            ? "المنظمات غير الحكومية والمؤسسات الخيرية"
            : "NGOs & Stiftungen",
          short: "NGOs",
          sub: isUz
            ? "Insonparvarlik al'yanslari"
            : isRu
            ? "Гуманитарная помощь"
            : isEn
            ? "Humanitarian Aid"
            : isTr
            ? "Kâr Amacı Gütmeyen İttifaklar"
            : isAr
            ? "تحالفات إنسانية غير ربحية"
            : "Gemeinnützige Allianzen",
          theme: "ngo",
        },
      ],
    },

    // Section 4: 6 Key Strategic Programs & Cooperation Pillars (PDF Scope)
    s4: {
      eyebrow: isUz
        ? "STRATEGIK HAMKORLIK YO'NALISHLARI"
        : isRu
        ? "СТРАТЕГИЧЕСКИЕ НАПРАВЛЕНИЯ"
        : isEn
        ? "STRATEGIC COOPERATION FIELDS"
        : isTr
        ? "STRATEJİK İŞBİRLİĞİ ALANLARI"
        : isAr
        ? "مجالات التعاون الاستراتيجي"
        : "STRATEGISCHE KOOPERATIONSFELDER",
      title: isUz
        ? "Xalqaro hamkorligimizning asosiy sohalari"
        : isRu
        ? "Ключевые сферы международного партнерства"
        : isEn
        ? "Key Areas of International Partnership"
        : isTr
        ? "Uluslararası İşbirliğimizin Temel Alanları"
        : isAr
        ? "المجالات الرئيسية لتعاوننا الدولي"
        : "Schlüsselfelder unserer internationalen Zusammenarbeit",
      desc: isUz
        ? "NabiOta® xoldingining oltita o'zaro bog'liq yo'nalishi: transchegaraviy klinik al'yanslar va teletibbiyotdan tortib, malakali shifokorlarni jalb etish, klinik akademiya hamda gumanitar tashabbuslargacha."
        : isRu
        ? "Шесть взаимосвязанных программ холдинга NabiOta®: от трансграничных клинических альянсов и телемедицины до рекрутинга врачей, академии и гуманитарных инициатив."
        : isEn
        ? "Six interconnected NabiOta® programs: from cross-border hospital alliances and telemedicine to physician recruitment, clinical academy, and humanitarian care."
        : isTr
        ? "NabiOta® Grubu'nun altı yapılandırılmış hizmet alanı: Sınır ötesi klinik ittifakları ve teletıptan uzman entegrasyonu, akademi ve insani yardım projelerine kadar."
        : isAr
        ? "ستة مجالات خدمة منظمة لمجموعة NabiOta®: من التحالفات السريرية العابرة للحدود والطب الاتصالي إلى استقطاب الكوادر والأكاديمية والمشاريع الإنسانية."
        : "Sechs strukturierte Leistungsfelder der NabiOta® Gruppe: von grenzüberschreitenden Klinikallianzen und Telemedizin bis hin zur Fachkräfteintegration, Akademie und humanitären Projekten.",
      linkAll: isUz
        ? "Barcha dasturlar"
        : isRu
        ? "Все программы"
        : isEn
        ? "All Programs"
        : isTr
        ? "Tüm Odak Noktaları"
        : isAr
        ? "جميع البرامج"
        : "Alle Schwerpunkte",
      openModalBtn: isUz
        ? "Dastur haqida batafsil"
        : isRu
        ? "Подробнее о программе"
        : isEn
        ? "Explore program"
        : isTr
        ? "Detayları İnceleyin"
        : isAr
        ? "عرض التفاصيل"
        : "Details ansehen",
      programs: [
        {
          id: "klinikpartnerschaften",
          tag: isUz
            ? "KLINIK AL'YANSLAR"
            : isRu
            ? "КЛИНИЧЕСКИЕ АЛЬЯНСЫ"
            : isEn
            ? "HOSPITAL ALLIANCES"
            : isTr
            ? "KLİNİK İTTİFAKLARI"
            : isAr
            ? "التحالفات السريرية"
            : "KLINIKALLIANZEN",
          image: "/images/international/project-europe.webp",
          iconType: "hospital",
          title: isUz
            ? "Transchegaraviy klinik al'yanslar va shifoxonalar hamkorligi"
            : isRu
            ? "Трансграничные клинические альянсы & Госпитальные партнерства"
            : isEn
            ? "Cross-Border Clinical Alliances & Hospital Partnerships"
            : isTr
            ? "Sınır Ötesi Klinik İttifakları & Hastane Ağları"
            : isAr
            ? "التحالفات السريرية العابرة للحدود وشبكات المستشفيات"
            : "Grenzüberschreitende Klinikallianzen & Hospital Networks",
          shortDesc: isUz
            ? "Dalillarga asoslangan klinik protokollar va tajriba almashish uchun xalqaro universitet klinikalari bilan strategik hamkorlik."
            : isRu
            ? "Стратегическое партнерство с международными университетскими клиниками: синхронизация стандартов лечения, консилиумы и обмен опытом."
            : isEn
            ? "Strategic collaborations with international university hospitals for evidence-based care pathways and shared clinical protocols."
            : isTr
            ? "Kanıta dayalı tedavi yolları ve ortak klinik protokoller için uluslararası üniversite hastaneleriyle stratejik işbirlikleri."
            : isAr
            ? "تعاون استراتيجي مع المستشفيات الجامعية الدولية لتطبيق مسارات علاجية قائمة على الأدلة وبروتوكولات سريرية مشتركة."
            : "Strategische Kooperationen mit internationalen Universitätskliniken für evidenzbasierte Behandlungspfade und gemeinsame klinische Protokolle.",
          modal: {
            title: isUz
              ? "Transchegaraviy klinik al'yanslar va shifoxonalar hamkorligi"
              : isRu
              ? "Трансграничные клинические альянсы & Госпитальные партнерства"
              : isEn
              ? "Cross-Border Clinical Alliances & Hospital Partnerships"
              : isTr
              ? "Sınır Ötesi Klinik İttifakları & Ortaklıklar"
              : isAr
              ? "التحالفات السريرية والشراكات العابرة للحدود"
              : "Grenzüberschreitende Klinikallianzen & Partnerschaften",
            subtitle: isUz
              ? "Davolash standartlarini uyg'unlashtirish, klinik konsiliumlar va yetakchi tibbiyot markazlari bilan tajriba almashish"
              : isRu
              ? "Синхронизация стандартов лечения, консилиумы и обмен опытом с ведущими медицинскими центрами"
              : isEn
              ? "Harmonizing standards of care, clinical boards, and institutional peer exchange"
              : isTr
              ? "Klinik tedavi yollarının uyumlaştırılması, disiplinler arası konsültasyonlar ve bilgi transferi"
              : isAr
              ? "توحيد مسارات العلاج السريري والاستشارات الطبية متعددة التخصصات ونقل المعرفة"
              : "Harmonisierung klinischer Behandlungspfade, interdisziplinäre Konsile und Wissenstransfer",
            description: isUz
              ? "NabiOta® International xalqaro klinik protokollarni tatbiq etish, murakkab bemorlar bo'yicha qo'shma konsiliumlar (Board Review) o'tkazish va tibbiyot xodimlarining malakasini oshirish maqsadida Yevropa va dunyoning yetakchi universitet klinikalari bilan institutsional ikki tomonlama hamkorlikni rivojlantiradi."
              : isRu
              ? "NabiOta® International развивает институциональные партнерства с ведущими клиниками Европы и мира. В рамках долгосрочных соглашений мы внедряем совместные клинические протоколы в хирургии, онкологии, кардиологии и реабилитации, организуем регулярные экспертные советы и обеспечиваем преемственность в ведении сложных пациентов."
              : isEn
              ? "NabiOta® International establishes institutional alliances with premier hospital networks across Europe and globally. Under bilateral cooperation agreements, we implement standardized care pathways in surgery, oncology, cardiology, and rehabilitation, conduct regular multidisciplinary tumor boards, and ensure seamless continuum of care for complex cases."
              : isTr
              ? "NabiOta® Health Group, Avrupa'da ve dünya genelinde üniversite ve ileri düzey tıp merkezleriyle yapılandırılmış ikili klinik ortaklıklar kurar. Yüksek düzeyde uzmanlaşmış cerrahi disiplinlerde bilgi transferi, Alman ve uluslararası kılavuzlara uygun tek tip tedavi protokollerinin geliştirilmesi ve karmaşık hasta vakalarının ortak yönetimi odak noktamızdır."
              : isAr
              ? "تؤسس مجموعة NabiOta® الصحية شراكات سريرية ثنائية منظمة مع كبرى المشافي الجامعية والمراكز التخصصية في أوروبا والعالم. ينصب تركيزنا على نقل المعرفة في التخصصات الجراحية الدقيقة، وتطوير مسارات علاجية موحدة وفق الإرشادات الألمانية والدولية، والإشراف المشترك على الحالات المعقدة."
              : "Die NabiOta® Health Group etabliert strukturierte bilaterale Klinikpartnerschaften mit universitären und überregionalen Maximalversorgern in Europa und weltweit. Im Fokus stehen der Wissenstransfer in hochspezialisierten operativen Disziplinen, die Entwicklung einheitlicher Behandlungspfade nach deutschen und internationalen Leitlinien sowie die gemeinsame Betreuung komplexer Patientenfälle.",
            specificationsTitle: isUz
              ? "Hamkorlik yo'nalishlari"
              : isRu
              ? "Направления сотрудничества"
              : isEn
              ? "Cooperation Domains"
              : isTr
              ? "İttifakların Klinik Odak Noktaları"
              : isAr
              ? "المحاور السريرية للتحالفات"
              : "Klinische Schwerpunkte der Allianzen",
            specifications: isUz
              ? [
                "Fanlararo onkologik konsiliumlar (Interdisziplinäre Tumorkonferenzen)",
                "Klinik amaliyot standartlarini (SOP) xalqaro ko'rsatmalarga muvofiq uyg'unlashtirish",
                "Kafedra mudirlari, yetakchi jarrohlar va bosh shifokorlarning o'zaro stajirovka almashinuvi",
                "Nevrologiya, neyroxirurgiya va kardiojarrohlik bo'yicha transchegaraviy konsultatsiyalar",
                "Qo'shma klinik tadqiqotlar va sifat ko'rsatkichlarining xalqaro taqqoslovi (Benchmarking)",
                ]
              : isRu
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
              : isTr
              ? [
                  "Ortak disiplinler arası tümör ve vaka konseyleri (Tümör Konseyleri)",
                  "Hastane hijyeni ve hasta güvenliği standartlarının uyumlaştırılması (RKI / WHO)",
                  "Cerrahide Hızlı İyileşme (Fast-Track ve ERAS) konseptlerinin uygulanması",
                  "Başhekimler ve kıdemli uzmanlar için yapılandırılmış klinik gözlem ve değişim programları",
                  "İleri radyolojik tanı standartlarının transferi (3T MRG / Düşük Dozlu BT)",
                  "Kanıta dayalı tedavi kontrolü için ortak klinik kalite kayıtlarının oluşturulması",
                ]
              : isAr
              ? [
                  "مؤتمرات وحلقات نقاش مشتركة للأورام والحالات المعقدة (Tumorboards)",
                  "مواءمة وتوحيد معايير نظافة المستشفيات وسلامة المرضى (RKI / WHO)",
                  "تطبيق بروتوكولات التعافي السريع بعد الجراحة (ERAS / Fast-Track)",
                  "برامج زمالة ومعايشة سريرية منظمة لرؤساء الأقسام وكبار الأطباء الجراحين",
                  "نقل معايير التشخيص الإشعاعي الفائقة (3T MRI / الأشعة المقطعية منخفضة الجرعة)",
                  "بناء سجلات جودة سريرية مشتركة للرقابة العلاجية القائمة على الأدلة",
                ]
              : [
                  "Gemeinsame interdisziplinäre Tumor- und Fallkonferenzen (Tumorboards)",
                  "Angleichung von Krankenhaushygiene- und Sicherheitsstandards (RKI / WHO)",
                  "Implementierung von Fast-Track- und ERAS-Konzepten in der Chirurgie",
                  "Strukturierte Hospitations- und Austauschprogramme für Chef- und Oberärzte",
                  "Transfer hochmoderner radiologischer Befundungsstandards (3T MRT / Niedrigdosis-CT)",
                  "Aufbau gemeinsamer Qualitätsregister zur evidenzbasierten Therapiekontrolle",
                ],
            scopeTitle: isUz
              ? "Amalga oshirish formatlari"
              : isRu
              ? "Форматы реализации"
              : isEn
              ? "Implementation Scope"
              : isTr
              ? "İşbirliği ve Uygulama Formatları"
              : isAr
              ? "صيغ التعاون وآليات التنفيذ"
              : "Kooperations- & Umsetzungsformate",
            scopeItems: isUz
              ? [
                "Ikki tomonlama institutsional shartnomalar (MoU va Service Level Agreements)",
                "Germaniya klinikalarida 1 oydan 6 oygacha bo'lgan tuzilmaviy fellowship-dasturlari",
                "Xavfsiz shifrlangan telemeditsina kanallari orqali ikkinchi tibbiy xulosa (Second Opinion)",
                "Klinik auditlar va mahalliy shifoxonalarda ish jarayonlarini optimallashtirish",
                "Qo'shma xalqaro ilmiy-amaliy simpoziumlar va sertifikatlangan CME-seminarlari",
                ]
              : isRu
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
              : isTr
              ? [
                  "Hukuken bağlayıcı işbirliği anlaşmaları (MoU) ve klinik sözleşmelerinin imzalanması",
                  "Karmaşık vakalarda düzenli tele-tıp ve yerinde konsültasyonların yürütülmesi",
                  "Almanya'daki NabiOta merkezlerinde çok haftalık klinik staj ve gözlem organizasyonu",
                  "DICOM / PACS standartlarına uygun güvenli dijital tıbbi görüntü aktarımının entegrasyonu",
                  "Uluslararası tıp kongrelerinde ortak bilimsel yayınlar ve uzman sunumları",
                ]
              : isAr
              ? [
                  "إبرام مذكرات تفاهم ملزمة قانونياً (MoU) وعقود شراكة مستشفوية",
                  "عقد استشارات طبية دورية عن بُعد واستشارات ميدانية للحالات المعقدة",
                  "تنظيم معايشات وتدريبات سريرية لعدة أسابيع في مراكز NabiOta بألمانيا",
                  "دمج قنوات نقل الصور الطبية المشفرة والآمنة وفق معايير DICOM / PACS",
                  "نشر أبحاث علمية مشتركة والمشاركة بمحاضرات في المؤتمرات الطبية الدولية",
                ]
              : [
                  "Abschluss rechtssicherer Kooperationsvereinbarungen (MoU) und Klinikverträge",
                  "Regelmäßige Durchführung telemedizinischer und Vor-Ort-Konsile bei Problemfällen",
                  "Organisation mehrwöchiger klinischer Hospitationen in deutschen NabiOta-Zentren",
                  "Einbindung gesicherter digitaler Bilddatenübertragungen nach DICOM/PACS-Standards",
                  "Gemeinsame wissenschaftliche Publikationen und Fachvorträge auf Kongressen",
                ],
            technicalTitle: isUz
              ? "Standartlar va xavfsizlik"
              : isRu
              ? "Стандарты и безопасность"
              : isEn
              ? "Standards & Governance"
              : isTr
              ? "Kalite ve Güvenlik Standartları"
              : isAr
              ? "معايير الجودة والسلامة"
              : "Qualitäts- & Sicherheitsstandards",
            technicalText: isUz
              ? "Barcha xalqaro hamkorlik jarayonlari shifokor siriga qat'iy rioya qilish (§ 203 StGB), Yevropa Ittifoqining ma'lumotlarni himoya qilish to'g'risidagi bosh reglamenti (DSGVO/GDPR) hamda DIN EN ISO 9001 klinik sifat menejmenti tizimiga to'liq mos ravishda amalga oshiriladi."
              : isRu
              ? "Все международные партнерства осуществляются в строгом соответствии с нормами врачебной тайны (§ 203 StGB), европейским регламентом защиты данных (GDPR/DSGVO) и руководствами ВОЗ по безопасности пациентов."
              : isEn
              ? "All international partnerships strictly comply with German medical confidentiality (§ 203 StGB), European data privacy regulations (GDPR/DSGVO), and WHO Patient Safety guidelines."
              : isTr
              ? "Tüm işbirliği süreçleri, Alman hekimlik sırrı (§ 203 StGB), AB Genel Veri Koruma Yönetmeliği (GDPR/DSGVO) ve DSÖ hasta güvenliği yönergelerine sıkı sıkıya tabidir."
              : isAr
              ? "تخضع كافة إجراءات التعاون للسرية المهنية الطبية الصارمة (§ 203 StGB)، ولوائح حماية البيانات العامة الأوروبية (GDPR/DSGVO)، ومعايير منظمة الصحة العالمية لسلامة المرضى."
              : "Sämtliche Kooperationsprozesse unterliegen der strikten ärztlichen Schweigepflicht (§ 203 StGB), den Anforderungen der DSGVO sowie den Richtlinien der WHO für Patientensicherheit.",
            ctaButtonText: isUz
              ? "Klinikalar hamkorligini muhokama qilish"
              : isRu
              ? "Обсудить партнерство клиник"
              : isEn
              ? "Inquire Clinic Partnership"
              : isTr
              ? "Klinik Ortaklığı Talebi"
              : isAr
              ? "طلب شراكة مستشفيات"
              : "Klinikpartnerschaft anfragen",
          },
        },
        {
          id: "telemedizin",
          tag: isUz
            ? "TELETIBBIYOT"
            : isRu
            ? "ТЕЛЕМЕДИЦИНА"
            : isEn
            ? "TELEHEALTH"
            : isTr
            ? "TELE-TIP"
            : isAr
            ? "الطب الاتصالي"
            : "TELEMEDIZIN",
          image: "/images/international/project-asia.webp",
          iconType: "telehealth",
          title: isUz
            ? "Teletibbiyot va xalqaro ekspert telekonsiliumlari"
            : isRu
            ? "Телемедицина & Международные экспертные телеконсилиумы"
            : isEn
            ? "Telemedicine & Global Expert Teleconsultations"
            : isTr
            ? "Tele-Tıp & Uluslararası Uzman Tele-Konsültasyonları"
            : isAr
            ? "الطب الاتصالي والاستشارات الطبية التخصصية الدولية"
            : "Telemedizin & Internationale Experten-Telekonsile",
          shortDesc: isUz
            ? "Germaniyalik yetakchi professorlarning ikkinchi xulosasi (Second Opinion), jonli konsiliumlar va teleradiologik diagnostika uchun himoyalangan raqamli kanallar."
            : isRu
            ? "Защищенные цифровые каналы для второго мнения немецких профессоров, онлайн-консилиумов и телерадиологии."
            : isEn
            ? "Secure digital bridges for second opinions from German chief physicians, live boards, and teleradiology reading."
            : isTr
            ? "Alman başhekimlerinden ikinci görüşler, canlı konsültasyonlar ve teleradyolojik tanı için güvenli dijital köprüler."
            : isAr
            ? "جسور رقمية آمنة للحصول على رأي ثانٍ من كبار الأطباء الألمان والاستشارات الحية والتشخيص الإشعاعي عن بُعد."
            : "Sichere digitale Brücken für Zweitmeinungen deutscher Chefärzte, Live-Konsile und teleradiologische Befundung.",
          modal: {
            title: isUz
              ? "Teletibbiyot va xalqaro ekspert telekonsiliumlari"
              : isRu
              ? "Телемедицина & Международные экспертные телеконсилиумы"
              : isEn
              ? "Telemedicine & Global Expert Teleconsultations"
              : isTr
              ? "Tele-Tıp & Uluslararası Uzman Tele-Konsültasyonları"
              : isAr
              ? "الطب الاتصالي والاستشارات الطبية التخصصية الدولية"
              : "Telemedizin & Internationale Experten-Telekonsile",
            subtitle: isUz
              ? "Bemorlarni xorijga jo'natmasdan turib yuqori texnologiyali ikkinchi xulosa olish va teleradiologik ekspertiza"
              : isRu
              ? "Второе мнение немецких профессоров, дистанционный разбор сложных случаев и телерадиология"
              : isEn
              ? "German specialist second opinions, remote case reviews, and cross-border teleradiology"
              : isTr
              ? "Uzman hekim ikinci görüşleri, teleradyolojik raporlama ve disiplinler arası vaka değerlendirmesi"
              : isAr
              ? "آراء استشارية ثانية، قراءة الأشعة عن بُعد، ومناقشة الحالات متعددة التخصصات"
              : "Fachärztliche Zweitmeinungen, teleradiologische Befundung und interdisziplinäre Fallbesprechung",
            description: isUz
              ? "NabiOta® Telehealth platformasi xorijdagi shifokorlar va bemorlarga Germaniyaning bosh shifokorlari va ixtisoslashgan mutaxassislari bilan to'g'ridan-to'g'ri bog'lanish imkonini beradi. DICOM radiologik tasvirlari, gistologiya va laboratoriya tahlillari yuqori tezlikdagi shifrlangan tarmoqlar orqali Germaniya telematika infratuzilmasi talablariga mos holda ko'rib chiqiladi."
              : isRu
              ? "Телемедицинская платформа NabiOta® связывает зарубежные клиники и пациентов с узкопрофильными специалистами Германии. Мы обеспечиваем дистанционный аудит радиологических исследований (КТ/МРТ), экспертное второе мнение перед проведением сложных операций и регулярные онлайн-консилиумы по спорным диагнозам в режиме защищенного видео- и дата-канала."
              : isEn
              ? "The NabiOta® Telehealth platform connects overseas healthcare providers and patients with premier German specialists. We deliver certified teleradiology image audits (CT/MRI), comprehensive second opinions prior to major surgical interventions, and structured remote tumor boards over end-to-end encrypted medical networks."
              : isTr
              ? "NabiOta Grubu'nun sertifikalı tele-tıp platformu aracılığıyla uluslararası ortak hastaneler ve hastalar, önde gelen Alman uzman hekimlerine doğrudan erişim elde eder. Hizmet yelpazemiz; karmaşık kesitli görüntülemelerin teleradyolojik ikinci okumasını, ağır cerrahi müdahaleler öncesinde bağımsız ikinci görüşleri ve şifreli video bağlantısı üzerinden düzenli konsültasyonları kapsar."
              : isAr
              ? "من خلال منصة الطب الاتصالي المعتمدة لمجموعة NabiOta، يحصل المرضى والمستشفيات الشريكة دولياً على وصول مباشر لكبار الأطباء الألمان. تشمل الخدمات إعادة قراءة الأشعة المقطعية والرنين المغناطيسي المعقد، وتقديم رأي طبي ثانٍ مستقل قبل الجراحات الكبرى، وعقد استشارات طبية دورية عبر قنوات اتصال فيديو مشفرة."
              : "Über die zertifizierte Telemedizin-Plattform der NabiOta-Gruppe erhalten internationale Partnerkliniken und Patienten direkten Zugang zu führenden deutschen Fachärzten. Das Leistungsspektrum umfasst die teleradiologische Zweitbefundung hochkomplexer Schnittbildaufnahmen, unabhängige Zweitmeinungen vor schweren operativen Eingriffen sowie regelmäßige interdisziplinäre Konsile via verschlüsselter Videoschaltung.",
            specificationsTitle: isUz
              ? "Teletibbiyot imkoniyatlari"
              : isRu
              ? "Телемедицинские возможности"
              : isEn
              ? "Telehealth Modalities"
              : isTr
              ? "Tele-Tıp Hizmetleri"
              : isAr
              ? "خدمات الطب الاتصالي"
              : "Telemedizinische Leistungen",
            specifications: isUz
              ? [
                "MRT, KT va PET-KT tasvirlarining xalqaro teleradiologik ekspertizasi (DICOM/PACS)",
                "Nodir va murakkab kasalliklar bo'yicha onlayn fanlararo konsiliumlar",
                "Patomorfologik va gistologik preparatlarning raqamli telepatologiyasi",
                "Tizimli jarrohlik operatsiyalarini masofaviy rejalashtirish va preoperativ konsultatsiyalar",
                "Og'ir bemorlarni Germaniyaga rejaviy davolanishga jo'natishdan oldingi xavfsiz tele-triaj",
                ]
              : isRu
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
              : isTr
              ? [
                  "Ortopedi, beyin ve omurga cerrahisi, onkoloji ve kardiyoloji için uzman hekim ikinci görüşleri (Second Opinion)",
                  "Teleradyoloji: 24–48 saat içinde MRG ve BT görüntülerinin bağımsız uzman raporlaması",
                  "Tedavi eden yerel doktor ile NabiOta uzmanları arasında canlı tele-konsültasyonlar",
                  "Uzun süreli EKG, kalp pili ve efor verilerinin telekardiyolojik değerlendirmesi",
                  "Biyopsi ve onkolojik doku bulgularının doğrulanması için dijital telepatoloji",
                  "DICOM görüntüleri ve epikriz iletimi için uçtan uca şifreli güvenli hekim portalı",
                ]
              : isAr
              ? [
                  "رأي طبي ثانٍ متخصص (Second Opinion) في جراحة العظام، الأعصاب والعمود الفقري، الأورام، والقلب",
                  "قراءة الأشعة عن بُعد: تدقيق وإصدار تقارير فحوصات الرنين المغناطيسي والمقطعية خلال 24-48 ساعة",
                  "استشارات طبية حية ومباشرة بين الطبيب المعالج المحلي وخبراء واستشاريي NabiOta",
                  "تقييم قلبي عن بُعد لتخطيط القلب المستمر (Holter) وأجهزة تنظيم ضربات القلب وفحوصات الجهد",
                  "فحص أنسجة رقمي عن بُعد (Telepathology) لتأكيد وتدقيق العينات النسيجية وتشخيص الأورام",
                  "بوابة رقمية مشفرة تماماً طرفاً لطرف لتبادل صور DICOM والتقارير الطبية الرسمية",
                ]
              : [
                  "Facharzt-Zweitmeinungen (Second Opinion) für Orthopädie, Neurochirurgie, Onkologie und Kardiologie",
                  "Teleradiologie: Unabhängige Zweitbefundung von MRT- und CT-Aufnahmen binnen 24–48 Stunden",
                  "Live-Telekonsile zwischen behandelndem Arzt vor Ort und NabiOta-Spezialisten",
                  "Telekardiologische Beurteilung von Langzeit-EKGs, Schrittmacher- und Belastungsdaten",
                  "Digitale Telepathologie zur Verifizierung bioptischer und onkologischer Gewebebefunde",
                  "Ende-zu-Ende verschlüsseltes Portal für DICOM-Bilder und Arztbriefübermittlung",
                ],
            scopeTitle: isUz
              ? "Texnik platforma"
              : isRu
              ? "Техническая инфраструктура"
              : isEn
              ? "Technical Infrastructure"
              : isTr
              ? "Platform ve Arayüzler"
              : isAr
              ? "المنصة التقنية وواجهات الربط"
              : "Plattform & Schnittstellen",
            scopeItems: isUz
              ? [
                "TLS 1.3 va AES-256 shifrlangan sertifikatlangan telemeditsina platformasi",
                "Kasalxona axborot tizimlari (KIS) bilan HL7 va FHIR interfeyslari orqali to'g'ridan-to'g'ri integratsiya",
                "24 soatdan 48 soatgacha bo'lgan muddatda nemis va ingliz tillarida rasmiy tibbiy xulosalar taqdim etilishi",
                "Tibbiy tarjimonlar ishtirokida bemorlar uchun jonli video-konsultatsiyalar",
                "Teleradiologiya va konsiliumlar arxivining to'liq huquqiy himoyalangan saqlanishi",
                ]
              : isRu
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
              : isTr
              ? [
                  "Yüksek çözünürlüklü DICOM veri setlerinin kayıpsız iletimi için sertifikalı bulut PACS sunucusu",
                  "HL7 ve FHIR standartları üzerinden uluslararası hastane bilgi sistemleriyle birlikte çalışabilirlik",
                  "Tüm video ve görüntü verilerinin iki faktörlü kimlik doğrulaması ve AES-256 şifrelemesi",
                  "Almanca, İngilizce veya Rusça dillerinde ayrıntılı yazılı uzman raporlarının hazırlanması",
                  "Yetkili uzman hekimler tarafından elektronik hekim kimliği (eHBA) ile yasal olarak bağlayıcı dijital imza",
                ]
              : isAr
              ? [
                  "خوادم PACS سحابية معتمدة لنقل مجموعات بيانات DICOM فائقة الدقة دون أي فقدان للجودة",
                  "توافق وتشغيل متبادل مع نظم معلومات المشافي الدولية عبر بروتوكولات HL7 وFHIR",
                  "مصادقة ثنائية وتشفير كامل AES-256 لجميع تدفقات الفيديو والبيانات الطبية",
                  "إصدار تقارير طبية واستشارية تفصيلية باللغات الألمانية، الإنجليزية، أو الروسية",
                  "توقيع قانوني ملزم من قِبل الأطباء الاستشاريين المرخصين عبر بطاقة المهنة الطبية الإلكترونية (eHBA)",
                ]
              : [
                  "Zertifizierter Cloud-PACS-Server für verlustfreie Übertragung hochauflösender DICOM-Datensätze",
                  "Interoperabilität mit internationalen Krankenhausinformationssystemen über HL7/FHIR",
                  "Zwei-Faktor-Authentifizierung und AES-256-Verschlüsselung aller Video- und Bilddaten",
                  "Erstellung detaillierter schriftlicher Gutachten auf Deutsch, Englisch oder Russisch",
                  "Rechtsverbindliche Signatur durch zugelassene Fachärzte mittels elektronischem Heilberufsausweis (eHBA)",
                ],
            technicalTitle: isUz
              ? "Axborot xavfsizligi va sertifikatsiya"
              : isRu
              ? "Правовая база"
              : isEn
              ? "Regulatory Framework"
              : isTr
              ? "Yasal Dayanaklar"
              : isAr
              ? "الأطر القانونية والتنظيمية"
              : "Rechtliche Grundlagen",
            technicalText: isUz
              ? "Ma'lumotlar uzatish Germaniya SGB V (§ 291a Telematikinfrastruktur) standartlariga mos keladi, serverlar Germaniyadagi ISO 27001 sertifikatiga ega ma'lumotlar markazlarida joylashgan va tibbiy maxfiylik (§ 203 StGB) kafolatlanadi."
              : isRu
              ? "Предоставление телемедицинских услуг осуществляется в рамках § 7 Abs. 4 (MBO-Ä) Федерального врачебного кодекса Германии и с соблюдением европейских регламентов защиты персональных данных (DSGVO)."
              : isEn
              ? "Telemedical services are delivered in strict compliance with § 7(4) MBO-Ä (German Medical Association Fernbehandlung guidelines) and European GDPR privacy laws."
              : isTr
              ? "Tele-tıp konsültasyonları, Alman Hekimler Meslek Kuralları (§ 7 Fıkra 4 MBO-Ä) ve Genel Veri Koruma Yönetmeliği (GDPR/DSGVO) hükümlerine tam uyum içinde gerçekleştirilir."
              : isAr
              ? "يتم تقديم الاستشارات الطبية عن بُعد طبقاً للوائح المهنية الطبية الألمانية (§ 7 فقرة 4 MBO-Ä) ولائحة حماية البيانات العامة الأوروبية (DSGVO)."
              : "Die Durchführung telemedizinischer Konsile erfolgt unter strikter Einhaltung der berufsrechtlichen Vorgaben (§ 7 Abs. 4 MBO-Ä) und den Vorgaben der Datenschutz-Grundverordnung (DSGVO).",
            ctaButtonText: isUz
              ? "Telekonsilium so'rovini yuborish"
              : isRu
              ? "Запросить телеконсилиум"
              : isEn
              ? "Request Teleconsultation"
              : isTr
              ? "Tele-Konsültasyon Talebi"
              : isAr
              ? "طلب استشارة طبية عن بُعد"
              : "Telekonsil anfragen",
          },
        },
        {
          id: "fachkraefte-recruitment",
          tag: isUz
            ? "REKRUTING VA KADRLAR"
            : isRu
            ? "РЕКРУТИНГ & КАДРЫ"
            : isEn
            ? "RECRUITMENT"
            : isTr
            ? "UZMAN İSTİHDAMI"
            : isAr
            ? "استقطاب الكوادر"
            : "FACHKRÄFTE",
          image: "/images/services/staffing.webp",
          iconType: "recruitment",
          title: isUz
            ? "Shifokorlarni xalqaro jalb etish va Approbation dasturlari"
            : isRu
            ? "Международный рекрутинг врачей & Программы Approbation"
            : isEn
            ? "International Healthcare Recruitment & Medical Licensing"
            : isTr
            ? "Uluslararası Sağlık Uzmanı Kazanımı & Ruhsat (Approbation) Programları"
            : isAr
            ? "استقطاب الكوادر الصحية الدولية وبرامج معادلة وترخيص مزاولة المهنة (Approbation)"
            : "Internationale Fachkräftegewinnung & Approbationsprogramme",
          shortDesc: isUz
            ? "§ 3 BÄO bo'yicha tibbiy litsenziya olish (Approbation) va Germaniyaga moslashuvni to'liq huquqiy qo'llab-quvvatlash bilan shifokorlar va hamshiralarni tizimli tanlash."
            : isRu
            ? "Системный подбор и интеграция врачей и медперсонала с полным юридическим сопровождением апробации по § 3 BÄO."
            : isEn
            ? "Structured recruitment and sustainable onboarding of physicians and nurses with licensing (Approbation § 3 BÄO)."
            : isTr
            ? "§ 3 BÄO uyarınca tam ruhsat (Approbation) refakati ile hekim ve hemşirelerin yapılandırılmış istihdamı ve sürdürülebilir entegrasyonu."
            : isAr
            ? "استقطاب منظم ودمج مستدام للأطباء والكوادر التمريضية مع مرافقة الترخيص الطبي وفق § 3 BÄO."
            : "Strukturierte Gewinnung und nachhaltige Integration von Medizinern und Pflegekräften mit Approbationsbegleitung nach § 3 BÄO.",
          modal: {
            title: isUz
              ? "Xalqaro kadrlarni jalb qilish va Approbation (NabiOta Medical Recruitment)"
              : isRu
              ? "Международный рекрутинг кадров & Approbation"
              : isEn
              ? "International Healthcare Recruitment & Licensing"
              : isTr
              ? "Uluslararası Uzman İstihdamı & Approbation"
              : isAr
              ? "استقطاب الكوادر الصحية الدولية وترخيص Approbation"
              : "Internationale Fachkräftegewinnung & Approbation",
            subtitle: isUz
              ? "NabiOta Medical Recruitment Services GmbH: til o'rganishdan tortib Germaniyada to'liq litsenziyalashgacha"
              : isRu
              ? "NabiOta Medical Recruitment Services GmbH: от языковой подготовки до немецкой врачебной лицензии"
              : isEn
              ? "NabiOta Medical Recruitment Services GmbH: From language training to full German medical licensure"
              : isTr
              ? "NabiOta Medical Recruitment Services GmbH: Nitelikli hekim ve hemşire entegrasyonu"
              : isAr
              ? "NabiOta Medical Recruitment Services GmbH: دمج وتأهيل الأطباء والتمريض المؤهلين"
              : "NabiOta Medical Recruitment Services GmbH: Qualifizierte Ärzte- und Pflegekräfteintegration",
            description: isUz
              ? "NabiOta Medical Recruitment Services GmbH xorijiy shifokorlar va malakali hamshiralarni Germaniyaning klinikalari, MVZ markazlari va parvarish muassasalariga jalb qilish, kasbiy tan olish hamda uzoq muddatli integratsiyalashga ixtisoslashgan. Biz nomzodlar uchun bepul dasturlar va 'Faire Anwerbung Pflege Deutschland' mezonlariga qat'iy rioya qilamiz."
              : isRu
              ? "NabiOta Medical Recruitment Services GmbH специализируется на этичном, системном привлечении квалифицированных врачей, медсестер и терапевтов из-за рубежа. Мы сопровождаем специалистов на каждом шаге: от проверки диплома в ZAB/ZSBA и визы до сдачи экзаменов Fachsprachenprüfung (FSP) и Kenntnisprüfung (KP), обеспечивая полную немецкую апробацию и долгосрочное трудоустройство."
              : isEn
              ? "NabiOta Medical Recruitment Services GmbH provides ethical, comprehensive international recruitment for physicians, registered nurses, and therapists. We guide professionals across all administrative stages: from academic degree validation (ZAB/ZSBA) and visa processing to German medical language (FSP) and clinical knowledge (KP) examinations, securing permanent medical licensure (Approbation § 3 BÄO)."
              : isTr
              ? "NabiOta Medical Recruitment Services GmbH; uluslararası hekimlerin, hemşirelerin ve terapistlerin etik, yapılandırılmış işe alımını ve kalıcı entegrasyonunu üstlenir. Uzmanlara ilk denklik incelemesinden, mesleki dil sınavı (FSP) ve bilgi sınavı (KP) hazırlığına kadar Alman tıbbi ruhsatının (Approbation § 3 BÄO) alınmasında bütüncül refakat ediyoruz."
              : isAr
              ? "تتولى NabiOta Medical Recruitment Services GmbH الاستقطاب الأخلاقي المنظم والدمج المستدام للأطباء والكوادر التمريضية والمعالجين الدوليين. نرافق الكوادر بشكل متكامل بدءاً من فحص معادلة الشهادات وامتحان اللغة الطبية (FSP) وحتى امتحان المعادلة المعرفية السريرية (KP) للحصول على ترخيص مزاولة المهنة الألماني الكامل (Approbation § 3 BÄO)."
              : "Die NabiOta Medical Recruitment Services GmbH übernimmt die strukturierte, ethische Rekrutierung und nachhaltige Eingliederung internationaler Mediziner, Pflegefachkräfte und Therapeuten. Wir begleiten Fachkräfte ganzheitlich von der ersten Äquivalenzprüfung über die Fachsprachprüfung (FSP) bis zur Kenntnisprüfung (KP) zur Erlangung der deutschen Approbation (§ 3 BÄO).",
            specificationsTitle: isUz
              ? "Hamrohlik bosqichlari"
              : isRu
              ? "Этапы сопровождения"
              : isEn
              ? "Integration Stages"
              : isTr
              ? "Entegrasyon ve Refakat Adımları"
              : isAr
              ? "مراحل التأهيل والدمج المهني"
              : "Integrations- & Begleitschritte",
            specifications: isUz
              ? [
                "Tibbiy diplomlar va mutaxassislik hujjatlarining rasmiy ekvivalentligini tekshirish (Defizitbescheid)",
                "Ixtisoslashgan tibbiy til kurslari (Fachsprache Medizin C1 / Pflege B2)",
                "Tibbiy til imtihoni (Fachsprachenprüfung - FSP) uchun maqsadli intensiv tayyorgarlik",
                "Davlat tibbiy malaka imtihoniga (Kenntnisprüfung - KP) tayyorgarlik va nazariy-amaliy simulyatsiyalar",
                "Kasbiy faoliyat ruxsatnomasi (§ 10 BÄO) va cheklanmagan Approbation (§ 3 BÄO) olishni to'liq boshqarish",
                ]
              : isRu
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
              : isTr
              ? [
                  "ZAB ve bölge valilikleri (Bezirksregierung) yönergelerine göre yabancı eğitim belgelerinin ön incelemesi",
                  "Anamnez, hasta iletişimi ve belgelendirmeye odaklanan B2/C1 Tıbbi Mesleki Almanca kursları",
                  "İkamet Kanunu (§ 16d / § 18b AufenthG) uyarınca eksiksiz vize ve resmi makam yönetimi",
                  "Eyalet Tabipler Odaları nezdindeki Tıbbi Dil Sınavı'na (FSP) hedefe yönelik sınav hazırlığı",
                  "Sabit mentorluk eşliğinde MVZ ve uzman klinik departmanlarında çok haftalık klinik stajlar (Hospitation)",
                  "Alman hekimlik ruhsatı bilgi sınavına (KP § 3 BÄO) başarıyla hazırlanmak için pratik vaka eğitimleri",
                ]
              : isAr
              ? [
                  "الفحص والتدقيق المسبق للشهادات والمؤهلات الأجنبية طبقاً لمعايير ZAB وإدارات المقاطعات الألمانية",
                  "دورات لغة ألمانية طبية تخصصية B2/C1 Medizin تركز على أخذ السيرة المرضية والتواصل السريري والتوثيق",
                  "إدارة شاملة لملفات التأشيرات والإجراءات القنصلية وفق §§ 16d و 18b من قانون الإقامة الألماني",
                  "إعداد وتدريب منهجي مكثف لاجتياز اختبار اللغة الطبية التخصصية (FSP) لدى نقابات الأطباء",
                  "معايشات وتدريبات سريرية لعدة أسابيع في مراكز MVZ والأقسام التخصصية مع إشراف وتوجيه مباشر",
                  "تدريبات عملية على الحالات السريرية لاجتياز اختبار المعادلة المعرفية الطبية (KP § 3 BÄO)",
                ]
              : [
                  "Vorprüfung ausländischer Ausbildungsnachweise gemäß Vorgaben der ZAB und Bezirksregierungen",
                  "Fachsprachkurse B2/C1 Medizin mit Fokus auf Anamnese, Patientenkommunikation und Dokumentation",
                  "Komplettes Visums- und Behördenmanagement nach § 16d / § 18b AufenthG",
                  "Gezielte Prüfungsvorbereitung auf die Fachsprachenprüfung (FSP) bei den Landesärztekammern",
                  "Mehrwöchige klinische Hospitationen in MVZ und Fachabteilungen mit festem Mentoring",
                  "Praktische Falltrainings zur erfolgreichen Vorbereitung auf die Kenntnisprüfung (KP § 3 BÄO)",
                ],
            scopeTitle: isUz
              ? "Mutaxassislar uchun to'liq paket"
              : isRu
              ? "Пакет для специалистов"
              : isEn
              ? "Candidate Services"
              : isTr
              ? "Uzmanlar İçin Hizmet Portföyü"
              : isAr
              ? "باقة الخدمات المقدمة للكوادر الطبية"
              : "Leistungsportfolio für Fachkräfte",
            scopeItems: isUz
              ? [
                "Germaniya elchixonasida tezlashtirilgan malakali ishchi vizasi jarayoni (AufenthG § 16d / § 18a / § 18b)",
                "NabiOta Real Estate GmbH orqali xizmat kvartiralari va qulay yashash joylari bilan ta'minlash",
                "Bank hisob raqamini ochish, sog'liqni saqlash sug'urtasi va oilani birlashtirishda to'liq yordam",
                "Klinikada individual murabbiy (Mentor) biriktirilgan holda moslashuv dasturi",
                "Xolding tizimidagi klinika va parvarish muassasalarida doimiy mehnat shartnomasi kafolati",
                ]
              : isRu
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
              : isTr
              ? [
                  "Ruhsat sınavını geçtikten sonra toplu sözleşmeye uygun ücretli, süresiz iş sözleşmesi",
                  "Pratik taşınma desteği: Ev arama, resmi makam işlemleri, ikamet kaydı ve banka hesabı açılışı",
                  "Aile desteği: Aile birleşimi, kreş yerleri ve okul kayıtlarında tam refakat",
                  "Tüm denklik süreci boyunca kapsamlı hukuki ve iş hukuku danışmanlığı",
                  "Sağlık personelinin uluslararası istihdamına ilişkin etik DSÖ Davranış Kuralları'na tam bağlılık",
                ]
              : isAr
              ? [
                  "عقود عمل دائمة غير محددة المدة برواتب خاضعة للاتفاقيات الجماعية فور اجتياز اختبارات الترخيص",
                  "دعم عملي شامل في الانتقال: البحث عن سكن، المعاملات الرسمية، تسجيل الإقامة، وفتح الحسابات البنكية",
                  "مرافقة أسرية: دعم إجراءات لمّ شمل الأسرة وتأمين مقاعد رياض الأطفال وتسجيل المدارس",
                  "رعاية قانونية وعمالية مستمرة طوال فترة إجراءات المعادلة والاعتراف المهني",
                  "التزام تام بمدونة قواعد السلوك الأخلاقية لمنظمة الصحة العالمية (WHO) بشأن التوظيف الدولي للكوادر الصحية",
                ]
              : [
                  "Unbefristeter Arbeitsvertrag mit tarifkonformer Vergütung nach bestandener Approbationsprüfung",
                  "Praktische Relocation-Hilfe: Wohnungssuche, Behördengänge, Anmeldung und Bankkonteneröffnung",
                  "Familienbegleitung: Unterstützung beim Familiennachzug, Kitaplätzen und Schulzulassungen",
                  "Rechtliche und arbeitsrechtliche Betreuung während des gesamten Anerkennungsprozesses",
                  "Verpflichtung auf den ethischen WHO-Verhaltenskodex für die internationale Rekrutierung von Gesundheitsfachkräften",
                ],
            technicalTitle: isUz
              ? "Qonunchilik bazasi"
              : isRu
              ? "Законодательная база"
              : isEn
              ? "Legal Framework"
              : isTr
              ? "Yasal Dayanaklar"
              : isAr
              ? "الأطر القانونية والتشريعية"
              : "Rechtliche Grundlagen",
            technicalText: isUz
              ? "Malakani tan olish va ishga qabul qilish Germaniya Federativ Respublikasi qonunlariga (Bundesärzteordnung BÄO, Pflegeberufegesetz PflBG, Fachkräfteeinwanderungsgesetz) hamda Jahon sog'liqni saqlash tashkilotining (JSST) adolatli xalqaro ishga qabul qilish kodeksiga to'liq mos ravishda olib boriladi."
              : isRu
              ? "Процедура признания квалификации и найма строго регулируется § 3 Bundesärzteordnung (BÄO), § 10 BÄO (Berufserlaubnis), Pflegeberufegesetz (PflBG) и Aufenthaltsgesetz (AufenthG)."
              : isEn
              ? "Professional licensing and immigration operate strictly under § 3 BÄO (Federal Medical Code), § 10 BÄO (Temporary permit), PflBG (Nursing Professions Act), and German AufenthG."
              : isTr
              ? "Tanıma süreci ve göç; § 3 BÄO, § 10 BÄO, Hemşirelik Meslekleri Yasası (PflBG) ve İkamet Yasası'nın §§ 16d, 18b maddelerine kesinlikle uygun olarak yürütülür."
              : isAr
              ? "تستند إجراءات المعادلة والهجرة المهنية بشكل صارم إلى أحكام § 3 BÄO و§ 10 BÄO وقانون مهن التمريض (PflBG) والمادتين 16d و 18b من قانون الإقامة الألماني."
              : "Das Anerkennungsverfahren und die Zuwanderung erfolgen strikt auf Grundlage von § 3 BÄO, § 10 BÄO, des Pflegeberufegesetzes (PflBG) sowie der §§ 16d, 18b des Aufenthaltsgesetzes.",
            ctaButtonText: isUz
              ? "Dasturga ariza topshirish"
              : isRu
              ? "Подать заявку на программу"
              : isEn
              ? "Apply for Program"
              : isTr
              ? "Programa Başvurun"
              : isAr
              ? "التقديم للبرنامج"
              : "Bewerbung / Programm anfragen",
          },
        },
        {
          id: "wissenstransfer-akademie",
          tag: isUz
            ? "AKADEMIYA VA TA'LIM"
            : isRu
            ? "АКАДЕМИЯ & ОБУЧЕНИЕ"
            : isEn
            ? "EDUCATION"
            : isTr
            ? "AKADEMİ VE EĞİTİM"
            : isAr
            ? "الأكاديمية والتدريب"
            : "AKADEMIE",
          image: "/images/international/world-hands.webp",
          iconType: "academy",
          title: isUz
            ? "Bilim transferi va klinik malaka oshirish (NabiOta Academy)"
            : isRu
            ? "Wissenstransfer & Klinische Weiterbildung (NabiOta Academy)"
            : isEn
            ? "Knowledge Transfer & Clinical Education (NabiOta Academy)"
            : isTr
            ? "Bilgi Transferi & Klinik İleri Eğitim (NabiOta Academy)"
            : isAr
            ? "نقل المعرفة والتعليم الطبي السريري المستمر (NabiOta Academy)"
            : "Wissenstransfer & Klinische Weiterbildung (NabiOta Academy)",
          shortDesc: isUz
            ? "Klinik stajirovkalar, kam invaziv jarrohlik bo'yicha amaliy mahorat darslari va Germaniya mutaxassislari bilan xalqaro simpoziumlar."
            : isRu
            ? "Клинические стажировки, практические мастер-классы по малоинвазивной хирургии и симпозиумы."
            : isEn
            ? "Clinical fellowships, hands-on surgical masterclasses, and international academic symposia."
            : isTr
            ? "Klinik gözlem ve stajlar, minimal invaziv cerrahide uygulamalı atölyeler ve disiplinler arası sempozyumlar."
            : isAr
            ? "معايشات وزمالات سريرية، ورش عمل تطبيقية في الجراحة طفيفة التوغل، ومؤتمرات متعددة التخصصات."
            : "Klinische Hospitationen, Hands-on-Workshops in minimalinvasiver Chirurgie und interdisziplinäre Symposien.",
          modal: {
            title: isUz
              ? "Bilim transferi va klinik akademiya (NabiOta Academy)"
              : isRu
              ? "Трансфер знаний & Клиническая академия (NabiOta Academy)"
              : isEn
              ? "Knowledge Transfer & Clinical Academy (NabiOta Academy)"
              : isTr
              ? "Bilgi Transferi & Klinik İleri Eğitim (NabiOta Academy)"
              : isAr
              ? "نقل المعرفة والتعليم الطبي السريري المستمر (NabiOta Academy)"
              : "Wissenstransfer & Klinische Weiterbildung (NabiOta Academy)",
            subtitle: isUz
              ? "Kam invaziv jarrohlik bo'yicha amaliy kurslar, klinik stajirovkalar va transchegaraviy CME ta'limi"
              : isRu
              ? "Практические курсы малоинвазивной хирургии, стажировки и сертификационные программы"
              : isEn
              ? "Advanced surgical masterclasses, clinical observerships, and certified training modules"
              : isTr
              ? "Sertifikalı eğitim konseptleri, cerrahi ustalık sınıfları ve disiplinler arası bilgi aktarımı"
              : isAr
              ? "مفاهيم تعليمية معتمدة، دورات جراحية تخصصية متقدمة، ونقل معرفي بين التخصصات"
              : "Zertifizierte Fortbildungskonzepte, chirurgische Masterclasses und interdisziplinärer Wissenstransfer",
            description: isUz
              ? "NabiOta Academy — xoldingning ta'lim bo'linmasi bo'lib, xorijiy shifokorlar va boshqaruvchilarga zamonaviy nemis tibbiyoti standartlarini yetkazadi. Dasturlar laparoskopiya, robotlashtirilgan jarrohlik, shoshilinch yordam, zamonaviy diagnostika va sog'liqni saqlash menejmentini o'z ichiga oladi."
              : isRu
              ? "NabiOta Academy — образовательное подразделение холдинга, реализующее программы повышения квалификации для зарубежных врачей и медицинских менеджеров. Мы организуем интенсивные клинические стажировки в центрах холдинга, мастер-классы по артроскопии, эндоскопии, микрохирургии и радиационной безопасности, транслируя передовой немецкий медицинский опыт."
              : isEn
              ? "NabiOta Academy is the group's educational arm dedicated to international physician education and healthcare management training. We offer intensive surgical observerships, hands-on workshops in arthroscopy, endoscopy, and microsurgery, and structured courses in radiation protection, equipping global clinicians with German medical excellence."
              : isTr
              ? "NabiOta Academy, uluslararası ortaklarımızla bilimsel ve didaktik köprümüzü oluşturur. Kişiye özel ileri eğitim müfredatları, uygulamalı cerrahi atölyeleri, yapılandırılmış klinik gözlem programları ve tıbbi yöneticiler ile hemşirelik liderleri için yönetim seminerleri sunuyoruz."
              : isAr
              ? "تشكل NabiOta Academy الجسر العلمي والأكاديمي لشركائنا الدوليين. نقدم مناهج تدريبية مخصصة، ورش عمل جراحية تطبيقية، برامج معايشة سريرية منظمة، ودورات إدارة صحية للقيادات الطبية والتمريضية."
              : "Die NabiOta Academy bildet die wissenschaftliche und didaktische Brücke zu unseren internationalen Partnern. Wir bieten maßgeschneiderte Weiterbildungscurricula, chirurgische Hands-on-Workshops, strukturierte Hospitationsprogramme sowie Management-Seminare für ärztliche Führungskräfte und Pflegedienstleitungen.",
            specificationsTitle: isUz
              ? "Ta'lim formatlari"
              : isRu
              ? "Образовательные форматы"
              : isEn
              ? "Curriculum Modules"
              : isTr
              ? "Müfredat ve Eğitim Formatları"
              : isAr
              ? "المناهج والبرامج التدريبية"
              : "Curricula & Weiterbildungsformate",
            specifications: isUz
              ? [
                "Zamonaviy simulyatsiya markazlarida kam invaziv jarrohlik (MIS) bo'yicha mahorat darslari",
                "Operatsiya xonalarida bevosita yetakchi jarrohlar bilan klinik kuzatuv (Clinical Observership)",
                "Ultratovush diagnostikasi (DEGUM standartlari bo'yicha) va intervension radiologiya kurslari",
                "Shoshilinch tibbiy yordam va reanimatsiya algoritmlari (ACLS / ATLS standartlari)",
                "Tibbiyot muassasalarini boshqarish va klinik sifat menejmenti bo'yicha sertifikatlangan dasturlar",
                ]
              : isRu
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
              : isTr
              ? [
                  "Uzmanlık merkezlerimizde ve ameliyathanelerimizde yapılandırılmış klinik stajlar (2 ila 12 hafta)",
                  "Minimal invaziv artroskopik ve beyin cerrahisi teknikleri için uygulamalı (Hands-on) atölyeler",
                  "İleri kesit görüntüleme tanıları (3T MRG, Düşük Doz BT) ve radyasyondan korunma uzmanlık seminerleri",
                  "Modern yara yönetimi için sertifikalı eğitim modülleri (ICW kılavuzlarına göre)",
                  "Ayakta tedavi MVZ organizasyonu, kalite yönetimi ve kontrolüne yönelik yönetici atölyeleri",
                  "Resmi CME kredi puanı onayına sahip sertifikalı eğitim belgelerinin verilmesi",
                ]
              : isAr
              ? [
                  "معايشات وزمالات سريرية منظمة (من أسبوعين إلى 12 أسبوعاً) في مراكزنا وغرف العمليات",
                  "ورش عمل تطبيقية تفاعلية (Hands-on) لتقنيات جراحة المناظير وجراحة الأعصاب طفيفة التوغل",
                  "ندوات تخصصية في التصوير المقطعي المتقدم (3T MRI، الأشعة منخفضة الجرعة) والوقاية الإشعاعية",
                  "وحدات تدريبية معتمدة للعناية بالجروح المعقدة وفق إرشادات مبادرة العناية بالجروح (ICW)",
                  "ورش عمل إدارية لتنظيم وإدارة مراكز الرعاية الشاملة (MVZ) وضبط الجودة والرقابة المالية",
                  "منح شهادات تدريبية معتمدة معترف بها بنقاط التعليم الطبي المستمر (CME)",
                ]
              : [
                  "Strukturierte klinische Hospitationen (2 bis 12 Wochen) in unseren Fachzentren und OP-Sälen",
                  "Hands-on-Workshops für minimalinvasive arthroskopische und neurochirurgische Techniken",
                  "Fachseminare für High-End-Schnittbilddiagnostik (3T MRT, Low-Dose CT) und Strahlenschutz",
                  "Zertifizierte Weiterbildungsmodule für modernes Wundmanagement (nach ICW-Richtlinien)",
                  "Führungskräfte-Workshops zur ambulanten MVZ-Organisation, Qualitätsmanagement und Controlling",
                  "Vergabe zertifizierter Fortbildungsnachweise mit offizieller CME-Punkte-Anerkennung",
                ],
            scopeTitle: isUz
              ? "Akademiya jihozlanishi"
              : isRu
              ? "Оснащение академии"
              : isEn
              ? "Academy Infrastructure"
              : isTr
              ? "Didaktik Donanım ve Altyapı"
              : isAr
              ? "التجهيزات التعليمية والتدريبية"
              : "Didaktische Ausstattung",
            scopeItems: isUz
              ? [
                "Yuqori aniqlikdagi laparoskopik va endoskopik simulyatorlar bilan jihozlangan trening zallari",
                "Germaniyaning yetakchi operatsiya zallaridan real vaqt rejimida 4K video-translatsiya tizimi",
                "Gibrid ta'lim shakli: raqamli elektron darsliklar va Germaniyada 2 haftalik intensiv amaliyot",
                "Landesärztekammer (Germaniya tibbiyot palatasi) tomonidan tan olingan rasmiy sertifikatlar va CME ballari",
                "Xalqaro talabalar va shifokorlar uchun turar joy va transport logistikasini to'liq tashkil etish",
                ]
              : isRu
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
              : isTr
              ? [
                  "Sınıf 1a temiz oda ameliyathanelerinden 4K Ultra HD çözünürlükte canlı cerrahi yayın",
                  "Endoskopik ve mikrocerrahi egzersizler için modern simülatör ve Wet-Lab çalışma istasyonları",
                  "Deneyimli NabiOta başhekimleri ve öğretim görevlileri tarafından bire bir mentorluk",
                  "Klinik vaka sunumlarının İngilizce ve Rusça dillerine simultane çevirisi",
                  "Klinik içi dijital SOP ve kalite yönetim sistemine tam erişim yetkisi",
                ]
              : isAr
              ? [
                  "بث حي ومباشر للعمليات من غرف العمليات المعقمة فئة 1a بدقة فائقة 4K Ultra-HD",
                  "محطات عمل تدريبية متطورة بمختبرات المحاكاة (Wet-Lab) لتمارين المناظير والجراحة المجهرية",
                  "إشراف وتوجيه شخصي مباشر من قِبل كبار رؤساء الأقسام وأعضاء هيئة التدريس في NabiOta",
                  "ترجمة فورية لمناقشات الحالات السريرية والمحاضرات إلى اللغتين الإنجليزية والروسية",
                  "إمكانية وصول كاملة لنظام إجراءات التشغيل القياسية (SOPs) وإدارة الجودة الرقمي",
                ]
              : [
                  "Live-Übertragung von Eingriffen aus Reinraum-OP-Sälen der Klasse 1a in 4K-Ultra-HD-Auflösung",
                  "Moderne Wet-Lab- und Simulatoren-Arbeitsplätze für endoskopische und mikrochirurgische Übungen",
                  "Persönliche Betreuung durch erfahrene NabiOta-Chefärzte und Lehrbeauftragte",
                  "Simultanübersetzung klinischer Fallvorstellungen auf Englisch und Russisch",
                  "Vollständiger Zugriff auf das klinikinterne digitale SOP- und Qualitätsmanagementsystem",
                ],
            technicalTitle: isUz
              ? "Akkreditatsiya"
              : isRu
              ? "Аккредитация"
              : isEn
              ? "Accreditation"
              : isTr
              ? "Akreditasyon ve Sertifikasyon"
              : isAr
              ? "الاعتماد والشهادات الرسمية"
              : "Akkreditierung & Zertifizierung",
            technicalText: isUz
              ? "Akademiya dasturlari Germaniya uzluksiz tibbiy ta'lim standartlari (CME) hamda DIN ISO 29990 ta'lim xizmatlari sifat menejmenti tizimi bo'yicha sertifikatlangan."
              : isRu
              ? "Программы академии сертифицированы в соответствии с требованиями Landesärztekammer (Врачебной палаты земли Северный Рейн-Вестфалия) и соответствуют международным рекомендациям CME/CPD."
              : isEn
              ? "Academy curricula comply with continuing medical education directives of the State Medical Chamber of North Rhine-Westphalia (ÄkNo) and international CME/CPD criteria."
              : isTr
              ? "İleri eğitim etkinlikleri, Kuzey Ren Tabipler Odası (ÄkNo) kılavuzlarına göre sertifikalandırılmakta ve tanınmış eğitim puanları (CME) ile değerlendirilmektedir."
              : isAr
              ? "يتم اعتماد البرامج التدريبية وفق معايير نقابة الأطباء في شمال الراين (ÄkNo) وتمنح نقاط التعليم الطبي المستمر المعتمدة (CME)."
              : "Die Fortbildungsveranstaltungen werden nach den Richtlinien der Ärztekammer Nordrhein zertifiziert und mit anerkannten Fortbildungspunkten (CME) bewertet.",
            ctaButtonText: isUz
              ? "Ta'lim dasturini so'rash"
              : isRu
              ? "Запросить программу обучения"
              : isEn
              ? "Inquire Academy Course"
              : isTr
              ? "Eğitim Programı Talebi"
              : isAr
              ? "طلب برنامج تدريبي"
              : "Weiterbildung anfragen",
          },
        },
        {
          id: "humanitaere-projekte",
          tag: isUz
            ? "INSONPARVARLIK MISSIYALARI"
            : isRu
            ? "ГУМАНИТАРНЫЕ МИССИИ"
            : isEn
            ? "HUMANITARIAN"
            : isTr
            ? "İNSANİ YARDIM"
            : isAr
            ? "العمل الإنساني"
            : "HUMANITÄR",
          image: "/images/international/project-africa.webp",
          iconType: "humanitarian",
          title: isUz
            ? "Gumanitar tibbiy loyihalar va mobil birlamchi yordam"
            : isRu
            ? "Гуманитарные медицинские проекты & Мобильная помощь"
            : isEn
            ? "Humanitarian Health Initiatives & Mobile Primary Care"
            : isTr
            ? "İnsani Sağlık Projeleri & Mobil Birincil Bakım Geliştirme"
            : isAr
            ? "المشاريع الصحية الإنسانية وبناء الرعاية الأولية المتنقلة"
            : "Humanitäre Gesundheitsprojekte & Mobiler Primärversorgungsaufbau",
          shortDesc: isUz
            ? "Qishloq tibbiyot punktlarini mustahkamlash, mobil diagnostika majmualari va ona hamda bola salomatligini muhofaza qilish."
            : isRu
            ? "Укрепление сельских пунктов помощи, мобильные диагностические комплексы и охрана материнства."
            : isEn
            ? "Sustainable enhancement of rural health posts, mobile screening units, and maternal-child care."
            : isTr
            ? "Kırsal sağlık istasyonlarının sürdürülebilir güçlendirilmesi, mobil tarama birimleri ve anne-çocuk sağlığı koruması."
            : isAr
            ? "التعزيز المستدام للمراكز الصحية الريفية، وحدات الفحص المتنقلة، وحماية صحة الأم والطفل."
            : "Nachhaltige Stärkung ländlicher Gesundheitsstationen, mobile Screening-Einheiten und Schutz von Mutter & Kind.",
          modal: {
            title: isUz
              ? "Gumanitar loyihalar va mobil birlamchi yordam"
              : isRu
              ? "Гуманитарные проекты & Мобильная первичная помощь"
              : isEn
              ? "Humanitarian Health Initiatives & Mobile Primary Care"
              : isTr
              ? "İnsani Sağlık Projeleri & Mobil Birincil Bakım Geliştirme"
              : isAr
              ? "المشاريع الصحية الإنسانية وبناء الرعاية الأولية المتنقلة"
              : "Humanitäre Gesundheitsprojekte & Mobiler Primärversorgungsaufbau",
            subtitle: isUz
              ? "Avtonom feldsherlik punktlarini barpo etish, onalikni muhofaza qilish va tibbiy asbob-uskunalar yetkazib berish"
              : isRu
              ? "Создание автономных фельдшерских пунктов, охрана здоровья матерей и мобильные скрининги"
              : isEn
              ? "Empowering rural clinics, maternal-child health infrastructure, and mobile screening units"
              : isTr
              ? "Kırsal bakım yapılarının sürdürülebilir güçlendirilmesi ve mobil koruyucu hekimlik"
              : isAr
              ? "التعزيز المستدام لهياكل الرعاية الريفية والطب الوقائي المتنقل"
              : "Nachhaltige Stärkung ländlicher Versorgungsstrukturen und mobile Präventionsmedizin",
            description: isUz
              ? "Korporativ ijtimoiy mas'uliyat doirasida NabiOta® qiyin sharoitdagi mintaqalarda tibbiy infratuzilmani rivojlantirishga ko'maklashadi. Biz xalqaro jamg'armalar bilan birgalikda quyosh energiyasida ishlovchi mobil klinikalarni jihozlaymiz, tibbiy apparatlar yetkazib beramiz va mahalliy parvarish xodimlarini o'qitamiz."
              : isRu
              ? "В рамках корпоративной социальной ответственности (CSR) NabiOta® реализует гуманитарные медицинские проекты в развивающихся регионах. Мы поставляем сертифицированное диагностическое оборудование, организуем автономные акушерские и мобильные смотровые пункты на базе полноприводных шасси, а также обучаем местный медицинский персонал основам скрининга и профилактики."
              : isEn
              ? "As part of our commitment to global health equity, NabiOta® leads humanitarian healthcare deployments in underserved regions. We provide certified refurbished medical hardware, build decentralized maternity and primary care posts, deploy 4x4 mobile health clinics for remote populations, and train community health workers in early disease detection."
              : isTr
              ? "Sosyal sorumluluğumuz doğrultusunda NabiOta Grubu, dünya çapında insani sağlık projelerinde yer almaktadır. Odak noktamız; kırsal bölgelerde kendi kendine yeten doğum ve temel sağlık istasyonlarının sürdürülebilir inşası, mobil ambulans ve tarama araçlarının konuşlandırılması ve yerel sağlık personelinin uygulamalı eğitimidir."
              : isAr
              ? "انطلاقاً من مسؤوليتنا المجتمعية، تنخرط مجموعة NabiOta في مشاريع صحية إنسانية حول العالم. يتركز العمل على البناء المستدام لمراكز ولادة ورعاية صحية أولية مكتفية ذاتياً في المناطق الريفية، وتشغيل عيادات متنقلة للفحص، وتدريب الكوادر الطبية المحلية عملياً."
              : "Gemäß unserer gesellschaftlichen Verantwortung engagiert sich die NabiOta-Gruppe in humanitären Gesundheitsprojekten weltweit. Der Fokus liegt auf dem nachhaltigen Aufbau autarker Geburts- und Basisgesundheitsstationen in ländlichen Regionen, der Entsendung mobiler Ambulanz- und Screening-Fahrzeuge sowie der praxisnahen Schulung des medizinischen Personals vor Ort.",
            specificationsTitle: isUz
              ? "Gumanitar tashabbuslar"
              : isRu
              ? "Гуманитарные инициативы"
              : isEn
              ? "Project Pillars"
              : isTr
              ? "Proje Odak Noktaları"
              : isAr
              ? "محاور المشروع الأساسية"
              : "Projektschwerpunkte",
            specifications: isUz
              ? [
                "Kam ta'minlangan hududlar uchun avtonom quyosh batareyali mobil tibbiyot stansiyalari",
                "Ona va bola salomatligini muhofaza qilish bo'yicha skrining dasturlari va emlash punktlari",
                "Germaniya klinikalaridan tekshirilgan va sertifikatlangan tibbiy uskunalarni xayriya sifatida o'tkazish",
                "Toza ichimlik suvi ta'minoti va shifoxona gigiyenasi bo'yicha barqaror loyihalar",
                "Mahalliy hamshiralar va feldsherlarni birlamchi reanimatsiya ko'nikmalariga o'rgatish",
                ]
              : isRu
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
              : isTr
              ? [
                  "Kırsal doğum merkezlerinin ultrason cihazları, NST monitörleri ve otoklavlarla donatılması",
                  "Ulaşılması zor kırsal alanlar için 4x4 dört tekerden çekişli mobil muayene araçlarının konuşlandırılması",
                  "Diyabet, hipertansiyon ve bulaşıcı hastalıkların erken teşhisi için yapılandırılmış tarama programları",
                  "NabiOta envanterinden tıbbi hasta yatakları, yürüme yardımcıları ve tekerlekli sandalyelerin temini",
                  "Ebe ve hemşireler için Yenidoğan Acil Yaşam Desteği konusunda Eğitici Eğitimi seminerleri",
                  "Hayat kurtaran aşıların güvenilir şekilde saklanması için güneş enerjili soğuk zincir sistemlerinin kurulumu",
                ]
              : isAr
              ? [
                  "تجهيز مراكز الولادة الريفية بأجهزة الموجات فوق الصوتية وأجهزة مراقبة الجنين وأجهزة التعقيم",
                  "تشغيل مركبات عيادات دفع رباعي متنقلة مجهزة للوصول للمناطق الريفية الوعرة والمعزولة",
                  "برامج مسح وقائي منظمة للكشف المبكر عن السكري، وارتفاع ضغط الدم، والأمراض المعدية",
                  "توفير أسرّة استشفائية طبية، كراسٍ متحركة، ومعينات حركية من مخزون مجموعة NabiOta",
                  "دورات تدريب المدربين للقابلات والممرضات على الإنعاش الطارئ للمواليد الجدد (Neonatal Life Support)",
                  "تركيب أنظمة تبريد وتخزين لقاحات شمسية لضمان سلسلة التبريد الدوائي الحيوية في القرى",
                ]
              : [
                  "Ausstattung ländlicher Geburtsstationen mit Ultraschallgeräten, CTG-Monitoren und Sterilisatoren",
                  "Einsatz allradgetriebener mobiler Untersuchungsfahrzeuge für schwer zugängliche ländliche Räume",
                  "Strukturierte Vorsorgeprogramme zur Früherkennung von Diabetes, Hypertonie und Infektionskrankheiten",
                  "Bereitstellung von Pflegebetten, Gehhilfen und Rollstühlen aus NabiOta-Beständen",
                  "Train-the-Trainer-Seminare für Hebammen und Pflegekräfte in Neugeborenen-Notfallversorgung",
                  "Installation solarbetriebener Kühlketten für die zuverlässige Lagerung lebenswichtiger Impfstoffe",
                ],
            scopeTitle: isUz
              ? "Barqarorlik tamoyillari"
              : isRu
              ? "Принципы устойчивости"
              : isEn
              ? "Sustainability Principles"
              : isTr
              ? "Sürdürülebilirlik Konsepti"
              : isAr
              ? "مفهوم الاستدامة"
              : "Nachhaltigkeitskonzept",
            scopeItems: isUz
              ? [
                "Faqat uzoq muddatli mustaqil ishlashga qodir infratuzilmani barpo etish (Capacity Building)",
                "Mahalliy sog'liqni saqlash vazirliklari va munitsipal idoralar bilan yaqin hamkorlik",
                "Har bir loyihaning maqsadli sarflanishi bo'yicha 100% shaffof moliyaviy va texnik hisobdorlik",
                "Germaniyalik mutaxassislar tomonidan muntazam texnik ko'rik va tibbiy monitoring o'tkazish",
                "Favqulodda vaziyatlar va tabiiy ofatlar oqibatlarini bartaraf etishda tezkor gumanitar ko'mak",
                ]
              : isRu
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
              : isTr
              ? [
                  "Yerel sağlık yetkilileri, topluluk liderleri ve akredite sivil toplum kuruluşlarıyla yakın işbirliği",
                  "Yerel personeli yetkinleştirerek 'kendi kendine yardım' ilkesine odaklanma",
                  "Yerel biyomedikal teknisyenlerin eğitimi ve uzun vadeli yedek parça tedarikinin güvenceye alınması",
                  "Kullanılan tüm ayni ve nakdi yardımların eksiksiz belgelenmesi ve bağımsız denetimi",
                  "BM Sürdürülebilir Kalkınma Amaçları ile uyum (SDG 3: Sağlıklı ve Kaliteli Yaşam)",
                ]
              : isAr
              ? [
                  "تعاون وثيق مع وزارات الصحة المحلية، قادة المجتمعات، والمنظمات غير الحكومية المعتمدة",
                  "التركيز على مبدأ 'تمكين المجتمعات للاكتفاء الذاتي' عبر تأهيل الكفاءات المحلية",
                  "تأمين قطع الغيار وتدريب مهندسي وفنيي الأجهزة الطبية المحليين لضمان استمرارية الأجهزة",
                  "توثيق وتدقيق مالي وعيني شفاف لكافة المساعدات والموارد المستخدمة ميدانياً",
                  "التوافق التام مع أهداف التنمية المستدامة للأمم المتحدة (SDG 3: الصحة الجيدة والرفاه)",
                ]
              : [
                  "Enge Zusammenarbeit mit lokalen Gesundheitsbehörden, Dorfvorstehern und akkreditierten NGOs",
                  "Fokus auf 'Hilfe zur Selbsthilfe' durch Qualifizierung des lokalen Personals",
                  "Langfristige Ersatzteilversorgung und Schulung von Medizintechnikern vor Ort",
                  "Lückenlose Dokumentation und Auditierung aller eingesetzten Sach- und Geldmittel",
                  "Ausrichtung an den UN-Nachhaltigkeitszielen (SDG 3: Gesundheit und Wohlergehen für alle)",
                ],
            technicalTitle: isUz
              ? "Xalqaro me'yorlar"
              : isRu
              ? "Международные нормы"
              : isEn
              ? "International Guidelines"
              : isTr
              ? "Uluslararası Yönergeler"
              : isAr
              ? "المعايير والمبادئ التوجيهية الدولية"
              : "Internationale Richtlinien",
            technicalText: isUz
              ? "Barcha loyihalar gumanitar harakatlarning xalqaro standartlari (Sphere Standards) hamda Jahon sog'liqni saqlash tashkilotining birlamchi tibbiy-sanitariya yordami (PHC) bo'yicha direktivalariga muvofiq amalga oshiriladi."
              : isRu
              ? "Все проекты реализуются в соответствии с гуманитарными принципами Sphere Project, стандартами ВОЗ и требованиями европейского экспортного контроля медицинских технологий."
              : isEn
              ? "All deployments strictly adhere to Sphere Humanitarian Charter standards, WHO Essential Health Package guidelines, and German medical device export compliance."
              : isTr
              ? "Tüm faaliyetler, Sphere Projesi'nin asgari insani standartlarına ve Dünya Sağlık Örgütü'nün (WHO) kılavuz ilkelerine tam uyumlu olarak yürütülür."
              : isAr
              ? "يتم التنفيذ وفقاً للمعايير الإنسانية الدنيا لمشروع إسفير (Sphere Project) وإرشادات منظمة الصحة العالمية (WHO)."
              : "Die Durchführung erfolgt gemäß den humanitären Mindeststandards des Sphere-Projekts sowie den Leitlinien der Weltgesundheitsorganisation (WHO).",
            ctaButtonText: isUz
              ? "Gumanitar loyihani qo'llab-quvvatlash"
              : isRu
              ? "Поддержать гуманитарный проект"
              : isEn
              ? "Support Humanitarian Project"
              : isTr
              ? "Proje Başvurusunda Bulunun"
              : isAr
              ? "تقديم طلب مشروع إنساني"
              : "Projektanfrage stellen",
          },
        },
        {
          id: "medical-travel",
          tag: isUz
            ? "TIBBIY TURIZM"
            : isRu
            ? "МЕДИЦИНСКИЙ ТУРИЗМ"
            : isEn
            ? "MEDICAL TRAVEL"
            : isTr
            ? "HASTA HİZMETLERİ"
            : isAr
            ? "خدمات المرضى الدوليين"
            : "PATIENTENSERVICE",
          image: "/images/about/hero-doctors.webp",
          iconType: "medicalTravel",
          title: isUz
            ? "Bemorlar uchun xalqaro xizmat (Cross-Border Medical Care)"
            : isRu
            ? "Международный сервис для пациентов (Cross-Border Medical Care)"
            : isEn
            ? "International Patient Service & Cross-Border Medical Care"
            : isTr
            ? "Uluslararası Hasta Bakımı & Medikal Turizm Servisi"
            : isAr
            ? "رعاية المرضى الدوليين وخدمات السفر للعلاج الطبي"
            : "Internationale Patientenbetreuung & Medical Travel Service",
          shortDesc: isUz
            ? "Germaniyada davolanishni kompleks tashkil etish: shifokorlar konsiliumi, tibbiy viza, tarjimonlar va klinikada to'liq hamrohlik."
            : isRu
            ? "Комплексная организация лечения в Германии: врачебный консилиум, медицинская виза, переводчики и сопровождение."
            : isEn
            ? "End-to-end coordination of premier care in Germany: medical review, visa support, interpreters & aftercare."
            : isTr
            ? "Almanya'da üst düzey tedavilerin bütüncül koordinasyonu: İkinci görüş, vize, tercüman ve rehabilitasyon sonrası bakım."
            : isAr
            ? "تنسيق متكامل للعلاجات الطبية المتقدمة في ألمانيا: رأي ثانٍ، تأشيرة، مترجمون، ورعاية لاحقة."
            : "Ganzheitliche Koordination von Spitzenbehandlungen in Deutschland: Zweitmeinung, Visum, Dolmetscher & Nachsorge.",
          modal: {
            title: isUz
              ? "Bemorlar uchun xalqaro xizmat (Medical Travel & Cross-Border Care)"
              : isRu
              ? "Международный сервис для пациентов (Medical Travel & Cross-Border Care)"
              : isEn
              ? "International Patient Office (Cross-Border Medical Care)"
              : isTr
              ? "Uluslararası Hasta Bakımı & Medikal Turizm Servisi"
              : isAr
              ? "رعاية المرضى الدوليين وخدمات السفر للعلاج الطبي"
              : "Internationale Patientenbetreuung & Medical Travel Service",
            subtitle: isUz
              ? "Xolding klinikalarida rejaviy yuqori ixtisoslashtirilgan davolanishni kalit ostida tashkil etish"
              : isRu
              ? "Организация планового лечения в клиниках холдинга NabiOta® в Германии под ключ"
              : isEn
              ? "End-to-end coordination for specialized treatment in German NabiOta® clinical centers"
              : isTr
              ? "Almanya'daki tıbbi tedavilerin bütüncül bakımı ve organizasyonu"
              : isAr
              ? "تنظيم ورعاية متكاملة وشاملة للعلاجات الطبية في ألمانيا"
              : "Ganzheitliche Betreuung und Organisation medizinischer Behandlungen in Deutschland",
            description: isUz
              ? "NabiOta® xalqaro bo'limi xorijiy bemorlarning Germaniyadagi zamonaviy klinika va reabilitatsiya markazlarimizda rejali statsionar hamda ambulator davolanishini tashkil etadi. Bemor va uning yaqinlariga dastlabki tibbiy ekspertizadan boshlab vatanga qaytgunga qadar to'liq hamrohlik ko'rsatiladi."
              : isRu
              ? "Международный отдел NabiOta® организует плановое лечение пациентов из любой точки мира в наших хирургических и диагностических центрах в Германии. Мы берем на себя предварительный анализ выписок ведущими немецкими профессорами, составление индивидуального сметного плана лечения, визовую поддержку, трансфер, сопровождение сертифицированными медицинскими переводчиками и реабилитационную реадаптацию."
              : isEn
              ? "The NabiOta® International Patient Department coordinates comprehensive clinical care in Germany for overseas patients. Our multilingual team manages case review by senior department heads, cost transparency through preliminary medical estimates, visa invitation letters, airport transfers, certified medical interpreters, and personalized inpatient or outpatient recovery."
              : isTr
              ? "NabiOta Grubu Uluslararası Hasta Ofisi, dünyanın dört bir yanından gelen hastalara Almanya'daki tedavileri için kesintisiz, son derece profesyonel bir hizmet sunar. Mevcut tıbbi belgelerin uzman hekimler tarafından incelenmesinden şeffaf maliyet tahminine, vize desteğinden medikal tercüman refakatine ve ayakta rehabilitasyona kadar size kişisel olarak rehberlik ediyoruz."
              : isAr
              ? "يقدم مكتب المرضى الدولي في مجموعة NabiOta رعاية احترافية شاملة للمرضى من جميع أنحاء العالم الراغبين في العلاج بألمانيا. من المراجعة الاستشارية الأولية للتقارير الطبية وتقدير التكلفة الشفاف، إلى دعم استخراج التأشيرة الطبية، المرافقة بمترجمين متخصصين، وإعادة التأهيل، نرافقكم شخصياً خطوة بخطوة."
              : "Das International Patient Office der NabiOta-Gruppe bietet Patienten aus aller Welt eine lückenlose, hochprofessionelle Betreuung bei Behandlungen in Deutschland. Von der ersten fachärztlichen Sichtung der Vorbefunde über die transparente Kostenschätzung bis hin zur Visumsunterstützung, Begleitung durch Dolmetscher und ambulanten Rehabilitation begleiten wir Sie persönlich.",
            specificationsTitle: isUz
              ? "Tibbiy xizmatlar spektri"
              : isRu
              ? "Спектр медицинских услуг"
              : isEn
              ? "Clinical Services Provided"
              : isTr
              ? "Uluslararası Hastalar İçin Tedavi Yelpazesi"
              : isAr
              ? "نطاق الخدمات الطبية للمرضى الدوليين"
              : "Leistungsspektrum für internationale Patienten",
            specifications: isUz
              ? [
                "Kam invaziv ortopedik jarrohlik: chanoq va tizza bo'g'imlarini endoprotezlash",
                "Umurtqa pog'onasining ixtisoslashgan neyrojarrohligi (disk churrasi, spondilodez, dekompressiya)",
                "1-2 kun ichida 3T MRT va yurak-qon tomir diagnostikasiga ega kompleks Check-up dasturlari",
                "Rekonstruktiv, plastik va estetik jarrohlik hamda operatsiyadan keyingi statsionar parvarish",
                "Nevrologik va kardiologik reabilitatsiya statsionari",
                ]
              : isRu
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
              : isTr
              ? [
                  "Minimal invaziv yaklaşımlarla endoprotez eklem cerrahisi (kalça, diz ve omuz protezleri)",
                  "Mikrocerrahi omurga tedavisi: Bel ve boyun fıtığı ameliyatları, dekompresyon ve stabilizasyon",
                  "3T MRG, Düşük Doz BT ve kardiyoloji içeren 1 ila 2 günlük kapsamlı Executive Check-up programları",
                  "En modern yataklı servis olanaklarıyla plastik, rekonstrüktif ve estetik cerrahi",
                  "NabiOta rehabilitasyon merkezinde entegre ayakta fizik tedavi ve ameliyat sonrası takip programları",
                  "Girişimsel ağrı tedavisi, enjeksiyonlar ve ayakta multimodal ağrı terapisi",
                ]
              : isAr
              ? [
                  "جراحة استبدال المفاصل الاصطناعية (الورك، الركبة، الكتف) عبر مداخل جراحية طفيفة التوغل",
                  "علاج العمود الفقري بالجراحة المجهرية: عمليات الانزلاق الغضروفي، تخفيف الضغط، والتثبيت",
                  "برامج الفحص الشامل المتقدمة (Executive Check-ups) خلال 1-2 يوم مع 3T MRI وأشعة مقطعية وفحوصات القلب",
                  "الجراحة التجميلية والترميمية مع أجنحة إقامة استشفائية حديثة وفائقة الخصوصية",
                  "علاج طبيعي متكامل وتأهيل لاحق بعد الجراحة في مركز التأهيل التابع لمجموعة NabiOta",
                  "علاج الألم التداخلي المتقدم والحقن العلاجي الدقيق تحت التوجيه الإشعاعي",
                ]
              : [
                  "Endoprothetische Gelenkchirurgie (Hüft-, Knie- und Schulter-TEP) mit minimalinvasiven Zugängen",
                  "Mikrochirurgische Wirbelsäulentherapie: Bandscheibenoperationen, Dekompression und Versteifungen",
                  "Komprimierte 1- bis 2-tägige Executive Check-ups mit 3T MRT, Low-Dose CT und Kardiologie",
                  "Plastisch-rekonstruktive und ästhetische Chirurgie mit hochmodernen Bettenstationen",
                  "Integrierte ambulante Anschlussheilbehandlung (AHB) und Physiotherapie im NabiOta-Rehazentrum",
                  "Ambulante multimodale Schmerztherapie und interventionelle Infiltrationen",
                ],
            scopeTitle: isUz
              ? "Servis va koordinatsiya"
              : isRu
              ? "Сервис и координация"
              : isEn
              ? "Concierge & Coordination"
              : isTr
              ? "Koordinasyon ve Hasta Hizmetleri"
              : isAr
              ? "التنسيق وخدمات الضيافة الطبية"
              : "Koordination & Patientenservice",
            scopeItems: isUz
              ? [
                "24-48 soat ichida nemis shifokori tomonidan tibbiy hujjatlarning dastlabki auditi",
                "Elchixonada tezlashtirilgan viza rasmiylashtirish uchun rasmiy tibbiy taklifnoma (Einladung)",
                "Germaniya GOÄ tariflariga asoslangan shaffof xarajatlar smetasi (Kostenvoranschlag)",
                "Dyusseldorf/Kyoln aeroportida kutib olish va klinikaga yoki mehmonxonaga shaxsiy transfer",
                "Klinikada sertifikatlangan tibbiy tarjimon hamrohligi va hisobotlarni tarjima qilish",
                ]
              : isRu
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
              : isTr
              ? [
                  "Tıbbi belgelerin başhekimler tarafından incelenmesi ve 24–48 saat içinde tedavi önerisi sunulması",
                  "Hızlandırılmış vize başvurusu için resmi tıbbi davet mektuplarının (Einladung) düzenlenmesi",
                  "Alman Resmi Hekim Ücret Tarifesi (GOÄ) temelinde şeffaf maliyet tahmini (Kostenvoranschlag)",
                  "Düsseldorf (DUS) veya Köln/Bonn (CGN) havalimanından VIP karşılama ve otel koordinasyonu",
                  "Çok dilli hasta danışmanları ve sertifikalı medikal tercümanlar eşliğinde kişisel refakat",
                  "Tüm epikrizlerin, ameliyat raporlarının ve ilaç planlarının eksiksiz ve onaylı tercümesi",
                ]
              : isAr
              ? [
                  "مراجعة استشارية أولية للتقارير الطبية من رؤساء الأقسام وتقديم خطة العلاج خلال 24-48 ساعة",
                  "إصدار خطابات الدعوة الطبية الرسمية لتسريع إجراءات الحصول على التأشيرة لدى السفارات",
                  "عرض تكلفة تقديري شفاف وفق جدول الأجور الرسمي للأطباء في ألمانيا (GOÄ)",
                  "خدمة استقبال VIP من مطاري دوسلدورف (DUS) أو كولونيا/بون (CGN) مع ترتيبات الفنادق والتنقل",
                  "مرافقة شخصية عبر منسقي رعاية متعددي اللغات ومترجمين طبيين معتمدين في كافة المواعيد",
                  "ترجمة معتمدة لكافة تقارير الخروج وسجلات العمليات وخطط الأدوية إلى الإنجليزية أو العربية",
                ]
              : [
                  "Vorab-Prüfung der Unterlagen durch Chefärzte mit Therapieempfehlung binnen 24–48 Stunden",
                  "Ausstellung offizieller medizinischer Einladungsschreiben für das beschleunigte Visumverfahren",
                  "Transparenter Kostenvoranschlag auf Basis der Gebührenordnung für Ärzte (GOÄ)",
                  "VIP-Abholservice vom Flughafen Düsseldorf (DUS) oder Köln/Bonn (CGN) mit Hotelkoordination",
                  "Persönliche Begleitung durch mehrsprachige Patientenbetreuer und medizinische Dolmetscher",
                  "Vollständige Übersetzung aller Entlassungsberichte, OP-Berichte und Medikationspläne",
                ],
            technicalTitle: isUz
              ? "Moliyaviy va huquqiy shaffoflik"
              : isRu
              ? "Финансовая и правовая прозрачность"
              : isEn
              ? "Financial & Legal Standards"
              : isTr
              ? "Faturalandırma ve Hukuki Güvenlik"
              : isAr
              ? "الفواتير والشفافية القانونية"
              : "Abrechnung & Rechtssicherheit",
            technicalText: isUz
              ? "Barcha to'lovlar rasmiy nemis shifokorlar tariflari (GOÄ) asosida, to'liq shaffof protseduralar ro'yxati va foydalanilmagan depozit mablag'larini zudlik bilan qaytarish kafolati bilan amalga oshiriladi."
              : isRu
              ? "Все расчеты ведутся строго на основе официального немецкого регламента оплаты медицинских услуг (Gebührenordnung для Ärzte - GOÄ) с открытым перечнем процедур и возвратом неиспользованных депозитных средств."
              : isEn
              ? "All medical invoicing strictly conforms to the statutory German fee schedule for physicians (GOÄ), ensuring itemized transparency and automatic refund of unused deposit balances."
              : isTr
              ? "Faturalandırma, resmi Alman Hekim Ücret Tarifesi'ne (GOÄ) uygun olarak şeffaf ve yasalara uygun biçimde yapılır. Kullanılmayan avans ödemeleri derhal iade edilir."
              : isAr
              ? "تتم المحاسبة المالية بشفافية تامة ووفقاً للائحة أجور الأطباء الألمانية الرسمية (GOÄ). ويتم استرداد أي مبالغ متبقية من الوديعة غير مستخدمة على الفور دون تأخير."
              : "Die Abrechnung erfolgt transparent und gesetzeskonform nach der amtlichen Gebührenordnung für Ärzte (GOÄ). Nicht in Anspruch genommene Vorauszahlungen werden unverzüglich rückerstattet.",
            ctaButtonText: isUz
              ? "Davolash rejasini so'rash"
              : isRu
              ? "Запросить план лечения"
              : isEn
              ? "Request Treatment Plan"
              : isTr
              ? "Tedavi Başvurusunda Bulunun"
              : isAr
              ? "طلب خطة علاجية"
              : "Behandlungsanfrage stellen",
          },
        },
      ] as InternationalProgram[],
    },

    // Section 5: Impact Banner
    s5: {
      eyebrow: isUz
        ? "BIZNING NATIJAMIZ"
        : isRu
        ? "НАШ IMPACT"
        : isEn
        ? "OUR IMPACT"
        : isTr
        ? "ETKİMİZ"
        : isAr
        ? "أثرنا العالمي"
        : "UNSER IMPACT",
      title: isUz
        ? "Yana-da ko'proq salomatlik. Yana-da ko'proq imkoniyatlar."
        : isRu
        ? "Больше здоровья. Больше возможностей."
        : isEn
        ? "More Health. More Opportunities."
        : isTr
        ? "Daha Fazla Sağlık. Daha Fazla Fırsat."
        : isAr
        ? "مزيد من الصحة. مزيد من الفرص."
        : "Mehr Gesundheit. Mehr Möglichkeiten.",
      desc: isUz
        ? "Bizning xalqaro hamkorligimiz sog'liqni saqlash tizimlarini mustahkamlashga, insonlar hayotini yaxshilashga va barcha uchun yanada adolatli kelajak yaratishga hissa qo'shadi."
        : isRu
        ? "Наше международное сотрудничество способствует укреплению систем здравоохранения, улучшению жизней и созданию более справедливого будущего."
        : isEn
        ? "Our international partnerships help strengthen health systems, improve lives, and foster a more equitable future."
        : isTr
        ? "Uluslararası işbirliklerimiz sağlık sistemlerini güçlendirmeye, yaşam kalitesini artırmaya ve herkes için daha adil bir geleceğe olanak tanımaya katkıda bulunur."
        : isAr
        ? "تسهم شراكاتنا الدولية في تعزيز النظم الصحية وتحسين جودة الحياة وتمكين مستقبل أكثر عدالة للجميع."
        : "Unsere internationalen Kooperationen tragen dazu bei, Gesundheitssysteme zu stärken, Leben zu verbessern und eine gerechtere Zukunft zu ermöglichen.",
      stampText1: isUz
        ? "Sog'lom jamiyatlar uchun"
        : isRu
        ? "Устойчивые решения для"
        : isEn
        ? "Sustainable Solutions for"
        : isTr
        ? "Sürdürülebilir çözümler"
        : isAr
        ? "حلول مستدامة من أجل"
        : "Nachhaltige Lösungen für",
      stampText2: isUz
        ? "barqaror yechimlar. ♡"
        : isRu
        ? "здоровых сообществ. ♡"
        : isEn
        ? "Healthy Communities. ♡"
        : isTr
        ? "sağlıklı toplumlar için. ♡"
        : isAr
        ? "مجتمعات أكثر صحة وعافية. ♡"
        : "gesunde Gemeinschaften. ♡",
      stats: [
        {
          value: "25+",
          label: isUz
            ? "Hamkor davlatlar"
            : isRu
            ? "Стран-партнеров"
            : isEn
            ? "Partner Countries"
            : isTr
            ? "Ortak Ülke"
            : isAr
            ? "دولة شريكة"
            : "Partnerländer",
          icon: <Globe2 className="w-5 h-5 text-[#ECCF96]" />,
        },
        {
          value: "60+",
          label: isUz
            ? "Dunyo bo'ylab loyihalar"
            : isRu
            ? "Проектов по всему миру"
            : isEn
            ? "Projects Worldwide"
            : isTr
            ? "Dünya Çapında Proje"
            : isAr
            ? "مشروعاً حول العالم"
            : "Projekte weltweit",
          icon: <FolderKanban className="w-5 h-5 text-[#ECCF96]" />,
        },
        {
          value: "1.000+",
          label: isUz
            ? "O'qitilgan mutaxassislar"
            : isRu
            ? "Обученных специалистов"
            : isEn
            ? "Professionals Trained"
            : isTr
            ? "Eğitilen Uzman"
            : isAr
            ? "كادراً تم تدريبهم"
            : "Fachkräfte geschult",
          icon: <Users2 className="w-5 h-5 text-[#ECCF96]" />,
        },
        {
          value: "300.000+",
          label: isUz
            ? "Qamrab olingan insonlar"
            : isRu
            ? "Охваченных людей"
            : isEn
            ? "People Reached"
            : isTr
            ? "Ulaşılan İnsan"
            : isAr
            ? "مستفيد تم الوصول إليهم"
            : "Menschen erreicht",
          icon: <Heart className="w-5 h-5 text-[#ECCF96]" />,
        },
      ],
    },

    // Section 6: Testimonials
    s6: {
      eyebrow: isUz
        ? "MULOHAZALAR"
        : isRu
        ? "ОТЗЫВЫ"
        : isEn
        ? "EXPERIENCES"
        : isTr
        ? "DENEYİMLER"
        : isAr
        ? "تجارب وشهادات"
        : "ERFAHRUNGEN",
      title: isUz
        ? "Hamkorligimiz ovozlari"
        : isRu
        ? "Голоса нашего сотрудничества"
        : isEn
        ? "Voices of Collaboration"
        : isTr
        ? "İşbirliğimizden Görüşler"
        : isAr
        ? "أصداء الشراكة والتعاون"
        : "Stimmen aus der Zusammenarbeit",
      subtitle: isUz
        ? "Hamkorlarimiz va loyiha ishtirokchilari NABIOTA bilan hamkorlik haqida nima deyishadi."
        : isRu
        ? "Что говорят наши партнеры и участники проектов о сотрудничестве с NABIOTA."
        : isEn
        ? "What our partners and project participants say about collaborating with NABIOTA."
        : isTr
        ? "Ortaklarımızın ve proje paydaşlarımızın NABIOTA ile ortaklık hakkındaki görüşleri."
        : isAr
        ? "ما يقوله شركاؤنا والمشاركون في مشاريعنا عن التعاون الوثيق مع NABIOTA."
        : "Was unsere Partner und Projektbeteiligten über die Zusammenarbeit mit NABIOTA sagen.",
      linkAll: isUz
        ? "Barcha fikrlar"
        : isRu
        ? "Все отзывы"
        : isEn
        ? "More Testimonials"
        : isTr
        ? "Daha Fazla Deneyim Raporu"
        : isAr
        ? "المزيد من شهادات الشركاء"
        : "Weitere Erfahrungsberichte",
      items: [
        {
          quote: isUz
            ? "„NABIOTA bilan hamkorlik biz uchun yangi ufqlar ochdi va mahalliy sog'liqni saqlash infratuzilmamizni mustahkam mustahkamladi.“"
            : isRu
            ? "„Сотрудничество с NABIOTA открыло для нас новые горизонты и устойчиво укрепило наши локальные медицинские структуры.“"
            : isEn
            ? "“Collaborating with NABIOTA has opened new horizons for us and sustainably strengthened our local health infrastructure.”"
            : isTr
            ? "„NABIOTA ile kurduğumuz işbirliği önümüzde yeni ufuklar açtı ve yerel sağlık altyapımızı kalıcı şekilde güçlendirdi.“"
            : isAr
            ? "«فتح التعاون مع NABIOTA آفاقاً جديدة أمامنا وعزز بنيتنا التحتية الصحية المحلية بشكل مستدام.»"
            : "„Die Zusammenarbeit mit NABIOTA hat uns neue Perspektiven eröffnet und unsere lokalen Strukturen nachhaltig gestärkt.“",
          avatar: "/images/international/avatar-amina.webp",
          name: "Dr. Amina Yusuf",
          role: isUz
            ? "Tibbiyot markazi direktori"
            : isRu
            ? "Руководитель медцентра"
            : isEn
            ? "Health Center Director"
            : isTr
            ? "Sağlık Merkezi Yöneticisi"
            : isAr
            ? "مديرة المركز الصحي"
            : "Leiterin Gesundheitszentrum",
          location: isUz ? "Keniya" : isRu ? "Кения" : isEn ? "Kenya" : isTr ? "Kenya" : isAr ? "كينيا" : "Kenia",
        },
        {
          quote: isUz
            ? "„Professional yo'l-yo'riq va madaniyatlararo tajriba almashinuvi butun klinik jamoamiz uchun ulkan boylik bo'ldi.“"
            : isRu
            ? "„Профессиональная поддержка и межкультурный обмен стали огромным обогащением для всей нашей команды.“"
            : isEn
            ? "“The professional guidance and intercultural exchange were of immense value to our entire clinical team.”"
            : isTr
            ? "„Uzman rehberlik ve kültürlerarası bilgi alışverişi tüm klinik ekibimiz için muazzam bir kazanım oldu.“"
            : isAr
            ? "«كان الدعم التخصصي والتبادل الثقافي والمعرفي إثراءً كبيراً لفريقنا السريري بأكمله.»"
            : "„Die fachliche Unterstützung und der interkulturelle Austausch waren für unser Team eine große Bereicherung.“",
          avatar: "/images/international/avatar-keller.webp",
          name: "Prof. Dr. Martin Keller",
          role: isUz
            ? "Loyiha bo'yicha hamkor, Universitet"
            : isRu
            ? "Партнер проекта, Университет"
            : isEn
            ? "University Project Partner"
            : isTr
            ? "Üniversite Proje Ortağı"
            : isAr
            ? "الشريك الأكاديمي والجامعي للمشروع"
            : "Projektpartner Universität",
          location: isUz ? "Germaniya" : isRu ? "Германия" : isEn ? "Germany" : isTr ? "Almanya" : isAr ? "ألمانيا" : "Deutschland",
        },
        {
          quote: isUz
            ? "„Ushbu hamkorlik tufayli biz mintaqamizdagi tibbiy xizmat ko'rsatish sifatini sezilarli darajada oshirishga va minglab insonlarga zarur yordamni o'z vaqtida yetkazishga erishdik.“"
            : isRu
            ? "„Благодаря сотрудничеству мы смогли существенно улучшить медицинское обслуживание в нашем регионе и помочь многим людям.“"
            : isEn
            ? "“Thanks to this partnership, we were able to significantly improve regional care and support thousands of families.”"
            : isTr
            ? "„Bu ortaklık sayesinde bölgemizdeki sağlık hizmetlerini belirgin şekilde iyileştirmeyi ve binlerce insana destek olmayı başardık.“"
            : isAr
            ? "«بفضل هذا التعاون، تمكنا من الارتقاء بجودة الرعاية في منطقتنا ومساعدة آلاف العائلات بشكل ملموس.»"
            : "„Dank der Kooperation konnten wir die Versorgung in unserer Region deutlich verbessern und vielen Menschen helfen.“",
          avatar: "/images/international/avatar-santos.webp",
          name: "Maria Santos",
          role: isUz
            ? "Loyiha koordinatori"
            : isRu
            ? "Координатор проекта"
            : isEn
            ? "Project Coordinator"
            : isTr
            ? "Proje Koordinatörü"
            : isAr
            ? "منسقة المشروع"
            : "Projektkoordinatorin",
          location: isUz ? "Peru" : isRu ? "Перу" : isEn ? "Peru" : isTr ? "Peru" : isAr ? "بيرو" : "Peru",
        },
      ],
    },

    // Section 7: Bottom CTA Banner & Contact Strip
    s7: {
      eyebrow: isUz
        ? "XALQARO MISSIYAMIZNING BIR QISMIGA AYLANING"
        : isRu
        ? "СТАНЬТЕ ЧАСТЬЮ НАШЕЙ МЕЖДУНАРОДНОЙ МИССИИ"
        : isEn
        ? "BECOME PART OF OUR INTERNATIONAL MISSION"
        : isTr
        ? "ULUSLARARASI MİSYONUMUZUN PARÇASI OLUN"
        : isAr
        ? "كن جزءاً من رسالتنا الدولية"
        : "WERDEN SIE TEIL UNSERER INTERNATIONALEN MISSION",
      title: isUz
        ? "Global salomatlik yo'lida birgalikda."
        : isRu
        ? "Вместе ради глобального здоровья."
        : isEn
        ? "Together for Global Health."
        : isTr
        ? "Küresel Sağlık İçin Birlikte."
        : isAr
        ? "معاً من أجل الصحة العالمية."
        : "Gemeinsam für globale Gesundheit.",
      desc: isUz
        ? "Hamkor, homiy yoki ko'ngilli sifatida bo'ladimi — biz sog'lom kelajakni birgalikda yaratish yo'lidagi har qanday hamkorlikni mamnuniyat bilan qutlaymiz."
        : isRu
        ? "В качестве партнера, спонсора или волонтера — мы рады любой форме сотрудничества ради здорового будущего."
        : isEn
        ? "Whether as an institutional partner, benefactor, or contributor — we welcome every collaboration to advance worldwide wellbeing."
        : isTr
        ? "İster kurumsal ortak, ister destekçi, isterse gönüllü olarak — sağlıklı bir geleceği inşa etmek için her türlü işbirliğini memnuniyetle karşılıyoruz."
        : isAr
        ? "سواء بصفتك شريكاً مؤسسياً، داعماً، أو مساهماً متطوعاً — نرحب بكل أشكال التعاون لبناء مستقبل صحي للجميع."
        : "Ob als Partner, Förderer oder ehrenamtlicher Unterstützer – wir freuen uns über jede Form der Zusammenarbeit.",
      btn: isUz
        ? "Biz bilan bog'lanish"
        : isRu
        ? "Связаться с нами"
        : isEn
        ? "Contact Our Team"
        : isTr
        ? "İletişime Geçin"
        : isAr
        ? "تواصل معنا"
        : "Kontakt aufnehmen",
      stampText1: isUz
        ? "Global hamkorliklar."
        : isRu
        ? "Глобальные партнерства."
        : isEn
        ? "Global Partnerships."
        : isTr
        ? "Küresel Ortaklıklar."
        : isAr
        ? "شراكات عالمية."
        : "Globale Partnerschaften.",
      stampText2: isUz
        ? "Mahalliy amaliy natija. ♡"
        : isRu
        ? "Локальное действие. ♡"
        : isEn
        ? "Local Impact. ♡"
        : isTr
        ? "Yerel Etki. ♡"
        : isAr
        ? "أثر محلي ملموس. ♡"
        : "Lokale Wirkung. ♡",
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
                {
                  label: isUz
                    ? "Asosiy sahifa"
                    : isRu
                    ? "Главная"
                    : isEn
                    ? "Home"
                    : isTr
                    ? "Ana Sayfa"
                    : isAr
                    ? "الرئيسية"
                    : "Startseite",
                  href: `/${locale}`,
                },
                {
                  label: isUz
                    ? "Faoliyat yo'nalishlari"
                    : isRu
                    ? "Сферы деятельности"
                    : isEn
                    ? "Business Areas"
                    : isTr
                    ? "Şirket Alanları"
                    : isAr
                    ? "قطاعات المجموعة"
                    : "Unternehmensbereiche",
                  href: `/${locale}/areas`,
                },
                { label: heroData.title },
              ]}
            />
          }
          title={heroData.title}
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
                aria-label={
                  isUz
                    ? "Oynani yopish"
                    : isRu
                    ? "Закрыть окно"
                    : isEn
                    ? "Close modal"
                    : isTr
                    ? "Pencereyi kapat"
                    : isAr
                    ? "إغلاق النافذة"
                    : "Schließen"
                }
                className="absolute top-5 right-5 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-[#EFE8D8] hover:bg-[#E2D5BE] text-[#0E281C] flex items-center justify-center transition-colors shadow-2xs z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-3 mb-6 pr-12">


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
                  {isUz
                    ? "Oynani yopish"
                    : isRu
                    ? "Закрыть окно"
                    : isEn
                    ? "Close window"
                    : isTr
                    ? "Kapat"
                    : isAr
                    ? "إغلاق"
                    : "Schließen"}
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
