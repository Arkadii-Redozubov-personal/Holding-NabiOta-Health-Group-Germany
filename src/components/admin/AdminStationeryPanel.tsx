"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, Printer, Globe, ArrowLeft, Shield, User } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { CorporateStationerySection } from "@/components/sections/CorporateStationerySection";
import { SupportedLocale } from "@/lib/i18n";
import Link from "next/link";

interface AdminStationeryPanelProps {
  userEmail: string;
}

export function AdminStationeryPanel({ userEmail }: AdminStationeryPanelProps) {
  const router = useRouter();
  const [locale, setLocale] = useState<SupportedLocale>("de");
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch {
      setLoggingOut(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#142318] flex flex-col">
      {/* Top Admin Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#E2D8C3] shadow-xs px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hover:opacity-85 transition-opacity">
            <Logo variant="dark" size="sm" locale={locale} />
          </div>
          <span className="hidden sm:inline-block w-px h-6 bg-gray-200" />
          <div className="flex items-center gap-2">
            <span className="bg-[#1B3822] text-[#E5D7B7] text-xs font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Admin
            </span>
            <span className="text-sm font-semibold text-[#142318] hidden md:inline">
              Verwaltungsportal
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          {/* User info */}
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#556358] bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-lg">
            <User className="w-3.5 h-3.5 text-[#1B3822]" />
            <span className="font-medium text-gray-800">{userEmail}</span>
          </div>

          {/* Back to site link */}
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs font-medium text-[#4D6353] hover:text-[#1B3822] bg-white border border-[#D5C7AF] hover:border-[#1B3822] px-3 py-1.5 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Zurück zur Website</span>
          </Link>

          {/* Logout button */}
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="flex items-center gap-1.5 text-xs font-medium text-red-700 hover:text-red-800 bg-red-50 hover:bg-red-100/80 border border-red-200 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>{loggingOut ? "Abmelden..." : "Abmelden"}</span>
          </button>
        </div>
      </header>

      {/* Main Admin Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {/* Module Sub-Header & Language Selector */}
        <div className="bg-white rounded-xl border border-[#DECDB5]/80 p-5 sm:p-6 mb-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Printer className="w-5 h-5 text-[#1B3822]" />
              <h1 className="text-xl sm:text-2xl font-bold text-[#142318]">
                Druckzentrum · Briefbogen & Visitenkarten
              </h1>
            </div>
            <p className="text-sm text-[#5B6B5F]">
              Erstellen und drucken Sie offizielle A4-Briefbögen und doppelseitige Visitenkarten der Holding.
            </p>
          </div>

          {/* Locale switcher for stationery text */}
          <div className="flex items-center gap-2 self-start md:self-auto bg-gray-50 border border-gray-200 p-1 rounded-lg">
            <Globe className="w-4 h-4 text-gray-500 ml-2" />
            <span className="text-xs font-medium text-gray-600 mr-1 hidden sm:inline">Sprache:</span>
            {(["de", "ru", "en", "uz", "tr"] as SupportedLocale[]).map((l) => (
              <button
                key={l}
                onClick={() => setLocale(l)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors uppercase ${
                  locale === l
                    ? "bg-[#1B3822] text-white shadow-2xs"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* The Stationery Printing Module */}
        <div className="bg-white rounded-xl border border-[#DECDB5]/80 overflow-hidden shadow-xs">
          <CorporateStationerySection locale={locale} />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#E2D8C3] py-4 text-center text-xs text-gray-500">
        NabiOta Health Group Germany GmbH · Internes Administrations- und Druckportal
      </footer>
    </div>
  );
}
