export const company = {
  legalName: 'ООО «ПСК «Прогресс»',
  brand: 'ПСК Прогресс',
  inn: '5003088122',
  kpp: '500301001',
  ogrn: '1105003005326',
  phone: '+7 (499) 111-72-62',
  phoneHref: 'tel:+74991117262',
  email: 'zakazi-otdel@yandex.ru',
  city: 'Жуковский',
  street: 'Туполевское шоссе, 14 с3',
  addressFull: 'г. Жуковский, Туполевское шоссе, 14 с3',
  director: 'Ритиков Дмитрий Юрьевич',
  hours: 'ежедневно 8:00–22:00',
  opens: '08:00',
  closes: '22:00',
  since: 2003,
  site: 'https://kupit-beton-v-zhukovskom.ru',
} as const;

export const whatsapp = {
  label: 'WhatsApp',
  href: 'https://wa.me/74991117262',
} as const;

export const nav = [
  { label: 'Каталог', href: '/tovarnyy-beton/' },
  { label: 'Доставка', href: '/dostavka/' },
  { label: 'Услуги', href: '/#uslugi' },
  { label: 'О заводе', href: '/o-kompanii/' },
  { label: 'Блог', href: '/blog/' },
  { label: 'Контакты', href: '/kontakty/' },
];

export const catalogFacets = [
  {
    title: 'По марке',
    links: [
      { label: 'М100', href: '/tovarnyy-beton/m100/' },
      { label: 'М150', href: '/tovarnyy-beton/m150/' },
      { label: 'М200', href: '/tovarnyy-beton/m200/' },
      { label: 'М250', href: '/tovarnyy-beton/m250/' },
      { label: 'М300', href: '/tovarnyy-beton/m300/' },
      { label: 'М350', href: '/tovarnyy-beton/m350/' },
      { label: 'М400', href: '/tovarnyy-beton/m400/' },
      { label: 'М450', href: '/tovarnyy-beton/m450/' },
      { label: 'М500', href: '/tovarnyy-beton/m500/' },
      { label: 'М600', href: '/tovarnyy-beton/m600/' },
    ],
  },
  {
    title: 'По заполнителю',
    links: [
      { label: 'На гранитном щебне', href: '/tovarnyy-beton/na-granitnom-shchebne/' },
      { label: 'На гравийном щебне', href: '/tovarnyy-beton/na-graviynom-shchebne/' },
      { label: 'На известняковом щебне', href: '/tovarnyy-beton/na-izvestnyakovom-shchebne/' },
      { label: 'На вторичном щебне', href: '/tovarnyy-beton/na-vtorichnom-shchebne/' },
    ],
  },
  {
    title: 'По свойствам',
    links: [
      { label: 'По классу прочности', href: '/tovarnyy-beton/po-klassu/' },
      { label: 'Морозостойкий', href: '/tovarnyy-beton/morozostoykiy/' },
      { label: 'Водонепроницаемый', href: '/tovarnyy-beton/vodonepronicaemyy/' },
      { label: 'Тощий бетон', href: '/vidy-betona/toshchiy-beton/' },
    ],
  },
];

export const telegram = {
  label: 'Telegram',
  appHref: 'tg://resolve?phone=74991117262',
  webHref: 'https://t.me/share/url?url=https%3A%2F%2Fkupit-beton-v-zhukovskom.ru%2F&text=%D0%9D%D1%83%D0%B6%D0%B5%D0%BD%20%D0%B1%D0%B5%D1%82%D0%BE%D0%BD%20%D1%81%20%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%BE%D0%B9',
} as const;

export const reviewLinks = [
  { label: 'Отзывы на Яндекс Картах', href: '/kontakty/#reviews-source' },
  { label: 'Отзывы на 2GIS', href: '/kontakty/#reviews-source' },
] as const;

export const downloads = {
  pricePdf: '/files/price-list.pdf',
  accreditationRequest: '/files/accreditation-request.pdf',
} as const;

export type PriceRow = {
  grade: string;
  klass?: string;
  usage: string;
  price: number;
  href?: string;
};

export type PriceTab = {
  id: string;
  label: string;
  rows: PriceRow[];
};

