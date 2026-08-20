import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbListSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import { Header } from '@/components/Header';
import { LeadForm } from '@/components/LeadForm';
import { PriceCatalog } from '@/components/PriceCatalog';
import { Calculator } from '@/components/Calculator';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { company, deliveryTariffs } from '@/data/site';
import styles from '@/styles/subpage.module.css';

export const metadata: Metadata = pageMetadata({
  title: 'Прайс-лист на бетон в Жуковском — цены от завода',
  description:
    'Прайс на бетон завода ПСК Прогресс в Жуковском: все марки с НДС. По Раменскому р-ну доставка бесплатна. Минимум от 1 м³, работаем 8:00–22:00.',
  path: '/ceny/',
});

const mortarRows = [
  { grade: 'М75', price: 3000 },
  { grade: 'М100', price: 3350 },
  { grade: 'М150', price: 3700 },
  { grade: 'М200', price: 3950 },
  { grade: 'М250', price: 4100 },
  { grade: 'М300', price: 4250 },
];

const peskobetonRows = [
  { grade: 'М250', price: 4140 },
  { grade: 'М300', price: 4320 },
  { grade: 'М350', price: 4520 },
];

const otherRows = [
  { name: 'Керамзитобетон', grades: 'М100–М250', price: '3 900–4 350' },
  { name: 'Тощий бетон', grades: 'М100–М250', price: '3 450–3 900' },
  { name: 'Штукатурный раствор', grades: 'М100–М200', price: '3 650–4 150' },
  { name: 'Цементное молоко', grades: '—', price: '5 900' },
];

const pmdRows = [
  { temp: 'До −5 °C', fee: '+100 ₽/м³' },
  { temp: 'До −20 °C', fee: '+250 ₽/м³' },
];

const pumpRows = [
  { pump: '22 м', price: '2 750' },
  { pump: '32 м', price: '2 250' },
  { pump: '36 м', price: '3 800' },
  { pump: '46 м', price: '4 000' },
  { pump: '57 м', price: '6 500' },
];

const whatIncluded = [
  { title: 'НДС 20%', text: 'Налог уже заложен в цену, доплат сверху нет.' },
  { title: 'Паспорт качества', text: 'Выдаём на каждую партию из аккредитованной лаборатории.' },
  { title: 'ТТН', text: 'Товарно-транспортная накладная к каждой поставке.' },
  { title: 'Акт объёма', text: 'Документально подтверждает поставленное количество.' },
];

const faqItems = [
  { q: 'Цены указаны с НДС или без?', a: 'С НДС 20%. Указанные в прайсе цифры окончательные, скрытых доплат нет.' },
  { q: 'Когда цены могут измениться?', a: 'Только при росте цен на цемент или ГСМ. О повышении сообщаем клиентам за 1–3 дня.' },
  { q: 'Есть ли скидки при большом объёме?', a: 'Да. От 50 м³ размер скидки согласуем индивидуально — просто позвоните диспетчеру.' },
  { q: 'Можно ли зафиксировать цену на несколько месяцев?', a: 'Да. С юридическими лицами заключаем договор поставки с фиксацией цены на сезон.' },
];

