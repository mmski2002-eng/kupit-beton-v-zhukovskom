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
  title: 'Бетон оптом в Жуковском — поставки для подрядчиков | завод',
  description:
    'Бетон оптом в Жуковском для подрядчиков и строительных компаний: скидки от 50 м³/мес, фиксация цены, договор, ЭДО. Завод ПСК Прогресс с 2003 года.',
  path: '/optom/',
});

const volumeTiers = [
  { volume: 'До 50 м³', terms: 'Стандартная цена, наличные или безнал' },
  { volume: '50–100 м³/мес', terms: 'Скидка по согласованию, договор поставки' },
  { volume: '100–300 м³/мес', terms: 'Скидка + фиксация цены на сезон + приоритетная отгрузка' },
  { volume: '300+ м³/мес', terms: 'Индивидуальные условия, постоплата, персональный менеджер' },
];

const audiences = [
  { title: 'Строительные компании', text: 'Монолитный каркас, фундаменты, перекрытия, стяжки. Отгрузки подстраиваем под вашу сетку работ.' },
  { title: 'Генеральные подрядчики', text: 'Поставки согласуем с общим сетевым графиком стройки. Сроки не срываем.' },
  { title: 'Дорожные и инфраструктурные организации', text: 'Бетон для дорог, бордюров, дорожных плит и благоустройства территорий.' },
  { title: 'Промышленные предприятия', text: 'Постоянные поставки под производственные задачи, ремонт и стройку на территории предприятия.' },
  { title: 'Застройщики', text: 'Комплексная застройка кварталов и посёлков — от котлована до отделки. Бесперебойные поставки на весь период строительства.' },
];

const advantages = [
  { title: 'Фиксация цены', text: 'По договору поставки. Пока договор действует, цена остаётся прежней. Бюджет строительства под контролем.' },
  { title: 'Белый контрагент', text: `${company.legalName}, ИНН ${company.inn}, на рынке с ${company.since} года. Никаких рисков налоговых претензий.` },
  { title: 'ЭДО', text: 'Электронный документооборот разгружает бухгалтерию. Оператора и совместимые системы уточняйте у менеджера.' },
  { title: 'НДС к вычету', text: 'Каждая поставка с НДС 20%. Счёт-фактура на партию оформляется автоматически.' },
];

const tenderDocs = [
  'Паспорта качества на все марки бетона',
  'Сертификаты соответствия',
  'Выписку из ЕГРЮЛ',
  'Документы об аккредитации лаборатории',
  'Аккредитацию БСУ',
];

const faqItems = [
  { q: 'Есть ли минимальный объём для оптовых условий?', a: 'От 50 м³/месяц. При меньшем объёме действуют стандартные цена и условия.' },
  { q: 'Можно ли зафиксировать цену на весь сезон?', a: 'Да. По договору поставки фиксируем цену на весь строительный сезон.' },
  { q: 'Работаете ли по тендерам ФЗ №44 и №223?', a: 'Да. Соберём полный пакет документов под тендерную заявку.' },
  { q: 'Предоставляете ли персонального менеджера?', a: 'Да, при объёме от 100 м³/месяц закрепляем персонального менеджера.' },
];

export default function OptomPage() {
  return (
    <>
      <Header />

      <main>
        <section className={`section ${styles.hero}`}>
          <div className="container">
            <nav className={styles.crumbs} aria-label="Хлебные крошки">
              <a href="/">Главная</a>
              <span>/</span>
              <span aria-current="page">Оптом</span>
            </nav>

            <div className={styles.heroGrid}>
              <div>
                <h1>Бетон оптом — поставки подрядчикам и строительным компаниям</h1>
                <p className={styles.heroSub}>Фиксация цены, постоплата, договор и скидки от 50 м³/месяц.</p>
                <ul className={styles.quickBadges}>
                  <li>От 50 м³/месяц</li>
                  <li>Скидки</li>
                  <li>Договор и документы</li>
                </ul>
              </div>

              <div className={styles.formCard}>
                <h2 className={styles.formTitle}>Получить КП</h2>
                <LeadForm variant="short" note="Ответим в течение 2 часов" />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Условия оптовых поставок</h2>
            </div>
            <div className="table-scroll">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Объём в месяц</th>
                    <th>Условия</th>
                  </tr>
                </thead>
                <tbody>
                  {volumeTiers.map((t) => (
                    <tr key={t.volume}>
                      <td className="grade-cell">
                        <b>{t.volume}</b>
                      </td>
                      <td>{t.terms}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="form-note">
              Итоговый размер скидки определяют объём, график поставок и марка бетона. Позвоните или оставьте
              заявку — коммерческое предложение вышлем в течение 2 часов.
            </p>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="section__head">
              <h2>Кому подходит оптовая программа</h2>
            </div>
            <ul className={styles.caseGrid3}>
              {audiences.map((a) => (
                <li className={styles.caseCard} key={a.title}>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Преимущества для B2B-клиентов</h2>
            </div>
            <ul className={styles.caseGrid3}>
              {advantages.map((a) => (
                <li className={styles.caseCard} key={a.title}>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="section__head">
              <h2>Работа по тендерам (ФЗ №44 и №223)</h2>
            </div>
            <p className={styles.leadText}>
              Сотрудничаем с государственными и муниципальными заказчиками по Федеральным законам №44 и №223. Для
              тендерных заявок готовим:
            </p>
            <ul className={styles.plainList}>
              {tenderDocs.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <p className="form-note">Опыт с {company.since} года, ИНН {company.inn}. Состав пакета документов уточните у менеджера.</p>
          </div>
        </section>

        <section className="section">
          <div className={`container ${styles.seoText}`}>
            <div className="section__head">
              <h2>Бетон оптом в Жуковском — поставки для подрядчиков и застройщиков</h2>
            </div>
            <p>
              Оптовые поставки бетона строительным компаниям Жуковского — ключевое направление завода{' '}
              {company.legalName}. С {company.since} года мы отгружаем бетон по договорам подрядчикам,
              генподрядчикам, застройщикам и промышленным предприятиям Подмосковья. БСУ Stetter выдаёт 110 м³/час,
              а это до 500 м³ в сутки без задержек.
            </p>
            <p>
              По бетону оптом в Жуковском работает программа скидок от 50 м³/месяц, фиксация цены договором на
              сезон и приоритетная отгрузка крупным клиентам. Принимаем заказы по ФЗ №44 и №223. Аккредитованная
              лаборатория готовит паспорта для стройнадзора.
            </p>
          </div>
        </section>

        <FAQ title="Частые вопросы об оптовых поставках" items={faqItems} />

        <section className="section section--alt" id="zayavka">
          <div className={`container ${styles.subForm}`}>
            <h2>Оставить заявку на оптовую поставку</h2>
            <LeadForm variant="full" submitLabel="Отправить заявку" />
          </div>
        </section>
      </main>

      <Footer />

      <JsonLd
        data={breadcrumbListSchema([
          { name: 'Главная', url: '/' },
          { name: 'Оптом', url: '/optom/' },
        ])}
      />
    </>
  );
}
