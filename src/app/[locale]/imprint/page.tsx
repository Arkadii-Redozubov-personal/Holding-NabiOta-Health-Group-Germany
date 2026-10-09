import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Scale, Building2, FileCheck } from "lucide-react";
import { companyInfo } from "@/data/company";
import { locales, SupportedLocale } from "@/lib/i18n";
import { Metadata } from "next";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocalizedImprintProps {
  params: Promise<{ locale: SupportedLocale }>;
}

export async function generateMetadata({ params }: LocalizedImprintProps): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    uz: "Chiqish ma'lumotlari (Impressum) | Yuridik ma'lumotlar",
    de: "Impressum | Rechtliche Angaben nach § 5 TMG",
    en: "Imprint | Legal Notice according to § 5 TMG",
    ru: "Выходные данные (Impressum) | Юридическая информация",
    tr: "Künye | § 5 TMG Uyarınca Yasal Bilgiler",
    ar: "بيانات النشر القانونية (Impressum) | NabiOta®",
  };
  return {
    title: titles[locale] || titles.de,
    alternates: {
      canonical: `https://www.nabiota-health-group.de/${locale}/imprint`,
      languages: {
        uz: "https://www.nabiota-health-group.de/uz/imprint",
        de: "https://www.nabiota-health-group.de/de/imprint",
        en: "https://www.nabiota-health-group.de/en/imprint",
        ru: "https://www.nabiota-health-group.de/ru/imprint",
        tr: "https://www.nabiota-health-group.de/tr/imprint",
        ar: "https://www.nabiota-health-group.de/ar/imprint",
        "x-default": "https://www.nabiota-health-group.de/de/imprint",
      },
    },
  };
}

