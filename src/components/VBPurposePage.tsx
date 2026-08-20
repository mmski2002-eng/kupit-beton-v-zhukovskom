import { LeadForm } from './LeadForm';
import { Calculator } from './Calculator';
import { Guarantees } from './Guarantees';
import { FAQ } from './FAQ';
import { FinalCTA } from './FinalCTA';
import { company } from '@/data/site';
import { vidyBetona, type VBData } from '@/data/vidy-betona';
import styles from './VBPurposePage.module.css';

export function VBPurposePage({ data, slug }: { data: VBData; slug: string }) {
  const navEntries = Object.entries(vidyBetona);

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <nav className={styles.crumbs} aria-label="Хлебные крошки">
            <a href="/">Главная</a>
            <span>/</span>
            <a href="/vidy-betona/">Виды бетона</a>
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

      <section className="section section--alt">
        <div className="container">
          <div className="section__head">
            <h2>{data.gradeTableTitle}</h2>
          </div>
          <p className={styles.leadText}>{data.gradeTableLead}</p>

          <div className="table-scroll">
            <table className="data-table">
              <thead>
                <tr>
                  {data.gradeTable.headers.map((h) => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.gradeTable.rows.map((row, ri) => (
                  <tr key={ri}>
                    {row.map((cell, i) => (i === row.length - 1 ? <td className="price" key={i}>{cell}</td> : <td key={i}>{cell}</td>))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="form-note">Не уверены с маркой? Позвоните — подберём бесплатно: {company.phone}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <h2>{data.volumeTitle}</h2>
          </div>
          <p className={styles.leadText}>{data.volumeFormula}</p>
          <p className={styles.leadText}>{data.volumeExample}</p>

          <div className="table-scroll">
            <table className="data-table">
              <thead>
                <tr>
                  {data.volumeTable.headers.map((h) => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.volumeTable.rows.map((row, ri) => (
                  <tr key={ri}>
                    {row.map((cell, i) => (i === row.length - 1 ? <td className="price" key={i}>{cell}</td> : <td key={i}>{cell}</td>))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="form-note">Специалист приедет, посчитает, заверит актом — бесплатно: {company.phone}</p>
        </div>
      </section>

      <Calculator title={`Рассчитайте стоимость: ${data.h1}`} />

      <section className="section section--alt">
        <div className={`container ${styles.specs}`}>
          <div className="section__head">
            <h2>{data.specsTitle}</h2>
          </div>

          <div className="table-scroll">
            <table className="data-table">
              <thead>
                <tr>
                  {data.specsTable.headers.map((h) => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.specsTable.rows.map((row, ri) => (
                  <tr key={ri}>
                    {row.map((cell, i) => (
                      <td key={i}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Guarantees title="Четыре гарантии на каждый заказ" />

      <section className="section">
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

      <section className="section section--alt">
        <div className="container">
          <div className="section__head">
            <h2>Бетон для других задач</h2>
          </div>
          <ul className={styles.chips}>
            {navEntries.map(([navSlug, navData]) => (
              <li key={navSlug}>
                <a
                  href={`/vidy-betona/${navSlug}/`}
                  className={`${styles.chip} ${navSlug === slug ? styles.chipActive : ''}`}
                  aria-current={navSlug === slug ? 'page' : undefined}
                >
                  {navData.navLabel}
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
