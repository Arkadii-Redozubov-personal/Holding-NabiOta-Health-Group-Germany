import { SupportedLocale } from "@/lib/i18n";
import { CompanyPlaceholderCopy } from "@/components/pages/CompanyPlaceholderPageComponent";

interface RawCompanyCopy {
  title: string;
  note: string;
  link: string;
  back: string;
}

export interface CompanyMeta {
  eyebrow: string;
  backPath: string;
  linkHref?: string;
  copy: Record<SupportedLocale, RawCompanyCopy>;
}

export const companyPlaceholders: Record<string, CompanyMeta> = {
  "mvz-hausarzt-facharzt": {
    eyebrow: "NabiOta MVZ",
    backPath: "areas/medizinische-fachbereiche",
    linkHref: "#",
    copy: {
  de: {
    title: "NabiOta MVZ Zentrum für hausärztliche und fachärztliche Versorgung",
    note: "Die Website dieses medizinischen Versorgungszentrums wird vorbereitet.",
    link: "Zur Website des MVZ",
    back: "Zurück zu den medizinischen Fachbereichen",
  },
  en: {
    title: "NabiOta MVZ Center for Primary and Specialist Care",
    note: "The website for this medical center is being prepared.",
    link: "Visit the MVZ website",
    back: "Back to medical departments",
  },
  ru: {
    title: "NabiOta MVZ - центр семейной и специализированной медицинской помощи",
    note: "Сайт этого медицинского центра готовится.",
    link: "Перейти на сайт MVZ",
    back: "Вернуться к медицинским направлениям",
  },
  tr: {
    title: "NabiOta MVZ Aile Hekimliği ve Uzman Sağlık Merkezi",
    note: "Bu tıp merkezinin web sitesi hazırlanmaktadır.",
    link: "MVZ web sitesine git",
    back: "Tıbbi uzmanlık alanlarına dön",
  },
  ar: {
    title: "مركز NabiOta MVZ للرعاية الأولية والتخصصية",
    note: "يجري إعداد الموقع الإلكتروني لهذا المركز الطبي.",
    link: "زيارة موقع MVZ",
    back: "العودة إلى التخصصات الطبية",
  },
  uz: {
    title: "NabiOta MVZ - oilaviy va ixtisoslashtirilgan tibbiy yordam markazi",
    note: "Ushbu tibbiy markaz veb-sayti tayyorlanmoqda.",
    link: "MVZ veb-saytiga o‘tish",
    back: "Tibbiy yo‘nalishlarga qaytish",
  },
},
  },
  "nabiota-clinics-germany": {
    eyebrow: "NabiOta Clinics",
    backPath: "areas/medizinische-fachbereiche",
    linkHref: undefined,
    copy: {
  de: {
    title: "NabiOta Clinics Germany GmbH",
    note: "Die Website der geplanten Klinik wird vorbereitet.",
    link: "Zur Website der NabiOta Clinics Germany GmbH",
    back: "Zurück zu den medizinischen Fachbereichen",
  },
  en: {
    title: "NabiOta Clinics Germany GmbH",
    note: "The website for the planned clinic is being prepared.",
    link: "Visit the NabiOta Clinics Germany GmbH website",
    back: "Back to medical departments",
  },
  ru: {
    title: "NabiOta Clinics Germany GmbH",
    note: "Сайт планируемой клиники готовится.",
    link: "Перейти на сайт NabiOta Clinics Germany GmbH",
    back: "Вернуться к медицинским направлениям",
  },
  tr: {
    title: "NabiOta Clinics Germany GmbH",
    note: "Planlanan kliniğin web sitesi hazırlanmaktadır.",
    link: "NabiOta Clinics Germany GmbH web sitesine git",
    back: "Tıbbi uzmanlık alanlarına dön",
  },
  ar: {
    title: "NabiOta Clinics Germany GmbH",
    note: "يجري إعداد الموقع الإلكتروني للعيادة المخطط لها.",
    link: "زيارة موقع NabiOta Clinics Germany GmbH",
    back: "العودة إلى التخصصات الطبية",
  },
  uz: {
    title: "NabiOta Clinics Germany GmbH",
    note: "Rejalashtirilgan klinikaning veb-sayti tayyorlanmoqda.",
    link: "NabiOta Clinics Germany GmbH veb-saytiga o‘tish",
    back: "Tibbiy yo‘nalishlarga qaytish",
  },
},
  },
  "nabiota-diagnostics": {
    eyebrow: "NabiOta Diagnostics",
    backPath: "areas/diagnostik",
    linkHref: undefined,
    copy: {
  de: { title: "NabiOta Diagnostics GmbH", note: "Die Website der Diagnostikgesellschaft wird vorbereitet.", link: "Website in Vorbereitung", back: "Zurück zur Diagnostik" },
  en: { title: "NabiOta Diagnostics GmbH", note: "The diagnostics company's website is being prepared.", link: "Website in preparation", back: "Back to diagnostics" },
  ru: { title: "NabiOta Diagnostics GmbH", note: "Сайт диагностической компании готовится.", link: "Сайт готовится", back: "Вернуться к диагностике" },
  tr: { title: "NabiOta Diagnostics GmbH", note: "Tanı şirketinin web sitesi hazırlanmaktadır.", link: "Web sitesi hazırlanıyor", back: "Tanı sayfasına dön" },
  ar: { title: "NabiOta Diagnostics GmbH", note: "يجري إعداد الموقع الإلكتروني لشركة التشخيص.", link: "الموقع قيد الإعداد", back: "العودة إلى التشخيص" },
  uz: { title: "NabiOta Diagnostics GmbH", note: "Diagnostika kompaniyasining veb-sayti tayyorlanmoqda.", link: "Veb-sayt tayyorlanmoqda", back: "Diagnostika sahifasiga qaytish" },
},
  },
  "nabiota-homecare": {
    eyebrow: "NabiOta HomeCare",
    backPath: "areas/pflege",
    linkHref: undefined,
    copy: {
  de: { title: "NabiOta HomeCare GmbH", note: "Die Website der Gesellschaft wird vorbereitet.", link: "Website in Vorbereitung", back: "Zurück zu Pflege & Betreuung" },
  en: { title: "NabiOta HomeCare GmbH", note: "The company's website is being prepared.", link: "Website in preparation", back: "Back to Care & Support" },
  ru: { title: "NabiOta HomeCare GmbH", note: "Сайт службы патронажного и сестринского ухода готовится.", link: "Сайт готовится", back: "Вернуться к странице «Патронаж и уход»" },
  tr: { title: "NabiOta HomeCare GmbH", note: "Şirketin web sitesi hazırlanmaktadır.", link: "Web sitesi hazırlanıyor", back: "Bakım sayfasına dön" },
  ar: { title: "NabiOta HomeCare GmbH", note: "يجري إعداد الموقع الإلكتروني للشركة.", link: "الموقع قيد الإعداد", back: "العودة إلى صفحة الرعاية" },
  uz: { title: "NabiOta HomeCare GmbH", note: "Kompaniya veb-sayti tayyorlanmoqda.", link: "Veb-sayt tayyorlanmoqda", back: "Parvarish sahifasiga qaytish" },
},
  },
  "nabiota-medical-recruitment": {
    eyebrow: "NabiOta Medical Recruitment",
    backPath: "areas/internationale-kooperationen",
    linkHref: undefined,
    copy: {
  de: { title: "NabiOta Medical Recruitment Services GmbH", note: "Die Website der Gesellschaft wird vorbereitet.", link: "Website in Vorbereitung", back: "Zurück zur Unternehmensseite" },
  en: { title: "NabiOta Medical Recruitment Services GmbH", note: "The company's website is being prepared.", link: "Website in preparation", back: "Back to the group page" },
  ru: { title: "NabiOta Medical Recruitment Services GmbH", note: "Сайт компании по международному подбору и интеграции медицинских специалистов готовится.", link: "Сайт готовится", back: "Вернуться к международному сотрудничеству" },
  tr: { title: "NabiOta Medical Recruitment Services GmbH", note: "Şirketin web sitesi hazırlanmaktadır.", link: "Web sitesi hazırlanıyor", back: "Grup sayfasına dön" },
  ar: { title: "NabiOta Medical Recruitment Services GmbH", note: "يجري إعداد الموقع الإلكتروني للشركة.", link: "الموقع قيد الإعداد", back: "العودة إلى صفحة المجموعة" },
  uz: { title: "NabiOta Medical Recruitment Services GmbH", note: "Kompaniya veb-sayti tayyorlanmoqda.", link: "Veb-sayt tayyorlanmoqda", back: "Guruh sahifasiga qaytish" },
},
  },
  "nabiota-real-estate": {
    eyebrow: "NabiOta Real Estate",
    backPath: "areas/beratung-projektentwicklung",
    linkHref: undefined,
    copy: {
  de: { title: "NabiOta Real Estate GmbH", note: "Die Website der Gesellschaft wird vorbereitet.", link: "Website in Vorbereitung", back: "Zurück zur Unternehmensseite" },
  en: { title: "NabiOta Real Estate GmbH", note: "The company's website is being prepared.", link: "Website in preparation", back: "Back to the group page" },
  ru: { title: "NabiOta Real Estate GmbH", note: "Сайт компании по недвижимости и развитию проектов готовится.", link: "Сайт готовится", back: "Вернуться к консалтингу и развитию" },
  tr: { title: "NabiOta Real Estate GmbH", note: "Şirketin web sitesi hazırlanmaktadır.", link: "Web sitesi hazırlanıyor", back: "Grup sayfasına dön" },
  ar: { title: "NabiOta Real Estate GmbH", note: "يجري إعداد الموقع الإلكتروني للشركة.", link: "الموقع قيد الإعداد", back: "العودة إلى صفحة المجموعة" },
  uz: { title: "NabiOta Real Estate GmbH", note: "Kompaniya veb-sayti tayyorlanmoqda.", link: "Veb-sayt tayyorlanmoqda", back: "Guruh sahifasiga qaytish" },
},
  },
  "nabiota-rehabilitation": {
    eyebrow: "NabiOta Rehabilitation",
    backPath: "areas/rehabilitation",
    linkHref: undefined,
    copy: {
  de: { title: "NabiOta Rehabilitation & Therapy GmbH", note: "Die Website der Rehabilitationsgesellschaft wird vorbereitet.", link: "Website in Vorbereitung", back: "Zurück zur Rehabilitation" },
  en: { title: "NabiOta Rehabilitation & Therapy GmbH", note: "The rehabilitation company's website is being prepared.", link: "Website in preparation", back: "Back to rehabilitation" },
  ru: { title: "NabiOta Rehabilitation & Therapy GmbH", note: "Сайт реабилитационной компании готовится.", link: "Сайт готовится", back: "Вернуться к реабилитации" },
  tr: { title: "NabiOta Rehabilitation & Therapy GmbH", note: "Rehabilitasyon şirketinin web sitesi hazırlanmaktadır.", link: "Web sitesi hazırlanıyor", back: "Rehabilitasyon sayfasına dön" },
  ar: { title: "NabiOta Rehabilitation & Therapy GmbH", note: "يجري إعداد الموقع الإلكتروني لشركة إعادة التأهيل.", link: "الموقع قيد الإعداد", back: "العودة إلى إعادة التأهيل" },
  uz: { title: "NabiOta Rehabilitation & Therapy GmbH", note: "Reabilitatsiya kompaniyasining veb-sayti tayyorlanmoqda.", link: "Veb-sayt tayyorlanmoqda", back: "Reabilitatsiya sahifasiga qaytish" },
},
  },
  "nabiota-sanitaetshaus": {
    eyebrow: "NabiOta Sanitätshaus",
    backPath: "areas/pflege",
    linkHref: undefined,
    copy: {
  de: { title: "NabiOta Sanitätshaus GmbH", note: "Die Website der Gesellschaft wird vorbereitet.", link: "Website in Vorbereitung", back: "Zurück zu Pflege & Betreuung" },
  en: { title: "NabiOta Sanitätshaus GmbH", note: "The company's website is being prepared.", link: "Website in preparation", back: "Back to Care & Support" },
  ru: { title: "NabiOta Sanitätshaus GmbH", note: "Сайт компании медицинских изделий готовится.", link: "Сайт готовится", back: "Вернуться к странице «Патронаж и уход»" },
  tr: { title: "NabiOta Sanitätshaus GmbH", note: "Şirketin web sitesi hazırlanmaktadır.", link: "Web sitesi hazırlanıyor", back: "Bakım sayfasına dön" },
  ar: { title: "NabiOta Sanitätshaus GmbH", note: "يجري إعداد الموقع الإلكتروني للشركة.", link: "الموقع قيد الإعداد", back: "العودة إلى صفحة الرعاية" },
  uz: { title: "NabiOta Sanitätshaus GmbH", note: "Kompaniya veb-sayti tayyorlanmoqda.", link: "Veb-sayt tayyorlanmoqda", back: "Parvarish sahifasiga qaytish" },
},
  },
};

export function getCompanyPlaceholderData(
  slug: string,
  locale: SupportedLocale
): CompanyPlaceholderCopy | null {
  const meta = companyPlaceholders[slug];
  if (!meta) return null;
  const c = meta.copy[locale] || meta.copy.de;
  return {
    eyebrow: meta.eyebrow,
    title: c.title,
    note: c.note,
    link: c.link,
    linkHref: meta.linkHref,
    back: c.back,
    backHref: `/${locale}/${meta.backPath}`,
  };
}
