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
  title: 'Срочная доставка бетона в Жуковском за 2–3 часа',
  description:
    'Срочная доставка бетона в Жуковском за 2–3 часа. Бронь за 15 мин, GPS-миксеры, Раменский р-н бесплатно. Заявки принимаем до 20:00. Звоните: +7 (499) 111-72-62.',
  path: '/dostavka/srochnaya/',
});

const timeline = [
  { time: '14:00', text: 'Оставляете заявку — звонком, в WhatsApp или через форму' },
  { time: '14:15', text: 'Менеджер подтверждает заявку и называет точное время выезда' },
  { time: '15:00–15:30', text: 'Замес бетона на БСУ Stetter — точная дозировка по марке' },
  { time: '15:30–16:00', text: 'Миксер выезжает. GPS-трекинг — положение машины видно онлайн' },
  { time: '16:00–16:30', text: 'Выгрузка на объекте. 60 минут ожидания — бесплатно' },
];

const situations = [
  { title: 'Прорвало опалубку или требуется немедленная доливка', text: 'Холодный шов в монолите — критический дефект конструкции. Доливать нужно в пределах одной рабочей смены. Срочная доставка снимает этот риск.' },
  { title: 'Бригада простаивает', text: 'Простой рабочей бригады обходится в 5 000–10 000 ₽ в час. Срочная поставка бетона окупается быстрее, чем кажется.' },
  { title: 'Заказали меньше, чем нужно', text: 'По ходу заливки объём оказался больше расчётного. Позвоните — недостающий объём добавим в тот же день.' },
  { title: 'Надвигается дождь или ухудшение погоды', text: 'Синоптики обещают дождь к вечеру? Значит, залить нужно сейчас, пока площадка сухая. Организуем срочный выезд.' },
  { title: 'Сжатые сроки по графику объекта', text: 'Ждать плановую поставку некогда — дедлайн уже сегодня. Позвоните, и мы проверим наличие свободного миксера.' },
];

const faqItems = [
  { q: 'За сколько часов вы привезёте срочный заказ?', a: 'Как правило, 2–3 часа с момента оформления заявки. В загруженные дни срок уточняется при бронировании — менеджер назовёт точный интервал.' },
  { q: 'Работаете ли ночью?', a: 'До 22:00. Последний приём заявок на доставку — до 20:00. С 22:00 до 8:00 выезды не выполняются.' },
  { q: 'Есть ли надбавка за срочность?', a: 'Это зависит от загрузки производства и парка миксеров. При приёме заявки менеджер сообщит — нередко надбавки нет.' },
  { q: 'Что делать, если бетон нужен прямо сейчас, в 19:00?', a: `Сразу звоните на ${company.phone}. Мы проверим наличие свободного миксера и время готовности замеса. Если ресурс есть — выедем.` },
];

export default function SrochnayaPage() {
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
              <span aria-current="page">Срочная</span>
            </nav>

            <div className={styles.heroGrid}>
              <div>
                <h1>Срочная доставка бетона в Жуковском за 2–3 часа</h1>
                <p className={styles.heroSub}>Заявки принимаем до 20:00. Доставляем до 22:00. Раменский р-н — бесплатно.</p>
                <ul className={styles.quickBadges}>
                  <li>Подтверждение за 15 мин</li>
                  <li>Выезд через 60–90 мин</li>
                  <li>GPS-трекинг</li>
                </ul>
              </div>

              <div className={styles.formCard}>
                <h2 className={styles.formTitle}>Оформить срочную заявку</h2>
                <LeadForm variant="short" note="Бесплатно · Без обязательств · Ответим за 15 минут" />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Как мы организуем срочный выезд</h2>
              <p className="section__lead">Пример временного графика</p>
            </div>
            <div className="table-scroll">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Время</th>
                    <th>Этап</th>
                  </tr>
                </thead>
                <tbody>
                  {timeline.map((t) => (
                    <tr key={t.time}>
                      <td className="grade-cell">
                        <b>{t.time}</b>
                      </td>
                      <td>{t.text}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="form-note">
              Время доставки определяется расстоянием и загрузкой производства. В загруженные дни уточняем его при
              приёме заявки. Для срочного заказа сообщите марку бетона, объём, адрес объекта и желаемое время
              подачи.
            </p>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="section__head">
              <h2>Когда бетон нужен сегодня и как можно быстрее</h2>
            </div>
            <ul className={styles.caseGrid3}>
              {situations.map((s) => (
                <li className={styles.caseCard} key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Стоимость срочной доставки</h2>
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
              Ожидание на объекте: 60 минут — бесплатно, далее 1 000 ₽/час. Надбавка за срочность — при наличии,
              уточняется менеджером при приёме заявки, в ряде случаев без надбавки.
            </p>
          </div>
        </section>

        <section className="section section--alt">
          <div className={`container ${styles.seoText}`}>
            <div className="section__head">
              <h2>Срочная доставка бетона в Жуковском от завода</h2>
            </div>
            <p>
              {company.legalName} принимает срочные заявки на бетон ежедневно с 8:00 до 22:00. От заявки до
              выгрузки проходит 2–3 часа — в зависимости от расстояния и загрузки производства. Бронь подтверждаем
              в течение 15 минут после звонка.
            </p>
            <p>
              Для Жуковского и Раменского района срочный заказ бетона выполняется бесплатно, для остальных городов
              Подмосковья — по тарифу от 500 до 900 ₽/м³. Нужен бетон сегодня — звоните по номеру {company.phone}{' '}
              или пишите в WhatsApp.
            </p>
          </div>
        </section>

        <FAQ title="Вопросы о срочной доставке" items={faqItems} />

        <section className="section" id="zayavka">
          <div className={`container ${styles.subForm}`}>
            <h2>Оставить срочную заявку</h2>
            <LeadForm variant="full" submitLabel="Отправить заявку" />
          </div>
        </section>
      </main>

      <Footer />

      <JsonLd
        data={breadcrumbListSchema([
          { name: 'Главная', url: '/' },
          { name: 'Доставка', url: '/dostavka/' },
          { name: 'Срочная', url: '/dostavka/srochnaya/' },
        ])}
      />
      <JsonLd data={serviceSchema({ serviceType: 'Срочная доставка бетона', areaServed: `${company.city} и Раменский округ` })} />
    </>
  );
}
