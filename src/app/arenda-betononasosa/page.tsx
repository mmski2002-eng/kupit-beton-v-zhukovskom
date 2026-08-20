import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbListSchema } from '@/lib/schema';
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
  title: 'Аренда бетононасоса в Жуковском: стрелы 18–57 м, оператор',
  description:
    'Автобетононасосы с оператором в Жуковском — от 2 250 ₽/час. Стрелы 18–57 м, перегон до 30 км бесплатно, скидка при заказе бетона. Тел.: +7 (499) 111-72-62.',
  path: '/arenda-betononasosa/',
});

const subPages = [
  { href: '/arenda-betononasosa/32m/', title: '32 м', text: 'До 7 этажей, 2 250 ₽/час' },
  { href: '/arenda-betononasosa/37m/', title: '37 м', text: 'До 9 этажей, 3 800 ₽/час' },
  { href: '/arenda-betononasosa/52m/', title: '52–57 м', text: 'Высотное строительство, 6 500 ₽/час' },
  { href: '/arenda-betononasosa/stacionarnyy/', title: 'Стационарный', text: 'Подача до 500 м, цена по запросу' },
];

const useCases = [
  {
    title: 'Высокий этаж или перекрытие',
    text: 'Миксер не поднимает бетон выше уровня земли. Бетононасос подаёт смесь на любую высоту в пределах длины стрелы — от перекрытия 1-го этажа до 9-го и выше.',
  },
  {
    title: 'Труднодоступное место',
    text: 'Миксеру не подъехать вплотную: узкий проезд, соседние постройки, уклон. АБН разворачивается на площадке и подаёт бетон через стрелу на расстояние до 57 м по горизонтали.',
  },
  {
    title: 'Большой объём быстро',
    text: 'Насос выдаёт до 90 м³/час — кратно быстрее, чем ручное перекладывание или желоба. Для перекрытий, фундаментных плит и промышленных полов это единственный способ уложиться в технологическое окно.',
  },
  {
    title: 'Жидкая смесь П4–П5',
    text: 'Самоуплотняющиеся и высокоподвижные бетоны П4–П5 нельзя перевозить вручную — они расслаиваются. Бетононасос подаёт их прямо в опалубку без потери консистенции.',
  },
];

const fitTable = [
  { task: 'Фундамент, подвал, пол по грунту', boom: 'до 18 м', model: 'АБН 22' },
  { task: '1–3 этаж, перекрытие, стены', boom: 'до 28 м', model: 'АБН 32' },
  { task: '4–8 этаж, высотные перекрытия', boom: 'до 32–42 м', model: 'АБН 36 / АБН 46' },
  { task: '9+ этаж, высотное строительство', boom: 'до 53 м', model: 'АБН 57' },
  { task: 'Труднодоступное место, горизонтальный вылет', boom: 'максимальный вылет', model: 'АБН 46 / АБН 57' },
];

const steps = [
  {
    title: 'Заявка',
    text: 'Оставляете заявку по телефону или через форму. Сообщаете тип объекта, высоту подачи, объём бетона, дату и адрес. Менеджер подбирает модель АБН и согласовывает время.',
  },
  {
    title: 'Подтверждение и бронь',
    text: 'Закрепляем дату, время и модель насоса. Корпоративным клиентам выставляем счёт на предоплату, частные заказы оплачиваются в день работы.',
  },
  {
    title: 'Выезд и монтаж',
    text: 'АБН приезжает на объект в согласованное время. Оператор сам устанавливает машину, разворачивает стрелу и проверяет бетоновод. На монтаж уходит 30–60 минут, входит в схему 7+1.',
  },
  {
    title: 'Работа',
    text: 'Оператор управляет подачей бетона, контролирует давление и при необходимости промывает систему. Темп укладки задаёте вы. Пусковая смесь — отдельной позицией (2 000 ₽).',
  },
  {
    title: 'Демонтаж и документы',
    text: 'По окончании работ оператор промывает насос и сворачивает стрелу. Демонтаж входит в 1 час схемы 7+1. Вы получаете акт выполненных работ.',
  },
];

const conditions = [
  {
    title: 'Минимальный заказ — 8 часов',
    text: 'Схема 7+1: 7 часов работы + 1 час монтаж/демонтаж. Почасовую аренду можно продлить от 2 часов сверх базовой смены.',
  },
  { title: 'Оператор включён', text: 'В стоимость смены и почасовой аренды. Работа без нашего оператора не предоставляется.' },
  { title: 'Перегон до 30 км — бесплатно', text: 'От завода в обе стороны. Свыше 30 км — по тарифу, уточняйте у менеджера.' },
  {
    title: 'Площадка для АБН',
    text: 'Должна отвечать требованиям по размеру. Покрытие — твёрдое, уклон — не более 3°. На мягком грунте нужен настил.',
  },
  { title: 'Бетон и насос единым чеком', text: 'Действует скидка. Принимаем и бетон от других поставщиков (согласовывается при бронировании).' },
  { title: 'Оплата', text: 'Наличными, безналичным переводом, для юрлиц — по договору. Полный пакет закрывающих документов.' },
];

