import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbListSchema, serviceSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import { Header } from '@/components/Header';
import { LeadForm } from '@/components/LeadForm';
import { Guarantees } from '@/components/Guarantees';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { PlaceholderVisual } from '@/components/PlaceholderVisual';
import { pumpPriceRows } from '@/data/pumps';
import { company } from '@/data/site';
import styles from '@/styles/subpage.module.css';

export const metadata: Metadata = pageMetadata({
  title: 'Подача бетона насосом и лотком в Жуковском',
  description:
    'Подадим бетон насосом до 57 м или лотком в Жуковском. Аренда АБН от 2 250 ₽/час, подбор способа под объект. Консультация бесплатно. +7 (499) 111-72-62.',
  path: '/podacha-betona/',
});

const methods = [
  { title: 'Лоток миксера', horizontal: 'до 3 м', height: 'до 1,5 м', use: 'Фундамент, стяжка рядом с машиной — простая задача' },
  { title: 'Бетонный рукав', horizontal: 'до 6–8 м', height: '—', use: 'Небольшие объёмы, узкий доступ к котловану' },
  { title: 'Насос АБН 22/18 м', horizontal: 'до 8 м', height: 'до 18–22 м', use: 'Перекрытия и заливки на 2–3 этаже' },
  { title: 'Насос АБН 32/28 м', horizontal: 'до 15 м', height: 'до 28–32 м', use: 'Перекрытия на 4–7 этаже, монолит 3–4 уровня' },
  { title: 'Насос АБН 46/42 м', horizontal: 'до 25 м', height: 'до 42–46 м', use: 'Многоэтажный монолит, удалённые точки заливки' },
  { title: 'Насос АБН 57/53 м', horizontal: 'до 30 м', height: 'до 52–57 м', use: 'Высотный монолит 15+ этажей, сложная геометрия' },
];

const fitTable = [
  { task: 'Заливка стяжки на 1 этаже, машина стоит рядом', pump: 'Лоток миксера' },
  { task: 'Заливка стяжки на 2–3 этаже или далеко от машины', pump: 'Насос АБН 22/18 м' },
  { task: 'Монолитное перекрытие 2–3 этажа', pump: 'Насос АБН 32/28 м' },
  { task: 'Монолит 5–9 этажей', pump: 'Насос АБН 46/42 м' },
  { task: 'Монолит 10–15 этажей', pump: 'Насос АБН 57/53 м' },
];

const faqItems = [
  {
    q: 'Нужен ли насос для заливки монолитного перекрытия?',
    a: 'Да, в 99% случаев. Лоток миксера не поднимает бетон выше 1,5 м. Насос обеспечивает непрерывную подачу без остановок — это критично для перекрытий.',
  },
  {
    q: 'Какой минимальный объём для аренды насоса?',
    a: 'Экономически целесообразно от 5–8 м³. Для меньшего объёма считайте лоток или рукав — это дешевле. Если объём под сомнением — позвоните, поможем подобрать.',
  },
  {
    q: 'Можно ли заказать бетон у вас, а насос взять в другом месте?',
    a: 'Можно. Но с нашим насосом и нашим бетоном мы координируем подачу: машины подъезжают по графику, насос не простаивает. С чужим насосом часто бывают рассинхронизации и простои.',
  },
  {
    q: 'Какой насос нужен для заливки 5-этажного дома?',
    a: 'АБН 46/42 м. Реальный рабочий вылет при угле стрелы 45° — около 25–30 м горизонтально и 32–38 м вертикально. Для 5 этажей этого достаточно с запасом.',
  },
  { q: 'Доставка насоса на объект входит в стоимость аренды?', a: 'Нет. Стоимость доставки насоса на объект и обратно уточняется при заказе: зависит от расстояния и типа насоса.' },
];

