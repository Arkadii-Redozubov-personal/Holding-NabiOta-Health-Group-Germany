"use client";

import { useCallback, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { Printer } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/ui/Logo";
import { companyInfo } from "@/data/company";
import { SupportedLocale } from "@/lib/i18n";

type PrintTarget = "all" | "letter" | "cards";

const subscribeToClient = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function CorporateStationerySection({ locale }: { locale: SupportedLocale }) {
  const portalReady = useSyncExternalStore(subscribeToClient, getClientSnapshot, getServerSnapshot);
  const isRu = locale === "ru";
  const isEn = locale === "en";
  const isTr = locale === "tr";
  const isAr = locale === "ar";
  const isUz = locale === "uz";

  const copy = {
    title: isRu ? "Фирменные материалы" : isEn ? "Corporate stationery" : isTr ? "Kurumsal materyaller" : isAr ? "المطبوعات المؤسسية" : isUz ? "Korporativ materiallar" : "Geschäftsausstattung",
    intro: isRu
      ? "Фирменный бланк и двусторонняя визитная карточка NabiOta Health Group Germany."
      : isEn
      ? "Official letterhead and a two-sided business card for NabiOta Health Group Germany."
      : isTr
      ? "NabiOta Health Group Germany için resmi antetli kağıt ve çift taraflı kartvizit."
      : isAr
      ? "ورق مراسلات رسمي وبطاقة عمل بوجهين لمجموعة NabiOta Health Group Germany."
      : isUz
      ? "NabiOta Health Group Germany uchun rasmiy xat blanki va ikki tomonlama tashrif qog‘ozi."
      : "Briefbogen und zweiseitige Visitenkarte der NabiOta Health Group Germany.",
    printAll: isRu ? "Печать всего комплекта" : isEn ? "Print complete set" : isTr ? "Tüm seti yazdır" : isAr ? "طباعة المجموعة كاملة" : isUz ? "To‘liq to‘plamni chop etish" : "Gesamtes Set drucken",
    printLetter: isRu ? "Печать бланка A4" : isEn ? "Print A4 letterhead" : isTr ? "A4 antetli kağıdı yazdır" : isAr ? "طباعة ورق المراسلات A4" : isUz ? "A4 xat blankini chop etish" : "Briefbogen A4 drucken",
    printCards: isRu ? "Печать визиток" : isEn ? "Print business cards" : isTr ? "Kartvizitleri yazdır" : isAr ? "طباعة بطاقات العمل" : isUz ? "Tashrif qog‘ozlarini chop etish" : "Visitenkarten drucken",
    printHint: isRu
      ? "Откроется окно печати или сохранения в PDF. Визитки печатаются с двух сторон на листах A4: выберите переворот по длинному краю и обрежьте по пунктирной линии."
      : isEn
      ? "Choose a printer or Save as PDF. Print the cards double-sided on A4, flip on the long edge, then cut along the dashed lines."
      : isTr
      ? "Yazıcıyı veya PDF olarak kaydetmeyi seçin. Kartvizitleri A4'e çift taraflı, uzun kenardan çevirmeli yazdırın ve kesikli çizgilerden kesin."
      : isAr
      ? "اختر الطابعة أو الحفظ بصيغة PDF. اطبع البطاقات على الوجهين بحجم A4 مع التقليب على الحافة الطويلة، ثم قصها على الخطوط المتقطعة."
      : isUz
      ? "Printer yoki PDF sifatida saqlashni tanlang. Tashrif qog‘ozlarini A4 da ikki tomonlama, uzun chetidan aylantirib chop eting va punktir chiziqlardan kesing."
      : "Drucken oder als PDF speichern. Visitenkarten beidseitig auf A4 drucken, an der langen Kante wenden und entlang der gestrichelten Linien ausschneiden.",
    letterLabel: isRu ? "Фирменный бланк · A4" : isEn ? "Letterhead · A4" : isTr ? "Antetli kağıt · A4" : isAr ? "ورق مراسلات · A4" : isUz ? "Xat blanki · A4" : "Briefbogen · A4",
    cardFront: isRu ? "Визитка · лицевая сторона" : isEn ? "Business card · front" : isTr ? "Kartvizit · ön yüz" : isAr ? "بطاقة العمل · الوجه الأمامي" : isUz ? "Tashrif qog‘ozi · old tomoni" : "Visitenkarte · Vorderseite",
    cardBack: isRu ? "Визитка · оборотная сторона" : isEn ? "Business card · reverse" : isTr ? "Kartvizit · arka yüz" : isAr ? "بطاقة العمل · الوجه الخلفي" : isUz ? "Tashrif qog‘ozi · orqa tomoni" : "Visitenkarte · Rückseite",
    orgLabel: isRu ? "Центральный офис" : isEn ? "Corporate office" : isTr ? "Merkez ofis" : isAr ? "المكتب الرئيسي" : isUz ? "Markaziy ofis" : "Zentrale Verwaltung",
    recipient: isRu ? "Получатель" : isEn ? "Recipient" : isTr ? "Alıcı" : isAr ? "المستلم" : isUz ? "Qabul qiluvchi" : "Empfänger",
    date: isRu ? "Дата" : isEn ? "Date" : isTr ? "Tarih" : isAr ? "التاريخ" : isUz ? "Sana" : "Datum",
    subject: isRu ? "Тема" : isEn ? "Subject" : isTr ? "Konu" : isAr ? "الموضوع" : isUz ? "Mavzu" : "Betreff",
    pageCount: isRu ? "Полный комплект · 4 страницы A4, включая разделитель для двусторонней печати · 8 визиток" : isEn ? "Complete set · 4 A4 pages including a duplex separator · 8 business cards" : isTr ? "Tam set · çift taraflı baskı ayıracı dahil 4 A4 sayfa · 8 kartvizit" : isAr ? "المجموعة كاملة · 4 صفحات A4 مع فاصل للطباعة على الوجهين · 8 بطاقات" : isUz ? "To‘liq to‘plam · ikki tomonlama chop uchun ajratgich bilan 4 ta A4 sahifa · 8 ta tashrif qog‘ozi" : "Komplettset · 4 A4-Seiten inklusive Trennseite für Duplexdruck · 8 Visitenkarten",
  };

  const printSet = useCallback((target: PrintTarget) => {
    const clearTarget = () => {
      delete document.body.dataset.nabiotaStationeryPrint;
      window.removeEventListener("afterprint", clearTarget);
    };

    document.body.dataset.nabiotaStationeryPrint = target;
    window.addEventListener("afterprint", clearTarget, { once: true });
    window.requestAnimationFrame(() => window.print());
  }, []);

  const renderCard = (side: "front" | "back", print = false) => (
    <div className={`stationery-card-face stationery-card-${side}${print ? " stationery-card-print" : ""}`}>
      {side === "front" ? (
        <>
          <Logo variant="dark" size="sm" locale={locale} />
          <div className="stationery-card-front-name">
            <span>{copy.orgLabel}</span>
            <strong>{companyInfo.legalName}</strong>
          </div>
          <span className="stationery-card-gold-line" />
        </>
      ) : (
        <>
          <p className="stationery-card-back-company">{companyInfo.legalName}</p>
          <div className="stationery-card-back-details">
            <span>{companyInfo.street}</span>
            <span>{companyInfo.postalCode} {companyInfo.city}</span>
            <span>{companyInfo.phones.sekretariat}</span>
            <span>{companyInfo.email}</span>
            <span>{companyInfo.website}</span>
          </div>
          <span className="stationery-card-gold-line" />
        </>
      )}
    </div>
  );

  const printCardSheet = (side: "front" | "back") => (
    <div className="stationery-print-sheet stationery-print-card-sheet" data-print-document={`card-${side}`}>
      {Array.from({ length: 8 }, (_, index) => (
        <div className="stationery-print-card-cut" key={`${side}-${index}`}>
          {renderCard(side, true)}
        </div>
      ))}
    </div>
  );

  return (
    <>
      <section className="nabiota-stationery-screen relative overflow-hidden border-y border-[#E8E0D1] bg-[#F5F1E8] py-12 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#D5B878]/10 blur-3xl" />
        <Container size="wide" className="relative z-10">
          <div className="mx-auto mb-9 max-w-3xl text-center sm:mb-12">
            <h2 className="font-serif text-[30px] font-normal leading-tight text-[#142318] sm:text-[36px] lg:text-[42px]">
              {copy.title}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#596157] sm:text-[15px]">
              {copy.intro}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2.5">
              <button type="button" onClick={() => printSet("all")} className="inline-flex items-center gap-2 rounded-full bg-[#0A2115] px-5 py-3 text-xs font-semibold text-[#F8E7BC] shadow-md transition hover:bg-[#173824] sm:text-sm">
                <Printer className="h-4 w-4" />{copy.printAll}
              </button>
              <button type="button" onClick={() => printSet("letter")} className="inline-flex items-center gap-2 rounded-full border border-[#8C9886] bg-white/80 px-5 py-3 text-xs font-semibold text-[#2C3B2E] transition hover:border-[#C5A56A] hover:bg-white sm:text-sm">
                <Printer className="h-4 w-4" />{copy.printLetter}
              </button>
              <button type="button" onClick={() => printSet("cards")} className="inline-flex items-center gap-2 rounded-full border border-[#8C9886] bg-white/80 px-5 py-3 text-xs font-semibold text-[#2C3B2E] transition hover:border-[#C5A56A] hover:bg-white sm:text-sm">
                <Printer className="h-4 w-4" />{copy.printCards}
              </button>
            </div>
            <p className="mx-auto mt-3 max-w-2xl text-[11px] leading-relaxed text-[#74776F]">{copy.printHint}</p>
          </div>

          <div className="mx-auto grid w-full max-w-[860px] items-start justify-items-center gap-6 lg:grid-cols-2 lg:gap-4">
            <div className="w-full max-w-[410px]">
              <div className="stationery-letter-preview relative mx-auto aspect-[0.707] overflow-hidden border border-[#E5DFD3] bg-white p-6 shadow-[0_18px_45px_rgba(28,39,29,0.13)] sm:p-8">
                <div className="flex items-start justify-between gap-2 border-b border-[#E8E0D1] pb-5">
                  <Logo variant="light" size="md" locale={locale} />
                  <div className="pt-1 text-right text-[8px] leading-relaxed text-[#77756D]">
                    <p className="font-semibold text-[#142318]">{companyInfo.legalName}</p>
                    <p>{companyInfo.street}</p>
                    <p>{companyInfo.postalCode} {companyInfo.city}</p>
                  </div>
                </div>
                <div className="mt-5 flex justify-between text-[8px] text-[#77756D]">
                  <span>{companyInfo.street} · {companyInfo.postalCode} {companyInfo.city}</span>
                  <span>{companyInfo.website}</span>
                </div>
                <div className="mt-10 space-y-2">
                  <div className="h-px w-3/5 bg-[#E8E5DE]" />
                  <div className="h-px w-2/5 bg-[#E8E5DE]" />
                </div>
                <div className="mt-8 text-[9px] uppercase tracking-[0.14em] text-[#A1844B]">{copy.subject}</div>
                <div className="mt-3 space-y-2.5">
                  <div className="h-px w-full bg-[#EEECE7]" />
                  <div className="h-px w-full bg-[#EEECE7]" />
                  <div className="h-px w-[92%] bg-[#EEECE7]" />
                  <div className="h-px w-[96%] bg-[#EEECE7]" />
                  <div className="h-px w-[70%] bg-[#EEECE7]" />
                </div>
                <div className="absolute inset-x-6 bottom-6 border-t border-[#D5B878]/60 pt-3 text-[7px] leading-relaxed text-[#7A786F] sm:inset-x-8 sm:bottom-8">
                  <div className="flex flex-wrap justify-between gap-x-2 gap-y-0.5">
                    <span>{companyInfo.phones.sekretariat}</span>
                    <span>{companyInfo.email}</span>
                    <span>{companyInfo.website}</span>
                  </div>
                  <p className="mt-1">{companyInfo.commercialRegister.court} · {companyInfo.commercialRegister.number} · USt-IdNr. {companyInfo.commercialRegister.vatId}</p>
                </div>
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#8D6B2D] via-[#D7B96F] to-[#8D6B2D]" />
              </div>
              <p className="mt-3 text-center text-xs font-medium tracking-wide text-[#596157]">{copy.letterLabel}</p>
            </div>

            <div className="w-full max-w-[410px] space-y-4">
              <div>
                {renderCard("front")}
                <p className="mt-2 text-center text-xs font-medium tracking-wide text-[#596157]">{copy.cardFront}</p>
              </div>
              <div>
                {renderCard("back")}
                <p className="mt-2 text-center text-xs font-medium tracking-wide text-[#596157]">{copy.cardBack}</p>
              </div>
            </div>
          </div>
          <p className="mt-8 text-center text-[11px] text-[#74776F]">{copy.pageCount}</p>
        </Container>
      </section>

      {portalReady && createPortal(<div id="nabiota-stationery-print-root" className="stationery-print-source" aria-hidden="true">
        <div className="stationery-print-sheet stationery-print-letter" data-print-document="letter">
          <header className="stationery-print-letter-header">
            <Logo variant="light" size="md" locale={locale} />
            <div className="stationery-print-legal">
              <strong>{companyInfo.legalName}</strong>
              <span>{companyInfo.street}</span>
              <span>{companyInfo.postalCode} {companyInfo.city}, Deutschland</span>
            </div>
          </header>
          <div className="stationery-print-sender-line">
            {companyInfo.legalName} · {companyInfo.street} · {companyInfo.postalCode} {companyInfo.city}
          </div>
          <div className="stationery-print-recipient">{copy.recipient}</div>
          <div className="stationery-print-date">{copy.date}: ____________________</div>
          <div className="stationery-print-body">
            <span>{copy.subject}:</span>
          </div>
          <footer className="stationery-print-letter-footer">
            <div>
              <strong>{companyInfo.legalName}</strong>
              <span>{companyInfo.street}</span>
              <span>{companyInfo.postalCode} {companyInfo.city}, Deutschland</span>
            </div>
            <div>
              <strong>Kontakt</strong>
              <span>{companyInfo.phones.sekretariat}</span>
              <span>{companyInfo.email}</span>
              <span>{companyInfo.website}</span>
            </div>
            <div>
              <strong>Registergericht</strong>
              <span>{companyInfo.commercialRegister.court}</span>
              <span>HRB {companyInfo.commercialRegister.number}</span>
              <span>USt-IdNr. {companyInfo.commercialRegister.vatId}</span>
            </div>
          </footer>
          <div className="stationery-print-gold-rule" />
        </div>

        <div className="stationery-print-sheet stationery-print-blank" data-print-document="blank" />
        {printCardSheet("front")}
        {printCardSheet("back")}
      </div>, document.body)}
    </>
  );
}
