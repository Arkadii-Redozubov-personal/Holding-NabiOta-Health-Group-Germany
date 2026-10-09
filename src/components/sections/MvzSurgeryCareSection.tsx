import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Scissors,
  BrainCircuit,
  Syringe,
  Activity,
  HeartPulse,
  Bandage,
  Siren,
  Network,
  GraduationCap,
  FileBadge,
  UserCog,
  BadgeCheck,
  ScrollText,
  Lock,
  ShieldCheck,
  Cpu,
  Receipt,
  Hospital,
  Scale,
  ClipboardCheck,
  Brain,
  Sparkles,
  ArrowRight,
  Check,
  Leaf,
  Award,
  Users,
  Info,
} from "lucide-react";
import { Container } from "@/components/layout/Container";

/**
 * PDF Section IV.2 – "NabiOta MVZ für Chirurgie und Anästhesiologie GmbH"
 * Unternehmensgegenstand, medizinische/organisatorische Aufgaben, rechtliche/betriebliche Pflichten.
 */

type Lang = "de" | "en" | "ru" | "tr" | "ar" | "uz";
type T = Record<Lang, string>;
type Icon = React.ComponentType<{ className?: string }>;

const c = {
  tag: {
    de: "MVZ 2 · § 95 SGB V",
    en: "MVZ 2 · § 95 SGB V",
    ru: "MVZ 2 · § 95 SGB V",
    tr: "MVZ 2 · § 95 SGB V",
    ar: "MVZ 2 · § 95 SGB V",
    uz: "MVZ 2 · § 95 SGB V",
  } as T,
  title: "NabiOta MVZ für Chirurgie und Anästhesiologie GmbH",
  subtitle: {
    de: "Unternehmensgegenstand, Aufgaben und Pflichten",
    en: "Corporate purpose, tasks and obligations",
    ru: "Предмет деятельности, задачи и обязанности",
    tr: "Şirket Faaliyet Konusu, Görev ve Yükümlülükleri",
    ar: "أغراض الشركة والمهام والالتزامات التشغيلية",
    uz: "Faoliyat predmeti, vazifalar va majburiyatlar",
  } as T,
  lead: {
    de: "Gegenstand des Unternehmens ist die Errichtung und der Betrieb eines oder mehrerer ärztlich geleiteter medizinischer Versorgungszentren gemäß § 95 SGB V zur fachärztlichen Versorgung gesetzlich und privat versicherter Patienten.",
    en: "The purpose of the company is the establishment and operation of one or more physician-led medical care centres pursuant to § 95 SGB V for specialist care of statutorily and privately insured patients.",
    ru: "Предметом деятельности общества является создание и эксплуатация одного или нескольких медицинских центров под врачебным руководством согласно § 95 SGB V для специализированной помощи пациентам с обязательной и частной страховкой.",
    tr: "Şirketin faaliyet konusu, yasal ve özel sigortalı hastalara yönelik uzman hekimlik cerrahi ve anestezi hizmetleri sunmak amacıyla § 95 SGB V uyarınca hekim yönetiminde bir veya birden fazla tıp merkezinin (MVZ) kurulması ve işletilmesidir.",
    ar: "يتمثل الغرض من الشركة في إنشاء وتشغيل مركز أو أكثر من مراكز الرعاية الطبية (MVZ) بإشراف وإدارة طبية وفقاً للمادة § 95 SGB V، لتقديم خدمات الجراحة والتخدير التخصصية للمرضى الخاضعين للتأمين الإلزامي والخاص.",
    uz: "Jamiyat faoliyatining predmeti majburiy va ixtiyoriy sug'urtaga ega bo'lgan bemorlarga ixtisoslashtirilgan jarrohlik va anesteziologik yordam ko'rsatish maqsadida § 95 SGB V ga muvofiq shifokorlar boshchiligidagi bir yoki bir nechta tibbiy markazlarni (MVZ) tashkil etish va boshqarishdan iborat.",
  } as T,

  specialtiesTitle: {
    de: "Versorgungsangebot",
    en: "Range of care",
    ru: "Спектр помощи",
    tr: "Hizmet Yelpazesi",
    ar: "نطاق الرعاية والخدمات الجراحية",
  } as T,
  specialties: {
    de: ["Orthopädie & Unfallchirurgie", "Neurochirurgie", "Allgemein- & Viszeralchirurgie", "Plastische & Rekonstruktive Chirurgie", "Anästhesiologie"],
    en: ["Orthopedics & Trauma Surgery", "Neurosurgery", "General & Visceral Surgery", "Plastic & Reconstructive Surgery", "Anesthesiology"],
    ru: ["Ортопедия и травматология", "Нейрохирургия", "Общая и висцеральная хирургия", "Пластическая и реконструктивная хирургия", "Анестезиология"],
    tr: ["Ortopedi ve Travmatoloji", "Beyin ve Sinir Cerrahisi (Nöroşirürji)", "Genel ve Visseral Cerrahi", "Plastik ve Rekonstrüktif Cerrahi", "Anesteziyoloji"],
    ar: ["جراحة العظام والإصابات", "جراحة المخ والأعصاب", "الجراحة العامة وجراحة الأحشاء", "الجراحة التجميلية والترميمية", "التخدير وعلاج الألم"],
    uz: ["Ortopediya va travmatologiya", "Neyrojarrohlik", "Umumiy va visseral jarrohlik", "Plastik va rekonstruktiv jarrohlik", "Anesteziologiya"],
  },
  specialtiesNote: {
    de: "Die verwendeten Fachgebietsbezeichnungen richten sich nach den jeweils anerkannten ärztlichen Qualifikationen. Weitere ärztliche Fachgebiete können unter Wahrung der fachlichen, berufsrechtlichen und zulassungsrechtlichen Voraussetzungen ergänzt werden.",
    en: "The specialist designations used are based on the respective recognised medical qualifications. Further medical specialties may be added, subject to professional, professional-law and approval-law requirements.",
    ru: "Используемые названия специальностей основаны на признанных врачебных квалификациях. Другие специальности могут быть добавлены при соблюдении профессиональных, профессионально-правовых и разрешительных требований.",
    tr: "Kullanılan uzmanlık unvanları tanınmış hekimlik niteliklerine dayanmaktadır. İlgili uzmanlık, meslek hukuku ve ruhsatlandırma koşullarına uyulması şartıyla diğer tıbbi branşlar eklenebilir.",
    ar: "تستند مسميات التخصصات إلى المؤهلات الطبية المعترف بها رسمياً. ويجوز إضافة تخصصات طبية أخرى وفقاً للاشتراطات المهنية ولوائح التراخيص المقررة.",
    uz: "Qo'llaniladigan mutaxassislik nomlari tan olingan shifokorlik malakalariga asoslanadi. Tegishli kasbiy, huquqiy va litsenziyalash talablariga rioya qilingan holda boshqa tibbiy mutaxassisliklar ham qo'shilishi mumkin.",
  } as T,

  paragraphs: [
    {
      icon: Scissors as Icon,
      title: {
        de: "Ambulante & operative Leistungen",
        en: "Outpatient & surgical services",
        ru: "Амбулаторные и хирургические услуги",
        tr: "Ayakta ve Cerrahi Hizmetler",
        ar: "الخدمات الجراحية والعيادية المتنقلة",
        uz: "Ambulator va jarrohlik xizmatlari",
      } as T,
      text: {
        de: "Die Gesellschaft erbringt durch entsprechend qualifizierte Ärzte und sonstiges befugtes Fachpersonal Leistungen der Prävention, Beratung, Diagnostik, konservativen und operativen Behandlung sowie Nachsorge. Das Leistungsangebot umfasst insbesondere ambulante Operationen und interventionelle Behandlungen, anästhesiologische Betreuung, perioperative Überwachung sowie Schmerztherapie im jeweils rechtlich zulässigen und genehmigten Umfang.",
        en: "Through appropriately qualified physicians and other authorized specialist staff, the company provides prevention, counselling, diagnostics, conservative and surgical treatment and aftercare. The range of services includes in particular outpatient operations and interventional treatments, anaesthesiological care, perioperative monitoring and pain management within the legally permitted and approved scope.",
        ru: "Квалифицированные врачи и уполномоченный персонал оказывают услуги по профилактике, консультированию, диагностике, консервативному и оперативному лечению, а также последующему наблюдению. Спектр включает амбулаторные операции и интервенционные процедуры, анестезиологическое сопровождение, периоперационное наблюдение и обезболивание в законно допустимом и утверждённом объёме.",
        tr: "Şirket; nitelikli hekimler ve yetkili sağlık personeli aracılığıyla koruma, danışmanlık, tanı, konservatif ve cerrahi tedavi ile ameliyat sonrası takip hizmetleri sunar. Hizmet yelpazesi özellikle günübirlik ameliyatları, girişimsel tedavileri, anesteziyolojik takibi, perioperatif monitörizasyonu ve ağrı tedavisini yasal ve onaylı kapsamda içerir.",
        ar: "تقدم الشركة، عبر أطباء مؤهلين وكوادر معتمدة، خدمات الوقاية والاستشارات والتشخيص والعلاج التحفظي والجراحي والرعاية اللاحقة. وتشمل الخدمات العمليات الجراحية المتنقلة، والإجراءات التداخلية، والرعاية التخديرية، والمراقبة المحيطة بالجراحة، وعلاج الألم ضمن النطاق المصرح به قانوناً.",
        uz: "Jamiyat tegishli malakaga ega shifokorlar va boshqa vakolatli xodimlar orqali profilaktika, maslahat, diagnostika, konservativ va operativ davolash hamda keyingi kuzatuv xizmatlarini ko'rsatadi. Xizmatlar spektri qonuniy va tasdiqlangan hajmda, xususan, ambulator operatsiyalar va intervension muolajalar, anesteziologik hamrohlik, perioperatsion monitoring va og'riq terapiyasini o'z ichiga oladi.",
      } as T,
    },
    {
      icon: Hospital as Icon,
      title: {
        de: "Räume & Kooperationen",
        en: "Facilities & cooperations",
        ru: "Помещения и кооперации",
        tr: "Tesisler ve İş Birlikleri",
        ar: "المرافق والشراكات التعاونية",
        uz: "Xonalar va hamkorlik",
      } as T,
      text: {
        de: "Die Gesellschaft ist berechtigt, die erforderlichen personellen, räumlichen, technischen und organisatorischen Einrichtungen vorzuhalten und zu betreiben. Hierzu können Untersuchungs- und Behandlungsräume, ambulante Operationsbereiche sowie Aufwach- und Überwachungsbereiche gehören, soweit die hierfür erforderlichen Voraussetzungen erfüllt sind. Die internistische Mitbetreuung kann durch Kooperation mit dem gesonderten NabiOta MVZ für hausärztliche und fachärztliche Versorgung organisiert werden. Eine solche Kooperation begründet für sich keine eigene internistische Arztstelle oder Abrechnungsbefugnis des chirurgischen MVZ.",
        en: "The company is entitled to maintain and operate the necessary personnel, premises, technical and organizational facilities, including examination and treatment rooms, outpatient operating areas and recovery and monitoring areas. Internal medicine co-care may be organized through cooperation with the separate NabiOta primary care MVZ. Such cooperation does not in itself establish a separate internal medicine physician position or billing authorization for the surgical MVZ.",
        ru: "Общество вправе содержать и эксплуатировать необходимые ресурсы, включая кабинеты, операционные зоны и зоны пробуждения/наблюдения. Терапевтическое сопровождение может организовываться через кооперацию с отдельным MVZ семейной медицины NabiOta. Такое сотрудничество само по себе не создаёт терапевтическую врачебную ставку или право расчётов у хирургического MVZ.",
        tr: "Şirket; muayene odaları, ayakta operasyon alanları ile derlenme ve izlem üniteleri dahil gerekli personeli, mekânı, teknik ve organizasyonel tesisleri bulundurma yetkisine sahiptir. Dahiliye branş konsültasyonları, birinci basamak NabiOta MVZ ile iş birliği yapılarak organize edilebilir. Bu iş birliği cerrahi MVZ için tek başına bağımsız dahiliye kadrosu veya faturalandırma hakkı doğurmaz.",
        ar: "يحق للشركة تجهيز وتشغيل البنية التحتية اللازمة من كوادر ومبانٍ وغرف فحص وأجنحة جراحية متنقلة ومناطق إفاقة ومراقبة. ويمكن تنظيم الدعم الطبي الباطني التكاملي بالتعاون مع مركز MVZ لطب الأسرة التابع لـ NabiOta، دون أن يترتب على ذلك شاغر باطني مستقل أو حق فوترة للمركز الجراحي.",
        uz: "Jamiyat zarur kadrlar, binolar, texnik va tashkiliy infratuzilmani, jumladan ko'rik va muolaja xonalarini, ambulator operatsiya zallarini hamda uyg'onish va kuzatuv zonalarini saqlash va boshqarish huquqiga ega. Ichki kasalliklar bo'yicha qo'shimcha yordam alohida NabiOta oilaviy va ixtisoslashgan MVZ markazi bilan hamkorlik orqali tashkil etilishi mumkin. Bunday hamkorlik jarrohlik MVZ uchun mustaqil terapevtik shtat yoki hisob-kitob qilish huquqini bermaydi.",
      } as T,
    },
    {
      icon: Scale as Icon,
      title: {
        de: "Krankenhaus-Kooperation & Zulassungen",
        en: "Hospital cooperation & approvals",
        ru: "Сотрудничество с клиникой и допуски",
        tr: "Hastane İş Birlikleri ve Ruhsatlar",
        ar: "التعاون مع المستشفيات والتراخيص",
        uz: "Klinikalar bilan hamkorlik va ruxsatnomalar",
      } as T,
      text: {
        de: "Die Gesellschaft darf im rechtlich zulässigen Umfang mit Krankenhäusern, insbesondere der geplanten NabiOta Clinics Germany GmbH, zusammenarbeiten. Die jeweiligen Zulassungen, Versorgungsaufträge, medizinischen Verantwortlichkeiten und Abrechnungsbefugnisse sind vertraglich eindeutig zuzuordnen und bleiben rechtlich gesondert. Erlaubnis- oder genehmigungspflichtige Tätigkeiten dürfen erst nach Vorliegen der erforderlichen Erlaubnisse oder Genehmigungen aufgenommen werden.",
        en: "The company may cooperate with hospitals, in particular the planned NabiOta Clinics Germany GmbH, to the extent legally permissible. The respective approvals, care mandates, medical responsibilities and billing authorizations must be clearly allocated by contract and remain legally separate. Activities requiring a permit or approval may only begin once the necessary permits or approvals have been obtained.",
        ru: "Общество вправе в законно допустимых рамках сотрудничать с больницами, в частности с планируемой NabiOta Clinics Germany GmbH. Соответствующие допуски, объёмы помощи, медицинская ответственность и права расчётов однозначно определяются договором и остаются юридически раздельными. Лицензируемая деятельность начинается только после получения разрешений.",
        tr: "Şirket, yasal sınırlar dahilinde başta planlanan NabiOta Clinics Germany GmbH olmak üzere hastanelerle iş birliği yapabilir. İlgili ruhsatlar, hizmet görevleri, tıbbi sorumluluklar ve fatura yetkileri sözleşmeyle açıkça belirlenir ve hukuki olarak ayrı tutulur. İzne tabi faaliyetler ancak gerekli ruhsatlar alındıktan sonra başlatılır.",
        ar: "يجوز للشركة التعاون نظاماً مع المستشفيات، ولا سيما مشروع NabiOta Clinics Germany GmbH. وتُحدد التراخيص ومهام الرعاية والمسؤوليات الطبية وصلاحيات الفوترة تعاقدياً بشكل قاطع وتظل منفصلة قانونياً. ولا تبدأ الأنشطة الخاضعة للتصريح إلا بعد صدور الموافقات الرسمية.",
        uz: "Jamiyat qonun doirasida shifoxonalar, xususan, rejalashtirilgan NabiOta Clinics Germany GmbH bilan hamkorlik qilishi mumkin. Tegishli litsenziyalar, xizmat ko'rsatish vazifalari, tibbiy javobgarlik va hisob-kitob vakolatlari shartnomada aniq taqsimlanadi va huquqiy jihatdan alohida bo'lib qoladi. Litsenziyalanadigan faoliyat faqat zarur ruxsatnomalar olingandan keyin boshlanadi.",
      } as T,
    },
  ],

  tasksTitle: {
    de: "Medizinische und organisatorische Aufgaben",
    en: "Medical and organizational tasks",
    ru: "Медицинские и организационные задачи",
    tr: "Tıbbi ve Organizasyonel Görevler",
    ar: "المهام الطبية والتنظيمية",
    uz: "Tibbiy va tashkiliy vazifalar",
  } as T,
  tasks: [
    {
      icon: ClipboardCheck as Icon,
      title: { de: "Fachärztliche Behandlung", en: "Specialist Treatment", ru: "Специализированное лечение", tr: "Uzman Hekim Tedavisi", ar: "العلاج التخصصي", uz: "Ixtisoslashtirilgan davolash" } as T,
      de: "Fachärztliche Untersuchung, Beratung und Behandlung von Erkrankungen und Verletzungen innerhalb der tatsächlich angebotenen Fachgebiete.",
      en: "Specialist examination, counselling and treatment of illnesses and injuries within the specialties actually offered.",
      ru: "Специализированные осмотр, консультирование и лечение заболеваний и травм в рамках предлагаемых специальностей.",
      tr: "Sunulan cerrahi ve anestezi branşlarında hastalık ve yaralanmaların uzman hekim muayenesi, danışmanlığı ve tedavisi.",
      ar: "الفحص التخصصي والاستشارات والعلاج للأمراض والإصابات ضمن التخصصات الجراحية والتخديرية المتاحة.",
      uz: "Mavjud taklif etilayotgan mutaxassisliklar doirasida kasalliklar va jarohatlarni tor mutaxassis tomonidan tekshirish, maslahat berish va davolash.",
    },
    {
      icon: Activity as Icon,
      title: { de: "Indikationsprüfung", en: "Indication Assessment", ru: "Оценка показаний", tr: "Tıbbi Endikasyon Değerlendirmesi", ar: "تقييم دواعي التدخل الجراحي", uz: "Ko'rsatmalarni baholash" } as T,
      de: "Prüfung der medizinischen Indikation und Auswahl geeigneter konservativer, interventioneller oder operativer Behandlungsmöglichkeiten.",
      en: "Assessment of medical indication and selection of appropriate conservative, interventional or surgical treatment options.",
      ru: "Оценка медицинских показаний и выбор подходящих консервативных, интервенционных или оперативных методов.",
      tr: "Tıbbi endikasyonun titizlikle değerlendirilmesi ve uygun konservatif, girişimsel veya cerrahi tedavi seçeneğinin belirlenmesi.",
      ar: "التقييم الدقيق للدواعي الطبية واختيار الخيارات العلاجية التحفظية أو التداخلية أو الجراحية الأنسب.",
      uz: "Tibbiy ko'rsatmalarni sinchkovlik bilan tekshirish va tegishli konservativ, intervension yoki jarrohlik davolash usulini tanlash.",
    },
    {
      icon: Scissors as Icon,
      title: { de: "Ambulante Operationen", en: "Outpatient Operations", ru: "Амбулаторные операции", tr: "Ayakta Cerrahi Operasyonlar", ar: "الجراحات المتنقلة", uz: "Ambulator operatsiyalar" } as T,
      de: "Organisation ambulanter Operationen einschließlich Vorbereitung, Durchführung, Überwachung, Entlassung und Nachsorge.",
      en: "Organization of outpatient operations including preparation, performance, monitoring, discharge and aftercare.",
      ru: "Организация амбулаторных операций, включая подготовку, проведение, наблюдение, выписку и последующий уход.",
      tr: "Hazırlık, operasyonun icrası, izlem, taburculuk ve ameliyat sonrası takip dahil ayakta cerrahi operasyonların organizasyonu.",
      ar: "تنظيم العمليات الجراحية النهارية بما يشمل التحضير، والتنفيذ، والمراقبة، والخروج، والمتابعة اللاحقة.",
      uz: "Ambulator operatsiyalarni tashkil qilish, jumladan tayyorgarlik, o'tkazish, monitoring, chiqarish va keyingi parvarish.",
    },
    {
      icon: Syringe as Icon,
      title: { de: "Anästhesie & Aufklärung", en: "Anesthesia & Consent", ru: "Анестезия и разъяснение", tr: "Anestezi ve Hasta Aydınlatması", ar: "التخدير والتوعية الطبية", uz: "Anesteziya va tushuntirish" } as T,
      de: "Anästhesiologische Untersuchung, Aufklärung und Betreuung einschließlich Auswahl und Durchführung geeigneter Anästhesieverfahren.",
      en: "Anaesthesiological examination, explanation and care including selection and performance of appropriate anaesthetic procedures.",
      ru: "Анестезиологические обследование, разъяснение и сопровождение, включая выбор и проведение анестезии.",
      tr: "Uygun anestezi yönteminin seçimi, uygulanması, anestezi muayenesi, bilgilendirilmiş onam ve hasta refakati.",
      ar: "الفحص التخديري والتوعية والمرافقة واختيار وتطبيق أساليب التخدير الملائمة لكل حالة.",
      uz: "Anesteziologik ko'rik, tushuntirish va hamrohlik, tegishli og'riqsizlantirish usullarini tanlash va o'tkazish.",
    },
    {
      icon: Network as Icon,
      title: { de: "Interdisziplinäre Abstimmung", en: "Interdisciplinary Links", ru: "Междисциплинарное согласование", tr: "Disiplinlerarası Koordinasyon", ar: "التنسيق متعدد التخصصات", uz: "Sohalararo muvofiqlashtirish" } as T,
      de: "Abstimmung der operativen und anästhesiologischen Behandlung sowie Koordination notwendiger internistischer oder weiterer fachärztlicher Untersuchungen.",
      en: "Coordination of surgical and anaesthesiological treatment and organization of required internal medicine or further specialist examinations.",
      ru: "Согласование хирургического и анестезиологического лечения, координация необходимых терапевтических или иных специализированных обследований.",
      tr: "Cerrahi ve anestezi tedavisinin uyumu ile gerekli dahiliye ve diğer uzmanlık konsültasyonlarının koordinasyonu.",
      ar: "تنسيق العلاج الجراحي والتخديري وتنظيم الفحوصات الباطنية والتخصصية التكميلية اللازمة.",
      uz: "Jarrohlik va anesteziologik davolashni muvofiqlashtirish, zarur terapevtik yoki boshqa mutaxassislik tekshiruvlarini tashkil etish.",
    },
    {
      icon: HeartPulse as Icon,
      title: { de: "Schmerztherapie", en: "Pain Management", ru: "Обезболивание и терапия", tr: "Ağrı Tedavisi (Algoterapi)", ar: "إدارة وعلاج الألم", uz: "Og'riq terapiyasi" } as T,
      de: "Durchführung qualifikationsgerechter Schmerzdiagnostik und Schmerztherapie einschließlich perioperativer Schmerzbehandlung.",
      en: "Qualified pain diagnostics and pain management including perioperative pain treatment.",
      ru: "Квалифицированная диагностика и лечение боли, включая периоперационное обезболивание.",
      tr: "Perioperatif ağrı yönetimi dahil olmak üzere yetkin ağrı teşhisi ve kişiye özel ağrı tedavisinin uygulanması.",
      ar: "تشخيص وعلاج الألم وفق أعلى المعايير التخصصية بما يشمل تسكين الألم المحيط بالجراحة.",
      uz: "Malakali og'riq diagnostikasi va og'riq terapiyasini, jumladan perioperatsion og'riqsizlantirishni amalga oshirish.",
    },
    {
      icon: Bandage as Icon,
      title: { de: "Wundversorgung & Reha", en: "Wound Care & Rehab", ru: "Уход за ранами и реабилитация", tr: "Yara Bakımı ve Rehabilitasyon", ar: "العناية بالجروح والتأهيل", uz: "Jarohatlarni parvarishlash va reabilitatsiya" } as T,
      de: "Organisation der Wundversorgung, Verlaufskontrollen und gegebenenfalls erforderlicher rehabilitativer Maßnahmen.",
      en: "Organization of wound care, follow-up checks and any required rehabilitative measures.",
      ru: "Организация ухода за ранами, контрольных осмотров и при необходимости реабилитационных мероприятий.",
      tr: "Yara bakımı organizasyonu, düzenli dikiş ve iyileşme kontrolleri ile gerekli rehabilitasyon adımlarının planlanması.",
      ar: "تنظيم التئام ورعاية الجروح والفحوصات الدورية ومتابعة التدابير التأهيلية المقررة.",
      uz: "Jarohatlarni parvarishlashni tashkil qilish, davriy nazorat va zarur hollarda reabilitatsiya choralarini ko'rish.",
    },
    {
      icon: Siren as Icon,
      title: { de: "Notfallmanagement", en: "Emergency Care", ru: "Действия при осложнениях", tr: "Komplikasyon ve Acil Durum Yönetimi", ar: "إدارة الطوارئ والمضاعفات", uz: "Shoshilinch yordamni boshqarish" } as T,
      de: "Sicherstellung geeigneter Abläufe bei Komplikationen und medizinischen Notfällen einschließlich einer erforderlichen Weiterbehandlung oder Krankenhausverlegung.",
      en: "Ensuring appropriate procedures for complications and medical emergencies, including necessary further treatment or hospital transfer.",
      ru: "Обеспечение надлежащих процедур при осложнениях и экстренных ситуациях, включая дальнейшее лечение или перевод в стационар.",
      tr: "Komplikasyon ve tıbbi acillerde ileri tedavi veya hastaneye nakil dahil olmak üzere güvenli müdahale protokolleri.",
      ar: "ضمان بروتوكولات آمنة وفورية للتعامل مع المضاعفات وحالات الطوارئ ونقل المريض للمستشفى عند الحاجة.",
      uz: "Asoratlar va tibbiy favqulodda vaziyatlarda xavfsiz tartib-qoidalar, jumladan zarur keyingi davolash yoki shifoxonaga ko'chirishni ta'minlash.",
    },
    {
      icon: Hospital as Icon,
      title: { de: "Klinik-Kooperationen", en: "Clinic Partnerships", ru: "Кооперация с больницами", tr: "Klinik ve Merkez Ortaklıkları", ar: "الشراكات السريرية", uz: "Klinik hamkorliklar" } as T,
      de: "Zusammenarbeit mit weiterbehandelnden Ärzten, Krankenhäusern, Rehabilitationseinrichtungen, Pflege und befugten Heilmittelerbringern.",
      en: "Cooperation with treating physicians, hospitals, rehabilitation facilities, nursing and authorized remedies providers.",
      ru: "Взаимодействие с лечащими врачами, больницами, реабилитационными учреждениями, уходом и лечебными учреждениями.",
      tr: "Takip eden hekimler, hastaneler, rehabilitasyon ve bakım kuruluşları ile entegre profesyonel iş birliği.",
      ar: "التعاون الوثيق مع الأطباء المعالجين والمستشفيات ومراكز إعادة التأهيل ومقدمي الرعاية المعتمدين.",
      uz: "Keyingi davolovchi shifokorlar, shifoxonalar, reabilitatsiya markazlari, parvarishlash va vakolatli tibbiy muassasalar bilan hamkorlik.",
    },
    {
      icon: GraduationCap as Icon,
      title: { de: "Fort- & Weiterbildung", en: "Staff Training & Education", ru: "Обучение и квалификация", tr: "Mesleki Eğitim ve Gelişim", ar: "التدريب والتأهيل المستمر", uz: "Malaka oshirish va o'qitish" } as T,
      de: "Fachliche Fortbildung des Personals und gegebenenfalls ärztliche Weiterbildung auf Grundlage der erforderlichen Weiterbildungsbefugnisse.",
      en: "Professional training of staff and, where applicable, postgraduate medical training based on the required training authorizations.",
      ru: "Повышение квалификации персонала и, при наличии полномочий, врачебная последипломная подготовка.",
      tr: "Sağlık personelinin sürekli eğitimi ve yetkili eğitim izinleri doğrultusunda cerrahi hekimlik uzmanlık eğitimi.",
      ar: "التدريب المهني المستمر للكوادر والتأهيل التخصصي للأطباء استناداً إلى الاعتمادات الرسمية.",
      uz: "Xodimlarning kasbiy malakasini oshirish va tegishli ruxsatnomalar asosida shifokorlarning jarrohlik ixtisosligi bo'yicha tayyorgarligi.",
    },
  ],

  dutiesTitle: {
    de: "Rechtliche und betriebliche Pflichten",
    en: "Legal and operational obligations",
    ru: "Правовые и операционные обязанности",
    tr: "Yasal ve Operasyonel Yükümlülükler",
    ar: "الالتزامات القانونية والتشغيلية",
    uz: "Huquqiy va operatsion majburiyatlar",
  } as T,
  dutiesLead: {
    de: "Die Gesellschaft stellt durch geeignete Zuständigkeiten und Kontrollverfahren insbesondere Folgendes sicher:",
    en: "Through appropriate responsibilities and control procedures, the company ensures in particular the following:",
    ru: "Посредством распределения ответственности и процедур контроля общество обеспечивает, в частности, следующее:",
    tr: "Şirket, tanımlanmış sorumluluklar ve denetim süreçleri aracılığıyla özellikle şunları güvence altına alır:",
    ar: "تضمن الشركة، عبر توزيع المسؤوليات وإجراءات الرقابة المحكمة، استيفاء الاشتراطات التالية على وجه الخصوص:",
    uz: "Kompaniya mas'uliyatni aniq taqsimlash va nazorat tartib-qoidalari orqali xususan quyidagilarni ta'minlaydi:",
  } as T,
  duties: [
    {
      icon: FileBadge as Icon,
      title: {
        de: "Zulassung und Versorgungsauftrag",
        en: "Approval and care mandate",
        ru: "Допуск и объём помощи",
        tr: "Ruhsat ve Hizmet Görevi",
        ar: "التراخيص ونطاق الرعاية",
        uz: "Ruxsatnoma va xizmat ko'rsatish topshirig'i",
      } as T,
      text: {
        de: "Einhaltung der MVZ-Zulassung, der genehmigten Arztstellen und Anstellungen sowie der zulässigen Tätigkeitsorte und Beschäftigungsumfänge. Veränderungen werden entsprechend den geltenden Vorgaben angezeigt oder vorab zur Genehmigung vorgelegt.",
        en: "Compliance with the MVZ approval, the approved physician positions and employment, as well as the permitted places of work and scope of employment. Changes are notified or submitted for approval in advance in accordance with applicable requirements.",
        ru: "Соблюдение допуска MVZ, утверждённых врачебных ставок и трудоустройства, допустимых мест работы и объёмов занятости. Изменения уведомляются или представляются на утверждение заблаговременно.",
        tr: "MVZ ruhsatına, onaylı hekim kadrolarına, izinli çalışma merkezlerine ve çalışma saatlerine tam uyum; değişikliklerin vaktinde bildirilmesi.",
        ar: "الالتزام بترخيص المركز والشواغر المصرح بها وأماكن العمل المعتمدة، وإخطار السلطات بأي تغييرات في الوقت المحدد.",
        uz: "MVZ litsenziyasiga, tasdiqlangan shifokor shtatlariga, ruxsat etilgan faoliyat joylariga va ish vaqtlariga to'liq rioya qilish; o'zgarishlarni o'z vaqtida bildirish.",
      } as T,
    },
    {
      icon: UserCog as Icon,
      title: {
        de: "Ärztliche Leitung und Verantwortlichkeiten",
        en: "Medical director and responsibilities",
        ru: "Врачебное руководство и ответственность",
        tr: "Tıbbi Direktörlük ve Sorumluluklar",
        ar: "الإدارة الطبية والمسؤوليات",
        uz: "Tibbiy rahbarlik va mas'uliyat",
      } as T,
      text: {
        de: "Bestellung einer ärztlichen Leitung entsprechend den gesetzlichen Voraussetzungen. Eindeutige Zuordnung der operativen, anästhesiologischen und nachsorgenden Verantwortlichkeiten unter Wahrung der ärztlichen Weisungsfreiheit.",
        en: "Appointment of a medical director in accordance with the legal requirements. Clear allocation of surgical, anaesthesiological and aftercare responsibilities while preserving medical independence.",
        ru: "Назначение врачебного руководителя в соответствии с требованиями закона. Чёткое распределение операционной, анестезиологической и последующей ответственности при соблюдении независимости врача.",
        tr: "Yasal şartlara uygun tıbbi direktör atanması. Cerrahi, anestezi ve ameliyat sonrası sorumlulukların bağımsız hekimlik ilkesiyle net dağıtımı.",
        ar: "تعيين مدير طبي وفق الاشتراطات النظامية، وتوزيع مسؤوليات الجراحة والتخدير والمتابعة مع صون استقلالية القرار الطبي.",
        uz: "Qonun talablariga javob beradigan tibbiy rahbarni tayinlash. Jarrohlik, anesteziologik va parvarishlash mas'uliyatini shifokorlik mustaqilligi asosida aniq taqsimlash.",
      } as T,
    },
    {
      icon: BadgeCheck as Icon,
      title: {
        de: "Qualifikation und Leistungsgenehmigungen",
        en: "Qualifications and service approvals",
        ru: "Квалификации и разрешения на услуги",
        tr: "Uzmanlık Yeterliliği ve Hizmet İzinleri",
        ar: "المؤهلات وتراخيص الإجراءات",
        uz: "Malaka va xizmat ruxsatnomalari",
      } as T,
      text: {
        de: "Prüfung der erforderlichen Facharztqualifikationen, Zusatzqualifikationen und Berechtigungen. Genehmigungspflichtige Leistungen werden erst nach Erteilung der erforderlichen Genehmigungen erbracht und abgerechnet.",
        en: "Verification of required specialist qualifications, additional qualifications and authorizations. Services requiring approval are only provided and billed after the required approvals have been granted.",
        ru: "Проверка необходимых квалификаций специалиста, дополнительных квалификаций и разрешений. Услуги, требующие разрешения, оказываются и выставляются в счёт только после его получения.",
        tr: "Uzman hekim ve yan dal yeterliliklerinin kontrolü. Onaya tabi cerrahi ve anestezi işlemlerinin yalnızca resmi izin alındıktan sonra yapılması.",
        ar: "التحقق من المؤهلات والخبرات التخصصية، وعدم تقديم أو فوترة الخدمات المقيدة إلا بعد نيل التراخيص الرسمية اللازمة.",
        uz: "Mutaxassis shifokor va qo'shimcha malakalarni tekshirish. Ruxsat talab qilinadigan xizmatlarni faqat rasmiy ruxsat olingandan keyin ko'rsatish va hisob-kitob qilish.",
      } as T,
    },
    {
      icon: ScrollText as Icon,
      title: {
        de: "Patientenauswahl und Operationsplanung",
        en: "Patient selection and surgical planning",
        ru: "Отбор пациентов и планирование операций",
        tr: "Hasta Seçimi ve Ameliyat Planlaması",
        ar: "اختيار المرضى وتخطيط العمليات",
        uz: "Bemorlarni saralash va operatsiyalarni rejalashtirish",
      } as T,
      text: {
        de: "Medizinische Prüfung, ob der vorgesehene Eingriff ambulant durchgeführt werden kann, und Sicherstellung einer ausreichenden präoperativen Abklärung sowie einer angemessenen Patientenaufklärung. Beachtung der geltenden rechtlichen und fachlichen Anforderungen an die Operationsvorbereitung.",
        en: "Medical assessment of whether the planned procedure can be performed on an outpatient basis, and ensuring adequate preoperative workup and appropriate patient consent. Compliance with applicable legal and professional requirements for surgical preparation.",
        ru: "Медицинская оценка возможности проведения вмешательства амбулаторно, обеспечение надлежащей предоперационной подготовки и информирования пациента. Соблюдение требований к подготовке операции.",
        tr: "Girişimin ayakta yapılabilirliğinin tıbbi kontrolü, kapsamlı preoperatif tetkikler ve aydınlatılmış onam ile cerrahi hazırlık standartlarına tam uyum.",
        ar: "التقييم الطبي لإمكانية إجراء التدخل بالعيادة النهارية، وضمان الفحوصات السابقة للجراحة والتوعية الشاملة والموافقة المستنيرة.",
        uz: "Amaliyotning ambulator sharoitda o'tkazilishini tibbiy tekshirish, operatsiyadan oldingi yetarli tahlillar va to'liq bemor roziligini ta'minlash.",
      } as T,
    },
    {
      icon: Lock as Icon,
      title: {
        de: "Dokumentation und Datenschutz",
        en: "Documentation and data protection",
        ru: "Документация и защита данных",
        tr: "Belgeleme ve Veri Koruma",
        ar: "التوثيق وحماية البيانات",
        uz: "Hujjatlashtirish va ma'lumotlar xavfsizligi",
      } as T,
      text: {
        de: "Ordnungsgemäße Führung, Sicherung und Aufbewahrung der Behandlungsdokumentation. Wahrung der Schweigepflicht und Umsetzung der geltenden Datenschutzanforderungen durch geregelte Zugriffsrechte und sichere Datenübermittlung.",
        en: "Proper keeping, securing and storage of treatment records. Maintaining confidentiality and implementing applicable data protection requirements through regulated access rights and secure data transmission.",
        ru: "Надлежащее ведение, защита и хранение документации. Соблюдение врачебной тайны и требований защиты данных через регламентированные права доступа и защищённую передачу данных.",
        tr: "Ameliyat ve tedavi kayıtlarının eksiksiz tutulması ve güvenli saklanması. Tıbbi sır ve GDPR/DSGVO veri gizliliği standartlarına kesin riayet.",
        ar: "التوثيق الدقيق للسجلات الجراحية والعلاجية وحفظها الآمن، والامتثال للسرية المهنية ولوائح حماية البيانات العامة (DSGVO).",
        uz: "Davolash va operatsiya yozuvlarini to'g'ri yuritish, saqlash va arxivlash. Shifokorlik siriga va ma'lumotlar xavfsizligi standartlariga (DSGVO) to'liq rioya qilish.",
      } as T,
    },
    {
      icon: ShieldCheck as Icon,
      title: {
        de: "Qualitätsmanagement und Hygiene",
        en: "Quality management and hygiene",
        ru: "Менеджмент качества и гигиена",
        tr: "Kalite Yönetimi ve Ameliyathane Hijyeni",
        ar: "إدارة الجودة ومكافحة العدوى",
        uz: "Sifat menejmenti va gigiyena",
      } as T,
      text: {
        de: "Einrichtung und Weiterentwicklung eines einrichtungsinternen Qualitätsmanagements. Umsetzung der einschlägigen Hygieneanforderungen, insbesondere für Operationsbereiche und Aufwachräume, sowie eines angemessenen Fehler-, Beschwerde- und Risikomanagements.",
        en: "Establishing and developing internal quality management. Implementing relevant hygiene requirements, particularly for operating areas and recovery rooms, as well as appropriate error, complaint and risk management.",
        ru: "Создание и развитие внутреннего менеджмента качества. Выполнение гигиенических требований, особенно для операционных и зон пробуждения, а также управление ошибками, жалобами и рисками.",
        tr: "Kurum içi kalite sistemi geliştirme; ameliyathane ve derlenme odaları için DIN ve RKI enfeksiyon kontrol kurallarına ve risk yönetimine tam uyum.",
        ar: "تطوير نظام الجودة الداخلي وتطبيق أعلى معايير النظافة والتعقيم في غرف العمليات والإفاقة وإدارة المخاطر والشكاوى.",
        uz: "Ichki sifat menejmentini rivojlantirish. Operatsiya zonalari va uyg'onish xonalari uchun gigiyena talablariga hamda xatolar va xavflarni boshqarishga to'liq rioya qilish.",
      } as T,
    },
    {
      icon: Cpu as Icon,
      title: {
        de: "Medizinprodukte und technische Ausstattung",
        en: "Medical devices and technical equipment",
        ru: "Медизделия и техническое оснащение",
        tr: "Medikal Cihazlar ve Teknik Donanım",
        ar: "الأجهزة الطبية والتجهيزات الفنية",
        uz: "Tibbiy buyumlar va texnik uskunalar",
      } as T,
      text: {
        de: "Sicherstellung eines ordnungsgemäßen Betriebs der eingesetzten Medizinprodukte und Geräte einschließlich erforderlicher Einweisungen, Wartungen, Kontrollen und Dokumentationen. Beachtung des Strahlenschutzrechts, soweit entsprechende Anwendungen erfolgen.",
        en: "Ensuring proper operation of medical devices and equipment, including required instruction, maintenance, inspections and documentation. Compliance with radiation protection law where applicable.",
        ru: "Надлежащая эксплуатация медицинских изделий, включая инструктажи, обслуживание, проверки и документацию. Соблюдение законодательства о радиационной защите, если применимо.",
        tr: "Ameliyathane cihazları ve anestezi sistemlerinin düzenli bakımı, kalibrasyonu, güvenli işletimi ve radyasyondan korunma kurallarına riayet.",
        ar: "ضمان التشغيل والصيانة والمعايرة الدورية للأجهزة الجراحية والتخديرية ومراعاة لوائح الوقاية من الإشعاع بدقة.",
        uz: "Operatsiya va anesteziya uskunalarining xavfsiz ishlashini ta'minlash, muntazam texnik xizmat, tekshiruvlar va nurlanishdan himoyalanish qoidalariga rioya qilish.",
      } as T,
    },
    {
      icon: Receipt as Icon,
      title: {
        de: "Abrechnung und Wirtschaftlichkeit",
        en: "Billing and efficiency",
        ru: "Расчёты и экономичность",
        tr: "Faturalandırma ve Ekonomiklik İlkesi",
        ar: "الفوترة والكفاءة الاقتصادية",
        uz: "Hisob-kitoblar va iqtisodiy samaradorlik",
      } as T,
      text: {
        de: "Sicherstellung einer vollständigen, zutreffenden und nachvollziehbaren Abrechnung. Beachtung der jeweils anwendbaren Vergütungsregelungen, des Wirtschaftlichkeitsgebots und der Voraussetzungen für genehmigungspflichtige Leistungen.",
        en: "Ensuring complete, accurate and traceable billing. Compliance with applicable remuneration rules, the efficiency requirement and prerequisites for services requiring approval.",
        ru: "Полные, корректные и прозрачные расчёты. Соблюдение применимых правил вознаграждения, принципа экономичности и условий для услуг, требующих разрешения.",
        tr: "Eksiksiz, şeffaf ve denetlenebilir faturalandırma; geçerli hekimlik tarife mevzuatına, ekonomiklik kuralına ve onay şartlarına tam bağlılık.",
        ar: "ضمان فوترة مكتملة وقابلة للتدقيق والامتثال للوائح الأجور المعتمدة ومبدأ الكفاءة الاقتصادية للخدمات المرخصة.",
        uz: "Hisob-kitoblarning to'liq, aniq va shaffof bo'lishini ta'minlash. Amaldagi tarif qoidalariga, iqtisodiy tejamkorlik tamoyiliga va ruxsat berilgan xizmatlar shartlariga rioya qilish.",
      } as T,
    },
  ],
};

