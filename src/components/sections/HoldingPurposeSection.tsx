import React from "react";
import Image from "next/image";
import {
  Users,
  Building2,
  Award,
  ShieldPlus,
  Stethoscope,
  Network,
  Scale,
} from "lucide-react";
import { Container } from "@/components/layout/Container";

/**
 * PDF Section II – "Aufgaben und Unternehmensgegenstand der Holding"
 * (NabiOta Health Group Germany GmbH). Wording follows the PDF.
 */

type Lang = "de" | "en" | "ru" | "tr" | "ar" | "uz";

interface Block {
  icon: React.ComponentType<{ className?: string }>;
  title: Record<Lang, string>;
  text: Record<Lang, string>;
  chips?: Record<Lang, string[]>;
}

const content = {
  eyebrow: {
    de: "UNTERNEHMENSGEGENSTAND",
    en: "CORPORATE PURPOSE",
    ru: "ПРЕДМЕТ ДЕЯТЕЛЬНОСТИ",
    tr: "FAALİYET KONUSU",
    ar: "موضوع نشاط الشركة",
    uz: "FAOLIYAT MAQSADI",
  },
  title: {
    de: "Aufgaben und Unternehmensgegenstand der Holding",
    en: "Tasks and Corporate Purpose of the Holding",
    ru: "Задачи и предмет деятельности холдинга",
    tr: "Holdingin Görevleri ve Şirket Faaliyet Konusu",
    ar: "مهام وأهداف نشاط الشركة القابضة",
    uz: "Xoldingning vazifalari va faoliyat maqsadi",
  },
  lead: {
    de: "Gegenstand des Unternehmens ist der Erwerb, das Halten und die Verwaltung eigener Beteiligungen sowie die wirtschaftliche, organisatorische und strategische Führung von Unternehmen im Gesundheitswesen.",
    en: "The purpose of the company is the acquisition, holding and management of its own shareholdings as well as the economic, organizational and strategic management of companies in the healthcare sector.",
    ru: "Предметом деятельности общества является приобретение, владение и управление собственными долями участия, а также экономическое, организационное и стратегическое руководство предприятиями в сфере здравоохранения.",
    tr: "Şirketin faaliyet konusu, kendi iştiraklerini edinmek, elde tutmak ve yönetmek ile sağlık sektöründeki şirketlerin ekonomik, organizasyonel ve stratejik yönetimini üstlenmektir.",
    ar: "يتمثل غرض الشركة في حيازة وإدارة حصصها ومساهماتها الخاصة، بالإضافة إلى الإدارة الاقتصادية والتنظيمية والاستراتيجية للشركات العاملة في قطاع الرعاية الصحية.",
    uz: "Jamiyat faoliyatining predmeti o'z ulushlarini sotib olish, saqlash va boshqarish hamda sog'liqni saqlash sohasidagi korxonalarni iqtisodiy, tashkiliy va strategik boshqarish hisoblanadi.",
  },
  blocks: [
    {
      icon: Users,
      title: {
        de: "Beteiligungen",
        en: "Shareholdings",
        ru: "Участия",
        tr: "İştirakler",
        ar: "المساهمات والشركات التابعة",
        uz: "Ishtirok va ulushlar",
      },
      text: {
        de: "Hierzu gehören insbesondere Beteiligungen an Kliniken, medizinischen Versorgungszentren (MVZ), Diagnostikzentren, Therapie- und Rehabilitationseinrichtungen, Pflegeunternehmen sowie weiteren Gesundheitsdienstleistern. Beteiligungen werden ausschließlich unter Beachtung der jeweils geltenden gesetzlichen Anforderungen an Träger, Gesellschafter und Zulassungen eingegangen und gehalten.",
        en: "This includes in particular shareholdings in clinics, medical care centres (MVZ), diagnostic centres, therapy and rehabilitation facilities, nursing companies and other healthcare providers. Shareholdings are acquired and held exclusively in compliance with the applicable legal requirements for sponsors, shareholders and approvals.",
        ru: "Сюда относятся, в частности, участия в клиниках, медицинских центрах (MVZ), диагностических центрах, терапевтических и реабилитационных учреждениях, предприятиях по уходу и других поставщиках медицинских услуг. Участия приобретаются и удерживаются исключительно с соблюдением действующих законодательных требований к учредителям, участникам и допускам.",
        tr: "Buna özellikle klinikler, tıbbi bakım merkezleri (MVZ), tanı merkezleri, terapi ve rehabilitasyon tesisleri, bakım şirketleri ve diğer sağlık hizmeti sağlayıcılarındaki iştirakler dahildir. İştirakler, yalnızca kurucular, ortaklar ve ruhsatlar için geçerli yasal gerekliliklere titizlikle uyularak kurulur ve sürdürülür.",
        ar: "يشمل ذلك تحديداً المساهمات في المستشفيات ومراكز الرعاية الطبية (MVZ) ومراكز التشخيص ومرافق التأهيل والعلاج وشركات التمريض ومقدمي الرعاية الصحية الآخرين. يتم الدخول في المساهمات وإدارتها حصرياً وفقاً للمتطلبات القانونية المعمول بها.",
        uz: "Bunga xususan klinikalar, tibbiy xizmat ko'rsatish markazlari (MVZ), diagnostika markazlari, terapiya va reabilitatsiya muassasalari, parvarishlash korxonalari hamda boshqa tibbiy xizmat ko'rsatuvchilardagi ulushlar kiradi. Ulushlar faqat ta'sischilar, hamkorlar va ruxsatnomalar bo'yicha amaldagi barcha qonuniy talablarga qat'iy rioya qilgan holda olinadi va boshqariladi.",
      },
    },
    {
      icon: Building2,
      title: {
        de: "Zentrale Management- und Verwaltungsleistungen",
        en: "Central Management and Administrative Services",
        ru: "Централизованные управленческие и административные услуги",
        tr: "Merkezi Yönetim ve İdari Hizmetler",
        ar: "خدمات الإدارة والمساندة المركزية",
        uz: "Markazlashtirilgan boshqaruv va ma'muriy xizmatlar",
      },
      text: {
        de: "Die Gesellschaft übernimmt auf vertraglicher Grundlage zentrale Management- und Verwaltungsleistungen für Beteiligungsunternehmen und kooperierende Einrichtungen. Die steuerliche Gestaltung der Unternehmensgruppe erfolgt in Zusammenarbeit mit entsprechend befugten Beratern.",
        en: "On a contractual basis, the company provides central management and administrative services for affiliated companies and cooperating facilities. The tax structuring of the group is carried out in cooperation with duly authorized advisors.",
        ru: "На договорной основе общество оказывает централизованные управленческие и административные услуги для дочерних компаний и сотрудничающих учреждений. Налоговое структурирование группы осуществляется совместно с уполномоченными консультантами.",
        tr: "Şirket, sözleşmeye dayalı olarak bağlı şirketler ve iş birliği yapan tesisler için merkezi yönetim ve idari hizmetler sunar. Şirketler grubunun vergi yapılandırması yetkili danışmanlarla iş birliği içinde gerçekleştirilir.",
        ar: "تتولى الشركة، بناءً على أسس تعاقدية، تقديم خدمات الإدارة المركزية والمساندة الإدارية للشركات التابعة والمرافق الشريكة. ويتم الهيكلة الضريبية للمجموعة بالتعاون مع مستشارين معتمدين قانونياً.",
        uz: "Jamiyat shartnoma asosida sho'ba korxonalar va hamkorlikdagi muassasalar uchun markazlashtirilgan boshqaruv va ma'muriy xizmatlarni o'z zimmasiga oladi. Guruhning soliq tuzilishi vakolatli maslahatchilar bilan hamkorlikda amalga oshiriladi.",
      },
    },
    {
      icon: Award,
      title: {
        de: "Marken, Lizenzen & Beratung",
        en: "Brands, Licences & Advisory",
        ru: "Бренды, лицензии и консалтинг",
        tr: "Markalar, Lisanslar & Danışmanlık",
        ar: "العلامات التجارية والتراخيص والاستشارات",
        uz: "Brendlar, litsenziyalar va konsalting",
      },
      text: {
        de: "Zum Unternehmensgegenstand gehören ferner die Entwicklung, der Erwerb, die Verwaltung und der Schutz von Marken, Lizenzen und gewerblichen Schutzrechten sowie deren Überlassung zur Nutzung. Die Gesellschaft kann Unternehmen und Projekte im Gesundheitswesen wirtschaftlich und organisatorisch beraten und begleiten.",
        en: "The corporate purpose further includes the development, acquisition, management and protection of trademarks, licences and industrial property rights as well as granting their use. The company may advise and support healthcare companies and projects economically and organizationally.",
        ru: "К предмету деятельности также относятся разработка, приобретение, управление и защита товарных знаков, лицензий и прав промышленной собственности, а также предоставление их в пользование. Общество может консультировать и сопровождать предприятия и проекты в здравоохранении в экономических и организационных вопросах.",
        tr: "Faaliyet konusu ayrıca ticari markaların, lisansların ve sınai mülkiyet haklarının geliştirilmesini, edinilmesini, yönetilmesini ve korunmasını ile bunların kullanıma sunulmasını kapsar. Şirket, sağlık sektöründeki işletmelere ve projelere ekonomik ve organizasyonel danışmanlık sağlayabilir.",
        ar: "يشمل نشاط الشركة أيضاً تطوير واقتناء وإدارة وحماية العلامات التجارية والتراخيص وحقوق الملكية الصناعية ومنح حق استخدامها. كما يحق للشركة تقديم المشورة الاقتصادية والتنظيمية للمشاريع الصحية.",
        uz: "Faoliyat predmeti shuningdek tovar belgilari, litsenziyalar va sanoat mulki huquqlarini ishlab chiqish, sotib olish, boshqarish va himoya qilish hamda ulardan foydalanish huquqini berishni o'z ichiga oladi. Jamiyat sog'liqni saqlash sohasidagi korxonalar va loyihalarga iqtisodiy va tashkiliy maslahat berishi mumkin.",
      },
    },
    {
      icon: ShieldPlus,
      title: {
        de: "Qualität, Hygiene, Patientensicherheit & Datenschutz",
        en: "Quality, Hygiene, Patient Safety & Data Protection",
        ru: "Качество, гигиена, безопасность пациентов и защита данных",
        tr: "Kalite, Hijyen, Hasta Güvenliği & Veri Koruma",
        ar: "الجودة والنظافة وسلامة المرضى وحماية البيانات",
        uz: "Sifat, gigiyena, bemorlar xavfsizligi va ma'lumotlar himoyasi",
      },
      text: {
        de: "Die Holding unterstützt und koordiniert die organisatorischen Voraussetzungen für Qualitätsmanagement, Hygiene, Patientensicherheit und Datenschutz innerhalb des Unternehmensverbunds. Sie fördert gemeinsame Standards und unterstützt deren Umsetzung, ohne die gesetzliche und fachliche Verantwortung der jeweiligen Betreiber und zuständigen Personen zu ersetzen.",
        en: "The holding supports and coordinates the organizational prerequisites for quality management, hygiene, patient safety and data protection within the group. It promotes common standards and supports their implementation without replacing the legal and professional responsibility of the respective operators and responsible persons.",
        ru: "Холдинг поддерживает и координирует организационные условия для менеджмента качества, гигиены, безопасности пациентов и защиты данных внутри группы. Он продвигает общие стандарты и поддерживает их внедрение, не заменяя законную и профессиональную ответственность соответствующих операторов и ответственных лиц.",
        tr: "Holding, grup bünyesinde kalite yönetimi, hijyen, hasta güvenliği ve veri koruma için organizasyonel ön koşulları destekler ve koordine eder. İlgili işletmecilerin yasal ve mesleki sorumluluğunu devralmaksızın ortak standartları teşvik eder.",
        ar: "تدعم الشركة القابضة وتنسق المتطلبات التنظيمية لإدارة الجودة والنظافة وسلامة المرضى وحماية البيانات داخل المجموعة، وتعزز المعايير المشتركة دون الإخلال بالمسؤولية المهنية والقانونية لكل منشأة.",
        uz: "Xolding korxonalar guruhi doirasida sifat menejmenti, gigiyena, bemorlar xavfsizligi va ma'lumotlar himoyasi bo'yicha tashkiliy shart-sharoitlarni qo'llab-quvvatlaydi va muvofiqlashtiradi. U tegishli operatorlar va mas'ul shaxslarning qonuniy va kasbiy javobgarligini almashtirmagan holda umumiy standartlarni ilgari suradi.",
      },
    },
    {
      icon: Stethoscope,
      title: {
        de: "Verantwortung der medizinischen Einrichtungen",
        en: "Responsibility of the Medical Facilities",
        ru: "Ответственность медицинских учреждений",
        tr: "Tıbbi Kuruluşların Bağımsızlığı ve Sorumluluğu",
        ar: "استقلالية ومسؤولية المرافق الطبية",
        uz: "Tibbiyot muassasalarining mustaqilligi va mas'uliyati",
      },
      text: {
        de: "Die medizinischen Einrichtungen bleiben für Behandlungsentscheidungen, medizinische Organisation, qualifiziertes Personal, vorgeschriebene Personalverfügbarkeit, fachliche Qualität, Patientensicherheit, Hygiene sowie die ordnungsgemäße Leistungsdokumentation und Abrechnung verantwortlich. Die medizinische Weisungsfreiheit der ärztlichen Leitung eines MVZ bleibt uneingeschränkt gewahrt. Die Holding erhält durch ihre Management- und Verwaltungsaufgaben keine Befugnis zur Einflussnahme auf individuelle medizinische Entscheidungen.",
        en: "The medical facilities remain responsible for treatment decisions, medical organization, qualified staff, mandatory staff availability, professional quality, patient safety, hygiene and proper service documentation and billing. The medical independence of an MVZ's medical director remains fully preserved. Its management and administrative tasks give the holding no authority to influence individual medical decisions.",
        ru: "Медицинские учреждения остаются ответственными за решения о лечении, медицинскую организацию, квалифицированный персонал, обязательное наличие персонала, профессиональное качество, безопасность пациентов, гигиену, а также надлежащую документацию услуг и расчёты. Медицинская независимость врачебного руководства MVZ полностью сохраняется. Управленческие и административные задачи не дают холдингу полномочий влиять на индивидуальные медицинские решения.",
        tr: "Tıbbi tesisler; tedavi kararları, tıbbi organizasyon, nitelikli personel, zorunlu personel mevcudiyeti, uzmanlık kalitesi, hasta güvenliği, hijyen ve usulüne uygun hizmet belgelemesi ile faturalandırmadan sorumlu olmaya devam eder. Bir MVZ'nin tıbbi yönetiminin bağımsızlığı tam olarak korunur. Holding, yönetim görevleri vasıtasıyla bireysel tıbbi kararlara müdahale etme yetkisine sahip değildir.",
        ar: "تظل المرافق الطبية مسؤولة عن قرارات العلاج والتنظيم الطبي وتوفير الكوادر المؤهلة وجودة الخدمات وسلامة المرضى والتوثيق والفوترة السليمة. وتتمتع الإدارة الطبية لكل مركز MVZ باستقلالية سريرية كاملة دون أي تدخل إداري من القابضة في القرارات الطبية الفردية.",
        uz: "Tibbiyot muassasalari davolash qarorlari, tibbiy tashkiliy ishlar, malakali xodimlar, belgilangan kadrlar mavjudligi, kasbiy sifat, bemorlar xavfsizligi, gigiyena hamda xizmatlarni to'g'ri hujjatlashtirish va hisob-kitob qilish uchun to'liq mas'ul bo'lib qoladi. MVZ tibbiy rahbariyatining tibbiy mustaqilligi to'liq saqlanib qoladi. Xolding o'z boshqaruv vazifalari orqali individual tibbiy qarorlarga ta'sir o'tkazish vakolatiga ega emas.",
      },
    },
    {
      icon: Network,
      title: {
        de: "Verbindung der Einrichtungen",
        en: "Connecting the Facilities",
        ru: "Связующее звено учреждений",
        tr: "Kuruluşların Entegrasyonu ve Birliği",
        ar: "الربط المؤسسي وتكامل المرافق",
        uz: "Muassasalar integratsiyasi va birligi",
      },
      text: {
        de: "Die Gesellschaft bildet die wirtschaftliche und organisatorische Verbindung der rechtlich selbstständigen Einrichtungen. Ziel ist es, gemeinsame Ressourcen effizient einzusetzen, Verwaltungsabläufe zu vereinheitlichen und die Weiterentwicklung der Unternehmensgruppe zu unterstützen.",
        en: "The company forms the economic and organizational link between the legally independent facilities. The aim is to use shared resources efficiently, standardize administrative processes and support the further development of the group.",
        ru: "Общество является экономическим и организационным связующим звеном юридически самостоятельных учреждений. Цель — эффективно использовать общие ресурсы, унифицировать административные процессы и поддерживать дальнейшее развитие группы.",
        tr: "Şirket, hukuken bağımsız kuruluşlar arasındaki ekonomik ve organizasyonel bağı oluşturur. Amaç, ortak kaynakları verimli kullanmak, idari süreçleri standartlaştırmak ve şirketler grubunun gelişimini desteklemektir.",
        ar: "تشكل الشركة الرابط الاقتصادي والتنظيمي بين المرافق المستقلة قانونياً، بهدف الاستخدام الفعال للموارد المشتركة وتوحيد الإجراءات الإدارية ودعم التطور المستمر للمجموعة الصحية.",
        uz: "Jamiyat qonuniy jihatdan mustaqil muassasalar o'rtasidagi iqtisodiy va tashkiliy bog'lovchi zanjirni tashkil etadi. Maqsad — umumiy resurslardan samarali foydalanish, ma'muriy jarayonlarni standartlashtirish va kompaniyalar guruhining rivojlanishini qo'llab-quvvatlashdir.",
      },
    },
  ] as Block[],
  legalTitle: {
    de: "Rechtlicher Rahmen",
    en: "Legal Framework",
    ru: "Правовые рамки",
    tr: "Yasal Çerçeve",
    ar: "الإطار القانوني والتنظيمي",
    uz: "Huquqiy asos",
  },
  legal: {
    de: "Die Gesellschaft ist berechtigt, alle rechtlich zulässigen Geschäfte vorzunehmen, die dem Unternehmensgegenstand unmittelbar oder mittelbar dienen, Unternehmen zu gründen, zu erwerben oder sich an ihnen zu beteiligen sowie Zweigniederlassungen im In- und Ausland zu errichten. Erlaubnis- oder zulassungspflichtige Tätigkeiten werden erst nach Vorliegen der erforderlichen Voraussetzungen aufgenommen. Die Gründung oder Beteiligung an vertragsärztlichen MVZ setzt insbesondere die Erfüllung der Anforderungen des § 95 SGB V voraus.",
    en: "The company is entitled to carry out all legally permissible transactions that directly or indirectly serve the corporate purpose, to establish or acquire companies or participate in them, and to set up branches in Germany and abroad. Activities requiring a permit or approval are only commenced once the necessary prerequisites are met. Founding or participating in contract-physician MVZ requires in particular fulfilment of the requirements of § 95 SGB V.",
    ru: "Общество вправе совершать все законно допустимые сделки, прямо или косвенно служащие предмету деятельности, учреждать или приобретать предприятия либо участвовать в них, а также открывать филиалы в Германии и за рубежом. Деятельность, требующая разрешения или допуска, начинается только при наличии необходимых условий. Учреждение MVZ в системе обязательного страхования или участие в нём предполагает, в частности, выполнение требований § 95 SGB V.",
    tr: "Şirket, doğrudan veya dolaylı olarak faaliyet konusuna hizmet eden tüm yasal işlemleri yapmaya, şirketler kurmaya, satın almaya veya bunlara iştirak etmeye ve yurt içinde veya yurt dışında şubeler açmaya yetkilidir. İzne veya ruhsata tabi faaliyetler ancak gerekli şartlar sağlandıktan sonra başlatılır. Sözleşmeli hekim MVZ'lerinin kurulması veya bunlara iştirak edilmesi, özellikle Alman Sosyal Güvenlik Kanunu § 95 SGB V şartlarının yerine getirilmesini gerektirir.",
    ar: "يحق للشركة إبرام كافة المعاملات القانونية التي تخدم أغراضها مباشرة أو غير مباشرة، وتأسيس الشركات أو الاستحواذ عليها أو المساهمة فيها وإنشاء الفروع داخل ألمانيا وخارجها. وتبدأ الأنشطة الخاضعة للتراخيص بعد استيفاء الشروط القانونية، وتتطلب مراكز MVZ استيفاء متطلبات المادة 95 من القانون الاجتماعي الألماني (SGB V).",
    uz: "Jamiyat o'z faoliyat maqsadiga bevosita yoki bilvosita xizmat qiladigan barcha qonuniy bitimlarni amalga oshirishga, korxonalar tashkil etish, sotib olish yoki ularda ishtirok etishga, shuningdek Germaniyada va chet elda filiallar ochishga haqlidir. Ruxsatnoma yoki litsenziya talab qilinadigan faoliyat faqat zarur shartlar bajarilgandan so'ng boshlanadi. Sug'urta shifokorlari tizimidagi MVZ tashkil etish yoki ularda ishtirok etish xususan § 95 SGB V talablarining bajarilishini taqozo etadi.",
  },
};

