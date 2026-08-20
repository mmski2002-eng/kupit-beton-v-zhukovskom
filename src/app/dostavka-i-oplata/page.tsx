import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbListSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import { Header } from '@/components/Header';
import { LeadForm } from '@/components/LeadForm';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { company, deliveryTariffs } from '@/data/site';
import styles from '@/styles/subpage.module.css';

export const metadata: Metadata = pageMetadata({
  title: 'Доставка и оплата бетона в Жуковском — ПСК Прогресс',
  description:
    'Как устроены доставка и оплата бетона в Жуковском и районе: Раменский р-н бесплатно, наличные и безнал, НДС в цене, GPS-миксеры 7 и 14 м³, 8:00–22:00 ежедневно.',
  path: '/dostavka-i-oplata/',
});

const paymentWays = [
  { title: 'Наличными при доставке', text: 'Для физических лиц. Оплата водителю-миксеристу по факту выгрузки.' },
  { title: 'Безналичный перевод (для юридических лиц)', text: 'Порядок: выставляем счёт → вы оплачиваете → подтверждаем → поставка. Полный пакет документов: счёт, ТТН, акт, счёт-фактура с НДС.' },
  { title: 'По договору поставки', text: 'Для регулярных клиентов — постоплата по условиям договора, уточняйте у менеджера.' },
];

const documents = [
  { doc: 'Паспорт качества', who: 'Всем' },
  { doc: 'ТТН', who: 'Всем' },
  { doc: 'Акт объёма', who: 'Всем' },
  { doc: 'Счёт-фактура', who: 'Юридическим лицам' },
  { doc: 'Счёт на оплату', who: 'Юридическим лицам' },
];

const faqItems = [
  { q: 'Какой минимальный заказ?', a: '1 м³. Привезём даже небольшой объём для дачи или частного строительства.' },
  { q: 'Доставляете в выходные и праздники?', a: `Да, ежедневно ${company.hours}, без выходных и праздников.` },
  { q: 'Принимаете безналичную оплату с НДС?', a: 'Да. Юрлицам выставляем счёт, после оплаты — поставка. Документы: ТТН, акт, счёт-фактура.' },
  { q: 'Возможна ли постоплата?', a: 'Для постоянных клиентов по договору — уточняйте условия у менеджера.' },
];

export default function DostavkaIOplataPage() {
  return (
    <>
      <Header />

      <main>
        <section className={`section ${styles.hero}`}>
          <div className="container">
            <nav className={styles.crumbs} aria-label="Хлебные крошки">
              <a href="/">Главная</a>
              <span>/</span>
              <span aria-current="page">Доставка и оплата</span>
            </nav>

            <div className={styles.heroGrid}>
              <div>
                <h1>Доставка и оплата бетона — условия завода ПСК Прогресс</h1>
                <p className={styles.heroSub}>Раменский р-н бесплатно. Платите наличными или безналом, для юрлиц — НДС уже в цене.</p>
              </div>

              <div className={styles.formCard}>
                <h2 className={styles.formTitle}>Уточнить условия</h2>
                <LeadForm variant="short" note="Бесплатно · Без обязательств · Ответим за 15 минут" />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Тарифы доставки по зонам</h2>
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
            <p className="form-note">Не знаете, в какую зону попадает ваш адрес — позвоните, диспетчер определит за минуту.</p>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="section__head">
              <h2>Выгрузка и время ожидания</h2>
            </div>
            <p className={styles.leadText}>
              Первые 60 минут ожидания миксера на объекте — бесплатно. Для обычной выгрузки этого хватает. Если
              разгрузка идёт дольше — каждый следующий час 1 000 ₽/час. Заранее подготовьте опалубку и бригаду,
              чтобы миксер приступил к выгрузке сразу.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Автопарк — миксеры с GPS</h2>
            </div>
            <p className={styles.leadText}>
              На всех миксерах установлены GPS-трекеры — время прибытия машины можно уточнить у диспетчера. Миксер
              7 м³ — под стандартные заказы и объекты с ограниченным въездом. Миксер 14 м³ — под крупные объёмы,
              ускоряет доставку. Время работы: {company.hours}, без выходных.
            </p>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="section__head">
              <h2>Как можно оплатить</h2>
            </div>
            <ul className={styles.caseGrid3}>
              {paymentWays.map((p) => (
                <li className={styles.caseCard} key={p.title}>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </li>
              ))}
            </ul>
            <p className="form-note">Все цены указаны с НДС 20%. Счёт-фактура формируется автоматически при каждой поставке юридическим лицам.</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Документы и НДС на каждую поставку</h2>
            </div>
            <div className="table-scroll">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Документ</th>
                    <th>Кому</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((d) => (
                    <tr key={d.doc}>
                      <td className="grade-cell">
                        <b>{d.doc}</b>
                      </td>
                      <td>{d.who}</td>
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
              <h2>Доставка бетона в Жуковском — условия и тарифы</h2>
            </div>
            <p>
              Завод {company.legalName} возит бетон по Раменскому району бесплатно, и это не разовая акция, а
              действующее правило. Миксеры с GPS на 7 и 14 м³ выходят на линию ежедневно {company.hours}.
              Юридические лица могут оплатить смесь безналом с НДС — счёт выставляем сразу, а полный пакет
              документов идёт к каждой поставке.
            </p>
            <p>
              Частные клиенты платят наличными по факту доставки. На ожидание миксера бесплатно отводится до 60
              минут. Минимальный заказ — 1 м³. Чтобы уточнить свою зону доставки, звоните: {company.phone}.
            </p>
          </div>
        </section>

        <FAQ title="Частые вопросы о доставке и оплате" items={faqItems} />

        <section className="section" id="zayavka">
          <div className={`container ${styles.subForm}`}>
            <h2>Заказать с доставкой</h2>
            <LeadForm variant="full" submitLabel="Отправить заявку" />
          </div>
        </section>
      </main>

      <Footer />

      <JsonLd
        data={breadcrumbListSchema([
          { name: 'Главная', url: '/' },
          { name: 'Доставка и оплата', url: '/dostavka-i-oplata/' },
        ])}
      />
    </>
  );
}
