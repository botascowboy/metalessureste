import { useParams, Navigate } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { ServicePageTemplate } from '@/components/ServicePageTemplate'
import { getTownBySlug } from '@/data/townsData'
import { useTranslation } from 'react-i18next'

const ServicePage = () => {
  const { townSlug } = useParams<{ townSlug: string }>()
  const town = townSlug ? getTownBySlug(townSlug) : undefined
  const { t } = useTranslation()

  if (!town) {
    return <Navigate to="/404" replace />
  }

  const title = `${t('nav.metal_carpentry')} en ${town.name} | Metales Del Sureste Andaluz`
  const description = t(town.description)

  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <link rel="canonical" href={`https://metalesdelsureste.com/servicios/${town.slug}`} />
      </Helmet>
      <ServicePageTemplate town={town} />
    </HelmetProvider>
  )
}

export default ServicePage
