import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbListSchema, serviceSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import { Header } from '@/components/Header';
import { LeadForm } from '@/components/LeadForm';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { company, deliveryTariffs } from '@/data/site';
import styles from '@/styles/subpage.module.css';

export const metadata: Metadata = pageMetadata({
  title: 'Доставка бетона по графику для объектов в Жуковском',
  description:
    'Поставки бетона по графику для подрядчиков и застройщиков. Подача в срок до 30 мин, скидки от 100 м³/мес. Работаем с 2003 года. +7 (499) 111-72-62.',
  path: '/dostavka/po-grafiku/',
});

const steps = [
  { title: 'Согласование объёма и графика', text: 'На встрече или по звонку определяем число рейсов, объём каждого и дни подачи.' },
  { title: 'Фиксация цены на сезон', text: 'В течение всего договорного периода цена остаётся неизменной.' },
  { title: 'Поставки по расписанию', text: 'Миксеры прибывают в оговорённое время, вы работаете без простоев.' },
  { title: 'Закрывающие документы', text: 'ТТН, паспорта качества, счета-фактуры и акты сверки оформляются раз в месяц.' },
];

const audiences = [
  { title: 'Строительные подрядчики', text: 'Монолитные работы, заливка фундаментов, перекрытий и колонн. Нужна предсказуемая подача бетона к готовой опалубке — без ожидания и простоев бригады.' },
  { title: 'Застройщики жилых посёлков', text: 'Параллельное строительство нескольких домов. Плановый график позволяет чередовать заливки и равномерно загружать бригады без перехлёстов.' },
  { title: 'Дорожные и инфраструктурные организации', text: 'Поточная укладка по пролётам, строительство полотна и тротуаров. Перерыв в поставке — это холодный шов и риск брака конструкции.' },
  { title: 'Промышленные предприятия', text: 'Плановое потребление бетона под текущий ремонт и строительство на площадке. Удобное ежемесячное закрытие документов для бухгалтерии.' },
  { title: 'Генеральные подрядчики', text: 'Требуется координация поставок бетона в рамках общего сетевого графика проекта. Подстраиваем логистику под вашу систему.' },
];

const faqItems = [
  { q: 'Можно ли изменить объём в последний момент?', a: 'Да, если предупредить за 4 часа и более. Резкие изменения согласовываем оперативно по телефону.' },
  { q: 'Что если миксер опоздал?', a: 'Простой бригады компенсируем по согласованию. Опоздания случаются редко: работа по графику означает, что миксеры зарезервированы под ваши поставки заранее.' },
  { q: 'Нужен ли договор для работы по графику?', a: 'Да. Оформляем договор поставки с указанием объёма, цены, расписания и ответственности сторон. Он защищает вас от повышения цены и даёт приоритет в загрузке производства.' },
  { q: 'Какой минимальный объём для работы по графику?', a: 'От 30–50 м³/месяц. Меньшие объёмы обслуживаем по разовым заявкам без графика.' },
];

export default function PoGrafikuPage() {
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
              <span aria-current="page">По графику</span>
            </nav>

            <div className={styles.heroGrid}>
              <div>
                <h1>Доставка бетона по графику для строительных компаний и подрядчиков</h1>
                <p className={styles.heroSub}>Закрепляем расписание поставок. Не срываем сроки объекта. Раменский р-н — бесплатно.</p>
                <ul className={styles.quickBadges}>
                  <li>Фиксированный график поставок</li>
                  <li>Для объектов от 30 м³/месяц</li>
                  <li>Договор и полная документация</li>
                </ul>
              </div>

              <div className={styles.formCard}>
                <h2 className={styles.formTitle}>Обсудить поставки</h2>
                <LeadForm variant="short" note="Бесплатно · Без обязательств · Ответим за 15 минут" />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Как мы организуем поставки</h2>
              <p className="section__lead">
                Для объектов с плановым расходом бетона мы закрепляем дни, время и объёмы на весь строительный
                сезон. Ежедневные заявки больше не нужны — миксеры приходят строго по расписанию. Отклонение по
                времени подачи не превышает 30 минут.
              </p>
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
              <h2>Кому подходит формат поставок по графику</h2>
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
              <h2>Тарифы и скидки при поставках по графику</h2>
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
            <p className="form-note">
              Ожидание на объекте: 60 минут — бесплатно, далее 1 000 ₽/час. От 100 м³/месяц — накопительная скидка,
              размер согласовывается при заключении договора. Цена на бетон фиксируется на весь сезон.
            </p>
          </div>
        </section>

        <section className="section section--alt">
          <div className={`container ${styles.seoText}`}>
            <div className="section__head">
              <h2>Поставка бетона по графику для строительных объектов в Жуковском</h2>
            </div>
            <p>
              {company.legalName} выстраивает регулярные поставки бетона по фиксированному графику для строительных
              компаний, подрядчиков и промышленных предприятий. Завод на рынке с {company.since} года — опыта
              хватает, чтобы спланировать логистику под любой сетевой график стройки.
            </p>
            <p>
              Схема доставки бетона на объект по графику простая: расписание согласуется один раз, дальше миксеры
              приходят без напоминаний. Закрывающие документы оформляются раз в месяц. При объёме от 100 м³/месяц
              действуют скидки. По Раменскому району — бесплатно. Звоните {company.phone}.
            </p>
          </div>
        </section>

        <FAQ title="Вопросы о поставках по графику" items={faqItems} />

        <section className="section" id="zayavka">
          <div className={`container ${styles.subForm}`}>
            <h2>Обсудить поставки по графику</h2>
            <LeadForm variant="full" submitLabel="Отправить заявку" />
          </div>
        </section>
      </main>

      <Footer />

      <JsonLd
        data={breadcrumbListSchema([
          { name: 'Главная', url: '/' },
          { name: 'Доставка', url: '/dostavka/' },
          { name: 'По графику', url: '/dostavka/po-grafiku/' },
        ])}
      />
      <JsonLd data={serviceSchema({ serviceType: 'Плановая поставка бетона по графику', areaServed: `${company.city} и Раменский округ` })} />
    </>
  );
}
