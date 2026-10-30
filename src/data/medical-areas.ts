import {
  Stethoscope,
  Microscope,
  HeartPulse,
  Users,
  Network,
  Globe,
  IconComponent,
} from "@/lib/icons";
import { SupportedLocale } from "@/lib/i18n";
import { BusinessArea } from "@/types/content";

export interface MultilingualArea {
  id: string;
  slug: string;
  icon: IconComponent;
  iconName: string;
  image: string;
  titles: Record<SupportedLocale, string>;
  navTitles: Record<SupportedLocale, string>;
  subtitles: Record<SupportedLocale, string>;
  stripLabels: Record<SupportedLocale, string>;
  descriptions: Record<SupportedLocale, string>;
  highlights: Record<SupportedLocale, string[]>;
  stats: Record<SupportedLocale, { value: string; label: string }[]>;
}

export const MEDICAL_AREAS: MultilingualArea[] = [
  {
    id: "med-fachbereiche",
    slug: "medizinische-fachbereiche",
    icon: Stethoscope,
    iconName: "Stethoscope",
    image: "/images/areas/medical-departments.webp",
    titles: {
      de: "Medizinische Fachbereiche",
      en: "Medical Departments",
      ru: "Медицинские направления",
      tr: "Tıbbi Uzmanlık Alanları",
      ar: "الأقسام والتخصصات الطبية",
      uz: "Tibbiyot yo'nalishlari",
    },
    navTitles: {
      de: "Medizinische Fachbereiche",
      en: "Medical Specialties",
      ru: "Медицинские направления",
      tr: "Tıbbi Uzmanlıklar",
      ar: "التخصصات الطبية",
      uz: "Tibbiyot yo'nalishlari",
    },
    stripLabels: {
      de: "Medizinische\nFachbereiche",
      en: "Medical\nSpecialties",
      ru: "Медицинские\nнаправления",
      tr: "Tıbbi\nUzmanlıklar",
      ar: "التخصصات\nالطبية",
      uz: "Tibbiyot\nyo'nalishlari",
    },
    subtitles: {
      de: "Ambulante & Fachärztliche Spitzenmedizin (§ 95 SGB V)",
      en: "Outpatient & Specialist Medicine (§ 95 SGB V)",
      ru: "Амбулаторная и специализированная медицина (§ 95 SGB V)",
      tr: "Ayakta Tedavi & Uzman Hekimlik (§ 95 SGB V)",
      ar: "الرعاية المتنقلة والطب التخصصي (§ 95 SGB V)",
      uz: "Ambulator va ixtisoslashgan ilg'or tibbiyot (§ 95 SGB V)",
    },
    descriptions: {
      de: "Umfassende ambulante und chirurgische Versorgung durch zwei spezialisierte MVZ-Zentren sowie Vorbereitung der stationären Krankenhausklinik (§ 30 GewO).",
      en: "Comprehensive outpatient and surgical care provided by two specialized MVZ centers and preparation of inpatient hospital clinics (§ 30 GewO).",
      ru: "Комплексная амбулаторная и хирургическая помощь в двух центрах MVZ и подготовка стационарного клинического госпиталя (§ 30 GewO).",
      tr: "İki uzmanlaşmış MVZ merkezi ve yatarak tedavi sunacak klinik hastane hazırlığı (§ 30 GewO) ile kapsamlı cerrahi ve ayakta tedavi.",
      ar: "رعاية عيادية وجراحية شاملة من خلال مركزين متخصصين MVZ والتحضير لمستشفى NabiOta للرعاية الداخلية (§ 30 GewO).",
      uz: "Ikkita ixtisoslashgan MVZ markazi va statsionar klinika (§ 30 GewO) orqali kompleks ambulator va jarrohlik yordami.",
    },
    highlights: {
      de: [
        "Interdisziplinäre Versorgung",
        "Moderne medizinische Standards",
        "Nahtlose Patientenbetreuung",
      ],
      en: [
        "Interdisciplinary care",
        "Modern medical standards",
        "Seamless patient management",
      ],
      ru: [
        "Междисциплинарный подход",
        "Современные медицинские стандарты",
        "Непрерывное ведение пациентов",
      ],
      tr: [
        "Disiplinlerarası uzmanlık",
        "Modern tıbbi standartlar",
        "Kesintisiz hasta takibi",
      ],
      ar: [
        "رعاية متعددة التخصصات",
        "معايير طبية متقدمة",
        "متابعة متكاملة للمرضى",
      ],
      uz: [
        "Fanlararo kompleks yondashuv",
        "Zamonaviy tibbiy standartlar",
        "Uzluksiz bemor parvarishi",
      ],
    },
    stats: {
      de: [
        { value: "2", label: "Spezialisierte MVZ-Zentren" },
        { value: "11+", label: "Medizinische Fachgebiete" },
        { value: "§ 95", label: "Zulassung nach SGB V" },
      ],
      en: [
        { value: "2", label: "Specialized MVZ Centers" },
        { value: "11+", label: "Medical Disciplines" },
        { value: "§ 95", label: "SGB V Certification" },
      ],
      ru: [
        { value: "2", label: "Центра MVZ" },
        { value: "11+", label: "Медицинских профилей" },
        { value: "§ 95", label: "Лицензия SGB V" },
      ],
      tr: [
        { value: "2", label: "Uzmanlaşmış MVZ Merkezi" },
        { value: "11+", label: "Tıbbi Uzmanlık Alanı" },
        { value: "§ 95", label: "SGB V Ruhsatı" },
      ],
      ar: [
        { value: "2", label: "مركزا MVZ متخصصان" },
        { value: "+11", label: "تخصصاً طبياً دقيقاً" },
        { value: "§ 95", label: "ترخيص SGB V" },
      ],
      uz: [
        { value: "2", label: "Ixtisoslashgan MVZ markazi" },
        { value: "11+", label: "Tibbiy mutaxassisliklar" },
        { value: "§ 95", label: "SGB V litsenziyasi" },
      ],
    },
  },
  {
    id: "diagnostik",
    slug: "diagnostik",
    icon: Microscope,
    iconName: "Microscope",
    image: "/images/areas/diagnostics.webp",
    titles: {
      de: "Diagnostik",
      en: "Diagnostics",
      ru: "Диагностика",
      tr: "Tanı & Radyoloji",
      ar: "التشخيص الطبي والتصوير",
      uz: "Diagnostika",
    },
    navTitles: {
      de: "Diagnostik",
      en: "Diagnostics",
      ru: "Диагностика",
      tr: "Tanı & Görüntüleme",
      ar: "التشخيص والتصوير الطبي",
      uz: "Diagnostika",
    },
    stripLabels: {
      de: "Diagnostik",
      en: "Diagnostics",
      ru: "Диагностика",
      tr: "Tanı ve\nTeşhis",
      ar: "التشخيص\nوالتحاليل",
      uz: "Diagnostika",
    },
    subtitles: {
      de: "MRT, CT & Präzisionstechnologie",
      en: "MRI, CT & High-Precision Imaging",
      ru: "МРТ, КТ и высокоточная диагностика",
      tr: "3T MRT, CT & Yüksek Teknoloji",
      ar: "الرنين المغناطيسي والأشعة المقطعية",
      uz: "MRT, KT va yuqori aniqlikdagi texnologiyalar",
    },
    descriptions: {
      de: "High-End Bildgebung mit 3T MRT, Low-Dose CT, digitalem Röntgen sowie neurophysiologische Diagnostik und Probenlogistik.",
      en: "High-end imaging with 3T MRI, low-dose CT, digital radiography, neurophysiology, and structured laboratory logistics.",
      ru: "Высокоточная визуализация: 3Т МРТ, низкодозовая КТ, цифровой рентген, нейрофизиология и лабораторная логистика.",
      tr: "3T MR, düşük dozlu BT, dijital röntgen, klinik nörofizyoloji ve modern laboratuvar lojistiği ile üst düzey görüntüleme.",
      ar: "تصوير طبي متقدم بالرنين المغناطيسي 3T، أشعة مقطعية بجرعات منخفضة، أشعة سينية رقمية، وتخطيط عصبي ولوجستيات مخبرية.",
      uz: "3T MRT, past dozali KT, raqamli rentgen, neyrofiziologik diagnostika va laboratoriya logistikasi bilan yuqori aniqlikdagi tekshiruvlar.",
    },
    highlights: {
      de: [
        "3T MRT & Niedrigdosis-CT",
        "Präzise radiologische Befundung",
        "Schonende ambulante Diagnostik",
      ],
      en: [
        "3T MRI & low-dose CT",
        "Precise radiological reporting",
        "Gentle outpatient diagnostics",
      ],
      ru: [
        "3T МРТ и низкодозовая КТ",
        "Высокоточная радиология",
        "Щадящая амбулаторная диагностика",
      ],
      tr: [
        "3T MR ve düşük doz BT",
        "Hassas radyolojik değerlendirme",
        "Konforlu ayakta tanı",
      ],
      ar: [
        "رنين مغناطيسي 3T وأشعة منخفضة الجرعة",
        "تقارير إشعاعية فائقة الدقة",
        "تشخيص عيادي مريح",
      ],
      uz: [
        "3T MRT va past dozali KT",
        "Yuqori aniqlikdagi radiologiya",
        "Xavfsiz ambulator diagnostika",
      ],
    },
    stats: {
      de: [
        { value: "3T", label: "High-Field MRT" },
        { value: "Low-Dose", label: "Schonende CT-Technik" },
        { value: "<24h", label: "Digitales Befundmanagement" },
      ],
      en: [
        { value: "3T", label: "High-Field MRI" },
        { value: "Low-Dose", label: "Safe CT Imaging" },
        { value: "<24h", label: "Digital Diagnostic Reports" },
      ],
      ru: [
        { value: "3T", label: "Высокопольный МРТ" },
        { value: "Low-Dose", label: "Щадящая КТ" },
        { value: "<24ч", label: "Цифровые заключения" },
      ],
      tr: [
        { value: "3T", label: "Yüksek Alanlı MR" },
        { value: "Düşük Doz", label: "Güvenli BT Teknolojisi" },
        { value: "<24s", label: "Dijital Raporlama" },
      ],
      ar: [
        { value: "3T", label: "رنين مغناطيسي عالي الدقة" },
        { value: "Low-Dose", label: "أشعة مقطعية منخفضة الجرعة" },
        { value: "<24س", label: "تقارير تشخيصية رقمية" },
      ],
      uz: [
        { value: "3T", label: "Yuqori quvvatli MRT" },
        { value: "Low-Dose", label: "Xavfsiz KT texnologiyasi" },
        { value: "<24s", label: "Raqamli xulosalar" },
      ],
    },
  },
  {
    id: "rehabilitation",
    slug: "rehabilitation",
    icon: HeartPulse,
    iconName: "HeartPulse",
    image: "/images/areas/rehabilitation.webp",
    titles: {
      de: "Rehabilitation",
      en: "Rehabilitation",
      ru: "Реабилитация",
      tr: "Rehabilitasyon",
      ar: "التأهيل الطبي المتكامل",
      uz: "Reabilitatsiya",
    },
    navTitles: {
      de: "Rehabilitation",
      en: "Rehabilitation",
      ru: "Реабилитация",
      tr: "Rehabilitasyon",
      ar: "التأهيل والعلاج الطبيعي",
      uz: "Reabilitatsiya",
    },
    stripLabels: {
      de: "Rehabilitation",
      en: "Rehabilitation",
      ru: "Реабилитация",
      tr: "Rehabilitasyon",
      ar: "إعادة التأهيل",
      uz: "Reabilitatsiya",
    },
    subtitles: {
      de: "Ganzheitliche Genesung & Therapie",
      en: "Holistic Recovery & Therapy",
      ru: "Комплексное восстановление и терапия",
      tr: "Bütüncül İyileşme & Fizik Tedavi",
      ar: "التعافي الشامل والبرامج العلاجية",
      uz: "Keng qamrovli tiklanish va terapiya",
    },
    descriptions: {
      de: "Ambulante Reha, Physiotherapie, Ergotherapie, Logopädie und medizinische Trainingstherapie für nachhaltige Mobilität.",
      en: "Outpatient rehab, physiotherapy, occupational therapy, speech therapy, and medical exercise training for lasting mobility.",
      ru: "Амбулаторная реабилитация, физиотерапия, эрготерапия, логопедия и лечебная физкультура для устойчивой подвижности.",
      tr: "Kalıcı hareketlilik için ayakta rehabilitasyon, fizyoterapi, ergoterapi, konuşma terapisi ve tıbbi egzersiz tedavisi.",
      ar: "برامج إعادة تأهيل شاملة بالعيادات الخارجية، علاج طبيعي ووظيفي وتخاطب وتدريب علاجي لاستعادة الحركة المستدامة.",
      uz: "Barqaror harakatchanlik uchun ambulator reabilitatsiya, fizioterapiya, ergoterapiya, logopediya va davolash mashqlari.",
    },
    highlights: {
      de: [
        "Ganzheitliche Physio- & Ergotherapie",
        "Eigenes Bewegungsbad (32°C)",
        "Individuelle Therapiepläne",
      ],
      en: [
        "Holistic physio & occupational therapy",
        "Hydrotherapy pool (32°C)",
        "Individual rehabilitation plans",
      ],
      ru: [
        "Комплексная физио- и эрготерапия",
        "Лечебный бассейн (32°C)",
        "Индивидуальные планы реабилитации",
      ],
      tr: [
        "Kapsamlı fizyo ve ergoterapi",
        "32°C hidroterapi havuzu",
        "Kişiye özel terapi planları",
      ],
      ar: [
        "علاج طبيعي ووظيفي متكامل",
        "مسبح علاجي مائي (32°م)",
        "برامج تأهيل مخصصة",
      ],
      uz: [
        "Kompleks fizio- va ergoterapiya",
        "32°C davolash havzasi",
        "Shaxsiy reabilitatsiya rejalari",
      ],
    },
    stats: {
      de: [
        { value: "1:1", label: "Individuelle Therapiebetreuung" },
        { value: "5", label: "Fachbereiche (Ortho, Neuro, Kardio, Pneumo)" },
        { value: "100%", label: "Ganzheitlich & Evidenzbasiert" },
      ],
      en: [
        { value: "1:1", label: "Individual Therapy Care" },
        { value: "5", label: "Medical Disciplines" },
        { value: "100%", label: "Evidence-Based & Holistic" },
      ],
      ru: [
        { value: "1:1", label: "Индивидуальный подход" },
        { value: "5", label: "Направлений реабилитации" },
        { value: "100%", label: "Доказательная база" },
      ],
      tr: [
        { value: "1:1", label: "Birebir Terapi Desteği" },
        { value: "5", label: "Uzmanlık Alanı" },
        { value: "%100", label: "Kanıta Dayalı & Bütüncül" },
      ],
      ar: [
        { value: "1:1", label: "رعاية علاجية فردية" },
        { value: "5", label: "تخصصات تأهيلية" },
        { value: "100%", label: "مبني على الأدلة العلمية" },
      ],
      uz: [
        { value: "1:1", label: "Yakkama-yakka terapiya" },
        { value: "5", label: "Reabilitatsiya yo'nalishi" },
        { value: "100%", label: "Dalillarga asoslangan yondashuv" },
      ],
    },
  },
  {
    id: "pflege",
    slug: "pflege",
    icon: Users,
    iconName: "Users",
    image: "/images/areas/pflege.webp",
    titles: {
      de: "Pflege & HomeCare",
      en: "Nursing & HomeCare",
      ru: "Патронаж и уход",
      tr: "Bakım & HomeCare",
      ar: "التمريض والرعاية المنزلية",
      uz: "Parvarish va HomeCare",
    },
    navTitles: {
      de: "Pflege",
      en: "Nursing Care",
      ru: "Патронаж и уход",
      tr: "Hasta Bakımı & HomeCare",
      ar: "التمريض والرعاية المنزلية",
      uz: "Parvarish va patronaj",
    },
    stripLabels: {
      de: "Pflege",
      en: "Nursing",
      ru: "Уход и\nпатронаж",
      tr: "Hasta\nBakımı",
      ar: "التمريض\nوالرعاية",
      uz: "Parvarish va\npatronaj",
    },
    subtitles: {
      de: "Ambulante Pflege & HomeCare",
      en: "Outpatient Care & HomeCare",
      ru: "Амбулаторная помощь и HomeCare",
      tr: "Evde Bakım & Medikal Malzeme",
      ar: "الرعاية المتنقلة والمستلزمات الطبية",
      uz: "Ambulator parvarish va HomeCare",
    },
    descriptions: {
      de: "Qualifizierte ambulante Krankenpflege, spezialisierte Wundversorgung und liebevolle Betreuung im vertrauten Zuhause.",
      en: "Qualified outpatient nursing, specialized wound care, and compassionate support in the comfort of home.",
      ru: "Квалифицированный амбулаторный уход, лечение хронических ран и поддержка пациентов на дому.",
      tr: "Kendi evinizin huzurunda nitelikli ayakta hemşirelik bakımı, uzman yara tedavisi ve şefkatli destek.",
      ar: "خدمات تمريض منزلية معتمدة، رعاية متخصصة للجروح المزمنة ودعم أسري في بيئة المنزل المألوفة.",
      uz: "Malakali ambulator tibbiy parvarish, ixtisoslashtirilgan jarohat davolash va bemorlarni uyda qo'llab-quvvatlash.",
    },
    highlights: {
      de: [
        "Zertifizierte ICW-Wundversorgung",
        "Qualifizierte Pflege SGB V / XI",
        "24/7 ambulante Betreuung",
      ],
      en: [
        "Certified ICW wound management",
        "Qualified care under SGB V / XI",
        "24/7 outpatient assistance",
      ],
      ru: [
        "Сертифицированное лечение ран ICW",
        "Квалифицированный уход по SGB V / XI",
        "Круглосуточная поддержка",
      ],
      tr: [
        "ICW sertifikalı yara yönetimi",
        "SGB V / XI kapsamında profesyonel bakım",
        "7/24 ayakta hasta desteği",
      ],
      ar: [
        "علاج الجروح المعتمد (ICW)",
        "تمريض متخصص وفق SGB V / XI",
        "رعاية مستمرة على مدار الساعة",
      ],
      uz: [
        "Sertifikatlangan ICW jarohat parvarishi",
        "SGB V / XI bo'yicha malakali parvarish",
        "24/7 uzluksiz qo'llab-quvvatlash",
      ],
    },
    stats: {
      de: [
        { value: "24/7", label: "Erreichbarkeit & Bereitschaft" },
        { value: "SGB V/XI", label: "Anerkannte Pflegekassenzulassung" },
        { value: "100%", label: "Zertifizierte Wundversorgung" },
      ],
      en: [
        { value: "24/7", label: "Availability & Emergency Readiness" },
        { value: "SGB V/XI", label: "Statutory Care Fund Accreditation" },
        { value: "100%", label: "Certified Wound Management" },
      ],
      ru: [
        { value: "24/7", label: "Круглосуточная доступность" },
        { value: "SGB V/XI", label: "Лицензия страховых касс" },
        { value: "100%", label: "Сертифицированное лечение ран" },
      ],
      tr: [
        { value: "7/24", label: "Ulaşılabilirlik & Nöbet" },
        { value: "SGB V/XI", label: "Onaylı Bakım Sigortası" },
        { value: "%100", label: "Sertifikalı Yara Bakımı" },
      ],
      ar: [
        { value: "24/7", label: "جاهزية واستجابة مستمرة" },
        { value: "SGB V/XI", label: "اعتماد صناديق التمريض" },
        { value: "100%", label: "علاج جروح معتمد" },
      ],
      uz: [
        { value: "24/7", label: "Uzluksiz navbatchilik" },
        { value: "SGB V/XI", label: "Sug'urta jamg'armasi akkreditatsiyasi" },
        { value: "100%", label: "Sertifikatlangan jarohat davolash" },
      ],
    },
  },
  {
    id: "beratung-projektentwicklung",
    slug: "beratung-projektentwicklung",
    icon: Network,
    iconName: "Network",
    image: "/images/areas/consulting.webp",
    titles: {
      de: "Beratung & Projektentwicklung",
      en: "Consulting & Real Estate",
      ru: "Консалтинг и девелопмент",
      tr: "Danışmanlık & Gayrimenkul Geliştirme",
      ar: "الاستشارات وتطوير المرافق الصحية",
      uz: "Konsalting va developpent",
    },
    navTitles: {
      de: "Beratung & Projektentwicklung",
      en: "Consulting & Development",
      ru: "Консалтинг и девелопмент",
      tr: "Danışmanlık & Proje Geliştirme",
      ar: "الاستشارات والتطوير الطبي",
      uz: "Konsalting va loyihalar boshqaruvi",
    },
    stripLabels: {
      de: "Beratung &\nServices",
      en: "Consulting &\nDevelopment",
      ru: "Консалтинг и\nдевелопмент",
      tr: "Danışmanlık &\nGeliştirme",
      ar: "الاستشارات\nوالتطوير",
      uz: "Konsalting va\ndeveloperlik",
    },
    subtitles: {
      de: "Gesundheitsimmobilien & MVZ-Strukturen",
      en: "Healthcare Facilities & Centers",
      ru: "Медицинские центры и девелопмент",
      tr: "Sağlık Tesisleri & Klinik Projeleri",
      ar: "تطوير المرافق والمجمعات الطبية",
      uz: "Tibbiy ko'chmas mulk va MVZ tuzilmalari",
    },
    descriptions: {
      de: "Entwicklung von Gesundheitsimmobilien, MVZ-Strukturen, Praxisnachfolge sowie zentrale Managementleistungen.",
      en: "Development of medical real estate, MVZ structures, physician succession models, and central holding management.",
      ru: "Девелопмент медицинской недвижимости, создание центров MVZ, преемственность практики и управляющие услуги.",
      tr: "Sağlık gayrimenkullerinin geliştirilmesi, MVZ yapıları, muayenehane devir modelleri ve merkezi yönetim hizmetleri.",
      ar: "تطوير العقارات الصحية، إنشاء مراكز MVZ، حلول تعاقب الأطباء، وإدارة استراتيجية مركزية.",
      uz: "Tibbiy ko'chmas mulkni rivojlantirish, MVZ tuzilmalari, shifokorlar amaliyoti vorisligi va boshqaruv xizmatlari.",
    },
    highlights: {
      de: [
        "Moderne OP-Zentren (DIN 1946-4)",
        "Strukturierte MVZ-Konzepte",
        "Rechtssichere Nachfolgemodelle",
      ],
      en: [
        "Modern DIN 1946-4 surgical suites",
        "Structured MVZ development",
        "Legally compliant succession",
      ],
      ru: [
        "Чистые операционные DIN 1946-4",
        "Структурированные решения MVZ",
        "Правовая безопасность преемственности",
      ],
      tr: [
        "DIN 1946-4 ameliyathane standartları",
        "Yapılandırılmış MVZ geliştirme",
        "Hukuki güvenceli devir modelleri",
      ],
      ar: [
        "أجنحة جراحية وفق معايير DIN 1946-4",
        "تطوير هياكل المراكز الطبية MVZ",
        "حلول تعاقب موثوقة قانونياً",
      ],
      uz: [
        "DIN 1946-4 operatsiya xonalari",
        "Tizimli MVZ rivojlantirish",
        "Qonuniy himoyalangan vorislik",
      ],
    },
    stats: {
      de: [
        { value: "15+", label: "Jahre Marktexpertise" },
        { value: "A-Z", label: "Von Standortanalyse bis Betrieb" },
        { value: "100%", label: "Rechts- & Zulassungskonform" },
      ],
      en: [
        { value: "15+", label: "Years Market Expertise" },
        { value: "A-Z", label: "From Site Analysis to Operation" },
        { value: "100%", label: "Legally & Regulatory Compliant" },
      ],
      ru: [
        { value: "15+", label: "Лет экспертизы на рынке" },
        { value: "A-Z", label: "От анализа до запуска" },
        { value: "100%", label: "Юридическая безопасность" },
      ],
      tr: [
        { value: "15+", label: "Yıllık Sektör Deneyimi" },
        { value: "A-Z", label: "Analizden İşletmeye" },
        { value: "%100", label: "Yasal & Mevzuata Uygun" },
      ],
      ar: [
        { value: "+15", label: "عاماً من الخبرة في السوق" },
        { value: "A-Z", label: "من دراسة الموقع حتى التشغيل" },
        { value: "100%", label: "مطابقة قانونية وتنظيمية" },
      ],
      uz: [
        { value: "15+", label: "Yillik bozor tajribasi" },
        { value: "A-Z", label: "Tahlildan to foydalanishgacha" },
        { value: "100%", label: "Qonuniy va me'yoriy moslik" },
      ],
    },
  },
  {
    id: "internationale-kooperationen",
    slug: "internationale-kooperationen",
    icon: Globe,
    iconName: "Globe",
    image: "/images/areas/international.webp",
    titles: {
      de: "Internationale Kooperationen",
      en: "International Cooperations",
      ru: "Международное сотрудничество",
      tr: "Uluslararası İş Birlikleri",
      ar: "التعاون والشراكات الدولية",
      uz: "Xalqaro hamkorlik",
    },
    navTitles: {
      de: "Internationale Kooperationen",
      en: "International Cooperations",
      ru: "Международное сотрудничество",
      tr: "Uluslararası İş Birlikleri",
      ar: "التعاون الدولي والكوادر",
      uz: "Xalqaro hamkorlik",
    },
    stripLabels: {
      de: "Internationale\nKooperationen",
      en: "International\nPartnerships",
      ru: "Международное\nсотрудничество",
      tr: "Uluslararası\nOrtaklıklar",
      ar: "التعاون\nالدولي",
      uz: "Xalqaro\nhamkorlik",
    },
    subtitles: {
      de: "Fachkräftegewinnung & Klinikpartnerschaften",
      en: "Healthcare Recruitment & Global Partnerships",
      ru: "Рекрутинг врачей и партнерство с клиниками",
      tr: "Hekim İstihdamı & Klinik Ortaklıkları",
      ar: "استقطاب الكوادر والشراكات الطبية",
      uz: "Kadrlar jalb qilish va klinik hamkorlik",
    },
    descriptions: {
      de: "Nationale & internationale Gewinnung von medizinischen Fachkräften, Approbationsbegleitung und globale Klinikpartnerschaften.",
      en: "National and international recruitment of healthcare professionals, licensing (Approbation) support, and global hospital partnerships.",
      ru: "Привлечение врачей и медицинского персонала, сопровождение Approbation, нострификация и международные партнерства.",
      tr: "Sağlık profesyonellerinin ulusal ve uluslararası istihdamı, denklik (Approbation) danışmanlığı ve küresel klinik ortaklıkları.",
      ar: "استقطاب الكوادر الطبية التخصصية، الدعم الشامل لمعادلة الشهادات (Approbation)، وشراكات المستشفيات العالمية.",
      uz: "Tibbiy mutaxassislarni xalqaro jalb qilish, Approbation va diplom tan olinishi bo'yicha ko'mak, global klinik hamkorlik.",
    },
    highlights: {
      de: [
        "Approbations- & Anerkennungsbegleitung",
        "Gezielte Fachkräftegewinnung",
        "Akademische Klinikpartnerschaften",
      ],
      en: [
        "Licensing & Approbation guidance",
        "Targeted healthcare recruitment",
        "Academic hospital partnerships",
      ],
      ru: [
        "Сопровождение Approbation и нострификации",
        "Целевой подбор врачей",
        "Партнерство с клиниками",
      ],
      tr: [
        "Denklik & Approbation rehberliği",
        "Hedefe yönelik personel istihdamı",
        "Akademik klinik ortaklıkları",
      ],
      ar: [
        "مرافقة معادلة الشهادات وترخيص مزاولة المهنة",
        "استقطاب نوعي للكوادر الطبية",
        "شراكات أكاديمية وطبية دولية",
      ],
      uz: [
        "Approbation va diplom tan olinishi ko'magi",
        "Maqsadli tibbiy kadrlarni tanlash",
        "Akademik klinik hamkorlik",
      ],
    },
    stats: {
      de: [
        { value: "25+", label: "Partnerländer im Netzwerk" },
        { value: "1.000+", label: "Fachkräfte begleitet" },
        { value: "Full-Care", label: "Approbation bis Integration" },
      ],
      en: [
        { value: "25+", label: "Partner Countries in Network" },
        { value: "1,000+", label: "Professionals Supported" },
        { value: "Full-Care", label: "From Licensing to Integration" },
      ],
      ru: [
        { value: "25+", label: "Стран в партнерской сети" },
        { value: "1.000+", label: "Специалистов обучено" },
        { value: "Full-Care", label: "От Approbation до интеграции" },
      ],
      tr: [
        { value: "25+", label: "Ağdaki Partner Ülke" },
        { value: "1.000+", label: "Desteklenen Sağlık Personeli" },
        { value: "Full-Care", label: "Denklikten Entegrasyona" },
      ],
      ar: [
        { value: "+25", label: "دولة ضمن شبكة الشركاء" },
        { value: "+1000", label: "كادر طبي تمت مرافقته" },
        { value: "Full-Care", label: "من المعادلة حتى الاندماج" },
      ],
      uz: [
        { value: "25+", label: "Hamkor davlatlar" },
        { value: "1.000+", label: "Kuzatib borilgan mutaxassislar" },
        { value: "Full-Care", label: "Litsenziyadan integratsiyagacha" },
      ],
    },
  },
];

