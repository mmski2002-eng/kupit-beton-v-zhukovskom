import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { metadataForContentPage, renderContentPage } from '@/lib/content-route';
import { shchebenPages } from '@/lib/content-pages';

type Params = { slug: string };

export function generateStaticParams() {
  return shchebenPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const ref = shchebenPages.find((page) => page.slug === slug);
  return ref ? metadataForContentPage(ref) : {};
}

export default async function ShchebenSlugPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const ref = shchebenPages.find((page) => page.slug === slug);
  if (!ref) notFound();
  return renderContentPage({ ...ref, parent: { label: 'Щебень', href: '/shcheben/' } });
}
