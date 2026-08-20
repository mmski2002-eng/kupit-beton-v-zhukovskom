'use client';

import { useRef, useState } from 'react';
import { JsonLd } from './JsonLd';
import { faqPageSchema } from '@/lib/schema';
import styles from './FAQ.module.css';

const defaultItems = [
  {
    q: 'Какой минимальный объём бетона можно заказать?',
    a: 'От 1 м³, доплат за малый объём нет. Нужен всего один куб на отмостку или заборные стойки — тоже привезём.',
  },
  {
    q: 'Доставят ли бетон в день заказа?',
    a: 'Да, если оформить заявку до 16:00. Позвоните или отправьте заявку онлайн — диспетчер подтвердит время подачи в течение 15 минут.',
  },
  {
    q: 'Как рассчитать, сколько кубов бетона нужно?',
    a: 'Посчитайте в калькуляторе на сайте либо позвоните нам. По запросу приедет технический специалист — обмерит объект и даст расчёт с актом. Бесплатно.',
  },
  {
    q: 'Какие документы получу вместе с бетоном?',
    a: 'Водитель привезёт товарно-транспортную накладную (ТТН) и паспорт качества ГОСТ. Юрлицам дополнительно — счёт-фактуру и УПД. Протоколы испытаний аккредитованной лаборатории — по запросу.',
  },
  {
    q: 'Есть ли гарантия, что бетон соответствует заявленной марке?',
    a: 'Да. На территории завода действует аккредитованная испытательная лаборатория, и каждая партия проходит проверку до отгрузки. На каждую поставку выдаём паспорт качества с результатами испытаний.',
  },
  {
    q: 'Что делать, если не знаю, какая марка бетона нужна?',
    a: 'Наберите +7 (499) 111-72-62 и скажите, что именно строите — фундамент, стяжку, отмостку, перекрытие, — а мы подскажем марку. Это бесплатно и займёт 2–3 минуты.',
  },
  {
    q: 'Можно ли забрать бетон самовывозом?',
    a: 'Да, самовывоз возможен. Точный адрес отгрузочной площадки и время подачи уточните у диспетчера по телефону +7 (499) 111-72-62. Работаем ежедневно с 8:00 до 22:00.',
  },
  {
    q: 'Работаете ли зимой при минусовых температурах?',
    a: 'Да. При морозе до -5 °C и до -20 °C по запросу вводим противоморозные добавки (ПМД) — 100–250 ₽/м³ в зависимости от температурного режима. Бетонировать можно круглый год.',
  },
];

type FAQProps = {
  title?: string;
  items?: { q: string; a: string }[];
};

export function FAQ({ title = 'Частые вопросы', items = defaultItems }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section className="section" id="faq">
      <div className={`container ${styles.narrow}`}>
        <div className="section__head">
          <h2>{title}</h2>
        </div>

        <ul className={styles.list}>
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <li className={styles.item} key={item.q}>
                <button
                  type="button"
                  className={`${styles.q} ${isOpen ? styles.qOpen : ''}`}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{item.q}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                    <path d="M6 9.5l6 6 6-6" />
                  </svg>
                </button>
                <div
                  className={styles.a}
                  ref={(el) => {
                    panelRefs.current[index] = el;
                  }}
                  style={{ maxHeight: isOpen ? `${panelRefs.current[index]?.scrollHeight ?? 0}px` : undefined }}
                >
                  <p>{item.a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <JsonLd data={faqPageSchema(items)} />
    </section>
  );
}
