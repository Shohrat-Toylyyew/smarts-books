import { NextResponse, type NextRequest } from "next/server";
import { getAuthorNameById, getBookName, searchBooks } from "@/data/books";
import { defaultLocale, isLocale } from "@/data/i18n";

export function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q") ?? "";
  const langParam = request.nextUrl.searchParams.get("lang") ?? "";
  const lang = isLocale(langParam) ? langParam : defaultLocale;
  const results = searchBooks(query, 8).map((book) => ({
    name: getBookName(book, lang),
    author: getAuthorNameById(book.authorId, lang),
  }));
  return NextResponse.json({ results });
}
