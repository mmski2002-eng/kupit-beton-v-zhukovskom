import { PlaceholderVisual, type PlaceholderVisualKind } from './PlaceholderVisual';
import styles from './Cases.module.css';

const cases = [
  {
    icon: 'house',
    visual: 'foundation',
    object: 'Фундамент жилого дома',
    city: 'Жуковский',
    grade: 'М300 на гравии',
    volume: '42 м³',
    text: 'Двумя рейсами закрыли заказ за один день.',
  },
  {
    icon: 'warehouse',
    visual: 'pump',
    object: 'Перекрытие промышленного склада',
    city: 'Раменское',
    grade: 'М350 на граните',
    volume: '180 м³',
    text: 'Заливали с насосом (стрела 46 м) в 3 смены.',
  },
  {
    icon: 'floor',
    visual: 'floor',
    object: 'Стяжка пола в торговом центре',
    city: 'Лыткарино',
    grade: 'Пескобетон М300',
    volume: '95 м³',
    text: 'Ночная заливка, полный пакет документов для стройконтроля.',
  },
] satisfies Array<{
  icon: 'house' | 'warehouse' | 'floor';
  visual: PlaceholderVisualKind;
  object: string;
  city: string;
  grade: string;
  volume: string;
  text: string;
}>;

function CaseIcon({ icon }: { icon: (typeof cases)[number]['icon'] }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icon === 'house' && (
        <>
          <path d="M5 15L16 6l11 9" />
          <path d="M8 13.5V26h16V13.5" />
          <path d="M13 26v-7h6v7" />
        </>
      )}
      {icon === 'warehouse' && (
        <>
          <path d="M4 13l12-6 12 6v13H4z" />
          <path d="M9 26v-8h14v8" />
          <path d="M9 22h14" />
        </>
      )}
      {icon === 'floor' && (
        <>
          <path d="M4 11h24v14H4z" />
          <path d="M4 16h24M4 21h24M12 11v14M20 11v14" />
        </>
      )}
    </svg>
  );
}

export function Cases() {
  return (
    <section className="section">
      <div className="container">
        <div className="section__head">
          <h2>Объекты, которые мы залили</h2>
        </div>

        <ul className={styles.grid}>
          {cases.map((item) => (
            <li className={styles.card} key={item.object}>
              <PlaceholderVisual kind={item.visual} className={styles.visual} />
              <span className={styles.icon}>
                <CaseIcon icon={item.icon} />
              </span>
              <h3>{item.object}</h3>
              <p className={styles.meta}>
                {item.city} · {item.grade} · {item.volume}
              </p>
              <p className={styles.text}>{item.text}</p>
            </li>
          ))}
        </ul>

        <a className={styles.link} href="#zayavka">
          Смотреть все объекты →
        </a>
      </div>
    </section>
  );
}
