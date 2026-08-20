import styles from './PlaceholderVisual.module.css';

export type PlaceholderVisualKind =
  | 'production'
  | 'mixer'
  | 'pump'
  | 'lab'
  | 'foundation'
  | 'floor'
  | 'aggregate'
  | 'team'
  | 'winter'
  | 'waterproof'
  | 'mortar'
  | 'document';

const visuals: Record<PlaceholderVisualKind, { src: string; alt: string; caption: string }> = {
  production: {
    src: '/images/placeholders/production-bsu.svg',
    alt: 'Временное изображение производственной линии БСУ',
    caption: 'Временная SVG-заглушка: производство и отгрузка бетона',
  },
  mixer: {
    src: '/images/placeholders/mixer-delivery.svg',
    alt: 'Временное изображение автобетоносмесителя на объекте',
    caption: 'Временная SVG-заглушка: миксер на доставке',
  },
  pump: {
    src: '/images/placeholders/concrete-pump.svg',
    alt: 'Временное изображение бетононасоса на объекте',
    caption: 'Временная SVG-заглушка: подача бетона насосом',
  },
  lab: {
    src: '/images/placeholders/lab-passport.svg',
    alt: 'Временное изображение лаборатории и паспорта качества',
    caption: 'Временная SVG-заглушка: лаборатория и паспорт качества',
  },
  foundation: {
    src: '/images/placeholders/object-foundation.svg',
    alt: 'Временное изображение заливки ленточного фундамента',
    caption: 'Временная SVG-заглушка: заливка фундамента',
  },
  floor: {
    src: '/images/placeholders/object-floor.svg',
    alt: 'Временное изображение бетонного пола, стяжки или площадки',
    caption: 'Временная SVG-заглушка: пол, стяжка, площадка',
  },
  aggregate: {
    src: '/images/placeholders/aggregate-gravel.svg',
    alt: 'Временное изображение щебня и заполнителей для бетона',
    caption: 'Временная SVG-заглушка: щебень и заполнители',
  },
  team: {
    src: '/images/placeholders/team-placeholder.svg',
    alt: 'Временное изображение команды производства, лаборатории и отдела продаж',
    caption: 'Временная SVG-заглушка: команда компании',
  },
  winter: {
    src: '/images/placeholders/winter-concrete.svg',
    alt: 'Временное изображение зимней заливки морозостойкого бетона',
    caption: 'Временная SVG-заглушка: морозостойкий бетон',
  },
  waterproof: {
    src: '/images/placeholders/waterproof-basement.svg',
    alt: 'Временное изображение водонепроницаемого бетона для подвала или бассейна',
    caption: 'Временная SVG-заглушка: водонепроницаемый бетон',
  },
  mortar: {
    src: '/images/placeholders/mortar-work.svg',
    alt: 'Временное изображение кладочных и штукатурных работ с цементным раствором',
    caption: 'Временная SVG-заглушка: цементный раствор в работе',
  },
  document: {
    src: '/images/placeholders/certificate-doc.svg',
    alt: 'Временное изображение сертификата или паспорта качества',
    caption: 'Временная SVG-заглушка: сертификаты и документы',
  },
};

type Props = {
  kind: PlaceholderVisualKind;
  caption?: string;
  priority?: boolean;
  className?: string;
};

export function PlaceholderVisual({ kind, caption, priority = false, className = '' }: Props) {
  const visual = visuals[kind];

  return (
    <figure className={`${styles.figure} ${className}`}>
      <img src={visual.src} alt={visual.alt} width="960" height="540" loading={priority ? 'eager' : 'lazy'} />
      <figcaption>{caption ?? visual.caption}</figcaption>
    </figure>
  );
}
