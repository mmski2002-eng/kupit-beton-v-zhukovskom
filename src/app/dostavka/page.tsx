import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbListSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import { Header } from '@/components/Header';
import { LeadForm } from '@/components/LeadForm';
import { Calculator } from '@/components/Calculator';
import { Guarantees } from '@/components/Guarantees';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { company, deliveryTariffs } from '@/data/site';
import styles from '@/styles/subpage.module.css';

export const metadata: Metadata = pageMetadata({
  title: 'Доставка бетона в Жуковском: от 500 ₽/м³, миксеры с GPS',
  description:
    'Бесплатная доставка бетона по Раменскому району. GPS-миксеры 7–14 м³, привоз за 2–4 часа, документы к каждой поставке. Звоните: +7 (499) 111-72-62.',
  path: '/dostavka/',
});

const subPages = [
  { href: '/dostavka/mikserom/', title: 'Миксером (АБС)', text: 'Автобетоносмесители 7 и 14 м³ с GPS-трекингом' },
  { href: '/dostavka/malymi-obyomami/', title: 'Малыми объёмами', text: 'От 1 м³ — для дачи, гаража, забора' },
  { href: '/dostavka/srochnaya/', title: 'Срочная', text: 'За 2–3 часа, приём заявок до 20:00' },
  { href: '/dostavka/po-grafiku/', title: 'По графику', text: 'Плановые поставки для подрядчиков и застройщиков' },
  { href: '/dostavka/samovyvoz/', title: 'Самовывоз', text: 'Загрузка вашего миксера с завода' },
];

const zoneRows = [
  { city: 'Жуковский', dist: 'в черте', note: 'Бесплатная доставка' },
  { city: 'Софьино', dist: '~10 км', note: 'Бесплатная доставка' },
  { city: 'Донино', dist: '~12 км', note: 'Бесплатная доставка' },
  { city: 'Быково', dist: '~8 км', note: 'Бесплатная доставка' },
  { city: 'Кратово', dist: '~15 км', note: 'Бесплатная доставка' },
  { city: 'Раменское', dist: '~18 км', note: 'Бесплатная доставка' },
  { city: 'Малаховка', dist: '~30 км', note: '750 ₽/м³' },
  { city: 'Игумново', dist: '~25 км', note: '700 ₽/м³' },
  { city: 'Заворово', dist: '~30 км', note: '750 ₽/м³' },
  { city: 'Кузнецово', dist: '~35 км', note: '800 ₽/м³' },
  { city: 'Лыткарино', dist: '~35 км', note: '800 ₽/м³' },
  { city: 'Ильинский', dist: '~30 км', note: '750 ₽/м³' },
  { city: 'Удельная', dist: '~25 км', note: '700 ₽/м³' },
];

const steps = [
  { title: 'Заявка и расчёт', text: 'Оставляете заявку по телефону или через форму на сайте. Менеджер уточнит марку, объём и адрес, согласует время подачи миксера. Занимает 5–10 минут.' },
  { title: 'Производство и загрузка', text: 'Смесь замешивается на БСУ Stetter под ваш заказ и проходит проверку в лаборатории. Миксер загружается ровно тем объёмом, который заявлен, с контрольным взвешиванием.' },
  { title: 'Доставка с GPS-трекингом', text: 'После загрузки миксер отправляется на объект. Машину видно в реальном времени. В среднем от заказа до подачи проходит 2–4 часа.' },
  { title: 'Разгрузка и документы', text: 'На разгрузку бесплатно отводится 60 минут. По завершении вы получаете ТТН, паспорт качества и счёт-фактуру, при необходимости — акт выверки объёма.' },
];

const fleetRows = [
  { volume: '1–7 м³', mixer: 'Миксер 7 м³', trips: '1 рейс' },
  { volume: '8–14 м³', mixer: 'Миксер 14 м³', trips: '1 рейс' },
  { volume: '15–21 м³', mixer: 'Миксер 7 м³', trips: '2–3 рейса' },
  { volume: '22–28 м³', mixer: 'Миксер 14 м³', trips: '2 рейса' },
  { volume: 'от 29 м³', mixer: 'Комбинация миксеров', trips: 'по согласованию' },
];

