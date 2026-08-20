import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbListSchema, serviceSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import { Header } from '@/components/Header';
import { LeadForm } from '@/components/LeadForm';
import { Guarantees } from '@/components/Guarantees';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { PlaceholderVisual } from '@/components/PlaceholderVisual';
import { pumps, pumpPriceRows } from '@/data/pumps';
import { company } from '@/data/site';
import styles from '@/styles/subpage.module.css';

type Params = { pump: string };

export function generateStaticParams() {
  return Object.keys(pumps).map((pump) => ({ pump }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { pump } = await params;
  const data = pumps[pump];
  if (!data) return {};
  return pageMetadata({ title: data.title, description: data.description, path: `/arenda-betononasosa/${pump}/` });
}

export default async function PumpPage({ params }: { params: Promise<Params> }) {
  const { pump: slug } = await params;
  const data = pumps[slug];
  if (!data) notFound();

  return (
    <>
      <Header />

      <main>
        <section className={`section ${styles.hero}`}>
          <div className="container">
            <nav className={styles.crumbs} aria-label="Хлебные крошки">
              <a href="/">Главная</a>
              <span>/</span>
              <a href="/arenda-betononasosa/">Аренда бетононасоса</a>
              <span>/</span>
              <span aria-current="page">{data.h1}</span>
            </nav>

            <div className={styles.heroGrid}>
              <div>
                <h1>{data.h1}</h1>
                <p className={styles.heroSub}>{data.heroLead}</p>
                <ul className={styles.quickBadges}>
                  {data.badges.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.sideStack}>
                <PlaceholderVisual kind="pump" priority />
                <div className={styles.formCard}>
                  <h2 className={styles.formTitle}>Оставить заявку</h2>
                  <LeadForm variant="short" note="Бесплатно · Без обязательств · Ответим за 15 минут" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Технические характеристики</h2>
            </div>
            <div className="table-scroll">
              <table className="data-table">
                <tbody>
                  {data.specs.map((s) => (
                    <tr key={s.label}>
                      <td className="grade-cell">
                        <b>{s.label}</b>
                      </td>
                      <td>{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="section__head">
              <h2>Где применяется</h2>
            </div>
            <ul className={styles.caseGrid3}>
              {data.useCases.map((c) => (
                <li className={styles.caseCard} key={c.title}>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Аренда бетононасосов — цены</h2>
            </div>
            <div className="table-scroll">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>АБН</th>
                    <th>Стрела</th>
                    <th>Час</th>
                    <th>Смена 8 ч</th>
                    <th>Подходит для</th>
                  </tr>
                </thead>
                <tbody>
                  {pumpPriceRows.map((r) => (
                    <tr key={r.model} className={r.model === data.highlightModel ? styles.rowCurrent : undefined}>
                      <td className="grade-cell">
                        <b>{r.model}</b>
                      </td>
                      <td>{r.boom}</td>
                      <td className="price">{r.hour.toLocaleString('ru-RU')} ₽</td>
                      <td className="price">{r.shift.toLocaleString('ru-RU')} ₽</td>
                      <td>{r.fit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="form-note">
              Минимальный заказ — 1 час. В стоимость включены оператор и техническое обслуживание насоса. Доставка
              насоса на объект — уточняйте при заказе.
            </p>
          </div>
        </section>

        <Guarantees title="Четыре гарантии на каждый заказ" />

        <section className="section">
          <div className={`container ${styles.seoText}`}>
            <div className="section__head">
              <h2>{data.seoTitle}</h2>
            </div>
            {data.seoParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <FAQ title="Часто задаваемые вопросы" items={data.faqItems} />

        <section className="section section--alt" id="zayavka">
          <div className={`container ${styles.subForm}`}>
            <h2>Заказать {data.h1.toLowerCase()}</h2>
            <LeadForm variant="full" submitLabel="Отправить заявку" />
          </div>
        </section>
      </main>

      <Footer />

      <JsonLd
        data={breadcrumbListSchema([
          { name: 'Главная', url: '/' },
          { name: 'Аренда бетононасоса', url: '/arenda-betononasosa/' },
          { name: data.h1, url: `/arenda-betononasosa/${slug}/` },
        ])}
      />
      <JsonLd data={serviceSchema({ serviceType: 'Аренда автобетононасоса', areaServed: `${company.city} и Раменский округ` })} />
    </>
  );
}
