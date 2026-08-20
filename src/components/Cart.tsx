'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { useCart } from '@/context/CartContext';
import styles from './Cart.module.css';

function formatPrice(value: number) {
  return `${Math.round(value).toLocaleString('ru-RU')} ₽`;
}

export function Cart() {
  const { items, total, isOpen, closeCart, updateVolume, removeItem, clear } = useCart();
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') closeCart();
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [closeCart]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus(`Заявка на ${items.length} позиций (${formatPrice(total)}) принята. Диспетчер перезвонит в течение 15 минут.`);
    form.reset();
    clear();
  }

  return (
    <div>
      <div className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`} onClick={closeCart} />
      <aside
        className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`}
        aria-label="Корзина заявки"
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className={styles.head}>
          <h2>Корзина заявки</h2>
          <button type="button" className={styles.close} aria-label="Закрыть корзину" onClick={closeCart}>
            ✕
          </button>
        </div>

        <div className={styles.body}>
          {items.length === 0 && <p className={styles.empty}>Корзина пуста. Добавьте марку бетона из каталога кнопкой «В корзину».</p>}

          {items.length > 0 && (
            <ul className={styles.items}>
              {items.map((item) => (
                <li className={styles.item} key={item.id}>
                  <div className={styles.itemInfo}>
                    <b className={styles.itemTitle}>
                      {item.material} · {item.grade}
                    </b>
                    <span className={styles.itemMeta}>
                      {item.klass ? `${item.klass} · ` : ''}
                      {formatPrice(item.price)}/м³
                    </span>
                  </div>
                  <div className={styles.itemControls}>
                    <label className={styles.itemVolume}>
                      <span className="visually-hidden">Объём, м³</span>
                      <input
                        type="number"
                        min={1}
                        step={0.5}
                        value={item.volume}
                        onChange={(e) => updateVolume(item.id, Number(e.target.value))}
                      />
                      <span>м³</span>
                    </label>
                    <span className={styles.itemPrice}>{formatPrice(item.price * item.volume)}</span>
                    <button type="button" className={styles.remove} aria-label="Удалить позицию" onClick={() => removeItem(item.id)}>
                      ✕
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {items.length > 0 && (
            <div className={styles.summary}>
              <div className={styles.total}>
                <span>Итого по позициям</span>
                <b>{formatPrice(total)}</b>
              </div>
              <p className="form-note">Точную сумму с учётом доставки назовёт диспетчер после уточнения адреса.</p>

              <form className={styles.form} onSubmit={onSubmit} noValidate>
                <label className="field">
                  <span className="field__label">Ваше имя *</span>
                  <input type="text" name="name" required placeholder="Как к вам обращаться" autoComplete="name" />
                </label>
                <label className="field">
                  <span className="field__label">Телефон *</span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    pattern="\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}"
                    title="Введите номер полностью: +7 (999) 123-45-67"
                    placeholder="+7 (___) ___-__-__"
                    autoComplete="tel"
                  />
                </label>
                <label className="field">
                  <span className="field__label">Адрес объекта *</span>
                  <input type="text" name="address" required placeholder="город, улица, участок" />
                </label>
                <label className="field">
                  <span className="field__label">Дата доставки</span>
                  <input type="date" name="date" />
                </label>
                <label className="field">
                  <span className="field__label">Комментарий</span>
                  <textarea name="comment" rows={2} placeholder="Время подачи, нужен ли бетононасос" />
                </label>
                <button className="btn btn--wide" type="submit">
                  Оформить заявку
                </button>
                <p className="form-note">Бесплатно · Без обязательств · Ответим за 15 минут</p>
                {status && (
                  <p className="form-status is-visible" role="status" aria-live="polite">
                    {status}
                  </p>
                )}
              </form>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
