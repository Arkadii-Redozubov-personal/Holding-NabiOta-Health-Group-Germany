"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Microscope,
  Building2,
  Cpu,
  Layers,
  ShieldAlert,
  Scale,
  CalendarCheck2,
  FileCheck2,
  Network,
  Share2,
  Activity,
  HeartPulse,
  Brain,
  TestTubes,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/layout/Container";

/**
 * PDF Section IV.4 – "NabiOta Diagnostics GmbH"
 * (Diagnostische Infrastruktur und medizinische Diagnostik)
 * Unternehmensgegenstand zur notariellen Prüfung, Infrastruktur- & GKV-Abgrenzung,
 * 8 medizinische und organisatorische Aufgaben.
 */

type Lang = "de" | "en" | "ru" | "tr" | "ar" | "uz";
type T = Record<Lang, string>;
type Icon = React.ComponentType<{ className?: string; strokeWidth?: number }>;

const c = {
  tag: {
    de: "GmbH · Diagnostische Infrastruktur · Notarieller Entwurf",
    en: "GmbH · Diagnostic Infrastructure · Notarial Draft",
    ru: "GmbH · Диагностическая инфраструктура · Проект устава",
    tr: "GmbH · Tanısal Altyapı · Noter Taslağı",
    ar: "ذ.م.م · البنية التحتية التشخيصية · مسودة التأسيس",
    uz: "GmbH · Diagnostik infratuzilma · Notarial loyiha",
  } as T,
  title: "NabiOta Diagnostics GmbH",
  subtitle: {
    de: "Diagnostische Infrastruktur und medizinische Diagnostik",
    en: "Diagnostic Infrastructure & Clinical Diagnostics",
    ru: "Диагностическая инфраструктура и клиническая диагностика",
    tr: "Tanısal Altyapı ve Klinik Tıbbi Tanı",
    ar: "البنية التحتية للتشخيص والفحوصات الطبية السريرية",
    uz: "Diagnostik infratuzilma va klinik diagnostika",
  } as T,
  lead: {
    de: "Gegenstand des Unternehmens ist die Planung, Errichtung, Ausstattung, Organisation und der Betrieb diagnostischer Einrichtungen sowie die Bereitstellung medizinischer Diagnostikinfrastruktur im jeweils rechtlich zulässigen Umfang. Sie kann diagnostische Geräte, technische Anlagen und Räumlichkeiten erwerben, mieten, vermieten und befugten medizinischen Leistungserbringern zur Nutzung überlassen.",
    en: "The company's purpose is the planning, establishment, equipping, organization, and operation of diagnostic facilities, as well as providing medical diagnostic infrastructure within the legally permissible scope. It may acquire, lease, rent, and operate diagnostic devices, technical systems, and premises, or make them available to authorized medical providers.",
    ru: "Предметом деятельности компании является планирование, создание, оснащение, организация и эксплуатация диагностических центров, а также предоставление медицинской диагностической инфраструктуры в законно допустимом объёме. Компания может приобретать, арендовать, сдавать в аренду оборудование, помещения и передавать их в пользование уполномоченным врачам.",
    tr: "Şirketin faaliyet konusu; tanı tesislerinin planlanması, inşası, donatılması, organizasyonu ve işletilmesinin yanı sıra yasal olarak izin verilen ölçüde tıbbi tanı altyapısının sağlanmasıdır. Tanı cihazları, teknik sistemler ve tesisler edinebilir, kiralayabilir, kiraya verebilir ve yetkili tıbbi hizmet sağlayıcılarının kullanımına tahsis edebilir.",
    ar: "يتمثل نشاط الشركة في تخطيط وإنشاء وتجهيز وتنظيم وتشغيل مرافق التشخيص، بالإضافة إلى توفير البنية التحتية الطبية التشخيصية في الحدود المسموح بها قانونياً. ويحق لها شراء وتأجير وتشغيل الأجهزة التشخيصية والأنظمة التقنية والمقرات وإتاحتها لمقدمي الخدمات الطبية المعتمدين.",
    uz: "Jamiyat faoliyatining predmeti qonuniy ruxsat etilgan doirada diagnostika muassasalarini rejalashtirish, barpo etish, jihozlash, tashkil etish va ulardan foydalanish, shuningdek tibbiy diagnostika infratuzilmasini taqdim etishdan iborat. U diagnostika uskunalari, texnik tizimlar va xonalarni sotib olishi, ijaraga olishi, ijaraga berishi va vakolatli tibbiy xizmat ko'rsatuvchilarga foydalanish uchun topshirishi mumkin.",
  } as T,

  spectrumEyebrow: {
    de: "Diagnostisches Spektrum",
    en: "Modality Spectrum",
    ru: "Диагностический спектр",
    tr: "Tanısal Spektrum",
    ar: "نطاق الفحوصات التشخيصية",
    uz: "Diagnostika spektri",
  } as T,
  spectrumTitle: {
    de: "Vorgesehenes diagnostisches Spektrum",
    en: "Planned Diagnostic Modality Spectrum",
    ru: "Планируемый диагностический спектр",
    tr: "Öngörülen Tanı Yöntemleri Spektrumu",
    ar: "نطاق تقنيات ووسائل التشخيص المعتمدة",
    uz: "Rejalashtirilgan diagnostika spektri",
  } as T,
  spectrumItems: [
    {
      icon: Cpu as Icon,
      title: {
        de: "Computertomographie & MRT",
        en: "Computed Tomography & MRI",
        ru: "Компьютерная томография и МРТ",
        tr: "Bilgisayarlı Tomografi & MR",
        ar: "الأشعة المقطعية والرنين المغناطيسي",
        uz: "Kompyuter tomografiyasi va MRT",
      } as T,
      desc: {
        de: "Computertomographie (CT) & Magnetresonanztomographie (MRT)",
        en: "Computed Tomography (CT) & Magnetic Resonance Imaging (MRI)",
        ru: "Компьютерная томография (КТ) и магнитно-резонансная томография (МРТ)",
        tr: "Bilgisayarlı Tomografi (BT) ve Manyetik Rezonans Görüntüleme (MR)",
        ar: "التصوير المقطعي المحوسب (CT) والرنين المغناطيسي (MRI)",
        uz: "Kompyuter tomografiyasi (KT) va magnit-rezonans tomografiya (MRT)",
      } as T,
    },
    {
      icon: Layers as Icon,
      title: {
        de: "Konventionelle Röntgendiagnostik",
        en: "Conventional Radiography",
        ru: "Рентгенодиагностика",
        tr: "Konvansiyonel Radyoloji",
        ar: "التصوير الإشعاعي الرقمي",
        uz: "Konvensional rentgenodiagnostika",
      } as T,
      desc: {
        de: "Konventionelle Röntgendiagnostik (digitales Röntgen)",
        en: "Conventional Radiography (Digital X-Ray)",
        ru: "Конвенциональная рентгенодиагностика (цифровой рентген)",
        tr: "Konvansiyonel röntgen teşhisi (dijital röntgen)",
        ar: "الأشعة السينية التقليدية (الأشعة الرقمية)",
        uz: "Konvensional rentgenodiagnostika (raqamli rentgen)",
      } as T,
    },
    {
      icon: HeartPulse as Icon,
      title: {
        de: "Ultraschalldiagnostik",
        en: "Ultrasound Diagnostics",
        ru: "Ультразвуковая диагностика",
        tr: "Ultrasonografi & Doppler",
        ar: "الموجات فوق الصوتية والدوبلر",
        uz: "Ultratovush diagnostikasi",
      } as T,
      desc: {
        de: "Medizinisch indizierte Ultraschalluntersuchungen (3D/4D-Sonographie, Doppler- & Duplexsonographie)",
        en: "Medically Indicated Ultrasound (3D/4D Sonography, Doppler & Duplex Sonography)",
        ru: "Ультразвуковые исследования по показаниям (3D/4D сонография, допплер и дуплекс)",
        tr: "Tıbbi endikasyonlu ultrason incelemeleri (3D/4D sonografi, Doppler ve Dubleks sonografi)",
        ar: "فحوصات السونار الطبية (أبعاد 3D/4D، وفحوصات الدوبلر والدوبلكس للأوعية)",
        uz: "Tibbiy ko'rsatmalarga muvofiq ultratovush tekshiruvlari (3D/4D-sonografiya, doppler va dupleks sonografiya)",
      } as T,
    },
    {
      icon: Brain as Icon,
      title: {
        de: "Neurophysiologische Diagnostik",
        en: "Neurophysiological Testing",
        ru: "Нейрофизиологическая диагностика",
        tr: "Nörofizyolojik Tanı",
        ar: "التشخيص الفسيولوجي العصبي",
        uz: "Neyrofiziologik diagnostika",
      } as T,
      desc: {
        de: "Neurophysiologische Diagnostik (EMG, ENG, EEG & evozierte Potenziale)",
        en: "Neurophysiological Testing (EMG, ENG, EEG & Evoked Potentials)",
        ru: "Нейрофизиологические исследования (ЭМГ, ЭНГ, ЭЭГ и вызванные потенциалы)",
        tr: "Nörofizyolojik tanı (EMG, ENG, EEG ve uyarılmış potansiyeller)",
        ar: "الفحوصات العصبية الوظيفية (تخطيط العضلات EMG، وتوصيل الأعصاب ENG، وتخطيط الدماغ EEG، والجهود المستحثة)",
        uz: "Neyrofiziologik diagnostika (EMG, ENG, EEG va chaqirilgan potensiallar)",
      } as T,
    },
    {
      icon: TestTubes as Icon,
      title: {
        de: "Laboratoriumsmedizin",
        en: "Clinical Laboratory",
        ru: "Лабораторная диагностика",
        tr: "Laboratuvar Tıbbı",
        ar: "الطب المخبري والتحاليل",
        uz: "Laboratoriya tibbiyoti",
      } as T,
      desc: {
        de: "Laboratoriumsmedizinische Untersuchungen, Probengewinnung, -aufbereitung & -transport",
        en: "Clinical Laboratory Diagnostics, Sample Collection, Preparation & Logistics",
        ru: "Лабораторная диагностика, организация забора, подготовки и транспортировки проб",
        tr: "Laboratuvar tıbbı incelemeleri, numune alımı, hazırlığı ve lojistiği",
        ar: "التحاليل المخبرية السريرية، وسحب العينات وتجهيزها ونقلها الآمن",
        uz: "Laboratoriya tibbiyoti tekshiruvlari, namunalarni olish, tayyorlash va tashish",
      } as T,
    },
    {
      icon: ShieldCheck as Icon,
      title: {
        de: "Weitere diagnostische Verfahren",
        en: "Additional Diagnostic Procedures",
        ru: "Дополнительные методы",
        tr: "Diğer Tanı Yöntemleri",
        ar: "إجراءات تشخيصية إضافية",
        uz: "Qo'shimcha diagnostika usullari",
      } as T,
      desc: {
        de: "Weitere diagnostische Verfahren gemäß den erforderlichen fachlichen & rechtlichen Voraussetzungen",
        en: "Additional Diagnostic Procedures subject to specialized clinical and regulatory prerequisites",
        ru: "Дополнительные методы диагностики при наличии необходимых профессиональных и правовых условий",
        tr: "Gerekli mesleki ve yasal gerekliliklere uygun ek tanı yöntemleri",
        ar: "إجراءات وفحوصات تشخيصية إضافية وفقاً للمتطلبات المهنية والتنظيمية المعتمدة",
        uz: "Zarur kasbiy va huquqiy shartlarga muvofiq qo'shimcha diagnostika usullari",
      } as T,
    },
  ],

  pillars: [
    {
      icon: Cpu as Icon,
      title: {
        de: "Infrastruktur & Betreiberpflichten",
        en: "Infrastructure & Operator Mandate",
        ru: "Инфраструктура и обязанности оператора",
        tr: "Altyapı & İşletmeci Yükümlülükleri",
        ar: "البنية التحتية ومسؤوليات التشغيل",
        uz: "Infratuzilma va operator majburiyatlari",
      } as T,
      text: {
        de: "Die Gesellschaft stellt diagnostische Geräte, technische Anlagen und Praxisräume bereit und übernimmt damit verbundene technische, administrative und organisatorische Dienstleistungen nach den gesetzlichen Betreiberanforderungen.",
        en: "The company provides diagnostic modalities, technical infrastructure, and clinical premises, delivering associated technical, administrative, and organizational services under statutory operator regulations.",
        ru: "Компания предоставляет диагностическое оборудование, инженерные системы и помещения, выполняя технические, административные и организационные функции согласно требованиям к операторам техники.",
        tr: "Şirket; tanı cihazları, teknik sistemler ve muayene odaları sağlar ve yasal işletmeci gerekliliklerine uygun teknik, idari ve organizasyonel hizmetleri üstlenir.",
        ar: "توفر الشركة الأجهزة التشخيصية والأنظمة التقنية ومقرات العيادات، وتتولى الخدمات الفنية والإدارية والتنظيمية المرتبطة بها وفق اشتراطات التشغيل القانونية.",
        uz: "Jamiyat diagnostika apparatlari, texnik tizimlar va qabul xonalarini taqdim etadi hamda qonuniy operator talablariga muvofiq tegishli texnik, ma'muriy va tashkiliy xizmatlarni o'z zimmasiga oladi.",
      } as T,
      image: "/images/diagnostik/scanner-suite.webp",
    },
    {
      icon: Scale as Icon,
      title: {
        de: "Ärztliche Weisungsfreiheit & Delegation",
        en: "Physician Autonomy & Delegation",
        ru: "Врачебная независимость и делегирование",
        tr: "Hekim Bağımsızlığı & Görev Devri",
        ar: "الاستقلالية الطبية وتفويض المهام",
        uz: "Shifokor mustaqilligi va delegatsiya",
      } as T,
      text: {
        de: "Ärztliche Leistungen und Befundungen werden ausschließlich durch berufsrechtlich befugte Ärzte unter Wahrung ihrer medizinischen Weisungsfreiheit erbracht. Delegierbare Tätigkeiten dürfen Fachpersonal unter ärztlicher Aufsicht übertragen werden.",
        en: "Medical evaluations and diagnostic reports are rendered exclusively by licensed physicians with complete clinical independence. Delegable procedures may be assigned to certified staff under medical supervision.",
        ru: "Врачебные осмотры и заключения выполняются исключительно уполномоченными врачами при полной независимости решений. Делегируемые процедуры могут передаваться среднему персоналу под контролем врача.",
        tr: "Tıbbi hizmetler ve raporlamalar, yalnızca mesleki bağımsızlıkları tam korunan yetkili hekimler tarafından yürütülür. Devredilebilir işlemler hekim gözetiminde uzman personele bırakılabilir.",
        ar: "تُقدم الخدمات والتقارير الطبية حصرياً من قبل أطباء مرخصين مع الحفاظ الكامل على استقلاليتهم السريرية. ويجوز تفويض المهام المسموح بها للكوادر الفنية تحت إشراف طبي.",
        uz: "Shifokorlik xizmatlari va tibbiy xulosalar faqat kasbiy vakolatli shifokorlar tomonidan ularning tibbiy mustaqilligi to'liq saqlangan holda amalga oshiriladi. Delegatsiya qilinishi mumkin bo'lgan vazifalar shifokor nazorati ostida malakali mutaxassislarga topshirilishi mumkin.",
      } as T,
      image: "/images/diagnostik/consultation.webp",
    },
    {
      icon: Network as Icon,
      title: {
        de: "Kooperation im NabiOta-Verbund",
        en: "Group & Network Cooperation",
        ru: "Кооперация в сети NabiOta",
        tr: "NabiOta Ağı İçi İş Birliği",
        ar: "التعاون والتنسيق ضمن شبكة نابي أوتا",
        uz: "NabiOta tarmog'idagi hamkorlik",
      } as T,
      text: {
        de: "Kooperationen mit Ärzten, Laboren, Krankenhäusern und NabiOta-MVZ sind vertraglich geregelt. Die Zuständigkeiten für Behandlung, Gerätebetrieb, Qualitätssicherung, Datenschutz und Abrechnung sind strikt getrennt und eindeutig zugeordnet.",
        en: "Structured cooperations with physicians, laboratories, clinics, and group MVZs are formalized by contract. Responsibilities for patient care, equipment operations, QA, GDPR, and billing remain distinctly separated.",
        ru: "Сотрудничество с врачами, лабораториями, клиниками и MVZ сети оформляется договорами. Ответственность за лечение, эксплуатацию техники, контроль качества, защиту данных и расчёты строго разграничена.",
        tr: "Hekimler, laboratuvarlar, klinikler ve grup MVZ'leri ile iş birlikleri sözleşmeye bağlıdır. Tedavi, cihaz kullanımı, kalite güvencesi, veri koruma ve faturalandırma sorumlulukları kesin olarak ayrılmıştır.",
        ar: "يخضع التعاون مع الأطباء والمختبرات والمستشفيات ومراكز MVZ التابعة للمجموعة لعقود واضحة تفصل بدقة بين مسؤوليات العلاج وتشغيل الأجهزة وضمان الجودة وحماية البيانات والفوترة.",
        uz: "Shifokorlar, laboratoriyalar, kasalxonalar va NabiOta MVZlari bilan hamkorlik shartnoma asosida tartibga solinadi. Davolash, uskunalarni ishlatish, sifat kafolati, ma'lumotlar himoyasi va hisob-kitoblar bo'yicha mas'uliyat qat'iy ajratilgan va aniq belgilangan.",
      } as T,
      image: "/images/areas/consulting.webp",
    },
  ],

  disclaimer: {
    title: {
      de: "Rechtliche Abgrenzung zur vertragsärztlichen Versorgung & GKV-Abrechnung",
      en: "Regulatory Separation: Outpatient Accreditation & Statutory Billing",
      ru: "Правовое разграничение: допуск к практике и расчёты по системе ОМС (GKV)",
      tr: "Sözleşmeli Hekimlik ve Yasal Sigorta (GKV) Faturalandırmasına Dair Hukuki Sınır",
      ar: "الحدود القانونية لخدمات التأمين الصحي الحكومي (GKV)",
    uz: "Shartnoma shifokorligi va davlat tibbiy sug'urtasi (GKV) hisob-kitoblaridan huquqiy farqlanish",
    } as T,
    body: {
      de: "Soweit die Gesellschaft ausschließlich Infrastruktur oder organisatorische Leistungen bereitstellt, verbleiben die medizinische Indikationsstellung, ärztliche Leistungserbringung, Befundung und ärztliche Abrechnung bei den jeweils befugten Leistungserbringern. Leistungen zulasten der gesetzlichen Krankenversicherung (GKV) werden ausschließlich durch hierzu berechtigte Leistungserbringer im Rahmen ihrer jeweiligen Zulassungen, Genehmigungen und Abrechnungsbefugnisse erbracht und abgerechnet. Der Unternehmensgegenstand und die Handelsregistereintragung allein begründen keine Berechtigung zur vertragsärztlichen Versorgung oder GKV-Abrechnung.",
      en: "Insofar as the company solely provides infrastructure or organizational services, clinical indication, physician performance, reporting, and statutory billing remain with the respective authorized practitioners. Services reimbursed by statutory health insurance (GKV) are provided and billed solely by accredited providers holding appropriate approvals and billing quotas. Corporate registration alone does not establish contract-physician accreditation or direct GKV billing capacity.",
      ru: "В той мере, в какой компания предоставляет исключительно инфраструктуру или организационные услуги, определение медицинских показаний, выполнение процедур, составление заключений и выставление счетов остаются за уполномоченными врачами. Оказание и оплата услуг за счёт обязательного медицинского страхования (GKV) осуществляются исключительно допущенными врачами/учреждениями. Регистрация компании в торговом реестре сама по себе не даёт права на расчёты по системе GKV.",
      tr: "Şirketin yalnızca altyapı veya organizasyonel hizmetler sunduğu durumlarda; tıbbi endikasyon, hekim uygulaması, raporlama ve hekim faturalandırması ilgili yetkili hizmet sağlayıcılarda kalır. Yasal sağlık sigortası (GKV) kapsamındaki hizmetler yalnızca ruhsat ve faturalandırma yetkisine sahip yetkili sağlayıcılarca sunulur ve fatura edilir. Şirket faaliyet konusu veya ticaret sicil kaydı tek başına sözleşmeli hekimlik veya GKV faturalandırma yetkisi doğurmaz.",
      ar: "في الحالات التي تقتصر فيها الشركة على توفير البنية التحتية أو الخدمات التنظيمية، يظل تحديد الاستطباب الطبي وتقديم العلاج وكتابة التقارير والفوترة من اختصاص مقدمي الرعاية المرخصين حصراً. ولا تمنح سجلات الشركة التجارية بمفردها حق تقديم خدمات التأمين الحكومي (GKV) دون تراخيص فردية معتمدة.",
    uz: "Jamiyat faqat infratuzilma yoki tashkiliy xizmatlarni taqdim etgan taqdirda, tibbiy ko'rsatmalarni belgilash, tibbiy xizmat ko'rsatish, xulosalar berish va shifokor hisob-kitoblari vakolatli xizmat ko'rsatuvchilarda qoladi. Davlat tibbiy sug'urtasi (GKV) hisobidan xizmatlar faqat tegishli ruxsatnoma va hisob-kitob vakolatlariga ega bo'lgan vakolatli xizmat ko'rsatuvchilar tomonidan ko'rsatiladi va hisoblanadi. Jamiyat faoliyati predmeti va savdo reyestridagi yozuvning o'zi sug'urta shifokorligi yoki GKV hisob-kitoblari huquqini bermaydi.",
    } as T,
  },

  tasksTitle: {
    de: "Medizinische und organisatorische Aufgaben (8 Kernfelder)",
    en: "Medical & Organizational Tasks (8 Core Domains)",
    ru: "Медицинские и организационные задачи (8 ключевых направлений)",
    tr: "Tıbbi ve Organizasyonel Görevler (8 Temel Alan)",
    ar: "المهام الطبية والتنظيمية (8 مجالات رئيسية)",
    uz: "Tibbiy va tashkiliy vazifalar (8 asosiy soha)",
  } as T,
  tasks: [
    {
      num: "01",
      icon: Building2 as Icon,
      title: {
        de: "Aufbau diagnostischer Einrichtungen",
        en: "Establishment of Diagnostic Centers",
        ru: "Создание диагностических центров",
        tr: "Tanı Tesislerinin Kurulması",
        ar: "إنشاء وتجهيز المرافق التشخيصية",
        uz: "Diagnostika muassasalarini tashkil etish",
      } as T,
      desc: {
        de: "Planung geeigneter Standorte, Untersuchungsräume und technischer Ausstattung entsprechend dem vorgesehenen Untersuchungsspektrum.",
        en: "Planning of strategic sites, specialized imaging suites, and technical facilities aligned with the diagnostic scope.",
        ru: "Проектирование локаций, кабинетов для томографии и инженерной инфраструктуры под профильный спектр обследований.",
        tr: "Öngörülen inceleme yelpazesine uygun stratejik lokasyonların, muayene odalarının ve teknik donanımın planlanması.",
        ar: "تخطيط المواقع المناسبة وغرف الفحص والتجهيزات التقنية بما يطابق النطاق التشخيصي المعتمد.",
        uz: "Rejalashtirilgan tekshiruvlar hajmiga muvofiq mos lokatsiyalarni, diagnostika xonalarini va texnik jihozlarni loyihalashtirish.",
      } as T,
    },
    {
      num: "02",
      icon: Cpu as Icon,
      title: {
        de: "Gerätebereitstellung und Betrieb",
        en: "Equipment Provision & Operation",
        ru: "Предоставление оборудования и эксплуатация",
        tr: "Cihaz Temini ve İşletimi",
        ar: "توفير الأجهزة وتشغيلها",
        uz: "Uskunalar bilan ta'minlash va ekspluatatsiya",
      } as T,
      desc: {
        de: "Beschaffung und Bereitstellung diagnostischer Geräte einschließlich Wartungsorganisation, Funktionskontrollen und technischer Betreuung.",
        en: "Procurement and commissioning of high-end modalities, proactive maintenance regimes, calibration, and 24/7 technical monitoring.",
        ru: "Закупка и ввод в эксплуатацию экспертной техники, организация сервисного техобслуживания, поверок и технической поддержки.",
        tr: "Tanı cihazlarının temini ve sağlanması; bakım organizasyonu, fonksiyonel kontroller ve sürekli teknik destek.",
        ar: "شراء وتشغيل أجهزة التشخيص الحديثة، وإدارة الصيانة الدورية واختبارات الكفاءة والدعم الفني.",
        uz: "Diagnostika uskunalarini xarid qilish va taqdim etish, jumladan texnik xizmat ko'rsatishni tashkil qilish, funksional tekshiruvlar va texnik qo'llab-quvvatlash.",
      } as T,
    },
    {
      num: "03",
      icon: CalendarCheck2 as Icon,
      title: {
        de: "Organisation der Untersuchungen",
        en: "Organization of Examinations",
        ru: "Организация процесса обследований",
        tr: "İnceleme Süreçlerinin Organizasyonu",
        ar: "تنظيم مواعيد ومسارات الفحوصات",
        uz: "Tekshiruvlarni tashkil etish",
      } as T,
      desc: {
        de: "Terminplanung, Patientenaufnahme, Vorbereitung und Koordination der Untersuchungen unter Berücksichtigung medizinischer Dringlichkeit und Kapazitäten.",
        en: "Scheduling, patient intake, preparation, and workflow orchestration prioritizing clinical urgency and available modality slots.",
        ru: "Управление записью, приём пациентов, подготовка и маршрутизация с учётом клинической срочности и мощности оборудования.",
        tr: "Tıbbi aciliyet ve kapasiteler gözetilerek randevu planlaması, hasta kabulü, hazırlık ve incelemelerin koordinasyonu.",
        ar: "جدولة المواعيد واستقبال المرضى والتجهيز وتنسيق الفحوصات مع مراعاة الأولوية والضرورة الطبية.",
        uz: "Tibbiy shoshilinchlik va imkoniyatlarni hisobga olgan holda qabul vaqtini rejalashtirish, bemorlarni qabul qilish, tayyorlash va tekshiruvlarni muvofiqlashtirish.",
      } as T,
    },
    {
      num: "04",
      icon: Activity as Icon,
      title: {
        de: "Bildgebende Diagnostik",
        en: "Diagnostic Imaging Workflows",
        ru: "Лучевая диагностика и визуализация",
        tr: "Görüntüleme Tanı İş Akışları",
        ar: "مسارات التصوير الإشعاعي",
        uz: "Tasvirlash diagnostikasi",
      } as T,
      desc: {
        de: "Organisation und gegebenenfalls rechtlich zulässige Durchführung bildgebender Untersuchungen einschließlich Sicherheitsprüfungen, Information und Nachbetreuung.",
        en: "Organization and legally compliant execution of imaging procedures, safety protocols, radiation protection, and patient post-care.",
        ru: "Организация и проведение лучевых исследований с соблюдением норм радиационной безопасности, информирования и наблюдения.",
        tr: "Radyasyon güvenliği kontrolleri, hasta bilgilendirmesi ve takip dahil olmak üzere görüntüleme incelemelerinin organizasyonu.",
        ar: "تنظيم وإجراء الفحوصات التصويرية مع فحوصات السلامة الإشعاعية وتوعية المرضى والمتابعة.",
        uz: "Tasvirlash tekshiruvlarini tashkil etish va qonuniy ruxsat etilgan tartibda o'tkazish, shu jumladan xavfsizlik tekshiruvlari, ma'lumot berish va keyingi kuzatuv.",
      } as T,
    },
    {
      num: "05",
      icon: Brain as Icon,
      title: {
        de: "Neurophysiologische Diagnostik",
        en: "Neurophysiological Testing Suites",
        ru: "Нейрофизиологическая диагностика",
        tr: "Nörofizyolojik İnceleme Birimleri",
        ar: "أجنحة الفحوصات الفسيولوجية العصبية",
        uz: "Neyrofiziologik diagnostika",
      } as T,
      desc: {
        de: "Bereitstellung geeigneter Untersuchungsplätze und Organisation qualifikationsgerechter Untersuchungen zur Beurteilung von Nerven-, Muskel- und ZNS-Funktionen.",
        en: "Dedicated test suites and workflows for certified electrophysiological assessment of peripheral nerves, muscle, and CNS pathways.",
        ru: "Оснащение специализированных кабинетов и организация квалифицированной оценки функций периферических нервов, мышц и ЦНС.",
        tr: "Sinir, kas ve merkezi sinir sistemi fonksiyonlarının değerlendirilmesi için uygun inceleme alanlarının sağlanması ve organizasyonu.",
        ar: "تخصيص غرف فحص ملائمة وتنظيم دراسات متخصصة لتقييم وظائف الأعصاب والعضلات والمسارات العصبية.",
        uz: "Asab, mushak va MNT funksiyalarini baholash uchun maxsus tekshiruv joylarini taqdim etish va malakali tekshiruvlarni tashkil etish.",
      } as T,
    },
    {
      num: "06",
      icon: TestTubes as Icon,
      title: {
        de: "Labordiagnostik & Probenmanagement",
        en: "Laboratory & Sample Logistics",
        ru: "Лаборатория и логистика биоматериалов",
        tr: "Laboratuvar Tanısı & Numune Yönetimi",
        ar: "التحاليل المخبرية وإدارة العينات",
        uz: "Laboratoriya diagnostikasi va namunalarni boshqarish",
      } as T,
      desc: {
        de: "Organisation eindeutiger Probenidentifikation, Abläufe für Entnahme, Lagerung, Transport, Untersuchung und Entsorgung. Externe Partnerlabore für Spezialanalytik.",
        en: "Fail-safe barcode sample ID, pre-analytical workflows, cold-chain transport, on-site testing, and certified reference lab partnerships.",
        ru: "Штрихкодирование проб, протоколы забора, температурного хранения, логистики и утилизации. Взаимодействие с внешними референс-лабораториями.",
        tr: "Barkodlu numune takibi, alma, saklama, soğuk zincir lojistiği ve bertaraf süreçleri. Özel analizler için akredite laboratuvar ortaklıkları.",
        ar: "نظام دقيق لتتبع العينات بالباركود، وسحبها وتخزينها ونقلها المبرد والشراكة مع مختبرات معتمدة للتحاليل المتقدمة.",
        uz: "Namunalarni aniq identifikatsiyalash, olish, saqlash, tashish, tekshirish va utilizatsiya qilish jarayonlarini tashkil etish. Maxsus tahlillar uchun tashqi hamkor laboratoriyalar.",
      } as T,
    },
    {
      num: "07",
      icon: FileCheck2 as Icon,
      title: {
        de: "Befundmanagement & Dringlichkeitswege",
        en: "Reporting & Emergency Alerts",
        ru: "Управление заключениями и срочные протоколы",
        tr: "Rapor Yönetimi & Acil Bildirim Kanalları",
        ar: "إدارة التقارير وبروتوكولات الطوارئ",
        uz: "Xulosalarni boshqarish va tezkor xabarnomalar",
      } as T,
      desc: {
        de: "Sicherstellung nachvollziehbarer Unterlagen, zeitgerechter ärztlicher Befundung und sicherer Übermittlung. Festgelegte Informationswege für kritische Befunde.",
        en: "Traceable records, prompt radiologist reporting, and encrypted digital transfer. Accelerated escalation protocols for critical findings.",
        ru: "Прозрачная документация, оперативная подготовка врачебных заключений и защищённая передача. Экспресс-оповещение при экстренных находках.",
        tr: "Şeffaf arşivleme, zamanında uzman hekim raporlaması ve güvenli dijital iletim. Kritik bulgular için acil bildirim yolları.",
        ar: "توثيق منظم، وإصدار فوري للتقارير الطبية ونقل رقمي مشفر، مع قنوات إبلاغ عاجلة للنتائج الحرجة.",
        uz: "Aniq hujjatlashtirishni, shifokor xulosalarini o'z vaqtida tayyorlashni va xavfsiz uzatishni ta'minlash. Shoshilinch xulosalar uchun tezkor xabar berish yo'llari.",
      } as T,
    },
    {
      num: "08",
      icon: Share2 as Icon,
      title: {
        de: "Zusammenarbeit mit behandelnden Einrichtungen",
        en: "Inter-Clinical Coordination",
        ru: "Взаимодействие с лечебными учреждениями",
        tr: "Tedavi Eden Kuruluşlarla Koordinasyon",
        ar: "التنسيق السريري مع المشافي والأطباء",
        uz: "Davolovchi muassasalar bilan hamkorlik",
      } as T,
      desc: {
        de: "Abstimmung der diagnostischen Abläufe mit den zuweisenden oder behandelnden Ärzten und Kliniken unter strikter Wahrung der medizinischen Entscheidungsfreiheit.",
        en: "Synchronization of diagnostic pathways with referring clinicians and hospitals, fully respecting autonomous clinical judgment.",
        ru: "Координация диагностических маршрутов с направляющими врачами и клиниками при сохранении независимости врачебных решений.",
        tr: "Tanı süreçlerinin sevk eden veya tedavi eden hekim ve kliniklerle, tıbbi karar bağımsızlığı tam korunarak koordine edilmesi.",
        ar: "مواءمة مسارات التشخيص مع الأطباء والمشافي المحولة مع الاحترام المطلق للاستقلالية السريرية.",
        uz: "Tibbiy qaror qabul qilish erkinligiga qat'iy rioya qilgan holda, diagnostika jarayonlarini yo'naltiruvchi yoki davolovchi shifokorlar va klinikalar bilan muvofiqlashtirish.",
      } as T,
    },
  ],
};

