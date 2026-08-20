import { metadataForContentPage, renderContentPage } from '@/lib/content-route';

const ref = { slug: 'shcheben', file: 'content-shcheben-hub.md', path: '/shcheben/', crumb: 'Щебень' };

export const metadata = metadataForContentPage(ref);

export default function ShchebenPage() {
  return renderContentPage(ref);
}
