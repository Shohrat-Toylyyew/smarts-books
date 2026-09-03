// Single source of truth for book data.
// Stored as TypeScript (not JSON) so the data is fully type-checked at build
// time and the Category type is shared across the site.

export interface Book {
  /** Book title. */
  name: string;
  /** Short synopsis. */
  description: string;
  /** Author name(s) */
  author: string;
  /** One or more categories. */
  categories: string[];
  /** Publication year. */
  year: number;
  /** Name of the series this book belongs to, if any. */
  series?: string;
  /** Relative path to the cover image in /public. */
  poster: string;
  /** Direct download URL for the book file. */
  downloadUrl: string;
  language: string;
}

export interface Series {
  name: string;
  /** Books sorted by series order. */
  books: Book[];
}

export const categories: readonly string[] = [
  "Fiction",
  "Non-Fiction",
  "Science",
  "Technology",
  "History",
  "Biography",
  "Fantasy",
  "Mystery",
] as const;

export const books: Book[] = [
  {
    name: "Гарри Поттер и Философский камень",
    description:
      "Одиннадцатилетний мальчик-сирота Гарри Поттер живет в семье своей тетки и даже не подозревает, что он — настоящий волшебник. Но однажды прилетает сова с письмом для него, и жизнь Гарри изменяется навсегда. Он узнает, что зачислен в Школу чародейства и волшебства «Хогвартс», выясняет правду о загадочной смерти своих родителей, а в результате ему удается раскрыть секрет философского камня.",
    author: "J.K. Rowling",
    categories: ["Fantasy", "Fiction"],
    year: 1997,
    series: "Гарри Поттер",
    poster: "/books/Гарри Поттер и Философский камень.jpg",
    downloadUrl: "https://fantasy-worlds.net/lib/id4588/download/",
    language: "Russian",
  },
];

/** Returns books belonging to the given category. */
export function getBooksByCategory(category: string): Book[] {
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
export function getCategoryBySlug(slug: string): string | undefined {
  return categories.find((category) => slugify(category) === slug);
}
