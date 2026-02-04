import { Phone, Mail, MapPin, ArrowUp, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { townsData } from '@/data/townsData'
import { locksmith24hData } from '@/data/locksmith24hData'
import { useTranslation } from 'react-i18next'
import { servicesData } from '@/data/servicesData'
import logo from '@/assets/logo.png'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  const navigate = useNavigate()
  const [selectedTown, setSelectedTown] = useState('')
  const [selectedLocksmithTown, setSelectedLocksmithTown] = useState('')
  const { t } = useTranslation()

  const footerLinks = {
    servicios: servicesData.slice(0, 5).map(service => ({
      label: t(service.title),
      href: `/servicio/${service.slug}`
    })),
    empresa: [
      { label: t('nav.about'), href: '/nosotros' }, // Update href to match routes if needed, original was #nosotros but probably /nosotros
      { label: t('nav.projects'), href: '/proyectos' }, // original #proyectos
      { label: t('nav.contact'), href: '/contacto' }, // original #contacto
      { label: t('footer.privacy'), href: '/politica-privacidad' },
      { label: t('footer.legal'), href: '/aviso-legal' },
    ],
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleTownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const slug = e.target.value
    setSelectedTown(slug)
    if (slug) {
      navigate(`/servicios/${slug}`)
    }
  }

  const handleLocksmithTownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const slug = e.target.value
    setSelectedLocksmithTown(slug)
    if (slug) {
      navigate(`/cerrajero-24h/${slug}`)
    }
  }

  return (
    <footer className="relative bg-card border-t border-border/30 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Decorative elements */}
      <div className="absolute bottom-0 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-32 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-12 lg:gap-8 min-w-0">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-4 sm:gap-6 mb-8 group">
              <div className="relative flex-shrink-0">
                <div className="w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:-rotate-[5deg]">
                  <img
                    src={logo}
                    alt="Metales Del Sureste Logo"
                    className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(234,179,8,0.3)] group-hover:drop-shadow-[0_8px_20px_rgba(234,179,8,0.5)] transition-all duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-all duration-700 -z-10 scale-75 group-hover:scale-125" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-none tracking-tight font-display group-hover:text-primary/90 transition-colors duration-300">
                  Metales Del Sureste
                </h3>
                <div className="flex items-center gap-3 mt-2">
                  <div className="h-px w-4 bg-primary/50 group-hover:w-8 transition-all duration-500" />
                  <p className="text-[10px] sm:text-xs text-primary font-bold tracking-[0.4em] uppercase whitespace-nowrap">{t('nav.subtitle')}</p>
                </div>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              {t('footer.description')}
            </p>
          </div>



          {/* Company Links */}
          <div>
            <h4 className="text-lg font-display font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-gradient-gold rounded-full" />
              {t('footer.company')}
            </h4>
            <ul className="space-y-4">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary/50 rounded-full group-hover:bg-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zonas de Servicio - Dropdown */}
          <div>
            <h4 className="text-lg font-display font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-gradient-gold rounded-full" />
              {t('footer.service_zones')}
            </h4>
            <div className="relative">
              <select
                value={selectedTown}
                onChange={handleTownChange}
                className="w-full h-12 px-4 pr-10 rounded-xl border border-border/50 bg-background text-foreground text-sm appearance-none cursor-pointer hover:border-primary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              >
                <option value="">{t('footer.select_town')}</option>
                {townsData.map((town) => (
                  <option key={town.slug} value={town.slug}>
                    {town.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              {t('footer.zone_desc')}
            </p>
          </div>

          {/* Cerrajero 24h - Dropdown */}
          <div>
            <h4 className="text-lg font-display font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-gradient-gold rounded-full" />
              {t('nav.locksmith_24h')}
            </h4>
            <div className="relative">
              <select
                value={selectedLocksmithTown}
                onChange={handleLocksmithTownChange}
                className="w-full h-12 px-4 pr-10 rounded-xl border border-border/50 bg-background text-foreground text-sm appearance-none cursor-pointer hover:border-primary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              >
                <option value="">{t('footer.select_town')}</option>
                {locksmith24hData.map((town) => (
                  <option key={town.slug} value={town.slug}>
                    {town.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              {t('footer.zone_urgent_desc')}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-gradient-gold rounded-full" />
              {t('contact.badge')}
            </h4>
            <div className="space-y-5">
              <a href="tel:+34653940750" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                <div className="icon-container w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">{t('common.phone')}</span>
              </a>
              <a href="mailto:info@metalesdelsureste.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                <div className="icon-container w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">{t('common.email')}</span>
              </a>
              <div className="flex items-start gap-4 text-muted-foreground">
                <div className="icon-container w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">
                  {t('contact_page.info.address_subtitle', 'Pedanía de Santa María de Nieva, 04600 Huércal-Overa, Almería, España')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-10 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Metales Del Sureste Andaluz. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-6">
            <p className="text-muted-foreground text-sm">
              {t('footer.designed_by')} <span className="text-primary">❤</span> en <a href="https://platanitorico.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Platanito Rico</a>
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              className="icon-container w-12 h-12 rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              aria-label={t('footer.scroll_top', 'Volver arriba')}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
