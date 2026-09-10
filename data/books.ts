/**
 * Smarts Books catalog — single public entry point.
 *
 * This module exposes the app's book domain:
 *   - The raw, multilingual data (`books`, `authors`, `categories`,
 *     `languages`, `series`) collected from the `*-data` modules.
 *   - The model types (`Book`, `Author`, `Category`, `Language`, `Series`).
 *   - Localized getters so every page can render fields in the current
 *     i18n locale (`getBookName`, `getCategoryName`, ...).
 *   - Query and URL helper functions.
 *
 * Other parts of the app should only ever import from "@/data/books".
 */

import { books } from "./books-data";
import { authors, type Author } from "./authors-data";
import { categories, type Category } from "./categories-data";
import { languages, type Language } from "./languages-data";
import { series, type Series } from "./series-data";
import { locales, type Locale } from "./locales";

// Re-export the raw multilingual catalog.
export { books, authors, categories, languages, series };
export type { Author, Category, Language, Series };

// ---------------------------------------------------------------------------
// Localized getters — every entity shows the field of the current i18n locale
// ---------------------------------------------------------------------------

/**
 * Reads the localized variant of a field (e.g. `name_ru`) for the locale,
 * falling back to the English value and then to an empty string.
 * `item` is expected to hold flat `field_locale` keys.
 */
export function getLocalizedField(
  item: object,
  field: string,
  lang: Locale,
): string {
  const record = item as Record<string, string | undefined>;
  return record[`${field}_${lang}`] || record[`${field}_en`] || "";
}

/** Localized title of a book in the given locale. */
export function getBookName(book: Book, lang: Locale): string {
  return getLocalizedField(book, "name", lang);
}

/** Localized synopsis of a book in the given locale. */
export function getBookDescription(book: Book, lang: Locale): string {
  return getLocalizedField(book, "description", lang);
}

/** Localized display name of a category in the given locale. */
export function getCategoryName(category: Category, lang: Locale): string {
  return getLocalizedField(category, "name", lang);
}

/** Localized display name of a series in the given locale. */
export function getSeriesName(serie: Series, lang: Locale): string {
  return getLocalizedField(serie, "name", lang);
}

/** Localized display name of a language in the given locale. */
export function getLanguageName(language: Language, lang: Locale): string {
  return getLocalizedField(language, "name", lang);
}

/** Localized display name of a language looked up by its code ("en", "ru"...). */
export function getLanguageNameByCode(id: string, lang: Locale): string {
  return getLocalizedField(
    languages.find((language) => language.id === id) ?? {},
    "name",
    lang,
  );
}

/** Localized display name of an author in the given locale. */
export function getAuthorName(author: Author, lang: Locale): string {
  return getLocalizedField(author, "name", lang);
}

/** Localized biography of an author in the given locale. */
export function getAuthorAbout(author: Author, lang: Locale): string {
  return getLocalizedField(author, "about", lang);
}

/** Convenience accessor for the localized display name of a book's author. */
export function getAuthorNameById(authorId: number, lang: Locale): string {
  return getAuthorName(
    authors.find((author) => author.id === authorId) ?? ({} as Author),
    lang,
  );
}

// ---------------------------------------------------------------------------
// Model types
// ---------------------------------------------------------------------------

/** A single book entry in the catalog. */
export interface Book {
  id: number;
  /** Book title, one per locale. */
  name_en: string;
  name_ru: string;
  name_tk: string;
  name_tr: string;
  /** Short synopsis, one per locale. */
  description_en: string;
  description_ru: string;
  description_tk: string;
  description_tr: string;
  /** Author reference into `authors` in ./authors-data. */
  authorId: number;
  /** Referenced category ids from ./categories-data. */
  categoryIds: number[];
  /** Publication year. */
  year: number;
  /** Referenced series id from ./series-data, if any. */
  serieId?: number;
  /** Relative path to the cover image in /public. */
  cover: string;
  /** Direct download URL for the book file. */
  downloadUrl: string;
  /** Language code ("en" / "ru" / "tk" / "tr") of this edition. */
  language: Language["id"];
}

/** A group of books sharing a series entity. */
export interface SeriesWithBooks extends Series {
  books: Book[];
}

/** An author profile enriched with the number of their books in the catalog. */
export interface AuthorWithCount extends Author {
  bookCount: number;
}

// ---------------------------------------------------------------------------
// Query utilities
// ---------------------------------------------------------------------------

