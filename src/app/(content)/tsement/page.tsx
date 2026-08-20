import { metadataForContentPage, renderContentPage } from '@/lib/content-route';
import { materialRootPages } from '@/lib/content-pages';

const ref = materialRootPages[3];

export const metadata = metadataForContentPage(ref);

export default function TsementPage() {
  return renderContentPage(ref);
}
