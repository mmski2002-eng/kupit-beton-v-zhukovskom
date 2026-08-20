import { metadataForContentPage, renderContentPage } from '@/lib/content-route';

const ref = { slug: 'beton-100mm', file: 'content-beton-100mm.md', path: '/beton-100mm/', crumb: 'Бетон 100 мм' };

export const metadata = metadataForContentPage(ref);

export default function Beton100mmPage() {
  return renderContentPage(ref);
}
