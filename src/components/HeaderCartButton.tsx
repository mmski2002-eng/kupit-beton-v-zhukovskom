'use client';

import { useCart } from '@/context/CartContext';
import styles from './Header.module.css';

export function HeaderCartButton() {
  const { items, openCart } = useCart();

  return (
    <button type="button" className={styles.cartBtn} aria-label="Открыть корзину заявки" onClick={openCart}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="20" r="1.5" />
        <circle cx="18" cy="20" r="1.5" />
        <path d="M2 3h2l2.4 12.4a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L21 7H6" />
      </svg>
      {items.length > 0 && (
        <span className={styles.cartCount} aria-hidden="true">
          {items.length}
        </span>
      )}
    </button>
  );
}
