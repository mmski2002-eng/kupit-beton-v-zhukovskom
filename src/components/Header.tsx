import { company } from '@/data/site';
import { HeaderMobileNav } from './HeaderMobileNav';
import { HeaderCartButton } from './HeaderCartButton';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.hdr} id="top">
      <div className={`container ${styles.inner}`}>
        <a className={styles.logo} href="/">
          <span className={styles.logoMark} aria-hidden="true">
            ПСК
          </span>
          <span className={styles.logoText}>
            <span className={styles.logoName}>Прогресс</span>
            <span className={styles.logoSub}>бетон с доставкой · {company.city}</span>
          </span>
        </a>

        <HeaderMobileNav />

        <div className={styles.contacts}>
          <div className={styles.phoneWrap}>
            <a className={styles.phone} href={company.phoneHref}>
              {company.phone}
            </a>
            <span className="online-badge">Работаем до {company.closes}</span>
          </div>
          <HeaderCartButton />
          <a className={`btn ${styles.cta}`} href={company.phoneHref}>
            Позвонить
          </a>
        </div>
      </div>
    </header>
  );
}
