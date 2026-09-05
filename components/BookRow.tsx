import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/data/books";
import { getAuthorName, getBookSlug } from "@/data/books";
import type { Dictionary, Locale } from "@/data/i18n";

/**
 * Search-result-style row for a book: poster on the left, details on the
 * right. Used on the search page and on author detail pages.
 */
export default function BookRow({
  book,
  lang,
  dict,
}: {
  book: Book;
  lang: Locale;
  dict: Dictionary;
}) {
  return (
    <Link
      href={`/${lang}/book/${getBookSlug(book)}`}
      className="flex sm:flex-row flex-col gap-4 sm:gap-6 bg-white hover:shadow-md p-4 sm:p-6 border border-zinc-200 hover:border-zinc-400 rounded-xl transition-all duration-200"
    >
      <Image
        src={book.poster}
        alt={book.name}
        width={128}
        height={192}
        className="self-center sm:self-start rounded-lg w-24 sm:w-32 h-auto object-cover shrink-0"
      />
      <div className="min-w-0">
        <h2 className="font-semibold text-zinc-900 text-xl sm:text-2xl">
          {book.name}
        </h2>
        <p className="mt-1 text-zinc-600">
          {getAuthorName(book.authorId)} &middot; {book.year}
        </p>
        <p className="mt-3 text-zinc-700 line-clamp-4 leading-relaxed">
          {book.description}
        </p>
        <ul className="flex flex-wrap items-center gap-2 mt-4 text-sm">
          <li className="bg-zinc-50 px-3 py-1 border border-zinc-200 rounded-full font-medium text-zinc-600">
            {dict.languageNames[book.language]}
          </li>
          {book.categories.map((category) => (
            <li
              key={category}
              className="bg-zinc-50 px-3 py-1 border border-zinc-200 rounded-full font-medium text-zinc-600"
            >
              {dict.categoryNames[category]}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}