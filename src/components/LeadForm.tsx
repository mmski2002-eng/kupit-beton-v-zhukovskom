'use client';

import { useEffect, useId, useState, type FormEvent } from 'react';
import { company, formGrades, telegram, whatsapp } from '@/data/site';
import styles from './LeadForm.module.css';

type LeadFormProps = {
  variant?: 'short' | 'full';
  submitLabel?: string;
  grade?: string;
  volume?: number;
  note?: string;
  id?: string;
};

export function LeadForm({
  variant = 'short',
  submitLabel = variant === 'short' ? 'Рассчитать стоимость' : 'Оформить заявку',
  grade = 'М200',
  volume,
  note,
  id,
}: LeadFormProps) {
  const [status, setStatus] = useState<string | null>(null);
  const [gradeValue, setGradeValue] = useState(grade);
  const [volumeValue, setVolumeValue] = useState<number | ''>(volume ?? '');
  const reactId = useId();
  const formId = id ?? reactId;

  useEffect(() => {
    function onPrefill(event: Event) {
      const detail = (event as CustomEvent<{ grade?: string; volume?: number }>).detail;
      if (detail?.grade) setGradeValue(detail.grade);
      if (typeof detail?.volume === 'number') setVolumeValue(detail.volume);
    }

    window.addEventListener('lead-form-prefill', onPrefill);
    return () => window.removeEventListener('lead-form-prefill', onPrefill);
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const gradeValue = String(data.get('grade') ?? '');
    const volumeValue = String(data.get('volume') ?? '');
    const lines = Array.from(data.entries())
      .filter(([, value]) => String(value).trim() !== '')
      .map(([key, value]) => `${key}: ${value}`);
    const subject = `Заявка с сайта: ${gradeValue || 'бетон'} ${volumeValue ? `${volumeValue} м³` : ''}`.trim();
    const body = ['Новая заявка с сайта kupit-beton-v-zhukovskom.ru', '', ...lines].join('\n');
    window.location.assign(`mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    setStatus(`Заявка подготовлена: ${gradeValue}, ${volumeValue} м³. Откроется письмо менеджеру; диспетчер перезвонит в течение 15 минут.`);
    form.reset();
    setGradeValue(grade);
    setVolumeValue(volume ?? '');
  }

  return (
    <form className={styles.form} id={formId} onSubmit={onSubmit} noValidate={false}>
      <div className={styles.grid}>
        {variant === 'full' && (
          <label className="field">
            <span className="field__label">Ваше имя *</span>
            <input type="text" name="name" required placeholder="Как к вам обращаться" autoComplete="name" />
          </label>
        )}

        {variant === 'full' ? (
          <div className={`${styles.gradeField} ${styles.wide}`}>
            <span className="field__label">Марка бетона *</span>
            <input type="hidden" name="grade" value={gradeValue} />
            <div className={styles.gradePicker} role="radiogroup" aria-label="Марка бетона">
              {formGrades.map((g) => (
                <button
                  type="button"
                  key={g}
                  className={`${styles.gradePill} ${g === gradeValue ? styles.gradePillActive : ''}`}
                  onClick={() => setGradeValue(g)}
                  role="radio"
                  aria-checked={g === gradeValue}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <label className="field">
            <span className="field__label">Марка бетона *</span>
            <select name="grade" required value={gradeValue} onChange={(e) => setGradeValue(e.target.value)}>
              {formGrades.map((g) => (
                <option value={g} key={g}>
                  {g}
                </option>
              ))}
            </select>
          </label>
        )}

        <label className="field">
          <span className="field__label">Объём, м³ *</span>
          <input
            type="number"
            name="volume"
            required
            min={1}
            step={0.5}
            value={volumeValue}
            onChange={(e) => setVolumeValue(e.target.value === '' ? '' : Number(e.target.value))}
            placeholder="например, 12"
          />
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

        {variant === 'full' && (
          <>
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
            <label className={`field ${styles.wide}`}>
              <span className="field__label">Комментарий</span>
              <textarea name="comment" rows={3} placeholder="Подвижность, время подачи, нужен ли бетононасос" />
            </label>
          </>
        )}
      </div>

      <button className={`btn btn--wide ${variant === 'short' ? styles.submitShort : ''}`} type="submit">
        {submitLabel}
      </button>
      {note && <p className={`form-note ${styles.note}`}>{note}</p>}
      {variant === 'full' && (
        <p className={`form-note ${styles.messengers}`}>
          Быстрая связь: <a href={company.phoneHref}>звонок</a> · <a href={whatsapp.href}>WhatsApp</a> ·{' '}
          <a href={telegram.appHref}>Telegram</a>
        </p>
      )}
      {status && (
        <p className="form-status is-visible" role="status" aria-live="polite">
          {status}
        </p>
      )}
    </form>
  );
}
