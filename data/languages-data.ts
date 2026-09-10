/**
 * Book languages. This file is intentionally data-only.
 *
 * A language is identified by its locale-style code (`"en"`, `"ru"`, `"tk"`,
 * `"tr"`) — books reference languages through `Book.language` using exactly
 * this code. The display name of every language is stored for each supported
 * locale, so the UI can render it translated in the current i18n locale via
 * `getLanguageName()` in `./books`.
 */
import type { Locale } from "./locales";

export interface Language {
  /** Language code, e.g. "en". Referenced by `Book.language`. */
  id: Locale;
  name_en: string;
  name_ru: string;
  name_tk: string;
  name_tr: string;
}

export const languages: Language[] = [
  {
    id: "en",
    name_en: "English",
    name_ru: "Английский",
    name_tk: "Iňlis dili",
    name_tr: "İngilizce",
  },
  {
    id: "ru",
    name_en: "Russian",
    name_ru: "Русский",
    name_tk: "Rus dili",
    name_tr: "Rusça",
  },
  {
    id: "tk",
    name_en: "Turkmen",
    name_ru: "Туркменский",
    name_tk: "Türkmen dili",
    name_tr: "Türkmence",
  },
  {
    id: "tr",
    name_en: "Turkish",
    name_ru: "Турецкий",
    name_tk: "Türk dili",
    name_tr: "Türkçe",
  },
];
