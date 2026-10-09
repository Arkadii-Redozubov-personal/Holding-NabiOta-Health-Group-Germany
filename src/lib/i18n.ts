import de from "@/dictionaries/de.json";
import en from "@/dictionaries/en.json";
import ru from "@/dictionaries/ru.json";
import tr from "@/dictionaries/tr.json";
import ar from "@/dictionaries/ar.json";
import uz from "@/dictionaries/uz.json";

export const locales = ["de", "en", "ru", "tr", "ar", "uz"] as const;
export type SupportedLocale = (typeof locales)[number];

export const defaultLocale: SupportedLocale = "de";

export const dictionaries: Record<SupportedLocale, typeof de> = {
  de,
  en,
  ru,
  tr,
  ar,
  uz,
};

export function getDictionary(locale: string = defaultLocale) {
  if (locale === "ru") return dictionaries.ru;
  if (locale === "en") return dictionaries.en;
  if (locale === "tr") return dictionaries.tr;
  if (locale === "ar") return dictionaries.ar;
  if (locale === "uz") return dictionaries.uz;
  return dictionaries.de;
}

export function isValidLocale(locale: string): locale is SupportedLocale {
  return locales.includes(locale as SupportedLocale);
}
