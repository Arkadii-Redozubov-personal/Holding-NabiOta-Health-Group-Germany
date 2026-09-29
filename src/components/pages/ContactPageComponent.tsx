"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { companyInfo } from "@/data/company";
import { SupportedLocale, getDictionary } from "@/lib/i18n";
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface ContactPageComponentProps {
  locale?: SupportedLocale;
}

export function ContactPageComponent({ locale = "de" }: ContactPageComponentProps) {
  const dict = getDictionary(locale);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: locale === "ru" ? "Общий запрос" : locale === "en" ? "General Inquiry" : "Allgemeine Anfrage",
    message: "",
    privacyConsent: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage(
        locale === "ru"
          ? "Пожалуйста, заполните все обязательные поля."
          : locale === "en"
          ? "Please fill in all required fields."
          : "Bitte füllen Sie alle Pflichtfelder aus."
      );
      return;
    }

    if (!formData.privacyConsent) {
      setStatus("error");
      setErrorMessage(
        locale === "ru"
          ? "Необходимо согласиться с политикой конфиденциальности."
          : locale === "en"
          ? "Please accept the privacy policy to proceed."
          : "Bitte stimmen Sie der Datenschutzerklärung zu."
      );
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: locale === "ru" ? "Общий запрос" : locale === "en" ? "General Inquiry" : "Allgemeine Anfrage",
        message: "",
        privacyConsent: false,
      });
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentLocale={locale} />
      <main className="flex-1 pt-24 lg:pt-32 pb-20">
        <section className="bg-forest-950 text-ivory-50 py-16 sm:py-24 relative overflow-hidden bg-botanical-dark">
          <Container size="wide">
            <div className="max-w-3xl">
              <Eyebrow variant="gold">
                {locale === "ru" ? "КОНТАКТЫ И СВЯЗЬ" : locale === "en" ? "CONTACT & INQUIRIES" : "KONTAKT & DIALOG"}
              </Eyebrow>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight mb-6">
                {locale === "ru"
                  ? "Мы рады открытому диалогу с вами."
                  : locale === "en"
                  ? "We Look Forward to Connecting with You."
                  : "Wir freuen uns auf das Gespräch mit Ihnen."}
              </h1>
              <p className="text-base sm:text-lg text-ivory-100/90 leading-relaxed font-light">
                {locale === "ru"
                  ? "Есть вопросы о группе NabiOta, наших медицинских центрах или партнерстве? Наша команда оперативно и квалифицированно ответит вам."
                  : locale === "en"
                  ? "Have questions regarding NabiOta Health Group, our centers, or potential partnerships? Our team is at your disposal."
                  : "Haben Sie Fragen zur NabiOta® Health Group, zu unseren Standorten oder möchten Sie eine Partnerschaft anfragen? Unser Team unterstützt Sie kompetent und zuverlässig."}
              </p>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20 bg-[#FAF8F5]">
          <Container size="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <Eyebrow variant="forest">
                    {dict.footer.addressTitle}
                  </Eyebrow>
                  <h2 className="font-display text-3xl text-forest-950 mb-4">
                    {companyInfo.legalName}
                  </h2>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6 font-sans">
                    {locale === "ru" ? "Центральный офис и координация холдинга." : "Zentrale Verwaltung und Koordination der Unternehmensgruppe."}
                  </p>
                </div>

                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-forest-900/10 shadow-sm">
                    <MapPin className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-forest-950 mb-0.5">
                        {locale === "ru" ? "Адрес" : "Postanschrift"}
                      </h3>
                      <p className="text-text-secondary">{companyInfo.street}</p>
                      <p className="text-text-secondary">{companyInfo.postalCode} {companyInfo.city}, Deutschland</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-forest-900/10 shadow-sm space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-gold-600 flex-shrink-0" />
                      <h3 className="font-bold text-forest-950">{dict.footer.phonesTitle}</h3>
                    </div>
                    <div className="space-y-1.5 pl-8 text-xs sm:text-sm text-text-secondary">
                      <div className="flex justify-between">
                        <span>{locale === "ru" ? "Секретариат:" : "Sekretariat:"}</span>
                        <a href={`tel:${companyInfo.phones.sekretariat}`} className="font-semibold text-forest-950 hover:text-gold-600">
                          {companyInfo.phones.sekretariat}
                        </a>
                      </div>
                      <div className="flex justify-between">
                        <span>{locale === "ru" ? "Приемное отделение:" : "Aufnahme:"}</span>
                        <a href={`tel:${companyInfo.phones.aufnahme}`} className="font-semibold text-forest-950 hover:text-gold-600">
                          {companyInfo.phones.aufnahme}
                        </a>
                      </div>
                      <div className="flex justify-between">
                        <span>{locale === "ru" ? "Руководство:" : "Geschäftsführung:"}</span>
                        <a href={`tel:${companyInfo.phones.geschaeftsfuehrung}`} className="font-semibold text-forest-950 hover:text-gold-600">
                          {companyInfo.phones.geschaeftsfuehrung}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-forest-900/10 shadow-sm">
                    <Mail className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-forest-950 mb-0.5">E-Mail</h3>
                      <p className="text-text-secondary mb-1">
                        Zentrale:{" "}
                        <a href={`mailto:${companyInfo.email}`} className="text-gold-700 font-semibold hover:underline">
                          {companyInfo.email}
                        </a>
                      </p>
                      <p className="text-text-secondary">
                        Karriere:{" "}
                        <a href="mailto:karriere@nabiota.de" className="text-gold-700 font-semibold hover:underline">
                          karriere@nabiota.de
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-forest-900/10 shadow-sm">
                    <Clock className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-forest-950 mb-0.5">
                        {locale === "ru" ? "Часы работы" : "Servicezeiten"}
                      </h3>
                      <p className="text-text-secondary">Montag – Freitag: 08:00 – 18:00 Uhr</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7">
                <div className="bg-white p-8 sm:p-10 rounded-2xl border border-forest-900/10 shadow-sm">
                  <h3 className="font-display text-2xl sm:text-3xl text-forest-950 mb-2">
                    {locale === "ru" ? "Написать нам" : locale === "en" ? "Send a Message" : "Nachricht senden"}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary mb-8">
                    {locale === "ru"
                      ? "Заполните форму, и мы оперативно свяжемся с вами."
                      : locale === "en"
                      ? "Please fill in the form and we will get back to you promptly."
                      : "Füllen Sie das Formular aus – wir setzen uns zeitnah mit Ihnen in Verbindung."}
                  </p>

                  {status === "success" && (
                    <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-900 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm">
                          {locale === "ru" ? "Спасибо за обращение!" : locale === "en" ? "Thank you for contacting us!" : "Vielen Dank für Ihre Nachricht!"}
                        </p>
                        <p className="text-xs mt-0.5">
                          {locale === "ru"
                            ? "Ваше сообщение успешно получено командой холдинга NabiOta."
                            : "Ihre Anfrage wurde erfolgreich an das Team der NabiOta® Gruppe übermittelt."}
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
                          {locale === "ru" ? "Ваше имя *" : locale === "en" ? "Full Name *" : "Vollständiger Name *"}
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
                          E-Mail *
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
                          {locale === "ru" ? "Телефон" : locale === "en" ? "Phone (optional)" : "Telefon (optional)"}
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
                          {locale === "ru" ? "Организация / Клиника" : locale === "en" ? "Organization" : "Unternehmen / Praxis"}
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
                        {locale === "ru" ? "Тема обращения" : locale === "en" ? "Subject" : "Betreff"}
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-forest-900/15 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-sm transition-colors text-forest-950 bg-white cursor-pointer"
                      >
                        <option value="Allgemeine Anfrage">
                          {locale === "ru" ? "Общий запрос" : locale === "en" ? "General Inquiry" : "Allgemeine Anfrage"}
                        </option>
                        <option value="Kooperationsanfrage">
                          {locale === "ru" ? "Партнерство и сотрудничество" : locale === "en" ? "Partnership & Cooperation" : "Kooperationsanfrage für Kliniken & Partner"}
                        </option>
                        <option value="Karriere & Bewerbung">
                          {locale === "ru" ? "Карьера и вакансии" : locale === "en" ? "Careers & Application" : "Karriere & Initiativbewerbung"}
                        </option>
                        <option value="Internationale Kooperation">
                          {locale === "ru" ? "Международные проекты" : locale === "en" ? "International Health Projects" : "Internationale Gesundheitsprojekte"}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-forest-950 uppercase tracking-wider mb-2">
                        {locale === "ru" ? "Сообщение *" : locale === "en" ? "Message *" : "Ihre Nachricht *"}
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={locale === "ru" ? "Чем мы можем вам помочь?" : "Wie können wir Sie unterstützen?"}
                        className="w-full px-4 py-3 rounded-lg border border-forest-900/15 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-sm transition-colors text-forest-950 resize-y"
                      />
                    </div>

                    <div className="flex items-start gap-3 pt-2">
                      <input
                        type="checkbox"
                        id="privacy-locale"
                        required
                        checked={formData.privacyConsent}
                        onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                        className="mt-1 h-4 w-4 rounded border-forest-900/20 text-gold-600 focus:ring-gold-500 cursor-pointer"
                      />
                      <label htmlFor="privacy-locale" className="text-xs text-text-secondary leading-normal">
                        {locale === "ru" ? (
                          <>
                            Я ознакомился с{" "}
                            <Link href={`/${locale}/privacy`} className="text-gold-700 underline">
                              политикой конфиденциальности
                            </Link>{" "}
                            и даю согласие на обработку персональных данных. *
                          </>
                        ) : locale === "en" ? (
                          <>
                            I have read the{" "}
                            <Link href={`/${locale}/privacy`} className="text-gold-700 underline">
                              privacy policy
                            </Link>{" "}
                            and consent to the processing of my contact information. *
                          </>
                        ) : (
                          <>
                            Ich habe die{" "}
                            <Link href={`/${locale}/privacy`} className="text-gold-700 underline">
                              Datenschutzerklärung
                            </Link>{" "}
                            gelesen und erkläre mich mit der Verarbeitung meiner Daten einverstanden. *
                          </>
                        )}
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
                          <span>{locale === "ru" ? "Отправка..." : "Wird gesendet..."}</span>
                        </>
                      ) : (
                        <span>{locale === "ru" ? "Отправить сообщение" : locale === "en" ? "Send Message" : "Nachricht absenden"}</span>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer currentLocale={locale} />
    </div>
  );
}
