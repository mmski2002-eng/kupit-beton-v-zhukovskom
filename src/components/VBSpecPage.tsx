import { LeadForm } from './LeadForm';
import { Calculator } from './Calculator';
import { Guarantees } from './Guarantees';
import { FAQ } from './FAQ';
import { FinalCTA } from './FinalCTA';
import type { VBSpecData } from '@/data/vidy-betona-spec';
import styles from './VBSpecPage.module.css';

type NavItem = { slug: string; navLabel: string };

type VBSpecPageProps = {
  data: VBSpecData;
  slug: string;
  crumbParentLabel: string;
  crumbParentHref: string;
  chipsBase: string;
  chipsHeading: string;
  chipsItems: NavItem[];
};

export function VBSpecPage({ data, slug, crumbParentLabel, crumbParentHref, chipsBase, chipsHeading, chipsItems }: VBSpecPageProps) {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <nav className={styles.crumbs} aria-label="Хлебные крошки">
            <a href="/">Главная</a>
            <span>/</span>
            <a href={crumbParentHref}>{crumbParentLabel}</a>
            <span>/</span>
            <span aria-current="page">{data.navLabel}</span>
          </nav>

          <div className={styles.heroGrid}>
            <div>
              <h1>{data.h1}</h1>
              <p className={styles.heroSub}>{data.sub}</p>
              <ul className={styles.quickBadges}>
                {data.badges.map((badge) => (
                  <li key={badge}>{badge}</li>
                ))}
              </ul>
            </div>

            <div className={styles.formCard}>
              <h2 className={styles.formTitle}>Оформить заявку</h2>
              <LeadForm variant="short" note="Бесплатно · Без обязательств · Ответим за 15 минут" />
            </div>
          </div>
        </div>
      </section>

      {data.sections.map((section, i) => (
        <section className={`section ${i % 2 === 0 ? 'section--alt' : ''}`} key={i}>
          <div className="container">
            {section.kind === 'text' && (
              <>
                <div className="section__head">
                  <h2>{section.heading}</h2>
                </div>
                <div className={styles.text}>
                  {section.body.map((p, pi) => (
                    <p key={pi}>{p}</p>
                  ))}
                </div>
              </>
            )}

            {section.kind === 'table' && (
              <>
                <div className="section__head">
                  <h2>{section.heading}</h2>
                </div>
                {section.lead && <p className={styles.lead}>{section.lead}</p>}
                <div className="table-scroll">
                  <table className="data-table">
                    <thead>
                      <tr>
                        {section.table.headers.map((h) => (
                          <th key={h}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, ri) => (
                        <tr key={ri}>
                          {row.map((cell, ci) => (ci === row.length - 1 ? <td className="price" key={ci}>{cell}</td> : <td key={ci}>{cell}</td>))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {section.note && <p className="form-note">{section.note}</p>}
              </>
            )}

            {section.kind === 'cards' && (
              <>
                <div className="section__head">
                  <h2>{section.heading}</h2>
                </div>
                {section.lead && <p className={styles.lead}>{section.lead}</p>}
                <ul className={styles.cards}>
                  {section.cards.map((card) => (
                    <li className={styles.card} key={card.title}>
                      <h3>{card.title}</h3>
                      <p>{card.text}</p>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {section.kind === 'steps' && (
              <>
                <div className="section__head">
                  <h2>{section.heading}</h2>
                </div>
                <ol className={styles.steps}>
                  {section.steps.map((step) => (
                    <li key={step.title}>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </li>
                  ))}
                </ol>
              </>
            )}
          </div>
        </section>
      ))}

      {data.priceTables.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>{data.priceHeading}</h2>
            </div>
            {data.priceLead && <p className={styles.lead}>{data.priceLead}</p>}
            {data.priceTables.map((pt, pti) => (
              <div className={styles.priceBlock} key={pti}>
                {pt.label && <h3 className={styles.priceLabel}>{pt.label}</h3>}
                <div className="table-scroll">
                  <table className="data-table">
                    <thead>
                      <tr>
                        {pt.table.headers.map((h) => (
                          <th key={h}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {pt.table.rows.map((row, ri) => (
                        <tr key={ri}>
                          {row.map((cell, ci) => (ci === row.length - 1 ? <td className="price" key={ci}>{cell}</td> : <td key={ci}>{cell}</td>))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
            {data.priceNote && <p className="form-note">{data.priceNote}</p>}
          </div>
        </section>
      )}

      <Calculator title={`Рассчитайте стоимость: ${data.h1}`} />

      <Guarantees title="Четыре гарантии на каждый заказ" />

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

      <section className="section">
        <div className="container">
          <div className="section__head">
            <h2>{chipsHeading}</h2>
          </div>
          <ul className={styles.chips}>
            {chipsItems.map((item) => (
              <li key={item.slug}>
                <a
                  href={`${chipsBase}${item.slug}/`}
                  className={`${styles.chip} ${item.slug === slug ? styles.chipActive : ''}`}
                  aria-current={item.slug === slug ? 'page' : undefined}
                >
                  {item.navLabel}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCTA title={data.finalCtaTitle} />
    </>
  );
}
