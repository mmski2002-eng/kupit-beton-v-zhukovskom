'use client';

import { useMemo, useState } from 'react';
import { priceTabs, deliverySteps } from '@/data/site';
import styles from './Calculator.module.css';

type CalcGrade = { grade: string; klass?: string; price: number };
type CalcMaterial = { id: string; label: string; grades: CalcGrade[] };
type StructureType = 'custom' | 'slab' | 'strip' | 'screed' | 'column';

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

function roundVolume(value: number) {
  return Math.ceil(value * 10) / 10;
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
  const [structureType, setStructureType] = useState<StructureType>('custom');
  const [volumeValue, setVolumeValue] = useState(volume);
  const [length, setLength] = useState(10);
  const [width, setWidth] = useState(8);
  const [height, setHeight] = useState(0.2);
  const [stripWidth, setStripWidth] = useState(0.4);
  const [diameter, setDiameter] = useState(0.3);
  const [count, setCount] = useState(4);
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
  const rawStructureVolume = useMemo(() => {
    if (structureType === 'custom') return Math.max(1, volumeValue || 0);
    if (structureType === 'slab' || structureType === 'screed') return length * width * height;
    if (structureType === 'strip') return length * stripWidth * height;
    return Math.PI * (diameter / 2) ** 2 * height * count;
  }, [structureType, volumeValue, length, width, height, stripWidth, diameter, count]);
  const rawVolume = Math.max(0.1, rawStructureVolume || 0);
  const safeVolume = roundVolume(rawVolume * 1.07);
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
              <span className="field__label">Тип конструкции</span>
              <div className={styles.pillPicker}>
                {[
                  ['custom', 'Готовый объём'],
                  ['slab', 'Плита'],
                  ['strip', 'Лента'],
                  ['screed', 'Стяжка'],
                  ['column', 'Колонны'],
                ].map(([type, label]) => (
                  <button
                    type="button"
                    key={type}
                    className={`${styles.pill} ${structureType === type ? styles.pillActive : ''}`}
                    onClick={() => setStructureType(type as StructureType)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {structureType !== 'custom' && (
              <div className={styles.grid3}>
                {(structureType === 'slab' || structureType === 'screed') && (
                  <>
                    <label className="field">
                      <span className="field__label">Длина, м</span>
                      <input type="number" min={0.1} step={0.1} value={length} onChange={(e) => setLength(Number(e.target.value))} />
                    </label>
                    <label className="field">
                      <span className="field__label">Ширина, м</span>
                      <input type="number" min={0.1} step={0.1} value={width} onChange={(e) => setWidth(Number(e.target.value))} />
                    </label>
                    <label className="field">
                      <span className="field__label">Толщина, м</span>
                      <input type="number" min={0.03} step={0.01} value={height} onChange={(e) => setHeight(Number(e.target.value))} />
                    </label>
                  </>
                )}
                {structureType === 'strip' && (
                  <>
                    <label className="field">
                      <span className="field__label">Длина ленты, м</span>
                      <input type="number" min={0.1} step={0.1} value={length} onChange={(e) => setLength(Number(e.target.value))} />
                    </label>
                    <label className="field">
                      <span className="field__label">Ширина, м</span>
                      <input type="number" min={0.1} step={0.05} value={stripWidth} onChange={(e) => setStripWidth(Number(e.target.value))} />
                    </label>
                    <label className="field">
                      <span className="field__label">Высота, м</span>
                      <input type="number" min={0.1} step={0.05} value={height} onChange={(e) => setHeight(Number(e.target.value))} />
                    </label>
                  </>
                )}
                {structureType === 'column' && (
                  <>
                    <label className="field">
                      <span className="field__label">Диаметр, м</span>
                      <input type="number" min={0.1} step={0.05} value={diameter} onChange={(e) => setDiameter(Number(e.target.value))} />
                    </label>
                    <label className="field">
                      <span className="field__label">Высота, м</span>
                      <input type="number" min={0.1} step={0.1} value={height} onChange={(e) => setHeight(Number(e.target.value))} />
                    </label>
                    <label className="field">
                      <span className="field__label">Количество</span>
                      <input type="number" min={1} step={1} value={count} onChange={(e) => setCount(Number(e.target.value))} />
                    </label>
                  </>
                )}
              </div>
            )}

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
              <div className={`${styles.row} ${styles.gradeField}`}>
                <span className="field__label">Марка бетона</span>
                <div className={`${styles.pillPicker} ${styles.gradePicker}`}>
                  {currentMaterial.grades.map((g) => (
                    <button
                      type="button"
                      value={g.grade}
                      key={g.grade}
                      className={`${styles.pill} ${styles.gradePill} ${g.grade === gradeValue ? styles.pillActive : ''}`}
                      onClick={() => setGradeValue(g.grade)}
                      aria-pressed={g.grade === gradeValue}
                    >
                      <span>{g.grade}</span>
                      <small>{g.klass ? `${g.klass} · ` : ''}{g.price.toLocaleString('ru-RU')} ₽/м³</small>
                    </button>
                  ))}
                </div>
              </div>

              <label className="field">
                <span className="field__label">{structureType === 'custom' ? 'Объём, м³' : 'Расчётный объём, м³'}</span>
                <input
                  type="number"
                  min={1}
                  step={0.5}
                  value={structureType === 'custom' ? volumeValue : roundVolume(rawVolume)}
                  onChange={(e) => setVolumeValue(Number(e.target.value))}
                  readOnly={structureType !== 'custom'}
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
              <span>Объём с запасом +7%</span>
              <b>{safeVolume} м³</b>
            </div>
            <div className={styles.line}>
              <span>Цена бетона с НДС</span>
              <b>
                {rub.format(concrete)} ({row.price.toLocaleString('ru-RU')} ₽/м³ × {safeVolume} м³)
              </b>
            </div>
            <div className={styles.line}>
              <span>{zone === 'free' ? 'Доставка · Раменский район' : `Доставка · ${safeKm} км`}</span>
              <b>{rate === 0 ? 'Бесплатно' : `${rub.format(delivery)} (${rate} ₽/м³)`}</b>
            </div>
            <div className={`${styles.line} ${styles.lineTotal}`}>
              <span>Итого с НДС</span>
              <b>{rub.format(total)}</b>
            </div>
            <p className={styles.hint}>
              Базовый объём: {roundVolume(rawVolume)} м³ + запас 7% = {safeVolume} м³. Цена бетона: {rub.format(concrete)} + Доставка: {rub.format(delivery)} = Итого: {rub.format(total)} с НДС.
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
