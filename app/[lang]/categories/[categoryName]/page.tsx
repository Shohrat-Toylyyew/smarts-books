import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBooksByCategory, getCategoryBySlug } from "@/data/books";
import BookCard from "@/components/BookCard";

interface PageProps {
  params: Promise<{ categoryName: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { categoryName } = await params;
  const category = getCategoryBySlug(categoryName);
  if (!category) return { title: "Категория не найдена" };
  return { title: `${category} - Smarts Books` };
}

export default async function CategoryBooksPage({ params }: PageProps) {
  const { categoryName } = await params;
  const category = getCategoryBySlug(categoryName);

  if (!category) notFound();

  const categoryBooks = getBooksByCategory(category);

  return (
    <div className="mx-auto w-full flex-1 max-w-7xl px-4 sm:px-6 py-10 sm:py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
        {category}
      </h1>
      <p className="mt-4 text-lg text-zinc-600">
        {categoryBooks.length}{" "}
        {categoryBooks.length === 1 ? "книга" : "книг"} в категории
      </p>

      <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {categoryBooks.map((book) => (
          <li key={book.name}>
            <BookCard book={book} />
          </li>
        ))}
      </ul>
    </div>
  );
}