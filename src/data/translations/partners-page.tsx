import React from "react";
import { SupportedLocale } from "@/lib/i18n";
import {
  Handshake,
  Scale,
  Target,
  Users,
  FileSearch,
  Link2,
  GitFork,
  ShieldCheck,
  TrendingUp,
} from "@/lib/icons";

interface PartnershipPillar {
  id: string;
  tag: string;
  image: string;
  iconType: "doctor" | "hospital" | "investor" | "municipality";
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


export function getPartnersPageTranslations(locale: SupportedLocale = "de") {
  const isUz = locale === "uz";
  const isRu = locale === "ru";
  const isEn = locale === "en";
  const isTr = locale === "tr";
  const isAr = locale === "ar";

  const heroData = {
    title: isUz
      ? "Hamkorlik va investitsiyalar"
      : isRu
      ? "Партнерство и инвестиции"
      : isEn
      ? "Partners & Strategic Alliances"
      : isTr
      ? "Ortaklık ve Yatırımlar"
      : isAr
      ? "الشركاء والتحالفات الاستراتيجية"
      : "Partner & Strategische Kooperationen",
    subtitle: isUz
      ? "Strategik al'yanslar, praksis vorisligi va sog'liqni saqlashga investitsiyalar"
      : isRu
      ? "Надежные модели сотрудничества для врачей, клиник и инвесторов"
      : isEn
      ? "Sustainable Value Creation for Physicians, Clinics, and Healthcare Investors"
      : isTr
      ? "Hekimler, klinikler ve yatırımcılar için güvenilir iş birliği modelleri"
      : isAr
      ? "خلق قيمة مستدامة للأطباء والمستشفيات والمستثمرين الصحيين"
      : "Gemeinsam Werte schaffen für das Gesundheitswesen von morgen",
    eyebrow: isUz
      ? "STRATEGIK AL'YANSLAR"
      : isRu ? "ПАРТНЕРСКАЯ СЕТЬ" : isEn ? "PARTNERSHIP ECOSYSTEM" : isTr ? "ORTAKLIK EKOSİSTEMİ" : isAr ? "منظومة الشركاء والاستثمار" : "PARTNER & INVESTOREN",
    desc: isUz
      ? "NabiOta® Health Group Germany GmbH ambulator va statsionar tibbiyot, kadrlar va sog'liqni saqlash ko'chmas mulki bo'yicha mustahkam hamkorlikni rivojlantiradi. Biz shifokorlar, klinikalar, investorlar va munitsipalitetlar uchun Germaniya qonunchiligiga qat'iy mos keluvchi barqaror modellarni taklif etamiz."
      : isRu
      ? "Холдинг NabiOta® объединяет медицинское превосходство, высокотехнологичную инфраструктуру и инвестиционную надежность. Мы предлагаем врачам, клиникам, муниципалитетам и инвесторам прозрачные юридические модели сотрудничества на равных."
      : isEn
      ? "The NabiOta® Health Group unites medical excellence, advanced clinical infrastructure, and financial resilience. We offer physicians, hospitals, municipalities, and institutional investors transparent, legally robust collaboration models."
      : isTr
      ? "NabiOta® Health Group Germany GmbH, üstün tıbbi uzmanlığı, ileri klinik altyapıyı ve kurumsal güvenilirliği birleştirir. Serbest çalışan hekimlere, hastanelere, belediyelere ve kurumsal ortaklara eşit düzeyde, yasal güvenceli iş birliği modelleri sunuyoruz."
      : isAr
      ? "تجمع مجموعة NabiOta® Health Group Germany GmbH بين التميز الطبي السريري، والبنية التحتية المتطورة، والنزاهة المؤسسية. نقدم للأطباء المستقلين والمستشفيات والبلديات والمستثمرين نماذج تعاون متوافقة قانونياً على قدم المساواة."
      : "Die NabiOta® Health Group Germany GmbH verbindet ärztliche Spitzenmedizin, hochmoderne Infrastruktur und unternehmerische Verlässlichkeit. Wir bieten niedergelassenen Ärzten, Krankenhäusern, Kommunen und institutionellen Partnern rechtssichere Kooperationsmodelle auf Augenhöhe.",
  };

  const heroBadges = [
    {
      icon: <Handshake className="w-5 h-5 text-[#ECCF96]" />,
      title: isUz
        ? "4 ta hamkorlik modeli"
        : isRu ? "Партнерство" : isEn ? "Reliable" : isTr ? "Güvenilir" : isAr ? "شراكة" : "Verlässliche",
      sub: isUz
        ? "Shifokorlar, klinikalar va shaharlar"
        : isRu ? "на равных" : isEn ? "Partnership" : isTr ? "Ortaklık" : isAr ? "موثوقة" : "Partnerschaft",
    },
    {
      icon: <Scale className="w-5 h-5 text-[#ECCF96]" />,
      title: isUz
        ? "100% huquqiy tozalik"
        : isRu ? "Закон § 95" : isEn ? "Regulatory" : isTr ? "Yasal Uyum" : isAr ? "امتثال قانوني" : "Rechtssicher",
      sub: isUz
        ? "SGB V, GewO va KV me'yorlari"
        : isRu ? "SGB V & GewO" : isEn ? "SGB V Compliant" : isTr ? "§ 95 SGB V" : isAr ? "§ 95 SGB V" : "nach SGB V",
    },
    {
      icon: <Target className="w-5 h-5 text-[#ECCF96]" />,
      title: isUz
        ? "Uzoq muddatli barqarorlik"
        : isRu ? "Устойчивые" : isEn ? "Sustainable" : isTr ? "Sürdürülebilir" : isAr ? "تكامل" : "Langfristige",
      sub: isUz
        ? "Integratsiyalashgan ekotizim"
        : isRu ? "синергии" : isEn ? "Synergies" : isTr ? "Sinerjiler" : isAr ? "مستدام" : "Synergien",
    },
  ];

  const pillars: PartnershipPillar[] = [
    {
      id: "fachaerzte-nachfolge",
      tag: isUz
        ? "SHIFOKORLAR VA PRAKSISLAR UCHUN"
        : isRu ? "ДЛЯ ВРАЧЕЙ & ПРАКСИСОВ" : isEn ? "PHYSICIANS & PRACTICES" : isTr ? "UZMAN HEKİMLER VE MUAYENEHANELER İÇİN" : isAr ? "للأطباء والعيادات التخصصية" : "FÜR FACHÄRZTE & PRAXEN",
      image: "/images/areas/medical-departments.webp",
      iconType: "doctor",
      title: isUz
        ? "Praksis vorisligi va MVZ ko'p tarmoqli tarmog'iga integratsiya"
        : isRu
        ? "Преемственность праксисов & Интеграция в MVZ (§ 95 SGB V)"
        : isEn
        ? "Practice Succession & MVZ Integration (§ 95 SGB V)"
        : isTr
        ? "Muayenehane Devri ve MVZ Entegrasyonu (§ 95 SGB V)"
        : isAr
        ? "خلافة العيادات الطبية والاندماج في مراكز MVZ (§ 95 SGB V)"
        : "Praxisnachfolge & MVZ-Integration (§ 95 SGB V)",
      shortDesc: isUz
        ? "Katta yoshdagi shifokorlar uchun xavfsiz vorislik: KV shartnoma shifokori o'rnini saqlash, adolatli baholash va to'liq terapevtik erkinlik."
        : isRu
        ? "Структурированная передача врачебной практики, сохранение автономии, освобождение от бюрократии и доступ к передовым технологиям."
        : isEn
        ? "Structured practice transition, guaranteed medical autonomy, relief from administration, and access to state-of-the-art facilities."
        : isTr
        ? "Yasal güvenceli muayenehane devri, tam tıbbi bağımsızlık, bürokratik yükten kurtulma ve modern tıp teknolojisine erişim."
        : isAr
        ? "انتقال قانوني منظم للعيادة، حرية قرار طبي كاملة، تخفيف الأعباء الإدارية والوصول لأحدث التقنيات."
        : "Rechtssichere Praxisabgabe, volle ärztliche Weisungsfreiheit, Entlastung von bürokratischen Pflichten und Zugang zu moderner Medizintechnik.",
      modal: {
        title: isUz
          ? "Praksis vorisligi va MVZ ko'p tarmoqli tarmog'iga integratsiya"
          : isRu
          ? "Преемственность праксисов & Вхождение в структуру MVZ (§ 95 SGB V)"
          : isEn
          ? "Practice Succession & MVZ Integration Framework (§ 95 SGB V)"
          : isTr
          ? "Muayenehane Devri ve MVZ Entegrasyon Modeli (§ 95 SGB V)"
          : isAr
          ? "إطار خلافة العيادات والاندماج في مراكز الرعاية MVZ (§ 95 SGB V)"
          : "Praxisnachfolge & MVZ-Integration (§ 95 SGB V)",
        subtitle: isUz
          ? "Katta yoshdagi shifokorlar uchun xavfsiz vorislik: KV shartnoma shifokori o'rnini saqlash va to'liq terapevtik erkinlik"
          : isRu
          ? "Партнерство для практикующих врачей: справедливая оценка стоимости, сохранение команды и фокус на медицине"
          : isEn
          ? "Structured succession for established practitioners: fair valuation, team continuity, and pure medical focus"
          : isTr
          ? "Yerleşik hekimler için yapılandırılmış geçiş modelleri: adil değerleme, ekip sürekliliği ve bürokrasisiz tıp"
          : isAr
          ? "حلول انتقال مخصصة للأطباء العامين والمتخصصين: تقييم عادل، استمرار الكادر والتركيز الطبي الخالص"
          : "Strukturierte Übergangskonzepte für niedergelassene Haus- und Fachärzte ohne bürokratischen Ballast",
        description: isUz
          ? "NabiOta® Health Group o'z amaliyotini ishonchli qo'llarga topshirmoqchi bo'lgan yoki yosh hamkasblar bilan ko'p tarmoqli MVZ da ishlashni xohlovchi shifokorlarga individual vorislik modellarini taklif etadi. Biz shartnoma shifokori o'rnini (Kassensitz) saqlab qolamiz, ma'muriy yuklamani o'z zimmamizga olamiz va to'liq davolash erkinligini kafolatlaymiz."
          : isRu
          ? "Холдинг NabiOta® предлагает опытным и молодым врачам безопасную модель интеграции. При выходе на пенсию или желании избавиться от административного бремени вы можете передать практику в лицензированный центр MVZ холдинга. Доктор Рахимов-Фишер, как лицензированный врач, обеспечивает строгое соблюдение врачебных прав, а управляющая компания берет на себя бухгалтерию, IT, биллинг и юридические вопросы."
          : isEn
          ? "The NabiOta® Group provides a reliable pathway for practicing physicians looking for succession planning or administrative relief. Practices can transition smoothly into our licensed MVZ structures. With physician ownership led by Dr. Fischer-Rahimov, professional autonomy is strictly preserved while centralized holding services manage IT, accounting, billing, and regulatory compliance."
          : isTr
          ? "NabiOta® Grubu, muayenehane devri veya idari yükten kurtulmak isteyen genel pratisyenler ve uzman hekimler için güvenilir entegrasyon çözümleri sunar. Dr. Fischer-Rahimov'un hekim sahipliği ve liderliğinde tıbbi terapi özgürlüğü bütünüyle korunur. Holding, sizi ve ekibinizi yönetim, KV faturalandırması, personel yönetimi ve BT altyapısı yüklerinden tamamen kurtarır."
          : isAr
          ? "توفر مجموعة NabiOta® حلولاً مصممة خصيصاً لأطباء الرعاية العامة والمتخصصين المستقلين للتقاعد أو الاندماج في مراكز MVZ الحديثة. تحت الإشراف الطبي للدكتور فيشر-رحيموف، يتم الحفاظ بالكامل على حرية اتخاذ القرارات العلاجية، بينما تتولى المجموعة الإدارة العامة، ومحاسبة التأمين KV، وإدارة الموارد البشرية، والبنية التحتية لتكنولوجيا المعلومات."
          : "Die NabiOta-Gruppe bietet niedergelassenen Allgemeinmedizinern und Fachärzten maßgeschneiderte Lösungen für die Praxisnachfolge und den Einstieg in moderne MVZ-Strukturen. Unter der ärztlichen Trägerschaft von Dr. Fischer-Rahimov bleibt die volle medizinische Therapiefreiheit gewahrt. Die Holding entlastet Sie und Ihr Team vollständig von Verwaltung, KV-Abrechnung, Personalmanagement und IT-Infrastruktur.",
        specificationsTitle: isUz
          ? "Hamkorlik modellari"
          : isRu ? "Преимущества для врача" : isEn ? "Physician Advantages" : isTr ? "Muayenehane Sahibi İçin Avantajlar" : isAr ? "مزايا لأصحاب العيادات" : "Vorteile für Praxisinhaber",
        specifications: isUz
          ? [
            "Praksisni to'liq yoki bosqichma-bosqich xarid qilish va adolatli bozor narxida baholash",
            "Sobiq egasining MVZ da yollanma shifokor (Anstellungsvertrag) sifatida o'zi istagan yuklamada ishlashni davom ettirishi",
            "Tibbiy hujjatlar, xodimlar va mavjud bemorlar bazasining uzluksiz vorisligi",
            "Kassenärztliche Vereinigung (KV Nordrhein) litsenziyalash qo'mitasi bilan barcha kelishuvlarni to'liq yuridik qo'llab-quvvatlash",
            "Yillik majburiy byurokratik hisobotlar va KV hisob-kitoblaridan to'liq ozod bo'lish",
            ]
          : isRu
          ? [
              "Справедливая рыночная оценка стоимости практики и бессрочного врачебного места (Kassensitz)",
              "Полное сохранение сформированного коллектива медицинских ассистентов (MFA)",
              "Гибкие форматы дальнейшей работы: от полного руководства до частичной занятости",
              "100% освобождение от административной рутины, бухгалтерского учета и проверок KV",
              "Доступ пациентов к аппаратам 3T MRT, Low-Dose CT и реабилитационному комплексу холдинга",
              "Современные безбарьерные кабинеты и новейшее оборудование за счет холдинга",
            ]
          : isEn
          ? [
              "Fair independent valuation of practice goodwill and statutory health insurance license (Kassensitz)",
              "Full continuity of employment for existing medical assistants (MFA) and clinical staff",
              "Flexible post-transition employment models: from medical directorship to part-time clinical practice",
              "Complete relief from administrative paperwork, KV billing audits, and facility liabilities",
              "Direct patient access to university-grade 3T MRI, low-dose CT, and dedicated rehabilitation centers",
              "Modernized, barrier-free practice rooms equipped with premium diagnostic systems",
            ]
          : isTr
          ? [
              "Muayenehane değeri ve KV anlaşmalı hekim kadrosunun (Kassensitz) şeffaf ve piyasaya uygun değerlemesi",
              "Uyumlu çalışan muayenehane asistanları (MFA) için eksiksiz istihdam garantisi",
              "Esnek çalışma modelleri: Tıbbi direktörlük veya sözleşmeli hekimlik statüsünde devam",
              "Bürokrasi, KV denetimleri, BT bakımı ve işveren risklerinden %100 arınma",
              "İleri düzey teşhis cihazlarına (3T MR, Düşük Dozlu BT) ve rehabilitasyon merkezlerine doğrudan erişim",
              "En modern ergonomik ve mimari standartlara göre donatılmış muayenehane alanları",
            ]
          : isAr
          ? [
              "تقييم مالي شفاف ومستقل لقيمة العيادة ورخصة التأمين الصحي العام (Kassensitz)",
              "ضمان استمرار توظيف الكوادر التمريضية والإدارية الحالية بالعيادة (MFA)",
              "نماذج عمل مرنة بعد الانتقال: من الإدارة الطبية إلى العمل السريري الجزئي",
              "تخفيف كامل من المعاملات الورقية وتدقيق حسابات KV ومخاطر التشغيل",
              "وصول فوري ومباشر إلى أجهزة الرنين 3T والتصوير المقطعي ومراكز التأهيل التابعة للمجموعة",
              "تحديث وتجهيز غرف العيادات بأحدث المعايير الطبية والمعمارية الخالية من العوائق",
            ]
          : [
              "Transparente und marktgerechte Bewertung des Praxiswertes und der KV-Zulassung (Kassensitz)",
              "Vollständige Übernahmegarantie für eingespielte Praxismitarbeiterinnen (MFA)",
              "Flexible Arbeitszeitmodelle: Weiterbeschäftigung als ärztlicher Leiter oder im Angestelltenverhältnis",
              "Vollständige Entlastung von Bürokratie, Abrechnungsprüfungen, IT-Pflege und Arbeitgeberrisiken",
              "Unmittelbarer Zugriff auf Hochleistungsdiagnostik (3T MRT, Niedrigdosis-CT) und Reha-Zentren",
              "Praxisräumlichkeiten nach modernsten ergonomischen und baulichen Standards",
            ],
        scopeTitle: isUz
          ? "Xolding tomonidan o'z zimmasiga olinadigan vazifalar"
          : isRu ? "Процесс передачи практики" : isEn ? "Succession Pathway" : isTr ? "Muayenehane Devir Süreci" : isAr ? "خطوات انتقال العيادة" : "Ablauf der Praxisabgabe",
        scopeItems: isUz
          ? [
            "Markazlashtirilgan kadrlar boshqaruvi, hisob-kitob (Abrechnung) va IT-infratuzilma",
            "Zamonaviy tibbiy texnika, raqamlashtirish va DIN EN ISO sifat menejmenti tizimiga investitsiyalar",
            "O'zbekiston va boshqa davlatlardan malakali shifokorlar va hamshiralarni jalb qilish (Medical Recruitment Services GmbH)",
            "NabiOta Real Estate GmbH orqali bino va xonalarni zamonaviy standartlarga moslab ta'mirlash",
            "Xoldingning boshqa filiallari (radiologiya, laboratoriya, operatsiya zallari) bilan to'g'ridan-to'g'ri diagnostik aloqa",
            ]
          : isRu
          ? [
              "Подписание соглашения о конфиденциальности (NDA) и предварительный аудит показателей",
              "Оценка материальных и нематериальных активов по признанным стандартам (BÄK / IDW)",
              "Юридическое структурирование договора купли-продажи с согласованием в KV Nordrhein",
              "Бесшовная передача базы пациентов с соблюдением требований врачебной тайны (§ 203 StGB)",
              "Торжественный запуск обновленного праксиса в составе сети NabiOta®",
            ]
          : isEn
          ? [
              "Execution of strict Non-Disclosure Agreement (NDA) and confidential operational assessment",
              "Financial and operational appraisal using recognized medical chamber guidelines (BÄK / IDW S1)",
              "Legally certified contract drafting in direct coordination with the regional KV licensing board",
              "Compliant patient file succession under strict medical secrecy guidelines (§ 203 StGB)",
              "Seamless relaunch of the modernized practice within the NabiOta® clinical brand",
            ]
          : isTr
          ? [
              "Gizlilik anlaşmasının (NDA) imzalanması ve bağlayıcı olmayan ilk değerlendirme",
              "Federal Tabipler Birliği (BÄK) kurallarına göre muayenehane değerinin tespiti",
              "Devir sözleşmelerinin hukuki olarak hazırlanması ve KV ruhsat sürecine eşlik edilmesi",
              "Hasta kayıtlarının veri koruma mevzuatına (§ 203 StGB) uygun iki dolaplı modelle devri",
              "Merkezi holding altyapısına sorunsuz geçiş ve kurumsal entegrasyon",
            ]
          : isAr
          ? [
              "توقيع اتفاقية السرية التامة (NDA) وجلسة مشاورات أولية سرية",
              "تقييم قيمة العيادة وفقاً للإرشادات المعتمدة من نقابة الأطباء الفيدرالية (BÄK)",
              "صياغة عقود الاستحواذ المعتمدة قانونياً ومرافقة إجراءات ترخيص KV الرسمية",
              "نقل سجلات المرضى وفق ضوابط السرية الطبية وقوانين حماية البيانات (§ 203 StGB)",
              "الانتقال السلس والاندماج الكامل في البنية التحتية المركزية للمجموعة",
            ]
          : [
              "Abschluss einer Vertraulichkeitsvereinbarung (NDA) und unverbindliches Erstgespräch",
              "Ermittlung des Praxiswertes nach anerkannten Richtlinien der Bundesärztekammer (BÄK)",
              "Rechtssichere Ausarbeitung der Übernahmeverträge und Begleitung des KV-Zulassungsverfahrens",
              "Zwei-Schrank-Modell zur datenschutzkonformen Übergabe der Patientenkartei (§ 203 StGB)",
              "Reibungsloser Übergang und Integration in die zentrale Holding-Infrastruktur",
            ],
        technicalTitle: isUz
          ? "Qonunchilik kafolatlari"
          : isRu ? "Правовая гарантия" : isEn ? "Statutory Compliance" : isTr ? "Yasal Güvence" : isAr ? "الضمان والامتثال القانوني" : "Rechtliche Sicherheit",
        technicalText: isUz
          ? "Vorislik modellari SGB V ning 95-moddasi (shartnoma shifokorlik o'rnini MVZ ga topshirish) va Berufsordnung für Ärzte me'yorlariga qat'iy muvofiq tarzda amalga oshiriladi. Shifokorning terapevtik mustaqilligi va shifokor siri (§ 203 StGB) xolding aralashuvidan to'liq himoyalangan."
          : isRu
          ? "Все сделки по слиянию и передаче практик осуществляются в строгом соответствии с § 95 SGB V, Федеральным врачебным положением (BÄO) и профессиональным кодексом палаты врачей Северного Рейна (ÄkNo)."
          : isEn
          ? "All practice integration transactions adhere strictly to § 95 SGB V (Statutory Health Insurance Code), the Federal Medical Code (BÄO), and North Rhine Medical Chamber regulations."
          : isTr
          ? "Tüm devir ve MVZ entegrasyon işlemleri; § 95 SGB V, Federal Hekimler Yönetmeliği (BÄO) ve Kuzey Ren Tabipler Odası meslek kurallarına tam uyum içinde gerçekleştirilir."
          : isAr
          ? "تتم كافة عمليات الاستحواذ والاندماج في مراكز MVZ بما يتوافق تماماً مع المادة § 95 SGB V والنظام الطبي الفيدرالي (BÄO) ولوائح نقابة أطباء شمال الراين."
          : "Die Übernahme und MVZ-Eingliederung erfolgt streng nach den Vorgaben des § 95 SGB V, der Bundesärzteordnung (BÄO) sowie den berufsrechtlichen Statuten der Ärztekammer Nordrhein.",
        ctaButtonText: isUz
          ? "Maxfiy suhbatni rejalashtirish"
          : isRu ? "Запросить конфиденциальный диалог" : isEn ? "Request Confidential Dialogue" : isTr ? "Gizli İlk Görüşme Talep Edin" : isAr ? "طلب مشاورات أولية سرية" : "Vertrauliches Erstgespräch vereinbaren",
      },
    },
    {
      id: "kliniken-krankenhaeuser",
      tag: isUz
        ? "KLINIKALAR VA SHIFOJONALAR UCHUN"
        : isRu ? "ДЛЯ КЛИНИК & СТАЦИОНАРОВ" : isEn ? "HOSPITALS & CLINICS" : isTr ? "KLİNİKLER VE HASTANE AĞLARI İÇİN" : isAr ? "للمستشفيات وشبكات الرعاية السريرية" : "FÜR KLINIKEN & HOSPITAL-NETZWERKE",
      image: "/images/partners/artium.webp",
      iconType: "hospital",
      title: isUz
        ? "Klinika hamkorliklari va sektorlararo uzluksiz yordam"
        : isRu
        ? "Межсекторальное партнерство с клиниками (§ 115b SGB V / AOP)"
        : isEn
        ? "Cross-Sector Hospital Partnerships (§ 115b SGB V / AOP)"
        : isTr
        ? "Sektörler Arası Klinik İş Birlikleri (§ 115b SGB V / AOP)"
        : isAr
        ? "التحالفات السريرية المشتركة للمستشفيات (§ 115b SGB V / AOP)"
        : "Sektorenübergreifende Klinikallianzen (§ 115b SGB V / AOP)",
      shortDesc: isUz
        ? "Statsionar shifoxonalar bilan strategik al'yanslar: operatsiyadan oldingi ambulator tayyorgarlik va statsionardan keyingi reabilitatsiya."
        : isRu
        ? "Разгрузка стационарных отделений: амбулаторные операции, непрерывная ранняя реабилитация и патронажный уход на дому."
        : isEn
        ? "Inpatient relief: outpatient surgical suites, continuous rehabilitation transitions, and home care discharge pathways."
        : isTr
        ? "Yataklı servislerin yükünü hafifletme: ayakta cerrahi operasyonlar, kesintisiz ayakta rehabilitasyon ve evde bakım geçişi."
        : isAr
        ? "تخفيف العبء عن أجنحة التنويم: جراحات اليوم الواحد، مسارات تأهيل مستمرة ورعاية منزلية فورية."
        : "Entlastung von Bettenstationen durch ambulantes Operieren, lückenlose ambulante Reha-Ketten und HomeCare-Überleitung.",
      modal: {
        title: isUz
          ? "Klinika hamkorliklari va sektorlararo uzluksiz yordam"
          : isRu
          ? "Межсекторальное партнерство со стационарными клиниками"
          : isEn
          ? "Cross-Sector Clinical Alliances for Hospitals"
          : isTr
          ? "Hastaneler İçin Sektörler Arası Klinik İş Birlikleri"
          : isAr
          ? "شراكات سريرية متكاملة عبر القطاعات للمستشفيات"
          : "Sektorenübergreifende Kooperationen für Krankenhäuser & Kliniken",
        subtitle: isUz
          ? "Statsionar shifoxonalar bilan strategik al'yanslar: operatsiyadan oldingi ambulator tayyorgarlik va operatsiyadan keyingi reabilitatsiya"
          : isRu
          ? "Реализация реформы стационаров: амбулаторизация (§ 115b SGB V), до- и послебольничная реабилитация"
          : isEn
          ? "Adapting to hospital reforms: outpatient surgery expansion, pre/post-acute rehab and discharge care"
          : isTr
          ? "§ 115b SGB V uyarınca ayakta tedaviye geçiş, yatarak tedavi sonrası takip ve kesintisiz taburculuk yönetimi"
          : isAr
          ? "التكيف مع إصلاحات المستشفيات: جراحة اليوم الواحد (§ 115b SGB V)، والتأهيل والمتابعة بعد الخروج"
          : "Ambulantisierung nach § 115b SGB V, poststationäre Versorgung und lückenloses Entlassmanagement",
        description: isUz
          ? "Biz Germaniya shifoxonalari va klinik markazlari bilan sektorlararo hamkorlik shartnomalarini tuzamiz. Xoldingning ambulator MVZ tarmog'i bemorlarni rejali operatsiyalarga to'liq tekshiruvdan o'tkazib tayyorlaydi, klinika esa statsionar davolash yakunlangach, bemorni bizning reabilitatsiya va uyda parvarishlash tizimimizga topshiradi."
          : isRu
          ? "В условиях масштабной реформы больничной системы Германии клиникам необходимы надежные амбулаторные партнеры. Холдинг NabiOta® выступает стратегическим интегратором: мы принимаем пациентов на амбулаторные операции (AOP), организуем курсы ранней физиотерапии в лечебном бассейне 32°C и обеспечиваем профессиональный уход на дому (HomeCare GmbH) сразу после выписки."
          : isEn
          ? "In the wake of Germany's hospital reform, acute care hospitals require certified outpatient integration partners. The NabiOta® Group acts as a seamless extension: managing outpatient surgeries in cleanroom theaters (DIN 1946-4), initiating targeted physical rehabilitation with 32°C aquatic therapy, and deploying specialized home care nurses upon discharge."
          : isTr
          ? "Almanya'daki hastane reformu, yataklı ve ayakta tedavi sektörleri arasında yakın entegrasyon gerektirir. Entegre bir sağlık grubu olarak NabiOta, ortak hastanelerin yükünü hafifletir: En modern temiz oda ameliyathanelerinde § 115b SGB V kapsamında ayakta cerrahi operasyonları üstleniyor, doğrudan ayakta takip rehabilitasyonu (AHB) sağlıyor ve HomeCare hemşirelik servisimizle kesintisiz taburculuk yönetimi garanti ediyoruz."
          : isAr
          ? "تتطلب إصلاحات المستشفيات في ألمانيا تكاملاً وثيقاً بين القطاعين الداخلي والخارجي. وبصفتها شبكة رعاية صحية متكاملة، تخفف NabiOta العبء عن المستشفيات الشريكة: نتولى جراحات اليوم الواحد بموجب § 115b SGB V في غرف عمليات نظيفة متطورة (DIN 1946-4)، ونضمن التأهيل الطبي المباشر بعد العمليات، وندير الخروج برعاية تمريضية منزلية متخصصة."
          : "Die Krankenhausreform erfordert eine enge Verzahnung zwischen stationärem und ambulantem Sektor. Als integrierter Gesundheitsverbund entlastet NabiOta Partnerkliniken: Wir übernehmen ambulante Operationen nach § 115b SGB V in modernsten Reinraum-OPs, sichern eine unmittelbare ambulante Anschlussrehabilitation (AHB) und garantieren ein lückenloses Entlassmanagement über unseren HomeCare-Pflegedienst.",
        specificationsTitle: isUz
          ? "Klinik integratsiya sohalari"
          : isRu ? "Форматы сотрудничества" : isEn ? "Cooperation Domains" : isTr ? "Hastanelerle İş Birliği Alanları" : isAr ? "مجالات التعاون مع المستشفيات" : "Kooperationsfelder mit Kliniken",
        specifications: isUz
          ? [
            "§ 115b SGB V bo'yicha ambulator operatsiyalar va operatsiyadan keyingi bir kunlik monitoring",
            "§ 140a SGB V bo'yicha integratsiyalashgan tibbiy yordam shartnomalari (Integrierte Versorgung)",
            "Shifoxonadan chiqarilgandan so'ng uzluksiz parvarish (Entlassmanagement nach § 39 Abs. 1a SGB V)",
            "Kardiologik, ortopedik va nevrologik bemorlarni ambulator reabilitatsiyaga to'g'ridan-to'g'ri o'tkazish",
            "Klinika mutaxassislari bilan qo'shma konsiliumlar va telemeditsina kanallari",
            ]
          : isRu
          ? [
              "Проведение амбулаторных хирургических вмешательств по каталогу AOP (§ 115b SGB V)",
              "Прямой перевод пациентов в амбулаторный реабилитационный центр (Physio, Ergo, Logo, MTT)",
              "Квалифицированный домашний патронаж и сертифицированное ICW лечение ран после выписки",
              "Больничное лекарственное обеспечение и индивидуальное блистерирование (§ 14 ApoG)",
              "Срочный радиологический аудит и телерадиологические дежурства на базе 3T MRT / CT",
              "Предоставление временного врачебного персонала через NabiOta Medical Recruitment Services",
            ]
          : isEn
          ? [
              "Execution of cataloged outpatient procedures under § 115b SGB V in certified surgical cleanrooms",
              "Direct patient transfer into specialized outpatient rehabilitation (physiotherapy, hydrotherapy, MTT)",
              "Post-discharge HomeCare nursing and certified ICW wound management directly at patients' homes",
              "Hospital pharmacy drug supply and individual automated blister packaging under § 14 ApoG",
              "Teleradiology emergency reading and off-site cross-sectional imaging audits (3T MRI / CT)",
              "Temporary healthcare staffing support via NabiOta Medical Recruitment Services GmbH",
            ]
          : isTr
          ? [
              "Ayakta cerrahi müdahalelerin § 115b SGB V uyarınca modern temiz oda ameliyathanelerine aktarılması",
              "Ameliyat sonrası hastaların doğrudan ayakta rehabilitasyon ve fizyoterapiye sorunsuz kabulü",
              "NabiOta HomeCare tarafından uzman evde hasta bakımı ve sertifikalı ICW yara tedavisi",
              "Hastanelerin ilaç tedariği ve sitostatik hazırlama desteği (§ 14 ApoG)",
              "3T MR ve BT için teleradyolojik raporlama desteği ve kapasite tamamlama",
              "Kritik personel yetersizliklerinde esnek hekim ve hemşirelik iş gücü temini",
            ]
          : isAr
          ? [
              "نقل الجراحات الصغرى والمتوسطة إلى مراكز عمليات نظيفة متطورة وفق المادة § 115b SGB V",
              "استقبال فوري وسلس للمرضى بعد الجراحة في مراكز التأهيل والعلاج الطبيعي التابعة للمجموعة",
              "رعاية تمريضية منزلية متخصصة وعلاج معتمد للجروح (ICW) عبر NabiOta HomeCare",
              "إمداد صيدلاني للمستشفيات وتحضير الأدوية التخصصية بموجب المادة § 14 ApoG",
              "دعم تخصصي في قراءة الأشعة عن بُعد وتغطية الفحوصات المقطعية والرنين المغناطيسي 3T",
              "توفير كوادر طبية وتمريضية مؤهلة لتغطية النقص الطارئ في الكوادر",
            ]
          : [
              "Verlagerung ambulanter Eingriffe in moderne Reinraum-OP-Zentren nach § 115b SGB V",
              "Nahtlose Übernahme postoperativer Patienten in die ambulante Rehabilitation & Physiotherapie",
              "Fachgerechte häusliche Krankenpflege und ICW-Wundversorgung durch NabiOta HomeCare",
              "Krankenhausversorgung mit Arzneimitteln und Zytostatika-Herstellung (§ 14 ApoG)",
              "Teleradiologische Befundungsunterstützung und Kapazitätsübernahme bei 3T MRT und CT",
              "Flexible Personalgestellung ärztlicher und pflegerischer Fachkräfte in Engpasssituationen",
            ],
        scopeTitle: isUz
          ? "Klinika hamkorlari uchun ustunliklar"
          : isRu ? "Экономический эффект" : isEn ? "Clinical & Economic Impact" : isTr ? "Klinik ve Ekonomik Faydalar" : isAr ? "الفوائد السريرية والاقتصادية" : "Klinische & ökonomische Vorteile",
        scopeItems: isUz
          ? [
            "Statsionar o'rinlarining yuklamasini optimallashtirish va bemorlar oqimining barqaror ta'minlanishi",
            "DRG stavkalari bo'yicha davolanish muddatini qisqartirish va jarima xatarlarini (MDK auditi) kamaytirish",
            "NabiOta Home Care GmbH orqali bemorlarni uy sharoitida professional patronaj bilan ta'minlash",
            "Sanitätshaus GmbH orqali statsionardan chiqqan bemorlarni zudlik bilan ortopedik vositalar bilan ta'minlash",
            "Bemorlarning davolanish natijalaridan qoniqish darajasining oshishi",
            ]
          : isRu
          ? [
              "Сокращение средней продолжительности пребывания на койке без потери качества лечения",
              "Снижение штрафных санкций больничных касс за превышение сроков госпитализации",
              "Высокая удовлетворенность пациентов за счет непрерывной цепочки наблюдения",
              "Оптимизация использования собственных операционных залов больницы под сложные вмешательства",
              "Совместное участие в интегрированных контрактах оказания помощи (§ 140a SGB V)",
            ]
          : isEn
          ? [
              "Significant reduction in average length of stay (ALOS) while maintaining clinical excellence",
              "Minimization of health insurance audit penalties for unnecessary inpatient hospitalization",
              "Superior patient satisfaction scores through an unbroken chain of post-discharge recovery",
              "Freeing hospital high-dependency theaters for complex tertiary inpatient cases",
              "Joint participation in integrated healthcare delivery contracts (§ 140a SGB V)",
            ]
          : isTr
          ? [
              "Tedavi kalitesinden ödün vermeden yataklı servislerde ortalama yatış süresinin belirgin kısalması",
              "Doğru ayakta tedavi yönlendirmesiyle sağlık sigortası denetim (MD) kesintilerinin önlenmesi",
              "Müdahale öncesi ve sonrasında tek muhatap sayesinde en üst düzeyde hasta memnuniyeti",
              "Hastane içi ameliyathanelerin yüksek karmaşıklıktaki yataklı vakalara odaklanabilmesi",
              "§ 140a SGB V kapsamında entegre bakım ve seçici sözleşmelere ortak katılım",
            ]
          : isAr
          ? [
              "تقليص ملموس في متوسط مدة إقامة المرضى في الأجنحة مع الحفاظ على أعلى معايير الجودة",
              "تجنب غرامات واقتطاعات تدقيق التأمين الصحي عبر توجيه الحالات للعيادات الخارجية بشكل ملائم",
              "أعلى درجات رضا المرضى بفضل وجود جهة اتصال متناسقة ومستمرة قبل الجراحة وبعدها",
              "تفريغ غرف عمليات المستشفى للحالات الجراحية الكبرى شديدة التعقيد",
              "المشاركة في عقود الرعاية المتكاملة والانتقائية بموجب المادة § 140a SGB V",
            ]
          : [
              "Spürbare Verweildauerverkürzung auf Bettenstationen bei durchgängiger Versorgungsqualität",
              "Vermeidung von MD-Prüfungsabschlägen durch sachgerechte Ambulantisierung",
              "Höchste Patientenzufriedenheit durch einheitliche Ansprechpartner vor und nach dem Eingriff",
              "Fokussierung der internen Klinik-OP-Kapazitäten auf hochkomplexe stationäre Fälle",
              "Teilnahme an Selektivverträgen und integrierter Versorgung nach § 140a SGB V",
            ],
        technicalTitle: isUz
          ? "Standartlar va huquq"
          : isRu ? "Нормативная база" : isEn ? "Legal Framework" : isTr ? "Yasal Dayanaklar" : isAr ? "الأطر التشريعية المنظمة" : "Rechtsgrundlagen",
        technicalText: isUz
          ? "Hamkorlik Germaniya shifoxonalar qonunchiligi (KHG), SGB V direktivalari va shifoxonadan chiqarish menejmenti bo'yicha G-BA mezonlariga to'liq mos keladi. Bemor ma'lumotlari xavfsiz telematika tarmog'i (KIM / TI) orqali almashinadi."
          : isRu
          ? "Сотрудничество базируется на нормах § 115b SGB V (амбулаторные операции), § 39 Abs. 1a SGB V (менеджмент выписки) и законе о реформе стационаров (Krankenhausversorgungsverbesserungsgesetz - KHVVG)."
          : isEn
          ? "Clinical partnerships operate under § 115b SGB V (Outpatient surgery), § 39(1a) SGB V (Discharge management), and the Hospital Care Improvement Act (KHVVG)."
          : isTr
          ? "İş birliği; § 115b SGB V (AOP sözleşmesi), § 39 Fıkra 1a SGB V (taburculuk yönetimi) ve Hastane Bakımını İyileştirme Yasası (KHVVG) esaslarına dayanmaktadır."
          : isAr
          ? "يرتكز التعاون على المادة § 115b SGB V (جراحات اليوم الواحد) والمادة § 39(1a) SGB V (إدارة الخروج) وقانون تحسين رعاية المستشفيات (KHVVG)."
          : "Die Zusammenarbeit stützt sich auf § 115b SGB V (AOP-Vertrag), § 39 Abs. 1a SGB V (Entlassmanagement) sowie die Leitplanken des Krankenhausversorgungsverbesserungsgesetzes (KHVVG).",
        ctaButtonText: isUz
          ? "Klinika hamkorligini muhokama qilish"
          : isRu ? "Обсудить клиническое партнерство" : isEn ? "Inquire Hospital Partnership" : isTr ? "Klinik İş Birliği Talep Edin" : isAr ? "طلب استشارة شراكة سريرية" : "Klinikkooperation anfragen",
      },
    },
    {
      id: "investoren-capital",
      tag: isUz
        ? "INVESTORLAR VA FAMILY OFFICES UCHUN"
        : isRu ? "ДЛЯ ИНВЕСТОРОВ & FAMILY OFFICES" : isEn ? "HEALTHCARE INVESTORS" : isTr ? "YATIRIMCILAR VE FAMILY OFFICES İÇİN" : isAr ? "للمستثمرين والمكاتب العائلية" : "FÜR INVESTOREN & FAMILY OFFICES",
      image: "/images/beratung/project-mvz.webp",
      iconType: "investor",
      title: isUz
        ? "Sog'liqni saqlash sohasidagi investitsiyalar va tibbiy ko'chmas mulk"
        : isRu
        ? "Инвестиции в медицинскую недвижимость & 2-фазная модель"
        : isEn
        ? "Healthcare Real Estate Investments & 2-Phase Equity Model"
        : isTr
        ? "Sağlık Gayrimenkulleri ve 2 Aşamalı Ortaklık Modeli"
        : isAr
        ? "استثمارات العقارات الصحية ونموذج المساهمة ثنائي المراحل"
        : "Gesundheitsimmobilien & 2-Phasen-Beteiligungsmodell",
      shortDesc: isUz
        ? "Demografik o'sishga tayangan sog'liqni saqlash aktivlariga uzoq muddatli barqaror investitsiyalar: zamonaviy MVZ, klinikalar va tibbiy kampuslar."
        : isRu
        ? "Стабильные инвестиции в специализированную недвижимость здравоохранения: долгосрочные договоры аренды, стандарты ESG и защита капитала."
        : isEn
        ? "Resilient healthcare real estate investments: long-term commercial leases, ESG compliance, and structural capital preservation."
        : isTr
        ? "Yüksek standartlı sağlık gayrimenkullerinin alımı ve geliştirilmesi, uzun vadeli ticari kira sözleşmeleri, ESG standartları ve sağlam getiriler."
        : isAr
        ? "تطوير عقارات صحية متقدمة، عقود إيجار تجارية طويلة الأجل، معايير ESG وعوائد استثمارية متينة."
        : "Kauf und Entwicklung hochmoderner Gesundheitsimmobilien, langfristige Gewerbemietverträge, ESG-Standards und solide Renditen.",
      modal: {
        title: isUz
          ? "Sog'liqni saqlash sohasidagi investitsiyalar va tibbiy ko'chmas mulk"
          : isRu
          ? "Инвестиции в медицинскую недвижимость & 2-фазная модель холдинга"
          : isEn
          ? "Healthcare Real Estate Investment & 2-Phase Holding Model"
          : isTr
          ? "Sağlık Gayrimenkulleri ve 2 Aşamalı Ortaklık Modeli"
          : isAr
          ? "الاستثمار في العقارات الصحية ونموذج المجموعة ذو المرحلتين"
          : "Gesundheitsimmobilien & 2-Phasen-Beteiligungsmodell",
        subtitle: isUz
          ? "Demografik o'sishga tayangan sog'liqni saqlash aktivlariga uzoq muddatli barqaror investitsiyalar"
          : isRu
          ? "Прозрачное разделение недвижимости и медицинской деятельности с защитой прав инвесторов"
          : isEn
          ? "Clear structural separation between physical real estate assets and medical operations"
          : isTr
          ? "Mülk sahipliği ile tıbbi hizmet sunumu arasında yasal güvenceli net ayrım"
          : isAr
          ? "فصل هيكلي وقانوني واضح بين ملكية الأصول العقارية والتشغيل الطبي السريري"
          : "Rechtssichere Entflechtung von Immobilieneigentum und ärztlicher Leistungserbringung",
        description: isUz
          ? "NabiOta® Health Group Germaniyaning sog'liqni saqlash bozorida barqaror va xatarlardan himoyalangan loyihalarni amalga oshiradi. Biz xususiy investorlar va institutsional fondlarga zamonaviy tibbiy binolar, ko'p tarmoqli klinik kampuslar va ixtisoslashtirilgan parvarish uylarini rivojlantirishda ishonchli hamkorlikni taklif etamiz."
          : isRu
          ? "Рынок здравоохранения Германии демонстрирует высокую устойчивость к кризисам и инфляции. Холдинг NabiOta® (HRB 16787, уставный капитал 50.000 EUR) предлагает институциональным инвесторам и Family Offices участие в девелопменте медицинских центров, операционных блоков и объектов персонала через NabiOta Real Estate GmbH с долгосрочными индексированными договорами аренды (15-20 лет)."
          : isEn
          ? "German healthcare real estate offers defensive growth resilient to macroeconomic turbulence. NabiOta® Health Group Germany GmbH (HRB 16787, EUR 50,000 capital) invites institutional partners to co-invest in ambulatory surgery centers, medical centers, and healthcare quarters via NabiOta Real Estate GmbH, backed by indexed long-term leases (15-20 years)."
          : isTr
          ? "Sağlık sektörü, Avrupa'nın krizlere en dayanıklı yatırım sınıflarından biridir. NabiOta Real Estate GmbH aracılığıyla ortaklar; birinci sınıf sağlık merkezlerine, ayakta cerrahi kliniklerine ve hekim binalarına yatırım yapar. Güçlü mali yapıya sahip tıbbi işletme şirketleriyle yapılan uzun vadeli, endeksli ticari kira sözleşmeleri (15-20 yıl) öngörülebilir nakit akışı ve değer koruması sağlar."
          : isAr
          ? "يعد قطاع الرعاية الصحية من أكثر فئات الأصول مقاومة للأزمات والتقلبات الاقتصادية في أوروبا. عبر شركة NabiOta Real Estate GmbH، يستثمر الشركاء في مراكز طبية متميزة وعيادات جراحية ومبانٍ تخصصية. وتضمن عقود الإيجار التجارية طويلة الأجل والمرتبطة بالتضخم (15 إلى 20 عاماً) تدفقات نقدية مستقرة ومحمية."
          : "Der Gesundheitssektor ist eine der krisenresistentesten Anlageklassen Europas. Über die NabiOta Real Estate GmbH investieren Partner in erstklassige Gesundheitszentren, ambulante OP-Kliniken und Ärztehäuser. Langfristige, indexierte Gewerbemietverträge (15 bis 20 Jahre) mit bonitätsstarken medizinischen Betreibergesellschaften garantieren planbare Cashflows und Werterhalt.",
        specificationsTitle: isUz
          ? "Investitsion aktivlar"
          : isRu ? "Параметры инвестиций" : isEn ? "Investment Metrics" : isTr ? "Yatırım Profili ve Parametreleri" : isAr ? "ملف ومعايير الاستثمار" : "Investitionsprofil & Parameter",
        specifications: isUz
          ? [
            "Ixtisoslashtirilgan ob'ektlar: ambulator jarrohlik zallari (DIN 1946-4) va radiologiya markazlari (3T MRT)",
            "Ko'p tarmoqli tibbiyot markazlari (MVZ) va poliklinika majmualari",
            "Uzoq muddatli parvarish va kunduzgi statsionar rezidentsiyalari (WTG NRW)",
            "Tibbiyot xodimlari va shifokorlar uchun turar joy binolari (Staff Housing)",
            "Energiya tejamkor, barqaror ESG standartlariga (KfW 40) javob beruvchi tibbiy infratuzilma",
            ]
          : isRu
          ? [
              "Специализированные объекты: амбулаторные центры (MVZ), хирургические комплексы, радиология",
              "Долгосрочные индексированные договоры аренды (Triple-Net / Double-Net) сроком 15-20 лет",
              "Полное соответствие стандартам зеленого строительства и ESG (энергоэффективность KfW 40)",
              "Стабильная доходность за счет гарантированного спроса на медицинские услуги населения",
              "Четкое юридическое разделение владения зданиями и врачебных лицензий",
              "Профессиональное техническое и медицинское управление объектом (Medical Facility Management)",
            ]
          : isEn
          ? [
              "Asset class: ambulatory surgery centers, medical office buildings (MVZ), and imaging clinics",
              "Long-term inflation-indexed commercial lease agreements (Triple-Net / Double-Net) of 15-20 years",
              "Full compliance with sustainable building criteria and ESG governance (KfW 40 efficiency)",
              "Defensive yields underpinned by non-cyclical, demographic-driven healthcare demand",
              "Strict statutory demarcation between property ownership and clinical licensing",
              "End-to-end specialized technical and medical facility management by NabiOta",
            ]
          : isTr
          ? [
              "Hekim merkezleri, ayakta ameliyathaneler, tanı enstitüleri ve rehabilitasyon kliniklerine odaklanma",
              "15 ila 20 yıl vadeli uzun süreli, endeksli kira sözleşmeleri (Triple-Net / Double-Net)",
              "İleri düzey ESG sürdürülebilirlik kriterleri ve KfW 40 enerji verimliliği standartları",
              "Demografik olarak güvence altına alınmış talep sayesinde konjonktürden bağımsız savunmacı getiriler",
              "Gayrimenkul şirketi ile tıbbi MVZ şirketi arasında kesin yasal ayrım",
              "Holding tarafından sağlanan merkezi teknik ve tıbbi tesis yönetimi",
            ]
          : isAr
          ? [
              "التركيز على مجمعات الأطباء، ومراكز جراحة اليوم الواحد، ومراكز التشخيص الإشعاعي والتأهيل",
              "عقود إيجار تجارية طويلة الأجل مرتبطة بمؤشر التضخم (Triple-Net / Double-Net) لمدة 15 إلى 20 عاماً",
              "استيفاء معايير الاستدامة البيئية والاجتماعية (ESG) وكفاءة الطاقة العالية بموجب KfW 40",
              "عوائد دفاعية غير مرتبطة بتقلبات السوق مدعومة بالطلب الديمغرافي المتزايد على الصحة",
              "فصل قانوني واضح بين الكيان المالك للعقار والشركة الطبية المشغلة لمركز MVZ",
              "إدارة فنية وهندسية متخصصة للأصول والمرافق الطبية من قبل إدارة المجموعة",
            ]
          : [
              "Fokus auf Ärztehäuser, ambulante OP-Zentren, diagnostische Institute und Reha-Kliniken",
              "Langfristige, indexierte Mietverträge (Triple-Net / Double-Net) mit 15 bis 20 Jahren Laufzeit",
              "Erfüllung anspruchsvoller ESG-Nachhaltigkeitskriterien und KfW-40-Effizienzstandards",
              "Defensive, konjunkturunabhängige Erträge durch demografisch gesicherte Nachfrage",
              "Rechtssichere Entflechtung zwischen Immobilienträger und ärztlicher MVZ-Gesellschaft",
              "Zentrales technisches und medizintechnisches Gebäudemanagement durch die Holding",
            ],
        scopeTitle: isUz
          ? "Xoldingning kengayish bosqichlari"
          : isRu ? "Фазы масштабирования холдинга" : isEn ? "Holding Scaling Architecture" : isTr ? "Holdingin Aşama Yapısı" : isAr ? "هيكل مراحل التوسع المؤسسي" : "Phasenstruktur des Holdings",
        scopeItems: isUz
          ? [
            "1-bosqich: Shifokor ishtirokida MVZ tarmog'ini ta'sis etish va birlamchi bo'g'inni mustahkamlash",
            "2-bosqich: NabiOta Clinics Germany GmbH statsionar klinikasini litsenziyalash va kasalxona maqomini olish",
            "Operatorlik va bino mulkdorligi o'rtasidagi uzoq muddatli (15-25 yillik) indeksatsiyalangan ijara shartnomalari",
            "Xolding sho'ba korxonalarining to'liq barqaror rentabelligi va o'zaro sinergiyasi",
            "Kvartallik batafsil moliyaviy hisobotlar va mustaqil auditorlik tekshiruvi",
            ]
          : isRu
          ? [
              "Фаза 1: Учреждение сети MVZ под врачебным руководством доктора Рахимова-Фишера (§ 95 SGB V)",
              "Управляющая компания холдинга предоставляет централизованный сервис (биллинг, IT, маркетинг, HR)",
              "Фаза 2: Основание больничной компании (NabiOta Clinics Germany GmbH по § 30 GewO)",
              "После получения лицензии больницы (§ 108/109 SGB V) холдинг получает право прямого участия в MVZ",
              "Открытая архитектура для масштабирования платформы по всей земле Северный Рейн-Вестфалия",
            ]
          : isEn
          ? [
              "Phase 1: Establishment of outpatient MVZ centers under statutory physician entitlement of Dr. Fischer-Rahimov",
              "Holding management company delivers centralized management services via service contracts",
              "Phase 2: Establishment of inpatient clinic operating company (NabiOta Clinics Germany GmbH § 30 GewO)",
              "Upon full hospital licensure (§ 108/109 SGB V), holding directly acquires majority MVZ shares",
              "Scalable buy-and-build platform framework ready for expansion across North Rhine-Westphalia",
            ]
          : isTr
          ? [
              "Aşama 1: § 95 SGB V uyarınca hekim ayrıcalığı temelinde MVZ işletme şirketlerinin kuruluşu",
              "Holding; merkezi yönetim, BT, satın alma ve faturalandırma hizmetleri sunar",
              "Aşama 2: Hastane işletme şirketinin kurulması (NabiOta Clinics Germany GmbH, § 30 GewO)",
              "Hastane ruhsatının alınmasıyla birlikte MVZ'lerin doğrudan kurulması ve edinilmesi hakkı doğar",
              "Kuzey Ren-Vestfalya genelinde bölgesel genişleme için ölçeklenebilir platform",
            ]
          : isAr
          ? [
              "المرحلة 1: تأسيس شركات تشغيل مراكز MVZ استناداً إلى الامتياز الطبي بموجب المادة § 95 SGB V",
              "تقدم الشركة القابضة خدمات مركزية للإدارة، وتقنية المعلومات، والمشتريات، والفواتير",
              "المرحلة 2: تأسيس الشركة المشغلة للمستشفى (NabiOta Clinics Germany GmbH بموجب § 30 GewO)",
              "مع الحصول على رخصة المستشفى الرسمية، تكتسب الشركة حق التملك المباشر لمراكز MVZ",
              "منصة نمو مؤسسية جاهزة وقابلة للتوسع والتكرار عبر ولاية شمال الراين-وستفاليا",
            ]
          : [
              "Phase 1: Gründung der MVZ-Betreibergesellschaften auf Basis des ärztlichen Privilegs nach § 95 SGB V",
              "Holding erbringt zentrale Management-, IT-, Einkaufs- und Abrechnungsdienstleistungen",
              "Phase 2: Aufbau der Krankenhausträgergesellschaft (NabiOta Clinics Germany GmbH nach § 30 GewO)",
              "Mit Erhalt der Krankenhauskonzession entsteht die direkte Gründungs- und Erwerbsberechtigung für MVZ",
              "Skalierbare Plattform für den weiteren regionalen Rollout in Nordrhein-Westfalen",
            ],
        technicalTitle: isUz
          ? "Korporativ rekvizitlar"
          : isRu ? "Корпоративные реквизиты" : isEn ? "Corporate Registry" : isTr ? "Sicil ve Şirket Bilgileri" : isAr ? "البيانات المسجلة والشركة" : "Register- & Gesellschaftsdaten",
        technicalText: isUz
          ? "NabiOta® Health Group Germany GmbH Mönchengladbach shahar sudida (Amtsgericht) HRB 16787 raqami ostida ro'yxatga olingan. Ustav kapitali 50.000 EUR. Barcha investitsion modellar Germaniya korporativ va soliq qonunchiligiga qat'iy muvofiq tuziladi."
          : isRu
          ? "NabiOta® Health Group Germany GmbH зарегистрирована в торговом реестре участкового суда Мёнхенгладбаха (HRB 16787) с уставным капиталом 50.000 EUR. Юридический адрес: Aachener Straße 114, 41061 Mönchengladbach."
          : isEn
          ? "NabiOta® Health Group Germany GmbH is registered with the commercial register of Amtsgericht Mönchengladbach (HRB 16787) with a share capital of EUR 50,000. Headquarters: Aachener Straße 114, 41061 Mönchengladbach."
          : isTr
          ? "NabiOta® Health Group Germany GmbH, Mönchengladbach Sulh Mahkemesi HRB 16787 sicil numarasıyla kayıtlıdır. Esas sermaye: 50.000 EUR. Şirket adresi: Aachener Straße 114, 41061 Mönchengladbach."
          : isAr
          ? "مجموعة NabiOta® Health Group Germany GmbH مسجلة في السجل التجاري بمحكمة مونشنغلادباخ تحت رقم HRB 16787. رأس المال الأساسي: 50,000 يورو. العنوان التجاري: Aachener Straße 114, 41061 Mönchengladbach."
          : "NabiOta® Health Group Germany GmbH, HRB 16787 beim Amtsgericht Mönchengladbach. Stammkapital: 50.000 EUR. Geschäftsanschrift: Aachener Straße 114, 41061 Mönchengladbach.",
        ctaButtonText: isUz
          ? "Investitsiya memorandumini so'rash"
          : isRu ? "Запросить инвестиционный меморандум" : isEn ? "Request Investment Briefing" : isTr ? "Yatırım Bilgi Dosyasını İsteyin" : isAr ? "طلب مذكرة الاستثمار التمهيدية" : "Investment-Exposé anfordern",
      },
    },
    {
      id: "kommunen-landkreise",
      tag: isUz
        ? "MUNITSIPALLIKLAR VA KV UCHUN"
        : isRu ? "ДЛЯ МУНИЦИПАЛИТЕТОВ & KV" : isEn ? "MUNICIPALITIES & HEALTH BOARDS" : isTr ? "BELEDİYELER VE BÖLGE YÖNETİMLERİ İÇİN" : isAr ? "للبلديات والدوائر الحكومية الصحية" : "FÜR KOMMUNEN & LANDKREISE",
      image: "/images/areas/consulting.webp",
      iconType: "municipality",
      title: isUz
        ? "Mintaqaviy tibbiy infratuzilmani ta'minlash (IGZ)"
        : isRu
        ? "Обеспечение региональной медицинской инфраструктуры (IGZ)"
        : isEn
        ? "Regional Healthcare Infrastructure & Integrated Care (IGZ)"
        : isTr
        ? "Bölgesel Temel Sağlık Hizmetleri ve Sağlık Merkezleri (IGZ)"
        : isAr
        ? "الرعاية الصحية الإقليمية ومراكز الصحة المتكاملة (IGZ)"
        : "Regionale Grundversorgung & Gesundheitszentren (IGZ)",
      shortDesc: isUz
        ? "Kichik va o'rta shaharlarda fanlararo sog'liqni saqlash markazlarini (IGZ) barpo etish va birlamchi tibbiy yordamni saqlab qolish."
        : isRu
        ? "Создание междисциплинарных центров здоровья в малых и средних городах, устранение дефицита врачей и безбарьерная среда."
        : isEn
        ? "Establishing integrated healthcare centers in regional municipalities, closing physician deficits, and barrier-free care."
        : isTr
        ? "Şehir ve ilçelerde entegre sağlık merkezlerinin kurulması, hekim açığının giderilmesi ve engelsiz erişim."
        : isAr
        ? "إنشاء مراكز صحية متكاملة في المدن والمناطق، سد نقص الأطباء وتوفير بنية خالية من العوائق."
        : "Schaffung integrierter Gesundheitszentren in Städten und Landkreisen, Behebung ärztlicher Unterversorgung und Barrierefreiheit.",
      modal: {
        title: isUz
          ? "Mintaqaviy tibbiy yordamni ta'minlash va IGZ markazlari"
          : isRu
          ? "Обеспечение региональной медицинской помощи & Центры IGZ"
          : isEn
          ? "Regional Healthcare Security & Integrated Medical Centers"
          : isTr
          ? "Belediye Sağlık Girişimleri ve Entegre Sağlık Merkezleri (IGZ)"
          : isAr
          ? "مبادرات الرعاية البلدية ومراكز الصحة المتكاملة (IGZ)"
          : "Kommunale Versorgungsinitiativen & Integrierte Gesundheitszentren (IGZ)",
        subtitle: isUz
          ? "Tumanlar, munitsipalitetlar va KV bilan shifokorlar tanqisligiga qarshi kurashish bo'yicha hamkorlik"
          : isRu
          ? "Партнерство с городами, бургомистрами и KV для сохранения доступной медицины в регионах"
          : isEn
          ? "Public-private partnerships with cities and regional health authorities to secure clinical coverage"
          : isTr
          ? "Temel sağlık hizmetlerini güvence altına almak için şehirler, ilçeler ve Tabipler Birlikleri ile iş birliği"
          : isAr
          ? "التعاون مع المدن والبلديات وهيئات التأمين الصحي لضمان استدامة الرعاية الطبية الأساسية"
          : "Zusammenarbeit mit Städten, Landkreisen und Kassenärztlichen Vereinigungen zur Sicherung der Grundversorgung",
        description: isUz
          ? "Ko'plab mintaqalar amaliyotchi shifokorlarning nafaqaga chiqishi sababli tibbiy xizmat yetishmovchiligiga duch kelmoqda. NabiOta® mahalliy hokimiyatlar va KV bilan birgalikda integral sog'liqni saqlash markazlarini (Intersektorale Gesundheitszentren - IGZ) tashkil etadi va aholini uzluksiz shifokorlik yordami bilan ta'minlaydi."
          : isRu
          ? "Многие регионы сталкиваются с дефицитом врачей первичного звена и закрытием локальных практик. Холдинг NabiOta® сотрудничает с муниципалитетами и окружными властями для создания современных междисциплинарных медицинских центров (IGZ). Мы объединяем врачей общей практики, кардиологов, хирургов, диагностику, физиотерапию и аптеку в едином многофункциональном квартале."
          : isEn
          ? "Demographic shifts and physician retirements pose acute challenges to regional healthcare delivery. NabiOta® partners with municipal administrations and health boards to plan and operate Integrated Healthcare Centers (IGZ). Under one accessible roof, we co-locate primary care doctors, diagnostic radiology, rehabilitation facilities, and home care coordination."
          : isTr
          ? "Kırsal ve banliyö bölgelerinde baş gösteren yetersiz sağlık hizmeti riski yeni ve iş birliğine dayalı çözümler gerektirmektedir. NabiOta Grubu; Entegre Sağlık Merkezleri'nin (IGZ) planlanması ve hayata geçirilmesinde belediyeleri, ilçe yönetimlerini ve kalkınma ajanslarını destekler. Aile hekimliği, uzman poliklinikler, tanı, terapi ve bakımı tek bir çatı altında topluyoruz."
          : isAr
          ? "تتطلب تحديات التغطية الصحية في المناطق الريفية وشبه الحضرية نماذج تعاونية مبتكرة. تدعم مجموعة NabiOta البلديات وإدارات المدن في تخطيط وإنشاء مراكز الصحة المتكاملة (IGZ)، حيث نجمع بين الرعاية العامة والتخصصية والتشخيص والتأهيل والتمريض تحت سقف واحد متكامل."
          : "Die drohende Unterversorgung im ländlichen und suburbanen Raum erfordert neue, kooperative Lösungsmodelle. Die NabiOta-Gruppe unterstützt Kommunen, Landkreise und Wirtschaftsförderungen bei der Konzeption und Realisierung Integrierter Gesundheitszentren (IGZ). Wir bündeln haus- und fachärztliche Versorgung, Diagnostik, Therapie und Pflege unter einem Dach.",
        specificationsTitle: isUz
          ? "Munitsipal yechimlar"
          : isRu ? "Муниципальные решения" : isEn ? "Municipal Solutions" : isTr ? "Belediyeler İçin Çözüm Bileşenleri" : isAr ? "حلول متكاملة للبلديات" : "Lösungsbausteine für Kommunen",
        specifications: isUz
          ? [
            "Aholi ehtiyojlari va tibbiy qamrov zichligini tahlil qilish",
            "Birlamchi poliklinika, tor mutaxassislar va tez yordam punktlarini bitta binoda jamlash",
            "Keksa fuqarolar uchun kunduzgi parvarish va profilaktika xonalarini tashkil etish",
            "Teletibbiyot orqali yirik universitet klinikalari bilan doimiy masofaviy aloqa",
            "Yosh shifokorlarni munitsipalitetlarga jalb qilish uchun qulay shart-sharoitlar yaratish",
            ]
          : isRu
          ? [
              "Анализ потребностей населения и плотности покрытия врачебными участками",
              "Привлечение квалифицированных врачей и молодых специалистов на работу в регионе",
              "Проектирование и строительство безбарьерных медицинских центров по DIN 18040-1",
              "Интеграция амбулаторной помощи, аптеки, ортопедического салона и патронажа",
              "Организация мобильных медицинских шаттлов для маломобильных граждан преклонного возраста",
              "Совместное участие в программах региональных субсидий и инфраструктурных грантов",
            ]
          : isEn
          ? [
              "Comprehensive regional healthcare need assessments and demographic coverage analytics",
              "Recruitment and sustainable placement of certified physicians and allied health staff",
              "Architecture and turnkey delivery of barrier-free medical facilities adhering to DIN 18040-1",
              "Synergistic co-location of outpatient doctors, clinical pharmacy, medical supplies, and nursing",
              "Senior mobility support programs and patient transport coordination for rural districts",
              "Co-development within state regional development funds and municipal healthcare grants",
            ]
          : isTr
          ? [
              "KV bölgesel ihtiyaç planlarıyla yakın koordinasyon içinde ihtiyaç ve kapasite analizleri",
              "Hekim eksiği olan planlama alanları için nitelikli doktorların hedefli istihdamı ve yerleşimi",
              "DIN 18040-1 standardına uygun engelsiz sağlık merkezlerinin anahtar teslim inşası",
              "Uzman muayenehaneler, medikal malzeme merkezi, eczane ve ayakta bakımın tek çatı altında birleşimi",
              "Kırsal alandaki hareketi kısıtlı yaşlılar için hasta servis ve ulaşım hizmetlerinin geliştirilmesi",
              "Belediye hibe ve teşvik başvurularına danışmanlık ve rehberlik",
            ]
          : isAr
          ? [
              "تحليلات دقيقة للاحتياجات الصحية والتغطية الديمغرافية بالتنسيق مع خطط KV المعتمدة",
              "استقطاب وتوظيف مستدام للأطباء المؤهلين والكوادر الصحية للمناطق التي تعاني من نقص",
              "بناء وتجهيز مراكز طبية نموذجية خالية تماماً من العوائق وفق معيار DIN 18040-1",
              "تجميع العيادات التخصصية، ومستلزمات التأهيل، والصيدلية، والتمريض المنزلي في موقع واحد",
              "تطوير خدمات نقل ومساعدة لكبار السن ومحدودي الحركة في المناطق الإقليمية",
              "المرافقة والدعم في طلبات المنح الحكومية وتطوير البنية التحتية الصحية الإقليمية",
            ]
          : [
              "Bedarfs- und Versorgungsanalysen in enger Abstimmung mit den Bedarfsplänen der KV",
              "Gezielte Ansiedlung und Rekrutierung qualifizierter Ärzte für unterversorgte Planungsbereiche",
              "Schlüsselfertige Errichtung barrierefreier Ärzte- und Gesundheitszentren (DIN 18040-1)",
              "Bündelung von Facharztpraxen, Sanitätshaus, Apotheke und ambulanter Pflege an einem Standort",
              "Entwicklung von Fahrdienst- und Shuttleservices für immobilen Senioren im ländlichen Raum",
              "Begleitung kommunaler Förderanträge (z.B. Strukturfördermittel des Landes NRW)",
            ],
        scopeTitle: isUz
          ? "O'zaro hamkorlik formatlari"
          : isRu ? "Форматы взаимодействия" : isEn ? "Cooperation Modes" : isTr ? "İş Birliği Modelleri" : isAr ? "نماذج العمل والتعاون" : "Modelle der Zusammenarbeit",
        scopeItems: isUz
          ? [
            "Munitsipal konsessiya va davlat-xususiy sheriklik (PPP) modellari",
            "Shahar hokimiyatlari tomonidan ajratilgan binolarni zamonaviy tibbiy talablarga moslab rekonstruksiya qilish",
            "Klinika va praksis boshqaruvini xolding tomonidan to'liq operatsion ta'minlash",
            "Mahalliy dorixonalar, Sanitätshaus va ijtimoiy xizmatlar bilan mustahkam aloqalar",
            "Mintaqa aholisi uchun tibbiy xizmatlarning kafolatlangan uzoq muddatli mavjudligi",
            ]
          : isRu
          ? [
              "Муниципальное концессионное партнерство или долгосрочный договор аренды городских площадей",
              "Консультирование администраций по вопросам привлечения врачей и удержания кадров",
              "Организация дней открытых дверей, профилактических скринингов и лекций для жителей",
              "Сотрудничество с местными больницами для создания единого терапевтического континуума",
              "Развитие цифровых телемедицинских консультаций для удаленных поселений",
            ]
          : isEn
          ? [
              "Public-Private Partnerships (PPP) or long-term lease structures on municipal property",
              "Advising city councils on healthcare workforce attraction and physician retention packages",
              "Community health screening days, prevention lectures, and senior care information sessions",
              "Close operational dovetailing with local municipal clinics to prevent emergency room overcrowding",
              "Deployment of regional telemedicine stations connecting rural outposts to city medical specialists",
            ]
          : isTr
          ? [
              "Kamu-Özel İş Birlikleri (KÖİ) veya belediye arazilerinde uzun süreli üst hakkı modelleri",
              "Doktor yerleşimini teşvik programlarında belediyelere stratejik danışmanlık",
              "Yerel halk için düzenli sağlık forumları, koruyucu hekimlik günleri ve seminerler",
              "Güçlü ayakta yapılarla çevre hastanelerin acil servislerinin yükünü hafifletme",
              "Uzak yerleşim yerleri için dijital teletıp muayene istasyonlarının kurulması",
            ]
          : isAr
          ? [
              "الشراكات بين القطاعين العام والخاص (PPP) أو عقود الإيجار طويلة الأجل على أراضي البلديات",
              "تقديم المشورة لإدارات المدن حول برامج جذب الأطباء وتوطين الكفاءات الصحية",
              "تنظيم منتديات مجتمعية وأيام توعية وقائية وفحوصات دورية للسكان المحليين",
              "تخفيف الضغط على أقسام الطوارئ في المستشفيات المحيطة بفضل العيادات القوية",
              "إنشاء محطات استشارات طبية رقمية عن بُعد لربط القرى بالمراكز التخصصية",
            ]
          : [
              "Öffentlich-Private Partnerschaften (ÖPP) oder Erbpachtmodelle auf kommunalen Liegenschaften",
              "Beratung von Kommunen bei Förderprogrammen zur Ärzteansiedlung",
              "Regelmäßige Bürgerforen, Präventionstage und Gesundheitsvorträge vor Ort",
              "Entlastung der Notaufnahmen umliegender Krankenhäuser durch starke ambulante Strukturen",
              "Einrichtung digitaler Telemedizin-Sprechstunden für abgelegene Ortsteile",
            ],
        technicalTitle: isUz
          ? "KV bilan muvofiqlashtirish"
          : isRu ? "Координация с KV" : isEn ? "KV Coordination" : isTr ? "Ruhsat Kurullarıyla Koordinasyon" : isAr ? "التنسيق مع لجان التراخيص الصحية" : "Abstimmung mit Zulassungsgremien",
        technicalText: isUz
          ? "Barcha tibbiy quvvatlarni joylashtirish loyihalari Kassenärztliche Vereinigung ning hududiy rejalashtirish qo'mitasi (Bedarfsplanung) bilan to'liq kelishilgan holda amalga oshiriladi."
          : isRu
          ? "Все проекты развертывания медицинских мощностей согласуются с планами обеспечения Kassenärztliche Vereinigung Nordrhein (KVNO) и ведомствами здравоохранения земли."
          : isEn
          ? "All medical deployment initiatives are closely coordinated with the regional allocation plans of Kassenärztliche Vereinigung Nordrhein (KVNO) and state health authorities."
          : isTr
          ? "Tüm projeler önceden Kuzey Ren Hekimler Birliği'nin (KVNO) ihtiyaç planları ve ruhsat kurullarıyla ayrıntılı olarak koordine edilir."
          : isAr
          ? "يتم تنسيق كافة الخطط والمشاريع مسبقاً بشكل تفصيلي مع خطط التوزيع ولجان التراخيص التابعة لجمعية أطباء التأمين الصحي (KVNO)."
          : "Sämtliche Vorhaben werden im Vorfeld detailliert mit den Bedarfsplänen und Zulassungsausschüssen der Kassenärztlichen Vereinigung Nordrhein (KVNO) abgestimmt.",
        ctaButtonText: isUz
          ? "Munitsipalitet loyihasini boshlash"
          : isRu ? "Инициировать проект для муниципалитета" : isEn ? "Initiate Municipal Project" : isTr ? "Belediye Proje Konsepti İsteyin" : isAr ? "طلب تصور مشروع للبلديات" : "Kommunales Konzept anfragen",
      },
    },
  ];

  const processSteps = [
    {
      num: "01",
      icon: Users,
      image: "/images/partners/milestone-1-nda-clean.webp",
      title: isUz
        ? "Maxfiy muloqot va NDA"
        : isRu ? "Конфиденциальный диалог & NDA" : isEn ? "Confidential Dialogue & NDA" : isTr ? "İlk Temas ve Gizlilik (NDA)" : isAr ? "التواصل الأولي واتفاقية السرية (NDA)" : "Erstkontakt & Geheimhaltung",
      desc: isUz
        ? "Dastlabki uchrashuv va to'liq maxfiylik to'g'risidagi o'zaro kelishuvni (NDA) imzolash."
        : isRu
        ? "Первая встреча и подписание взаимного соглашения о неразглашении. Мы строго защищаем ваши конфиденциальные данные."
        : isEn
        ? "Initial consultation and execution of a bilateral Non-Disclosure Agreement (NDA). We strictly protect your confidential data."
        : isTr
        ? "Verilerinizin korunması için bağlayıcı olmayan ön görüşme ve karşılıklı gizlilik anlaşması (NDA) imzalanması."
        : isAr
        ? "مشاورات تمهيدية وتوقيع اتفاقية سرية متبادلة (NDA) لضمان حماية بياناتكم ومعلوماتكم."
        : "Unverbindliches Vorgespräch und Abschluss einer beidseitigen Geheimhaltungsvereinbarung (NDA) zum Schutz Ihrer Daten.",
    },
    {
      num: "02",
      icon: FileSearch,
      image: "/images/partners/milestone-2-audit-clean.webp",
      title: isUz
        ? "Tuzilmaviy audit va baholash"
        : isRu ? "Структурный аудит & Оценка" : isEn ? "Structural Audit & Valuation" : isTr ? "Analiz ve Değer Tespiti" : isAr ? "التحليل الشامل والتقييم المالي" : "Analyse & Wertermittlung",
      desc: isUz
        ? "Moddiy aktivlar, praksis ko'rsatkichlari va hududiy shifokorlik o'rinlari holatini chuqur tahlil qilish."
        : isRu
        ? "Глубокий анализ материальных активов, показателей практики, кадрового потенциала и градостроительных параметров объекта."
        : isEn
        ? "In-depth due diligence covering operational goodwill, patient demographics, staff structure, and asset valuation."
        : isTr
        ? "Muayenehane verilerinin, bina durumunun, KV ruhsatlarının ayrıntılı analizi ve IDW ile BÄK standartlarına uygun değer tespiti."
        : isAr
        ? "تحليل دقيق للبيانات السريرية، والتراخيص، وتقييم شامل وفق معايير نقابة الأطباء (BÄK) ومعهد (IDW)."
        : "Detaillierte Analyse der Praxisdaten, Bausubstanz, KV-Zulassungen sowie fundierte Wertermittlung nach IDW- und BÄK-Standards.",
    },
    {
      num: "03",
      icon: ShieldCheck,
      image: "/images/partners/milestone-3-stethoscope-clean.webp",
      title: isUz
        ? "Shartnoma arxitekturasi"
        : isRu ? "Договорная архитектура" : isEn ? "Contractual Structuring" : isTr ? "Kişiye Özel Sözleşmeler" : isAr ? "الصياغة والاتفاقيات المخصصة" : "Maßgeschneiderte Verträge",
      desc: isUz
        ? "Bitimning shaffof modelini ishlab chiqish: oldi-sotdi shartnomasi, litsenziyalash va mehnat shartnomalarini kelishish."
        : isRu
        ? "Разработка прозрачной модели сделки: согласование договоров аренды, трудовых контрактов и подача документов в комитеты KV."
        : isEn
        ? "Structuring tailored contracts: drafting commercial leases, physician employment terms, and official licensing filings."
        : isTr
        ? "Şeffaf devir, kira ve iş sözleşmelerinin hazırlanması ile KV ruhsat kurulundaki sürecin eksiksiz takibi."
        : isAr
        ? "صياغة عقود استحواذ وتوظيف وإيجار شفافة ومرافقة كاملة أمام لجنة تراخيص أطباء التأمين KV."
        : "Entwurf transparenter Kauf-, Miet- und Anstellungsverträge sowie vollständige Begleitung des KV-Zulassungsausschusses.",
    },
    {
      num: "04",
      icon: TrendingUp,
      image: "/images/partners/milestone-4-integration-clean.webp",
      title: isUz
        ? "Integratsiya va rivojlanish"
        : isRu ? "Интеграция & Развитие" : isEn ? "Integration & Growth" : isTr ? "Entegrasyon ve Büyüme" : isAr ? "الاندماج والنمو المستدام" : "Integration & Skalierung",
      desc: isUz
        ? "Xolding tarkibiga ravon o'tish: IT tizimini ulash, xodimlarni qo'llab-quvvatlash va umumiy o'sish."
        : isRu
        ? "Плавный переход под крыло холдинга: подключение IT, поддержка HR, маркетинговое сопровождение и стабильное развитие."
        : isEn
        ? "Smooth onboarding into the holding: IT connectivity, HR support, marketing launch, and long-term collaborative growth."
        : isTr
        ? "Sorunsuz geçiş: BT entegrasyonu, merkezi satın alma avantajları ve uzun vadeli ortak gelişim."
        : isAr
        ? "انتقال سلس: دمج تقنية المعلومات، الاستفادة من مزايا المشتريات المركزية، ونمو استراتيجي مستمر."
        : "Reibungsloser Übergang: IT-Migration, Einbindung in zentrale Einkaufsvorteile und langfristige partnerschaftliche Weiterentwicklung.",
    },
  ];


  return {
    heroData,
    heroBadges,
    pillars,
    processSteps,
  };
}
