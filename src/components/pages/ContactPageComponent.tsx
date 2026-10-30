"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { SupportedLocale } from "@/lib/i18n";
import { contactTranslations, getContactLocations, LocationOffice } from "@/data/translations/contact-page";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  UserCheck,
  ChevronRight,
  ArrowRight,
  QrCode,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ShieldCheck,
  Building2,
  Stethoscope,
  HeartPulse,
  Sparkles,
  Layers,
  Activity,
} from "@/lib/icons";

interface ContactPageComponentProps {
  locale?: SupportedLocale;
}

export function ContactPageComponent({ locale = "de" }: ContactPageComponentProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    subject: "Allgemeine Anfrage",
    message: "",
    privacyConsent: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [activeLocationId, setActiveLocationId] = useState<string>("hq");
  const [activeCategory, setActiveCategory] = useState<"all" | "hq" | "clinics" | "partners">("all");
  const [mapZoom, setMapZoom] = useState<number>(15);

  const t = contactTranslations[locale as keyof typeof contactTranslations] || contactTranslations.de;

  const mapsUrl =
    "https://maps.google.com/?q=Aachener+Stra%C3%9Fe+114,+41061+M%C3%B6nchengladbach";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage(t.form.errorRequired);
      return;
    }

    if (!formData.privacyConsent) {
      setStatus("error");
      setErrorMessage(t.form.errorPrivacy);
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    setTimeout(() => {
      setStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        subject: t.form.subjects[0],
        message: "",
        privacyConsent: false,
      });
    }, 900);
  };

  const locations: LocationOffice[] = getContactLocations(locale);

  const filteredLocations =
    activeCategory === "all"
      ? locations.filter((l) => l.category !== "partners")
      : locations.filter((l) => l.category === activeCategory);

  const activeLocation = locations.find((l) => l.id === activeLocationId) || locations[0];

  return (
    <div className="flex flex-col min-h-screen bg-[#FCFAF7] text-forest-950 font-sans selection:bg-[#C5A56A]/20 selection:text-forest-950">
      <Header currentLocale={locale} />

      <main className="flex-1">
        {/* ── Page Hero Header (Unified across all subpages) ── */}
        <PageHero
          locale={locale}
          title={
            locale === "uz"
              ? "Biz bilan bog'laning"
              : locale === "ru"
              ? "Свяжитесь с нами"
              : locale === "en"
              ? "Get in Touch"
              : locale === "tr"
              ? "Bizimle İletişime Geçin"
              : locale === "ar"
              ? "تواصلوا معنا"
              : "Treten Sie mit uns in Kontakt"
          }
          description={
            locale === "uz"
              ? "Savollaringizga javob berishdan, xoldingning tibbiy yo'nalishlari haqida ma'lumot taqdim etishdan va hamkorlikni muhokama qilishdan mamnun bo'lamiz."
              : locale === "ru"
              ? "Мы рады ответить на ваши вопросы, предоставить информацию о медицинских направлениях холдинга и обсудить сотрудничество."
              : locale === "en"
              ? "We look forward to hearing from you. Our team is available by phone, email, or in person at our Mönchengladbach headquarters."
              : locale === "tr"
              ? "Sorularınızı yanıtlamaktan, holdingin tıbbi uzmanlık alanları hakkında bilgi vermekten ve ortaklıkları görüşmekten memnuniyet duyarız."
              : locale === "ar"
              ? "يسعدنا الرد على استفساراتكم، وتقديم معلومات وافية حول قطاعات الرعاية التابعة للمجموعة، وبحث سبل التعاون المشترك."
              : "Wir freuen uns über Ihre Nachricht. Unser Team hilft Ihnen gerne weiter und ist für Sie da - telefonisch, per E-Mail oder vor Ort in Mönchengladbach."
          }
          badges={[
            {
              icon: Clock,
              title:
                locale === "uz"
                  ? "Tezkor"
                  : locale === "ru"
                  ? "Быстрая"
                  : locale === "en"
                  ? "Fast"
                  : locale === "tr"
                  ? "Hızlı"
                  : locale === "ar"
                  ? "وصول"
                  : "Schnelle",
              sub:
                locale === "uz"
                  ? "bog'lanish"
                  : locale === "ru"
                  ? "доступность"
                  : locale === "en"
                  ? "availability"
                  : locale === "tr"
                  ? "erişilebilirlik"
                  : locale === "ar"
                  ? "سريع"
                  : "Erreichbarkeit",
            },
            {
              icon: UserCheck,
              title:
                locale === "uz"
                  ? "Shaxsiy"
                  : locale === "ru"
                  ? "Личная"
                  : locale === "en"
                  ? "Personal"
                  : locale === "tr"
                  ? "Bireysel"
                  : locale === "ar"
                  ? "استشارة"
                  : "Persönliche",
              sub:
                locale === "uz"
                  ? "maslahat"
                  : locale === "ru"
                  ? "консультация"
                  : locale === "en"
                  ? "consultation"
                  : locale === "tr"
                  ? "danışmanlık"
                  : locale === "ar"
                  ? "مباشرة"
                  : "Beratung",
            },
            {
              icon: MapPin,
              title:
                locale === "uz"
                  ? "Qulay"
                  : locale === "ru"
                  ? "Удобная"
                  : locale === "en"
                  ? "Central"
                  : locale === "tr"
                  ? "Merkezi"
                  : locale === "ar"
                  ? "موقع"
                  : "Zentraler",
              sub:
                locale === "uz"
                  ? "manzil"
                  : locale === "ru"
                  ? "локация"
                  : locale === "en"
                  ? "location"
                  : locale === "tr"
                  ? "konum"
                  : locale === "ar"
                  ? "مركزي"
                  : "Standort",
            },
          ]}
          imageSrc="/images/heroes/hero-contact.webp"
          imageAlt="NabiOta Health Group Germany Kontakt"
        />

        <div className="pt-10 sm:pt-14 pb-20 sm:pb-24 relative overflow-hidden bg-[#FCFAF7]">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 relative z-10">
            {/* ══════════════════════════════════════════════════════════
                SECTION 1 (PHOTO TOP):
                LEFT (6 cols): Контактная информация (5 Contact Cards Grid)
                RIGHT (6 cols): Написать нам (Appointment & Inquiry Form)
            ══════════════════════════════════════════════════════════ */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-9 items-start">
              {/* ── Left Column: Contact Information (5 Cards) ── */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div className="mb-4 sm:mb-5">
                  <h2 className="font-serif text-[26px] sm:text-[32px] text-[#132218] font-normal leading-tight mb-1">
                    {locale === "uz"
                      ? "Aloqa ma'lumotlari"
                      : locale === "ru"
                      ? "Контактная информация"
                      : locale === "en"
                      ? "Contact Information"
                      : locale === "tr"
                      ? "İletişim Bilgileri"
                      : locale === "ar"
                      ? "معلومات الاتصال"
                      : "Kontaktinformationen"}
                  </h2>
                  <p className="font-sans text-[12.5px] sm:text-[13px] text-[#556358]">
                    {locale === "uz"
                      ? "Biz bilan bog'lanish uchun ma'lumotlar"
                      : locale === "ru"
                      ? "Наши данные для связи"
                      : locale === "en"
                      ? "Our direct contact details"
                      : locale === "tr"
                      ? "Bize ulaşabileceğiniz iletişim kanalları"
                      : locale === "ar"
                      ? "بيانات التواصل المباشر الخاصة بنا"
                      : "Unsere Kontaktdaten auf einen Blick"}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                  {/* Card 1: Postal address */}
                  <div className="bg-[#FAF7F0] border border-[#EAE4D7] rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 sm:gap-4">
                    <div className="shrink-0 text-[#8C6D2B] pt-0.5">
                      <MapPin className="w-7 h-7 stroke-[1.6]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif font-bold text-[13.5px] sm:text-[14px] text-[#132218] mb-1 leading-snug">
                        {t.left.addressTitle}
                      </h3>
                      <p className="font-sans text-[11.5px] sm:text-[12px] text-[#556358] leading-relaxed">
                        {t.left.street}
                        <br />
                        {t.left.city}
                      </p>
                    </div>
                  </div>

                  {/* Card 2: Phone */}
                  <div className="bg-[#FAF7F0] border border-[#EAE4D7] rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 sm:gap-4">
                    <div className="shrink-0 text-[#8C6D2B] pt-0.5">
                      <Phone className="w-7 h-7 stroke-[1.6]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif font-bold text-[13.5px] sm:text-[14px] text-[#132218] mb-1 leading-snug">
                        {t.left.phoneTitle}
                      </h3>
                      <div className="font-sans text-[11px] sm:text-[11.5px] text-[#556358] leading-relaxed space-y-0.5">
                        <p className="flex justify-between sm:justify-start gap-2">
                          <span className="text-[#7B867D]">{t.left.reception}</span>{" "}
                          <a href="tel:+4921619170016" className="text-[#132218] hover:text-[#8C6D2B] transition-colors font-medium">
                            +49 2161 9170016
                          </a>
                        </p>
                        <p className="flex justify-between sm:justify-start gap-2">
                          <span className="text-[#7B867D]">{t.left.admission}</span>{" "}
                          <a href="tel:+4921619170017" className="text-[#132218] hover:text-[#8C6D2B] transition-colors font-medium">
                            +49 2161 9170017
                          </a>
                        </p>
                        <p className="flex justify-between sm:justify-start gap-2">
                          <span className="text-[#7B867D]">{t.left.executive}</span>{" "}
                          <a href="tel:+4921619170018" className="text-[#132218] hover:text-[#8C6D2B] transition-colors font-medium">
                            +49 2161 9170018
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Email */}
                  <div className="bg-[#FAF7F0] border border-[#EAE4D7] rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 sm:gap-4">
                    <div className="shrink-0 text-[#8C6D2B] pt-0.5">
                      <Mail className="w-7 h-7 stroke-[1.6]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif font-bold text-[13.5px] sm:text-[14px] text-[#132218] mb-1 leading-snug">
                        {t.left.emailTitle}
                      </h3>
                      <div className="font-sans text-[11px] sm:text-[11.5px] text-[#556358] leading-relaxed space-y-0.5">
                        <p>
                          <a href="mailto:kontakt@nabiota-health-group.de" className="text-[#132218] hover:text-[#8C6D2B] transition-colors font-medium truncate block">
                            kontakt@nabiota-health-group.de
                          </a>
                        </p>
                        <p>
                          <a href="mailto:karriere@nabiota.de" className="text-[#132218] hover:text-[#8C6D2B] transition-colors font-medium truncate block">
                            karriere@nabiota.de
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 4: Hours */}
                  <div className="bg-[#FAF7F0] border border-[#EAE4D7] rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 sm:gap-4">
                    <div className="shrink-0 text-[#8C6D2B] pt-0.5">
                      <Clock className="w-7 h-7 stroke-[1.6]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif font-bold text-[13.5px] sm:text-[14px] text-[#132218] mb-1 leading-snug">
                        {t.left.hoursTitle}
                      </h3>
                      <div className="font-sans text-[11.5px] sm:text-[12px] text-[#556358] leading-relaxed">
                        <p>{locale === "uz" ? "Dushanba - Juma" : locale === "ru" ? "Понедельник - Пятница" : locale === "en" ? "Monday - Friday" : locale === "tr" ? "Pazartesi - Cuma" : locale === "ar" ? "الاثنين - الجمعة" : "Montag - Freitag"}</p>
                        <p className="font-medium text-[#132218]">08:00 - 18:00</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 5: Holding & Registry (Full Width) */}
                  <div className="sm:col-span-2 bg-[#FAF7F0] border border-[#EAE4D7] rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 sm:gap-4">
                    <div className="shrink-0 text-[#8C6D2B] pt-0.5">
                      <ShieldCheck className="w-7 h-7 stroke-[1.6]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif font-bold text-[13.5px] sm:text-[14px] text-[#132218] mb-1 leading-snug">
                        {t.left.registryTitle}
                      </h3>
                      <div className="font-sans text-[11px] sm:text-[11.5px] text-[#556358] space-y-0.5">
                        <p>{t.left.registryCourt}, {t.left.registryHrb}</p>
                        <p className="font-medium text-[#8D6B27]">{t.left.registryCapital}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Right Column: Write to Us Form ── */}
              <div className="lg:col-span-6">
                <div className="bg-white rounded-[24px] p-5 sm:p-6 lg:p-7 border border-[#EAE4D7] shadow-[0_4px_24px_rgba(19,34,24,0.03)]">
                  <h2 className="font-serif text-[24px] sm:text-[28px] text-[#132218] font-normal leading-tight mb-1">
                    {locale === "uz"
                      ? "Bizga yozing"
                      : locale === "ru"
                      ? "Написать нам"
                      : locale === "en"
                      ? "Write to Us"
                      : locale === "tr"
                      ? "Bize Yazın"
                      : locale === "ar"
                      ? "راسلونا"
                      : "Nachricht schreiben"}
                  </h2>
                  <p className="font-sans text-[12px] sm:text-[12.5px] text-[#556358] mb-5">
                    {t.form.subtitle}
                  </p>

                  {status === "success" && (
                    <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2.5 text-emerald-800 text-xs sm:text-[12.5px]">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                      <p>{t.form.successMsg}</p>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 flex items-center gap-2.5 text-rose-800 text-xs sm:text-[12.5px]">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                      <p>{errorMessage}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-3 font-sans">
                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] sm:text-[11.5px] font-medium text-[#2C382F] mb-1">
                          {locale === "uz" ? "To'liq ism *" : locale === "ru" ? "Полное имя *" : locale === "en" ? "Full Name *" : locale === "tr" ? "Ad Soyad *" : locale === "ar" ? "الاسم الكامل *" : "Vollständiger Name *"}
                        </label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder={locale === "ru" ? "Ваше имя" : t.form.namePlaceholder}
                          required
                          className="w-full px-3 py-2 rounded-xl border border-[#DCD6C8] bg-white text-[#132218] text-xs sm:text-[12.5px] placeholder:text-[#9EAAA0] focus:outline-none focus:border-[#132B1E] focus:ring-1 focus:ring-[#132B1E] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] sm:text-[11.5px] font-medium text-[#2C382F] mb-1">
                          {locale === "uz" ? "E-mail *" : locale === "ru" ? "E-mail *" : locale === "en" ? "E-mail *" : locale === "tr" ? "E-posta *" : locale === "ar" ? "البريد الإلكتروني *" : "E-Mail *"}
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={locale === "ru" ? "example@domain.de" : t.form.emailPlaceholder}
                          required
                          className="w-full px-3 py-2 rounded-xl border border-[#DCD6C8] bg-white text-[#132218] text-xs sm:text-[12.5px] placeholder:text-[#9EAAA0] focus:outline-none focus:border-[#132B1E] focus:ring-1 focus:ring-[#132B1E] transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] sm:text-[11.5px] font-medium text-[#2C382F] mb-1">
                          {locale === "uz" ? "Telefon *" : locale === "ru" ? "Телефон *" : locale === "en" ? "Phone *" : locale === "tr" ? "Telefon *" : locale === "ar" ? "الهاتف *" : "Telefon *"}
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+49 170 1234567"
                          className="w-full px-3 py-2 rounded-xl border border-[#DCD6C8] bg-white text-[#132218] text-xs sm:text-[12.5px] placeholder:text-[#9EAAA0] focus:outline-none focus:border-[#132B1E] focus:ring-1 focus:ring-[#132B1E] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] sm:text-[11.5px] font-medium text-[#2C382F] mb-1">
                          {locale === "uz" ? "Tashkilot / Praksis" : locale === "ru" ? "Организация / Практика" : locale === "en" ? "Company / Practice" : locale === "tr" ? "Kurum / Klinik" : locale === "ar" ? "المؤسسة / العيادة" : "Unternehmen / Praxis"}
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder={locale === "ru" ? "Клиника / Медцентр" : t.form.companyPlaceholder}
                          className="w-full px-3 py-2 rounded-xl border border-[#DCD6C8] bg-white text-[#132218] text-xs sm:text-[12.5px] placeholder:text-[#9EAAA0] focus:outline-none focus:border-[#132B1E] focus:ring-1 focus:ring-[#132B1E] transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 3: Subject */}
                    <div>
                      <label className="block text-[11px] sm:text-[11.5px] font-medium text-[#2C382F] mb-1">
                        {locale === "uz" ? "Murojaat mavzusi" : locale === "ru" ? "Тема обращения" : locale === "en" ? "Subject" : locale === "tr" ? "Konu" : locale === "ar" ? "الموضوع" : "Betreff"}
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-[#DCD6C8] bg-white text-[#132218] text-xs sm:text-[12.5px] focus:outline-none focus:border-[#132B1E] focus:ring-1 focus:ring-[#132B1E] transition-all cursor-pointer"
                      >
                        <option value="" disabled>{locale === "uz" ? "Mavzuni tanlang" : locale === "ru" ? "Выберите тему" : locale === "en" ? "Select a subject" : locale === "tr" ? "Konu seçin" : locale === "ar" ? "اختر الموضوع" : "Thema auswählen"}</option>
                        {t.form.subjects.map((subj, idx) => (
                          <option key={idx} value={subj}>
                            {subj}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Row 4: Message */}
                    <div>
                      <label className="block text-[11px] sm:text-[11.5px] font-medium text-[#2C382F] mb-1">
                        {locale === "uz" ? "Sizning xabaringiz *" : locale === "ru" ? "Ваше сообщение *" : locale === "en" ? "Your Message *" : locale === "tr" ? "Mesajınız *" : locale === "ar" ? "رسالتكم *" : "Ihre Nachricht *"}
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={locale === "ru" ? "Напишите ваше сообщение..." : t.form.messagePlaceholder}
                        required
                        className="w-full px-3 py-2 rounded-xl border border-[#DCD6C8] bg-white text-[#132218] text-xs sm:text-[12.5px] placeholder:text-[#9EAAA0] focus:outline-none focus:border-[#132B1E] focus:ring-1 focus:ring-[#132B1E] transition-all resize-none"
                      />
                    </div>

                    {/* Row 5: Privacy Checkbox */}
                    <div className="flex items-start gap-2 pt-0.5">
                      <input
                        type="checkbox"
                        id="privacyConsent"
                        checked={formData.privacyConsent}
                        onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                        required
                        className="mt-0.5 w-4 h-4 rounded border-[#DCD6C8] text-[#132B1E] focus:ring-[#132B1E] cursor-pointer shrink-0"
                      />
                      <label htmlFor="privacyConsent" className="text-[11px] text-[#556358] leading-snug cursor-pointer">
                        {locale === "uz" ? (
                          <>
                            Men{" "}
                            <Link href={`/${locale}/privacy`} className="text-[#8C6D2B] underline hover:text-[#132B1E]">
                              maxfiylik siyosati
                            </Link>{" "}
                            bilan tanishdim va ma'lumotlarim qayta ishlanishiga rozilik bildiraman. *
                          </>
                        ) : locale === "ru" ? (
                          <>
                            Я ознакомился(ась) с{" "}
                            <Link href={`/${locale}/privacy`} className="text-[#8C6D2B] underline hover:text-[#132B1E]">
                              политикой конфиденциальности
                            </Link>{" "}
                            и даю согласие на обработку данных. *
                          </>
                        ) : locale === "en" ? (
                          <>
                            I have read the{" "}
                            <Link href={`/${locale}/privacy`} className="text-[#8C6D2B] underline hover:text-[#132B1E]">
                              privacy policy
                            </Link>{" "}
                            and consent to data processing. *
                          </>
                        ) : locale === "tr" ? (
                          <>
                            <Link href={`/${locale}/privacy`} className="text-[#8C6D2B] underline hover:text-[#132B1E]">
                              Gizlilik politikasını
                            </Link>{" "}
                            okudum ve kişisel verilerimin işlenmesini kabul ediyorum. *
                          </>
                        ) : locale === "ar" ? (
                          <>
                            لقد قرأت{" "}
                            <Link href={`/${locale}/privacy`} className="text-[#8C6D2B] underline hover:text-[#132B1E]">
                              سياسة الخصوصية
                            </Link>{" "}
                            وأوافق على معالجة بياناتي وفقاً لها. *
                          </>
                        ) : (
                          <>
                            Ich habe die{" "}
                            <Link href={`/${locale}/privacy`} className="text-[#8C6D2B] underline hover:text-[#132B1E]">
                              Datenschutzerklärung
                            </Link>{" "}
                            gelesen und willige ein. *
                          </>
                        )}
                      </label>
                    </div>

                    {/* Row 6: Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full py-3 px-6 rounded-full bg-[#132B1E] hover:bg-[#0C1C11] text-white font-medium text-[13px] sm:text-[13.5px] flex items-center justify-center gap-2 shadow-sm transition-all duration-200 cursor-pointer disabled:opacity-50"
                      >
                        <span>
                          {locale === "uz"
                            ? "Xabarni yuborish"
                            : locale === "ru"
                            ? "Отправить сообщение"
                            : locale === "en"
                            ? "Send Message"
                            : locale === "tr"
                            ? "Mesajı Gönder"
                            : locale === "ar"
                            ? "إرسال الرسالة"
                            : "Nachricht absenden"}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </section>

            {/* ══════════════════════════════════════════════════════════
                SECTION 2 (PHOTO BOTTOM):
                - Eyebrow: НАШИ ОФИСЫ
                - Header: Где нас найти + Category Tabs (Все локации, Головной офис, Клиники, Партнеры)
                - Left (7 cols): 3 Location Cards (Active Dark Green + White Cards)
                - Right (5 cols): Interactive Google Map + Floating QR Card
            ══════════════════════════════════════════════════════════ */}
            <section className="pt-8 sm:pt-10 border-t border-[#EDE7D9]">
              {/* Header with Title on Left, Tabs on Right */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
                <div>
                  <span className="block text-[#8C6D2B] text-[11px] font-semibold tracking-wider uppercase mb-1">
                    {locale === "uz"
                      ? "BIZNING OFISLARIMIZ"
                      : locale === "ru"
                      ? "НАШИ ОФИСЫ"
                      : locale === "en"
                      ? "OUR LOCATIONS"
                      : locale === "tr"
                      ? "OFİSLERİMİZ"
                      : locale === "ar"
                      ? "مكاتبنا وعياداتنا"
                      : "UNSERE STANDORTE"}
                  </span>
                  <h2 className="font-serif text-[26px] sm:text-[34px] text-[#132218] font-normal leading-tight">
                    {locale === "uz"
                      ? "Bizni qayerdan topish mumkin"
                      : locale === "ru"
                      ? "Где нас найти"
                      : locale === "en"
                      ? "Where to Find Us"
                      : locale === "tr"
                      ? "Bizi Nerede Bulabilirsiniz"
                      : locale === "ar"
                      ? "أين تجدوننا"
                      : "Wo Sie uns finden"}
                  </h2>
                </div>

                {/* Category Tabs */}
                <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-[13px] border-b border-[#EAE4D7] sm:border-0 pb-2 sm:pb-0 overflow-x-auto">
                  <button
                    type="button"
                    onClick={() => setActiveCategory("all")}
                    className={`pb-1 whitespace-nowrap transition-colors cursor-pointer ${
                      activeCategory === "all"
                        ? "font-semibold text-[#132B1E] border-b-2 border-[#132B1E]"
                        : "text-[#7A867E] hover:text-[#132B1E]"
                    }`}
                  >
                    {locale === "uz"
                      ? "Barcha manzillar"
                      : locale === "ru"
                      ? "Все локации"
                      : locale === "en"
                      ? "All Locations"
                      : locale === "tr"
                      ? "Tüm Konumlar"
                      : locale === "ar"
                      ? "جميع المواقع"
                      : "Alle Standorte"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCategory("hq");
                      setActiveLocationId("hq");
                    }}
                    className={`pb-1 whitespace-nowrap transition-colors cursor-pointer ${
                      activeCategory === "hq"
                        ? "font-semibold text-[#132B1E] border-b-2 border-[#132B1E]"
                        : "text-[#7A867E] hover:text-[#132B1E]"
                    }`}
                  >
                    {locale === "uz"
                      ? "Bosh ofis"
                      : locale === "ru"
                      ? "Головной офис"
                      : locale === "en"
                      ? "Headquarters"
                      : locale === "tr"
                      ? "Merkez Ofis"
                      : locale === "ar"
                      ? "المقر الرئيسي"
                      : "Hauptsitz"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCategory("clinics");
                      if (activeLocationId === "hq" || activeLocationId === "partners-nrw") {
                        setActiveLocationId("klinik-mg");
                      }
                    }}
                    className={`pb-1 whitespace-nowrap transition-colors cursor-pointer ${
                      activeCategory === "clinics"
                        ? "font-semibold text-[#132B1E] border-b-2 border-[#132B1E]"
                        : "text-[#7A867E] hover:text-[#132B1E]"
                    }`}
                  >
                    {locale === "uz"
                      ? "Klinikalar"
                      : locale === "ru"
                      ? "Клиники"
                      : locale === "en"
                      ? "Clinics"
                      : locale === "tr"
                      ? "Klinikler"
                      : locale === "ar"
                      ? "العيادات"
                      : "Kliniken"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCategory("partners");
                      setActiveLocationId("partners-nrw");
                    }}
                    className={`pb-1 whitespace-nowrap transition-colors cursor-pointer ${
                      activeCategory === "partners"
                        ? "font-semibold text-[#132B1E] border-b-2 border-[#132B1E]"
                        : "text-[#7A867E] hover:text-[#132B1E]"
                    }`}
                  >
                    {locale === "uz"
                      ? "Hamkorlar"
                      : locale === "ru"
                      ? "Партнеры"
                      : locale === "en"
                      ? "Partners"
                      : locale === "tr"
                      ? "Ortaklar"
                      : locale === "ar"
                      ? "الشركاء"
                      : "Partner"}
                  </button>
                </div>
              </div>

              {/* Grid: 3 Location Cards (left) + Map Container with QR code (right) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
                {/* 3 Location Cards */}
                <div className="lg:col-span-7 xl:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3.5 items-stretch">
                  {filteredLocations.map((loc) => {
                    const isActive = loc.id === activeLocationId;
                    return (
                      <div
                        key={loc.id}
                        onClick={() => setActiveLocationId(loc.id)}
                        className={`rounded-2xl p-3 sm:p-3.5 flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                          isActive
                            ? "bg-[#132B1E] text-white border-2 border-[#132B1E] shadow-sm"
                            : "bg-white text-[#132218] border-2 border-[#EAE4D7] hover:border-[#D5B878]/80 shadow-[0_1px_6px_rgba(0,0,0,0.02)]"
                        }`}
                      >
                        <div>
                          {/* Image */}
                          <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-3 bg-neutral-900">
                            <Image
                              src={loc.image}
                              alt={loc.title}
                              fill
                              className="object-cover transition-transform duration-500 hover:scale-105"
                              sizes="(max-width: 768px) 100vw, 300px"
                            />
                          </div>

                          {/* Title */}
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <MapPin className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-[#ECCF96]" : "text-[#8C6D2B]"}`} />
                            <h3 className={`font-serif text-[13.5px] sm:text-[14px] font-medium leading-tight truncate ${isActive ? "text-white" : "text-[#132218]"}`}>
                              {loc.title}
                            </h3>
                          </div>

                          {/* Address */}
                          <p className={`font-sans text-[11px] sm:text-[11.5px] leading-snug mb-3 whitespace-pre-line ${isActive ? "text-white/80" : "text-[#556358]"}`}>
                            {loc.address}
                          </p>

                          {/* Phone & Mail */}
                          <div className="space-y-1 font-sans text-[11px] mb-3">
                            <div className="flex items-center gap-1.5">
                              <Phone className={`w-3 h-3 shrink-0 ${isActive ? "text-white/60" : "text-[#8C6D2B]"}`} />
                              <a
                                href={`tel:${loc.phone.replace(/\s+/g, "")}`}
                                onClick={(e) => e.stopPropagation()}
                                className={`hover:underline truncate ${isActive ? "text-white/90" : "text-[#2C382F]"}`}
                              >
                                {loc.phone}
                              </a>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Mail className={`w-3 h-3 shrink-0 ${isActive ? "text-white/60" : "text-[#8C6D2B]"}`} />
                              <a
                                href={`mailto:${loc.email}`}
                                onClick={(e) => e.stopPropagation()}
                                className={`hover:underline truncate ${isActive ? "text-white/90" : "text-[#2C382F]"}`}
                              >
                                {loc.email}
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* Button: "Показать на карте" */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveLocationId(loc.id);
                          }}
                          className={`w-full mt-2 py-2 px-3 rounded-full text-[11px] sm:text-[11.5px] font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                            isActive
                              ? "border border-white/25 hover:border-white text-white bg-white/5 hover:bg-white/10"
                              : "border border-[#DCD6C8] hover:border-[#132B1E] text-[#132218] bg-transparent hover:bg-[#FAF8F5]"
                          }`}
                        >
                          <MapPin className="w-3 h-3 shrink-0" />
                          <span>
                            {locale === "uz"
                              ? "Xaritada ko'rsatish"
                              : locale === "ru"
                              ? "Показать на карте"
                              : locale === "en"
                              ? "Show on map"
                              : locale === "tr"
                              ? "Haritada göster"
                              : locale === "ar"
                              ? "عرض على الخريطة"
                              : "Auf der Karte zeigen"}
                          </span>
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* Right: Map Container with bottom QR Card */}
                <div className="lg:col-span-5 xl:col-span-5">
                  <div className="relative rounded-[22px] overflow-hidden border border-[#EAE4D7] bg-[#EAE7DC] h-full min-h-[420px] sm:min-h-[460px] shadow-sm flex flex-col justify-between">
                    {/* Interactive Map iframe */}
                    <iframe
                      title={activeLocation.title}
                      src={`https://maps.google.com/maps?q=${activeLocation.query}&t=&z=${mapZoom}&ie=UTF8&iwloc=&output=embed`}
                      width="100%"
                      height="100%"
                      className="absolute inset-0 w-full h-full border-0 pointer-events-auto"
                      loading="lazy"
                    />

                    {/* Stylized Floating Map Pin Label */}
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center pointer-events-none drop-shadow-md">
                      <div className="bg-[#132B1E] text-white text-[11.5px] font-medium px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-white/20 whitespace-nowrap">
                        <MapPin className="w-3 h-3 text-[#ECCF96]" />
                        <span>{activeLocation.mapPin}</span>
                      </div>
                      <div className="w-0 h-0 border-x-4 border-x-transparent border-t-6 border-t-[#132B1E]" />
                    </div>

                    {/* Map Zoom Controls */}
                    <div className="absolute top-3 right-3 z-10 flex flex-col rounded-lg overflow-hidden border border-black/10 bg-white/95 shadow-md">
                      <button
                        type="button"
                        onClick={() => setMapZoom((prev) => Math.min(prev + 1, 19))}
                        className="w-7 h-7 flex items-center justify-center text-[#132218] hover:bg-[#FAF8F5] border-b border-[#EDE7D9] font-medium text-sm transition-colors cursor-pointer"
                        aria-label="Zoom in"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() => setMapZoom((prev) => Math.max(prev - 1, 10))}
                        className="w-7 h-7 flex items-center justify-center text-[#132218] hover:bg-[#FAF8F5] font-medium text-sm transition-colors cursor-pointer"
                        aria-label="Zoom out"
                      >
                        −
                      </button>
                    </div>

                    {/* Spacer to push floating card to bottom */}
                    <div className="flex-1 pointer-events-none" />

                    {/* Floating Bottom Card: QR Code & Open in Google Maps */}
                    <div className="relative z-20 m-3 sm:m-3.5 p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#EDE7D9] shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="relative w-11 h-11 rounded-lg border border-[#EDE7D9] bg-white p-0.5 shrink-0 overflow-hidden shadow-2xs">
                          <Image
                            src="/images/contact/google-maps-qr.webp"
                            alt="Google Maps QR Code"
                            fill
                            className="object-contain p-0.5"
                          />
                        </div>
                        <div>
                          <h4 className="font-serif font-bold text-[12px] text-[#132218] leading-tight">
                            {t.cards.qrTitle}
                          </h4>
                          <p className="font-sans text-[10px] sm:text-[10.5px] text-[#556358] leading-tight mt-0.5 max-w-[210px]">
                            {t.cards.qrDesc}
                          </p>
                        </div>
                      </div>

                      <a
                        href={`https://maps.google.com/?q=${activeLocation.query}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1 px-3.5 py-1.5 rounded-full border border-[#DCD6C8] bg-white hover:bg-[#FAF8F5] hover:border-[#132B1E] text-[#132218] text-[11px] font-medium transition-colors shadow-2xs shrink-0 cursor-pointer"
                      >
                        <span>{t.cards.openMaps}</span>
                        <ExternalLink className="w-3 h-3 text-[#717A73]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

      </main>

      <Footer currentLocale={locale} />
    </div>
  );
}
