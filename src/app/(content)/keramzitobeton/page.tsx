import { metadataForContentPage, renderContentPage } from '@/lib/content-route';
import { materialRootPages } from '@/lib/content-pages';

const ref = materialRootPages[0];

export const metadata = metadataForContentPage(ref);

export default function KeramzitobetonPage() {
  return renderContentPage(ref);
}
