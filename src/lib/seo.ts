import type { Metadata } from "next";
import {
  defaultLocale,
  getLocalePath as localePathname,
  locales,
  type SupportedLocale,
} from "@/lib/i18n";

export const siteUrl = "https://www.nabiota-health-group.de";

export function getLocaleUrl(
  locale: SupportedLocale,
  route: string,
  defaultLocaleUnprefixed?: boolean,
): string {
  return `${siteUrl}${localePathname(locale, route, defaultLocaleUnprefixed)}`;
}

export function getLocaleAlternates(
  locale: SupportedLocale,
  route: string,
  defaultLocaleUnprefixed?: boolean,
): NonNullable<Metadata["alternates"]> {
  const languages = Object.fromEntries(
    locales.map((language) => [language, getLocaleUrl(language, route, defaultLocaleUnprefixed)]),
  );

  return {
    canonical: getLocaleUrl(locale, route, defaultLocaleUnprefixed),
    languages: {
      ...languages,
      "x-default": getLocaleUrl(defaultLocale, route, defaultLocaleUnprefixed),
    },
  };
}
