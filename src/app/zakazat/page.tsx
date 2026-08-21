import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbListSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import { Header } from '@/components/Header';
import { ContactActions } from '@/components/ContactActions';
import { LeadForm } from '@/components/LeadForm';
import { Guarantees } from '@/components/Guarantees';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { company } from '@/data/site';
import styles from '@/styles/subpage.module.css';

export const metadata: Metadata = pageMetadata({
  title: 'Заказать бетон в Жуковском — по телефону и онлайн',
  description:
    'Оформите заказ бетона в Жуковском по телефону +7 (499) 111-72-62, в WhatsApp или через форму. Подтверждаем за 15 минут. От 1 м³, ежедневно 8:00–22:00.',
  path: '/zakazat/',
});

const ways = [
  { title: 'Позвонить', text: `Телефон: ${company.phone}, режим работы: ${company.hours}. Диспетчер подберёт марку бетона, уточнит адрес, посчитает стоимость с доставкой и подтвердит время прибытия миксера. Разговор занимает 3–5 минут.` },
  { title: 'Написать в WhatsApp', text: 'Напишите в мессенджер — ответим за 5–15 минут. Удобно, когда звонить некогда. Укажите марку бетона (или задачу), объём, адрес и желаемую дату.' },
  { title: 'Форма на сайте', text: 'Заполните расширенную форму ниже: марка, объём, адрес доставки, дата, тип заказчика, комментарий. Если не знаете марку или объём — подскажем при звонке.' },
];

const needed = [
  'Марка бетона — если не знаете, подберём по вашей задаче',
  'Объём в м³ — если не знаете, рассчитаем по размерам',
  'Адрес доставки',
  'Желаемые дата и время',
  'Контактный телефон',
];

const steps = [
  { title: 'Получили заявку', text: 'По форме, телефону или WhatsApp.' },
  { title: 'Перезвонили и подтвердили', text: 'В течение 15 минут. Уточняем детали, согласовываем время.' },
  { title: 'Согласовали время доставки', text: 'Под ваш график работ.' },
  { title: 'Замес на заводе', text: 'По точной рецептуре с контролем аккредитованной лаборатории.' },
  { title: 'Доставка', text: 'GPS-миксер приезжает в согласованное время. Документы с каждой машиной.' },
];

const faqItems = [
  { q: 'Когда вы подтвердите заказ?', a: 'В течение 15 минут после получения заявки. Перезвоним и уточним детали.' },
  { q: 'Можно ли изменить заказ после подтверждения?', a: 'Да. За 2 и более часов до доставки — без вопросов и штрафов.' },
  { q: 'Нужна ли предоплата?', a: 'Для физических лиц — оплата при доставке. Для юридических лиц — по условиям договора.' },
  { q: 'Какой минимальный заказ?', a: '1 м³. Привезём даже небольшой объём для бытовых и дачных задач.' },
];

export default function ZakazatPage() {
  return (
    <>
      <Header />

      <main>
        <section className={`section ${styles.hero}`}>
          <div className="container">
            <nav className={styles.crumbs} aria-label="Хлебные крошки">
              <a href="/">Главная</a>
              <span>/</span>
              <span aria-current="page">Заказать бетон</span>
            </nav>

            <div className={styles.heroGrid}>
              <div>
                <h1>Заказать бетон в Жуковском — просто и без ожидания</h1>
                <p className={styles.heroSub}>Три способа оформить заказ. Подтверждаем за 15 минут.</p>
                <ul className={styles.quickBadges}>
                  <li>Звонок</li>
                  <li>WhatsApp</li>
                  <li>Форма на сайте</li>
                </ul>
                <ContactActions />
              </div>

              <div className={styles.formCard}>
                <h2 className={styles.formTitle}>Заказать бетон</h2>
                <LeadForm variant="short" note="Бесплатно · Без обязательств · Ответим за 15 минут" />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Три способа оформить заказ</h2>
            </div>
            <ul className={styles.caseGrid3}>
              {ways.map((w) => (
                <li className={styles.caseCard} key={w.title}>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="section__head">
              <h2>Что нужно для заказа</h2>
            </div>
            <ul className={styles.plainList}>
              {needed.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
            <p className="form-note">
              Остальное уточним при звонке. Если знаете только задачу («нужен бетон для фундамента дома 8×8») — этого
              достаточно.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Что происходит после заявки</h2>
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

        <Guarantees title="Гарантии качества" />

        <section className="section">
          <div className={`container ${styles.seoText}`}>
            <div className="section__head">
              <h2>Как заказать бетон в Жуковском</h2>
            </div>
            <p>
              Заказать бетон в Жуковском можно тремя способами: по телефону {company.phone}, в WhatsApp или через
              форму на сайте. Завод {company.legalName} принимает заявки ежедневно {company.hours}. Минимальный
              заказ — 1 м³, подтверждение — за 15 минут.
            </p>
            <p>
              Не знаете марку? Диспетчер подберёт её за 5 минут по вашей задаче. Не знаете объём? Посчитаем по
              размерам конструкции — или воспользуйтесь <a href="/kalkulyator/">калькулятором</a>. Купить бетон в
              Жуковском напрямую с завода — это цена без наценки, паспорт качества и документы с каждой поставкой.
            </p>
          </div>
        </section>

        <FAQ title="Вопросы о заказе" items={faqItems} />

        <section className="section section--alt" id="zayavka">
          <div className={`container ${styles.subForm}`}>
            <h2>Оформить заказ</h2>
            <LeadForm variant="full" submitLabel="Отправить заявку" />
          </div>
        </section>
      </main>

      <Footer />

      <JsonLd
        data={breadcrumbListSchema([
          { name: 'Главная', url: '/' },
          { name: 'Заказать бетон', url: '/zakazat/' },
        ])}
      />
    </>
  );
}
