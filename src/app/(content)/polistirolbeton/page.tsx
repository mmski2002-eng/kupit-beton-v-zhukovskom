import { metadataForContentPage, renderContentPage } from '@/lib/content-route';
import { materialRootPages } from '@/lib/content-pages';

const ref = materialRootPages[2];

export const metadata = metadataForContentPage(ref);

export default function PolistirolbetonPage() {
  return renderContentPage(ref);
}
