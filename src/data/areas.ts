import { BusinessArea } from "@/types/content";

export const businessAreas: BusinessArea[] = [
  {
    id: "med-fachbereiche",
    slug: "medizinische-fachbereiche",
    title: "Medizinische Fachbereiche",
    subtitle: "Ambulante & Fachärztliche Spitzenmedizin",
    description:
      "Umfassende ambulante Versorgung durch spezialisierte Facharztzentren, von Allgemeinmedizin bis hin zu chirurgischen Spitzenleistungen.",
    fullDescription:
      "Die medizinischen Fachbereiche der NabiOta® Gruppe verbinden hausärztliche Grundversorgung mit hochspezialisierten chirurgischen Zentren. In unseren Facharztzentren decken wir Orthopädie, Neurochirurgie, plastische Chirurgie sowie Allgemeinchirurgie nach höchsten deutschen Qualitätsstandards ab.",
    image: "/images/areas/medical-departments.jpg",
    iconName: "Stethoscope",
    stats: [
      { value: "4+", label: "Chirurgische Schwerpunkte" },
      { value: "100%", label: "Patientenfokussiert" },
      { value: "MVZ", label: "Zulassung nach dt. Recht" },
    ],
    keyServices: [
      "Hausärztliche Versorgung & Prävention",
      "Orthopädie und Traumatologie",
      "Neurochirurgische Sprechstunden & Eingriffe",
      "Plastische & Rekonstruktive Chirurgie",
      "Allgemeinchirurgie & ambulantes Operieren",
    ],
    advantages: [
      "Interdisziplinäre Zusammenarbeit aller Fachärzte unter einem Dach",
      "Moderne Praxisräume mit barrierefreiem Zugang",
      "Schnelle Terminvergabe und digitale Befundübermittlung",
      "Enge Verzahnung mit Diagnostik- und Rehazentren",
    ],
  },
  {
    id: "diagnostik",
    slug: "diagnostik",
    title: "Diagnostik",
    subtitle: "Präzisionstechnologie für fundierte Befunde",
    description:
      "Hochmoderne bildgebende Diagnostik mit CT, MRT und digitalem Röntgen für frühzeitige und exakte therapeutische Entscheidungen.",
    fullDescription:
      "Die NabiOta® Diagnostics GmbH bietet modernste Bildgebung auf Universitätsniveau. Mit Niedrigdosis-CT, High-Field-MRT und volldigitalem Röntgen liefern wir präzise Schnittbilder für fundierte medizinische Diagnosen und individuelle Therapieentscheidungen.",
    image: "/images/areas/diagnostics.jpg",
    iconName: "Microscope",
    stats: [
      { value: "3T", label: "MRT-Magnetfeldstärke" },
      { value: "<24h", label: "Befunderstellung" },
      { value: "Low-Dose", label: "Schonende CT-Technik" },
    ],
    keyServices: [
      "Magnetresonanztomographie (MRT / Kernspin)",
      "Computertomographie (CT) mit reduzierter Strahlenbelastung",
      "Digitales Röntgen & Durchleuchtung",
      "Ultraschalldiagnostik & Gefäßdoppler",
      "Teleradiologische Zweitmeinungen",
    ],
    advantages: [
      "Maximale Bildauflösung für feinste anatomische Details",
      "Patientenfreundliche breite Tunnelsysteme für mehr Komfort",
      "Direkte digitale Anbindung an behandelnde Fachärzte",
      "Minimale Wartezeiten bei akuten Fragestellungen",
    ],
  },
  {
    id: "rehabilitation",
    slug: "rehabilitation",
    title: "Rehabilitation",
    subtitle: "Ganzheitliche Genesung & Bewegungstherapie",
    description:
      "Individuelle Therapiekonzepte zur Wiederherstellung von Mobilität, Leistungsfähigkeit und nachhaltiger Lebensqualität.",
    fullDescription:
      "Unser Rehabilitations- und Therapiezentrum begleitet Patienten nach operativen Eingriffen, Unfällen oder bei chronischen Leiden. Mit evidenzbasierten Methoden, modernster Gerätetechnik und persönlicher Betreuung stellen wir Ihre körperliche Unabhängigkeit wieder her.",
    image: "/images/areas/rehabilitation.jpg",
    iconName: "HeartPulse",
    stats: [
      { value: "1:1", label: "Individuelle Therapiebetreuung" },
      { value: "10+", label: "Evidenzbasierte Therapiemethoden" },
      { value: "98%", label: "Patientenzufriedenheit" },
    ],
    keyServices: [
      "Physiotherapie & Krankengymnastik am Gerät",
      "Manuelle Therapie & Osteopathie",
      "Postoperative Nachsorge & Gehschulung",
      "Ergotherapie & sensomotorisches Training",
      "Medizinische Trainingstherapie (MTT)",
    ],
    advantages: [
      "Maßgeschneiderte Behandlungspläne für jeden Lebensabschnitt",
      "Interdisziplinärer Austausch mit den operierenden Chirurgen",
      "Helle, motivierende Trainingslandschaften",
      "Präventionsprogramme zur Vermeidung von Rückfällen",
    ],
  },
  {
    id: "pflege",
    slug: "pflege",
    title: "Pflege",
    subtitle: "Menschliche Zuwendung & professionelle Betreuung",
    description:
      "Qualifizierte ambulante Pflege und HomeCare im vertrauten häuslichen Umfeld – mit Würde, Empathie und Zuverlässigkeit.",
    fullDescription:
      "Die NabiOta® HomeCare GmbH sichert eine verlässliche Pflegeversorgung zu Hause. Unser Pflegeansatz basiert auf Respekt vor der Würde des Menschen und entlastet Angehörige nachhaltig durch professionelle medizinische Behandlungspflege und Grundpflege.",
    image: "/images/areas/pflege.jpg",
    iconName: "Users",
    stats: [
      { value: "24/7", label: "Erreichbarkeit im Notfall" },
      { value: "100%", label: "Examinierte Fachpflege" },
      { value: "Individuell", label: "Auf den Alltag abgestimmt" },
    ],
    keyServices: [
      "Häusliche Krankenpflege nach SGB V",
      "Grundpflege & Betreuung nach SGB XI",
      "Medikamentengabe & Infusionstherapie",
      "Verhinderungspflege & Angehörigenberatung",
      "Palliative Versorgung & Sterbebegleitung",
    ],
    advantages: [
      "Feste Bezugspflegekräfte für vertraute Beziehungen",
      "Umfassende Unterstützung bei Anträgen und Pflegegraden",
      "Enge Rücksprache mit behandelnden Hausärzten",
      "Höchste Qualitätsstandards nach MDK-Richtlinien",
    ],
  },
  {
    id: "beratung-projektentwicklung",
    slug: "beratung-projektentwicklung",
    title: "Beratung & Projektentwicklung",
    subtitle: "Strategische Weitsicht für Gesundheitsstrukturen",
    description:
      "Konzeption, Bau und Management moderner Gesundheitsimmobilien und Versorgungszentren mit wirtschaftlicher Nachhaltigkeit.",
    fullDescription:
      "Hervorgegangen aus der Medical A-Z Consulting GmbH bündelt dieser Bereich jahrzehntelange Erfahrung in der Gesundheitsberatung. Wir entwickeln tragfähige MVZ-Strukturen, konzipieren Ärztehäuser und begleiten Betreibergesellschaften von der Standortanalyse bis zur profitablen Betriebsführung.",
    image: "/images/areas/consulting.jpg",
    iconName: "Network",
    stats: [
      { value: "15+", label: "Jahre Marktexpertise" },
      { value: "100%", label: "Rechtssichere Strukturen" },
      { value: "A-Z", label: "Ganzheitliche Begleitung" },
    ],
    keyServices: [
      "Entwicklung von Medizinischen Versorgungszentren (MVZ)",
      "Gesundheitsimmobilien-Konzeption & Real Estate",
      "Qualitätsmanagement & Zertifizierungsprozesse",
      "Digitalisierung & Prozessoptimierung im Gesundheitswesen",
      "Beteiligungsmanagement & Unternehmensnachfolge",
    ],
    advantages: [
      "Umfassendes Branchennetzwerk aus Medizinern, Juristen und Ökonomen",
      "Fundiertes Verständnis des deutschen Sozialgesetzbuches (SGB)",
      "Optimierte Raumkonzepte für reibungslose klinische Abläufe",
      "Investitionssicherheit durch realistische Machbarkeitsstudien",
    ],
  },
  {
    id: "internationale-kooperationen",
    slug: "internationale-kooperationen",
    title: "Internationale Kooperationen",
    subtitle: "Grenzüberschreitende Partnerschaften & Wissenstransfer",
    description:
      "Brückenbau im globalen Gesundheitswesen: Telemedizin, medizinischer Fachaustausch und internationale Fachkräfteprojekte.",
    fullDescription:
      "Gesundheit kennt keine Grenzen. NabiOta® fördert aktiv internationale Kooperationen zwischen führenden Kliniken, Universitäten und Gesundheitsdienstleistern weltweit. Wir erleichtern den weltweiten Wissenstransfer und organisieren grenzüberschreitende telemedizinische Zweitmeinungen.",
    image: "/images/areas/international.jpg",
    iconName: "Globe",
    stats: [
      { value: "12+", label: "Länder im Netzwerk" },
      { value: "Global", label: "Partnerschaften & Austausch" },
      { value: "2-Way", label: "Wissenstransfer & Bildung" },
    ],
    keyServices: [
      "Internationale Fachkräfteakquise & Integrationsprogramme",
      "Grenzüberschreitende telemedizinische Konsile",
      "Hospital-Partnerschaften & Ausbildungsinitiativen",
      "Medizintourismus & Patientenbegleitung in Deutschland",
      "Technologie- und Best-Practice-Transfer",
    ],
    advantages: [
      "Mehrsprachiges Team für reibungslose interkulturelle Kommunikation",
      "Akkreditierte Anerkennungsprozesse für internationale Fachkräfte",
      "Höchste Vertraulichkeit und Datensicherheit bei internationalen Falldaten",
      "Fokus auf nachhaltigen, beidseitigen Mehrwert für alle Kooperationspartner",
    ],
  },
];