/** Returns books belonging to the given category. */
export function getBooksByCategory(category: Category): Book[] {
  return books.filter((book) => book.categoryIds.includes(category.id));
}

/** Looks up a category by its id. */
export function getCategoryById(id: number): Category | undefined {
  return categories.find((category) => category.id === id);
}

/** Looks up a series by its id. */
export function getSeriesById(id: number): Series | undefined {
  return series.find((serie) => serie.id === id);
}

/** Convenience accessor for looking up a book by its id. */
export function getBook(id: number): Book | undefined {
  return books.find((book) => book.id === id);
}

/**
 * Groups books by their series entity, ignoring standalone titles.
 * Every returned series carries its localized names plus its books.
 */
export function getSeries(): SeriesWithBooks[] {
  return series
    .map((serie) => ({
      ...serie,
      books: books.filter((book) => book.serieId === serie.id),
    }))
    .filter((serie) => serie.books.length > 0);
}

/**
 * Converts a name into a URL-safe slug, e.g.
 * "The Silent Eye" -> "the-silent-eye",
 * "Гарри Поттер" -> "garri-potter".
 */
export function slugify(name: string): string {
  return transliterate(name)
    .toLowerCase()
    .trim()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Transliterates Cyrillic characters to Latin, leaving other scripts as-is. */
function transliterate(text: string): string {
  const map: Record<string, string> = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "e",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "kh",
    ц: "ts",
    ч: "ch",
    ш: "sh",
    щ: "shch",
    ъ: "",
    ы: "y",
    ь: "",
    э: "e",
    ю: "yu",
    я: "ya",
  };
  return text.replace(/[а-яё]/gi, (char) => {
    const lower = char.toLowerCase();
    const mapped = map[lower] ?? lower;
    return char === lower
      ? mapped
      : mapped.charAt(0).toUpperCase() + mapped.slice(1);
  });
}

/**
 * Slug for a single book. Books are identified by the title in their own
 * edition language (e.g. the Russian edition slugs from its Russian title),
 * keeping URLs stable and unique across language editions.
 */
export function getBookSlug(book: Book): string {
  return slugify(book[`name_${book.language}`] ?? book.name_en);
}

/** Slug for a series, built from its canonical English name. */
export function getSeriesSlug(serie: Series): string {
  return slugify(serie.name_en);
}

/** Looks up a book by its URL slug. */
export function getBookBySlug(slug: string): Book | undefined {
  return books.find((book) => getBookSlug(book) === slug);
}

/** Looks up a series by its URL slug. */
export function getSeriesBySlug(slug: string): SeriesWithBooks | undefined {
  return getSeries().find((serie) => getSeriesSlug(serie) === slug);
}

/** Slug for a category, built from its canonical English name. */
export function getCategorySlug(category: Category): string {
  return slugify(category.name_en);
}

/** Looks up a category by its URL slug. */
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => getCategorySlug(category) === slug);
}

/**
 * Searches books by title (case-insensitive substring match) across all
 * locales. Books whose title starts with the query are ranked first.
 */
export function searchBooks(query: string, limit?: number): Book[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];

  const matches = books.filter((book) =>
    locales.some(
      (locale) => book[`name_${locale}`].toLowerCase().includes(normalized),
    ),
  );
  const startsWith = (book: Book) =>
    locales.some(
      (locale) => book[`name_${locale}`].toLowerCase().startsWith(normalized),
    );
  matches.sort((a, b) => Number(startsWith(b)) - Number(startsWith(a)));

  return limit ? matches.slice(0, limit) : matches;
}

// ---------------------------------------------------------------------------
// Authors
// ---------------------------------------------------------------------------

/**
 * All authors that have at least one book in the catalog,
 * each enriched with their book count.
 */
export function getAuthors(): AuthorWithCount[] {
  return authors
    .map((author) => ({
      ...author,
      bookCount: books.filter((book) => book.authorId === author.id).length,
    }))
    .filter((author) => author.bookCount > 0);
}

/** Slug for an author, built from their canonical English name. */
export function getAuthorSlug(author: Author): string {
  return slugify(author.name_en);
}

/** Looks up an author by their URL slug. */
export function getAuthorBySlug(slug: string): AuthorWithCount | undefined {
  return getAuthors().find((author) => getAuthorSlug(author) === slug);
}

/** Returns all books written by the given author. */
export function getBooksByAuthor(authorId: number): Book[] {
  return books.filter((book) => book.authorId === authorId);
}
