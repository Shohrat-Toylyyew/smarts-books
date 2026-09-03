import type { Metadata } from "next";
import Link from "next/link";
import {
  books,
  categories,
  getSeries,
  languages,
} from "@/data/books";

export const metadata: Metadata = {
  title: "About — Smarts Books",
  description:
    "Learn more about Smarts Books, a free catalog of books across categories and languages.",
};

const stats = [
  { label: "Books", value: books.length },
  { label: "Categories", value: categories.length },
  { label: "Languages", value: languages.length },
  { label: "Series", value: getSeries().length },
];

export default function AboutPage() {
  return (
    <div className="flex-1 mx-auto px-6 py-16 w-full max-w-7xl">
      <h1 className="font-semibold text-zinc-900 text-4xl sm:text-5xl tracking-tight">
        About
      </h1>
      <p className="mt-4 max-w-2xl text-zinc-600 text-lg">
        Smarts Books is a free online catalog where readers can discover books
        across a wide range of categories — from fiction and history to
        science, technology and fantasy — in Russian, English, Turkmen and
        Turkish.
      </p>

      <ul className="gap-4 grid grid-cols-2 lg:grid-cols-4 mt-10">
        {stats.map((stat) => (
          <li
            key={stat.label}
            className="bg-white p-6 border border-zinc-200 rounded-xl"
          >
            <p className="font-semibold text-zinc-900 text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-zinc-500 text-sm">{stat.label}</p>
          </li>
        ))}
      </ul>

      <section className="mt-12 max-w-2xl">
        <h2 className="font-semibold text-zinc-900 text-2xl tracking-tight">
          Our mission
        </h2>
        <p className="mt-3 text-zinc-600">
          We believe good books should be easy to find. Smarts Books brings
          popular titles together in one place, organized by category, series
          and language, so you can spend less time searching and more time
          reading.
        </p>
      </section>

      <section className="mt-12 max-w-2xl">
        <h2 className="font-semibold text-zinc-900 text-2xl tracking-tight">
          What you can do
        </h2>
        <ul className="space-y-3 mt-3 text-zinc-600 list-disc pl-5">
          <li>
            Browse the catalog by category on the{" "}
            <Link
              href="/categories"
              className="text-zinc-900 underline underline-offset-4 hover:text-zinc-600 transition-colors"
            >
              Categories
            </Link>{" "}
            page.
          </li>
          <li>
            Open a book to read its synopsis, learn about the author and find
            a download link.
          </li>
          <li>Follow series to read books in the right order.</li>
          <li>Filter by language: Russian, English, Turkmen or Turkish.</li>
        </ul>
      </section>

      <section className="mt-12 max-w-2xl">
        <h2 className="font-semibold text-zinc-900 text-2xl tracking-tight">
          Have a question?
        </h2>
        <p className="mt-3 text-zinc-600">
          We are happy to hear from readers. Visit our{" "}
          <Link
            href="/contacts"
            className="text-zinc-900 underline underline-offset-4 hover:text-zinc-600 transition-colors"
          >
            contacts page
          </Link>{" "}
          to get in touch with us.
        </p>
      </section>
    </div>
  );
}
