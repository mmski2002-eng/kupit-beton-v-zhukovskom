import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbListSchema, serviceSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import { ContentMarkdownPage } from '@/components/ContentMarkdownPage';
import { getContentPage, renderContentMarkdown, type ContentPageRef } from '@/lib/content-pages';

export function metadataForContentPage(ref: ContentPageRef): Metadata {
  const page = getContentPage(ref);
  return pageMetadata({ title: page.title, description: page.description, path: page.path });
}

export async function renderContentPage(ref: ContentPageRef) {
  const page = getContentPage(ref);
  const html = await renderContentMarkdown(page.body);
  const crumbs = [
    { name: 'Главная', url: '/' },
    ...(page.parent ? [{ name: page.parent.label, url: page.parent.href }] : []),
    { name: page.crumb, url: page.path },
  ];

  return (
    <>
      <ContentMarkdownPage page={page} html={html} />
      <JsonLd data={serviceSchema({ serviceType: page.h1, areaServed: 'Жуковский и Раменский округ' })} />
      <JsonLd data={breadcrumbListSchema(crumbs)} />
    </>
  );
}
