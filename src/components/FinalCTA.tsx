import { LeadForm } from './LeadForm';
import { company } from '@/data/site';
import styles from './FinalCTA.module.css';

type FinalCTAProps = {
  title?: string;
  grade?: string;
};

export function FinalCTA({ title = 'Рассчитайте стоимость и закажите бетон', grade = 'М200' }: FinalCTAProps) {
  return (
    <section className="section section--dark" id="zayavka">
      <div className={`container ${styles.inner}`}>
        <div>
          <h2>{title}</h2>
          <p className={styles.lead}>
            Заполните форму — диспетчер перезвонит, подтвердит время подачи миксера и назовёт финальную сумму.
          </p>

          <ul className={styles.contacts}>
            <li>
              <span className={styles.label}>Телефон</span>
              <a className={styles.value} href={company.phoneHref}>
                {company.phone}
              </a>
            </li>
            <li>
              <span className={styles.label}>Email</span>
              <a className={styles.value} href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </li>
            <li>
              <span className={styles.label}>Режим работы</span>
              <span className={styles.value}>{company.hours}</span>
            </li>
            <li>
              <span className={styles.label}>Зона доставки</span>
              <span className={styles.value}>Жуковский и Раменский округ</span>
            </li>
          </ul>
        </div>

        <div className={styles.form}>
          <LeadForm variant="full" grade={grade} submitLabel="Оформить заявку" note="Бесплатно · Без обязательств · Ответим за 15 минут" />
        </div>
      </div>
    </section>
  );
}
