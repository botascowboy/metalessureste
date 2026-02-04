import { Building2, DoorOpen, Lock, Wrench, Sparkles, Fence, GlassWater, Hammer, LucideIcon } from 'lucide-react'

export interface ServiceData {
  slug: string
  title: string
  shortDescription: string
  icon: LucideIcon
  heroImage: string
  description: string
  benefits: string[]
  features: {
    title: string
    description: string
  }[]
  gallery: {
    src: string
    alt: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
  subtitle: string
}

export const servicesData: ServiceData[] = [
  {
    slug: 'estructuras-metalicas',
    title: 'services_data.estructuras-metalicas.title',
    shortDescription: 'services_data.estructuras-metalicas.short_description',
    icon: Building2,
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200',
    description: 'services_data.estructuras-metalicas.description',
    benefits: ['services_data.estructuras-metalicas.benefits.0', 'services_data.estructuras-metalicas.benefits.1', 'services_data.estructuras-metalicas.benefits.2', 'services_data.estructuras-metalicas.benefits.3', 'services_data.estructuras-metalicas.benefits.4', 'services_data.estructuras-metalicas.benefits.5'],
    features: [
      { title: 'services_data.estructuras-metalicas.features.0.title', description: 'services_data.estructuras-metalicas.features.0.description' },
      { title: 'services_data.estructuras-metalicas.features.1.title', description: 'services_data.estructuras-metalicas.features.1.description' },
      { title: 'services_data.estructuras-metalicas.features.2.title', description: 'services_data.estructuras-metalicas.features.2.description' },
      { title: 'services_data.estructuras-metalicas.features.3.title', description: 'services_data.estructuras-metalicas.features.3.description' }
    ],
    gallery: [{ src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800', alt: 'services_data.estructuras-metalicas.title' }],
    faqs: [
      { question: 'services_data.estructuras-metalicas.faqs.0.question', answer: 'services_data.estructuras-metalicas.faqs.0.answer' },
      { question: 'services_data.estructuras-metalicas.faqs.1.question', answer: 'services_data.estructuras-metalicas.faqs.1.answer' },
      { question: 'services_data.estructuras-metalicas.faqs.2.question', answer: 'services_data.estructuras-metalicas.faqs.2.answer' }
    ],
    subtitle: 'services_data.estructuras-metalicas.subtitle',
  },
  {
    slug: 'carpinteria-aluminio',
    title: 'services_data.carpinteria-aluminio.title',
    shortDescription: 'services_data.carpinteria-aluminio.short_description',
    icon: DoorOpen,
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200',
    description: 'services_data.carpinteria-aluminio.description',
    benefits: ['services_data.carpinteria-aluminio.benefits.0', 'services_data.carpinteria-aluminio.benefits.1', 'services_data.carpinteria-aluminio.benefits.2', 'services_data.carpinteria-aluminio.benefits.3', 'services_data.carpinteria-aluminio.benefits.4', 'services_data.carpinteria-aluminio.benefits.5'],
    features: [
      { title: 'services_data.carpinteria-aluminio.features.0.title', description: 'services_data.carpinteria-aluminio.features.0.description' },
      { title: 'services_data.carpinteria-aluminio.features.1.title', description: 'services_data.carpinteria-aluminio.features.1.description' },
      { title: 'services_data.carpinteria-aluminio.features.2.title', description: 'services_data.carpinteria-aluminio.features.2.description' },
      { title: 'services_data.carpinteria-aluminio.features.3.title', description: 'services_data.carpinteria-aluminio.features.3.description' }
    ],
    gallery: [{ src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800', alt: 'services_data.carpinteria-aluminio.title' }],
    faqs: [
      { question: 'services_data.carpinteria-aluminio.faqs.0.question', answer: 'services_data.carpinteria-aluminio.faqs.0.answer' },
      { question: 'services_data.carpinteria-aluminio.faqs.1.question', answer: 'services_data.carpinteria-aluminio.faqs.1.answer' },
      { question: 'services_data.carpinteria-aluminio.faqs.2.question', answer: 'services_data.carpinteria-aluminio.faqs.2.answer' }
    ],
    subtitle: 'services_data.carpinteria-aluminio.subtitle',
  },
  {
    slug: 'cerrajeria',
    title: 'services_data.cerrajeria.title',
    shortDescription: 'services_data.cerrajeria.short_description',
    icon: Lock,
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200',
    description: 'services_data.cerrajeria.description',
    benefits: ['services_data.cerrajeria.benefits.0', 'services_data.cerrajeria.benefits.1', 'services_data.cerrajeria.benefits.2', 'services_data.cerrajeria.benefits.3', 'services_data.cerrajeria.benefits.4', 'services_data.cerrajeria.benefits.5'],
    features: [
      { title: 'services_data.cerrajeria.features.0.title', description: 'services_data.cerrajeria.features.0.description' },
      { title: 'services_data.cerrajeria.features.1.title', description: 'services_data.cerrajeria.features.1.description' },
      { title: 'services_data.cerrajeria.features.2.title', description: 'services_data.cerrajeria.features.2.description' },
      { title: 'services_data.cerrajeria.features.3.title', description: 'services_data.cerrajeria.features.3.description' }
    ],
    gallery: [{ src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', alt: 'services_data.cerrajeria.title' }],
    faqs: [
      { question: 'services_data.cerrajeria.faqs.0.question', answer: 'services_data.cerrajeria.faqs.0.answer' },
      { question: 'services_data.cerrajeria.faqs.1.question', answer: 'services_data.cerrajeria.faqs.1.answer' },
      { question: 'services_data.cerrajeria.faqs.2.question', answer: 'services_data.cerrajeria.faqs.2.answer' }
    ],
    subtitle: 'services_data.cerrajeria.subtitle',
  },
  {
    slug: 'automatizacion',
    title: 'services_data.automatizacion.title',
    shortDescription: 'services_data.automatizacion.short_description',
    icon: Wrench,
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200',
    description: 'services_data.automatizacion.description',
    benefits: ['services_data.automatizacion.benefits.0', 'services_data.automatizacion.benefits.1', 'services_data.automatizacion.benefits.2', 'services_data.automatizacion.benefits.3', 'services_data.automatizacion.benefits.4', 'services_data.automatizacion.benefits.5'],
    features: [
      { title: 'services_data.automatizacion.features.0.title', description: 'services_data.automatizacion.features.0.description' },
      { title: 'services_data.automatizacion.features.1.title', description: 'services_data.automatizacion.features.1.description' },
      { title: 'services_data.automatizacion.features.2.title', description: 'services_data.automatizacion.features.2.description' },
      { title: 'services_data.automatizacion.features.3.title', description: 'services_data.automatizacion.features.3.description' }
    ],
    gallery: [{ src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800', alt: 'services_data.automatizacion.title' }],
    faqs: [
      { question: 'services_data.automatizacion.faqs.0.question', answer: 'services_data.automatizacion.faqs.0.answer' },
      { question: 'services_data.automatizacion.faqs.1.question', answer: 'services_data.automatizacion.faqs.1.answer' },
      { question: 'services_data.automatizacion.faqs.2.question', answer: 'services_data.automatizacion.faqs.2.answer' }
    ],
    subtitle: 'services_data.automatizacion.subtitle',
  },
  {
    slug: 'forja-artistica',
    title: 'services_data.forja-artistica.title',
    shortDescription: 'services_data.forja-artistica.short_description',
    icon: Sparkles,
    heroImage: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200',
    description: 'services_data.forja-artistica.description',
    benefits: ['services_data.forja-artistica.benefits.0', 'services_data.forja-artistica.benefits.1', 'services_data.forja-artistica.benefits.2', 'services_data.forja-artistica.benefits.3', 'services_data.forja-artistica.benefits.4', 'services_data.forja-artistica.benefits.5'],
    features: [
      { title: 'services_data.forja-artistica.features.0.title', description: 'services_data.forja-artistica.features.0.description' },
      { title: 'services_data.forja-artistica.features.1.title', description: 'services_data.forja-artistica.features.1.description' },
      { title: 'services_data.forja-artistica.features.2.title', description: 'services_data.forja-artistica.features.2.description' },
      { title: 'services_data.forja-artistica.features.3.title', description: 'services_data.forja-artistica.features.3.description' }
    ],
    gallery: [{ src: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800', alt: 'services_data.forja-artistica.title' }],
    faqs: [
      { question: 'services_data.forja-artistica.faqs.0.question', answer: 'services_data.forja-artistica.faqs.0.answer' },
      { question: 'services_data.forja-artistica.faqs.1.question', answer: 'services_data.forja-artistica.faqs.1.answer' },
      { question: 'services_data.forja-artistica.faqs.2.question', answer: 'services_data.forja-artistica.faqs.2.answer' }
    ],
    subtitle: 'services_data.forja-artistica.subtitle',
  },
  {
    slug: 'mobiliario-urbano',
    title: 'services_data.mobiliario-urbano.title',
    shortDescription: 'services_data.mobiliario-urbano.short_description',
    icon: Fence,
    heroImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200',
    description: 'services_data.mobiliario-urbano.description',
    benefits: ['services_data.mobiliario-urbano.benefits.0', 'services_data.mobiliario-urbano.benefits.1', 'services_data.mobiliario-urbano.benefits.2', 'services_data.mobiliario-urbano.benefits.3', 'services_data.mobiliario-urbano.benefits.4', 'services_data.mobiliario-urbano.benefits.5'],
    features: [
      { title: 'services_data.mobiliario-urbano.features.0.title', description: 'services_data.mobiliario-urbano.features.0.description' },
      { title: 'services_data.mobiliario-urbano.features.1.title', description: 'services_data.mobiliario-urbano.features.1.description' },
      { title: 'services_data.mobiliario-urbano.features.2.title', description: 'services_data.mobiliario-urbano.features.2.description' },
      { title: 'services_data.mobiliario-urbano.features.3.title', description: 'services_data.mobiliario-urbano.features.3.description' }
    ],
    gallery: [{ src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800', alt: 'services_data.mobiliario-urbano.title' }],
    faqs: [
      { question: 'services_data.mobiliario-urbano.faqs.0.question', answer: 'services_data.mobiliario-urbano.faqs.0.answer' },
      { question: 'services_data.mobiliario-urbano.faqs.1.question', answer: 'services_data.mobiliario-urbano.faqs.1.answer' },
      { question: 'services_data.mobiliario-urbano.faqs.2.question', answer: 'services_data.mobiliario-urbano.faqs.2.answer' }
    ],
    subtitle: 'services_data.mobiliario-urbano.subtitle',
  },
  {
    slug: 'manipulado-vidrio',
    title: 'services_data.manipulado-vidrio.title',
    shortDescription: 'services_data.manipulado-vidrio.short_description',
    icon: GlassWater,
    heroImage: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200',
    description: 'services_data.manipulado-vidrio.description',
    benefits: ['services_data.manipulado-vidrio.benefits.0', 'services_data.manipulado-vidrio.benefits.1', 'services_data.manipulado-vidrio.benefits.2', 'services_data.manipulado-vidrio.benefits.3', 'services_data.manipulado-vidrio.benefits.4', 'services_data.manipulado-vidrio.benefits.5'],
    features: [
      { title: 'services_data.manipulado-vidrio.features.0.title', description: 'services_data.manipulado-vidrio.features.0.description' },
      { title: 'services_data.manipulado-vidrio.features.1.title', description: 'services_data.manipulado-vidrio.features.1.description' },
      { title: 'services_data.manipulado-vidrio.features.2.title', description: 'services_data.manipulado-vidrio.features.2.description' },
      { title: 'services_data.manipulado-vidrio.features.3.title', description: 'services_data.manipulado-vidrio.features.3.description' }
    ],
    gallery: [{ src: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800', alt: 'services_data.manipulado-vidrio.title' }],
    faqs: [
      { question: 'services_data.manipulado-vidrio.faqs.0.question', answer: 'services_data.manipulado-vidrio.faqs.0.answer' },
      { question: 'services_data.manipulado-vidrio.faqs.1.question', answer: 'services_data.manipulado-vidrio.faqs.1.answer' },
      { question: 'services_data.manipulado-vidrio.faqs.2.question', answer: 'services_data.manipulado-vidrio.faqs.2.answer' }
    ],
    subtitle: 'services_data.manipulado-vidrio.subtitle',
  },
  {
    slug: 'metalisteria',
    title: 'services_data.metalisteria.title',
    shortDescription: 'services_data.metalisteria.short_description',
    icon: Hammer,
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200',
    description: 'services_data.metalisteria.description',
    benefits: ['services_data.metalisteria.benefits.0', 'services_data.metalisteria.benefits.1', 'services_data.metalisteria.benefits.2', 'services_data.metalisteria.benefits.3', 'services_data.metalisteria.benefits.4', 'services_data.metalisteria.benefits.5'],
    features: [
      { title: 'services_data.metalisteria.features.0.title', description: 'services_data.metalisteria.features.0.description' },
      { title: 'services_data.metalisteria.features.1.title', description: 'services_data.metalisteria.features.1.description' },
      { title: 'services_data.metalisteria.features.2.title', description: 'services_data.metalisteria.features.2.description' },
      { title: 'services_data.metalisteria.features.3.title', description: 'services_data.metalisteria.features.3.description' }
    ],
    gallery: [{ src: 'https://images.unsplash.com/photo-558618666-fcd25c85cd64?w=800', alt: 'services_data.metalisteria.title' }],
    faqs: [
      { question: 'services_data.metalisteria.faqs.0.question', answer: 'services_data.metalisteria.faqs.0.answer' },
      { question: 'services_data.metalisteria.faqs.1.question', answer: 'services_data.metalisteria.faqs.1.answer' },
      { question: 'services_data.metalisteria.faqs.2.question', answer: 'services_data.metalisteria.faqs.2.answer' }
    ],
    subtitle: 'services_data.metalisteria.subtitle',
  },
]

export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return servicesData.find(service => service.slug === slug)
}

export const getAllServiceSlugs = (): string[] => {
  return servicesData.map(service => service.slug)
}
