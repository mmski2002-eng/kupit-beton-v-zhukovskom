import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbListSchema } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';
import { Header } from '@/components/Header';
import { LeadForm } from '@/components/LeadForm';
import { Calculator } from '@/components/Calculator';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { company } from '@/data/site';
import styles from '@/styles/subpage.module.css';

export const metadata: Metadata = pageMetadata({
  title: 'Онлайн-калькулятор бетона — объём и цена | Жуковский',
  description:
    'Посчитайте объём и цену бетона онлайн за 30 секунд: введите размеры — калькулятор выдаст м³ и стоимость с доставкой. Завод ПСК Прогресс, Жуковский.',
  path: '/kalkulyator/',
});

const formulas = [
  {
    title: 'Ленточный фундамент',
    formula: 'Периметр (м) × ширина ленты (м) × высота/глубина (м) = объём (м³)',
    example: 'Дом 6×6 м, лента 0,4×1,2 м: периметр (6+6)×2 = 24 м, 24 × 0,4 × 1,2 = 11,5 м³. С запасом 7–10% — ~12,4 м³.',
  },
  {
    title: 'Плитный фундамент',
    formula: 'Длина (м) × ширина (м) × толщина плиты (м) = объём (м³)',
    example: 'Плита 8×8 м, толщина 0,3 м: 8 × 8 × 0,3 = 19,2 м³. С запасом 7–10% — ~20,7 м³.',
  },
  { title: 'Стяжка пола', formula: 'Площадь (м²) × толщина (м) = объём (м³)', example: 'Стяжка 50 м², толщина 5 см (0,05 м): 50 × 0,05 = 2,5 м³.' },
  {
    title: 'Колонна',
    formula: 'Прямоугольная: сечение (м²) × высота (м). Круглая: π × r² × высота',
    example: '0,3×0,3 м × 3 м = 0,27 м³. Круглая r=0,2 м, высота 3 м: 3,14 × 0,04 × 3 = 0,38 м³.',
  },
];

const typicalVolumes = [
  { task: 'Фундамент дом 6×6', params: 'Лента 0,4×1,0 м', volume: '~9,6 м³' },
  { task: 'Фундамент дом 8×8', params: 'Лента 0,4×1,2 м', volume: '~14,7 м³' },
  { task: 'Плита под гараж 4×6', params: 'Толщина 0,2 м', volume: '~4,8 м³' },
  { task: 'Стяжка 50 м²', params: 'Толщина 5 см', volume: '2,5 м³' },
  { task: 'Стяжка 100 м²', params: 'Толщина 5 см', volume: '5,0 м³' },
  { task: 'Перекрытие 6×6', params: 'Толщина 0,18 м', volume: '~6,5 м³' },
  { task: 'Отмостка 30 м × 0,8 м', params: 'Толщина 0,1 м', volume: '~2,4 м³' },
];

const faqItems = [
  {
    q: 'Нужно ли добавлять запас к расчётному объёму?',
    a: 'Да, 7–10%. Смесь теряется при укладке, вибрировании и на неровностях опалубки. Лучше взять с небольшим запасом, чем прерывать работы из-за нехватки.',
  },
  { q: 'Как правильно измерить опалубку?', a: 'Замеряйте пустую опалубку до армирования, по внутренним размерам. Арматура забирает 3–5% объёма — они покрываются запасом.' },
  {
    q: 'Что делать, если не знаю глубину промерзания?',
    a: 'В Жуковском нормативная глубина промерзания — 1,4 м. Подошву фундамента закладывают ниже этой отметки. Точное значение уточните у проектировщика.',
  },
  { q: 'Рассчитаете за меня?', a: `Да, с удовольствием. Наберите ${company.phone} — за 5 минут посчитаем объём и подберём марку.` },
];

export default function KalkulyatorPage() {
  return (
    <>
      <Header />

      <main>
        <section className={`section ${styles.hero}`}>
          <div className="container">
            <nav className={styles.crumbs} aria-label="Хлебные крошки">
              <a href="/">Главная</a>
              <span>/</span>
              <span aria-current="page">Калькулятор</span>
            </nav>

            <div className={styles.heroGrid}>
              <div>
                <h1>Калькулятор бетона — узнайте объём и стоимость онлайн</h1>
                <p className={styles.heroSub}>Введите размеры конструкции — увидите объём и цену с доставкой. Всего 30 секунд.</p>
              </div>

              <div className={styles.formCard}>
                <h2 className={styles.formTitle}>Получить расчёт</h2>
                <LeadForm variant="short" note="Бесплатно · Без обязательств · Ответим за 15 минут" />
              </div>
            </div>
          </div>
        </section>

        <Calculator title="Калькулятор стоимости бетона" />

        <section className="section">
          <div className="container">
            <div className="section__head">
              <h2>Как рассчитать объём бетона вручную</h2>
              <p className="section__lead">Если хотите проверить расчёт самостоятельно — вот основные формулы.</p>
            </div>
            <div className={styles.formulasGrid}>
              {formulas.map((f) => (
                <div className={styles.formulaCard} key={f.title}>
                  <h3>{f.title}</h3>
                  <p className={styles.formulaFormula}>{f.formula}</p>
                  <p className={styles.formulaExample}>{f.example}</p>
                </div>
              ))}
            </div>
            <p className="form-note">
              Запас на потери: всегда прибавляйте 7–10% к расчётному объёму. Часть смеси уходит при укладке,
              вибрировании и на неровности опалубки.
            </p>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <div className="section__head">
              <h2>Готовые объёмы для типовых задач</h2>
            </div>
            <div className="table-scroll">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Задача</th>
                    <th>Размер / параметры</th>
                    <th>Объём бетона</th>
                  </tr>
                </thead>
                <tbody>
                  {typicalVolumes.map((row) => (
                    <tr key={row.task}>
                      <td className="grade-cell">
                        <b>{row.task}</b>
                      </td>
                      <td>{row.params}</td>
                      <td className="price">{row.volume}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="form-note">Значения даны без запаса — при заказе добавьте 7–10%.</p>
          </div>
        </section>

        <section className="section">
          <div className={`container ${styles.seoText}`}>
            <div className="section__head">
              <h2>Калькулятор бетона онлайн — расчёт для Жуковского и района</h2>
            </div>
            <p>
              Точный онлайн-расчёт бетона снимает сразу два риска — заказать слишком мало и остановить стройку либо
              переплатить за лишние кубометры. Калькулятор завода ПСК Прогресс определяет объём по рабочим формулам
              для ленточных и плитных фундаментов, стяжек, перекрытий и колонн.
            </p>
            <p>
              Сразу после расчёта вы видите стоимость с учётом марки, типа щебня и зоны доставки. Сколько бетона
              уйдёт на фундамент дома 8×8 м? При ленте 0,4×1,2 м — примерно 14,7 м³ и ещё 7% запаса. Позвоните — за
              5 минут посчитаем нужный объём и подберём марку.
            </p>
          </div>
        </section>

        <FAQ title="Частые вопросы о расчёте бетона" items={faqItems} />

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
          { name: 'Калькулятор', url: '/kalkulyator/' },
        ])}
      />
    </>
  );
}