export default function CenyPage() {
  return (
    <>
      <Header />

      <main>
        <section className={`section ${styles.hero}`}>
          <div className="container">
            <nav className={styles.crumbs} aria-label="Хлебные крошки">
              <a href="/">Главная</a>
              <span>/</span>
              <span aria-current="page">Цены</span>
            </nav>

            <div className={styles.heroGrid}>
              <div>
                <h1>Прайс-лист на бетон в Жуковском — цены от завода</h1>
                <p className={styles.heroSub}>Цены с НДС на все марки и виды бетона. По Раменскому району доставляем бесплатно.</p>
                <ul className={styles.quickBadges}>
                  <li>С НДС без скрытых доплат</li>
                  <li>От 1 м³</li>
                  <li>Раменский р-н бесплатно</li>
                </ul>
              </div>

              <div className={styles.formCard}>
                <h2 className={styles.formTitle}>Получить расчёт</h2>
                <LeadForm variant="short" note="Бесплатно · Без обязательств · Ответим за 15 минут" />
              </div>
            </div>
          </div>
        </section>

        <PriceCatalog title="Товарный бетон на гравии и граните" lead="Марки и цены с НДС. Кнопка «В корзину» добавляет позицию в заявку." />

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Цементный раствор (ЦПР) и пескобетон</h2>
            </div>
            <div className={styles.pricePair}>
              <div className="table-scroll">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Марка ЦПР</th>
                      <th>Цена, ₽/м³</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mortarRows.map((r) => (
                      <tr key={r.grade}>
                        <td className="grade-cell">
                          <b>{r.grade}</b>
                        </td>
                        <td className="price">{r.price.toLocaleString('ru-RU')} ₽</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="table-scroll">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Марка пескобетона</th>
                      <th>Цена, ₽/м³</th>
                    </tr>
                  </thead>
                  <tbody>
                    {peskobetonRows.map((r) => (
                      <tr key={r.grade}>
                        <td className="grade-cell">
                          <b>{r.grade}</b>
                        </td>
                        <td className="price">{r.price.toLocaleString('ru-RU')} ₽</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="section__head">
              <h2>Другие виды бетона и растворов</h2>
            </div>
            <div className="table-scroll">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Вид</th>
                    <th>Марки</th>
                    <th>Цена, ₽/м³</th>
                  </tr>
                </thead>
                <tbody>
                  {otherRows.map((r) => (
                    <tr key={r.name}>
                      <td className="grade-cell">
                        <b>{r.name}</b>
                      </td>
                      <td>{r.grades}</td>
                      <td className="price">{r.price}</td>
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
              <h2>Стоимость доставки по зонам</h2>
              <p className="section__lead">По Раменскому району — бесплатно, дальше тариф растёт с расстоянием.</p>
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

        <section className="section section--alt">
          <div className="container">
            <div className="section__head">
              <h2>Дополнительные услуги</h2>
            </div>
            <div className={styles.pricePair}>
              <div className="table-scroll">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Противоморозные добавки</th>
                      <th>Доплата</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pmdRows.map((r) => (
                      <tr key={r.temp}>
                        <td>{r.temp}</td>
                        <td className="price">{r.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="table-scroll">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Аренда бетононасоса</th>
                      <th>Цена, ₽/час</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pumpRows.map((r) => (
                      <tr key={r.pump}>
                        <td>{r.pump}</td>
                        <td className="price">{r.price} ₽</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="form-note">Ожидание миксера на объекте: первые 60 минут — бесплатно, далее 1 000 ₽/час.</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Как посчитать итоговую стоимость заказа</h2>
            </div>
            <p className={styles.formula}>Цена бетона × объём + тариф доставки × объём + дополнительные услуги</p>
            <p className={styles.formulaExampleLarge}>
              Пример: 10 м³ М200 (гравий) с доставкой в Раменский район — бетон 10 × 4 700 = 47 000 ₽, доставка 0 ₽
              (бесплатно). <b>Итого: 47 000 ₽ с НДС.</b>
            </p>
          </div>
        </section>

        <Calculator title="Рассчитайте стоимость онлайн" />

        <section className="section section--alt">
          <div className="container">
            <div className="section__head">
              <h2>Что входит в цену</h2>
            </div>
            <ul className={styles.includedGrid}>
              {whatIncluded.map((item) => (
                <li className={styles.includedCard} key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className={`container ${styles.seoText}`}>
            <div className="section__head">
              <h2>Стоимость бетона в Жуковском — актуальный прайс</h2>
            </div>
            <p>
              Завод ПСК Прогресс с {company.since} года отгружает товарный бетон в Жуковском и по Раменскому району
              напрямую от производителя, без посреднических наценок. Цена стартует от 4 150 ₽/м³ за марку М100 на
              гравии и от 3 000 ₽/м³ за цементный раствор М75. В прайс уже включены НДС 20%, паспорт качества и все
              сопроводительные документы.
            </p>
            <p>
              По Раменскому району бетон доставляем бесплатно. От 50 м³ действует скидка — размер уточняйте у
              диспетчера. Минимальная партия — 1 м³, приём заявок ежедневно {company.hours}.
            </p>
          </div>
        </section>

        <FAQ title="Частые вопросы о ценах" items={faqItems} />

        <section className="section section--alt" id="zayavka">
          <div className={`container ${styles.subForm}`}>
            <h2>Оформить заявку</h2>
            <LeadForm variant="full" submitLabel="Отправить заявку" />
          </div>
        </section>
      </main>

      <Footer />

      <JsonLd
        data={breadcrumbListSchema([
          { name: 'Главная', url: '/' },
          { name: 'Цены', url: '/ceny/' },
        ])}
      />
    </>
  );
}
