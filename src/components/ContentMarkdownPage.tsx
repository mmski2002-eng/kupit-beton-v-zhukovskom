import { Header } from './Header';
import { LeadForm } from './LeadForm';
import { FinalCTA } from './FinalCTA';
import { Footer } from './Footer';
import { PlaceholderVisual, type PlaceholderVisualKind } from './PlaceholderVisual';
import type { ContentPage } from '@/lib/content-pages';
import styles from './ContentMarkdownPage.module.css';

type Props = {
  page: ContentPage;
  html: string;
};

const visualMap: Record<string, PlaceholderVisualKind[]> = {
  'o-kompanii': ['team', 'production'],
  'kontrol-kachestva': ['lab', 'document'],
  'pasport-kachestva': ['document', 'lab'],
  avtopark: ['mixer', 'pump'],
  proizvodstvo: ['production', 'mixer'],
  obekty: ['foundation', 'floor'],
  otzyvy: ['foundation', 'document'],
  'chastnym-licam': ['foundation', 'floor'],
  'stroitelnym-kompaniyam': ['production', 'mixer'],
  zastroyshchikam: ['production', 'pump'],
  proizvodstvam: ['floor', 'lab'],
  'na-granitnom-shchebne': ['aggregate', 'production'],
  'na-graviynom-shchebne': ['aggregate', 'mixer'],
  'na-izvestnyakovom-shchebne': ['aggregate'],
  'na-vtorichnom-shchebne': ['aggregate'],
  'po-klassu': ['production'],
  vodonepronicaemyy: ['waterproof', 'document'],
  morozostoykiy: ['winter', 'document'],
  'beton-100mm': ['floor', 'mixer'],
  peskobeton: ['floor', 'mixer'],
  rastvor: ['mortar', 'production'],
  'shtukaturnyy-rastvor': ['mortar'],
  'tsementnoe-moloko': ['mortar'],
  shcheben: ['aggregate'],
  granitnyy: ['aggregate'],
  graviynyy: ['aggregate'],
  izvestnyakovyy: ['aggregate'],
  vtorichnyy: ['aggregate'],
  keramzitobeton: ['mixer', 'aggregate'],
  fibrobeton: ['floor'],
  polistirolbeton: ['floor'],
  tsement: ['aggregate'],
  keramzit: ['aggregate'],
  pgs: ['aggregate'],
};

function visualsForPage(page: ContentPage): PlaceholderVisualKind[] {
  if (visualMap[page.slug]) return visualMap[page.slug]!;
  if (page.path.startsWith('/rastvor/')) return ['mortar', 'document'];
  if (page.path.startsWith('/peskobeton/')) return ['floor', 'mixer'];
  if (page.path.startsWith('/shcheben/') || page.path.startsWith('/pesok/')) return ['aggregate'];
  return ['production'];
}

export function ContentMarkdownPage({ page, html }: Props) {
  const visuals = visualsForPage(page);

  return (
    <>
      <Header />

      <main>
        <section className={`section ${styles.hero}`}>
          <div className="container">
            <nav className={styles.crumbs} aria-label="Хлебные крошки">
              <a href="/">Главная</a>
              {page.parent && (
                <>
                  <span>/</span>
                  <a href={page.parent.href}>{page.parent.label}</a>
                </>
              )}
              <span>/</span>
              <span aria-current="page">{page.crumb}</span>
            </nav>

            <div className={styles.heroGrid}>
              <div>
                <h1>{page.h1}</h1>
                <p className={styles.heroSub}>{page.subtitle}</p>
              </div>

              <div className={styles.sideStack}>
                <PlaceholderVisual kind={visuals[0]!} priority />
                <div className={styles.formCard}>
                  <h2 className={styles.formTitle}>Оформить заявку</h2>
                  <LeadForm variant="short" note="Бесплатно · Без обязательств · Ответим за 15 минут" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <article className={styles.article} dangerouslySetInnerHTML={{ __html: html }} />
            {visuals.length > 1 && (
              <div className={styles.visualGrid}>
                {visuals.slice(1).map((kind) => (
                  <PlaceholderVisual kind={kind} key={kind} />
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="section section--alt" id="zayavka">
          <div className={`container ${styles.cta}`}>
            <h2>Оставить заявку</h2>
            <LeadForm variant="full" submitLabel="Отправить заявку" />
          </div>
        </section>

        <FinalCTA title="Нужна консультация по марке, объёму или доставке?" />
      </main>

      <Footer />
    </>
  );
}
