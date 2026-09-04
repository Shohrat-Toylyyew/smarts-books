import type { Category, Language } from "./books";

export const locales = ["en", "ru", "tr", "tk"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export type Dictionary = {
  nav: { home: string; categories: string; about: string; contacts: string };
  /** Localized display names for every category (keys are the English names). */
  categoryNames: Record<Category, string>;
  /** Localized display names for every book language (keys are the English names). */
  languageNames: Record<Language, string>;
  home: { showMore: string; more: string };
  categories: { title: string; subtitle: string };
  category: { booksInCategoryOne: string; booksInCategoryMany: string };
  book: { back: string; download: string; partOf: string };
  serie: { back: string; booksOne: string; booksMany: string };
  about: {
    title: string;
    intro: string;
    books: string;
    categories: string;
    languages: string;
    series: string;
    missionTitle: string;
    mission: string;
    canDoTitle: string;
    canDo: string[];
    questionTitle: string;
    question: string;
    categoriesLink: string;
    contactsLink: string;
  };
  contacts: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    address: string;
    addressValue: string;
    replyNote: string;
    formTitle: string;
    name: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
  };
  footer: string;
};

const en: Dictionary = {
  nav: {
    home: "Home",
    categories: "Categories",
    about: "About",
    contacts: "Contacts",
  },
  home: { showMore: "Show more", more: "more" },
  categoryNames: {
    Fiction: "Fiction",
    "Non-Fiction": "Non-Fiction",
    Science: "Science",
    Technology: "Technology",
    History: "History",
    Biography: "Biography",
    Fantasy: "Fantasy",
    Mystery: "Mystery",
  },
  languageNames: {
    Russian: "Russian",
    English: "English",
    Turkish: "Turkish",
  },
  categories: {
    title: "Categories",
    subtitle: "Explore books by category and find the perfect read for you.",
  },
  category: {
    booksInCategoryOne: "book in category",
    booksInCategoryMany: "books in category",
  },
  book: { back: "Back to home", download: "Download", partOf: "Part of" },
  serie: {
    back: "Back to home",
    booksOne: "book in this series.",
    booksMany: "books in this series.",
  },
  about: {
    title: "About",
    intro:
      "Smarts Books is a free online catalog where readers can discover books across a wide range of categories — from fiction and history to science, technology and fantasy — in Russian, English, Turkmen and Turkish.",
    books: "Books",
    categories: "Categories",
    languages: "Languages",
    series: "Series",
    missionTitle: "Our mission",
    mission:
      "We believe good books should be easy to find. Smarts Books brings popular titles together in one place, organized by category, series and language, so you can spend less time searching and more time reading.",
    canDoTitle: "What you can do",
    canDo: [
      "Browse the catalog by category on the Categories page.",
      "Open a book to read its synopsis, learn about the author and find a download link.",
      "Follow series to read books in the right order.",
      "Filter by language: Russian, English, Turkmen or Turkish.",
    ],
    questionTitle: "Have a question?",
    question:
      "We are happy to hear from readers. Visit our contacts page to get in touch with us.",
    categoriesLink: "Categories",
    contactsLink: "contacts page",
  },
  contacts: {
    title: "Contacts",
    subtitle:
      "Questions, suggestions or found a bug? We would love to hear from you.",
    email: "Email",
    phone: "Phone",
    address: "Address",
    addressValue: "Ashgabat, Turkmenistan",
    replyNote: "We usually reply within 1–2 business days.",
    formTitle: "Send us a message",
    name: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    message: "Message",
    messagePlaceholder: "How can we help?",
    send: "Send message",
  },
  footer: "Smarts Books. All rights reserved.",
};

