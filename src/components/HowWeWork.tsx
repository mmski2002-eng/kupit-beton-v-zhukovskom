import styles from './HowWeWork.module.css';

const steps = [
  {
    title: 'Заявка',
    text: 'Вы звоните или заполняете форму онлайн. За 5 минут согласуем марку, объём, адрес и удобное время доставки.',
  },
  {
    title: 'Подтверждение',
    text: 'Диспетчер перезвонит в течение 15 минут, назовёт точное время подачи миксера и финальную сумму.',
  },
  {
    title: 'Доставка',
    text: 'Миксер выходит на маршрут с GPS-трекингом. Вы видите, где сейчас машина, — без формулировок «уже едем, скоро будем».',
  },
  {
    title: 'Разгрузка и документы',
    text: 'На объекте водитель отдаёт ТТН и паспорт качества ГОСТ. Расчёт — наличными или по безналу по факту доставки.',
  },
];

export function HowWeWork() {
  return (
    <section className="section">
      <div className="container">
        <div className="section__head">
          <h2>4 шага от заявки до разгрузки</h2>
        </div>

        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <li className={styles.step} key={step.title}>
              <span className={styles.num}>{index + 1}</span>
              <h3>{step.title}</h3>
              <p className={styles.text}>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
