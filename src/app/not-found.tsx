import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { company } from '@/data/site';
import styles from './not-found.module.css';

export const metadata: Metadata = {
  title: `Страница не найдена — ${company.brand}`,
  description: 'Страница не найдена. Вернитесь на главную или в каталог товарного бетона.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Header />

      <main>
        <section className={`section ${styles.notfound}`}>
          <div className={`container ${styles.inner}`}>
            <span className={styles.code}>404</span>
            <h1>Страница не найдена</h1>
            <p className={styles.text}>
              Возможно, страница удалена или адрес введён с опечаткой. Загляните в каталог бетона или на главную —
              там же телефон диспетчера {company.phone}.
            </p>
            <div className={styles.actions}>
              <a className="btn" href="/">
                На главную
              </a>
              <a className="btn btn--ghost" href="/tovarnyy-beton/">
                Каталог бетона
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
