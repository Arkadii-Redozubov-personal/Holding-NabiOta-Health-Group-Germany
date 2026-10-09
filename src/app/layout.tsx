import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans, Inter, Alex_Brush } from "next/font/google";
import "./globals.css";
import { companyInfo } from "@/data/company";

const lora = Lora({
  subsets: ["latin", "cyrillic"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "cyrillic-ext"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  variable: "--font-signature",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${companyInfo.name}`,
    default: `${companyInfo.name} | ${companyInfo.slogan}`,
  },
  description:
    "NabiOta® Health Group Germany GmbH – Eine zukunftsweisende Unternehmensgruppe im Gesundheitswesen. Medizinische Fachbereiche, Diagnostik, Rehabilitation, Pflege und zukunftsfähige Gesundheitsprojekte.",
  keywords: [
    "NabiOta",
    "Health Group Germany",
    "Medizinisches Versorgungszentrum",
    "MVZ",
    "Diagnostik",
    "Rehabilitation",
    "Pflege",
    "Mönchengladbach",
    "Gesundheitswesen",
  ],
  authors: [{ name: companyInfo.name }],
  metadataBase: new URL("https://www.nabiota-health-group.de"),
  openGraph: {
    title: `${companyInfo.name} – ${companyInfo.slogan}`,
    description: companyInfo.mission,
    url: "https://www.nabiota-health-group.de",
    siteName: companyInfo.name,
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/hero/campus.webp",
        width: 1200,
        height: 630,
        alt: companyInfo.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: companyInfo.name,
    description: companyInfo.slogan,
    images: ["/images/hero/campus.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${lora.variable} ${jakarta.variable} ${inter.variable} ${alexBrush.variable} scroll-smooth overflow-x-hidden max-w-full`}
    >
      <body className="min-h-screen bg-[#FBFAF6] text-[#132018] font-sans antialiased selection:bg-[#BEA06B]/20 selection:text-[#112117] overflow-x-hidden w-full max-w-full">
        {children}
      </body>
    </html>
  );
}