const specialtyIconsList: React.ComponentType<{ className?: string }>[] = [
  Activity,
  Brain,
  Scissors,
  Sparkles,
  Syringe,
];

const cardEyebrows: T[] = [
  { de: "OPERATIVE MEDIZIN", en: "SURGICAL CARE", ru: "ОПЕРАТИВНАЯ ПОМОЩЬ", tr: "CERRAHİ HİZMETLER", ar: "الطب الجراحي", uz: "OPERATIV TIBBIYOT" },
  { de: "INFRASTRUKTUR & OP-RÄUME", en: "FACILITIES & OR SUITES", ru: "ИНФРАСТРУКТУРА И ОПЕРБЛОКИ", tr: "TESİSLER VE AMELİYATHANELER", ar: "المرافق وأجنحة العمليات", uz: "INFRATUZILMA VA OPERATSIYA BLOKLARI" },
  { de: "KLINIK-VERBUND & RECHT", en: "CLINIC NETWORK & LAW", ru: "КЛИНИЧЕСКАЯ СЕТЬ И ПРАВО", tr: "KLİNİK AĞI VE HUKUK", ar: "شبكة العيادات والأطر القانونية", uz: "KLINIKA TARMOG'I VA HUQUQ" },
];

const surgeryFacilitiesIcons = [Scissors, HeartPulse, Network];

