import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { ShieldCheck, Lock, FileText } from "lucide-react";
import { companyInfo } from "@/data/company";
import { locales, SupportedLocale } from "@/lib/i18n";
import { Metadata } from "next";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocalizedPrivacyProps {
  params: Promise<{ locale: SupportedLocale }>;
}

export async function generateMetadata({ params }: LocalizedPrivacyProps): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    de: "Datenschutzerklärung | DSGVO Konformität",
    en: "Privacy Policy | GDPR Compliance",
    ru: "Политика конфиденциальности | GDPR",
    tr: "Gizlilik Politikası | KVKK ve GDPR Uyumluluğu",
    ar: "سياسة الخصوصية | الامتثال للائحة حماية البيانات العامة (GDPR)",
  };
  return {
    title: titles[locale] || titles.de,
    alternates: {
      canonical: `https://www.nabiota-health-group.de/${locale}/privacy`,
      languages: {
        de: "https://www.nabiota-health-group.de/de/privacy",
        en: "https://www.nabiota-health-group.de/en/privacy",
        ru: "https://www.nabiota-health-group.de/ru/privacy",
        tr: "https://www.nabiota-health-group.de/tr/privacy",
        ar: "https://www.nabiota-health-group.de/ar/privacy",
        "x-default": "https://www.nabiota-health-group.de/de/privacy",
      },
    },
  };
}

