import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbListSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { VBPurposePage } from '@/components/VBPurposePage';
import { VBSpecPage } from '@/components/VBSpecPage';
import { vidyBetona } from '@/data/vidy-betona';
import { vidyBetonaSpec } from '@/data/vidy-betona-spec';

type Params = { slug: string };

export function generateStaticParams() {
  return [...Object.keys(vidyBetona), ...Object.keys(vidyBetonaSpec)].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const data = vidyBetona[slug] ?? vidyBetonaSpec[slug];
  if (!data) return {};
  return pageMetadata({ title: data.title, description: data.description, path: `/vidy-betona/${slug}/` });
}

export default async function VidyBetonaSlugPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const purposeData = vidyBetona[slug];
  const specData = vidyBetonaSpec[slug];
  if (!purposeData && !specData) notFound();

  const navLabel = (purposeData ?? specData)!.navLabel;

  return (
    <>
      <Header />

      <main>
        {purposeData ? (
          <VBPurposePage data={purposeData} slug={slug} />
        ) : (
          <VBSpecPage
            data={specData!}
            slug={slug}
            crumbParentLabel="Виды бетона"
            crumbParentHref="/vidy-betona/"
            chipsBase="/vidy-betona/"
            chipsHeading="Специальные виды бетона"
            chipsItems={Object.entries(vidyBetonaSpec).map(([s, d]) => ({ slug: s, navLabel: d.navLabel }))}
          />
        )}
      </main>

      <Footer />

      <JsonLd
        data={breadcrumbListSchema([
          { name: 'Главная', url: '/' },
          { name: 'Виды бетона', url: '/vidy-betona/' },
          { name: navLabel, url: `/vidy-betona/${slug}/` },
        ])}
      />
    </>
  );
}
