import { Manrope } from 'next/font/google';
import './globals.css';
import { JsonLd } from '@/components/JsonLd';
import { GlobalFormBehaviors } from '@/components/GlobalFormBehaviors';
import { CartProvider } from '@/context/CartContext';
import { Cart } from '@/components/Cart';
import { MessengerWidget } from '@/components/MessengerWidget';
import { localBusinessSchema } from '@/lib/schema';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ru" className={manrope.variable}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="theme-color" content="#12213A" />
        <JsonLd data={localBusinessSchema()} />
      </head>
      <body>
        <CartProvider>
          {children}
          <MessengerWidget />
          <Cart />
        </CartProvider>
        <GlobalFormBehaviors />
      </body>
    </html>
  );
}
