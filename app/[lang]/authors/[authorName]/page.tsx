import {
  getDictionary,
  isLocale,
  defaultLocale,
  type Locale,
} from "@/data/i18n";
import {
  getAuthors,
  getAuthorBySlug,
  getAuthorSlug,
  getBooksByAuthor,
} from "@/data/books";
import TitlePage from "@/components/TitlePage";
import BookRow from "@/components/BookRow";

interface PageProps {
  params: Promise<{ lang: string; authorName: string }>;
}

export default async function AuthorPage({ params }: PageProps) {
  const { lang: rawLang, authorName } = await params;
  const lang: Locale = isLocale(rawLang) ? rawLang : defaultLocale;
  const dict = getDictionary(lang);
  const author = getAuthorBySlug(decodeURIComponent(authorName));

  if (!author) {
    return (
      <div className="flex-1 mx-auto px-4 sm:px-6 py-10 sm:py-16 w-full max-w-7xl">
        <TitlePage title={dict.search.noResults} />
      </div>
    );
  }

  const authorBooks = getBooksByAuthor(author.id);

  return (
    <div className="flex-1 mx-auto px-4 sm:px-6 py-10 sm:py-16 w-full max-w-7xl">
      <TitlePage title={author.name} />

      {/* Author info */}
      <ul className="flex flex-wrap items-center gap-2 mt-4 text-sm">
        <li className="bg-zinc-50 px-3 py-1 border border-zinc-200 rounded-full font-medium text-zinc-600">
          {dict.author.born}: {author.birthYear}
        </li>
        {author.deathYear && (
          <li className="bg-zinc-50 px-3 py-1 border border-zinc-200 rounded-full font-medium text-zinc-600">
            {dict.author.died}: {author.deathYear}
          </li>
        )}
        <li className="bg-zinc-50 px-3 py-1 border border-zinc-200 rounded-full font-medium text-zinc-600">
          {authorBooks.length}{" "}
          {authorBooks.length === 1
            ? dict.author.booksOne
            : dict.author.booksMany}
        </li>
      </ul>
      <p className="mt-4 max-w-3xl text-zinc-700 leading-relaxed">
        {author.about}
      </p>

      {/* Books by this author — same row style as the search results */}
      <h2 className="mt-10 font-semibold text-zinc-900 text-2xl sm:text-3xl tracking-tight">
        {dict.author.books}
      </h2>
      <div className="flex flex-col gap-4 mt-4">
        {authorBooks.map((book) => (
          <BookRow key={book.id} book={book} lang={lang} dict={dict} />
        ))}
      </div>
    </div>
  );
}

/** Prebuilds every author page for every locale at build time. */
export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ru" }, { lang: "tr" }, { lang: "tk" }].flatMap(
    (lang) =>
      getAuthors().map((author) => ({
        lang: lang.lang,
        authorName: getAuthorSlug(author.name),
      })),
  );
}
