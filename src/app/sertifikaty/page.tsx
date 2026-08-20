import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbListSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadForm } from '@/components/LeadForm';
import { PlaceholderVisual } from '@/components/PlaceholderVisual';
import { company } from '@/data/site';
import styles from './page.module.css';

export const metadata: Metadata = pageMetadata({
  title: 'Документы и сертификаты на бетон — ПСК Прогресс Жуковский',
  description: 'Паспорта качества, протоколы испытаний и декларации соответствия на бетон по ГОСТ 26633-2015. Аккредитованная лаборатория завода ПСК Прогресс в Жуковском.',
  path: '/sertifikaty/',
});

const documents = [
  {
    title: 'Паспорт качества бетонной смеси',
    text: 'Марка и класс бетона, прочность, водонепроницаемость (W) и морозостойкость (F), дата замеса, подвижность смеси (П), объём партии, ссылка на ГОСТ 26633-2015. Подписывает технолог лаборатории. Выдаётся на каждую партию автоматически.',
  },
  { title: 'Товарно-транспортная накладная (ТТН)', text: 'Фиксирует факт отгрузки, объём, марку бетона, объект и стороны сделки. Нужна для бухгалтерского учёта и подтверждения получения материала.' },
  { title: 'Акт проверки объёма', text: 'Фактический объём бетонной смеси при разгрузке на объекте, подписывается вместе с представителем заказчика. Снимает споры об объёме поставки.' },
  { title: 'Счёт-фактура с НДС', text: `Оформляем юридическим лицам с полными реквизитами ${company.legalName} (ИНН ${company.inn}, ОГРН ${company.ogrn}). Входящий НДС принимается к вычету в установленном порядке.` },
];

const gosts = [
  { code: 'ГОСТ 26633-2015', desc: 'Бетоны тяжёлые и мелкозернистые. Технические условия' },
  { code: 'ГОСТ 28013-98', desc: 'Растворы строительные. Общие технические условия' },
  { code: 'ГОСТ 7473-2010', desc: 'Смеси бетонные. Технические условия' },
  { code: 'ГОСТ 10180-2012', desc: 'Бетоны. Методы определения прочности по контрольным образцам' },
  { code: 'ГОСТ 12730.5-2018', desc: 'Бетоны. Метод определения водонепроницаемости' },
  { code: 'ГОСТ 10060-2012', desc: 'Бетоны. Методы определения морозостойкости' },
  { code: 'ГОСТ 8267-93', desc: 'Щебень и гравий из плотных горных пород для строительных работ' },
];

export default function SertifikatyPage() {
  return (
    <>
      <Header />

      <main>
        <section className="section">
          <div className={`container ${styles.heroInner}`}>
            <h1>Документы и сертификаты на бетон</h1>
            <p className={styles.heroLead}>
              Паспорта качества, протоколы испытаний и декларации соответствия по ГОСТ 26633-2015. К каждой
              поставке — полный пакет документов.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Что вы получаете с каждой поставкой</h2>
            </div>
            <div className={styles.docs}>
              {documents.map((doc, i) => (
                <div className={styles.doc} key={doc.title}>
                  <span className={styles.docNum}>{i + 1}</span>
                  <h3>{doc.title}</h3>
                  <p>{doc.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="section__head">
              <h2>По каким ГОСТ мы работаем</h2>
            </div>
            <div className={styles.table}>
              {gosts.map((g) => (
                <div className={styles.tableRow} key={g.code}>
                  <span className={styles.tableCode}>{g.code}</span>
                  <span className={styles.tableDesc}>{g.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className={`container ${styles.narrow}`}>
            <div className="section__head">
              <h2>Сертификаты и аккредитация</h2>
            </div>
            <PlaceholderVisual kind="document" className={styles.visual} />
            <p>
              Свидетельство о государственной регистрации {company.legalName} (ИНН {company.inn}, ОГРН{' '}
              {company.ogrn}), аттестат аккредитации испытательной лаборатории, декларации соответствия на бетонные
              смеси по ГОСТ 26633-2015, сертификаты на цемент и щебень — предоставляем по запросу вместе с заявкой
              или на email {company.email}.
            </p>
          </div>
        </section>

        <section className="section section--alt">
          <div className={`container ${styles.narrow}`}>
            <div className="section__head">
              <h2>Для юридических лиц и стройнадзора</h2>
            </div>
            <p>
              Документы выдаём в электронном и бумажном виде. По запросу — заверенные копии паспортов качества и
              протоколов испытаний для технического надзора.
            </p>
            <p>
              Для тендеров и госзакупок собираем полный пакет: паспорта на продукцию, декларации соответствия, ТТН,
              копии аккредитационных документов. Работаем с заказчиками по 44-ФЗ и 223-ФЗ. Подключён электронный
              документооборот (ЭДО) — договор можно заключить дистанционно, по ЭЦП.
            </p>
            <p>
              По вопросам документального сопровождения пишите на <a href={`mailto:${company.email}`}>{company.email}</a>{' '}
              или звоните: <a href={company.phoneHref}>{company.phone}</a>.
            </p>
          </div>
        </section>

        <section className="section" id="zayavka">
          <div className={`container ${styles.narrow}`}>
            <h2>Оставить заявку</h2>
            <LeadForm variant="full" submitLabel="Отправить заявку" />
          </div>
        </section>
      </main>

      <Footer />

      <JsonLd
        data={breadcrumbListSchema([
          { name: 'Главная', url: '/' },
          { name: 'Документы и сертификаты', url: '/sertifikaty/' },
        ])}
      />
    </>
  );
}
