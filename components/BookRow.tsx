import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/data/books";
import {
  getAuthorNameById,
  getBookDescription,
  getBookName,
  getBookSlug,
  getCategoryById,
  getCategoryName,
  getLanguageNameByCode,
} from "@/data/books";
import type { Locale } from "@/data/i18n";

/**
 * Search-result-style row for a book: cover on the left, details on the
 * right. Used on the search page and on author detail pages.
 */
export default function BookRow({
  book,
  lang,
}: {
  book: Book;
  lang: Locale;
}) {
  return (
    <Link
      href={`/${lang}/book/${getBookSlug(book)}`}
      className="flex sm:flex-row flex-col gap-4 sm:gap-6 bg-white hover:shadow-md p-4 sm:p-6 border border-zinc-200 hover:border-zinc-400 rounded-xl transition-all duration-200"
    >
      <Image
        src={book.cover}
        alt={getBookName(book, lang)}
        width={128}
        height={192}
        className="self-center sm:self-start rounded-lg w-24 sm:w-32 h-auto object-cover shrink-0"
      />
      <div className="min-w-0">
        <h2 className="font-semibold text-zinc-900 text-xl sm:text-2xl">
          {getBookName(book, lang)}
        </h2>
        <p className="mt-1 text-zinc-600">
          {getAuthorNameById(book.authorId, lang)} &middot; {book.year}
        </p>
        <p className="mt-3 text-zinc-700 line-clamp-4 leading-relaxed">
          {getBookDescription(book, lang)}
        </p>
        <ul className="flex flex-wrap items-center gap-2 mt-4 text-sm">
          <li className="bg-zinc-50 px-3 py-1 border border-zinc-200 rounded-full font-medium text-zinc-600">
            {getLanguageNameByCode(book.language, lang)}
          </li>
          {book.categoryIds.map((categoryId) => {
            const category = getCategoryById(categoryId);
            if (!category) return null;
            return (
              <li
                key={categoryId}
                className="bg-zinc-50 px-3 py-1 border border-zinc-200 rounded-full font-medium text-zinc-600"
              >
                {getCategoryName(category, lang)}
              </li>
            );
          })}
        </ul>
      </div>
    </Link>
  );
}
