import { getAllBlogSlugs, getBlogPost } from '@/lib/blog';
import styles from './BlogTeaser.module.css';

type BlogTeaserProps = {
  title?: string;
  slugs: string[];
};

export function BlogTeaser({ title = 'Из блога', slugs }: BlogTeaserProps) {
  const allSlugs = new Set(getAllBlogSlugs());
  const posts = slugs.filter((slug) => allSlugs.has(slug)).map((slug) => getBlogPost(slug));

  return (
    <section className="section">
      <div className="container">
        <div className="section__head">
          <h2>{title}</h2>
        </div>

        <ul className={styles.teaser}>
          {posts.map((post) => (
            <li key={post.slug}>
              <a href={`/blog/${post.slug}/`}>
                <h3>{post.title}</h3>
                <span>Читать →</span>
              </a>
            </li>
          ))}
        </ul>

        <a className={styles.all} href="/blog/">
          Все статьи блога →
        </a>
      </div>
    </section>
  );
}
