import { metadataForContentPage, renderContentPage } from '@/lib/content-route';
import { materialRootPages } from '@/lib/content-pages';

const ref = materialRootPages[4];

export const metadata = metadataForContentPage(ref);

export default function KeramzitPage() {
  return renderContentPage(ref);
}
