import React from "react";
import { SupportedLocale } from "@/lib/i18n";
import { ShieldCheck, Stethoscope, Microscope, Clock, Calendar, FileText, User } from "@/lib/icons";

// ── Custom SVG Modality Icons ──
function MriScannerIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <path d="M4 14h6M14 14h6" />
      <path d="M9 16h6" />
    </svg>
  );
}

function CtScannerIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M9.5 9.5l5 5" />
    </svg>
  );
}

function UltrasoundWaveIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      <path d="M7 12c0-2.8 2.2-5 5-5s5 2.2 5 5" />
      <path d="M10 12c0-1.1.9-2 2-2s2 .9 2 2" />
      <circle cx="12" cy="12" r="1" />
      <path d="M12 13v7M9 20h6" />
    </svg>
  );
}

function XrayPulseIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M12 7v10M9 9h6M8 12h8M10 15h4" />
    </svg>
  );
}

function TestTubesIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 3h6M10 3v12a2 2 0 0 0 4 0V3M14 9h-4" />
      <path d="M5 6h4M7 6v9a2 2 0 0 0 4 0V6" />
      <path d="M15 6h4M17 6v9a2 2 0 0 0 4 0V6" />
    </svg>
  );
}

function HeartCardioIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M7 12h2l1.5-3 2 6 1.5-3H17" />
    </svg>
  );
}

function NeuroPulseIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 12h4l2-5 3 10 2-7 2 4h4l2-2" />
      <circle cx="21" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

function ScannerArchIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20V11a8 8 0 0 1 16 0v9" />
      <path d="M8 20v-9a4 4 0 0 1 8 0v9" />
      <circle cx="12" cy="14" r="1.5" fill="currentColor" />
    </svg>
  );
}

function GoldCircleCheckIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8.5" stroke="#B89650" strokeWidth="1.2" />
      <path d="M6.5 10.2L8.8 12.5L13.5 7.8" stroke="#B89650" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}


export interface ProcedureModalData {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  desc: string;
  fullDesc: string;
  indicationsTitle: string;
  indications: string[];
  standards: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
}



