import { metadataForContentPage, renderContentPage } from '@/lib/content-route';

const ref = { slug: 'rastvor', file: 'content-rastvor-hub.md', path: '/rastvor/', crumb: 'Раствор' };

export const metadata = metadataForContentPage(ref);

export default function RastvorPage() {
  return renderContentPage(ref);
}
