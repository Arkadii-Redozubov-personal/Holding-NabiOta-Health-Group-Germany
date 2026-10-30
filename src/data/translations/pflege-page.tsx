import React from "react";
import { SupportedLocale } from "@/lib/i18n";
import {
  Award,
  Stethoscope,
  Clock,
  Building2,
  Accessibility,
  Pill,
  HeartHandshake,
  Heart,
  ShieldCheck,
  Users,
  Star,
} from "@/lib/icons";

export function getPflegePageTranslations(locale: SupportedLocale = "de") {
  const isUz = locale === "uz";
  const isRu = locale === "ru";
  const isEn = locale === "en";
  const isTr = locale === "tr";
  const isAr = locale === "ar";

  const heroData = {
    title: isUz
      ? "Hamshiralik parvarishi va patronaj"
      : isRu
      ? "Сестринский уход & патронаж"
      : isEn
      ? "Nursing Care & HomeCare"
      : isTr
      ? "Evde Bakım & Hemşirelik Hizmetleri"
      : isAr
      ? "التمريض المنزلي والرعاية المتكاملة"
      : "Pflege & HomeCare",
    subtitle: isUz
      ? "NabiOta HomeCare GmbH - Uy sharoitida g'amxo'rlik va muolajalar"
      : isRu
      ? "NabiOta HomeCare GmbH - Забота и лечение на дому"
      : isEn
      ? "NabiOta HomeCare GmbH - Compassionate Care at Home"
      : isTr
      ? "NabiOta HomeCare GmbH - Alışık Olduğunuz Ev Ortamında Saygın ve Şefkatli Bakım"
      : isAr
      ? "NabiOta HomeCare GmbH - رعاية كريمة ودافئة في محيطكم الأسري المألوف"
      : "NabiOta HomeCare GmbH - Würdevolle Fürsorge im vertrauten Umfeld",
    eyebrow: isUz
      ? "NABIOTA HOMECARE GMBH • SGB V & SGB XI"
      : isRu
      ? "NABIOTA HOMECARE GMBH • SGB V & SGB XI"
      : isEn
      ? "NABIOTA HOMECARE GMBH • SGB V & SGB XI"
      : isTr
      ? "NABIOTA HOMECARE GMBH • SGB V & SGB XI"
      : isAr
      ? "NABIOTA HOMECARE GMBH • SGB V & SGB XI"
      : "NABIOTA HOMECARE GMBH • SGB V & SGB XI",
    desc: isUz
      ? "NabiOta HomeCare GmbH odatiy uy muhitida malakali ambulator hamshiralik parvarishi, shifokor ko'rsatmasi bo'yicha tibbiy yordam (SGB V), sertifikatlangan yaralarni davolash (ICW®) va asosiy parvarishni (SGB XI) inson qadr-qimmatini e'zozlagan holda hamda yaqinlariga ko'mak berib ta'minlaydi."
      : isRu
      ? "NabiOta HomeCare GmbH обеспечивает квалифицированный амбулаторный сестринский уход, медицинскую помощь по назначению врачей (SGB V), сертифицированное ведение ран (ICW®) и базовый уход (SGB XI) в привычном домашнем окружении - с высочайшим уважением к достоинству человека и поддержкой его близких."
      : isEn
      ? "NabiOta HomeCare GmbH provides accredited outpatient nursing care, prescribed medical treatment nursing (SGB V), certified wound care (ICW®), and personal care support (SGB XI) at home - preserving personal independence, dignity, and active relief for family caregivers."
      : isTr
      ? "NabiOta HomeCare GmbH, ev ortamında güvenilir ve ihtiyaca uygun bakım sunar. Hizmet yelpazemiz hekim tarafından reçete edilen tedavi bakımını (SGB V), sertifikalı yara yönetimini (ICW®), vücut odaklı temel bakımı (SGB XI) ve hastane taburculuğu sonrası kesintisiz geçiş yönetimini kapsar - saygı, şefkat ve tıbbi uzmanlıkla."
      : isAr
      ? "تضمن شركة NabiOta HomeCare GmbH رعاية تمريضية منزلية موثوقة ومفصلة وفق احتياجاتكم. تشمل خدماتنا الرعاية الطبية والعلاجية الموصوفة من الطبيب (SGB V)، إدارة وعلاج الجروح المعتمدة (ICW®)، الرعاية الشخصية الأساسية (SGB XI)، وإدارة الانتقال السلس بعد الخروج من المستشفى - بروح من الاحترام والاهتمام والخبرة التمريضية المتخصصة."
      : "Die NabiOta HomeCare GmbH gewährleistet eine verlässliche, bedarfsgerechte Pflege im häuslichen Umfeld. Unser Spektrum umfasst die ärztlich verordnete Behandlungspflege (SGB V), zertifiziertes Wundmanagement (ICW®), körperbezogene Grundpflege (SGB XI) sowie eine nahtlose Überleitung nach Klinikaufenthalten - getragen von Respekt, Zuwendung und Fachkompetenz.",
  };


  const heroBadges = [
    {
      icon: <Award className="w-5 h-5 text-[#ECCF96]" />,
      title: isUz ? "Wundexperten ICW®" : isRu ? "Wundexperten ICW®" : isEn ? "ICW® Wound Care" : isTr ? "Wundexperten ICW®" : isAr ? "خبراء جروح معتمدون ICW®" : "Wundexperten ICW®",
      sub: isUz ? "Sertifikatlangan" : isRu ? "Сертификация" : isEn ? "Certified Care" : isTr ? "Sertifikalı Yönetim" : isAr ? "إدارة جروح معتمدة" : "Zertifiziertes Management",
    },
    {
      icon: <Stethoscope className="w-5 h-5 text-[#ECCF96]" />,
      title: isUz ? "SGB V & SGB XI" : isRu ? "SGB V & SGB XI" : isEn ? "SGB V & SGB XI" : isTr ? "SGB V & SGB XI" : isAr ? "SGB V & SGB XI" : "SGB V & SGB XI",
      sub: isUz ? "Barcha sug'urta kassalari" : isRu ? "Все кассы Германии" : isEn ? "Statutory & Private" : isTr ? "Tüm Sağlık ve Bakım Sandıkları" : isAr ? "معتمد لكافة صناديق التأمين" : "Zugelassener Partner",
    },
    {
      icon: <Clock className="w-5 h-5 text-[#ECCF96]" />,
      title: isUz ? "24/7 G'amxo'rlik" : isRu ? "24/7 Забота" : isEn ? "24/7 Care" : isTr ? "24/7 Nöbetçi Destek" : isAr ? "مناوبة ورعاية 24/7" : "24/7 Rufbereitschaft",
      sub: isUz ? "Shoshilinch aloqa" : isRu ? "Экстренная связь" : isEn ? "Emergency On-Call" : isTr ? "Günün Her Saati" : isAr ? "على مدار الساعة" : "Rund-um-die-Uhr",
    },
  ];


  const t = {
    servicesSection: {
      eyebrow: isUz ? "NABIOTA HOMECARE GMBH" : isRu ? "NABIOTA HOMECARE GMBH" : isEn ? "NABIOTA HOMECARE GMBH" : isTr ? "NABIOTA HOMECARE GMBH" : isAr ? "NABIOTA HOMECARE GMBH" : "NABIOTA HOMECARE GMBH",
      title: isUz
        ? "Kompleks ambulator va patronaj xizmatlari"
        : isRu
        ? "Комплексные амбулаторные и патронажные услуги"
        : isEn
        ? "Comprehensive Home Nursing & Care Services"
        : isTr
        ? "NabiOta HomeCare GmbH Hizmet Yelpazesi"
        : isAr
        ? "نطاق خدمات شركة NabiOta HomeCare GmbH"
        : "Leistungsspektrum der NabiOta HomeCare GmbH",
      desc: isUz
        ? "Biz SGB V va SGB XI bo'yicha litsenziyalangan hamshiralik xizmatlarining to'liq spektrini taklif etamiz: tibbiy muolajalar va yaralarni davolashdan tortib, g'amxo'r parvarish va yaqinlarni huquqiy qo'llab-quvvatlashgacha."
        : isRu
        ? "Мы предлагаем полный спектр лицензированных сестринских услуг по SGB V и SGB XI: от медицинских процедур и лечения ран до заботливого ухода и юридической поддержки близких."
        : isEn
        ? "We provide an exhaustive continuum of accredited home care services under SGB V and SGB XI: from complex clinical procedures and wound healing to personal hygiene and caregiver respite."
        : isTr
        ? "Evde bakım hizmetimizin altı ana sütununu keşfedin: Hekim reçeteli tıbbi tedavi bakımından (SGB V) ve sertifikalı yara yönetiminden (ICW®), vücut bakımına (SGB XI) ve hasta yakınlarının yükünü hafifletmeye kadar."
        : isAr
        ? "اكتشفوا الركائز الست لخدمات الرعاية المنزلية لدينا: من الرعاية الطبية العلاجية الموصوفة من الطبيب (SGB V) والإدارة المعتمدة للجروح (ICW®) إلى الرعاية الجسدية (SGB XI) والتخفيف الملموس عن الأسرة."
        : "Entdecken Sie die sechs tragenden Säulen unserer ambulanten Versorgung: Von ärztlich verordneter Behandlungspflege (SGB V) über zertifiziertes Wundmanagement (ICW®) bis hin zu körperbezogener Pflege (SGB XI) und spürbarer Entlastung der Angehörigen.",
      openModalBtn: isUz ? "Muolajalar haqida batafsil" : isRu ? "Подробнее о процедурах" : isEn ? "View Details" : isTr ? "Detaylar ve Endikasyonlar" : isAr ? "التفاصيل ودواعي الاستعمال" : "Details & Indikationen",
    },
    sanitaetshausSection: {
      eyebrow: isUz ? "NABIOTA SANITÄTSHAUS GMBH" : isRu ? "NABIOTA SANITÄTSHAUS GMBH" : isEn ? "NABIOTA SANITÄTSHAUS GMBH" : isTr ? "NABIOTA SANITÄTSHAUS GMBH" : isAr ? "NABIOTA SANITÄTSHAUS GMBH" : "NABIOTA SANITÄTSHAUS GMBH",
      title: isUz
        ? "Ortopediya, reabilitatsiya va tibbiy buyumlar"
        : isRu
        ? "Ортопедия, реабилитация и медицинские изделия"
        : isEn
        ? "Medical Supplies, Orthopedics & Rehabilitation Technology"
        : isTr
        ? "Medikal Malzeme & Tıbbi Cihaz Temini"
        : isAr
        ? "المتجر الطبي وتوفير المستلزمات الطبية والأجهزة المعينة"
        : "Sanitätshaus & Medizinische Hilfsmittelversorgung",
      desc: isUz
        ? "NabiOta Sanitätshaus GmbH bemorlarni §§ 126, 127 SGB V bo'yicha Germaniyaning barcha sug'urta kassalari bilan to'g'ridan-to'g'ri hisob-kitob asosida zamonaviy ortopedik mahsulotlar, nogironlar aravachalari, funksional krovatlar va steril bog'lov materiallari bilan ta'minlaydi."
        : isRu
        ? "NabiOta Sanitätshaus GmbH обеспечивает пациентов современными ортопедическими изделиями, инвалидными колясками, функциональными кроватями и стерильными перевязочными материалами по §§ 126, 127 SGB V с прямым расчетом со всеми страховыми кассами Германии."
        : isEn
        ? "NabiOta Sanitätshaus GmbH provides high-grade orthopedic appliances, rehabilitation wheelchairs, specialized care beds, and sterile wound supplies pursuant to §§ 126, 127 SGB V, settling directly with all statutory and private health funds."
        : isTr
        ? "NabiOta Sanitätshaus GmbH, §§ 126, 127 SGB V uyarınca tıbbi cihazlar, bakım yardımcıları ve sarf malzemelerinin güvenilir ve hızlı teminini garanti eder. Usta ortopedi teknolojisini hasta dostu lojistik ve doğrudan sandık anlaşmalarıyla birleştiriyoruz."
        : isAr
        ? "تضمن NabiOta Sanitätshaus GmbH التوريد السريع والموثوق للمستلزمات الطبية، أجهزة الرعاية المساعدة والمواد الاستهلاكية وفق §§ 126, 127 SGB V. نجمع بين مهارة الأجهزة التعويضية الحرفية واللوجستيات السريعة والتسوية المباشرة."
        : "Die NabiOta Sanitätshaus GmbH garantiert eine verlässliche und schnelle Versorgung mit medizinischen Hilfsmitteln, Pflegehilfsmitteln und Verbrauchsartikeln gemäß §§ 126, 127 SGB V. Wir verbinden meisterhafte Orthopädietechnik mit patientenfreundlicher Logistik und direkter Kassenabrechnung.",
      openModalBtn: isUz ? "Xususiyatlar va retsept" : isRu ? "Характеристики и рецепт" : isEn ? "Specs & Prescription" : isTr ? "Detaylar ve Reçete" : isAr ? "التفاصيل وطريقة الوصفة الطبية" : "Details & Verordnung",
    },
    pharmacySection: {
      eyebrow: isUz ? "NABIOTA PHARMACY VA KLINIKALAR" : isRu ? "NABIOTA PHARMACY & КЛИНИКИ" : isEn ? "NABIOTA PHARMACY & CLINIC SUPPLY" : isTr ? "NABIOTA PHARMACY & KLİNİK İLAÇ TEDARİK" : isAr ? "NABIOTA PHARMACY وتوريد الأدوية للمستشفيات" : "NABIOTA PHARMACY & KLINIKVERSORGUNG",
      title: isUz
        ? "Dorixonalar to'g'risidagi qonun (§ 14 ApoG) bo'yicha dori ta'minoti konsepsiyasi"
        : isRu
        ? "Концепция лекарственного обеспечения по закону об аптеках (§ 14 ApoG)"
        : isEn
        ? "Dedicated Hospital Medication Logistics pursuant to § 14 Apothekengesetz"
        : isTr
        ? "Kliniklerin İlaç Temini & NabiOta Pharmacy (§ 14 ApoG)"
        : isAr
        ? "توريد الأدوية للعيادات ومستشفيات المجموعة عبر NabiOta Pharmacy (§ 14 ApoG)"
        : "Arzneimittelversorgung der Kliniken & NabiOta Pharmacy (§ 14 ApoG)",
      desc: isUz
        ? "Germaniya qonunchiligiga ko'ra statsionarlarni dori-darmon bilan ta'minlash davlat ruxsati berilgan rasmiy ta'minot shartnomalari (§ 14 ApoG) asosida vakolatli dorixona orqali amalga oshiriladi. NabiOta Pharmacy jamoat dorixonasi farmatsevtika qonunchiligiga to'liq muvofiq mustaqil provizor boshqaruvida faoliyat yuritadi."
        : isRu
        ? "В соответствии с законодательством Германии снабжение стационаров медикаментами осуществляется через уполномоченную аптеку на основании официальных договоров снабжения с государственным разрешением (§ 14 ApoG). Общественная аптека NabiOta Pharmacy функционирует под независимым руководством провизора в полном соответствии с фармацевтическим правом."
        : isEn
        ? "Pursuant to German pharmaceutical legislation, inpatient medication supply is delivered via an accredited pharmacy holding statutory supply agreements approved by regional health authorities (§ 14 ApoG). NabiOta Pharmacy operates under independent licensed pharmacist directorship, ensuring strictly segregated pharmaceutical oversight."
        : isTr
        ? "Bağlı kliniklerin ve ameliyathanelerin ilaç temini, her kurumun işleyişine özel tedarik konseptiyle sağlanır. Resmi onaylı ve Eczacılık Kanunu § 14 (ApoG) uyarınca yapılan yazılı tedarik sözleşmelerine dayalı yetkili eczane üzerinden yürütülür. NabiOta Pharmacy, bağımsız uzman eczacı yönetimiyle faaliyet gösterir."
        : isAr
        ? "يتم تأمين الإمداد الدوائي للعيادات والمراكز الجراحية التابعة عبر مفهوم توريد مخصص لكل منشأة. ويجري ذلك عبر صيدلية مرخصة وفق عقود توريد خطية بموجب § 14 من قانون الصيدلة الألماني (ApoG) وبموافقة السلطات الصحية الرسمية. وتعمل NabiOta Pharmacy تحت إدارة صيدلانية مستقلة."
        : "Die Arzneimittelversorgung der verbundenen Kliniken und OP-Zentren wird durch ein gesondertes, auf den jeweiligen Klinikbetrieb abgestimmtes Versorgungskonzept sichergestellt. Sie erfolgt über eine berechtigte Apotheke auf Grundlage schriftlicher Versorgungsverträge nach § 14 Apothekengesetz (ApoG) mit behördlicher Genehmigung. Die NabiOta Pharmacy agiert mit eigenverantwortlicher fachlicher Leitung.",
      points: [
        {
          title: isUz ? "Mustaqil boshqaruv" : isRu ? "Независимое руководство" : isEn ? "Independent Pharmacy Leadership" : isTr ? "Bağımsız Eczane Yönetimi" : isAr ? "إدارة صيدلانية مستقلة" : "Eigenverantwortliche Apothekenleitung",
          desc: isUz
            ? "Dorixona tijorat GmbH tuzilmasiga bo'ysunmaydi: boshqaruv Apothekengesetz talablariga binoan akkreditatsiyadan o'tgan provizor tomonidan amalga oshiriladi."
            : isRu
            ? "Аптека не подчинена коммерческой GmbH-структуре: руководство осуществляется аккредитованным провизором согласно Apothekengesetz."
            : isEn
            ? "Legally independent operations under a licensed supervising pharmacist, safeguarding strict clinical autonomy."
            : isTr
            ? "Eczacılık Kanunu uyarınca ruhsat sahibi bağımsız uzman eczacı tarafından, yasanın öngördüğü tarafsızlıkla işletilir."
            : isAr
            ? "تشغيل حصري من قبل صيدلي مرخص بموجب قانون الصيدلة الألماني مع استقلالية مهنية كاملة يفرضها القانون."
            : "Betrieb ausschließlich durch einen nach dem Apothekengesetz berechtigten Erlaubnisinhaber in gesetzlich vorgeschriebener Unabhängigkeit.",
        },
        {
          title: isUz ? "Klinikalarni ta'minlash (§ 14 ApoG)" : isRu ? "Снабжение клиник (§ 14 ApoG)" : isEn ? "Statutory Hospital Supply (§ 14 ApoG)" : isTr ? "Onaylı Klinik Tedariği (§ 14 ApoG)" : isAr ? "توريد معتمد للمستشفيات (§ 14 ApoG)" : "Genehmigte Klinikbelieferung (§ 14 ApoG)",
          desc: isUz
            ? "Statsionarlar, operatsiya bloklari va MVZni zarur dori vositalari bilan ta'minlash bo'yicha regulyator tomonidan tasdiqlangan to'g'ridan-to'g'ri shartnomalar."
            : isRu
            ? "Прямые утвержденные регулятором договоры снабжения стационаров, операционных блоков и MVZ необходимыми медикаментами."
            : isEn
            ? "Officially approved supply covenants covering inpatient hospital wards, surgical suites, and ambulatory surgery centers."
            : isTr
            ? "Yatan hasta servisleri ve ameliyathanelerin kesintisiz ilaç tedariki için resmi onaylı yazılı sözleşmeler."
            : isAr
            ? "عقود توريد خطية معتمدة رسمياً لضمان الإمداد الدوائي المستمر للأقسام السريرية وغرف العمليات."
            : "Schriftliche Versorgungsverträge mit behördlicher Genehmigung zur lückenlosen Versorgung stationärer Fachabteilungen und OP-Säle.",
        },
        {
          title: isUz ? "Terapiya xavfsizligi (AMTS)" : isRu ? "Безопасность терапии (AMTS)" : isEn ? "Medication Safety (AMTS)" : isTr ? "Bireysel İlaç Güvenliği (AMTS)" : isAr ? "أمان العلاج الدوائي للمريض (AMTS)" : "Patientenindividuelle AMTS",
          desc: isUz
            ? "Dori-darmonlar o'zaro ta'sirini individual nazorat qilish, shaxsiy qadoqlash (blisterlash) va 24 soatlik zaxira ombori."
            : isRu
            ? "Индивидуальный контроль взаимодействий лекарств, персональная фасовка (блистеризация) и круглосуточный резервный склад."
            : isEn
            ? "Pharmacological interaction screening, unit-dose pouch packaging, and 24/7 emergency clinical drug depots."
            : isTr
            ? "İlaç etkileşim kontrolleri, kişiye özel dozaj paketleme (blisterleme), acil durum ilaç deposu ve hekimlerle doğrudan koordinasyon."
            : isAr
            ? "أمان العلاج الدوائي ومراجعة التفاعلات، تغليف الجرعات الفردية، مستودع أدوية للطوارئ وتنسيق مباشر مع الأطباء."
            : "Arzneimitteltherapiesicherheit, unit-dose Verblisterung, Notfalldepot-Vorhaltung und direkte Abstimmung mit den behandelnden Ärzten.",
        },
      ],
      complianceBadges: [
        isUz ? "§ 14 Apothekengesetz (ApoG)" : isRu ? "§ 14 Apothekengesetz (ApoG)" : isEn ? "§ 14 Apothekengesetz (ApoG)" : isTr ? "§ 14 Eczacılık Kanunu (ApoG)" : isAr ? "§ 14 قانون الصيدلة الألماني (ApoG)" : "§ 14 Apothekengesetz (ApoG)",
        isUz ? "§§ 126, 127 SGB V Prekvalifikatsiya" : isRu ? "§§ 126, 127 SGB V Преквалификация" : isEn ? "§§ 126, 127 SGB V Pre-qualification" : isTr ? "§§ 126, 127 SGB V Ön Yeterlilik" : isAr ? "§§ 126, 127 SGB V الاعتماد المسبق" : "§§ 126, 127 SGB V Präqualifizierung",
        isUz ? "Hunarmandlik palatasi (Handwerksrolle)" : isRu ? "Ремесленная палата (Handwerksrolle)" : isEn ? "Crafts Guild Registration" : isTr ? "Ortopedi Zanaat Sicili" : isAr ? "سجل الحرف للأجهزة التقويمية" : "Handwerksrolle Orthopädietechnik",
        isUz ? "EU-MDR & MPDG reglamenti" : isRu ? "Регламент EU-MDR & MPDG" : isEn ? "EU-MDR & MPDG Compliant" : isTr ? "EU-MDR & MPDG Uyumu" : isAr ? "مطابقة لوائح EU-MDR و MPDG" : "EU-MDR & MPDG Konformität",
        isUz ? "DSGVO bo'yicha himoyalangan ma'lumotlar almashinuvi" : isRu ? "Защищенный обмен данными DSGVO" : isEn ? "GDPR Medical Data Segregation" : isTr ? "DSGVO Uyumlu Arayüzler" : isAr ? "واجهات رقمية متوافقة مع DSGVO" : "DSGVO-konforme Schnittstellen",
      ],
    },
    verbund: {
      eyebrow: isUz ? "INTEGRATSIYALASHGAN EKOTIZIM" : isRu ? "ИНТЕГРИРОВАННАЯ ЭКОСИСТЕМА" : isEn ? "INTEGRATED HEALTHCARE NETWORK" : isTr ? "ENTEGRE SAĞLIK AĞI" : isAr ? "شبكة الرعاية الصحية المتكاملة" : "INTEGRIERTER VERSORGUNGSVERBUND",
      title: isUz
        ? "Uzluksiz g'amxo'rlik: NabiOta® Xoldingi"
        : isRu
        ? "Бесшовная забота: Холдинг NabiOta®"
        : isEn
        ? "Seamless Continuity: The NabiOta® Healthcare Network"
        : isTr
        ? "NabiOta® Grubu Bünyesinde Kesintisiz Bakım"
        : isAr
        ? "رعاية مستمرة وسلسة ضمن شبكة مجموعة NabiOta®"
        : "Nahtlose Betreuung im Verbund der NabiOta® Gruppe",
      desc: isUz
        ? "NabiOta HomeCare GmbH tibbiy xoldingimizning barcha bo'g'inlari bilan uzviy bog'langan - poliklinika va statsionardan tortib to uy o'rnigacha bo'lgan uzluksiz zanjirni ta'minlaydi."
        : isRu
        ? "NabiOta HomeCare GmbH тесно связана со всеми звеньями нашего медицинского холдинга - обеспечивая непрерывную цепочку от поликлиники и стационара до домашней постели."
        : isEn
        ? "NabiOta HomeCare GmbH collaborates seamlessly with all specialized entities across the NabiOta Group - delivering uninterrupted continuity from clinic to bedside."
        : isTr
        ? "NabiOta şirketler grubunun bir parçası olan NabiOta HomeCare GmbH, ağın diğer tüm tıbbi birimleriyle yakın iş birliği içinde çalışır. Bu sayede hastalar ve yakınları için bakım boşlukları oluşmaz, medikal cihazlara hızlıca ulaşılır ve doktor ile bakım ekibi arasında güvenilir iletişim sağlanır."
        : isAr
        ? "بصفتها جزءاً من مجموعة شركات NabiOta، تتعاون NabiOta HomeCare GmbH بشكل وثيق مع سائر المنشآت الطبية في الشبكة. وهذا يضمن للمرضى وعائلاتهم عدم انقطاع الرعاية، والتوفير الفوري للمستلزمات، وتواصلاً مباشراً بين الأطباء وفرق التمريض."
        : "Als Teil der NabiOta-Unternehmensgruppe kooperiert die NabiOta HomeCare GmbH eng mit den weiteren medizinischen Einrichtungen des Verbunds. Für Patienten und Angehörige bedeutet dies: keine Versorgungslücken, rasche Hilfsmittelversorgung und verlässliche Kommunikation zwischen Arzt und Pflege.",
      pillars: [
        {
          title: isUz ? "NabiOta MVZ & Kliniken" : isRu ? "NabiOta MVZ & Kliniken" : isEn ? "NabiOta MVZ & Clinics" : isTr ? "NabiOta MVZ & Kliniken" : isAr ? "NabiOta MVZ & العيادات" : "NabiOta MVZ & Clinics",
          desc: isUz
            ? "Operatsiya qiluvchi va davolovchi shifokorlar bilan bevosita aloqa, retseptlarni tez rasmiylashtirish va tayinlovlarni tuzatish."
            : isRu
            ? "Прямой контакт с оперирующими и лечащими врачами, быстрое оформление рецептов и корректировка назначений."
            : isEn
            ? "Direct coordination with attending physicians and surgeons, swift prescription processing, and clinical oversight."
            : isTr
            ? "Tedaviyi yürüten uzman hekimlerle doğrudan koordinasyon, hızlı reçete yolları ve planlı taburculuk organizasyonu."
            : isAr
            ? "تنسيق مباشر مع الأطباء المتخصصين، مسارات وصفات طبية سريعة، وتنظيم محكم لخطة الخروج من المستشفى."
            : "Direkte Abstimmung mit behandelnden Fachärzten, schnelle Verordnungswege und abgestimmte Entlassplanung.",
          icon: Building2,
        },
        {
          title: isUz ? "NabiOta Sanitätshaus GmbH" : isRu ? "NabiOta Sanitätshaus GmbH" : isEn ? "NabiOta Medical Supplies" : isTr ? "NabiOta Sanitätshaus GmbH" : isAr ? "NabiOta Sanitätshaus GmbH" : "NabiOta Sanitätshaus GmbH",
          desc: isUz
            ? "Elektr uzatmali krovatlar, antidekubitus matraslari, xodunoklar, kateterlar va bog'lamalarni tezkor yetkazib berish."
            : isRu
            ? "Экспресс-доставка кроватей с электроприводом, противопролежневых матрасов, ходунков, катетеров и повязок."
            : isEn
            ? "Rapid home delivery of electric care beds, anti-decubitus mattresses, walkers, wheelchairs, and dressings."
            : isTr
            ? "Bakım yatakları, antidekübit sistemleri, rollatorlar ve medikal cihazların kısa sürede güvenilir teslimatı."
            : isAr
            ? "توفير سريع وموثوق لأسرة الرعاية، أنظمة الوقاية من قرح الفراش، المشايات، والأجهزة المساعدة."
            : "Verlässliche, kurzfristige Bereitstellung von Pflegebetten, Antidekubitus-Systemen, Rollatoren und Hilfsmitteln.",
          icon: Accessibility,
        },
        {
          title: isUz ? "NabiOta Apotheke" : isRu ? "NabiOta Apotheke" : isEn ? "NabiOta Pharmacy" : isTr ? "NabiOta Eczanesi" : isAr ? "NabiOta Apotheke" : "NabiOta Apotheke",
          desc: isUz
            ? "Hayotiy muhim dorilar, insulin, enteral oziqlantirish va steril materiallar bilan uzluksiz ta'minlash."
            : isRu
            ? "Бесперебойное снабжение жизненно важными лекарствами, инсулином, энтеральным питанием и стерильными материалами."
            : isEn
            ? "Uninterrupted logistics for prescription medications, insulin, enteral nutrition, and sterile medical disposables."
            : isTr
            ? "Reçeteli ilaçların, modern yara örtülerinin ve enteral beslenme ürünlerinin güvenilir ve düzenli temini."
            : isAr
            ? "توريد موثوق للأدوية الموصوفة، لوجستيات ضمادات الجروح الحديثة، ومغذيات التغذية الأنبوبية."
            : "Zuverlässige Belieferung mit verordneten Arzneimitteln, moderner Wundauflagen-Logistik und Sondennahrung.",
          icon: Pill,
        },
        {
          title: isUz ? "NabiOta Rehabilitation" : isRu ? "NabiOta Rehabilitation" : isEn ? "NabiOta Rehabilitation" : isTr ? "NabiOta Rehabilitasyon" : isAr ? "NabiOta Rehabilitation" : "NabiOta Rehabilitation & Therapy",
          desc: isUz
            ? "Uyda tiklanishni davom ettirish: moslashtirilgan DFJ (LFK), ergoterapiya va faol hayotga qaytish dasturlari."
            : isRu
            ? "Продолжение восстановления дома: согласованные программы ЛФК, эрготерапии и возвращения к активной жизни."
            : isEn
            ? "Restorative continuation at home: coordinated physiotherapy, occupational therapy, and regaining mobility."
            : isTr
            ? "Evde bakım ile ayaktan terapinin uyumu: Fizyoterapi, ergoterapi ve mobilizasyonun bir arada yürütülmesi."
            : isAr
            ? "تكامل التمريض مع العلاج الطبيعي والتأهيلي في المنزل: علاج طبيعي، علاج وظيفي واستعادة الحركة بتناغم."
            : "Verzahnung von Pflege und ambulanter Therapie: Physiotherapie, Ergotherapie und Mobilisation im Einklang.",
          icon: HeartHandshake,
        },
      ],
    },
    whyChoose: {
      eyebrow: isUz ? "NEGA NABIOTA HOMECARE" : isRu ? "ПОЧЕМУ NABIOTA HOMECARE" : isEn ? "WHY CHOOSE US" : isTr ? "NEDEN NABIOTA HOMECARE" : isAr ? "لماذا تختار NABIOTA HOMECARE" : "WARUM NABIOTA HOMECARE",
      title: isUz
        ? "Individual g'amxo'rlik. Professional qo'llab-quvvatlash."
        : isRu
        ? "Индивидуальная забота. Профессиональная поддержка."
        : isEn
        ? "Personalized Care. Professional Support."
        : isTr
        ? "Kişisel İlgi. Profesyonel Uzmanlık."
        : isAr
        ? "عناية شخصية فائقة. خبرة مهنية موثوقة."
        : "Persönliche Fürsorge. Professionelle Expertise.",
      desc: isUz
        ? "Biz har bir inson shaxsiy ehtiyojlariga moslashtirilgan ehtiromli, samimiy parvarishga loyiq ekaniga ishonamiz. Tajribali diplomli hamshiralar jamoamiz hayot sifatingizni oshirishga va o'zingizni qulay, xavfsiz hamda mustaqil his qilishingizga intiladi."
        : isRu
        ? "Мы убеждены, что каждый человек заслуживает уважительного, чуткого ухода, разработанного с учетом его личных потребностей. Наша опытная команда дипломированных медсестер стремится повысить качество вашей жизни и помочь вам чувствовать себя комфортно, безопасно и независимо."
        : isEn
        ? "We believe that every person deserves care that is respectful, compassionate and tailored to their individual needs. Our experienced nursing team is dedicated to improving your quality of life and helping you live with greater comfort, safety, and independence."
        : isTr
        ? "Her bireyin saygılı, empatik ve ihtiyaçlarına özel uyarlanmış bir bakımı hak ettiğine inanıyoruz. Deneyimli bakım ekibimiz, yaşam kalitenizi hissedilir şekilde artırmak ve size daha fazla konfor ile bağımsızlık kazandırmak için çalışır."
        : isAr
        ? "نؤمن بأن كل إنسان يستحق رعاية تتسم بالاحترام والتعاطف وتلبي احتياجاته الفردية تماماً. يكرس فريق التمريض الخبير جهوده لتحسين جودة حياتكم وتمكينكم من العيش بمزيد من الراحة والأمان والاستقلالية."
        : "Wir sind überzeugt, dass jeder Mensch eine respektvolle, einfühlsame und maßgeschneiderte Pflege verdient. Unser erfahrenes Pflegeteam setzt sich dafür ein, Ihre Lebensqualität spürbar zu verbessern und Ihnen mehr Komfort sowie Unabhängigkeit zu ermöglichen.",
      checks: [
        isUz
          ? "100% davlat diplomiga ega hamshiralar va ICW® ekspertlari"
          : isRu
          ? "100% дипломированные медицинские сестры и эксперты ICW®"
          : isEn
          ? "100% licensed nurses and certified ICW® wound experts"
          : isTr
          ? "%100 devlet diplomalı uzman hemşireler ve ICW® sertifikalı yara uzmanları"
          : isAr
          ? "طواقم تمريض حاصلة 100% على شهادات حكومية معتمدة وخبراء جروح مرخصون من ICW®"
          : "100% staatlich examinierte Pflegefachkräfte & ICW®-Wundexperten",
        isUz
          ? "Individual parvarish rejalari va biriktirilgan hamshira"
          : isRu
          ? "Индивидуальные планы ухода и закрепленная медсестра"
          : isEn
          ? "Individualized care plans and dedicated primary nursing model"
          : isTr
          ? "Sabit primer bakım personeli ile kişiye özel hazırlanmış bakım planları"
          : isAr
          ? "خطط رعاية مصممة فردياً مع تكليف ممرضين معتمدين ثابتين لمتابعة كل حالة"
          : "Individuell abgestimmte Pflegepläne mit festen Bezugspflegekräften",
        isUz
          ? "Germaniyaning barcha sug'urta kassalari bilan to'g'ridan-to'g'ri hisob-kitob (SGB V & XI)"
          : isRu
          ? "Прямой расчет со всеми страховыми кассами Германии (SGB V & XI)"
          : isEn
          ? "Direct billing with all German statutory and private health insurances"
          : isTr
          ? "Tüm yasal ve özel sağlık/bakım sandıkları ile doğrudan mahsuplaşma (SGB V & XI)"
          : isAr
          ? "تسوية مباشرة ومريحة مع كافة صناديق التأمين الصحي والرعاية القانونية والخاصة (SGB V & XI)"
          : "Direkte Abrechnung mit allen gesetzlichen und privaten Kassen (SGB V & XI)",
        isUz
          ? "Favqulodda vaziyatlar uchun 24/7 kechayu kunduz navbatchilik aloqasi"
          : isRu
          ? "Круглосуточная дежурная связь 24/7 для экстренных ситуаций"
          : isEn
          ? "24/7 emergency telephone response for acute medical concerns"
          : isTr
          ? "Akut sağlık değişimlerinde ve acil durumlarda 7/24 kesintisiz nöbetçi telefon hattı"
          : isAr
          ? "خدمة اتصال وطوارئ هاتفية متاحة على مدار الساعة 24/7 للتعامل مع أي طارئ صحي"
          : "Verlässliche 24/7 Rufbereitschaft bei akuten gesundheitlichen Veränderungen",
      ],
    },
    commitment: {
      eyebrow: isUz ? "BIZNING BURCHIMIZ" : isRu ? "НАШЕ ОБЯЗАТЕЛЬСТВО" : isEn ? "OUR COMMITMENT" : isTr ? "SÖZÜMÜZ VE TAAHHÜDÜMÜZ" : isAr ? "عهدنا والتزامنا" : "UNSER VERSPRECHEN",
      title: isUz
        ? "Parvarishdan ham ortiq - samimiy insoniylik"
        : isRu
        ? "Больше чем уход - искренняя человечность"
        : isEn
        ? "More Than Just Care - Human Dignity & Warmth"
        : isTr
        ? "Bakımdan Daha Fazlası - Saygı, Onur ve İnsan Odaklılık"
        : isAr
        ? "أكثر من مجرد رعاية - احترام وكرامة وإنسانية خالصة"
        : "Mehr als nur Pflege - Respekt, Würde und Menschlichkeit",
      desc: isUz
        ? "Biz mijozlarimiz va ularning oilalari bilan uzoq muddatli ishonchli munosabatlar o'rnatamiz, nafaqat malakali tibbiy yordam, balki samimiy ruhiy xotirjamlikni ham ta'minlaymiz. Sizning salomatligingiz - bizning bosh ustuvor vazifamizdir."
        : isRu
        ? "Мы строим долгосрочные доверительные отношения с клиентами и их семьями, обеспечивая не только квалифицированную медицинскую помощь, но и искреннее эмоциональное спокойствие. Ваше благополучие - наш главный приоритет."
        : isEn
        ? "We build lasting relationships with our clients and their families, providing not just medical excellence, but emotional support and peace of mind. Your well-being is our top priority."
        : isTr
        ? "Danışanlarımız ve aileleriyle kalıcı, güvene dayalı ilişkiler kuruyoruz. Yalnızca tıbbi standartlarda mükemmel bakım sunmakla kalmıyor, aynı zamanda duygusal destek ve huzur sağlıyoruz. Sağlığınız ve huzurunuz ilk önceliğimizdir."
        : isAr
        ? "نبني علاقات دائمة قائمة على الثقة مع مرضانا وعائلاتهم. لا نقدم رعاية طبية متقدمة فحسب، بل نمنح الأسرة الأمان العاطفي وراحة البال. صحة وسلامة مريضكم هي غايتنا الأولى."
        : "Wir bauen dauerhafte, vertrauensvolle Beziehungen zu unseren Klienten und ihren Familien auf. Dabei bieten wir nicht nur fachärztlich verordnete Spitzenpflege, sondern auch emotionalen Halt und Sicherheit. Ihr Wohlbefinden steht an erster Stelle.",
      badges: [
        {
          title: isUz ? "Mehribon jamoa" : isRu ? "Чуткая команда" : isEn ? "Compassionate Team" : isTr ? "Empatik Ekip" : isAr ? "فريق متعاطف" : "Einfühlsames Team",
          icon: Heart,
        },
        {
          title: isUz ? "Xavfsizlik va ishonch" : isRu ? "Безопасность и доверие" : isEn ? "Safety & Trust" : isTr ? "Güven ve Emniyet" : isAr ? "أمان وثقة" : "Sicherheit & Vertrauen",
          icon: ShieldCheck,
        },
        {
          title: isUz ? "Oilaviy yondashuv" : isRu ? "Семейный подход" : isEn ? "Family Centered" : isTr ? "Aile Odaklı" : isAr ? "محورها الأسرة" : "Familienzentriert",
          icon: Users,
        },
        {
          title: isUz ? "Yuqori sifat" : isRu ? "Высокое качество" : isEn ? "Excellence in Care" : isTr ? "Mükemmel Kalite" : isAr ? "جودة استثنائية" : "Exzellente Qualität",
          icon: Star,
        },
      ],
    },
    approach: {
      eyebrow: isUz ? "BIZNING YONDASHUVIMIZ" : isRu ? "НАШ ПОДХОД" : isEn ? "OUR APPROACH" : isTr ? "BAKIM YAKLAŞIMIMIZ" : isAr ? "نهجنا في الرعاية" : "UNSER PFLEGEANSATZ",
      title: isUz
        ? "Hayotning har bir bosqichida kompleks parvarish"
        : isRu
        ? "Комплексный уход на каждом этапе жизни"
        : isEn
        ? "Holistic Care for Every Stage of Life"
        : isTr
        ? "Yaşamın Her Dönemi İçin Bütüncül Bakım"
        : isAr
        ? "رعاية شاملة لكل مرحلة من مراحل الحياة"
        : "Ganzheitliche Pflege für jede Lebensphase",
      desc: isUz
        ? "Operatsiyadan keyin sog'ayishdan tortib keksa yoshdagi uzoq muddatli qo'llab-quvvatlashgacha - bizning hamshiralik parvarishimiz sizning ehtiyojlaringizga moslashadi, hamisha mehr va professionallik bilan."
        : isRu
        ? "От выздоровления после операции до долгосрочной поддержки в пожилом возрасте - наш сестринский уход гибко подстраивается под ваши потребности, неизменно с теплом и профессионализмом."
        : isEn
        ? "From recovery and rehabilitation to long-term elderly support, our nursing care adapts to your needs - always with compassion and professionalism."
        : isTr
        ? "Ameliyat sonrası iyileşmeden uzun vadeli yaşlı bakımına kadar; bakım hizmetimiz ihtiyaçlarınıza esnek şekilde uyum sağlar - her zaman şefkat ve yüksek uzmanlıkla."
        : isAr
        ? "من التعافي بعد الجراحة وحتى الرعاية طويلة الأمد لكبار السن، تتكيف خدماتنا التمريضية بمرونة مع متطلباتكم - دائماً بإنسانية وكفاءة مهنية راقية."
        : "Von der Genesung nach Operationen bis zur verlässlichen Langzeitbetreuung passt sich unsere Pflege flexibel Ihren Bedürfnissen an - stets mit Mitgefühl und höchster Fachkompetenz.",
      btn: isUz ? "Xizmatlar haqida ko'proq bilish" : isRu ? "Узнать больше об услугах" : isEn ? "Explore Our Services" : isTr ? "Hizmetlerimizi Keşfedin" : isAr ? "استكشف خدماتنا" : "Leistungen entdecken",
      stages: [
        {
          title: isUz ? "Keksalik yoshi" : isRu ? "Пожилой возраст" : isEn ? "Senior Care" : isTr ? "Yaşlı Bakımı" : isAr ? "رعاية كبار السن" : "Seniorenpflege",
          desc: isUz
            ? "Mustaqillik va farovonlikni qo'llab-quvvatlash."
            : isRu
            ? "Поддержание независимости и благополучия."
            : isEn
            ? "Promoting independence and well-being."
            : isTr
            ? "Bağımsızlık ve esenliğin desteklenmesi."
            : isAr
            ? "تعزيز الاستقلالية الذاتية والراحة."
            : "Förderung von Selbstständigkeit & Wohlbefinden.",
          image: "/images/nursing/stage-senior.webp",
        },
        {
          title: isUz ? "Operatsiyalardan keyin" : isRu ? "После операций" : isEn ? "Post-Surgical Care" : isTr ? "Ameliyat Sonrası Bakım" : isAr ? "الرعاية بعد الجراحة" : "Postoperative Pflege",
          desc: isUz
            ? "Uyda xavfsiz va ishonchli tiklanish."
            : isRu
            ? "Безопасное и надежное восстановление дома."
            : isEn
            ? "Safe and effective recovery at home."
            : isTr
            ? "Ev ortamında güvenli ve etkili iyileşme."
            : isAr
            ? "تعافٍ آمن وفعال في راحة المنزل."
            : "Sichere und wirksame Erholung zu Hause.",
          image: "/images/nursing/stage-postsurgical.webp",
        },
        {
          title: isUz ? "Reabilitatsiya" : isRu ? "Реабилитация" : isEn ? "Rehabilitation Care" : isTr ? "Rehabilitasyon Bakımı" : isAr ? "رعاية التأهيل الطبي" : "Rehabilitationspflege",
          desc: isUz
            ? "Sog'ayish va harakatchanlikni tiklashda yordam."
            : isRu
            ? "Помощь в восстановлении и подвижности."
            : isEn
            ? "Support for recovery and mobility."
            : isTr
            ? "İyileşme süreci ve hareket kabiliyetine destek."
            : isAr
            ? "دعم الشفاء واستعادة القدرة على الحركة."
            : "Unterstützung für Genesung und Mobilität.",
          image: "/images/nursing/stage-rehab.webp",
        },
        {
          title: isUz ? "Surunkali yaralar" : isRu ? "Хронические раны" : isEn ? "Wound Recovery" : isTr ? "Yara Tedavisi" : isAr ? "علاج الجروح" : "Wundversorgung",
          desc: isUz
            ? "Ehtiyotkorona bitirish va bog'lov muolajalari."
            : isRu
            ? "Бережное заживление и перевязки."
            : isEn
            ? "Accelerated tissue repair and healing."
            : isTr
            ? "Modern, aşamalara uygun yara iyileşmesi."
            : isAr
            ? "التئام حديث للجروح يواكب مراحل الشفاء."
            : "Moderne phasengerechte Wundheilung.",
          image: "/images/services/wundversorgung.webp",
        },
      ],
    },
    testimonials: {
      eyebrow: isUz ? "BEMORLARNING FIKRLARI" : isRu ? "ОТЗЫВЫ ПАЦИЕНТОВ" : isEn ? "PATIENT TESTIMONIALS" : isTr ? "HASTA DENEYİMLERİ" : isAr ? "آراء المرضى وعائلاتهم" : "ERFAHRUNGSBERICHTE",
      title: isUz
        ? "Haqiqiy hikoyalar. Haqiqiy yordam."
        : isRu
        ? "Реальные истории. Реальная помощь."
        : isEn
        ? "Real Stories. Real Impact."
        : isTr
        ? "Gerçek Hikayeler. Gerçek Destek."
        : isAr
        ? "قصص واقعية. عون حقيقي وملموس."
        : "Echte Geschichten. Echte Hilfe.",
      desc: isUz
        ? "Jamoamiz g'amxo'rligi bemorlar va ularning yaqinlari hayotini qay darajada yaxshilaganini ularning o'zidan bilib oling."
        : isRu
        ? "Узнайте от пациентов и их близких, как забота нашей команды изменила их жизнь к лучшему."
        : isEn
        ? "Hear from families who have experienced the difference our nursing care makes."
        : isTr
        ? "Bakımımızın günlük yaşamda yarattığı somut farkı hasta ve ailelerinin deneyimlerinden öğrenin."
        : isAr
        ? "تعرف على الأثر الإيجابي الحقيقي الذي تحدثه رعايتنا التمريضية في الحياة اليومية للعائلات."
        : "Erfahren Sie von Familien, welchen spürbaren Unterschied unsere Pflege im Alltag macht.",
      btnMore: isUz ? "Barcha fikrlar +" : isRu ? "Все отзывы +" : isEn ? "Read More Reviews +" : isTr ? "Diğer Değerlendirmeler +" : isAr ? "المزيد من التقييمات +" : "Weitere Bewertungen +",
      cards: [
        {
          quote: isUz
            ? "«NabiOta HomeCare hamshiralari nihoyatda e'tiborli, punktual va professional. Ular oyoqdagi operatsiyadan keyingi murakkab yarani davolashni o'z zimmalariga olishdi va bir oy ichida hammasi butunlay bitib ketdi!»"
            : isRu
            ? "«Медсёстры NabiOta HomeCare невероятно чуткие, пунктуальные и профессиональные. Они взяли на себя обработку сложной раны после операции на стопе, и за месяц всё идеально зажило!»"
            : isEn
            ? "“The nurses from NabiOta HomeCare are kind, punctual, and remarkably skilled. They treated a complicated postoperative wound, and it healed completely within four weeks!”"
            : isTr
            ? "“NabiOta HomeCare ekibi son derece sevecen, dakik ve yüksek yetkinliğe sahip. Sertifikalı yara yönetimi sayesinde haftalardır duraksayan ameliyat yaram nihayet tamamen kapandı!”"
            : isAr
            ? "«طواقم NabiOta HomeCare في قمة اللطف والدقة والمهنية العالية. بفضل الإدارة المعتمدة للجروح، التئم جرحي الجراحي تماماً بعد أسابيع من المعاناة!»"
            : "„Die Pflegekräfte von NabiOta HomeCare sind herzlich, pünktlich und hochkompetent. Dank des zertifizierten Wundmanagements ist meine postoperative Wunde nach wochenlangem Stillstand endlich vollkommen verheilt!“",
          name: "Sarah L.",
          role: isUz ? "Bemor, Myonxengladbax" : isRu ? "Пациентка, Мёнхенгладбах" : isEn ? "Patient, Mönchengladbach" : isTr ? "Hasta, Mönchengladbach" : isAr ? "مريضة، مونشنغلادباخ" : "Patientin, Mönchengladbach",
          avatar: "/images/nursing/avatar-sarah.webp",
        },
        {
          quote: isUz
            ? "«Biriktirilgan hamshira tufayli onam o'zini mutlaqo xavfsiz his qilmoqda. Ular parvarish darajasini oshirishga yordam berishdi va dorilarni tarqatishni to'liq o'z zimmalariga olishdi.»"
            : isRu
            ? "«Благодаря закрепленной медсестре моя мама чувствует себя в полной безопасности. Они помогли оформить повышение степени ухода и взяли на себя выдачу лекарств.»"
            : isEn
            ? "“Thanks to the primary nurse system, my mother feels completely secure at home. They guided us through the Pflegegrad upgrade and handle all medications flawlessly.”"
            : isTr
            ? "“Sabit primer hemşire sayesinde annem evinde kendini tamamen güvende hissediyor. Ekip ayrıca bakım derecesinin yükseltilmesi başvurusunda da bize mükemmel destek oldu.”"
            : isAr
            ? "«بفضل نظام الممرض المخصص الثابت، تشعر والدتي بالأمان التام في بيتها. كما ساعدنا الفريق باحترافية في إجراءات رفع درجة الرعاية لدى الصندوق.»"
            : "„Dank der festen Bezugspflegekraft fühlt sich meine Mutter zu Hause rundum geborgen. Das Team hat uns auch beim Antrag auf Höherstufung des Pflegegrads optimal zur Seite gestanden.“",
          name: "James T.",
          role: isUz ? "Bemorning o'g'li (Pflegegrad 3)" : isRu ? "Сын пациентки (Pflegegrad 3)" : isEn ? "Son of Patient (Care Level 3)" : isTr ? "Hasta Yakını (Bakım Derecesi 3)" : isAr ? "ابن مريضة (درجة الرعاية 3)" : "Sohn einer Klientin (Pflegegrad 3)",
          avatar: "/images/nursing/avatar-james.webp",
        },
        {
          quote: isUz
            ? "«Oila a'zosidek samimiy munosabat. Shifoxonadan chiqqandan so'ng dadamga zond va inyeksiyalar kerak bo'lganda, NabiOta mutaxassislari kuniga ikki marta qat'iy jadval bo'yicha kelishdi. Katta rahmat!»"
            : isRu
            ? "«Отношение как к члену семьи. Когда после больницы папе требовался зонд и инъекции, специалисты NabiOta приезжали дважды в день точно по графику. Огромное спасибо!»"
            : isEn
            ? "“They treat you like family. When my father required tube feeding and injections after hospital discharge, NabiOta nurses were there reliably twice a day. True lifesavers.”"
            : isTr
            ? "“Burada gerçekten aileden biri gibi ilgi görüyorsunuz. Babam hastaneden çıktıktan sonra tüple beslenme ve iğnelere ihtiyaç duyduğunda NabiOta HomeCare anında imdadımıza yetişti.”"
            : isAr
            ? "«رعاية تتسم بدفء إنساني حقيقي كأنك بين أهلك. عندما احتاج والدي للتغذية بالأنبوب والحقن بعد خروجه من المستشفى، كانت NabiOta HomeCare حاضرة فوراً.»"
            : "„Hier wird man mit echter Herzenswärme betreut. Als mein Vater nach der Klinik Sondenernährung und Injektionen brauchte, war NabiOta HomeCare sofort zur Stelle. Höchste Verlässlichkeit!“",
          name: "Linda M.",
          role: isUz ? "Bemorning qizi" : isRu ? "Дочь пациента" : isEn ? "Daughter of Patient" : isTr ? "Hasta Yakını" : isAr ? "ابنة مريض" : "Angehörige eines Patienten",
          avatar: "/images/nursing/avatar-linda.webp",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: isUz ? "Ko'p beriladigan savollar" : isRu ? "Часто задаваемые вопросы" : isEn ? "Frequently Asked Questions" : isTr ? "Sıkça Sorulan Sorular" : isAr ? "الأسئلة الشائعة" : "Häufig gestellte Fragen",
      items: [
        {
          q: isUz
            ? "Behandlungspflege (SGB V) va Grundpflege (SGB XI) o'rtasidagi farq nima?"
            : isRu
            ? "В чем разница между Behandlungspflege (SGB V) и Grundpflege (SGB XI)?"
            : isEn
            ? "What is the difference between Clinical Care (SGB V) and Basic Care (SGB XI)?"
            : isTr
            ? "Behandlungspflege (SGB V) ile Grundpflege (SGB XI) arasındaki fark nedir?"
            : isAr
            ? "ما الفرق بين الرعاية الطبية العلاجية (SGB V) والرعاية الأساسية (SGB XI)؟"
            : "Was ist der Unterschied zwischen Behandlungspflege (SGB V) und Grundpflege (SGB XI)?",
          a: isUz
            ? "Behandlungspflege (SGB V) - bu shifokor tomonidan tayinlangan tibbiy muolajalardir (inyeksiyalar, bog'lamalar, tomchilatib quyish, dorilar). Ular tibbiy sug'urta tomonidan 100% to'lanadi. Grundpflege (SGB XI) - bu gigiyena, ovqatlanish va kiyinishdagi yordam bo'lib, tayinlangan Pflegegrad bo'yicha parvarish kassasi tomonidan moliyalashtiriladi."
            : isRu
            ? "Behandlungspflege (SGB V) - это медицинские процедуры, назначенные врачом (уколы, перевязки, капельницы, таблетки). Они на 100% оплачиваются медицинской страховкой. Grundpflege (SGB XI) - это помощь в гигиене, питании и одевании, которая финансируется кассой по уходу в соответствии с присвоенным Pflegegrad."
            : isEn
            ? "Treatment care (SGB V) consists of clinical interventions prescribed by a doctor (injections, wound dressings, IVs, medications) and is 100% paid by health insurance. Basic care (SGB XI) covers personal hygiene, mobilization, and nutrition, funded by the long-term care insurance according to your Pflegegrad (1-5)."
            : isTr
            ? "SGB V kapsamındaki tedavi bakımı (Behandlungspflege), hekim tarafından reçete edilen tıbbi uygulamaları kapsar (örneğin enjeksiyonlar, yara pansumanları, ilaç verilmesi) ve masrafları tamamen sağlık sigortası tarafından karşılanır. SGB XI kapsamındaki temel bakım (Grundpflege) ise vücut temizliği, giyinme ve beslenme gibi bedensel yardımları içerir ve ilgili bakım derecesinin (Pflegegrad 1-5) ayni yardım bütçesi üzerinden finanse edilir."
            : isAr
            ? "تشمل الرعاية الطبية العلاجية (SGB V) التدابير الطبية الموصوفة من الطبيب (مثل الحقن، تبديل الضمادات، إعطاء الأدوية) ويغطيها التأمين الصحي بالكامل بنسبة 100%. أما الرعاية التمريضية الأساسية (SGB XI) فتشمل المساعدة الجسدية (النظافة، ارتداء الملابس، التغذية) وتُمول عبر ميزانية درجة الرعاية المعتمدة للمريض (Pflegegrad 1-5)."
            : "Die Behandlungspflege nach SGB V umfasst ärztlich verordnete medizinische Maßnahmen (z.B. Injektionen, Wundverbände, Medikamentengabe) und wird vollständig von der Krankenkasse bezahlt. Die Grundpflege nach SGB XI umfasst körperbezogene Hilfen (Waschen, Kleiden, Ernährung) und wird über das Sachleistungsbudget des jeweiligen Pflegegrads finanziert.",
        },
        {
          q: isUz
            ? "NabiOta HomeCare parvarishni qanchalik tez boshlay oladi?"
            : isRu
            ? "Как быстро NabiOta HomeCare может приступить к уходу?"
            : isEn
            ? "How quickly can NabiOta HomeCare initiate services?"
            : isTr
            ? "NabiOta HomeCare bakıma ne kadar sürede başlayabilir?"
            : isAr
            ? "ما مدى سرعة NabiOta HomeCare في بدء تقديم الرعاية؟"
            : "Wie schnell kann die NabiOta HomeCare die Versorgung aufnehmen?",
          a: isUz
            ? "Shoshilinch holatlarda (masalan, statsionardan chiqarilganda yoki o'tkir yarada) biz birinchi qo'ng'iroq yoki retsept topshirilgandan keyin 24-48 soat ichida parvarishni boshlaymiz."
            : isRu
            ? "В срочных случаях (например, при выписке из стационара или острой ране) мы начинаем уход в течение 24-48 часов после первого звонка или передачи рецепта."
            : isEn
            ? "In urgent cases, such as immediate hospital discharge or acute wound treatment, we can initiate care within 24 to 48 hours following an initial phone consultation or recipe transfer."
            : isTr
            ? "Acil durumlarda - özellikle kısa süreli hastane taburculuklarında veya taze ameliyat yaralarında - iletişime geçtikten sonra genellikle 24 ila 48 saat içinde bakımı başlatabiliyoruz."
            : isAr
            ? "في الحالات العاجلة - وخاصة عند الخروج السريع من المستشفى أو وجود جروح جراحية طازجة - يمكننا عادةً بدء تقديم الرعاية في غضون 24 إلى 48 ساعة من التواصل معنا."
            : "In dringlichen Fällen - insbesondere bei kurzfristiger Krankenhausentlassung oder frischen Operationswunden - können wir die Versorgung in der Regel innerhalb von 24 bis 48 Stunden nach Kontaktaufnahme starten.",
        },
        {
          q: isUz
            ? "§ 37 Abs. 3 SGB XI bo'yicha majburiy maslahat tashriflarini o'tkazasizmi?"
            : isRu
            ? "Проводите ли вы обязательные консультации по § 37 Abs. 3 SGB XI?"
            : isEn
            ? "Do you conduct mandatory counseling visits under § 37.3 SGB XI?"
            : isTr
            ? "§ 37 Abs. 3 SGB XI uyarınca yasal zorunlu danışmanlık ziyaretlerini yapıyor musunuz?"
            : isAr
            ? "هل تقومون بإجراء زيارات الاستشارة القانونية الإلزامية وفق § 37 Abs. 3 SGB XI؟"
            : "Führen Sie gesetzliche Beratungseinsätze nach § 37 Abs. 3 SGB XI durch?",
          a: isUz
            ? "Ha, bizning sertifikatlangan maslahatchilarimiz Pflegegeld oluvchilar uchun uyda majburiy tashriflarni o'tkazadilar (Pflegegrad 2-3 uchun har yarim yilda bir marta, Pflegegrad 4-5 uchun har chorakda bir marta) va hisobotni to'g'ridan-to'g'ri sug'urta kassangizga yuboradilar."
            : isRu
            ? "Да, наши сертифицированные консультанты проводят обязательные визиты на дому для получателей Pflegegeld (раз в полгода для Pflegegrad 2-3, раз в квартал для Pflegegrad 4-5) и сразу направляют отчет в вашу страховую кассу."
            : isEn
            ? "Yes, our certified care advisors conduct official home visits for recipients of statutory care allowances (semi-annually for Pflegegrad 2-3, quarterly for Pflegegrad 4-5) and submit documentation directly to your insurer."
            : isTr
            ? "Evet, diplomalı bakım danışmanlarımız yasal olarak zorunlu olan danışmanlık ziyaretlerini evinizde gerçekleştirir ve bakım parası (Pflegegeld) hakkınızın kesintisiz devam etmesi için onay belgesini doğrudan bakım sandığınıza iletir."
            : isAr
            ? "نعم، ينفذ مستشارو الرعاية المعتمدون لدينا زيارات الاستشارة الإلزامية في منزلكم، ونرسل التقرير الرسمي مباشرة إلى صندوق الرعاية لضمان استمرار صرف بدل الرعاية النقدي دون أي انقطاع."
            : "Ja, unsere examinierten Pflegeberater führen die gesetzlich vorgeschriebenen Beratungseinsätze bei Ihnen zu Hause durch und leiten den Nachweis direkt an Ihre Pflegekasse weiter, damit Ihr Pflegegeldanspruch gesichert bleibt.",
        },
        {
          q: isUz
            ? "Ish vaqtidan tashqari navbatchilik xizmati va chaqiruv qanday tashkil etilgan?"
            : isRu
            ? "Как организована дежурная служба и вызов в нерабочее время?"
            : isEn
            ? "How is out-of-hours on-call availability handled?"
            : isTr
            ? "Mesai saatleri dışındaki nöbetçi ve acil durum hizmetiniz nasıl düzenleniyor?"
            : isAr
            ? "كيف يتم تنظيم الاستجابة للطوارئ والتواصل خارج أوقات العمل الرسمية؟"
            : "Wie ist die Erreichbarkeit außerhalb der regulären Zeiten geregelt?",
          a: isUz
            ? "Barcha doimiy bemorlarimiz uchun 24/7 kechayu kunduz telefon liniyasi ishlaydi. Holat to'satdan yomonlashganda, navbatchi hamshira maslahat beradi yoki tezda uyga yetib keladi."
            : isRu
            ? "Для всех наших постоянных пациентов действует круглосуточная телефонная линия 24/7. В случае внезапного ухудшения состояния дежурная медсестра проконсультирует или оперативно приедет на дом."
            : isEn
            ? "For registered clients, we provide a dedicated 24/7 emergency telephone hotline. In case of acute health changes or complications, our on-call nursing supervisor responds immediately."
            : isTr
            ? "Düzenli hizmet verdiğimiz danışanlarımız için yılın 365 günü 24 saat nöbetçi telefon hattımız mevcuttur. Öngörülemeyen ani sağlık bozulmalarında veya acil durumlarda diplomalı bir uzman personelimize her an ulaşılabilir."
            : isAr
            ? "نوفر لمرضانا المسجلين خط طوارئ ومناوبة هاتفية يعمل على مدار الساعة 24/7 طوال 365 يوماً في السنة. وفي حالات التدهور الصحي المفاجئ، يكون ممرض متخصص متاحاً فوراً لتقديم الدعم أو التدخل."
            : "Für unsere betreuten Klienten besteht eine 24-stündige Rufbereitschaft an 365 Tagen im Jahr. Bei unvorhergesehenen gesundheitlichen Verschlechterungen oder Notfällen ist jederzeit eine examinierte Fachkraft erreichbar.",
        },
        {
          q: isUz
            ? "Hamshiralar davlat malaka sertifikatiga egami?"
            : isRu
            ? "Имеют ли медсёстры государственную квалификацию?"
            : isEn
            ? "Is all nursing staff fully certified and insured?"
            : isTr
            ? "Tüm bakım personeli diplomalı ve resmi eğitimli mi?"
            : isAr
            ? "هل جميع أفراد طاقم التمريض مؤهلون وحاصلون على شهادات معتمدة؟"
            : "Sind alle Pflegekräfte examiniert und geschult?",
          a: isUz
            ? "Barcha xodimlarimiz - davlat namunasidagi diplomli hamshiralar (Pflegefachkräfte / Krankenschwester) bo'lib, Wundexperte ICW® sertifikatlariga ega va muntazam malaka oshirish kurslaridan o'tadilar."
            : isRu
            ? "Все наши сотрудники - это дипломированные медицинские сестры государственного образца (Pflegefachkräfte / Krankenschwester) с сертификатами Wundexperte ICW® и регулярными курсами повышения квалификации."
            : isEn
            ? "All our caregivers are state-certified registered nurses with specialized training in ICW® wound care and continuous professional development adhering to German medical standards."
            : isTr
            ? "Ekibimiz istisnasız devlet diplomalı uzman hemşirelerden oluşur. Birçoğu ICW® Yara Uzmanı, Palyatif Bakım veya Hijyen Sorumlusu gibi resmi ek uzmanlık niteliklerine sahiptir."
            : isAr
            ? "يتألف فريقنا بالكامل وبلا استثناء من ممرضين مؤهلين رسمياً وحاصلين على شهادات دولة معتمدة، ويحمل الكثير منهم مؤهلات تخصصية عليا كخبراء جروح ICW® ورعاية ملطفة ومسؤولي تعقيم."
            : "Unser Team besteht ausnahmslos aus staatlich examinierten Pflegefachkräften. Viele verfügen über anerkannte Zusatzqualifikationen wie Wundexperte ICW®, Palliativpflege oder Hygienebeauftragte.",
        },
      ],
    },
    cta: {
      eyebrow: isUz ? "BIZ BILAN BOG'LANING" : isRu ? "СВЯЖИТЕСЬ С НАМИ" : isEn ? "GET IN TOUCH" : isTr ? "BİZİMLE İLETİŞİME GEÇİN" : isAr ? "تواصلوا معنا الآن" : "JETZT KONTAKT AUFNEHMEN",
      title: isUz
        ? "Sizning salomatligingiz va xotirjamligingiz - ishonchli qo'llarda"
        : isRu
        ? "Ваше здоровье и покой - в надежных руках"
        : isEn
        ? "Your Well-Being. Our Dedicated Mission."
        : isTr
        ? "Sağlığınız. En Güvenilir Bakım Ellerinde."
        : isAr
        ? "صحتكم وسلامتكم. في أيدي تمريضية أمينة ومحترفة."
        : "Ihre Gesundheit. In besten pflegerischen Händen.",
      desc: isUz
        ? "Bepul dastlabki tashrifni kelishib olish va individual parvarish rejasini tuzish uchun bizga qo'ng'iroq qiling yoki ariza qoldiring."
        : isRu
        ? "Позвоните нам или оставьте заявку, чтобы согласовать первичный бесплатный визит и составить индивидуальный план ухода."
        : isEn
        ? "Call us or submit an inquiry to schedule a complimentary initial assessment and tailored home nursing plan."
        : isTr
        ? "Evinizde veya taburculuk öncesi hastanede ücretsiz, bağlayıcılığı olmayan bir ilk danışmanlık görüşmesi için bugün bize ulaşın."
        : isAr
        ? "تواصلوا معنا اليوم لترتيب استشارة أولية مجانية وغير ملزمة في منزلكم أو في المستشفى قبل موعد الخروج."
        : "Kontaktieren Sie uns noch heute für ein kostenfreies, unverbindliches Erstgespräch bei Ihnen zu Hause oder in der Klinik vor der Entlassung.",
      btn: isUz ? "Maslahatga yozilish" : isRu ? "Записаться на консультацию" : isEn ? "Contact HomeCare Team" : isTr ? "Ücretsiz İlk Danışmanlık Randevusu Alın" : isAr ? "حجز موعد استشارة أولية مجانية" : "Kostenlose Erstberatung vereinbaren",
      phone: "+49 2161 4794560",
      email: "info@nabiota-health-group.de",
      location: isUz ? "Myonxengladbax, Germaniya" : isRu ? "Мёнхенгладбах, Германия" : isEn ? "Mönchengladbach, Germany" : isTr ? "Mönchengladbach, Almanya" : isAr ? "مونشنغلادباخ، ألمانيا" : "Mönchengladbach, Deutschland",
      stamp1: isUz ? "Bugungi g'amxo'rlik" : isRu ? "Забота сегодня" : isEn ? "Caring Today" : isTr ? "Bugün gösterilen özen" : isAr ? "عناية اليوم" : "Fürsorge heute",
      stamp2: isUz ? "sog'lom" : isRu ? "для здорового" : isEn ? "for a Healthier" : isTr ? "daha sağlıklı bir" : isAr ? "من أجل غدٍ أكثر" : "für ein gesünderes",
      stamp3: isUz ? "ertangi kun uchun ~" : isRu ? "завтра ~" : isEn ? "Tomorrow ~" : isTr ? "yarın içindir ~" : isAr ? "صحة وعافية ~" : "Morgen ~",
    },
  };



  return {
    heroData,
    heroBadges,
    t,
  };
}
