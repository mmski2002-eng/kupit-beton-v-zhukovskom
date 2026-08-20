import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbListSchema, serviceSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import { Header } from '@/components/Header';
import { LeadForm } from '@/components/LeadForm';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { PlaceholderVisual } from '@/components/PlaceholderVisual';
import { pumpPriceRows } from '@/data/pumps';
import { company } from '@/data/site';
import styles from '@/styles/subpage.module.css';

export const metadata: Metadata = pageMetadata({
  title: 'Стационарный бетононасос в аренду в Жуковском — завод',
  description:
    'Стационарный бетононасос в Жуковском: подача по трубопроводу до 500 м горизонтально и 150 м вертикально. Тоннели, высотки, гидросооружения. Цена по запросу: +7 (499) 111-72-62.',
  path: '/arenda-betononasosa/stacionarnyy/',
});

const compareRows = [
  { param: 'Стрела', stationary: 'Нет (подача по трубе)', mobile: 'Есть (22–57 м)' },
  { param: 'Дальность подачи', stationary: 'до 300–500 м', mobile: 'до 57 м' },
  { param: 'Высота подачи', stationary: 'до 150+ м', mobile: 'до 57 м' },
  { param: 'Мобильность', stationary: 'Устанавливается стационарно', mobile: 'Приезжает на объект' },
  { param: 'Применение', stationary: 'Тоннели, гидросооружения, высотки', mobile: 'Монолит, перекрытия, стяжки' },
  { param: 'Производительность', stationary: '30–80 м³/час', mobile: 'до 130 м³/час' },
];

const objects = [
  {
    title: 'Строительство тоннелей и метро',
    text: 'Трубопровод тянут по тоннелю, а насос стоит на поверхности. Бетон идёт на сотни метров по горизонтали без промежуточных перекачек.',
  },
  {
    title: 'Высотные здания 20+ этажей',
    text: 'Стреловому насосу такой высоты не хватает. Вертикальную трубу ведут вдоль фасада или в шахте лифта — насос качает снизу на любую высоту.',
  },
  {
    title: 'Гидротехнические сооружения',
    text: 'Плотины, водохранилища, набережные с трудным подъездом. Насос ставят в доступном месте, а труба доходит до точки укладки.',
  },
  {
    title: 'Подвальные этажи и подземные паркинги',
    text: 'Насос наверху, труба спускается вниз. Не нужно загонять автобетоновоз на уклон или в тесное пространство.',
  },
  {
    title: 'Крупные промышленные объекты',
    text: 'Большие объёмы и непрерывная подача в пределах одного цикла. Стационарный насос держит равномерный поток всю смену.',
  },
];

const faqItems = [
  {
    q: 'Чем стационарный насос отличается от стрелового?',
    a: 'У стационарного насоса нет стрелы. Подача ведётся по трубопроводу, который прокладывается к точке укладки. Это позволяет подавать бетон на 300–500 м горизонтально и 150+ м вертикально — туда, куда стреловой насос не достаёт.',
  },
  {
    q: 'Сколько стоит аренда?',
    a: `Цена зависит от длины трубопровода, высоты подачи, объёма бетона и продолжительности работ. Позвоните на ${company.phone} — рассчитаем стоимость под ваш объект.`,
  },
  {
    q: 'Вы прокладываете трубопровод самостоятельно?',
    a: 'Да. Монтаж трубопровода от насоса до точки укладки и его обслуживание в ходе работ — в составе услуги. Заказчику не нужно организовывать прокладку отдельно.',
  },
  { q: 'Нужен ли оператор?', a: 'Да, оператор насоса и трубопровода входит в стоимость услуги. Самостоятельное управление стационарным насосом не предусмотрено.' },
];