const cardPoints: Record<Lang, string[]>[] = [
  // Card 1: Ambulante & operative Leistungen
  {
    de: [
      "Ambulante Operationen & Interventionen",
      "Anästhesiologische Betreuung & Überwachung",
      "Konservative Therapie & Schmerztherapie",
    ],
    en: [
      "Outpatient surgery & interventions",
      "Anesthesiological monitoring & care",
      "Conservative therapy & pain management",
    ],
    ru: [
      "Амбулаторные операции и вмешательства",
      "Анестезиологическое сопровождение и мониторинг",
      "Консервативная терапия и обезболивание",
    ],
    tr: [
      "Günübirlik ameliyatlar ve girişimsel tedaviler",
      "Anesteziyolojik takip ve hasta monitörizasyonu",
      "Konservatif tedaviler ve ağrı yönetimi",
    ],
    ar: [
      "الجراحات النهارية المتنقلة والإجراءات التداخلية",
      "المراقبة والرعاية التخديرية المتكاملة",
      "العلاج التحفظي وإدارة الألم التخصصية",
    ],
    uz: [
      "Ambulator operatsiyalar va muolajalar",
      "Anesteziologik hamrohlik va monitoring",
      "Konservativ terapiya va og'riq qoldirish",
    ],
  },
  // Card 2: Räume & Kooperationen
  {
    de: [
      "Moderne OP-Säle & Behandlungsräume",
      "Aufwach- & Überwachungsbereiche",
      "Kooperation mit dem internistischen MVZ",
    ],
    en: [
      "Modern OR suites & treatment rooms",
      "Recovery & patient monitoring areas",
      "Cooperation with internal medicine MVZ",
    ],
    ru: [
      "Современные операционные залы и процедурные",
      "Зоны пробуждения и мониторинга пациентов",
      "Кооперация с терапевтическим MVZ",
    ],
    tr: [
      "Modern ameliyathaneler ve müdahale odaları",
      "Derlenme ve postoperatif izlem üniteleri",
      "Dahiliye branş MVZ ile doğrudan iş birliği",
    ],
    ar: [
      "أجنحة عمليات وغرف علاج حديثة",
      "مناطق إفاقة ومراقبة سريرية متقدمة",
      "تعاون مباشر مع مركز MVZ الباطني",
    ],
    uz: [
      "Zamonaviy operatsiya zallari va xonalar",
      "Uyg'onish va bemorlarni kuzatish zonalari",
      "Terapevtik MVZ bilan to'g'ridan-to'g'ri hamkorlik",
    ],
  },
  // Card 3: Krankenhaus-Kooperation & Zulassungen
  {
    de: [
      "Zusammenarbeit mit NabiOta Clinics Germany GmbH",
      "Getrennte Zulassungen & Abrechnungsbefugnisse",
      "Volle Wahrung aller Genehmigungspflichten",
    ],
    en: [
      "Cooperation with NabiOta Clinics Germany GmbH",
      "Distinct approvals & statutory billing mandates",
      "Full compliance with licensing requirements",
    ],
    ru: [
      "Сотрудничество с NabiOta Clinics Germany GmbH",
      "Раздельные допуски и полномочия расчетов",
      "Полное соблюдение лицензионных требований",
    ],
    tr: [
      "NabiOta Clinics Germany GmbH ile stratejik iş birliği",
      "Ayrılmış ruhsatlar ve yasal faturalandırma yetkileri",
      "Tüm resmi izin ve lisanslama şartlarına tam uyum",
    ],
    ar: [
      "شراكة استراتيجية مع NabiOta Clinics Germany GmbH",
      "تراخيص وصلاحيات فوترة مستقلة نظاماً",
      "امتثال كامل لجميع متطلبات التراخيص الرسمية",
    ],
    uz: [
      "NabiOta Clinics Germany GmbH bilan hamkorlik",
      "Mustaqil litsenziyalar va hisob-kitob huquqlari",
      "Litsenziyalash talablariga to'liq rioya qilish",
    ],
  },
];

