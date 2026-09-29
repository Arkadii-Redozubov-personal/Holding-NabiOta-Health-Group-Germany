# NabiOta® Health Group Germany GmbH

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![WCAG](https://img.shields.io/badge/WCAG-2.2_AA-green?style=flat)](https://www.w3.org/WAI/standards-guidelines/wcag/)

> **NabiOta® – Kompetenz verbinden. Gesundheit gestalten.**  
> Official corporate digital presence for the German healthcare holding company **NabiOta® Health Group Germany GmbH** (Mönchengladbach, Germany).

---

## 🏛️ Project Overview
The platform represents a luxury European medical holding group uniting specialized ambulatory care centers (MVZ), cutting-edge diagnostic facilities (CT, MRI, digital X-Ray), rehabilitation institutions, home care and wound management, medical recruitment, and international cooperation programs.

The implementation faithfully reproduces the art direction and layout hierarchy of the reference designs:
- **Luxury Editorial Aesthetic**: Cormorant Garamond display typography paired with Plus Jakarta Sans body copy.
- **Organic Color Harmonies**: Deep forest green surfaces (`#0D1910`), warm ivory containers (`#FBFAF6`), and subtle champagne gold borders and accents (`#BEA06B`).
- **Comprehensive German Legal Compliance**: Complete Impressum (§ 5 TMG, § 18 Abs. 2 MStV) and DSGVO privacy documentation for the commercial register entity (`Amtsgericht Mönchengladbach HRB 16787`).

---

## 🚀 Key Features
- **Narrative Homepage Architecture**:
  1. **Header**: Adaptive sticky navigation with scroll blur, language switcher (`DE`, `EN`, `RU`), and CTA.
  2. **Hero Section**: Architectural campus hero, high-impact serif typography, and translucent strategic values panel.
  3. **Capabilities & Corporate Stats Strip**: 6 business line icons and key group figures (`1`, `6+`, `100+`, `∞`).
  4. **About Section**: Doctor-patient consultation portrait, holding positioning, and core benefits.
  5. **Business Areas (Unternehmensbereiche)**: Dark forest green section with botanical accents and 6 category cards.
  6. **Services Grid (Unsere Leistungen)**: 7 modular rectangular service cards with icons and photography.
  7. **Corporate Values (Unsere Werte)**: 6 core principles with gold outline circular emblems.
  8. **Dual Panel Section**: Side-by-side balanced cards for Partners & Cooperations and Career opportunities.
  9. **Footer**: 4-column layout with direct departmental telephone contacts, digital channels, and legal links.
- **Full Route Ecosystem (32 Pre-rendered SSG Pages)**:
  - `/about`: Holding background, history rooted in Medical A-Z Consulting GmbH, and organizational chart.
  - `/areas` & `/areas/[slug]`: Structured business area landing pages with key services, statistics, and advantages.
  - `/services` & `/services/[slug]`: Service pages detailing clinical processes and treatment steps.
  - `/values`: Core corporate guidelines and ethical commitments.
  - `/partners`: Institutional collaboration pathways for clinics and physicians.
  - `/career`: Talent acquisition, departmental openings, and direct recruiting contacts.
  - `/news` & `/news/[slug]`: Editorial articles with reading time and category tags.
  - `/contact`: Interactive validated consultation form with real-time feedback and direct phone directory.
  - `/imprint` & `/privacy`: Legally verified German corporate disclosures.
  - `/sitemap.xml` & `/robots.txt`: Automated search engine indexing.

---

## 🛠️ Technology Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5 (Strict Mode)
- **Styling**: Tailwind CSS v4 + Vanilla CSS Design Tokens
- **Icons**: Lucide React (centralized SVG line system with uniform stroke-width)
- **Typography**: `next/font/google` (Cormorant Garamond & Plus Jakarta Sans)
- **Image Optimization**: `next/image` with responsive dimensions and priority LCP handling

---

## 📦 Getting Started

### Prerequisites
- Node.js `20.x` or later (tested on Node v24)
- npm `10.x` or later

### Installation
```bash
# Clone the repository
git clone https://github.com/nabiota/holding-website.git
cd holding-website

# Install dependencies
npm install
```

### Local Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### Production Build
```bash
# Compile TypeScript and build production bundle
npm run build

# Start production server
npm run start
```

### Code Quality & Validation
```bash
# Type checking
npm run typecheck

# Linting
npm run lint
```

---

## 📐 Architecture & Documentation
Detailed architectural and design system specifications are available in the [`docs/`](./docs/) directory:
- [Architecture & Routing Documentation](./docs/architecture.md)
- [Design Tokens & Style Guide](./docs/design-system.md)
- [Domain Content Models & CMS Schemas](./docs/content-model.md)

---

## 🔒 Legal & Corporate Information
**NabiOta® Health Group Germany GmbH**  
Aachener Straße 114, 41061 Mönchengladbach, Deutschland  
- **Handelsregister**: Amtsgericht Mönchengladbach, HRB 16787  
- **USt-IdNr.**: DE303254268  
- **Geschäftsführung**: Frau Nigora Usmanova  
- **Telefon**: +49 2161 9170016  
- **E-Mail**: konkat@nabiota-health-group.de  
- **Web**: www.NabiOta-Health-Group.de
