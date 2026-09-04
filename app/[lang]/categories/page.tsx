import { categories, getBooksByCategory, slugify } from "@/data/books";
import Link from "next/link";
import {
  defaultLocale,
  getDictionary,
  isLocale,
  type Locale,
} from "@/data/i18n";
import TitlePage from "@/components/TitlePage";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function CategoriesPage({ params }: PageProps) {
  const { lang: rawLang } = await params;
  const lang: Locale = isLocale(rawLang) ? rawLang : defaultLocale;
  const dict = getDictionary(lang);

  return (
    <div className="flex-1 mx-auto px-4 sm:px-6 py-10 sm:py-16 w-full max-w-7xl">
      <TitlePage
        title={dict.categories.title}
        subtitle={dict.categories.subtitle}
      />

      <ul className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {categories.map((category) => {
          const count = getBooksByCategory(category).length;
          return (
            <li
              key={category}
              className="bg-white hover:shadow-md p-6 border border-zinc-200 hover:border-zinc-400 rounded-xl transition-all hover:-translate-y-0.5 duration-200"
            >
              <Link
                href={`/${lang}/categories/${slugify(category)}`}
                className="flex justify-between"
              >
                <h2 className="font-medium text-zinc-900 text-lg">
                  {dict.categoryNames[category]}
                </h2>
                <span className="text-zinc-600">{count}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
