import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { metadataForContentPage, renderContentPage } from '@/lib/content-route';
import { audiencePages } from '@/lib/content-pages';

type Params = { audience: string };

export function generateStaticParams() {
  return audiencePages.map((page) => ({ audience: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { audience } = await params;
  const ref = audiencePages.find((page) => page.slug === audience);
  return ref ? metadataForContentPage(ref) : {};
}

export default async function AudiencePage({ params }: { params: Promise<Params> }) {
  const { audience } = await params;
  const ref = audiencePages.find((page) => page.slug === audience);
  if (!ref) notFound();
  return renderContentPage(ref);
}
