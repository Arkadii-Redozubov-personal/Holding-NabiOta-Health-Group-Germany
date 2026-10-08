import React from "react";
import Image from "next/image";
import {
  UserCheck,
  ShieldCheck,
  FileText,
  Building2,
  Tag,
  ClipboardCheck,
  Settings,
  ClipboardList,
  Monitor,
  Brain,
  Scale,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/layout/Container";

/**
 * PDF Section III – "Vertragliche Verbindung zwischen Holding und MVZ"
 * a) Aufbauphase mit ärztlicher Beteiligung
 * b) Erforderliche Vertragsbereiche
 * c) Anforderungen an die Zulassung
 */

type Lang = "de" | "en" | "ru" | "tr" | "ar";
type T = Record<Lang, string>;

const c = {
  eyebrow: {
    de: "HOLDING & MVZ",
    en: "HOLDING & MVZ",
    ru: "ХОЛДИНГ И MVZ",
    tr: "HOLDİNG & MVZ",
    ar: "القابضة والمراكز الطبية MVZ",
  } as T,
  subEyebrow: {
    de: "STRUKTUR · VERANTWORTLICHKEITEN · RECHTSRAHMEN",
    en: "STRUCTURE · RESPONSIBILITIES · REGULATORY FRAMEWORK",
    ru: "СТРУКТУРА · ОБЯЗАННОСТИ · ПРАВОВОЙ РЕГЛАМЕНТ",
    tr: "YAPI · SORUMLULUKLAR · YASAL ÇERÇEVE",
    ar: "الهيكل التنظيمي · المسؤوليات · الإطار القانوني",
  } as T,
  tag: {
    de: "MVZ & HOLDING-VERTRAGSWESEN · § 95 SGB V",
    en: "MVZ & HOLDING CONTRACTUAL FRAMEWORK · § 95 SGB V",
    ru: "MVZ И ДОГОВОРНАЯ БАЗА ХОЛДИНГА · § 95 SGB V",
    tr: "MVZ VE HOLDİNG SÖZLEŞME SİSTEMİ · § 95 SGB V",
    ar: "المنظومة التعاقدية للمراكز الطبية والقابضة · § 95 SGB V",
  } as T,
  title: {
    de: "Vertragliche Verbindung zwischen Holding und MVZ",
    en: "Contractual Link Between Holding and MVZ",
    ru: "Договорная связь между холдингом и MVZ",
    tr: "Holding ile MVZ Arasındaki Sözleşmesel Bağlantı",
    ar: "الارتباط التعاقدي بين الشركة القابضة والمراكز الطبية MVZ",
  } as T,

  aLabel: {
    de: "a) Aufbauphase mit ärztlicher Beteiligung",
    en: "a) Foundation Phase with Physician Participation",
    ru: "a) Этап становления с участием врача",
    tr: "a) Hekim Katılımı ile Yapılanma Aşaması",
    ar: "أ) مرحلة التأسيس بمشاركة الأطباء",
  } as T,
  aCards: [
    {
      icon: UserCheck,
      image: "/images/about/doctor-patient.webp",
      title: {
        de: "Ärztliche Beteiligung",
        en: "Physician Participation",
        ru: "Участие врача",
        tr: "Hekim Katılımı",
        ar: "مشاركة الأطباء",
      } as T,
      text: {
        de: "Für neue MVZ wird zunächst die unmittelbare Beteiligung von Dr. Fischer-Rahimov als zugelassenem Vertragsarzt vorgesehen. Die bestehende persönliche Zulassung soll in diesem Modell erhalten bleiben. Ein eigener Zulassungsverzicht zugunsten einer Anstellung ist nicht Bestandteil des vorgeschlagenen Weges. Eine solche Änderung müsste gesondert geprüft werden.",
        en: "For new MVZ, the direct participation of Dr. Fischer-Rahimov as an approved contract physician is initially envisaged. His existing personal approval is to be retained in this model. Waiving his own approval in favour of employment is not part of the proposed path. Such a change would have to be examined separately.",
        ru: "Для новых MVZ изначально предусмотрено прямое участие Dr. Fischer-Rahimov как допущенного врача системы обязательного страхования. Его действующий личный допуск в этой модели сохраняется. Отказ от собственного допуска в пользу работы по найму не входит в предлагаемый путь. Такое изменение потребовало бы отдельной проверки.",
        tr: "Yeni MVZ'ler için öncelikle Dr. Fischer-Rahimov'un yetkili sözleşmeli hekim olarak doğrudan katılımı öngörülmektedir. Bu modelde mevcut şahsi ruhsatın korunması hedeflenmektedir. Hizmet akdi lehine ruhsattan feragat etmek önerilen modelin bir parçası değildir. Böyle bir değişiklik ayrıca incelenmelidir.",
        ar: "بالنسبة للمراكز الطبية الجديدة (MVZ)، يُعتزم مبدئياً المشاركة المباشرة للدكتور فيشر-رحيموف كطبيب معتمد بموجب العقود التأمينية. ويتم الحفاظ على ترخيصه الشخصي الحالي ضمن هذا النموذج. التنازل عن الترخيص الشخصي لصالح العمل بالتوظيف ليس جزءاً من المسار المقترح، ويتطلب أي تعديل من هذا القبيل دراسة منفصلة.",
      } as T,
    },
    {
      icon: ShieldCheck,
      image: "/images/values/gov-room.webp",
      title: {
        de: "Gemeinsame Marke NabiOta",
        en: "Shared NabiOta Brand",
        ru: "Общий бренд NabiOta",
        tr: "Ortak NabiOta Markası",
        ar: "العلامة التجارية المشتركة NabiOta",
      } as T,
      text: {
        de: "Die MVZ können unter der Marke NabiOta auftreten. Die gemeinsame Marke stellt keine gesellschaftsrechtliche Beteiligung dar. Die behandelnden Ärzte müssen nicht allein wegen ihrer Tätigkeit Gesellschafter werden. Die ärztliche Leitung muss im MVZ tätig und in medizinischen Fragen weisungsfrei sein.",
        en: "The MVZ may operate under the NabiOta brand. The shared brand does not constitute a corporate shareholding. Treating physicians do not have to become shareholders merely because of their work. The medical director must work in the MVZ and be free from instructions in medical matters.",
        ru: "MVZ могут выступать под брендом NabiOta. Общий бренд не означает корпоративного участия. Лечащие врачи не обязаны становиться участниками общества только из-за своей работы. Врачебное руководство должно работать в MVZ и быть независимым в медицинских вопросах.",
        tr: "MVZ'ler NabiOta markası altında faaliyet gösterebilir. Ortak marka, şirketler hukuku kapsamında bir ortaklık oluşturmaz. Tedavi eden hekimlerin yalnızca mesleki faaliyetleri nedeniyle şirket ortağı olmaları gerekmez. Tıbbi yönetimin MVZ bünyesinde aktif olması ve tıbbi kararlarda talimatlardan bağımsız bulunması şarttır.",
        ar: "يمكن للمراكز الطبية العمل تحت العلامة التجارية المشتركة NabiOta. لا تشكل العلامة التجارية المشتركة مساهمة في رأس مال الشركة. لا يتعين على الأطباء المعالجين أن يصبحوا شركاء لمجرد ممارستهم الطبية. يجب أن تعمل الإدارة الطبية داخل المركز وأن تكون مستقلة تماماً ومتحررة من أي توجيهات في القرارات الطبية.",
      } as T,
    },
  ],

  bLabel: {
    de: "b) Erforderliche Vertragsbereiche",
    en: "b) Required Contract Areas",
    ru: "b) Необходимые договорные сферы",
    tr: "b) Gerekli Sözleşme Alanları",
    ar: "ب) مجالات العقود الإلزامية",
  } as T,
  thContract: {
    de: "VERTRAG",
    en: "CONTRACT",
    ru: "ДОГОВОР",
    tr: "SÖZLEŞME",
    ar: "العقد",
  } as T,
  thContent: {
    de: "ZU REGELNDE INHALTE",
    en: "CONTENTS TO BE REGULATED",
    ru: "РЕГУЛИРУЕМОЕ СОДЕРЖАНИЕ",
    tr: "DÜZENLENECEK HUSUSLAR",
    ar: "البنود الواجب تنظيمها",
  } as T,
  contracts: [
    {
      icon: Settings,
      name: {
        de: "Management und Verwaltung",
        en: "Management and administration",
        ru: "Управление и администрирование",
        tr: "Yönetim ve İdare",
        ar: "الإدارة والتشغيل الإداري",
      } as T,
      content: {
        de: "Einzelne Leistungen, Vergütung, Leistungsnachweise, Verantwortlichkeiten und Kündigung.",
        en: "Individual services, remuneration, proof of performance, responsibilities and termination.",
        ru: "Отдельные услуги, вознаграждение, подтверждение оказания услуг, ответственность и расторжение.",
        tr: "Münferit hizmetler, ücretlendirme, performans belgeleri, sorumluluklar ve fesih koşulları.",
        ar: "الخدمات الفردية، الأتعاب، إثباتات الأداء المنجز، توزيع المسؤوليات وشروط إنهاء التعاقد.",
      } as T,
    },
    {
      icon: ClipboardList,
      name: {
        de: "Räume und Geräte",
        en: "Premises and equipment",
        ru: "Помещения и оборудование",
        tr: "Mekanlar ve Cihazlar",
        ar: "المقرات والمعدات والأجهزة",
      } as T,
      content: {
        de: "Überlassungsumfang, Nutzungszeiten, Instandhaltung, Betreiberpflichten und Entgelt.",
        en: "Scope of provision, usage times, maintenance, operator obligations and fee.",
        ru: "Объём предоставления, время использования, техобслуживание, обязанности оператора и плата.",
        tr: "Tahsis kapsamı, kullanım saatleri, bakım ve onarım, işletici yükümlülükleri ve ücret tarifesi.",
        ar: "نطاق توفير المقرات، أوقات الاستخدام، الصيانة الدورية، التزامات المشغل والمقابل المالي.",
      } as T,
    },
    {
      icon: Monitor,
      name: {
        de: "IT und Datenverarbeitung",
        en: "IT and data processing",
        ru: "IT и обработка данных",
        tr: "BT ve Veri İşleme",
        ar: "تكنولوجيا المعلومات ومعالجة البيانات",
      } as T,
      content: {
        de: "Zugriffsrechte, technische Sicherheit, Vertraulichkeit und datenschutzrechtliche Rollen.",
        en: "Access rights, technical security, confidentiality and data protection roles.",
        ru: "Права доступа, техническая безопасность, конфиденциальность и роли по защите данных.",
        tr: "Erişim hakları, teknik güvenlik, gizlilik ve veri koruma mevzuatı kapsamındaki roller.",
        ar: "صلاحيات الوصول، الأمان التقني، السرية التامة والأدوار القانونية لحماية البيانات.",
      } as T,
    },
    {
      icon: Tag,
      name: {
        de: "Markennutzung",
        en: "Brand use",
        ru: "Использование бренда",
        tr: "Marka Kullanımı",
        ar: "استخدام العلامة التجارية",
      } as T,
      content: {
        de: "Nutzungsumfang, Qualitätsvorgaben ohne medizinische Weisungsrechte und gegebenenfalls Lizenzentgelt.",
        en: "Scope of use, quality requirements without medical rights of instruction and, where applicable, licence fee.",
        ru: "Объём использования, требования к качеству без права медицинских указаний и, при необходимости, лицензионная плата.",
        tr: "Kullanım kapsamı, tıbbi talimat yetkisi içermeyen kalite standartları ve gerekirse lisans bedeli.",
        ar: "نطاق الاستخدام، معايير الجودة دون صلاحيات توجيه طبي، ورسوم الترخيص عند الاقتضاء.",
      } as T,
    },
  ],
  bNote: {
    de: "Jeder Vertrag ist nach den tatsächlichen Leistungen zu gestalten. Eine pauschale Übertragung sämtlicher MVZ-Gewinne an die Holding wird nicht vorgesehen. Zahlungswege, Preise und steuerliche Behandlung sind vor Umsetzung zu prüfen. Gewinnabführungs-, Beherrschungs-, Treuhand- oder vergleichbare Kontrollvereinbarungen werden nicht als Ersatz für eine fehlende Gründungsberechtigung eingesetzt.",
    en: "Each contract is to be structured according to the services actually provided. A blanket transfer of all MVZ profits to the holding is not envisaged. Payment channels, prices and tax treatment must be reviewed before implementation. Profit transfer, domination, trust or comparable control agreements are not used as a substitute for a missing founding entitlement.",
    ru: "Каждый договор оформляется в соответствии с фактически оказываемыми услугами. Паушальная передача всей прибыли MVZ холдингу не предусмотрена. Платёжные потоки, цены и налоговый режим проверяются до внедрения. Договоры о передаче прибыли, господстве, доверительном управлении или аналогичные соглашения о контроле не используются как замена отсутствующему праву на учреждение.",
    tr: "Her sözleşme fiilen sunulan hizmetlere göre yapılandırılmalıdır. Tüm MVZ kârlarının holdinge toptan aktarılması öngörülmemektedir. Ödeme kanalları, fiyatlandırma ve vergi rejimi uygulamadan önce denetlenmelidir. Kâr aktarımı, hakimiyet, yedieminlik veya benzeri kontrol anlaşmaları, kuruluş yetkisi eksikliğinin yerine ikame olarak kullanılamaz.",
    ar: "يجب صياغة كل عقد وفقاً للخدمات المقدمة فعلياً. ولا يُعتزم تحويل إجمالي أرباح المراكز الطبية بشكل جزافي إلى الشركة القابضة. يجب مراجعة قنوات الدفع والتسعير والمعاملة الضريبية بدقة قبل التنفيذ. لا تُستخدم اتفاقيات تحويل الأرباح أو السيطرة أو الائتمان كبديل لغياب أهلية التأسيس القانونية.",
  } as T,

  cLabel: {
    de: "c) Anforderungen an die Zulassung",
    en: "c) Approval Requirements",
    ru: "c) Требования к допуску",
    tr: "c) Ruhsatlandırma ve İzin Gereksinimleri",
    ar: "ج) متطلبات الترخيص والاعتماد",
  } as T,
  cItems: [
    {
      icon: FileText,
      de: "Für jedes MVZ sind Gründerkreis, Rechtsform, ärztliche Leitung, Arztregistereinträge sowie erforderliche Zulassungen und Anstellungsgenehmigungen nachzuweisen.",
      en: "For each MVZ, the founding group, legal form, medical director, physician register entries and required approval and employment permits must be documented.",
      ru: "Для каждого MVZ подтверждаются круг учредителей, правовая форма, врачебное руководство, записи в реестре врачей, а также необходимые допуски и разрешения на наём.",
      tr: "Her MVZ için kurucu ortaklar, hukuki form, tıbbi yönetim, hekim sicil kayıtları ile gerekli ruhsatlar ve istihdam izinleri belgelenmelidir.",
      ar: "يجب إثبات دائرة المؤسسين، الشكل القانوني، الإدارة الطبية، القيود في سجل الأطباء، والتراخيص وتصاريح التوظيف المطلوبة لكل مركز طبي.",
    },
    {
      icon: ShieldCheck,
      de: "Die KV Nordrhein nennt für die Gründung mindestens zwei halbe Kassensitze.",
      en: "The KV Nordrhein requires at least two half statutory health insurance seats for founding.",
      ru: "KV Nordrhein называет для учреждения минимум два половинных места в системе обязательного страхования (Kassensitze).",
      tr: "KV Nordrhein, kuruluş için en az iki yarım yasal sigorta hekimliği kontenjanı (Kassensitz) şart koşmaktadır.",
      ar: "تشترط جمعية أطباء التأمين الصحي بنوردراين (KV Nordrhein) حصتين نصفيتين على الأقل من حصص التأمين لتأسيس المركز.",
    },
    {
      icon: Building2,
      de: "Bei einer GmbH sind die gesetzlich vorgesehenen Bürgschaften oder sonstigen Sicherheiten erforderlich.",
      en: "For a GmbH, the legally required guarantees or other securities are necessary.",
      ru: "Для GmbH необходимы предусмотренные законом поручительства или иные обеспечения.",
      tr: "Bir GmbH durumunda, kanunen öngörülen kefaletler veya diğer teminatlar zorunludur.",
      ar: "في حالة شركة ذات مسؤولية محدودة (GmbH)، يلزم تقديم الكفالات أو الضمانات الأخرى المنصوص عليها قانوناً.",
    },
    {
      icon: Brain,
      de: "Bei dem geplanten neurologisch-internistischen MVZ sind zusätzlich die konkreten Sitze und die hausärztliche oder fachärztliche Teilnahme des Internisten zu klären.",
      en: "For the planned neurological-internal medicine MVZ, the specific seats and the internist's participation in general or specialist care must also be clarified.",
      ru: "Для планируемого неврологическо-терапевтического MVZ дополнительно уточняются конкретные места и участие терапевта в семейной или специализированной помощи.",
      tr: "Planlanan nörolojik-dahiliye MVZ'sinde ayrıca somut kontenjanlar ve dahiliye uzmanının aile hekimliği mi yoksa uzman hekimlik mi kapsamında hizmet vereceği netleştirilmelidir.",
      ar: "بالنسبة لمركز الطب الباطني والأعصاب المخطط له، يجب توضيح الحصص المحددة ومشاركة طبيب الباطنة في الرعاية العامة أو التخصصية.",
    },
    {
      icon: ClipboardCheck,
      de: "Ein bereits vorhandenes MVZ wird erst nach Prüfung seiner bestehenden Bescheide in dieses Modell eingeordnet.",
      en: "An existing MVZ is only integrated into this model after review of its existing notices.",
      ru: "Уже существующий MVZ включается в эту модель только после проверки его действующих решений (Bescheide).",
      tr: "Halihazırda mevcut bir MVZ, ancak mevcut resmi onay ve kararları (Bescheide) incelendikten sonra bu modele dahil edilir.",
      ar: "لا يتم إدراج أي مركز طبي قائم مسبقاً في هذا النموذج إلا بعد المراجعة الشاملة لقرارات اعتماده الرسمية السارية.",
    },
  ],
};

export function MvzContractSection({ locale = "de" }: { locale?: string }) {
  const l: Lang = locale === "tr" ? "tr" : locale === "ar" ? "ar" : locale === "ru" ? "ru" : locale === "en" ? "en" : "de";

  const SubLabel = ({ children }: { children: React.ReactNode }) => (
    <h3 className="flex items-center gap-3 font-serif text-[20px] sm:text-[23px] font-normal text-[#142318] mb-5 sm:mb-6">
      <span className="w-6 sm:w-8 h-[1.5px] bg-[#C5A56A] shrink-0" />
      <span>{children}</span>
    </h3>
  );

  return (
    <section
      id="vertragliche-verbindung"
      className="relative pt-0 pb-16 sm:pb-20 lg:pb-24 bg-[#FAF7F2] border-t border-[#EDE8DE]/70 overflow-hidden"
    >
      {/* Soft Ambient Background Elements */}
      <div className="absolute -bottom-40 -left-32 w-[520px] h-[520px] rounded-full bg-[#1E3B29]/[0.05] blur-3xl pointer-events-none" />
      <div className="absolute -top-40 -right-32 w-[520px] h-[520px] rounded-full bg-[#D5B878]/[0.08] blur-3xl pointer-events-none" />

      {/* ========================================================================= */}
      {/* HEADER: FULL-WIDTH BANNER WITHOUT FRAMES (IN THE STYLE OF MVZ - PHOTO 1) */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full overflow-hidden pb-8 sm:pb-12 lg:pb-14 border-b border-[#EDE8DE]/70">
        {/* Soft Background Photo with smooth horizontal fade (full bleed to right screen edge) */}
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-[54%] lg:w-[50%] pointer-events-none overflow-hidden select-none">
          <Image
            src="/images/contact/clinic-reception.webp"
            alt="NabiOta MVZ & Holding Reception"
            fill
            className="object-cover object-center lg:object-right"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Horizontal gradient fade into page background #FAF7F2 */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] from-0% via-[#FAF7F2]/85 via-20% via-[#FAF7F2]/30 via-45% to-transparent to-75%" />
          {/* Mobile vertical gradient fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/60 via-20% to-transparent md:hidden" />
        </div>

        {/* Botanical foliage branch overlay (as seen in Photo 1) */}
        <div className="absolute top-0 right-[35%] lg:right-[42%] xl:right-[44%] w-40 sm:w-52 h-72 pointer-events-none opacity-65 select-none z-10 hidden md:block">
          <Image
            src="/images/areas/botanical-branch-clean.webp"
            alt=""
            fill
            className="object-contain object-top"
            unoptimized
          />
        </div>

        {/* Header Text Content inside full-width container */}
        <Container size="wide" className="relative z-10 pt-8 sm:pt-12 lg:pt-16">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-xl lg:max-w-2xl">
              {/* Eyebrow with gold line matching MVZ 1 design (No black pill badge) */}
              <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3 flex-wrap">
                <span className="w-6 h-[1.5px] bg-[#C5A56A]" />
                <span className="text-[11px] sm:text-[11.5px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase font-sans">
                  {c.tag[l]}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#C5A56A]/60" />
                <span className="text-[10px] sm:text-[10.5px] font-medium tracking-[0.2em] text-[#6E7870] uppercase font-sans">
                  {c.eyebrow[l]}
                </span>
              </div>

              {/* Title (Photo 1) */}
              <h2 className="font-serif text-[28px] sm:text-[38px] lg:text-[44px] text-[#142318] font-normal leading-[1.15]">
                {c.title[l]}
              </h2>

              {/* Supplementary gold text underneath the title (Photo 1) */}
              <div className="mt-3.5 sm:mt-4">
                <span className="text-[10.5px] sm:text-[11.5px] font-bold tracking-[0.22em] text-[#C5A56A] uppercase font-sans">
                  {c.subEyebrow[l]}
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ── Main Content Container ── */}
      <Container size="wide" className="relative z-10 pt-10 sm:pt-14 lg:pt-16">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
          {/* ========================================================================= */}
          {/* a) AUFBAUPHASE MIT ÄRZTLICHER BETEILIGUNG (PHOTO 2)                       */}
          {/* ========================================================================= */}
          <div>
            <SubLabel>{c.aLabel[l]}</SubLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {c.aCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <article
                    key={i}
                    className="group relative rounded-[22px] sm:rounded-[26px] bg-white border border-[#EAE4D7] hover:border-[#D5B878]/70 hover:shadow-xl transition-all duration-300 shadow-sm overflow-hidden flex flex-col justify-between min-h-[220px] p-6 sm:p-7"
                  >
                    {/* Right faded photo (Clinics Germany style backdrop) */}
                    <div className="absolute right-0 top-0 bottom-0 w-[42%] sm:w-[40%] pointer-events-none overflow-hidden select-none">
                      <Image
                        src={card.image}
                        alt=""
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                        sizes="(max-width: 768px) 100vw, 30vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" />
                    </div>

                    {/* Botanical watermark in corner */}
                    <div className="absolute -bottom-3 -right-3 w-28 h-28 pointer-events-none opacity-40 select-none">
                      <Image
                        src="/images/areas/botanical-branch-clean.webp"
                        alt=""
                        fill
                        className="object-contain object-bottom-right"
                        unoptimized
                      />
                    </div>

                    {/* Left content */}
                    <div className="relative z-10">
                      {/* Icon + Title + Arrow Header */}
                      <div className="flex items-center justify-between gap-3 mb-3 sm:mb-3.5">
                        <div className="flex items-center gap-3.5">
                          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FAF6EE] border border-[#E8DEC8] text-[#2C4436] flex items-center justify-center shrink-0 group-hover:bg-[#F3ECE0] transition-colors shadow-2xs">
                            <Icon className="w-5 h-5 stroke-[1.8]" />
                          </div>
                          <h4 className="font-serif text-[18px] sm:text-[20px] font-medium text-[#142318] leading-tight">
                            {card.title[l]}
                          </h4>
                        </div>
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FAF6EE] border border-[#E8DEC8] text-[#8C6D37] flex items-center justify-center shrink-0 group-hover:bg-[#0B2317] group-hover:text-[#ECCF96] group-hover:border-[#0B2317] transition-all shadow-2xs">
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>

                      <p className="text-[12.5px] sm:text-[13px] text-[#556057] leading-relaxed font-sans max-w-[85%]">
                        {card.text[l]}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* b) ERFORDERLICHE VERTRAGSBEREICHE (PHOTO 2)                               */}
          {/* ========================================================================= */}
          <div>
            <SubLabel>{c.bLabel[l]}</SubLabel>
            <div className="rounded-[22px] sm:rounded-[26px] overflow-hidden border border-[#EAE4D7] bg-white shadow-sm">
              <div className="hidden sm:grid grid-cols-[minmax(240px,1.2fr)_2fr] bg-[#324639] text-[#DCE8DE] text-[10.5px] sm:text-[11px] font-bold tracking-[0.2em] uppercase">
                <div className="px-6 py-4">{c.thContract[l]}</div>
                <div className="px-6 py-4 border-l border-white/10">{c.thContent[l]}</div>
              </div>
              {c.contracts.map((row, i) => {
                const Icon = row.icon;
                return (
                  <div
                    key={i}
                    className="group grid grid-cols-1 sm:grid-cols-[minmax(240px,1.2fr)_2fr] border-t border-[#F0EBE1] first:border-t-0 sm:first:border-t hover:bg-[#FAF8F4] transition-colors"
                  >
                    <div className="flex items-center gap-3.5 px-6 py-4 sm:border-r border-[#F0EBE1]">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FAF6EE] border border-[#E8DEC8] text-[#8C6D37] flex items-center justify-center shrink-0 group-hover:bg-[#F3ECE0] transition-colors shadow-2xs">
                        <Icon className="w-4.5 h-4.5 stroke-[1.8]" />
                      </div>
                      <span className="text-[13.5px] sm:text-[14px] font-medium text-[#142318]">{row.name[l]}</span>
                    </div>
                    <div className="flex items-center justify-between gap-4 px-6 py-4 text-[12.5px] sm:text-[13px] text-[#556057] leading-relaxed">
                      <span>{row.content[l]}</span>
                      <div className="w-7 h-7 rounded-full bg-[#FAF6EE] border border-[#E8DEC8] text-[#8C6D37] flex items-center justify-center shrink-0 group-hover:bg-[#0B2317] group-hover:text-[#ECCF96] group-hover:border-[#0B2317] transition-all shadow-2xs">
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Note Banner with (!) icon (Photo 2) */}
            <div className="mt-5 rounded-2xl sm:rounded-3xl bg-[#FAF6EE]/80 border border-[#E8DEC8] p-5 sm:p-6 flex items-center justify-between gap-4 sm:gap-5 shadow-xs relative overflow-hidden">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-[#142318] text-[#142318] flex items-center justify-center font-serif text-xl sm:text-2xl font-bold shrink-0">
                !
              </div>
              <span className="w-[1.5px] h-12 bg-[#C5A56A] shrink-0 hidden sm:block" />
              <p className="text-[12px] sm:text-[12.5px] text-[#556057] leading-relaxed font-sans flex-1">
                {c.bNote[l]}
              </p>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-[#E8DEC8] text-[#8C6D37] flex items-center justify-center shrink-0 shadow-2xs hidden sm:flex">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* c) ANFORDERUNGEN AN DIE ZULASSUNG (PHOTO 3)                               */}
          {/* ========================================================================= */}
          <div>
            <SubLabel>{c.cLabel[l]}</SubLabel>
            <div className="relative">
              {/* Row 1: 3 cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-4 sm:mb-5">
                {c.cItems.slice(0, 3).map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <article
                      key={i}
                      className="group rounded-[20px] sm:rounded-[22px] bg-white border border-[#EAE4D7] p-5 sm:p-6 flex items-start gap-4 shadow-2xs hover:shadow-md hover:border-[#D5B878]/60 transition-all duration-300"
                    >
                      <div className="w-11 h-11 rounded-full bg-[#FAF6EE] border border-[#E8DEC8] text-[#2C4436] flex items-center justify-center shrink-0 group-hover:bg-[#F3ECE0] transition-colors shadow-2xs mt-0.5">
                        <Icon className="w-5 h-5 stroke-[1.8]" />
                      </div>
                      <p className="text-[12.5px] sm:text-[13px] text-[#556057] leading-relaxed font-sans flex-1">
                        {item[l]}
                      </p>
                    </article>
                  );
                })}
              </div>

              {/* Row 2: 2 cards + botanical foliage in 3rd column (Photo 3) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                {c.cItems.slice(3, 5).map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <article
                      key={i + 3}
                      className="group rounded-[20px] sm:rounded-[22px] bg-white border border-[#EAE4D7] p-5 sm:p-6 flex items-start gap-4 shadow-2xs hover:shadow-md hover:border-[#D5B878]/60 transition-all duration-300"
                    >
                      <div className="w-11 h-11 rounded-full bg-[#FAF6EE] border border-[#E8DEC8] text-[#2C4436] flex items-center justify-center shrink-0 group-hover:bg-[#F3ECE0] transition-colors shadow-2xs mt-0.5">
                        <Icon className="w-5 h-5 stroke-[1.8]" />
                      </div>
                      <p className="text-[12.5px] sm:text-[13px] text-[#556057] leading-relaxed font-sans flex-1">
                        {item[l]}
                      </p>
                    </article>
                  );
                })}

                {/* Botanical flourish on bottom-right matching Photo 3 */}
                <div className="hidden md:flex items-center justify-end relative pointer-events-none select-none pr-4">
                  <div className="relative w-48 h-32 opacity-70">
                    <Image
                      src="/images/areas/botanical-branch-clean.webp"
                      alt=""
                      fill
                      className="object-contain object-right-bottom"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