export function HoldingPurposeSection({ locale = "de" }: { locale?: string }) {
  const l: Lang = locale === "tr" ? "tr" : locale === "ar" ? "ar" : locale === "ru" ? "ru" : locale === "uz" ? "uz" : locale === "en" ? "en" : "de";

  return (
    <section
      id="unternehmensgegenstand"
      className="relative pt-0 pb-16 sm:pb-20 lg:pb-24 bg-[#FAF8F5] border-t border-[#EDE8DE]/60 overflow-hidden"
    >
      {/* Subtle background glow accents */}
      <div className="absolute -top-40 -left-32 w-[500px] h-[500px] rounded-full bg-[#D5B878]/[0.06] blur-3xl pointer-events-none" />
      <div className="absolute top-[40%] -right-24 w-[400px] h-[400px] rounded-full bg-[#E8DFC8]/25 blur-3xl pointer-events-none" />

      {/* ── Hero Banner: Full-width banner with soft right-photo fade (MVZ Style) ── */}
      <div className="relative z-10 w-full overflow-hidden pb-8 sm:pb-10 lg:pb-12">
        {/* Soft Background Photo with smooth horizontal fade */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[62%] xl:w-[58%] pointer-events-none overflow-hidden select-none">
          <Image
            src="/images/areas/atrium-lounge.webp"
            alt="Tasks and Corporate Purpose of the Holding"
            fill
            className="object-cover object-center lg:object-right"
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
          {/* Horizontal gradient fade into page background #FAF8F5 */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] from-0% via-[#FAF8F5]/80 via-20% via-[#FAF8F5]/25 via-42% to-transparent to-75%" />
          {/* Vertical gradient fade for mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/50 via-15% to-transparent lg:hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] from-0% via-[#FAF8F5]/20 via-10% to-transparent hidden lg:block" />
        </div>

        {/* Botanical foliage watermark on far left (matching MVZ reference) */}
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
        <Container size="wide" className="relative z-10 pt-8 sm:pt-12 lg:pt-14">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-xl lg:max-w-2xl">
              {/* Title with highlighted word in serif */}
              <h2 className="font-serif text-[26px] sm:text-[34px] lg:text-[40px] text-[#142318] font-normal leading-[1.18] mb-3 sm:mb-3.5">
                {l === "ru" ? (
                  <>
                    Задачи и предмет деятельности{" "}
                    <span className="font-serif text-[#C5A56A]">холдинга</span>
                  </>
                ) : l === "en" ? (
                  <>
                    Tasks and Corporate Purpose of the{" "}
                    <span className="font-serif text-[#C5A56A]">Holding</span>
                  </>
                ) : (
                  <>
                    Aufgaben und Unternehmensgegenstand der{" "}
                    <span className="font-serif text-[#C5A56A]">Holding</span>
                  </>
                )}
              </h2>

              {/* Lead text */}
              <p className="text-[12.5px] sm:text-[13.5px] text-[#556057] leading-relaxed max-w-xl">
                {content.lead[l]}
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* ── Cards Container (Photo 2 design: 6 cards in 3 cols + 1 wide banner below) ── */}
      <Container size="wide" className="relative z-10 mt-6 sm:mt-8">
        <div className="max-w-6xl mx-auto space-y-5 sm:space-y-6">
          {/* 6 Cards in 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5 sm:gap-5 items-stretch">
            {content.blocks.map((b, idx) => {
              const Icon = b.icon;
              const hasLeaf = idx === 0 || idx === 2 || idx === 3 || idx === 5;

              return (
                <article
                  key={idx}
                  className="group relative rounded-[20px] sm:rounded-[22px] p-4.5 sm:p-5 bg-white border border-[#EAE4D7] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-[#C5A56A]/80 hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Subtle botanical branch in bottom-left corner */}
                  {hasLeaf && (
                    <div className="absolute -bottom-4 -left-4 w-24 h-24 pointer-events-none opacity-25 group-hover:opacity-35 transition-opacity select-none">
                      <Image
                        src="/images/areas/botanical-branch-clean.webp"
                        alt=""
                        fill
                        className="object-contain object-bottom-left"
                        unoptimized
                      />
                    </div>
                  )}

                  {/* Top Row: Icon + Number & Title */}
                  <div className="relative z-10">
                    <div className="flex items-start gap-3 mb-2.5">
                      <div className="w-10 h-10 sm:w-10.5 sm:h-10.5 rounded-full bg-[#FAF5EB] border border-[#E8DFC8] flex items-center justify-center text-[#2A4736] shrink-0 group-hover:bg-[#F0E6D5] transition-colors shadow-2xs">
                        <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[1.75]" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-serif text-[16px] sm:text-[17.5px] font-medium text-[#142318] leading-snug">
                          {b.title[l]}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[11.5px] sm:text-[12px] text-[#556057] leading-[1.65] font-sans">
                      {b.text[l]}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Card 7 – Legal Framework Wide Banner */}
          <div className="group relative rounded-[20px] sm:rounded-[22px] p-4 sm:p-5 lg:py-4.5 lg:px-6 bg-[#FAF8F4] border border-[#EAE4D7] shadow-xs flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-5 overflow-hidden">
            {/* Watercolor botanical branch on far right */}
            <div className="absolute right-0 top-0 bottom-0 w-36 sm:w-44 pointer-events-none opacity-35 select-none overflow-hidden hidden sm:block">
              <Image
                src="/images/areas/botanical-branch-clean.webp"
                alt=""
                fill
                className="object-contain object-right"
                unoptimized
              />
            </div>

            {/* Left: Icon + Title */}
            <div className="flex items-center gap-3 shrink-0 lg:w-[240px] xl:w-[260px]">
              <div className="w-10.5 h-10.5 sm:w-11 sm:h-11 rounded-full bg-[#163826] text-[#EADBBD] border border-[#D5B878]/50 flex items-center justify-center shrink-0 shadow-sm">
                <Scale className="w-5 h-5 stroke-[1.8]" />
              </div>
              <h3 className="font-serif text-[17.5px] sm:text-[19px] font-medium text-[#142318] leading-tight">
                {content.legalTitle[l]}
              </h3>
            </div>

            {/* Middle: Text */}
            <p className="text-[11.5px] sm:text-[12px] text-[#556057] leading-relaxed flex-1 relative z-10 font-sans pr-2">
              {content.legal[l]}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
