'use client';

import { useState } from 'react';
import { catalogFacets, company, nav } from '@/data/site';
import styles from './Header.module.css';

export function HeaderMobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
        aria-label="Меню"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`} aria-label="Основная навигация">
        {nav.map((item) => (
          item.href === '/tovarnyy-beton/' ? (
            <div className={styles.catalogItem} key={item.href}>
              <a className={styles.catalogLink} href={item.href}>
                {item.label} <span aria-hidden="true">▾</span>
              </a>
              <div className={styles.catalogMenu}>
                {catalogFacets.map((facet) => (
                  <section className={styles.catalogGroup} key={facet.title}>
                    <p>{facet.title}</p>
                    <div>
                      {facet.links.map((link) => (
                        <a href={link.href} key={link.href}>
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          ) : (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          )
        ))}
        <div className={styles.mobileActions}>
          <a className={styles.mobilePhone} href={company.phoneHref}>
            {company.phone}
          </a>
          <a className={`btn ${styles.mobileOrder}`} href="/zakazat/#zayavka">
            Заказать
          </a>
        </div>
      </nav>
    </>
  );
}
