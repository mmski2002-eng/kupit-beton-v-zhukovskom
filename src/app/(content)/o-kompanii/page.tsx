import { metadataForContentPage, renderContentPage } from '@/lib/content-route';
import { trustPages } from '@/lib/content-pages';

const ref = trustPages[0];

export const metadata = metadataForContentPage(ref);

export default function OKompaniiPage() {
  return renderContentPage(ref);
}
