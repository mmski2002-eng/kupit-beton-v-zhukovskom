import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadForm } from '@/components/LeadForm';
import { PriceCatalog } from '@/components/PriceCatalog';
import { pageMetadata } from '@/lib/metadata';
import styles from '@/styles/subpage.module.css';

export const metadata: Metadata = pageMetadata({
  title: 'Корзина заявки на бетон — ПСК Прогресс',
  description: 'Добавьте бетон в корзину заявки или отправьте форму заказа напрямую. Диспетчер перезвонит в течение 15 минут.',
  path: '/korzina/',
});

export default function KorzinaPage() {
  return (
    <>
      <Header />
      <main>
        <section className={`section ${styles.hero}`}>
          <div className="container">
            <nav className={styles.crumbs} aria-label="Хлебные крошки">
              <a href="/">Главная</a>
              <span>/</span>
              <span aria-current="page">Корзина заявки</span>
            </nav>
            <div className={styles.heroGrid}>
              <div>
                <h1>Корзина заявки на бетон</h1>
                <p className={styles.heroSub}>
                  Добавьте позиции из прайса кнопкой «В корзину» — панель заявки откроется справа. Если уже знаете
                  марку и объём, отправьте форму ниже.
                </p>
              </div>
              <div className={styles.formCard}>
                <h2 className={styles.formTitle}>Оформить заявку</h2>
                <LeadForm variant="full" submitLabel="Отправить заявку" />
              </div>
            </div>
          </div>
        </section>
        <PriceCatalog title="Добавьте бетон в корзину заявки" lead="Выберите материал и нажмите «В корзину» — можно менять объём и доставку в панели справа." />
      </main>
      <Footer />
    </>
  );
}
