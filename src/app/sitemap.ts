import type { MetadataRoute } from 'next';
import { company } from '@/data/site';
import { grades } from '@/data/grades';
import { cities } from '@/data/cities';
import { pumps } from '@/data/pumps';
import { vidyBetona } from '@/data/vidy-betona';
import { vidyBetonaSpec } from '@/data/vidy-betona-spec';
import { zalivka } from '@/data/zalivka';
import { getAllBlogSlugs } from '@/lib/blog';
import { allContentPageRefs } from '@/lib/content-pages';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    '/',
    '/tovarnyy-beton/',
    '/vidy-betona/',
    '/zalivka/',
    '/blog/',
    '/ceny/',
    '/kalkulyator/',
    '/dostavka/',
    '/dostavka/mikserom/',
    '/dostavka/malymi-obyomami/',
    '/dostavka/srochnaya/',
    '/dostavka/po-grafiku/',
    '/dostavka/samovyvoz/',
    '/dostavka-i-oplata/',
    '/arenda-betononasosa/',
    '/arenda-betononasosa/stacionarnyy/',
    '/arenda-miksera/',
    '/podacha-betona/',
    '/laboratoriya/',
    '/laboratoriya/podbor-sostava/',
    '/zakazat/',
    '/korzina/',
    '/optom/',
    '/akcii/',
    '/nashli-deshevle/',
    '/kontakty/',
    '/sertifikaty/',
    '/politika-konfidencialnosti/',
    '/publichnaya-oferta/',
  ];

  const dynamicPaths = [
    ...Object.keys(grades).map((slug) => `/tovarnyy-beton/${slug}/`),
    ...Object.keys(cities).map((slug) => `/${slug}/`),
    ...Object.keys(pumps).map((slug) => `/arenda-betononasosa/${slug}/`),
    ...Object.keys(vidyBetona).map((slug) => `/vidy-betona/${slug}/`),
    ...Object.keys(vidyBetonaSpec).map((slug) => `/vidy-betona/${slug}/`),
    ...Object.keys(zalivka).map((slug) => `/zalivka/${slug}/`),
    ...allContentPageRefs.map((page) => page.path),
    ...getAllBlogSlugs().map((slug) => `/blog/${slug}/`),
  ];

  return [...new Set([...staticPaths, ...dynamicPaths])].map((path) => ({
    url: new URL(path, company.site).href,
    lastModified: new Date(),
  }));
}
