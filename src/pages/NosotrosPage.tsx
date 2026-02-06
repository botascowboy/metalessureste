import { HelmetProvider } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Award, Users, Clock, Shield, Target, Heart, ArrowRight, CheckCircle2, Building2, Wrench } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SEOHead } from '@/components/SEOHead'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { useTranslation } from 'react-i18next'

const NosotrosPage = () => {
  const { t } = useTranslation()

  const values = [
    {
      icon: Shield,
      title: t('about_page.values.items.quality.title'),
      description: t('about_page.values.items.quality.description')
    },
    {
      icon: Users,
      title: t('about_page.values.items.professionalism.title'),
      description: t('about_page.values.items.professionalism.description')
    },
    {
      icon: Clock,
      title: t('about_page.values.items.punctuality.title'),
      description: t('about_page.values.items.punctuality.description')
    },
    {
      icon: Heart,
      title: t('about_page.values.items.commitment.title'),
      description: t('about_page.values.items.commitment.description')
    }
  ]

  const milestones = [
    { year: '2012', title: t('about_page.milestones.items.2012.title'), description: t('about_page.milestones.items.2012.description') },
    { year: '2015', title: t('about_page.milestones.items.2015.title'), description: t('about_page.milestones.items.2015.description') },
    { year: '2018', title: t('about_page.milestones.items.2018.title'), description: t('about_page.milestones.items.2018.description') },
    { year: '2020', title: t('about_page.milestones.items.2020.title'), description: t('about_page.milestones.items.2020.description') },
    { year: '2023', title: t('about_page.milestones.items.2023.title'), description: t('about_page.milestones.items.2023.description') }
  ]

  const stats = [
    { value: '12+', label: t('about_page.hero.stats.years') },
    { value: '500+', label: t('about_page.hero.stats.projects') },
    { value: '100%', label: t('about_page.hero.stats.clients') },
    { value: '24/7', label: t('about_page.hero.stats.urgent') }
  ]

  return (
    <HelmetProvider>
      <SEOHead
        title={t('about_page.seo.title')}
        description={t('about_page.seo.description')}
      />
      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-48">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <span className="tag-premium inline-block mb-6">{t('about_page.hero.badge')}</span>
                  <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-8 leading-tight">
                    {t('about_page.hero.title_start')}
                    <span className="text-gradient-gold">{t('about_page.hero.title_highlight')}</span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: t('about_page.hero.description') }} />

                  <div className="flex flex-wrap gap-4">
                    <Link to="/contacto" className="btn-premium inline-flex items-center gap-2">
                      {t('about_page.hero.button_contact')}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link to="/servicios" className="btn-outline-premium">
                      {t('about_page.hero.button_services')}
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="relative"
                >
                  <div className="card-premium rounded-3xl p-8 lg:p-10">
                    <div className="grid grid-cols-2 gap-6">
                      {stats.map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                          className="text-center p-6 rounded-2xl bg-muted/30"
                        >
                          <span className="text-4xl lg:text-5xl font-display font-bold text-gradient-gold">
                            {stat.value}
                          </span>
                          <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Company Info */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="card-premium rounded-2xl p-8 text-center"
                >
                  <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">{t('about_page.company_info.reason')}</h3>
                  <p className="text-muted-foreground">METALES DEL SURESTE ANDALUZ SL</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="card-premium rounded-2xl p-8 text-center"
                >
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">CIF</h3>
                  <p className="text-muted-foreground">B04738415</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="card-premium rounded-2xl p-8 text-center"
                >
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">{t('about_page.company_info.foundation')}</h3>
                  <p className="text-muted-foreground">{t('about_page.company_info.foundation_date')}</p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center mb-16"
              >
                <span className="tag-premium inline-block mb-6">{t('about_page.values.badge')}</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  {t('about_page.values.title_start')}<span className="text-gradient-gold">{t('about_page.values.title_highlight')}</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t('about_page.values.description')}
                </p>
                <div className="ornament-line mx-auto mt-8" />
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="card-premium rounded-2xl p-8 text-center group hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="icon-container w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-display font-bold text-foreground mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center mb-16"
              >
                <span className="tag-premium inline-block mb-6">{t('about_page.milestones.badge')}</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  {t('about_page.milestones.title_start')}<span className="text-gradient-gold">{t('about_page.milestones.title_highlight')}</span>
                </h2>
              </motion.div>

              <div className="max-w-4xl mx-auto">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-6 mb-8 last:mb-0"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-bold text-lg shrink-0">
                        {milestone.year}
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="w-0.5 h-full bg-border mt-4" />
                      )}
                    </div>
                    <div className="card-premium rounded-2xl p-6 flex-1">
                      <h3 className="text-xl font-display font-bold text-foreground mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="card-premium rounded-3xl p-10"
                >
                  <Target className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">{t('about_page.mission.title')}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {t('about_page.mission.description')}
                  </p>
                  <ul className="space-y-3">
                    {(t('about_page.mission.items', { returnObjects: true }) as string[]).map((item: string, i: number) => (
                      <li key={i} className="flex items-center gap-3 text-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="card-premium rounded-3xl p-10"
                >
                  <Wrench className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">{t('about_page.vision.title')}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {t('about_page.vision.description')}
                  </p>
                  <ul className="space-y-3">
                    {(t('about_page.vision.items', { returnObjects: true }) as string[]).map((item: string, i: number) => (
                      <li key={i} className="flex items-center gap-3 text-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-accent/10" />
            <div className="container mx-auto px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  {t('about_page.cta.title_start')}<span className="text-gradient-gold">{t('about_page.cta.title_highlight')}</span>{t('about_page.cta.title_end')}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {t('about_page.cta.description')}
                </p>
                <Link to="/contacto" className="btn-premium inline-flex items-center gap-2">
                  {t('about_page.cta.button')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
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

export default NosotrosPage
