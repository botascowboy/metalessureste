import { motion } from 'framer-motion'
import { ArrowRight, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const Projects = () => {
  const { t } = useTranslation()

  const projects = [
    {
      title: t('projects_section.items.nave.title'),
      category: t('projects_section.items.nave.category'),
      description: t('projects_section.items.nave.desc'),
      accent: 'from-amber-500/20 to-orange-500/20',
    },
    {
      title: t('projects_section.items.fachada.title'),
      category: t('projects_section.items.fachada.category'),
      description: t('projects_section.items.fachada.desc'),
      accent: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      title: t('projects_section.items.escalera.title'),
      category: t('projects_section.items.escalera.category'),
      description: t('projects_section.items.escalera.desc'),
      accent: 'from-purple-500/20 to-pink-500/20',
    },
    {
      title: t('projects_section.items.puerta.title'),
      category: t('projects_section.items.puerta.category'),
      description: t('projects_section.items.puerta.desc'),
      accent: 'from-emerald-500/20 to-teal-500/20',
    },
  ]

  return (
    <section id="proyectos" className="relative py-32 overflow-hidden">
      {/* Background layer for section separation */}
      <div className="absolute inset-0 bg-card/40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-1/3 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="tag-premium inline-block mb-6">
            {t('projects_section.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-8 leading-tight">
            {t('projects_section.title_start')}
            <span className="text-gradient-gold">{t('projects_section.title_highlight')}</span>
            {t('projects_section.title_end')}
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {t('projects_section.description')}
          </p>
          <div className="ornament-line mx-auto mt-10" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] card-premium rounded-2xl overflow-hidden">
                {/* Colored gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }} />

                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-card border border-border/50 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/50 transition-all duration-500 shadow-card">
                    <span className="text-4xl font-display font-bold text-gradient-gold">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <motion.div
                    initial={false}
                    className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500"
                  >
                    <span className="inline-block px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-primary text-xs font-semibold mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                      <Eye className="w-4 h-4" />
                      <span>{t('projects_section.view_project')}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link to="/proyectos" className="btn-outline-premium inline-flex items-center">
            {t('projects_section.view_all')}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

