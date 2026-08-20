import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbListSchema, serviceSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import { Header } from '@/components/Header';
import { LeadForm } from '@/components/LeadForm';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { PlaceholderVisual } from '@/components/PlaceholderVisual';
import { company, deliveryTariffs } from '@/data/site';
import styles from '@/styles/subpage.module.css';

export const metadata: Metadata = pageMetadata({
  title: 'Доставка бетона миксером (АБС) в Жуковском — от завода',
  description:
    'Возим бетон автобетоносмесителями 7 и 14 м³ с GPS. Раменский р-н бесплатно. Бронь за 15 мин, доставка в день заказа 8:00–22:00. Звоните: +7 (499) 111-72-62.',
  path: '/dostavka/mikserom/',
});

const steps = [
  { title: 'Заявка', text: 'Позвоните, напишите в WhatsApp либо заполните форму на сайте. Уточним адрес объекта, марку смеси, объём и дату подачи. Заявку подтверждаем за 15 минут.' },
  { title: 'Замес на БСУ', text: 'Смесь готовится на автоматизированной бетоносмесительной установке Stetter. Цемент, песок, щебень и вода дозируются точно — состав отвечает марке и ГОСТ.' },
  { title: 'Выезд миксера', text: 'Автобетоносмеситель отправляется на объект. GPS-трекинг работает в реальном времени — вы видите машину и успеваете подготовить площадку.' },
  { title: 'Выгрузка', text: 'На объекте 60 минут ожидания — бесплатно. Специалист замеряет объём в кузове рулеткой и подписывает акт. На руки — паспорт качества, ТТН и счёт-фактура.' },
];

const mixerTypes = [
  {
    title: 'Миксер 7 м³',
    subtitle: 'Для частных объектов',
    text: 'Рассчитан на объёмы от 1 до 6 м³. Проезжает в узкие въезды, подъезжает к дачному участку, частному дому или гаражу. Оптимален для фундамента под небольшой дом, отмостки, стяжки или забора.',
    details: ['Минимальная ширина проезда: 3,5 м', 'Грунт: бетонный или твёрдый (не мягкий газон)', 'Лоток для выгрузки: до 3 м от машины'],
  },
  {
    title: 'Миксер 14 м³',
    subtitle: 'Для строительных объектов',
    text: 'Рассчитан на объёмы от 7 до 14 м³. Применяется на стройплощадках, промышленных и коммерческих объектах. Рейсов меньше — захватку закрываете быстрее.',
    details: ['Минимальная ширина проезда: 4 м', 'Грунт: твёрдое покрытие или подготовленная площадка', 'Лоток для выгрузки: до 3 м от машины'],
  },
];

const documents = [
  { title: 'Паспорт качества', text: 'Марка, класс, состав, результаты лабораторных испытаний.' },
  { title: 'ТТН', text: 'Товарно-транспортная накладная — подтверждение поставки и объёма.' },
  { title: 'Счёт-фактура', text: 'Для юридических лиц, принятие НДС к вычету.' },
  { title: 'Акт проверки объёма', text: 'Специалист замеряет объём рулеткой прямо в кузове и подписывает.' },
];

const faqItems = [
  {
    q: 'Как заказать миксер с бетоном?',
    a: `Позвоните по номеру ${company.phone}, напишите в WhatsApp или оставьте заявку на сайте. Укажите марку бетона, объём, адрес объекта, дату и время подачи. Бронирование подтверждаем в течение 15 минут.`,
  },
  { q: 'Можно ли заказать бетон в выходной?', a: 'Да. Мы на связи ежедневно, включая субботу, воскресенье и праздники — с 8:00 до 22:00 без перерывов.' },
  { q: 'Что будет, если выгрузка затянется?', a: 'Первые 60 минут ожидания на объекте — бесплатно. Далее каждый час стоит 1 000 ₽. Советуем заранее подготовить опалубку, лотки или бетононасос.' },
  { q: 'Как проверить, что привезли ровно столько, сколько заказали?', a: 'Специалист завода с рулеткой замеряет объём бетона в барабане миксера прямо на объекте перед выгрузкой. Результат заносится в акт с подписью.' },
  { q: 'Можно ли получить бетон поздно вечером, в 21:00?', a: 'Да, если заявка оформлена до 19:00–20:00. Выезд и доставка в вечерние часы укладываются в режим работы 8:00–22:00.' },
];

