import fs from 'node:fs';
import path from 'node:path';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import html from 'remark-html';

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content', 'pages');

export type ContentPageRef = {
  slug: string;
  file: string;
  path: string;
  crumb: string;
  parent?: { label: string; href: string };
};

export type ContentPage = ContentPageRef & {
  title: string;
  description: string;
  h1: string;
  subtitle: string;
  body: string;
};

export const trustPages: ContentPageRef[] = [
  { slug: 'o-kompanii', file: 'content-o-kompanii.md', path: '/o-kompanii/', crumb: 'О компании' },
  { slug: 'kontrol-kachestva', file: 'content-kontrol-kachestva.md', path: '/kontrol-kachestva/', crumb: 'Контроль качества' },
  { slug: 'pasport-kachestva', file: 'content-pasport-kachestva.md', path: '/pasport-kachestva/', crumb: 'Паспорт качества' },
  { slug: 'avtopark', file: 'content-avtopark.md', path: '/avtopark/', crumb: 'Автопарк' },
  { slug: 'proizvodstvo', file: 'content-proizvodstvo.md', path: '/proizvodstvo/', crumb: 'Производство' },
  { slug: 'obekty', file: 'content-obekty.md', path: '/obekty/', crumb: 'Объекты' },
  { slug: 'otzyvy', file: 'content-otzyvy.md', path: '/otzyvy/', crumb: 'Отзывы' },
  { slug: 'sotrudnichestvo', file: 'content-sotrudnichestvo.md', path: '/sotrudnichestvo/', crumb: 'Сотрудничество' },
];

export const audiencePages: ContentPageRef[] = [
  { slug: 'chastnym-licam', file: 'content-resheniya-chastnym.md', path: '/resheniya/chastnym-licam/', crumb: 'Частным лицам', parent: { label: 'Решения', href: '/resheniya/chastnym-licam/' } },
  { slug: 'stroitelnym-kompaniyam', file: 'content-resheniya-stroitelyam.md', path: '/resheniya/stroitelnym-kompaniyam/', crumb: 'Строительным компаниям', parent: { label: 'Решения', href: '/resheniya/chastnym-licam/' } },
  { slug: 'zastroyshchikam', file: 'content-resheniya-zastroyshchikam.md', path: '/resheniya/zastroyshchikam/', crumb: 'Застройщикам', parent: { label: 'Решения', href: '/resheniya/chastnym-licam/' } },
  { slug: 'proizvodstvam', file: 'content-resheniya-proizvodstvam.md', path: '/resheniya/proizvodstvam/', crumb: 'Производствам', parent: { label: 'Решения', href: '/resheniya/chastnym-licam/' } },
];

export const peskobetonPages: ContentPageRef[] = [
  { slug: 'm75', file: 'content-peskobeton-m75.md', path: '/peskobeton/m75/', crumb: 'М75' },
  { slug: 'm100', file: 'content-peskobeton-m100.md', path: '/peskobeton/m100/', crumb: 'М100' },
  { slug: 'm150', file: 'content-peskobeton-m150.md', path: '/peskobeton/m150/', crumb: 'М150' },
  { slug: 'm200', file: 'content-peskobeton-m200.md', path: '/peskobeton/m200/', crumb: 'М200' },
  { slug: 'm250', file: 'content-peskobeton-m250.md', path: '/peskobeton/m250/', crumb: 'М250' },
  { slug: 'm300', file: 'content-peskobeton-m300.md', path: '/peskobeton/m300/', crumb: 'М300' },
  { slug: 'm350', file: 'content-peskobeton-m350.md', path: '/peskobeton/m350/', crumb: 'М350' },
];

export const rastvorPages: ContentPageRef[] = [
  { slug: 'm50', file: 'content-rastvor-m50.md', path: '/rastvor/m50/', crumb: 'М50' },
  { slug: 'm75', file: 'content-rastvor-m75.md', path: '/rastvor/m75/', crumb: 'М75' },
  { slug: 'm100', file: 'content-rastvor-m100.md', path: '/rastvor/m100/', crumb: 'М100' },
  { slug: 'm125', file: 'content-rastvor-m125.md', path: '/rastvor/m125/', crumb: 'М125' },
  { slug: 'm150', file: 'content-rastvor-m150.md', path: '/rastvor/m150/', crumb: 'М150' },
  { slug: 'm200', file: 'content-rastvor-m200.md', path: '/rastvor/m200/', crumb: 'М200' },
  { slug: 'm250', file: 'content-rastvor-m250.md', path: '/rastvor/m250/', crumb: 'М250' },
  { slug: 'm300', file: 'content-rastvor-m300.md', path: '/rastvor/m300/', crumb: 'М300' },
  { slug: 'shtukaturnyy-rastvor', file: 'content-shtukaturnyy-rastvor.md', path: '/rastvor/shtukaturnyy-rastvor/', crumb: 'Штукатурный раствор' },
  { slug: 'tsementnoe-moloko', file: 'content-tsementnoe-moloko.md', path: '/rastvor/tsementnoe-moloko/', crumb: 'Цементное молоко' },
];

