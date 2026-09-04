import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBooksByCategory, getCategoryBySlug } from "@/data/books";
import BookCard from "@/components/BookCard";
import { defaultLocale, getDictionary, isLocale, type Locale } from "@/data/i18n";

interface PageProps {
  params: Promise<{ lang: string; categoryName: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang: rawLang, categoryName } = await params;
  const lang: Locale = isLocale(rawLang) ? rawLang : defaultLocale;
  const category = getCategoryBySlug(categoryName);
  if (!category) return { title: "Not found - Smarts Books" };
  const dict = getDictionary(lang);
  return { title: `${dict.categoryNames[category]} - Smarts Books` };
}

export default async function CategoryBooksPage({ params }: PageProps) {
  const { lang: rawLang, categoryName } = await params;
  const lang: Locale = isLocale(rawLang) ? rawLang : defaultLocale;
  const dict = getDictionary(lang);
  const category = getCategoryBySlug(categoryName);

  if (!category) notFound();

  const categoryBooks = getBooksByCategory(category);

  return (
    <div className="mx-auto w-full flex-1 max-w-7xl px-4 sm:px-6 py-10 sm:py-16">
      <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-900">
        {dict.categoryNames[category]}
      </h1>
      <p className="mt-4 text-lg text-zinc-600">
        {categoryBooks.length}{" "}
        {categoryBooks.length === 1
          ? dict.category.booksInCategoryOne
          : dict.category.booksInCategoryMany}
      </p>

      <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {categoryBooks.map((book) => (
          <li key={book.name}>
            <BookCard book={book} lang={lang} />
          </li>
        ))}
      </ul>
    </div>
  );
}