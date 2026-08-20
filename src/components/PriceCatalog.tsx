'use client';

import { useState } from 'react';
import { priceTabs } from '@/data/site';
import { useCart } from '@/context/CartContext';
import styles from './PriceCatalog.module.css';

type PriceCatalogProps = {
  title?: string;
  lead?: string;
  activeTab?: string;
  highlightGrade?: string;
  footerLink?: { label: string; href: string };
  id?: string;
};

export function PriceCatalog({
  title = 'Марки и цены — выберите нужный материал',
  lead,
  activeTab = 'gravel',
  highlightGrade,
  footerLink,
  id = 'katalog',
}: PriceCatalogProps) {
  const [tab, setTab] = useState(activeTab);
  const { addItem } = useCart();
  const currentTab = priceTabs.find((t) => t.id === tab) ?? priceTabs[0]!;

  return (
    <section className="section section--alt" id={id}>
      <div className="container">
        <div className="section__head">
          <h2>{title}</h2>
          {lead && <p className="section__lead">{lead}</p>}
        </div>

        <div className={styles.tabsNav} role="tablist">
          {priceTabs.map((t) => (
            <button
              type="button"
              role="tab"
              key={t.id}
              className={`${styles.tabBtn} ${t.id === tab ? styles.tabBtnActive : ''}`}
              aria-selected={t.id === tab}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className={styles.panel}>
          <div className="table-scroll">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Марка / Класс</th>
                  <th>Применение</th>
                  <th>Цена с НДС</th>
                  <th>
                    <span className="visually-hidden">Действия</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentTab.rows.map((row) => (
                  <tr key={row.grade} className={highlightGrade === row.grade ? styles.rowCurrent : undefined}>
                    <td className={styles.gradeCell}>
                      <b>{row.grade}</b>
                      {row.klass && <span className={styles.gradeClass}>{row.klass}</span>}
                    </td>
                    <td>{row.usage}</td>
                    <td className="price">{row.price.toLocaleString('ru-RU')} ₽/м³</td>
                    <td className={styles.actionCell}>
                      <div className={styles.actionButtons}>
                        <button
                          type="button"
                          className={`btn btn--ghost ${styles.btnSm}`}
                          onClick={() =>
                            addItem({ grade: row.grade, klass: row.klass ?? '', material: currentTab.label, price: row.price })
                          }
                        >
                          В корзину
                        </button>
                        {row.href && (
                          <a className={styles.rowLink} href={row.href}>
                            Подробнее →
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={styles.foot}>
          <p className="form-note">
            Доставка по Раменскому району — бесплатно. Гарантия цены: найдёте дешевле у завода-производителя — снизим
            на 100 ₽/м³.
          </p>
          {footerLink && (
            <a className="btn btn--ghost" href={footerLink.href}>
              {footerLink.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
