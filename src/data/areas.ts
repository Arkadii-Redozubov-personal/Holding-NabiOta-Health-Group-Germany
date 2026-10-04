import { BusinessArea } from "@/types/content";

export const businessAreas: BusinessArea[] = [
  {
    id: "med-fachbereiche",
    slug: "medizinische-fachbereiche",
    title: "Medizinische Fachbereiche",
    subtitle: "Ambulante & Fachärztliche Spitzenmedizin (§ 95 SGB V)",
    description:
      "Umfassende ambulante und chirurgische Versorgung durch zwei spezialisierte MVZ-Zentren sowie Vorbereitung der stationären Krankenhausklinik (§ 30 GewO).",
    fullDescription:
      "Die medizinischen Fachbereiche der NabiOta® Gruppe bündeln ambulante Primär- und Spezialversorgung in zwei rechtlich eigenständigen medizinischen Versorgungszentren: dem NabiOta MVZ für hausärztliche und fachärztliche Versorgung GmbH (Allgemeinmedizin, Kardiologie, Gastroenterologie, Pulmonologie, Neurologie, Endokrinologie) und dem NabiOta MVZ für Chirurgie und Anästhesiologie GmbH (Orthopädie & Unfallchirurgie, Neurochirurgie, Allgemein-/Viszeralchirurgie, Plastische Chirurgie, Schmerztherapie). Zudem wird der Aufbau der stationären NabiOta Clinics Germany GmbH vorbereitet.",
    image: "/images/areas/medical-departments.webp",
    iconName: "Stethoscope",
    stats: [
      { value: "2", label: "Spezialisierte MVZ-Zentren" },
      { value: "11+", label: "Medizinische Fachgebiete" },
      { value: "§ 95", label: "Zulassung nach SGB V" },
    ],
    keyServices: [
      "Hausärztliche & internistische Versorgung (Kardiologie, Gastroenterologie, Pulmonologie, Endokrinologie)",
      "Chirurgie & Anästhesiologie (Orthopädie, Unfallchirurgie, Neurochirurgie, Viszeralchirurgie, Plastische Chirurgie)",
      "Ambulante Operationen & interventionelle Behandlungen mit perioperativer Überwachung",
      "Qualifikationsgerechte Schmerzdiagnostik und multimodale Schmerztherapie",
      "Vorbereitung stationärer Fachabteilungen der NabiOta Clinics Germany GmbH (§ 30 GewO)",
    ],
    advantages: [
      "Volle ärztliche Weisungsfreiheit und interdisziplinäre Kooperation unter einem Dach",
      "Zulassung für alle gesetzlichen (GKV) und privaten (PKV) Krankenkassen sowie Berufsgenossenschaften (BG)",
      "Modernste apparative Praxisausstattung und barrierefreie Untersuchungsräume",
      "Direkte Verzahnung mit Diagnostikzentren, Rehabilitation und HomeCare-Wundversorgung",
    ],
  },
  {
    id: "diagnostik",
    slug: "diagnostik",
    title: "Diagnostik",
    subtitle: "NabiOta Diagnostics GmbH – Präzisionstechnologie",
    description:
      "High-End Bildgebung mit 3T MRT, Low-Dose CT, digitalem Röntgen sowie neurophysiologische Diagnostik und Probenlogistik.",
    fullDescription:
      "Die NabiOta Diagnostics GmbH plant, errichtet und betreibt hochmoderne diagnostische Infrastruktur auf Universitätsniveau. Das Spektrum umfasst High-Field Magnetresonanztomographie (3T MRT), strahlungsarme Computertomographie (Low-Dose CT), digitales Röntgen, hochauflösende Sonographie (3D/4D, Doppler/Duplex), neurophysiologische Diagnostik (EMG, ENG, EEG, evozierte Potenziale) sowie ein strukturiertes Labordiagnostik- und Probenmanagement mit digitalem Befundservice.",
    image: "/images/areas/diagnostics.webp",
    iconName: "Microscope",
    stats: [
      { value: "3T", label: "High-Field MRT" },
      { value: "Low-Dose", label: "Schonende CT-Technik" },
      { value: "<24h", label: "Digitales Befundmanagement" },
    ],
    keyServices: [
      "Magnetresonanztomographie (3T MRT) mit patientenfreundlichen weiten Tunnelsystemen",
      "Computertomographie (Low-Dose CT) mit minimaler Strahlenbelastung",
      "Konventionelle digitale Röntgendiagnostik & strahlengeschützte Durchleuchtung",
      "Medizinisch indizierte Ultraschalluntersuchungen (3D/4D, Doppler- und Duplexsonographie)",
      "Neurophysiologische Diagnostik: EMG, ENG, EEG und Evozierte Potenziale (EP)",
      "Laboratoriumsmedizinische Organisation: Probengewinnung, Aufbereitung und Transportlogistik",
    ],
    advantages: [
      "Höchste Auflösung für exakte Früherkennung und fundierte Indikationsstellung",
      "Zeitgerechtes Befundmanagement mit sicherer digitaler Übermittlung an Fachärzte",
      "Strenge Einhaltung aller Betreiber- und Strahlenschutzanforderungen",
      "Schnelle Terminvergabe für dringliche und präoperative Untersuchungen",
    ],
  },
  {
    id: "rehabilitation",
    slug: "rehabilitation",
    title: "Rehabilitation",
    subtitle: "NabiOta Rehabilitation & Therapy GmbH",
    description:
      "Ambulante Reha, Physiotherapie, Ergotherapie, Logopädie und medizinische Trainingstherapie für nachhaltige Mobilität.",
    fullDescription:
      "Die NabiOta Rehabilitation & Therapy GmbH bietet ganzheitliche ambulante Rehabilitation und evidenzbasierte Heilmitteltherapie für postoperative Patienten sowie Menschen mit chronischen und funktionellen Einschränkungen. Das interdisziplinäre Leistungsspektrum umfasst Krankengymnastik (auch gerätegestützt / MTT), Manuelle Therapie, Lymphdrainage, Gang- und Gleichgewichtstraining, Ergotherapie zur Alltagsförderung sowie logopädische Behandlungen von Sprach-, Sprech- und Schluckstörungen für Orthopädie, Neurologie, Kardiologie und Pneumologie.",
    image: "/images/areas/rehabilitation.webp",
    iconName: "HeartPulse",
    stats: [
      { value: "1:1", label: "Individuelle Therapiebetreuung" },
      { value: "5", label: "Fachbereiche (Ortho, Neuro, Kardio, Pneumo)" },
      { value: "100%", label: "Ganzheitlich & Evidenzbasiert" },
    ],
    keyServices: [
      "Physiotherapie, Krankengymnastik am Gerät & Medizinische Trainingstherapie (MTT)",
      "Manuelle Therapie, osteopathische Techniken & Manuelle Lymphdrainage",
      "Ergotherapie zur Förderung motorischer/kognitiver Fähigkeiten und Selbstständigkeit",
      "Logopädische Behandlungen bei Sprach-, Sprech-, Stimm- und Schluckstörungen",
      "Gang-, Gleichgewichts- und Koordinationstraining sowie spezialisierte Atemtherapie",
      "Ambulante Nachsorge, Präventionsprogramme und interdisziplinäre Schmerztherapie",
    ],
    advantages: [
      "Direkte Abstimmung der Therapiepläne mit den behandelnden Chirurgen und Hausärzten",
      "Zulassung für alle gesetzlichen und privaten Krankenkassen, DRV und Berufsgenossenschaften",
      "Helle, motivierende Trainingslandschaften mit modernster apparativer Ausstattung",
      "Fokus auf dauerhafte Wiederherstellung von Lebensqualität, Mobilität und beruflicher Teilhabe",
    ],
  },
  {
    id: "pflege",
    slug: "pflege",
    title: "Pflege",
    subtitle: "NabiOta HomeCare GmbH – Pflege & Wundversorgung",
    description:
      "Qualifizierte ambulante Krankenpflege, spezialisierte Wundversorgung und liebevolle Betreuung im vertrauten Zuhause.",
    fullDescription:
      "Die NabiOta HomeCare GmbH gewährleistet verlässliche, bedarfsgerechte Pflege im häuslichen Umfeld. Mit examiniertem Fachpersonal decken wir die gesamte häusliche Krankenpflege und Behandlungspflege nach SGB V (Medikamentengabe, Injektionen, Katheter-/Stomaversorgung), zertifizierte Wundversorgung chronischer und postoperativer Wunden sowie körperbezogene Pflege und Entlastungsleistungen nach SGB XI ab. Wir schließen Versorgungslücken nach Klinikaufenthalten und unterstützen Angehörige aktiv.",
    image: "/images/areas/pflege.webp",
    iconName: "Users",
    stats: [
      { value: "24/7", label: "Erreichbarkeit & Bereitschaft" },
      { value: "SGB V/XI", label: "Anerkannte Pflegekassenzulassung" },
      { value: "100%", label: "Zertifizierte Wundversorgung" },
    ],
    keyServices: [
      "Häusliche Krankenpflege & medizinische Behandlungspflege nach SGB V",
      "Spezialisierte Wundversorgung chronischer, postoperativer und schwer heilender Wunden",
      "Postoperative Überleitung und Betreuung nach Operationen und Klinikentlassungen",
      "Körperbezogene Grundpflege, Mobilitätsförderung & Ernährung nach SGB XI",
      "Alltagshilfe, Betreuungsangebote & Begleitung bei kognitiven Einschränkungen",
      "Anleitung, Schulung und spürbare Entlastung pflegender Angehöriger",
    ],
    advantages: [
      "Feste Bezugspflegekräfte für ein vertrauensvolles, stabiles Pflegeverhältnis",
      "Enger digitaler Austausch mit den behandelnden Hausärzten, MVZ und Kliniken",
      "Aktive Prävention pflegebedingter Risiken (Sturzprophylaxe, Dekubitusvermeidung)",
      "Nahtlose Versorgungskette durch Zusammenarbeit mit NabiOta Sanitätshaus und Apotheke",
    ],
  },
  {
    id: "beratung-projektentwicklung",
    slug: "beratung-projektentwicklung",
    title: "Beratung & Projektentwicklung",
    subtitle: "NabiOta Real Estate GmbH & Holding Management",
    description:
      "Entwicklung von Gesundheitsimmobilien, MVZ-Strukturen, Praxisnachfolge sowie zentrale Managementleistungen.",
    fullDescription:
      "Hervorgegangen aus langjähriger Branchenerfahrung verbindet dieser Bereich die NabiOta Real Estate GmbH mit den zentralen Managementleistungen der Holding. Wir erwerben, entwickeln und verwalten moderne Gesundheitsimmobilien, Ärztehäuser, OP-Zentren und Mitarbeiterwohnungen. Gleichzeitig unterstützen wir Ärzte bei Praxisübernahmen, MVZ-Gründungen und entlasten medizinische Einrichtungen durch IT, Einkauf, Qualitätsmanagement, Controlling und Abrechnungsorganisation.",
    image: "/images/areas/consulting.webp",
    iconName: "Network",
    stats: [
      { value: "15+", label: "Jahre Marktexpertise" },
      { value: "A-Z", label: "Von Standortanalyse bis Betrieb" },
      { value: "100%", label: "Rechts- & Zulassungskonform" },
    ],
    keyServices: [
      "Entwicklung und Bewirtschaftung von Gesundheitsimmobilien (NabiOta Real Estate GmbH)",
      "Standortanalyse, Bedarfsplanung, Barrierefreiheit, Brandschutz und Raumkonzepte für Arztpraxen",
      "Strukturierung und Gründung von Medizinischen Versorgungszentren (MVZ nach § 95 SGB V)",
      "Praxisnachfolge, Vertragsarztsitz-Bewertung und Kooperationsmodelle für Fachärzte",
      "Zentrale Holding-Managementleistungen: IT, Abrechnung, Controlling, QM, Marketing und Einkauf",
    ],
    advantages: [
      "Entlastung der Ärzte von bürokratischen und administrativen Pflichten",
      "Rechtssichere Gestaltung unter Beachtung der KV- und berufsrechtlichen Vorgaben",
      "Wertsteigerung und langfristiger Werterhalt von Spezialimmobilien im Gesundheitswesen",
      "Zukunftssichere Arbeitsplätze in modernen, technisch vollausgestatteten Praxisräumen",
    ],
  },
  {
    id: "internationale-kooperationen",
    slug: "internationale-kooperationen",
    title: "Internationale Kooperationen & Fachkräfte",
    subtitle: "NabiOta Medical Recruitment Services GmbH",
    description:
      "Nationale & internationale Gewinnung von medizinischen Fachkräften, Approbationsbegleitung und globale Klinikpartnerschaften.",
    fullDescription:
      "Gesundheit verbindet Menschen über Grenzen hinweg. Die NabiOta Medical Recruitment Services GmbH übernimmt die gezielte Gewinnung, Auswahl und nachhaltige Integration von Ärzten, Pflegefachkräften, MTAs und Therapeuten für das deutsche Gesundheitswesen. Wir begleiten Fachkräfte umfassend bei Berufserlaubnis, Approbation, Visaverfahren, Sprachausbildung und Einleben in Deutschland. Gleichzeitig pflegt die Gruppe internationale Kooperationen für Wissensaustausch und Telemedizin.",
    image: "/images/areas/international.webp",
    iconName: "Globe",
    stats: [
      { value: "25+", label: "Partnerländer im Netzwerk" },
      { value: "1.000+", label: "Fachkräfte begleitet" },
      { value: "Full-Care", label: "Approbation bis Integration" },
    ],
    keyServices: [
      "Nationale und internationale Fachkräftegewinnung (Ärzte, Pflege, MTAs, Therapeuten)",
      "Unterstützung bei Berufsanerkennung: Approbation, Berufserlaubnis, Visa- und Behördenverfahren",
      "Organisation von Fachsprachkursen, Prüfungsvorbereitung und Anpassungsmaßnahmen",
      "Ganzheitliches Onboarding: Unterstützung bei Wohnungssuche, Umzug und gesellschaftlicher Integration",
      "Grenzüberschreitende Klinikpartnerschaften, telemedizinische Konsile und Best-Practice-Transfer",
    ],
    advantages: [
      "Strukturierte, behördlich abgestimmte Verfahren für faire und ethische Rekrutierung",
      "Nachhaltige Mitarbeiterbindung und interkulturelle Betreuung vor Ort",
      "Lösung des akuten Fachkräftemangels in Kliniken, Praxen und Pflegeeinrichtungen",
      "Mehrsprachiges Team für reibungslose Koordination in allen Projektphasen",
    ],
  },
];
