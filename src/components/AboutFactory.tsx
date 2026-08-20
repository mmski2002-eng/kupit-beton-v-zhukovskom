import { company } from '@/data/site';
import { PlaceholderVisual } from './PlaceholderVisual';
import styles from './AboutFactory.module.css';

const facts = [
  { value: '23 года', label: 'работаем на рынке с 2003 года' },
  { value: '110 м³/час', label: 'производительность БСУ Stetter' },
  { value: '7–14 м³', label: 'объёмы миксеров собственного автопарка' },
  { value: '18–57 м', label: 'длина стрел бетононасосов' },
  { value: 'от 1 м³', label: 'минимальный заказ без доплат' },
];

export function AboutFactory() {
  return (
    <section className="section section--alt" id="o-zavode">
      <div className={`container ${styles.about}`}>
        <div>
          <div className="section__head">
            <h2>ООО «ПСК «Прогресс» — поставка бетона в Жуковский с 2003 года</h2>
          </div>
          <p className={styles.text}>
            Доставляем бетон в Жуковский и Раменский округ с {company.since} года. Смеси выпускаем на немецкой БСУ
            Stetter с автоматическим дозированием, поэтому человеческий фактор в рецептуре исключён. Перед отгрузкой
            каждую партию проверяет аккредитованная лаборатория, а заказчик получает подтверждённое документами
            качество. Работаем и с частными застройщиками, и с крупными подрядчиками: безналичный расчёт, полный пакет
            закрывающих документов, рассрочка для юрлиц.
          </p>

          <ul className={styles.facts}>
            {facts.map((fact) => (
              <li className={styles.fact} key={fact.value}>
                <span className={styles.factValue}>{fact.value}</span>
                <span className={styles.factLabel}>{fact.label}</span>
              </li>
            ))}
          </ul>

          <a className={styles.link} href="/o-kompanii/">
            Подробнее о заводе →
          </a>
        </div>

        <PlaceholderVisual
          kind="production"
          caption="БСУ Stetter: силосы цемента → дозирование → смеситель → отгрузка в GPS-миксер"
        />
      </div>
    </section>
  );
}
