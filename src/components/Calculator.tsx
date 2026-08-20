'use client';

import { useMemo, useState } from 'react';
import { priceTabs, deliverySteps } from '@/data/site';
import styles from './Calculator.module.css';

type CalcGrade = { grade: string; klass?: string; price: number };
type CalcMaterial = { id: string; label: string; grades: CalcGrade[] };

const materials: CalcMaterial[] = priceTabs
  .filter((tab) => tab.id === 'gravel' || tab.id === 'granite')
  .map((tab) => ({
    id: tab.id,
    label: tab.id === 'gravel' ? 'На гравии' : 'На граните',
    grades: tab.rows.map((row) => ({ grade: row.grade, klass: row.klass, price: row.price })),
  }));

const rub = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 });

function rateForKm(km: number): number {
  const step = deliverySteps.find((s) => km <= s.maxKm);
  return step ? step.rate : deliverySteps[deliverySteps.length - 1]!.rate;
}

type CalculatorProps = {
  title?: string;
  material?: string;
  grade?: string;
  volume?: number;
  id?: string;
};

export function Calculator({
  title = 'Рассчитайте стоимость онлайн',
  material = 'gravel',
  grade = 'М200',
  volume = 10,
  id = 'kalkulyator',
}: CalculatorProps) {
  const [materialId, setMaterialId] = useState(material);
  const currentMaterial = materials.find((m) => m.id === materialId) ?? materials[0]!;

  const [gradeValue, setGradeValue] = useState(() =>
    currentMaterial.grades.some((g) => g.grade === grade) ? grade : currentMaterial.grades[0]!.grade,
  );
  const [volumeValue, setVolumeValue] = useState(volume);
  const [zone, setZone] = useState<'free' | 'km'>('free');
  const [km, setKm] = useState(10);
  const [paymentType, setPaymentType] = useState('card');

  function selectMaterial(id: string) {
    setMaterialId(id);
    const next = materials.find((m) => m.id === id) ?? materials[0]!;
    if (!next.grades.some((g) => g.grade === gradeValue)) {
      setGradeValue(next.grades[0]!.grade);
    }
  }

  const row = currentMaterial.grades.find((g) => g.grade === gradeValue) ?? currentMaterial.grades[0]!;
  const safeVolume = Math.max(1, volumeValue || 0);
  const safeKm = Math.max(0, km || 0);

  const { concrete, delivery, rate, total } = useMemo(() => {
    const concreteSum = row.price * safeVolume;
    const rateValue = zone === 'free' ? 0 : rateForKm(safeKm);
    const deliverySum = rateValue * safeVolume;
    return { concrete: concreteSum, delivery: deliverySum, rate: rateValue, total: concreteSum + deliverySum };
  }, [row, safeVolume, zone, safeKm]);

  function prefillOrderForm() {
    window.dispatchEvent(
      new CustomEvent('lead-form-prefill', {
        detail: { grade: gradeValue, volume: safeVolume, paymentType },
      }),
    );
  }

  return (
    <section className="section" id={id}>
      <div className="container">
        <div className="section__head">
          <h2>{title}</h2>
          <p className="section__lead">
            Выберите материал, марку и объём — увидите цену бетона, доставку и итоговую сумму. Без звонка и
            регистрации.
          </p>
        </div>

        <div className={styles.calc}>
          <div className={styles.form}>
            <div className={styles.row}>
              <span className="field__label">Материал</span>
              <div className={styles.pillPicker}>
                {materials.map((m) => (
                  <button
                    type="button"
                    key={m.id}
                    className={`${styles.pill} ${m.id === materialId ? styles.pillActive : ''}`}
                    onClick={() => selectMaterial(m.id)}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.grid}>
              <label className="field">
                <span className="field__label">Марка бетона</span>
                <select value={gradeValue} onChange={(e) => setGradeValue(e.target.value)}>
                  {currentMaterial.grades.map((g) => (
                    <option value={g.grade} key={g.grade}>
                      {g.klass ? `${g.grade} (${g.klass}) — ${g.price.toLocaleString('ru-RU')} ₽/м³` : g.grade}
                    </option>
                  ))}
                </select>
              </label>

              <label className="field">
                <span className="field__label">Объём, м³</span>
                <input
                  type="number"
                  min={1}
                  step={0.5}
                  value={volumeValue}
                  onChange={(e) => setVolumeValue(Number(e.target.value))}
                />
              </label>
            </div>

            <div className={styles.row}>
              <span className="field__label">Доставка</span>
              <div className={styles.pillPicker}>
                <button
                  type="button"
                  className={`${styles.pill} ${zone === 'free' ? styles.pillActive : ''}`}
                  onClick={() => setZone('free')}
                >
                  Раменский район — бесплатно
                </button>
                <button
                  type="button"
                  className={`${styles.pill} ${zone === 'km' ? styles.pillActive : ''}`}
                  onClick={() => setZone('km')}
                >
                  Другой адрес
                </button>
              </div>
            </div>

            {zone === 'km' && (
              <label className="field">
                <span className="field__label">Расстояние от завода, км</span>
                <input type="number" min={1} max={50} step={1} value={km} onChange={(e) => setKm(Number(e.target.value))} />
              </label>
            )}

            <label className="field">
              <span className="field__label">Тип оплаты</span>
              <select value={paymentType} onChange={(e) => setPaymentType(e.target.value)}>
                <option value="card">Наличными или картой при получении</option>
                <option value="invoice">Безналичный расчёт по счёту</option>
                <option value="installment">Рассрочка для юрлиц</option>
              </select>
            </label>
          </div>

          <aside className={styles.result}>
            <div className={styles.line}>
              <span>Цена бетона</span>
              <b>
                {rub.format(concrete)} ({row.price.toLocaleString('ru-RU')} ₽/м³ × {safeVolume} м³)
              </b>
            </div>
            <div className={styles.line}>
              <span>{zone === 'free' ? 'Доставка · Раменский район' : `Доставка · ${safeKm} км`}</span>
              <b>{rate === 0 ? 'Бесплатно' : `${rub.format(delivery)} (${rate} ₽/м³)`}</b>
            </div>
            <div className={`${styles.line} ${styles.lineTotal}`}>
              <span>Итого</span>
              <b>{rub.format(total)}</b>
            </div>
            <p className={styles.hint}>
              Цена бетона: {rub.format(concrete)} + Доставка: {rub.format(delivery)} = Итого: {rub.format(total)}
            </p>
            <a className="btn btn--wide" href="#zayavka" onClick={prefillOrderForm}>
              Заказать по этой цене
            </a>
            <p className={`form-note ${styles.note}`}>Цена фиксируется на 24 часа после расчёта</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
