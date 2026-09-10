import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getSeries,
  getSeriesBySlug,
  getSeriesName,
  getSeriesSlug,
  getBookName,
  getBookSlug,
  getAuthorNameById,
} from "@/data/books";
import {
  defaultLocale,
  getDictionary,
  isLocale,
  type Locale,
} from "@/data/i18n";
import TitlePage from "@/components/TitlePage";

export const dynamicParams = true;

interface PageProps {
  params: Promise<{ lang: string; name: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang: rawLang, name } = await params;
  const lang: Locale = isLocale(rawLang) ? rawLang : defaultLocale;
  const series = getSeriesBySlug(name);
  if (!series) return { title: "Series not found" };
  return {
    title: `${getSeriesName(series, lang)} - Smarts Books`,
    description: `${getSeriesName(series, lang)}: ${series.books.length}`,
  };
}

export function generateStaticParams() {
  return getSeries().map((serie) => ({ name: getSeriesSlug(serie) }));
}

export default async function SeriesPage({ params }: PageProps) {
  const { lang: rawLang, name } = await params;
  const lang: Locale = isLocale(rawLang) ? rawLang : defaultLocale;
  const dict = getDictionary(lang);
  const series = getSeriesBySlug(name);

  if (!series) notFound();

  const seriesName = getSeriesName(series, lang);

  const bookCountText =
    series.books.length === 1 ? dict.serie.booksOne : dict.serie.booksMany;

  const subtitle = `${series.books.length} ${bookCountText}`;

  return (
    <div className="flex-1 mx-auto px-4 sm:px-6 py-10 sm:py-16 w-full max-w-7xl">
      <Link
        href={`/${lang}`}
        className="font-medium text-zinc-500 hover:text-zinc-900 text-sm transition-colors"
      >
        &larr; {dict.serie.back}
      </Link>

      <div className="mt-10">
        <TitlePage title={seriesName} subtitle={subtitle} />
      </div>

      <ul className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {series.books.map((book) => (
          <li key={book.id}>
            <Link
              href={`/${lang}/book/${getBookSlug(book)}`}
              className="group block bg-white hover:shadow-md p-6 border border-zinc-200 hover:border-zinc-400 rounded-xl transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="relative bg-zinc-100 rounded-lg w-16 aspect-[2/3] overflow-hidden shrink-0">
                  <Image
                    src={book.cover}
                    alt={getBookName(book, lang)}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h2 className="font-medium text-zinc-900 group-hover:underline">
                    {getBookName(book, lang)}
                  </h2>
                  <p className="mt-1 text-zinc-500 text-sm">
                    {getAuthorNameById(book.authorId, lang)} &middot;{" "}
                    {book.year}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