const conditions = [
  { title: 'Бесплатное время разгрузки — 60 минут', text: 'С момента прибытия миксера даётся 60 минут бесплатного простоя. Сверх нормы — доплата, уточняйте у менеджера.' },
  { title: 'Требования к подъезду', text: 'Высота проезда — от 4 м, ширина — от 3 м, покрытие твёрдое (асфальт, бетон, ПГС). Грунтовки и крутые уклоны обсуждаются отдельно.' },
  { title: 'Зимняя доставка', text: 'Возим при температуре до −20 °C. Зимой смесь готовится с противоморозными добавками (ПМД) — доплата к цене бетона.' },
  { title: 'Минимальный объём', text: 'Минимальный заказ — 1 м³. Под небольшой объём подберём подходящий миксер и удобное время подачи.' },
  { title: 'Документы с каждой поставкой', text: 'ТТН, паспорт качества бетонной смеси и счёт-фактура — пакет соответствует требованиям стройнадзора и банков.' },
  { title: 'Оплата', text: 'Наличные и банковский перевод, постоянным клиентам — рассрочка. Юрлицам — полный комплект закрывающих документов.' },
];

const faqItems = [
  {
    q: 'Сколько едет миксер до объекта?',
    a: 'От оформления заявки до подачи миксера в среднем проходит 2–4 часа. Срок зависит от удалённости объекта и загрузки автопарка. Менеджер назовёт точный интервал.',
  },
  { q: 'Что делать, если миксер опоздал?', a: `Позвоните на горячую линию ${company.phone} — диспетчер свяжется с водителем и уточнит статус. Если задержка случилась по нашей вине, компенсируем скидкой на текущий заказ.` },
  {
    q: 'Можно ли перенести или отменить заказ?',
    a: 'Перенести подачу можно не позднее чем за 2 часа до согласованного времени. Отмену принимаем за 4 часа до отгрузки. Если смесь уже загружена в миксер, стоимость партии удерживается полностью.',
  },
  { q: 'Что такое ТТН и зачем он нужен?', a: 'Товарно-транспортная накладная подтверждает факт поставки и объём бетона. Нужна для бухгалтерии, банковского финансирования и строительного надзора. Выдаём с каждым рейсом без доплаты.' },
  { q: 'Как узнать, где сейчас миксер?', a: 'На каждом миксере установлен GPS-трекер. После отгрузки диспетчер передаст ссылку для отслеживания либо сообщит статус по телефону.' },
  { q: 'Доставляете ли ночью и в выходные?', a: 'Работаем ежедневно с 8:00 до 22:00, включая выходные и праздники. Ночную доставку организуем по предварительной договорённости.' },
];

