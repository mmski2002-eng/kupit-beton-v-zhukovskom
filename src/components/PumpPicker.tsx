'use client';

import { useState } from 'react';
import { pumpPriceRows } from '@/data/pumps';
import styles from './PumpPicker.module.css';

export function PumpPicker() {
  const [model, setModel] = useState(pumpPriceRows[1]!.model);
  const current = pumpPriceRows.find((row) => row.model === model) ?? pumpPriceRows[0]!;

  function bookPump() {
    window.dispatchEvent(
      new CustomEvent('lead-form-prefill', {
        detail: { grade: 'М200', volume: 1 },
      }),
    );
  }

  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section__head">
          <h2>Подберите стрелу бетононасоса</h2>
          <p className="section__lead">Чипы показывают доступные модели и подсвечивают цену выбранной стрелы.</p>
        </div>

        <div className={styles.picker}>
          <div className={styles.chips}>
            {pumpPriceRows.map((row) => (
              <button
                type="button"
                className={`${styles.chip} ${row.model === model ? styles.chipActive : ''}`}
                key={row.model}
                onClick={() => setModel(row.model)}
              >
                {row.boom}
              </button>
            ))}
          </div>

          <div className={styles.card}>
            <span className={styles.kicker}>Выбрано</span>
            <h3>{current.model}</h3>
            <p>{current.fit}</p>
            <dl>
              <div>
                <dt>Цена за час</dt>
                <dd>{current.hour.toLocaleString('ru-RU')} ₽</dd>
              </div>
              <div>
                <dt>Смена 7+1</dt>
                <dd>{current.shift.toLocaleString('ru-RU')} ₽</dd>
              </div>
            </dl>
            <a className="btn" href="#zayavka" onClick={bookPump}>
              Забронировать эту стрелу
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
