import Image from "next/image";
import Link from "next/link";
import {
  getDictionary,
  isLocale,
  defaultLocale,
  type Locale,
} from "@/data/i18n";
import { getBookSlug, searchBooks } from "@/data/books";
import type { Book } from "@/data/books";
import TitlePage from "@/components/TitlePage";

interface PageProps {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ params, searchParams }: PageProps) {
  const { lang: rawLang } = await params;
  const { q } = await searchParams;
  const lang: Locale = isLocale(rawLang) ? rawLang : defaultLocale;
  const dict = getDictionary(lang);

  const results = q ? searchBooks(q) : [];

  return (
    <div className="flex-1 mx-auto px-4 sm:px-6 py-10 sm:py-16 w-full max-w-7xl">
      <TitlePage title={dict.search.title} />

      {q && <p className="mt-3 text-zinc-500 text-lg">&laquo;{q}&raquo;</p>}

      {/* Results — most relevant first, all in the same row style */}
      <div className="flex flex-col gap-4 mt-8">
        {results.map((book) => (
          <ResultRow key={book.id} book={book} lang={lang} dict={dict} />
        ))}
      </div>

      {q && results.length === 0 && (
        <p className="mt-8 text-zinc-500 text-lg">{dict.search.noResults}</p>
      )}
    </div>
  );
}

function ResultRow({
  book,
  lang,
  dict,
}: {
  book: Book;
  lang: Locale;
  dict: ReturnType<typeof getDictionary>;
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
          {book.author} &middot; {book.year}
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

