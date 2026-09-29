"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { companyInfo } from "@/data/company";
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "Allgemeine Anfrage",
    message: "",
    privacyConsent: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Bitte füllen Sie alle Pflichtfelder aus.");
      return;
    }

    if (!formData.privacyConsent) {
      setStatus("error");
      setErrorMessage("Bitte stimmen Sie der Datenschutzerklärung zu.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    // Simulate async submission
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "Allgemeine Anfrage",
        message: "",
        privacyConsent: false,
      });
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-24 lg:pt-32 pb-20">
        {/* Banner */}
        <section className="bg-forest-950 text-ivory-50 py-16 sm:py-24 relative overflow-hidden bg-botanical-dark">
          <Container size="wide">
            <div className="max-w-3xl">
              <Eyebrow variant="gold">KONTAKT & DIALOG</Eyebrow>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight mb-6">
                Wir freuen uns auf das Gespräch mit Ihnen.
              </h1>
              <p className="text-base sm:text-lg text-ivory-100/90 leading-relaxed font-light">
                Haben Sie Fragen zur NabiOta® Health Group, zu unseren
                Standorten oder möchten Sie eine Partnerschaft anfragen? Unser
                Team unterstützt Sie kompetent und zuverlässig.
              </p>
            </div>
          </Container>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-20 bg-[#FAF8F5]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Direct Contacts */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <Eyebrow variant="forest">STANDORT & ERREICHBARKEIT</Eyebrow>
                  <h2 className="font-display text-3xl text-forest-950 mb-4">
                    NabiOta® Health Group Germany GmbH
                  </h2>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6 font-sans">
                    Zentrale Verwaltung und Koordination der Unternehmensgruppe.
                  </p>
                </div>

                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-forest-900/10 shadow-sm">
                    <MapPin className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-forest-950 mb-0.5">Postanschrift</h3>
                      <p className="text-text-secondary">{companyInfo.street}</p>
                      <p className="text-text-secondary">{companyInfo.postalCode} {companyInfo.city}, Deutschland</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-forest-900/10 shadow-sm space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-gold-600 flex-shrink-0" />
                      <h3 className="font-bold text-forest-950">Telefon & Durchwahlen</h3>
                    </div>
                    <div className="space-y-1.5 pl-8 text-xs sm:text-sm text-text-secondary">
                      <div className="flex justify-between">
                        <span>Sekretariat:</span>
                        <a href={`tel:${companyInfo.phones.sekretariat}`} className="font-semibold text-forest-950 hover:text-gold-600">
                          {companyInfo.phones.sekretariat}
                        </a>
                      </div>
                      <div className="flex justify-between">
                        <span>Patientenaufnahme:</span>
                        <a href={`tel:${companyInfo.phones.aufnahme}`} className="font-semibold text-forest-950 hover:text-gold-600">
                          {companyInfo.phones.aufnahme}
                        </a>
                      </div>
                      <div className="flex justify-between">
                        <span>Geschäftsführung:</span>
                        <a href={`tel:${companyInfo.phones.geschaeftsfuehrung}`} className="font-semibold text-forest-950 hover:text-gold-600">
                          {companyInfo.phones.geschaeftsfuehrung}
                        </a>
                      </div>
                      <div className="flex justify-between">
                        <span>Telefax:</span>
                        <span className="font-medium text-forest-950">
                          {companyInfo.phones.fax}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-forest-900/10 shadow-sm">
                    <Mail className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-forest-950 mb-0.5">Elektronische Post</h3>
                      <p className="text-text-secondary mb-1">
                        Zentrale:{" "}
                        <a href={`mailto:${companyInfo.email}`} className="text-gold-700 font-semibold hover:underline">
                          {companyInfo.email}
                        </a>
                      </p>
                      <p className="text-text-secondary">
                        Bewerbungen:{" "}
                        <a href="mailto:karriere@nabiota.de" className="text-gold-700 font-semibold hover:underline">
                          karriere@nabiota.de
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-forest-900/10 shadow-sm">
                    <Clock className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-forest-950 mb-0.5">Sprech- & Servicezeiten</h3>
                      <p className="text-text-secondary">Montag – Freitag: 08:00 – 18:00 Uhr</p>
                      <p className="text-text-secondary">Termine nach vorheriger Vereinbarung</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7">
                <div className="bg-white p-8 sm:p-10 rounded-2xl border border-forest-900/10 shadow-sm">
                  <h3 className="font-display text-2xl sm:text-3xl text-forest-950 mb-2">
                    Nachricht senden
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary mb-8">
                    Füllen Sie das Formular aus – wir setzen uns zeitnah mit Ihnen in Verbindung.
                  </p>

                  {status === "success" && (
                    <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-900 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm">Vielen Dank für Ihre Nachricht!</p>
                        <p className="text-xs mt-0.5">
                          Ihre Anfrage wurde erfolgreich an das Team der NabiOta® Gruppe übermittelt.
                        </p>
                      </div>
                    </div>
                  )}

                  {status === "error" && errorMessage && (
                    <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-900 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm">{errorMessage}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-forest-950 uppercase tracking-wider mb-2">
                          Vollständiger Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Dr. med. Maria Muster"
                          className="w-full px-4 py-3 rounded-lg border border-forest-900/15 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-sm transition-colors text-forest-950"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-forest-950 uppercase tracking-wider mb-2">
                          E-Mail-Adresse *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="muster@beispiel.de"
                          className="w-full px-4 py-3 rounded-lg border border-forest-900/15 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-sm transition-colors text-forest-950"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-forest-950 uppercase tracking-wider mb-2">
                          Telefonnummer (optional)
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+49 170 1234567"
                          className="w-full px-4 py-3 rounded-lg border border-forest-900/15 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-sm transition-colors text-forest-950"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-forest-950 uppercase tracking-wider mb-2">
                          Unternehmen / Praxis (optional)
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Klinik / Gemeinschaftspraxis"
                          className="w-full px-4 py-3 rounded-lg border border-forest-900/15 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-sm transition-colors text-forest-950"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-forest-950 uppercase tracking-wider mb-2">
                        Betreff
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-forest-900/15 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-sm transition-colors text-forest-950 bg-white"
                      >
                        <option value="Allgemeine Anfrage">Allgemeine Anfrage</option>
                        <option value="Kooperationsanfrage">Kooperationsanfrage für Kliniken & Partner</option>
                        <option value="MVZ & Patientenbetreuung">Medizinische Versorgung (MVZ & Diagnostik)</option>
                        <option value="Karriere & Bewerbung">Karriere & Initiativbewerbung</option>
                        <option value="Internationale Kooperation">Internationale Gesundheitsprojekte</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-forest-950 uppercase tracking-wider mb-2">
                        Ihre Nachricht *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Wie können wir Sie unterstützen?"
                        className="w-full px-4 py-3 rounded-lg border border-forest-900/15 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-sm transition-colors text-forest-950 resize-y"
                      />
                    </div>

                    <div className="flex items-start gap-3 pt-2">
                      <input
                        type="checkbox"
                        id="privacy"
                        required
                        checked={formData.privacyConsent}
                        onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                        className="mt-1 h-4 w-4 rounded border-forest-900/20 text-gold-600 focus:ring-gold-500"
                      />
                      <label htmlFor="privacy" className="text-xs text-text-secondary leading-normal">
                        Ich habe die{" "}
                        <a href="/privacy" className="text-gold-700 underline hover:text-gold-800">
                          Datenschutzerklärung
                        </a>{" "}
                        gelesen und erkläre mich mit der Verarbeitung meiner Daten zur Beantwortung meiner Anfrage einverstanden. *
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 text-forest-950 font-bold text-sm hover:from-gold-300 hover:to-gold-400 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Wird gesendet...</span>
                        </>
                      ) : (
                        <span>Nachricht absenden</span>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
