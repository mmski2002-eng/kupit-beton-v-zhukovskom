import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbListSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { VBSpecPage } from '@/components/VBSpecPage';
import { zalivka } from '@/data/zalivka';

type Params = { slug: string };

export function generateStaticParams() {
  return Object.keys(zalivka).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const data = zalivka[slug];
  if (!data) return {};
  return pageMetadata({ title: data.title, description: data.description, path: `/zalivka/${slug}/` });
}

export default async function ZalivkaSlugPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const data = zalivka[slug];
  if (!data) notFound();

  const chipsItems = Object.entries(zalivka).map(([s, d]) => ({ slug: s, navLabel: d.navLabel }));

  return (
    <>
      <Header />

      <main>
        <VBSpecPage
          data={data}
          slug={slug}
          crumbParentLabel="Заливка под ключ"
          crumbParentHref="/zalivka/"
          chipsBase="/zalivka/"
          chipsHeading="Заливка других конструкций"
          chipsItems={chipsItems}
        />
      </main>

      <Footer />

      <JsonLd
        data={breadcrumbListSchema([
          { name: 'Главная', url: '/' },
          { name: 'Заливка под ключ', url: '/zalivka/' },
          { name: data.navLabel, url: `/zalivka/${slug}/` },
        ])}
      />
    </>
  );
}
