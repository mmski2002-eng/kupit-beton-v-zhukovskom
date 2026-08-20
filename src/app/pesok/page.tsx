import { metadataForContentPage, renderContentPage } from '@/lib/content-route';

const ref = { slug: 'pesok', file: 'content-pesok-hub.md', path: '/pesok/', crumb: 'Песок' };

export const metadata = metadataForContentPage(ref);

export default function PesokPage() {
  return renderContentPage(ref);
}
