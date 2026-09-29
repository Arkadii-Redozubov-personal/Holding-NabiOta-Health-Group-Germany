import de from "@/dictionaries/de.json";
import en from "@/dictionaries/en.json";
import ru from "@/dictionaries/ru.json";

export const locales = ["de", "en", "ru"] as const;
export type SupportedLocale = (typeof locales)[number];

export const defaultLocale: SupportedLocale = "de";

export const dictionaries: Record<SupportedLocale, typeof de> = {
  de,
  en,
  ru,
};

export function getDictionary(locale: string = defaultLocale) {
  if (locale === "ru") return dictionaries.ru;
  if (locale === "en") return dictionaries.en;
  return dictionaries.de;
}

export function isValidLocale(locale: string): locale is SupportedLocale {
  return locales.includes(locale as SupportedLocale);
}
