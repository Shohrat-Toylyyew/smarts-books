import { categories, getBooksByCategory } from "@/data/books";
import BookSwiper from "@/components/BookSwiper";
import Link from "next/link";
import { slugify } from "@/data/books";

const MAX_BOOKS_PER_CATEGORY = 20;

export default function Home() {
  return (
    <div className="flex-1 mx-auto px-4 sm:px-6 py-8 sm:py-10 w-full max-w-7xl">
      {categories.map((category) => {
        const categoryBooks = getBooksByCategory(category);
        const shownBooks = categoryBooks.slice(0, MAX_BOOKS_PER_CATEGORY);
        const showMore = categoryBooks.length > MAX_BOOKS_PER_CATEGORY;

        if (categoryBooks.length > 0) {
          return (
            <section key={category} className="mt-10 first:mt-0">
              <Link
                href={`/categories/${slugify(category)}`}
                className="mb-4 font-bold text-zinc-900 text-3xl tracking-tight"
              >
                {category}
              </Link>
              <BookSwiper
                category={category}
                books={shownBooks}
                totalCount={categoryBooks.length}
                showMore={showMore}
              />
            </section>
          );
        }
      })}
    </div>
  );
}
