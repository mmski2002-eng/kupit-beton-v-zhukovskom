import { metadataForContentPage, renderContentPage } from '@/lib/content-route';
import { trustPages } from '@/lib/content-pages';

const ref = trustPages[4];

export const metadata = metadataForContentPage(ref);

export default function ProizvodstvoPage() {
  return renderContentPage(ref);
}
