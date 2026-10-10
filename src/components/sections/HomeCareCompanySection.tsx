"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Stethoscope,
  Activity,
  ShieldCheck,
  ShieldAlert,
  Users,
  Clock,
  Pill,
  Award,
  Layers,
  HeartHandshake,
  CheckCircle2,
  CalendarCheck2,
  FileCheck2,
  Scale,
  Sparkles,
  BadgeAlert,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/layout/Container";

/**
 * PDF Section IV.8 – "NabiOta HomeCare GmbH"
 * (Pflege / Wundversorgung)
 * Unternehmensgegenstand, 8 Leistungsfelder, Touren- & Qualitätsorganisation,
 * Verbundzusammenarbeit (freie Wahl der Leistungserbringer),
 * Spezialisierungen (SAPV/AKI Vorbehalt) & Kostenträger (SGB V / SGB XI).
 */

type Lang = "de" | "en" | "ru" | "tr" | "ar" | "uz";
type T = Record<Lang, string>;
type Icon = React.ComponentType<{ className?: string }>;

const c = {
  tag: {
    de: "GmbH · Ambulanter Pflegedienst · SGB V & SGB XI",
    en: "GmbH · Outpatient Care Service · SGB V & SGB XI",
    ru: "GmbH · Амбулаторная служба ухода · Нормы SGB V и SGB XI",
    tr: "GmbH · Ayakta Bakım Hizmeti · SGB V & SGB XI",
    ar: "ذ.م.م · خدمة التمريض والرعاية المنزلية · SGB V & SGB XI",
    uz: "GmbH · Ambulator parvarish xizmati · SGB V & SGB XI",
  } as T,
  title: "NabiOta HomeCare GmbH",
  subtitle: {
    de: "Häusliche Pflege, Krankenpflege & Wundversorgung",
    en: "Home Nursing, Clinical Treatment & Wound Care",
    ru: "Уход на дому, медицинский патронаж и ведение ран",
    tr: "Evde Bakım, Hasta Bakımı & Yara Tedavisi",
    ar: "التمريض المنزلي، الرعاية العلاجية وعلاج الجروح المتقدم",
    uz: "Uyda parvarish, tibbiy hamshiralik yordami va jarohatlarni davolash",
  } as T,
  lead: {
    de: "Gegenstand des Unternehmens ist der Aufbau, die Organisation und der Betrieb ambulanter Pflegedienste sowie die Erbringung häuslicher Pflege-, Krankenpflege-, Betreuungs- und Unterstützungsleistungen durch entsprechend qualifiziertes Personal im jeweils rechtlich zulässigen Umfang. Die Versorgung steht sowohl Patienten der NabiOta-Einrichtungen als auch externen Personen offen.",
    en: "The company's purpose is the establishment, organization, and operation of outpatient nursing services, delivering home care, treatment nursing, day-to-day assistance, and personal support through qualified personnel within the legally permissible scope. Services are open to patients of NabiOta facilities and all community members.",
    ru: "Предметом деятельности компании является создание, организация и эксплуатация амбулаторных патронажных служб, а также оказание услуг по уходу на дому, медицинской помощи, патронажу и поддержке квалифицированным персоналом в законно допустимом объёме. Помощь открыта как для пациентов сети NabiOta, так и для всех граждан.",
    tr: "Şirketin faaliyet konusu; ayakta bakım servislerinin kurulması, organizasyonu ve işletilmesinin yanı sıra nitelikli personel aracılığıyla evde bakım, tıbbi bakım, destek ve rehberlik hizmetlerinin yasal olarak izin verilen ölçüde sunulmasıdır. Hizmetler hem NabiOta kuruluşlarının hastalarına hem de toplumdaki tüm bireylere açıktır.",
    ar: "يتمثل نشاط الشركة في إنشاء وتنظيم وتشغيل خدمات التمريض والرعاية المنزلية المتنقلة، وتقديم الرعاية التمريضية والعلاجية والدعم والمساعدة عبر كوادر مؤهلة في الحدود المسموح بها قانونياً، وتتاح خدماتنا لمرضى مرافق نابي أوتا وكافة أفراد المجتمع.",
    uz: "Kompaniya faoliyatining predmeti ambulator parvarishlash xizmatlarini tashkil etish, yo'lga qo'yish va boshqarish, shuningdek malakali xodimlar tomonidan qonuniy ruxsat etilgan hajmda uyda parvarish, tibbiy hamshiralik xizmati, homiylik va ko'mak ko'rsatishdan iborat. Yordam NabiOta muassasalari bemorlari uchun ham, barcha fuqarolar uchun ham ochiqdir.",
  } as T,

  servicesTitle: {
    de: "Das 8-Säulen-Leistungsspektrum der NabiOta HomeCare",
    en: "The 8 Core Service Pillars of NabiOta HomeCare",
    ru: "8 ключевых направлений помощи NabiOta HomeCare",
    tr: "NabiOta HomeCare 8 Temel Hizmet Alanı",
    ar: "الركائز الـ 8 الأساسية لخدمات نابي أوتا هوم كير",
    uz: "NabiOta HomeCare yordamining 8 ta asosiy yo'nalishi",
  } as T,
  services: [
    {
      num: "01",
      icon: Heart as Icon,
      title: {
        de: "Körperbezogene Pflege (SGB XI)",
        en: "Personal Care & Hygiene (SGB XI)",
        ru: "Базовый гигиенический уход (SGB XI)",
        tr: "Kişisel Bakım & Hijyen (SGB XI)",
        ar: "العناية الشخصية والنظافة (SGB XI)",
        uz: "Shaxsiy gigiyena va parvarish (SGB XI)",
      } as T,
      desc: {
        de: "Unterstützung bei Körperpflege, Ankleiden, Ernährung, Ausscheidung und Mobilität unter kontinuierlicher Förderung der vorhandenen Fähigkeiten und Selbstständigkeit.",
        en: "Assistance with personal hygiene, dressing, nutrition, elimination, and daily mobility, actively fostering existing faculties and personal autonomy.",
        ru: "Помощь в личной гигиене, одевании, приёме пищи, отправлении естественных потребностей и мобильности с развитием сохранных навыков.",
        tr: "Mevcut yetenekleri ve bağımsızlığı sürekli teşvik ederek kişisel bakım, giyinme, beslenme, boşaltım ve günlük hareketlilikte destek.",
        ar: "المساعدة في النظافة الشخصية وارتداء الملابس والتغذية وقضاء الحاجة والحركة اليومية مع التحفيز المستمر للقدرات الذاتية والاستقلالية.",
        uz: "Mavjud ko'nikmalar va mustaqillikni doimiy ravishda qo'llab-quvvatlagan holda shaxsiy gigiyena, kiyinish, ovqatlanish, tabiiy ehtiyojlarni qondirish va harakatlanishda yordam.",
      } as T,
    },
    {
      icon: Stethoscope as Icon,
      num: "02",
      title: {
        de: "Häusliche Kranken- & Behandlungspflege (SGB V)",
        en: "Treatment & Clinical Nursing (SGB V)",
        ru: "Медицинский уход по назначению врача (SGB V)",
        tr: "Evde Tedavi & Tıbbi Bakım (SGB V)",
        ar: "التمريض العلاجي المنزلي بتوجيه طبي (SGB V)",
        uz: "Shifokor ko'rsatmasi bo'yicha tibbiy muolajalar (SGB V)",
      } as T,
      desc: {
        de: "Ärztlich verordnete Maßnahmen: Medikamentengabe, s.c.- und i.m.-Injektionen, Blutzuckerkontrollen, Kompressionstherapie sowie Katheter- und Stomaversorgung.",
        en: "Physician-prescribed clinical interventions: medication administration, injections, blood glucose monitoring, compression therapy, catheter, and ostomy care.",
        ru: "Медицинские процедуры по рецепту врача: выдача лекарств, инъекции, контроль сахара, компрессионный трикотаж, уход за катетерами и стомами.",
        tr: "Hekim tarafından reçete edilen işlemler: İlaç uygulaması, s.c. ve i.m. enjeksiyonlar, kan şekeri kontrolleri, kompresyon tedavisi ile kateter ve stoma bakımı.",
        ar: "الإجراءات الطبية الموصوفة من الطبيب: إعطاء الأدوية، الحقن تحت الجلد والعضل، قياس السكر، العلاج بالضغط، ورعاية القساطر وفتحات الإخراج (الستوما).",
        uz: "Shifokor tayinlagan tibbiy muolajalar: dori-darmonlarni berish, teri osti va mushak ichiga inyeksiyalar, qondagi qand miqdorini nazorat qilish, kompressiya terapiyasi, kateter va stomalarni parvarishlash.",
      } as T,
    },
    {
      icon: Award as Icon,
      num: "03",
      title: {
        de: "Zertifizierte Wundversorgung (ICW®)",
        en: "Certified Wound Management (ICW®)",
        ru: "Сертифицированное лечение ран (ICW®)",
        tr: "Sertifikalı Yara Bakımı (ICW®)",
        ar: "إدارة وعلاج الجروح المعتمدة (ICW®)",
        uz: "Sertifikatlangan jarohatlarni davolash (ICW®)",
      } as T,
      desc: {
        de: "Versorgung postoperativer, chronischer und schwer heilender Wunden einschließlich phasengerechtem Verbandwechsel, digitaler Wundbeobachtung und Dokumentation.",
        en: "Specialized care for postoperative, chronic, and non-healing wounds, including phase-appropriate dressing changes, photo tracking, and physician coordination.",
        ru: "Ведение постоперационных, хронических и труднозаживающих ран, фазовые перевязки, фотофиксация заживления и согласование с лечащими хирургами.",
        tr: "Ameliyat sonrası, kronik ve zor iyileşen yaraların evreye uygun pansuman değişimi, dijital yara takibi ve hekim koordinasyonuyla uzman bakımı.",
        ar: "علاج متخصص للجروح المزمنة وما بعد الجراحة، مع غيار الضمادات بحسب مرحلة الالتئام، والتوثيق الرقمي المصور بالتنسيق مع الجراح المعالج.",
        uz: "Operatsiyadan keyingi, surunkali va qiyin bitadigan jarohatlarni davolash, bosqichma-bosqich bog'lovlarni almashtirish, raqamli monitoring va shifokor bilan muvofiqlashtirish.",
      } as T,
    },
    {
      icon: Activity as Icon,
      num: "04",
      title: {
        de: "Postoperative Versorgung & Entlassbegleitung",
        en: "Postoperative Recovery & Monitoring",
        ru: "Постоперационное восстановление и наблюдение",
        tr: "Ameliyat Sonrası Bakım & Taburculuk Desteği",
        ar: "رعاية ما بعد الجراحة ومتابعة النقاهة",
        uz: "Operatsiyadan keyingi parvarish va kuzatuv",
      } as T,
      desc: {
        de: "Gezielte Genesungsbegleitung nach Operationen, lückenlose Beobachtung des Gesundheitszustands, Durchführung verordneter Pflegemaßnahmen und sofortige ärztliche Rückmeldung.",
        en: "Dedicated postoperative convalescence, physiological vital sign monitoring, adherence to prescribed clinical regimens, and prompt physician alerts on complications.",
        ru: "Сопровождение выздоровления после хирургических вмешательств, мониторинг состояния, выполнение предписаний и оперативное информирование врачей.",
        tr: "Ameliyatlar sonrası hedefe yönelik iyileşme desteği, sağlık durumunun kesintisiz izlenmesi, reçete edilen bakımın uygulanması ve acil hekim bildirimi.",
        ar: "مواكبة دقيقة لمرحلة النقاهة بعد العمليات، ومراقبة المؤشرات الحيوية بانتظام، وتطبيق خطط التمريض المعتمدة والتواصل الفوري مع الأطباء.",
        uz: "Jarrohlik amaliyotlaridan so'ng tiklanishni maqsadli kuzatish, salomatlik holatini uzluksiz nazorat qilish, belgilangan parvarish rejalarini bajarish va shifokorga tezkor xabar berish.",
      } as T,
    },
    {
      icon: Users as Icon,
      num: "05",
      title: {
        de: "Betreuung & Entlastung im Alltag (§ 45b)",
        en: "Companionship & Respite Care (§ 45b)",
        ru: "Патронаж и помощь в быту (§ 45b)",
        tr: "Günlük Destek & Refakat (§ 45b)",
        ar: "المساندة والرعاية اليومية وتخفيف العبء (§ 45b)",
        uz: "Kundalik hayotda hamrohlik va yengillik yaratish (§ 45b)",
      } as T,
      desc: {
        de: "Unterstützung bei der Tagesstrukturierung, sozialen Teilhabe und Haushaltsführung sowie einfühlsame Begleitung von Menschen mit kognitiven Einschränkungen und Demenz.",
        en: "Daily routine structuring, domestic chores, social companionship, and empathetic specialized care for individuals with cognitive impairments or dementia.",
        ru: "Организация распорядка дня, ведение домашнего хозяйства, социальная активность и бережная поддержка пациентов с когнитивными расстройствами и деменцией.",
        tr: "Günlük rutinlerin planlanması, sosyal katılım ve ev işlerinde destek; bilişsel kısıtlılıkları olan ve demanslı bireylere şefkatli rehberlik.",
        ar: "المساعدة في تنظيم اليوم وإدارة شؤون المنزل والمشاركة الاجتماعية، ومرافقة إنسانية عطوفة للمرضى الذين يعانون من تراجع الإدراك والزهايمر.",
        uz: "Kun tartibini tashkil etish, ijtimoiy hayotda ishtirok etish va uy xo'jaligini yuritishda yordam hamda kognitiv buzilishlari va demensiyasi bo'lgan insonlarga g'amxo'r hamrohlik.",
      } as T,
    },
    {
      icon: HeartHandshake as Icon,
      num: "06",
      title: {
        de: "Anleitung & Entlastung für Angehörige",
        en: "Caregiver Training & Family Relief",
        ru: "Обучение и поддержка родственников",
        tr: "Hasta Yakınlarına Eğitim & Destek",
        ar: "تدريب أسر المرضى وتخفيف الأعباء",
        uz: "Oila a'zolarini o'rgatish va ularga yordam",
      } as T,
      desc: {
        de: "Vermittlung praktischer Pflegekenntnisse im häuslichen Umfeld, gesetzliche Beratungsbesuche (§ 37.3 SGB XI) und Organisation wirksamer Entlastungsangebote.",
        en: "Hands-on caregiver training at the bedside, statutory consulting sessions (§ 37.3 SGB XI), and arranging community respite services to relieve family fatigue.",
        ru: "Обучение родственников практическим приёмам ухода на дому, обязательные консультации по § 37.3 SGB XI и организация мер психологической разгрузки.",
        tr: "Ev ortamında pratik bakım becerilerinin aktarılması, yasal danışmanlık ziyaretleri (§ 37.3 SGB XI) ve etkili destek imkanlarının organizasyonu.",
        ar: "تعليم أفراد الأسرة مهارات التمريض العملية في المنزل، والزيارات الاستشارية الإلزامية (§ 37.3 SGB XI)، وتوفير خدمات الرعاية البديلة المؤقتة.",
        uz: "Uy sharoitida amaliy parvarishlash ko'nikmalarini o'rgatish, qonuniy maslahat tashriflari (§ 37.3 SGB XI) va qarindoshlar uchun samarali dam olish imkoniyatlarini tashkil etish.",
      } as T,
    },
    {
      icon: ShieldCheck as Icon,
      num: "07",
      title: {
        de: "Prävention pflegebedingter Risiken",
        en: "Risk Prevention & Fall Prophylaxis",
        ru: "Профилактика рисков и падений",
        tr: "Bakıma Bağlı Risklerin Önlenmesi",
        ar: "الوقاية من مضاعفات الرعاية ومخاطر السقوط",
        uz: "Parvarish bilan bog'liq xavflar va yiqilishlarning oldini olish",
      } as T,
      desc: {
        de: "Individuelle pflegefachliche Maßnahmen zur wirksamen Vermeidung von Stürzen, Dekubitus (Druckgeschwüren), Kontrakturen und weiteren Komplikationen.",
        en: "Tailored prophylactic nursing measures mitigating fall incidents, decubitus pressure ulcers, joint contractures, and other secondary immobility complications.",
        ru: "Индивидуальные сестринские протоколы профилактики падений, пролежней (декубитуса), контрактур суставов и застойных явлений.",
        tr: "Düşmelerin, bası yaralarının (dekübitus), eklem kontraktürlerinin ve diğer komplikasyonların etkili şekilde önlenmesi için bireysel hemşirelik protokolleri.",
        ar: "بروتوكولات تمريضية فردية للوقاية الفعالة من السقوط وقرح الفراش وتيبس المفاصل ومضاعفات قلة الحركة.",
        uz: "Yiqilishlar, yotoq yaralari (dekubitus), bo'g'imlar kontrakturalari va harakatsizlikning boshqa asoratlarini samarali oldini olish uchun individual hamshiralik choralari.",
      } as T,
    },
    {
      icon: Clock as Icon,
      num: "08",
      title: {
        de: "Versorgungskoordination & Schnittstellen",
        en: "Inter-Provider Care Coordination",
        ru: "Координация помощи и смежные службы",
        tr: "Bakım Koordinasyonu & Sağlık Ağı",
        ar: "تنسيق الرعاية والربط بين الجهات الطبية",
        uz: "Yordamni muvofiqlashtirish va sohalararo hamkorlik",
      } as T,
      desc: {
        de: "Engmaschige Abstimmung mit Haus- und Fachärzten, Kliniken, MVZ, Reha-Zentren, Apotheken und Sanitätshäusern für eine lückenlose Versorgungskette.",
        en: "Seamless inter-professional coordination with physicians, clinics, outpatient centers, rehabilitation therapists, pharmacies, and medical supply stores.",
        ru: "Тесное взаимодействие с лечащими врачами, стационарами, MVZ, центрами реабилитации, аптеками и поставщиками медицинских средств.",
        tr: "Kesintisiz bir bakım zinciri için aile hekimleri, uzmanlar, klinikler, MVZ'ler, reha merkezleri, eczaneler ve medikal malzeme firmalarıyla sıkı koordinasyon.",
        ar: "تنسيق متكامل مع أطباء الأسرة والاستشاريين والمشافي ومراكز MVZ والتأهيل والصيدليات وموردي المستلزمات لضمان رعاية مستمرة دون انقطاع.",
        uz: "Uzluksiz parvarish zanjirini ta'minlash uchun oilaviy va tor soha shifokorlari, klinikalar, MVZ markazlari, reabilitatsiya markazlari, dorixonalar va tibbiy buyumlar do'konlari bilan yaqin hamkorlik.",
      } as T,
    },
  ],

  orgTitle: {
    de: "Einsatzplanung, Qualitätsmanagement & Verbundkooperation",
    en: "Tour Planning, Quality Governance & Group Integration",
    ru: "Маршрутизация визитов, контроль качества и координация в сети",
    tr: "Tur Planlaması, Kalite Yönetimi ve Grup İçi İş Birliği",
    ar: "تنظيم الجولات، حوكمة الجودة والتكامل ضمن المجموعة",
    uz: "Marshrutlarni rejalashtirish, sifat nazorati va tarmoq ichidagi hamkorlik",
  } as T,
  orgCards: [
    {
      icon: CalendarCheck2 as Icon,
      title: {
        de: "Tourenplanung & Fachliche Leitung",
        en: "Tour Planning & Nursing Directorship",
        ru: "Планирование маршрутов и сестринское руководство",
        tr: "Tur Planlaması & Uzman Hemşirelik Yönetimi",
        ar: "تخطيط الجولات والإدارة التمريضية المتخصصة",
        uz: "Marshrutlarni rejalashtirish va mutaxassis hamshiralik rahbarligi",
      } as T,
      text: {
        de: "Die Gesellschaft organisiert individuelle Bedarfserhebungen, Pflegeplanungen, Tourenplanungen und lückenlose Leistungsdokumentationen. Sie stellt die verantwortliche Pflegedienstleitung (PDL), kontinuierliche Fortbildungen, ein verbindliches Notfallkonzept und 24/7-Erreichbarkeit sicher.",
        en: "The company structures personalized needs assessments, care schedules, optimized tour plans, and verifiable documentation. It guarantees licensed nursing directorship (PDL), regular staff training, and defined 24/7 emergency escalation pathways.",
        ru: "Компания организует оценку потребностей, составление планов ухода, оптимизированные маршруты визитов и ведение документации. Обеспечивается руководство квалифицированной PDL, регулярное обучение персонала и круглосуточная готовность к экстренным вызовам.",
        tr: "Şirket bireysel ihtiyaç tespitleri, bakım planlamaları, optimize edilmiş tur planları ve eksiksiz hizmet belgeleri düzenler. Sorumlu hemşirelik yönetimini (PDL), sürekli personel eğitimini, bağlayıcı bir acil durum konseptini ve 7/24 ulaşılabilirliği garanti eder.",
        ar: "تنظم الشركة تقييم الاحتياجات الفردية، وخطط الرعاية، والجولات الميدانية، والتوثيق المعتمد، وتضمن إدارة تمريضية مؤهلة (PDL)، وتدريباً مستمراً، وبروتوكول طوارئ ملزماً وتواصلاً على مدار الساعة 24/7.",
        uz: "Kompaniya individual ehtiyojlarni baholash, parvarish rejalarini tuzish, marshrutlarni optimallashtirish va to'liq hujjatlashtirishni amalga oshiradi. Mas'ul bosh hamshira (PDL) rahbarligi, xodimlarning muntazam malaka oshirishi, favqulodda vaziyatlar protokoli va 24/7 aloqa ta'minlanadi.",
      } as T,
    },
    {
      icon: HeartHandshake as Icon,
      title: {
        de: "Freie Wahl des Pflegedienstes & Nahtlose Überleitung",
        en: "Free Choice of Provider & Seamless Transition",
        ru: "Свободный выбор службы и бесшовный перевод из клиники",
        tr: "Bakım Servisini Serbest Seçme Hakkı & Kesintisiz Geçiş",
        ar: "حرية اختيار خدمة التمريض والانتقال السلس من المستشفى",
        uz: "Parvarish xizmatini erkin tanlash huquqi va uzluksiz o'tish",
      } as T,
      text: {
        de: "Die Zusammenarbeit mit NabiOta-MVZ, NabiOta Clinics und NabiOta Rehabilitation erfolgt über verbindliche Schnittstellenvereinbarungen zur Schließung von Versorgungslücken. Die gesetzlich garantierte freie Wahl des Pflegedienstes durch die Patienten bleibt dabei stets uneingeschränkt gewahrt.",
        en: "Cooperation with NabiOta MVZs, clinics, and rehabilitation hubs is governed by transition agreements that eliminate post-discharge care voids. Patients' statutory freedom of provider choice and European privacy (GDPR) remain strictly respected at all times.",
        ru: "Взаимодействие с центрами MVZ, стационарами Clinics и отделениями реабилитации устраняет пробелы при выписке. Законное право пациента на свободный выбор службы ухода и врача соблюдается неукоснительно.",
        tr: "NabiOta-MVZ, NabiOta Clinics ve NabiOta Rehabilitation ile iş birliği, taburculuk sonrası bakım boşluklarını kapatan bağlayıcı geçiş protokolleri ile yürütülür. Hastaların yasal olarak güvence altına alınmış serbest bakım servisi seçme hakkı ve veri gizliliği (GDPR) her zaman tam olarak korunur.",
        ar: "يتم التعاون مع مراكز MVZ ومشافي ومراكز تأهيل نابي أوتا عبر اتفاقيات انتقال منظمة تمنع حدوث أي فجوات بعد الخروج من المستشفى، مع الاحترام التام لحق المريض القانوني في الاختيار الحر لخدمة التمريض والالتزام الصارم بالسرية.",
        uz: "NabiOta-MVZ, NabiOta Clinics va NabiOta Rehabilitation bilan hamkorlik shifoxonadan chiqqandan so'ng parvarishdagi uzilishlarning oldini oluvchi shartnomalar asosida olib boriladi. Bemorlarning xizmat ko'rsatuvchini erkin tanlash huquqi va ma'lumotlar maxfiyligi (GDPR) to'liq kafolatlanadi.",
      } as T,
    },
  ],

  governanceEyebrow: {
    de: "Gesetzlicher Rahmen & Kostenträger",
    en: "Statutory & Payer Framework",
    ru: "Законодательная база и плательщики",
    tr: "Yasal Çerçeve & Finansör Kurumlar",
    ar: "الإطار التنظيمي وجهات التأمين",
    uz: "Qonuniy asoslar va sug'urta jamg'armalari",
  } as T,
  governanceTitle: {
    de: "Rechtliche Rahmenbedingungen, Kostenträger & Spezialisierungen",
    en: "Statutory Framework, Payers & Specialized Services",
    ru: "Правовые основы, страховые кассы и специализированные услуги",
    tr: "Yasal Çerçeve Koşulları, Finansörler ve Uzmanlaşmış Bakım",
    ar: "الشروط القانونية، جهات الدفع وخدمات الرعاية التخصصية",
    uz: "Huquqiy shartlar, sug'urta to'lovchilari va ixtisoslashtirilgan parvarish",
  } as T,
  governanceItems: [
    {
      icon: FileCheck2 as Icon,
      title: {
        de: "Abrechnung nach SGB V & SGB XI",
        en: "Billing under SGB V & SGB XI",
        ru: "Расчёты по нормам SGB V и SGB XI",
        tr: "SGB V & SGB XI Uyarınca Faturalandırma",
        ar: "الفوترة وفق SGB V و SGB XI",
        uz: "SGB V va SGB XI bo'yicha hisob-kitob",
      } as T,
      desc: {
        de: "Die Abrechnung gegenüber gesetzlichen und privaten Kranken- und Pflegekassen sowie Beihilfestellen erfolgt ausschließlich auf Grundlage der jeweils erforderlichen behördlichen Zulassungen, Versorgungs- und Vergütungsverträge sowie ärztlicher Verordnungen. Privatleistungen werden transparent vereinbart.",
        en: "Reimbursement with statutory and private health and long-term care insurance carriers is conducted exclusively under valid institutional accreditations, regional care supply and remuneration contracts, and official medical prescriptions.",
        ru: "Расчёты с государственными и частными больничными кассами и кассами ухода ведутся строго на основе действующих договоров об оказании услуг и тарифах, а также официальных врачебных назначений. Частные услуги согласуются прозрачно.",
        tr: "Yasal ve özel sağlık ve bakım sigortaları ile Beihilfe kurumlarına yönelik faturalandırma; yalnızca geçerli resmi ruhsatlar, bölgesel bakım tedarik ve ücret sözleşmeleri ile hekim reçeteleri temelinde yapılır. Özel hizmetler şeffaf olarak kararlaştırılır.",
        ar: "تتم الفوترة مع صناديق التأمين الصحي والتأمين التمريضي الحكومية والخاصة وهيئات الدعم حصرياً بناءً على التراخيص الرسمية السارية، وعقود تقديم الرعاية والتعريفات المعتمدة والوصفات الطبية.",
        uz: "Davlat va xususiy tibbiy hamda parvarish sug'urtasi jamg'armalari va Beihilfe idoralari bilan hisob-kitoblar faqat rasmiy ruxsatnomalar, xizmat ko'rsatish va tarif shartnomalari hamda shifokor retseptlari asosida amalga oshiriladi. Xususiy xizmatlar shaffof kelishiladi.",
      } as T,
    },
    {
      icon: BadgeAlert as Icon,
      title: {
        de: "Vorbehalt für Spezialisierte Pflege (SAPV / AKI)",
        en: "Reservation for Specialized Care (SAPV / AKI)",
        ru: "Условие для паллиативного (SAPV) и интенсивного ухода (AKI)",
        tr: "Uzmanlaşmış Bakım Şartı (SAPV / AKI)",
        ar: "اشتراطات الرعاية المركزة والتلطيفية (SAPV / AKI)",
        uz: "Ixtisoslashtirilgan parvarish sharti (SAPV / AKI)",
      } as T,
      desc: {
        de: "Spezialisierte Leistungen, insbesondere die außerklinische Intensivpflege (AKI) oder die spezialisierte ambulante Palliativversorgung (SAPV), können erst nach gesonderter Prüfung und vollständiger Erfüllung aller personellen, fachlichen, räumlichen und vertraglichen Voraussetzungen aufgenommen werden.",
        en: "Highly specialized modalities, particularly out-of-hospital intensive critical care (AKI) or specialized outpatient palliative care (SAPV), are integrated only following dedicated reviews and full satisfaction of statutory staffing, clinical, and contract mandates.",
        ru: "Высокоспециализированные услуги, в частности внеклинический реанимационный уход (AKI) или специализированная амбулаторная паллиативная помощь (SAPV), вводятся только после отдельной проверки и выполнения всех нормативных, кадровых и контрактных условий.",
        tr: "Uzmanlaşmış hizmetler, özellikle hastane dışı yoğun bakım (AKI) veya uzmanlaşmış ayakta palyatif bakım (SAPV), ancak tüm personel, mesleki, mekânsal ve sözleşmesel gerekliliklerin ayrıntılı incelemesi ve tam olarak yerine getirilmesinden sonra başlatılabilir.",
        ar: "لا يتم تقديم الخدمات عالية التخصص، ولا سيما الرعاية المركزة خارج المستشفى (AKI) أو الرعاية التلطيفية المتخصصة (SAPV)، إلا بعد استيفاء وفحص كافة الشروط المهنية والكوادر والاشتراطات التعاقدية بدقة.",
        uz: "Yuqori ixtisoslashtirilgan xizmatlar, xususan, statsionardan tashqari intensiv reanimatsion parvarish (AKI) yoki ixtisoslashgan ambulator palliativ yordam (SAPV) faqat alohida tekshiruv va barcha kadrlar, mutaxassislik, xonalar va shartnoma talablari to'liq bajarilgandan so'ng joriy etilishi mumkin.",
      } as T,
    },
    {
      icon: Scale as Icon,
      title: {
        de: "Zulassungen & Datenschutz (DSGVO)",
        en: "Accreditations & Privacy Governance",
        ru: "Лицензирование и защита данных (DSGVO)",
        tr: "Ruhsatlar & Veri Koruma (GDPR)",
        ar: "التراخيص وحماية البيانات وسرية المرضى",
        uz: "Litsenziyalar va ma'lumotlar xavfsizligi (DSGVO)",
      } as T,
      desc: {
        de: "Die Gesellschaft erbringt Pflegeleistungen ausschließlich im Rahmen der jeweils bestehenden behördlichen Berechtigungen und Versorgungsverträge. Sämtliche Patientendaten und Überleitungsberichte unterliegen den strengen Vorgaben der DSGVO und der Schweigepflicht.",
        en: "Services are rendered strictly within the parameters of active governmental licenses and approved care quotas. Patient data and inter-facility clinical discharge records comply with European GDPR privacy and clinical confidentiality (§ 203 StGB).",
        ru: "Услуги ухода оказываются строго в пределах действующих государственных разрешений и договоров. Все персональные данные и выписные эпикризы защищены строгими нормами закона о защите данных (DSGVO) и врачебной тайны.",
        tr: "Şirket, bakım hizmetlerini yalnızca mevcut resmi yetkiler ve bakım sözleşmeleri çerçevesinde sunar. Tüm hasta verileri ve geçiş raporları, Avrupa Genel Veri Koruma Tüzüğü'nün (GDPR) ve mesleki sır saklama yükümlülüğünün katı kurallarına tabidir.",
        ar: "تقدم الشركة خدماتها حصرياً ضمن نطاق التراخيص الحكومية وعقود الرعاية المعتمدة. وتخضع جميع بيانات المرضى والتقارير الطبية للوائح حماية البيانات العامة الأوروبية (GDPR) والسرية الطبية الصارمة.",
        uz: "Kompaniya parvarishlash xizmatlarini faqat amaldagi rasmiy vakolatlar va ta'minot shartnomalari doirasida taqdim etadi. Bemorlarning barcha ma'lumotlari va epikrizlari Yevropa ma'lumotlar himoyasi (GDPR) va shifokorlik sirining qat'iy talablariga bo'ysunadi.",
      } as T,
    },
  ],
};

