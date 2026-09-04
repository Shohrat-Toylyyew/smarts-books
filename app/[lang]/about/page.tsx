import Link from "next/link";
import { books, categories, getSeries, languages } from "@/data/books";
import {
  defaultLocale,
  getDictionary,
  isLocale,
  type Locale,
} from "@/data/i18n";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function AboutPage({ params }: PageProps) {
  const { lang: rawLang } = await params;
  const lang: Locale = isLocale(rawLang) ? rawLang : defaultLocale;
  const dict = getDictionary(lang);

  const stats = [
    { label: dict.about.books, value: books.length },
    { label: dict.about.categories, value: categories.length },
    { label: dict.about.languages, value: languages.length },
    { label: dict.about.series, value: getSeries().length },
  ];

  return (
    <div className="flex-1 mx-auto px-4 sm:px-6 py-10 sm:py-16 w-full max-w-7xl">
      <h1 className="font-semibold text-zinc-900 text-3xl sm:text-5xl tracking-tight">
        {dict.about.title}
      </h1>
      <p className="mt-4 max-w-2xl text-zinc-600 text-lg">
        {dict.about.intro}
      </p>

      <ul className="gap-4 grid grid-cols-2 sm:grid-cols-4 mt-10">
        {stats.map((stat) => (
          <li
            key={stat.label}
            className="bg-white p-6 border border-zinc-200 rounded-xl"
          >
            <p className="font-semibold text-zinc-900 text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-zinc-500 text-sm">{stat.label}</p>
          </li>
        ))}
      </ul>

      <section className="mt-12 max-w-2xl">
        <h2 className="font-semibold text-zinc-900 text-2xl tracking-tight">
          {dict.about.missionTitle}
        </h2>
        <p className="mt-3 text-zinc-600">
          {dict.about.mission}
        </p>
      </section>

      <section className="mt-12 max-w-2xl">
        <h2 className="font-semibold text-zinc-900 text-2xl tracking-tight">
          {dict.about.canDoTitle}
        </h2>
        <ul className="space-y-3 mt-3 text-zinc-600 list-disc pl-5">
          {dict.about.canDo.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12 max-w-2xl">
        <h2 className="font-semibold text-zinc-900 text-2xl tracking-tight">
          {dict.about.questionTitle}
        </h2>
        <p className="mt-3 text-zinc-600">
          {dict.about.question.split(dict.about.contactsLink)[0]}
          <Link
            href={`/${lang}/contacts`}
            className="text-zinc-900 underline underline-offset-4 hover:text-zinc-600 transition-colors"
          >
            {dict.about.contactsLink}
          </Link>
          {dict.about.question.split(dict.about.contactsLink)[1] ?? ""}
        </p>
      </section>
    </div>
  );
}
