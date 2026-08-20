import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbListSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import { Header } from '@/components/Header';
import { LeadForm } from '@/components/LeadForm';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { company } from '@/data/site';
import styles from '@/styles/subpage.module.css';

export const metadata: Metadata = pageMetadata({
  title: 'Скидки и акции на бетон в Жуковском — выгодная цена',
  description:
    'Скидки и акции на бетон в Жуковском: бесплатная доставка, 60 минут ожидания бесплатно, накопительная скидка от 50 м³. Условия: +7 (499) 111-72-62.',
  path: '/akcii/',
});

const permanent = [
  { title: 'Бесплатная доставка в Раменский район', text: 'Действует постоянно и на любой объём от 1 м³. Жуковский, Софьино, Быково, Донино и весь Раменский район — без доплаты за доставку.' },
  { title: '60 минут ожидания на объекте — бесплатно', text: 'Миксер стоит под разгрузку до 60 минут бесплатно. У большинства конкурентов простой считают с первой минуты (500–1 000 ₽/ч). Вы платите только за бетон.' },
  { title: 'Паспорт качества — включён в цену', text: 'Документ с результатами испытаний уже включён в цену каждой партии. Доплат «за бумаги» нет.' },
  { title: 'Накопительная скидка от 50 м³/месяц', text: 'Для постоянных клиентов, которые набирают объём за месяц. Чем больше кубов — тем выгоднее условия. Размер скидки уточняйте у менеджера.' },
  { title: 'Фиксация цены по договору', text: 'Юридическим лицам фиксируем цену на сезон. Сотрудничаете всё лето или осень — цена держится, даже если рынок пойдёт вверх.' },
];

const steps = [
  { title: 'Позвоните', text: `${company.phone} — работаем ${company.hours}.` },
  { title: 'Назовите объём и сроки', text: 'Чем точнее вводные — тем выгоднее предложение.' },
  { title: 'Получите коммерческое предложение со скидкой', text: 'Подготовим КП с конкретными цифрами в течение 2 часов.' },
  { title: 'Заключите договор', text: 'Закрепляем цену и условия договором. Стартуем поставки.' },
];

const faqItems = [
  { q: 'Есть ли скидка на первый заказ?', a: `Уточните при звонке — для новых клиентов нередко действуют приветственные условия. Звоните: ${company.phone}.` },
  { q: 'Какой минимальный объём для получения скидки?', a: 'Накопительная скидка — от 50 м³/месяц. По разовым заказам спецусловия возможны от 20 м³ — уточняйте у менеджера.' },
  { q: 'Можно ли зафиксировать цену на год?', a: 'На полсезона или сезон — да, для юридических лиц это обычная практика. На год — по отдельной договорённости. Позвоните, обсудим.' },
  { q: 'Работаете ли с картами лояльности или бонусами?', a: 'Карт лояльности нет — есть скидка по договору, и это выгоднее. Назовите объём и периодичность поставок, и мы предложим конкретные условия без очков и баллов.' },
];

export default function AkciiPage() {
  return (
    <>
      <Header />

      <main>
        <section className={`section ${styles.hero}`}>
          <div className="container">
            <nav className={styles.crumbs} aria-label="Хлебные крошки">
              <a href="/">Главная</a>
              <span>/</span>
              <span aria-current="page">Акции</span>
            </nav>

            <div className={styles.heroGrid}>
              <div>
                <h1>Скидки и акции на бетон в Жуковском</h1>
                <p className={styles.heroSub}>Постоянные выгоды и сезонные предложения. Актуальные условия уточняйте по телефону {company.phone}.</p>
              </div>

              <div className={styles.formCard}>
                <h2 className={styles.formTitle}>Уточнить условия</h2>
                <LeadForm variant="short" note="Бесплатно · Без обязательств · Ответим за 15 минут" />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Постоянные выгоды — без дедлайна</h2>
              <p className="section__lead">Это не разовые акции с обратным отсчётом. Условия ниже действуют постоянно и для всех заказчиков.</p>
            </div>
            <ul className={styles.caseGrid3}>
              {permanent.map((p) => (
                <li className={styles.caseCard} key={p.title}>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="section__head">
              <h2>Текущие акции</h2>
            </div>
            <p className={styles.leadText}>
              Сезонные предложения периодически обновляются. Позвоните — подберём актуальные условия под ваш объём
              и сроки: {company.phone}, работаем {company.hours}.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Как получить скидку — за 4 шага</h2>
            </div>
            <ol className={styles.stepsGrid}>
              {steps.map((s, i) => (
                <li className={styles.stepCard} key={s.title}>
                  <span className={styles.stepNum}>{String(i + 1).padStart(2, '0')}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section section--alt">
          <div className={`container ${styles.seoText}`}>
            <div className="section__head">
              <h2>Акции на бетон в Жуковском — постоянные и сезонные условия</h2>
            </div>
            <p>
              {company.legalName} поставляет бетон в Жуковский с {company.since} года, и скидки на бетон у нас — не
              рекламный ход, а выстроенная система. Бесплатная доставка по Раменскому району, 60 минут бесплатного
              ожидания миксера, паспорт качества без доплаты и накопительная скидка от 50 м³ действуют постоянно, а
              не разово.
            </p>
            <p>
              Сезонные предложения зависят от объёма и периода поставок — уточняйте их по телефону. Бетон по акции в
              Жуковском означает реальную экономию на каждом кубометре.
            </p>
          </div>
        </section>

        <FAQ title="Часто задаваемые вопросы" items={faqItems} />

        <section className="section" id="zayavka">
          <div className={`container ${styles.subForm}`}>
            <h2>Оставить заявку</h2>
            <LeadForm variant="full" submitLabel="Отправить заявку" />
          </div>
        </section>
      </main>

      <Footer />

      <JsonLd
        data={breadcrumbListSchema([
          { name: 'Главная', url: '/' },
          { name: 'Акции', url: '/akcii/' },
        ])}
      />
    </>
  );
}
