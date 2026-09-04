import Image from "next/image";
import Link from "next/link";
import {
  getDictionary,
  isLocale,
  defaultLocale,
  type Locale,
} from "@/data/i18n";
import { getAuthors, getAuthorSlug } from "@/data/books";
import TitlePage from "@/components/TitlePage";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function AuthorsPage({ params }: PageProps) {
  const { lang: rawLang } = await params;
  const lang: Locale = isLocale(rawLang) ? rawLang : defaultLocale;
  const dict = getDictionary(lang);
  const authorList = getAuthors();

  return (
    <div className="flex-1 mx-auto px-4 sm:px-6 py-10 sm:py-16 w-full max-w-7xl">
      <TitlePage title={dict.authors.title} subtitle={dict.authors.subtitle} />

      {/* Authors grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
        {authorList.map((author) => (
          <Link
            key={author.name}
            href={`/${lang}/authors/${getAuthorSlug(author.name)}`}
            className="flex flex-col items-center bg-white hover:shadow-md p-4 sm:p-6 border border-zinc-200 hover:border-zinc-400 rounded-xl transition-all duration-200"
          >
            {author.image ? (
              <Image
                src={author.image}
                alt={author.name}
                width={112}
                height={112}
                className="rounded-full w-20 h-20 sm:w-28 sm:h-28 object-cover"
              />
            ) : (
              <div className="flex items-center justify-center bg-zinc-100 rounded-full w-20 h-20 sm:w-28 sm:h-28 font-semibold text-zinc-400 text-xl sm:text-2xl select-none">
                {getAuthorInitials(author.name)}
              </div>
            )}
            <h2 className="mt-4 text-center font-medium text-zinc-900 text-base sm:text-lg leading-snug">
              {author.name}
            </h2>
            <p className="mt-1 text-sm text-zinc-500">
              {author.bookCount}{" "}
              {author.bookCount === 1
                ? dict.author.booksOne
                : dict.author.booksMany}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

/** First letters of the name parts, e.g. "J.K. Rowling" -> "JR". */
function getAuthorInitials(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);
}