export default function StacionarnyyPage() {
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
              <span aria-current="page">Стационарный</span>
            </nav>

            <div className={styles.heroGrid}>
              <div>
                <h1>Стационарный бетононасос в Жуковском — аренда</h1>
                <p className={styles.heroSub}>
                  Бетон идёт по трубопроводу до 500 м по горизонтали и 150+ м по вертикали. Подходит для гидротехники,
                  тоннелей, подвалов и высоток. Цена по запросу.
                </p>
                <ul className={styles.quickBadges}>
                  <li>Подача до 500 м</li>
                  <li>Тоннели и подвалы</li>
                  <li>Цена по запросу</li>
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
              <h2>Стационарный или стреловой — как выбрать</h2>
            </div>
            <div className="table-scroll">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Параметр</th>
                    <th>Стационарный насос</th>
                    <th>АБН (стреловой)</th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((r) => (
                    <tr key={r.param}>
                      <td className="grade-cell">
                        <b>{r.param}</b>
                      </td>
                      <td>{r.stationary}</td>
                      <td>{r.mobile}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="form-note">
              Стационарный насос берут, когда бетон надо подать дальше 60 м или выше 57 м — там, где стреловой
              физически не дотянется.
            </p>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="section__head">
              <h2>Объекты для стационарного насоса</h2>
            </div>
            <ul className={styles.caseGrid3}>
              {objects.map((o) => (
                <li className={styles.caseCard} key={o.title}>
                  <h3>{o.title}</h3>
                  <p>{o.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Стоимость аренды стационарного бетононасоса</h2>
              <p className="section__lead">
                Считаем индивидуально: зависит от объёма бетона, длины трубопровода, высоты подачи и длительности
                работ. Позвоните — рассчитаем стоимость под ваш объект.
              </p>
            </div>
            <div className="table-scroll">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Модель</th>
                    <th>Тип</th>
                    <th>Макс. высота</th>
                    <th>Макс. даль</th>
                    <th>Час</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={styles.rowCurrent}>
                    <td className="grade-cell">
                      <b>Стационарный</b>
                    </td>
                    <td>Трубный</td>
                    <td>150+ м</td>
                    <td>500 м</td>
                    <td className="price">По запросу</td>
                  </tr>
                  {pumpPriceRows.map((r) => (
                    <tr key={r.model}>
                      <td className="grade-cell">
                        <b>{r.model}</b>
                      </td>
                      <td>Стреловой</td>
                      <td>{r.boom}</td>
                      <td>{r.boom}</td>
                      <td className="price">{r.hour.toLocaleString('ru-RU')} ₽</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className={`container ${styles.seoText}`}>
            <div className="section__head">
              <h2>Аренда стационарного бетононасоса в Жуковском</h2>
            </div>
            <p>
              Стационарный бетононасос в Жуковском — это аренда у завода {company.legalName}, работающего с{' '}
              {company.since} года. В отличие от автобетононасоса (АБН), у стационарного насоса нет стрелы: бетон
              идёт по металлическому трубопроводу длиной до 300–500 м по горизонтали и 150+ м по вертикали.
            </p>
            <p>
              Аренда насоса для бетона стационарного типа выручает там, куда стреловой насос не доберётся: тоннели,
              здания выше 18 этажей, гидросооружения с трудным подъездом, глубокие подвалы. Монтаж трубопровода и его
              обслуживание входят в стоимость, а оператор работает всю смену.
            </p>
          </div>
        </section>

        <FAQ title="Часто задаваемые вопросы" items={faqItems} />

        <section className="section" id="zayavka">
          <div className={`container ${styles.subForm}`}>
            <h2>Заказать стационарный бетононасос</h2>
            <LeadForm variant="full" submitLabel="Отправить заявку" />
          </div>
        </section>
      </main>

      <Footer />

      <JsonLd
        data={breadcrumbListSchema([
          { name: 'Главная', url: '/' },
          { name: 'Аренда бетононасоса', url: '/arenda-betononasosa/' },
          { name: 'Стационарный', url: '/arenda-betononasosa/stacionarnyy/' },
        ])}
      />
      <JsonLd data={serviceSchema({ serviceType: 'Аренда стационарного бетононасоса', areaServed: `${company.city} и Раменский округ` })} />
    </>
  );
}
