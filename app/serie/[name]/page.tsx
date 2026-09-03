import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getSeries, getSeriesBySlug, getSeriesSlug, getBookSlug } from "@/data/books";

export const dynamicParams = true;

interface PageProps {
  params: Promise<{ name: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
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
    <div className="mx-auto w-full max-w-5xl flex-1 px-6 py-16">
      <Link
        href="/"
        className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
      >
        &larr; Back to home
      </Link>

      <h1 className="mt-8 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
        {series.name}
      </h1>
      <p className="mt-4 text-lg text-zinc-600">
        {series.books.length}{" "}
        {series.books.length === 1 ? "book" : "books"} in this series.
      </p>

      <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {series.books.map((book) => (
          <li key={book.name}>
            <Link
              href={`/book/${getBookSlug(book)}`}
              className="group block rounded-xl border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-400"
            >
              <div className="flex items-start gap-4">
                <div className="relative aspect-[2/3] w-16 shrink-0 overflow-hidden rounded-lg bg-zinc-100">
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
                  <p className="mt-1 text-sm text-zinc-500">
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