export const shchebenPages: ContentPageRef[] = [
  { slug: '5-20', file: 'content-shcheben-5-20.md', path: '/shcheben/5-20/', crumb: '5-20' },
  { slug: '20-40', file: 'content-shcheben-20-40.md', path: '/shcheben/20-40/', crumb: '20-40' },
  { slug: 'granitnyy', file: 'content-shcheben-granit.md', path: '/shcheben/granitnyy/', crumb: 'Гранитный' },
  { slug: 'graviynyy', file: 'content-shcheben-graviy.md', path: '/shcheben/graviynyy/', crumb: 'Гравийный' },
  { slug: 'izvestnyakovyy', file: 'content-shcheben-izvestnyakovyy.md', path: '/shcheben/izvestnyakovyy/', crumb: 'Известняковый' },
  { slug: 'vtorichnyy', file: 'content-shcheben-vtorichnyy.md', path: '/shcheben/vtorichnyy/', crumb: 'Вторичный' },
];

export const pesokPages: ContentPageRef[] = [
  { slug: 'karernyy', file: 'content-pesok-karernyy.md', path: '/pesok/karernyy/', crumb: 'Карьерный' },
  { slug: 'myt', file: 'content-pesok-myt.md', path: '/pesok/myt/', crumb: 'Мытый' },
  { slug: 'rechnoy', file: 'content-pesok-rechnoy.md', path: '/pesok/rechnoy/', crumb: 'Речной' },
  { slug: 'seyanyy', file: 'content-pesok-seyanyy.md', path: '/pesok/seyanyy/', crumb: 'Сеяный' },
];

export const materialRootPages: ContentPageRef[] = [
  { slug: 'keramzitobeton', file: 'content-keramzitobeton.md', path: '/keramzitobeton/', crumb: 'Керамзитобетон' },
  { slug: 'fibrobeton', file: 'content-fibrobeton.md', path: '/fibrobeton/', crumb: 'Фибробетон' },
  { slug: 'polistirolbeton', file: 'content-polistirolbeton.md', path: '/polistirolbeton/', crumb: 'Полистиролбетон' },
  { slug: 'tsement', file: 'content-tsement.md', path: '/tsement/', crumb: 'Цемент' },
  { slug: 'keramzit', file: 'content-keramzit.md', path: '/keramzit/', crumb: 'Керамзит' },
  { slug: 'pgs', file: 'content-pgs.md', path: '/pgs/', crumb: 'ПГС' },
];

export const tovaryBetonPages: ContentPageRef[] = [
  { slug: 'na-granitnom-shchebne', file: 'content-beton-na-granite.md', path: '/tovarnyy-beton/na-granitnom-shchebne/', crumb: 'На граните' },
  { slug: 'na-graviynom-shchebne', file: 'content-beton-na-gravii.md', path: '/tovarnyy-beton/na-graviynom-shchebne/', crumb: 'На гравии' },
  { slug: 'na-izvestnyakovom-shchebne', file: 'content-beton-na-izvestnyake.md', path: '/tovarnyy-beton/na-izvestnyakovom-shchebne/', crumb: 'На известняке' },
  { slug: 'na-vtorichnom-shchebne', file: 'content-beton-na-vtorichnom.md', path: '/tovarnyy-beton/na-vtorichnom-shchebne/', crumb: 'На вторичном щебне' },
  { slug: 'po-klassu', file: 'content-po-klassu.md', path: '/tovarnyy-beton/po-klassu/', crumb: 'По классу прочности' },
  { slug: 'vodonepronicaemyy', file: 'content-vodonepronicaemyy-beton.md', path: '/tovarnyy-beton/vodonepronicaemyy/', crumb: 'Водонепроницаемый' },
  { slug: 'morozostoykiy', file: 'content-morozostoykyy-beton.md', path: '/tovarnyy-beton/morozostoykiy/', crumb: 'Морозостойкий' },
];

export const standaloneContentPages: ContentPageRef[] = [
  { slug: 'beton-100mm', file: 'content-beton-100mm.md', path: '/beton-100mm/', crumb: 'Бетон 100 мм' },
];

export const allContentPageRefs = [
  ...trustPages,
  ...audiencePages,
  ...tovaryBetonPages,
  ...standaloneContentPages,
  { slug: 'peskobeton', file: 'content-peskobeton-hub.md', path: '/peskobeton/', crumb: 'Пескобетон' },
  ...peskobetonPages,
  { slug: 'rastvor', file: 'content-rastvor-hub.md', path: '/rastvor/', crumb: 'Раствор' },
  ...rastvorPages,
  { slug: 'shcheben', file: 'content-shcheben-hub.md', path: '/shcheben/', crumb: 'Щебень' },
  ...shchebenPages,
  { slug: 'pesok', file: 'content-pesok-hub.md', path: '/pesok/', crumb: 'Песок' },
  ...pesokPages,
  ...materialRootPages,
];

function readRaw(file: string): string {
  return fs.readFileSync(path.join(CONTENT_DIR, file), 'utf-8');
}

