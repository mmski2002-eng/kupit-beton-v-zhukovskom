import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbListSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadForm } from '@/components/LeadForm';
import { company } from '@/data/site';
import styles from './page.module.css';

export const metadata: Metadata = pageMetadata({
  title: 'Контакты завода бетона в Жуковском — телефон, email',
  description: `ООО «ПСК «Прогресс», Жуковский. Телефон ${company.phone}, режим ${company.hours}. Заявки на бетон и консультации, реквизиты компании.`,
  path: '/kontakty/',
});

export default function KontaktyPage() {
  return (
    <>
      <Header />

      <main>
        <section className={`section ${styles.hero}`}>
          <div className={`container ${styles.heroInner}`}>
            <h1>Контакты ООО «ПСК «Прогресс» в Жуковском</h1>
            <p className={styles.heroLead}>Звоните или пишите — перезвоним в течение 15 минут. Работаем {company.hours}.</p>
          </div>
        </section>

        <section className="section">
          <div className={`container ${styles.grid}`}>
            <div className={styles.card}>
              <h2>Контактные данные</h2>
              <dl className={styles.list}>
                <div>
                  <dt>Телефон для заказа</dt>
                  <dd>
                    <a href={company.phoneHref}>{company.phone}</a>
                  </dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                  </dd>
                </div>
                <div>
                  <dt>Режим работы</dt>
                  <dd>{company.hours}, без выходных и праздников</dd>
                </div>
                <div>
                  <dt>Зона доставки</dt>
                  <dd>Жуковский и Раменский округ — бесплатно, дальше по тарифу от расстояния</dd>
                </div>
              </dl>
            </div>

            <div className={styles.card}>
              <h2>Реквизиты организации</h2>
              <dl className={styles.list}>
                <div>
                  <dt>Полное наименование</dt>
                  <dd>{company.legalName}</dd>
                </div>
                <div>
                  <dt>ИНН</dt>
                  <dd>{company.inn}</dd>
                </div>
                <div>
                  <dt>ОГРН</dt>
                  <dd>{company.ogrn}</dd>
                </div>
                <div>
                  <dt>Юридический адрес</dt>
                  <dd>{company.addressFull}</dd>
                </div>
                <div>
                  <dt>Генеральный директор</dt>
                  <dd>{company.director}</dd>
                </div>
                <div>
                  <dt>Email для счетов и документов</dt>
                  <dd>
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                  </dd>
                </div>
              </dl>
              <p className={styles.note}>Банковские реквизиты (р/с, БИК, банк) и счёт на оплату — вышлем по запросу на {company.email}.</p>
            </div>
          </div>
        </section>

        <section className="section section--alt" id="zayavka">
          <div className={`container ${styles.formSection}`}>
            <h2>Написать нам — форма заявки</h2>
            <p className={styles.formLead}>Оставьте данные — перезвоним в течение 15 минут и уточним детали заказа.</p>
            <LeadForm variant="full" submitLabel="Отправить заявку" />
          </div>
        </section>
      </main>

      <Footer />

      <JsonLd
        data={breadcrumbListSchema([
          { name: 'Главная', url: '/' },
          { name: 'Контакты', url: '/kontakty/' },
        ])}
      />
    </>
  );
}
