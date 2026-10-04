"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroBadges } from "@/components/ui/HeroBadges";
import { SupportedLocale } from "@/lib/i18n";
import {
  Heart,
  GraduationCap,
  Users,
  Clock,
  Sparkles,
  ShieldCheck,
  Stethoscope,
  Activity,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Upload,
  FileText,
  Send,
  X,
  Info,
  Check,
  Award,
  Globe,
  FileCheck,
  Building2,
  Briefcase,
  HelpCircle,
  MapPin,
  Search,
  Settings,
  HeartHandshake,
  Plane,
} from "lucide-react";

export interface RecruitmentPillar {
  id: string;
  title: string;
  category: string;
  badge: string;
  targetGroup: string;
  shortDesc: string;
  description: string;
  image: string;
  rolesList: string[];
  requirements: string[];
  approbationService: string[];
  benefitsPackage: string[];
  legalFramework: string;
}

interface CareerPageComponentProps {
  locale?: SupportedLocale;
}

export function CareerPageComponent({ locale = "de" }: CareerPageComponentProps) {
  // Testimonials state for interactive slider
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Application form state
  const [selectedPosition, setSelectedPosition] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState("");

  // Modal dialog state for recruitment pillars
  const [selectedPillar, setSelectedPillar] = useState<RecruitmentPillar | null>(null);

  // Lock body scroll and handle Escape key for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPillar(null);
      }
    };

    if (selectedPillar) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPillar]);

  const handleSelectJob = (title: string) => {
    setSelectedPosition(title);
    const element = document.getElementById("bewerbung");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleApplyForPillar = (pillar: RecruitmentPillar) => {
    setSelectedPosition(pillar.title);
    setSelectedPillar(null);
    const element = document.getElementById("bewerbung");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  const careerTranslations = {
    de: {
      hero: {
        eyebrow: "NABIOTA MEDICAL RECRUITMENT SERVICES GMBH",
        titlePrefix: "Gemeinsam für eine",
        titleMid: "gesündere",
        titleHighlight: "Zukunft.",
        description:
          "Nationale & internationale Gewinnung medizinischer Fachkräfte, vollumfängliche Approbationsbegleitung und zukunftssichere Karrieren in den Einrichtungen der NabiOta-Gruppe und bei renommierten Partnern in ganz Deutschland.",
        cta: "Offene Stellen entdecken",
        floatingQuote: "„Mehr als ein Job – eine sinnstiftende Aufgabe.“",
        badge1Title: "Full-Care",
        badge1Sub: "Approbation & Visum",
        badge2Title: "WHO-Standard",
        badge2Sub: "Faire Rekrutierung",
        badge3Title: "Festanstellung",
        badge3Sub: "Klinik & MVZ",
      },
      mission: {
        eyebrow: "UNTERNEHMENSGEGENSTAND & LEITBILD",
        title: "Gezielte Fachkräftegewinnung & nachhaltige Integration.",
        desc: "Die NabiOta Medical Recruitment Services GmbH verbindet qualifizierte Mediziner, Pflegefachkräfte, MTAs und Therapeuten mit erstklassigen Gesundheitseinrichtungen. Wir begleiten Fachkräfte ganzheitlich von der ersten Qualifikationsprüfung über Approbations- und Visaverfahren bis hin zu Spracherwerb, Relocation und langfristiger Karriereentwicklung in Deutschland.",
        role: "Geschäftsführung & Personalvorstand",
        badgeLine1: "Wir fördern medizinische Talente,",
        badgeLine2: "weil sie die Zukunft des Gesundheitswesens gestalten.",
      },
      pillarSection: {
        eyebrow: "VERMITTLUNGSSPEKTRUM",
        title: "Die 4 Säulen unserer Fachkräftevermittlung",
        desc: "Strukturierte Personalrekrutierung für Krankenhäuser, medizinische Versorgungszentren (MVZ), Diagnostik- und Rehabilitationseinrichtungen.",
        openModalBtn: "Profil & Approbation ansehen",
      },
      pillars: [
        {
          id: "aerzte",
          title: "Ärzte & Fachärzte",
          category: "Klinische Medizin & MVZ",
          badge: "Approbation & Facharzt",
          targetGroup: "Assistenzärzte, Fachärzte, Oberärzte & Leitende Mediziner",
          shortDesc: "Gezielte Vermittlung von Ärzten an Kliniken und MVZ mit vollumfänglicher Begleitung bei Approbation (§ 3 BÄO) und Berufserlaubnis (§ 10 BÄO).",
          description: "Die NabiOta Medical Recruitment Services GmbH übernimmt die strukturierte Gewinnung und nachhaltige Vermittlung von Ärzten aus dem In- und Ausland. Ob Allgemeinmedizin, Kardiologie, Gastroenterologie, Chirurgie, Anästhesiologie, Neurologie oder Radiologie – wir bringen qualifizierte Mediziner mit modernsten Gesundheitseinrichtungen zusammen. Ausländische Kolleginnen und Kollegen begleiten wir schrittweise bis zur vollwertigen deutschen Approbation (§ 3 BÄO) und unbefristeten Festanstellung.",
          image: "/images/careers/mission-doctors-highres.webp",
          rolesList: [
            "Fachärzte & Oberärzte (Kardiologie, Chirurgie, Allgemeinmedizin, Anästhesie)",
            "Assistenzärzte in Weiterbildung für Akutkliniken und MVZ",
            "Notfall- und Intensivmediziner für Maximalversorger",
            "Ambulant tätige Vertragsärzte für MVZ-Strukturen (§ 95 SGB V)",
          ],
          requirements: [
            "Abgeschlossenes Medizinstudium an einer anerkannten Universität",
            "Sprachniveau B2 Allgemeinsprache + C1 Fachsprache Medizin",
            "Vollständige Vorlage der Ausbildungsunterlagen zur Gleichwertigkeitsprüfung",
            "Bereitschaft zur Fachsprachprüfung (FSP) vor der zuständigen Landesärztekammer",
          ],
          approbationService: [
            "Erstellung und Einreichung des Approbations- bzw. Berufserlaubnisantrags (§ 10 BÄO)",
            "Organisation beeidigter Übersetzungen und behördlicher Apostillen",
            "Begleitung im Gutachtenverfahren (GfG / Defizitbescheid) & Vorbereitung auf die Kenntnisprüfung (KP)",
            "Beschleunigtes Fachkräfte-Visumverfahren (§ 16d / § 18a AufenthG) mit der Bundesagentur für Arbeit",
          ],
          benefitsPackage: [
            "Direkte unbefristete Festanstellung (keine Leiharbeit)",
            "Tarifliche/übertarifliche Vergütung nach TV-Ärzte / Marburger Bund",
            "Großzügiges Fortbildungsbudget & volle Weiterbildungsbefugnisse",
            "30 Tage Jahresurlaub & strukturierte bezahlte Einarbeitung",
            "Relocation-Bonus, Wohnungsvermittlung & behördliche Begleitung vor Ort",
          ],
          legalFramework: "Gesetzliche Grundlage: Bundesärzteordnung (BÄO), BQFG. Hoheitliche Entscheidungen über die Erteilung von Berufserlaubnis und Approbation verbleiben ausschließlich bei den zuständigen Landesprüfungsämtern bzw. Bezirksregierungen.",
        },
        {
          id: "pflege",
          title: "Pflegefachkräfte & OP-Dienst",
          category: "Stationäre & Ambulante Pflege",
          badge: "Urkunde & Anerkennung",
          targetGroup: "Examinierte Gesundheits- und Krankenpfleger, Intensiv- & OP-Pflegekräfte",
          shortDesc: "Ethische Rekrutierung und nachhaltige Integration von examinierten Pflegekräften für Normalstationen, Intensivstationen und HomeCare.",
          description: "Pflegefachkräfte bilden das Herzstück jeder exzellenten Patientenversorgung. Wir vermitteln examinierte Pflegekräfte an Kliniken, Intensivzentren, Operationsabteilungen und spezialisierte HomeCare-Dienste. Internationale Pflegekräfte unterstützen wir intensiv im Anerkennungsverfahren nach dem Pflegeberufegesetz (PflBG) bis zur Erteilung der staatlichen Erlaubnis zum Führen der Berufsbezeichnung.",
          image: "/images/careers/hero-career-nurse.webp",
          rolesList: [
            "Pflegefachpersonen für Normal- und Spezialstationen",
            "Fachkrankenpfleger für Anästhesie und Intensivpflege",
            "Operationstechnische Assistenten (OTA) & OP-Pflegepersonal",
            "Pflegefachkräfte für ambulante Wund- und Behandlungspflege (HomeCare)",
          ],
          requirements: [
            "Abgeschlossene Pflegeausbildung / Bachelor of Science in Nursing",
            "Sprachnachweis Deutsch B2 Pflege (Goethe-Institut oder telc)",
            "Klinische Praxiserfahrung und vollständige Curriculumsnachweise",
            "Hohes Maß an Empathie, Zuverlässigkeit und patientenorientiertem Handeln",
          ],
          approbationService: [
            "Antragstellung auf Berufsanerkennung bei den Landesgesundheitsämtern",
            "Organisation zertifizierter Anpassungslehrgänge oder Kenntnisprüfungsvorbereitung",
            "Zusammenarbeit mit der Zentralen Servicestelle Berufsanerkennung (ZSBA)",
            "Beschleunigtes Visum- und Arbeitsmarktzulassungsverfahren nach BeschV",
          ],
          benefitsPackage: [
            "Vergütung nach TVöD-P / AVR mit attraktiven Schicht- und Pflegezulagen",
            "Zusätzliche betriebliche Altersvorsorge & Jahressonderzahlung",
            "Feste Rahmendienstpläne mit verlässlicher Freizeitgestaltung",
            "Kostenfreie Sprachfortbildungen und berufliche Spezialisierungen",
            "Unterstützung bei Familiennachzug und Kita-Platz-Suche",
          ],
          legalFramework: "Gesetzliche Grundlage: Pflegeberufegesetz (PflBG), PflAPrV. Rekrutierung erfolgt strikt nach den ethischen Leitlinien des WHO Global Code of Practice on the International Recruitment of Health Personnel.",
        },
        {
          id: "diagnostik",
          title: "MTRA, MTLA & Diagnostik",
          category: "Medizinisch-technische Berufe",
          badge: "High-End Medizintechnik",
          targetGroup: "Medizinisch-technische Radiologie- & Laboratoriumsassistenten, MFA",
          shortDesc: "Spezialisierte Fachkräfte für High-End-Bildgebung (CT, MRT, Röntgen) und vollautomatisierte klinische Großlabore.",
          description: "Präzise Diagnostik verlangt modernste Technologie und erstklassig ausgebildetes Fachpersonal. Wir vermitteln spezialisierte MTRA und MTLA an moderne Diagnostikzentren, Radiologiepraxen und Laboratorien. Internationale Fachkräfte begleiten wir durch die Gleichwertigkeitsprüfung nach dem Gesetz über die Berufe in der medizinischen Technologie (MTBG).",
          image: "/images/diagnostik/modality-mrt.webp",
          rolesList: [
            "MTRA für Großgeräte (3T-MRT, Multislice-CT, digitales Röntgen)",
            "MTLA für Klinische Chemie, Hämatologie und Mikrobiologie",
            "Medizinische Fachangestellte (MFA) für Praxiskoordination & Notfallaufnahme",
            "Qualitätsmanagement-Beauftragte für Radiologie und Strahlenschutz",
          ],
          requirements: [
            "Staatliches Diplom / Bachelor im Bereich Radiologietechnologie oder Biomedizinische Analytik",
            "Deutschkenntnisse auf Niveau B2",
            "Fachkunde im Strahlenschutz (kann bei Bedarf in Deutschland erworben werden)",
            "Präzises technisches Verständnis und hohes Verantwortungsbewusstsein",
          ],
          approbationService: [
            "Antragstellung auf staatliche Berufserlaubnis nach MTBG",
            "Prüfung der Ausbildungsmodule (Theorie & klinische Praxisstunden)",
            "Vermittlung von Strahlenschutzkursen nach Strahlenschutzverordnung (StrlSchV)",
            "Behördliche Visums- und Arbeitsaufnahmebegleitung",
          ],
          benefitsPackage: [
            "Attraktive Vergütungsgruppen mit Funktionszulagen",
            "Arbeit an modernen Diagnostikgeräten (Siemens Healthineers, Philips)",
            "Geregelte Arbeitszeiten mit geringer Wochenend- und Rufbereitschaftslast",
            "Gezielte Weiterbildungen (Kardio-MRT, Neuroradiologie, Interventionelle Radiologie)",
            "Strukturiertes Onboarding & persönliches Mentoring",
          ],
          legalFramework: "Gesetzliche Grundlage: Gesetz über die Berufe in der medizinischen Technologie (MTBG). Berufszulassungspflichtige Tätigkeiten werden erst nach Vorliegen der offiziellen Berufsausübungserlaubnis aufgenommen.",
        },
        {
          id: "therapie",
          title: "Physio-, Ergo- & Logopädie",
          category: "Rehabilitation & Prävention",
          badge: "Therapeutische Exzellenz",
          targetGroup: "Staatlich anerkannte Physiotherapeuten, Ergotherapeuten, Logopäden",
          shortDesc: "Therapeuten für ambulante und stationäre Rehabilitation: Orthopädie, Neurologie, Pädiatrie mit voller Heilmittel-Zulassung.",
          description: "Für die nachhaltige Rehabilitation und Wiederherstellung der Mobilität vermitteln wir hochqualifizierte Physiotherapeuten, Ergotherapeuten und Logopäden. Wir arbeiten mit ambulanten Reha-Zentren, Spezialkliniken und Akutkrankenhäusern zusammen und unterstützen internationale Therapeuten bei der Erlangung der staatlichen Berufsanerkennung nach dem Masseur- und Physiotherapeutengesetz (MPhG).",
          image: "/images/services/therapie.webp",
          rolesList: [
            "Physiotherapeuten (Manuelle Therapie, KGG, Bobath / PNF, MLD)",
            "Ergotherapeuten (Motorisch-funktionell, Neurotraining, Sensorische Integration)",
            "Logopäden & Sprachtherapeuten (Dysphagie, Aphasie, Sprachentwicklung)",
            "Sport- & Bewegungstherapeuten für Medizinische Trainingstherapie (MTT)",
          ],
          requirements: [
            "Staatlich anerkannter Berufsabschluss als Physiotherapeut, Ergotherapeut oder Logopäde",
            "Deutschkenntnisse auf solidem B2-Niveau",
            "Zusatzqualifikationen (MT, Bobath, MLD) von Vorteil, aber auch berufsbegleitend erwerbbar",
            "Freude an interdisziplinärer patientenzentrierter Teamarbeit",
          ],
          approbationService: [
            "Anerkennungsverfahren bei den zuständigen Landesämtern für Gesundheit",
            "Koordination von Defizitvergleichen und praktischen Anpassungsphasen",
            "Vermittlung an anerkannte Weiterbildungsinstitute",
            "Rechtssichere Begleitung bei Visa und Aufenthaltsrecht (§ 16d / § 18a AufenthG)",
          ],
          benefitsPackage: [
            "Überdurchschnittliche Vergütung mit bezahlten Fortbildungstagen",
            "Großzügige Kostenübernahme für Zertifikatskurse (MT, KGG, Bobath)",
            "Moderne Therapie- und Trainingsräume mit digitaler Dokumentation",
            "Flexible Arbeitszeitmodelle (Vollzeit, Teilzeit, 4-Tage-Woche)",
            "Harmonische interdisziplinäre Teams mit ärztlicher Leitung",
          ],
          legalFramework: "Gesetzliche Grundlage: Masseur- und Physiotherapeutengesetz (MPhG), ErgThG, LogopG. Abrechnung von Heilmittelleistungen (§ 124 SGB V) setzt die Erteilung der jeweiligen staatlichen Berufsurkunde voraus.",
        },
      ],
      pathwaySection: {
        eyebrow: "360° INTEGRATIONSSERVICE",
        title: "In 5 Schritten zur Festanstellung in Deutschland",
        desc: "Von der ersten Beglaubigung bis zum erfolgreichen Berufsstart in der Klinik: Unser strukturierter Pfad garantiert maximale Transparenz und Sicherheit.",
      },
      pathway: [
        {
          step: "01",
          title: "Profilprüfung & Potenzialanalyse",
          desc: "Detaillierte Analyse Ihrer Diplome, Studieninhalte und Berufserfahrung. Wir ermitteln den optimalen Anerkennungsweg (Defizitbescheid oder direkte Gleichwertigkeit) und erstellen Ihren individuellen Fahrplan.",
        },
        {
          step: "02",
          title: "Fachsprachkurs & FSP-Vorbereitung (B2/C1)",
          desc: "Gezielte sprachliche Qualifizierung mit muttersprachlichen Fachdozenten: Vorbereitung auf die Fachsprachprüfung (FSP) vor der Landesärztekammer oder das telc Deutsch B2/C1 Pflege Zertifikat.",
        },
        {
          step: "03",
          title: "Behördenverfahren & Approbationsantrag",
          desc: "Organisation beeidigter Übersetzungen, notarieller Beglaubigungen und Einreichung der Anträge beim zuständigen Landesprüfungsamt. Einleitung des beschleunigten Visumverfahrens (§ 16d / § 18a AufenthG).",
        },
        {
          step: "04",
          title: "Klinik-Matching & Hospitation",
          desc: "Gezielte Vermittlung an renommierte Krankenhäuser oder MVZ unseres Netzwerks, Vorstellungsgespräche, Hospitationsvereinbarung und Abschluss eines unbefristeten deutschen Arbeitsvertrags.",
        },
        {
          step: "05",
          title: "Relocation, Behörden & 360°-Integration",
          desc: "Unterstützung bei Wohnungssuche, Wohnsitzanmeldung (Bürgeramt), Bankkontoeröffnung, Krankenkasse, Familiennachzug sowie dauerhafte persönliche Begleitung und Mentoring vor Ort.",
        },
      ],
      compliance: {
        eyebrow: "RECHTLICHE STANDARDS & COMPLIANCE",
        title: "Rechtssichere, faire und transparente Fachkräftevermittlung",
        desc: "Die NabiOta Medical Recruitment Services GmbH handelt nach den strengen gesetzlichen Vorgaben der Bundesrepublik Deutschland sowie internationalen ethischen Standards.",
        points: [
          {
            title: "Trennung von Vermittlung und AÜG",
            text: "Personalvermittlung und Arbeitnehmerüberlassung werden organisatorisch und vertraglich strikt getrennt. Bei der Personalvermittlung entsteht das Arbeitsverhältnis stets unmittelbar zwischen der Fachkraft und dem Krankenhausträger bzw. MVZ.",
          },
          {
            title: "Ethische Rekrutierung (WHO Global Code)",
            text: "Wir verpflichten uns zur fairen Rekrutierung nach den Grundsätzen des WHO Global Code of Practice on the International Recruitment of Health Personnel. Wir führen keine Abwerbung in Ländern der WHO-Warnliste durch.",
          },
          {
            title: "Transparenter Behördenvorbehalt",
            text: "Entscheidungen über Berufserlaubnis, Approbation und Visa verbleiben hoheitlich bei den zuständigen Behörden (Bezirksregierungen, Regierungspräsidien, ZAB, Ausländerbehörden). Wir garantieren rechtssichere Begleitung und optimale Vorbereitung.",
          },
          {
            title: "Garantierte Weisungsfreiheit & Datenschutz",
            text: "Die Verarbeitung persönlicher Qualifikations- und Bewerberdaten erfolgt streng nach DSGVO. Vermittelte Fachkräfte werden nach deutschen Qualitätsstandards eingegliedert.",
          },
        ],
      },
      benefits: {
        eyebrow: "WARUM NABIOTA®",
        title: "Ihre Vorteile bei uns.",
        desc: "Wir bieten Ihnen ein modernes Arbeitsumfeld, in dem Sie sich persönlich und beruflich weiterentwickeln können.",
        items: [
          {
            icon: Heart,
            title: "Sinnstiftende Arbeit",
            text: "Sie leisten einen direkten Beitrag zur Gesundheit und Lebensqualität von Menschen.",
          },
          {
            icon: GraduationCap,
            title: "Weiterbildung & Entwicklung",
            text: "Wir unterstützen Ihre fachliche und persönliche Weiterentwicklung mit individuellen Angeboten.",
          },
          {
            icon: Users,
            title: "Starkes Team",
            text: "Ein wertschätzendes Miteinander und offene Kommunikation sind bei uns selbstverständlich.",
          },
          {
            icon: Clock,
            title: "Flexible Arbeitsmodelle",
            text: "Wir ermöglichen eine ausgewogene Work-Life-Balance.",
          },
          {
            icon: Sparkles,
            title: "Moderne Infrastruktur",
            text: "Profitieren Sie von hochwertiger Ausstattung und digitalen Lösungen.",
          },
          {
            icon: ShieldCheck,
            title: "Attraktive Vergütung",
            text: "Wir bieten faire und leistungsgerechte Konditionen.",
          },
        ],
      },
      jobs: {
        eyebrow: "AKTUELLE STELLENANGEBOTE",
        title: "Finden Sie Ihren Platz in unserem Verbund.",
        desc: "Entdecken Sie erstklassige Karrierechancen an unseren Klinikstandorten, MVZ und Diagnostikzentren.",
        allButton: "Alle Stellenangebote anzeigen",
        positions: [
          {
            icon: Stethoscope,
            title: "Facharzt (m/w/d) für Innere Medizin & Kardiologie",
            facility: "NabiOta® MVZ Haus- & Fachärztliche Versorgung",
            type: "Vollzeit / Teilzeit",
            location: "Mönchengladbach",
          },
          {
            icon: Stethoscope,
            title: "Facharzt (m/w/d) für Orthopädie & Unfallchirurgie",
            facility: "NabiOta® MVZ Chirurgie & Anästhesiologie",
            type: "Vollzeit",
            location: "Mönchengladbach / NRW",
          },
          {
            icon: Heart,
            title: "Fachkrankenpfleger (m/w/d) Anästhesie- & OP-Pflege",
            facility: "NabiOta® Clinics Germany (Stationäre Klinik § 30 GewO)",
            type: "Vollzeit / Teilzeit",
            location: "Nordrhein-Westfalen",
          },
          {
            icon: Activity,
            title: "Staatl. anerkannter Physiotherapeut / Reha-Therapeut (m/w/d)",
            facility: "NabiOta® Rehabilitation & Therapy Center",
            type: "Vollzeit / 4-Tage-Woche",
            location: "Düsseldorf / Region",
          },
          {
            icon: Sparkles,
            title: "Medizinisch-technischer Radiologieassistent MTRA (m/w/d)",
            facility: "NabiOta® Diagnostics Center (CT/MRT/Röntgen)",
            type: "Vollzeit",
            location: "Mönchengladbach",
          },
          {
            icon: ShieldCheck,
            title: "Pflegefachkraft / Wundexperte ICW (m/w/d)",
            facility: "NabiOta® HomeCare (Ambulante Pflege & Wundversorgung)",
            type: "Vollzeit / Teilzeit",
            location: "Region NRW",
          },
        ],
      },
      culture: {
        eyebrow: "UNSERE KULTUR",
        title: "Menschen. Werte. Miteinander.",
        desc: "Wir schaffen eine Arbeitsumgebung, in der Respekt, Vertrauen und Teamgeist gelebt werden. Bei NabiOta® zählen nicht nur Qualifikationen, sondern vor allem Menschen, die etwas bewegen wollen.",
        badgeTitle: "Gemeinsam wachsen.",
        badgeSub: "Leben verbessern.",
      },
      testimonials: [
        {
          quote:
            "„Dank der professionellen Approbationsbegleitung von NabiOta konnte ich mich voll auf meine Fachsprachprüfung konzentrieren. Heute leite ich als Facharzt für Kardiologie eine Sprechstunde im MVZ.“",
          author: "Dr. med. Tariq Al-Mansoor",
          role: "Facharzt für Innere Medizin & Kardiologie, NabiOta® MVZ",
          avatar: "/images/careers/anna-mueller.webp",
        },
        {
          quote:
            "„Die Anerkennung meines Pflegeexamens aus dem Ausland lief mit NabiOta absolut reibungslos. Wohnungsvermittlung, Sprachcoaching und ein herzliches Team haben mir den Start in Deutschland enorm erleichtert.“",
          author: "Elena Rostova",
          role: "Examinierte Intensivpflegefachkraft, NabiOta® Clinics",
          avatar: "/images/careers/anna-mueller.webp",
        },
        {
          quote:
            "„Moderne MRT-Geräte, strukturierte Arbeitszeiten ohne ausufernde Nachtdienste und ein faires Miteinander machen NabiOta zu einem Arbeitsplatz, an den man jeden Tag gerne kommt.“",
          author: "Marco Di Bernardo",
          role: "Leitender MTRA, NabiOta® Diagnostics Center",
          avatar: "/images/careers/anna-mueller.webp",
        },
      ],
      cta: {
        eyebrow: "BEREIT FÜR IHRE ZUKUNFT?",
        title: "Werden Sie Teil von NabiOta®.",
        desc: "Entdecken Sie unsere aktuellen Stellenangebote oder reichen Sie Ihre Initiativbewerbung für unser Recruitment-Programm ein.",
        button: "Jetzt bewerben",
      },
      applyForm: {
        eyebrow: "DIREKT BEWERBEN",
        title: "Starten Sie Ihre Zukunft bei uns.",
        desc: "Senden Sie uns Ihre Unterlagen oder bewerben Sie sich unkompliziert. Unser Recruitment-Team prüft Ihre Qualifikationen und meldet sich innerhalb von 48 Stunden bei Ihnen.",
        nameLabel: "Vor- und Nachname",
        namePlaceholder: "z.B. Maria Schmidt",
        emailLabel: "E-Mail-Adresse",
        emailPlaceholder: "ihre.email@beispiel.de",
        phoneLabel: "Telefonnummer",
        phonePlaceholder: "+49 (0) 123 456789",
        positionLabel: "Gewünschte Position / Fachbereich",
        positionPlaceholder: "Position wählen...",
        positions: [
          "Facharzt (m/w/d) für Innere Medizin & Kardiologie",
          "Facharzt (m/w/d) für Orthopädie & Unfallchirurgie",
          "Fachkrankenpfleger (m/w/d) Anästhesie- & OP-Pflege",
          "Staatl. anerkannter Physiotherapeut / Reha-Therapeut (m/w/d)",
          "Medizinisch-technischer Radiologieassistent MTRA (m/w/d)",
          "Pflegefachkraft / Wundexperte ICW (m/w/d)",
          "Initiativbewerbung Ärztlicher Dienst (Approbation / Assistenzarzt)",
          "Initiativbewerbung Pflege- & Funktionsdienst",
          "Initiativbewerbung Diagnostik & MTA",
          "Initiativbewerbung Therapie & Rehabilitation",
        ],
        messageLabel: "Ihre Nachricht (optional)",
        messagePlaceholder: "Erzählen Sie uns kurz von Ihrer Qualifikation, aktuellem Sprachniveau und gewünschtem Berufsstart...",
        uploadLabel: "Lebenslauf / Dokumente anhängen (PDF, DOCX bis 10MB)",
        uploadHint: "Datei auswählen oder hierher ziehen",
        privacy: "Ich willige in die Verarbeitung meiner personenbezogenen Daten zum Zwecke des Bewerbungsverfahrens und der Vorprüfung von Berufsanerkennungen ein.",
        submitBtn: "Bewerbung absenden",
        submitting: "Wird gesendet...",
        successTitle: "Vielen Dank für Ihre Bewerbung!",
        successDesc: "Ihre Unterlagen sind erfolgreich bei unserem Recruitment-Team eingegangen. Wir prüfen Ihr Profil sorgfältig und kontaktieren Sie in Kürze.",
        resetBtn: "Weitere Bewerbung einreichen",
      },
      modal: {
        badgePrefix: "SÄULE",
        categoryLabel: "Fachbereich",
        targetLabel: "Zielgruppe",
        scopeTitle: "Tätigkeitsprofil & Schwerpunkte",
        approbationTitle: "360° Approbations- & Visumservice",
        benefitsTitle: "Vergütung & Arbeitgeberleistungen",
        legalTitle: "Rechtliche Grundlagen & Standards",
        applyBtn: "Jetzt für dieses Profil bewerben",
        closeBtn: "Schließen",
      },
    },
    en: {
      hero: {
        eyebrow: "NABIOTA MEDICAL RECRUITMENT SERVICES GMBH",
        titlePrefix: "Together for a",
        titleMid: "Healthier",
        titleHighlight: "Future.",
        description:
          "National & international healthcare recruitment, comprehensive German medical licensing (Approbation) support, and future-proof clinical careers across the NabiOta Group and accredited partner institutions.",
        cta: "Explore Open Positions",
        floatingQuote: "“More than a job – a purposeful mission.”",
        badge1Title: "Full-Care",
        badge1Sub: "Approbation & Visa",
        badge2Title: "WHO Standard",
        badge2Sub: "Ethical Staffing",
        badge3Title: "Permanent Role",
        badge3Sub: "Hospitals & MVZs",
      },
      mission: {
        eyebrow: "CORPORATE MANDATE & VISION",
        title: "Targeted Healthcare Recruitment & Sustainable Integration.",
        desc: "NabiOta Medical Recruitment Services GmbH connects qualified physicians, registered nurses, diagnostic technologists, and therapists with premier German medical institutions. We support healthcare professionals every step of the way: from initial qualification assessment to German medical licensing (Approbation), visa processing, specialized language acquisition, and long-term relocation.",
        role: "Executive Board & Head of Recruitment",
        badgeLine1: "We nurture healthcare talents,",
        badgeLine2: "because they build the future of medicine.",
      },
      pillarSection: {
        eyebrow: "STAFFING DOMAINS",
        title: "The 4 Pillars of Medical Recruitment",
        desc: "Structured healthcare staffing for acute care hospitals, medical healthcare centers (MVZ), diagnostic suites, and specialized rehabilitation clinics.",
        openModalBtn: "View Profile & Licensing",
      },
      pillars: [
        {
          id: "aerzte",
          title: "Physicians & Medical Specialists",
          category: "Clinical Medicine & Ambulatory Care",
          badge: "Approbation & Specialist",
          targetGroup: "Resident Physicians, Specialists, Senior Physicians & Medical Directors",
          shortDesc: "Targeted placement of doctors in hospitals and MVZs with full support for German medical licensure (§ 3 BÄO) and temporary practice permits (§ 10 BÄO).",
          description: "NabiOta Medical Recruitment Services GmbH provides structured talent acquisition and sustainable placement of physicians from Germany and abroad. Whether Internal Medicine, Cardiology, Surgery, Anesthesiology, Neurology, or Radiology – we match qualified doctors with top-tier medical facilities. We guide international candidates step-by-step toward full German medical licensing (Approbation) and permanent employment.",
          image: "/images/careers/mission-doctors-highres.webp",
          rolesList: [
            "Specialists & Senior Physicians (Cardiology, Surgery, General Medicine, Anesthesiology)",
            "Resident Physicians in clinical training for hospitals and MVZs",
            "Emergency and Intensive Care Specialists",
            "Panel Doctors for outpatient healthcare centers (§ 95 SGB V)",
          ],
          requirements: [
            "Graduation from an accredited medical university (EU or non-EU)",
            "German language proficiency: B2 General + C1 Medical Terminology",
            "Complete curriculum documents for equivalence assessment (Gleichwertigkeitsprüfung)",
            "Readiness to pass the German Medical Language Exam (FSP) before the Chamber of Physicians",
          ],
          approbationService: [
            "Application preparation and submission for temporary practice permit (§ 10 BÄO) and Approbation",
            "Certified sworn translations and official apostille management",
            "Equivalence review support (GfG / Deficit assessment) & Knowledge Examination (KP) prep",
            "Expedited fast-track visa processing (§ 16d / § 18a AufenthG) with the Federal Employment Agency",
          ],
          benefitsPackage: [
            "Direct permanent hospital employment contract (no agency temping)",
            "Competitive compensation according to TV-Ärzte / Marburger Bund tariff",
            "Substantial educational budget & accredited residency training rights",
            "30 days paid annual leave & structured clinical onboarding",
            "Relocation bonus, local housing assistance & family relocation support",
          ],
          legalFramework: "Legal basis: Federal Medical Code (BÄO), BQFG. Sovereign decisions regarding medical practice permits and Approbation rest exclusively with competent German state licensing authorities.",
        },
        {
          id: "pflege",
          title: "Nursing & Operating Theatre Staff",
          category: "Inpatient & Ambulatory Care",
          badge: "Licensure & Recognition",
          targetGroup: "Registered Nurses, Intensive Care & Operating Room Nurses",
          shortDesc: "Ethical recruitment and sustainable integration of registered nurses for acute wards, ICUs, and specialized home care.",
          description: "Nurses are the backbone of compassionate, high-quality patient care. We place qualified registered nurses in acute care hospitals, intensive care units, surgical suites, and specialized home care providers. We guide international nursing staff through credential recognition under the Nursing Professions Act (PflBG) until full state licensure.",
          image: "/images/careers/hero-career-nurse.webp",
          rolesList: [
            "Registered Nurses for acute and specialty wards",
            "Certified Intensive Care & Anesthesia Nurses",
            "Surgical Technologists (OTA) & Operating Room Nurses",
            "Home Care Specialists for advanced wound management and infusion therapy",
          ],
          requirements: [
            "Completed nursing diploma or Bachelor of Science in Nursing",
            "Proof of German language proficiency at B2 Nursing level (Goethe/telc)",
            "Clinical internship hours and documented clinical syllabus",
            "Strong empathy, dedication, and patient-centered clinical mindset",
          ],
          approbationService: [
            "Credential recognition application with State Health Offices",
            "Coordination of accredited clinical adaptation courses or knowledge exam preparation",
            "Partnership with the Central Service Agency for Professional Recognition (ZSBA)",
            "Accelerated visa and labor market authorization procedures (BeschV)",
          ],
          benefitsPackage: [
            "Compensation based on TVöD-P / AVR tariff with attractive shift premiums",
            "Employer-funded supplementary pension plan & annual holiday bonus",
            "Reliable shift rosters designed for work-life balance",
            "Free specialized German language and advanced clinical training",
            "Support with family reunification and local daycare placement",
          ],
          legalFramework: "Legal basis: Nursing Professions Act (PflBG), PflAPrV. Recruitment adheres strictly to the WHO Global Code of Practice on the International Recruitment of Health Personnel.",
        },
        {
          id: "diagnostik",
          title: "Medical Diagnostic Technologists (MTA)",
          category: "Medical Technology & Laboratory",
          badge: "High-End Technology",
          targetGroup: "Radiology Technologists (MTRA), Laboratory Technologists (MTLA), MFAs",
          shortDesc: "Specialized technologists for high-end imaging (CT, MRI, X-ray) and automated clinical diagnostic laboratories.",
          description: "Accurate diagnosis depends on cutting-edge imaging modalities and highly trained technologists. We recruit and place specialized radiology and laboratory technologists into state-of-the-art diagnostic centers and hospital labs. We guide international candidates through credential recognition under the Medical Technology Act (MTBG).",
          image: "/images/diagnostik/modality-mrt.webp",
          rolesList: [
            "Radiology Technologists for 3T MRI, Multislice CT, and digital radiography",
            "Laboratory Technologists for clinical chemistry, hematology, and microbiology",
            "Medical Assistants (MFA) for patient coordination and outpatient clinic management",
            "Radiation Protection and Quality Assurance Officers",
          ],
          requirements: [
            "Diploma or Bachelor's degree in Radiologic Technology or Biomedical Laboratory Science",
            "German language proficiency at level B2",
            "Radiation protection certification (can be obtained in Germany)",
            "Technical precision and dedication to patient safety",
          ],
          approbationService: [
            "Application for state professional practice permit under MTBG",
            "Assessment of academic modules and clinical laboratory hours",
            "Enrollment in accredited radiation safety courses (StrlSchV)",
            "Official visa and employment authorization assistance",
          ],
          benefitsPackage: [
            "Attractive salary grades with specialized technical allowances",
            "Work with cutting-edge medical systems (Siemens Healthineers, Philips)",
            "Regulated working hours with minimal on-call or weekend duties",
            "Targeted certifications in cardiac MRI, neuroradiology, and interventional suites",
            "Structured onboarding and dedicated peer mentorship",
          ],
          legalFramework: "Legal basis: Medical Technology Act (MTBG). Medical technology practice permits are issued solely by the competent German state authorities.",
        },
        {
          id: "therapie",
          title: "Physio-, Occupational & Speech Therapy",
          category: "Rehabilitation & Prevention",
          badge: "Therapeutic Excellence",
          targetGroup: "Certified Physiotherapists, Occupational Therapists, Speech Therapists",
          shortDesc: "Therapy professionals for outpatient and inpatient rehabilitation: orthopedic, neurological, and pediatric care.",
          description: "For rehabilitation and restored mobility, we place highly skilled physiotherapists, occupational therapists, and speech-language pathologists. We partner with rehabilitation centers, specialized clinics, and acute hospitals, guiding international therapists to German state recognition under the Physiotherapy Act (MPhG).",
          image: "/images/services/therapie.webp",
          rolesList: [
            "Physiotherapists (Manual Therapy, KGG, Bobath / PNF, Lymphatic Drainage)",
            "Occupational Therapists (Motor-functional, neuro-cognitive, sensory integration)",
            "Speech-Language Pathologists (Dysphagia, aphasia, voice therapy)",
            "Exercise Physiologists for Medical Training Therapy (MTT)",
          ],
          requirements: [
            "State-recognized degree in Physiotherapy, Occupational Therapy, or Speech Therapy",
            "German language proficiency at solid B2 level",
            "Specialized certifications (MT, Bobath, MLD) welcome or acquirable on the job",
            "Passion for interdisciplinary, patient-focused rehabilitation teamwork",
          ],
          approbationService: [
            "Credential recognition procedure with German State Health Authorities",
            "Deficit evaluation coordination and supervised clinical adaptation phases",
            "Placement into accredited continuing medical education institutes",
            "Full visa and legal residency support (§ 16d / § 18a AufenthG)",
          ],
          benefitsPackage: [
            "Above-average compensation with paid continuing education leave",
            "Generous employer coverage for certificate courses (MT, KGG, Bobath)",
            "Modern therapy and training suites with digital documentation",
            "Flexible work models (full-time, part-time, 4-day workweek)",
            "Supportive interdisciplinary team under experienced medical leadership",
          ],
          legalFramework: "Legal basis: MPhG, ErgThG, LogopG. Outpatient therapy billing under § 124 SGB V requires the issuance of the respective state professional license.",
        },
      ],
      pathwaySection: {
        eyebrow: "360° INTEGRATION PATHWAY",
        title: "5 Steps to Your Permanent Clinical Career in Germany",
        desc: "From initial diploma verification to permanent hospital placement: our proven roadmap guarantees total transparency and legal security.",
      },
      pathway: [
        {
          step: "01",
          title: "Profile Assessment & Pre-Screening",
          desc: "Thorough review of your diplomas, university curriculum, and clinical track record. We identify the best recognition pathway (Deficit Assessment or direct equivalence) and formulate your personalized strategy.",
        },
        {
          step: "02",
          title: "Specialized Medical German & FSP (B2/C1)",
          desc: "Targeted language instruction with native healthcare educators: preparation for the Medical Language Exam (FSP) before the Chamber of Physicians or telc B2/C1 Nursing exams.",
        },
        {
          step: "03",
          title: "Licensing & Approbation Processing",
          desc: "Compilation of sworn translations, notarizations, and submission to the competent German State Examination Office. Fast-track visa application under § 16d / § 18a AufenthG.",
        },
        {
          step: "04",
          title: "Hospital Matching & Observership",
          desc: "Direct presentation to leading clinics and MVZs in our network, job interviews, clinical observership contracts, and permanent German employment agreements.",
        },
        {
          step: "05",
          title: "Relocation, Housing & 360° Integration",
          desc: "Local apartment search, municipal registration (Bürgeramt), bank account setup, health insurance enrollment, family reunification support, and continuous peer mentoring.",
        },
      ],
      compliance: {
        eyebrow: "LEGAL STANDARDS & COMPLIANCE",
        title: "Legally Secure, Fair & Transparent Healthcare Recruitment",
        desc: "NabiOta Medical Recruitment Services GmbH operates strictly under German federal laws and international ethical standards.",
        points: [
          {
            title: "Separation of Direct Placement and Temporary Agency Work",
            text: "Direct permanent placement and temporary agency work (AÜG) are strictly separated. In direct recruitment, employment contracts are executed directly between the professional and the medical employer.",
          },
          {
            title: "Ethical Staffing (WHO Global Code)",
            text: "We adhere strictly to the WHO Global Code of Practice on the International Recruitment of Health Personnel, avoiding active recruitment in nations on the WHO Safeguards list.",
          },
          {
            title: "Sovereign State Authority",
            text: "Decisions regarding licenses, Approbation, and residence permits remain the sovereign responsibility of German state authorities. We provide complete legal preparation and support.",
          },
          {
            title: "Data Privacy & Independent Clinical Practice",
            text: "All applicant data is managed in strict compliance with the GDPR. Recruited healthcare staff enjoy full medical independence within their clinical scope.",
          },
        ],
      },
      benefits: {
        eyebrow: "WHY NABIOTA®",
        title: "Your Benefits with Us.",
        desc: "We offer you a modern working environment where you can develop both personally and professionally.",
        items: [
          {
            icon: Heart,
            title: "Meaningful Work",
            text: "You make a direct contribution to the health and quality of life of people.",
          },
          {
            icon: GraduationCap,
            title: "Continuous Education & Growth",
            text: "We support your professional and personal development with customized programs.",
          },
          {
            icon: Users,
            title: "Strong Team Spirit",
            text: "Appreciative collaboration and transparent communication are standard with us.",
          },
          {
            icon: Clock,
            title: "Flexible Working Models",
            text: "We enable a balanced work-life balance for our team.",
          },
          {
            icon: Sparkles,
            title: "Modern Infrastructure",
            text: "Benefit from high-end medical equipment and advanced digital workflows.",
          },
          {
            icon: ShieldCheck,
            title: "Attractive Compensation",
            text: "We offer fair and performance-oriented remuneration packages.",
          },
        ],
      },
      jobs: {
        eyebrow: "CURRENT VACANCIES",
        title: "Find Your Place in Our Network.",
        desc: "Discover outstanding career opportunities across our specialized hospitals, ambulatory healthcare centers, and diagnostic institutes.",
        allButton: "View All Job Openings",
        positions: [
          {
            icon: Stethoscope,
            title: "Specialist Physician in Internal Medicine & Cardiology (m/f/d)",
            facility: "NabiOta® MVZ Ambulatory Care Center",
            type: "Full-Time / Part-Time",
            location: "Mönchengladbach",
          },
          {
            icon: Stethoscope,
            title: "Specialist in Orthopedic & Trauma Surgery (m/f/d)",
            facility: "NabiOta® MVZ Surgery & Anesthesiology",
            type: "Full-Time",
            location: "Mönchengladbach / NRW",
          },
          {
            icon: Heart,
            title: "Registered Nurse - Anesthesia & Surgical Care (m/f/d)",
            facility: "NabiOta® Clinics Germany (Inpatient Hospital § 30 GewO)",
            type: "Full-Time / Part-Time",
            location: "North Rhine-Westphalia",
          },
          {
            icon: Activity,
            title: "Certified Physiotherapist / Rehabilitation Specialist (m/f/d)",
            facility: "NabiOta® Rehabilitation & Therapy Center",
            type: "Full-Time / 4-Day Week",
            location: "Düsseldorf Region",
          },
          {
            icon: Sparkles,
            title: "Medical Radiology Technologist MTRA (m/f/d)",
            facility: "NabiOta® Diagnostics Center (CT/MRI/X-Ray)",
            type: "Full-Time",
            location: "Mönchengladbach",
          },
          {
            icon: ShieldCheck,
            title: "Registered Nurse / ICW Wound Care Specialist (m/f/d)",
            facility: "NabiOta® HomeCare (Outpatient & Wound Care)",
            type: "Full-Time / Part-Time",
            location: "NRW Region",
          },
        ],
      },
      culture: {
        eyebrow: "OUR CULTURE",
        title: "People. Values. Together.",
        desc: "We cultivate a workplace where respect, trust, and teamwork thrive. At NabiOta®, what matters most are not just credentials, but individuals eager to make an impact.",
        badgeTitle: "Growing together.",
        badgeSub: "Improving lives.",
      },
      testimonials: [
        {
          quote:
            "“Thanks to NabiOta’s dedicated medical licensing support, I was able to prepare for my German medical exam with complete peace of mind. Today, I practice as a cardiologist in their specialized MVZ.”",
          author: "Dr. med. Tariq Al-Mansoor",
          role: "Specialist in Internal Medicine & Cardiology, NabiOta® MVZ",
          avatar: "/images/careers/anna-mueller.webp",
        },
        {
          quote:
            "“The credential recognition for my nursing degree from overseas was completely seamless with NabiOta. Housing support, language training, and a welcoming clinical team made Germany feel like home.”",
          author: "Elena Rostova",
          role: "Registered ICU Nurse, NabiOta® Clinics",
          avatar: "/images/careers/anna-mueller.webp",
        },
        {
          quote:
            "“State-of-the-art 3T MRI technology, predictable shift scheduling, and a truly collaborative culture make NabiOta an exceptional healthcare employer.”",
          author: "Marco Di Bernardo",
          role: "Lead Radiology Technologist, NabiOta® Diagnostics",
          avatar: "/images/careers/anna-mueller.webp",
        },
      ],
      cta: {
        eyebrow: "READY FOR YOUR FUTURE?",
        title: "Become Part of NabiOta®.",
        desc: "Explore our current career opportunities or submit an open application for our international recruitment program.",
        button: "Apply Now",
      },
      applyForm: {
        eyebrow: "APPLY DIRECTLY",
        title: "Start Your Future with NabiOta®.",
        desc: "Submit your credentials or send a quick application in just a few clicks. Our recruitment team reviews your profile and responds within 48 hours.",
        nameLabel: "Full Name",
        namePlaceholder: "e.g. Maria Schmidt",
        emailLabel: "Email Address",
        emailPlaceholder: "your.email@example.com",
        phoneLabel: "Phone Number",
        phonePlaceholder: "+49 (0) 123 456789",
        positionLabel: "Desired Position / Department",
        positionPlaceholder: "Select position...",
        positions: [
          "Specialist Physician in Internal Medicine & Cardiology",
          "Specialist in Orthopedic & Trauma Surgery",
          "Registered Nurse - Anesthesia & Surgical Care",
          "Certified Physiotherapist / Rehabilitation Specialist",
          "Medical Radiology Technologist MTRA",
          "Registered Nurse / ICW Wound Care Specialist",
          "Open Application - Medical Doctors (Approbation Track)",
          "Open Application - Nursing Staff",
          "Open Application - Diagnostic Technologists (MTA)",
          "Open Application - Therapy & Rehabilitation",
        ],
        messageLabel: "Your Message (Optional)",
        messagePlaceholder: "Briefly tell us about your clinical experience, current German level, and planned start date...",
        uploadLabel: "Upload CV / Credentials (PDF, DOCX up to 10MB)",
        uploadHint: "Select file or drag here",
        privacy: "I consent to the processing of my personal data for recruitment and professional recognition evaluation purposes.",
        submitBtn: "Submit Application",
        submitting: "Submitting...",
        successTitle: "Thank You for Your Application!",
        successDesc: "Your application has been received. Our recruitment team is reviewing your profile and will get in touch with you shortly.",
        resetBtn: "Submit Another Application",
      },
      modal: {
        badgePrefix: "PILLAR",
        categoryLabel: "Category",
        targetLabel: "Target Group",
        scopeTitle: "Clinical Profile & Scope of Duties",
        approbationTitle: "360° Approbation & Visa Support",
        benefitsTitle: "Compensation & Employer Benefits",
        legalTitle: "Regulatory Standards & Compliance",
        applyBtn: "Apply for this Profile",
        closeBtn: "Close",
      },
    },
    ru: {
      hero: {
        eyebrow: "NABIOTA MEDICAL RECRUITMENT SERVICES GMBH",
        titlePrefix: "Вместе ради более",
        titleMid: "здорового",
        titleHighlight: "Будущего.",
        description:
          "Национальный и международный подбор врачей и медицинского персонала, полное сопровождение апробации (Approbation) и трудоустройство в клиниках и MVZ холдинга NabiOta и партнерских сетях Германии.",
        cta: "Смотреть открытые вакансии",
        floatingQuote: "«Больше чем просто работа — благородная миссия.»",
        badge1Title: "Full-Care",
        badge1Sub: "Апробация и виза",
        badge2Title: "Стандарт ВОЗ",
        badge2Sub: "Этичный найм",
        badge3Title: "Контракт",
        badge3Sub: "Клиники и MVZ",
      },
      mission: {
        eyebrow: "УСТАВНЫЕ ЗАДАЧИ И МИССИЯ ХОЛДИНГА",
        title: "Профессиональный подбор медицинских кадров и устойчивая интеграция.",
        desc: "NabiOta Medical Recruitment Services GmbH объединяет высококвалифицированных врачей, медсестринский персонал, технических ассистентов (MTA) и реабилитологов с передовыми учреждениями здравоохранения Германии. Мы берем на себя все этапы: от проверки диплома и получения апробации (Approbation / Berufserlaubnis) до курсов медицинского немецкого, визового сопровождения, релокации и постоянного трудоустройства.",
        role: "Руководство холдинга и отдел рекрутинга",
        badgeLine1: "Мы развиваем медицинские таланты,",
        badgeLine2: "ведь именно люди формируют будущее медицины.",
      },
      pillarSection: {
        eyebrow: "НАПРАВЛЕНИЯ ПОДБОРА ПЕРСОНАЛА",
        title: "4 ключевых направления медицинского рекрутмента",
        desc: "Системный подбор и юридическое сопровождение для больниц, центров амбулаторной помощи (MVZ), отделений лучевой диагностики и реабилитационных клиник.",
        openModalBtn: "Профиль и требования апробации",
      },
      pillars: [
        {
          id: "aerzte",
          title: "Врачи и медицинские специалисты",
          category: "Клиническая медицина и MVZ",
          badge: "Апробация и специализация",
          targetGroup: "Врачи-ассистенты, врачи-специалисты (Fachärzte), заведующие отделениями",
          shortDesc: "Трудоустройство врачей в клиники и амбулаторные центры MVZ с полным сопровождением получения апробации (§ 3 BÄO) и разрешения на работу (§ 10 BÄO).",
          description: "NabiOta Medical Recruitment Services GmbH осуществляет профессиональный подбор и интеграцию врачей в Германии и из-за рубежа. Терапия, кардиология, гастроэнтерология, хирургия, анестезиология, неврология или радиология — мы обеспечиваем прямое трудоустройство в передовые медицинские центры. Зарубежные коллеги получают комплексную юридическую поддержку вплоть до сдачи экзаменов и получения постоянной немецкой апробации (§ 3 BÄO).",
          image: "/images/careers/mission-doctors-highres.webp",
          rolesList: [
            "Врачи-специалисты и Oberärzte (кардиология, хирургия, общая медицина, анестезиология)",
            "Врачи-ассистенты (Assistenzärzte) в процессе прохождения резидентуры (Weiterbildung)",
            "Врачи отделений интенсивной терапии и неотложной помощи",
            "Амбулаторные врачи для центров первичной и специализированной помощи MVZ (§ 95 SGB V)",
          ],
          requirements: [
            "Оконченное высшее медицинское образование (лечебное дело / педиатрия)",
            "Уровень владения немецким языком: B2 общий + C1 медицинский",
            "Наличие полного комплекта академических справок и выписок часов",
            "Готовность к сдаче профессионального экзамена (Fachsprachprüfung FSP) при врачебной палате",
          ],
          approbationService: [
            "Подготовка и подача документов на Berufserlaubnis (§ 10 BÄO) и постоянную Approbation",
            "Организация присяжных переводов и апостилирования документов",
            "Юридическое сопровождение экспертизы документов (Gutachten / Defizitbescheid) и экзамена (Kenntnisprüfung)",
            "Ускоренное оформление рабочей визы (§ 16d / § 18a AufenthG) через Федеральное агентство занятости",
          ],
          benefitsPackage: [
            "Прямой бессрочный трудовой договор с клиникой (без лизинговых схем)",
            "Оплата по тарифным сеткам TV-Ärzte / Marburger Bund с надбавками",
            "Бюджет на повышение квалификации и аккредитованные программы ординатуры",
            "30 рабочих дней отпуска в год и оплачиваемый адаптационный период",
            "Релокационный бонус, подбор служебного жилья и регистрация в Германии",
          ],
          legalFramework: "Правовая основа: Федеральное положение о врачах (BÄO), BQFG. Решения о выдаче врачебных лицензий принимаются исключительно земельными ведомствами (Landesprüfungsamt / Regierungspräsidium).",
        },
        {
          id: "pflege",
          title: "Сестринский персонал и операционный блок",
          category: "Стационарный и амбулаторный уход",
          badge: "Государственное признание",
          targetGroup: "Дипломированные медсестры/медбратья, персонал реанимации и операционных",
          shortDesc: "Этичный рекрутинг и долгосрочная интеграция квалифицированных медсестер для отделений интенсивной терапии, хирургии и патронажа.",
          description: "Медицинские сестры — основа надежной и чуткой заботы о пациентах. Мы трудоустраиваем дипломированный средний медперсонал в стационары, отделения анестезиологии и реанимации, операционные блоки и службы домашнего ухода (HomeCare). Иностранные специалисты получают полную поддержку при прохождении процедуры признания диплома по закону PflBG.",
          image: "/images/careers/hero-career-nurse.webp",
          rolesList: [
            "Дипломированные медицинские сестры и медбратья стационара",
            "Медсестры анестезиологии и отделений реанимации (Intensivpflege)",
            "Операционные ассистенты (OTA) и операционные медсестры",
            "Специалисты амбулаторного патронажа и лечения хронических ран (Wundexperte ICW)",
          ],
          requirements: [
            "Среднее специальное или высшее сестринское образование (диплом колледжа/университета)",
            "Сертификат немецкого языка B2 Pflege (Goethe или telc)",
            "Подтвержденный опыт клинической практики и учебный план с часами",
            "Высокая эмпатия, надежность и ориентация на безопасность пациента",
          ],
          approbationService: [
            "Подача заявления на признание квалификации в земельные ведомства здравоохранения",
            "Организация курсов адаптации (Anpassungslehrgang) или подготовка к экзамену Kenntnisprüfung",
            "Взаимодействие с Центральным агентством по признанию дипломов (ZSBA)",
            "Ускоренное получение разрешения на работу и визы по закону BeschV",
          ],
          benefitsPackage: [
            "Тарифная оплата по TVöD-P / AVR с надбавками за дежурства и интенсивность",
            "Корпоративное пенсионное страхование и ежегодные премиальные выплаты",
            "Прозрачные графики смен для сохранения баланса работы и отдыха",
            "Бесплатные языковые и профессиональные тренинги внутри клиники",
            "Содействие в воссоединении семьи и устройстве детей в детские сады",
          ],
          legalFramework: "Правовая основа: Закон о сестринских профессиях (PflBG), PflAPrV. Рекрутинг осуществляется в строгом соответствии с глобальным кодексом этичного найма ВОЗ.",
        },
        {
          id: "diagnostik",
          title: "Рентген- и лабораторные ассистенты (MTA)",
          category: "Медицинская техника и лаборатории",
          badge: "Высокие технологии",
          targetGroup: "Ассистенты радиологии (MTRA), лаборатории (MTLA), медсестры приема (MFA)",
          shortDesc: "Специалисты для работы на высокопольных томографах (КТ, МРТ, рентген) и в автоматизированных клинических лабораториях.",
          description: "Точная диагностика невозможна без инновационных технологий и квалифицированных специалистов. Мы привлекаем рентген-лаборантов (MTRA) и специалистов лабораторной диагностики (MTLA) в диагностические центры, отделения радиологии и клинические лаборатории. Специалисты из-за рубежа получают поддержку в признании образования по новому закону MTBG.",
          image: "/images/diagnostik/modality-mrt.webp",
          rolesList: [
            "MTRA для работы на МРТ 3 Тесла, мультиспиральных КТ и цифровом рентгене",
            "MTLA для отделений клинической химии, гематологии и микробиологии",
            "Медицинские ассистенты (MFA) для координации приема и процедурных кабинетов",
            "Ответственные специалисты по радиационной безопасности и контролю качества",
          ],
          requirements: [
            "Диплом рентген-лаборанта или фельдшера лабораторной диагностики",
            "Владение немецким языком на уровне не ниже B2",
            "Курсы радиационной безопасности (можно пройти в Германии)",
            "Техническая грамотность, внимательность к деталям и аккуратность",
          ],
          approbationService: [
            "Оформление разрешения на осуществление деятельности по закону MTBG",
            "Анализ учебных планов и часов практической подготовки",
            "Запись на сертифицированные курсы радиационной защиты (StrlSchV)",
            "Сопровождение в получении рабочей визы и трудоустройстве",
          ],
          benefitsPackage: [
            "Высокие тарифные ставки с надбавками за работу со сложной медтехникой",
            "Работа на сканерах экспертного класса (Siemens Healthineers, Philips)",
            "Нормированный график без ночных перегрузок и длительных смен",
            "Обучение углубленным методикам (кардио-МРТ, нейрорадиология)",
            "Персональное наставничество в период адаптации",
          ],
          legalFramework: "Правовая основа: Закон о профессиях в области медицинских технологий (MTBG). Деятельность осуществляется только при наличии государственного разрешения.",
        },
        {
          id: "therapie",
          title: "Физиотерапия, эрготерапия и логопедия",
          category: "Реабилитация и восстановление",
          badge: "Терапевтический опыт",
          targetGroup: "Физиотерапевты, эрготерапевты, логопеды, специалисты ЛФК и MTT",
          shortDesc: "Специалисты для амбулаторной и стационарной реабилитации: ортопедия, неврология, педиатрия и гериатрия.",
          description: "Для эффективного восстановления пациентов мы привлекаем сертифицированных физиотерапевтов, эрготерапевтов и логопедов. Мы сотрудничаем с реабилитационными центрами, ортопедическими клиниками и стационарами, оказывая зарубежным терапевтам юридическую поддержку в признании образования по закону MPhG.",
          image: "/images/services/therapie.webp",
          rolesList: [
            "Физиотерапевты (мануальная терапия, KGG, методики Bobath / PNF, лимфодренаж)",
            "Эрготерапевты (восстановление моторики, когнитивных функций, адаптация)",
            "Логопеды (лечение дисфагии, афазии, восстановление речи после инсультов)",
            "Инструкторы лечебной физкультуры и медицинской тренировочной терапии (MTT)",
          ],
          requirements: [
            "Диплом государственного образца по специальности физиотерапия/эрготерапия",
            "Уверенное владение немецким языком на уровне B2",
            "Сертификаты по спецметодикам (MT, Bobath, MLD) приветствуются",
            "Умение работать в междисциплинарной клинической команде",
          ],
          approbationService: [
            "Процедура признания квалификации в земельных органах здравоохранения",
            "Согласование программы практической адаптации при разнице часов",
            "Помощь в поступлении на сертифицированные курсы специализации",
            "Оформление визы и долгосрочного вида на жительство (§ 16d / § 18a AufenthG)",
          ],
          benefitsPackage: [
            "Достойный уровень оплаты с оплачиваемыми учебными днями",
            "Полная или частичная оплата курсов специализации клиники (MT, KGG)",
            "Светлые терапевтические залы с современным реабилитационным инвентарем",
            "Гибкие графики (полная ставка, частичная, 4-дневная рабочая неделя)",
            "Дружный коллектив с участием опытных врачей-реабилитологов",
          ],
          legalFramework: "Правовая основа: Закон о массажистах и физиотерапевтах (MPhG), ErgThG, LogopG. Оплата услуг кассами (§ 124 SGB V) возможна только при наличии государственного сертификата.",
        },
      ],
      pathwaySection: {
        eyebrow: "ПОШАГОВЫЙ ПЛАН ИНТЕГРАЦИИ",
        title: "5 шагов к бессрочному контракту в клинике Германии",
        desc: "От первой консультации и нотариального перевода до первого рабочего дня: наша система обеспечивает предсказуемость и надежность.",
      },
      pathway: [
        {
          step: "01",
          title: "Анализ диплома и оценка перспектив",
          desc: "Детальный аудит диплома, часов клинической практики и опыта работы. Мы определяем подходящий путь признания (Defizitbescheid или прямое подтверждение) и формируем индивидуальный план действий.",
        },
        {
          step: "02",
          title: "Медицинский немецкий и экзамен FSP (B2/C1)",
          desc: "Интенсивная языковая подготовка с врачами-преподавателями: разбор клинических случаев, оформление историй болезни и подготовка к сдаче экзамена FSP во врачебной палате или B2 Pflege.",
        },
        {
          step: "03",
          title: "Документы, Defizitbescheid и виза",
          desc: "Присяжные переводы, нотариальные копии, подача документов в земельное ведомство (Regierungspräsidium) и оформление национальной визы (§ 16d / § 18a AufenthG) в посольстве.",
        },
        {
          step: "04",
          title: "Подбор клиники, стажировка и контракт",
          desc: "Организация собеседований с главврачами больниц и MVZ сети NabiOta, клиническая практика (Hospitation) и подписание официального бессрочного трудового договора.",
        },
        {
          step: "05",
          title: "Релокация, жилье и социальная интеграция",
          desc: "Помощь в поиске квартиры, регистрация по месту жительства (Bürgeramt), открытие банковского счета, оформление страховки, воссоединение семьи и персональный куратор.",
        },
      ],
      compliance: {
        eyebrow: "ПРАВОВЫЕ СТАНДАРТЫ И КОМПЛАЕНС",
        title: "Законный, этичный и прозрачный медицинский рекрутинг",
        desc: "Деятельность NabiOta Medical Recruitment Services GmbH строго соответствует законодательству Германии и нормам международного права.",
        points: [
          {
            title: "Разделение прямого найма и лизинга персонала (AÜG)",
            text: "Прямой рекрутинг и аренда персонала организационно и юридически разделены. При прямом найме трудовой договор заключается исключительно между специалистом и клиникой.",
          },
          {
            title: "Этичный найм по стандартам ВОЗ",
            text: "Мы строго следуем Глобальному кодексу ВОЗ по международному найму специалистов здравоохранения (WHO Global Code) и не привлекаем персонал из стран «красного списка».",
          },
          {
            title: "Государственный суверенитет ведомств",
            text: "Решения о выдаче разрешений на работу, апробаций и виз принимаются исключительно государственными ведомствами Германии. Мы гарантируем безупречную юридическую подготовку.",
          },
          {
            title: "Защита данных и независимость врачебных решений",
            text: "Обработка персональных данных ведется строго по GDPR. Трудоустроенные специалисты обладают полной профессиональной независимостью в принятии медицинских решений.",
          },
        ],
      },
      benefits: {
        eyebrow: "ПОЧЕМУ NABIOTA®",
        title: "Ваши преимущества у нас.",
        desc: "Мы предлагаем современную рабочую среду, в которой вы сможете всесторонне развиваться личностно и профессионально.",
        items: [
          {
            icon: Heart,
            title: "Значимая и благородная работа",
            text: "Вы вносите прямой вклад в здоровье, благополучие и качество жизни людей.",
          },
          {
            icon: GraduationCap,
            title: "Обучение и карьерный рост",
            text: "Мы поддерживаем ваше непрерывное повышение квалификации персональными программами.",
          },
          {
            icon: Users,
            title: "Сильная и дружная команда",
            text: "Взаимное уважение, открытая коммуникация и надежное плечо коллег — наш стандарт.",
          },
          {
            icon: Clock,
            title: "Гибкие графики работы",
            text: "Мы обеспечиваем гармоничный баланс между работой и личной жизнью.",
          },
          {
            icon: Sparkles,
            title: "Современная инфраструктура",
            text: "Работайте на первоклассном медицинском оборудовании и с передовыми цифровыми сервисами.",
          },
          {
            icon: ShieldCheck,
            title: "Достойное вознаграждение",
            text: "Мы гарантируем прозрачные, справедливые и конкурентоспособные условия труда.",
          },
        ],
      },
      jobs: {
        eyebrow: "АКТУАЛЬНЫЕ ВАКАНСИИ",
        title: "Найдите свое место в нашем холдинге.",
        desc: "Откройте для себя перспективы работы в стационарных клиниках, амбулаторных центрах MVZ и отделениях диагностики.",
        allButton: "Смотреть все вакансии",
        positions: [
          {
            icon: Stethoscope,
            title: "Врач-специалист (m/w/d) по кардиологии и терапии",
            facility: "NabiOta® MVZ Центр амбулаторной помощи",
            type: "Полная занятость / Частичная",
            location: "Менхенгладбах",
          },
          {
            icon: Stethoscope,
            title: "Врач-специалист (m/w/d) по ортопедии и травматологии",
            facility: "NabiOta® MVZ Хирургия и анестезиология",
            type: "Полная занятость",
            location: "Менхенгладбах / NRW",
          },
          {
            icon: Heart,
            title: "Медсестра / медбрат анестезиологии и интенсивной терапии (m/w/d)",
            facility: "NabiOta® Clinics Germany (Стационарная клиника § 30 GewO)",
            type: "Полная занятость / Частичная",
            location: "Северный Рейн-Вестфалия",
          },
          {
            icon: Activity,
            title: "Физиотерапевт / Реабилитолог (m/w/d)",
            facility: "NabiOta® Rehabilitation & Therapy Center",
            type: "Полная занятость / 4 дня в неделю",
            location: "Дюссельдорф / регион",
          },
          {
            icon: Sparkles,
            title: "Рентген-лаборант MTRA (КТ/МРТ) (m/w/d)",
            facility: "NabiOta® Diagnostics Center",
            type: "Полная занятость",
            location: "Менхенгладбах",
          },
          {
            icon: ShieldCheck,
            title: "Медицинская сестра / эксперт по лечению ран ICW (m/w/d)",
            facility: "NabiOta® HomeCare (Амбулаторный уход и лечение ран)",
            type: "Полная занятость / Частичная",
            location: "Регион NRW",
          },
        ],
      },
      culture: {
        eyebrow: "НАША КУЛЬТУРА",
        title: "Люди. Ценности. Единство.",
        desc: "Мы создаем рабочую атмосферу, в которой искренне ценятся уважение, доверие и командный дух. В NabiOta® важны не только дипломы, но и люди, искренне стремящиеся приносить пользу.",
        badgeTitle: "Вместе расти.",
        badgeSub: "Улучшать жизни.",
      },
      testimonials: [
        {
          quote:
            "«Благодаря поддержке рекрутинговой службы NabiOta я успешно подтвердил диплом и сдал языковой экзамен. Сейчас я работаю врачом-кардиологом в амбулаторном центре холдинга.»",
          author: "Д-р мед. Тарик Аль-Мансур",
          role: "Врач-кардиолог, NabiOta® MVZ",
          avatar: "/images/careers/anna-mueller.webp",
        },
        {
          quote:
            "«Процесс признания сестринского диплома прошел очень быстро и прозрачно. Кураторы помогли с переездом, жильем и адаптацией в немецком коллективе.»",
          author: "Елена Ростова",
          role: "Медсестра реанимационного отделения, NabiOta® Clinics",
          avatar: "/images/careers/anna-mueller.webp",
        },
        {
          quote:
            "«Современные томографы 3 Тесла, четкий график без ночных перегрузок и открытое руководство делают работу в диагностическом центре комфортной и продуктивной.»",
          author: "Марко Ди Бернардо",
          role: "Ведущий рентген-лаборант MTRA, NabiOta® Diagnostics",
          avatar: "/images/careers/anna-mueller.webp",
        },
      ],
      cta: {
        eyebrow: "ГОТОВЫ К ВАШЕМУ БУДУЩЕМУ?",
        title: "Станьте частью NabiOta®.",
        desc: "Изучите открытые вакансии или отправьте резюме для участия в программе международного медицинского трудоустройства.",
        button: "Откликнуться сейчас",
      },
      applyForm: {
        eyebrow: "БЫСТРЫЙ ОТКЛИК",
        title: "Начните свое будущее в NabiOta®.",
        desc: "Отправьте ваши документы или заполните быструю форму. Отдел рекрутинга изучит ваши квалификации и свяжется с вами в течение 48 часов.",
        nameLabel: "Имя и фамилия",
        namePlaceholder: "например, Мария Шмидт",
        emailLabel: "Электронная почта",
        emailPlaceholder: "vasha.pochta@example.com",
        phoneLabel: "Номер телефона",
        phonePlaceholder: "+49 (0) 123 456789",
        positionLabel: "Желаемая позиция / Направление",
        positionPlaceholder: "Выберите вакансию...",
        positions: [
          "Врач-специалист (m/w/d) по кардиологии и терапии",
          "Врач-специалист (m/w/d) по ортопедии и травматологии",
          "Медсестра / медбрат анестезиологии и интенсивной терапии (m/w/d)",
          "Физиотерапевт / Реабилитолог (m/w/d)",
          "Рентген-лаборант MTRA (КТ/МРТ) (m/w/d)",
          "Медицинская сестра / эксперт по лечению ран ICW (m/w/d)",
          "Инициативное резюме — Врачебный персонал (Апробация)",
          "Инициативное резюме — Сестринский персонал",
          "Инициативное резюме — Диагностика и MTA",
          "Инициативное резюме — Физиотерапия и реабилитация",
        ],
        messageLabel: "Сообщение (необязательно)",
        messagePlaceholder: "Расскажите кратко о вашей специальности, текущем уровне немецкого языка и желаемых сроках начала работы...",
        uploadLabel: "Прикрепить резюме / документы (PDF, DOCX до 10MB)",
        uploadHint: "Выберите файл или перетащите сюда",
        privacy: "Я даю согласие на обработку персональных данных в целях рассмотрения моей кандидатуры и предварительной оценки признания диплома.",
        submitBtn: "Отправить заявку",
        submitting: "Отправка...",
        successTitle: "Спасибо за ваш отклик!",
        successDesc: "Ваши данные успешно получены. Наш отдел рекрутинга свяжется с вами в ближайшее время.",
        resetBtn: "Отправить еще одну заявку",
      },
      modal: {
        badgePrefix: "НАПРАВЛЕНИЕ",
        categoryLabel: "Категория",
        targetLabel: "Целевая аудитория",
        scopeTitle: "Профиль специальности и клинические задачи",
        approbationTitle: "360° Сопровождение апробации и визы",
        benefitsTitle: "Условия труда и компенсационный пакет",
        legalTitle: "Нормативно-правовые стандарты",
        applyBtn: "Подать заявку по этому профилю",
        closeBtn: "Закрыть",
      },
    },
  };

  const t =
    (careerTranslations as Record<string, typeof careerTranslations.de>)[locale] ||
    careerTranslations.en ||
    careerTranslations.de;

  return (
    <div className="flex flex-col min-h-screen bg-white text-forest-950 font-sans selection:bg-[#C5A56A]/20 selection:text-forest-950">
      <Header currentLocale={locale} />

      <main className="flex-1">
        {/* ── SECTION 1: HERO (Unified Format: Compact Dark Forest Green + Doctors + Golden Arcs) ── */}
        <section className="relative w-full min-h-[480px] sm:min-h-[520px] lg:h-[600px] lg:min-h-[600px] pt-32 sm:pt-36 lg:pt-40 pb-14 sm:pb-16 overflow-hidden flex items-center bg-[#07150C] text-[#FAF8F5] border-b border-[#D5B878]/25">
          {/* Background: Modern Healthcare Professional in scrubs holding tablet */}
          <div className="absolute inset-0 sm:left-[18%] sm:w-[82%] z-0 pointer-events-none overflow-hidden">
            <Image
              src="/images/careers/hero-career-nurse.webp"
              alt="NabiOta Medical Recruitment Services"
              fill
              priority
              sizes="(max-width: 640px) 100vw, 82vw"
              className="object-cover object-[75%_center] sm:object-[70%_center] lg:object-[center_25%]"
            />
            {/* Desktop right-side subtle blend */}
            <div className="hidden sm:block absolute inset-0 bg-gradient-to-r sm:from-[#07150C]/25 sm:via-transparent sm:to-black/10" />
          </div>

          {/* Desktop/Tablet SVG with Deep Forest Green Shape & Dual Glowing Golden Arcs */}
          <svg
            className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 1440 600"
            preserveAspectRatio="none"
          >
            <defs>
              <clipPath id="careerLeftWingClip">
                <path d="M 0,0 L 620,0 C 710,180 680,420 800,600 L 0,600 Z" />
              </clipPath>

              <linearGradient id="careerHeroGoldGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#DFC894" stopOpacity="0.4" />
                <stop offset="25%" stopColor="#ECCF93" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#D4B06A" stopOpacity="1" />
                <stop offset="75%" stopColor="#ECCF93" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#DFC894" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="careerHeroGoldGradLight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ECCF93" stopOpacity="0.08" />
                <stop offset="35%" stopColor="#ECCF93" stopOpacity="0.45" />
                <stop offset="75%" stopColor="#DFC894" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#DFC894" stopOpacity="0.08" />
              </linearGradient>
              <filter id="careerHeroGoldGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="careerDarkGreenFill" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#040F07" stopOpacity="0.15" />
                <stop offset="40%" stopColor="#040F07" stopOpacity="0.32" />
                <stop offset="70%" stopColor="#07180D" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#0A1E13" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            <image
              href="/images/botanical-gold-bg.webp"
              x="0"
              y="0"
              width="1440"
              height="600"
              preserveAspectRatio="xMinYMid slice"
              clipPath="url(#careerLeftWingClip)"
              opacity="1"
            />

            <path
              d="M 0,0 L 620,0 C 710,180 680,420 800,600 L 0,600 Z"
              fill="url(#careerDarkGreenFill)"
            />

            <path
              d="M 620,0 C 710,180 680,420 800,600"
              stroke="url(#careerHeroGoldGrad)"
              strokeWidth="2"
              fill="none"
              filter="url(#careerHeroGoldGlow)"
            />

            <path
              d="M 645,0 C 735,185 705,430 825,600"
              stroke="url(#careerHeroGoldGradLight)"
              strokeWidth="1"
              fill="none"
            />
          </svg>

          {/* Mobile Background */}
          <div className="sm:hidden absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/images/botanical-gold-bg.webp"
              alt=""
              fill
              className="object-cover object-left"
              priority
            />
            <div className="absolute inset-0 bg-[#07150C]/65" />
          </div>

          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#051208]/80 to-transparent pointer-events-none z-10" />

          <div className="absolute top-0 left-0 w-52 sm:w-64 lg:w-80 h-52 sm:h-64 lg:h-80 pointer-events-none z-10 opacity-70">
            <Image
              src="/images/values/leaves-bg.webp"
              alt="Foliage"
              fill
              className="object-contain object-left-top opacity-30 mix-blend-screen"
            />
          </div>

          <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-xl lg:max-w-[540px] xl:max-w-[620px]">
              <nav className="flex items-center gap-2 text-xs sm:text-[12.5px] text-[#A2ADA4] mb-3.5 font-sans" aria-label="Breadcrumb">
                <Link href={`/${locale}`} className="hover:text-[#D5B878] transition-colors">
                  {locale === "ru" ? "Главная" : locale === "en" ? "Home" : "Startseite"}
                </Link>
                <span className="text-[#A2ADA4]/70 text-[10px] font-bold">›</span>
                <span className="text-white/95 font-medium">
                  {locale === "ru" ? "Карьера & Рекрутмент" : locale === "en" ? "Career & Recruitment" : "Karriere & Recruitment"}
                </span>
              </nav>

              <div className="inline-block px-3 py-1 rounded-full bg-[#D5B878]/15 border border-[#D5B878]/30 text-[11px] font-semibold tracking-wider text-[#ECCF93] uppercase mb-3 font-sans">
                {t.hero.eyebrow}
              </div>

              <h1 className="page-hero-title font-serif text-[32px] sm:text-[40px] lg:text-[44px] xl:text-[50px] text-white font-normal leading-[1.12] tracking-tight mb-4 break-words [overflow-wrap:anywhere] hyphens-auto">
                {t.hero.titlePrefix}
                <br />
                {t.hero.titleMid}{" "}
                <span className="italic font-serif text-[#C5A56A] font-normal inline">
                  {t.hero.titleHighlight}
                </span>
              </h1>

              <p className="hero-text-wrap text-[13.5px] sm:text-[14.5px] text-[#D2DED5] leading-[1.72] font-sans max-w-xl mb-6 font-normal break-words [overflow-wrap:anywhere] hyphens-auto">
                {t.hero.description}
              </p>

              <div className="mb-8">
                <HeroBadges
                  items={[
                    {
                      icon: Users,
                      title: t.hero.badge1Title,
                      sub: t.hero.badge1Sub,
                    },
                    {
                      icon: GraduationCap,
                      title: t.hero.badge2Title,
                      sub: t.hero.badge2Sub,
                    },
                    {
                      icon: Heart,
                      title: t.hero.badge3Title,
                      sub: t.hero.badge3Sub,
                    },
                  ]}
                />
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#stellen"
                  className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-[#C5A56A] hover:bg-[#D5B878] text-[#07150C] font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all duration-200 hover:scale-[1.02]"
                >
                  <span>{t.hero.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#saeulen"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 hover:border-[#C5A56A] text-white hover:text-[#C5A56A] text-xs sm:text-sm font-medium transition-all duration-200"
                >
                  <span>{t.pillarSection.title}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: UNSERE MISSION (Matching Reference with Executive Calligraphy) ────── */}
        <section className="py-12 sm:py-16 bg-[#FCFAF7]">
          <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.24em] text-[#C5A56A] uppercase block">
                  {t.mission.eyebrow}
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-forest-950 font-normal leading-tight">
                  {t.mission.title}
                </h2>

                <p className="text-sm sm:text-[15px] text-[#4E5650] leading-[1.8] font-normal">
                  {t.mission.desc}
                </p>

                <div className="pt-6 flex flex-col items-start select-none">
                  <div className="flex items-baseline gap-1.5 sm:gap-2">
                    <span className="font-signature text-4xl sm:text-5xl lg:text-[54px] text-[#142318] tracking-wide font-normal leading-none">
                      NabiOta
                    </span>
                    <span className="text-xs text-[#C5A56A] font-serif -ml-1 -top-3.5 relative font-bold">®</span>
                    <span className="font-signature text-3xl sm:text-4xl lg:text-[42px] text-[#243327] tracking-wide font-normal leading-none">
                      Health Group Germany
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-3 w-64 sm:w-72">
                    <div className="h-[1.5px] bg-[#C5A56A] flex-1 rounded-full" />
                    <span className="text-[11px] sm:text-xs text-[#717A73] tracking-[0.2em] uppercase font-medium">
                      {t.mission.role}
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[16/11] sm:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#EDE7D9]">
                  <Image
                    src="/images/careers/mission-doctors-highres.webp"
                    alt="NabiOta Medical Recruitment Services"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <div className="relative -mt-10 sm:-mt-12 mx-auto max-w-[92%] sm:max-w-md bg-[#FAF7F0] rounded-2xl px-6 py-4 sm:px-7 sm:py-5 shadow-[0_12px_28px_rgba(0,0,0,0.08)] border border-[#EAE3D4] flex items-center gap-4 sm:gap-5 z-20">
                  <div className="flex-shrink-0 text-[#C5A56A]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9 sm:w-10 sm:h-10">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div className="text-xs sm:text-[13.5px] text-[#1C241D] leading-snug">
                    <span className="font-medium block">{t.mission.badgeLine1}</span>
                    <span className="text-[#555C56] block mt-0.5">{t.mission.badgeLine2}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: DIE 4 FACHKRÄFTE-SÄULEN (Interactive Modal Cards matching Photo 1) ────── */}
        <section id="saeulen" className="py-14 sm:py-18 lg:py-20 bg-[#FAF9F6] border-t border-[#EDE8DE]">
          <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.24em] text-[#C5A56A] uppercase block mb-3">
                {t.pillarSection.eyebrow}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-forest-950 font-normal leading-tight mb-4">
                {t.pillarSection.title}
              </h2>
              <p className="text-sm sm:text-base text-[#4E5650] leading-relaxed max-w-2xl">
                {t.pillarSection.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
              {t.pillars.map((pillar) => (
                <div
                  key={pillar.id}
                  onClick={() => setSelectedPillar(pillar)}
                  className="rounded-3xl bg-white border border-[#EAE4D7] shadow-sm hover:shadow-xl hover:border-[#C5A56A] transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
                >
                  {/* Photo with pill badge at top left */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#07150C]">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Dark green badge matching Photo 1 */}
                    <div className="absolute top-3.5 left-3.5 bg-[#0C2917] text-white px-3.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-xs border border-white/10 z-10">
                      {pillar.badge}
                    </div>
                  </div>

                  {/* Card Content with circular icon overlapping the image & gentle wave */}
                  <div className="relative bg-white pt-2 pb-6 px-6 sm:px-7 flex-1 flex flex-col justify-between">
                    {/* Curved wave transition at top */}
                    <div className="absolute -top-6 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
                      <svg
                        viewBox="0 0 400 32"
                        preserveAspectRatio="none"
                        className="w-full h-7 fill-white"
                      >
                        <path d="M 0,16 C 18,5 34,0 64,0 C 98,0 118,13 145,17 C 225,27 325,16 400,13 L 400,32 L 0,32 Z" />
                      </svg>
                    </div>

                    {/* Circular Icon with light green background overlapping the photo on the left */}
                    <div className="relative -mt-9 mb-3.5 z-10">
                      <div className="w-12 h-12 rounded-full bg-[#E5F0E8] border border-[#CCE0D2] flex items-center justify-center text-[#1C3E2A] shadow-xs group-hover:scale-105 transition-transform">
                        {pillar.id === "aerzte" && <Stethoscope className="w-6 h-6 stroke-[1.8]" />}
                        {pillar.id === "pflege" && <FileCheck className="w-6 h-6 stroke-[1.8]" />}
                        {pillar.id === "diagnostik" && <Settings className="w-6 h-6 stroke-[1.8]" />}
                        {pillar.id === "therapie" && <HeartHandshake className="w-6 h-6 stroke-[1.8]" />}
                      </div>
                    </div>

                    {/* Title & Description on white background */}
                    <div className="space-y-2 mb-4">
                      <h3 className="font-serif text-xl sm:text-[21px] font-bold text-[#142318] leading-tight group-hover:text-[#8D6B27] transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#55695C] leading-relaxed">
                        {pillar.shortDesc}
                      </p>
                    </div>

                    {/* Bottom Action Area: Pill Button + Circle Arrow Button matching Photo 1 */}
                    <div className="pt-4 mt-auto border-t border-[#F2ECE1] flex items-center justify-between">
                      <span className="px-4 py-2 rounded-full bg-[#FAF3E7] text-[#93712C] text-xs font-semibold group-hover:bg-[#F5EAD4] transition-colors">
                        {t.pillarSection.openModalBtn}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-[#FAF3E7] border border-[#EADBBE] flex items-center justify-center text-[#93712C] group-hover:bg-[#C5A56A] group-hover:text-white group-hover:border-[#C5A56A] transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4: DER 360°-INTEGRATIONSPFAD (Matching Photo 2 with Right Icon Badges) ────── */}
        <section className="py-14 sm:py-18 lg:py-20 bg-[#07160D] text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden mix-blend-screen">
            <Image
              src="/images/bacground.webp"
              alt="Watermark"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.24em] text-[#C5A56A] uppercase block mb-3">
                {t.pathwaySection.eyebrow}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-white font-normal leading-tight mb-4">
                {t.pathwaySection.title}
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl font-light">
                {t.pathwaySection.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
              {t.pathway.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl sm:rounded-3xl p-6 sm:p-7 bg-[#0A2214]/60 border border-[#1E432A] backdrop-blur-xs flex flex-col justify-between space-y-4 hover:border-[#D5B878]/60 transition-all duration-300 group shadow-xs"
                >
                  <div className="space-y-4">
                    {/* Top Row: Left number circle + Right icon circle matching Photo 2 */}
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-full border border-[#D5B878]/70 text-[#ECCF96] font-serif font-bold text-xs sm:text-sm flex items-center justify-center">
                        {item.step}
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white/80 shadow-xs group-hover:scale-105 transition-transform">
                        {idx === 0 && <FileText className="w-5 h-5 stroke-[1.8]" />}
                        {idx === 1 && <Search className="w-5 h-5 stroke-[1.8]" />}
                        {idx === 2 && <Users className="w-5 h-5 stroke-[1.8]" />}
                        {idx === 3 && <Building2 className="w-5 h-5 stroke-[1.8]" />}
                        {idx === 4 && <Plane className="w-5 h-5 stroke-[1.8]" />}
                      </div>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-white/70 leading-relaxed font-sans mt-2">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 5: VORTEILE (WARUM NABIOTA®) ────── */}
        <section className="py-14 sm:py-18 lg:py-20 bg-[#FAF9F6] border-t border-[#EDE8DE]">
          <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.24em] text-[#C5A56A] uppercase block mb-3">
                {t.benefits.eyebrow}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-forest-950 font-normal leading-tight mb-4">
                {t.benefits.title}
              </h2>
              <p className="text-sm sm:text-base text-[#4E5650] leading-relaxed max-w-2xl">
                {t.benefits.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {t.benefits.items.map((b, idx) => (
                <div
                  key={idx}
                  className="p-7 sm:p-8 rounded-2xl bg-white border border-[#EAE4D7] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-[#DFC894] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="text-[#C5A56A] mb-5">
                      {idx === 0 && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                      )}
                      {idx === 1 && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                          <path d="M6 12v5c3 3 9 3 12 0v-5" />
                        </svg>
                      )}
                      {idx === 2 && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      )}
                      {idx === 3 && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                      )}
                      {idx === 4 && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                        </svg>
                      )}
                      {idx === 5 && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          <path d="M12 8v8" />
                          <path d="m8.5 12.5 3.5 3.5 3.5-3.5" />
                        </svg>
                      )}
                    </div>
                    <h3 className="font-serif font-bold text-lg text-forest-950 mb-2 leading-snug">
                      {b.title}
                    </h3>
                    <p className="text-xs sm:text-[13.5px] text-[#555C56] leading-relaxed">
                      {b.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 6: AKTUELLE STELLENANGEBOTE ────── */}
        <section id="stellen" className="py-14 sm:py-18 lg:py-20 bg-[#FAF7F2] border-t border-[#EDE7D9] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0">
            <Image
              src="/images/about/photo2.webp"
              alt=""
              fill
              className="object-cover object-left opacity-90"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#FAF7F2]/40" />
          </div>

          <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5 space-y-6">
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.24em] text-[#C5A56A] uppercase block">
                  {t.jobs.eyebrow}
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-forest-950 font-normal leading-tight">
                  {t.jobs.title}
                </h2>

                <p className="text-sm sm:text-base text-[#4E5650] leading-relaxed">
                  {t.jobs.desc}
                </p>

                <div className="pt-2">
                  <a
                    href="#bewerbung"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#142318] font-semibold text-xs sm:text-sm tracking-wide transition-all duration-200 hover:scale-[1.02] shadow-sm"
                  >
                    <span>{t.jobs.allButton}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-3.5">
                {t.jobs.positions.map((job, idx) => {
                  const JobIcon = job.icon;
                  return (
                    <div
                      key={idx}
                      onClick={() => handleSelectJob(job.title)}
                      className="p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-xs border border-[#EDE7D9] hover:border-[#C5A56A] shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-between group cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FAF6EE] border border-[#E5D7B7] flex items-center justify-center text-[#C5A56A] flex-shrink-0 group-hover:bg-[#C5A56A] group-hover:text-white transition-colors duration-200">
                          <JobIcon className="w-5 h-5 stroke-[1.75]" />
                        </div>
                        <div>
                          <h3 className="font-serif font-bold text-sm sm:text-base text-forest-950 group-hover:text-[#8D6B27] transition-colors leading-snug">
                            {job.title}
                          </h3>
                          <p className="text-[11.5px] sm:text-xs text-[#717A73] mt-0.5 flex items-center gap-2">
                            <span>{job.facility}</span>
                            <span className="text-[#C5A56A]">|</span>
                            <span>{job.type}</span>
                            <span className="text-[#C5A56A]">|</span>
                            <span className="text-[#3A5040] font-medium">{job.location}</span>
                          </p>
                        </div>
                      </div>

                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#C5A56A] group-hover:translate-x-1 transition-transform">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 7: RECHTLICHE TRANSPARENZ & COMPLIANCE (§ 6 PDF) ────── */}
        <section className="py-14 sm:py-16 bg-[#F5EFE4] border-t border-[#E6DBC9]">
          <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.24em] text-[#8D6B27] uppercase block mb-2">
                {t.compliance.eyebrow}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#142318] font-normal leading-tight mb-3">
                {t.compliance.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#4E5650] leading-relaxed">
                {t.compliance.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
              {t.compliance.points.map((point, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E0D4C0] shadow-xs flex items-start gap-4"
                >
                  <div className="w-9 h-9 rounded-full bg-[#FAF5EC] border border-[#C5A56A] flex items-center justify-center text-[#8D6B27] shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-base font-bold text-[#142318]">
                      {point.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#4E5650] leading-relaxed">
                      {point.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 8: UNSERE KULTUR ────── */}
        <section className="py-10 sm:py-12 bg-[#FAF8F5]">
          <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-[#07160C] text-white overflow-hidden relative shadow-xl border border-white/10">
              <div className="absolute inset-0 pointer-events-none z-0">
                <Image
                  src="/images/values/leaves-bg.webp"
                  alt=""
                  fill
                  className="object-cover object-left opacity-35 mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#07160C]/95 via-[#07160C]/70 to-transparent" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[280px] sm:min-h-[320px] relative z-10">
                <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-center space-y-3.5">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.24em] text-[#C5A56A] uppercase block">
                    {t.culture.eyebrow}
                  </span>

                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] text-white font-normal leading-tight">
                    {t.culture.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-light max-w-lg">
                    {t.culture.desc}
                  </p>
                </div>

                <div className="lg:col-span-6 relative min-h-[220px] sm:min-h-[260px] lg:min-h-[320px] overflow-hidden">
                  <Image
                    src="/images/about/hero-doctors.webp"
                    alt="NabiOta Unternehmenskultur und Team"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#07160C] to-transparent pointer-events-none z-10" />
                  <div className="lg:hidden absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#07160C] to-transparent pointer-events-none z-10" />

                  <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 bg-[#FAF7F0] rounded-2xl px-5 py-3 shadow-[0_12px_28px_rgba(0,0,0,0.22)] border border-[#EAE3D4] flex items-center gap-3.5 z-20">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FAF6EE] border border-[#E5D7B7] flex items-center justify-center flex-shrink-0 text-[#C5A56A] shadow-xs">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
                        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-serif font-bold text-xs sm:text-sm text-forest-950 leading-tight">
                        {t.culture.badgeTitle}
                      </p>
                      <p className="text-[11px] sm:text-xs text-[#5B635C] leading-tight mt-0.5">
                        {t.culture.badgeSub}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 9: EMPLOYEE TESTIMONIAL ────── */}
        <section className="py-12 sm:py-14 lg:py-16 bg-[#FAF7F2] border-t border-[#EDE7D9]">
          <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-14 px-4 sm:px-6">
              <div className="text-7xl sm:text-8xl lg:text-9xl font-serif text-[#C5A56A]/60 select-none leading-none -mb-6 md:mb-0 flex-shrink-0 font-normal drop-shadow-xs">
                ““
              </div>

              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#C5A56A] shadow-md flex-shrink-0">
                <Image
                  src={t.testimonials[activeTestimonial].avatar}
                  alt={t.testimonials[activeTestimonial].author}
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="flex-1 text-center md:text-left space-y-3">
                <p className="font-serif italic text-lg sm:text-xl lg:text-2xl text-forest-950 leading-[1.5]">
                  {t.testimonials[activeTestimonial].quote}
                </p>

                <div>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-forest-950">
                    {t.testimonials[activeTestimonial].author}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#717A73] mt-0.5">
                    {t.testimonials[activeTestimonial].role}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 flex-shrink-0 pt-2 md:pt-0">
                <div className="flex items-center gap-1.5 mr-2">
                  {t.testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTestimonial(i)}
                      aria-label={`Testimonial ${i + 1}`}
                      className={`h-2.5 rounded-full transition-all ${
                        activeTestimonial === i
                          ? "w-7 bg-[#C5A56A]"
                          : "w-2.5 bg-[#D8D2C2] hover:bg-[#B3AB98]"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() =>
                    setActiveTestimonial((prev) =>
                      prev === 0 ? t.testimonials.length - 1 : prev - 1
                    )
                  }
                  aria-label="Previous Testimonial"
                  className="w-12 h-12 rounded-full border-2 border-[#C5A56A]/80 bg-white hover:bg-[#C5A56A] text-[#142318] hover:text-white shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center cursor-pointer group active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={2.2} />
                </button>

                <button
                  onClick={() =>
                    setActiveTestimonial((prev) =>
                      prev === t.testimonials.length - 1 ? 0 : prev + 1
                    )
                  }
                  aria-label="Next Testimonial"
                  className="w-12 h-12 rounded-full border-2 border-[#C5A56A]/80 bg-white hover:bg-[#C5A56A] text-[#142318] hover:text-white shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center cursor-pointer group active:scale-95"
                >
                  <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={2.2} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 10: PRE-FOOTER CTA BANNER ────── */}
        <section className="bg-[#07160D] text-white py-12 sm:py-14 relative overflow-hidden border-t border-[#D5B878]/30">
          <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden mix-blend-screen">
            <Image
              src="/images/bacground.webp"
              alt="Watermark"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-2xl space-y-3">
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.24em] text-[#C5A56A] uppercase block">
                  {t.cta.eyebrow}
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
                  {t.cta.title}
                </h2>

                <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
                  {t.cta.desc}
                </p>
              </div>

              <div className="flex-shrink-0">
                <a
                  href="#bewerbung"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#E5D2A4] hover:bg-[#D4AF67] text-[#07150C] font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all duration-200 hover:scale-[1.02]"
                >
                  <span>{t.cta.button}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 11: DIREKT BEWERBEN / QUICK APPLY FORM ────── */}
        <section id="bewerbung" className="py-14 sm:py-18 lg:py-20 bg-[#FCFAF7] border-t border-[#EDE7D9] relative overflow-hidden">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.24em] text-[#C5A56A] uppercase block mb-2">
                {t.applyForm.eyebrow}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-forest-950 font-normal leading-tight mb-3">
                {t.applyForm.title}
              </h2>
              <p className="text-sm sm:text-[15px] text-[#4E5650] leading-relaxed">
                {t.applyForm.desc}
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5D7B7] shadow-lg text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-[#FAF6EE] border-2 border-[#C5A56A] text-[#C5A56A] flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8 stroke-[2]" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-forest-950 font-normal">
                  {t.applyForm.successTitle}
                </h3>
                <p className="text-sm sm:text-base text-[#4E5650] max-w-md mx-auto leading-relaxed">
                  {t.applyForm.successDesc}
                </p>
                <div className="pt-3">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFileName("");
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#C5A56A] text-[#142318] text-xs sm:text-sm font-semibold hover:bg-[#FAF6EE] transition-colors cursor-pointer"
                  >
                    {t.applyForm.resetBtn}
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleFormSubmit}
                className="bg-white rounded-3xl p-7 sm:p-10 lg:p-12 border border-[#EDE7D9] shadow-lg space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-forest-950 uppercase tracking-wider block">
                      {t.applyForm.nameLabel} <span className="text-[#C5A56A]">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder={t.applyForm.namePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#FCFAF7] border border-[#E2DBD0] text-forest-950 placeholder:text-[#A2ADA4] text-sm focus:outline-none focus:border-[#C5A56A] focus:ring-1 focus:ring-[#C5A56A] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-forest-950 uppercase tracking-wider block">
                      {t.applyForm.emailLabel} <span className="text-[#C5A56A]">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      placeholder={t.applyForm.emailPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#FCFAF7] border border-[#E2DBD0] text-forest-950 placeholder:text-[#A2ADA4] text-sm focus:outline-none focus:border-[#C5A56A] focus:ring-1 focus:ring-[#C5A56A] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-forest-950 uppercase tracking-wider block">
                      {t.applyForm.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      placeholder={t.applyForm.phonePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#FCFAF7] border border-[#E2DBD0] text-forest-950 placeholder:text-[#A2ADA4] text-sm focus:outline-none focus:border-[#C5A56A] focus:ring-1 focus:ring-[#C5A56A] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-forest-950 uppercase tracking-wider block">
                      {t.applyForm.positionLabel} <span className="text-[#C5A56A]">*</span>
                    </label>
                    <select
                      required
                      value={selectedPosition}
                      onChange={(e) => setSelectedPosition(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FCFAF7] border border-[#E2DBD0] text-forest-950 text-sm focus:outline-none focus:border-[#C5A56A] focus:ring-1 focus:ring-[#C5A56A] transition-all cursor-pointer"
                    >
                      <option value="">{t.applyForm.positionPlaceholder}</option>
                      {t.applyForm.positions.map((pos, idx) => (
                        <option key={idx} value={pos}>
                          {pos}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-forest-950 uppercase tracking-wider block">
                    {t.applyForm.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={t.applyForm.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-[#FCFAF7] border border-[#E2DBD0] text-forest-950 placeholder:text-[#A2ADA4] text-sm focus:outline-none focus:border-[#C5A56A] focus:ring-1 focus:ring-[#C5A56A] transition-all resize-y"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-forest-950 uppercase tracking-wider block">
                    {t.applyForm.uploadLabel}
                  </label>
                  <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-[#DDD5C7] hover:border-[#C5A56A] rounded-2xl bg-[#FCFAF7] cursor-pointer transition-colors group">
                    <input
                      type="file"
                      accept=".pdf,.docx,.doc"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setFileName(e.target.files[0].name);
                        }
                      }}
                    />
                    {fileName ? (
                      <div className="flex items-center gap-2.5 text-[#142318]">
                        <FileText className="w-5 h-5 text-[#C5A56A]" />
                        <span className="text-sm font-medium">{fileName}</span>
                      </div>
                    ) : (
                      <>
                        <Upload className="w-6 h-6 text-[#C5A56A] mb-2 group-hover:scale-110 transition-transform" />
                        <span className="text-xs sm:text-sm font-medium text-forest-950 text-center">
                          {t.applyForm.uploadHint}
                        </span>
                      </>
                    )}
                  </label>
                </div>

                <div className="flex items-start gap-3 pt-1">
                  <input
                    required
                    type="checkbox"
                    id="career-privacy"
                    className="mt-1 w-4 h-4 rounded border-[#D0C7B7] text-[#C5A56A] focus:ring-[#C5A56A] cursor-pointer"
                  />
                  <label htmlFor="career-privacy" className="text-xs text-[#555E56] leading-relaxed cursor-pointer select-none">
                    {t.applyForm.privacy}
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#ECCF93] to-[#D4AF67] hover:from-[#F2DAB0] hover:to-[#DEBD7A] text-[#142217] font-semibold text-sm tracking-wide shadow-md transition-all duration-200 hover:scale-[1.01] disabled:opacity-70 cursor-pointer"
                  >
                    <span>{isSubmitting ? t.applyForm.submitting : t.applyForm.submitBtn}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* ── MODAL DIALOG: RECRUITMENT PILLAR DETAILS ── */}
        {selectedPillar && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-[#030B06]/80 backdrop-blur-md animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
            onClick={() => setSelectedPillar(null)}
          >
            <div
              className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#FCFAF7] border border-[#D5B878]/50 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 text-[#07150C] focus:outline-none"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPillar(null)}
                aria-label={t.modal.closeBtn}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#FAF5EB] border border-[#E5D7B7] flex items-center justify-center text-[#142318] hover:bg-[#C5A56A] hover:text-white hover:border-[#C5A56A] transition-all shadow-sm cursor-pointer z-10"
              >
                <X className="w-5 h-5 stroke-[2.2]" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#07160D] text-[#ECCF96] text-[10px] sm:text-[11px] font-bold tracking-widest uppercase">
                    {t.modal.badgePrefix}: {selectedPillar.badge}
                  </span>
                  <span className="text-xs font-semibold text-[#8D6B27]">
                    {selectedPillar.category}
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-forest-950 font-normal leading-tight">
                  {selectedPillar.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#717A73] font-medium">
                  {t.modal.targetLabel}: <span className="text-[#142318]">{selectedPillar.targetGroup}</span>
                </p>
              </div>

              {/* Modal Hero Banner */}
              <div className="relative h-56 sm:h-72 w-full rounded-2xl overflow-hidden my-6 border border-[#EAE4D7] shadow-sm">
                <Image
                  src={selectedPillar.image}
                  alt={selectedPillar.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm font-medium">
                  NabiOta Medical Recruitment Services GmbH • {selectedPillar.title}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4 mb-6">
                <p className="text-sm sm:text-[15px] text-[#4E5650] leading-relaxed">
                  {selectedPillar.description}
                </p>
              </div>

              {/* 2-Column Grid: Roles and Requirements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="p-5 rounded-2xl bg-white border border-[#EAE4D7] shadow-2xs space-y-3">
                  <div className="flex items-center gap-2 text-[#8D6B27]">
                    <Briefcase className="w-4 h-4 stroke-[2]" />
                    <h3 className="font-serif font-bold text-sm sm:text-base text-forest-950">
                      {t.modal.scopeTitle}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {selectedPillar.rolesList.map((role, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#334237]">
                        <Check className="w-3.5 h-3.5 text-[#C5A56A] shrink-0 mt-0.5" />
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#EAE4D7] shadow-2xs space-y-3">
                  <div className="flex items-center gap-2 text-[#8D6B27]">
                    <FileCheck className="w-4 h-4 stroke-[2]" />
                    <h3 className="font-serif font-bold text-sm sm:text-base text-forest-950">
                      {t.modal.approbationTitle}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {selectedPillar.approbationService.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#334237]">
                        <Check className="w-3.5 h-3.5 text-[#C5A56A] shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Benefits Package */}
              <div className="p-5 rounded-2xl bg-[#F8F5EE] border border-[#E5D7B7] space-y-3 mb-6">
                <div className="flex items-center gap-2 text-[#8D6B27]">
                  <Award className="w-4 h-4 stroke-[2]" />
                  <h3 className="font-serif font-bold text-sm sm:text-base text-forest-950">
                    {t.modal.benefitsTitle}
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedPillar.benefitsPackage.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#243327]">
                      <div className="w-4 h-4 rounded-full bg-[#FAF5EC] border border-[#C5A56A] flex items-center justify-center text-[#8D6B27] shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Legal Notice */}
              <div className="p-4 rounded-xl bg-white border border-[#EAE4D7] text-xs text-[#556358] leading-relaxed flex items-start gap-3 mb-6">
                <Info className="w-4 h-4 text-[#C5A56A] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#142318] block mb-0.5">{t.modal.legalTitle}:</span>
                  {selectedPillar.legalFramework}
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#EAE4D7]">
                <button
                  onClick={() => setSelectedPillar(null)}
                  className="px-5 py-2.5 rounded-full border border-[#D5B878] text-xs font-semibold text-[#142318] hover:bg-[#FAF5EE] transition-colors"
                >
                  {t.modal.closeBtn}
                </button>
                <button
                  onClick={() => handleApplyForPillar(selectedPillar)}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#ECCF93] to-[#D4AF67] hover:from-[#F2DAB0] hover:to-[#DEBD7A] text-[#142217] font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-all hover:scale-[1.01]"
                >
                  <span>{t.modal.applyBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer currentLocale={locale} />
    </div>
  );
}
