/**
 * Book categories. This file is intentionally data-only.
 *
 * Every category has a unique incrementing numeric `id` — books reference
 * categories through `Book.categoryIds`, never by name — and a display name
 * for every supported locale. Pages render the name of the current i18n
 * locale via `getCategoryName()` in `./books`.
 */
export interface Category {
  /** Unique identifier, referenced by `Book.categoryIds`. */
  id: number;
  name_en: string;
  name_ru: string;
  name_tk: string;
  name_tr: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name_en: "Fiction",
    name_ru: "Художественная литература",
    name_tk: "Hyýaly eserler",
    name_tr: "Kurgu",
  },
  {
    id: 2,
    name_en: "Non-Fiction",
    name_ru: "Нонфикшн",
    name_tk: "Dokumental",
    name_tr: "Kurgu Dışı",
  },
  {
    id: 3,
    name_en: "Science",
    name_ru: "Наука",
    name_tk: "Ylym",
    name_tr: "Bilim",
  },
  {
    id: 4,
    name_en: "Technology",
    name_ru: "Технологии",
    name_tk: "Tehnologiýa",
    name_tr: "Teknoloji",
  },
  {
    id: 5,
    name_en: "History",
    name_ru: "История",
    name_tk: "Taryh",
    name_tr: "Tarih",
  },
  {
    id: 6,
    name_en: "Biography",
    name_ru: "Биографии",
    name_tk: "Biografiýa",
    name_tr: "Biyografi",
  },
  {
    id: 7,
    name_en: "Fantasy",
    name_ru: "Фэнтези",
    name_tk: "Fantastika",
    name_tr: "Fantastik",
  },
  {
    id: 8,
    name_en: "Mystery",
    name_ru: "Детектив",
    name_tk: "Detektiw",
    name_tr: "Polisiye",
  },
];
