import { company } from '@/data/site';
import styles from './Footer.module.css';

const columns = [
  {
    title: 'Продукция',
    links: [
      { label: 'Товарный бетон', href: '/tovarnyy-beton/' },
      { label: 'Бетон М200', href: '/tovarnyy-beton/m200/' },
      { label: 'Бетон по назначению', href: '/vidy-betona/' },
      { label: 'Цены на бетон', href: '/ceny/' },
      { label: 'Калькулятор бетона', href: '/kalkulyator/' },
      { label: 'Заказать бетон', href: '/zakazat/' },
    ],
  },
  {
    title: 'Услуги и доставка',
    links: [
      { label: 'Заливка под ключ', href: '/zalivka/' },
      { label: 'Доставка бетона', href: '/dostavka/' },
      { label: 'Доставка и оплата', href: '/dostavka-i-oplata/' },
      { label: 'Аренда бетононасоса', href: '/arenda-betononasosa/' },
      { label: 'Аренда миксера', href: '/arenda-miksera/' },
      { label: 'Лаборатория', href: '/laboratoriya/' },
    ],
  },
  {
    title: 'Компания',
    links: [
      { label: 'О заводе', href: '/#o-zavode' },
      { label: 'Объекты', href: '/#kejsy' },
      { label: 'Вопросы и ответы', href: '/#faq' },
      { label: 'Документы и сертификаты', href: '/sertifikaty/' },
      { label: 'Контакты', href: '/kontakty/' },
    ],
  },
  {
    title: 'Доставка по городам',
    links: [
      { label: 'Жуковский', href: '/zhukovskiy/' },
      { label: 'Раменский округ', href: '/ramenskiy-okrug/' },
      { label: 'Раменское', href: '/ramenskoe/' },
      { label: 'Быково', href: '/bykovo/' },
      { label: 'Кратово', href: '/kratovo/' },
      { label: 'Малаховка', href: '/malakhovka/' },
      { label: 'Удельная', href: '/udelnaya/' },
      { label: 'Ильинский', href: '/ilinskiy/' },
      { label: 'Лыткарино', href: '/lytkarino/' },
      { label: 'Бесплатная доставка', href: '/besplatnaya-dostavka/' },
    ],
  },
];

export function Footer() {
  return (
    <footer className={styles.footer} id="kontakty">
      <div className={`container ${styles.top}`}>
        <div>
          <div className={styles.logo}>
            <span className={styles.logoMark} aria-hidden="true">
              ПСК
            </span>
            <span className={styles.logoName}>Прогресс</span>
          </div>
          <p className={styles.desc}>
            Поставляем товарный бетон в Жуковский с {company.since} года. Марки М100–М600 на гравии и граните,
            собственный автопарк GPS-миксеров и аккредитованная лаборатория.
          </p>
          <a className={styles.phone} href={company.phoneHref}>
            {company.phone}
          </a>
          <span className={`online-badge ${styles.online}`}>Работаем {company.hours}</span>
          <a className={styles.mail} href={`mailto:${company.email}`}>
            {company.email}
          </a>
        </div>

        {columns.map((column) => (
          <nav className={styles.col} aria-label={column.title} key={column.title}>
            <h3 className={styles.colTitle}>{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {company.since}–2026 {company.legalName} · ИНН {company.inn} · ОГРН {company.ogrn} · Юр. адрес:{' '}
          {company.addressFull}
        </p>
        <p className={styles.legal}>
          <a href="/politika-konfidencialnosti/">Политика конфиденциальности</a>
          <a href="/publichnaya-oferta/">Публичная оферта</a>
        </p>
      </div>
    </footer>
  );
}
