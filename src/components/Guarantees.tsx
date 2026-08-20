import styles from './Guarantees.module.css';

const items = [
  {
    title: 'Гарантия цены',
    text: 'Предложим на 100 ₽/м³ ниже любого конкурента в регионе. Покажите их расчёт — снизим цену без торга.',
  },
  {
    title: 'Гарантия объёма',
    text: 'Технический специалист просчитывает кубатуру и заверяет её актом. Вы оплачиваете ровно тот объём, что получили.',
  },
  {
    title: 'Паспорт качества ГОСТ',
    text: 'К каждой партии прикладываем паспорт качества с результатами испытаний. Аккредитованная лаборатория работает прямо на территории завода.',
  },
  {
    title: 'Доставка в день заказа',
    text: 'Оставили заявку до 16:00 — миксер выезжает сегодня. Движение машины видно по GPS в реальном времени.',
  },
];

export function Guarantees({ title = 'Четыре гарантии на каждый заказ' }: { title?: string }) {
  return (
    <section className="section section--dark">
      <div className="container">
        <div className="section__head">
          <h2>{title}</h2>
        </div>

        <ul className={styles.grid}>
          {items.map((item, index) => (
            <li className={styles.item} key={item.title}>
              <span className={styles.num}>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
