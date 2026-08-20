import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbListSchema, serviceSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import { Header } from '@/components/Header';
import { LeadForm } from '@/components/LeadForm';
import { Calculator } from '@/components/Calculator';
import { Guarantees } from '@/components/Guarantees';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { cities } from '@/data/cities';
import styles from './page.module.css';

type Params = { city: string };

export function generateStaticParams() {
  return Object.keys(cities).map((city) => ({ city }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { city } = await params;
  const data = cities[city];
  if (!data) return {};
  return pageMetadata({ title: data.title, description: data.description, path: `/${city}/` });
}

function total(data: (typeof cities)[string], price: number): string {
  if (data.deliveryFee === 'free') return `${price.toLocaleString('ru-RU')} ₽`;
  if (data.deliveryFee === 'ask') return `от ${price.toLocaleString('ru-RU')} ₽`;
  return `${(price + data.deliveryFee).toLocaleString('ru-RU')} ₽`;
}

export default async function CityPage({ params }: { params: Promise<Params> }) {
  const { city: slug } = await params;
  const data = cities[slug];
  if (!data) notFound();

  return (
    <>
      <Header />

      <main>
        <section className={styles.hero}>
          <div className="container">
            <nav className={styles.crumbs} aria-label="Хлебные крошки">
              <a href="/">Главная</a>
              <span>/</span>
              <span aria-current="page">{data.h1}</span>
            </nav>

            <div className={styles.grid}>
              <div>
                <h1>{data.h1}</h1>
                <p className={styles.sub}>{data.heroLead}</p>

                <ul className={styles.quickBadges}>
                  {data.badges.map((badge) => (
                    <li key={badge}>{badge}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.form}>
                <h2 className={styles.formTitle}>Оформить заявку</h2>
                <LeadForm variant="short" note="Бесплатно · Без обязательств · Ответим за 15 минут" />
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className={`container ${styles.why}`}>
            <div className="section__head">
              <h2>Ближайший завод с вашим бетоном</h2>
            </div>
            {data.whyParagraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>

        {data.isZoneHub && data.zoneTowns && (
          <section className="section">
            <div className="container">
              <div className="section__head">
                <h2>Куда доставляем бесплатно</h2>
              </div>
              <ul className={styles.towns}>
                {data.zoneTowns.map((town) => (
                  <li key={town}>{town}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {data.isZoneHub && data.comparisonRows && (
          <section className="section section--alt">
            <div className="container">
              <div className="section__head">
                <h2>Сравните условия сами</h2>
              </div>
              <div className="table-scroll">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Условие</th>
                      <th>ПСК «Прогресс»</th>
                      <th>Конкуренты (как правило)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.comparisonRows.map((row) => (
                      <tr key={row.label}>
                        <td>{row.label}</td>
                        <td className="price">{row.us}</td>
                        <td>{row.competitors}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Цены на бетон с доставкой{data.isZoneHub ? '' : ` в ${data.h1.split(' ').pop()}`}</h2>
              <p className="section__lead">Доставка: {data.deliveryLabel}</p>
            </div>

            <div className="table-scroll">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Марка</th>
                    <th>Класс</th>
                    <th>Цена бетона</th>
                    <th>Доставка</th>
                    <th>Итого за 1 м³</th>
                  </tr>
                </thead>
                <tbody>
                  {data.priceRows.map((row) => (
                    <tr key={row.grade}>
                      <td>{row.grade}</td>
                      <td>{row.klass}</td>
                      <td className="price">{row.price.toLocaleString('ru-RU')} ₽</td>
                      <td>{data.deliveryLabel}</td>
                      <td className="price">{total(data, row.price)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="form-note">Цены с НДС. Ожидание миксера: 60 мин бесплатно, далее 1 000 ₽/час.</p>
          </div>
        </section>

        <Calculator title="Рассчитайте стоимость с доставкой" />

        <Guarantees title="Четыре гарантии на каждый заказ" />

        <section className="section section--alt">
          <div className={`container ${styles.seoText}`}>
            <div className="section__head">
              <h2>{data.h1}</h2>
            </div>
            {data.seoText.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>

        <FAQ title="Часто задаваемые вопросы" items={data.faqItems} />

        <FinalCTA title={data.finalCtaTitle} />
      </main>

      <Footer />

      <JsonLd
        data={breadcrumbListSchema([
          { name: 'Главная', url: '/' },
          { name: data.h1, url: `/${slug}/` },
        ])}
      />
      <JsonLd data={serviceSchema({ serviceType: 'Доставка товарного бетона', areaServed: data.h1 })} />
    </>
  );
}