export default function MikseromPage() {
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
              <span aria-current="page">Миксером</span>
            </nav>

            <div className={styles.heroGrid}>
              <div>
                <h1>Доставка бетона миксером (АБС) в Жуковском и Подмосковье</h1>
                <p className={styles.heroSub}>Миксеры 7 и 14 м³ с GPS. Раменский р-н — бесплатно. Привозим в день заказа.</p>
                <ul className={styles.quickBadges}>
                  <li>Бесплатно в Раменском р-не</li>
                  <li>GPS-отслеживание</li>
                  <li>В день заказа 8:00–22:00</li>
                </ul>
              </div>

              <div className={styles.sideStack}>
                <PlaceholderVisual kind="mixer" priority />
                <div className={styles.formCard}>
                  <h2 className={styles.formTitle}>Оформить заявку</h2>
                  <LeadForm variant="short" note="Бесплатно · Без обязательств · Ответим за 15 минут" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Как проходит доставка</h2>
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
              <h2>Стоимость доставки в зависимости от расстояния</h2>
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
            <p className="form-note">Ожидание на объекте: 60 минут — бесплатно, далее 1 000 ₽/час.</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Какой миксер выбрать</h2>
            </div>
            <div className={styles.mixerGrid}>
              {mixerTypes.map((m) => (
                <div className={styles.mixerCard} key={m.title}>
                  <h3>{m.title}</h3>
                  <p className={styles.mixerSubtitle}>{m.subtitle}</p>
                  <p>{m.text}</p>
                  <ul>
                    {m.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="form-note">Сомневаетесь, какой миксер нужен? Позвоните — менеджер подберёт вариант за одну минуту.</p>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="section__head">
              <h2>Документы с каждым рейсом</h2>
            </div>
            <ul className={styles.caseGrid4}>
              {documents.map((d) => (
                <li className={styles.caseCard} key={d.title}>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className={`container ${styles.seoText}`}>
            <div className="section__head">
              <h2>Доставка бетона миксером в Жуковском от завода-производителя</h2>
            </div>
            <p>
              {company.legalName} с {company.since} года производит бетон и доставляет его автобетоносмесителями
              (АБС) собственного парка. На миксерах установлен GPS: вы следите за машиной и готовите площадку к
              выгрузке без лишних простоев.
            </p>
            <p>
              По Жуковскому и Раменскому району доставка бетона миксером обходится бесплатно. За пределами района
              цена зависит от расстояния и составляет от 500 до 900 ₽/м³ с НДС. Заявки принимаем ежедневно с 8:00 до
              22:00 — заказать автобетоносмеситель можно в тот же день.
            </p>
            <p>
              В парке есть миксеры на 7 м³ (для малых объёмов и узких въездов) и на 14 м³ (для крупных захваток). На
              объекте предоставляем 60 минут бесплатного ожидания, далее — 1 000 ₽/час. Замес выполняется на
              установке Stetter, поэтому состав стабилен и соответствует ГОСТ.
            </p>
          </div>
        </section>

        <FAQ title="Вопросы о доставке миксером" items={faqItems} />

        <section className="section section--alt" id="zayavka">
          <div className={`container ${styles.subForm}`}>
            <h2>Заказать доставку бетона миксером</h2>
            <LeadForm variant="full" submitLabel="Отправить заявку" />
          </div>
        </section>
      </main>

      <Footer />

      <JsonLd
        data={breadcrumbListSchema([
          { name: 'Главная', url: '/' },
          { name: 'Доставка', url: '/dostavka/' },
          { name: 'Миксером', url: '/dostavka/mikserom/' },
        ])}
      />
      <JsonLd data={serviceSchema({ serviceType: 'Доставка бетона автобетоносмесителем', areaServed: `${company.city} и Раменский округ` })} />
    </>
  );
}