export function MvzSurgeryCareSection({ locale = "de" }: { locale?: string }) {
  const l: Lang = locale === "uz" ? "uz" : locale === "tr" ? "tr" : locale === "ar" ? "ar" : locale === "ru" ? "ru" : locale === "en" ? "en" : "de";

  return (
    <>
      <section
        id="mvz-chirurgie-anaesthesiologie"
        className="relative pt-0 pb-14 sm:pb-18 lg:pb-20 bg-[#FAF7F2] border-t border-[#EDE8DE]/60 overflow-hidden"
      >
      <div className="absolute -bottom-40 -left-32 w-[520px] h-[520px] rounded-full bg-[#1E3B29]/[0.06] blur-3xl pointer-events-none" />

      {/* ── Hero Banner: Full-width banner with soft right-photo fade & full-width specialty cards along bottom ── */}
      <div className="relative z-10 w-full overflow-hidden pb-4 sm:pb-6">
        {/* Soft Background Photo with smooth horizontal fade / blur effect (replacing vector arc) */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[64%] xl:w-[60%] pointer-events-none overflow-hidden select-none">
          <Image
            src="/images/areas/surgical-center.webp"
            alt="MVZ Chirurgie und Anästhesiologie"
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

        {/* Botanical foliage watermark on far left (matching reference image) */}
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
              {/* Eyebrow with gold line: MVZ 2 · § 95 SGB V */}
              <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
                <span className="w-6 h-[1.5px] bg-[#C5A56A]" />
                <span className="text-[11px] sm:text-[11.5px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase font-sans">
                  {c.tag[l]}
                </span>
              </div>

              {/* Title with styled italic phrase */}
              <h2 className="font-serif text-[24px] sm:text-[28px] lg:text-[34px] xl:text-[38px] text-[#142318] font-normal leading-[1.18] mb-3">
                {(() => {
                  const phrase = "Chirurgie und Anästhesiologie";
                  const [before, after] = c.title.split(phrase);
                  return after === undefined ? (
                    c.title
                  ) : (
                    <>
                      {before}
                      <span className="font-serif italic text-[#C5A56A]">{phrase}</span>
                      {after}
                    </>
                  );
                })()}
              </h2>

              <p className="text-[12.5px] sm:text-[13px] text-[#556057] leading-relaxed max-w-xl">
                {c.lead[l]}
              </p>
            </div>

            {/* Bottom: 5 Specialty Cards spanning along the entire width */}
            {/* No "SPECIALTIES" or "Range of care" labels, no numbers, centered title */}
            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-2.5">
                {c.specialties[l].map((s, idx) => {
                  const SpecIcon = specialtyIconsList[idx % specialtyIconsList.length] || Scissors;
                  return (
                    <div
                      key={s}
                      className="group relative rounded-xl bg-white/85 hover:bg-white border border-[#EAE4D7] hover:border-[#D5B878]/70 py-2 px-3 sm:py-2.5 sm:px-3.5 flex items-center gap-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-sm transition-all duration-300 backdrop-blur-xs"
                    >
                      <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-[#FAF5EB] border border-[#EFE5D5] flex items-center justify-center shrink-0 group-hover:bg-[#F3EAD9] transition-colors">
                        <SpecIcon className="w-3.5 h-3.5 text-[#9E7D3B]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif text-[12px] sm:text-[12.5px] text-[#142318] font-medium leading-tight">
                          {s}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Warning / Note banner */}
              <div className="flex items-start sm:items-center gap-2.5 mt-2.5 sm:mt-3 px-3.5 py-2 rounded-xl border border-[#E8DFC8]/75 bg-white/75 backdrop-blur-xs text-[#556057]">
                <Info className="w-3.5 h-3.5 text-[#9E7D3B] shrink-0" />
                <p className="text-[11px] sm:text-[11.5px] leading-relaxed">
                  {c.specialtiesNote[l]}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container size="wide" className="relative z-10 mt-10 sm:mt-12">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-14">

          {/* Gegenstand – Row 1: Left & Right 50/50 (Design 1:1 with Photo 1, Default Container Width, No Button) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 items-stretch pt-2 sm:pt-4">
            {[0, 2].map((cardIdx) => {
              const p = c.paragraphs[cardIdx];
              const Icon = p.icon;
              const bgImage =
                cardIdx === 0
                  ? "/images/areas/card-stethoscope.webp"
                  : "/images/areas/card-plant.webp";

              return (
                <article
                  key={cardIdx}
                  className="col-span-1 group relative rounded-[26px] sm:rounded-[30px] p-6 sm:p-7 lg:p-8 overflow-hidden flex flex-col justify-start transition-all duration-300 bg-white border border-[#EAE4D7] text-[#142318] shadow-xs hover:shadow-xl hover:border-[#D5B878]/70"
                >
                  {/* Right Faded Image Layer with smooth transition like Clinical operations */}
                  <div className="absolute right-0 top-0 bottom-0 pointer-events-none overflow-hidden select-none w-[40%] sm:w-[42%] lg:w-[44%]">
                    <div className="relative w-full h-full translate-x-1 sm:translate-x-3">
                      <Image
                        src={bgImage}
                        alt=""
                        fill
                        className="object-cover object-right group-hover:scale-105 transition-transform duration-700"
                        unoptimized
                      />
                    </div>
                    {/* Seamless full-height gradient transition (like Clinical operations) */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/75 to-transparent pointer-events-none" />
                    {/* Left soft bloom fade */}
                    <div className="absolute inset-y-0 left-0 w-20 sm:w-28 bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none" />
                  </div>

                  <div className="relative z-10 max-w-[90%] sm:max-w-[84%] lg:max-w-[80%] pb-2">
                    {/* Eyebrow badge with icon */}
                    <div className="flex items-center gap-2 mb-3.5 sm:mb-4">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-[#EFE8D8] text-[#9E7D3B] border border-[#D5B878]/30">
                        <Icon className="w-3 h-3" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-[22px] sm:text-[24px] lg:text-[25px] font-medium leading-[1.25] mb-3 sm:mb-3.5 text-[#142318]">
                      {p.title[l]}
                    </h3>

                    {/* Paragraph Text */}
                    <p className="text-[12.5px] sm:text-[13px] leading-relaxed mb-5 text-[#4E5650]">
                      {p.text[l]}
                    </p>

                    {/* Bullet Points with Gold Checkmarks */}
                    <ul className="space-y-2.5 pt-1">
                      {cardPoints[cardIdx][l].map((point, pIdx) => (
                        <li key={pIdx} className="flex items-center gap-2.5">
                          <span className="w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full flex items-center justify-center shrink-0 bg-[#EFE5CD] text-[#8C6D2D] border border-[#D5B878]/40">
                            <Check className="w-2.5 h-2.5 stroke-[2.8]" />
                          </span>
                          <span className="text-[12px] sm:text-[12.5px] font-medium leading-snug text-[#1B3624]">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>

      {/* ── Card 1: Facilities & Cooperations – 100% FULL WIDTH EDGE-TO-EDGE (Photo 2 Style, No Frames) ── */}
      <div className="w-full relative overflow-hidden my-8 sm:my-10 lg:my-12">
        {/* Full-bleed background image across 100% of the screen */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <Image
            src="/images/areas/facilities-cooperation-bg.webp"
            alt="Facilities & Cooperations"
            fill
            className="object-cover object-bottom sm:object-center"
            priority
            unoptimized
          />
        </div>

        {/* Inner Content Area: aligns with page container, completely open without borders or frames */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-12 lg:py-14">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-14 w-full">
            {/* Left Column: Original Eyebrow, Title, Description, Pill Button */}
            <div className="w-full lg:w-[52%] xl:w-[48%]">
              <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
              </div>

              <h3 className="font-serif text-[28px] sm:text-[34px] lg:text-[38px] font-normal text-[#142318] leading-[1.18] mb-3.5 sm:mb-4">
                {c.paragraphs[1].title[l]}
              </h3>

              <p className="text-[13px] sm:text-[13.5px] text-[#4E5650] leading-relaxed max-w-xl mb-6">
                {c.paragraphs[1].text[l]}
              </p>

              <div>
                <Link
                  href={`/${l}/contact`}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#8C9886] bg-white/70 hover:bg-[#142318] hover:text-white hover:border-[#142318] text-[#2C3B2E] text-[12.5px] font-medium tracking-wide transition-all shadow-xs"
                >
                  <span>{l === "uz" ? "Batafsil" : l === "ru" ? "Подробнее" : l === "en" ? "Learn more" : l === "tr" ? "Daha fazla bilgi" : l === "ar" ? "اعرف المزيد" : "Mehr erfahren"}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: 3 Original Points with gold emblem icons */}
            <div className="w-full lg:w-[48%] xl:w-[52%] flex justify-center lg:justify-end">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-7 w-full max-w-xl lg:max-w-none pt-2 lg:pt-0 self-center lg:self-start mt-2 lg:mt-3">
                {cardPoints[1][l].map((point, pIdx) => {
                  const PointIcon = surgeryFacilitiesIcons[pIdx] || Scissors;
                  return (
                    <div key={pIdx} className="flex flex-col items-center text-center p-2">
                      <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full border border-[#D5B878]/60 bg-white/75 backdrop-blur-xs flex items-center justify-center text-[#9E7D3B] mb-2.5 shadow-2xs hover:bg-[#FAF3E8] transition-colors">
                        <PointIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[1.6]" />
                      </div>
                      <span className="text-[12px] sm:text-[12.5px] font-medium text-[#3E4940] leading-snug">
                        {point}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Container size="wide">
        <div className="space-y-12 sm:space-y-16">

          {/* Medizinische und organisatorische Aufgaben (Photo Style: 4 Columns Grid) */}
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-[22px] sm:text-[26px] lg:text-[28px] font-normal text-[#142318] leading-[1.2]">
                {c.tasksTitle[l]}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
              {c.tasks.map((t, i) => {
                const Icon = t.icon;
                return (
                  <article
                    key={i}
                    className="group relative rounded-[18px] sm:rounded-[20px] p-3.5 sm:p-4 bg-white border border-[#EAE4D7] hover:border-[#D5B878] hover:shadow-[0_4px_16px_-4px_rgba(20,35,24,0.08)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {/* Top Row: Circular Icon + Title */}
                    <div className="flex items-center gap-2.5 mb-2 sm:mb-2.5">
                      <div className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full bg-[#FAF7F2] border border-[#E8DFC8] flex items-center justify-center text-[#B89650] shrink-0 group-hover:bg-[#1E3B29] group-hover:text-[#ECCF96] group-hover:border-[#1E3B29] transition-all">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-serif font-medium text-[13.5px] sm:text-[14px] text-[#142318] group-hover:text-[#8C6D2D] transition-colors leading-snug">
                        {t.title[l]}
                      </h4>
                    </div>

                    {/* Description Text */}
                    <p className="text-[11.5px] sm:text-[12px] text-[#556057] leading-snug sm:leading-relaxed">
                      {t[l]}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>

    {/* Rechtliche und betriebliche Pflichten – FULL WIDTH SCREEN SECTION (leaves_bag.png background) */}
    <section className="relative w-full bg-[#011B0B] text-white py-12 sm:py-16 lg:py-20 overflow-hidden border-b border-[#D5B878]/25">
      {/* Full-width foliage & background layer spanning 100% of the screen width */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <Image
          src="/images/areas/leaves_bag.png"
          alt=""
          fill
          priority
          unoptimized
          className="object-cover object-top opacity-95"
        />
      </div>

      {/* Full-width container with generous max-width */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="max-w-2xl mb-7 sm:mb-9">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="h-px w-8 bg-[#C5A56A]" />
          </div>
          <h3 className="font-serif text-[26px] sm:text-[32px] lg:text-[38px] text-white font-normal leading-[1.15] mb-2.5">
            {l === "de" ? (
              <>
                Rechtliche und betriebliche <span className="italic text-[#ECCF96]">Pflichten</span>
              </>
            ) : l === "uz" ? (
              <>
                Huquqiy va operatsion <span className="italic text-[#ECCF96]">majburiyatlar</span>
              </>
            ) : (
              c.dutiesTitle[l]
            )}
          </h3>
          <p className="text-[12.5px] sm:text-[13.5px] text-[#A6BCB0] leading-relaxed">
            {c.dutiesLead[l]}
          </p>
        </div>

        {/* 8 Cards Grid (2 Columns, 4 Rows) – Lighter Card Background & High Text Contrast */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4.5">
          {c.duties.map((d, i) => {
            const Icon = d.icon;
            const numStr = String(i + 1).padStart(2, "0");

            return (
              <article
                key={i}
                className="group relative rounded-[18px] sm:rounded-[20px] p-4.5 sm:p-5 bg-gradient-to-br from-[#123824]/92 via-[#0e301e]/92 to-[#092617]/92 backdrop-blur-md border border-[#D5B878]/40 hover:border-[#ECCF96]/80 hover:from-[#17462d]/95 hover:to-[#0f3420]/95 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.35)] flex flex-col justify-center overflow-hidden"
              >
                {/* Subtle botanical leaf watermark on the right edge */}
                <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-28 pointer-events-none overflow-hidden select-none opacity-20 group-hover:opacity-30 transition-opacity">
                  <Image
                    src="/images/areas/botanical-branch-clean.webp"
                    alt=""
                    fill
                    className="object-contain object-right"
                  />
                </div>

                <div className="relative z-10">
                  {/* Top Row: Number 01 + Circular Icon + Title */}
                  <div className="flex items-center gap-3 mb-2 sm:mb-2.5">
                    <span className="font-serif text-[22px] sm:text-[25px] text-[#F4DFC0] font-normal leading-none shrink-0 w-7 sm:w-8">
                      {numStr}
                    </span>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D5B878]/50 bg-[#164329] text-[#F4DFC0] flex items-center justify-center shrink-0 group-hover:border-[#ECCF96] group-hover:bg-[#1b4e31] group-hover:scale-105 transition-all shadow-xs">
                      <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </div>
                    <h4 className="font-serif font-medium text-[15px] sm:text-[16px] text-white leading-snug">
                      {d.title[l]}
                    </h4>
                  </div>

                  {/* Description Text with high contrast readable color */}
                  <p className="text-[12px] sm:text-[12.5px] text-[#E4EFE8] leading-relaxed pl-0.5 font-normal">
                    {d.text[l]}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  </>
  );
}
