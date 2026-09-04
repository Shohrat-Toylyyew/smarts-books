import ContactForm from "./ContactForm";
import {
  defaultLocale,
  getDictionary,
  isLocale,
  type Locale,
} from "@/data/i18n";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function ContactsPage({ params }: PageProps) {
  const { lang: rawLang } = await params;
  const lang: Locale = isLocale(rawLang) ? rawLang : defaultLocale;
  const dict = getDictionary(lang);

  const contactDetails = [
    {
      label: dict.contacts.email,
      value: "toyliyevshohrat@gmail.com",
      href: "mailto:toyliyevshohrat@gmail.com",
    },
    {
      label: dict.contacts.phone,
      value: "+993 62 54 59 84",
      href: "tel:+99362545984",
    },
    {
      label: dict.contacts.address,
      value: "Dashoguz, Turkmenistan",
      href: null,
    },
  ];

  return (
    <div className="flex-1 mx-auto px-4 sm:px-6 py-10 sm:py-16 w-full max-w-7xl">
      <h1 className="font-semibold text-zinc-900 text-3xl sm:text-5xl tracking-tight">
        {dict.contacts.title}
      </h1>
      <p className="mt-4 text-zinc-600 text-lg">
        {dict.contacts.subtitle}
      </p>

      <div className="gap-6 grid grid-cols-1 lg:grid-cols-2 mt-10">
        <div>
          <ul className="space-y-4">
            {contactDetails.map((detail) => (
              <li
                key={detail.label}
                className="bg-white p-6 border border-zinc-200 rounded-xl"
              >
                <p className="text-zinc-500 text-sm">{detail.label}</p>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="inline-block mt-1 font-medium text-zinc-900 hover:text-zinc-600 transition-colors"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="mt-1 font-medium text-zinc-900">
                    {detail.value}
                  </p>
                )}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-zinc-500 text-sm">{dict.contacts.replyNote}</p>
        </div>

        <ContactForm dict={dict.contacts} />
      </div>
    </div>
  );
}
