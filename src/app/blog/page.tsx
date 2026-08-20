import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbListSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import { Header } from '@/components/Header';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { getAllBlogPosts } from '@/lib/blog';
import styles from './page.module.css';

export const metadata: Metadata = pageMetadata({
  title: 'Блог о бетоне — статьи и советы завода ПСК «Прогресс»',
  description:
    'Расчёт объёма бетона, марки и классы прочности, приёмка на объекте, зимняя заливка — практические статьи от завода-производителя бетона в Жуковском.',
  path: '/blog/',
});

export default function BlogIndexPage() {
  const posts = getAllBlogPosts().sort((a, b) => a.title.localeCompare(b.title, 'ru'));

  return (
    <>
      <Header />

      <main>
        <section className="section">
          <div className="container">
            <div className="section__head">
              <h1>Блог о бетоне</h1>
              <p className="section__lead">
                Расчёт объёма, выбор марки, приёмка на объекте, работа в мороз и другие практические вопросы —
                отвечаем без воды.
              </p>
            </div>

            <ul className={styles.posts}>
              {posts.map((post) => (
                <li className={styles.postCard} key={post.slug}>
                  <a href={`/blog/${post.slug}/`}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <span className={styles.postLink}>Читать →</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <FinalCTA title="Не нашли ответ на свой вопрос?" />
      </main>

      <Footer />

      <JsonLd
        data={breadcrumbListSchema([
          { name: 'Главная', url: '/' },
          { name: 'Блог', url: '/blog/' },
        ])}
      />
    </>
  );
}
