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
  title: 'Самовывоз бетона по предварительной записи — ПСК Прогресс',
  description:
    'Самовывоз бетона по предварительной записи. Загрузка миксера за 10–15 минут, паспорт качества на выезде. Ежедневно 8:00–22:00, звоните заранее.',
  path: '/dostavka/samovyvoz/',
});

const steps = [
  { title: 'Звонок или заявка', text: 'Свяжитесь с менеджером по телефону или в WhatsApp. Согласуем время приезда, марку бетона, объём и тип вашего автобетоносмесителя.' },
  { title: 'Приезд на завод', text: 'Точный адрес отгрузочной площадки и удобное время сообщит менеджер при записи. Работаем ежедневно 8:00–22:00. По предварительной записи загрузка идёт без очереди.' },
  { title: 'Погрузка', text: 'Бетон загружаем на автоматизированной бетоносмесительной установке Stetter. Дозировка по рецептуре точная — состав соответствует заявленной марке. Погрузка занимает 10–15 минут.' },
  { title: 'Документы', text: 'На выезде вы получаете паспорт качества и ТТН. Счёт-фактуру для юридических лиц выдаём по запросу.' },
];

const compareRows = [
  { param: 'Стоимость', pickup: 'Без доплаты за доставку', delivery: 'Тариф 500–900 ₽/м³ в зависимости от расстояния' },
  { param: 'Контроль времени', pickup: 'Вы управляете расписанием', delivery: 'Зависит от загрузки парка миксеров' },
  { param: 'Документы', pickup: 'Паспорт качества, ТТН', delivery: 'Паспорт качества, ТТН, акт объёма' },
  { param: 'Дальность', pickup: 'Везёте сами — до любого расстояния', delivery: 'До 50 км от завода' },
  { param: 'Нужен собственный АБС', pickup: 'Да', delivery: 'Нет — используем наш миксер' },
];

const faqItems = [
  {
    q: 'Можно ли забрать бетон в прицеп, самосвал или кузов грузовика?',
    a: 'Нет. Бетон должен непрерывно перемешиваться в барабане автобетоносмесителя. В прицепе или открытом кузове смесь расслоится и потеряет прочностные свойства уже за 15–20 минут. Загружаем только в АБС.',
  },
  { q: 'Нужна ли предварительная запись?', a: `Желательно позвонить за 1–2 часа до приезда по номеру ${company.phone}. Без записи в пиковые часы (10:00–14:00) возможна очередь — до 30 минут ожидания.` },
  { q: 'Выдают ли документы при самовывозе?', a: 'Да. При каждой загрузке выдаём паспорт качества и ТТН. Счёт-фактура для юридических лиц — по запросу при оформлении.' },
  { q: 'Как долго ждать в очереди?', a: 'При предварительной записи загрузка идёт без очереди в согласованное время. Без записи в загруженные дни ожидание может достигать 30 минут.' },
];

export default function SamovyvozPage() {
  return (
    <>
      <Header />

      <main>
        <section className={`section ${styles.hero}`}>
          <div className="container">
            <nav className={styles.crumbs} aria-label="Хлебные крошки">
              <a href="/">Главная</a>
              <span>/</span>
              <a href="/dostavka/">Доставка</a>
              <span>/</span>
              <span aria-current="page">Самовывоз</span>
            </nav>

            <div className={styles.heroGrid}>
              <div>
                <h1>Самовывоз бетона по предварительной записи</h1>
                <p className={styles.heroSub}>
                  Загрузим ваш миксер за 10–15 минут. Точный адрес отгрузочной площадки и время сообщит менеджер при
                  записи. Ежедневно 8:00–22:00.
                </p>
                <ul className={styles.quickBadges}>
                  <li>Погрузка с БСУ Stetter</li>
                  <li>Паспорт качества на выезде</li>
                  <li>Время погрузки 10–15 минут</li>
                </ul>
              </div>

              <div className={styles.formCard}>
                <h2 className={styles.formTitle}>Записаться на самовывоз</h2>
                <LeadForm variant="short" note="Бесплатно · Без обязательств · Ответим за 15 минут" />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Как забрать бетон с завода</h2>
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
          <div className="container">
            <div className="section__head">
              <h2>Условия самовывоза</h2>
            </div>
            <p className={styles.leadText}>
              Забрать бетон самовывозом можно только в собственный автобетоносмеситель (АБС, миксер). Завод
              загружает смесь непосредственно в барабан вашей машины. Бетон — подвижная смесь, которая должна
              постоянно перемешиваться: в самосвале, прицепе или ином кузове без вращающегося барабана он
              расслоится и утратит рабочие свойства уже через 15–20 минут после приготовления.
            </p>
            <p className={styles.leadText}>
              Минимальный объём загрузки — 1 м³. Собственного миксера нет — воспользуйтесь нашей доставкой: пришлём
              на объект АБС из своего парка (7 м³ и 14 м³).
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Самовывоз или доставка — что выбрать</h2>
            </div>
            <div className="table-scroll">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Параметр</th>
                    <th>Самовывоз</th>
                    <th>Доставка миксером завода</th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((r) => (
                    <tr key={r.param}>
                      <td className="grade-cell">
                        <b>{r.param}</b>
                      </td>
                      <td>{r.pickup}</td>
                      <td>{r.delivery}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="form-note">Самовывоз удобен компаниям с собственным автопарком и регулярной потребностью в бетоне.</p>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="section__head">
              <h2>Как записаться</h2>
            </div>
            <p className={styles.leadText}>
              Позвоните по телефону <a href={company.phoneHref}>{company.phone}</a> за 1–2 часа до приезда — назовём
              точный адрес отгрузочной площадки и подберём удобное время. Работаем {company.hours}, без выходных. В
              пиковые часы (10:00–14:00) без предварительной записи возможна очередь до 30 минут.
            </p>
          </div>
        </section>

        <section className="section">
          <div className={`container ${styles.seoText}`}>
            <div className="section__head">
              <h2>Самовывоз бетона по предварительной записи — ПСК Прогресс</h2>
            </div>
            <p>
              {company.legalName} принимает автобетоносмесители под загрузку бетоном ежедневно с 8:00 до 22:00.
              Самовывоз бетона по предварительной записи даёт возможность сэкономить на доставке и самостоятельно
              управлять графиком подачи смеси на объект.
            </p>
            <p>
              Загрузка выполняется на установке Stetter — дозировка точная, качество смеси стабильно. Минимальный
              объём — 1 м³. На выезде вы получаете паспорт качества и ТТН. Для записи звоните по номеру{' '}
              {company.phone}.
            </p>
          </div>
        </section>

        <FAQ title="Вопросы о самовывозе" items={faqItems} />

        <section className="section section--alt" id="zayavka">
          <div className={`container ${styles.subForm}`}>
            <h2>Записаться на самовывоз</h2>
            <LeadForm variant="full" submitLabel="Отправить заявку" />
          </div>
        </section>
      </main>

      <Footer />

      <JsonLd
        data={breadcrumbListSchema([
          { name: 'Главная', url: '/' },
          { name: 'Доставка', url: '/dostavka/' },
          { name: 'Самовывоз', url: '/dostavka/samovyvoz/' },
        ])}
      />
      <JsonLd data={serviceSchema({ serviceType: 'Самовывоз бетона с завода', areaServed: `${company.city} и Раменский округ` })} />
    </>
  );
}
