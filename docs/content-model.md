# Content Model & Schema Definitions

## 1. BusinessArea (`BusinessArea`)
```typescript
interface BusinessArea {
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
}
```

## 2. Service (`Service`)
```typescript
interface Service {
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
}
```

## 3. CompanyValue (`CompanyValue`)
```typescript
interface CompanyValue {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
}
```

## 4. HoldingCompanyInfo (`HoldingCompanyInfo`)
```typescript
interface HoldingCompanyInfo {
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
}
```

## 5. NewsArticle (`NewsArticle`)
```typescript
interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  readingTime: string;
  image: string;
  content: string[];
}
```