const ru: Dictionary = {
  nav: {
    home: "Главная",
    categories: "Категории",
    about: "О нас",
    contacts: "Контакты",
  },
  home: { showMore: "Показать ещё", more: "ещё" },
  categoryNames: {
    Fiction: "Художественная литература",
    "Non-Fiction": "Нонфикшн",
    Science: "Наука",
    Technology: "Технологии",
    History: "История",
    Biography: "Биографии",
    Fantasy: "Фэнтези",
    Mystery: "Детектив",
  },
  languageNames: {
    Russian: "Русский",
    English: "Английский",
    Turkish: "Турецкий",
  },
  categories: {
    title: "Категории",
    subtitle: "Выбирайте книги по категориям и находите идеальное чтение.",
  },
  category: {
    booksInCategoryOne: "книга в категории",
    booksInCategoryMany: "книг в категории",
  },
  book: { back: "На главную", download: "Скачать", partOf: "Часть серии" },
  serie: {
    back: "На главную",
    booksOne: "книга в серии.",
    booksMany: "книг в серии.",
  },
  about: {
    title: "О нас",
    intro:
      "Smarts Books — бесплатный онлайн-каталог, где читатели найдут книги самых разных категорий — от художественной литературы и истории до науки, технологий и фэнтези — на русском, английском, туркменском и турецком языках.",
    books: "Книг",
    categories: "Категорий",
    languages: "Языков",
    series: "Серий",
    missionTitle: "Наша миссия",
    mission:
      "Мы считаем, что хорошие книги должны быть легко доступны. Smarts Books собирает популярные издания в одном месте — по категориям, сериям и языкам, — чтобы вы меньше искали и больше читали.",
    canDoTitle: "Что можно делать",
    canDo: [
      "Просматривать каталог по категориям на странице «Категории».",
      "Открывать книгу, читать аннотацию, узнавать автора и находить ссылку на скачивание.",
      "Следить за сериями и читать книги в правильном порядке.",
      "Фильтровать по языку: русский, английский, туркменский или турецкий.",
    ],
    questionTitle: "Есть вопрос?",
    question:
      "Мы всегда рады услышать читателей. Загляните на страницу контактов, чтобы связаться с нами.",
    categoriesLink: "«Категории»",
    contactsLink: "странице контактов",
  },
  contacts: {
    title: "Контакты",
    subtitle:
      "Вопросы, предложения или нашли ошибку? Будем рады вашему сообщению.",
    email: "Почта",
    phone: "Телефон",
    address: "Адрес",
    addressValue: "Ашхабад, Туркменистан",
    replyNote: "Обычно отвечаем в течение 1–2 рабочих дней.",
    formTitle: "Напишите нам",
    name: "Имя",
    namePlaceholder: "Ваше имя",
    emailLabel: "Почта",
    emailPlaceholder: "you@example.com",
    message: "Сообщение",
    messagePlaceholder: "Чем можем помочь?",
    send: "Отправить",
  },
  footer: "Smarts Books. Все права защищены.",
};

const tr: Dictionary = {
  nav: {
    home: "Ana Sayfa",
    categories: "Kategoriler",
    about: "Hakkında",
    contacts: "İletişim",
  },
  home: { showMore: "Daha fazla", more: "daha" },
  categoryNames: {
    Fiction: "Kurgu",
    "Non-Fiction": "Kurgu Dışı",
    Science: "Bilim",
    Technology: "Teknoloji",
    History: "Tarih",
    Biography: "Biyografi",
    Fantasy: "Fantastik",
    Mystery: "Polisiye",
  },
  languageNames: {
    Russian: "Rusça",
    English: "İngilizce",
    Turkish: "Türkçe",
  },
  categories: {
    title: "Kategoriler",
    subtitle: "Kategorilere göz atın ve size en uygun kitabı bulun.",
  },
  category: {
    booksInCategoryOne: "kategoriye ait kitap",
    booksInCategoryMany: "kategoriye ait kitap",
  },
  book: {
    back: "Ana sayfaya dön",
    download: "İndir",
    partOf: "Serinin parçası",
  },
  serie: {
    back: "Ana sayfaya dön",
    booksOne: "kitap bu seride.",
    booksMany: "kitap bu seride.",
  },
  about: {
    title: "Hakkında",
    intro:
      "Smarts Books, okurların kurgu ve tarihten bilim, teknoloji ve fantaziye kadar birçok kategoride kitap keşfetabileceği ücretsiz bir çevrimiçi katalogdur — Rusça, İngilizce, Türkmence ve Türkçe dillerinde.",
    books: "Kitap",
    categories: "Kategori",
    languages: "Dil",
    series: "Seri",
    missionTitle: "Misyonumuz",
    mission:
      "İyi kitapların kolayca bulunması gerektiğine inanıyoruz. Smarts Books, popüler kitapları kategori, seri ve dile göre tek bir yerde toplar; böylece siz daha az arar, daha çok okursunuz.",
    canDoTitle: "Neler yapabilirsiniz",
    canDo: [
      "Kategoriler sayfasında kataloğa kategoriye göre göz atın.",
      "Bir kitabı açın; özetini okuyun, yazarını öğrenin ve indirme bağlantısını bulun.",
      "Serileri takip edin ve kitapları doğru sırayla okuyun.",
      "Dile göre filtreleyin: Rusça, İngilizce, Türkmence veya Türkçe.",
    ],
    questionTitle: "Sorunuz mu var?",
    question:
      "Okurlardan haber almayı seviyoruz. Bize ulaşmak için iletişim sayfamıza göz atın.",
    categoriesLink: "Kategoriler",
    contactsLink: "iletişim sayfası",
  },
  contacts: {
    title: "İletişim",
    subtitle:
      "Sorularınız, önerileriniz veya bir hata mı buldunuz? Sizden haber almayı çok isteriz.",
    email: "E-posta",
    phone: "Telefon",
    address: "Adres",
    addressValue: "Aşkabat, Türkmenistan",
    replyNote: "Genellikle 1–2 iş günü içinde yanıt veriyoruz.",
    formTitle: "Bize mesaj gönderin",
    name: "İsim",
    namePlaceholder: "Adınız",
    emailLabel: "E-posta",
    emailPlaceholder: "you@example.com",
    message: "Mesaj",
    messagePlaceholder: "Size nasıl yardımcı olabiliriz?",
    send: "Mesaj gönder",
  },
  footer: "Smarts Books. Tüm hakları saklıdır.",
};

