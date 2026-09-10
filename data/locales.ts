/**
 * Locale primitives shared by the whole data layer.
 *
 * These live in their own module so that `books.ts` and `i18n.ts` can both
 * depend on them without creating a circular import. Every multilingual
 * entity in the catalog stores one field per locale (e.g. `name_en`,
 * `name_ru`, `name_tk`, `name_tr`), keyed by these same codes.
 */
export const locales = ["en", "ru", "tr", "tk"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
