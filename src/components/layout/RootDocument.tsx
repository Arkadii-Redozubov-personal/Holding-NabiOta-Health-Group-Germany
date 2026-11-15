import { Lora, Plus_Jakarta_Sans, Alex_Brush } from "next/font/google";
import type { ReactNode } from "react";
import type { SupportedLocale } from "@/lib/i18n";
import { companyInfo } from "@/data/company";
import { siteUrl } from "@/lib/seo";

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

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  variable: "--font-signature",
  weight: ["400"],
  display: "swap",
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: companyInfo.name,
  legalName: companyInfo.legalName,
  url: siteUrl,
  logo: `${siteUrl}/images/nLogo.svg`,
  image: `${siteUrl}/images/hero/campus.webp`,
  telephone: companyInfo.phones.sekretariat,
  address: {
    "@type": "PostalAddress",
    streetAddress: companyInfo.street,
    postalCode: companyInfo.postalCode,
    addressLocality: companyInfo.city,
    addressCountry: "DE",
  },
};

interface RootDocumentProps {
  children: ReactNode;
  locale: SupportedLocale;
  includeStructuredData?: boolean;
}

export function RootDocument({
  children,
  locale,
  includeStructuredData = true,
}: RootDocumentProps) {
  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${lora.variable} ${jakarta.variable} ${alexBrush.variable} scroll-smooth overflow-x-hidden max-w-full`}
    >
      <body className="min-h-screen bg-[#FBFAF6] text-[#132018] font-sans antialiased selection:bg-[#BEA06B]/20 selection:text-[#112117] overflow-x-hidden w-full max-w-full">
        {includeStructuredData ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
          />
        ) : null}
        {children}
      </body>
    </html>
  );
}
