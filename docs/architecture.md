# Architecture & Technical Documentation

## Overview
**NabiOta® Health Group Germany GmbH** is an enterprise-grade corporate platform designed for a German healthcare holding company. Built using Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS, the platform delivers high visual fidelity, strict accessibility (WCAG 2.2 AA), and high Core Web Vitals performance.

## Routing & Directory Structure
```text
src/
├── app/
│   ├── layout.tsx                 # Root layout, Google Fonts (Cormorant Garamond + Plus Jakarta Sans)
│   ├── globals.css                # Design tokens, hairlines, subtle botanical backdrops
│   ├── page.tsx                   # Narrative Homepage matching reference design
│   ├── about/page.tsx             # History, holding structure diagram, mission
│   ├── areas/
│   │   ├── page.tsx               # Business areas directory
│   │   └── [slug]/page.tsx        # Dynamic business unit template (SSG prerendered)
│   ├── services/
│   │   ├── page.tsx               # Holding services directory
│   │   └── [slug]/page.tsx        # Reusable service template with treatment steps
│   ├── values/page.tsx            # Corporate values & governance
│   ├── partners/page.tsx          # Institutional & international partners
│   ├── career/page.tsx            # Career opportunities, departments & recruiting contacts
│   ├── news/
│   │   ├── page.tsx               # Insights & corporate news
│   │   └── [slug]/page.tsx        # High-legibility editorial article page
│   ├── contact/page.tsx           # Contact details & validated consultation form
│   ├── imprint/page.tsx           # German legal Impressum (§ 5 TMG / § 18 MStV)
│   ├── privacy/page.tsx           # DSGVO-compliant privacy notice
│   ├── sitemap.ts                 # Dynamic XML sitemap generator
│   └── robots.ts                  # Search engine directives
├── components/
│   ├── layout/                    # Container, Header, MobileDrawer, Footer
│   ├── sections/                  # Discrete, domain-specific landing sections
│   └── ui/                        # Reusable atomic elements (Button, Logo, IconCircle, etc.)
├── data/                          # Typed static data layer (CMS-ready)
├── types/                         # TypeScript domain models
└── lib/                           # Utility helpers (cn class merging)
```

## Server vs. Client Components
- **Server Components by default**: All layout wrappers, content sections, and static/SSG pages are rendered on the server for minimal JS payload and zero layout shift.
- **Client Components only where required**:
  - `Header.tsx`: Handles scroll detection (backdrop blur transition), mobile drawer toggling, and interactive language selection dropdown.
  - `ContactPage.tsx`: Interactive client validation, loading state spinner, and success notifications.

## CMS Readiness
The entire content layer is strictly isolated in `src/data/` under typed contracts (`src/types/content.ts`). Connecting headless CMS providers (e.g. Sanity, Strapi, Payload, Contentful) simply requires replacing the local imports with asynchronous fetchers in the corresponding server components without modifying the presentation components.
