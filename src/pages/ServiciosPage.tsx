import { HelmetProvider } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SEOHead } from '@/components/SEOHead'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { servicesData } from '@/data/servicesData'
import { useTranslation } from 'react-i18next'

const ServiciosPage = () => {
  const { t } = useTranslation()

  return (
    <HelmetProvider>
      <SEOHead
        title={t('services_page.seo.title')}
        description={t('services_page.seo.description')}
      />
      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-32 lg:pt-48">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center max-w-4xl mx-auto"
              >
                <span className="tag-premium inline-flex items-center gap-2 mb-6">
                  <Sparkles className="w-4 h-4" />
                  {t('services_page.hero.badge')}
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-8 leading-tight">
                  {t('services_page.hero.title_start')}
                  <span className="text-gradient-gold">{t('services_page.hero.title_highlight')}</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  {t('services_page.hero.description')}
                </p>
                <div className="ornament-line mx-auto mt-10" />
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
              >
                {[
                  { value: '9', label: t('services_page.hero.stats.services') },
                  { value: '20+', label: t('services_page.hero.stats.years') },
                  { value: '500+', label: t('services_page.hero.stats.projects') },
                  { value: '100%', label: t('services_page.hero.stats.satisfaction') }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-2xl bg-card/60 backdrop-blur-md border border-border/50 shadow-lg">
                    <span className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">{stat.value}</span>
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {servicesData.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <motion.div
                      key={service.slug}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group"
                    >
                      <Link to={`/servicio/${service.slug}`} className="block h-full">
                        <div className="card-premium h-full rounded-3xl overflow-hidden relative">
                          {/* Background gradient on hover */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                          <div className="relative z-10 p-8 lg:p-10">
                            {/* Header */}
                            <div className="flex items-start gap-6 mb-6">
                              <div className="icon-container w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <Icon className="w-10 h-10 text-primary" />
                              </div>
                              <div>
                                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                                  {t(service.subtitle)}
                                </span>
                                <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mt-2 group-hover:text-gradient-gold transition-all duration-300">
                                  {t(service.title)}
                                </h2>
                              </div>
                            </div>

                            {/* Description */}
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                              {t(service.description)}
                            </p>

                            {/* Features preview */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                              {service.features.slice(0, 4).map((feature, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                  <span>{t(feature.title)}</span>
                                </div>
                              ))}
                            </div>

                            {/* CTA */}
                            <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all duration-300">
                              <span>{t('services_page.card.view_details')}</span>
                              <ArrowRight className="w-5 h-5" />
                            </div>
                          </div>

                          {/* Decorative corner */}
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-accent/10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card-premium rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden"
              >
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <span className="tag-premium inline-block mb-6">{t('services_page.cta.badge')}</span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                    {t('services_page.cta.title_start')}<span className="text-gradient-gold">{t('services_page.cta.title_highlight')}</span>{t('services_page.cta.title_end')}
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                    {t('services_page.cta.description')}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/contacto" className="btn-premium inline-flex items-center gap-2 text-lg px-8 py-4">
                      {t('services_page.cta.button_request')}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <a href="tel:+34653940750" className="btn-outline-premium inline-flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      +34 653 94 07 50
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </HelmetProvider>
  )
}

export default ServiciosPage