export function getDiagnostikPageTranslations(locale: SupportedLocale = "de") {
  const isUz = locale === "uz";
  const isRu = locale === "ru";
  const isEn = locale === "en";
  const isTr = locale === "tr";
  const isAr = locale === "ar";

  const heroData = {
    title: isUz ? "Diagnostika" : isRu ? "Диагностика" : isEn ? "Diagnostics" : isTr ? "Tanı ve Görüntüleme" : isAr ? "التشخيص والتصوير الطبي" : "Diagnostik",
    subtitle: isUz
      ? "Ekspert darajasidagi yuqori texnologiyali tibbiy vizualizatsiya"
      : isRu
      ? "Высокотехнологичная визуализация экспертного уровня"
      : isEn
      ? "High-Precision Diagnostic Imaging"
      : isTr
      ? "Kesin Teşhisler İçin İleri Teknoloji ve Hassasiyet"
      : isAr
      ? "تقنيات فائقة الدقة لتشخيص سريري موثوق"
      : "Präzisionstechnologie für fundierte Befunde",
    description: isUz
      ? "NabiOta® Diagnostics GmbH Germaniya klinik standartlari asosida yuqori aniqlikdagi nurlanish, neyrofiziologiya va laboratoriya diagnostikasining to'liq spektrini taqdim etadi: 3-Tesla MRT, kam dozali KT, raqamli rentgen, EMG/ENG/EEG hamda tezkor POCT laboratoriya tahlillari."
      : isRu
      ? "NabiOta® Diagnostics GmbH предоставляет полный спектр высокоточной лучевой, нейрофизиологической и лабораторной диагностики: 3-Тесла МРТ, низкодозовая КТ, цифровой рентген, ЭМГ/ЭНГ/ЭЭГ и экспресс-тестирование POCT по немецким стандартам."
      : isEn
      ? "NabiOta® Diagnostics GmbH delivers university-grade medical imaging, neurophysiology, and clinical laboratory testing: 3-Tesla wide-bore MRI, low-dose CT, digital radiography, EMG/ENG/EEG, and rapid POCT analysis according to rigorous German clinical standards."
      : isTr
      ? "NabiOta® Diagnostics GmbH, üniversite standartlarında kapsamlı radyolojik, nörofizyolojik ve laboratuvar tanı hizmetleri sunmaktadır: Düşük dozlu BT, 3-Tesla Manyetik Rezonans (MR), tam dijital röntgen, EMG/ENG/EEG ve Alman kalite standartlarına uygun hızlı POCT test lojistiği."
      : isAr
      ? "تقدم شركة NabiOta® Diagnostics GmbH منظومة متكاملة من التشخيص الإشعاعي، الفسيولوجيا العصبية والتحاليل المخبرية بمستوى جامعي رفيع: تصوير مقطعي محوسب (CT) منخفض الجرعة، رنين مغناطيسي 3 تسلا، أشعة سينية رقمية بالكامل، وتخطيط الأعصاب والعضلات (EMG/ENG/EEG)، مع لوجستيات الفحوصات الفورية (POCT) المعتمدة وفق المعايير الألمانية الصارمة."
      : "Die NabiOta® Diagnostics GmbH bietet modernste Bildgebung, Neurophysiologie und Labordiagnostik auf universitärem Niveau: Niedrigdosis-CT, 3-Tesla-MRT, volldigitales Röntgen, EMG/ENG/EEG sowie zuverlässige POCT- und Laborlogistik für schnelle, fundierte Befunde.",
    badges: [
      {
        icon: <MriScannerIcon className="w-5 h-5 text-[#ECCF96]" />,
        title: isUz ? "3-Tesla MRT" : isRu ? "3-Тесла МРТ" : isEn ? "3-Tesla MRI" : isTr ? "3-Tesla MR" : isAr ? "رنين مغناطيسي 3 تسلا" : "3-Tesla-MRT",
        sub: isUz ? "Maksimal aniqlik" : isRu ? "Макс. детализация" : isEn ? "High-Field Precision" : isTr ? "Yüksek Alan Hassasiyeti" : isAr ? "دقة متناهية المجال" : "High-Field Präzision",
      },
      {
        icon: <Clock className="w-5 h-5 text-[#ECCF96]" />,
        title: "< 24h",
        sub: isUz ? "Xulosa tayyorlash" : isRu ? "Сроки заключения" : isEn ? "Report Turnaround" : isTr ? "Rapor Teslim Süresi" : isAr ? "تسليم التقرير الطبي" : "Befunderstellung",
      },
      {
        icon: <ShieldCheck className="w-5 h-5 text-[#ECCF96]" />,
        title: "Low-Dose",
        sub: isUz ? "Kam dozali KT" : isRu ? "Бережная КТ" : isEn ? "Minimal Dose CT" : isTr ? "Düşük Dozlu BT" : isAr ? "أشعة مقطعية بجرعة دنيا" : "Schonende CT",
      },
    ],
  };

  // ── Section 1: 6 Modality Cards matching Photo 1 & Client PDF ──
  const procedures: ProcedureModalData[] = [
    {
      id: "mrt",
      badge: "High-Field 3T",
      title: isUz ? "3-Tesla MRT" : isRu ? "3-Тесла МРТ" : isEn ? "3-Tesla MRI" : isTr ? "3-Tesla MR" : isAr ? "الرنين المغناطيسي 3 تسلا" : "3-Tesla-MRT",
      subtitle: isUz
        ? "Yumshoq to'qimalar, MNS va bo'g'imlar uchun yuqori aniqlikdagi 3T tomografiya"
        : isRu
        ? "Высокоразрешающая томография мягких тканей, ЦНС и суставов"
        : isEn
        ? "High-Resolution Cross-Sectional MRI for Soft Tissue, CNS & Joints"
        : isTr
        ? "Yumuşak doku, merkezi sinir sistemi ve eklemler için yüksek çözünürlüklü 3T kesitsel tanı"
        : isAr
        ? "تصوير مقطعي عالي الدقة 3 تسلا للأنسجة الرخوة والجهاز العصبي المركزي والمفاصل"
        : "Hochauflösende 3T-Schnittbilddiagnostik für Weichteile, ZNS und Gelenke",
      desc: isUz
        ? "Yumshoq to'qimalar va markaziy asab tizimini batafsil ko'rish uchun yuqori aniqlikdagi MRT."
        : isRu
        ? "МРТ высокого разрешения для детальной визуализации мягких тканей и ЦНС."
        : isEn
        ? "High-resolution 3T imaging for CNS, spine, and joints."
        : isTr
        ? "Yumuşak dokular, beyin-omurilik ve eklemler için yüksek çözünürlüklü 3T görüntüleme."
        : isAr
        ? "تصوير 3 تسلا عالي الاستبانة للجهاز العصبي المركزي والمفاصل والأنسجة الرخوة."
        : "Hochauflösende 3T-Bilder für Weichteile, ZNS und Gelenke.",
      fullDesc: isUz
        ? "3-Tesla yuqori maydonli MRT ionlashtiruvchi nurlanishsiz maksimal fazoviy aniqlikni ta'minlaydi. Zamonaviy ko'p kanalli g'altaklar va bemor uchun qulay keng tunnel (70 sm) asab tizimi, bo'g'imlar, tog'aylar va qorin bo'shlig'i a'zolarini mukammal vizualizatsiya qilishni kafolatlaydi."
        : isRu
        ? "Высокопольная 3-Тесла МРТ обеспечивает максимальную пространственную детализацию без использования ионизирующего излучения. Современные многоканальные катушки и широкий туннель (70 см) гарантируют комфорт и превосходную визуализацию нервной системы, суставов, хрящей и органов брюшной полости."
        : isEn
        ? "University-grade 3-Tesla high-field MRI delivers outstanding spatial resolution with zero ionizing radiation. Featuring advanced multi-channel coils and a patient-friendly 70 cm wide-bore tunnel, it cleanly differentiates delicate neurovascular, cartilage, and abdominal structures."
        : isTr
        ? "3-Tesla yüksek alanlı manyetik rezonans tomografisi, iyonlaştırıcı radyasyon riski olmadan üstün görüntü kalitesi sağlar. Modern çok kanallı sargı teknolojisi ve 70 cm genişliğindeki ferah tünel sayesinde sinir sistemi, kıkırdak ve yumuşak dokuların en ince ayrıntıları güvenle incelenir."
        : isAr
        ? "يوفر التصوير بالرنين المغناطيسي عالي المجال 3 تسلا دقة تصويرية فائقة دون أدنى تعرض للإشعاع المؤين. بفضل تقنية الملفات متعددة القنوات والنفق الرحب بقطر 70 سم، يتم الكشف بوضوح استثنائي عن أدق التراكيب العصبية والغضاريف وأنسجة البطن."
        : "Die 3-Tesla-Hochfeld-Magnetresonanztomographie bietet eine herausragende Bildauflösung ohne jegliche Belastung durch ionisierende Strahlung. Dank modernster Mehrkanal-Spulentechnologie und einem patientenfreundlichen Wide-Bore-Tunnel (70 cm) werden selbst feinste Strukturen des Nervensystems, des Knorpels und der Weichteile exakt differenziert.",
      indicationsTitle: isUz ? "Asosiy klinik ko'rsatmalar" : isRu ? "Ключевые показания (по PDF)" : isEn ? "Key Clinical Indications (PDF)" : isTr ? "Klinik Odaklar ve Endikasyonlar" : isAr ? "دواعي الفحص والمجالات السريرية" : "Klinische Schwerpunkte & Indikationen",
      indications: isUz
        ? [
            "Bosh va orqa miya, kalla suyagi nervlarining neyrovizualizatsiyasi",
            "Umurtqa pog'onasi, umurtqalararo disklar va nerv ildizlari",
            "Yirik va periferik bo'g'imlar (tizza, yelka, chanoq-son)",
            "Bosh va bo'yin qon tomirlarining nurlanishsiz MR-angiografiyasi",
            "Onkologik diagnostika va yumshoq to'qimalar holatini baholash",
          ]
        : isRu
        ? [
            "Головной и спинной мозг, черепно-мозговые нервы",
            "Позвоночник, межпозвонковые диски и корешки",
            "Крупные и мелкие суставы (коленный, плечевой, тазобедренный)",
            "МР-ангиография сосудов головы и шеи без радиации",
            "Онкологический поиск и стадирование мягких тканей",
          ]
        : isEn
        ? [
            "Brain, cranial nerves & spinal cord neuro-imaging",
            "Spine, intervertebral discs & nerve roots",
            "Major & peripheral joints (knee, shoulder, hip, ankle)",
            "MR-Angiography of cerebral & neck vessels",
            "Oncological staging & soft tissue lesion assessment",
          ]
        : isTr
        ? [
            "Beyin, kafa sinirleri ve omurilik (Nöro-Görüntüleme)",
            "Omurga, intervertebral diskler ve sinir kökleri",
            "Eklem teşhisi (diz, omuz, kalça, ayak bileği)",
            "Beyin ve boyun damarlarının radyasyonsuz MR anjiyografisi",
            "Onkolojik kesitsel görüntüleme ve yumuşak doku tümörleri",
          ]
        : isAr
        ? [
            "تصوير الدماغ والأعصاب القحفية والنخاع الشوكي (Neuro-Imaging)",
            "العمود الفقري والانزلاقات الغضروفية وجذور الأعصاب",
            "تشخيص المفاصل (الركبة، الكتف، الورك، الكاحل)",
            "تصوير الأوعية الدماغية والعنقية بالرنين دون إشعاع (MR-Angiography)",
            "التصوير المقطعي للأورام وأنسجة الجسم الرخوة",
          ]
        : [
            "Gehirn, Hirnnerven & Rückenmark (Neuro-Imaging)",
            "Wirbelsäule, Bandscheiben & Nervenwurzeln",
            "Gelenkdiagnostik (Knie, Schulter, Hüfte, Sprunggelenk)",
            "Strahlungsfreie MR-Angiographie der Hirn- & Halsgefäße",
            "Onkologische Schnittbilddiagnostik & Weichteiltumore",
          ],
      standards: isUz
        ? "100% nurlanishsiz • PACS teleradiologik arxivi • Shifokor qarorlarining mustaqilligi (§ 95 SGB V)"
        : isRu
        ? "100% без радиации • Телерадиологический архив PACS • Независимость врачебных решений (§ 95 SGB V)"
        : isEn
        ? "100% Radiation-free • Instant PACS digital transfer • Full physician autonomy (§ 95 SGB V)"
        : isTr
        ? "%100 Radyasyonsuz • Teleradyolojik PACS Transferi • § 95 SGB V Uyarınca Bağımsız Hekim Kararları"
        : isAr
        ? "خالٍ تماماً من الإشعاع 100% • نقل فوري لأرشيف PACS الرقمي • استقلالية كاملة للقرار الطبي وفق § 95 SGB V"
        : "100% Strahlungsfrei • Teleradiologischer PACS-Transfer • Ärztliche Weisungsfreiheit nach § 95 SGB V",
      image: "/images/diagnostik/modality-mrt.webp",
      icon: MriScannerIcon,
    },
    {
      id: "ct",
      badge: "Low-Dose CT",
      title: isUz ? "Past dozali KT" : isRu ? "Low-Dose КТ" : isEn ? "Low-Dose CT" : isTr ? "Düşük Dozlu BT" : isAr ? "الأشعة المقطعية منخفضة الجرعة" : "Low-Dose CT",
      subtitle: isUz
        ? "Ultra past nurlanish yuki bilan tezkor qatlamli 3D-tomografiya"
        : isRu
        ? "Быстрая послойная 3D-томография с ультранизкой лучевой нагрузкой"
        : isEn
        ? "Ultra-Fast 3D Volumetric CT with Iterative Dose Reduction"
        : isTr
        ? "İteratif doz azaltımı ile iskelet ve organların hızlı 3D kesitsel tomografisi"
        : isAr
        ? "تصوير مقطعي ثلاثي الأبعاد فائق السرعة مع تقليل جرعة الإشعاع التكراري"
        : "Schnelle und schonende Querschnittsbilder mit reduzierter Dosis",
      desc: isUz
        ? "Skelet va ichki a'zolarning past dozali qatlamli 3D-tomografiyasi."
        : isRu
        ? "Низкодозовая послойная 3D-томография скелета и внутренних органов."
        : isEn
        ? "Fast, low-radiation cross-sectional 3D imaging."
        : isTr
        ? "Düşük radyasyonla kemik yapıları ve iç organların hızlı 3D görüntülemesi."
        : isAr
        ? "تصوير مقطعي سريع للجسد والأعضاء الداخلية بجرعات إشعاعية مخفضة."
        : "Schnelle und schonende Querschnittsbilder mit reduzierter Dosis.",
      fullDesc: isUz
        ? "Iterativ rekonstruksiya algoritmlariga ega ko'p qatlamli kompyuter tomografiyasi nurlanish dozasini maksimal aniqlikda minimal darajagacha kamaytirish imkonini beradi. Bir necha soniya ichida skelet, ko'krak qafasi va qorin bo'shlig'i a'zolarining uch o'lchovli modellari yaratiladi."
        : isRu
        ? "Многосрезовая компьютерная томография с алгоритмами итеративной реконструкции позволяет сократить дозу облучения до физического минимума при максимальной чёткости. За считанные секунды формируются трехмерные модели скелета, органов грудной клетки и брюшной полости."
        : isEn
        ? "Multi-detector computed tomography utilizing modern iterative dose-reduction algorithms minimizes radiation exposure while delivering pristine 3D cross-sectional volume data of the skeletal frame, thoracic cavity, and abdominal organs in seconds."
        : isTr
        ? "Çok kesitli bilgisayarlı tomografimiz (BT), modern iteratif rekonstrüksiyon algoritmalarıyla radyasyon maruziyetini asgari seviyeye indirir. Kemik yapıları, göğüs kafesi ve batın organlarının üç boyutlu detaylı modelleri saniyeler içinde elde edilir."
        : isAr
        ? "تستخدم الأشعة المقطعية متعددة الكواشف خوارزميات إعادة البناء التكرارية الحديثة لتقليل الجرعة الإشعاعية إلى أدنى حد ممكن، منتجةً نماذج حجمية ثلاثية الأبعاد للعظام والقفص الصدري والبطن خلال ثوانٍ معدودة."
        : "Unsere Computertomographie nutzt modernste iterative Rekonstruktionsalgorithmen, um die Strahlendosis auf ein absolutes Minimum zu senken. Innerhalb weniger Sekunden entstehen lückenlose dreidimensionale Bilddaten von Knochenstrukturen, Thorax und Abdomen für eine verlässliche Akut- und Verlaufsbeurteilung.",
      indicationsTitle: isUz ? "Asosiy klinik ko'rsatmalar" : isRu ? "Ключевые показания (по PDF)" : isEn ? "Key Clinical Indications (PDF)" : isTr ? "Klinik Odaklar ve Endikasyonlar" : isAr ? "دواعي الفحص والمجالات السريرية" : "Klinische Schwerpunkte & Indikationen",
      indications: isUz
        ? [
            "Jarohatlar va murakkab sinishlarning shoshilinch diagnostikasi",
            "Ko'krak qafasi a'zolari va o'pka (High-Resolution Low-Dose HRCT)",
            "Qorin bo'shlig'i, qorinparda orti sohasi va kichik chanoq",
            "Arteriyalar va tomir malformatsiyalarining KT-angiografiyasi",
            "Kam invaziv blokadalarda KT nazorati (PRT)",
          ]
        : isRu
        ? [
            "Экстренная диагностика травм и сложных переломов",
            "Органы грудной клетки и легкие (High-Resolution Low-Dose HRCT)",
            "Брюшная полость, забрюшинное пространство и малый таз",
            "КТ-ангиография артерий и сосудистых мальформаций",
            "КТ-контроль при малоинвазивных блокадах (PRT)",
          ]
        : isEn
        ? [
            "Acute trauma & complex fracture diagnostics",
            "Thorax & lung parenchyma (High-Resolution Low-Dose HRCT)",
            "Abdominal, retroperitoneal & pelvic organ imaging",
            "CT angiography of cerebral and peripheral arteries",
            "CT-guided precision periradicular pain therapy (PRT)",
          ]
        : isTr
        ? [
            "Acil travma ve karmaşık kırık teşhisi",
            "Toraks ve akciğer parankimi (Low-Dose HR-CT)",
            "Karın, leğen kemiği ve retroperitoneal organlar",
            "Serebral ve periferik damarların BT anjiyografisi",
            "Hassas BT rehberliğinde ağrı tedavisi (PRT)",
          ]
        : isAr
        ? [
            "طوارئ الحوادث وتشخيص الكسور المعقدة",
            "فحص الصدر وأنسجة الرئة فائق الدقة (Low-Dose HR-CT)",
            "أعضاء البطن والحوض والمساحة خلف الصفاق",
            "تصوير الشرايين الدماغية والطرفية بالأشعة المقطعية (CT-Angiography)",
            "علاج آلام جذور الأعصاب الموجه بدقة المقطعية (PRT)",
          ]
        : [
            "Akute Notfalldiagnostik & komplexe Frakturabklärung",
            "Thorax & Lungenparenchym (Low-Dose HR-CT)",
            "Abdomen, Becken & retroperitoneale Organe",
            "CT-Angiographie der cerebralen & peripheren Gefäße",
            "Präzise CT-gestützte Schmerztherapie (PRT)",
          ],
      standards: isUz
        ? "StrlSchG radiatsiyadan himoyalanish me'yorlari • Shoshilinch holatlarda tezkor xulosa"
        : isRu
        ? "Нормы радиационной защиты StrlSchG • Экспресс-заключение при критических находках"
        : isEn
        ? "StrlSchG radiation protection • Rapid emergency turnaround protocol"
        : isTr
        ? "StrlSchG Radyasyon Koruma Uyumu • Acil Vakalar İçin Hızlı Rapor Protokolü"
        : isAr
        ? "مطابق لقانون الحماية الإشعاعية StrlSchG • بروتوكول التقارير الفورية لحالات الطوارئ"
        : "StrlSchG-konform • Dosisspar-Protokolle • Schnellbefundung bei Akutfällen",
      image: "/images/diagnostik/modality-ct.webp",
      icon: CtScannerIcon,
    },
    {
      id: "roentgen",
      badge: "Digital Rö",
      title: isUz ? "Raqamli rentgen" : isRu ? "Цифровой рентген" : isEn ? "Digital X-Ray" : isTr ? "Dijital Röntgen" : isAr ? "الأشعة السينية الرقمية" : "Digitales Röntgen",
      subtitle: isUz
        ? "Skelet va ko'krak qafasi a'zolarining tezkor raqamli rentgenografiyasi"
        : isRu
        ? "Мгновенная цифровая рентгенография скелета и органов грудной клетки"
        : isEn
        ? "Direct Digital Radiography with Flat-Panel Detectors"
        : isTr
        ? "Tüm hareket sistemi ve toraks için direkt dijital düz panel radyografi"
        : isAr
        ? "تصوير إشعاعي رقمي مباشر للجهاز الحركي بالكامل والصدر بكواشف مسطحة"
        : "Volldigitale Röntgendiagnostik (Rö) des gesamten Bewegungsapparats",
      desc: isUz
        ? "Minimal nurlanish yuki bilan tezkor tekshiruv."
        : isRu
        ? "Быстрое обследование с минимальной лучевой нагрузкой."
        : isEn
        ? "Rapid examination with minimal radiation exposure."
        : isTr
        ? "Minimum radyasyon maruziyeti ile hızlı ve net iskelet taraması."
        : isAr
        ? "فحص سريع ومباشر بأدنى مستويات التعرض الإشعاعي."
        : "Schnelle Untersuchung mit geringer Strahlenbelastung.",
      fullDesc: isUz
        ? "Yassi panelli raqamli detektorlar skelet va ko'krak qafasining yuqori aniqlikdagi tasvirlarini soniya ulushlarida taqdim etadi. Raqamli suratlar zudlik bilan yagona himoyalangan PACS arxiviga yuboriladi va xolding jarrohlari hamda ixtisoslashgan shifokorlari uchun darhol ochiq bo'ladi."
        : isRu
        ? "Плоскопанельные цифровые детекторы обеспечивают снимки скелета и грудной клетки в высоком разрешении за доли секунды. Цифровые снимки мгновенно передаются в единый защищенный архив PACS и доступны оперирующим хирургам и профильным врачам холдинга."
        : isEn
        ? "Direct digital flat-panel detectors yield ultra-sharp radiographs in fractions of a second with minimized radiation exposure. Radiographs are immediately transferred into the group's secure PACS for instant access by attending surgeons and physicians."
        : isTr
        ? "Katı hal dijital dedektörleri saniyenin kesirlerinde yüksek çözünürlüklü röntgen çekimleri sağlar. Çekilen görüntüler anında NabiOta PACS dijital arşivine aktarılır ve uzman hekimlerimiz ile cerrahlarımız tarafından eş zamanlı incelenebilir."
        : isAr
        ? "تتيح الكواشف الرقمية ذات اللوحة المسطحة التقاط صور إشعاعية بالغة الوضوح في أجزاء من الثانية بأقل جرعة إشعاعية. تتاح الصور فوراً في نظام الأرشفة الرقمي PACS للاطلاع المباشر من قِبل الجراحين والأطباء المعالجين."
        : "Volldigitale Festkörper-Detektoren ermöglichen strahlungsarme Aufnahmen in Sekundenbruchteilen. Die Röntgenbilder stehen sofort im digitalen PACS-Archiv zur Verfügung und können direkt von den behandelnden Fachärzten und Chirurgen der Gruppe eingesehen werden.",
      indicationsTitle: isUz ? "Asosiy klinik ko'rsatmalar" : isRu ? "Ключевые показания (по PDF)" : isEn ? "Key Clinical Indications (PDF)" : isTr ? "Klinik Odaklar ve Endikasyonlar" : isAr ? "دواعي الفحص والمجالات السريرية" : "Klinische Schwerpunkte & Indikationen",
      indications: isUz
        ? [
            "Skelet, suyaklar va bo'g'imlar fiziologik proyeksiyalarda",
            "Ko'krak qafasi a'zolari rentgenografiyasi (yurak va o'pka)",
            "Operatsiyadan keyin implantlar holatini nazorat qilish",
            "Artroz, deformatsiyalar va sinishlarni erta aniqlash",
          ]
        : isRu
        ? [
            "Скелет, кости и суставы в физиологических проекциях",
            "Рентгенография органов грудной клетки (сердце и легкие)",
            "Послеоперационный контроль стояния имплантов",
            "Ранняя диагностика артрозов, деформаций и переломов",
          ]
        : isEn
        ? [
            "Skeletal frame, bones & joints under functional load",
            "Chest radiography (cardiopulmonary assessment)",
            "Post-operative implant and osteosynthesis alignment",
            "Evaluation of arthrosis, axial deformities & micro-fractures",
          ]
        : isTr
        ? [
            "Yük altında kemik, iskelet ve eklem grafileri",
            "Toraks görüntüleme (akciğer ve kalp)",
            "Ameliyat sonrası implant konumu ve iyileşme takibi",
            "Kırık, deformite ve eklem kireçlenmelerinin tespiti",
          ]
        : isAr
        ? [
            "العظام والهيكل العظمي والمفاصل تحت الحمل الوظيفي",
            "أشعة الصدر (تقييم القلب والرئتين)",
            "المتابعة الجراحية ومراقبة ثبات الغرسات والشرائح",
            "استبعاد الكسور والتشوهات المفصلية والخشونة",
          ]
        : [
            "Knochen, Skelett & Gelenke unter Belastung",
            "Thoraxaufnahmen (Herz & Lunge)",
            "Postoperative Verlaufskontrolle & Implantatsitz",
            "Ausschluss von Frakturen, Fehlstellungen & Arthrosen",
          ],
      standards: isUz
        ? "StrlSchG nurlanishdan himoyalanish to'g'risidagi qonuni • PACS tizimiga darhol kirish"
        : isRu
        ? "Закон о защите от излучения StrlSchG • Моментальный доступ в PACS"
        : isEn
        ? "German Radiation Protection Act • Instant PACS digital transmission"
        : isTr
        ? "Alman Radyasyondan Korunma Yasası (StrlSchG) • Anında Dijital PACS Erişimi"
        : isAr
        ? "معايير الحماية من الإشعاع StrlSchG • وصول فوري ومباشر لنظام PACS"
        : "Strahlenschutzverordnung • Digitale Direktauswertung • Sofortige Verfügbarkeit",
      image: "/images/diagnostik/modality-roentgen.webp",
      icon: XrayPulseIcon,
    },
    {
      id: "ultraschall",
      badge: "3D/4D Duplex",
      title: isUz ? "UTT va Doppler" : isRu ? "УЗИ & Допплер" : isEn ? "Ultrasound & Doppler" : isTr ? "Ultrason & Doppler" : isAr ? "الموجات فوق الصوتية والدوبلر" : "Ultraschall & Doppler",
      subtitle: isUz
        ? "3D/4D sonografiya, rangli dupleks va doppler skanerlash"
        : isRu
        ? "3D/4D сонография, цветовое дуплексное и допплеровское сканирование"
        : isEn
        ? "3D/4D Ultrasound & Color-Coded Duplex Vascular Sonography"
        : isTr
        ? "Medikal endikasyonlu sonografi, 3D/4D yöntemleri ve renkli damar doppleri"
        : isAr
        ? "تخطيط الصدى السريري، تقنيات 3D/4D وتصوير الأوعية بالدوبلر الملون"
        : "Medizinisch indizierte Sonographie, 3D/4D-Verfahren & Gefäßdoppler",
      desc: isUz
        ? "A'zolar va qon tomirlari uchun xavfsiz, ishonchli va universal tekshiruv."
        : isRu
        ? "Бережно, надежно и универсально для органов и сосудов."
        : isEn
        ? "Gentle, reliable, and versatile application for vessels & organs."
        : isTr
        ? "İç organlar ve damarlar için nazik, güvenilir ve radyasyonsuz inceleme."
        : isAr
        ? "فحص آمن، لطيف ودقيق للأعضاء الداخلية والأوعية الدموية."
        : "Schonend, zuverlässig und vielseitig für Organe und Gefäße.",
      fullDesc: isUz
        ? "Ko'p chastotali datchiklarga ega ekspert toifasidagi ultratovush apparatlari qorin bo'shlig'i a'zolari, yumshoq to'qimalar, qalqonsimon bez va qon tomirlarini batafsil baholashni ta'minlaydi. Rangli dupleks skanerlash qon oqimi tezligi va xususiyatini xatosiz aniqlash imkonini beradi."
        : isRu
        ? "Ультразвуковые аппараты экспертного класса с многочастотными датчиками обеспечивают детальную оценку органов брюшной полости, мягких тканей, щитовидной железы и сосудов. Цветовое дуплексное сканирование позволяет безошибочно оценить скорость и характер кровотока."
        : isEn
        ? "High-end ultrasound platforms equipped with multi-frequency probes allow pain-free, radiation-free real-time examination. Color duplex sonography accurately assesses vascular flow dynamics, vessel walls, and organ parenchymal perfusion."
        : isTr
        ? "Yüksek çözünürlüklü çok frekanslı problarla donatılmış modern ultrason cihazlarımız, tamamen ağrısız ve radyasyonsuz gerçek zamanlı inceleme sunar. Renkli dubleks ve doppler sonografi ile kan akışı, damar duvarları ve organ dokuları hassasiyetle değerlendirilir."
        : isAr
        ? "توفر أجهزة السونار المتطورة ذات المجسات متعددة الترددات فحصاً غير جراحي وخالياً تماماً من الألم والإشعاع في الوقت الفعلي. يحلل الدوبلر الملون بدقة تدفق الدم في الأوعية، حالة الجدران الوعائية، وتروية أنسجة الأعضاء الداخلية."
        : "Modernste Ultraschallgeräte mit hochauflösenden multifrequenten Sonden ermöglichen eine schmerz- und strahlungsfreie Untersuchung in Echtzeit. Farbcodierte Duplex- und Dopplersonographie analysieren Durchblutung, Gefäßwände und Strömungsverhältnisse präzise.",
      indicationsTitle: isUz ? "Asosiy klinik ko'rsatmalar" : isRu ? "Ключевые показания (по PDF)" : isEn ? "Key Clinical Indications (PDF)" : isTr ? "Klinik Odaklar ve Endikasyonlar" : isAr ? "دواعي الفحص والمجالات السريرية" : "Klinische Schwerpunkte & Indikationen",
      indications: isUz
        ? [
            "Uyqu va umurtqa arteriyalarini dupleks skanerlash",
            "Pastki oyoq-qo'l venalari (tromboz va varikozni inkor qilish)",
            "Qorin bo'shlig'i a'zolari (jigar, o't pufagi, buyraklar, oshqozon osti bezi)",
            "Qalqonsimon bez, limfa tugunlari va yumshoq to'qimalar",
          ]
        : isRu
        ? [
            "Дуплексное сканирование сонных и позвоночных артерий",
            "Вены нижних конечностей (исключение тромбоза и варикоза)",
            "Органы брюшной полости (печень, желчный пузырь, почки, поджелудочная)",
            "Щитовидная железа, лимфатические узлы и мягкие ткани",
          ]
        : isEn
        ? [
            "Duplex sonography of carotid & vertebral arteries",
            "Lower extremity venous evaluation (DVT exclusion & varices)",
            "Abdominal sonography (liver, gallbladder, kidneys, pancreas)",
            "Thyroid gland, cervical soft tissue & lymph node mapping",
          ]
        : isTr
        ? [
            "Beyne giden boyun damarlarının (şah damarı) renkli dubleksi",
            "Bacak toplardamarları (tromboz taraması ve varisler)",
            "Karın organları (karaciğer, safra yolları, böbrekler, pankreas, dalak)",
            "Tiroid bezi, boyun yumuşak dokuları ve lenf nodları",
          ]
        : isAr
        ? [
            "دوبلر الأوعية المغذية للدماغ (الشريان السباتي والفقري)",
            "أوردة الساقين (استبعاد الجلطات الوريدية العميقة والدوالي)",
            "أعضاء البطن (الكبد، المرارة، الكلى، البنكرياس، الطحال)",
            "الغدة الدرقية، الأنسجة الرخوة في الرقبة والعقد الليمفاوية",
          ]
        : [
            "Farbduplex der hirnzuführenden Gefäße (Karotis)",
            "Beinvenen (Thromboseausschluss & Krampfadern)",
            "Bauchorgane (Leber, Gallenwege, Nieren, Pankreas, Milz)",
            "Schilddrüse, Halsweichteile & Lymphknotenstatus",
          ],
      standards: isUz
        ? "100% nurlanishsiz • Barcha yoshdagilar uchun xavfsiz • Cheklovlarsiz takrorlanish imkoni"
        : isRu
        ? "100% без облучения • Безопасно для всех возрастов • Повторение без ограничений"
        : isEn
        ? "100% Radiation-free • Fully non-invasive • Unlimited repeatability"
        : isTr
        ? "%100 Radyasyonsuz • Tamamen Ağrısız • Sınırsız Tekrarlanabilir"
        : isAr
        ? "خالٍ تماماً من الإشعاع 100% • غير مؤلم • قابل للتكرار دون قيود"
        : "100% strahlungsfrei • Schmerzfrei • Unbegrenzt wiederholbar",
      image: "/images/diagnostik/modality-ultraschall.webp",
      icon: UltrasoundWaveIcon,
    },
    {
      id: "neurophys",
      badge: "EMG • ENG • EEG",
      title: isUz ? "Neyrofiziologiya" : isRu ? "Нейрофизиология" : isEn ? "Neurophysiology" : isTr ? "Nörofizyoloji" : isAr ? "الفسيولوجيا العصبية" : "Neurophysiologie",
      subtitle: isUz
        ? "Asablar, muskullar va markaziy asab tizimining funksional diagnostikasi"
        : isRu
        ? "Функциональная диагностика нервов, мышц и центральной нервной системы"
        : isEn
        ? "Electrophysiological Diagnostics of Nerves, Musculature & CNS"
        : isTr
        ? "Periferik sinir sistemi, kaslar ve merkezi sinir sistemi fonksiyonel tanıları"
        : isAr
        ? "التشخيص الوظيفي للجهاز العصبي المحيطي والعضلات والجهاز العصبي المركزي"
        : "Funktionsdiagnostik des peripheren Nervensystems, der Muskulatur und des ZNS",
      desc: isUz
        ? "EMG, ENG, EEG va chaqirilgan potensiallar (VEP, AEP, SEP)."
        : isRu
        ? "ЭМГ, ЭНГ, ЭЭГ и вызванные потенциалы (VEP, AEP, SEP)."
        : isEn
        ? "EMG, ENG, EEG, and evoked potentials (VEP, AEP, SEP)."
        : isTr
        ? "EMG, ENG, EEG ve uyarılmış potansiyeller (VEP, AEP, SEP)."
        : isAr
        ? "تخطيط العضلات والأعصاب والدماغ والجهود المستحثة (VEP, AEP, SEP)."
        : "EMG, ENG, EEG und evozierte Potenziale (VEP, AEP, SEP).",
      fullDesc: isUz
        ? "Xolding PDF hujjati 4-bandiga ko'ra, neyrofiziologiya bo'limi nerv va muskullarning bioelektr faolligini obyektiv baholash uchun maxsus jihozlangan. Elektromiografiya (EMG), elektroneyrografiya (ENG), EEG va chaqirilgan potensiallar aniq nevrologik tashxislarni kafolatlaydi."
        : isRu
        ? "В соответствии с пунктом 4 PDF холдинга, отделение нейрофизиологии оснащено для объективной оценки биоэлектрической активности нервов и мышц. Электромиография (ЭМГ), электронейрография (ЭНГ), ЭЭГ и вызванные потенциалы обеспечивают выверенные неврологические диагнозы."
        : isEn
        ? "According to Section 4 of the holding guidelines, our neurophysiology unit provides dedicated examination suites for evaluating nerve, muscle, and CNS functions. EMG, nerve conduction velocity (ENG), EEG, and evoked potentials (AEP, VEP, SEP) support definitive clinical management."
        : isTr
        ? "Holding PDF Kısım 4 gereğince, nörofizyoloji birimimiz sinir, kas ve beyin fonksiyonlarının objektif değerlendirilmesi için özel muayene istasyonlarıyla donatılmıştır. Elektromiyografi (EMG), elektronörografi (ENG), elektroensefalografi (EEG) ve uyarılmış potansiyeller (AEP, VEP, SEP) ile kesin klinik tanılar konulur."
        : isAr
        ? "وفقاً للبند 4 من لوائح الهولدينغ، تضم وحدة الفسيولوجيا العصبية محطات فحص متقدمة للتقييم الموضوعي لوظائف الأعصاب والعضلات والدماغ. يشمل ذلك تخطيط العضلات (EMG)، سرعة التوصيل العصبي (ENG)، تخطيط الدماغ (EEG)، والجهود المستحثة (AEP, VEP, SEP)."
        : "Gemäß Punkt 4 des Holdings umfasst die Neurophysiologie spezifische Untersuchungsplätze zur objektiven Beurteilung von Nerven-, Muskel- und zentralnervösen Funktionen. Elektromyographie (EMG), Elektroneurographie (ENG), Elektroenzephalographie (EEG) und evozierte Potenziale (AEP, VEP, SEP) sichern fundierte therapeutische Entscheidungen.",
      indicationsTitle: isUz ? "Asosiy klinik ko'rsatmalar" : isRu ? "Ключевые показания (по PDF)" : isEn ? "Key Clinical Indications (PDF)" : isTr ? "Klinik Odaklar ve Endikasyonlar" : isAr ? "دواعي الفحص والمجالات السريرية" : "Klinische Schwerpunkte & Indikationen",
      indications: isUz
        ? [
            "Tunnel sindromlari (karpal, kubital, tarzal kanallari)",
            "Disk churralaridagi ildizcha sindromlari va radikulopatiyalar",
            "Polineyropatiyalar (diabetik, toksik, yallig'lanishli)",
            "Miopatiyalar, miasteniya va asab-mushak buzilishlari",
            "Epilepsiya, hushdan ketish va bosh og'riqlarining EEG diagnostikasi",
          ]
        : isRu
        ? [
            "Туннельные синдромы (карпальный, кубитальный, тарзальный каналы)",
            "Корешковые синдромы и радикулопатии при грыжах дисков",
            "Полинейропатии (диабетические, токсические, воспалительные)",
            "Миопатии, миастения и нервно-мышечные нарушения",
            "ЭЭГ-диагностика эпилепсии, синкопальных состояний и головных болей",
          ]
        : isEn
        ? [
            "Nerve compression syndromes (carpal, cubital, tarsal tunnel)",
            "Radicular root syndromes associated with disc herniations",
            "Polyneuropathies (diabetic, metabolic, inflammatory)",
            "Myopathies, muscular dystrophies & myasthenia gravis",
            "EEG evaluation of seizures, syncope & chronic cephalalgia",
          ]
        : isTr
        ? [
            "Karpal tünel ve sinir sıkışma sendromları",
            "Polinöropatiler ve sinir kökü basıları (bel ve boyun fıtıkları)",
            "Kas distrofileri, miyopatiler ve miyasteni",
            "Epilepsi araştırması, baş dönmesi ve nedeni açıklanamayan baş ağrıları",
            "Merkezi sinir yollarını inceleyen uyarılmış potansiyeller (AEP, VEP, SEP)",
          ]
        : isAr
        ? [
            "متلازمات انضغاط الأعصاب (النفق الرسغي، الزندي، والرسغي القدَمي)",
            "اعتلال الأعصاب المتعدد وجذور الأعصاب (الانزلاق الغضروفي)",
            "ضمور العضلات، الاعتلالات العضلية والوهن العضلي الوبيل",
            "تقييم نوبات الصرع، حالات الإغماء والصداع غير المبرر",
            "الجهود المستحثة لتقييم المسارات العصبية المركزية (AEP, VEP, SEP)",
          ]
        : [
            "Karpaltunnel- & Nervenkompressionssyndrome",
            "Polyneuropathien & Nervenwurzelreizungen (Bandscheibenvorfälle)",
            "Muskeldystrophien, Myopathien & Myasthenie",
            "Epilepsieabklärung, Schwindel & ungeklärte Kopfschmerzen",
            "Evozierte Potenziale zur Prüfung zentraler Bahnen (AEP, VEP, SEP)",
          ],
      standards: isUz
        ? "Ixtisoslashgan shifokor ekspertizasi • Yuqori aniqlikdagi elektrodiagnostika"
        : isRu
        ? "Врачебная специализированная экспертиза • Прецизионная электродиагностика"
        : isEn
        ? "Fellowship-trained neurophysiologists • High-precision electromyography"
        : isTr
        ? "Uzman Hekim Yönetiminde • Yüksek Hassasiyetli Nörografi • Klinik Rehberlere Uyumlu"
        : isAr
        ? "إشراف أطباء أعصاب استشاريين • قياسات كهرودقيقة • مطابقة للأدلة السريرية"
        : "Fachärztliche Durchführung • Neurographische Präzisionsmessung • Leitlinienkonform",
      image: "/images/diagnostik/modality-neurophys.webp",
      icon: NeuroPulseIcon,
    },
    {
      id: "labor",
      badge: "POCT & Probenlogistik",
      title: isUz ? "Laboratoriya va POCT" : isRu ? "Лаборатория & Пробы" : isEn ? "Laboratory & POCT" : isTr ? "Laboratuvar & POCT" : isAr ? "المختبر الطبي والفحوصات الفورية" : "Labordiagnostik & Probenmanagement",
      subtitle: isUz
        ? "Namunalar olish, harorat nazorati ostidagi logistika va tezkor POCT tahlillari"
        : isRu
        ? "Организация забора проб, температурная логистика и экспресс-анализы POCT"
        : isEn
        ? "Sample Lifecycle Management, Cold-Chain Transport & Rapid POCT"
        : isTr
        ? "Yapılandırılmış numune alımı, kesintisiz numune lojistiği ve acil POCT"
        : isAr
        ? "إدارة متكاملة للعينات، لوجستيات مبردة وتحاليل فورية (POCT)"
        : "Strukturierte Probengewinnung, lückenlose Probenlogistik & Notfall-POCT",
      desc: isUz
        ? "Klinik biokimyo, gematologiya va tezkor tahlillar."
        : isRu
        ? "Клиническая химия, гематология и экспресс-анализы."
        : isEn
        ? "Clinical biochemistry, hematology, and rapid POCT markers."
        : isTr
        ? "Klinik biyokimya, hematoloji ve anında Point-of-Care tanıları."
        : isAr
        ? "الكيمياء السريرية، أمراض الدم وعلامات الطوارئ الفورية."
        : "Klinische Chemie, Hämatologie und Point-of-Care-Diagnostik.",
      fullDesc: isUz
        ? "NabiOta Diagnostics GmbH 4-bandi talablariga muvofiq, xolding standartlashtirilgan namunalar siklini tashkil etadi: shtrix-kod orqali identifikatsiya qilish, olish, sentrifuglash va harorat nazoratidagi logistika. Ichki tezkor POCT laboratoriyasi muhim parametrlarni bir necha daqiqada taqdim etadi."
        : isRu
        ? "Согласно требованиям пункта 4 NabiOta Diagnostics GmbH, холдинг организует стандартизированный цикл: однозначная штрихкод-идентификация проб, забор, центрифугирование и температурная логистика. Встроенная экспресс-лаборатория POCT обеспечивает ключевые анализы за считанные минуты."
        : isEn
        ? "Under Section 4 of NabiOta Diagnostics GmbH, the group manages the complete sample lifecycle: barcoded sample tracking, standardized collection, pre-analytical preparation, and temperature-controlled logistics. On-site POCT testing delivers critical biomarkers within minutes."
        : isTr
        ? "NabiOta Diagnostics GmbH Kısım 4 yönergeleri uyarınca şirketimiz numune sürecinin tamamını yönetir: Barkodlu numune kimliklendirmesi, kalite güvenceli alım, usulüne uygun hazırlık ve ısı kontrollü taşıma. Bünyemizdeki entegre POCT acil laboratuvarı, hayati parametreleri dakikalar içinde sonuçlandırır."
        : isAr
        ? "بموجب المادة 4 لشركة NabiOta Diagnostics GmbH، تنظم الشركة دورة العينات السريرية بأكملها: التتبع بالباركود الموحد، السحب المطابق لمعايير الجودة، المعالجة السليمة، والنقل الخاضع للتحكم الحراري. يوفر مختبر POCT المدمج العلامات الحيوية خلال دقائق."
        : "Gemäß den Vorgaben von Punkt 4 der NabiOta Diagnostics GmbH organisiert die Gesellschaft den gesamten Probenprozess: eindeutige Probenidentifikation, qualitätsgesicherte Entnahme, sachgerechte Aufbereitung und temperaturgeführten Transport. Ein vor Ort integriertes POCT-Sofortlabor liefert vitale Laborparameter innerhalb von Minuten.",
      indicationsTitle: isUz ? "Asosiy klinik ko'rsatmalar" : isRu ? "Ключевые показания (по PDF)" : isEn ? "Key Clinical Indications (PDF)" : isTr ? "Klinik Odaklar ve Endikasyonlar" : isAr ? "دواعي الفحص والمجالات السريرية" : "Klinische Schwerpunkte & Indikationen",
      indications: isUz
        ? [
            "Klinik biokimyo, kengaytirilgan qon tahlili va koagulogramma",
            "Shoshilinch tibbiy yordam kardiomarkerlari (troponin, D-dimer, proBNP)",
            "Tizimli yallig'lanish markerlari (SRB, prokalsitonin)",
            "Gormonal profillar, diabet markerlari (HbA1c) va moddalar almashinuvi",
            "Akkreditatsiyadan o'tgan ixtisoslashtirilgan laboratoriyalar bilan muvofiqlashtirish",
          ]
        : isRu
        ? [
            "Клиническая биохимия, развернутый анализ крови и коагулограмма",
            "Кардиомаркеры экстренной помощи (тропонин, Д-димер, proBNP)",
            "Маркеры системного воспаления (СРБ, прокальцитонин)",
            "Гормональные профили, диабетические маркеры (HbA1c) и обмен веществ",
            "Координация со специализированными аккредитованными лабораториями",
          ]
        : isEn
        ? [
            "Clinical biochemistry, comprehensive CBC & coagulation cascade",
            "Emergency cardiac biomarkers (Troponin, D-Dimer, NT-proBNP)",
            "Systemic inflammatory markers (CRP, procalcitonin, ESR)",
            "Endocrine & metabolic panels (HbA1c, thyroid hormones)",
            "Seamless transfer to accredited reference laboratory centers",
          ]
        : isTr
        ? [
            "Klinik biyokimya, tam kan sayımı (hemogram) ve koagülasyon paneli",
            "Acil kardiyak belirteçler (Troponin, D-Dimer, NT-proBNP)",
            "İnflamasyon ve enfeksiyon parametreleri (CRP, Prokalsitonin)",
            "Metabolizma, tiroid ve hormon profilleri",
            "Akredite referans laboratuvarlarına kalite kontrollü numune transferi",
          ]
        : isAr
        ? [
            "الكيمياء السريرية، تعداد الدم الشامل (CBC) وتخثر الدم",
            "علامات القلب الإسعافية الفورية (Troponin, D-Dimer, NT-proBNP)",
            "مؤشرات الالتهاب والعدوى الجهازية (CRP, Procalcitonin)",
            "فحوصات الغدد الصماء والتمثيل الغذائي والسكري (HbA1c)",
            "التنسيق اللوجستي السلس مع كبرى المختبرات المعتمدة",
          ]
        : [
            "Klinische Chemie, Großes Blutbild & Gerinnungsstatus",
            "Kardiale Akut-Marker (Troponin, D-Dimer, NT-proBNP vor Ort)",
            "Entzündungs- & Infektionsparameter (CRP, Procalcitonin)",
            "Stoffwechsel-, Schilddrüsen- & Hormonprofile",
            "Qualitätsgesicherte Probenweiterleitung an Partnerlabore",
          ],
      standards: isUz
        ? "RiliBÄK sifat nazorati • Biologik materiallarni shtrix-kodlash va verifikatsiya qilish"
        : isRu
        ? "Контроль качества RiliBÄK • Штрихкодирование и верификация биоматериалов"
        : isEn
        ? "RiliBÄK quality assurance • End-to-end barcode chain of custody"
        : isTr
        ? "RiliBÄK Kalite Güvencesi • Kesintisiz Barkod Takibi • Anında Hızlı Analiz"
        : isAr
        ? "ضمان الجودة RiliBÄK • تتبع مشفر للعينات بالباركود • تحاليل فورية معتمدة"
        : "RiliBÄK-Qualitätssicherung • Lückenlose Barcode-Rückverfolgbarkeit • Sofortanalytik",
      image: "/images/diagnostik/modality-labor.webp",
      icon: TestTubesIcon,
    },
  ];

  // ── Section 3: 4 Process Steps matching Photo 2 & PDF ──
  const processSteps = [
    {
      num: "01",
      icon: Calendar,
      title: isUz ? "Qabulga yozilish" : isRu ? "Запись на прием" : isEn ? "Appointment Booking" : isTr ? "Randevu Alma" : isAr ? "حجز الموعد" : "Terminvereinbarung",
      desc: isUz
        ? "Onlayn yoki telefon orqali tez va qulay."
        : isRu
        ? "Быстро и удобно онлайн или по телефону."
        : isEn
        ? "Fast and uncomplicated online or by phone."
        : isTr
        ? "Online veya telefonla hızlı ve kolayca."
        : isAr
        ? "بسرعة وسهولة عبر الإنترنت أو عبر الهاتف."
        : "Schnell und unkompliziert online oder telefonisch.",
    },
    {
      num: "02",
      icon: ScannerArchIcon,
      title: isUz ? "Tekshiruv" : isRu ? "Обследование" : isEn ? "Examination" : isTr ? "Muayene & Tarama" : isAr ? "الفحص والتصوير" : "Untersuchung",
      desc: isUz
        ? "Ilg'or texnologiyalar, ehtiyotkorlik bilan o'tkazish."
        : isRu
        ? "Передовые технологии, бережное проведение."
        : isEn
        ? "Modern technology, professionally conducted."
        : isTr
        ? "İleri teknoloji, nazik ve profesyonel uygulama."
        : isAr
        ? "تقنيات متقدمة وإجراء لطيف باحترافية تامة."
        : "Moderne Technik, professionell durchgeführt.",
    },
    {
      num: "03",
      icon: FileText,
      title: isUz ? "Tahlil va xulosa" : isRu ? "Анализ и заключение" : isEn ? "Evaluation" : isTr ? "Değerlendirme" : isAr ? "التحليل وإعداد التقرير" : "Auswertung",
      desc: isUz
        ? "Yetakchi mutaxassislarimiz tomonidan ekspert xulosasi."
        : isRu
        ? "Экспертное заключение нашими специалистами."
        : isEn
        ? "Diagnostic reporting by fellowship specialists."
        : isTr
        ? "Uzman radyologlarımız tarafından detaylı raporlama."
        : isAr
        ? "تقرير طبي دقيق على يد استشاريين متخصصين."
        : "Befundung durch unsere Spezialisten.",
    },
    {
      num: "04",
      icon: User,
      title: isUz ? "Shaxsiy maslahat" : isRu ? "Личная консультация" : isEn ? "Personal Consultation" : isTr ? "Bireysel Görüşme" : isAr ? "الاستشارة الطبية الفردية" : "Persönliches Gespräch",
      desc: isUz
        ? "Tushunarli natijalar va individual tavsiyalar."
        : isRu
        ? "Понятные результаты и индивидуальные рекомендации."
        : isEn
        ? "Clear results and tailored recommendations."
        : isTr
        ? "Anlaşılır sonuçlar ve size özel tedavi önerileri."
        : isAr
        ? "نتائج واضحة مع إرشادات وتوصيات علاجية مخصصة."
        : "Klare Ergebnisse und individuelle Empfehlungen.",
    },
  ];

  // ── Section 4: Indications List matching Photo 2 ──
  const indicationsCol1 = isUz
    ? [
        "Bosh miya va asab tizimi",
        "Umurtqa pog'onasi va bo'g'imlar",
        "Yurak va qon aylanish tizimi",
        "O'pka va nafas yo'llari",
        "Qorin bo'shlig'i a'zolari va hazm qilish",
      ]
    : isRu
    ? [
        "Головной мозг и нервная система",
        "Позвоночник и суставы",
        "Сердце и кровообращение",
        "Легкие и дыхательные пути",
        "Органы брюшной полости и пищеварение",
      ]
    : isEn
    ? [
        "Brain and nervous system",
        "Spine and musculoskeletal joints",
        "Heart and cardiovascular system",
        "Lungs and respiratory tract",
        "Abdominal organs and digestion",
      ]
    : isTr
    ? [
        "Beyin ve sinir sistemi",
        "Omurga ve eklemler",
        "Kalp ve dolaşım sistemi",
        "Akciğerler ve solunum yolları",
        "Karın organları ve sindirim",
      ]
    : isAr
    ? [
        "الدماغ والجهاز العصبي",
        "العمود الفقري والمفاصل",
        "القلب وجهاز الدوران",
        "الرئتان والجهاز التنفسي",
        "أعضاء البطن والجهاز الهضمي",
      ]
    : [
        "Gehirn und Nervensystem",
        "Wirbelsäule und Gelenke",
        "Herz und Kreislauf",
        "Lunge und Atemwege",
        "Bauchorgane und Verdauung",
      ];

  const indicationsCol2 = isUz
    ? [
        "Onkologiyani erta aniqlash",
        "Yallig'lanish jarayonlari va infeksiyalar",
        "Gormonal va metabolik buzilishlar",
        "Qon tomirlari va qon ta'minoti",
        "Sport tibbiyoti tekshiruvlari",
      ]
    : isRu
    ? [
        "Ранняя диагностика онкологии",
        "Воспалительные процессы и инфекции",
        "Гормональные и метаболические нарушения",
        "Сосуды и кровоснабжение",
        "Спортивно-медицинские обследования",
      ]
    : isEn
    ? [
        "Early cancer detection screening",
        "Inflammatory conditions and infections",
        "Hormonal and metabolic disorders",
        "Vascular health and blood circulation",
        "Sports medicine evaluations",
      ]
    : isTr
    ? [
        "Erken kanser teşhisi",
        "İltihaplar ve enfeksiyonlar",
        "Hormon ve metabolizma hastalıkları",
        "Damarlar ve kan dolaşımı",
        "Spor hekimliği muayeneleri",
      ]
    : isAr
    ? [
        "الكشف المبكر عن الأورام",
        "الالتهابات والعدوى",
        "اضطرابات الغدد والتمثيل الغذائي",
        "الأوعية الدموية والتروية",
        "فحوصات الطب الرياضي",
      ]
    : [
        "Krebsfrüherkennung",
        "Entzündungen und Infektionen",
        "Hormon- und Stoffwechselerkrankungen",
        "Gefäße und Durchblutung",
        "Sportmedizinische Untersuchungen",
      ];




  return {
    heroData,
    procedures,
    processSteps,
    indicationsCol1,
    indicationsCol2,
  };
}
