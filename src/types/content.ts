export type NavigationItem = {
  label: string;
  href: string;
  badge?: string;
};

export type BusinessArea = {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  fullDescription?: string;
  image: string;
  iconName: string;
  stats?: { value: string; label: string }[];
  keyServices?: string[];
  advantages?: string[];
};

export type Service = {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  shortDescription: string;
  description: string;
  image: string;
  iconName: string;
  category: string;
  benefits?: string[];
  processSteps?: { step: number; title: string; text: string }[];
};

export type CompanyValue = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
};

export type HeroValueItem = {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
};

export type StatItemData = {
  value: string;
  label: string;
  sublabel?: string;
};

export type BenefitItem = {
  title: string;
  description: string;
  iconName: string;
};

export type NewsArticle = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  readingTime: string;
  image: string;
  content: string[];
  featured?: boolean;
};

export type HoldingCompanyInfo = {
  name: string;
  brand: string;
  legalName: string;
  slogan: string;
  mission: string;
  vision: string;
  street: string;
  postalCode: string;
  city: string;
  country: string;
  phones: {
    sekretariat: string;
    aufnahme: string;
    geschaeftsfuehrung: string;
    fax: string;
  };
  email: string;
  website: string;
  managingDirector: string;
  commercialRegister: {
    court: string;
    number: string;
    vatId: string;
    responsiblePerson: string;
  };
};
