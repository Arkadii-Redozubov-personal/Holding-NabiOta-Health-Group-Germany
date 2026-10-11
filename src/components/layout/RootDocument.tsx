import { Lora, Plus_Jakarta_Sans, Inter, Alex_Brush } from "next/font/google";
import type { ReactNode } from "react";
import type { SupportedLocale } from "@/lib/i18n";

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

interface RootDocumentProps {
  children: ReactNode;
  locale: SupportedLocale;
}

export function RootDocument({ children, locale }: RootDocumentProps) {
  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${lora.variable} ${jakarta.variable} ${inter.variable} ${alexBrush.variable} scroll-smooth overflow-x-hidden max-w-full`}
    >
      <body className="min-h-screen bg-[#FBFAF6] text-[#132018] font-sans antialiased selection:bg-[#BEA06B]/20 selection:text-[#112117] overflow-x-hidden w-full max-w-full">
        {children}
      </body>
    </html>
  );
}