const extraServices = [
  { service: 'Гибкий бетоновод 4 м', price: '3 000 ₽' },
  { service: 'Гибкий бетоновод 6 м', price: '4 000 ₽' },
  { service: 'Прямой бетоновод 3 м', price: '1 000 ₽' },
  { service: 'Поворот 90° или 45°', price: '1 000 ₽' },
  { service: 'Пусковая смесь', price: '2 000 ₽' },
  { service: 'Перестановка АБН без промывки', price: '3 000 ₽' },
];

const objects = [
  { text: 'Жилой дом, г. Жуковский. Перекрытие 4-го этажа. Стрела АБН 36 (32 м). Объём бетона — 48 м³.' },
  { text: 'Промышленный склад, г. Ильинский. Фундаментная плита. Стрела АБН 22 (18 м). Объём бетона — 120 м³.' },
  { text: 'Коттедж, Раменский район. Монолитные стены подвала. Стрела АБН 22 (18 м). Объём бетона — 22 м³.' },
  { text: 'Многоквартирный дом, г. Лыткарино. Перекрытие 9-го этажа. Стрела АБН 57 (53 м). Объём бетона — 85 м³.' },
  { text: 'Торговый центр, г. Удельная. Монолитная колонна и перекрытие. Стрела АБН 46 (42 м). Объём бетона — 65 м³.' },
  { text: 'Частный дом, Малаховка. Пол по грунту, отмостка. Стрела АБН 32 (28 м). Объём бетона — 18 м³.' },
];

const faqItems = [
  {
    q: 'Что входит в стоимость аренды?',
    a: 'В стоимость почасовой аренды и тарифа «смена» входят: работа оператора, перегон до 30 км в обе стороны, монтаж и демонтаж по схеме 7+1. Дополнительные бетоноводы, пусковая смесь и перестановки оплачиваются отдельно по прайсу.',
  },
  {
    q: 'Что такое схема оплаты 7+1?',
    a: 'Вы платите за 8 часов, из которых 7 — чистое время работы насоса, а 1 час — монтаж и демонтаж стрелы оператором. Это отраслевой стандарт: без этого часа оператор не успевает безопасно установить и убрать машину.',
  },
  {
    q: 'Какие требования к площадке?',
    a: 'Площадка должна быть ровной, с твёрдым покрытием (асфальт, бетон, ПГС), уклон — не более 3°. Минимальный размер зависит от модели: от 6×7 м (АБН 22) до 12×14 м (АБН 57). На мягком грунте нужен настил — его обеспечивает заказчик.',
  },
  {
    q: 'Можно ли взять насос без заказа бетона?',
    a: 'Да. Мы работаем с любым бетоном, в том числе от сторонних поставщиков. Правда, скидка на комплект «бетон + насос» в этом случае не действует.',
  },
  {
    q: 'Как рассчитать нужную длину стрелы?',
    a: `Длина стрелы должна перекрывать и высоту подъёма, и горизонтальное расстояние от места установки до точки укладки. Позвоните на ${company.phone} — рассчитаем за 5 минут по вашим данным.`,
  },
  {
    q: 'Как забронировать насос?',
    a: `Позвоните по ${company.phone} или заполните форму на этой странице. Укажите дату, адрес и желаемую модель АБН. Менеджер подтвердит наличие машины и зафиксирует бронь.`,
  },
];

