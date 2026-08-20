import { LeadForm } from './LeadForm';
import styles from './Hero.module.css';

type HeroProps = {
  badge?: string;
  title: string;
  subtitle: string;
  facts?: { value: string; label: string }[];
  video?: boolean;
};

const defaultFacts = [
  { value: '23 года', label: 'работаем с 2003 года' },
  { value: 'от 4 150 ₽/м³', label: 'цена без посредников, с НДС' },
  { value: 'бесплатно', label: 'доставка по Раменскому району' },
];

export function Hero({ badge = 'Бетонный завод · Жуковский', title, subtitle, facts = defaultFacts, video = true }: HeroProps) {
  return (
    <section className={`${styles.hero} ${!video ? styles.plain : ''}`}>
      {video && (
        <div className={styles.media} aria-hidden="true">
          <video poster="/video/video_hero_bg_01_poster.webp" autoPlay muted loop playsInline preload="none">
            <source src="/video/video_hero_bg_01.mp4" type="video/mp4" />
            <source src="/video/video_hero_bg_01.webm" type="video/webm" />
          </video>
          <span className={styles.scrim} />
        </div>
      )}

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className={`pill-badge ${styles.badge}`}>{badge}</span>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.formCard}>
          <h2 className={styles.formTitle}>Рассчитать стоимость за 1 минуту</h2>
          <LeadForm variant="short" note="Ответим в течение 15 минут. Без обязательств." />
        </div>
      </div>

      <div className="container">
        <ul className={styles.facts}>
          {facts.map((fact) => (
            <li className={styles.fact} key={fact.label}>
              <span className={styles.factNumber}>{fact.value}</span>
              <span className={styles.factLabel}>{fact.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
