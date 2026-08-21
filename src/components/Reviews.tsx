import { reviewLinks } from '@/data/site';
import styles from './Reviews.module.css';

const reviews = [
  {
    name: 'Алексей К.',
    city: 'Жуковский',
    date: '14 мая 2026',
    rating: 5,
    text: 'Заказывал М300 на фундамент дома — 34 куба. Позвонил с утра, к обеду уже подъехал первый миксер. Паспорт качества водитель отдал сразу, никуда бегать не пришлось. По цене не подвели: у другого завода вышло на 150 рублей за куб дороже, а здесь без разговоров сбросили до -100, как и обещали. На перекрытие возьму ещё.',
  },
  {
    name: 'Сергей Михайлович Д.',
    city: 'Кратово',
    date: '2 апреля 2026',
    rating: 5,
    text: 'Сотрудничаем с ними как подрядчики второй год. Закрывающие — ТТН, счёт-фактура, паспорт — приходят вовремя и без напоминаний, для нашей бухгалтерии это критично. Берём от 80 кубов за раз, и ни разу не сорвали согласованный день. GPS на машинах действительно работает: диспетчер всегда в курсе, где миксер.',
  },
  {
    name: 'Наталья В.',
    city: 'Раменское',
    date: '18 марта 2026',
    rating: 5,
    text: 'Заказывала сама впервые, строю баню. С маркой не разбиралась — позвонила, менеджер спокойно объяснил, что под фундамент бани хватит М200, и посчитал кубатуру по моим размерам. Оплатила 8 кубов — привезли ровно 8, без сюрпризов. Весной буду делать отмостку и снова обращусь сюда.',
  },
  {
    name: 'Виктор Н., прораб',
    city: 'Лыткарино',
    date: '6 февраля 2026',
    rating: 5,
    text: 'Заливали перекрытие в январе при -12 °C, брал бетон с противоморозными добавками. Приехали строго по графику, температура смеси на выходе в норме — всё отражено в паспорте. Через 28 дней сняли образцы в их лаборатории: прочность набралась как надо. Для сдачи объекта это принципиально. Советую тем, кто работает с техническим надзором.',
  },
];

export function Reviews() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section__head">
          <h2>Что говорят покупатели</h2>
        </div>

        <ul className={styles.grid}>
          {reviews.map((review) => (
            <li className={styles.review} key={review.name}>
              <div className={styles.head}>
                <div>
                  <p className={styles.name}>{review.name}</p>
                  <p className={styles.meta}>
                    {review.city} · {review.date}
                  </p>
                </div>
                <span className={styles.rating} aria-label={`Оценка ${review.rating} из 5`}>
                  {'★'.repeat(review.rating)}
                </span>
              </div>
              <p className={styles.text}>{review.text}</p>
            </li>
          ))}
        </ul>
        <div className={styles.links} id="reviews-source">
          {reviewLinks.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