export default function DostavkaPage() {
  return (
    <>
      <Header />

      <main>
        <section className={`section ${styles.hero}`}>
          <div className="container">
            <nav className={styles.crumbs} aria-label="Хлебные крошки">
              <a href="/">Главная</a>
              <span>/</span>
              <span aria-current="page">Доставка</span>
            </nav>

            <div className={styles.heroGrid}>
              <div>
                <h1>Доставка бетона в Жуковском и по Раменскому району</h1>
                <p className={styles.heroSub}>
                  Подаём бетон в течение 2–4 часов. По Раменскому району — без оплаты доставки. Миксеры 7–14 м³ с
                  GPS. К каждой поставке прикладываем ТТН и паспорт качества.
                </p>
                <ul className={styles.quickBadges}>
                  <li>GPS на каждом миксере</li>
                  <li>Привоз за 2–4 часа</li>
                  <li>Миксеры 7–14 м³</li>
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
              <h2>Варианты доставки</h2>
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
              <h2>Стоимость доставки бетона</h2>
              <p className="section__lead">Раменский район — бесплатно. Тариф умножается на объём заказа.</p>
            </div>
            <div className={styles.zoneMap}>
              <div className={styles.zoneGraphic} aria-label="Схема зон доставки 10, 20, 30 и 50 км">
                <span className={styles.zone50}>50 км</span>
                <span className={styles.zone30}>30 км</span>
                <span className={styles.zone20}>20 км</span>
                <span className={styles.zone10}>10 км</span>
                <span className={styles.zoneCenter}>Завод</span>
              </div>
              <div className={styles.zoneLegend}>
                <h3>Кольца доставки</h3>
                <p>10 км — ближняя зона, 20–30 км — основной пояс поставок, до 50 км — дальняя доставка по тарифу.</p>
                <ul className={styles.plainList}>
                  <li>Раменский район — бесплатно</li>
                  <li>До 5 км — 500 ₽/м³</li>
                  <li>30–40 км — 800–850 ₽/м³</li>
                  <li>40–50 км — 900 ₽/м³</li>
                </ul>
              </div>
            </div>
            <div className="table-scroll">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Зона доставки</th>
                    <th>Цена, ₽/м³</th>
                  </tr>
                </thead>
                <tbody>
                  {deliveryTariffs.map((t) => (
                    <tr key={t.zone}>
                      <td>{t.zone}</td>
                      <td className="price">{t.label}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <Calculator title="Рассчитайте стоимость бетона с доставкой" />

        <section className="section section--alt">
          <div className="container">
            <div className="section__head">
              <h2>Города и населённые пункты в зоне доставки</h2>
              <p className="section__lead">Точную стоимость доставки для вашего адреса рассчитает менеджер при оформлении заказа.</p>
            </div>
            <div className="table-scroll">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Город / населённый пункт</th>
                    <th>Расстояние от завода</th>
                    <th>Примечание</th>
                  </tr>
                </thead>
                <tbody>
                  {zoneRows.map((r) => (
                    <tr key={r.city}>
                      <td className="grade-cell">
                        <b>{r.city}</b>
                      </td>
                      <td>{r.dist}</td>
                      <td>{r.note}</td>
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
              <h2>Этапы доставки бетона</h2>
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
              <h2>Наш автопарк миксеров</h2>
            </div>
            <p className={styles.leadText}>
              Доставку выполняем собственными миксерами объёмом от 7 до 14 м³. На каждой машине GPS-трекер, техника
              регулярно проходит плановое обслуживание. Объём загрузки подтверждается взвешиванием на заводе.
            </p>
            <div className="table-scroll">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Объём заказа</th>
                    <th>Рекомендуемый миксер</th>
                    <th>Количество рейсов</th>
                  </tr>
                </thead>
                <tbody>
                  {fleetRows.map((r) => (
                    <tr key={r.volume}>
                      <td className="price">{r.volume}</td>
                      <td>{r.mixer}</td>
                      <td>{r.trips}</td>
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
              <h2>Условия доставки</h2>
            </div>
            <ul className={styles.conditionsGrid}>
              {conditions.map((c) => (
                <li className={styles.conditionCard} key={c.title}>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Guarantees title="Четыре гарантии на каждую поставку" />

        <section className="section">
          <div className={`container ${styles.seoText}`}>
            <div className="section__head">
              <h2>Доставка бетона по Жуковскому и Раменскому району</h2>
            </div>
            <p>
              Бетон в Жуковском доставляем с завода {company.legalName} собственными миксерами вместимостью 7–14 м³.
              На каждой машине GPS-трекер, поэтому её положение видно в режиме реального времени.
            </p>
            <p>
              По Раменскому району доставка ничего не стоит — тариф 0 ₽/м³. Для соседних городов цена варьируется от
              500 до 900 ₽/м³ и зависит от расстояния. Привезти бетон в день обращения реально, если оформить заявку
              до 18:00; график работы — ежедневно с 8:00 до 22:00.
            </p>
            <p>
              Вместе с каждой партией заказчик получает ТТН, паспорт качества на смесь и счёт-фактуру. В зону
              доставки входят Жуковский, Раменское, Кратово, Малаховка, Удельная, Ильинский, Лыткарино, Заворово,
              Игумново и Кузнецово.
            </p>
          </div>
        </section>

        <FAQ title="Частые вопросы о доставке" items={faqItems} />

        <section className="section section--alt" id="zayavka">
          <div className={`container ${styles.subForm}`}>
            <h2>Оформите доставку бетона</h2>
            <LeadForm variant="full" submitLabel="Отправить заявку" />
          </div>
        </section>
      </main>

      <Footer />

      <JsonLd
        data={breadcrumbListSchema([
          { name: 'Главная', url: '/' },
          { name: 'Доставка', url: '/dostavka/' },
        ])}
      />
    </>
  );
}