const tk: Dictionary = {
  nav: {
    home: "Baş sahypa",
    categories: "Kategoriýalar",
    about: "Biz barada",
    contacts: "Habarlaşmak",
  },
  home: { showMore: "Goşmaça görkez", more: "goşmaça" },
  categoryNames: {
    Fiction: "Hyýaly eserler",
    "Non-Fiction": "Dokumental",
    Science: "Ylym",
    Technology: "Tehnologiýa",
    History: "Taryh",
    Biography: "Biografiýa",
    Fantasy: "Fantastika",
    Mystery: "Detektiw",
  },
  languageNames: {
    Russian: "Rus dili",
    English: "Iňlis dili",
    Turkish: "Türk dili",
  },
  categories: {
    title: "Kategoriýalar",
    subtitle: "Kategoriýalar boýunça kitaplary gözläň we öz kitabyňyzy tapyň.",
  },
  category: {
    booksInCategoryOne: "kitap kategoriýada",
    booksInCategoryMany: "kitap kategoriýada",
  },
  book: {
    back: "Baş sahypa dolan",
    download: "Ýükle",
    partOf: "Seriýanyň bölegi",
  },
  serie: {
    back: "Baş sahypa dolan",
    booksOne: "kitap bu seride.",
    booksMany: "kitap bu seride.",
  },
  about: {
    title: "Biz barada",
    intro:
      "Smarts Books — okyjylaryň kitaplary dürli kategoriýalar boýunça tapyp bilýän erkin onlaýn katalogy — gyzykly edebiýat we taryhdan ylym, tehnologiýa we fantaziýa çenli — rus, iňlis, türkmen we türk dillerinde.",
    books: "Kitap",
    categories: "Kategoriýa",
    languages: "Dil",
    series: "Seriýa",
    missionTitle: "Maksadymyz",
    mission:
      "Elektron kitaplaryň aňsat tapyljakdygyna ynanýarys. Smarts Books meşhur kitaplary kategoriýa, seriýa we dil boýunça bir ýerde jemleýär — siz az gözleýäň, köp okaň.",
    canDoTitle: "Näme edip bilersiňiz",
    canDo: [
      "Kategoriýalar sahypasynda katalogy kategoriýa boýunça gözläň.",
      "Kitaby açyň; annotasiýasyny okaň, awtoryny tanayň we göçürip almak baglanyşygyny tapyň.",
      "Seriýalara yzarlap, kitaplary dogry tertipde okaň.",
      "Dil boýunça süzüň: rus, iňlis, türkmen ýa-da türk dili.",
    ],
    questionTitle: "Soragyňyz barmy?",
    question:
      "Okyjylardan habar almaga begenýäris. Biz bilen habarlaşmak üçin habarlaşmak sahypamyza serediň.",
    categoriesLink: "Kategoriýalar",
    contactsLink: "habarlaşmak sahypasy",
  },
  contacts: {
    title: "Habarlaşmak",
    subtitle:
      "Soraglar, teklipler ýa-da ýalňyş tapyldymy? Habaryňyzy garaşýarys.",
    email: "E-poçta",
    phone: "Telefon",
    address: "Salgy",
    addressValue: "Aşgabat, Türkmenistan",
    replyNote: "Adatça 1–2 iş gününiň dowamynda jogap berýäris.",
    formTitle: "Bize hat iberiň",
    name: "At",
    namePlaceholder: "Adyňyz",
    emailLabel: "E-poçta",
    emailPlaceholder: "you@example.com",
    message: "Habar",
    messagePlaceholder: "Size nähili kömek edip bilýäris?",
    send: "Iber",
  },
  footer: "Smarts Books. Ähli hukuklar goralan.",
};

const dictionaries: Record<Locale, Dictionary> = { en, ru, tr, tk };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
