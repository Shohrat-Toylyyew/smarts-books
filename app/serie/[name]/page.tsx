import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getSeries,
  getSeriesBySlug,
  getSeriesSlug,
  getBookSlug,
} from "@/data/books";

export const dynamicParams = true;

interface PageProps {
  params: Promise<{ name: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { name } = await params;
  const series = getSeriesBySlug(name);
  if (!series) return { title: "Series not found" };
  return {
    title: `${series.name} Series - Smarts Books`,
    description: `${series.name} series with ${series.books.length} books.`,
  };
}

export function generateStaticParams() {
  return getSeries().map((series) => ({ name: getSeriesSlug(series.name) }));
}

export default async function SeriesPage({ params }: PageProps) {
  const { name } = await params;
  const series = getSeriesBySlug(name);

  if (!series) notFound();

  return (
    <div className="flex-1 mx-auto px-6 py-16 w-full max-w-7xl">
      <Link
        href="/"
        className="font-medium text-zinc-500 hover:text-zinc-900 text-sm transition-colors"
      >
        &larr; Back to home
      </Link>

      <h1 className="mt-8 font-semibold text-zinc-900 text-4xl sm:text-5xl tracking-tight">
        {series.name}
      </h1>
      <p className="mt-4 text-zinc-600 text-lg">
        {series.books.length} {series.books.length === 1 ? "book" : "books"} in
        this series.
      </p>

      <ul className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {series.books.map((book) => (
          <li key={book.name}>
            <Link
              href={`/book/${getBookSlug(book)}`}
              className="group block bg-white p-6 border border-zinc-200 hover:border-zinc-400 rounded-xl transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="relative bg-zinc-100 rounded-lg w-16 aspect-[2/3] overflow-hidden shrink-0">
                  <Image
                    src={book.poster}
                    alt={`Cover of ${book.name}`}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h2 className="font-medium text-zinc-900 group-hover:underline">
                    {book.name}
                  </h2>
                  <p className="mt-1 text-zinc-500 text-sm">
                    {book.author} &middot; {book.year}
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