/** Цены — источник: content-glavnaya.md B5 + content-tovarnyy-beton-hub.md B4 */
export const priceTabs: PriceTab[] = [
  {
    id: 'gravel',
    label: 'Бетон на гравии',
    rows: [
      { grade: 'М100', klass: 'B7,5', usage: 'Подготовительный слой, подбетонка', price: 4150, href: '/tovarnyy-beton/m100/' },
      { grade: 'М150', klass: 'B12,5', usage: 'Дорожки, отмостки, лёгкие основания', price: 4300, href: '/tovarnyy-beton/m150/' },
      { grade: 'М200', klass: 'B15', usage: 'Фундаменты, стяжки, заборы', price: 4700, href: '/tovarnyy-beton/m200/' },
      { grade: 'М250', klass: 'B20', usage: 'Монолитные перекрытия, лестницы', price: 4900, href: '/tovarnyy-beton/m250/' },
      { grade: 'М300', klass: 'B22,5', usage: 'Высоконагруженные конструкции, дороги', price: 5100, href: '/tovarnyy-beton/m300/' },
      { grade: 'М350', klass: 'B25', usage: 'Промышленные полы, мосты', price: 5250, href: '/tovarnyy-beton/m350/' },
      { grade: 'М400', klass: 'B30', usage: 'Гидротехнические сооружения', price: 5450, href: '/tovarnyy-beton/m400/' },
      { grade: 'М450', klass: 'B35', usage: 'Особо ответственные конструкции', price: 5650 },
    ],
  },
  {
    id: 'granite',
    label: 'Бетон на граните',
    rows: [
      { grade: 'М100', klass: 'B7,5', usage: 'Подготовительный слой, подбетонка', price: 4600, href: '/tovarnyy-beton/m100/' },
      { grade: 'М150', klass: 'B12,5', usage: 'Основания под лёгкие постройки, дорожки', price: 4800, href: '/tovarnyy-beton/m150/' },
      { grade: 'М200', klass: 'B15', usage: 'Фундаменты, стяжки с повышенной прочностью', price: 5150, href: '/tovarnyy-beton/m200/' },
      { grade: 'М250', klass: 'B20', usage: 'Монолитные перекрытия, сложные ростверки', price: 5350, href: '/tovarnyy-beton/m250/' },
      { grade: 'М300', klass: 'B22,5', usage: 'Монолит, промышленные объекты', price: 5550, href: '/tovarnyy-beton/m300/' },
      { grade: 'М350', klass: 'B25', usage: 'Мосты, гидросооружения', price: 5700, href: '/tovarnyy-beton/m350/' },
      { grade: 'М400', klass: 'B30', usage: 'Мосты, путепроводы, ГТС', price: 5900, href: '/tovarnyy-beton/m400/' },
      { grade: 'М450', klass: 'B35', usage: 'Промышленное и дорожное строительство', price: 6100, href: '/tovarnyy-beton/m450/' },
      { grade: 'М500', klass: 'B40', usage: 'Спецконструкции, высотное строительство', price: 6300, href: '/tovarnyy-beton/m500/' },
      { grade: 'М600', klass: 'B45', usage: 'Уникальные объекты, спецзаказ', price: 6600, href: '/tovarnyy-beton/m600/' },
    ],
  },
  {
    id: 'mortar',
    label: 'Растворы',
    rows: [
      { grade: 'ЦПР М75–М300', usage: 'Кладка, штукатурка, стяжки, швы', price: 3000 },
      { grade: 'Пескобетон М250–М350', usage: 'Стяжки пола, тротуарная плитка', price: 4140 },
    ],
  },
  {
    id: 'claydite',
    label: 'Керамзитобетон',
    rows: [
      { grade: 'М100–М250', usage: 'Утеплённые перекрытия, лёгкие несущие конструкции', price: 3900 },
    ],
  },
  {
    id: 'lean',
    label: 'Тощий бетон',
    rows: [
      { grade: 'М100–М250', usage: 'Подстилающий слой под фундамент, дорожная подготовка', price: 3450 },
    ],
  },
];

/** Тарифы доставки — источник: content-glavnaya.md B6 */
export const deliveryTariffs = [
  { zone: 'Раменский район', label: 'Бесплатно', rate: 0 },
  { zone: 'до 5 км', label: '500 ₽/м³', rate: 500 },
  { zone: '5–10 км', label: '600 ₽/м³', rate: 600 },
  { zone: '10–15 км', label: '700 ₽/м³', rate: 700 },
  { zone: '15–20 км', label: '650 ₽/м³', rate: 650 },
  { zone: '20–25 км', label: '700 ₽/м³', rate: 700 },
  { zone: '25–30 км', label: '750 ₽/м³', rate: 750 },
  { zone: '30–40 км', label: '800–850 ₽/м³', rate: 850 },
  { zone: '40–50 км', label: '900 ₽/м³', rate: 900 },
];

/** Пороги для JS-калькулятора: до скольких км действует ставка */
export const deliverySteps = [
  { maxKm: 5, rate: 500 },
  { maxKm: 10, rate: 600 },
  { maxKm: 15, rate: 700 },
  { maxKm: 20, rate: 650 },
  { maxKm: 25, rate: 700 },
  { maxKm: 30, rate: 750 },
  { maxKm: 40, rate: 850 },
  { maxKm: 50, rate: 900 },
];

export const deliveryCities = [
  'Жуковский',
  'Раменское',
  'Кратово',
  'Малаховка',
  'Удельная',
  'Ильинский',
  'Лыткарино',
  'Заворово',
  'Игумново',
  'Кузнецово',
  'Быково',
  'Софьино',
  'Дементьево',
  'Загорново',
];

/** Марки для селекта в формах заявки */
export const formGrades = ['М100', 'М150', 'М200', 'М250', 'М300', 'М350', 'М400', 'М450', 'М500', 'М600'];
