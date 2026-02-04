import { useParams, Navigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ServiceDetailTemplate } from '@/components/ServiceDetailTemplate'
import { getServiceBySlug } from '@/data/servicesData'
import { SEOHead } from '@/components/SEOHead'
import { useTranslation } from 'react-i18next'

const ServiceDetailPage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>()
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined
  const { t } = useTranslation()

  if (!service) {
    return <Navigate to="/404" replace />
  }

  const title = `${t(service.title)} | Metales Del Sureste Andaluz`
  const description = t(service.shortDescription)

  return (
    <HelmetProvider>
      <SEOHead
        title={title}
        description={description}
        canonical={`https://metalesdelsureste.com/servicio/${service.slug}`}
      />
      <ServiceDetailTemplate service={service} />
    </HelmetProvider>
  )
}

export default ServiceDetailPage
