import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { Calculator } from '@/components/Calculator';
import { PriceCatalog } from '@/components/PriceCatalog';
import { Delivery } from '@/components/Delivery';
import { Services } from '@/components/Services';
import { Guarantees } from '@/components/Guarantees';
import { HowWeWork } from '@/components/HowWeWork';
import { AboutFactory } from '@/components/AboutFactory';
import { Cases } from '@/components/Cases';
import { Reviews } from '@/components/Reviews';
import { B2BBlock } from '@/components/B2BBlock';
import { BlogTeaser } from '@/components/BlogTeaser';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = pageMetadata({
  title: 'Купить бетон в Жуковском с доставкой — от 4 150 ₽/м³',
  description:
    'Бетон от завода-производителя ООО «ПСК «Прогресс» в Жуковском: марки М100–М600, от 1 м³, доставка в день заказа, паспорт ГОСТ. Тел. +7 (499) 111-72-62.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero
          title="Заводской бетон с доставкой по Жуковскому"
          subtitle="Минимальный заказ 1 м³ · привезём в день обращения · паспорт качества ГОСТ к каждой партии"
        />

        <TrustBar />

        <Calculator />

        <PriceCatalog footerLink={{ label: 'Смотреть все марки и цены →', href: '/tovarnyy-beton/' }} />

        <Delivery />

        <Services />

        <Guarantees title="Гарантии завода" />

        <HowWeWork />

        <AboutFactory />

        <div id="kejsy">
          <Cases />
        </div>

        <Reviews />

        <B2BBlock />

        <BlogTeaser slugs={['kak-rasschitat-obem-betona', 'kakoy-beton-dlya-fundamenta', 'skolko-stoit-kub-betona']} />

        <FAQ />

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
