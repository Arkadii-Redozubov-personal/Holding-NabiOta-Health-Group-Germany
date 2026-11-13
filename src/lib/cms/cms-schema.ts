import { getBaseDictionary, type SupportedLocale } from "@/lib/i18n";
import { getBaseAboutPageTranslations } from "@/data/translations/about-page";
import { getBaseAreasPageBundle } from "@/data/translations/areas-page";
import { getBaseValuesPageTranslations } from "@/data/translations/values-page";
import { getBasePartnersPageTranslations } from "@/data/translations/partners-page";
import { getBaseCareerTranslation } from "@/data/career-translations";
import {
  getBaseContactPageTranslations,
  getBaseContactLocations,
} from "@/data/translations/contact-page";
import { MEDICAL_AREAS } from "@/data/medical-areas";
import { type CmsNamespace, getByPath } from "@/lib/cms/cms-engine";

export interface CmsFieldDefinition {
  id: string;
  namespace: CmsNamespace;
  path: string;
  label: string;
  multiline?: boolean;
  defaultValue: string;
}

export interface CmsSectionDefinition {
  id: string;
  title: string;
  subtitle: string;
  fields: CmsFieldDefinition[];
}

export interface CmsPageDefinition {
  id: string;
  title: string;
  routeHint: string;
  badge: string;
  sections: CmsSectionDefinition[];
}

const HOME_SLIDER_DEFAULTS: Record<
  SupportedLocale,
  {
    sliderTitle: string;
    sliderSubtitle: string;
    sliderCta: string;
    eyebrow: string;
    title: string;
    desc: string;
    contactCtaText: string;
    ctaEyebrow: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaBtnPrimary: string;
    ctaBtnSecondary: string;
  }
> = {
  de: {
    sliderTitle: "Ganzheitliche Versorgung über alle Lebensphasen",
    sliderSubtitle:
      "Moderne Medizin, menschliche Betreuung und innovative Konzepte - in allen Bereichen unserer Versorgung.",
    sliderCta: "Mehr erfahren",
    eyebrow: "HÄUFIG GESTELLTE FRAGEN",
    title: "Wissenswertes über die NabiOta® Health Group",
    desc: "Antworten auf die wichtigsten Fragen rund um unsere Unternehmensbereiche, Patientenversorgung, Kooperationen und Qualitätsstandards.",
    contactCtaText: "Haben Sie weitere Fragen? Kontaktieren Sie uns",
    ctaEyebrow: "KOMPETENZ VERBINDEN. GESUNDHEIT GESTALTEN.",
    ctaTitle: "Gemeinsam für eine zukunftssichere Gesundheitsversorgung.",
    ctaDesc:
      "Ob Sie als Patient erstklassige medizinische Betreuung suchen, als Arzt eine starke partnerschaftliche Praxisstruktur schätzen oder als Träger zukunftssichere Projekte realisieren möchten - die NabiOta® Health Group ist Ihr verlässlicher Begleiter.",
    ctaBtnPrimary: "Kontakt aufnehmen",
    ctaBtnSecondary: "Unternehmensbereiche",
  },
  ru: {
    sliderTitle: "Комплексная забота о здоровье на всех этапах жизни",
    sliderSubtitle:
      "Современная медицина, забота о пациентах и инновационные концепции во всех сферах нашей помощи.",
    sliderCta: "Узнать больше",
    eyebrow: "ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ",
    title: "Всё о NabiOta® Health Group",
    desc: "Ответы на главные вопросы о структуре холдинга, приеме пациентов, партнерстве и медицинских стандартах.",
    contactCtaText: "Остались вопросы? Свяжитесь с нами",
    ctaEyebrow: "ОБЪЕДИНЯЯ ОПЫТ. СОЗДАВАЯ БУДУЩЕЕ МЕДИЦИНЫ.",
    ctaTitle: "Вместе ради передовой и доступной медицины.",
    ctaDesc:
      "Ищете ли вы высокотехнологичную медицинскую помощь, планируете партнерство в рамках врачебной практики или развиваете инвестиционные проекты в здравоохранении - команда NabiOta® открыта к надежному диалогу.",
    ctaBtnPrimary: "Связаться с нами",
    ctaBtnSecondary: "Направления холдинга",
  },
  en: {
    sliderTitle: "Comprehensive care across all life stages",
    sliderSubtitle:
      "Modern medicine, empathetic care, and innovative concepts across all areas of our provision.",
    sliderCta: "Learn more",
    eyebrow: "FREQUENTLY ASKED QUESTIONS",
    title: "Insights into NabiOta® Health Group",
    desc: "Answers to key questions regarding our medical network, patient admissions, partnerships, and clinical standards.",
    contactCtaText: "Have more questions? Get in touch",
    ctaEyebrow: "CONNECTING COMPETENCE. SHAPING HEALTHCARE.",
    ctaTitle: "Partnering for a Healthier, Forward-Thinking Future.",
    ctaDesc:
      "Whether you are a patient seeking top-tier clinical care, a physician exploring collaborative network opportunities, or a partner realizing medical infrastructure - NabiOta® is your committed companion.",
    ctaBtnPrimary: "Get in Touch With Us",
    ctaBtnSecondary: "Explore Our Divisions",
  },
  tr: {
    sliderTitle: "Hayatın her aşamasında bütüncül sağlık hizmeti",
    sliderSubtitle:
      "Modern tıp, insani ilgi ve yenilikçi yaklaşımlar - tüm sağlık alanlarımızda.",
    sliderCta: "Daha fazla bilgi",
    eyebrow: "SIKÇA SORULAN SORULAR",
    title: "NabiOta® Health Group Hakkında Merak Edilenler",
    desc: "Holding yapımız, hasta kabulleri, ortaklık modelleri ve tıbbi kalite standartlarımız hakkındaki temel soruların yanıtları.",
    contactCtaText: "Başka sorularınız mı var? Bize ulaşın",
    ctaEyebrow: "UZMANLIĞI BİRLEŞTİRMEK. SAĞLIĞI ŞEKİLLENDİRMEK.",
    ctaTitle: "Geleceğe güvenle bakan bir sağlık hizmeti için birlikte.",
    ctaDesc:
      "İster birinci sınıf tıbbi bakım arayan bir hasta, ister güçlü bir ortaklık arayan bir hekim, ister sağlık projeleri geliştiren bir kurum olun - NabiOta® Health Group güvenilir yol arkadaşınızdır.",
    ctaBtnPrimary: "Bize Ulaşın",
    ctaBtnSecondary: "Faaliyet Alanlarımız",
  },
  ar: {
    sliderTitle: "رعاية صحية شاملة ومتكاملة عبر جميع مراحل الحياة",
    sliderSubtitle:
      "طب حديث، رعاية إنسانية ومفاهيم مبتكرة في جميع مجالات الرعاية الصحية لدينا.",
    sliderCta: "معرفة المزيد",
    eyebrow: "الأسئلة الشائعة",
    title: "كل ما تريد معرفته عن مجموعة نابي أوتا الصحية",
    desc: "إجابات شاملة على الأسئلة الرئيسية حول هيكل المجموعة، استقبال المرضى، الشراكات الطبية والمعايير السريرية.",
    contactCtaText: "هل لديك أسئلة أخرى؟ تواصل معنا مباشرة",
    ctaEyebrow: "توحيد الكفاءات. صياغة مستقبل الرعاية الصحية.",
    ctaTitle: "معاً من أجل رعاية صحية مستدامة ومتقدمة.",
    ctaDesc:
      "سواء كنتم مرضى تبحثون عن رعاية طبية ألمانية رفيعة، أو أطباء تتطلعون لشراكة متينة، أو مستثمرين يطورون مشاريع طبية - مجموعة نابي أوتا هي شريككم الموثوق.",
    ctaBtnPrimary: "تواصل معنا",
    ctaBtnSecondary: "قطاعات المجموعة",
  },
  uz: {
    sliderTitle: "Hayotning barcha bosqichlarida kompleks salomatlik g'amxo'rligi",
    sliderSubtitle:
      "Zamonaviy tibbiyot, insoniy g'amxo'rlik va innovatsion yondashuvlar barcha xizmatlarimizda.",
    sliderCta: "Batafsil ma'lumot",
    eyebrow: "KO'P SO'RALADIGAN SAVOLLAR",
    title: "NabiOta® Health Group haqida ma'lumotlar",
    desc: "Xolding tuzilmasi, bemorlarni qabul qilish, hamkorlik va tibbiy sifat standartlari bo'yicha asosiy savollarga javoblar.",
    contactCtaText: "Yana savollaringiz bormi? Biz bilan bog'laning",
    ctaEyebrow: "KOMPETENTSIYALARNI BIRLASHTIRIB. TIBBIYOT KELAJAGINI SHAKLLANTIRAMIZ.",
    ctaTitle: "Kelajakka ishonch bilan boquvchi tibbiyot uchun birgalikda.",
    ctaDesc:
      "Siz yuqori darajadagi tibbiy yordam izlayotgan bemor bo'lasizmi, shifokorlik amaliyotida mustahkam sheriklikni xohlovchi mutaxassis bo'lasizmi yoki tibbiy infratuzilma loyihalarini amalga oshiruvchi tashkilot bo'lasizmi - NabiOta® Health Group sizning ishonchli hamkoringizdir.",
    ctaBtnPrimary: "Biz bilan bog'laning",
    ctaBtnSecondary: "Faoliyat yo'nalishlarimiz",
  },
};

