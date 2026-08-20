import styles from './B2BBlock.module.css';

type B2BProps = {
  title?: string;
  items?: { title: string; text: string }[];
  cta?: string;
  button?: string;
};

const defaultItems = [
  { title: 'Безналичный расчёт', text: 'работаем по договору, к каждой поставке счёт-фактура и УПД' },
  { title: 'Рассрочка платежа', text: 'для постоянных клиентов, условия обсуждаем индивидуально' },
  { title: 'Закрывающие документы', text: 'ТТН, паспорт качества ГОСТ, счёт-фактура, акт выполненных работ' },
  { title: 'Объёмные поставки', text: 'от 1 до 1000+ м³/день по стабильному графику отгрузки' },
  { title: 'Тендерная документация', text: 'паспорта, аттестаты аккредитации лаборатории, реквизиты' },
];

export function B2BBlock({
  title = 'Для строительных компаний и подрядчиков',
  items = defaultItems,
  cta = 'Оставьте заявку — менеджер перезвонит в течение 15 минут и обсудит условия сотрудничества.',
  button = 'Обсудить условия для юрлиц',
}: B2BProps) {
  return (
    <section className="section">
      <div className={`container ${styles.b2b}`}>
        <div>
          <div className="section__head">
            <h2>{title}</h2>
          </div>
          <ul className={styles.list}>
            {items.map((item) => (
              <li className={styles.item} key={item.title}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 12.5l5 5L20 6.5" />
                </svg>
                <p>
                  <b>{item.title}</b> — {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>{cta}</p>
          <a className="btn btn--wide" href="#zayavka">
            {button}
          </a>
        </div>
      </div>
    </section>
  );
}
