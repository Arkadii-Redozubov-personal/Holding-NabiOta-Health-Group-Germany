"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Calendar,
  Clock,
  CheckCircle2,
  ChevronRight,
  Heart,
  Activity,
  FileText,
  User,
  Phone,
  Sparkles,
  ShieldCheck,
  Stethoscope,
  Microscope,
  X,
  Info,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SupportedLocale } from "@/lib/i18n";
import { businessAreas } from "@/data/areas";
import { DiagnosticsCompanySection } from "@/components/sections/DiagnosticsCompanySection";

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

interface Props {
  locale?: SupportedLocale;
}

export function DiagnostikPageComponent({ locale = "de" }: Props) {
  const isRu = locale === "ru";
  const isEn = locale === "en";
  const isTr = locale === "tr";
  const isAr = locale === "ar";

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedProcedure, setSelectedProcedure] = useState<ProcedureModalData | null>(null);

  // Keyboard escape listener and body scroll lock for modal
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSelectedProcedure(null);
      }
    }
    if (selectedProcedure) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProcedure]);

  const area = businessAreas.find((a) => a.slug === "diagnostik") || {
    id: "diagnostik",
    slug: "diagnostik",
    title: "Diagnostik",
    subtitle: "Präzisionstechnologie für fundierte Befunde",
    description:
      "Hochmoderne bildgebende Diagnostik mit CT, MRT und digitalem Röntgen für frühzeitige und exakte therapeutische Entscheidungen.",
    image: "/images/services/diagnostik.webp",
  };

  // ── Hero Content ──
  const heroData = {
    title: isRu ? "Диагностика" : isEn ? "Diagnostics" : isTr ? "Tanı ve Görüntüleme" : isAr ? "التشخيص والتصوير الطبي" : "Diagnostik",
    subtitle: isRu
      ? "Высокотехнологичная визуализация экспертного уровня"
      : isEn
      ? "High-Precision Diagnostic Imaging"
      : isTr
      ? "Kesin Teşhisler İçin İleri Teknoloji ve Hassasiyet"
      : isAr
      ? "تقنيات فائقة الدقة لتشخيص سريري موثوق"
      : "Präzisionstechnologie für fundierte Befunde",
    description: isRu
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
        title: isRu ? "3-Тесла МРТ" : isEn ? "3-Tesla MRI" : isTr ? "3-Tesla MR" : isAr ? "رنين مغناطيسي 3 تسلا" : "3-Tesla-MRT",
        sub: isRu ? "Макс. детализация" : isEn ? "High-Field Precision" : isTr ? "Yüksek Alan Hassasiyeti" : isAr ? "دقة متناهية المجال" : "High-Field Präzision",
      },
      {
        icon: <Clock className="w-5 h-5 text-[#ECCF96]" />,
        title: "< 24h",
        sub: isRu ? "Сроки заключения" : isEn ? "Report Turnaround" : isTr ? "Rapor Teslim Süresi" : isAr ? "تسليم التقرير الطبي" : "Befunderstellung",
      },
      {
        icon: <ShieldCheck className="w-5 h-5 text-[#ECCF96]" />,
        title: "Low-Dose",
        sub: isRu ? "Бережная КТ" : isEn ? "Minimal Dose CT" : isTr ? "Düşük Dozlu BT" : isAr ? "أشعة مقطعية بجرعة دنيا" : "Schonende CT",
      },
    ],
  };

  // ── Section 1: 6 Modality Cards matching Photo 1 & Client PDF ──
  const procedures: ProcedureModalData[] = [
    {
      id: "mrt",
      badge: "High-Field 3T",
      title: isRu ? "3-Тесла МРТ" : isEn ? "3-Tesla MRI" : isTr ? "3-Tesla MR" : isAr ? "الرنين المغناطيسي 3 تسلا" : "3-Tesla-MRT",
      subtitle: isRu
        ? "Высокоразрешающая томография мягких тканей, ЦНС и суставов"
        : isEn
        ? "High-Resolution Cross-Sectional MRI for Soft Tissue, CNS & Joints"
        : isTr
        ? "Yumuşak doku, merkezi sinir sistemi ve eklemler için yüksek çözünürlüklü 3T kesitsel tanı"
        : isAr
        ? "تصوير مقطعي عالي الدقة 3 تسلا للأنسجة الرخوة والجهاز العصبي المركزي والمفاصل"
        : "Hochauflösende 3T-Schnittbilddiagnostik für Weichteile, ZNS und Gelenke",
      desc: isRu
        ? "МРТ высокого разрешения для детальной визуализации мягких тканей и ЦНС."
        : isEn
        ? "High-resolution 3T imaging for CNS, spine, and joints."
        : isTr
        ? "Yumuşak dokular, beyin-omurilik ve eklemler için yüksek çözünürlüklü 3T görüntüleme."
        : isAr
        ? "تصوير 3 تسلا عالي الاستبانة للجهاز العصبي المركزي والمفاصل والأنسجة الرخوة."
        : "Hochauflösende 3T-Bilder für Weichteile, ZNS und Gelenke.",
      fullDesc: isRu
        ? "Высокопольная 3-Тесла МРТ обеспечивает максимальную пространственную детализацию без использования ионизирующего излучения. Современные многоканальные катушки и широкий туннель (70 см) гарантируют комфорт и превосходную визуализацию нервной системы, суставов, хрящей и органов брюшной полости."
        : isEn
        ? "University-grade 3-Tesla high-field MRI delivers outstanding spatial resolution with zero ionizing radiation. Featuring advanced multi-channel coils and a patient-friendly 70 cm wide-bore tunnel, it cleanly differentiates delicate neurovascular, cartilage, and abdominal structures."
        : isTr
        ? "3-Tesla yüksek alanlı manyetik rezonans tomografisi, iyonlaştırıcı radyasyon riski olmadan üstün görüntü kalitesi sağlar. Modern çok kanallı sargı teknolojisi ve 70 cm genişliğindeki ferah tünel sayesinde sinir sistemi, kıkırdak ve yumuşak dokuların en ince ayrıntıları güvenle incelenir."
        : isAr
        ? "يوفر التصوير بالرنين المغناطيسي عالي المجال 3 تسلا دقة تصويرية فائقة دون أدنى تعرض للإشعاع المؤين. بفضل تقنية الملفات متعددة القنوات والنفق الرحب بقطر 70 سم، يتم الكشف بوضوح استثنائي عن أدق التراكيب العصبية والغضاريف وأنسجة البطن."
        : "Die 3-Tesla-Hochfeld-Magnetresonanztomographie bietet eine herausragende Bildauflösung ohne jegliche Belastung durch ionisierende Strahlung. Dank modernster Mehrkanal-Spulentechnologie und einem patientenfreundlichen Wide-Bore-Tunnel (70 cm) werden selbst feinste Strukturen des Nervensystems, des Knorpels und der Weichteile exakt differenziert.",
      indicationsTitle: isRu ? "Ключевые показания (по PDF)" : isEn ? "Key Clinical Indications (PDF)" : isTr ? "Klinik Odaklar ve Endikasyonlar" : isAr ? "دواعي الفحص والمجالات السريرية" : "Klinische Schwerpunkte & Indikationen",
      indications: isRu
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
      standards: isRu
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
      title: isRu ? "Low-Dose КТ" : isEn ? "Low-Dose CT" : isTr ? "Düşük Dozlu BT" : isAr ? "الأشعة المقطعية منخفضة الجرعة" : "Low-Dose CT",
      subtitle: isRu
        ? "Быстрая послойная 3D-томография с ультранизкой лучевой нагрузкой"
        : isEn
        ? "Ultra-Fast 3D Volumetric CT with Iterative Dose Reduction"
        : isTr
        ? "İteratif doz azaltımı ile iskelet ve organların hızlı 3D kesitsel tomografisi"
        : isAr
        ? "تصوير مقطعي ثلاثي الأبعاد فائق السرعة مع تقليل جرعة الإشعاع التكراري"
        : "Schnelle und schonende Querschnittsbilder mit reduzierter Dosis",
      desc: isRu
        ? "Низкодозовая послойная 3D-томография скелета и внутренних органов."
        : isEn
        ? "Fast, low-radiation cross-sectional 3D imaging."
        : isTr
        ? "Düşük radyasyonla kemik yapıları ve iç organların hızlı 3D görüntülemesi."
        : isAr
        ? "تصوير مقطعي سريع للجسد والأعضاء الداخلية بجرعات إشعاعية مخفضة."
        : "Schnelle und schonende Querschnittsbilder mit reduzierter Dosis.",
      fullDesc: isRu
        ? "Многосрезовая компьютерная томография с алгоритмами итеративной реконструкции позволяет сократить дозу облучения до физического минимума при максимальной чёткости. За считанные секунды формируются трехмерные модели скелета, органов грудной клетки и брюшной полости."
        : isEn
        ? "Multi-detector computed tomography utilizing modern iterative dose-reduction algorithms minimizes radiation exposure while delivering pristine 3D cross-sectional volume data of the skeletal frame, thoracic cavity, and abdominal organs in seconds."
        : isTr
        ? "Çok kesitli bilgisayarlı tomografimiz (BT), modern iteratif rekonstrüksiyon algoritmalarıyla radyasyon maruziyetini asgari seviyeye indirir. Kemik yapıları, göğüs kafesi ve batın organlarının üç boyutlu detaylı modelleri saniyeler içinde elde edilir."
        : isAr
        ? "تستخدم الأشعة المقطعية متعددة الكواشف خوارزميات إعادة البناء التكرارية الحديثة لتقليل الجرعة الإشعاعية إلى أدنى حد ممكن، منتجةً نماذج حجمية ثلاثية الأبعاد للعظام والقفص الصدري والبطن خلال ثوانٍ معدودة."
        : "Unsere Computertomographie nutzt modernste iterative Rekonstruktionsalgorithmen, um die Strahlendosis auf ein absolutes Minimum zu senken. Innerhalb weniger Sekunden entstehen lückenlose dreidimensionale Bilddaten von Knochenstrukturen, Thorax und Abdomen für eine verlässliche Akut- und Verlaufsbeurteilung.",
      indicationsTitle: isRu ? "Ключевые показания (по PDF)" : isEn ? "Key Clinical Indications (PDF)" : isTr ? "Klinik Odaklar ve Endikasyonlar" : isAr ? "دواعي الفحص والمجالات السريرية" : "Klinische Schwerpunkte & Indikationen",
      indications: isRu
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
      standards: isRu
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
      title: isRu ? "Цифровой рентген" : isEn ? "Digital X-Ray" : isTr ? "Dijital Röntgen" : isAr ? "الأشعة السينية الرقمية" : "Digitales Röntgen",
      subtitle: isRu
        ? "Мгновенная цифровая рентгенография скелета и органов грудной клетки"
        : isEn
        ? "Direct Digital Radiography with Flat-Panel Detectors"
        : isTr
        ? "Tüm hareket sistemi ve toraks için direkt dijital düz panel radyografi"
        : isAr
        ? "تصوير إشعاعي رقمي مباشر للجهاز الحركي بالكامل والصدر بكواشف مسطحة"
        : "Volldigitale Röntgendiagnostik (Rö) des gesamten Bewegungsapparats",
      desc: isRu
        ? "Быстрое обследование с минимальной лучевой нагрузкой."
        : isEn
        ? "Rapid examination with minimal radiation exposure."
        : isTr
        ? "Minimum radyasyon maruziyeti ile hızlı ve net iskelet taraması."
        : isAr
        ? "فحص سريع ومباشر بأدنى مستويات التعرض الإشعاعي."
        : "Schnelle Untersuchung mit geringer Strahlenbelastung.",
      fullDesc: isRu
        ? "Плоскопанельные цифровые детекторы обеспечивают снимки скелета и грудной клетки в высоком разрешении за доли секунды. Цифровые снимки мгновенно передаются в единый защищенный архив PACS и доступны оперирующим хирургам и профильным врачам холдинга."
        : isEn
        ? "Direct digital flat-panel detectors yield ultra-sharp radiographs in fractions of a second with minimized radiation exposure. Radiographs are immediately transferred into the group's secure PACS for instant access by attending surgeons and physicians."
        : isTr
        ? "Katı hal dijital dedektörleri saniyenin kesirlerinde yüksek çözünürlüklü röntgen çekimleri sağlar. Çekilen görüntüler anında NabiOta PACS dijital arşivine aktarılır ve uzman hekimlerimiz ile cerrahlarımız tarafından eş zamanlı incelenebilir."
        : isAr
        ? "تتيح الكواشف الرقمية ذات اللوحة المسطحة التقاط صور إشعاعية بالغة الوضوح في أجزاء من الثانية بأقل جرعة إشعاعية. تتاح الصور فوراً في نظام الأرشفة الرقمي PACS للاطلاع المباشر من قِبل الجراحين والأطباء المعالجين."
        : "Volldigitale Festkörper-Detektoren ermöglichen strahlungsarme Aufnahmen in Sekundenbruchteilen. Die Röntgenbilder stehen sofort im digitalen PACS-Archiv zur Verfügung und können direkt von den behandelnden Fachärzten und Chirurgen der Gruppe eingesehen werden.",
      indicationsTitle: isRu ? "Ключевые показания (по PDF)" : isEn ? "Key Clinical Indications (PDF)" : isTr ? "Klinik Odaklar ve Endikasyonlar" : isAr ? "دواعي الفحص والمجالات السريرية" : "Klinische Schwerpunkte & Indikationen",
      indications: isRu
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
      standards: isRu
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
      title: isRu ? "УЗИ & Допплер" : isEn ? "Ultrasound & Doppler" : isTr ? "Ultrason & Doppler" : isAr ? "الموجات فوق الصوتية والدوبلر" : "Ultraschall & Doppler",
      subtitle: isRu
        ? "3D/4D сонография, цветовое дуплексное и допплеровское сканирование"
        : isEn
        ? "3D/4D Ultrasound & Color-Coded Duplex Vascular Sonography"
        : isTr
        ? "Medikal endikasyonlu sonografi, 3D/4D yöntemleri ve renkli damar doppleri"
        : isAr
        ? "تخطيط الصدى السريري، تقنيات 3D/4D وتصوير الأوعية بالدوبلر الملون"
        : "Medizinisch indizierte Sonographie, 3D/4D-Verfahren & Gefäßdoppler",
      desc: isRu
        ? "Бережно, надежно и универсально для органов и сосудов."
        : isEn
        ? "Gentle, reliable, and versatile application for vessels & organs."
        : isTr
        ? "İç organlar ve damarlar için nazik, güvenilir ve radyasyonsuz inceleme."
        : isAr
        ? "فحص آمن، لطيف ودقيق للأعضاء الداخلية والأوعية الدموية."
        : "Schonend, zuverlässig und vielseitig für Organe und Gefäße.",
      fullDesc: isRu
        ? "Ультразвуковые аппараты экспертного класса с многочастотными датчиками обеспечивают детальную оценку органов брюшной полости, мягких тканей, щитовидной железы и сосудов. Цветовое дуплексное сканирование позволяет безошибочно оценить скорость и характер кровотока."
        : isEn
        ? "High-end ultrasound platforms equipped with multi-frequency probes allow pain-free, radiation-free real-time examination. Color duplex sonography accurately assesses vascular flow dynamics, vessel walls, and organ parenchymal perfusion."
        : isTr
        ? "Yüksek çözünürlüklü çok frekanslı problarla donatılmış modern ultrason cihazlarımız, tamamen ağrısız ve radyasyonsuz gerçek zamanlı inceleme sunar. Renkli dubleks ve doppler sonografi ile kan akışı, damar duvarları ve organ dokuları hassasiyetle değerlendirilir."
        : isAr
        ? "توفر أجهزة السونار المتطورة ذات المجسات متعددة الترددات فحصاً غير جراحي وخالياً تماماً من الألم والإشعاع في الوقت الفعلي. يحلل الدوبلر الملون بدقة تدفق الدم في الأوعية، حالة الجدران الوعائية، وتروية أنسجة الأعضاء الداخلية."
        : "Modernste Ultraschallgeräte mit hochauflösenden multifrequenten Sonden ermöglichen eine schmerz- und strahlungsfreie Untersuchung in Echtzeit. Farbcodierte Duplex- und Dopplersonographie analysieren Durchblutung, Gefäßwände und Strömungsverhältnisse präzise.",
      indicationsTitle: isRu ? "Ключевые показания (по PDF)" : isEn ? "Key Clinical Indications (PDF)" : isTr ? "Klinik Odaklar ve Endikasyonlar" : isAr ? "دواعي الفحص والمجالات السريرية" : "Klinische Schwerpunkte & Indikationen",
      indications: isRu
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
      standards: isRu
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
      title: isRu ? "Нейрофизиология" : isEn ? "Neurophysiology" : isTr ? "Nörofizyoloji" : isAr ? "الفسيولوجيا العصبية" : "Neurophysiologie",
      subtitle: isRu
        ? "Функциональная диагностика нервов, мышц и центральной нервной системы"
        : isEn
        ? "Electrophysiological Diagnostics of Nerves, Musculature & CNS"
        : isTr
        ? "Periferik sinir sistemi, kaslar ve merkezi sinir sistemi fonksiyonel tanıları"
        : isAr
        ? "التشخيص الوظيفي للجهاز العصبي المحيطي والعضلات والجهاز العصبي المركزي"
        : "Funktionsdiagnostik des peripheren Nervensystems, der Muskulatur und des ZNS",
      desc: isRu
        ? "ЭМГ, ЭНГ, ЭЭГ и вызванные потенциалы (VEP, AEP, SEP)."
        : isEn
        ? "EMG, ENG, EEG, and evoked potentials (VEP, AEP, SEP)."
        : isTr
        ? "EMG, ENG, EEG ve uyarılmış potansiyeller (VEP, AEP, SEP)."
        : isAr
        ? "تخطيط العضلات والأعصاب والدماغ والجهود المستحثة (VEP, AEP, SEP)."
        : "EMG, ENG, EEG und evozierte Potenziale (VEP, AEP, SEP).",
      fullDesc: isRu
        ? "В соответствии с пунктом 4 PDF холдинга, отделение нейрофизиологии оснащено для объективной оценки биоэлектрической активности нервов и мышц. Электромиография (ЭМГ), электронейрография (ЭНГ), ЭЭГ и вызванные потенциалы обеспечивают выверенные неврологические диагнозы."
        : isEn
        ? "According to Section 4 of the holding guidelines, our neurophysiology unit provides dedicated examination suites for evaluating nerve, muscle, and CNS functions. EMG, nerve conduction velocity (ENG), EEG, and evoked potentials (AEP, VEP, SEP) support definitive clinical management."
        : isTr
        ? "Holding PDF Kısım 4 gereğince, nörofizyoloji birimimiz sinir, kas ve beyin fonksiyonlarının objektif değerlendirilmesi için özel muayene istasyonlarıyla donatılmıştır. Elektromiyografi (EMG), elektronörografi (ENG), elektroensefalografi (EEG) ve uyarılmış potansiyeller (AEP, VEP, SEP) ile kesin klinik tanılar konulur."
        : isAr
        ? "وفقاً للبند 4 من لوائح الهولدينغ، تضم وحدة الفسيولوجيا العصبية محطات فحص متقدمة للتقييم الموضوعي لوظائف الأعصاب والعضلات والدماغ. يشمل ذلك تخطيط العضلات (EMG)، سرعة التوصيل العصبي (ENG)، تخطيط الدماغ (EEG)، والجهود المستحثة (AEP, VEP, SEP)."
        : "Gemäß Punkt 4 des Holdings umfasst die Neurophysiologie spezifische Untersuchungsplätze zur objektiven Beurteilung von Nerven-, Muskel- und zentralnervösen Funktionen. Elektromyographie (EMG), Elektroneurographie (ENG), Elektroenzephalographie (EEG) und evozierte Potenziale (AEP, VEP, SEP) sichern fundierte therapeutische Entscheidungen.",
      indicationsTitle: isRu ? "Ключевые показания (по PDF)" : isEn ? "Key Clinical Indications (PDF)" : isTr ? "Klinik Odaklar ve Endikasyonlar" : isAr ? "دواعي الفحص والمجالات السريرية" : "Klinische Schwerpunkte & Indikationen",
      indications: isRu
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
      standards: isRu
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
      title: isRu ? "Лаборатория & Пробы" : isEn ? "Laboratory & POCT" : isTr ? "Laboratuvar & POCT" : isAr ? "المختبر الطبي والفحوصات الفورية" : "Labordiagnostik & Probenmanagement",
      subtitle: isRu
        ? "Организация забора проб, температурная логистика и экспресс-анализы POCT"
        : isEn
        ? "Sample Lifecycle Management, Cold-Chain Transport & Rapid POCT"
        : isTr
        ? "Yapılandırılmış numune alımı, kesintisiz numune lojistiği ve acil POCT"
        : isAr
        ? "إدارة متكاملة للعينات، لوجستيات مبردة وتحاليل فورية (POCT)"
        : "Strukturierte Probengewinnung, lückenlose Probenlogistik & Notfall-POCT",
      desc: isRu
        ? "Клиническая химия, гематология и экспресс-анализы."
        : isEn
        ? "Clinical biochemistry, hematology, and rapid POCT markers."
        : isTr
        ? "Klinik biyokimya, hematoloji ve anında Point-of-Care tanıları."
        : isAr
        ? "الكيمياء السريرية، أمراض الدم وعلامات الطوارئ الفورية."
        : "Klinische Chemie, Hämatologie und Point-of-Care-Diagnostik.",
      fullDesc: isRu
        ? "Согласно требованиям пункта 4 NabiOta Diagnostics GmbH, холдинг организует стандартизированный цикл: однозначная штрихкод-идентификация проб, забор, центрифугирование и температурная логистика. Встроенная экспресс-лаборатория POCT обеспечивает ключевые анализы за считанные минуты."
        : isEn
        ? "Under Section 4 of NabiOta Diagnostics GmbH, the group manages the complete sample lifecycle: barcoded sample tracking, standardized collection, pre-analytical preparation, and temperature-controlled logistics. On-site POCT testing delivers critical biomarkers within minutes."
        : isTr
        ? "NabiOta Diagnostics GmbH Kısım 4 yönergeleri uyarınca şirketimiz numune sürecinin tamamını yönetir: Barkodlu numune kimliklendirmesi, kalite güvenceli alım, usulüne uygun hazırlık ve ısı kontrollü taşıma. Bünyemizdeki entegre POCT acil laboratuvarı, hayati parametreleri dakikalar içinde sonuçlandırır."
        : isAr
        ? "بموجب المادة 4 لشركة NabiOta Diagnostics GmbH، تنظم الشركة دورة العينات السريرية بأكملها: التتبع بالباركود الموحد، السحب المطابق لمعايير الجودة، المعالجة السليمة، والنقل الخاضع للتحكم الحراري. يوفر مختبر POCT المدمج العلامات الحيوية خلال دقائق."
        : "Gemäß den Vorgaben von Punkt 4 der NabiOta Diagnostics GmbH organisiert die Gesellschaft den gesamten Probenprozess: eindeutige Probenidentifikation, qualitätsgesicherte Entnahme, sachgerechte Aufbereitung und temperaturgeführten Transport. Ein vor Ort integriertes POCT-Sofortlabor liefert vitale Laborparameter innerhalb von Minuten.",
      indicationsTitle: isRu ? "Ключевые показания (по PDF)" : isEn ? "Key Clinical Indications (PDF)" : isTr ? "Klinik Odaklar ve Endikasyonlar" : isAr ? "دواعي الفحص والمجالات السريرية" : "Klinische Schwerpunkte & Indikationen",
      indications: isRu
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
      standards: isRu
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
      title: isRu ? "Запись на прием" : isEn ? "Appointment Booking" : isTr ? "Randevu Alma" : isAr ? "حجز الموعد" : "Terminvereinbarung",
      desc: isRu
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
      title: isRu ? "Обследование" : isEn ? "Examination" : isTr ? "Muayene & Tarama" : isAr ? "الفحص والتصوير" : "Untersuchung",
      desc: isRu
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
      title: isRu ? "Анализ и заключение" : isEn ? "Evaluation" : isTr ? "Değerlendirme" : isAr ? "التحليل وإعداد التقرير" : "Auswertung",
      desc: isRu
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
      title: isRu ? "Личная консультация" : isEn ? "Personal Consultation" : isTr ? "Bireysel Görüşme" : isAr ? "الاستشارة الطبية الفردية" : "Persönliches Gespräch",
      desc: isRu
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
  const indicationsCol1 = isRu
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

  const indicationsCol2 = isRu
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

  // ── Section 5: Testimonials Carousel matching Photo 2 ──
  const testimonials = [
    {
      quote: isRu
        ? "Профессиональная и чуткая забота мне очень помогла. Благодаря быстрой и точной диагностике верное лечение было начато без промедления."
        : isEn
        ? "The professional and empathetic care helped me tremendously. Thanks to rapid, high-precision diagnostics, the right therapy was initiated immediately."
        : isTr
        ? "Gördüğüm profesyonel ve yakın ilgi bana çok yardımcı oldu. Hızlı ve isabetli tanı sayesinde doğru tedaviye vakit kaybetmeden başlandı."
        : isAr
        ? "الرعاية المهنية والاهتمام الإنساني ساعداني بشكل لا يُصدق. بفضل التشخيص السريع والدقيق، تم البدء في العلاج الصحيح دون أدنى تأخير."
        : "Die professionelle und einfühlsame Betreuung hat mir sehr geholfen. Dank der schnellen und präzisen Diagnostik konnte die richtige Therapie rasch eingeleitet werden.",
      author: "Anna Müller",
      role: isRu ? "Пациентка" : isEn ? "Patient" : isTr ? "Hasta" : isAr ? "مريضة" : "Patientin",
      patientImage: "/images/diagnostik/patient-anna.webp",
      scanImage: "/images/diagnostik/scan-review.webp",
    },
    {
      quote: isRu
        ? "Впечатляющее качество томографии 3 Тесла и подробное разъяснение каждого снимка врачом-рентгенологом. Полное чувство уверенности."
        : isEn
        ? "Impressive 3-Tesla image resolution and clear explanation of every slice by the radiologist. Total clinical confidence."
        : isTr
        ? "3-Tesla MR cihazının görüntü kalitesi ve radyoloğun tüm bulguları anlaşılır şekilde izah etmesi son derece güven vericiydi."
        : isAr
        ? "دقة التصوير الاستثنائية للرنين المغناطيسي 3 تسلا والشرح الوافي من طبيب الأشعة منحاني طمأنينة سريرية كاملة."
        : "Beeindruckende Bildauflösung des 3-Tesla-MRT und verständliche Erläuterung aller Befunde durch den Radiologen. Höchste Sicherheit.",
      author: "Thomas Becker",
      role: isRu ? "Пациент" : isEn ? "Patient" : isTr ? "Hasta" : isAr ? "مريض" : "Patient",
      patientImage: "/images/testimonials/thomas-becker.webp",
      scanImage: "/images/services/diagnostik.webp",
    },
    {
      quote: isRu
        ? "Очень быстрое получение заключения в течение суток. Мой хирург смог моментально спланировать операцию благодаря цифровому доступу."
        : isEn
        ? "Report ready in less than 24 hours. My orthopedist accessed the full digital scans immediately to plan targeted therapy."
        : isTr
        ? "Rapor 24 saatin altında teslim edildi. Ortopedistim dijital görüntülere derhal erişip ameliyat planlamasını hemen yaptı."
        : isAr
        ? "تم استلام التقرير الطبي في أقل من 24 ساعة. تمكن جراح العظام من فحص الصور الرقمية فوراً وبدء خطة العلاج الموجهة."
        : "Befundbereitstellung in unter 24 Stunden. Mein Orthopäde konnte dank digitalem Bildzugang direkt die gezielte Therapie planen.",
      author: "Elena Fischer",
      role: isRu ? "Пациентка" : isEn ? "Patient" : isTr ? "Hasta" : isAr ? "مريضة" : "Patientin",
      patientImage: "/images/testimonials/elena-fischer.webp",
      scanImage: "/images/diagnostik/scan-review.webp",
    },
  ];

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5]">
      <Header currentLocale={locale} />

      {/* ── Page Hero with integrated breadcrumb ── */}
      <PageHero
          locale={locale}
        breadcrumb={
          <Breadcrumb
            items={[
              { label: isRu ? "Главная" : isEn ? "Home" : isTr ? "Ana Sayfa" : isAr ? "الرئيسية" : "Startseite", href: `/${locale}` },
              {
                label: isRu ? "Направления холдинга" : isEn ? "Divisions" : isTr ? "Şirket Alanları" : isAr ? "قطاعات المجموعة" : "Unternehmensbereiche",
                href: `/${locale}/areas`,
              },
              { label: heroData.title },
            ]}
          />
        }
        title={
          <>
            {heroData.title}
            <span className="block text-xl sm:text-2xl text-[#ECCF93] font-light mt-1 font-serif break-words [overflow-wrap:anywhere] hyphens-auto">
              {heroData.subtitle}
            </span>
          </>
        }
        description={heroData.description}
        imageSrc={area.image || "/images/services/diagnostik.webp"}
        imageAlt="NabiOta Diagnostics High-End Medical Imaging"
        badges={heroData.badges}
      />

      <main className="flex-1 bg-[#FAF8F5]">
        
        {/* ══════════════════════════════════════════════════════════
            SECTION 1 (PHOTO 2 TOP): UNSERE DIAGNOSTIKVERFAHREN
            - Left: Eyebrow, Title, Description, Button
            - Right: 6 Modality Cards (MRT, CT, Ultraschall, Röntgen, Labor, Kardio)
        ══════════════════════════════════════════════════════════ */}
        <section className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-8 sm:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Header Column */}
            <div className="lg:col-span-4 space-y-4 pt-1">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.24em] text-[#B89650] uppercase block">
                {isRu ? "НАШИ МЕТОДЫ ДИАГНОСТИКИ" : isEn ? "OUR DIAGNOSTIC PROCEDURES" : isTr ? "TANI YÖNTEMLERİMİZ" : isAr ? "طرق الفحوصات والتشخيص لدينا" : "UNSERE DIAGNOSTIKVERFAHREN"}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[38px] text-[#132218] font-normal leading-[1.18]">
                {isRu
                  ? "Современные методы для точных результатов"
                  : isEn
                  ? "Advanced Methods for Accurate Results"
                  : isTr
                  ? "Kesin Sonuçlar İçin Modern Yöntemler"
                  : isAr
                  ? "تقنيات متقدمة لنتائج تشخيصية دقيقة"
                  : "Moderne Verfahren für genaue Ergebnisse"}
              </h2>

              <p className="text-xs sm:text-[13px] text-[#556358] leading-relaxed font-sans max-w-md">
                {isRu
                  ? "Наша диагностика объединяет передовую медицинскую технику с многолетним клиническим опытом. Это позволяет распознавать заболевания на ранних стадиях и назначать оптимальную терапию."
                  : isEn
                  ? "Our diagnostic division unites cutting-edge medical technology with decades of clinical experience. We detect conditions early, evaluate them accurately, and establish the best possible treatment."
                  : isTr
                  ? "Tanı birimimiz en son tıbbi teknolojiyi uzun yıllara dayanan klinik tecrübeyle birleştirir. Böylece hastalıkları erken aşamada teşhis edip sizin için en iyi tedaviyi başlatabiliyoruz."
                  : isAr
                  ? "يجمع قسم التشخيص الطبي لدينا بين أحدث التقنيات الطبية والخبرة السريرية العريقة. هذا يتيح لنا الكشف عن الأمراض مبكراً وبدء أفضل مسار علاجي متاح."
                  : "Unsere Diagnostik vereint modernste Medizintechnik mit langjähriger Erfahrung. So können wir Erkrankungen frühzeitig erkennen, präzise beurteilen und die bestmögliche Therapie für Sie einleiten."}
              </p>

              <div className="pt-2">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D5B878] text-[#142318] hover:bg-[#D5B878] hover:text-[#0C1C11] font-semibold text-xs tracking-wide transition-all shadow-sm group bg-white/70"
                >
                  <span>{isRu ? "Все процедуры →" : isEn ? "View all procedures →" : isTr ? "Tüm Yöntemleri Gör →" : isAr ? "عرض جميع الإجراءات التشخيصية ←" : "Alle Verfahren ansehen →"}</span>
                </Link>
              </div>
            </div>

            {/* Right 6 Cards Grid (2 rows x 3 columns) - Compact height matching Photo 1 */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4">
              {procedures.map((proc) => {
                const ProcIcon = proc.icon;
                return (
                  <div
                    key={proc.id}
                    onClick={() => setSelectedProcedure(proc)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedProcedure(proc);
                      }
                    }}
                    className="bg-white rounded-2xl border border-[#EDE8DE] hover:border-[#D5B878]/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(12,43,27,0.1)] transition-all duration-300 p-2 sm:p-2.5 flex flex-col justify-between group hover:-translate-y-0.5 cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-[#D5B878]"
                  >
                    <div>
                      {/* Compact Inset Image */}
                      <div className="relative aspect-[16/7.8] w-full rounded-xl overflow-hidden bg-neutral-900">
                        <Image
                          src={proc.image}
                          alt={proc.title}
                          fill
                          className="object-cover group-hover:scale-104 transition-transform duration-500"
                        />
                      </div>

                      {/* Compact Bottom Content Row (Icon + Title/Desc + Arrow) */}
                      <div className="flex items-center gap-2.5 pt-2.5 pb-0.5 px-1">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#08170D] border border-[#D5B878]/60 flex items-center justify-center text-[#ECCF96] shrink-0 shadow-xs">
                          <ProcIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.6]" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-serif text-[13.5px] sm:text-[14.5px] text-[#142318] font-medium leading-tight group-hover:text-[#B89650] transition-colors truncate">
                            {proc.title}
                          </h3>
                          <p className="text-[10px] sm:text-[10.5px] text-[#556358] leading-tight line-clamp-1 mt-0.5 font-sans">
                            {proc.desc}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProcedure(proc);
                          }}
                          aria-label={proc.title}
                          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[#EDE8DE] bg-[#FAF8F5] group-hover:bg-[#D5B878] group-hover:border-[#D5B878] flex items-center justify-center text-[#6E756D] group-hover:text-[#0C1C11] shrink-0 transition-all cursor-pointer"
                        >
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 2 (PHOTO 3): FULL-WIDTH BANNER
            "MODERNE TECHNOLOGIE - Mehr als nur Bilder – klare Antworten."
            - Full-width edge-to-edge
            - Left: Scanner room image
            - Center: Heading & Description
            - Right: 3 Stats (3T, <24h, 99%) + Crisp Botanical Leaves Background
        ══════════════════════════════════════════════════════════ */}
        <section className="w-full bg-[#08170D] text-white relative overflow-hidden border-y border-[#D5B878]/30 my-8 sm:my-12">
          {/* Botanical Gold Background on Right Side */}
          <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[65%] lg:w-[48%] pointer-events-none z-0 select-none overflow-hidden">
            <Image
              src="/images/botanical-gold-bg.webp"
              alt="Botanical Gold Background"
              fill
              className="object-cover object-right opacity-70"
              priority
            />
            {/* Multi-stop smooth fade from dark center into botanical-gold-bg */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#08170D] via-[#08170D]/70 to-[#08170D]/20" />
          </div>

          <div className="relative z-10 w-full flex flex-col lg:flex-row items-center">
            {/* Left Column: Scanner Image */}
            <div className="w-full lg:w-[35%] xl:w-[38%] relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[260px] sm:min-h-[300px] lg:min-h-[360px] overflow-hidden shrink-0">
              <Image
                src="/images/diagnostik/scanner-suite.webp"
                alt="NabiOta CT Scanner Suite"
                fill
                className="object-cover object-center"
                priority
              />
              {/* Seamless gradient fade into dark forest green */}
              <div className="hidden lg:block absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#08170D] to-transparent pointer-events-none z-10" />
              <div className="lg:hidden absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#08170D] to-transparent pointer-events-none z-10" />
            </div>

            {/* Middle Column: Heading & Description */}
            <div className="w-full lg:w-[42%] xl:w-[40%] p-6 sm:p-10 lg:p-12 space-y-3 relative z-10">
              <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase block">
                {isRu ? "ПЕРЕДОВЫЕ ТЕХНОЛОГИИ" : isEn ? "MODERN TECHNOLOGY" : isTr ? "MODERN TEKNOLOJİ" : isAr ? "تقنيات تشخيصية رائدة" : "MODERNE TECHNOLOGIE"}
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-[34px] text-white font-normal leading-tight">
                {isRu
                  ? "Больше чем снимки — ясные ответы."
                  : isEn
                  ? "More than Images – Clear Answers."
                  : isTr
                  ? "Yalnızca Görüntü Değil – Net Yanıtlar."
                  : isAr
                  ? "أكثر من مجرد صور – إجابات سريرية واضحة."
                  : "Mehr als nur Bilder – klare Antworten."}
              </h3>

              <p className="text-white/85 text-xs sm:text-[13.5px] leading-relaxed font-sans max-w-lg">
                {isRu
                  ? "Наше высокотехнологичное оборудование обеспечивает исключительно точную и щадящую диагностику — для максимальной уверенности, правильных решений и эффективного лечения."
                  : isEn
                  ? "Our cutting-edge equipment enables exceptionally precise and gentle diagnostics—for greater security, informed clinical decisions, and targeted therapy."
                  : isTr
                  ? "Son teknoloji cihazlarımız son derece hassas ve konforlu bir tanı süreci sunar; daha yüksek güvenlik, doğru kararlar ve hedefe yönelik tedavi için."
                  : isAr
                  ? "تتيح أجهزتنا الحديثة تشخيصاً عالي الدقة دون إجهاد للجسم – لمزيد من الأمان واتخاذ القرارات السريرية الصائبة."
                  : "Unsere hochmodernen Geräte ermöglichen eine besonders präzise und schonende Diagnostik – für mehr Sicherheit, bessere Entscheidungen und eine gezielte Behandlung."}
              </p>
            </div>

            {/* Right Column: 3 Stats separated by dividers (Photo 3) */}
            <div className="w-full lg:w-[23%] xl:w-[22%] p-6 sm:p-10 lg:p-8 lg:border-l lg:border-white/15 grid grid-cols-3 lg:grid-cols-1 gap-5 relative z-10">
              <div className="space-y-1">
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#ECCF96] font-normal leading-none block">
                  3T
                </span>
                <span className="text-[11px] sm:text-xs text-white/80 font-sans leading-tight block">
                  {isRu ? "Мощность поля МРТ" : isEn ? "MRI Magnet Strength" : isTr ? "MR Manyetik Alan Gücü" : isAr ? "قوة المجال المغناطيسي للرنين" : "MRT-Magnetfeldstärke"}
                </span>
              </div>

              <div className="space-y-1 pt-0 lg:pt-4 lg:border-t lg:border-white/10">
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#ECCF96] font-normal leading-none block">
                  &lt;24h
                </span>
                <span className="text-[11px] sm:text-xs text-white/80 font-sans leading-tight block">
                  {isRu ? "Готовность заключения" : isEn ? "Report Turnaround" : isTr ? "Rapor Teslim Süresi" : isAr ? "إعداد التقرير الطبي" : "Befunderstellung"}
                </span>
              </div>

              <div className="space-y-1 pt-0 lg:pt-4 lg:border-t lg:border-white/10">
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#ECCF96] font-normal leading-none block">
                  99%
                </span>
                <span className="text-[11px] sm:text-xs text-white/80 font-sans leading-tight block">
                  {isRu ? "Удовлетворенность пациентов" : isEn ? "Patient Satisfaction" : isTr ? "Hasta Memnuniyeti" : isAr ? "معدل رضا المرضى" : "Patientenzufriedenheit"}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 3 (PHOTO 2): UNSER DIAGNOSTIK-PROZESS (1-IN-1 DESIGN)
            - Left: Eyebrow, Title, Description, Button
            - Right: 4 Connected steps directly on background with connecting line
        ══════════════════════════════════════════════════════════ */}
        <section className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Header Area */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.24em] text-[#B89650] uppercase block">
                {isRu ? "НАШ ПРОЦЕСС ДИАГНОСТИКИ" : isEn ? "OUR DIAGNOSTIC PROCESS" : isTr ? "TANI SÜRECİMİZ" : isAr ? "مراحل المسار التشخيصي" : "UNSER DIAGNOSTIK-PROZESS"}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#132218] font-normal leading-tight">
                {isRu
                  ? "В 4 шага к ясным результатам"
                  : isEn
                  ? "In 4 Steps to Clear Results"
                  : isTr
                  ? "4 Adımda Net Sonuçlara"
                  : isAr
                  ? "في 4 خطوات نحو نتائج واضحة"
                  : "In 4 Schritten zu klaren Ergebnissen"}
              </h2>

              <p className="text-xs sm:text-[13px] text-[#556358] leading-relaxed font-sans max-w-sm">
                {isRu
                  ? "От первого обращения до получения заключения — мы бережно сопровождаем вас на каждом этапе."
                  : isEn
                  ? "From initial inquiry to diagnostic report—we guide you through every single step."
                  : isTr
                  ? "İlk başvurudan ayrıntılı rapora kadar her adımda yanınızdayız."
                  : isAr
                  ? "من الاستفسار الأول وحتى تسليم التقرير النهائي – نرعاكم في كل خطوة."
                  : "Von der ersten Untersuchung bis zum Befund – wir begleiten Sie auf jedem Schritt."}
              </p>

              <div className="pt-2">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D5B878] text-[#142318] hover:bg-[#D5B878] hover:text-[#0C1C11] font-semibold text-xs tracking-wide transition-all shadow-sm bg-transparent"
                >
                  <span>{isRu ? "Как это работает →" : isEn ? "How it works →" : isTr ? "Nasıl Çalışır →" : isAr ? "كيف تسير الإجراءات ←" : "So funktioniert es →"}</span>
                </Link>
              </div>
            </div>

            {/* Right Area: 4 Connected Steps directly on the warm cream background (Photo 2) */}
            <div className="lg:col-span-8 relative">
              {/* Subtle decorative leaf on the right edge */}
              <div className="hidden xl:block absolute -right-6 top-1/2 -translate-y-1/2 w-24 h-36 pointer-events-none opacity-20 select-none z-0">
                <svg viewBox="0 0 100 160" fill="none" className="w-full h-full text-[#2C4A34]">
                  <path d="M20 150 C 40 100, 60 60, 90 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  <path d="M40 100 C 25 85, 20 70, 35 65 C 50 60, 48 85, 40 100 Z" fill="currentColor" opacity="0.6" />
                  <path d="M60 65 C 75 50, 85 45, 80 35 C 75 25, 60 45, 60 65 Z" fill="currentColor" opacity="0.6" />
                  <path d="M75 35 C 90 20, 98 15, 95 8 C 90 2, 75 18, 75 35 Z" fill="currentColor" opacity="0.6" />
                </svg>
              </div>

              {/* Thin horizontal connecting line between step headers on desktop */}
              <div className="hidden md:block absolute top-[21px] left-[35px] right-[45px] h-[1px] bg-[#E2DDD2] z-0" />

              {/* 4 Process Step Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-6 relative z-10">
                {processSteps.map((step) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={step.num} className="flex flex-col">
                      {/* Header Row: Beige Circle Badge with Icon + Step Number */}
                      <div className="flex items-center gap-2.5">
                        <div className="w-11 h-11 rounded-full bg-[#F3EDE2] border border-[#E5DECF] shadow-xs flex items-center justify-center text-[#142318] shrink-0">
                          <StepIcon className="w-5 h-5 stroke-[1.5]" />
                        </div>
                        <span className="font-serif text-[17px] text-[#B89650] font-normal tracking-wide">
                          {step.num}
                        </span>
                      </div>

                      {/* Title & Description directly on background */}
                      <div className="mt-3.5">
                        <h3 className="font-serif text-[16px] sm:text-[17px] text-[#142318] font-medium leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-[12.5px] text-[#556358] leading-relaxed font-sans mt-1.5">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 4 (PHOTO 3): UNIFIED 2-COLUMN SECTION
            - Compact height matching Photo 3
            - Left (Deep Forest Green): "Fragen zur Diagnostik?" + consultation photo on right + button
            - Right (Pure White): "Was wir für Sie untersuchen können" + 2-col checklist with gold checkmarks
        ══════════════════════════════════════════════════════════ */}
        <section className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-14 sm:pb-20">
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#EDE8DE] shadow-[0_4px_24px_rgba(0,0,0,0.03)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Part: Deep Forest Green with consultation photo on right */}
            <div className="lg:col-span-5 relative bg-[#08170D] text-white p-6 sm:p-7 flex flex-col justify-between overflow-hidden min-h-[260px] sm:min-h-[280px]">
              {/* Background Image on Right side of the dark card */}
              <div className="absolute right-0 top-0 bottom-0 w-[55%] sm:w-[50%] overflow-hidden pointer-events-none">
                <Image
                  src="/images/diagnostik/consultation.webp"
                  alt="Doctor consultation with patient"
                  fill
                  className="object-cover object-center"
                />
                {/* Smooth horizontal gradient into dark green on left */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#08170D] via-[#08170D]/75 to-transparent" />
              </div>

              {/* Content over background on left */}
              <div className="relative z-10 max-w-[230px] sm:max-w-[250px] space-y-2">
                <h3 className="font-serif text-2xl sm:text-[27px] text-white font-normal leading-tight">
                  {isRu
                    ? "Вопросы по диагностике?"
                    : isEn
                    ? "Questions about Diagnostics?"
                    : isTr
                    ? "Tanı ile İlgili Sorularınız mı Var?"
                    : isAr
                    ? "هل لديك استفسارات حول الفحوصات؟"
                    : "Fragen zur Diagnostik?"}
                </h3>
                <p className="text-white/80 text-[11.5px] sm:text-xs font-sans leading-relaxed">
                  {isRu
                    ? "Наша команда всегда к вашим услугам и с радостью проконсультирует вас обо всех обследованиях и возможностях."
                    : isEn
                    ? "Our team is always at your service and will gladly advise you on all examinations and modalities."
                    : isTr
                    ? "Uzman ekibimiz her zaman hizmetinizde olup tüm tetkikler ve seçenekler hakkında size danışmanlık yapmaktan memnuniyet duyar."
                    : isAr
                    ? "فريقنا الاستشاري في خدمتكم دائماً ويسعده تقديم المشورة الشاملة حول جميع الفحوصات والخيارات المتاحة."
                    : "Unser Team steht Ihnen jederzeit zur Verfügung und berät Sie gerne zu allen Untersuchungen und Möglichkeiten."}
                </p>
              </div>

              <div className="relative z-10 pt-3">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#ECCF96] hover:bg-[#D5B878] text-[#0C1C11] font-semibold text-xs tracking-wide transition-all shadow-sm"
                >
                  <span>{isRu ? "Связаться с нами →" : isEn ? "Contact us →" : isTr ? "İletişime Geçin →" : isAr ? "تواصل معنا ←" : "Kontakt aufnehmen →"}</span>
                </Link>
              </div>
            </div>

            {/* Right Part: Pure White with Checklist */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-7 lg:p-8 flex flex-col justify-center">
              <span className="text-[9.5px] font-bold tracking-[0.22em] text-[#8C948D] uppercase block mb-1">
                {isRu ? "ЧАСТЫЕ ДИАГНОЗЫ И ОБСЛЕДОВАНИЯ" : isEn ? "FREQUENT DIAGNOSES & EXAMINATIONS" : isTr ? "SIK KARŞILAŞILAN TEŞHİS VE MUAYENELER" : isAr ? "أبرز مجالات الفحص والتشخيص السريري" : "HÄUFIGE DIAGNOSEN & UNTERSUCHUNGEN"}
              </span>

              <h3 className="font-serif text-xl sm:text-[23px] text-[#142318] font-normal leading-tight mb-4 sm:mb-5">
                {isRu
                  ? "Что мы можем исследовать для вас"
                  : isEn
                  ? "What We Can Examine for You"
                  : isTr
                  ? "Sizin İçin Neleri İnceleyebiliriz"
                  : isAr
                  ? "ما يمكننا فحصه وتشخيصه بدقة"
                  : "Was wir für Sie untersuchen können"}
              </h3>

              {/* 2-Column Checklist with Gold Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 sm:gap-y-2.5">
                <div className="space-y-2 sm:space-y-2.5">
                  {indicationsCol1.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <GoldCircleCheckIcon className="w-3.5 h-3.5 text-[#B89650] shrink-0" />
                      <span className="text-xs sm:text-[12.5px] text-[#2C3B30] font-normal leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 sm:space-y-2.5">
                  {indicationsCol2.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <GoldCircleCheckIcon className="w-3.5 h-3.5 text-[#B89650] shrink-0" />
                      <span className="text-xs sm:text-[12.5px] text-[#2C3B30] font-normal leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 4B: NABIOTA DIAGNOSTICS GMBH – PDF SECTION IV.4
            - Corporate purpose, legal separation, 8 core tasks
        ══════════════════════════════════════════════════════════ */}
        <DiagnosticsCompanySection locale={locale} />

        {/* ══════════════════════════════════════════════════════════
            SECTION 5 (PHOTO 4): PATIENTENSTIMMEN (FULL-WIDTH EDGE-TO-EDGE)
            - Seamlessly connected to Section 6 with NO white gap!
        ══════════════════════════════════════════════════════════ */}
        <section className="w-full bg-[#08170D] text-white overflow-hidden border-t border-[#D5B878]/30 relative">
          <div className="w-full flex items-center justify-between min-h-[240px] sm:min-h-[260px] lg:min-h-[280px]">
            
            {/* Left Column: Patient Portrait fading towards center */}
            <div className="relative hidden md:block w-[24%] lg:w-[26%] h-[240px] sm:h-[260px] lg:h-[280px] overflow-hidden shrink-0">
              <Image
                src={currentTestimonial.patientImage}
                alt={currentTestimonial.author}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#08170D] to-transparent pointer-events-none" />
            </div>

            {/* Center Column: Quote, Author, Carousel Flanked by Arrows */}
            <div className="flex-1 py-7 sm:py-8 px-4 sm:px-6 lg:px-10 text-center flex flex-col items-center justify-center relative z-10 max-w-2xl mx-auto">
              <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase block mb-1.5">
                {isRu ? "ОТЗЫВЫ ПАЦИЕНТОВ" : isEn ? "PATIENT VOICES" : isTr ? "HASTA GÖRÜŞLERİ" : isAr ? "آراء وتجارب المرضى" : "PATIENTENSTIMMEN"}
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-tight mb-2.5">
                {isRu
                  ? "Доверие, основанное на опыте."
                  : isEn
                  ? "Trust Built on Experience."
                  : isTr
                  ? "Deneyimden Gelen Güven."
                  : isAr
                  ? "ثقة راسخة تنبع من الخبرة."
                  : "Vertrauen durch Erfahrung."}
              </h3>

              {/* Quote row flanked by Left & Right Arrows (Photo 4) */}
              <div className="w-full flex items-center justify-between gap-3 sm:gap-5 my-1.5">
                <button
                  onClick={() =>
                    setActiveTestimonial((prev) =>
                      prev === 0 ? testimonials.length - 1 : prev - 1
                    )
                  }
                  aria-label="Previous testimonial"
                  className="w-8 h-8 rounded-full border border-white/20 hover:border-[#D5B878] bg-white/5 hover:bg-[#D5B878] hover:text-[#08170D] text-white flex items-center justify-center shrink-0 transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>

                <blockquote className="text-white/90 text-xs sm:text-[13px] italic leading-relaxed font-sans flex-1 text-center max-w-lg mx-auto">
                  „{currentTestimonial.quote}“
                </blockquote>

                <button
                  onClick={() =>
                    setActiveTestimonial((prev) =>
                      prev === testimonials.length - 1 ? 0 : prev + 1
                    )
                  }
                  aria-label="Next testimonial"
                  className="w-8 h-8 rounded-full border border-white/20 hover:border-[#D5B878] bg-white/5 hover:bg-[#D5B878] hover:text-[#08170D] text-white flex items-center justify-center shrink-0 transition-all cursor-pointer"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Author in Gold */}
              <span className="text-xs text-[#ECCF96] font-medium block mt-1.5">
                {currentTestimonial.author}, {currentTestimonial.role}
              </span>

              {/* Dots Indicator: Active Gold Pill + Inactive Circular Dots */}
              <div className="flex items-center gap-1.5 mt-3">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    aria-label={`Slide ${idx + 1}`}
                    className={`transition-all ${
                      activeTestimonial === idx
                        ? "w-5 h-1.5 rounded-full bg-[#ECCF96]"
                        : "w-1.5 h-1.5 rounded-full bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Column: Scan Review Image fading towards center */}
            <div className="relative hidden md:block w-[24%] lg:w-[26%] h-[240px] sm:h-[260px] lg:h-[280px] overflow-hidden shrink-0">
              <Image
                src={currentTestimonial.scanImage}
                alt="Specialist reviewing MRI scan"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#08170D] to-transparent pointer-events-none" />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 6: SIGNATURE PANORAMIC MOUNTAIN CTA BANNER
            - "фото 5 лищние белые пробелы снизу и сверху"
            - Directly adjacent to Section 5 with only a gold divider border
            - Directly adjacent to Footer with NO bottom margin or padding!
        ══════════════════════════════════════════════════════════ */}
        <section className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-[#D5B878]/30">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/values/mountains-bg.webp"
              alt="Alps panoramic background"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08170D]/94 via-[#08170D]/88 to-[#08170D]/94" />
          </div>

          <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 text-center">
            <div className="max-w-2xl mx-auto space-y-4 sm:space-y-5">
              <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.26em] text-[#C5A56A] uppercase block">
                {isRu ? "ЗДОРОВЬЕ НАЧИНАЕТСЯ С ТОЧНОСТИ" : isEn ? "PRECISION FOR YOUR HEALTH" : isTr ? "SAĞLIK HASSASİYETLE BAŞLAR" : isAr ? "صحتكم تبدأ من دقة التشخيص" : "GESUNDHEIT BEGINNT MIT PRÄZISION"}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-white font-normal leading-[1.18]">
                {isRu
                  ? "Нужна своевременная и точная диагностика?"
                  : isEn
                  ? "Require Timely & Precise Diagnostics?"
                  : isTr
                  ? "Zamanında ve Hassas Bir Tanıya mı İhtiyacınız Var?"
                  : isAr
                  ? "هل تحتاج إلى فحص تشخيصي فوري ودقيق؟"
                  : "Benötigen Sie eine zeitnahe Diagnostik?"}
              </h2>

              <p className="text-white/85 text-xs sm:text-[14px] leading-relaxed font-sans max-w-xl mx-auto">
                {isRu
                  ? "Запишитесь на МРТ 3 Тесла, низкодозовую КТ или цифровой рентген в центрах NabiOta®. Мы гарантируем бережное отношение, минимальные сроки ожидания и исчерпывающее врачебное заключение."
                  : isEn
                  ? "Schedule your 3-Tesla MRI, low-dose CT, or digital X-ray at NabiOta® diagnostics centers. Fast appointments, maximum patient comfort, and reliable reports for you and your physicians."
                  : isTr
                  ? "NabiOta® tanı merkezlerimizde 3T MR, düşük dozlu BT veya dijital röntgen için randevunuzu hemen planlayın – hızlı, dijital ve en yüksek radyolojik uzmanlıkla."
                  : isAr
                  ? "احجز موعدك للتصوير بالرنين المغناطيسي 3 تسلا، الأشعة المقطعية منخفضة الجرعة أو الأشعة الرقمية في مراكز NabiOta® – سرعة في المواعيد وخبرة طبية لا تضاهى."
                  : "Vereinbaren Sie Ihren Untersuchungstermin für 3T-MRT, Niedrigdosis-CT oder volldigitales Röntgen – schnell, digital und mit höchster radiologischer Fachexpertise."}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <Link
                  href={`/${locale}/contact`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#07150C] font-semibold text-xs sm:text-[13.5px] tracking-wide shadow-lg transition-all duration-200 hover:scale-102"
                >
                  <span>{isRu ? "Записаться на прием" : isEn ? "Book an Appointment" : isTr ? "Randevu Al" : isAr ? "حجز موعد فحص" : "Termin vereinbaren"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href={`/${locale}/contact`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-white/30 hover:border-[#D5B878] text-white hover:text-[#ECCF96] font-medium text-xs sm:text-[13px] transition-all bg-white/5 backdrop-blur-sm"
                >
                  <span>{isRu ? "Связаться с центром" : isEn ? "Direct Contact" : isTr ? "Merkezle İletişim" : isAr ? "التواصل المباشر" : "Direkter Kontakt"}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            MODAL DIALOG: DETAILED DIAGNOSTIC MODALITY (PDF SECTION 4)
        ══════════════════════════════════════════════════════════ */}
        {selectedProcedure && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-[#08170D]/80 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedProcedure(null)}
          >
            <div
              className="relative w-full max-w-4xl xl:max-w-5xl bg-white rounded-2xl sm:rounded-3xl border border-[#D5B878]/40 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              {/* Modal Top Header Image & Badges */}
              <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden shrink-0 bg-[#08170D]">
                <Image
                  src={selectedProcedure.image}
                  alt={selectedProcedure.title}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08170D] via-[#08170D]/40 to-black/30" />

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedProcedure(null)}
                  aria-label={isRu ? "Закрыть" : isEn ? "Close" : isTr ? "Kapat" : isAr ? "إغلاق" : "Schließen"}
                  className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-[#08170D]/80 hover:bg-[#D5B878] text-white hover:text-[#08170D] border border-white/20 hover:border-[#D5B878] flex items-center justify-center transition-all duration-200 shadow-md z-10 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Badge & Floating Modality Icon */}
                <div className="absolute bottom-3 left-4 sm:left-6 right-4 sm:right-6 flex items-end justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#08170D] border border-[#D5B878] flex items-center justify-center text-[#ECCF96] shadow-lg shrink-0">
                      {React.createElement(selectedProcedure.icon, { className: "w-5 h-5 stroke-[1.6]" })}
                    </div>
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#D5B878]/90 text-[#08170D] text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider mb-1">
                        {selectedProcedure.badge}
                      </span>
                      <h2 id="modal-title" className="font-serif text-xl sm:text-2xl text-white font-normal leading-tight drop-shadow-sm">
                        {selectedProcedure.title}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Scrollable Content Body */}
              <div className="p-5 sm:p-6 overflow-y-auto space-y-4 sm:space-y-5 text-left font-sans">
                {/* Subtitle / Clinical Scope */}
                <div className="bg-[#FAF8F5] border-l-3 border-[#D5B878] px-3.5 py-2.5 rounded-r-lg">
                  <p className="text-[12px] sm:text-[13px] font-medium text-[#142318] leading-snug">
                    {selectedProcedure.subtitle}
                  </p>
                </div>

                {/* Full Description from PDF Section 4 */}
                <div className="space-y-2">
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8C948D]">
                    {isRu ? "КЛИНИЧЕСКИЙ ПРОФИЛЬ & ИНФРАСТРУКТУРА" : isEn ? "CLINICAL PROFILE & INFRASTRUCTURE" : isTr ? "KLİNİK PROFİL & ALTYAPI" : isAr ? "الملف السريري والبنية التحتية" : "KLINISCHES PROFIL & INFRASTRUKTUR"}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#425246] leading-relaxed">
                    {selectedProcedure.fullDesc}
                  </p>
                </div>

                {/* Key Indications Checklist */}
                <div className="space-y-2.5 pt-1">
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8C948D]">
                    {selectedProcedure.indicationsTitle}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProcedure.indications.map((ind, i) => (
                      <div key={i} className="flex items-start gap-2 bg-[#FAF8F5] p-2.5 rounded-xl border border-[#EDE8DE]">
                        <GoldCircleCheckIcon className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                        <span className="text-[11.5px] sm:text-xs text-[#1F2E24] leading-snug font-normal">
                          {ind}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Regulatory & Safety Standards Bar (PDF Section 4 Requirements) */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#08170D]/5 border border-[#D5B878]/30 text-[#142318]">
                  <ShieldCheck className="w-5 h-5 text-[#B89650] shrink-0" />
                  <p className="text-[11px] sm:text-[11.5px] leading-tight text-[#3A4A3E]">
                    <strong className="font-semibold text-[#142318]">{isRu ? "Стандарты безопасности: " : isEn ? "Standards & Quality: " : isTr ? "Güvenlik & Kalite Standardı: " : isAr ? "معايير الجودة والسلامة: " : "Qualitäts- & Sicherheitsstandard: "}</strong>
                    {selectedProcedure.standards}
                  </p>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="p-4 sm:p-5 bg-[#FAF8F5] border-t border-[#EDE8DE] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedProcedure(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-[#D0C8B8] hover:bg-white text-[#556358] text-xs font-medium transition-colors cursor-pointer"
                >
                  {locale === "ru" ? "Закрыть окно" : locale === "tr" ? "Pencereyi Kapat" : locale === "ar" ? "إغلاق النافذة" : isEn ? "Close window" : "Fenster schließen"}
                </button>

                <Link
                  href={`/${locale}/contact`}
                  onClick={() => setSelectedProcedure(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#08170D] hover:bg-[#0C2B1B] text-[#ECCF96] border border-[#D5B878] text-xs font-semibold tracking-wide transition-all shadow-sm"
                >
                  <span>{locale === "ru" ? "Записаться на процедуру" : locale === "tr" ? "Muayene Randevusu Al" : locale === "ar" ? "طلب موعد فحص طبي" : isEn ? "Book Examination" : "Termin für Untersuchung anfragen"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer currentLocale={locale} />
    </div>
  );
}
