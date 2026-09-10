/**
 * Book series. This file is intentionally data-only.
 *
 * Every series has a unique incrementing numeric `id` — books reference
 * their series through `Book.serieId` — and a display name for every
 * supported locale, so multilingual editions of the same series (e.g. the
 * Russian and English "Harry Potter" books) are grouped into one entity.
 * Pages render the name of the current i18n locale via `getSeriesName()`
 * in `./books`.
 */
export interface Series {
  /** Unique identifier, referenced by `Book.serieId`. */
  id: number;
  name_en: string;
  name_ru: string;
  name_tk: string;
  name_tr: string;
}

export const series: Series[] = [
  {
    id: 1,
    name_en: "Harry Potter",
    name_ru: "Гарри Поттер",
    name_tk: "Harry Potter",
    name_tr: "Harry Potter",
  },
  {
    id: 2,
    name_en: "Fantastic Beasts",
    name_ru: "Фантастические твари",
    name_tk: "Fantastik haýwanlar",
    name_tr: "Fantastik Yaratıklar",
  },
  {
    id: 3,
    name_en: "The Lord of the Rings",
    name_ru: "Властелин колец",
    name_tk: "Yüzükleriň Efendisi",
    name_tr: "Yüzüklerin Efendisi",
  },
  {
    id: 4,
    name_en: "The Chronicles of Narnia",
    name_ru: "Хроники Нарнии",
    name_tk: "Narnia hronikalary",
    name_tr: "Narnia Günlükleri",
  },
  {
    id: 5,
    name_en: "Dune",
    name_ru: "Дюна",
    name_tk: "Dýuna",
    name_tr: "Dune",
  },
  {
    id: 6,
    name_en: "A Song of Ice and Fire",
    name_ru: "Песнь Льда и Пламени",
    name_tk: "Buz we Odyň aýdymy",
    name_tr: "Buz ve Ateşin Şarkısı",
  },
];
