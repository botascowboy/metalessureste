import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

interface SEOHeadProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
}

export const SEOHead = ({
  title,
  description,
  canonical = 'https://metalesdelsureste.com',
  ogImage = '/og-image.png',
}: SEOHeadProps) => {
  const { t, i18n } = useTranslation()

  const defaultTitle = t('hero.title_start') + t('hero.title_highlight') + t('hero.title_end')
  const defaultDescription = t('hero.description')

  const finalTitle = title || defaultTitle
  const finalDescription = description || defaultDescription

  const fullTitle = finalTitle.length > 60 ? finalTitle.slice(0, 57) + '...' : finalTitle
  const fullDescription = finalDescription.length > 160 ? finalDescription.slice(0, 157) + '...' : finalDescription

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': canonical,
    name: 'Metales Del Sureste Andaluz',
    description: fullDescription,
    url: canonical,
    telephone: '+34 653 94 07 50',
    email: 'info@metalesdelsureste.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Polígono Industrial',
      addressLocality: 'Almería',
      addressRegion: 'Andalucía',
      postalCode: '04001',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.8340,
      longitude: -2.4637,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '20:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/metalesdelsureste',
      'https://www.instagram.com/metalesdelsureste',
      'https://www.linkedin.com/company/metalesdelsureste',
    ],
    priceRange: '€€',
    image: ogImage,
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 36.8340,
        longitude: -2.4637,
      },
      geoRadius: '100000',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: t('nav.services'),
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: t('services_data.estructuras-metalicas.title'),
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: t('services_data.carpinteria-aluminio.title'),
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: t('services_data.cerrajeria.title'),
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: t('services_data.forja-artistica.title'),
          },
        },
      ],
    },
  }

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={fullDescription} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={i18n.language === 'es' ? 'es_ES' : 'en_US'} />
      <meta property="og:site_name" content="Metales Del Sureste Andaluz" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content="Metales Del Sureste Andaluz" />
      <meta name="geo.region" content="ES-AL" />
      <meta name="geo.placename" content="Almería" />
      <meta name="language" content={i18n.language === 'es' ? 'Spanish' : 'English'} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  )
}