export function HomeCareCompanySection({ locale = "de" }: { locale?: string }) {
  const l: Lang = locale === "uz" ? "uz" : locale === "tr" ? "tr" : locale === "ar" ? "ar" : locale === "ru" ? "ru" : locale === "en" ? "en" : "de";

  return (
    <section
      id="nabiota-homecare-gmbh-structure"
      className="relative pt-0 pb-0 bg-[#FAF7F2] border-t border-[#EDE8DE] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-10 w-[500px] h-[500px] rounded-full bg-[#1E3B29]/[0.05] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] rounded-full bg-[#D5B878]/[0.08] blur-3xl pointer-events-none" />

      {/* ── Hero Banner: Full-width banner with soft right-photo fade (Matching MVZ style) ── */}
      <div className="relative z-10 w-full overflow-hidden pb-4 sm:pb-6">
        {/* Soft Background Photo with smooth horizontal fade / blur effect */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[64%] xl:w-[60%] pointer-events-none overflow-hidden select-none">
          <Image
            src="/images/areas/pflege.webp"
            alt="NabiOta HomeCare GmbH"
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
            <div className="max-w-xl lg:max-w-2xl mb-6 sm:mb-8 lg:mb-9">


              {/* Title with highlighted phrase & distinct GmbH */}
              <h2 className="font-serif text-[24px] sm:text-[28px] lg:text-[34px] xl:text-[38px] text-[#142318] font-normal leading-[1.18] mb-3">
                NabiOta{" "}
                <span className="font-serif text-[#C5A56A]">HomeCare</span>{" "}
                <span className="text-[#C5A56A] font-sans font-semibold text-[0.72em] tracking-wider uppercase ml-1 align-baseline">
                  GmbH
                </span>
              </h2>

              <p className="text-[12.5px] sm:text-[13px] text-[#556057] leading-relaxed max-w-xl font-sans">
                {c.lead[l]}
              </p>
              <Link href={`/${l}/nabiota-homecare`} className="mt-4 inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-gradient-to-r from-[#EED4A2] via-[#E4C58B] to-[#D5B878] text-[#142318] hover:brightness-105 font-semibold text-[12px] sm:text-[12.5px] shadow-sm transition-all">
                {l === "ru" ? "Перейти на сайт HomeCare" : l === "en" ? "Visit HomeCare website" : l === "tr" ? "HomeCare sitesine git" : l === "ar" ? "زيارة موقع HomeCare" : l === "uz" ? "HomeCare saytiga o‘tish" : "Zur HomeCare-Website"}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <Container size="wide" className="relative z-10 mt-6 sm:mt-8">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">
          {/* 8 Core Services Grid (Preparation of future departments style) */}
          <div>
            <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
              <span className="w-6 h-[1.5px] bg-[#C5A56A]" />
              <h3 className="font-serif text-[20px] sm:text-[23px] text-[#142318] font-normal">
                {c.servicesTitle[l]}
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
                {c.services.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.num}
                      className="group relative rounded-[18px] bg-white border border-[#EAE4D7] p-3.5 sm:p-4 flex items-center justify-between gap-3 sm:gap-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-[#D5B878]/60 transition-all duration-300"
                    >
                      {/* Left: Icon circle */}
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FAF5EB] border border-[#EFE5D5] flex items-center justify-center shrink-0 group-hover:bg-[#F3EAD9] transition-colors">
                        <Icon className="w-5 h-5 text-[#9E7D3B]" />
                      </div>

                      {/* Center: Title + Description */}
                      <div className="flex-1 min-w-0 pr-1">
                        <h4 className="font-serif text-[15px] sm:text-[16px] text-[#142318] font-medium leading-snug mb-0.5">
                          {item.title[l]}
                        </h4>
                        <p className="text-[11.5px] sm:text-[12px] text-[#556057] leading-relaxed font-sans">
                          {item.desc[l]}
                        </p>
                      </div>

                      {/* Right: Round button with arrow */}
                      <Link href={`/${l}/nabiota-homecare`} aria-label={item.title[l]} className="w-8.5 h-8.5 rounded-full border border-[#D5B878]/50 flex items-center justify-center text-[#9E7D3B] shrink-0 group-hover:bg-[#9E7D3B] group-hover:text-white group-hover:border-[#9E7D3B] transition-all duration-300">
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 2 Organization & Network Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {c.orgCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl sm:rounded-3xl p-6 sm:p-7 bg-[#FAF5EB] border border-[#E7DDC9] flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-[#C5A56A]/20 border border-[#C5A56A] flex items-center justify-center text-[#8C6D2B] shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <h4 className="font-serif text-[16.5px] sm:text-[17.5px] text-[#142318] font-semibold">
                      {card.title[l]}
                    </h4>
                    <p className="text-[12px] sm:text-[12.5px] text-[#556358] leading-relaxed font-sans">
                      {card.text[l]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      {/* FULL-WIDTH Statutory Framework Section (Values Page Design Style) */}
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
              <h3 className="font-serif text-[26px] sm:text-[30px] lg:text-[36px] font-normal leading-[1.2] text-white mb-2 sm:mb-2.5">
                {c.governanceTitle[l]}
              </h3>
            </div>

            {/* 3 Governance Cards in row matching Our Values cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              {c.governanceItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#0A1F13]/85 hover:bg-[#0D2618]/95 border border-[#D5B878]/30 hover:border-[#D5B878]/70 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 shadow-[0_6px_20px_rgba(0,0,0,0.3)] group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#D5B878] bg-[#122B1B]/80 flex items-center justify-center text-[#ECCF96] mb-2.5 shadow-[0_0_8px_rgba(213,184,120,0.2)] group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.6]" />
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
