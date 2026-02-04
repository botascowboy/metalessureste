import { useTranslation } from 'react-i18next'
import { HelmetProvider } from 'react-helmet-async'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { About } from '@/components/About'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { CookieBanner } from '@/components/CookieBanner'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { SEOHead } from '@/components/SEOHead'

const Index = () => {
  const { t } = useTranslation()

  return (
    <HelmetProvider>
      <SEOHead />
      <div className="min-h-screen bg-background">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg z-[100]"
        >
          {t('common.skip_to_content', 'Saltar al contenido principal')}
        </a>

        <Header />

        <main id="main-content">
          <Hero />
          <Services />
          <About />
          <Projects />
          <Contact />
        </main>

        <Footer />

        <CookieBanner />
        <WhatsAppButton />
      </div>
    </HelmetProvider>
  )
}

export default Index