export default async function LocalizedImprintPage({ params }: LocalizedImprintProps) {
  const { locale } = await params;
  const isUz = locale === "uz";
  const isRu = locale === "ru";
  const isEn = locale === "en";
  const isTr = locale === "tr";
  const isAr = locale === "ar";

  const imprintBadges = [
    {
      icon: <Scale className="w-5 h-5 text-[#ECCF96]" />,
      title: isUz ? "Huquqiy" : isRu ? "Правовые" : isEn ? "Legal" : isTr ? "Yasal" : isAr ? "الامتثال" : "Rechtssicherheit",
      sub: isUz ? "Me'yorlar (§ 5 TMG)" : isRu ? "Нормы (§5 TMG)" : isEn ? "Compliance" : isTr ? "Uyum (§ 5 TMG)" : isAr ? "القانوني (§ 5 TMG)" : "nach § 5 TMG",
    },
    {
      icon: <Building2 className="w-5 h-5 text-[#ECCF96]" />,
      title: isUz ? "Tuzilma" : isRu ? "Структура" : isEn ? "Corporate" : isTr ? "Kurumsal" : isAr ? "الهيكل" : "NabiOta GmbH",
      sub: isUz ? "Xolding" : isRu ? "Холдинга" : isEn ? "Structure" : isTr ? "Holding Yapısı" : isAr ? "المؤسسي" : "Holding",
    },
    {
      icon: <FileCheck className="w-5 h-5 text-[#ECCF96]" />,
      title: isUz ? "Shaffoflik" : isRu ? "Прозрачность" : isEn ? "Registry" : isTr ? "Şeffaflık" : isAr ? "الشفافية" : "Transparenz",
      sub: isUz ? "Va Reestr" : isRu ? "И Реестр" : isEn ? "Transparency" : isTr ? "ve Sicil Kaydı" : isAr ? "والسجل التجاري" : "& Register",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentLocale={locale} />
      <main className="flex-1 pb-20">
        <PageHero
          locale={locale}
          eyebrow={
            isUz
              ? "YURIDIK MA'LUMOTLAR"
              : isRu
              ? "ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ"
              : isEn
              ? "LEGAL NOTICE"
              : isTr
              ? "YASAL BİLGİLER"
              : isAr
              ? "بيانات النشر القانونية"
              : "RECHTLICHE PFLICHTANGABEN"
          }
          title={
            isUz
              ? "Chiqish ma'lumotlari (Impressum)"
              : isRu
              ? "Выходные данные (Impressum)"
              : isEn
              ? "Imprint & Legal Notice"
              : isTr
              ? "Künye ve Yasal Bilgiler"
              : isAr
              ? "بيانات النشر القانونية (Impressum)"
              : "Impressum"
          }
          description={
            isUz
              ? "Germaniya Telemedia to'g'risidagi qonuni (§ 5 TMG) va Davlat ommaviy axborot vositalari shartnomasi (§ 18 2-band MStV) bo'yicha majburiy ma'lumotlar."
              : isRu
              ? "Сведения в соответствии с § 5 Закона о средствах телекоммуникации Германии (TMG) и § 18 разд. 2 MStV."
              : isEn
              ? "Information pursuant to § 5 Telemedia Act (TMG) and § 18 para. 2 Interstate Media Treaty (MStV)."
              : isTr
              ? "Alman Telemedya Yasası (§ 5 TMG) ve Devlet Medya Anlaşması (§ 18 Fıkra 2 MStV) uyarınca yasal bildirimler."
              : isAr
              ? "معلومات وبيانات النشر الإلزامية بموجب المادة § 5 من قانون خدمات الوسائط الإلكترونية الألماني (TMG) والمادة § 18 الفقرة 2 من اتفاقية وسائل الإعلام (MStV)."
              : "Angaben gemäß § 5 Telemediengesetz (TMG) und § 18 Abs. 2 Medienstaatsvertrag (MStV)."
          }
          imageSrc="/images/heroes/hero-campus.webp"
          imageAlt="NabiOta Health Group Germany Impressum"
          badges={imprintBadges}
        />

        <section className="py-16 sm:py-20 bg-[#FAF8F5]">
          <Container size="default" className="max-w-[1160px]">
            <div className="bg-white p-8 sm:p-12 lg:p-14 rounded-3xl border border-forest-900/10 shadow-sm space-y-8 text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
              <div>
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  {isUz ? "Xizmat ko'rsatuvchi" : isRu ? "Поставщик услуг" : isEn ? "Service Provider" : isTr ? "Hizmet Sağlayıcı" : isAr ? "الجهة المقدمة للخدمة" : "Diensteanbieter"}
                </h2>
                <p className="font-semibold text-forest-950">{companyInfo.legalName}</p>
                <p>{companyInfo.street}</p>
                <p>{companyInfo.postalCode} {companyInfo.city}</p>
                <p>{isUz ? "Germaniya" : isTr ? "Almanya" : isAr ? "ألمانيا" : companyInfo.country}</p>
              </div>

              <div className="pt-6 border-t border-forest-900/10">
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  {isUz ? "Vakolatli vakillar" : isRu ? "Уполномоченные представители" : isEn ? "Authorized Representatives" : isTr ? "Temsile Yetkili Kişiler" : isAr ? "الممثلون القانونيون والمفوضون بالتوقيع" : "Vertretungsberechtigte"}
                </h2>
                <p>
                  <strong className="text-forest-950 font-medium">
                    {isUz
                      ? "Rahbariyat nomidan:"
                      : isRu
                      ? "В лице руководства:"
                      : isEn
                      ? "Represented by the Management Board:"
                      : isTr
                      ? "Yönetim kurulu adına:"
                      : isAr
                      ? "تمثيل الإدارة التنفيذية:"
                      : "Vertreten durch die Geschäftsführung:"}
                  </strong>
                  <br />
                  {companyInfo.managingDirector}
                </p>
                {companyInfo.medicalFounder && (
                  <p className="mt-2">
                    <strong className="text-forest-950 font-medium">
                      {isUz
                        ? "Tashkil etuvchi shartnoma shifokori:"
                        : isRu
                        ? "Учредитель / Врач-основатель:"
                        : isEn
                        ? "Founding Licensed Physician:"
                        : isTr
                        ? "Kurucu Sözleşmeli Hekim:"
                        : isAr
                        ? "الطبيب المؤسس المتعاقد:"
                        : "Gründungsberechtigter Vertragsarzt:"}
                    </strong>
                    <br />
                    {companyInfo.medicalFounder}
                  </p>
                )}
              </div>

              <div className="pt-6 border-t border-forest-900/10">
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  {isUz ? "Aloqa" : isRu ? "Контакты" : isEn ? "Contact" : isTr ? "İletişim" : isAr ? "الاتصال" : "Kontakt"}
                </h2>
                <p>
                  {isUz ? "Telefon (Kotibiyat): " : isTr ? "Telefon (Sekreterlik): " : isAr ? "الهاتف (السكرتارية): " : "Telefon (Sekretariat): "}{companyInfo.phones.sekretariat}
                  <br />
                  {isUz ? "Telefon (Qabul): " : isTr ? "Telefon (Hasta Kabul): " : isAr ? "الهاتف (استقبال المرضى): " : "Telefon (Aufnahme): "}{companyInfo.phones.aufnahme}
                  <br />
                  {isUz ? "Telefon (Boshqaruv): " : isTr ? "Telefon (Yönetim): " : isAr ? "الهاتف (الإدارة): " : "Telefon (Geschäftsführung): "}{companyInfo.phones.geschaeftsfuehrung}
                  <br />
                  {isUz ? "Telefaks: " : isTr ? "Faks: " : isAr ? "الفاكس: " : "Telefax: "}{companyInfo.phones.fax}
                </p>
                <p className="mt-2">
                  E-Mail:{" "}
                  <a href={`mailto:${companyInfo.email}`} className="text-gold-700 underline">
                    {companyInfo.email}
                  </a>
                  <br />
                  Internet:{" "}
                  <a href={`https://${companyInfo.website}`} className="text-gold-700 underline">
                    {companyInfo.website}
                  </a>
                </p>
              </div>

              <div className="pt-6 border-t border-forest-900/10">
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  {isUz ? "Reestr yozuvi" : isRu ? "Реестровая запись" : isEn ? "Register Entry" : isTr ? "Ticaret Sicil Kaydı" : isAr ? "بيانات السجل التجاري" : "Registereintrag"}
                </h2>
                <p>
                  {isUz
                    ? "Tijorat reestriga kiritish:"
                    : isRu
                    ? "Внесение в торговый реестр:"
                    : isEn
                    ? "Commercial Register Entry:"
                    : isTr
                    ? "Ticaret Siciline Kayıt:"
                    : isAr
                    ? "القيد في السجل التجاري:"
                    : "Eintragung im Handelsregister."}
                  <br />
                  {isUz ? "Reestr sudi: " : isTr ? "Sicil Mahkemesi: " : isAr ? "محكمة السجل: " : "Registergericht: "}{companyInfo.commercialRegister.court}
                  <br />
                  {isUz ? "Tijorat reestri raqami: " : isTr ? "Ticaret Sicil Numarası: " : isAr ? "رقم السجل التجاري: " : "Handelsregisternummer: "}{companyInfo.commercialRegister.number}
                  {companyInfo.registrationDate && (
                    <>
                      <br />
                      {isUz
                        ? "Ro'yxatdan o'tgan sana:"
                        : isRu
                        ? "Дата регистрации:"
                        : isEn
                        ? "Registration Date:"
                        : isTr
                        ? "Tescil Tarihi:"
                        : isAr
                        ? "تاريخ القيد:"
                        : "Datum der Eintragung:"}{" "}
                      {companyInfo.registrationDate}
                    </>
                  )}
                  {companyInfo.shareCapital && (
                    <>
                      <br />
                      {isUz
                        ? "Ustav kapitali:"
                        : isRu
                        ? "Уставный капитал:"
                        : isEn
                        ? "Share Capital:"
                        : isTr
                        ? "Esas Sermaye:"
                        : isAr
                        ? "رأس المال المسجل:"
                        : "Stammkapital:"}{" "}
                      {companyInfo.shareCapital}
                    </>
                  )}
                </p>
              </div>

              <div className="pt-6 border-t border-forest-900/10">
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  {isUz ? "Soliq to'lovchining identifikatsiya raqami" : isRu ? "Идентификационный номер налогоплательщика" : isEn ? "VAT Identification Number" : isTr ? "KDV Kimlik Numarası" : isAr ? "الرقم التعريفي لضريبة القيمة المضافة" : "Umsatzsteuer-Identifikationsnummer"}
                </h2>
                <p>
                  {isUz
                    ? "Germaniya qo'shilgan qiymat solig'i to'g'risidagi qonuni § 27a bo'yicha QQS identifikatsiya raqami:"
                    : isRu
                    ? "Идентификационный номер плательщика НДС согласно § 27a Закона о налоге на добавленную стоимость Германии:"
                    : isEn
                    ? "VAT identification number pursuant to § 27a Value Added Tax Act:"
                    : isTr
                    ? "Alman Katma Değer Vergisi Kanunu § 27a uyarınca KDV Kimlik Numarası:"
                    : isAr
                    ? "الرقم التعريفي لضريبة القيمة المضافة بموجب المادة § 27a من قانون ضريبة القيمة المضافة الألماني:"
                    : "Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:"}
                  <br />
                  <strong className="text-forest-950 font-semibold">
                    {companyInfo.commercialRegister.vatId}
                  </strong>
                </p>
              </div>

              <div className="pt-6 border-t border-forest-900/10">
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  {isUz ? "Tahririy mazmun uchun mas'ul (§ 18 2-band MStV)" : isRu ? "Ответственный за содержание" : isEn ? "Responsible for Editorial Content" : isTr ? "İçerikten Sorumlu Kişi (§ 18 Fıkra 2 MStV)" : isAr ? "المسؤول عن المحتوى التحريري بموجب المادة § 18 الفقرة 2 MStV" : "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV"}
                </h2>
                <p>
                  {companyInfo.commercialRegister.responsiblePerson}
                  <br />
                  {companyInfo.street}, {companyInfo.postalCode} {companyInfo.city}
                </p>
              </div>

              <div className="pt-6 border-t border-forest-900/10">
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  {isUz ? "Tovar belgisini himoya qilish va mualliflik huquqi" : isRu ? "Защита товарного знака и авторское право" : isEn ? "Trademark & Copyright Protection" : isTr ? "Marka ve Telif Hakkı Koruması" : isAr ? "حماية العلامة التجارية وحقوق النشر" : "Markenschutz"}
                </h2>
                <p>
                  {isUz
                    ? "NabiOta® — NabiOta® Health Group Germany GmbH kompaniyasining ro'yxatdan o'tkazilgan va qonun bilan muhofaza qilinadigan tovar belgisidir. Tovar belgisi, logotiplar, korporativ belgilar va boshqa himoyalangan aktivlardan foydalanish faqat huquq egasining oldindan berilgan yozma roziligi bilan ruxsat etiladi."
                    : isRu
                    ? "NabiOta® является зарегистрированным и охраняемым законом товарным знаком NabiOta® Health Group Germany GmbH. Использование товарного знака, логотипов, фирменных наименований и иных охраняемых элементов допускается только с предварительного письменного согласия правообладателя."
                    : isEn
                    ? "NabiOta® is a registered and protected trademark of NabiOta® Health Group Germany GmbH. Any use of the trademark, logos, corporate identifiers, or other protected assets requires the prior written consent of the rights holder."
                    : isTr
                    ? "NabiOta®, NabiOta® Health Group Germany GmbH'nin tescilli ve koruma altındaki markasıdır. Markanın, logoların, kurumsal unvanların ve diğer korunan unsurların kullanımı hak sahibinin önceden yazılı iznine tabidir."
                    : isAr
                    ? "NabiOta® هي علامة تجارية مسجلة ومحمية قانونياً لشركة NabiOta® Health Group Germany GmbH. يخضع أي استخدام للعلامة التجارية، أو الشعارات، أو الأسماء المؤسسية، أو العناصر المحمية الأخرى للموافقة الخطية المسبقة لمالك الحقوق."
                    : "NabiOta® ist eine eingetragene und geschützte Marke der NabiOta® Health Group Germany GmbH. Die Nutzung der Marke, der Logos, Unternehmenskennzeichen sowie sonstiger geschützter Bestandteile bedarf der vorherigen schriftlichen Zustimmung der Rechteinhaberin."}
                </p>
              </div>

              <div className="pt-6 border-t border-forest-900/10">
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  {isUz ? "Huquqiy eslatma" : isRu ? "Правовое указание" : isEn ? "Legal Notice" : isTr ? "Yasal Bildirim" : isAr ? "إشعار قانوني" : "Hinweis"}
                </h2>
                <p>
                  {isUz
                    ? "NabiOta® Health Group Germany GmbH — Germaniya qonunchiligiga muvofiq tuzilgan va tijorat reestrida ro'yxatdan o'tgan mas'uliyati cheklangan jamiyat (GmbH)."
                    : isRu
                    ? "NabiOta® Health Group Germany GmbH — общество с ограниченной ответственностью, зарегистрированное в торговом реестре в соответствии с законодательством Германии."
                    : isEn
                    ? "NabiOta® Health Group Germany GmbH is a limited liability company incorporated under German law and registered in the commercial register."
                    : isTr
                    ? "NabiOta® Health Group Germany GmbH, Alman hukukuna göre kurulmuş ve ticaret siciline tescil edilmiş bir limited şirkettir (GmbH)."
                    : isAr
                    ? "إن شركة NabiOta® Health Group Germany GmbH هي شركة ذات مسؤولية محدودة تأسست بموجب القانون الألماني ومقيدة في السجل التجاري."
                    : "Die NabiOta® Health Group Germany GmbH ist eine im Handelsregister eingetragene Gesellschaft mit beschränkter Haftung nach deutschem Recht."}
                </p>
                <p className="mt-2">
                  {isUz
                    ? "NabiOta® — NabiOta® Health Group Germany GmbH kompaniyasining himoyalangan tovar belgisi. Tovar belgisi, logotiplar, kompaniya nomlari yoki boshqa muhofaza qilinadigan elementlardan foydalanish huquq egasining oldindan yozma roziligini talab qiladi."
                    : isRu
                    ? "NabiOta® — охраняемый товарный знак NabiOta® Health Group Germany GmbH. Использование товарного знака, логотипов, фирменных обозначений или иных охраняемых элементов требует предварительного письменного согласия правообладателя."
                    : isEn
                    ? "NabiOta® is a protected trademark of NabiOta® Health Group Germany GmbH. The use of the trademark, logos, company identifiers or other protected components requires the prior written consent of the rights holder."
                    : isTr
                    ? "NabiOta®, NabiOta® Health Group Germany GmbH'nin tescilli markasıdır. Markanın, logoların, şirket simgelerinin veya diğer korunan bileşenlerin kullanımı önceden yazılı izin gerektirir."
                    : isAr
                    ? "NabiOta® هي علامة تجارية مسجلة لشركة NabiOta® Health Group Germany GmbH. يخضع استخدام العلامة أو الشعارات أو المعرفات المؤسسية للموافقة الخطية المسبقة."
                    : "NabiOta® ist eine geschützte Marke der NabiOta® Health Group Germany GmbH. Die Nutzung der Marke, der Logos, Unternehmenskennzeichen oder sonstiger geschützter Bestandteile bedarf der vorherigen schriftlichen Zustimmung der Rechteinhaberin."}
                </p>
                <p className="mt-4 text-xs text-text-secondary/80 font-medium">
                  {isUz
                    ? "© 2026 NabiOta® Health Group Germany GmbH. Barcha huquqlar himoyalangan."
                    : isRu
                    ? "© 2026 NabiOta® Health Group Germany GmbH. Все права защищены."
                    : isEn
                    ? "© 2026 NabiOta® Health Group Germany GmbH. All rights reserved."
                    : isTr
                    ? "© 2026 NabiOta® Health Group Germany GmbH. Tüm hakları saklıdır."
                    : isAr
                    ? "© 2026 NabiOta® Health Group Germany GmbH. كافة الحقوق محفوظة."
                    : "© 2026 NabiOta® Health Group Germany GmbH. Alle Rechte vorbehalten."}
                  <br />
                  {isUz
                    ? "NabiOta® — NabiOta® Health Group Germany GmbH kompaniyasining ro'yxatdan o'tgan tovar belgisi."
                    : isRu
                    ? "NabiOta® является зарегистрированным товарным знаком NabiOta® Health Group Germany GmbH."
                    : isEn
                    ? "NabiOta® is a registered trademark of NabiOta® Health Group Germany GmbH."
                    : isTr
                    ? "NabiOta®, NabiOta® Health Group Germany GmbH'nin tescilli markasıdır."
                    : isAr
                    ? "NabiOta® هي علامة تجارية مسجلة لشركة NabiOta® Health Group Germany GmbH."
                    : "NabiOta® ist eine eingetragene Marke der NabiOta® Health Group Germany GmbH."}
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer currentLocale={locale} />
    </div>
  );
}
