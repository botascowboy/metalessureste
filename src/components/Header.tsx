import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, Clock } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import LanguageSelector from './LanguageSelector'
import logo from '@/assets/logo.png'

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/servicios', label: t('nav.services') },
    { href: '/nosotros', label: t('nav.about') },
    { href: '/proyectos', label: t('nav.projects') },
    { href: '/contacto', label: t('nav.contact') },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-glass-heavy border-b border-border/30 shadow-elevated'
        : 'bg-background/95 backdrop-blur-md'
        }`}
    >
      {/* Top bar */}
      <div className={`hidden lg:block border-b border-border/20 transition-all duration-500 ${isScrolled ? 'py-2' : 'py-3'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-8 text-muted-foreground">
            <a href="tel:+34653940750" className="flex items-center gap-2 hover:text-primary transition-colors duration-300 group">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="font-medium">{t('common.phone')}</span>
            </a>
            <a href="mailto:info@metalesdelsureste.com" className="flex items-center gap-2 hover:text-primary transition-colors duration-300 group">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="font-medium">{t('common.email')}</span>
            </a>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8">
            <Link to="/cerrajero-24h" className="flex items-center gap-2 group">
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </div>
              <span className="font-bold text-red-600 group-hover:text-red-700 transition-colors uppercase tracking-wide text-[10px] sm:text-xs">{t('nav.locksmith_24h')}</span>
            </Link>

            <Link to="/carpinteria-metalica-zona" className="flex items-center gap-2 group">
              <div className="relative flex h-2.5 w-2.5">
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </div>
              <span className="font-bold text-primary group-hover:text-yellow-600 transition-colors uppercase tracking-wide text-[10px] sm:text-xs">{t('nav.metal_carpentry')}</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4 text-primary" />
              <span>{t('common.schedule')}</span>
            </div>
            <LanguageSelector />
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className={`container mx-auto px-6 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6 lg:py-7'}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 sm:gap-6 group">
            <div className="relative flex-shrink-0">
              <div className="w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-[5deg]">
                <img
                  src={logo}
                  alt="Metales Del Sureste Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(234,179,8,0.4)] group-hover:drop-shadow-[0_8px_20px_rgba(234,179,8,0.6)] transition-all duration-500"
                />
              </div>

              {/* Premium background glow - Multi-layered for depth */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-80 transition-all duration-700 -z-10 scale-50 group-hover:scale-125" />
            </div>

            <div className="flex flex-col">
              <h1 className="text-xl sm:text-3xl font-bold text-foreground leading-none tracking-tight font-display transition-colors duration-300 group-hover:text-primary/90">
                Metales Del Sureste
              </h1>
              <div className="flex items-center gap-3 mt-1.5 ">
                <div className="h-px w-4 bg-primary/40 group-hover:w-8 transition-all duration-500" />
                <p className="text-[10px] sm:text-xs text-primary font-bold tracking-[0.5em] uppercase whitespace-nowrap">{t('nav.subtitle')}</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative text-foreground/80 hover:text-foreground transition-colors font-medium text-sm uppercase tracking-wider group ${isActive ? 'text-foreground' : ''}`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-gold transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              )
            })}
            <Link to="/contacto" className="btn-premium ml-4">
              {t('common.request_quote')}
            </Link>
          </div>

          {/* Mobile menu button and language selector */}
          <div className="lg:hidden flex items-center gap-4">
            <LanguageSelector />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 rounded-xl bg-muted/50 text-foreground hover:text-primary hover:bg-muted transition-all duration-300"
              aria-label={isMobileMenuOpen ? t('nav.menu_close') : t('nav.menu_open')}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-glass-heavy border-t border-border/30"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-2">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.href
                return (
                  <motion.div key={link.href}>
                    <Link
                      to={link.href}
                      className={`block text-lg text-foreground hover:text-primary transition-colors font-medium py-4 px-4 rounded-xl hover:bg-muted/50 border-b border-border/30 ${isActive ? 'text-primary bg-muted/30' : ''}`}
                    >
                      <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 }}
                      >
                        {link.label}
                      </motion.span>
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link to="/contacto" className="btn-premium mt-6 w-full text-center block">
                  {t('common.request_quote')}
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 pt-6 border-t border-border/30 space-y-4"
              >
                <a href="tel:+34653940750" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium">{t('common.phone')}</span>
                </a>
                <a href="mailto:info@metalesdelsureste.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium">{t('common.email')}</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
