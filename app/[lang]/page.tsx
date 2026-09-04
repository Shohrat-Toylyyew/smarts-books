import { categories, getBooksByCategory, slugify } from "@/data/books";
import BookSwiper from "@/components/BookSwiper";
import Link from "next/link";
import {
  defaultLocale,
  getDictionary,
  isLocale,
  type Locale,
} from "@/data/i18n";

const MAX_BOOKS_PER_CATEGORY = 20;

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function Home({ params }: PageProps) {
  const { lang: rawLang } = await params;
  const lang: Locale = isLocale(rawLang) ? rawLang : defaultLocale;
  const dict = getDictionary(lang);

  return (
    <div className="flex-1 mx-auto px-4 sm:px-6 py-8 sm:py-10 w-full max-w-7xl">
      {categories.map((category) => {
        const categoryBooks = getBooksByCategory(category);
        const shownBooks = categoryBooks.slice(0, MAX_BOOKS_PER_CATEGORY);
        const showMore = categoryBooks.length > MAX_BOOKS_PER_CATEGORY;

        if (categoryBooks.length > 0) {
          return (
            <section
              key={category}
              className="flex flex-col gap-4 mt-10 first:mt-0"
            >
              <Link
                href={`/${lang}/categories/${slugify(category)}`}
                className="after:bottom-0 after:absolute relative after:inset-x-0 after:bg-zinc-900 w-max after:h-1 font-bold text-zinc-900 text-3xl tracking-tight after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
              >
                {dict.categoryNames[category]}
              </Link>
              <BookSwiper
                category={category}
                books={shownBooks}
                totalCount={categoryBooks.length}
                showMore={showMore}
                lang={lang}
                dict={dict}
              />
            </section>
          );
        }
      })}
    </div>
  );
}
