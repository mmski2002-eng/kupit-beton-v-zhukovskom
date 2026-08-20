import { company } from '@/data/site';

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.legalName,
    alternateName: `Бетонный завод «${company.brand}»`,
    url: company.site,
    telephone: company.phone,
    email: company.email,
    foundingDate: String(company.since),
    priceRange: 'от 4150 ₽/м³',
    areaServed: ['Жуковский', 'Раменский округ', 'Раменское', 'Быково', 'Кратово', 'Малаховка', 'Удельная', 'Ильинский', 'Лыткарино'],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: company.opens,
      closes: company.closes,
    },
    identifier: [
      { '@type': 'PropertyValue', name: 'ИНН', value: company.inn },
      { '@type': 'PropertyValue', name: 'ОГРН', value: company.ogrn },
    ],
  };
}

export function faqPageSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function productSchema(input: {
  name: string;
  description: string;
  sku: string;
  offers: { name: string; price: number; url: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: input.name,
    description: input.description,
    brand: { '@type': 'Brand', name: company.brand },
    sku: input.sku,
    offers: input.offers.map((offer) => ({
      '@type': 'Offer',
      name: offer.name,
      price: String(offer.price),
      priceCurrency: 'RUB',
      availability: 'https://schema.org/InStock',
      url: new URL(offer.url, company.site).href,
      seller: { '@type': 'Organization', name: company.legalName },
    })),
  };
}

export function articleSchema(input: { title: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    author: { '@type': 'Organization', name: company.legalName },
    publisher: { '@type': 'Organization', name: company.legalName },
    mainEntityOfPage: new URL(input.url, company.site).href,
  };
}

export function serviceSchema(input: { serviceType: string; areaServed: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: input.serviceType,
    provider: { '@type': 'Organization', name: company.legalName },
    areaServed: input.areaServed,
  };
}

export function breadcrumbListSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: new URL(item.url, company.site).href,
    })),
  };
}
