import { useParams, Navigate } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { Locksmith24hTemplate } from '@/components/Locksmith24hTemplate'
import { getLocksmith24hBySlug } from '@/data/locksmith24hData'
import { useTranslation } from 'react-i18next'

const BASE_URL = 'https://metalesdelsureste.com'

const Locksmith24hPage = () => {
  const { townSlug } = useParams<{ townSlug: string }>()
  const town = townSlug ? getLocksmith24hBySlug(townSlug) : undefined
  const { t, i18n } = useTranslation()

  if (!town) {
    return <Navigate to="/404" replace />
  }

  const isEs = i18n.language === 'es'
  const canonicalUrl = `${BASE_URL}/cerrajero-24h/${town.slug}`
  const enAlternateUrl = `${BASE_URL}/en/locksmith-24h/${town.slug}`

  // FAQ data (mirrors Locksmith24hTemplate FAQs)
  const faqItems = [
    {
      question: t('locksmith_faq.q1', { town: town.name }),
      answer: t('locksmith_faq.a1', { town: town.name, time: t(town.responseTime) }),
    },
    {
      question: t('locksmith_faq.q2', { town: town.name }),
      answer: t('locksmith_faq.a2'),
    },
    {
      question: t('locksmith_faq.q3'),
      answer: t('locksmith_faq.a3'),
    },
    {
      question: t('locksmith_faq.q4'),
      answer: t('locksmith_faq.a4'),
    },
    {
      question: t('locksmith_faq.q5', { town: town.name }),
      answer: t('locksmith_faq.a5', { town: town.name }),
    },
    {
      question: t('locksmith_faq.q6'),
      answer: t('locksmith_faq.a6'),
    },
  ]

  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    '@id': canonicalUrl,
    name: `Cerrajero 24 Horas ${town.name} - Metales Del Sureste Andaluz`,
    description: t(town.metaDescription),
    url: canonicalUrl,
    telephone: town.phoneNumber,
    image: `${BASE_URL}/og-image.png`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: town.name,
      addressRegion: town.province,
      addressCountry: 'ES'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: town.lat,
      longitude: town.lng
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59'
    },
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Credit Card',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'María G.' },
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
        reviewBody: `Cerrajero rapidísimo en ${town.name}. Llegaron en menos de 20 minutos y abrieron la puerta sin daños. Muy profesionales.`
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Carlos M.' },
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
        reviewBody: 'Servicio excelente a las 3 de la mañana. Precio justo y trabajo impecable. Lo recomiendo sin dudar.'
      }
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: town.lat,
        longitude: town.lng
      },
      geoRadius: '30000'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: t('locksmith_zones_page.info.title'),
      itemListElement: town.services.map(service => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: t(service)
        }
      }))
    }
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: BASE_URL
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Cerrajero 24h',
        item: `${BASE_URL}/cerrajero-24h`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `Cerrajero 24h ${town.name}`,
        item: canonicalUrl
      }
    ]
  }

  return (
    <HelmetProvider>
      <Helmet>
        <html lang={isEs ? 'es' : 'en'} />
        <title>{t(town.metaTitle)}</title>
        <meta name="description" content={t(town.metaDescription)} />
        <meta name="keywords" content={`cerrajero 24 horas ${town.name}, cerrajero urgente ${town.name}, apertura puertas ${town.name}, cerrajería ${town.name}, cerrajero ${town.province}`} />

        {/* Canonical + hreflang */}
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="es" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href={enAlternateUrl} />
        <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={t(town.metaTitle)} />
        <meta property="og:description" content={t(town.metaDescription)} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content={isEs ? 'es_ES' : 'en_US'} />
        <meta property="og:locale:alternate" content={isEs ? 'en_US' : 'es_ES'} />
        <meta property="og:site_name" content="Metales Del Sureste Andaluz" />
        <meta property="og:image" content={`${BASE_URL}/og-image.png`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t(town.metaTitle)} />
        <meta name="twitter:description" content={t(town.metaDescription)} />
        <meta name="twitter:image" content={`${BASE_URL}/og-image.png`} />

        {/* Geo Tags */}
        <meta name="geo.region" content="ES-AL" />
        <meta name="geo.placename" content={town.name} />
        <meta name="geo.position" content={`${town.lat};${town.lng}`} />
        <meta name="ICBM" content={`${town.lat}, ${town.lng}`} />

        {/* Robots */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* Structured Data - LocalBusiness / Locksmith */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessData)}
        </script>

        {/* Structured Data - FAQPage */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>

        {/* Structured Data - BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      <Locksmith24hTemplate town={town} />
    </HelmetProvider>
  )
}

export default Locksmith24hPage
