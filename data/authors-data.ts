/**
 * Author profiles. This file is intentionally data-only.
 * Every entry must match the exact `author` string used in books-data.ts,
 * so pages can join authors with their books.
 *
 * `image` holds a relative path to the author photo in /public
 * (e.g. "/authors/j-k-rowling.webp"). Leave it as an empty string
 * until a photo is added — a placeholder avatar is shown instead.
 */
export interface Author {
  /** Author name exactly as it appears in the `author` field of books-data.ts. */
  name: string;
  birthYear: number;
  /** Year of death, if applicable. */
  deathYear?: number;
  /** Relative path to the author photo in /public. Empty string = placeholder. */
  image: string;
  /** Short biography. */
  about: string;
}

export const authors: Author[] = [
  {
    name: "J.K. Rowling",
    birthYear: 1965,
    image: "",
    about:
      "British author best known for the globally beloved Harry Potter series, one of the best-selling book series in history.",
  },
  {
    name: "J.R.R. Tolkien",
    birthYear: 1892,
    deathYear: 1973,
    image: "",
    about:
      "English writer, philologist and Oxford professor, creator of Middle-earth and of the modern fantasy genre.",
  },
  {
    name: "Дж.Р.Р. Толкин",
    birthYear: 1892,
    deathYear: 1973,
    image: "",
    about:
      "Английский писатель, филолог и профессор Оксфорда, создатель Средиземья и современного жанра фэнтези.",
  },
  {
    name: "George R.R. Martin",
    birthYear: 1948,
    image: "",
    about:
      "American novelist best known for A Song of Ice and Fire, adapted into the HBO series Game of Thrones.",
  },
  {
    name: "C.S. Lewis",
    birthYear: 1898,
    deathYear: 1963,
    image: "",
    about:
      "British writer and scholar, author of The Chronicles of Narnia and celebrated works on Christianity.",
  },
  {
    name: "Фрэнк Герберт",
    birthYear: 1920,
    deathYear: 1986,
    image: "",
    about:
      "Американский писатель-фантаст, автор культового романа «Дюна» и его продолжений.",
  },
  {
    name: "Matt Haig",
    birthYear: 1975,
    image: "",
    about:
      "British novelist and journalist whose uplifting fiction, including The Midnight Library, has won a worldwide readership.",
  },
  {
    name: "Ф.М. Достоевский",
    birthYear: 1821,
    deathYear: 1881,
    image: "",
    about:
      "Русский писатель и мыслитель, классик мировой литературы, автор «Преступления и наказания» и «Братьев Карамазовых».",
  },
  {
    name: "Л.Н. Толстой",
    birthYear: 1828,
    deathYear: 1910,
    image: "",
    about:
      "Русский писатель, один из величайших романистов мира, автор «Войны и мира» и «Анны Карениной».",
  },
  {
    name: "М.А. Булгаков",
    birthYear: 1891,
    deathYear: 1940,
    image: "",
    about:
      "Русский писатель и драматург, автор знаменитого романа «Мастер и Маргарита».",
  },
  {
    name: "Антуан де Сент-Экзюпери",
    birthYear: 1900,
    deathYear: 1944,
    image: "",
    about:
      "Французский писатель и лётчик, автор всемирно известной сказки «Маленький принц».",
  },
  {
    name: "Paulo Coelho",
    birthYear: 1947,
    image: "",
    about:
      "Brazilian novelist whose inspirational story The Alchemist became an international phenomenon.",
  },
  {
    name: "George Orwell",
    birthYear: 1903,
    deathYear: 1950,
    image: "",
    about:
      "English novelist and essayist, author of the classics 1984 and Animal Farm.",
  },
  {
    name: "Leo Tolstoy",
    birthYear: 1828,
    deathYear: 1910,
    image: "",
    about:
      "Russian writer regarded among the greatest novelists of all time, author of War and Peace and Anna Karenina.",
  },
  {
    name: "Вальтер Скотт",
    birthYear: 1771,
    deathYear: 1832,
    image: "",
    about:
      "Шотландский писатель, основоположник жанра исторического романа, автор «Айвенго».",
  },
  {
    name: "F. Scott Fitzgerald",
    birthYear: 1896,
    deathYear: 1940,
    image: "",
    about:
      "American novelist of the Jazz Age, best known for The Great Gatsby.",
  },
  {
    name: "Harper Lee",
    birthYear: 1926,
    deathYear: 2016,
    image: "",
    about:
      "American novelist whose debut To Kill a Mockingbird became a modern American classic.",
  },
  {
    name: "Ray Bradbury",
    birthYear: 1920,
    deathYear: 2012,
    image: "",
    about:
      "American writer who shaped modern science fiction, best known for Fahrenheit 451.",
  },
  {
    name: "Jane Austen",
    birthYear: 1775,
    deathYear: 1817,
    image: "",
    about:
      "English novelist whose witty portraits of love and society include Pride and Prejudice.",
  },
  {
    name: "Orhan Pamuk",
    birthYear: 1952,
    image: "",
    about:
      "Turkish novelist and Nobel laureate whose works explore Istanbul, memory and identity.",
  },
  {
    name: "Yuval Noah Harari",
    birthYear: 1976,
    image: "",
    about:
      "Israeli historian and author of the bestselling Sapiens: A Brief History of Humankind.",
  },
];