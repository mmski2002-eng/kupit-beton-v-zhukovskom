import { company, telegram, whatsapp } from '@/data/site';
import styles from './ContactActions.module.css';

type ContactActionsProps = {
  compact?: boolean;
};

export function ContactActions({ compact = false }: ContactActionsProps) {
  return (
    <div className={`${styles.actions} ${compact ? styles.compact : ''}`}>
      <a className={`${styles.action} ${styles.phone}`} href={company.phoneHref}>
        Позвонить
      </a>
      <a className={`${styles.action} ${styles.whatsapp}`} href={whatsapp.href}>
        WhatsApp
      </a>
      <a className={`${styles.action} ${styles.telegram}`} href={telegram.appHref}>
        Telegram
      </a>
    </div>
  );
}
