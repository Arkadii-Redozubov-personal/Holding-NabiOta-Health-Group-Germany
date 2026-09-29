import { HoldingCompanyInfo, StatItemData } from "@/types/content";

export const companyInfo: HoldingCompanyInfo = {
  name: "NabiOta® Health Group Germany",
  brand: "NabiOta®",
  legalName: "NabiOta® Health Group Germany GmbH",
  slogan: "Kompetenz verbinden. Gesundheit gestalten.",
  mission:
    "Verschiedene Bereiche der medizinischen Versorgung unter einer gemeinsamen Marke zusammenführen und nachhaltig weiterzuentwickeln.",
  vision:
    "Eine zukunftsfähige Gesundheitsversorgung schaffen, in der medizinische Exzellenz, menschliche Zuwendung und nachhaltige Versorgungsstrukturen Hand in Hand gehen.",
  street: "Aachener Straße 114",
  postalCode: "41061",
  city: "Mönchengladbach",
  country: "Deutschland",
  phones: {
    sekretariat: "+49 2161 9170016",
    aufnahme: "+49 2161 9170017",
    geschaeftsfuehrung: "+49 2161 9170018",
    fax: "+49 2161 2706552",
  },
  email: "konkat@nabiota-health-group.de",
  website: "www.NabiOta-Health-Group.de",
  managingDirector: "Frau Nigora Usmanova, Geschäftsführerin",
  commercialRegister: {
    court: "Amtsgericht Mönchengladbach",
    number: "HRB 16787",
    vatId: "DE303254268",
    responsiblePerson: "Nigora Usmanova (§ 18 Abs. 2 MStV)",
  },
};

export const corporateStats: StatItemData[] = [
  {
    value: "1",
    label: "Starke Marke",
    sublabel: "NabiOta® Health Group",
  },
  {
    value: "6+",
    label: "Unternehmensbereiche",
    sublabel: "Ganzheitliche Versorgung",
  },
  {
    value: "100+",
    label: "Experten im Netzwerk",
    sublabel: "Medizinische Fachkräfte",
  },
  {
    value: "∞",
    label: "Eine Mission",
    sublabel: "Gesundheit für morgen",
  },
];
