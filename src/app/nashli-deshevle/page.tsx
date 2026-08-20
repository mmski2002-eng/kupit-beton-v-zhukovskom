import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbListSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import { Header } from '@/components/Header';
import { LeadForm } from '@/components/LeadForm';
import { Guarantees } from '@/components/Guarantees';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { company } from '@/data/site';
import styles from '@/styles/subpage.module.css';

export const metadata: Metadata = pageMetadata({
  title: 'Нашли бетон дешевле? Сравним и снизим цену | Жуковский',
  description:
    'Нашли бетон дешевле в Жуковском? Покажите предложение — честно сравним условия и объясним разницу. При идентичных условиях снизим цену или дадим бонус.',
  path: '/nashli-deshevle/',
});

const steps = [
  { title: 'Покажите предложение конкурента', text: 'Отправьте фото прайса, скриншот, ссылку на сайт или просто назовите цену по телефону.' },
  { title: 'Мы сравниваем условия', text: 'Сравниваем не только цену, но и марку бетона, наличие НДС, тариф доставки, стоимость ожидания и включённые документы. Разница обычно прячется здесь.' },
  { title: 'Если условия действительно идентичны', text: 'Снижаем цену либо даём дополнительный бонус — например, бесплатное ожидание сверх нормы или приоритетную отгрузку.' },
  { title: 'Если есть скрытые условия', text: 'Показываем, в чём реальная разница. Без давления — просто честно раскладываем цифры. Решение остаётся за вами.' },
];

const hiddenCosts = [
  { title: 'Цена без НДС', text: '20% придётся добавить самому. Пример: 4 000 ₽ без НДС = 4 800 ₽ с НДС. У нас цены всегда с НДС.' },
  { title: 'Доставка отдельно', text: 'В прайсе — «4 200 ₽/м³», но доставка добавит ещё 500–900 ₽/м³ сверху: 10 м³ × 700 ₽ = 7 000 ₽ только за доставку. У нас по Раменскому р-ну доставка бесплатна.' },
  { title: 'Ожидание с первой минуты', text: '30 минут выгрузки = 500 ₽ при ставке 1 000 ₽/час. У нас первый час ожидания — бесплатно.' },
  { title: 'Паспорт качества за доплату', text: 'Часть заводов относит паспорт к «дополнительным услугам». У нас паспорт качества идёт на каждую партию автоматически и входит в стоимость.' },
  { title: 'Марка — не та', text: '«М200» на разных заводах бывает на гравии, на известняке или на вторичном щебне. Отсюда разная прочность и разное назначение. Уточняйте тип заполнителя — это не мелочь.' },
  { title: 'Минимальный заказ 5–7 м³', text: 'Нужно 3 м³? Придётся брать 5 м³ или получите отказ. У нас — от 1 м³.' },
];

const faqItems = [
  { q: 'У конкурента цена 4 000 ₽/м³, у вас 4 700 ₽/м³ — почему такая разница?', a: 'Проверьте три момента: цена с НДС или без? Заложена ли доставка? Какой тип щебня? После этого разница обычно пропадает или заметно сокращается.' },
  { q: 'Снижаете ли цену, если конкурент реально дешевле при одинаковых условиях?', a: 'Разбираем каждую ситуацию отдельно. Позвоните — посмотрим вместе. При идентичных условиях найдём решение.' },
  { q: 'Как подтвердить предложение конкурента?', a: 'Хватит скриншота прайса, ссылки на сайт или устных слов менеджера конкурента. Чек или договор не требуем.' },
  { q: 'Можно ли поторговаться, если я беру крупный объём?', a: 'От 20 м³ — да, скидку можно обсудить. Позвоните или укажите объём в форме.' },
];

export default function NashliDeshevlePage() {
  return (
    <>
      <Header />

      <main>
        <section className={`section ${styles.hero}`}>
          <div className="container">
            <nav className={styles.crumbs} aria-label="Хлебные крошки">
              <a href="/">Главная</a>
              <span>/</span>
              <span aria-current="page">Нашли дешевле</span>
            </nav>

            <div className={styles.heroGrid}>
              <div>
                <h1>Нашли бетон дешевле? Снизим цену или объясним разницу</h1>
                <p className={styles.heroSub}>Пришлите аналогичное предложение — разберём его вместе. Скрытые условия в прайсах конкурентов — наш профиль.</p>
              </div>

              <div className={styles.formCard}>
                <h2 className={styles.formTitle}>Сравнить цены</h2>
                <LeadForm variant="short" note="Бесплатно · Без обязательств · Ответим за 15 минут" />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Как работает гарантия цены — 4 шага</h2>
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
              <h2>Почему дешёвый бетон оказывается дорогим</h2>
              <p className="section__lead">Шесть условий, которые конкуренты нередко умалчивают в прайсе.</p>
            </div>
            <ul className={styles.caseGrid3}>
              {hiddenCosts.map((c) => (
                <li className={styles.caseCard} key={c.title}>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Guarantees title="Наши гарантии качества" />

        <section className="section">
          <div className={`container ${styles.seoText}`}>
            <div className="section__head">
              <h2>Нашли бетон дешевле — как проверить предложение</h2>
            </div>
            <p>
              Нашли бетон дешевле в Жуковском — не спешите, сначала сравните условия. Гарантия цены бетона устроена
              просто: вы присылаете предложение, а мы разбираем его по пунктам. Разница почти всегда кроется в НДС
              (20%), доставке (до 900 ₽/м³), стоимости ожидания миксера и документах.
            </p>
            <p>
              Почему у конкурента дешевле? Часто потому, что в цену не заложены НДС и доставка, либо минимальный
              заказ — 5 м³ вместо 1 м³. Если при идентичных условиях цена конкурента и правда окажется ниже —
              позвоните нам: {company.phone}.
            </p>
          </div>
        </section>

        <FAQ title="Вопросы о сравнении цен" items={faqItems} />

        <section className="section section--alt" id="zayavka">
          <div className={`container ${styles.subForm}`}>
            <h2>Отправить предложение конкурента</h2>
            <LeadForm variant="full" submitLabel="Сравнить и заказать" />
          </div>
        </section>
      </main>

      <Footer />

      <JsonLd
        data={breadcrumbListSchema([
          { name: 'Главная', url: '/' },
          { name: 'Нашли дешевле', url: '/nashli-deshevle/' },
        ])}
      />
    </>
  );
}
