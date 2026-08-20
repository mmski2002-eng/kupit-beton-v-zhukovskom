'use client';

import { useState } from 'react';
import { nav } from '@/data/site';
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
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </>
  );
}
