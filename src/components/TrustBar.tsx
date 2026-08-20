import styles from './TrustBar.module.css';

const items = [
  { icon: 'factory', text: 'Прямые поставки с завода, без посредников' },
  { icon: 'gear', text: 'Немецкая БСУ Stetter — 110 м³/час' },
  { icon: 'flask', text: 'Паспорт ГОСТ из аккредитованной лаборатории' },
  { icon: 'pin', text: 'GPS-контроль на каждом миксере' },
  { icon: 'doc', text: 'Объём подтверждаем актом' },
] as const;

function TrustIcon({ icon }: { icon: (typeof items)[number]['icon'] }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icon === 'factory' && (
        <>
          <path d="M4 27V13l7 4.5V13l7 4.5V13l7 4.5V27z" />
          <path d="M4 27h24" />
          <path d="M11 5h4l-1 8h-2z" />
          <path d="M13 22h3" />
        </>
      )}
      {icon === 'gear' && (
        <>
          <circle cx="16" cy="16" r="4" />
          <path d="M16 4v3M16 25v3M4 16h3M25 16h3M7.5 7.5l2.1 2.1M22.4 22.4l2.1 2.1M24.5 7.5l-2.1 2.1M9.6 22.4l-2.1 2.1" />
        </>
      )}
      {icon === 'flask' && (
        <>
          <path d="M13 4h6" />
          <path d="M14 4v8L8 24a2.5 2.5 0 0 0 2.2 3.6h11.6A2.5 2.5 0 0 0 24 24l-6-12V4" />
          <path d="M10.6 19h10.8" />
        </>
      )}
      {icon === 'pin' && (
        <>
          <path d="M16 28s9-8.1 9-14.2A9 9 0 0 0 7 13.8C7 19.9 16 28 16 28z" />
          <circle cx="16" cy="13.5" r="3.2" />
        </>
      )}
      {icon === 'doc' && (
        <>
          <path d="M8 4h11l5 5v19H8z" />
          <path d="M19 4v5h5" />
          <path d="M12 17.5l2.6 2.6L21 13.8" />
        </>
      )}
    </svg>
  );
}

export function TrustBar() {
  return (
    <section className={`section section--alt ${styles.trust}`}>
      <div className="container">
        <ul className={styles.grid}>
          {items.map((item) => (
            <li className={styles.item} key={item.icon}>
              <span className={styles.icon}>
                <TrustIcon icon={item.icon} />
              </span>
              <p className={styles.text}>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