export function DiagnosticsCompanySection({ locale = "de" }: { locale?: string }) {
  const l: Lang = locale === "tr" ? "tr" : locale === "ar" ? "ar" : locale === "ru" ? "ru" : locale === "uz" ? "uz" : locale === "en" ? "en" : "de";

  return (
    <section
      id="nabiota-diagnostics-gmbh-structure"
      className="relative pt-8 sm:pt-10 lg:pt-12 pb-14 sm:pb-18 lg:pb-20 bg-[#FAF7F2] border-t border-[#EDE8DE]/60 overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="absolute -top-40 -right-32 w-[520px] h-[520px] rounded-full bg-[#D5B878]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[420px] h-[420px] rounded-full bg-[#1E3B29]/[0.04] blur-3xl pointer-events-none" />

      {/* ── Hero ("Preparation of future departments" / Photo 1 format): text left, photo right with gold vector arc ── */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-stretch min-h-[280px] sm:min-h-[320px] lg:min-h-[380px]">
        {/* Left Column: Tag, Eyebrow, Title, Lead */}
        <div className="w-full lg:w-[54%] flex flex-col justify-center py-6 sm:py-8 lg:py-10 px-6 sm:px-10 lg:pl-16 xl:pl-28 2xl:pl-36 lg:pr-10 z-10">
          <div className="max-w-xl">


            {/* Title with styled italic phrase & distinct GmbH */}
            <h2 className="font-serif text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[36px] text-[#142318] font-normal leading-[1.18] mb-3">
              NabiOta <span className="font-serif italic text-[#C5A56A]">Diagnostics</span> <span className="text-[#C5A56A] font-sans font-semibold text-[0.72em] tracking-wider uppercase ml-1 align-baseline">GmbH</span>
            </h2>

            <p className="text-[12.5px] sm:text-[13px] text-[#556057] leading-relaxed max-w-lg">
              {c.lead[l]}
            </p>
          </div>
        </div>

        {/* Right Column: Photo with curved vector transition */}
        <div className="w-full lg:w-[46%] relative min-h-[220px] sm:min-h-[260px] lg:min-h-full overflow-hidden">
          <Image
            src="/images/areas/diagnostics.webp"
            alt="NabiOta Diagnostics GmbH"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />

          {/* Desktop arc */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-56 xl:w-64 h-full pointer-events-none z-10">
            <svg viewBox="0 0 200 600" preserveAspectRatio="none" className="w-full h-full">
              <defs>
                <linearGradient id="diagArcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C5A56A" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#EADEC7" stopOpacity="0.15" />
                </linearGradient>
              </defs>
              <path d="M 0,0 L 50,0 C 130,120 160,260 110,410 C 85,485 45,550 0,600 L 0,600 Z" fill="#FAF7F2" />
              <path
                d="M 50,0 C 130,120 160,260 110,410 C 85,485 45,550 0,600 L 16,600 C 62,550 102,485 128,410 C 178,260 148,120 68,0 Z"
                fill="url(#diagArcGrad)"
              />
              <path d="M 50,0 C 130,120 160,260 110,410 C 85,485 45,550 0,600" fill="none" stroke="#C5A56A" strokeWidth="1.6" strokeOpacity="0.8" vectorEffect="non-scaling-stroke" />
              <path d="M 68,0 C 148,120 178,260 128,410 C 102,485 62,550 16,600" fill="none" stroke="#E2D4BD" strokeWidth="1.2" strokeOpacity="0.75" vectorEffect="non-scaling-stroke" />
              <path d="M 84,0 C 164,120 194,260 144,410 C 118,485 78,550 28,600" fill="none" stroke="#C5A56A" strokeWidth="0.8" strokeOpacity="0.45" strokeDasharray="4 3" vectorEffect="non-scaling-stroke" />
            </svg>
            <div className="absolute top-[48%] left-6 -translate-y-1/2 w-44 h-44 pointer-events-none opacity-40 select-none sepia hue-rotate-[15deg]">
              <Image src="/images/areas/botanical-branch-clean.webp" alt="" fill className="object-contain -rotate-12" unoptimized />
            </div>
          </div>

          {/* Mobile arc */}
          <div className="lg:hidden absolute inset-x-0 top-0 h-16 pointer-events-none z-10">
            <svg viewBox="0 0 600 80" preserveAspectRatio="none" className="w-full h-full">
              <path d="M 0,0 L 600,0 L 600,30 C 450,75 250,15 0,55 Z" fill="#FAF7F2" />
              <path d="M 0,55 C 250,15 450,75 600,30" fill="none" stroke="#C5A56A" strokeWidth="1.5" strokeOpacity="0.8" vectorEffect="non-scaling-stroke" />
              <path d="M 0,63 C 250,23 450,83 600,38" fill="none" stroke="#E2D4BD" strokeWidth="1.2" strokeOpacity="0.6" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
        </div>
      </div>

      <Container size="wide" className="relative z-10 mt-10 sm:mt-12">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-14">
          {/* ── Planned Diagnostic Modality Spectrum (Photo 2 style) ── */}
          <div className="relative space-y-5 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <div className="flex items-center gap-2.5 mb-1.5">
                </div>
                <h3 className="font-serif text-[24px] sm:text-[28px] lg:text-[32px] font-normal text-[#142318] leading-[1.2]">
                  {c.spectrumTitle[l]}
                </h3>
              </div>
            </div>

            {/* Cards Grid with subtle botanical leaf watermark behind */}
            <div className="relative pb-2">
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
                {c.spectrumItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="group relative rounded-[18px] bg-white border border-[#EAE4D7] p-3.5 sm:p-4 flex items-center justify-between gap-3 sm:gap-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-[#D5B878]/60 transition-all duration-300"
                    >
                      {/* Left: Icon circle */}
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FAF5EB] border border-[#EFE5D5] flex items-center justify-center shrink-0 group-hover:bg-[#F3EAD9] transition-colors">
                        <Icon className="w-5 h-5 text-[#9E7D3B]" strokeWidth={1.7} />
                      </div>

                      {/* Center: Title + Description */}
                      <div className="flex-1 min-w-0 pr-1">
                        <h4 className="font-serif text-[15px] sm:text-[16px] text-[#142318] font-medium leading-snug mb-0.5">
                          {item.title[l]}
                        </h4>
                        <p className="text-[11.5px] sm:text-[12px] text-[#556057] leading-relaxed">
                          {item.desc[l]}
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

          {/* 3 Pillar Cards matching Photo 2 from Medical Departments */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {c.pillars.map((p, i) => {
              const Icon = p.icon;
              const numStr = String(i + 1).padStart(2, "0");
              return (
                <article
                  key={i}
                  className="group relative rounded-[20px] sm:rounded-[22px] bg-white border border-[#EAE4D7] hover:border-[#D5B878]/60 hover:shadow-xl transition-all duration-300 shadow-sm overflow-hidden flex flex-col justify-between min-h-[220px]"
                >
                  {/* Right faded photo */}
                  <div className="absolute right-0 top-0 bottom-0 w-[40%] sm:w-[38%] pointer-events-none overflow-hidden select-none">
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
                  </div>

                  {/* Left content */}
                  <div className="relative z-10 p-5 sm:p-6 flex flex-col justify-between h-full">
                    <div>
                      {/* Number + Icon row */}
                      <div className="flex items-center gap-3 mb-2.5">
                        <span className="font-serif text-[22px] sm:text-[24px] text-[#C5A56A] font-normal leading-none w-8 shrink-0">
                          {numStr}
                        </span>
                        <div className="w-9 h-9 rounded-full bg-[#FAF3E8] border border-[#E8DFC8] text-[#9E7D3B] flex items-center justify-center shrink-0 group-hover:bg-[#F0E5CD] transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-[17px] sm:text-[18.5px] text-[#142318] font-medium leading-snug mb-2.5 max-w-[62%] sm:max-w-[60%]">
                        {p.title[l]}
                      </h3>

                      {/* Body text */}
                      <p className="text-[12px] sm:text-[12.5px] text-[#4E5650] leading-relaxed max-w-[64%] sm:max-w-[62%]">
                        {p.text[l]}
                      </p>
                    </div>

                    {/* Learn more link */}
                    <div className="mt-4 pt-3.5 border-t border-[#EDE8DE]">
                      <Link
                        href={`/${l}/contact`}
                        className="inline-flex items-center gap-1.5 text-[11.5px] sm:text-[12px] font-semibold text-[#9E7D3B] hover:text-[#142318] transition-colors"
                      >
                        <span>{l === "ru" ? "Подробнее" : l === "en" ? "Learn more" : "Mehr erfahren"}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>

      {/* ── FULL-WIDTH Legal Separation & GKV Disclaimer Banner with photo2.webp Background ── */}
      <div className="w-full relative overflow-hidden my-12 sm:my-14 lg:my-16 border-y border-[#EDE8DE] bg-[#FAF6EE]">
        {/* Full-bleed background: photo2.webp */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src="/images/about/photo2.webp"
            alt="Regulatory Framework Background"
            fill
            priority
            className="object-cover object-center opacity-95"
            sizes="100vw"
          />
          {/* Subtle light cream overlay to ensure high text contrast and legibility */}
          <div className="absolute inset-0 bg-[#FAF7F2]/30" />
        </div>

        <Container size="wide" className="relative z-10 py-8 sm:py-10 lg:py-12">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">
            {/* Left: Shield Icon + Eyebrow + Title */}
            <div className="flex items-start sm:items-center gap-4 lg:w-[38%] shrink-0">
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#FAF3E8]/95 border border-[#E8DFC8] flex items-center justify-center text-[#9E7D3B] shrink-0 shadow-sm backdrop-blur-xs">
                <ShieldAlert className="w-6 h-6 text-[#9E7D3B]" strokeWidth={1.6} />
              </div>
              <div>
                <h3 className="font-serif text-[19px] sm:text-[22px] lg:text-[24px] text-[#142318] font-normal leading-snug">
                  {c.disclaimer.title[l]}
                </h3>
              </div>
            </div>

            {/* Vertical divider */}
            <div className="hidden lg:block w-px h-16 bg-[#DDD2BD] shrink-0" />

            {/* Middle: Body text */}
            <div className="flex-1 min-w-0">
              <p className="text-[12.5px] sm:text-[13px] text-[#4E5650] leading-relaxed font-sans">
                {c.disclaimer.body[l]}
              </p>
            </div>

            {/* Right: Mehr über uns / Learn more pill button */}
            <div className="shrink-0 self-start sm:self-auto">
              <Link
                href={`/${l}/contact`}
                className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full border border-[#D5B878] bg-white/80 hover:bg-white text-[#8C6D2D] hover:text-[#142318] hover:border-[#9E7D3B] text-[12.5px] sm:text-[13px] font-semibold transition-all shadow-xs backdrop-blur-xs whitespace-nowrap"
              >
                <span>{l === "ru" ? "Подробнее о нас" : l === "en" ? "Learn more about us" : "Mehr über uns"}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* ── Lower Container: 8 Medical & Organizational Tasks ── */}
      <Container size="wide" className="relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* 8 Medical & Organizational Tasks */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[#C5A56A]" />
              <h3 className="font-serif text-[20px] sm:text-[23px] text-[#142318]">
                {c.tasksTitle[l]}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {c.tasks.map((task) => {
                const Icon = task.icon;
                return (
                  <div
                    key={task.num}
                    className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#EAE4D7] hover:border-[#D5B878]/70 hover:bg-[#FAF8F4] hover:shadow-xs transition-all"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#FAF8F4] border border-[#E3DAC6] text-[#B89650] flex items-center justify-center shrink-0 group-hover:bg-[#1E3B29] group-hover:text-[#ECCF96] group-hover:border-[#1E3B29] transition-all">
                      <Icon className="w-4.5 h-4.5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10.5px] font-bold tracking-wider text-[#B89650] font-mono">
                          {task.num}
                        </span>
                        <h4 className="font-serif text-[15px] sm:text-[16px] font-medium text-[#142318] group-hover:text-[#8C6D2D] transition-colors leading-tight">
                          {task.title[l]}
                        </h4>
                      </div>
                      <p className="text-[12px] sm:text-[12.5px] text-[#556057] leading-relaxed font-sans">
                        {task.desc[l]}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

