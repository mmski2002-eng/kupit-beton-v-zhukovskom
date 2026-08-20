import { company } from '@/data/site';
import styles from './MessengerWidget.module.css';

export function MessengerWidget() {
  const whatsappHref = `https://wa.me/${company.phoneHref.replace('tel:+', '')}`;

  return (
    <div className={styles.widget}>
      <a className={`${styles.btn} ${styles.wa}`} href={whatsappHref} aria-label="Написать в WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a9.9 9.9 0 0 0-8.5 15L2 22l5.2-1.4A9.9 9.9 0 1 0 12 2zm0 18.1a8.1 8.1 0 0 1-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.1 8.1 0 1 1 12 20.1zm4.5-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.6-1.2.1-.2 0-.4 0-.5s-.6-1.4-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.7.5-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.4-.3z" />
        </svg>
      </a>
      <a className={`${styles.btn} ${styles.mail}`} href={`mailto:${company.email}`} aria-label="Написать на email">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M4.5 5h15A2.5 2.5 0 0 1 22 7.5v9A2.5 2.5 0 0 1 19.5 19h-15A2.5 2.5 0 0 1 2 16.5v-9A2.5 2.5 0 0 1 4.5 5Zm.3 2 7.2 5.1L19.2 7H4.8Zm15.2 2.1-7.4 5.2a1 1 0 0 1-1.2 0L4 9.1v7.4a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V9.1Z" />
        </svg>
      </a>
    </div>
  );
}