export default function PodachaBetonaPage() {
  return (
    <>
      <Header />

      <main>
        <section className={`section ${styles.hero}`}>
          <div className="container">
            <nav className={styles.crumbs} aria-label="Хлебные крошки">
              <a href="/">Главная</a>
              <span>/</span>
              <span aria-current="page">Подача бетона</span>
            </nav>

            <div className={styles.heroGrid}>
              <div>
                <h1>Подача бетона в Жуковском: насос до 57 м и лоток миксера</h1>
                <p className={styles.heroSub}>Поможем выбрать способ подачи под ваш объект. Аренда насоса — от 2 250 ₽/час.</p>
                <ul className={styles.quickBadges}>
                  <li>Насос до 57 м</li>
                  <li>Лоток до 3 м</li>
                  <li>Консультация бесплатно</li>
                </ul>
              </div>

              <div className={styles.sideStack}>
                <PlaceholderVisual kind="pump" priority />
                <div className={styles.formCard}>
                  <h2 className={styles.formTitle}>Подобрать насос</h2>
                  <LeadForm variant="short" note="Бесплатно · Без обязательств · Ответим за 15 минут" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Способы подачи бетона — сравнение и выбор</h2>
            </div>
            <div className="table-scroll">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Способ</th>
                    <th>Дальность горизонтальная</th>
                    <th>Высота</th>
                    <th>Когда использовать</th>
                  </tr>
                </thead>
                <tbody>
                  {methods.map((m) => (
                    <tr key={m.title}>
                      <td className="grade-cell">
                        <b>{m.title}</b>
                      </td>
                      <td>{m.horizontal}</td>
                      <td>{m.height}</td>
                      <td>{m.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="form-note">Горизонтальные дальности — ориентировочные, зависят от угла стрелы насоса.</p>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="section__head">
              <h2>Аренда бетонного насоса — прайс</h2>
            </div>
            <div className="table-scroll">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Насос</th>
                    <th>Стоимость в час</th>
                    <th>Стоимость смены (8 ч)</th>
                  </tr>
                </thead>
                <tbody>
                  {pumpPriceRows.map((r) => (
                    <tr key={r.model}>
                      <td className="grade-cell">
                        <b>{r.model}</b>
                      </td>
                      <td className="price">{r.hour.toLocaleString('ru-RU')} ₽</td>
                      <td className="price">{r.shift.toLocaleString('ru-RU')} ₽</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="form-note">Стоимость доставки насоса на объект — уточняйте при заказе.</p>
            <a className="btn" href="#zayavka">
              Заказать насос
            </a>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Как выбрать насос по высоте объекта</h2>
            </div>
            <div className="table-scroll">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Задача</th>
                    <th>Рекомендуемый насос</th>
                  </tr>
                </thead>
                <tbody>
                  {fitTable.map((r) => (
                    <tr key={r.task}>
                      <td>{r.task}</td>
                      <td className="grade-cell">
                        <b>{r.pump}</b>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <Guarantees title="Наши гарантии" />

        <section className="section">
          <div className={`container ${styles.seoText}`}>
            <div className="section__head">
              <h2>Подача бетона в Жуковском — насосом и лотком</h2>
            </div>
            <p>
              От выбора способа подачи бетона зависит темп заливки и отсутствие холодных швов. С простыми задачами
              — фундамент рядом с машиной, стяжка на первом этаже — справляется лоток миксера. А если бетон нужно
              поднять выше или подать вдали от дороги, без насоса не обойтись.
            </p>
            <p>
              {company.legalName} сдаёт в аренду автобетононасосы (АБН) с вылетом стрелы от 22 до 57 м, аренда — от
              2 250 ₽/час. Когда бетон заказан у нас, подачу мы синхронизируем: миксеры и насос работают в связке,
              без простоев. Звоните: {company.phone}, график {company.hours}.
            </p>
          </div>
        </section>

        <FAQ title="Часто задаваемые вопросы" items={faqItems} />

        <section className="section section--alt" id="zayavka">
          <div className={`container ${styles.subForm}`}>
            <h2>Оставить заявку на подачу бетона</h2>
            <LeadForm variant="full" submitLabel="Отправить заявку" />
          </div>
        </section>
      </main>

      <Footer />

      <JsonLd
        data={breadcrumbListSchema([
          { name: 'Главная', url: '/' },
          { name: 'Подача бетона', url: '/podacha-betona/' },
        ])}
      />
      <JsonLd data={serviceSchema({ serviceType: 'Подача бетона насосом или лотком', areaServed: `${company.city} и Раменский округ` })} />
    </>
  );
}
