import { HelmetProvider } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Scale, Building2, FileText, Globe, Shield, Gavel, Mail, Phone, ArrowLeft, MapPin, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SEOHead } from '@/components/SEOHead'
import { useTranslation, Trans } from 'react-i18next'

const AvisoLegalPage = () => {
    const { t } = useTranslation()

    const sections = [
        {
            id: 'objeto',
            icon: FileText,
            title: t('legal_page.sections.object.title'),
            content: (
                <p>
                    <Trans i18nKey="legal_page.sections.object.content" components={{ strong: <strong className="text-foreground" /> }} />
                </p>
            )
        },
        {
            id: 'acceso',
            icon: Globe,
            title: t('legal_page.sections.access.title'),
            content: (
                <>
                    <p className="mb-4">
                        {t('legal_page.sections.access.intro')}
                    </p>
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 mt-4">
                        <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                            <Shield className="w-5 h-5 text-primary" />
                            {t('legal_page.sections.access.obligations_title')}
                        </h4>
                        <ul className="space-y-2">
                            {(t('legal_page.sections.access.items', { returnObjects: true }) as string[]).map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )
        },
        {
            id: 'propiedad',
            icon: Scale,
            title: t('legal_page.sections.property.title'),
            content: (
                <>
                    <p className="mb-4">
                        {t('legal_page.sections.property.intro')}
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                        {(t('legal_page.sections.property.items', { returnObjects: true }) as string[]).map((item, i) => (
                            <div key={i} className="p-3 rounded-lg bg-muted/30 border border-border/50 text-center">
                                <span className="text-sm font-medium text-foreground">{item}</span>
                            </div>
                        ))}
                    </div>
                    <p>
                        <Trans i18nKey="legal_page.sections.property.outro" components={{ strong: <strong className="text-foreground" /> }} />
                    </p>
                </>
            )
        },
        {
            id: 'exclusion',
            icon: Shield,
            title: t('legal_page.sections.responsibility.title'),
            content: (
                <>
                    <p className="mb-4">
                        {t('legal_page.sections.responsibility.intro')}
                    </p>
                    <ul className="space-y-3">
                        {(t('legal_page.sections.responsibility.items', { returnObjects: true }) as string[]).map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-xs font-bold text-primary">{i + 1}</span>
                                </div>
                                <span className="text-muted-foreground">{item}</span>
                            </li>
                        ))}
                    </ul>
                </>
            )
        },
        {
            id: 'enlaces',
            icon: Globe,
            title: t('legal_page.sections.links.title'),
            content: (
                <p>
                    {t('legal_page.sections.links.content')}
                </p>
            )
        },
        {
            id: 'modificaciones',
            icon: FileText,
            title: t('legal_page.sections.modifications.title'),
            content: (
                <p>
                    {t('legal_page.sections.modifications.content')}
                </p>
            )
        },
        {
            id: 'jurisdiccion',
            icon: Gavel,
            title: t('legal_page.sections.jurisdiction.title'),
            content: (
                <div className="p-6 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
                    <p>
                        <Trans i18nKey="legal_page.sections.jurisdiction.content" components={{ strong: <strong className="text-foreground" /> }} />
                    </p>
                </div>
            )
        }
    ]

    return (
        <HelmetProvider>
            <SEOHead
                title={t('legal_page.seo.title')}
                description={t('legal_page.seo.description')}
            />
            <div className="min-h-screen bg-background">
                <Header />

                <main className="pt-32 pb-20">
                    {/* Hero Section */}
                    <section className="relative py-16 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
                        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

                        <div className="container mx-auto px-6 relative z-10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Link
                                    to="/"
                                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    <span>{t('legal_page.hero.back')}</span>
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="max-w-4xl"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold">
                                        <Scale className="w-8 h-8 text-primary-foreground" />
                                    </div>
                                    <span className="tag-premium">{t('legal_page.hero.badge')}</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                                    {t('legal_page.hero.title_start')} <span className="text-gradient-gold">{t('legal_page.hero.title_highlight')}</span>
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                                    {t('legal_page.hero.description')}
                                </p>
                                <div className="ornament-line mt-10" />
                            </motion.div>
                        </div>
                    </section>

                    {/* Company Info Card */}
                    <section className="py-8">
                        <div className="container mx-auto px-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="max-w-4xl mx-auto"
                            >
                                <div className="card-premium rounded-2xl p-6 md:p-8">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="icon-container w-12 h-12 rounded-xl flex items-center justify-center">
                                            <Building2 className="w-6 h-6 text-primary" />
                                        </div>
                                        <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                                            {t('legal_page.company_info.title')}
                                        </h2>
                                    </div>
                                    <p className="text-muted-foreground mb-6">
                                        {t('legal_page.company_info.intro')}
                                    </p>
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                                            <span className="text-xs text-muted-foreground">{t('legal_page.company_info.fields.name')}</span>
                                            <p className="font-semibold text-foreground">Metales Del Sureste Andaluz SL</p>
                                        </div>
                                        <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                                            <span className="text-xs text-muted-foreground">{t('legal_page.company_info.fields.nif')}</span>
                                            <p className="font-semibold text-foreground">B04738415</p>
                                        </div>
                                        <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                                            <span className="text-xs text-muted-foreground">{t('legal_page.company_info.fields.phone')}</span>
                                            <p className="font-semibold text-foreground">
                                                <a href="tel:+34653940750" className="hover:text-primary transition-colors">+34 653 94 07 50</a>
                                            </p>
                                        </div>
                                        <div className="p-4 rounded-xl bg-muted/30 border border-border/50 sm:col-span-2 lg:col-span-2">
                                            <span className="text-xs text-muted-foreground">{t('legal_page.company_info.fields.address')}</span>
                                            <p className="font-semibold text-foreground flex items-start gap-2">
                                                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                                C/ Paraje La Ventica, 8, 04600 Huércal-Overa, Almería, España
                                            </p>
                                        </div>
                                        <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                                            <span className="text-xs text-muted-foreground">{t('legal_page.company_info.fields.email')}</span>
                                            <p className="font-semibold text-foreground">
                                                <a href="mailto:info@metalesdelsureste.com" className="hover:text-primary transition-colors">info@metalesdelsureste.com</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Content Sections */}
                    <section className="py-8">
                        <div className="container mx-auto px-6">
                            <div className="max-w-4xl mx-auto space-y-8">
                                {sections.map((section, index) => {
                                    const Icon = section.icon
                                    return (
                                        <motion.div
                                            key={section.id}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="card-premium rounded-2xl p-6 md:p-8"
                                        >
                                            <div className="flex items-start gap-4 mb-6">
                                                <div className="icon-container w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <Icon className="w-6 h-6 text-primary" />
                                                </div>
                                                <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                                                    {section.title}
                                                </h2>
                                            </div>
                                            <div className="text-muted-foreground leading-relaxed pl-0 md:pl-16">
                                                {section.content}
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </div>
                    </section>

                    {/* Contact CTA */}
                    <section className="py-16">
                        <div className="container mx-auto px-6">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="max-w-4xl mx-auto card-premium rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
                                <div className="relative z-10">
                                    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                                        {t('legal_page.cta.title_start')} <span className="text-gradient-gold">{t('legal_page.cta.title_highlight')}</span>{t('legal_page.cta.title_end')}
                                    </h3>
                                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                                        {t('legal_page.cta.description')}
                                    </p>
                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                        <a
                                            href="mailto:info@metalesdelsureste.com"
                                            className="btn-premium inline-flex items-center gap-2"
                                        >
                                            <Mail className="w-5 h-5" />
                                            {t('legal_page.cta.email_btn')}
                                        </a>
                                        <a
                                            href="tel:+34653940750"
                                            className="btn-outline-premium inline-flex items-center gap-2"
                                        >
                                            <Phone className="w-5 h-5" />
                                            +34 653 94 07 50
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Last Updated */}
                    <div className="container mx-auto px-6">
                        <p className="text-center text-sm text-muted-foreground">
                            {t('legal_page.last_updated')}
                        </p>
                    </div>
                </main>

                <Footer />
            </div>
        </HelmetProvider>
    )
}

export default AvisoLegalPage
