import styles from './Services.module.css';

const services = [
  {
    icon: 'pump',
    title: 'Аренда бетононасоса',
    text: 'Стрелы 18–57 м. Подаём смесь на высоту и в труднодоступные зоны — верхние перекрытия, подвалы, тесные участки. Насос работает в паре с нашими же миксерами: один звонок решает всю задачу целиком.',
    link: 'Подробнее об аренде насоса →',
  },
  {
    icon: 'ruler',
    title: 'Выезд технического специалиста',
    text: 'Наш специалист приедет на площадку, обмерит объём и поможет выбрать марку под конкретную задачу. Услуга бесплатная. На руках у вас — точный расчёт и акт, без лишних кубов и переплат.',
    link: 'Заказать выезд специалиста →',
  },
  {
    icon: 'lab',
    title: 'Аккредитованная лаборатория',
    text: 'Испытываем бетонные смеси и стройматериалы по ГОСТ. Выдаём протоколы государственного образца — их принимают суды и контролирующие органы. Подойдёт для объектов с входным контролем качества.',
    link: 'Услуги лаборатории →',
  },
] as const;

function ServiceIcon({ icon }: { icon: (typeof services)[number]['icon'] }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icon === 'pump' && (
        <>
          <path d="M4 26h9l14-12" />
          <path d="M4 26v-5h9v5" />
          <path d="M25 12l4 3-3 4-4-3z" />
          <path d="M13 21L6 12" />
        </>
      )}
      {icon === 'ruler' && (
        <>
          <path d="M5 20.5L20.5 5 27 11.5 11.5 27z" />
          <path d="M10 15.5l2.5 2.5M14 11.5l2.5 2.5M18 7.5l2.5 2.5" />
        </>
      )}
      {icon === 'lab' && (
        <>
          <rect x="6" y="7" width="9" height="18" rx="1.5" />
          <rect x="19" y="13" width="7" height="12" rx="1.5" />
          <path d="M6 18h9M19 20h7" />
          <path d="M8.5 4h4M21 10h3" />
        </>
      )}
    </svg>
  );
}

export function Services() {
  return (
    <section className="section section--alt" id="uslugi">
      <div className="container">
        <div className="section__head">
          <h2>Дополнительные услуги завода</h2>
        </div>

        <ul className={styles.grid}>
          {services.map((service) => (
            <li className={styles.card} key={service.title}>
              <span className={styles.icon}>
                <ServiceIcon icon={service.icon} />
              </span>
              <h3>{service.title}</h3>
              <p className={styles.text}>{service.text}</p>
              <a className={styles.link} href="#zayavka">
                {service.link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
