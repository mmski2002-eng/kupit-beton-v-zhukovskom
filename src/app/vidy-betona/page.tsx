import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbListSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Guarantees } from '@/components/Guarantees';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { vidyBetona } from '@/data/vidy-betona';
import { vidyBetonaSpec } from '@/data/vidy-betona-spec';
import styles from './page.module.css';

export const metadata: Metadata = pageMetadata({
  title: 'Бетон по назначению в Жуковском — фундамент, стяжка, пол, отмостка | ПСК «Прогресс»',
  description: 'Бетон под конкретную задачу: фундамент, стяжка, пол, отмостка, дорожный. Марки, цены, расчёт объёма от завода ООО «ПСК «Прогресс» в Жуковском.',
  path: '/vidy-betona/',
});

export default function VidyBetonaHubPage() {
  const items = Object.entries(vidyBetona);
  const specItems = Object.entries(vidyBetonaSpec);

  return (
    <>
      <Header />

      <main>
        <Hero
          badge="Виды бетона"
          title="Бетон под вашу задачу"
          subtitle="Марка, класс и цена зависят от того, что вы строите. Выберите назначение — покажем нужный бетон, таблицу расчёта объёма и технические требования."
          video={false}
        />

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Выберите, для чего нужен бетон</h2>
            </div>

            <ul className={styles.grid}>
              {items.map(([slug, data]) => (
                <li className={styles.card} key={slug}>
                  <a href={`/vidy-betona/${slug}/`}>
                    <h3>{data.navLabel}</h3>
                    <p>{data.gradeTableLead}</p>
                    <span className={styles.cardLink}>Подобрать марку →</span>
                  </a>
                </li>
              ))}
            </ul>

            <p className="form-note">Ещё 5 назначений (перекрытия, сваи, бассейн, баня, забор) — в работе, добавим по готовности контента.</p>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="section__head">
              <h2>Специальные виды бетона</h2>
            </div>

            <ul className={styles.grid}>
              {specItems.map(([slug, data]) => (
                <li className={styles.card} key={slug}>
                  <a href={`/vidy-betona/${slug}/`}>
                    <h3>{data.navLabel}</h3>
                    <p>{data.sub}</p>
                    <span className={styles.cardLink}>Подробнее →</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Guarantees title="Четыре гарантии на каждый заказ" />

        <FAQ title="Частые вопросы" />

        <FinalCTA title="Не нашли нужное назначение — позвоните, подберём марку" />
      </main>

      <Footer />

      <JsonLd
        data={breadcrumbListSchema([
          { name: 'Главная', url: '/' },
          { name: 'Виды бетона', url: '/vidy-betona/' },
        ])}
      />
    </>
  );
}
