import { metadataForContentPage, renderContentPage } from '@/lib/content-route';
import { trustPages } from '@/lib/content-pages';

const ref = trustPages[7];

export const metadata = metadataForContentPage(ref);

export default function SotrudnichestvoPage() {
  return renderContentPage(ref);
}
