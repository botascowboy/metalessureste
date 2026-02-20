import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

const BASE_URL = 'https://metalesdelsureste.com'

interface SEOHeadProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  /** Pass the EN equivalent path (e.g. "/en/services") for hreflang alternate */
  enPath?: string
  /** Pass the ES path explicitly when it differs from canonical */
  esPath?: string
}

export const SEOHead = ({
  title,
  description,
  canonical = BASE_URL,
  ogImage = '/og-image.png',
  enPath,
  esPath,
}: SEOHeadProps) => {
  const { t, i18n } = useTranslation()

  const isEs = i18n.language === 'es'

  const defaultTitle = t('hero.title_start') + t('hero.title_highlight') + t('hero.title_end')
  const defaultDescription = t('hero.description')

  const finalTitle = title || defaultTitle
  const finalDescription = description || defaultDescription

  const fullTitle = finalTitle.length > 60 ? finalTitle.slice(0, 57) + '...' : finalTitle
  const fullDescription = finalDescription.length > 160 ? finalDescription.slice(0, 157) + '...' : finalDescription

  // hreflang URLs
  const esUrl = esPath ? `${BASE_URL}${esPath}` : canonical
  const enUrl = enPath ? `${BASE_URL}${enPath}` : undefined

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': BASE_URL,
    name: 'Metales Del Sureste Andaluz',
    description: fullDescription,
    url: BASE_URL,
    telephone: '+34 653 94 07 50',
    email: 'info@metalesdelsureste.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Polígono Industrial',
      addressLocality: 'Huércal-Overa',
      addressRegion: 'Andalucía',
      postalCode: '04600',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.3875,
      longitude: -1.9439,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '20:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '214',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      'https://www.facebook.com/metalesdelsureste',
      'https://www.instagram.com/metalesdelsureste',
      'https://www.linkedin.com/company/metalesdelsureste',
    ],
    priceRange: '€€',
    image: `${BASE_URL}${ogImage.startsWith('/') ? ogImage : '/' + ogImage}`,
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 37.3875,
        longitude: -1.9439,
      },
      geoRadius: '100000',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: t('nav.services'),
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: t('services_data.estructuras-metalicas.title') },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: t('services_data.carpinteria-aluminio.title') },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: t('services_data.cerrajeria.title') },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: t('services_data.forja-artistica.title') },
        },
      ],
    },
  }

  return (
    <Helmet>
      {/* Language */}
      <html lang={isEs ? 'es' : 'en'} />

      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={fullDescription} />
      <link rel="canonical" href={canonical} />

      {/* hreflang — always emit both; fall back gracefully when enPath not set */}
      <link rel="alternate" hrefLang="es" href={esUrl} />
      {enUrl && <link rel="alternate" hrefLang="en" href={enUrl} />}
      <link rel="alternate" hrefLang="x-default" href={esUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={`${BASE_URL}${ogImage.startsWith('/') ? ogImage : '/' + ogImage}`} />
      <meta property="og:locale" content={isEs ? 'es_ES' : 'en_US'} />
      {enUrl && <meta property="og:locale:alternate" content={isEs ? 'en_US' : 'es_ES'} />}
      <meta property="og:site_name" content="Metales Del Sureste Andaluz" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={`${BASE_URL}${ogImage.startsWith('/') ? ogImage : '/' + ogImage}`} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content="Metales Del Sureste Andaluz" />
      <meta name="geo.region" content="ES-AL" />
      <meta name="geo.placename" content="Almería" />
      <meta name="language" content={isEs ? 'Spanish' : 'English'} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  )
}
