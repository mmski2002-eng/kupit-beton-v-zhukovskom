import { metadataForContentPage, renderContentPage } from '@/lib/content-route';
import { trustPages } from '@/lib/content-pages';

const ref = trustPages[1];

export const metadata = metadataForContentPage(ref);

export default function KontrolKachestvaPage() {
  return renderContentPage(ref);
}
