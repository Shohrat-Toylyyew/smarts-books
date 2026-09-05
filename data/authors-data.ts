/**
 * Author profiles. This file is intentionally data-only.
 * Names are stored in English only — they are the canonical identifiers.
 * Books reference authors by `authorId`, so pages can join authors with
 * their books.
 *
 * `image` holds a relative path to the author photo in /public
 * (e.g. "/authors/j-k-rowling.webp"). Leave it as an empty string
 * until a photo is added — a placeholder avatar is shown instead.
 */
export interface Author {
  /** Unique identifier, referenced by `Book.authorId`. */
  id: number;
  /** Author name in English (canonical). */
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
    id: 1,
    name: "J.K. Rowling",
    birthYear: 1965,
    image: "/authors/J.K. Rowling.webp",
    about:
      "British author best known for the globally beloved Harry Potter series, one of the best-selling book series in history.",
  },
  {
    id: 2,
    name: "J.R.R. Tolkien",
    birthYear: 1892,
    deathYear: 1973,
    image: "/authors/J.R.R. Tolkien.webp",
    about:
      "English writer, philologist and Oxford professor, creator of Middle-earth and of the modern fantasy genre.",
  },
  {
    id: 3,
    name: "George R.R. Martin",
    birthYear: 1948,
    image: "/authors/George R.R. Martin.webp",
    about:
      "American novelist best known for A Song of Ice and Fire, adapted into the HBO series Game of Thrones.",
  },
  {
    id: 4,
    name: "C.S. Lewis",
    birthYear: 1898,
    deathYear: 1963,
    image: "/authors/C.S. Lewis.webp",
    about:
      "British writer and scholar, author of The Chronicles of Narnia and celebrated works on Christianity.",
  },
  {
    id: 5,
    name: "Frank Herbert",
    birthYear: 1920,
    deathYear: 1986,
    image: "/authors/Frank Herbert.webp",
    about:
      "American science-fiction writer, author of the cult classic Dune and its sequels.",
  },
  {
    id: 6,
    name: "Matt Haig",
    birthYear: 1975,
    image: "/authors/Matt Haig.webp",
    about:
      "British novelist and journalist whose uplifting fiction, including The Midnight Library, has won a worldwide readership.",
  },
  {
    id: 7,
    name: "Fyodor Dostoevsky",
    birthYear: 1821,
    deathYear: 1881,
    image: "/authors/Fyodor Dostoevsky.webp",
    about:
      "Russian writer and thinker, a classic of world literature, author of Crime and Punishment and The Brothers Karamazov.",
  },
  {
    id: 8,
    name: "Leo Tolstoy",
    birthYear: 1828,
    deathYear: 1910,
    image: "/authors/Leo Tolstoy.webp",
    about:
      "Russian writer regarded among the greatest novelists of all time, author of War and Peace and Anna Karenina.",
  },
  {
    id: 9,
    name: "Mikhail Bulgakov",
    birthYear: 1891,
    deathYear: 1940,
    image: "/authors/Mikhail Bulgakov.webp",
    about:
      "Russian writer and playwright, author of the famous novel The Master and Margarita.",
  },
  {
    id: 10,
    name: "Antoine de Saint-Exupery",
    birthYear: 1900,
    deathYear: 1944,
    image: "/authors/Antoine de Saint-Exupery.webp",
    about:
      "French writer and aviator, author of the world-famous tale The Little Prince.",
  },
  {
    id: 11,
    name: "Paulo Coelho",
    birthYear: 1947,
    image: "/authors/Paulo Coelho.webp",
    about:
      "Brazilian novelist whose inspirational story The Alchemist became an international phenomenon.",
  },
  {
    id: 12,
    name: "George Orwell",
    birthYear: 1903,
    deathYear: 1950,
    image: "/authors/George Orwell.webp",
    about:
      "English novelist and essayist, author of the classics 1984 and Animal Farm.",
  },
  {
    id: 13,
    name: "Walter Scott",
    birthYear: 1771,
    deathYear: 1832,
    image: "/authors/Walter Scott.webp",
    about:
      "Scottish writer, pioneer of the historical novel, author of Ivanhoe.",
  },
  {
    id: 14,
    name: "F. Scott Fitzgerald",
    birthYear: 1896,
    deathYear: 1940,
    image: "/authors/F. Scott Fitzgerald.webp",
    about:
      "American novelist of the Jazz Age, best known for The Great Gatsby.",
  },
  {
    id: 15,
    name: "Harper Lee",
    birthYear: 1926,
    deathYear: 2016,
    image: "/authors/Harper Lee.webp",
    about:
      "American novelist whose debut To Kill a Mockingbird became a modern American classic.",
  },
  {
    id: 16,
    name: "Ray Bradbury",
    birthYear: 1920,
    deathYear: 2012,
    image: "/authors/Ray Bradbury.webp",
    about:
      "American writer who shaped modern science fiction, best known for Fahrenheit 451.",
  },
  {
    id: 17,
    name: "Jane Austen",
    birthYear: 1775,
    deathYear: 1817,
    image: "/authors/Jane Austen.webp",
    about:
      "English novelist whose witty portraits of love and society include Pride and Prejudice.",
  },
  {
    id: 18,
    name: "Orhan Pamuk",
    birthYear: 1952,
    image: "/authors/Orhan Pamuk.webp",
    about:
      "Turkish novelist and Nobel laureate whose works explore Istanbul, memory and identity.",
  },
  {
    id: 19,
    name: "Yuval Noah Harari",
    birthYear: 1976,
    image: "/authors/Yuval Noah Harari.webp",
    about:
      "Israeli historian and author of the bestselling Sapiens: A Brief History of Humankind.",
  },
];
