import { NextResponse, type NextRequest } from "next/server";
import { getAuthorName, searchBooks } from "@/data/books";

export function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q") ?? "";
  const results = searchBooks(query, 8).map((book) => ({
    name: book.name,
    author: getAuthorName(book.authorId),
  }));
  return NextResponse.json({ results });
}
