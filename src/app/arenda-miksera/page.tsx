import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbListSchema, serviceSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import { Header } from '@/components/Header';
import { LeadForm } from '@/components/LeadForm';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { company } from '@/data/site';
import styles from '@/styles/subpage.module.css';

export const metadata: Metadata = pageMetadata({
  title: 'Аренда автобетоносмесителя (миксера) 7 и 14 м³ в Жуковском',
  description:
    'Аренда автобетоносмесителя 7 и 14 м³ в Жуковском и районе. GPS-отслеживание, режим 8:00–22:00, перевозим ваш бетон с любого завода. Звоните: +7 (499) 111-72-62.',
  path: '/arenda-miksera/',
});

const scenarios = [
  { title: 'У вас работает свой завод (БСУ)', text: 'Нужна только машина, чтобы довезти бетон до объекта.' },
  { title: 'Замес в пути', text: 'Грузите сухую смесь на складе, добавляете воду по дороге и привозите готовый раствор.' },
  { title: 'Поддержание подвижности на дальних перегонах', text: 'Бетон нужно «держать» во вращающемся барабане.' },
  { title: 'Аренда на сезон под объект', text: 'Машина требуется постоянно, а держать свою невыгодно.' },
  { title: 'Перевозка бетона от стороннего завода', text: 'Поставщик ваш, машина наша.' },
];

const specs = [
  { param: 'Вместимость барабана', m7: '7 м³', m14: '14 м³' },
  { param: 'Полная масса', m7: '~26 т', m14: '~32 т' },
  { param: 'Ширина машины', m7: '2,5 м', m14: '2,6 м' },
  { param: 'Скорость вращения барабана', m7: '1–14 об/мин', m14: '1–14 об/мин' },
  { param: 'GPS-трекинг', m7: 'Да (доступ клиенту)', m14: 'Да (доступ клиенту)' },
];

const faqItems = [
  {
    q: 'Можно ли арендовать только машину без бетона?',
    a: 'Да, в этом и суть услуги аренды миксера. Бетон или сухую смесь вы грузите на своём объекте или БСУ. Мы даём машину с водителем.',
  },
  { q: 'Работает ли ваш миксер с бетоном от другого завода?', a: 'Да. Вы заезжаете на любой БСУ, загружаетесь и едете на объект. Миксер обслуживает любой товарный бетон.' },
  { q: 'Есть ли минимальное время аренды?', a: `Условия зависят от маршрута и объёма задачи. Уточняйте при заказе по телефону ${company.phone}.` },
  { q: 'GPS-трекинг — клиент видит, где машина?', a: 'Да, мы открываем клиенту доступ к GPS-отслеживанию. Положение машины вам известно в режиме реального времени.' },
];

export default function ArendaMikseraPage() {
  return (
    <>
      <Header />

      <main>
        <section className={`section ${styles.hero}`}>
          <div className="container">
            <nav className={styles.crumbs} aria-label="Хлебные крошки">
              <a href="/">Главная</a>
              <span>/</span>
              <span aria-current="page">Аренда миксера</span>
            </nav>

            <div className={styles.heroGrid}>
              <div>
                <h1>Аренда автобетоносмесителя (миксера) в Жуковском</h1>
                <p className={styles.heroSub}>
                  Машина без бетона — для собственного БСУ или стороннего поставщика смеси. Миксеры 7 и 14 м³.
                  GPS-отслеживание. Режим 8:00–22:00.
                </p>
                <ul className={styles.quickBadges}>
                  <li>Миксеры 7 и 14 м³</li>
                  <li>GPS-трекинг</li>
                  <li>8:00–22:00 ежедневно</li>
                </ul>
              </div>

              <div className={styles.formCard}>
                <h2 className={styles.formTitle}>Узнать стоимость</h2>
                <LeadForm variant="short" note="Бесплатно · Без обязательств · Ответим за 15 минут" />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Для чего арендуют миксер</h2>
            </div>
            <ul className={styles.caseGrid3}>
              {scenarios.map((s) => (
                <li className={styles.caseCard} key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="section__head">
              <h2>Технические характеристики миксеров</h2>
            </div>
            <div className="table-scroll">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Параметр</th>
                    <th>Миксер 7 м³</th>
                    <th>Миксер 14 м³</th>
                  </tr>
                </thead>
                <tbody>
                  {specs.map((s) => (
                    <tr key={s.param}>
                      <td className="grade-cell">
                        <b>{s.param}</b>
                      </td>
                      <td>{s.m7}</td>
                      <td>{s.m14}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Стоимость аренды</h2>
            </div>
            <p className={styles.seoText}>
              Цена аренды зависит от маршрута, срока и объёма. Уточните точную стоимость по телефону{' '}
              <a href={company.phoneHref}>{company.phone}</a> ({company.hours}).
            </p>
            <a className="btn" href="#zayavka">
              Узнать стоимость
            </a>
          </div>
        </section>

        <section className="section section--alt">
          <div className={`container ${styles.seoText}`}>
            <div className="section__head">
              <h2>Аренда автобетоносмесителя в Жуковском — миксеры 7 и 14 м³</h2>
            </div>
            <p>
              Аренда миксера без бетона пригодится тем, у кого есть собственное производство или сторонний
              поставщик смеси, но нет транспорта. {company.legalName} сдаёт в аренду автобетоносмесители 7 м³ и
              14 м³ с GPS-отслеживанием. Клиенту открывается доступ к трекингу — положение машины видно в реальном
              времени.
            </p>
            <p>
              Аренда бетоновоза в Жуковском — звоните: {company.phone}, режим {company.hours}. Автобетоносмеситель
              в аренду доступен и под разовые задачи, и на весь строительный сезон.
            </p>
          </div>
        </section>

        <FAQ title="Часто задаваемые вопросы" items={faqItems} />

        <section className="section" id="zayavka">
          <div className={`container ${styles.subForm}`}>
            <h2>Обсудить аренду миксера</h2>
            <LeadForm variant="full" submitLabel="Отправить заявку" />
          </div>
        </section>
      </main>

      <Footer />

      <JsonLd
        data={breadcrumbListSchema([
          { name: 'Главная', url: '/' },
          { name: 'Аренда миксера', url: '/arenda-miksera/' },
        ])}
      />
      <JsonLd data={serviceSchema({ serviceType: 'Аренда автобетоносмесителя', areaServed: `${company.city} и Раменский округ` })} />
    </>
  );
}
