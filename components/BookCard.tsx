import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/data/books";
import { getAuthorName, getBookSlug } from "@/data/books";
import type { Locale } from "@/data/i18n";

interface BookCardProps {
  book: Book;
  lang: Locale;
}

export default function BookCard({ book, lang }: BookCardProps) {
  return (
    <Link
      href={`/${lang}/book/${getBookSlug(book)}`}
      className="group flex flex-col h-full transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative w-40 h-60 bg-zinc-100 border border-zinc-200 group-hover:border-zinc-300 group-hover:shadow-lg rounded-xl overflow-hidden shrink-0 transition-all duration-300">
        <Image
          src={book.poster}
          alt={`Обложка: ${book.name}`}
          fill
          sizes="160px"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="mt-3 font-medium text-zinc-900 group-hover:text-zinc-700 line-clamp-2">
        {book.name}
      </h3>
      <p className="mt-1 text-zinc-500 text-sm line-clamp-1">
        {getAuthorName(book.authorId)}
      </p>
    </Link>
  );
}
