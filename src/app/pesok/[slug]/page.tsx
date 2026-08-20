import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { metadataForContentPage, renderContentPage } from '@/lib/content-route';
import { pesokPages } from '@/lib/content-pages';

type Params = { slug: string };

export function generateStaticParams() {
  return pesokPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const ref = pesokPages.find((page) => page.slug === slug);
  return ref ? metadataForContentPage(ref) : {};
}

export default async function PesokSlugPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const ref = pesokPages.find((page) => page.slug === slug);
  if (!ref) notFound();
  return renderContentPage({ ...ref, parent: { label: 'Песок', href: '/pesok/' } });
}
