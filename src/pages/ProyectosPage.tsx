import { HelmetProvider } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Eye, Calendar, MapPin, Ruler } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SEOHead } from '@/components/SEOHead'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { useTranslation } from 'react-i18next'

const ProyectosPage = () => {
  const { t } = useTranslation()

  const projects = [
    {
      id: 1,
      title: t('projects_page.items.nave.title'),
      category: t('projects_page.categories.structures'),
      description: t('projects_page.items.nave.description'),
      location: t('projects_page.items.nave.location'),
      year: '2023',
      size: t('projects_page.items.nave.size'),
      accent: 'from-amber-500/20 to-orange-500/20',
    },
    {
      id: 2,
      title: t('projects_page.items.fachada.title'),
      category: t('projects_page.categories.aluminum'),
      description: t('projects_page.items.fachada.description'),
      location: t('projects_page.items.fachada.location'),
      year: '2023',
      size: t('projects_page.items.fachada.size'),
      accent: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      id: 3,
      title: t('projects_page.items.escalera.title'),
      category: t('projects_page.categories.forge'),
      description: t('projects_page.items.escalera.description'),
      location: t('projects_page.items.escalera.location'),
      year: '2023',
      size: t('projects_page.items.escalera.size'),
      accent: 'from-purple-500/20 to-pink-500/20',
    },
    {
      id: 4,
      title: t('projects_page.items.puertas.title'),
      category: t('projects_page.categories.automation'),
      description: t('projects_page.items.puertas.description'),
      location: t('projects_page.items.puertas.location'),
      year: '2022',
      size: t('projects_page.items.puertas.size'),
      accent: 'from-emerald-500/20 to-teal-500/20',
    },
    {
      id: 5,
      title: t('projects_page.items.cierre.title'),
      category: t('projects_page.categories.locksmith'),
      description: t('projects_page.items.cierre.description'),
      location: t('projects_page.items.cierre.location'),
      year: '2022',
      size: t('projects_page.items.cierre.size'),
      accent: 'from-red-500/20 to-orange-500/20',
    },
    {
      id: 6,
      title: t('projects_page.items.parque.title'),
      category: t('projects_page.categories.furniture'),
      description: t('projects_page.items.parque.description'),
      location: t('projects_page.items.parque.location'),
      year: '2022',
      size: t('projects_page.items.parque.size'),
      accent: 'from-green-500/20 to-lime-500/20',
    },
    {
      id: 7,
      title: t('projects_page.items.escaparates.title'),
      category: t('projects_page.categories.glass'),
      description: t('projects_page.items.escaparates.description'),
      location: t('projects_page.items.escaparates.location'),
      year: '2021',
      size: t('projects_page.items.escaparates.size'),
      accent: 'from-indigo-500/20 to-violet-500/20',
    },
    {
      id: 8,
      title: t('projects_page.items.invernadero.title'),
      category: t('projects_page.categories.metalwork'),
      description: t('projects_page.items.invernadero.description'),
      location: t('projects_page.items.invernadero.location'),
      year: '2021',
      size: t('projects_page.items.invernadero.size'),
      accent: 'from-yellow-500/20 to-amber-500/20',
    },
  ]

  const categories = [
    t('projects_page.categories.all'),
    t('projects_page.categories.structures'),
    t('projects_page.categories.aluminum'),
    t('projects_page.categories.locksmith'),
    t('projects_page.categories.automation'),
    t('projects_page.categories.forge'),
    t('projects_page.categories.furniture'),
    t('projects_page.categories.glass'),
    t('projects_page.categories.metalwork')
  ]

  return (
    <HelmetProvider>
      <SEOHead
        title={t('projects_page.seo.title')}
        description={t('projects_page.seo.description')}
      />
      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-40">
          {/* Hero Section */}
          <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center max-w-4xl mx-auto"
              >
                <span className="tag-premium inline-block mb-6">{t('projects_page.hero.badge')}</span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-8 leading-tight">
                  {t('projects_page.hero.title_start')}
                  <span className="text-gradient-gold">{t('projects_page.hero.title_highlight')}</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  {t('projects_page.hero.description')}
                </p>
                <div className="ornament-line mx-auto mt-10" />
              </motion.div>
            </div>
          </section>

          {/* Stats */}
          <section className="py-16 border-y border-border/30 bg-card/30">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: '500+', label: t('projects_page.stats.projects') },
                  { value: '12+', label: t('projects_page.stats.years') },
                  { value: '100%', label: t('projects_page.stats.clients') },
                  { value: '8', label: t('projects_page.stats.specialties') },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <span className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient-gold">
                      {stat.value}
                    </span>
                    <p className="text-sm md:text-base text-muted-foreground mt-2">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Grid */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              {/* Category filters */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-3 mb-16"
              >
                {categories.map((category, index) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${index === 0
                      ? 'bg-gradient-gold text-primary-foreground'
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </motion.div>

              {/* Projects */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="card-premium rounded-3xl overflow-hidden">
                      {/* Image placeholder with gradient */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />

                        {/* Grid pattern */}
                        <div className="absolute inset-0 opacity-10" style={{
                          backgroundImage: 'linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)',
                          backgroundSize: '40px 40px'
                        }} />

                        {/* Center number */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-24 h-24 rounded-2xl bg-gradient-card border border-border/50 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/50 transition-all duration-500 shadow-card">
                            <span className="text-4xl font-display font-bold text-gradient-gold">
                              {String(project.id).padStart(2, '0')}
                            </span>
                          </div>
                        </div>

                        {/* Category badge */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-semibold text-primary border border-primary/20">
                            {project.category}
                          </span>
                        </div>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-gradient-gold transition-all duration-300">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 line-clamp-2">
                          {project.description}
                        </p>

                        {/* Meta info */}
                        <div className="flex flex-wrap gap-4 mb-6">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>{project.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>{project.year}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Ruler className="w-4 h-4 text-primary" />
                            <span>{project.size}</span>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all duration-300">
                          <Eye className="w-5 h-5" />
                          <span>{t('projects_page.project_card.view_details')}</span>
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
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
                  {t('projects_page.cta.title_start')} <span className="text-gradient-gold">{t('projects_page.cta.title_highlight')}</span> {t('projects_page.cta.title_end')}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {t('projects_page.cta.description')}
                </p>
                <Link to="/contacto" className="btn-premium inline-flex items-center gap-2">
                  {t('projects_page.cta.button')}
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

export default ProyectosPage
