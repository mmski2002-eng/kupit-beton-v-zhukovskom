import { metadataForContentPage, renderContentPage } from '@/lib/content-route';
import { trustPages } from '@/lib/content-pages';

const ref = trustPages[6];

export const metadata = metadataForContentPage(ref);

export default function OtzyvyPage() {
  return renderContentPage(ref);
}
