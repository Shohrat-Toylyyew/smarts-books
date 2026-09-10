import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/data/books";
import {
  getAuthorNameById,
  getBookName,
  getBookSlug,
} from "@/data/books";
import type { Locale } from "@/data/i18n";

interface BookCardProps {
  book: Book;
  lang: Locale;
}

export default function BookCard({ book, lang }: BookCardProps) {
  const name = getBookName(book, lang);
  return (
    <Link
      href={`/${lang}/book/${getBookSlug(book)}`}
      className="group flex flex-col h-full transition-transform hover:-translate-y-1 duration-300"
    >
      <div className="relative bg-zinc-100 group-hover:shadow-lg border border-zinc-200 group-hover:border-zinc-300 rounded-xl w-40 h-60 overflow-hidden transition-all duration-300 shrink-0">
        <Image
          src={book.cover}
          alt={name}
          fill
          sizes="160px"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="mt-3 font-medium text-zinc-900 group-hover:text-zinc-700 line-clamp-2">
        {name}
      </h3>
      <p className="mt-1 text-zinc-500 text-sm line-clamp-1">
        {getAuthorNameById(book.authorId, lang)}
      </p>
    </Link>
  );
}
