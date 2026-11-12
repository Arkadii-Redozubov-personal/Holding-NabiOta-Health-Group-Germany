# NabiOta Health Group Germany

Corporate web portal for **NabiOta Health Group Germany GmbH**, an ambulatory healthcare holding based in Mönchengladbach, Germany.

- **Live Production Site**: [https://www.nabiota-health-group-germany.de](https://www.nabiota-health-group-germany.de)
- **Staging / Preview**: [holding-nabiota.netlify.app](https://holding-nabiota.netlify.app/)

---

## Overview

The platform serves as the central digital portal for NabiOta Health Group, presenting its medical care centers (MVZ), diagnostic facilities, outpatient rehabilitation, home care, healthcare consulting, and international medical cooperation.

### Key Capabilities

- **Multilingual Support**: Fully localized in German (`de`), English (`en`), Russian (`ru`), Turkish (`tr`), Arabic (`ar`), and Uzbek (`uz`).
- **Interactive Department Carousel**: Visual presentation of clinical divisions and care programs.
- **Compliance & Legal Structure**: Fully compliant with German commercial and healthcare regulations (§ 5 TMG, § 18 Abs. 2 MStV, DSGVO).
- **Optimized Performance**: Next.js App Router static export (`output: "export"`) pre-rendered for high speed, low TTFB, and minimal server load.

---

## Tech Stack

- **Framework**: Next.js (App Router, Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Hosting**: ALL-INKL Premium (Apache, Let's Encrypt SSL)
- **CI/CD Deployment**: GitHub Actions automated FTP sync (`.github/workflows/deploy.yml`)

---

## Getting Started

### Prerequisites

- Node.js 20.x or later
- npm 10.x or later

### Installation

```bash
git clone https://github.com/Arkadii-Redozubov-personal/Holding-NabiOta-Health-Group-Germany.git
cd Holding-NabiOta-Health-Group-Germany
npm install
```

### Development

```bash
npm run dev
```

Open `http://localhost:3000` (or `http://localhost:3001` if port 3000 is occupied) in your browser.

### Production Static Build

```bash
npm run build
```

This generates the static export into the `./out/` directory, which is deployed to ALL-INKL via GitHub Actions on every push to `main`.

### Validation

```bash
npm run typecheck
npm run lint
```

---

## Deployment Workflow

Automated deployments are managed by GitHub Actions:
- **Trigger**: Every `git push` to `main`.
- **Workflow**: `.github/workflows/deploy.yml` builds the Next.js static export and syncs differences to ALL-INKL via FTP using repository secrets (`FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`).
- **Apache Routing**: Handled by `public/.htaccess`, mapping clean URLs, routing `/_next/image` to static `/images/`, serving `index.html` on root, and managing caching/compression.

---

## Corporate Information

**NabiOta Health Group Germany GmbH**  
Aachener Straße 114, 41061 Mönchengladbach, Germany  
Commercial Register: Amtsgericht Mönchengladbach, HRB 16787  
Website: [https://www.nabiota-health-group-germany.de](https://www.nabiota-health-group-germany.de)
