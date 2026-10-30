import { SupportedLocale } from "@/lib/i18n";

export interface AreasStripHeading {
  line1: string;
  line2?: string;
}

export const areasStripHeadings: Record<SupportedLocale, string> = {
  de: "Vielfältige Kompetenz für eine gesündere Zukunft.",
  en: "Diverse expertise for a healthier future.",
  ru: "Многогранная компетенция для здорового будущего.",
  tr: "Sağlıklı bir gelecek için çok yönlü uzmanlık.",
  ar: "كفاءات متعددة لمستقبل أكثر صحة.",
  uz: "Sog'lom kelajak uchun ko'p tarmoqli salohiyat.",
};

export interface StripStatItem {
  number: string | null;
  titles: Record<SupportedLocale, string>;
  subtitles: Record<SupportedLocale, string>;
}

export const areasStripStats: StripStatItem[] = [
  {
    number: null,
    titles: {
      de: "Starke Marke",
      en: "Strong Brand",
      ru: "Сильный бренд",
      tr: "Güçlü Marka",
      ar: "علامة رائدة",
      uz: "Kuchli brend",
    },
    subtitles: {
      de: "Für eine gesündere Gesellschaft.",
      en: "For a healthier society.",
      ru: "Для более здорового общества.",
      tr: "Daha sağlıklı bir toplum için.",
      ar: "من أجل مجتمع أكثر صحة.",
      uz: "Sog'lom jamiyat sari.",
    },
  },
  {
    number: "6+",
    titles: {
      de: "Unternehmensbereiche",
      en: "Business Divisions",
      ru: "Направлений бизнеса",
      tr: "Faaliyet Alanı",
      ar: "قطاعات رئيسية",
      uz: "Faoliyat yo'nalishi",
    },
    subtitles: {
      de: "Kompetenz unter einem Dach.",
      en: "Competence under one roof.",
      ru: "Компетенции под одной крышей.",
      tr: "Tek çatı altında uzmanlık.",
      ar: "كفاءات تحت مظلة واحدة.",
      uz: "Barcha sohalar yagona tizimda.",
    },
  },
  {
    number: "100+",
    titles: {
      de: "Experten im Netzwerk",
      en: "Experts in Network",
      ru: "Экспертов в сети",
      tr: "Ağ İçi Uzman",
      ar: "خبير ومتخصص",
      uz: "Tarmoq mutaxassislari",
    },
    subtitles: {
      de: "Erfahrung. Engagement. Wirkung.",
      en: "Experience. Commitment. Impact.",
      ru: "Опыт. Вовлеченность. Результат.",
      tr: "Deneyim. Özveri. Etki.",
      ar: "خبرة. تفانٍ. نتائج موثوقة.",
      uz: "Tajriba. Fidoyilik. Natija.",
    },
  },
  {
    number: null,
    titles: {
      de: "Eine Mission",
      en: "One Mission",
      ru: "Одна миссия",
      tr: "Ortak Misyon",
      ar: "رسالة مشتركة",
      uz: "Yagona missiya",
    },
    subtitles: {
      de: "Nachhaltige Gesundheitsversorgung für kommende Generationen.",
      en: "Sustainable healthcare for coming generations.",
      ru: "Устойчивое здравоохранение для будущих поколений.",
      tr: "Gelecek nesiller için sürdürülebilir sağlık.",
      ar: "رعاية صحية مستدامة للأجيال القادمة.",
      uz: "Kelajak avlodlar uchun barqaror sog'liqni saqlash.",
    },
  },
];
