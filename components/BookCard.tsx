import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/data/books";
import { getBookSlug } from "@/data/books";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <Link
      href={`/book/${getBookSlug(book)}`}
      className="group flex flex-col h-full"
    >
      <div className="relative w-40 h-60 bg-zinc-100 border border-zinc-200 rounded-xl overflow-hidden shrink-0">
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
      <p className="mt-1 text-zinc-500 text-sm line-clamp-1">{book.author}</p>
    </Link>
  );
}
