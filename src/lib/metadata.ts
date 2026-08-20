import type { Metadata } from 'next';
import { company } from '@/data/site';

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
};

export function pageMetadata({ title, description, path, noindex = false }: PageMetaInput): Metadata {
  const canonical = new URL(path, company.site).href;
  return {
    title,
    description,
    alternates: { canonical },
    robots: noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: 'website',
      title,
      description,
      url: canonical,
      locale: 'ru_RU',
    },
  };
}
