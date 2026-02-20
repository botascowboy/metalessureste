import { useParams, Navigate } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'
import { getTownBySlug } from '@/data/townsData'
import { useTranslation } from 'react-i18next'

const BASE_URL = 'https://metalesdelsureste.com'

const ServicePage = () => {
  const { townSlug } = useParams<{ townSlug: string }>()
  const town = townSlug ? getTownBySlug(townSlug) : undefined
  const { t, i18n } = useTranslation()

  if (!town) {
    return <Navigate to="/404" replace />
  }

  const isEs = i18n.language === 'es'
  const canonicalUrl = `${BASE_URL}/servicios/${town.slug}`
  const enAlternateUrl = `${BASE_URL}/en/services/${town.slug}`

  const title = isEs
    ? `Carpintería Metálica en ${town.name} | Metales Del Sureste Andaluz`
    : `Metal Carpentry in ${town.name} | Metales Del Sureste Andaluz`
  const description = t(town.description)

  // FAQs para el schema
  const faqKey = `carpinteria_faq.${town.slug}`
  const faqs = t(faqKey, { returnObjects: true }) as Array<{ q: string; a: string }>
  const safeFaqs = Array.isArray(faqs) ? faqs : []

  /* ── Rich Snippets ── */

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': canonicalUrl,
    name: `Carpintería Metálica en ${town.name} - Metales Del Sureste Andaluz`,
    description,
    url: canonicalUrl,
    telephone: '+34 653 94 07 50',
    email: 'info@metalesdelsureste.com',
    image: `${BASE_URL}/og-image.png`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: town.name,
      addressRegion: town.province,
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: town.lat,
      longitude: town.lng,
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
    priceRange: '€€',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: isEs ? 'Servicios de Carpintería Metálica' : 'Metal Carpentry Services',
      itemListElement: town.services.map(service => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: t(service),
        },
      })),
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: town.testimonial?.author ?? 'Cliente' },
        reviewRating: { '@type': 'Rating', ratingValue: '5' },
        reviewBody: town.testimonial ? t(town.testimonial.quote) : `Excelente servicio de carpintería metálica en ${town.name}.`,
      },
    ],
  }

  const faqSchema = safeFaqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: safeFaqs.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      }
    : null

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isEs ? 'Inicio' : 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: isEs ? 'Carpintería Metálica por Zona' : 'Metal Carpentry by Zone', item: `${BASE_URL}/carpinteria-metalica-zona` },
      { '@type': 'ListItem', position: 3, name: town.name, item: canonicalUrl },
    ],
  }

  return (
    <HelmetProvider>
      <Helmet>
        <html lang={isEs ? 'es' : 'en'} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`carpintería metálica ${town.name}, carpintería aluminio ${town.name}, estructuras metálicas ${town.province}, cerrajería ${town.name}, metalistería ${town.name}`} />

        {/* Canonical + hreflang */}
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="es" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href={enAlternateUrl} />
        <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${BASE_URL}/og-image.png`} />
        <meta property="og:locale" content={isEs ? 'es_ES' : 'en_US'} />
        <meta property="og:locale:alternate" content={isEs ? 'en_US' : 'es_ES'} />
        <meta property="og:site_name" content="Metales Del Sureste Andaluz" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${BASE_URL}/og-image.png`} />

        {/* Geo */}
        <meta name="geo.region" content="ES-AL" />
        <meta name="geo.placename" content={town.name} />
        <meta name="geo.position" content={`${town.lat};${town.lng}`} />
        <meta name="ICBM" content={`${town.lat}, ${town.lng}`} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <ServicePageTemplate town={town} />
    </HelmetProvider>
  )
}

export default ServicePage
