/**
 * Smarts Books catalog — single public entry point.
 *
 * This module exposes the app's book domain:
 *   - Constants with their derived types (`categories`, `languages` and the
 *     `Category` / `Language` unions) — written once, here.
 *   - The `Book` / `Series` model types.
 *   - The raw `books` catalog (collected in `./books-data`) re-exported here.
 *   - Query and URL helper functions.
 *
 * Other parts of the app should only ever import from "@/data/books".
 */

import { books } from "./books-data";

// Re-export the raw catalog so it can also be consumed from "@/data/books".
export { books };

// ---------------------------------------------------------------------------
// Constants and derived types
// ---------------------------------------------------------------------------

// All available categories, in display order. The `Category` type is derived
// from this array, so the two can never drift apart.
export const categories = [
  "Fiction",
  "Non-Fiction",
  "Science",
  "Technology",
  "History",
  "Biography",
  "Fantasy",
  "Mystery",
] as const;

/** A single category a book can belong to, e.g. "Fantasy". */
export type Category = (typeof categories)[number];

// All supported languages, in display order. `Language` is derived from this.
export const languages = ["Russian", "English", "Turkmen", "Turkish"] as const;

/** A language a book can be written in, e.g. "Русский". */
export type Language = (typeof languages)[number];

// ---------------------------------------------------------------------------
// Model types
// ---------------------------------------------------------------------------

/** A single book entry in the catalog. */
export interface Book {
  /** Book title. */
  name: string;
  /** Short synopsis. */
  description: string;
  /** Author name(s) */
  author: string;
  /** One or more categories. */
  categories: Category[];
  /** Publication year. */
  year: number;
  /** Name of the series this book belongs to, if any. */
  series?: string;
  /** Relative path to the cover image in /public. */
  poster: string;
  /** Direct download URL for the book file. */
  downloadUrl: string;
  /** Language the book is written in. */
  language: Language;
}

/** A group of books that share a series name. */
export interface Series {
  name: string;
  /** Books belonging to this series, in reading order. */
  books: Book[];
}

// ---------------------------------------------------------------------------
// Query utilities
// ---------------------------------------------------------------------------

/** Returns books belonging to the given category. */
export function getBooksByCategory(category: Category): Book[] {
  return books.filter((book) => book.categories.includes(category));
}

/** Convenience accessor for looking up a book by name. */
export function getBook(name: string): Book | undefined {
  return books.find((book) => book.name === name);
}

/** Groups books by their series, ignoring standalone titles. */
export function getSeries(): Series[] {
  const grouped = new Map<string, Book[]>();
  for (const book of books) {
    if (!book.series) continue;
    const list = grouped.get(book.series) ?? [];
    list.push(book);
    grouped.set(book.series, list);
  }
  return Array.from(grouped, ([name, seriesBooks]) => ({
    name,
    books: seriesBooks,
  }));
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

/** Slug for a single book. */
export function getBookSlug(book: Book): string {
  return slugify(book.name);
}

/** Slug for a series name. */
export function getSeriesSlug(name: string): string {
  return slugify(name);
}

/** Looks up a book by its URL slug. */
export function getBookBySlug(slug: string): Book | undefined {
  return books.find((book) => getBookSlug(book) === slug);
}

/** Looks up a series by its URL slug. */
export function getSeriesBySlug(slug: string): Series | undefined {
  return getSeries().find((series) => getSeriesSlug(series.name) === slug);
}

/** Looks up a category by its URL slug. */
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => slugify(category) === slug);
}