function makeField(
  namespace: CmsNamespace,
  sourceObj: unknown,
  path: string,
  label: string,
  multiline = false
): CmsFieldDefinition {
  const raw = getByPath(sourceObj, path);
  const defaultValue = typeof raw === "string" ? raw : "";
  return {
    id: `${namespace}:${path}`,
    namespace,
    path,
    label,
    multiline: multiline || defaultValue.length > 85 || defaultValue.includes("\n"),
    defaultValue,
  };
}

export function getCmsPagesSchema(locale: SupportedLocale): CmsPageDefinition[] {
  const dict = getBaseDictionary(locale);
  const homeExtras = HOME_SLIDER_DEFAULTS[locale];
  const about = getBaseAboutPageTranslations(locale);
  const areasBundle = getBaseAreasPageBundle();
  const values = getBaseValuesPageTranslations(locale);
  const partners = getBasePartnersPageTranslations(locale);
  const career = getBaseCareerTranslation(locale);
  const contact = getBaseContactPageTranslations(locale);
  const contactLocs = getBaseContactLocations(locale);

  return [
    // 1. HOME PAGE
    {
      id: "home",
      title: "Startseite (Home)",
      routeHint: `/${locale === "de" ? "" : locale}`,
      badge: "7 Sektionen",
      sections: [
        {
          id: "home-hero",
          title: "1. Hero Banner (Hauptbildschirm)",
          subtitle: "Überschrift, Beschreibung und Call-to-Action-Buttons im oberen Kopfbereich",
          fields: [
            makeField("home", dict, "hero.eyebrow", "Hero Eyebrow"),
            makeField("home", dict, "hero.headingLine1", "Hauptüberschrift Zeile 1"),
            makeField("home", dict, "hero.headingLine2", "Hauptüberschrift Zeile 2"),
            makeField("home", dict, "hero.description", "Hero Beschreibungstext", true),
            makeField("home", dict, "hero.ctaMore", "Primärer Button (Mehr erfahren)"),
            makeField("home", dict, "hero.ctaTermin", "Sekundärer Button (Termin anfragen)"),
          ],
        },
        {
          id: "home-strip",
          title: "2. Kennzahlen-Leiste (Stats Strip)",
          subtitle: "Vier Kennzahlen direkt unter dem Hero-Bereich",
          fields: [
            makeField("home", dict, "strip.stats.0.value", "Kennzahl 1 · Wert"),
            makeField("home", dict, "strip.stats.0.label", "Kennzahl 1 · Titel"),
            makeField("home", dict, "strip.stats.0.sublabel", "Kennzahl 1 · Untertitel"),
            makeField("home", dict, "strip.stats.1.value", "Kennzahl 2 · Wert"),
            makeField("home", dict, "strip.stats.1.label", "Kennzahl 2 · Titel"),
            makeField("home", dict, "strip.stats.1.sublabel", "Kennzahl 2 · Untertitel"),
            makeField("home", dict, "strip.stats.2.value", "Kennzahl 3 · Wert"),
            makeField("home", dict, "strip.stats.2.label", "Kennzahl 3 · Titel"),
            makeField("home", dict, "strip.stats.2.sublabel", "Kennzahl 3 · Untertitel"),
            makeField("home", dict, "strip.stats.3.value", "Kennzahl 4 · Wert"),
            makeField("home", dict, "strip.stats.3.label", "Kennzahl 4 · Titel"),
            makeField("home", dict, "strip.stats.3.sublabel", "Kennzahl 4 · Untertitel"),
          ],
        },
        {
          id: "home-about",
          title: "3. Über Uns Vorschau (About Section)",
          subtitle: "Vorstellung der Unternehmensgruppe mit 3 Kernvorteilen",
          fields: [
            makeField("home", dict, "about.eyebrow", "Eyebrow (Über uns)"),
            makeField("home", dict, "about.heading", "Überschrift"),
            makeField("home", dict, "about.description", "Beschreibungstext", true),
            makeField("home", dict, "about.cta", "Button-Text (Unsere Geschichte)"),
            makeField("home", dict, "about.benefits.0.title", "Vorteil 1 · Titel"),
            makeField("home", dict, "about.benefits.0.description", "Vorteil 1 · Beschreibung"),
            makeField("home", dict, "about.benefits.1.title", "Vorteil 2 · Titel"),
            makeField("home", dict, "about.benefits.1.description", "Vorteil 2 · Beschreibung"),
            makeField("home", dict, "about.benefits.2.title", "Vorteil 3 · Titel"),
            makeField("home", dict, "about.benefits.2.description", "Vorteil 3 · Beschreibung"),
          ],
        },
        {
          id: "home-slider",
          title: "4. Fokus-Slider · Unsere Bereiche (Splide Carousel)",
          subtitle: "Überschriften und Karten im zentrierten Bereiche-Karussell",
          fields: [
            makeField("homeExtras", homeExtras, "sliderTitle", "Slider · Hauptüberschrift"),
            makeField("homeExtras", homeExtras, "sliderSubtitle", "Slider · Untertitel", true),
            makeField("homeExtras", homeExtras, "sliderCta", "Slider · Karten-Button (Mehr erfahren)"),
            makeField("home", dict, "areas.cta", "Link oben rechts (Alle Bereiche entdecken)"),
            ...MEDICAL_AREAS.flatMap((area, idx) => [
              makeField(
                "medicalAreas",
                MEDICAL_AREAS,
                `${idx}.titles.${locale}`,
                `Slide ${idx + 1} (${area.id}) · Titel`
              ),
              makeField(
                "medicalAreas",
                MEDICAL_AREAS,
                `${idx}.subtitles.${locale}`,
                `Slide ${idx + 1} (${area.id}) · Untertitel`,
                true
              ),
            ]),
          ],
        },
        {
          id: "home-values",
          title: "5. Unsere Werte (Values Section)",
          subtitle: "Überschrift und Einleitungstext der Werte-Sektion",
          fields: [
            makeField("home", dict, "values.eyebrow", "Werte · Eyebrow"),
            makeField("home", dict, "values.heading", "Werte · Überschrift"),
            makeField("home", dict, "values.description", "Werte · Beschreibungstext", true),
          ],
        },
        {
          id: "home-split",
          title: "6. Partner & Karriere Doppelkarte (Split Section)",
          subtitle: "Zwei nebeneinanderliegende Karten für Partner und Karriere",
          fields: [
            makeField("home", dict, "split.partners.eyebrow", "Partner-Karte · Eyebrow"),
            makeField("home", dict, "split.partners.heading", "Partner-Karte · Überschrift"),
            makeField("home", dict, "split.partners.description", "Partner-Karte · Beschreibung", true),
            makeField("home", dict, "split.partners.cta", "Partner-Karte · Button"),
            makeField("home", dict, "split.career.eyebrow", "Karriere-Karte · Eyebrow"),
            makeField("home", dict, "split.career.heading", "Karriere-Karte · Überschrift"),
            makeField("home", dict, "split.career.description", "Karriere-Karte · Beschreibung", true),
            makeField("home", dict, "split.career.cta", "Karriere-Karte · Button"),
          ],
        },
        {
          id: "home-faq-cta",
          title: "7. FAQ & Abschluss-Banner (Bottom CTA)",
          subtitle: "Häufig gestellte Fragen und unterer Kontakt-Banner",
          fields: [
            makeField("homeExtras", homeExtras, "eyebrow", "FAQ · Eyebrow"),
            makeField("homeExtras", homeExtras, "title", "FAQ · Überschrift"),
            makeField("homeExtras", homeExtras, "desc", "FAQ · Untertitel", true),
            makeField("homeExtras", homeExtras, "contactCtaText", "FAQ · Kontakt-Linktext"),
            makeField("homeExtras", homeExtras, "ctaEyebrow", "Abschluss-Banner · Eyebrow"),
            makeField("homeExtras", homeExtras, "ctaTitle", "Abschluss-Banner · Überschrift"),
            makeField("homeExtras", homeExtras, "ctaDesc", "Abschluss-Banner · Beschreibung", true),
            makeField("homeExtras", homeExtras, "ctaBtnPrimary", "Abschluss-Banner · Primärer Button"),
            makeField("homeExtras", homeExtras, "ctaBtnSecondary", "Abschluss-Banner · Sekundärer Button"),
          ],
        },
      ],
    },

    // 2. ABOUT PAGE
    {
      id: "about",
      title: "Über uns (About)",
      routeHint: `/${locale}/about`,
      badge: "6 Sektionen",
      sections: [
        {
          id: "about-hero",
          title: "1. Hero & Badges",
          subtitle: "Kopfbereich der Über-uns-Seite mit 3 Highlight-Badges",
          fields: [
            makeField("aboutPage", about, "heroEyebrow", "Hero Eyebrow"),
            makeField("aboutPage", about, "heroTitlePart1", "Hero Titel · Zeile 1"),
            makeField("aboutPage", about, "heroTitlePart2", "Hero Titel · Zeile 2"),
            makeField("aboutPage", about, "heroDesc", "Hero Beschreibung", true),
            makeField("aboutPage", about, "badge1Title", "Badge 1 · Titel"),
            makeField("aboutPage", about, "badge1Sub", "Badge 1 · Untertitel"),
            makeField("aboutPage", about, "badge2Title", "Badge 2 · Titel"),
            makeField("aboutPage", about, "badge2Sub", "Badge 2 · Untertitel"),
            makeField("aboutPage", about, "badge3Title", "Badge 3 · Titel"),
            makeField("aboutPage", about, "badge3Sub", "Badge 3 · Untertitel"),
          ],
        },
        {
          id: "about-roots",
          title: "2. Unsere Wurzeln & Geschichte",
          subtitle: "Herkunft und Hintergrund der Holding",
          fields: [
            makeField("aboutPage", about, "rootsEyebrow", "Wurzeln · Eyebrow"),
            makeField("aboutPage", about, "rootsTitle1", "Wurzeln · Titel Teil 1"),
            makeField("aboutPage", about, "rootsTitle2", "Wurzeln · Titel Teil 2"),
            makeField("aboutPage", about, "rootsP2", "Wurzeln · Zusatzabsatz", true),
          ],
        },
        {
          id: "about-mission",
          title: "3. Mission, Vision & Kennzahlen",
          subtitle: "Leitbild-Karten und statistische Kennzahlen",
          fields: [
            makeField("aboutPage", about, "missionEyebrow", "Mission · Eyebrow"),
            makeField("aboutPage", about, "missionHeading", "Mission · Überschrift"),
            makeField("aboutPage", about, "missionLead", "Mission · Einleitungstext", true),
            makeField("aboutPage", about, "cardMissionTitle", "Karte Mission · Titel"),
            makeField("aboutPage", about, "cardMissionText", "Karte Mission · Text", true),
            makeField("aboutPage", about, "cardVisionTitle", "Karte Vision · Titel"),
            makeField("aboutPage", about, "cardVisionText", "Karte Vision · Text", true),
            makeField("aboutPage", about, "stat1Num", "Statistik 1 · Wert"),
            makeField("aboutPage", about, "stat1Label", "Statistik 1 · Label"),
            makeField("aboutPage", about, "stat2Num", "Statistik 2 · Wert"),
            makeField("aboutPage", about, "stat2Label", "Statistik 2 · Label"),
            makeField("aboutPage", about, "stat3Num", "Statistik 3 · Wert"),
            makeField("aboutPage", about, "stat3Label", "Statistik 3 · Label"),
            makeField("aboutPage", about, "stat4Num", "Statistik 4 · Wert"),
            makeField("aboutPage", about, "stat4Label", "Statistik 4 · Label"),
          ],
        },
        {
          id: "about-structure",
          title: "4. Organigramm & 2-Phasen-Architektur",
          subtitle: "Holding-Struktur und Phasenmodell",
          fields: [
            makeField("aboutPage", about, "orgEyebrow", "Organigramm · Eyebrow"),
            makeField("aboutPage", about, "orgHeading", "Organigramm · Überschrift"),
            makeField("aboutPage", about, "holdingBadge", "Holding-Badge"),
            makeField("aboutPage", about, "twoPhaseEyebrow", "2-Phasen · Eyebrow"),
            makeField("aboutPage", about, "twoPhaseTitle", "2-Phasen · Überschrift"),
            makeField("aboutPage", about, "twoPhaseDesc", "2-Phasen · Beschreibung", true),
            makeField("aboutPage", about, "phase1Title", "Phase 1 · Titel"),
            makeField("aboutPage", about, "phase1Desc", "Phase 1 · Beschreibung", true),
            makeField("aboutPage", about, "phase2Title", "Phase 2 · Titel"),
            makeField("aboutPage", about, "phase2Desc", "Phase 2 · Beschreibung", true),
            makeField("aboutPage", about, "independenceTitle", "Ärztliche Unabhängigkeit · Titel"),
            makeField("aboutPage", about, "independenceDesc", "Ärztliche Unabhängigkeit · Text", true),
          ],
        },
        {
          id: "about-leadership",
          title: "5. Führung & Beirat (Leadership)",
          subtitle: "Gründerprofil, Zitat und wissenschaftlicher Beirat",
          fields: [
            makeField("aboutPage", about, "leadershipEyebrow", "Leadership · Eyebrow"),
            makeField("aboutPage", about, "leadershipHeading1", "Leadership · Überschrift 1"),
            makeField("aboutPage", about, "leadershipHeading2", "Leadership · Überschrift 2"),
            makeField("aboutPage", about, "leadershipSubtitle", "Leadership · Untertitel", true),
            makeField("aboutPage", about, "founderName", "Gründer · Name"),
            makeField("aboutPage", about, "founderRole", "Gründer · Position"),
            makeField("aboutPage", about, "founderBadge", "Gründer · Badge"),
            makeField("aboutPage", about, "founderQuote", "Gründer · Zitat", true),
            makeField("aboutPage", about, "consultantName", "Berater · Name"),
            makeField("aboutPage", about, "consultantRole", "Berater · Position"),
            makeField("aboutPage", about, "boardTitle", "Beirat · Titel"),
            makeField("aboutPage", about, "boardDesc", "Beirat · Beschreibung", true),
          ],
        },
        {
          id: "about-values-cta",
          title: "6. Werte-Karten & Abschluss-CTA",
          subtitle: "Vier Werte-Karten und unterer Kontaktbereich",
          fields: [
            makeField("aboutPage", about, "valuesEyebrow", "Werte · Eyebrow"),
            makeField("aboutPage", about, "valuesHeading", "Werte · Überschrift"),
            makeField("aboutPage", about, "val1Title", "Wert 1 · Titel"),
            makeField("aboutPage", about, "val1Desc", "Wert 1 · Beschreibung", true),
            makeField("aboutPage", about, "val2Title", "Wert 2 · Titel"),
            makeField("aboutPage", about, "val2Desc", "Wert 2 · Beschreibung", true),
            makeField("aboutPage", about, "val3Title", "Wert 3 · Titel"),
            makeField("aboutPage", about, "val3Desc", "Wert 3 · Beschreibung", true),
            makeField("aboutPage", about, "val4Title", "Wert 4 · Titel"),
            makeField("aboutPage", about, "val4Desc", "Wert 4 · Beschreibung", true),
            makeField("aboutPage", about, "ctaEyebrow", "CTA · Eyebrow"),
            makeField("aboutPage", about, "ctaHeading", "CTA · Überschrift"),
            makeField("aboutPage", about, "ctaBtn", "CTA · Button"),
          ],
        },
      ],
    },

    // 3. AREAS PAGE
    {
      id: "areas",
      title: "Unsere Bereiche (Areas)",
      routeHint: `/${locale}/areas`,
      badge: "5 Sektionen",
      sections: [
        {
          id: "areas-hero",
          title: "1. Hero & Einleitung",
          subtitle: "Kopfbereich und Einführung auf der Bereiche-Übersichtsseite",
          fields: [
            makeField("areasPage", areasBundle, `areasHero.eyebrow.${locale}`, "Hero · Eyebrow"),
            makeField("areasPage", areasBundle, `areasHero.title.${locale}`, "Hero · Titel"),
            makeField("areasPage", areasBundle, `areasHero.description.${locale}`, "Hero · Beschreibung", true),
            makeField("areasPage", areasBundle, `areasIntro.eyebrow.${locale}`, "Intro · Eyebrow"),
            makeField("areasPage", areasBundle, `areasIntro.title.${locale}`, "Intro · Überschrift"),
            makeField("areasPage", areasBundle, `areasIntro.description.${locale}`, "Intro · Beschreibung", true),
            makeField("areasPage", areasBundle, `areasIntro.btn.${locale}`, "Intro · Button"),
          ],
        },
        {
          id: "areas-divisions",
          title: "2. Fachbereiche-Karten (6 Bereiche)",
          subtitle: "Titel und Beschreibungen der 6 Unternehmensbereiche",
          fields: areasBundle.areasDivisions.flatMap((div, idx) => [
            makeField(
              "areasPage",
              areasBundle,
              `areasDivisions.${idx}.title.${locale}`,
              `Bereich ${idx + 1} (${div.slug}) · Titel`
            ),
            makeField(
              "areasPage",
              areasBundle,
              `areasDivisions.${idx}.desc.${locale}`,
              `Bereich ${idx + 1} (${div.slug}) · Beschreibung`,
              true
            ),
          ]),
        },
        {
          id: "areas-why",
          title: "3. Warum NabiOta (4 Säulen)",
          subtitle: "Qualitätsversprechen und Grundpfeiler",
          fields: [
            makeField("areasPage", areasBundle, `areasWhyNabiota.eyebrow.${locale}`, "Eyebrow"),
            makeField("areasPage", areasBundle, `areasWhyNabiota.title.${locale}`, "Überschrift"),
            makeField("areasPage", areasBundle, `areasWhyNabiota.description.${locale}`, "Beschreibung", true),
            makeField("areasPage", areasBundle, `areasWhyNabiota.btn.${locale}`, "Button"),
            makeField("areasPage", areasBundle, `areasWhyNabiota.pillarCollaborationTitle.${locale}`, "Säule 1 · Titel"),
            makeField("areasPage", areasBundle, `areasWhyNabiota.pillarCollaborationDesc.${locale}`, "Säule 1 · Text", true),
            makeField("areasPage", areasBundle, `areasWhyNabiota.pillarQualityTitle.${locale}`, "Säule 2 · Titel"),
            makeField("areasPage", areasBundle, `areasWhyNabiota.pillarQualityDesc.${locale}`, "Säule 2 · Text", true),
            makeField("areasPage", areasBundle, `areasWhyNabiota.pillarInnovationTitle.${locale}`, "Säule 3 · Titel"),
            makeField("areasPage", areasBundle, `areasWhyNabiota.pillarInnovationDesc.${locale}`, "Säule 3 · Text", true),
            makeField("areasPage", areasBundle, `areasWhyNabiota.pillarPeopleTitle.${locale}`, "Säule 4 · Titel"),
            makeField("areasPage", areasBundle, `areasWhyNabiota.pillarPeopleDesc.${locale}`, "Säule 4 · Text", true),
          ],
        },
        {
          id: "areas-stories-cta",
          title: "4. Patientenstimmen & Abschluss-CTA",
          subtitle: "Erfahrungsberichte und unterer Kontakt-Aufruf",
          fields: [
            makeField("areasPage", areasBundle, `areasPatientStories.eyebrow.${locale}`, "Patientenstimmen · Eyebrow"),
            makeField("areasPage", areasBundle, `areasPatientStories.title.${locale}`, "Patientenstimmen · Titel"),
            makeField("areasPage", areasBundle, `areasPatientStories.desc.${locale}`, "Patientenstimmen · Beschreibung", true),
            makeField("areasPage", areasBundle, `areasCta.eyebrow.${locale}`, "CTA · Eyebrow"),
            makeField("areasPage", areasBundle, `areasCta.title.${locale}`, "CTA · Überschrift"),
            makeField("areasPage", areasBundle, `areasCta.desc.${locale}`, "CTA · Beschreibung", true),
            makeField("areasPage", areasBundle, `areasCta.btn.${locale}`, "CTA · Button"),
          ],
        },
      ],
    },

    // 4. VALUES PAGE
    {
      id: "values",
      title: "Unsere Werte (Values)",
      routeHint: `/${locale}/values`,
      badge: "5 Sektionen",
      sections: [
        {
          id: "values-hero",
          title: "1. Hero & Leitbild (Mission)",
          subtitle: "Kopfbereich, Mission-Statement und Zitat der Geschäftsführung",
          fields: [
            makeField("valuesPage", values, "heroEyebrow", "Hero · Eyebrow"),
            makeField("valuesPage", values, "heroTitle1", "Hero · Titel Zeile 1"),
            makeField("valuesPage", values, "heroTitle2", "Hero · Titel Zeile 2"),
            makeField("valuesPage", values, "heroDesc", "Hero · Beschreibung", true),
            makeField("valuesPage", values, "heroBtn", "Hero · Button"),
            makeField("valuesPage", values, "missionHeading1", "Mission · Überschrift 1"),
            makeField("valuesPage", values, "missionHeading2", "Mission · Überschrift 2"),
            makeField("valuesPage", values, "missionText", "Mission · Haupttext", true),
            makeField("valuesPage", values, "missionQuote", "Mission · Zitat", true),
            makeField("valuesPage", values, "signatureCompany", "Signatur · Unternehmen"),
            makeField("valuesPage", values, "signatureTitle", "Signatur · Rolle"),
          ],
        },
        {
          id: "values-core",
          title: "2. Kernwerte (4 Werte-Karten)",
          subtitle: "Was uns besonders macht — 4 Kernwerte",
          fields: [
            makeField("valuesPage", values, "valuesHeading", "Werte · Überschrift"),
            makeField("valuesPage", values, "valuesSubtitle", "Werte · Untertitel", true),
            makeField("valuesPage", values, "val1Title", "Wert 1 · Titel"),
            makeField("valuesPage", values, "val1Desc", "Wert 1 · Beschreibung"),
            makeField("valuesPage", values, "val2Title", "Wert 2 · Titel"),
            makeField("valuesPage", values, "val2Desc", "Wert 2 · Beschreibung"),
            makeField("valuesPage", values, "val3Title", "Wert 3 · Titel"),
            makeField("valuesPage", values, "val3Desc", "Wert 3 · Beschreibung"),
            makeField("valuesPage", values, "val4Title", "Wert 4 · Titel"),
            makeField("valuesPage", values, "val4Desc", "Wert 4 · Beschreibung"),
          ],
        },
        {
          id: "values-governance",
          title: "3. Ärztliche Unabhängigkeit & Governance",
          subtitle: "Medizinische Ethik, Qualitätssicherung und Compliance",
          fields: [
            makeField("valuesPage", values, "govHeading1", "Governance · Überschrift 1"),
            makeField("valuesPage", values, "govHeading2", "Governance · Überschrift 2"),
            makeField("valuesPage", values, "govSubtitle", "Governance · Einleitung", true),
            makeField("valuesPage", values, "govPillar1Title", "Säule 1 · Titel"),
            makeField("valuesPage", values, "govPillar1Desc", "Säule 1 · Beschreibung", true),
            makeField("valuesPage", values, "govPillar2Title", "Säule 2 · Titel"),
            makeField("valuesPage", values, "govPillar2Desc", "Säule 2 · Beschreibung", true),
          ],
        },
        {
          id: "values-team-founder",
          title: "4. Kennzahlen, Team & Gründerzitat",
          subtitle: "Zahlen, Karriere-Teaser und Schlusszitat",
          fields: [
            makeField("valuesPage", values, "statsHeading1", "Zahlen · Überschrift 1"),
            makeField("valuesPage", values, "statsHeading2", "Zahlen · Überschrift 2"),
            makeField("valuesPage", values, "teamHeading", "Team · Überschrift"),
            makeField("valuesPage", values, "teamText", "Team · Beschreibung", true),
            makeField("valuesPage", values, "teamBtn", "Team · Button"),
            makeField("valuesPage", values, "teamBadge", "Team · Badge"),
            makeField("valuesPage", values, "founderName", "Gründerzitat · Name"),
            makeField("valuesPage", values, "founderQuote", "Gründerzitat · Text", true),
            makeField("valuesPage", values, "founderRole", "Gründerzitat · Rolle"),
          ],
        },
      ],
    },

    // 5. PARTNERS PAGE
    {
      id: "partners",
      title: "Partner & Kooperationen",
      routeHint: `/${locale}/partners`,
      badge: "3 Sektionen",
      sections: [
        {
          id: "partners-hero",
          title: "1. Hero Banner (Partner & Investoren)",
          subtitle: "Kopfbereich der Partner-Seite",
          fields: [
            makeField("partnersPage", partners, "heroData.eyebrow", "Hero · Eyebrow"),
            makeField("partnersPage", partners, "heroData.title", "Hero · Titel"),
            makeField("partnersPage", partners, "heroData.subtitle", "Hero · Untertitel"),
            makeField("partnersPage", partners, "heroData.desc", "Hero · Beschreibung", true),
          ],
        },
        {
          id: "partners-pillars",
          title: "2. Kooperationsmodelle (4 Partner-Säulen)",
          subtitle: "Karten und Modal-Texte für Ärzte, Kliniken, Investoren und Kommunen",
          fields: partners.pillars.flatMap((p, idx) => [
            makeField("partnersPage", partners, `pillars.${idx}.tag`, `Säule ${idx + 1} · Tag`),
            makeField("partnersPage", partners, `pillars.${idx}.title`, `Säule ${idx + 1} · Titel`),
            makeField("partnersPage", partners, `pillars.${idx}.shortDesc`, `Säule ${idx + 1} · Kurzbeschreibung`, true),
            makeField("partnersPage", partners, `pillars.${idx}.modal.title`, `Säule ${idx + 1} Modal · Titel`),
            makeField("partnersPage", partners, `pillars.${idx}.modal.description`, `Säule ${idx + 1} Modal · Text`, true),
          ]),
        },
        {
          id: "partners-process",
          title: "3. 4-Schritte-Integrationsprozess",
          subtitle: "Meilensteine von der Vertraulichkeitsvereinbarung bis zur Integration",
          fields: partners.processSteps.flatMap((_, idx) => [
            makeField("partnersPage", partners, `processSteps.${idx}.title`, `Schritt 0${idx + 1} · Titel`),
            makeField("partnersPage", partners, `processSteps.${idx}.desc`, `Schritt 0${idx + 1} · Beschreibung`, true),
          ]),
        },
      ],
    },

    // 6. CAREER PAGE
    {
      id: "career",
      title: "Karriere (Career)",
      routeHint: `/${locale}/career`,
      badge: "3 Sektionen",
      sections: [
        {
          id: "career-hero",
          title: "1. Karriere Hero & Badges",
          subtitle: "Kopfbereich von NabiOta Medical Recruitment Services",
          fields: [
            makeField("careerPage", career, "hero.eyebrow", "Hero · Eyebrow"),
            makeField("careerPage", career, "hero.titlePrefix", "Hero · Titel Teil 1"),
            makeField("careerPage", career, "hero.titleMid", "Hero · Titel Hervorhebung 1"),
            makeField("careerPage", career, "hero.titleHighlight", "Hero · Titel Hervorhebung 2"),
            makeField("careerPage", career, "hero.description", "Hero · Beschreibung", true),
            makeField("careerPage", career, "hero.cta", "Hero · Button"),
            makeField("careerPage", career, "hero.floatingQuote", "Hero · Zitat"),
          ],
        },
        {
          id: "career-mission",
          title: "2. Leitbild & Fachkräftevermittlung",
          subtitle: "Mission und Überblick über die 4 Vermittlungssäulen",
          fields: [
            makeField("careerPage", career, "mission.eyebrow", "Mission · Eyebrow"),
            makeField("careerPage", career, "mission.title", "Mission · Überschrift"),
            makeField("careerPage", career, "mission.desc", "Mission · Beschreibung", true),
            makeField("careerPage", career, "mission.role", "Mission · Unterzeichner-Rolle"),
            makeField("careerPage", career, "pillarSection.eyebrow", "Vermittlung · Eyebrow"),
            makeField("careerPage", career, "pillarSection.title", "Vermittlung · Überschrift"),
            makeField("careerPage", career, "pillarSection.desc", "Vermittlung · Beschreibung", true),
          ],
        },
        {
          id: "career-pillars",
          title: "3. Die 4 Berufsgruppen-Säulen",
          subtitle: "Ärzte, Pflegefachkräfte, MTA/Radiologie und Therapeuten",
          fields: career.pillars.flatMap((p, idx) => [
            makeField("careerPage", career, `pillars.${idx}.title`, `Berufsgruppe ${idx + 1} · Titel`),
            makeField("careerPage", career, `pillars.${idx}.category`, `Berufsgruppe ${idx + 1} · Kategorie`),
            makeField("careerPage", career, `pillars.${idx}.shortDesc`, `Berufsgruppe ${idx + 1} · Kurzbeschreibung`, true),
            makeField("careerPage", career, `pillars.${idx}.description`, `Berufsgruppe ${idx + 1} · Detailtext`, true),
          ]),
        },
      ],
    },

    // 7. CONTACT PAGE
    {
      id: "contact",
      title: "Kontakt (Contact)",
      routeHint: `/${locale}/contact`,
      badge: "5 Sektionen",
      sections: [
        {
          id: "contact-left",
          title: "1. Kontaktinformationen (Linke Karte)",
          subtitle: "Postanschrift, Telefonnummern, E-Mail, Servicezeiten & Handelsregister",
          fields: [
            makeField("contactPage", contact, "left.eyebrow", "Eyebrow"),
            makeField("contactPage", contact, "left.title", "Überschrift"),
            makeField("contactPage", contact, "left.desc", "Einleitungstext", true),
            makeField("contactPage", contact, "left.addressTitle", "Label · Postanschrift"),
            makeField("contactPage", contact, "left.street", "Straße & Hausnummer"),
            makeField("contactPage", contact, "left.city", "PLZ, Ort & Land"),
            makeField("contactPage", contact, "left.phoneTitle", "Label · Telefonische Erreichbarkeit"),
            makeField("contactPage", contact, "left.emailTitle", "Label · E-Mail"),
            makeField("contactPage", contact, "left.hoursTitle", "Label · Servicezeiten"),
            makeField("contactPage", contact, "left.hours", "Öffnungszeiten"),
            makeField("contactPage", contact, "left.registryTitle", "Label · Handelsregister"),
            makeField("contactPage", contact, "left.registryCourt", "Registergericht"),
            makeField("contactPage", contact, "left.registryHrb", "HRB-Nummer"),
            makeField("contactPage", contact, "left.registryCapital", "Stammkapital"),
          ],
        },
        {
          id: "contact-form",
          title: "2. Kontaktformular (Rechte Karte)",
          subtitle: "Überschriften, Feldlabels und Statusmeldungen des Formulars",
          fields: [
            makeField("contactPage", contact, "form.eyebrow", "Formular · Eyebrow"),
            makeField("contactPage", contact, "form.title", "Formular · Überschrift"),
            makeField("contactPage", contact, "form.subtitle", "Formular · Untertitel", true),
            makeField("contactPage", contact, "form.nameLabel", "Feldlabel · Name"),
            makeField("contactPage", contact, "form.emailLabel", "Feldlabel · E-Mail"),
            makeField("contactPage", contact, "form.phoneLabel", "Feldlabel · Telefon"),
            makeField("contactPage", contact, "form.companyLabel", "Feldlabel · Unternehmen/Praxis"),
            makeField("contactPage", contact, "form.subjectLabel", "Feldlabel · Betreff"),
            makeField("contactPage", contact, "form.messageLabel", "Feldlabel · Nachricht"),
            makeField("contactPage", contact, "form.privacyText", "Datenschutz-Hinweis", true),
            makeField("contactPage", contact, "form.submitBtn", "Absenden-Button"),
            makeField("contactPage", contact, "form.successMsg", "Erfolgsmeldung", true),
          ],
        },
        {
          id: "contact-locations",
          title: "3. Standort-Karten neben Google Maps (5 Standorte)",
          subtitle: "Hauptsitz, Düsseldorf, Viersen, Mönchengladbach & Partnernetzwerk",
          fields: contactLocs.flatMap((loc, idx) => [
            makeField(
              "contactLocations",
              contactLocs,
              `${idx}.title`,
              `Standort ${idx + 1} (${loc.id}) · Titel`
            ),
            makeField(
              "contactLocations",
              contactLocs,
              `${idx}.address`,
              `Standort ${idx + 1} (${loc.id}) · Adresse`,
              true
            ),
            makeField(
              "contactLocations",
              contactLocs,
              `${idx}.phone`,
              `Standort ${idx + 1} (${loc.id}) · Telefon`
            ),
            makeField(
              "contactLocations",
              contactLocs,
              `${idx}.email`,
              `Standort ${idx + 1} (${loc.id}) · E-Mail`
            ),
          ]),
        },
        {
          id: "contact-directory",
          title: "4. Direktkontakte & Tochtergesellschaften (4 Bereiche)",
          subtitle: "Direkte Durchwahlen der Fachabteilungen",
          fields: [
            makeField("contactPage", contact, "directory.eyebrow", "Verzeichnis · Eyebrow"),
            makeField("contactPage", contact, "directory.title", "Verzeichnis · Überschrift"),
            makeField("contactPage", contact, "directory.desc", "Verzeichnis · Beschreibung", true),
            makeField("contactPage", contact, "directory.div1Title", "Abteilung 1 · Titel"),
            makeField("contactPage", contact, "directory.div1Desc", "Abteilung 1 · Beschreibung", true),
            makeField("contactPage", contact, "directory.div1Email", "Abteilung 1 · E-Mail"),
            makeField("contactPage", contact, "directory.div1Phone", "Abteilung 1 · Telefon"),
            makeField("contactPage", contact, "directory.div2Title", "Abteilung 2 · Titel"),
            makeField("contactPage", contact, "directory.div2Desc", "Abteilung 2 · Beschreibung", true),
            makeField("contactPage", contact, "directory.div2Email", "Abteilung 2 · E-Mail"),
            makeField("contactPage", contact, "directory.div2Phone", "Abteilung 2 · Telefon"),
            makeField("contactPage", contact, "directory.div3Title", "Abteilung 3 · Titel"),
            makeField("contactPage", contact, "directory.div3Desc", "Abteilung 3 · Beschreibung", true),
            makeField("contactPage", contact, "directory.div3Email", "Abteilung 3 · E-Mail"),
            makeField("contactPage", contact, "directory.div3Phone", "Abteilung 3 · Telefon"),
            makeField("contactPage", contact, "directory.div4Title", "Abteilung 4 · Titel"),
            makeField("contactPage", contact, "directory.div4Desc", "Abteilung 4 · Beschreibung", true),
            makeField("contactPage", contact, "directory.div4Email", "Abteilung 4 · E-Mail"),
            makeField("contactPage", contact, "directory.div4Phone", "Abteilung 4 · Telefon"),
          ],
        },
        {
          id: "contact-map-qr",
          title: "5. Google Maps & QR-Code Overlay",
          subtitle: "Texte auf der Karten- und QR-Code-Box",
          fields: [
            makeField("contactPage", contact, "cards.mapTitle", "Karte · Unternehmenstitel"),
            makeField("contactPage", contact, "cards.mapAddress", "Karte · Standardadresse"),
            makeField("contactPage", contact, "cards.openMaps", "Button · In Google Maps öffnen"),
            makeField("contactPage", contact, "cards.qrTitle", "QR-Box · Titel"),
            makeField("contactPage", contact, "cards.qrDesc", "QR-Box · Beschreibung", true),
            makeField("contactPage", contact, "cards.qrBtn", "QR-Box · Button"),
          ],
        },
      ],
    },

    // 8. NAVIGATION & FOOTER
    {
      id: "navigation",
      title: "Navigation, SEO & Footer",
      routeHint: "Global",
      badge: "2 Sektionen",
      sections: [
        {
          id: "global-nav-meta",
          title: "1. Hauptnavigation & SEO-Metadaten",
          subtitle: "Menüpunkte im Header und Seitentitel/Meta-Description",
          fields: [
            makeField("home", dict, "meta.title", "SEO · Seitentitel (Meta Title)"),
            makeField("home", dict, "meta.description", "SEO · Meta Description", true),
            makeField("home", dict, "nav.home", "Menü · Startseite"),
            makeField("home", dict, "nav.about", "Menü · Über uns"),
            makeField("home", dict, "nav.areas", "Menü · Unsere Bereiche"),
            makeField("home", dict, "nav.values", "Menü · Unsere Werte"),
            makeField("home", dict, "nav.career", "Menü · Karriere"),
            makeField("home", dict, "nav.partners", "Menü · Partner"),
            makeField("home", dict, "nav.contact", "Menü · Kontakt"),
            makeField("home", dict, "nav.contactCta", "Header-Button · Kontakt aufnehmen"),
          ],
        },
        {
          id: "global-footer",
          title: "2. Footer (Fußzeile)",
          subtitle: "Slogan, Spaltentitel und Urheberrechtshinweise im Footer",
          fields: [
            makeField("home", dict, "footer.slogan", "Footer · Slogan"),
            makeField("home", dict, "footer.addressTitle", "Footer · Spalte Standort"),
            makeField("home", dict, "footer.phonesTitle", "Footer · Spalte Telefon"),
            makeField("home", dict, "footer.networkTitle", "Footer · Spalte Netzwerk"),
            makeField("home", dict, "footer.allRights", "Footer · Alle Rechte vorbehalten"),
            makeField("home", dict, "footer.brandNotice", "Footer · Markenrecht-Hinweis"),
          ],
        },
      ],
    },
  ];
}