function pick(raw: string, patterns: RegExp[], fallback = ''): string {
  for (const pattern of patterns) {
    const match = raw.match(pattern);
    if (match?.[1]) return match[1].trim().replace(/\\\|/g, '|').replace(/^\*\*|\*\*$/g, '').trim();
  }
  return fallback;
}

function cleanBody(raw: string): string {
  const lines = raw.split(/\r?\n/);
  const start = lines.findIndex((line) => /^#{1,3}\s+B3\b|^##\s+B3\b/i.test(line.trim()));
  const relevantLines = start >= 0 ? lines.slice(start) : lines;
  const specsStart = start >= 0 ? relevantLines.findIndex((line, index) => index > 0 && /^##\s+\d+\.\d+\s+/.test(line.trim())) : -1;
  const body = (specsStart >= 0 ? relevantLines.slice(0, specsStart) : relevantLines).join('\n');

  return body
    .replace(/```json[\s\S]*?```/g, '')
    .replace(/^#{1,3}\s+B\d+\s*[—-]\s*(.+)$/gm, '## $1')
    .replace(/^#{1,3}\s+B\d+\s*→.*$/gm, '')
    .replace(/^##\s+МЕТАТЕГИ[\s\S]*?(?=^##\s+B2|^#\s+B2)/m, '')
    .replace(/^#\s+МЕТАТЕГИ[\s\S]*?(?=^#\s+B2|^##\s+B2)/m, '')
    .replace(/^\*\*Фото:\*\*.*$/gm, '')
    .replace(/^→\s*\[.*$/gm, '')
    .replace(/^\*\*\[Кнопка:.*$/gm, '')
    .replace(/^\*\*URL:\*\*.*$/gm, '')
    .replace(/^#\s*URL:.*$/gm, '')
    .replace(/^\*\*Description.*$/gm, '')
    .replace(/^\*\*Title.*$/gm, '')
    .replace(/^\*\*H1:\*\*.*$/gm, '')
    .replace(/^\*\*Подзаголовок:\*\*.*$/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function normalizeGeoClaims(value: string): string {
  return value
    .replace(/Производство бетона в Жуковском — завод ПСК Прогресс/g, 'Производство бетона для поставок в Жуковский — ПСК Прогресс')
    .replace(/Производство товарного бетона на собственном заводе в Жуковском/g, 'Производство товарного бетона для поставок в Жуковский')
    .replace(/на собственном заводе в Жуковском/g, 'на производственной площадке')
    .replace(/собственном заводе в Жуковском/g, 'производственной площадке')
    .replace(/завод в Жуковском/gi, 'производитель')
    .replace(/завода в Жуковском/gi, 'производителя')
    .replace(/с завода в Жуковском/gi, 'с производственной площадки')
    .replace(/от завода в Жуковском/gi, 'от производителя')
    .replace(/завод работает в Жуковском/gi, 'поставка в Жуковский идёт')
    .replace(/Бетонный завод в Жуковском/gi, 'Поставщик бетона для Жуковского');
}

export function getContentPage(ref: ContentPageRef): ContentPage {
  const raw = readRaw(ref.file);
  const title = pick(raw, [
    /^title:\s*["']?(.+?)["']?\s*$/m,
    /^\s*\|\s*Title\s*\|\s*([^|]+(?:\\\|[^|]+)*)\s*\|/m,
    /^\s*\|\s*Элемент\s*\|\s*Текст\s*\|.*\n\|[-\s|]+\|\s*\n\|\s*Title\s*\|\s*([^|]+(?:\\\|[^|]+)*)\s*\|/m,
    /^\s*-\s*\*\*Title:\*\*\s*(.+)$/m,
    /^\s*\*\*Title:\*\*\s*(.+)$/m,
    /^\s*\*\*Title\*\*.*:\s*[\r\n]+(.+)$/m,
  ], ref.crumb);
  const description = pick(raw, [
    /^description:\s*["']?(.+?)["']?\s*$/m,
    /^\s*\|\s*Description\s*\|\s*([^|]+(?:\\\|[^|]+)*)\s*\|/m,
    /^\s*\|\s*Description \(160\)\s*\|\s*([^|]+(?:\\\|[^|]+)*)\s*\|/m,
    /^\s*\*\*Description \(160\):\*\*\s*(.+)$/m,
    /^\s*-\s*\*\*Description:\*\*\s*(.+)$/m,
    /^\s*\*\*Description:\*\*\s*(.+)$/m,
  ], title);
  const h1 = pick(raw, [
    /^\s*\|\s*H1\s*\|\s*([^|]+(?:\\\|[^|]+)*)\s*\|/m,
    /^\s*\*\*H1:\*\*\s*(.+)$/m,
  ], title);
  const subtitle = pick(raw, [/^\s*\*\*Подзаголовок:\*\*\s*(.+)$/m], description);

  return {
    ...ref,
    title: normalizeGeoClaims(title),
    description: normalizeGeoClaims(description),
    h1: normalizeGeoClaims(h1),
    subtitle: normalizeGeoClaims(subtitle),
    body: normalizeGeoClaims(cleanBody(raw)),
  };
}

export async function renderContentMarkdown(content: string): Promise<string> {
  const result = await remark().use(remarkGfm).use(html).process(content);
  return result.toString();
}
