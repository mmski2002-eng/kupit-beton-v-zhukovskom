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
  title: 'Бетон малыми объёмами 1–5 м³ с доставкой в Жуковском',
  description:
    'Возим бетон от 1 м³ — под дачу, гараж, забор, стяжку. Миксер 7 м³, Раменский р-н бесплатно, ежедневно 8:00–22:00. Менеджер бесплатно рассчитает объём.',
  path: '/dostavka/malymi-obyomami/',
});

const useCases = [
  { title: 'Столбы и стаканы для забора', text: '10–15 лунок глубиной 1 м и диаметром 20 см = 1–2 м³ бетона. Хватает одного заезда миксера и одного–двух рабочих часов. Быстрее и удобнее, чем месить вёдрами.' },
  { title: 'Отмостка вокруг дачного дома', text: 'Периметр 30 м × ширина 0,8 м × толщина 0,1 м = 2,4 м³. Одного рейса достаточно, чтобы отмостка была готова. Бетон из миксера выходит однородным, без трещин.' },
  { title: 'Стяжка в гараже', text: '30 м² × толщина стяжки 0,1 м = 3 м³. Миксер 7 м³ доставит объём за один заезд — гараж заливается целиком, без холодных швов между замесами.' },
  { title: 'Крыльцо и ступени', text: '1–2 м³ — точный объём зависит от числа ступеней и ширины. Менеджер рассчитает его по вашим размерам — просто позвоните.' },
  { title: 'Долив к уже залитому', text: 'Заказали меньше, чем понадобилось? Привезём от 1 м³ в тот же день или на следующий. Работаем ежедневно 8:00–22:00.' },
];

const compare = [
  { title: 'Скорость', text: '2 м³ из миксера = 1 заезд = 30 минут выгрузки. Бетономешалка 200 л: 10 замесов по 20 минут = 3–4 часа работы плюс физическая усталость.' },
  { title: 'Качество', text: 'Заводской бетон — это ГОСТ-состав и точная дозировка на автоматизированной установке Stetter. При ручном замесе водоцементное отношение нестабильно, а значит — трещины и потеря прочности.' },
  { title: 'Документы', text: 'С каждым рейсом вы получаете паспорт качества и ТТН. Они нужны для строительного контроля, ипотечного финансирования или будущей продажи дома.' },
];

const faqItems = [
  { q: 'Можно ли заказать 0,5 м³?', a: 'Минимальный объём — 1 м³. Заказ меньше кубометра невыгоден: стоимость выезда миксера фиксирована и не зависит от количества бетона.' },
  { q: 'Успеет ли один человек разлить 2 м³?', a: 'С помощью лотка миксера — да, при условии, что опалубка или форма готова заранее. Лучше работать вдвоём: один направляет лоток, другой трамбует и разравнивает.' },
  { q: 'Привезут ли бетон в воскресенье?', a: 'Да. Мы работаем без выходных, ежедневно с 8:00 до 22:00, включая праздники.' },
  { q: 'Как рассчитать нужный объём?', a: `Позвоните по номеру ${company.phone} — менеджер бесплатно рассчитает объём по размерам вашей конструкции. Или воспользуйтесь калькулятором на сайте.` },
];

export default function MalymiObyomamiPage() {
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
              <span aria-current="page">Малыми объёмами</span>
            </nav>

            <div className={styles.heroGrid}>
              <div>
                <h1>Доставка бетона от 1 м³ в Жуковском — для дачи и частных объектов</h1>
                <p className={styles.heroSub}>Миксер 7 м³ под небольшие объёмы. Раменский р-н — бесплатно. На связи ежедневно 8:00–22:00.</p>
                <ul className={styles.quickBadges}>
                  <li>От 1 м³ — минимальный заказ</li>
                  <li>Миксер 7 м³ для частных объектов</li>
                  <li>Раменский р-н — бесплатно</li>
                </ul>
              </div>

              <div className={styles.formCard}>
                <h2 className={styles.formTitle}>Оформить заявку</h2>
                <LeadForm variant="short" note="Бесплатно · Без обязательств · Ответим за 15 минут" />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Какие задачи закрываем объёмом 1–5 м³</h2>
            </div>
            <ul className={styles.caseGrid3}>
              {useCases.map((c) => (
                <li className={styles.caseCard} key={c.title}>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="section__head">
              <h2>Стоимость доставки бетона</h2>
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
              <h2>Почему заводской бетон выгоднее собственной бетономешалки</h2>
            </div>
            <ul className={styles.caseGrid3}>
              {compare.map((c) => (
                <li className={styles.caseCard} key={c.title}>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section--alt">
          <div className={`container ${styles.seoText}`}>
            <div className="section__head">
              <h2>Бетон малыми объёмами в Жуковском — от 1 м³ с доставкой</h2>
            </div>
            <p>
              Небольшой объём бетона в Жуковском можно заказать, не переплачивая за лишние кубометры. Минимальный
              заказ — 1 м³. Миксер 7 м³ создан именно под малые объёмы: он проходит в узкие ворота, подъезжает к
              даче, частному дому или гаражу.
            </p>
            <p>
              По Раменскому району доставка бетона 1 м³ бесплатна. В другие районы Подмосковья везём по тарифу от
              500 ₽/м³ — итог зависит от расстояния. Заявки принимаем ежедневно с 8:00 до 22:00. Нужный объём
              менеджер рассчитает бесплатно по размерам вашего объекта — позвоните или напишите в WhatsApp.
            </p>
          </div>
        </section>

        <FAQ title="Вопросы о доставке малыми объёмами" items={faqItems} />

        <section className="section" id="zayavka">
          <div className={`container ${styles.subForm}`}>
            <h2>Заказать бетон малым объёмом</h2>
            <LeadForm variant="full" submitLabel="Отправить заявку" />
          </div>
        </section>
      </main>

      <Footer />

      <JsonLd
        data={breadcrumbListSchema([
          { name: 'Главная', url: '/' },
          { name: 'Доставка', url: '/dostavka/' },
          { name: 'Малыми объёмами', url: '/dostavka/malymi-obyomami/' },
        ])}
      />
      <JsonLd data={serviceSchema({ serviceType: 'Доставка бетона малыми объёмами', areaServed: `${company.city} и Раменский округ` })} />
    </>
  );
}