export default function ArendaBetononasosaPage() {
  return (
    <>
      <Header />

      <main>
        <section className={`section ${styles.hero}`}>
          <div className="container">
            <nav className={styles.crumbs} aria-label="Хлебные крошки">
              <a href="/">Главная</a>
              <span>/</span>
              <span aria-current="page">Аренда бетононасоса</span>
            </nav>

            <div className={styles.heroGrid}>
              <div>
                <h1>Аренда бетононасоса в Жуковском с оператором</h1>
                <p className={styles.heroSub}>
                  Свой парк АБН со стрелами 18–57 м. Оператор уже в стоимости. Перегон до 30 км — бесплатно. Схема
                  оплаты 7+1: платите за работу, монтаж за наш счёт.
                </p>
                <ul className={styles.quickBadges}>
                  <li>Собственный парк АБН — 5 машин</li>
                  <li>Оператор включён в стоимость</li>
                  <li>Стрелы 18–57 м для любых высот</li>
                </ul>
              </div>

              <div className={styles.sideStack}>
                <PlaceholderVisual kind="pump" priority />
                <div className={styles.formCard}>
                  <h2 className={styles.formTitle}>Забронировать насос</h2>
                  <LeadForm variant="short" note="Бесплатно · Без обязательств · Ответим за 15 минут" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="section__head">
              <h2>Модели бетононасосов</h2>
            </div>
            <ul className={styles.subGrid}>
              {subPages.map((s) => (
                <li key={s.href}>
                  <a className={styles.subCard} href={s.href}>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                    <span className={styles.subCardMore}>Подробнее →</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>В каких случаях нужен бетононасос</h2>
            </div>
            <ul className={styles.caseGrid4}>
              {useCases.map((c) => (
                <li className={styles.caseCard} key={c.title}>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </li>
              ))}
            </ul>
            <p className="form-note">
              Сомневаетесь, нужен ли насос под вашу задачу? Позвоните менеджеру — уточним требования по месту и
              объёму, подберём технику либо объясним, почему без неё можно обойтись.
            </p>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="section__head">
              <h2>Прайс на аренду бетононасосов</h2>
            </div>
            <div className="table-scroll">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Модель</th>
                    <th>Стрела</th>
                    <th>Час</th>
                    <th>Смена (7+1 ч)</th>
                  </tr>
                </thead>
                <tbody>
                  {pumpPriceRows.map((r) => (
                    <tr key={r.model}>
                      <td className="grade-cell">
                        <b>{r.model}</b>
                      </td>
                      <td>{r.boom}</td>
                      <td className="price">{r.hour.toLocaleString('ru-RU')} ₽</td>
                      <td className="price">{r.shift.toLocaleString('ru-RU')} ₽</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="form-note">
              Включено в стоимость: оператор бетононасоса, перегон до 30 км от завода в обе стороны, 7 часов работы
              при заказе по тарифу «смена» (схема 7+1). Скидка при совместном заказе бетон + насос единым чеком —
              уточняйте у менеджера.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Как выбрать бетононасос под задачу</h2>
            </div>
            <div className="table-scroll">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Задача</th>
                    <th>Рекомендуемая стрела</th>
                    <th>Модель</th>
                  </tr>
                </thead>
                <tbody>
                  {fitTable.map((r) => (
                    <tr key={r.task}>
                      <td>{r.task}</td>
                      <td>{r.boom}</td>
                      <td className="grade-cell">
                        <b>{r.model}</b>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="form-note">
              Не определились — звоните: {company.phone}. Назовите высоту подачи, расстояние по горизонтали и размер
              площадки — подберём модель за 5 минут.
            </p>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="section__head">
              <h2>Как проходит аренда бетононасоса</h2>
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

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Условия аренды бетононасоса</h2>
            </div>
            <ul className={styles.conditionsGrid}>
              {conditions.map((c) => (
                <li className={styles.conditionCard} key={c.title}>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </li>
              ))}
            </ul>

            <div className={`table-scroll ${styles.narrowTable}`}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Дополнительные услуги</th>
                    <th>Цена</th>
                  </tr>
                </thead>
                <tbody>
                  {extraServices.map((e) => (
                    <tr key={e.service}>
                      <td>{e.service}</td>
                      <td className="price">{e.price}</td>
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
              <h2>Закажите бетон и насос в одном счёте — дешевле</h2>
              <p className="section__lead">
                Когда бетон и аренда бетононасоса оформлены единым чеком, действует скидка — её размер зависит от
                объёма, уточняйте у менеджера. Диспетчер координирует подачу миксеров и работу насоса, чтобы не было
                ни простоев, ни излишка бетона на площадке. Смесь от того же производителя — подобранная под
                конкретную модель АБН консистенция, без риска расслоения в бетоноводе.
              </p>
              <a className="btn" href="#zayavka">
                Рассчитать стоимость бетон + насос
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Объекты, выполненные с нашими бетононасосами</h2>
            </div>
            <ul className={styles.objGrid}>
              {objects.map((o, i) => (
                <li className={styles.objCard} key={i}>
                  {o.text}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Guarantees title="Четыре гарантии на каждый заказ" />

        <section className="section">
          <div className={`container ${styles.seoText}`}>
            <div className="section__head">
              <h2>Аренда бетононасоса в Жуковском от завода</h2>
            </div>
            <p>
              Арендовать бетононасос в Жуковском у {company.legalName} — значит работать с собственным парком из 5
              автобетононасосов со стрелами от 18 до 57 м. Автобетононасос (АБН) — специализированная машина,
              подающая готовую бетонную смесь по трубопроводу на высоту или расстояние, недоступное миксеру.
            </p>
            <p>
              В стоимость аренды входит оператор — он управляет машиной и отвечает за безопасность подачи. Перегон
              до 30 км от завода бесплатен. При заказе бетона и насоса единым чеком действует скидка: завод выпускает
              смесь нужной подвижности под конкретную модель АБН и координирует подачу миксеров без простоев.
            </p>
            <p>
              Минимальная аренда — 8 часов по схеме 7+1 (7 часов работы, 1 час монтаж/демонтаж). Работаем в
              Жуковском, Раменском, Кратово, Малаховке, Удельной, Ильинском, Лыткарино, Заворово, Игумново,
              Кузнецово.
            </p>
          </div>
        </section>

        <FAQ title="Частые вопросы об аренде бетононасоса" items={faqItems} />

        <section className="section section--alt" id="zayavka">
          <div className={`container ${styles.subForm}`}>
            <h2>Забронируйте бетононасос на нужную дату</h2>
            <LeadForm variant="full" submitLabel="Отправить заявку" />
          </div>
        </section>
      </main>

      <Footer />

      <JsonLd
        data={breadcrumbListSchema([
          { name: 'Главная', url: '/' },
          { name: 'Аренда бетононасоса', url: '/arenda-betononasosa/' },
        ])}
      />
    </>
  );
}
