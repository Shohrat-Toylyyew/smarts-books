import {
  getDictionary,
  isLocale,
  defaultLocale,
  type Locale,
} from "@/data/i18n";
import { searchBooks } from "@/data/books";
import TitlePage from "@/components/TitlePage";
import BookRow from "@/components/BookRow";

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
          <BookRow key={book.id} book={book} lang={lang} dict={dict} />
        ))}
      </div>

      {q && results.length === 0 && (
        <p className="mt-8 text-zinc-500 text-lg">{dict.search.noResults}</p>
      )}
    </div>
  );
}

