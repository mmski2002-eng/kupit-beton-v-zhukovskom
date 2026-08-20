import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/metadata';
import { articleSchema, breadcrumbListSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import { Header } from '@/components/Header';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { getAllBlogSlugs, getBlogPost, renderBlogContent } from '@/lib/blog';
import { company } from '@/data/site';
import styles from './page.module.css';

type Params = { slug: string };

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  if (!getAllBlogSlugs().includes(slug)) return {};
  const post = getBlogPost(slug);
  return pageMetadata({ title: `${post.title} — блог ${company.brand}`, description: post.description, path: `/blog/${slug}/` });
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  if (!getAllBlogSlugs().includes(slug)) notFound();

  const post = getBlogPost(slug);
  const html = await renderBlogContent(post.content);

  return (
    <>
      <Header />

      <main>
        <section className={`section ${styles.articleSection}`}>
          <div className="container">
            <nav className={styles.crumbs} aria-label="Хлебные крошки">
              <a href="/">Главная</a> <span>/</span> <a href="/blog/">Блог</a> <span>/</span> <span>{post.title}</span>
            </nav>

            <article className={styles.article} dangerouslySetInnerHTML={{ __html: html }} />

            <a className={styles.back} href="/blog/">
              ← Все статьи блога
            </a>
          </div>
        </section>

        <FinalCTA title="Остались вопросы по расчёту или заказу бетона?" />
      </main>

      <Footer />

      <JsonLd data={articleSchema({ title: post.title, description: post.description, url: `/blog/${slug}/` })} />
      <JsonLd
        data={breadcrumbListSchema([
          { name: 'Главная', url: '/' },
          { name: 'Блог', url: '/blog/' },
          { name: post.title, url: `/blog/${slug}/` },
        ])}
      />
    </>
  );
}
