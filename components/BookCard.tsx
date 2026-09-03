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
      className="group flex h-full flex-col"
    >
      <div className="relative aspect-[2/3] w-full shrink-0 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100">
        <Image
          src={book.poster}
          alt={`Обложка: ${book.name}`}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 20vw, 180px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-3 line-clamp-2 font-medium text-zinc-900 group-hover:text-zinc-700">
        {book.name}
      </h3>
      <p className="mt-1 line-clamp-1 text-sm text-zinc-500">{book.author}</p>
    </Link>
  );
}