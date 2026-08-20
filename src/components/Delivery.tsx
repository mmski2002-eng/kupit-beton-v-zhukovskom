import { deliveryTariffs, deliveryCities } from '@/data/site';
import styles from './Delivery.module.css';

export function Delivery() {
  return (
    <section className="section" id="dostavka">
      <div className={`container ${styles.delivery}`}>
        <div>
          <div className="section__head">
            <h2>Бесплатная доставка по Раменскому району</h2>
            <p className="section__lead">
              Минимальный заказ — 1 м³. При заявке до 16:00 привозим в тот же день. Собственный автопарк миксеров 7–14
              м³ с GPS — машину можно отслеживать в реальном времени.
            </p>
          </div>

          <ul className={styles.cities}>
            {deliveryCities.map((city) => (
              <li className={styles.cityChip} key={city}>
                {city}
              </li>
            ))}
          </ul>
        </div>

        <div className="table-scroll">
          <table className="data-table">
            <thead>
              <tr>
                <th>Расстояние от завода</th>
                <th>Тариф доставки</th>
              </tr>
            </thead>
            <tbody>
              {deliveryTariffs.map((tariff) => (
                <tr className={tariff.rate === 0 ? styles.free : undefined} key={tariff.zone}>
                  <td>{tariff.zone}</td>
                  <td className="price">{tariff.label}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
