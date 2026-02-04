import { useParams, Navigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ServiceDetailTemplate } from '@/components/ServiceDetailTemplate'
import { getServiceBySlug } from '@/data/servicesData'
import { SEOHead } from '@/components/SEOHead'

const ServiceDetailPage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>()
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined

  if (!service) {
    return <Navigate to="/404" replace />
  }

  return (
    <HelmetProvider>
      <SEOHead
        title={`${service.title} | Metales Del Sureste Andaluz`}
        description={service.shortDescription}
        canonical={`https://metalesdelsureste.com/servicio/${service.slug}`}
      />
      <ServiceDetailTemplate service={service} />
    </HelmetProvider>
  )
}

export default ServiceDetailPage
