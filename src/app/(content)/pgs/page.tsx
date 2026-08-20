import { metadataForContentPage, renderContentPage } from '@/lib/content-route';
import { materialRootPages } from '@/lib/content-pages';

const ref = materialRootPages[5];

export const metadata = metadataForContentPage(ref);

export default function PgsPage() {
  return renderContentPage(ref);
}
