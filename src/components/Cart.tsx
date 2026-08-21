'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { useCart } from '@/context/CartContext';
import { company, deliverySteps } from '@/data/site';
import styles from './Cart.module.css';

function formatPrice(value: number) {
  return `${Math.round(value).toLocaleString('ru-RU')} ₽`;
}

function rateForKm(km: number): number {
  const step = deliverySteps.find((s) => km <= s.maxKm);
  return step ? step.rate : deliverySteps[deliverySteps.length - 1]!.rate;
}

export function Cart() {
  const { items, total, isOpen, closeCart, updateVolume, removeItem, clear } = useCart();
  const [status, setStatus] = useState<string | null>(null);
  const [deliveryMode, setDeliveryMode] = useState<'free' | 'km'>('free');
  const [km, setKm] = useState(10);

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
    const data = new FormData(form);
    const positions = items.map((item) => `${item.material} · ${item.grade}: ${item.volume} м³ × ${formatPrice(item.price)} = ${formatPrice(item.price * item.volume)}`);
    const lines = [
      'Новая заявка из корзины сайта kupit-beton-v-zhukovskom.ru',
      '',
      'Позиции:',
      ...positions,
      '',
      `Итого без НДС: ${formatPrice(totalWithoutVat)}`,
      `НДС 20%: ${formatPrice(vat)}`,
      `Бетон с НДС: ${formatPrice(total)}`,
      `Доставка: ${deliveryPrice === 0 ? 'Бесплатно' : formatPrice(deliveryPrice)}`,
      `Итого с доставкой: ${formatPrice(grandTotal)}`,
      '',
      ...Array.from(data.entries()).map(([key, value]) => `${key}: ${value}`),
    ];
    window.location.assign(`mailto:${company.email}?subject=${encodeURIComponent('Заявка из корзины сайта')}&body=${encodeURIComponent(lines.join('\n'))}`);
    setStatus(`Заявка на ${items.length} позиций (${formatPrice(grandTotal)}) подготовлена письмом менеджеру. Диспетчер перезвонит в течение 15 минут.`);
    form.reset();
    clear();
  }

  const totalVolume = items.reduce((sum, item) => sum + item.volume, 0);
  const deliveryRate = deliveryMode === 'free' ? 0 : rateForKm(Math.max(1, km || 1));
  const deliveryPrice = deliveryRate * totalVolume;
  const totalWithoutVat = total / 1.2;
  const vat = total - totalWithoutVat;
  const grandTotal = total + deliveryPrice;

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
              <div className={styles.deliveryBox}>
                <span className="field__label">Доставка</span>
                <div className={styles.deliveryBtns}>
                  <button
                    type="button"
                    className={`${styles.deliveryBtn} ${deliveryMode === 'free' ? styles.deliveryBtnActive : ''}`}
                    onClick={() => setDeliveryMode('free')}
                  >
                    Раменский район
                  </button>
                  <button
                    type="button"
                    className={`${styles.deliveryBtn} ${deliveryMode === 'km' ? styles.deliveryBtnActive : ''}`}
                    onClick={() => setDeliveryMode('km')}
                  >
                    Другой адрес
                  </button>
                </div>
                {deliveryMode === 'km' && (
                  <label className={styles.kmField}>
                    <span>км от завода</span>
                    <input type="number" min={1} max={50} step={1} value={km} onChange={(e) => setKm(Number(e.target.value))} />
                  </label>
                )}
              </div>

              <div className={styles.total}>
                <span>Итого без НДС</span>
                <b>{formatPrice(totalWithoutVat)}</b>
              </div>
              <div className={styles.total}>
                <span>НДС 20%</span>
                <b>{formatPrice(vat)}</b>
              </div>
              <div className={styles.total}>
                <span>Бетон с НДС</span>
                <b>{formatPrice(total)}</b>
              </div>
              <div className={styles.total}>
                <span>Доставка</span>
                <b>{deliveryPrice === 0 ? 'Бесплатно' : formatPrice(deliveryPrice)}</b>
              </div>
              <div className={`${styles.total} ${styles.grandTotal}`}>
                <span>Итого с доставкой</span>
                <b>{formatPrice(grandTotal)}</b>
              </div>
              <p className="form-note">Цены в прайсе указаны с НДС. Финальную сумму подтвердит диспетчер после проверки адреса.</p>

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
                  <span className="field__label">Время доставки</span>
                  <input type="time" name="time" min="08:00" max="22:00" />
                </label>
                <label className="field">
                  <span className="field__label">Тип заказчика *</span>
                  <select name="customerType" required>
                    <option value="Физлицо">Физлицо</option>
                    <option value="Юрлицо">Юрлицо</option>
                    <option value="ИП">ИП</option>
                  </select>
                </label>
                <label className="field">
                  <span className="field__label">Компания</span>
                  <input type="text" name="company" placeholder="для юрлиц и ИП" />
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
