import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cookie, Shield } from 'lucide-react'

const COOKIE_CONSENT_KEY = 'cookie-consent'

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted')
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 md:p-6"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="card-premium rounded-2xl p-4 sm:p-6 md:p-8 shadow-elevated relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />

              {/* Close button for mobile - always visible on small screens */}
              <button
                onClick={handleReject}
                className="absolute top-3 right-3 sm:hidden text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-full bg-muted/50"
                aria-label="Cerrar"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8 relative z-10">
                {/* Content */}
                <div className="flex items-start gap-3 sm:gap-4 pr-8 sm:pr-0">
                  <div className="icon-container w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg md:text-xl font-display font-bold text-foreground mb-1 sm:mb-2 flex items-center gap-2">
                      Utilizamos Cookies
                      <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      Usamos cookies para mejorar tu experiencia.{' '}
                      <a href="/politica-privacidad" className="text-primary hover:underline font-medium">
                        Más información
                      </a>
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 w-full md:w-auto">
                  <button
                    onClick={handleReject}
                    className="flex-1 md:flex-none btn-outline-premium px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm"
                  >
                    Rechazar
                  </button>
                  <button
                    onClick={handleAccept}
                    className="flex-1 md:flex-none btn-premium px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm"
                  >
                    Aceptar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
