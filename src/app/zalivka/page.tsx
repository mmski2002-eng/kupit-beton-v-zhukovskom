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
import { zalivka } from '@/data/zalivka';
import styles from './page.module.css';

export const metadata: Metadata = pageMetadata({
  title: 'Заливка бетона под ключ в Жуковском — фундамент, стяжка, пол, перекрытия',
  description: 'Заливка фундамента, стяжки, пола и монолитных перекрытий бетоном от завода ООО «ПСК «Прогресс» в Жуковском. Расчёт объёма, координация с насосом, документы.',
  path: '/zalivka/',
});

export default function ZalivkaHubPage() {
  const items = Object.entries(zalivka);

  return (
    <>
      <Header />

      <main>
        <Hero
          badge="Заливка под ключ"
          title="Заливка бетонных конструкций под ключ"
          subtitle="Марка, расчёт объёма и порядок работ под конкретную задачу: фундамент, стяжка, пол или монолитное перекрытие. Бетон и координация с насосом — от одного завода."
          video={false}
        />

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Выберите конструкцию</h2>
            </div>

            <ul className={styles.grid}>
              {items.map(([slug, data]) => (
                <li className={styles.card} key={slug}>
                  <a href={`/zalivka/${slug}/`}>
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

        <FinalCTA title="Не нашли нужную конструкцию — позвоните, подскажем" />
      </main>

      <Footer />

      <JsonLd
        data={breadcrumbListSchema([
          { name: 'Главная', url: '/' },
          { name: 'Заливка под ключ', url: '/zalivka/' },
        ])}
      />
    </>
  );
}
