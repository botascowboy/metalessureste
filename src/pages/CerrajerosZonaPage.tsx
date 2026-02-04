import { HelmetProvider } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Clock, Shield, ArrowRight, Phone } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SEOHead } from '@/components/SEOHead'
import { locksmith24hData } from '@/data/locksmith24hData'
import { useTranslation } from 'react-i18next'

const CerrajerosZonaPage = () => {
    const { t } = useTranslation()

    return (
        <HelmetProvider>
            <SEOHead
                title={t('locksmith_zones_page.seo.title')}
                description={t('locksmith_zones_page.seo.description')}
            />
            <div className="min-h-screen bg-background">
                <Header />

                <main className="pt-32">
                    {/* Hero Section */}
                    <section className="relative py-20 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-background to-background" />
                        <div className="absolute -top-40 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />

                        <div className="container mx-auto px-6 relative z-10">
                            <div className="text-center max-w-4xl mx-auto mb-16">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-500 border border-red-500/20 mb-6"
                                >
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                    </span>
                                    <span className="font-bold text-sm uppercase tracking-wide">{t('locksmith_zones_page.hero.badge')}</span>
                                </motion.div>

                                <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                                    {t('locksmith_zones_page.hero.title_start')} <span className="text-red-500">{t('locksmith_zones_page.hero.title_highlight')}</span>
                                </h1>

                                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                                    {t('locksmith_zones_page.hero.description')}
                                </p>
                            </div>

                            {/* Towns Grid */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {locksmith24hData.map((town, index) => (
                                    <motion.div
                                        key={town.slug}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        viewport={{ once: true }}
                                    >
                                        <Link to={`/cerrajero-24h/${town.slug}`} className="block h-full group">
                                            <div className="card-premium h-full rounded-2xl p-6 border border-border/50 hover:border-red-500/30 transition-all duration-500 flex flex-col relative overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:to-transparent transition-all duration-500" />

                                                <div className="relative z-10 flex flex-col h-full">
                                                    <div className="flex justify-between items-start mb-4">
                                                        <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform duration-300">
                                                            <MapPin className="w-6 h-6" />
                                                        </div>
                                                        <span className="px-3 py-1 rounded-full bg-background border border-border text-xs font-semibold text-muted-foreground flex items-center gap-1">
                                                            <Clock className="w-3 h-3" />
                                                            {t(town.responseTime)}
                                                        </span>
                                                    </div>

                                                    <h2 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-red-500 transition-colors">
                                                        {t('locksmith_zones_page.hero.locksmith_in')} {town.name}
                                                    </h2>

                                                    <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                                                        {t(town.description)}
                                                    </p>

                                                    <div className="flex items-center justify-between mt-auto">
                                                        <span className="text-sm font-semibold text-red-500 flex items-center gap-2">
                                                            <Phone className="w-4 h-4" />
                                                            {t('locksmith_zones_page.hero.available')}
                                                        </span>
                                                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                                                            <ArrowRight className="w-4 h-4" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* SEO Content Section */}
                            <div className="mt-20 max-w-4xl mx-auto prose prose-lg prose-red">
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8 text-center">
                                    {t('locksmith_zones_page.info.title')}
                                </h2>
                                <div className="grid md:grid-cols-2 gap-8 not-prose mb-12">
                                    <div className="card-premium p-6 rounded-2xl">
                                        <Shield className="w-8 h-8 text-red-500 mb-4" />
                                        <h3 className="text-lg font-bold mb-2">{t('locksmith_zones_page.info.warranty.title')}</h3>
                                        <p className="text-sm text-muted-foreground">{t('locksmith_zones_page.info.warranty.desc')}</p>
                                    </div>
                                    <div className="card-premium p-6 rounded-2xl">
                                        <Clock className="w-8 h-8 text-red-500 mb-4" />
                                        <h3 className="text-lg font-bold mb-2">{t('locksmith_zones_page.info.speed.title')}</h3>
                                        <p className="text-sm text-muted-foreground">{t('locksmith_zones_page.info.speed.desc')}</p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground">
                                    {t('locksmith_zones_page.info.p1')}
                                </p>
                                <p className="text-muted-foreground mt-4">
                                    {t('locksmith_zones_page.info.p2')}
                                </p>

                                {/* CTA Section */}
                                <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-red-600/20 to-primary/10 border border-red-500/20 text-center relative overflow-hidden">
                                    <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-4 relative z-10">
                                        {t('locksmith_zones_page.cta.title')}
                                    </h3>
                                    <p className="text-muted-foreground mb-6 relative z-10">
                                        {t('locksmith_zones_page.cta.description')}
                                    </p>
                                    <a
                                        href="tel:+34653940750"
                                        className="relative z-10 inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white text-base sm:text-lg font-semibold px-6 sm:px-10 py-4 sm:py-5 rounded-xl shadow-lg shadow-red-600/30 transition-all group"
                                    >
                                        <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        <span className="sm:hidden">{t('common.call_now')}</span>
                                        <span className="hidden sm:inline">+34 653 94 07 50</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </HelmetProvider>
    )
}

export default CerrajerosZonaPage
