import { motion } from 'framer-motion'
import { Phone, Clock, Shield, CheckCircle, MapPin, Wrench, Key, Lock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import type { Locksmith24hTown } from '@/data/locksmith24hData'
import { useTranslation, Trans } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

interface Locksmith24hTemplateProps {
  town: Locksmith24hTown
}

export const Locksmith24hTemplate = ({ town }: Locksmith24hTemplateProps) => {
  const { t } = useTranslation()

  const handleCall = () => {
    window.location.href = `tel:${town.phoneNumber.replace(/\s/g, '')}`
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{t(town.metaTitle)}</title>
        <meta name="description" content={t(town.metaDescription)} />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section - Emergency Focus */}
        <section className="relative pt-56 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-background to-background" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Emergency Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 mb-6"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                {t('home.hero.badge', 'Servicio de Urgencias 24/7')}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
              >
                {t(town.heroTitle)}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-muted-foreground mb-8"
              >
                {t(town.heroSubtitle)}
              </motion.p>

              {/* Response Time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap justify-center gap-6 mb-10"
              >
                <div className="flex items-center gap-2 text-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-semibold">{t('common.arrival_in', 'Llegamos en')} {t(town.responseTime)}</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-semibold">{town.name}, {town.province}</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0"
              >
                <Button
                  size="lg"
                  onClick={handleCall}
                  className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl shadow-lg shadow-red-600/30"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {t('common.call_now')}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleCall}
                  className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl"
                >
                  {town.phoneNumber}
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Emergency Features */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {town.emergencyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center p-4 rounded-xl bg-background border border-border/50"
                >
                  <CheckCircle className="w-8 h-8 text-green-500 mb-3" />
                  <span className="text-sm font-medium text-foreground">{t(feature)}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {t('common.professional_locksmiths')} {t('common.in')} {town.name}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t(town.description)}
                </p>
              </motion.div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {town.services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Key className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{t(service)}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('about_page.values.title_highlight')} {t('about_page.cta.title_start')}?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('locksmith_page.why_choose_us_desc', { town: town.name })}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-background border border-border/50"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{t('common.immediate_response', 'Respuesta Inmediata')}</h3>
                <p className="text-muted-foreground">
                  {t('common.arrival_in')} {t(town.responseTime)}. {t('locksmith_page.availability_desc', 'Servicio disponible las 24 horas, todos los días del año.')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center p-8 rounded-2xl bg-background border border-border/50"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Wrench className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{t('common.expert_professionals', 'Profesionales Expertos')}</h3>
                <p className="text-muted-foreground">
                  {t('locksmith_page.experts_desc', 'Técnicos certificados con años de experiencia. Aperturas sin daños y trabajos garantizados.')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center p-8 rounded-2xl bg-background border border-border/50"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{t('common.fair_prices', 'Precios Justos')}</h3>
                <p className="text-muted-foreground">
                  {t('locksmith_page.prices_desc', 'Presupuesto sin compromiso antes de empezar. Sin sorpresas ni costes ocultos.')}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-red-600/20 to-primary/20 border border-red-500/20"
            >
              <Lock className="w-16 h-16 text-red-500 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('locksmith_page.locked_out_title', '¿Te has quedado fuera de casa?')}
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                {t('locksmith_page.locked_out_desc', { town: town.name })}
              </p>
              <div className="flex flex-col gap-4 justify-center px-4 sm:px-0">
                <Button
                  size="lg"
                  onClick={handleCall}
                  className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-6 rounded-xl shadow-lg shadow-red-600/30"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  <span className="sm:hidden">{t('common.call_now')}</span>
                  <span className="hidden sm:inline">{t('common.call_us')}: {town.phoneNumber}</span>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Local SEO Section */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {t('common.urgent_locksmith_service')} {t('common.in')} {town.name}, {town.province}
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-muted-foreground mb-4">
                    <Trans
                      i18nKey="locksmith_page.seo_desc_1"
                      values={{ town: town.name }}
                      components={{ strong: <strong /> }}
                      defaults="Si necesitas un <strong>cerrajero urgente en {{town}}</strong>, has llegado al lugar correcto. Nuestro equipo de profesionales está disponible las <strong>24 horas del día, los 365 días del año</strong> para atender cualquier emergencia de cerrajería en {{town}} y alrededores."
                    />
                  </p>
                  <p className="text-muted-foreground mb-4">
                    <Trans
                      i18nKey="locksmith_page.seo_desc_2"
                      values={{ town: town.name }}
                      components={{ strong: <strong /> }}
                      defaults="Ofrecemos servicios de <strong>apertura de puertas en {{town}}</strong> sin causar daños, <strong>cambio de cerraduras</strong>, instalación de <strong>cerraduras de alta seguridad</strong>, reparación de cerrojos y mucho más. Somos especialistas en todo tipo de cerraduras y sistemas de seguridad."
                    />
                  </p>
                  <p className="text-muted-foreground">
                    <Trans
                      i18nKey="locksmith_page.seo_desc_3"
                      values={{ town: town.name }}
                      components={{ strong: <strong /> }}
                      defaults="Contamos con técnicos locales que conocen perfectamente la zona de {{town}}, lo que nos permite llegar rápidamente a tu ubicación. No importa la hora ni el día, siempre tendrás un <strong>cerrajero de confianza en {{town}}</strong> a tu disposición."
                    />
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <section className="py-12">
          <div className="container mx-auto px-6 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              {t('legal_page.hero.back')}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
