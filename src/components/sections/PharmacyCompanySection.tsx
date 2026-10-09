"use client";
import React from "react";
import Image from "next/image";
import {
  Pill,
  ShieldCheck,
  Building2,
  BadgeCheck,
  Scale,
  Lock,
  Store,
  FileText,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/layout/Container";

/**
 * PDF Section IV.10 – "NabiOta Apotheke Mönchengladbach"
 * (NabiOta Pharmacy)
 * Apothekengesetz structure: holding role (rooms + brand + org services),
 * independent licensed Erlaubnisinhaber, public pharmacy concept,
 * §14 ApoG hospital supply, Filialapotheken, independence safeguards.
 */

type Lang = "de" | "en" | "ru" | "tr" | "ar" | "uz";
type T = Record<Lang, string>;
type Icon = React.ComponentType<{ className?: string }>;

const c = {
  tag: {
    de: "Öffentliche Apotheke · § 14 ApoG · Mönchengladbach",
    en: "Public Pharmacy · § 14 ApoG · Mönchengladbach",
    ru: "Общественная аптека · § 14 ApoG · Мёнхенгладбах",
    tr: "Halka Açık Eczane · § 14 ApoG · Mönchengladbach",
    ar: "صيدلية عامة · § 14 من قانون الصيدلة ApoG · مونشنغلادباخ",
    uz: "Jamoat dorixonasi · § 14 ApoG · Mönchengladbach",
  } as T,
  title: "NabiOta Apotheke Mönchengladbach",
  titleAlt: "NabiOta Pharmacy",
  subtitle: {
    de: "Arzneimittelversorgung, pharmazeutische Beratung & Klinikbelieferung",
    en: "Medication Supply, Pharmaceutical Consultation & Hospital Logistics",
    ru: "Лекарственное обеспечение, фармацевтическое консультирование и снабжение клиник",
    tr: "İlaç Tedariği, Farmasötik Danışmanlık ve Klinik Lojistiği",
    ar: "الإمداد الدوائي، الاستشارات الصيدلانية واللوجستيات السريرية للمستشفيات",
    uz: "Dori-darmon ta'minoti, farmatsevtik maslahat va klinikalarni ta'minlash logistikasi",
  } as T,
  lead: {
    de: "Die Gesellschaft kann im rechtlich zulässigen Umfang Räume und organisatorische Dienstleistungen für rechtlich eigenständige Apothekenbetriebe bereitstellen sowie eigene Marken zur Nutzung überlassen. Sämtliche Vereinbarungen stehen unter dem Vorbehalt ihrer apothekenrechtlichen Zulässigkeit; eine eigene Berechtigung zum Betrieb einer öffentlichen Apotheke wird hierdurch nicht begründet. Vorgesehen ist die Einrichtung einer öffentlichen Apotheke unter der Geschäftsbezeichnung „NabiOta Pharmacy“, vorbehaltlich der firmen-, namens- und markenrechtlichen Zulässigkeit.",
    en: "The company may, to the extent permitted by law, provide premises and organisational services for legally independent pharmacy operators, as well as licence its own brands for use. All agreements are subject to their compliance with pharmacy law; no independent pharmacy operating licence is thereby established. A public pharmacy is planned under the business name \"NabiOta Pharmacy\", subject to company name, trade name, and trademark law requirements.",
    ru: "Компания может в разрешённых законом пределах предоставлять помещения и организационные услуги для юридически самостоятельных аптечных операторов, а также предоставлять в пользование собственные торговые марки. Все соглашения подчинены их соответствию аптечному законодательству; собственного права на эксплуатацию аптеки данным документом не возникает. Планируется открытие общественной аптеки под наименованием «NabiOta Pharmacy» при соблюдении фирменного, именного и торгового права.",
    tr: "Şirket, yasal olarak izin verilen çerçevede bağımsız eczane işletmecilerine tesis ve organizasyonel hizmetler sağlayabilir ve kendi tescilli markalarının kullanım hakkını devredebilir. Tüm anlaşmalar eczane mevzuatına uygunluk şartına bağlıdır; bu durum bağımsız bir eczane işletme yetkisi doğurmaz. Şirket, unvan ve marka hukuku gerekliliklerine tabi olarak «NabiOta Pharmacy» işletme adı altında halka açık bir eczane açılmasını planlamaktadır.",
    ar: "يجوز للشركة، في الحدود المسموح بها قانوناً، توفير مبانٍ وخدمات تنظيمية لجهات تشغيل صيدليات مستقلة قانونياً، بالإضافة إلى منح تراخيص استخدام علاماتها التجارية الخاصة. تخضع جميع الاتفاقيات لشرط مطابقتها لقانون الصيدلة؛ ولا ينشأ عن ذلك ترخيص تشغيلي لصيدلية مستقلة. من المقرر إنشاء صيدلية عامة تحت الاسم التجاري «NabiOta Pharmacy»، مع مراعاة متطلبات قانون الأسماء التجارية وقانون العلامات التجارية.",
    uz: "Kompaniya qonunchilikda ruxsat etilgan doirada yuridik jihatdan mustaqil dorixona operatorlariga binolar va tashkiliy xizmatlarni taqdim etishi, shuningdek foydalanish uchun o'z savdo belgilarini taqdim etishi mumkin. Barcha shartnomalar dorixonalar to'g'risidagi qonunga muvofiqlik shartiga bo'ysunadi; bunda mustaqil dorixona faoliyatini yuritish huquqi vujudga kelmaydi. Korxona, firma va tovar belgilari qonunchiligiga rioya qilgan holda «NabiOta Pharmacy» nomi ostida jamoat dorixonasini tashkil etish rejalashtirilgan.",
  } as T,

  pillarsTitle: {
    de: "Rechtliche Struktur & Leistungskonzept",
    en: "Legal Structure & Service Concept",
    ru: "Правовая структура и концепция услуг",
    tr: "Yasal Yapı ve Hizmet Konsepti",
    ar: "الهيكل القانوني ومفهوم الخدمات",
    uz: "Huquqiy tuzilma va xizmatlar konsepsiyasi",
  } as T,
  pillars: [
    {
      icon: BadgeCheck as Icon,
      title: {
        de: "Eigenverantwortliche Apothekenleitung",
        en: "Independent Licensed Pharmacist Leadership",
        ru: "Независимое руководство аккредитованного провизора",
        tr: "Bağımsız Ruhsatlı Baş Eczacı Yönetimi",
        ar: "إدارة صيدلانية مستقلة ومرخصة",
        uz: "Litsenziyaga ega provizorning mustaqil rahbariyati",
      } as T,
      desc: {
        de: "Der Betrieb erfolgt ausschließlich durch einen nach dem Apothekengesetz berechtigten Erlaubnisinhaber in einer gesetzlich zulässigen Rechtsform. Die Apotheke wird nicht als gewöhnliche Tochtergesellschaft der NabiOta-Holding in der Rechtsform einer GmbH betrieben.",
        en: "Operations are conducted exclusively by a holder of a licence pursuant to the Apothekengesetz in a legally permissible legal form. The pharmacy is not operated as an ordinary subsidiary of the NabiOta Holding in the form of a GmbH.",
        ru: "Деятельность осуществляется исключительно лицензированным владельцем разрешения по Закону об аптеках в законно допустимой организационно-правовой форме. Аптека не управляется как обычная дочерняя структура холдинга NabiOta в форме GmbH.",
        tr: "İşletme, yalnızca Alman Eczacılık Kanunu (Apothekengesetz) uyarınca yetkilendirilmiş bir ruhsat sahibi tarafından yasal olarak kabul edilen bir hukuki formda yürütülür. Eczane, NabiOta Holding'in olağan bir GmbH iştiraki olarak işletilmez.",
        ar: "تتم الإدارة حصرياً بواسطة صيدلي مرخص يحمل تصريحاً بموجب قانون الصيدلة الألماني وفي شكل قانوني مسموح به نظاماً. ولا تُدار الصيدلية كشركة تابعة عادية لمجموعة NabiOta في شكل شركة ذات مسؤولية محدودة (GmbH).",
        uz: "Faoliyat faqat Apothekengesetz (Dorixonalar to'g'risidagi qonun) bo'yicha ruxsatnomaga ega litsenziat tomonidan qonuniy ruxsat etilgan huquqiy shaklda olib boriladi. Dorixona NabiOta xoldingining oddiy GmbH shaklidagi sho'ba korxonasi sifatida boshqarilmaydi.",
      } as T,
    },
    {
      icon: Pill as Icon,
      title: {
        de: "Leistungsangebot der öffentlichen Apotheke",
        en: "Public Pharmacy Service Portfolio",
        ru: "Услуги общественной аптеки",
        tr: "Halka Açık Eczane Hizmet Yelpazesi",
        ar: "حزمة خدمات الصيدلية العامة",
        uz: "Jamoat dorixonasi xizmatlari doirasi",
      } as T,
      desc: {
        de: "Zum vorgesehenen Leistungsangebot gehören die ordnungsgemäße Arzneimittelversorgung, die pharmazeutische Beratung sowie die Abgabe apothekenüblicher Produkte im gesetzlich zulässigen Umfang.",
        en: "The planned service portfolio encompasses proper medication dispensing, pharmaceutical consultation, and the sale of pharmacy-typical products to the extent permitted by law.",
        ru: "Планируемый перечень услуг включает надлежащее лекарственное обеспечение, фармацевтическое консультирование, а также отпуск аптечных товаров в объёме, разрешённом законом.",
        tr: "Planlanan hizmet yelpazesi; reçeteli ve reçetesiz ilaçların düzenli tedarik ve teminini, uzman farmasötik danışmanlığı ve yasal olarak izin verilen eczane ürünlerinin satışını kapsar.",
        ar: "تشمل الخدمات المخططة توفير الأدوية بانتظام، وتقديم المشورة الصيدلانية المتخصصة، وصرف وبيع المنتجات الصيدلانية التقليدية في الحدود المسموح بها قانوناً.",
        uz: "Rejalashtirilgan xizmatlar doirasiga dori-darmonlar bilan to'g'ri ta'minlash, farmatsevtik maslahat berish hamda qonunchilikda ruxsat etilgan hajmda dorixona mahsulotlarini berish va sotish kiradi.",
      } as T,
    },
    {
      icon: Building2 as Icon,
      title: {
        de: "Klinikbelieferung nach § 14 ApoG",
        en: "Hospital Supply pursuant to § 14 ApoG",
        ru: "Снабжение клиник согласно § 14 ApoG",
        tr: "§ 14 ApoG Uyarınca Klinik İlaç Tedariği",
        ar: "الإمداد السريري للمستشفيات بموجب المادة § 14 ApoG",
        uz: "§ 14 ApoG bo'yicha klinikalarni ta'minlash",
      } as T,
      desc: {
        de: "Eine Versorgung verbundener Krankenhäuser erfolgt ausschließlich auf Grundlage der hierfür erforderlichen schriftlichen Versorgungsverträge und behördlichen Genehmigungen.",
        en: "Supply to affiliated hospitals is conducted exclusively on the basis of the requisite written supply agreements and regulatory approvals.",
        ru: "Снабжение аффилированных больниц осуществляется исключительно на основании необходимых письменных договоров снабжения и государственных разрешений.",
        tr: "Bağlı hastanelerin ilaç temini, yalnızca yasal olarak zorunlu yazılı tedarik sözleşmeleri ve resmi makam onayları doğrultusunda gerçekleştirilir.",
        ar: "يتم إمداد المستشفيات التابعة بالأدوية حصرياً على أساس عقود التوريد الخطية الإلزامية والموافقات الرسمية الصادرة عن الهيئات المختصة.",
        uz: "Hamkor shifoxonalarni ta'minlash faqat buning uchun zarur bo'lgan yozma ta'minot shartnomalari va rasmiy idoralarning ruxsatnomalari asosida amalga oshiriladi.",
      } as T,
    },
    {
      icon: Store as Icon,
      title: {
        de: "Filialapotheken (innerhalb gesetzlicher Grenzen)",
        en: "Branch Pharmacies (within statutory limits)",
        ru: "Аптечные филиалы (в пределах закона)",
        tr: "Şube Eczaneleri (Yasal Sınırlar Dahilinde)",
        ar: "الفروع الصيدلانية (ضمن الحدود القانونية)",
        uz: "Filial dorixonalar (qonuniy doirada)",
      } as T,
      desc: {
        de: "Die Errichtung von Filialapotheken kann innerhalb der gesetzlichen Grenzen erfolgen. Jeder zusätzliche Standort setzt die erforderliche Erweiterung der Betriebserlaubnis sowie die Erfüllung der jeweiligen personellen, räumlichen und organisatorischen Anforderungen voraus.",
        en: "Branch pharmacies may be established within statutory limits. Each additional location requires the necessary extension of the operating licence and compliance with the respective staffing, spatial, and organisational requirements.",
        ru: "Открытие аптечных филиалов возможно в пределах законных ограничений. Каждый дополнительный объект требует соответствующего расширения лицензии на эксплуатацию и соответствия кадровым, пространственным и организационным требованиям.",
        tr: "Şube eczanelerinin açılması yasal sınırlar dahilinde mümkündür. Her ek şube; işletme ruhsatının genişletilmesini ve ilgili personel, mekânsal ve organizasyonel koşulların sağlanmasını gerektirir.",
        ar: "يجوز إنشاء فروع صيدلانية ضمن الحدود التي يسمح بها القانون. يتطلب كل موقع إضافي تمديداً رسمياً لتصريح التشغيل واستيفاء المتطلبات الفردية والتنظيمية والمكانية المقررة.",
        uz: "Filial dorixonalarni ochish qonuniy me'yorlar doirasida amalga oshirilishi mumkin. Har bir qo'shimcha filial faoliyat litsenziyasini kengaytirishni hamda tegishli kadrlar, xonalar va tashkiliy talablarga muvofiqlikni talab qiladi.",
      } as T,
    },
    {
      icon: FileText as Icon,
      title: {
        de: "Holding-Beiträge: Räume, Marke & Organisation",
        en: "Holding Contributions: Premises, Brand & Organisation",
        ru: "Вклад холдинга: помещения, бренд и организация",
        tr: "Holding Katkısı: Tesis, Marka ve Organizasyon",
        ar: "مساهمات المجموعة القابضة: المباني، العلامة التجارية والتنظيم",
        uz: "Xolding hissasi: xonalar, brend va tashkiliy masalalar",
      } as T,
      desc: {
        de: "Die NabiOta-Gesellschaft stellt Räumlichkeiten und organisatorische Dienstleistungen bereit und überlässt die Marke «NabiOta Pharmacy» zur Nutzung – stets innerhalb der apothekenrechtlichen Grenzen und ohne Begründung eigener Betriebsrechte.",
        en: "The NabiOta entity provides premises and organisational services and licences the brand «NabiOta Pharmacy» for use – always within pharmacy law boundaries and without establishing independent operating rights.",
        ru: "Структура NabiOta предоставляет помещения и организационные услуги и передаёт в пользование бренд «NabiOta Pharmacy» — в пределах аптечного законодательства и без возникновения собственных прав на ведение деятельности.",
        tr: "NabiOta şirketi, eczacılık hukuku sınırları içinde kalarak ve bağımsız işletme hakları doğurmaksızın mekânsal alanlar ve organizasyonel hizmetler temin eder ve «NabiOta Pharmacy» markasını kullanıma sunar.",
        ar: "توفر شركة NabiOta المباني والخدمات التنظيمية وتمنح ترخيص استخدام العلامة التجارية «NabiOta Pharmacy» — دائماً ضمن الحدود الصارمة لقانون الصيدلة ودون إنشاء حقوق تشغيلية ذاتية.",
        uz: "NabiOta tuzilmasi dorixonalar to'g'risidagi qonun chegaralarida va mustaqil faoliyat huquqlarisiz binolar va tashkiliy xizmatlarni taqdim etadi hamda «NabiOta Pharmacy» brendidan foydalanish huquqini beradi.",
      } as T,
    },
    {
      icon: ShieldCheck as Icon,
      title: {
        de: "Wahrung pharmazeutischer Unabhängigkeit",
        en: "Safeguarding Pharmaceutical Independence",
        ru: "Обеспечение фармацевтической независимости",
        tr: "Farmasötik Bağımsızlığın Korunması",
        ar: "صون الاستقلالية المهنية الصيدلانية",
        uz: "Farmatsevtik mustaqillikni himoya qilish",
      } as T,
      desc: {
        de: "Vereinbarungen mit Unternehmen der NabiOta-Gruppe über Mieträume, Markenverwendung und organisatorische Dienstleistungen dürfen die eigenverantwortliche pharmazeutische Leitung nicht beeinträchtigen und müssen die apothekenrechtlichen Beteiligungs-, Vergütungs- und Unabhängigkeitsvorschriften beachten.",
        en: "Agreements with NabiOta Group entities regarding premises, brand use, and organisational services must not impair the independent pharmaceutical management and must comply with pharmacy law regulations on participation, remuneration, and independence.",
        ru: "Соглашения с организациями группы NabiOta о помещениях, использовании бренда и организационных услугах не должны нарушать самостоятельное фармацевтическое руководство и должны соответствовать нормам аптечного права об участии, вознаграждении и независимости.",
        tr: "NabiOta grubu şirketleriyle yapılacak kiralama, marka kullanımı ve operasyonel hizmet anlaşmaları bağımsız farmasötik yönetimi etkileyemez; ortaklık, ücretlendirme ve bağımsızlık hükümlerine tam uyulur.",
        ar: "يجب ألا تؤثر الاتفاقيات المبرمة مع شركات مجموعة NabiOta بشأن استئجار الأماكن أو استخدام العلامة التجارية أو الخدمات التنظيمية على الإدارة الصيدلانية المستقلة، مع مراعاة كافة لوائح المشاركة والمكافآت والاستقلالية.",
        uz: "NabiOta guruhi korxonalari bilan binolarni ijaraga olish, brenddan foydalanish va tashkiliy xizmatlar bo'yicha shartnomalar mustaqil farmatsevtik rahbariyatga xalaqit bermasligi hamda ishtirok, mukofot va mustaqillik to'g'risidagi dorixona qoidalariga muvofiq bo'lishi kerak.",
      } as T,
    },
  ],

  disclaimerTitle: {
    de: "Rechtlicher Hinweis",
    en: "Legal Notice",
    ru: "Правовая оговорка",
    tr: "Yasal Bilgilendirme",
    ar: "إشعار قانوني تنظيمي",
    uz: "Huquqiy eslatma",
  } as T,
  disclaimerText: {
    de: "Der vorliegende Planungstext begründet weder eine Apothekenbetriebserlaubnis noch eine Anzeigepflicht oder sonstige rechtlich verbindliche Zusage. Erlaubnis- und zulassungspflichtige Tätigkeiten werden erst nach Erfüllung aller gesetzlichen Voraussetzungen aufgenommen.",
    en: "This planning document establishes neither a pharmacy operating licence nor any obligation to notify or any other legally binding commitment. Activities requiring a licence or approval will only commence once all statutory prerequisites have been fulfilled.",
    ru: "Настоящий плановый текст не является ни лицензией на эксплуатацию аптеки, ни обязательством об уведомлении, ни каким-либо иным юридически обязывающим обещанием. Виды деятельности, требующие лицензии или разрешения, начнутся только после выполнения всех установленных законом предварительных условий.",
    tr: "İşbu planlama metni, bir eczane işletme ruhsatı, yasal bildirim yükümlülüğü veya bağlayıcı bir taahhüt teşkil etmez. İzne ve ruhsata tabi faaliyetler ancak tüm yasal ön koşullar yerine getirildikten sonra başlatılacaktır.",
    ar: "لا ينشئ هذا المخطط تصريحاً بتشغيل صيدلية أو التزاماً بالإخطار أو أي تعهد قانوني ملزم. ولن يتم الشروع في الأنشطة الخاضعة للترخيص والموافقة إلا بعد استيفاء جميع المتطلبات والشروط القانونية.",
    uz: "Mazkur rejalashtirish hujjati dorixona faoliyati litsenziyasini, xabardor qilish majburiyatini yoki boshqa har qanday yuridik majburiy va'dani anglatmaydi. Litsenziya va ruxsat talab qilinadigan faoliyat turlari faqat barcha qonuniy shartlar to'liq bajarilgandan so'ng boshlanadi.",
  } as T,

  legalBadges: {
    de: [
      "§ 14 Apothekengesetz (ApoG)",
      "§ 2 ApoG – Betriebserlaubnis",
      "§ 7 ApoG – Erlaubnisinhaber",
      "Markenrecht & Firmenrecht",
      "DSGVO · Gesundheitsdaten",
    ],
    en: [
      "§ 14 Apothekengesetz (ApoG)",
      "§ 2 ApoG – Operating Licence",
      "§ 7 ApoG – Licence Holder",
      "Trademark & Corporate Law",
      "GDPR · Health Data",
    ],
    ru: [
      "§ 14 Apothekengesetz (ApoG)",
      "§ 2 ApoG – Лицензия на эксплуатацию",
      "§ 7 ApoG – Владелец лицензии",
      "Товарные знаки и корпоративное право",
      "DSGVO · Медицинские данные",
    ],
    tr: [
      "§ 14 Apothekengesetz (ApoG)",
      "§ 2 ApoG – İşletme Ruhsatı",
      "§ 7 ApoG – Ruhsat Sahibi",
      "Marka ve Şirketler Hukuku",
      "GDPR · Sağlık Verileri",
    ],
    ar: [
      "§ 14 قانون الصيدلة (ApoG)",
      "§ 2 تصريح التشغيل",
      "§ 7 صاحب التصريح",
      "قانون العلامات والشركات",
      "حماية البيانات الصحية (GDPR)",
    ],
    uz: [
      "§ 14 Apothekengesetz (ApoG)",
      "§ 2 ApoG – Faoliyat litsenziyasi",
      "§ 7 ApoG – Litsenziya egasi",
      "Savdo belgilari va korporativ huquq",
      "DSGVO · Tibbiy ma'lumotlar",
    ],
  } as Record<Lang, string[]>,
};

export function PharmacyCompanySection({ locale = "de" }: { locale?: string }) {
  const l: Lang = locale === "uz" ? "uz" : locale === "tr" ? "tr" : locale === "ar" ? "ar" : locale === "ru" ? "ru" : locale === "en" ? "en" : "de";

  return (
    <section
      id="nabiota-apotheke-structure"
      className="relative pt-0 pb-14 sm:pb-18 lg:pb-22 bg-[#FAF7F2] border-t border-[#EDE8DE] overflow-hidden"
    >
      <div className="absolute top-0 right-10 w-[500px] h-[500px] rounded-full bg-[#1E3B29]/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] rounded-full bg-[#D5B878]/[0.07] blur-3xl pointer-events-none" />

      {/* ── Hero Banner: Full-width banner with soft right-photo fade (Matching MVZ style) ── */}
      <div className="relative z-10 w-full overflow-hidden pb-4 sm:pb-6">
        {/* Soft Background Photo with smooth horizontal fade / blur effect */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[64%] xl:w-[60%] pointer-events-none overflow-hidden select-none">
          <Image
            src="/images/areas/pharmacy-interior.jpg"
            alt="NabiOta Apotheke Mönchengladbach"
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
              {/* Eyebrow with gold line matching unified holding sections */}
              <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
                <span className="w-6 h-[1.5px] bg-[#C5A56A]" />
                <span className="text-[10px] sm:text-[10.5px] font-semibold tracking-[0.22em] text-[#C5A56A] uppercase font-sans">
                  {c.subtitle[l]}
                </span>
              </div>

              {/* Title with styled italic phrase */}
              <h2 className="font-serif text-[24px] sm:text-[28px] lg:text-[34px] xl:text-[38px] text-[#142318] font-normal leading-[1.18] mb-1.5">
                NabiOta{" "}
                <span className="font-serif italic text-[#C5A56A]">Apotheke</span>{" "}
                <span className="text-[#C5A56A] font-sans font-semibold text-[0.72em] tracking-wider uppercase ml-1 align-baseline">
                  Mönchengladbach
                </span>
              </h2>

              <p className="text-[11px] font-bold tracking-[0.22em] text-[#C5A56A] uppercase mb-3">
                {c.titleAlt}
              </p>

              <p className="text-[12.5px] sm:text-[13px] text-[#556057] leading-relaxed max-w-xl font-sans">
                {c.lead[l]}
              </p>
            </div>
          </div>
        </Container>
      </div>

      <Container size="wide" className="relative z-10 mt-6 sm:mt-8">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">
          {/* 6 Pillars Grid (Preparation of future departments style) */}
          <div>
            <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
              <span className="w-6 h-[1.5px] bg-[#C5A56A]" />
              <h3 className="font-serif text-[20px] sm:text-[23px] text-[#142318] font-normal">
                {c.pillarsTitle[l]}
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
                {c.pillars.map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="group relative rounded-[18px] bg-white border border-[#EAE4D7] p-3.5 sm:p-4 flex items-center justify-between gap-3 sm:gap-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-[#D5B878]/60 transition-all duration-300"
                    >
                      {/* Left: Icon circle */}
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FAF5EB] border border-[#EFE5D5] flex items-center justify-center shrink-0 group-hover:bg-[#F3EAD9] transition-colors">
                        <ItemIcon className="w-5 h-5 text-[#9E7D3B]" />
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
                      <div className="w-8.5 h-8.5 rounded-full border border-[#D5B878]/50 flex items-center justify-center text-[#9E7D3B] shrink-0 group-hover:bg-[#9E7D3B] group-hover:text-white group-hover:border-[#9E7D3B] transition-all duration-300">
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Legal badges */}
          <div className="flex flex-wrap gap-2 justify-center">
            {c.legalBadges[l].map((badge, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E3B29]/8 border border-[#1E3B29]/20 text-[#1E3B29] text-[10.5px] font-bold tracking-[0.15em] uppercase"
              >
                <Scale className="w-3 h-3 opacity-60" />
                {badge}
              </span>
            ))}
          </div>

          {/* Disclaimer dark box */}
          <div className="rounded-2xl sm:rounded-3xl bg-[#08170D] text-white p-6 sm:p-8 border border-[#D5B878]/40 shadow-xl relative overflow-hidden">
            <div className="absolute right-0 top-0 w-72 h-72 bg-[#D5B878]/[0.05] rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#ECCF96]/15 text-[#ECCF96] flex items-center justify-center shrink-0 mt-0.5">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-[17px] sm:text-[19px] text-[#ECCF96] mb-2">
                  {c.disclaimerTitle[l]}
                </h4>
                <p className="text-[12px] sm:text-[12.5px] text-[#C4D1C8] leading-relaxed font-sans">
                  {c.disclaimerText[l]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
