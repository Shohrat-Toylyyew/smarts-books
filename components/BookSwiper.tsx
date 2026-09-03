"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
// Core + specific module styles for a horizontal, free-drag carousel.
import "swiper/css";
import "swiper/css/free-mode";
import type { Book } from "@/data/books";
import { slugify } from "@/data/books";
import BookCard from "./BookCard";

interface BookSwiperProps {
  category: string;
  books: Book[];
  /** Total number of books in this category (to label the Show More tile). */
  totalCount: number;
  /** Whether to render the Show More tile (false when ≤ 8 books). */
  showMore: boolean;
}

export default function BookSwiper({
  category,
  books,
  totalCount,
  showMore,
}: BookSwiperProps) {
  return (
    <Swiper
      modules={[FreeMode, Mousewheel]}
      slidesPerView="auto"
      freeMode
      mousewheel={{ forceToAxis: true }}
      className="px-1! py-1!"
    >
      {books.map((book) => (
        <SwiperSlide
          key={book.name}
          style={{ width: "160px" }}
          className="mr-4 h-auto!"
        >
          <BookCard book={book} />
        </SwiperSlide>
      ))}

      {showMore && (
        <SwiperSlide style={{ width: "160px" }} className="h-auto!">
          <Link
            href={`/categories/${slugify(category)}`}
            className="group flex flex-col justify-center items-center gap-2 bg-zinc-900/45 hover:bg-zinc-900/65 backdrop-blur-sm border border-zinc-200 rounded-xl w-40 h-60 text-white text-center transition-all duration-300 hover:scale-105"
          >
            <span className="font-semibold text-lg">Show more</span>
            <span className="text-white/75 text-sm">
              {totalCount - books.length} more
            </span>
            <span className="mt-1 text-xl transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </SwiperSlide>
      )}
    </Swiper>
  );
}
