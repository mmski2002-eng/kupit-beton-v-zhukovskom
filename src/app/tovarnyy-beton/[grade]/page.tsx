import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/metadata';
import { productSchema, breadcrumbListSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import { Header } from '@/components/Header';
import { LeadForm } from '@/components/LeadForm';
import { GradeCartButtons } from '@/components/GradeCartButtons';
import { Calculator } from '@/components/Calculator';
import { PriceCatalog } from '@/components/PriceCatalog';
import { Guarantees } from '@/components/Guarantees';
import { B2BBlock } from '@/components/B2BBlock';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { PlaceholderVisual, type PlaceholderVisualKind } from '@/components/PlaceholderVisual';
import { grades } from '@/data/grades';
import { tovaryBetonPages } from '@/lib/content-pages';
import { metadataForContentPage, renderContentPage } from '@/lib/content-route';
import styles from './page.module.css';

type Params = { grade: string };

function visualForGrade(slug: string): PlaceholderVisualKind {
  if (slug === 'm600' || slug === 'm500' || slug === 'm450') return 'lab';
  if (slug === 'm400' || slug === 'm350') return 'production';
  if (slug === 'm300' || slug === 'm250') return 'foundation';
  if (slug === 'm200' || slug === 'm150') return 'floor';
  return 'mixer';
}

export function generateStaticParams() {
  return [...Object.keys(grades), ...tovaryBetonPages.map((page) => page.slug)].map((grade) => ({ grade }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { grade } = await params;
  const data = grades[grade];
  const ref = tovaryBetonPages.find((page) => page.slug === grade);
  if (ref) return metadataForContentPage(ref);
  if (!data) return {};
  return pageMetadata({ title: data.title, description: data.description, path: `/tovarnyy-beton/${grade}/` });
}

export default async function GradePage({ params }: { params: Promise<Params> }) {
  const { grade: slug } = await params;
  const data = grades[slug];
  const ref = tovaryBetonPages.find((page) => page.slug === slug);
  if (ref) return renderContentPage({ ...ref, parent: { label: 'Товарный бетон', href: '/tovarnyy-beton/' } });
  if (!data) notFound();

  const gradeLabel = data.badge.split(' · ')[0]!.replace('Марка ', '');
  const material = data.gravelPrice ? 'gravel' : 'granite';

  const offers = [];
  if (data.gravelPrice) offers.push({ name: `${gradeLabel} на гравии`, price: data.gravelPrice, url: `/tovarnyy-beton/${slug}/` });
  if (data.granitePrice) offers.push({ name: `${gradeLabel} на граните`, price: data.granitePrice, url: `/tovarnyy-beton/${slug}/` });

  return (
    <>
      <Header />

      <main>
        <section className={styles.gradeHero}>
          <div className="container">
            <nav className={styles.crumbs} aria-label="Хлебные крошки">
              <a href="/">Главная</a>
              <span>/</span>
              <a href="/tovarnyy-beton/">Товарный бетон</a>
              <span>/</span>
              <span aria-current="page">{gradeLabel}</span>
            </nav>

            <div className={styles.grid}>
              <div>
                <span className={`pill-badge ${styles.badge}`}>{data.badge}</span>
                <h1>{data.h1}</h1>
                <p className={styles.sub}>{data.sub}</p>

                <ul className={styles.quickBadges}>
                  {data.quickBadges.map((badge) => (
                    <li key={badge}>{badge}</li>
                  ))}
                </ul>

                <div className={`table-scroll ${styles.params}`}>
                  <table className="data-table">
                    <tbody>
                      {data.heroParams.map(([label, value]) => (
                        <tr key={label}>
                          <td>{label}</td>
                          <td className="price">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <PlaceholderVisual kind={visualForGrade(slug)} className={styles.heroVisual} priority />
              </div>

              <div className={styles.form}>
                <GradeCartButtons gradeLabel={gradeLabel} klass={data.klass} gravelPrice={data.gravelPrice} granitePrice={data.granitePrice} />

                <h2 className={styles.formTitle}>Заказать {gradeLabel} сразу, без корзины</h2>
                <LeadForm
                  variant="full"
                  grade={gradeLabel}
                  volume={10}
                  submitLabel={`Заказать ${gradeLabel}`}
                  note="Бесплатно · Без обязательств · Ответим за 15 минут"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="section__head">
              <h2>{data.usageTitle}</h2>
            </div>

            <ul className={styles.usage}>
              {data.usage.map((item) => (
                <li className={styles.usageCard} key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>

            {data.usageNote && <p className={styles.usageNote}>{data.usageNote}</p>}
          </div>
        </section>

        <section className="section">
          <div className={`container ${styles.specs}`}>
            <div className="section__head">
              <h2>{data.specsTitle}</h2>
            </div>

            <div className="table-scroll">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Характеристика</th>
                    <th>Значение</th>
                  </tr>
                </thead>
                <tbody>
                  {data.specs.map(([label, value]) => (
                    <tr key={label}>
                      <td>{label}</td>
                      <td className="price">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className={`form-note ${styles.specsNote}`}>{data.specsNote}</p>
          </div>
        </section>

        <PriceCatalog title="Цены на товарный бетон с доставкой в Жуковском" lead={data.priceLead} highlightGrade={gradeLabel} />

        <Calculator title={`Калькулятор стоимости ${gradeLabel}`} grade={gradeLabel} material={material} volume={data.gravelPrice ? 12 : 6} />

        <Guarantees title="Четыре гарантии на каждый заказ" />

        <B2BBlock title="Работаем с юридическими лицами и по тендерам" items={data.b2bItems} cta={data.b2bCta} button={data.b2bButton} />

        <section className="section section--alt">
          <div className={`container ${styles.seoText}`}>
            <div className="section__head">
              <h2>{data.seoHeading}</h2>
            </div>
            {data.seoText.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>

        <FAQ title={data.faqTitle} items={data.faqItems} />

        <FinalCTA title={data.finalCtaTitle} grade={gradeLabel} />
      </main>

      <Footer />

      <JsonLd
        data={productSchema({
          name: `Товарный бетон ${gradeLabel} (${data.klass})`,
          description: data.description,
          sku: gradeLabel.toUpperCase(),
          offers,
        })}
      />
      <JsonLd
        data={breadcrumbListSchema([
          { name: 'Главная', url: '/' },
          { name: 'Товарный бетон', url: '/tovarnyy-beton/' },
          { name: gradeLabel, url: `/tovarnyy-beton/${slug}/` },
        ])}
      />
    </>
  );
}
