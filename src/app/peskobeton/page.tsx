import { metadataForContentPage, renderContentPage } from '@/lib/content-route';

const ref = { slug: 'peskobeton', file: 'content-peskobeton-hub.md', path: '/peskobeton/', crumb: 'Пескобетон' };

export const metadata = metadataForContentPage(ref);

export default function PeskobetonPage() {
  return renderContentPage(ref);
}
