/**
 * Author profiles. This file is intentionally data-only.
 *
 * Every author carries a display name and a short biography in all four
 * supported locales (`name_en` / `name_ru` / `name_tk` / `name_tr` and
 * `about_*`). Books reference authors by `authorId`, so pages can join
 * authors with their books. Pages render the field of the current i18n
 * locale via the getters in `./books`.
 *
 * `image` holds a relative path to the author photo in /public
 * (e.g. "/authors/j-k-rowling.webp"). Leave it as an empty string
 * until a photo is added — a placeholder avatar is shown instead.
 */
export interface Author {
  /** Unique identifier, referenced by `Book.authorId`. */
  id: number;
  /** Author name in English (canonical). */
  name_en: string;
  name_ru: string;
  name_tk: string;
  name_tr: string;

  birthYear: number;
  /** Year of death, if applicable. */
  deathYear?: number;
  /** Relative path to the author photo in /public. Empty string = placeholder. */
  image: string;
  /** Short biography. */
  about_en: string;
  about_ru: string;
  about_tk: string;
  about_tr: string;
}

export const authors: Author[] = [
  {
    id: 1,
    name_en: "J.K. Rowling",
    name_ru: "Дж. К. Роулинг",
    name_tk: "J.K. Rowling",
    name_tr: "J.K. Rowling",
    birthYear: 1965,
    image: "/authors/J.K. Rowling.webp",
    about_en:
      "British author best known for the globally beloved Harry Potter series, one of the best-selling book series in history.",
    about_ru:
      "Британская писательница, автор всемирно известной серии о Гарри Поттере — одной из самых продаваемых серий книг в истории.",
    about_tk:
      "«Harry Potter» seriýasyny döreden iňlis ýazyjysy; bu seriýa taryhdaky iň köp satylan kitap seriýalarynyň biridir.",
    about_tr:
      "Tarihin en çok satan kitap serilerinden biri olan küresel sevilen Harry Potter serisiyle tanınan İngiliz yazar.",
  },
  {
    id: 2,
    name_en: "J.R.R. Tolkien",
    name_ru: "Дж. Р. Р. Толкин",
    name_tk: "J.R.R. Tolkien",
    name_tr: "J.R.R. Tolkien",
    birthYear: 1892,
    deathYear: 1973,
    image: "/authors/J.R.R. Tolkien.webp",
    about_en:
      "English writer, philologist and Oxford professor, creator of Middle-earth and of the modern fantasy genre.",
    about_ru:
      "Английский писатель, филолог и профессор Оксфорда, создатель Средиземья и современного жанра фэнтези.",
    about_tk:
      "Iňlis ýazyjysy, filolog we Oksford professory; Ortaýer we häzirki zaman fantastika žanrynyň döredijisi.",
    about_tr:
      "İngiliz yazar, filolog ve Oxford profesörü; Orta Dünya'nın ve modern fantastik türün yaratıcısı.",
  },
  {
    id: 3,
    name_en: "George R.R. Martin",
    name_ru: "Джордж Р. Р. Мартин",
    name_tk: "George R.R. Martin",
    name_tr: "George R.R. Martin",
    birthYear: 1948,
    image: "/authors/George R.R. Martin.webp",
    about_en:
      "American novelist best known for A Song of Ice and Fire, adapted into the HBO series Game of Thrones.",
    about_ru:
      "Американский писатель, автор цикла «Песнь Льда и Пламени», экранизированного HBO в сериале «Игра престолов».",
    about_tk:
      "«Buz we Odyň aýdymy» romanlary bilen meşhur bolan, HBO-nuň «Tagtlaryň oýuny» seriýasy hökmünde ekrana geçirilen amerikan ýazyjysy.",
    about_tr:
      "HBO'nun Game of Thrones dizisine uyarlanan Buz ve Ateşin Şarkısı ile tanınan Amerikalı romancı.",
  },
  {
    id: 4,
    name_en: "C.S. Lewis",
    name_ru: "К. С. Льюис",
    name_tk: "C.S. Lewis",
    name_tr: "C.S. Lewis",
    birthYear: 1898,
    deathYear: 1963,
    image: "/authors/C.S. Lewis.webp",
    about_en:
      "British writer and scholar, author of The Chronicles of Narnia and celebrated works on Christianity.",
    about_ru:
      "Британский писатель и учёный, автор «Хроник Нарнии» и известных трудов о христианстве.",
    about_tk:
      "«Narnia hronikalarynyň» we hristianlyk baradaky meşhur eserleriň awtory bolan iňlis ýazyjysy we alymy.",
    about_tr:
      "Narnia Günlükleri'nin ve Hıristiyanlık üzerine ünlü eserlerin yazarı olan İngiliz yazar ve bilgin.",
  },
  {
    id: 5,
    name_en: "Frank Herbert",
    name_ru: "Фрэнк Герберт",
    name_tk: "Frank Herbert",
    name_tr: "Frank Herbert",
    birthYear: 1920,
    deathYear: 1986,
    image: "/authors/Frank Herbert.webp",
    about_en:
      "American science-fiction writer, author of the cult classic Dune and its sequels.",
    about_ru:
      "Американский писатель-фантаст, автор культового романа «Дюна» и его продолжений.",
    about_tk:
      "Kult roman «Dýuna» we onuň dowamlarynyň awtory bolan amerikan fantast ýazyjysy.",
    about_tr:
      "Kült klasik Dune ve devam serilerinin yazarı olan Amerikalı bilim kurgu yazarı.",
  },
  {
    id: 6,
    name_en: "Matt Haig",
    name_ru: "Мэтт Хейг",
    name_tk: "Matt Haig",
    name_tr: "Matt Haig",
    birthYear: 1975,
    image: "/authors/Matt Haig.webp",
    about_en:
      "British novelist and journalist whose uplifting fiction, including The Midnight Library, has won a worldwide readership.",
    about_ru:
      "Британский писатель и журналист, чья вдохновляющая проза, включая «Полуночную библиотеку», нашла читателей по всему миру.",
    about_tk:
      "«Gije ýarym kitaphanasy» hem doly goşup, ylham beriji prozasy bilen dünýä okyjylaryny gazanan iňlis ýazyjysy we žurnalisti.",
    about_tr:
      "The Midnight Library dahil umut veren kurgularıyla dünya çapında okuyucu kitlesi kazanan İngiliz romancı ve gazeteci.",
  },
  {
    id: 7,
    name_en: "Fyodor Dostoevsky",
    name_ru: "Фёдор Достоевский",
    name_tk: "Fýodor Dostoevskij",
    name_tr: "Fyodor Dostoyevski",
    birthYear: 1821,
    deathYear: 1881,
    image: "/authors/Fyodor Dostoevsky.webp",
    about_en:
      "Russian writer and thinker, a classic of world literature, author of Crime and Punishment and The Brothers Karamazov.",
    about_ru:
      "Русский писатель и мыслитель, классик мировой литературы, автор «Преступления и наказания» и «Братьев Карамазовых».",
    about_tk:
      "Rus ýazyjysy we pikiri; dünýä edebiýatynyň klassigi, «Jena we jeza» we «Karamazow doganlary» romanlarynyň awtory.",
    about_tr:
      "Suç ve Ceza ve Karamazov Kardeşler'in yazarı, dünya edebiyatının klasiklerinden olan Rus yazar ve düşünür.",
  },
  {
    id: 8,
    name_en: "Leo Tolstoy",
    name_ru: "Лев Толстой",
    name_tk: "Lew Tolstoj",
    name_tr: "Lev Tolstoy",
    birthYear: 1828,
    deathYear: 1910,
    image: "/authors/Leo Tolstoy.webp",
    about_en:
      "Russian writer regarded among the greatest novelists of all time, author of War and Peace and Anna Karenina.",
    about_ru:
      "Русский писатель, один из величайших романистов всех времён, автор «Войны и мира» и «Анны Карениной».",
    about_tk:
      "«Söýş we parahatçylyk» we «Anna Karenina» romanlarynyň awtory bolan, bütin döwürleriň iň beýik romandçylarynyň biri hasaplanýan rus ýazyjysy.",
    about_tr:
      "Savaş ve Barış ve Anna Karenina'nın yazarı, gelmiş geçmiş en büyük romancılarından biri sayılan Rus yazar.",
  },
  {
    id: 9,
    name_en: "Mikhail Bulgakov",
    name_ru: "Михаил Булгаков",
    name_tk: "Mihail Bulgakow",
    name_tr: "Mihail Bulgakov",
    birthYear: 1891,
    deathYear: 1940,
    image: "/authors/Mikhail Bulgakov.webp",
    about_en:
      "Russian writer and playwright, author of the famous novel The Master and Margarita.",
    about_ru:
      "Русский писатель и драматург, автор знаменитого романа «Мастер и Маргарита».",
    about_tk:
      "Meşhur «Usta we Margarita» romanynyň awtory bolan rus ýazyjysy we dramaturgy.",
    about_tr:
      "Ünlü Usta ve Margarita romanının yazarı olan Rus yazar ve oyun yazarı.",
  },
  {
    id: 10,
    name_en: "Antoine de Saint-Exupery",
    name_ru: "Антуан де Сент-Экзюпери",
    name_tk: "Antuan de Sent-Egzüperi",
    name_tr: "Antoine de Saint-Exupéry",
    birthYear: 1900,
    deathYear: 1944,
    image: "/authors/Antoine de Saint-Exupery.webp",
    about_en:
      "French writer and aviator, author of the world-famous tale The Little Prince.",
    about_ru:
      "Французский писатель и лётчик, автор всемирно известной сказки «Маленький принц».",
    about_tk:
      "Dünýä belli «Kiçi prens» ertiriniň awtory bolan fransuz ýazyjysy we uçujysy.",
    about_tr:
      "Dünyaca ünlü Küçük Prens masalının yazarı olan Fransız yazar ve havacı.",
  },
  {
    id: 11,
    name_en: "Paulo Coelho",
    name_ru: "Пауло Коэльо",
    name_tk: "Paulo Koelho",
    name_tr: "Paulo Coelho",
    birthYear: 1947,
    image: "/authors/Paulo Coelho.webp",
    about_en:
      "Brazilian novelist whose inspirational story The Alchemist became an international phenomenon.",
    about_ru:
      "Бразильский писатель, чья вдохновляющая повесть «Алхимик» стала международным феноменом.",
    about_tk:
      "Ylham beriji «Alhimik» powesti halkara hadysasyna öwrülen braziliýaly ýazyjy.",
    about_tr:
      "İlham veren Simyacı adlı eseri uluslararası bir fenomene dönüşen Brezilyalı romancı.",
  },
  {
    id: 12,
    name_en: "George Orwell",
    name_ru: "Джордж Оруэлл",
    name_tk: "George Orwell",
    name_tr: "George Orwell",
    birthYear: 1903,
    deathYear: 1950,
    image: "/authors/George Orwell.webp",
    about_en:
      "English novelist and essayist, author of the classics 1984 and Animal Farm.",
    about_ru:
      "Английский романист и эссеист, автор классических произведений «1984» и «Скотный двор».",
    about_tk:
      "Klassik «1984» we «Maldarhanasy» eserleriniň awtory bolan iňlis romandçysy we esseisti.",
    about_tr:
      "1984 ve Hayvan Çiftliği klasiklerinin yazarı olan İngiliz romancı ve denemeci.",
  },
  {
    id: 13,
    name_en: "Walter Scott",
    name_ru: "Вальтер Скотт",
    name_tk: "Walter Skott",
    name_tr: "Walter Scott",
    birthYear: 1771,
    deathYear: 1832,
    image: "/authors/Walter Scott.webp",
    about_en:
      "Scottish writer, pioneer of the historical novel, author of Ivanhoe.",
    about_ru:
      "Шотландский писатель, основоположник исторического романа, автор «Айвенго».",
    about_tk:
      "Taryhy romanyň esaslandyryjysy, «Aýwenho» romanynyň awtory bolan şotland ýazyjysy.",
    about_tr:
      "Tarihi romanın öncüsü, Ivanhoe'nun yazarı olan İskoç yazar.",
  },
  {
    id: 14,
    name_en: "F. Scott Fitzgerald",
    name_ru: "Ф. Скотт Фицджеральд",
    name_tk: "F. Skott Fitsdjerald",
    name_tr: "F. Scott Fitzgerald",
    birthYear: 1896,
    deathYear: 1940,
    image: "/authors/F. Scott Fitzgerald.webp",
    about_en:
      "American novelist of the Jazz Age, best known for The Great Gatsby.",
    about_ru:
      "Американский писатель эпохи джаза, автор знаменитого «Великого Гэтсби».",
    about_tk:
      "Jaz döwrünüň amerikan ýazyjysy, meşhur «Beýik Getsbi» romanynyň awtory.",
    about_tr:
      "Caz Çağı'nın Amerikalı romancılarından, Büyük Gatsby'nin yazarı.",
  },
  {
    id: 15,
    name_en: "Harper Lee",
    name_ru: "Харпер Ли",
    name_tk: "Harper Li",
    name_tr: "Harper Lee",
    birthYear: 1926,
    deathYear: 2016,
    image: "/authors/Harper Lee.webp",
    about_en:
      "American novelist whose debut To Kill a Mockingbird became a modern American classic.",
    about_ru:
      "Американская писательница, чей дебютный роман «Убить пересмешника» стал классикой современной американской литературы.",
    about_tk:
      "Ilkinji «Bülbüli öldürmek» romany häzirki amerikan edebiýatynyň klassikasyna öwrülen amerikan ýazyjysy.",
    about_tr:
      "İlk romanı Bülbülü Öldürmek modern Amerikan klasiğine dönüşen Amerikalı romancı.",
  },
  {
    id: 16,
    name_en: "Ray Bradbury",
    name_ru: "Рэй Брэдбери",
    name_tk: "Reý Bredberi",
    name_tr: "Ray Bradbury",
    birthYear: 1920,
    deathYear: 2012,
    image: "/authors/Ray Bradbury.webp",
    about_en:
      "American writer who shaped modern science fiction, best known for Fahrenheit 451.",
    about_ru:
      "Американский писатель, сформировавший современную фантастику, автор «451 градуса по Фаренгейту».",
    about_tk:
      "Häzirki zaman fantastikasynyň şekilini goşan, «Farengeýt boýunça 451 gradus» romanynyň awtory bolan amerikan ýazyjysy.",
    about_tr:
      "Fahrenheit 451 ile tanınan, modern bilim kurguyu şekillendiren Amerikalı yazar.",
  },
  {
    id: 17,
    name_en: "Jane Austen",
    name_ru: "Джейн Остин",
    name_tk: "Jeyn Ostin",
    name_tr: "Jane Austen",
    birthYear: 1775,
    deathYear: 1817,
    image: "/authors/Jane Austen.webp",
    about_en:
      "English novelist whose witty portraits of love and society include Pride and Prejudice.",
    about_ru:
      "Английская писательница, чьи остроумные произведения о любви и обществе включают «Гордость и предубеждение».",
    about_tk:
      "Söýgi we jemgyýet baradaky süýkeýli eserleriniň hatyrynda «Buýsanç we düýpnüki» hem bar bolan iňlis romandçysy.",
    about_tr:
      "Gurur ve Önyargı dahil zekice aşk ve toplum portreleri çizen İngiliz romancı.",
  },
  {
    id: 18,
    name_en: "Orhan Pamuk",
    name_ru: "Орхан Памук",
    name_tk: "Orhan Pamuk",
    name_tr: "Orhan Pamuk",
    birthYear: 1952,
    image: "/authors/Orhan Pamuk.webp",
    about_en:
      "Turkish novelist and Nobel laureate whose works explore Istanbul, memory and identity.",
    about_ru:
      "Турецкий писатель, лауреат Нобелевской премии, чьи произведения посвящены Стамбулу, памяти и идентичности.",
    about_tk:
      "Eserleri Stambul, ýat we şahsyýet ýaly temalara bagyşlanan türk ýazyjysy, Nobel baýragynyň eýesi.",
    about_tr:
      "Eserlerinde İstanbul, bellek ve kimlik temalarını işleyen Türk yazar ve Nobel ödülü sahibi.",
  },
  {
    id: 19,
    name_en: "Yuval Noah Harari",
    name_ru: "Юваль Ной Харари",
    name_tk: "Ýuwal Noah Harari",
    name_tr: "Yuval Noah Harari",
    birthYear: 1976,
    image: "/authors/Yuval Noah Harari.webp",
    about_en:
      "Israeli historian and author of the bestselling Sapiens: A Brief History of Humankind.",
    about_ru:
      "Израильский историк, автор бестселлера «Sapiens: Краткая история человечества».",
    about_tk:
      "Iň köp satylan «Sapiens: Adamzadyň gysga taryhy» kitabynyň awtory bolan ýsraýyl taryhçysy.",
    about_tr:
      "Çok satan Sapiens: İnsan Türünün Kısa Bir Tarihi kitabının yazarı olan İsrail'li tarihçi.",
  },
];
