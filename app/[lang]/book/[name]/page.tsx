import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  books,
  getBookBySlug,
  getBookDescription,
  getBookName,
  getBookSlug,
  getSeriesById,
  getSeriesName,
  getSeriesSlug,
  getAuthorNameById,
  getCategoryById,
  getCategoryName,
  getLanguageNameByCode,
} from "@/data/books";
import {
  defaultLocale,
  getDictionary,
  isLocale,
  type Locale,
} from "@/data/i18n";

export const dynamicParams = true;

interface PageProps {
  params: Promise<{ lang: string; name: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang: rawLang, name } = await params;
  const lang: Locale = isLocale(rawLang) ? rawLang : defaultLocale;
  const book = getBookBySlug(name);
  if (!book) return { title: "Book not found" };
  return {
    title: `${getBookName(book, lang)} - Smarts Books`,
    description: getBookDescription(book, lang),
  };
}

export function generateStaticParams() {
  return books.map((book) => ({ name: getBookSlug(book) }));
}

export default async function BookPage({ params }: PageProps) {
  const { lang: rawLang, name } = await params;
  const lang: Locale = isLocale(rawLang) ? rawLang : defaultLocale;
  const dict = getDictionary(lang);
  const book = getBookBySlug(name);

  if (!book) notFound();

  const bookName = getBookName(book, lang);
  const serie = book.serieId ? getSeriesById(book.serieId) : undefined;

  return (
    <div className="flex-1 mx-auto px-4 sm:px-6 py-10 sm:py-16 w-full max-w-7xl">
      <Link
        href={`/${lang}`}
        className="font-medium text-zinc-500 hover:text-zinc-900 text-sm transition-colors"
      >
        &larr; {dict.book.back}
      </Link>

      <div className="flex sm:flex-row flex-col gap-6 sm:gap-10 mt-6 sm:mt-8">
        <div className="relative bg-zinc-100 mx-auto sm:mx-0 border border-zinc-200 rounded-xl w-48 sm:w-72 aspect-2/3 overflow-hidden shrink-0">
          <Image
            src={book.cover}
            alt={bookName}
            fill
            sizes="(min-width: 640px) 288px, 192px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col min-w-0">
          <h1 className="font-semibold text-zinc-900 text-3xl sm:text-5xl tracking-tight">
            {bookName}
          </h1>
          <p className="mt-3 text-zinc-600 text-lg">
            {getAuthorNameById(book.authorId, lang)} &middot; {book.year}
          </p>

          <p className="mt-6 text-zinc-700 text-lg leading-relaxed">
            {getBookDescription(book, lang)}
          </p>

          <ul className="flex flex-wrap items-center gap-2 mt-6 text-sm">
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
            <li className="bg-zinc-50 px-3 py-1 border border-zinc-200 rounded-full font-medium text-zinc-600">
              {getLanguageNameByCode(book.language, lang)}
            </li>
          </ul>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href={book.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center bg-zinc-900 hover:bg-zinc-700 hover:shadow-md px-6 rounded-full h-12 font-medium text-white active:scale-95 transition-all duration-200"
            >
              {dict.book.download}
            </a>
            {serie ? (
              <Link
                href={`/${lang}/serie/${getSeriesSlug(serie)}`}
                className="inline-flex justify-center items-center hover:bg-zinc-50 px-6 border border-zinc-200 hover:border-zinc-400 rounded-full h-12 font-medium text-zinc-900 active:scale-95 transition-all duration-200"
              >
                {dict.book.partOf} {getSeriesName(serie, lang)}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
