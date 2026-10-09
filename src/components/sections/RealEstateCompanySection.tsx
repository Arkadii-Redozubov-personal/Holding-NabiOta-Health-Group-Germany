"use client";
import React from "react";
import Image from "next/image";
import {
  Building2,
  HardHat,
  Search,
  Scale,
  FileCheck2,
  Layers,
  Users,
  Clock,
  Wrench,
  Flame,
  Receipt,
  Landmark,
  ShieldAlert,
  ShieldCheck,
  TrendingUp,
  Home,
  CheckCircle2,
  Hospital,
  Stethoscope,
  Activity,
  BedDouble,
  Heart,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/layout/Container";

const portfolioIcons = [
  Hospital,
  Building2,
  Stethoscope,
  Activity,
  Layers,
  Heart,
  BedDouble,
  Home,
];

/**
 * PDF Section IV.7 – "NabiOta Real Estate GmbH"
 * (Med. Immobilien)
 * Unternehmensgegenstand, 10 Kernaufgaben, Betreiberabstimmung,
 * langfristiger Werterhalt & rechtliche Abgrenzung (Keine Behandlungsaufgaben / § 34c GewO).
 */

type Lang = "de" | "en" | "ru" | "tr" | "ar" | "uz";
type T = Record<Lang, string>;
type Icon = React.ComponentType<{ className?: string }>;

const c = {
  tag: {
    de: "GmbH · Medizinische Spezialimmobilien · § 34c GewO",
    en: "GmbH · Healthcare Real Estate · § 34c GewO",
    ru: "GmbH · Медицинская недвижимость · Нормы § 34c GewO",
    tr: "GmbH · Özel Sağlık Gayrimenkulleri · § 34c GewO",
    ar: "شركة ذات مسؤولية محدودة · العقارات الطبية المتخصصة · § 34c GewO",
    uz: "GmbH · Maxsus tibbiy ko'chmas mulk · § 34c GewO",
  } as T,
  title: "NabiOta Real Estate GmbH",
  subtitle: {
    de: "Medizinische Spezialimmobilien & Infrastrukturentwicklung",
    en: "Specialized Healthcare Real Estate & Development",
    ru: "Специализированная медицинская недвижимость и девелопмент",
    tr: "Özel Tıbbi Gayrimenkuller ve Altyapı Geliştirme",
    ar: "العقارات الطبية المتخصصة وتطوير البنية التحتية",
    uz: "Maxsus tibbiy ko'chmas mulk va infratuzilmani rivojlantirish",
  } as T,
  lead: {
    de: "Gegenstand des Unternehmens ist der Erwerb, das Halten, die Verwaltung, Entwicklung, Vermietung, Verpachtung und Veräußerung eigener Grundstücke, Gebäude und grundstücksgleicher Rechte, insbesondere von Immobilien für Einrichtungen des Gesundheitswesens. Ergänzend können Verwaltungs-, Lager- und Wohnflächen, insbesondere für Mitarbeiter, erworben, entwickelt und vermietet werden.",
    en: "The company's purpose is the acquisition, holding, management, development, leasing, renting, and disposition of own land, buildings, and property rights, specifically properties dedicated to healthcare facilities. In addition, administrative, storage, and residential spaces, in particular for employees, may be acquired, developed, and leased.",
    ru: "Предметом деятельности компании является приобретение, владение, управление, развитие, сдача в аренду, лизинг и продажа собственных земельных участков, зданий и вещных прав, в особенности недвижимости для учреждений здравоохранения. Дополнительно могут приобретаться, развиваться и сдаваться в аренду административные, складские и жилые помещения для сотрудников.",
    tr: "Şirketin faaliyet konusu; sağlık tesislerine tahsis edilmiş gayrimenkuller başta olmak üzere mülkiyeti kendisine ait arsa, bina ve ayni hakların iktisabı, elde tutulması, yönetimi, geliştirilmesi, kiralanması, işletmeye verilmesi ve satışıdır. Buna ek olarak çalışanlar başta olmak üzere idari, lojistik ve konut amaçlı alanlar da iktisap edilebilir, geliştirilebilir ve kiralanabilir.",
    ar: "يتمثل الغرض من الشركة في تملك وحيازة وإدارة وتطوير وتأجير والتصرف في الأراضي والمباني والحقوق العقارية الخاصة بها، لا سيما العقارات المخصصة لمؤسسات الرعاية الصحية. وبالإضافة إلى ذلك، يجوز تملك وتطوير وتأجير المساحات الإدارية ومستودعات التخزين والوحدات السكنية المخصصة للموظفين.",
    uz: "Kompaniya faoliyatining predmeti sog'liqni saqlash muassasalari uchun mo'ljallangan ko'chmas mulk obyektlari, o'z yer uchastkalari, binolari va ashyoviy huquqlarini sotib olish, egalik qilish, boshqarish, rivojlantirish, ijaraga berish, lizing va sotishdan iborat. Shuningdek, xodimlar uchun ma'muriy, omborxona va turar-joy maydonlari sotib olinishi, rivojlantirilishi va ijaraga berilishi mumkin.",
  } as T,

  portfolioTitle: {
    de: "Immobilienportfolio im Gesundheitswesen",
    en: "Healthcare Property Asset Classes",
    ru: "Портфель объектов здравоохранения",
    tr: "Sağlık Alanında Gayrimenkul Portföyü",
    ar: "محفظة الأصول العقارية في قطاع الرعاية الصحية",
    uz: "Sog'liqni saqlash sohasidagi ko'chmas mulk portfeli",
  } as T,
  portfolioItems: [
    {
      de: "Klinikgebäude & Fachkrankenhäuser",
      en: "Clinic Buildings & Hospitals",
      ru: "Клинические корпуса и профильные больницы",
      tr: "Klinik Binaları ve İhtisas Hastaneleri",
      ar: "مباني العيادات والمستشفيات التخصصية",
      uz: "Klinika binolari va ixtisoslashtirilgan kasalxonalar",
    },
    {
      de: "Medizinische Versorgungszentren (MVZ)",
      en: "Medical Care Centers (MVZ)",
      ru: "Медицинские центры (MVZ)",
      tr: "Tıp Merkezleri (MVZ)",
      ar: "مراكز الرعاية الطبية (MVZ)",
      uz: "Tibbiy yordam markazlari (MVZ)",
    },
    {
      de: "Facharzt- & Hausarztpraxen",
      en: "Specialist & Physician Practices",
      ru: "Кабинеты и частные врачебные практики",
      tr: "Uzman ve Aile Hekimi Muayenehaneleri",
      ar: "عيادات الأطباء الأخصائيين والعموميين",
      uz: "Tor mutaxassis va oilaviy shifokor amaliyotlari",
    },
    {
      de: "Ambulante Operationszentren (OP)",
      en: "Outpatient Surgical Centers",
      ru: "Амбулаторные операционные комплексы",
      tr: "Günübirlik Cerrahi ve Ameliyathane Merkezleri",
      ar: "مراكز الجراحة المتنقلة وعيادات العمليات",
      uz: "Ambulator jarrohlik va operatsiya markazlari",
    },
    {
      de: "Diagnostik- & Radiologiezentren",
      en: "Diagnostic & Radiology Suites",
      ru: "Диагностические и радиологические центры",
      tr: "Tanı ve Radyoloji Merkezleri",
      ar: "مراكز التشخيص والأشعة التخصصية",
      uz: "Diagnostika va radiologiya markazlari",
    },
    {
      de: "Therapie- & Rehabilitationseinrichtungen",
      en: "Therapy & Rehabilitation Facilities",
      ru: "Терапевтические и реабилитационные центры",
      tr: "Terapi ve Rehabilitasyon Tesisleri",
      ar: "مرافق العلاج وإعادة التأهيل",
      uz: "Terapiya va reabilitatsiya muassasalari",
    },
    {
      de: "Stationäre & ambulante Pflegeeinrichtungen",
      en: "Inpatient & Outpatient Nursing Homes",
      ru: "Стационарные и дневные учреждения ухода",
      tr: "Yatılı ve Ayakta Bakım Merkezleri",
      ar: "مرافق التمريض والإقامة النهارية والسريرية",
      uz: "Statsionar va kunduzgi parvarishlash muassasalari",
    },
    {
      de: "Mitarbeiterwohnen, Verwaltung & Logistik",
      en: "Staff Housing, Administration & Storage",
      ru: "Жильё для сотрудников, офисы и склады",
      tr: "Personel Konutları, Yönetim ve Lojistik Alanları",
      ar: "سكن الموظفين والإدارة والمستودعات اللوجستية",
      uz: "Xodimlar turar joylari, ma'muriy va logistika maydonlari",
    },
  ] as T[],

  tasksTitle: {
    de: "Die 10 Kernaufgaben der Gesellschaft",
    en: "The 10 Core Tasks of the Company",
    ru: "10 ключевых задач компании",
    tr: "Şirketin 10 Temel Görevi",
    ar: "المهام الأساسية العشر للشركة",
    uz: "Kompaniyaning 10 ta asosiy vazifasi",
  } as T,
  tasks: [
    {
      num: "01",
      icon: Search as Icon,
      title: {
        de: "Standortsuche & Bewertung",
        en: "Site Search & Valuation",
        ru: "Поиск и оценка локаций",
        tr: "Konum Araştırması ve Değerleme",
        ar: "البحث عن المواقع والتقييم الاستراتيجي",
        uz: "Joylashuvni qidirish va baholash",
      } as T,
      desc: {
        de: "Suche und Bewertung geeigneter Standorte unter Berücksichtigung von Erreichbarkeit, Flächenbedarf, Erweiterungsmöglichkeiten und wirtschaftlicher Tragfähigkeit.",
        en: "Strategic site identification and assessment evaluating accessibility, spatial expansion potential, demographic demand, and long-term economic viability.",
        ru: "Поиск и оценка локаций с учётом транспортной доступности, потребности в площадях, потенциала расширения и экономической окупаемости.",
        tr: "Erişilebilirlik, alan ihtiyacı, genişleme kapasitesi ve ekonomik sürdürülebilirlik gözetilerek en uygun sağlık lokasyonlarının araştırılması ve değerlemesi.",
        ar: "البحث عن مواقع استراتيجية ملائمة وتقييمها مع مراعاة سهولة الوصول، والاحتياجات المساحية، وفرص التوسع المستقبلية، والجدوى الاقتصادية طويلة الأجل.",
        uz: "Qulay transport qatnovi, maydon ehtiyoji, kengayish imkoniyatlari va iqtisodiy samaradorlikni hisobga olgan holda tibbiy obyektlar uchun eng ma'qul joylarni qidirish va baholash.",
      } as T,
    },
    {
      num: "02",
      icon: Scale as Icon,
      title: {
        de: "Rechtliche & Technische Due Diligence",
        en: "Legal & Technical Due Diligence",
        ru: "Правовая и техническая экспертиза",
        tr: "Hukuki ve Teknik İnceleme (Due Diligence)",
        ar: "الفحص القانوني والفني النافي للجهالة",
        uz: "Huquqiy va texnik ekspertiza (Due Diligence)",
      } as T,
      desc: {
        de: "Organisation der rechtlichen, technischen und wirtschaftlichen Prüfung vor einem Immobilienerwerb unter Einbindung qualifizierter Fachberater.",
        en: "Structuring comprehensive legal, technical, structural, and financial audits prior to property acquisition, engaging accredited experts.",
        ru: "Организация юридического, строительно-технического и финансового аудита перед покупкой объектов с привлечением сертифицированных экспертов.",
        tr: "Gayrimenkul alımı öncesinde bağımsız uzman danışmanlar eşliğinde hukuki, teknik, yapısal ve mali denetim süreçlerinin yürütülmesi.",
        ar: "تنظيم وإجراء الفحص القانوني والفني والإنشائي والمالي الشامل قبل تملك العقارات بمشاركة خبراء واستشاريين معتمدين.",
        uz: "Ko'chmas mulkni sotib olishdan oldin malakali mustaqil ekspertlarni jalb etgan holda yuridik, texnik, qurilish va moliyaviy auditni tashkil etish.",
      } as T,
    },
    {
      num: "03",
      icon: Layers as Icon,
      title: {
        de: "Raum- & Nutzungskonzepte",
        en: "Clinical Space Planning",
        ru: "Планировочные концепции",
        tr: "Klinik Mekân ve Kullanım Planlaması",
        ar: "تخطيط المساحات والمفاهيم السريرية",
        uz: "Xonalar va ulardan foydalanish konsepsiyalari",
      } as T,
      desc: {
        de: "Entwicklung von Raum- und Nutzungskonzepten in enger Abstimmung mit den vorgesehenen medizinischen und therapeutischen Betreibern.",
        en: "Developing functional layout and clinical utilization concepts strictly synchronized with designated medical and therapy operators.",
        ru: "Разработка функциональных планировок и концепций использования помещений в тесном согласовании с оперирующими врачами и клиниками.",
        tr: "Hizmet verecek tıbbi ve terapötik işletmeciler ile birebir koordinasyon içinde işlevsel mekân, yerleşim ve kullanım planlarının hazırlanması.",
        ar: "تطوير مفاهيم التوزيع المكاني والاستخدام الوظيفي بالتنسيق الوثيق والمباشر مع المشغلين الطبيين والعلاجيين المعتمدين.",
        uz: "Rejalashtirilgan tibbiy va terapevtik operatorlar bilan yaqin muvofiqlashtirilgan holda funksional loyihalar va foydalanish konsepsiyalarini ishlab chiqish.",
      } as T,
    },
    {
      num: "04",
      icon: Building2 as Icon,
      title: {
        de: "Neubau, Umbau & Sanierung",
        en: "New Construction & Modernization",
        ru: "Строительство, реконструкция и санация",
        tr: "Yeni Yapım, Yenileme ve Dönüşüm",
        ar: "البناء الجديد والتحديث والترميم",
        uz: "Yangi qurilish, rekonstruksiya va modernizatsiya",
      } as T,
      desc: {
        de: "Vorbereitung und Koordination von Neubauten, Umbauten, Sanierungen, Modernisierungen und Nutzungsänderungen eigener Immobilien.",
        en: "Orchestrating new turnkey builds, spatial remodeling, structural rehabilitations, and official zoning/usage conversions for group assets.",
        ru: "Подготовка и координация нового строительства, перепланировок, санации, модернизации и перевода помещений в статус медицинских объектов.",
        tr: "Holding bünyesindeki mülklerin anahtar teslim yeni inşası, tadilatı, modernizasyonu ve tıbbi kullanım amaçlı imar/tahsis dönüşümlerinin yönetimi.",
        ar: "إعداد وتنسيق مشاريع البناء الجديد، وإعادة التهيئة، والتحديث الشامل، وتعديل استخدام المباني لتتوافق مع المعايير الطبية المعتمدة.",
        uz: "O'z ko'chmas mulk obyektlarini noldan qurish, qayta rejalashtirish, ta'mirlash, modernizatsiya qilish va tibbiy maqsadlarda foydalanishga moslashtirishni muvofiqlashtirish.",
      } as T,
    },
    {
      num: "05",
      icon: HardHat as Icon,
      title: {
        de: "Planer- & Bausteuerung",
        en: "Architect & Contractor Management",
        ru: "Управление проектировщиками и генподрядчиками",
        tr: "Mimar ve Yüklenici Süreç Yönetimi",
        ar: "إدارة المصممين والمقاولين الإنشائيين",
        uz: "Loyihachilar va pudratchilarni boshqarish",
      } as T,
      desc: {
        de: "Beauftragung und Koordination von Architekten, Fachplanern, Bauunternehmen und weiteren qualifizierten Dienstleistern.",
        en: "Commissioning and supervising healthcare architects, MEP engineers, general contractors, and specialized clinical construction trades.",
        ru: "Тендерный отбор и управление профильными архитекторами, инженерами спецсетей, генподрядчиками и строительными компаниями.",
        tr: "Sağlık mimarları, uzman mühendisler, ana yükleniciler ve uzman medikal inşaat firmalarının ihale, görevlendirme ve saha denetimi.",
        ar: "التعاقد مع مهندسي العمارة الطبية المتخصصة، والمخططين المعتمدين، وشركات المقاولات العامة والإشراف المباشر على تنفيذ أعمالهم.",
        uz: "Tibbiy me'morlar, maxsus muhandislar, bosh pudratchilar va ixtisoslashgan qurilish xizmatlarini jalb qilish hamda ularning ishini nazorat qilish.",
      } as T,
    },
    {
      num: "06",
      icon: Clock as Icon,
      title: {
        de: "Budget-, Bauzeit- & Terminkontrolle",
        en: "Budget & Milestone Monitoring",
        ru: "Контроль бюджетов, сроков и графиков",
        tr: "Bütçe, Süre ve Takvim Kontrolü",
        ar: "مراقبة الميزانيات والجداول الزمنية",
        uz: "Byudjet, muddat va bosqichlar nazorati",
      } as T,
      desc: {
        de: "Planung und Überwachung von Investitionsbudgets, Bauzeiten, Meilensteinen und kontinuierlichen Projektfortschritten.",
        en: "Precise allocation, oversight, and auditing of capital expenditure (CapEx) budgets, construction schedules, and milestone delivery.",
        ru: "Планирование и строгий мониторинг инвестиционных бюджетов, сроков выполнения работ и проектных контрольных точек.",
        tr: "Yatırım bütçelerinin, inşaat sürelerinin, kritik kilometre taşlarının ve proje ilerleme aşamalarının hassas planlanması ve sürekli denetimi.",
        ar: "تخطيط ومراقبة ميزانيات الاستثمار الرأسمالي، وجداول البناء، والمراحل المفصلية لضمان التقدم المستمر وفق الخطة المعتمدة.",
        uz: "Investitsiya byudjetlari, qurilish muddatlari, loyiha bosqichlari va taraqqiyot jarayonlarini aniq rejalashtirish va doimiy monitoring qilish.",
      } as T,
    },
    {
      num: "07",
      icon: Wrench as Icon,
      title: {
        de: "Technisches Facility Management",
        en: "Technical Facility Management",
        ru: "Техническая эксплуатация зданий",
        tr: "Teknik Tesis ve Bina Yönetimi",
        ar: "إدارة المرافق والتشغيل الفني",
        uz: "Texnik binolarni boshqarish (Facility Management)",
      } as T,
      desc: {
        de: "Organisation der Instandhaltung, Wartung, Gebäudesicherheit und kontinuierlichen technischen Gebäudeverwaltung.",
        en: "Operational governance of preventive maintenance, building service engineering, medical gas supply, and 24/7 technical facility safety.",
        ru: "Организация регулярного техобслуживания, ремонта, инженерных сетей и комплексного управления зданиями.",
        tr: "Koruyucu bakım, onarım, bina güvenliği, medikal gaz ve bina teknolojilerinin 7/24 kesintisiz teknik yönetimi ve işletimi.",
        ar: "تنظيم أعمال الصيانة الدورية، والإصلاح، والسلامة الإنشائية، وإدارة النظم الهندسية والغازات الطبية في المنشآت على مدار الساعة.",
        uz: "Profilaktik xizmat ko'rsatish, ta'mirlash, bino xavfsizligi, tibbiy gazlar va texnik infratuzilmani 24/7 uzluksiz boshqarishni tashkil qilish.",
      } as T,
    },
    {
      num: "08",
      icon: Flame as Icon,
      title: {
        de: "Barrierefreiheit, Brandschutz & Energie",
        en: "Accessibility, Fire Safety & ESG",
        ru: "Безбарьерность, пожарная безопасность и ESG",
        tr: "Erişilebilirlik, Yangın Güvenliği ve Enerji",
        ar: "سهولة الوصول، السلامة من الحرائق ومعايير ESG",
        uz: "To'siqsiz muhit, yong'in xavfsizligi va energiya tejamkorligi",
      } as T,
      desc: {
        de: "Koordination von Maßnahmen zur Barrierefreiheit (DIN 18040), zum baulichen Brandschutz, zur Energieeffizienz und zur Spezialtechnik.",
        en: "Implementing DIN 18040 accessibility standards, specialized healthcare fire compartments, clean energy concepts, and HVAC ventilation.",
        ru: "Реализация норм безбарьерной среды (DIN 18040), противопожарной защиты клиник, энергоэффективности и вентиляционных систем.",
        tr: "DIN 18040 engelsiz erişim standartları, sağlık binalarına özel yangın kompartımanları, enerji verimliliği ve iklimlendirme sistemlerinin uygulanması.",
        ar: "تطبيق معايير DIN 18040 للوصول الشامل، واشتراطات الوقاية من الحرائق في المنشآت الطبية، وحلول كفاءة الطاقة والتهوية المتقدمة.",
        uz: "DIN 18040 to'siqsiz muhit standartlari, tibbiy binolarning maxsus yong'in xavfsizligi, energiya samaradorligi va shamollatish tizimlarini joriy etish.",
      } as T,
    },
    {
      num: "09",
      icon: Receipt as Icon,
      title: {
        de: "Miet- & Betriebskostenmanagement",
        en: "Lease & Operating Cost Governance",
        ru: "Управление арендой и коммунальными расходами",
        tr: "Kira ve İşletme Giderleri Yönetimi",
        ar: "إدارة عقود الإيجار والتكاليف التشغيلية",
        uz: "Ijara va ekspluatatsiya xarajatlarini boshqarish",
      } as T,
      desc: {
        de: "Abschluss und Verwaltung von Miet-, Pacht- und Nutzungsverträgen sowie Organisation transparenter Betriebskostenabrechnungen.",
        en: "Drafting and administering commercial healthcare leases, occupancy agreements, and auditable operating/utility cost accounting.",
        ru: "Заключение и администрирование договоров аренды, лизинга помещений и ведение прозрачных расчётов эксплуатационных расходов.",
        tr: "Kira, intifa ve tahsis sözleşmelerinin akdedilmesi ve idaresi ile şeffaf işletme ve genel gider faturalandırma organizasyonu.",
        ar: "إبرام وإدارة عقود الإيجار والانتفاع التجاري الطبي وتنظيم الحسابات الشفافة والموثقة لتكاليف التشغيل والمرافق.",
        uz: "Tibbiy tijoriy ijara va foydalanish shartnomalarini tuzish, boshqarish hamda ekspluatatsiya xarajatlarining shaffof hisob-kitoblarini yuritish.",
      } as T,
    },
    {
      num: "10",
      icon: Landmark as Icon,
      title: {
        de: "Finanzierung & Fördermittel",
        en: "Capital Financing & Public Subsidies",
        ru: "Финансирование и государственные субсидии",
        tr: "Finansman ve Kamu Teşvikleri",
        ar: "تمويل الأصول والمنح الحكومية",
        uz: "Moliyalashtirish va davlat subsidiyalari",
      } as T,
      desc: {
        de: "Vorbereitung der Finanzierung eigener Immobilienvorhaben und Prüfung geeigneter Förderprogramme (KfW, Landesbanken).",
        en: "Structuring capital financing models and securing public development grants and low-interest green loans (KfW, state development banks).",
        ru: "Структурирование проектного финансирования и привлечение государственных программ субсидирования (KfW, земельные банки развития).",
        tr: "Gayrimenkul projelerinin sermaye finansmanının yapılandırılması ve kamu kalkınma fonları ile yeşil kredi teşviklerinin (KfW vb.) incelenmesi.",
        ar: "هيكلة النماذج التمويلية الرأسمالية للمشاريع الخاصة والاستفادة القصوى من برامج الدعم والمنح والقروض الميسرة (KfW والبنوك التنموية).",
        uz: "O'z ko'chmas mulk loyihalarini kapitallashtirishni tayyorlash hamda davlat rivojlantirish dasturlari va imtiyozli kreditlarni (KfW, federal banklar) jalb etish.",
      } as T,
    },
  ],

  agreementsTitle: {
    de: "Miet- und Investitionsvereinbarungen mit Betreibern",
    en: "Lease & Investment Governance with Clinical Operators",
    ru: "Договорные соглашения об аренде и инвестициях с операторами",
    tr: "İşletmecilerle Kira ve Yatırım Anlaşmaları",
    ar: "اتفاقيات الإيجار والاستثمار مع المشغلين الطبيين",
    uz: "Operatorlar bilan ijara va investitsiya shartnomalari",
  } as T,
  agreementsText: {
    de: "Miet- und Investitionsvereinbarungen werden individuell mit den jeweiligen medizinischen Betreibern abgestimmt. Dabei werden Nutzungszweck, Flächenumfang, Ausstattungsstandard, Investitionsbeiträge, Instandhaltungspflichten, technische Verantwortlichkeiten und Vertragslaufzeiten eindeutig und transparent geregelt.",
    en: "Lease and capital expenditure agreements are negotiated on a custom basis with clinical operators. Purpose of use, floor space, equipment standards, CapEx contributions, maintenance duties, technical liabilities, and lease terms are explicitly and unambiguously formalized.",
    ru: "Договоры аренды и инвестиционные соглашения детально согласуются с медицинскими операторами. Целевое назначение, площади, стандарты отделки, доли инвестиций, обязанности по ТО, техническая ответственность и сроки договоров фиксируются прозрачно и однозначно.",
    tr: "Kira ve sermaye yatırımı anlaşmaları ilgili tıbbi işletmecilerle özel olarak kararlaştırılır. Kullanım amacı, alan büyüklüğü, donanım standartları, yatırım katkıları, bakım yükümlülükleri, teknik sorumluluklar ve sözleşme süreleri açık, şeffaf ve bağlayıcı biçimde düzenlenir.",
    ar: "يتم التفاوض على اتفاقيات الإيجار والمساهمات الاستثمارية بصورة فردية ومخصصة مع المشغلين الطبيين المعنيين. ويتم تحديد الغرض من الاستخدام، والمساحات، ومعايير التجهيز، وحصص الاستثمار، والتزامات الصيانة، والمسؤوليات الفنية، ومدد العقود بكل شفافية ودقة.",
    uz: "Ijara va investitsiya shartnomalari tegishli tibbiy operatorlar bilan individual ravishda kelishiladi. Bunda foydalanish maqsadi, maydon hajmi, jihozlanish standartlari, investitsiya ulushlari, texnik xizmat ko'rsatish majburiyatlari, texnik javobgarlik va shartnoma muddatlari aniq va shaffof belgilanadi.",
  } as T,

  goalTitle: {
    de: "Ziel der Gesellschaft: Nachhaltiger Werterhalt",
    en: "Corporate Mandate: Sustainable Value Preservation",
    ru: "Цель компании: долгосрочное сохранение стоимости",
    tr: "Şirketin Amacı: Sürdürülebilir Değer Korunması",
    ar: "هدف الشركة: الاستدامة والحفاظ طويل الأجل على قيمة الأصول",
    uz: "Kompaniyaning maqsadi: Barqaror qiymatni saqlash",
  } as T,
  goalText: {
    de: "Ziel der Gesellschaft ist die langfristige Bereitstellung geeigneter und wirtschaftlich tragfähiger Immobilien für die NabiOta-Unternehmensgruppe und weitere Mieter. Sie unterstützt den Aufbau zusätzlicher Standorte, die bedarfsgerechte Erweiterung bestehender Einrichtungen und den nachhaltigen Werterhalt des Immobilienbestands.",
    en: "The company's mission is the sustainable provision of high-grade, economically resilient real estate assets for the NabiOta Group and external tenants, accelerating new hub development, tailored capacity expansion, and enduring value preservation.",
    ru: "Цель компании — долгосрочное обеспечение пригодной и экономически окупаемой недвижимости для группы NabiOta и сторонних арендаторов. Компания поддерживает запуск новых локаций, планомерное расширение действующих центров и сохранение капитализации активов.",
    tr: "Şirketin hedefi; NabiOta Şirketler Grubu ve harici kiracılar için uygun, nitelikli ve ekonomik açıdan sürdürülebilir gayrimenkullerin uzun vadeli teminidir. Yeni lokasyonların kurulmasını, mevcut merkezlerin genişletilmesini ve gayrimenkul portföyünün kalıcı değer artışını destekler.",
    ar: "يتمثل هدف الشركة في التوفير المستدام لعقارات عالية الجودة وذات جدوى اقتصادية متينة لمجموعة شركات NabiOta والمستأجرين الآخرين. تدعم الشركة إنشاء مواقع إضافية، والتوسع المدروس للمرافق الحالية، وصون القيمة الرأسمالية طويلة الأجل للأصول.",
    uz: "Kompaniyaning maqsadi NabiOta korxonalar guruhi va boshqa ijarachilar uchun yuqori sifatli va iqtisodiy jihatdan barqaror ko'chmas mulkni uzoq muddatli ta'minlashdir. U qo'shimcha filiallar ochishni, mavjud muassasalarni rejaviy kengaytirishni va ko'chmas mulk portfelining barqaror qiymatini saqlab qolishni qo'llab-quvvatlaydi.",
  } as T,

  governanceEyebrow: {
    de: "RECHTLICHE RAHMENBEDINGUNGEN & COMPLIANCE",
    en: "STATUTORY FRAMEWORK & COMPLIANCE",
    ru: "ПРАВОВЫЕ ОСНОВЫ И КОМПЛАЕНС",
    tr: "YASAL ÇERÇEVE VE UYUMLULUK (COMPLIANCE)",
    ar: "الأطر القانونية والامتثال التنظيمي",
    uz: "HUQUQIY ASOSLAR VA COMPLIANCE",
  } as T,
  governanceTitle: {
    de: "Rechtliche Abgrenzung & Gesetzliche Pflichten (§ 34c GewO)",
    en: "Regulatory Separation & Statutory Licensing (§ 34c GewO)",
    ru: "Правовое разграничение и требования к лицензированию (§ 34c GewO)",
    tr: "Yasal Ayrım ve Ruhsatlandırma Yükümlülükleri (§ 34c GewO)",
    ar: "الفصل التنظيمي والالتزامات القانونية للتراخيص (§ 34c GewO)",
    uz: "Huquqiy chegaralar va qonuniy litsenziyalash majburiyatlari (§ 34c GewO)",
  } as T,
  governanceItems: [
    {
      icon: ShieldAlert as Icon,
      title: {
        de: "Keine medizinischen Behandlungsaufgaben",
        en: "No Clinical Treatment Mandate",
        ru: "Компания не ведёт медицинскую деятельность",
        tr: "Tıbbi Tedavi Görevi Üstlenilmez",
        ar: "عدم تولي مهام العلاج الطبي المباشر",
        uz: "Tibbiy davolash faoliyati olib borilmaydi",
      } as T,
      desc: {
        de: "Die Immobiliengesellschaft übernimmt keine medizinischen Behandlungsaufgaben. Die Verantwortlichkeiten für Gebäude, technische Anlagen und den medizinischen Betrieb werden unter Beachtung zwingender gesetzlicher Pflichten vertraglich strikt voneinander abgegrenzt.",
        en: "The real estate company does not provide medical services. Liabilities for building structures, physical plant engineering, and healthcare operations are contractually decoupled under strict observance of statutory duties.",
        ru: "Девелоперская компания не осуществляет лечебных процедур. Ответственность за строительные конструкции, инженерные сети здания и непосредственную медицинскую практику операторов разграничена договорами.",
        tr: "Gayrimenkul şirketi tıbbi tedavi hizmeti sunmaz. Bina, teknik altyapı ve tıbbi işletme sorumlulukları emredici yasal kurallar gözetilerek sözleşmelerle kesin hatlarla ayrılmıştır.",
        ar: "لا تتولى شركة العقارات أية مهام علاجية أو طبية. يتم الفصل التعاقدي الصارم بين المسؤوليات المتعلقة بالمباني والمرافق الهندسية من جهة، والتشغيل الطبي للمنشآت من جهة أخرى وفق القوانين الإلزامية.",
        uz: "Ko'chmas mulk kompaniyasi hech qanday tibbiy davolash vazifalarini bajarmaydi. Binolar, muhandislik tarmoqlari va bevosita tibbiy amaliyot uchun javobgarlik shartnomalar orqali qat'iy ajratilgan.",
      } as T,
    },
    {
      icon: FileCheck2 as Icon,
      title: {
        de: "Behördliche Bau- & Betriebsgenehmigungen",
        en: "Statutory Building & Operating Permits",
        ru: "Официальные строительные и эксплуатационные допуски",
        tr: "Resmi İnşaat ve İşletme Ruhsatları",
        ar: "تصاريح البناء والتشغيل الرسمية",
        uz: "Qurilish va faoliyat yuritish bo'yicha rasmiy ruxsatnomalar",
      } as T,
      desc: {
        de: "Die erforderlichen bau-, nutzungs- und betriebsbezogenen Genehmigungen werden an jedem Standort vor Aufnahme der jeweiligen medizinischen Nutzung vollständig eingeholt.",
        en: "All mandated zoning, structural building codes, occupancy permissions, and clinical operational licenses are fully obtained before healthcare practice commences at any site.",
        ru: "Все необходимые разрешения на строительство, санитарно-гигиенические допуски и перевод помещений в статус медицинских получаются до начала приёма пациентов.",
        tr: "Gerekli imar, kullanım ve işletme ruhsatları her lokasyonda tıbbi faaliyete başlanmadan önce eksiksiz olarak temin edilir.",
        ar: "يتم استيفاء واستخراج كافة التراخيص والتصاريح المعمارية والتشغيلية والتنظيمية في كل موقع بشكل كامل قبل البدء الفعلي في الممارسة الطبية.",
        uz: "Har bir obyektdan tibbiy maqsadda foydalanish boshlanishidan oldin barcha zarur shaharsozlik, arxitektura, foydalanish va gigiyenik ruxsatnomalar to'liq olinadi.",
      } as T,
    },
    {
      icon: ShieldCheck as Icon,
      title: {
        de: "Erlaubnispflicht nach § 34c Gewerbeordnung (GewO)",
        en: "Licensing Requirements under § 34c GewO",
        ru: "Лицензирование по § 34c промыслового устава (GewO)",
        tr: "§ 34c GewO Kapsamında İzin Yükümlülüğü",
        ar: "التراخيص الإلزامية بموجب المادة § 34c من قانون التجارة (GewO)",
        uz: "Tadbirkorlik nizomining § 34c bandi bo'yicha litsenziya talabi (GewO)",
      } as T,
      desc: {
        de: "Erlaubnispflichtige Tätigkeiten, insbesondere Immobilienvermittlung, Bauträger- und Baubetreuertätigkeiten sowie Wohnimmobilienverwaltung für Dritte, werden ausschließlich nach Vorliegen der jeweils erforderlichen behördlichen Erlaubnis nach § 34c GewO ausgeübt.",
        en: "Regulated activities, specifically property brokerage, real estate development (Bauträger), construction supervision (Baubetreuer), and third-party residential property management, are carried out strictly following receipt of statutory permits under § 34c GewO.",
        ru: "Виды деятельности, требующие разрешения (риелторское посредничество, функции застройщика/девелопера и управление чужой жилой недвижимостью), осуществляются исключительно при наличии специальной лицензии по § 34c GewO.",
        tr: "İzne tabi faaliyetler, özellikle gayrimenkul aracılığı, müteahhitlik/geliştiricilik ve üçüncü şahıslara ait konut yönetimi, yalnızca § 34c GewO uyarınca resmi makam izinleri alındıktan sonra icra edilir.",
        ar: "الأنشطة الخاضعة للتراخيص القانونية، ولا سيما الوساطة العقارية وأعمال التطوير العقاري وإدارة العقارات السكنية للغير، تُمارس حصرياً بعد الحصول المسبق على التصريح الرسمي الإلزامي بموجب المادة § 34c GewO.",
        uz: "Ruxsatnoma talab qilinadigan faoliyat turlari (ko'chmas mulk vositachiligi, qurilish-tashkiliy faoliyat va uchinchi shaxslarning turar-joylarini boshqarish) faqat § 34c GewO bo'yicha rasmiy litsenziya olingandan keyingina amalga oshiriladi.",
      } as T,
    },
  ],
};

export function RealEstateCompanySection({ locale = "de" }: { locale?: string }) {
  const l: Lang = locale === "uz" ? "uz" : locale === "tr" ? "tr" : locale === "ar" ? "ar" : locale === "ru" ? "ru" : locale === "en" ? "en" : "de";

  return (
    <section
      id="nabiota-real-estate-gmbh-structure"
      className="relative pt-0 pb-0 bg-[#FAF7F2] border-t border-[#EDE8DE] overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-0 right-10 w-[500px] h-[500px] rounded-full bg-[#1E3B29]/[0.05] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] rounded-full bg-[#D5B878]/[0.08] blur-3xl pointer-events-none" />

      {/* ── Hero Banner: Full-width banner with soft right-photo fade & full-width asset class cards along bottom (Matching MVZ style) ── */}
      <div className="relative z-10 w-full overflow-hidden pb-4 sm:pb-6">
        {/* Soft Background Photo with smooth horizontal fade / blur effect */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[64%] xl:w-[60%] pointer-events-none overflow-hidden select-none">
          <Image
            src="/images/beratung/project-building.webp"
            alt="NabiOta Real Estate GmbH"
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
            <div className="max-w-xl lg:max-w-2xl mb-5 sm:mb-6 lg:mb-7">
              {/* Eyebrow with gold line matching unified holding sections */}
              <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
                <span className="w-6 h-[1.5px] bg-[#C5A56A]" />
                <span className="text-[10px] sm:text-[10.5px] font-semibold tracking-[0.22em] text-[#C5A56A] uppercase font-sans">
                  {c.subtitle[l]}
                </span>
              </div>

              {/* Title with styled italic phrase & distinct GmbH */}
              <h2 className="font-serif text-[24px] sm:text-[28px] lg:text-[34px] xl:text-[38px] text-[#142318] font-normal leading-[1.18] mb-3">
                NabiOta{" "}
                <span className="font-serif italic text-[#C5A56A]">Real Estate</span>{" "}
                <span className="text-[#C5A56A] font-sans font-semibold text-[0.72em] tracking-wider uppercase ml-1 align-baseline">
                  GmbH
                </span>
              </h2>

              <p className="text-[12.5px] sm:text-[13px] text-[#556057] leading-relaxed max-w-xl font-sans">
                {c.lead[l]}
              </p>
            </div>

            {/* Bottom: 8 Healthcare Property Asset Classes Cards spanning along the entire width */}
            <div className="w-full">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-[1.5px] bg-[#C5A56A]" />
                <h3 className="font-serif text-[15px] sm:text-[16px] text-[#142318] font-medium">
                  {c.portfolioTitle[l]}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5">
                {c.portfolioItems.map((item, idx) => {
                  const ItemIcon = portfolioIcons[idx % portfolioIcons.length] || Building2;
                  return (
                    <div
                      key={idx}
                      className="group relative rounded-xl bg-white/85 hover:bg-white border border-[#EAE4D7] hover:border-[#D5B878]/70 py-2.5 px-3 sm:px-3.5 flex items-center gap-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-sm transition-all duration-300 backdrop-blur-xs"
                    >
                      <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-[#FAF5EB] border border-[#EFE5D5] flex items-center justify-center shrink-0 group-hover:bg-[#F3EAD9] transition-colors">
                        <ItemIcon className="w-3.5 h-3.5 text-[#9E7D3B]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif text-[12px] sm:text-[12.5px] text-[#142318] font-medium leading-tight">
                          {item[l]}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container size="wide" className="relative z-10 mt-6 sm:mt-8">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">
          {/* 10 Core Tasks Grid (HomeCare style) */}
          <div>
            <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
              <span className="w-6 h-[1.5px] bg-[#C5A56A]" />
              <h3 className="font-serif text-[20px] sm:text-[23px] text-[#142318] font-normal">
                {c.tasksTitle[l]}
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
                {c.tasks.map((task) => {
                  const Icon = task.icon;
                  return (
                    <div
                      key={task.num}
                      className="group relative rounded-[18px] bg-white border border-[#EAE4D7] p-3.5 sm:p-4 flex items-center justify-between gap-3 sm:gap-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-[#D5B878]/60 transition-all duration-300"
                    >
                      {/* Left: Icon circle */}
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FAF5EB] border border-[#EFE5D5] flex items-center justify-center shrink-0 group-hover:bg-[#F3EAD9] transition-colors">
                        <Icon className="w-5 h-5 text-[#9E7D3B]" />
                      </div>

                      {/* Center: Title + Description */}
                      <div className="flex-1 min-w-0 pr-1">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[10px] font-bold tracking-wider text-[#C5A56A] font-mono">
                            {task.num}
                          </span>
                          <h4 className="font-serif text-[15px] sm:text-[16px] text-[#142318] font-medium leading-snug">
                            {task.title[l]}
                          </h4>
                        </div>
                        <p className="text-[11.5px] sm:text-[12px] text-[#556057] leading-relaxed font-sans">
                          {task.desc[l]}
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

          {/* 2 Callout Cards: Agreements & Long-term Value */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-7 bg-[#FAF5EB] border border-[#E7DDC9] flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#C5A56A]/20 border border-[#C5A56A] flex items-center justify-center text-[#8C6D2B] shrink-0 mt-0.5">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div className="space-y-1.5 flex-1">
                <h4 className="font-serif text-[16.5px] sm:text-[17.5px] text-[#142318] font-semibold">
                  {c.agreementsTitle[l]}
                </h4>
                <p className="text-[12px] sm:text-[12.5px] text-[#556358] leading-relaxed font-sans">
                  {c.agreementsText[l]}
                </p>
              </div>
            </div>

            <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-7 bg-[#FAF5EB] border border-[#E7DDC9] flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#C5A56A]/20 border border-[#C5A56A] flex items-center justify-center text-[#8C6D2B] shrink-0 mt-0.5">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="space-y-1.5 flex-1">
                <h4 className="font-serif text-[16.5px] sm:text-[17.5px] text-[#142318] font-semibold">
                  {c.goalTitle[l]}
                </h4>
                <p className="text-[12px] sm:text-[12.5px] text-[#556358] leading-relaxed font-sans">
                  {c.goalText[l]}
                </p>
              </div>
            </div>
          </div>

        </div>
      </Container>

      {/* FULL-WIDTH Regulatory Separation & Statutory Licensing (§ 34c GewO) - Our Values (What makes us distinct) Style */}
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
                {c.governanceEyebrow[l]}
              </span>
              <h3 className="font-serif text-[26px] sm:text-[30px] lg:text-[36px] font-normal leading-[1.2] text-white mb-2 sm:mb-2.5">
                {c.governanceTitle[l]}
              </h3>
            </div>

            {/* 3 Governance Cards in row matching Our Values cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              {c.governanceItems.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#0A1F13]/85 hover:bg-[#0D2618]/95 border border-[#D5B878]/30 hover:border-[#D5B878]/70 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 shadow-[0_6px_20px_rgba(0,0,0,0.3)] group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#D5B878] bg-[#122B1B]/80 flex items-center justify-center text-[#ECCF96] mb-2.5 shadow-[0_0_8px_rgba(213,184,120,0.2)] group-hover:scale-105 transition-transform">
                        <ItemIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.6]" />
                      </div>
                      <h4 className="font-serif font-bold text-[14.5px] sm:text-[15.5px] text-white mb-1.5 group-hover:text-[#ECCF96] transition-colors leading-snug">
                        {item.title[l]}
                      </h4>
                      <p className="text-[11px] sm:text-[11.5px] text-[#A6B8AA] leading-relaxed font-sans">
                        {item.desc[l]}
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
