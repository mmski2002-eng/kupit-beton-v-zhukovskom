'use client';

import { useCart } from '@/context/CartContext';
import styles from './GradeCartButtons.module.css';

type GradeCartButtonsProps = {
  gradeLabel: string;
  klass: string;
  gravelPrice?: number;
  granitePrice?: number;
};

export function GradeCartButtons({ gradeLabel, klass, gravelPrice, granitePrice }: GradeCartButtonsProps) {
  const { addItem } = useCart();

  return (
    <div className={styles.cart}>
      {gravelPrice && (
        <button
          type="button"
          className={`btn btn--ghost ${styles.cartBtn}`}
          onClick={() => addItem({ grade: gradeLabel, klass, material: 'Бетон на гравии', price: gravelPrice })}
        >
          В корзину · гравий {gravelPrice.toLocaleString('ru-RU')} ₽/м³
        </button>
      )}
      {granitePrice && (
        <button
          type="button"
          className={`btn btn--ghost ${styles.cartBtn}`}
          onClick={() => addItem({ grade: gradeLabel, klass, material: 'Бетон на граните', price: granitePrice })}
        >
          В корзину · гранит {granitePrice.toLocaleString('ru-RU')} ₽/м³
        </button>
      )}
    </div>
  );
}