export default async function LocalizedPrivacyPage({ params }: LocalizedPrivacyProps) {
  const { locale } = await params;
  const isRu = locale === "ru";
  const isEn = locale === "en";
  const isTr = locale === "tr";
  const isAr = locale === "ar";

  const privacyBadges = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "100% GDPR" : isEn ? "100% GDPR" : isTr ? "%100 KVKK & GDPR" : isAr ? "100% امتثال GDPR" : "100% DSGVO",
      sub: isRu ? "Соответствие" : isEn ? "Compliant" : isTr ? "Tam Uyum" : isAr ? "حماية كاملة" : "Konformität",
    },
    {
      icon: <Lock className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "Защита" : isEn ? "Secure" : isTr ? "Güvenli" : isAr ? "أمان" : "Sichere",
      sub: isRu ? "Данных" : isEn ? "Data" : isTr ? "Veri Güvenliği" : isAr ? "البيانات" : "Daten",
    },
    {
      icon: <FileText className="w-5 h-5 text-[#ECCF96]" />,
      title: isRu ? "Полная" : isEn ? "Full" : isTr ? "Eksiksiz" : isAr ? "شفافية" : "Volle",
      sub: isRu ? "Прозрачность" : isEn ? "Transparency" : isTr ? "Şeffaflık" : isAr ? "مطلقة" : "Transparenz",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentLocale={locale} />
      <main className="flex-1 pb-20">
        <PageHero
          locale={locale}
          eyebrow={
            isRu
              ? "КОНФИДЕНЦИАЛЬНОСТЬ И ПРОЗРАЧНОСТЬ"
              : isEn
              ? "PRIVACY & TRANSPARENCY"
              : isTr
              ? "GİZLİLİK VE ŞEFFAFLIK"
              : isAr
              ? "الخصوصية والشفافية"
              : "DATENSCHUTZ & TRANSPARENZ"
          }
          title={
            isRu
              ? "Политика конфиденциальности"
              : isEn
              ? "Privacy Policy"
              : isTr
              ? "Gizlilik Politikası"
              : isAr
              ? "سياسة الخصوصية"
              : "Datenschutzerklärung"
          }
          description={
            isRu
              ? "Информация о характере, объеме и целях обработки персональных данных в соответствии с европейским регламентом GDPR."
              : isEn
              ? "Information on the nature, scope, and purpose of personal data processing under the GDPR."
              : isTr
              ? "Genel Veri Koruma Yönetmeliği (GDPR / DSGVO) uyarınca kişisel verilerin işlenmesinin niteliği, kapsamı ve amacına ilişkin yasal bilgilendirme."
              : isAr
              ? "معلومات تفصيلية حول طبيعة ونطاق وأغراض معالجة البيانات الشخصية وفقاً للائحة حماية البيانات العامة الأوروبية (GDPR/DSGVO)."
              : "Informationen über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten gemäß DSGVO."
          }
          imageSrc="/images/heroes/hero-campus.webp"
          imageAlt="NabiOta Health Group Germany Datenschutz"
          badges={privacyBadges}
        />

        <section className="py-16 sm:py-20 bg-[#FAF8F5]">
          <Container size="default" className="max-w-[1160px]">
            <div className="bg-white p-8 sm:p-12 lg:p-14 rounded-3xl border border-forest-900/10 shadow-sm space-y-8 text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
              <div>
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  {isRu ? "1. Ответственный орган" : isEn ? "1. Data Controller" : isTr ? "1. Veri Sorumlusu" : isAr ? "1. الجهة المسؤولة عن معالجة البيانات" : "1. Verantwortliche Stelle"}
                </h2>
                <p>
                  {isRu
                    ? "Контроллером данных в смысле Общего регламента по защите данных (GDPR) является:"
                    : isEn
                    ? "Responsible body within the meaning of the General Data Protection Regulation (GDPR) is:"
                    : isTr
                    ? "Genel Veri Koruma Yönetmeliği (GDPR/DSGVO) ve ilgili veri koruma mevzuatı kapsamında veri sorumlusu:"
                    : isAr
                    ? "الجهة المسؤولة عن معالجة البيانات وفقاً للائحة العامة لحماية البيانات (GDPR/DSGVO) وقوانين حماية البيانات السارية هي:"
                    : "Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze ist:"}
                </p>
                <div className="mt-2 text-forest-950 font-medium">
                  <p>{companyInfo.legalName}</p>
                  <p>{companyInfo.street}</p>
                  <p>{companyInfo.postalCode} {companyInfo.city}</p>
                  <p>E-Mail: {companyInfo.email}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-forest-900/10">
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  {isRu ? "2. Сбор и хранение персональных данных" : isEn ? "2. Collection and Storage of Personal Data" : isTr ? "2. Kişisel Verilerin Toplanması ve Saklanması" : isAr ? "2. جمع البيانات الشخصية وتخزينها" : "2. Erhebung und Speicherung personenbezogener Daten"}
                </h2>
                <p>
                  {isRu
                    ? "При посещении нашего веб-сайта браузер на вашем устройстве автоматически передает информацию на сервер нашего веб-сайта. Эта информация временно сохраняется в так называемом лог-файле."
                    : isEn
                    ? "When you visit our website, the browser used on your device automatically sends information to the server of our website. This information is temporarily stored in a log file."
                    : isTr
                    ? "Web sitemizi ziyaret ettiğinizde, cihazınızdaki tarayıcı web sitemizin sunucusuna otomatik olarak bilgi iletir. Bu bilgiler geçici olarak bir günlük dosyasında (log dosyası) saklanır."
                    : isAr
                    ? "عند زيارة موقعنا الإلكتروني، يقوم المتصفح المستخدم على جهازكم بإرسال معلومات تلقائياً إلى خادم موقعنا. يتم تخزين هذه المعلومات مؤقتاً في ملف سجل الخادم (Logfile)."
                    : "Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sogenannten Logfile gespeichert."}
                </p>
                <p className="mt-2 text-sm text-text-secondary">
                  {isRu
                    ? "Сюда относятся: IP-адрес, дата и время доступа, имя и URL-адрес запрашиваемого файла, веб-сайт перехода (Referrer-URL), используемый браузер и операционная система."
                    : isEn
                    ? "This includes: IP address, date and time of access, name and URL of retrieved file, referring website (referrer URL), browser used and computer operating system."
                    : isTr
                    ? "Bu bilgiler şunları içerir: IP adresi, erişim tarihi ve saati, erişilen dosyanın adı ve URL'si, yönlendiren web sitesi (Referrer URL), kullanılan tarayıcı ve bilgisayarınızın işletim sistemi."
                    : isAr
                    ? "تشمل هذه البيانات: عنوان IP، تاريخ ووقت الوصول، اسم وعنوان URL للملف المطلوب، الموقع الإلكتروني المحيل (Referrer URL)، المتصفح المستخدم ونظام تشغيل جهازكم."
                    : "Hierzu gehören: IP-Adresse, Datum und Uhrzeit des Zugriffs, Name und URL der abgerufenen Datei, Website, von der aus der Zugriff erfolgt (Referrer-URL), verwendeter Browser und ggf. das Betriebssystem Ihres Rechners."}
                </p>
              </div>

              <div className="pt-6 border-t border-forest-900/10">
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  {isRu ? "3. Ваши права (Права субъекта данных)" : isEn ? "3. Your Rights as a Data Subject" : isTr ? "3. İlgili Kişi Olarak Haklarınız (GDPR/DSGVO)" : isAr ? "3. حقوق أصحاب البيانات بموجب اللائحة الأوروبية (GDPR)" : "3. Betroffenenrechte nach DSGVO"}
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>
                      {isRu
                        ? "Право на доступ (ст. 15 GDPR)"
                        : isEn
                        ? "Right of Access (Art. 15 GDPR)"
                        : isTr
                        ? "Bilgi Edinme Hakkı (Madde 15 GDPR)"
                        : isAr
                        ? "حق الوصول والاطلاع (المادة 15 GDPR)"
                        : "Auskunftsrecht (Art. 15 DSGVO)"}
                      :
                    </strong>{" "}
                    {isRu
                      ? "Вы имеете право запросить подтверждение об обработке данных."
                      : isEn
                      ? "You can request information about your personal data processed by us."
                      : isTr
                      ? "Tarafımızca işlenen kişisel verileriniz hakkında dilediğiniz zaman bilgi talep edebilirsiniz."
                      : isAr
                      ? "يحق لكم طلب معلومات مفصلة ومجانية حول بياناتكم الشخصية التي نقوم بمعالجتها."
                      : "Sie können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen."}
                  </li>
                  <li>
                    <strong>
                      {isRu
                        ? "Право на исправление (ст. 16 GDPR)"
                        : isEn
                        ? "Right to Rectification (Art. 16 GDPR)"
                        : isTr
                        ? "Düzeltme Hakkı (Madde 16 GDPR)"
                        : isAr
                        ? "حق التصحيح (المادة 16 GDPR)"
                        : "Berichtigungsrecht (Art. 16 DSGVO)"}
                      :
                    </strong>{" "}
                    {isRu
                      ? "Право на исправление неточных данных."
                      : isEn
                      ? "You can request the immediate correction of inaccurate data."
                      : isTr
                      ? "Yanlış veya eksik saklanan kişisel verilerinizin derhal düzeltilmesini talep edebilirsiniz."
                      : isAr
                      ? "يحق لكم المطالبة بتصحيح فوري لأي بيانات غير دقيقة أو استكمال البيانات الناقصة."
                      : "Sie können unverzüglich die Berichtigung unrichtiger Daten verlangen."}
                  </li>
                  <li>
                    <strong>
                      {isRu
                        ? "Право на удаление (ст. 17 GDPR)"
                        : isEn
                        ? "Right to Erasure (Art. 17 GDPR)"
                        : isTr
                        ? "Silme Hakkı (Madde 17 GDPR)"
                        : isAr
                        ? "حق المحو والحذف (المادة 17 GDPR)"
                        : "Löschungsrecht (Art. 17 DSGVO)"}
                      :
                    </strong>{" "}
                    {isRu
                      ? "Право на удаление ваших персональных данных."
                      : isEn
                      ? "You can request the deletion of your personal data stored with us."
                      : isTr
                      ? "Yasal saklama yükümlülükleri saklı kalmak kaydıyla, verilerinizin silinmesini talep edebilirsiniz."
                      : isAr
                      ? "يحق لكم طلب مسح بياناتكم الشخصية المخزنة لدينا، ما لم تكن هناك التزامات قانونية تقتضي حفظها."
                      : "Sie können die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen."}
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-forest-900/10">
                <h2 className="font-display text-2xl text-forest-950 mb-3">
                  {isRu ? "4. Безопасность данных" : isEn ? "4. Data Security" : isTr ? "4. Veri Güvenliği" : isAr ? "4. أمن البيانات والتشفير" : "4. Datensicherheit"}
                </h2>
                <p>
                  {isRu
                    ? "Мы используем общепринятый протокол SSL (Secure Socket Layer) в сочетании с наивысшим уровнем шифрования, поддерживаемым вашим браузером."
                    : isEn
                    ? "We use the widespread SSL protocol (Secure Socket Layer) in conjunction with the highest level of encryption supported by your browser during your website visit."
                    : isTr
                    ? "Web sitemizi ziyaretiniz sırasında, tarayıcınızın desteklediği en yüksek şifreleme düzeyine sahip yaygın SSL (Secure Socket Layer) protokolünü kullanmaktayız."
                    : isAr
                    ? "نستخدم أثناء تصفحكم للموقع بروتوكول التشفير الآمن المعتمد عالمياً SSL (Secure Socket Layer) بالتوافق مع أعلى مستويات التشفير التي يدعمها متصفحكم."
                    : "Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird."}
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
