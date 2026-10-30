import React from "react";
import { SupportedLocale } from "@/lib/i18n";
import { Award, Stethoscope, Building2 } from "@/lib/icons";

function ScalpelIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m18 2-4 4-9.5 9.5a1 1 0 0 0 0 1.4l2.1 2.1a1 1 0 0 0 1.4 0L17.5 9.5 22 5Z" />
      <path d="m14 6 4 4" />
    </svg>
  );
}

// ── Custom SVG Icons Matching User Design ──
function CloverEmblemIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 4.5C10.5 4.5 9 5.5 9 7.5c0 2.2 3 4.5 3 4.5s3-2.3 3-4.5c0-2-1.5-3-3-3Z" />
      <path d="M12 19.5c1.5 0 3-1 3-3 0-2.2-3-4.5-3-4.5s-3 2.3-3 4.5c0 2 1.5 3 3 3Z" />
      <path d="M4.5 12C4.5 10.5 5.5 9 7.5 9c2.2 0 4.5 3 4.5 3s-2.3 3-4.5 3c-2 0-3-1.5-3-3Z" />
      <path d="M19.5 12c0 1.5-1 3-3 3-2.2 0-4.5-3-4.5-3s2.3-3 4.5-3c2 0 3 1.5 3 3Z" />
      <circle cx="12" cy="12" r="1.5" />
    </svg>
  );
}

function TeamSpecialistsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="8" r="2.5" />
      <path d="M7 19v-2a5 5 0 0 1 10 0v2" />
      <circle cx="5" cy="11" r="1.8" />
      <path d="M2.5 19v-1.5a3.5 3.5 0 0 1 3.5-3.5" />
      <circle cx="19" cy="11" r="1.8" />
      <path d="M21.5 19v-1.5a3.5 3.5 0 0 0-3.5-3.5" />
    </svg>
  );
}

function TechNodesIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="8" cy="8" r="2.2" />
      <circle cx="16" cy="8" r="2.2" />
      <circle cx="8" cy="16" r="2.2" />
      <circle cx="16" cy="16" r="2.2" />
      <path d="M10.2 8h3.6M8 10.2v3.6M16 10.2v3.6M10.2 16h3.6" />
    </svg>
  );
}

function HeartContourIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function DiagnosticIcon({ className = "w-4.5 h-4.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

function MinimallyInvasiveIcon({ className = "w-4.5 h-4.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m14 4 6 6-9 9-6-6Z" />
      <path d="M4 20h4" />
    </svg>
  );
}

function TherapyPlanIcon({ className = "w-4.5 h-4.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="8" cy="8" r="2.2" />
      <circle cx="16" cy="8" r="2.2" />
      <circle cx="8" cy="16" r="2.2" />
      <circle cx="16" cy="16" r="2.2" />
    </svg>
  );
}

interface MedizinischeFachbereicheProps {
  locale: SupportedLocale;
}



export function getMedizinischeFachbereicheTranslations(locale: SupportedLocale = "de") {
  const isRu = locale === "ru";
  const isEn = locale === "en";
  const isTr = locale === "tr";
  const isAr = locale === "ar";
  const isUz = locale === "uz";

  const heroData = {
    title: isUz ? "Tibbiy mutaxassisliklar" : isRu ? "Медицинские отделения" : isEn ? "Medical Departments" : isTr ? "Tıbbi Uzmanlık Bölümleri" : isAr ? "الأقسام الطبية التخصصية" : "Medizinische Fachbereiche",
    subtitle: isUz
      ? "Ambulator va yuqori darajadagi ixtisoslashtirilgan tibbiyot"
      : isRu
      ? "Амбулаторная и специализированная медицина высшего уровня"
      : isEn
      ? "Outpatient & Specialized Medicine of Excellence"
      : isTr
      ? "En Üst Düzey Ayakta ve Uzmanlaşmış Tıp Hizmetleri"
      : isAr
      ? "طب تخصصي ورعاية عيادات خارجية على أعلى مستوى"
      : "Ambulante & Fachärztliche Spitzenmedizin",
    description: isUz
      ? "Umumiy amaliyotdan tortib yuqori texnologiyali jarrohlik markazlarigacha bo'lgan ixtisoslashtirilgan markazlar orqali Germaniyaning eng yuqori sifat standartlari asosida keng qamrovli ambulator tibbiy yordam."
      : isRu
      ? "Комплексная амбулаторная помощь от первичного приема до высокотехнологичных хирургических центров. Ведущие врачи-специалисты, передовое оборудование и междисциплинарный подход."
      : isEn
      ? "Comprehensive outpatient care through specialized medical centers, from primary prevention to cutting-edge surgical procedures under highest German quality standards."
      : isTr
      ? "Birinci basamak koruyucu hekimlikten yüksek teknolojili cerrahi müdahalelere kadar, en yüksek Alman kalite standartlarında uzmanlaşmış tıp merkezleri aracılığıyla kapsamlı ayakta bakım."
      : isAr
      ? "رعاية شاملة للعيادات الخارجية عبر مراكز طبية متخصصة، من الوقاية الأولية وحتى الإجراءات الجراحية المتطورة وفق أعلى معايير الجودة الألمانية."
      : "Umfassende ambulante Versorgung durch spezialisierte Facharztzentren, von Allgemeinmedizin bis hin zu chirurgischen Spitzenleistungen nach höchsten deutschen Qualitätsstandards.",
    badges: [
      {
        icon: <Award className="w-5 h-5 text-[#ECCF96]" />,
        title: isUz ? "Eng yuqori" : isRu ? "Высокие" : isEn ? "Highest" : isTr ? "En Yüksek" : isAr ? "أعلى" : "Höchste",
        sub: isUz ? "Standartlar" : isRu ? "Стандарты" : isEn ? "Standards" : isTr ? "Standartlar" : isAr ? "المعايير" : "Standards",
      },
      {
        icon: <Stethoscope className="w-5 h-5 text-[#ECCF96]" />,
        title: isUz ? "Mutaxassis" : isRu ? "Врачебная" : isEn ? "Medical" : isTr ? "Uzman Hekim" : isAr ? "خبرة طبية" : "Fachärztliche",
        sub: isUz ? "Ekspertizasi" : isRu ? "Экспертиза" : isEn ? "Expertise" : isTr ? "Uzmanlığı" : isAr ? "تخصصية" : "Expertise",
      },
      {
        icon: <Building2 className="w-5 h-5 text-[#ECCF96]" />,
        title: isUz ? "Holding" : isRu ? "В составе" : isEn ? "Group" : isTr ? "Holding" : isAr ? "شبكة" : "Holding",
        sub: isUz ? "Tarkibida" : isRu ? "Холдинга" : isEn ? "Network" : isTr ? "Ağı" : isAr ? "المجموعة" : "Verbund",
      },
    ],
  };

  // ── Overview & Core Capabilities Section (From PDF & Previous Version) ──
  const overviewData = {
    eyebrow: isUz ? "KOMPETENTSIYA VA TALABCHANLIK" : isRu ? "КОМПЕТЕНЦИИ И СТАНДАРТЫ" : isEn ? "COMPETENCE & QUALITY" : isTr ? "YETKİNLİK VE STANDARTLAR" : isAr ? "الكفاءة والمعايير" : "KOMPETENZ & ANSPRUCH",
    title: isUz
      ? "Nemis standartlari asosidagi tuzilmaviy yuqori darajali yordam"
      : isRu
      ? "Высокотехнологичная медицинская помощь немецкого качества"
      : isEn
      ? "Structured Healthcare Excellence according to German Standards"
      : isTr
      ? "Alman Standartlarında Yapılandırılmış Üstün Sağlık Hizmeti"
      : isAr
      ? "رعاية صحية منظمة بمعايير التميز الألمانية"
      : "Strukturierte Spitzenversorgung nach deutschen Standards",
    desc: isUz
      ? "NabiOta® guruhining tibbiy yo'nalishlari oilaviy shifokorlik asosiy yordamini yuqori ixtisoslashtirilgan jarrohlik markazlari va statsionar klinik yordam bilan birlashtiradi. Ixtisoslashtirilgan shifokorlar markazlarimiz (MVZ) va rejalashtirilgan klinikamizda umumiy tibbiyot, kardiologiya, ortopediya, neyroxirurgiya, plastik jarrohlik hamda anesteziologiya eng yuqori nemis sifat standartlariga muvofiq qamrab olingan."
      : isRu
      ? "Медицинские направления группы NabiOta® объединяют первичную терапевтическую помощь с высокоспециализированными хирургическими центрами и стационарной клиникой. В наших специализированных центрах (MVZ) и планируемой клинике представлены терапия, кардиология, ортопедия, нейрохирургия, пластическая хирургия и анестезиология по высшим немецким стандартам качества."
      : isEn
      ? "The medical divisions of the NabiOta® Group combine primary general medical care with highly specialized surgical centers and inpatient facilities. Across our outpatient medical centers (MVZ) and upcoming clinic, we cover general medicine, cardiology, orthopedics, neurosurgery, plastic surgery, and anesthesiology according to highest German standards."
      : isTr
      ? "NabiOta® Grubu'nun tıbbi uzmanlık alanları, birinci basamak aile hekimliği ve dahiliye hizmetlerini yüksek uzmanlıklı cerrahi merkezler ve yatarak tedavi kliniğiyle birleştirir. Tıp merkezlerimizde (MVZ) ve planlanan kliniğimizde genel tıp, kardiyoloji, ortopedi, beyin ve sinir cerrahisi, plastik cerrahi ve anesteziyoloji en yüksek Alman kalite standartlarında sunulmaktadır."
      : isAr
      ? "تجمع الأقسام الطبية لمجموعة نابي أوتا (NabiOta®) بين الرعاية العامة الأولية والمراكز الجراحية عالية التخصص والمستشفى السريري. وفي مراكزنا الطبية التخصصية (MVZ) والمستشفى المخطط له، نغطي الطب العام، وأمراض القلب، وجراحة العظام، وجراحة المخ والأعصاب، والجراحة التجميلية، والتخدير وفق أرقى معايير الجودة الألمانية."
      : "Die medizinischen Fachbereiche der NabiOta® Gruppe verbinden hausärztliche Grundversorgung mit hochspezialisierten operativen Zentren und stationärer Klinikversorgung. In unseren Facharztzentren (MVZ) und der geplanten Fachklinik decken wir Allgemeinmedizin, Kardiologie, Orthopädie, Neurochirurgie, plastische Chirurgie sowie Anästhesiologie nach höchsten deutschen Qualitätsstandards ab.",
    capabilitiesTitle: isUz ? "Mutaxassisliklar va markazlar tuzilmasi" : isRu ? "Структура медицинских подразделений" : isEn ? "Clinical Divisions & Entities" : isTr ? "Tıbbi Bölümler ve Merkezler Yapısı" : isAr ? "هيكل الأقسام والمراكز الطبية" : "Struktur der Fachbereiche & Zentren",
    capabilities: [
      isUz
        ? "Terapiya va oilaviy MVZ: umumiy amaliyot, ichki kasalliklar, kardiologiya va diabetologiya"
        : isRu
        ? "MVZ Терапии: семейная медицина, общая терапия, кардиология и диабетология"
        : isEn
        ? "Primary Care MVZ: General practice, internal medicine, cardiology & diabetology"
        : isTr
        ? "Dahiliye ve Birinci Basamak MVZ: Genel tıp, iç hastalıkları, kardiyoloji ve diyabetoloji"
        : isAr
        ? "مركز MVZ للرعاية الأولية والباطنة: الطب العام، الأمراض الباطنية، القلب والسكري"
        : "MVZ Hausärztlich / Internistisch: Allgemeinmedizin, Innere Medizin, Kardiologie & Diabetologie",
      isUz
        ? "Jarrohlik va anesteziologiya MVZ: ortopediya, travmatologiya, neyroxirurgiya va plastik jarrohlik"
        : isRu
        ? "MVZ Хирургии: ортопедия, травматология, нейрохирургия позвоночника и пластическая хирургия"
        : isEn
        ? "Surgical MVZ: Orthopedics, traumatology, spinal neurosurgery & plastic surgery"
        : isTr
        ? "Cerrahi MVZ: Ortopedi, travmatoloji, omurga nöroşirürjisi ve plastik cerrahi"
        : isAr
        ? "مركز MVZ للجراحة والتخدير: جراحة العظام، الحوادث والإصابات، جراحة العمود الفقري والجراحة التجميلية"
        : "MVZ Chirurgie & Anästhesiologie: Orthopädie, Unfallchirurgie, Neurochirurgie & Plastische Chirurgie",
      isUz
        ? "Ambulator jarrohlik (AOP) va zamonaviy anesteziologiya markazi"
        : isRu
        ? "Амбулаторный операционный центр (AOP) и специализированное отделение анестезиологии"
        : isEn
        ? "Outpatient Surgical Center (AOP) & specialized department for anesthesiology"
        : isTr
        ? "Günübirlik Cerrahi Merkezi (AOP) ve modern anesteziyoloji birimi"
        : isAr
        ? "مركز الجراحة اليومية (AOP) وقسم التخدير المتقدم"
        : "Ambulantes Operieren (AOP) & modernes Anästhesiezentrum",
      isUz
        ? "NabiOta® Clinics Germany GmbH: § 30 GewO bo'yicha statsionar koykalarga ega ixtisoslashtirilgan klinika"
        : isRu
        ? "NabiOta® Clinics Germany GmbH: стационарная клиника по § 30 GewO с коечным фондом"
        : isEn
        ? "NabiOta® Clinics Germany GmbH: Inpatient surgical clinic under § 30 GewO with ward beds"
        : isTr
        ? "NabiOta® Clinics Germany GmbH: Yataklı servisleri bulunan § 30 GewO onaylı ihtisas kliniği"
        : isAr
        ? "NabiOta® Clinics Germany GmbH: مستشفى تخصصي للأقسام الداخلية وفق § 30 GewO مع غرف التنويم"
        : "NabiOta® Clinics Germany GmbH: Stationäre Fachklinik nach § 30 GewO mit Bettenstationen",
      isUz
        ? "Barcha davolovchi shifokorlar uchun § 95 SGB V bo'yicha to'liq tibbiy erkinlik va mustaqillik"
        : isRu
        ? "Полная врачебная независимость клинических решений (§ 95 SGB V)"
        : isEn
        ? "Guaranteed clinical autonomy and freedom of medical decisions (§ 95 SGB V)"
        : isTr
        ? "Tüm hekimler için § 95 SGB V uyarınca tıbbi kararlarda tam bağımsızlık"
        : isAr
        ? "استقلالية طبية كاملة في القرارات العلاجية وفق المادة 95 من SGB V لكافة الأطباء"
        : "Volle ärztliche Weisungsfreiheit nach § 95 SGB V für alle Behandelnden",
    ],
    advantagesTitle: isUz ? "Holding tarkibidagi afzalliklaringiz" : isRu ? "Преимущества в составе холдинга" : isEn ? "Group Advantages" : isTr ? "Holding Bünyesindeki Avantajlarınız" : isAr ? "مزاياكم ضمن شبكة المجموعة" : "Ihre Vorteile im Verbund",
    advantages: [
      isUz
        ? "Barcha mutaxassis shifokorlarning bir tom ostidagi fanlararo hamkorligi"
        : isRu
        ? "Междисциплинарное сотрудничество всех специалистов под одной крышей"
        : isEn
        ? "Interdisciplinary collaboration of all specialists under one roof"
        : isTr
        ? "Tüm uzman hekimlerin tek çatı altında disiplinler arası iş birliği"
        : isAr
        ? "تعاون متعدد التخصصات بين كافة الأطباء والاستشاريين تحت سقف واحد"
        : "Interdisziplinäre Zusammenarbeit aller Fachärzte unter einem Dach",
      isUz
        ? "Diagnostikadan jarrohlikka, reabilitatsiyaga va ambulator parvarishga uzluksiz o'tish"
        : isRu
        ? "Прямой переход от амбулаторного приема к хирургии и реабилитации"
        : isEn
        ? "Seamless transition from outpatient diagnosis to surgery and rehabilitation"
        : isTr
        ? "Tanıdan ameliyata, rehabilitasyona ve evde bakıma kesintisiz geçiş"
        : isAr
        ? "انتقال سلس من التشخيص إلى العمليات الجراحية والتأهيل والرعاية المنزلية"
        : "Nahtloser Übergang von Diagnostik zu OP, Reha und ambulanter Pflege",
      isUz
        ? "Tezkor qabulga yozilish va tibbiy xulosalarni raqamli uzatish"
        : isRu
        ? "Быстрая запись на прием и цифровая передача медицинских заключений"
        : isEn
        ? "Rapid appointment scheduling and digital report transfer"
        : isTr
        ? "Hızlı randevu temini ve dijital bulgu/rapor aktarımı"
        : isAr
        ? "حجوزات مواعيد سريعة ونقل رقمي آمن لكافة التقارير الطبية"
        : "Schnelle Terminvergabe und digitale Befundübermittlung",
      isUz
        ? "Germaniya klinik ko'rsatmalariga qat'iy rioya qilish va bemorlar xavfsizligining eng yuqori darajasi"
        : isRu
        ? "Строгое соблюдение немецких клинических рекомендаций и стандартов безопасности"
        : isEn
        ? "Strict compliance with German clinical guidelines and patient safety standards"
        : isTr
        ? "Alman klinik kılavuzlarına sıkı bağlılık ve en üst düzey hasta güvenliği"
        : isAr
        ? "التزام صارم بالإرشادات الطبية الألمانية وأعلى معايير سلامة المرضى"
        : "Strenge Einhaltung deutscher Leitlinien und höchste Patientensicherheit",
    ],
    stats: [
      {
        value: "2 MVZ",
        label: isUz ? "MVZ ixtisoslashgan markazlari" : isRu ? "Специализированных центра" : isEn ? "Specialist MVZs" : isTr ? "MVZ Uzmanlık Merkezi" : isAr ? "مراكز MVZ تخصصية" : "MVZ Facharztzentren",
      },
      {
        value: "§ 30",
        label: isUz ? "Klinika ruxsatnomasi (GewO)" : isRu ? "Клиника (GewO)" : isEn ? "Inpatient Clinic (GewO)" : isTr ? "Klinik Ruhsatı (GewO)" : isAr ? "ترخيص مستشفى (GewO)" : "Klinikzulassung (GewO)",
      },
      {
        value: "§ 95",
        label: isUz ? "Shifokor mustaqilligi (SGB V)" : isRu ? "Врачебная автономия (SGB V)" : isEn ? "Clinical Autonomy (SGB V)" : isTr ? "Tıbbi Bağımsızlık (SGB V)" : isAr ? "استقلالية طبية (SGB V)" : "Ärztl. Unabhängigkeit (SGB V)",
      },
    ],
    entitiesTitle: isUz ? "Holdingning tibbiy kompaniyalari" : isRu ? "Медицинские структуры холдинга" : isEn ? "Medical Group Entities" : isTr ? "Holdingin Tıbbi İştirakleri" : isAr ? "الشركات والمؤسسات الطبية للمجموعة" : "Medizinische Gesellschaften des Holdings",
    entities: [
      {
        tag: "MVZ 1",
        title: isUz ? "Terapiya va oilaviy MVZ" : isRu ? "MVZ Терапии и семейной медицины" : isEn ? "MVZ Primary Care & Internal Medicine" : isTr ? "Dahiliye ve Birinci Basamak MVZ" : isAr ? "مركز MVZ للرعاية الأولية والباطنة" : "MVZ Hausärztlich / Internistisch",
        sub: isUz ? "Ambulator asosiy va ixtisoslashgan yordam" : isRu ? "Амбулаторная помощь" : isEn ? "Outpatient Primary Care" : isTr ? "Ayakta Temel ve Uzmanlık Bakımı" : isAr ? "رعاية تخصصية وعامة للعيادات الخارجية" : "Ambulante Grund- & Schwerpunktversorgung",
        items: [
          isUz ? "Umumiy tibbiyot va oilaviy shifokorlik yordami" : isRu ? "Семейная медицина и первичная помощь" : isEn ? "General Practice & Family Medicine" : isTr ? "Genel tıp ve aile hekimliği hizmetleri" : isAr ? "الطب العام وخدمات طب الأسرة" : "Allgemeinmedizin & Hausärztliche Versorgung",
          isUz ? "Ichki kasalliklar, kardiologiya va diabetologiya" : isRu ? "Внутренние болезни, кардиология и диабет" : isEn ? "Internal Medicine, Cardiology & Diabetes" : isTr ? "İç hastalıkları, kardiyoloji ve diyabetoloji" : isAr ? "الأمراض الباطنية، طب القلب والسكري" : "Innere Medizin, Kardiologie & Diabetologie",
          isUz ? "Profilaktika tibbiyoti, chek-aplar va DMP dasturlari" : isRu ? "Профилактические чекапы и программы DMP" : isEn ? "Check-ups & Chronic Disease Programs (DMP)" : isTr ? "Önleyici tıp, check-up ve DMP programları" : isAr ? "الطب الوقائي، الفحوصات الشاملة وبرامج DMP" : "Präventionsmedizin, Check-ups & DMP-Programme",
        ],
      },
      {
        tag: "MVZ 2",
        title: isUz ? "Jarrohlik va anesteziologiya MVZ" : isRu ? "MVZ Хирургии и анестезиологии" : isEn ? "MVZ Surgery & Anesthesiology" : isTr ? "Cerrahi ve Anesteziyoloji MVZ" : isAr ? "مركز MVZ للجراحة والتخدير" : "MVZ Chirurgie & Anästhesiologie",
        sub: isUz ? "Ixtisoslashtirilgan jarrohlik yo'nalishlari" : isRu ? "Специализированная хирургия" : isEn ? "Specialized Surgical Care" : isTr ? "Uzmanlaşmış Cerrahi Disiplinler" : isAr ? "تخصصات جراحية دقيقة" : "Operative Spezialdisziplinen",
        items: [
          isUz ? "Ortopediya va jarohat jarrohligi" : isRu ? "Ортопедия и травматологическая хирургия" : isEn ? "Orthopedics & Trauma Surgery" : isTr ? "Ortopedi ve travmatoloji cerrahisi" : isAr ? "جراحة العظام والإصابات والحوادث" : "Orthopädie & Unfallchirurgie",
          isUz ? "Neyroxirurgiya (umurtqa pog'onasi va og'riq terapiyasi)" : isRu ? "Нейрохирургия (позвоночник и боль)" : isEn ? "Neurosurgery (Spine & Pain Therapy)" : isTr ? "Beyin ve sinir cerrahisi (omurga ve ağrı tedavisi)" : isAr ? "جراحة الأعصاب (العمود الفقري وعلاج الألم)" : "Neurochirurgie (Wirbelsäule & Schmerztherapie)",
          isUz ? "Plastik jarrohlik va ambulator operatsiyalar (AOP)" : isRu ? "Пластическая и амбулаторные операции (AOP)" : isEn ? "Plastic Surgery & Outpatient ORs (AOP)" : isTr ? "Plastik cerrahi ve günübirlik ameliyatlar (AOP)" : isAr ? "الجراحة التجميلية والجراحات اليومية (AOP)" : "Plastische Chirurgie & Ambulantes Operieren (AOP)",
        ],
      },
      {
        tag: "Klinik",
        title: "NabiOta® Clinics Germany GmbH",
        sub: isUz ? "Statsionar yordam (§ 30 GewO)" : isRu ? "Стационарная клиника (§ 30 GewO)" : isEn ? "Inpatient Clinic (§ 30 GewO)" : isTr ? "Yatarak Tedavi (§ 30 GewO)" : isAr ? "رعاية الأقسام الداخلية (§ 30 GewO)" : "Stationäre Versorgung (§ 30 GewO)",
        items: [
          isUz ? "Statsionar operatsiya xonalari va yotoq o'rinli bo'limlar" : isRu ? "Операционные блоки и коечные палаты" : isEn ? "Inpatient Operating Suites & Ward Beds" : isTr ? "Yataklı ameliyathane kompleksleri ve servis odaları" : isAr ? "غرف عمليات سريرية وأجنحة تنويم مجهزة" : "Stationäre OP-Säle & bettenführende Stationen",
          isUz ? "Operatsiyadan keyingi kuzatuv va og'riq terapiyasi" : isRu ? "Круглосуточный послеоперационный мониторинг" : isEn ? "24/7 Post-Surgical Clinical Monitoring" : isTr ? "Ameliyat sonrası 7/24 izlem ve ağrı yönetimi" : isAr ? "مراقبة طبية وعلاج للألم على مدار الساعة بعد الجراحة" : "Postoperative Überwachung & Schmerztherapie",
          isUz ? "Hamkorliklar va ta'minot shartnomalari (§ 108/109 SGB V)" : isRu ? "Интеграция с больничным планом (§ 108/109 SGB V)" : isEn ? "Hospital Plan Integration (§ 108/109 SGB V)" : isTr ? "İş birlikleri ve hizmet anlaşmaları (§ 108/109 SGB V)" : isAr ? "شراكات وعقود تقديم الرعاية (§ 108/109 SGB V)" : "Kooperationen & Versorgungsverträge (§ 108/109 SGB V)",
        ],
      },
    ],
  };

  // ── Photo 1: Spotlight Section (Kardiologie) ──
  const spotlight = {
    eyebrow: isUz ? "DIQQAT MARKAZIDA" : isRu ? "В ФОКУСЕ" : isEn ? "IN FOCUS" : isTr ? "ODAK NOKTASI" : isAr ? "تسليط الضوء" : "IM FOKUS",
    title: isUz
      ? "Kardiologiya - sog'lom yurak\nuchun aniqlik"
      : isRu
      ? "Кардиология - точность\nдля здорового сердца"
      : isEn
      ? "Cardiology - Precision\nfor a Healthy Heart"
      : isTr
      ? "Kardiyoloji - Sağlıklı Bir Kalp\nİçin Yüksek Hassasiyet"
      : isAr
      ? "طب القلب - دقة متناهية\nمن أجل قلب سليم"
      : "Kardiologie - Präzision\nfür ein gesundes Herz",
    desc: isUz
      ? "Bizning kardiologiya jamoamiz yurak-qon tomir kasalliklarini kompleks tashxislash va individual davolashni taklif etadi. Zamonaviy texnologiyalar va ko'p yillik tajriba bilan biz sizga yana yuqori hayot sifatini qaytaramiz."
      : isRu
      ? "Наша кардиологическая команда предлагает комплексную диагностику и персонализированную терапию сердечно-сосудистых заболеваний. Благодаря современным технологиям и многолетнему опыту мы возвращаем пациентам высокое качество жизни."
      : isEn
      ? "Our cardiology team offers comprehensive diagnostics and personalized therapy for cardiovascular conditions. With cutting-edge technology and extensive clinical experience, we ensure you regain your quality of life."
      : isTr
      ? "Kardiyoloji ekibimiz, kardiyovasküler hastalıklar için kapsamlı tanı ve kişiye özel tedavi sunar. En modern teknoloji ve uzun yıllara dayanan deneyimimizle yaşam kalitenizi yeniden kazanmanızı sağlıyoruz."
      : isAr
      ? "يقدم فريقنا المتخصص في طب القلب تشخيصاً شاملاً وعلاجاً مخصصاً لأمراض القلب والأوعية الدموية. بفضل التقنيات المتقدمة وسنوات الخبرة الطويلة، نحرص على استعادة جودة حياتكم وصحتكم."
      : "Unser kardiologisches Team bietet Ihnen eine umfassende Diagnostik und individuelle Therapie bei Herz-Kreislauf-Erkrankungen. Mit modernster Technik und langjähriger Erfahrung sorgen wir dafür, dass Sie wieder mehr Lebensqualität gewinnen.",
    pillTitle: isUz ? "Kardiologiya" : isRu ? "Кардиология" : isEn ? "Cardiology" : isTr ? "Kardiyoloji" : isAr ? "طب القلب" : "Kardiologie",
    pillSubtitle: isUz
      ? "Zamonaviy diagnostika. Individual terapiya."
      : isRu
      ? "Современная диагностика. Индивидуальная терапия."
      : isEn
      ? "Modern Diagnostics. Personalized Therapy."
      : isTr
      ? "Modern Tanı. Bireysel Tedavi."
      : isAr
      ? "تشخيص حديث. علاج مخصص."
      : "Moderne Diagnostik. Individuelle Therapie.",
    features: [
      {
        icon: DiagnosticIcon,
        label: isUz
          ? "Eng zamonaviy diagnostika usullari"
          : isRu
          ? "Передовые методы диагностики"
          : isEn
          ? "Advanced Diagnostic Methods"
          : isTr
          ? "En Modern Tanı Yöntemleri"
          : isAr
          ? "أحدث طرق التشخيص"
          : "Modernste Diagnostikverfahren",
      },
      {
        icon: MinimallyInvasiveIcon,
        label: isUz
          ? "Minimal invaziv davolash usullari"
          : isRu
          ? "Малоинвазивные методы лечения"
          : isEn
          ? "Minimally Invasive Treatments"
          : isTr
          ? "Minimal İnvaziv Tedaviler"
          : isAr
          ? "أساليب علاج طفيفة التوغل"
          : "Minimalinvasive Behandlungsmethoden",
      },
      {
        icon: TherapyPlanIcon,
        label: isUz
          ? "Individual terapiya rejalari"
          : isRu
          ? "Индивидуальные планы терапии"
          : isEn
          ? "Individual Therapy Plans"
          : isTr
          ? "Kişiye Özel Terapi Planları"
          : isAr
          ? "خطط علاجية مخصصة"
          : "Individuelle Therapiepläne",
      },
    ],
    linkText: isUz
      ? "Kardiologiya haqida batafsil ma'lumot"
      : isRu
      ? "Узнать больше о кардиологии"
      : isEn
      ? "Learn more about Cardiology"
      : isTr
      ? "Kardiyoloji Hakkında Daha Fazla Bilgi"
      : isAr
      ? "تعرف على المزيد حول طب القلب"
      : "Mehr über die Kardiologie erfahren",
  };

  // ── Photo 2: Full-Width Edge-to-Edge Section (Warum NabiOta? Mehr als Medizin.) ──
  const whySection = {
    eyebrow: isUz ? "NEGA NABIOTA?" : isRu ? "ПОЧЕМУ НАБИОТА?" : isEn ? "WHY NABIOTA?" : isTr ? "NEDEN NABIOTA?" : isAr ? "لماذا نابي أوتا؟" : "WARUM NABIOTA?",
    title: isUz ? "Tibbiyotdan ko'prog'i." : isRu ? "Больше чем медицина." : isEn ? "More than Medicine." : isTr ? "Tıptan Daha Fazlası." : isAr ? "أكثر من مجرد طب." : "Mehr als Medizin.",
    desc: isUz
      ? "Biz tibbiy mukammallikni insoniylik bilan uyg'unlashtiramiz. Taniqli mutaxassis shifokorlardan iborat fanlararo jamoamiz sog'lig'ingiz, ishonchingiz va kelajagingiz uchun birgalikda ishlaydi."
      : isRu
      ? "Мы объединяем передовую медицину с искренней человечностью. Наша междисциплинарная команда ведущих врачей-специалистов работает сообща - ради вашего здоровья, доверия и уверенного будущего."
      : isEn
      ? "We combine medical excellence with human care. Our interdisciplinary team of renowned medical specialists works hand in hand - for your health, your trust, and your future."
      : isTr
      ? "Tıbbi mükemmeliyeti insani şefkatle birleştiriyoruz. Seçkin uzman hekimlerden oluşan disiplinler arası ekibimiz, sağlığınız, güveniniz ve geleceğiniz için el ele çalışıyor."
      : isAr
      ? "نجمع بين التميز الطبي واللمسة الإنسانية الصادقة. يعمل فريقنا الطبي متعدد التخصصات يداً بيد - من أجل صحتكم وثقتكم ومستقبلكم."
      : "Wir verbinden medizinische Exzellenz mit Menschlichkeit. Unser interdisziplinäres Team aus renommierten Fachärztinnen und Fachärzten arbeitet Hand in Hand - für Ihre Gesundheit, Ihr Vertrauen und Ihre Zukunft.",
    btn: isUz ? "Qadriyatlarimiz" : isRu ? "Наши ценности" : isEn ? "Our Values" : isTr ? "Değerlerimiz" : isAr ? "قيمنا المؤسسية" : "Unsere Werte",
    stats: [
      {
        icon: CloverEmblemIcon,
        label: isUz ? "6+ Mutaxassislik sohasi" : isRu ? "6+ Направлений" : isEn ? "6+ Departments" : isTr ? "6+ Uzmanlık Alanı" : isAr ? "+6 تخصصات طبية" : "6+ Fachbereiche",
      },
      {
        icon: TeamSpecialistsIcon,
        label: isUz
          ? "100+ Mutaxassislar"
          : isRu
          ? "100+ Специалистов"
          : isEn
          ? "100+ Specialists"
          : isTr
          ? "100+ Uzman Hekim"
          : isAr
          ? "+100 طبيب واستشاري"
          : "100+ Spezialistinnen & Spezialisten",
      },
      {
        icon: TechNodesIcon,
        label: isUz ? "Eng zamonaviy texnologiyalar" : isRu ? "Передовые технологии" : isEn ? "State-of-the-Art Technology" : isTr ? "En Son Teknoloji" : isAr ? "أحدث التقنيات الطبية" : "Modernste Technologie",
      },
      {
        icon: HeartContourIcon,
        label: isUz ? "Yaxlit g'amxo'rlik" : isRu ? "Комплексная забота" : isEn ? "Holistic Care" : isTr ? "Bütüncül Bakım" : isAr ? "رعاية شاملة ومتكاملة" : "Ganzheitliche Betreuung",
      },
    ],
  };

  // ── Photo 3: Team Section (Unser Team - Kompetenz. Empathie. Teamgeist.) ──
  const teamSection = {
    eyebrow: isUz ? "BIZNING JAMOA" : isRu ? "НАША КОМАНДА" : isEn ? "OUR TEAM" : isTr ? "EKİBİMİZ" : isAr ? "فريقنا الطبي" : "UNSER TEAM",
    title: isUz
      ? "Kompetentsiya. Hamdardlik.\nJamoaviy ruh."
      : isRu
      ? "Компетентность. Эмпатия.\nКомандный дух."
      : isEn
      ? "Competence. Empathy.\nTeam Spirit."
      : isTr
      ? "Yetkinlik. Empati.\nTakım Ruhu."
      : isAr
      ? "الكفاءة. التعاطف.\nوروح الفريق."
      : "Kompetenz. Empathie.\nTeamgeist.",
    desc: isUz
      ? "Bizning mutaxassis shifokorlarimiz eng yuqori tibbiy kompetentsiya, ko'p yillik tajriba va yaqin fanlararo hamkorlikni ta'minlaydi. Sizning salomatligingiz uchun birga."
      : isRu
      ? "Наши врачи-специалисты обеспечивают высочайший уровень медицинской экспертизы, многолетний практический опыт и слаженное междисциплинарное взаимодействие. Вместе ради вашего здоровья."
      : isEn
      ? "Our medical specialists stand for the highest clinical excellence, extensive experience, and seamless interdisciplinary cooperation. Together for your well-being."
      : isTr
      ? "Uzman hekimlerimiz en yüksek tıbbi yetkinliği, uzun yıllara dayanan klinik tecrübeyi ve yakın disiplinler arası iş birliğini temsil eder. Sağlığınız için birlikte çalışıyoruz."
      : isAr
      ? "يمثل أطباؤنا الاستشاريون أعلى درجات الكفاءة الطبية، والخبرة العملية الممتدة، والتعاون الوثيق بين مختلف التخصصات. معاً من أجل صحتكم."
      : "Unsere Fachärztinnen und Fachärzte stehen für höchste medizinische Kompetenz, langjährige Erfahrung und eine enge, interdisziplinäre Zusammenarbeit. Gemeinsam für Ihre Gesundheit.",
    btn: isUz ? "Jamoamiz haqida batafsil" : isRu ? "Подробнее о команде" : isEn ? "Meet Our Team" : isTr ? "Ekibimizi Tanıyın" : isAr ? "تعرف على فريقنا" : "Mehr über unser Team",
    doctors: [
      {
        name: isRu ? "Д-р мед. Анна Келлер" : "Dr. med. Anna Keller",
        role: isUz ? "Ichki kasalliklar va kardiologiya" : isRu ? "Терапия и кардиология" : isEn ? "Internal Medicine & Cardiology" : isTr ? "İç Hastalıkları ve Kardiyoloji" : isAr ? "الأمراض الباطنية وطب القلب" : "Innere Medizin & Kardiologie",
        desc: isUz
          ? "15 yildan ortiq klinik tajribaga ega ichki kasalliklar va noinvaziv kardiologiya bo'yicha yetakchi mutaxassis."
          : isRu
          ? "Ведущий специалист по комплексной терапии и неинвазивной кардиодиагностике с более чем 15-летним клиническим стажем."
          : isEn
          ? "Lead specialist in comprehensive internal medicine and non-invasive cardiovascular diagnostics with over 15 years of experience."
          : isTr
          ? "15 yılı aşkın klinik deneyimiyle kapsamlı iç hastalıkları ve non-invaziv kardiyolojik tanı alanında baş uzman hekim."
          : isAr
          ? "استشارية أولى في الأمراض الباطنية والتشخيص غير الجراحي لأمراض القلب بخبرة سريرية تزيد عن 15 عاماً."
          : "Leitende Fachärztin für Innere Medizin und nicht-invasive Kardiologie mit über 15 Jahren fundierter klinischer Erfahrung.",
        image: "/images/areas/doc-anna-keller.webp",
      },
      {
        name: isRu ? "Проф. д-р Михаэль Вебер" : "Prof. Dr. Michael Weber",
        role: isUz ? "Umumiy va visseral jarrohlik" : isRu ? "Хирургия" : isEn ? "General & Visceral Surgery" : isTr ? "Genel Cerrahi ve Operatif Tıp" : isAr ? "الجراحة العامة والجراحة التنظيرية" : "Chirurgie & Operative Medizin",
        desc: isUz
          ? "Umumiy va minimal invaziv jarrohlik bo'yicha taniqli ekspert, jarrohlik markazimiz rahbari."
          : isRu
          ? "Эксперт в области общей и малоинвазивной хирургии, руководитель междисциплинарного хирургического центра NabiOta."
          : isEn
          ? "Renowned specialist in general and minimally invasive surgery, leading our interdisciplinary surgical center."
          : isTr
          ? "Genel ve minimal invaziv cerrahi alanında tanınmış uzman, cerrahi tıp merkezimizin tıbbi direktörü."
          : isAr
          ? "خبير رائد في الجراحة العامة والجراحات طفيفة التوغل، ومدير مركزنا الجراحي متعدد التخصصات."
          : "Renommierter Experte für Allgemein- und minimalinvasive Chirurgie, Leitung unseres operativen Facharztzentrums.",
        image: "/images/areas/doc-michael-weber.webp",
      },
      {
        name: isRu ? "Д-р мед. Сара Хоффманн" : "Dr. med. Sarah Hoffmann",
        role: isUz ? "Nevrologiya va neyrodiagnostika" : isRu ? "Неврология" : isEn ? "Neurology & Neurodiagnostics" : isTr ? "Nöroloji ve Nörodiagnostik" : isAr ? "طب الأعصاب والتشخيص العصبي" : "Neurologie & Neurodiagnostik",
        desc: isUz
          ? "Zamonaviy neyrodiagnostika va yaxlit terapiya konsepsiyalariga ixtisoslashgan nevrolog shifokor."
          : isRu
          ? "Специалист по клинической неврологии и нейродиагностике, эксперт по персонализированным схемам лечения."
          : isEn
          ? "Specialist in clinical neurology, neurodiagnostics, and individual therapy concepts for neurological health."
          : isTr
          ? "Modern nörodiagnostik ve bütüncül terapi konseptleri üzerine uzmanlaşmış nöroloji uzmanı hekim."
          : isAr
          ? "استشارية طب الأعصاب المتخصصة في التشخيص العصبي الحديث ومفاهيم العلاج الشاملة."
          : "Fachärztin für Neurologie mit Schwerpunkt auf moderner Neurodiagnostik und ganzheitlichen Therapiekonzepten.",
        image: "/images/areas/doc-sarah-hoffmann.webp",
      },
    ],
  };

  // ── Photo 4: Pre-footer Mountain Banner (Gesundheit beginnt mit Vertrauen) ──
  const ctaSection = {
    eyebrow: isUz
      ? "SALOMATLIK ISHONCHDAN BOSHLANADI"
      : isRu
      ? "ЗДОРОВЬЕ НАЧИНАЕТСЯ С ДОВЕРИЯ"
      : isEn
      ? "HEALTH BEGINS WITH TRUST"
      : isTr
      ? "SAĞLIK GÜVENLE BAŞLAR"
      : isAr
      ? "الصحة تبدأ بالثقة"
      : "GESUNDHEIT BEGINNT MIT VERTRAUEN",
    title: isUz
      ? "Tibbiy mutaxassisliklarimiz haqida\nsavollaringiz bormi?"
      : isRu
      ? "У вас есть вопросы о наших\nмедицинских отделениях?"
      : isEn
      ? "Do you have questions about our\nmedical specialties?"
      : isTr
      ? "Tıbbi uzmanlık alanlarımız hakkında\nsorularınız mı var?"
      : isAr
      ? "هل لديك استفسارات حول\nأقسامنا الطبية التخصصية؟"
      : "Sie haben Fragen zu unseren\nmedizinischen Fachbereichen?",
    desc: isUz
      ? "Bizning jamoamiz sizga shaxsan - malakali, samimiy va shaxsiy ehtiyojlaringizga mos ravishda maslahat berishdan mamnun."
      : isRu
      ? "Наша команда с радостью проконсультирует вас лично - профессионально, внимательно и с учетом ваших индивидуальных потребностей."
      : isEn
      ? "Our team is happy to advise you personally - competently, empathetically, and tailored to your individual needs."
      : isTr
      ? "Ekibimiz size kişisel olarak danışmanlık yapmaktan mutluluk duyar; yetkin, empatik ve bireysel ihtiyaçlarınıza göre uyarlanmış."
      : isAr
      ? "يسعد فريقنا بتقديم المشورة الشخصية لكم - بكفاءة عالية، وتعاطف تام، ووفقاً لاحتياجاتكم الفردية."
      : "Unser Team berät Sie gerne persönlich - kompetent, einfühlsam und auf Ihre individuellen Bedürfnisse abgestimmt.",
    btn: isUz ? "Bog'lanish" : isRu ? "Связаться с нами" : isEn ? "Contact Us" : isTr ? "İletişime Geçin" : isAr ? "تواصل معنا" : "Kontakt aufnehmen",
  };


  return {
    heroData,
    overviewData,
    spotlight,
    whySection,
    teamSection,
    ctaSection,
  };
}
