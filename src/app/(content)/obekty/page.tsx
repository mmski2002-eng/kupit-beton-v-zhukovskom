import { metadataForContentPage, renderContentPage } from '@/lib/content-route';
import { trustPages } from '@/lib/content-pages';

const ref = trustPages[5];

export const metadata = metadataForContentPage(ref);

export default function ObektyPage() {
  return renderContentPage(ref);
}