/**
 * Returns BusinessArea objects localized for a specific locale.
 * Compatible with existing BusinessArea consumers.
 */
export function getLocalizedMedicalAreas(locale: SupportedLocale = "de"): BusinessArea[] {
  return MEDICAL_AREAS.map((area) => ({
    id: area.id,
    slug: area.slug,
    title: area.titles[locale] || area.titles.de,
    subtitle: area.subtitles[locale] || area.subtitles.de,
    description: area.descriptions[locale] || area.descriptions.de,
    fullDescription: area.descriptions[locale] || area.descriptions.de,
    image: area.image,
    iconName: area.iconName,
    stats: area.stats[locale] || area.stats.de,
    keyServices: area.highlights[locale] || area.highlights.de,
    advantages: area.highlights[locale] || area.highlights.de,
  }));
}

/**
 * Returns a specific business area by slug localized for a specific locale.
 */
export function getLocalizedMedicalAreaBySlug(
  slug: string,
  locale: SupportedLocale = "de"
): (BusinessArea & { icon: IconComponent; raw: MultilingualArea }) | undefined {
  const found = MEDICAL_AREAS.find((a) => a.slug === slug);
  if (!found) return undefined;

  return {
    id: found.id,
    slug: found.slug,
    title: found.titles[locale] || found.titles.de,
    subtitle: found.subtitles[locale] || found.subtitles.de,
    description: found.descriptions[locale] || found.descriptions.de,
    fullDescription: found.descriptions[locale] || found.descriptions.de,
    image: found.image,
    iconName: found.iconName,
    icon: found.icon,
    stats: found.stats[locale] || found.stats.de,
    keyServices: found.highlights[locale] || found.highlights.de,
    advantages: found.highlights[locale] || found.highlights.de,
    raw: found,
  };
}

/**
 * Navigation items used by Header.tsx
 */
export const medicalAreaNavItems = MEDICAL_AREAS.map((area) => ({
  slug: area.slug,
  icon: area.icon,
  titles: area.navTitles,
  subtitles: area.subtitles,
}));
