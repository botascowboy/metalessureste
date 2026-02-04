import { HelmetProvider } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileText, Mail, Phone, MapPin, ArrowLeft, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SEOHead } from '@/components/SEOHead'
import { useTranslation, Trans } from 'react-i18next'

const PoliticaPrivacidadPage = () => {
    const { t } = useTranslation()

    const sections = [
        {
            id: 'responsable',
            icon: Shield,
            title: t('privacy_page.sections.responsible.title'),
            content: (
                <>
                    <p className="mb-4">
                        {t('privacy_page.sections.responsible.content')}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mt-6">
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border/50">
                            <FileText className="w-5 h-5 text-primary mt-0.5" />
                            <div>
                                <span className="text-xs text-muted-foreground">{t('privacy_page.sections.responsible.fields.identity')}</span>
                                <p className="font-semibold text-foreground">Metales Del Sureste Andaluz SL</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border/50">
                            <Lock className="w-5 h-5 text-primary mt-0.5" />
                            <div>
                                <span className="text-xs text-muted-foreground">{t('privacy_page.sections.responsible.fields.nif')}</span>
                                <p className="font-semibold text-foreground">B04738415</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border/50">
                            <MapPin className="w-5 h-5 text-primary mt-0.5" />
                            <div>
                                <span className="text-xs text-muted-foreground">{t('privacy_page.sections.responsible.fields.address')}</span>
                                <p className="font-semibold text-foreground">C/ Paraje La Ventica, 8, 04600 Huércal-Overa, Almería</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border/50">
                            <Mail className="w-5 h-5 text-primary mt-0.5" />
                            <div>
                                <span className="text-xs text-muted-foreground">{t('privacy_page.sections.responsible.fields.email')}</span>
                                <p className="font-semibold text-foreground">info@metalesdelsureste.com</p>
                            </div>
                        </div>
                    </div>
                </>
            )
        },
        {
            id: 'finalidad',
            icon: Eye,
            title: t('privacy_page.sections.purpose.title'),
            content: (
                <>
                    <p className="mb-4">
                        {t('privacy_page.sections.purpose.intro')}
                    </p>
                    <ul className="space-y-3">
                        {(t('privacy_page.sections.purpose.items', { returnObjects: true }) as string[]).map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{item}</span>
                            </li>
                        ))}
                    </ul>
                </>
            )
        },
        {
            id: 'legitimacion',
            icon: FileText,
            title: t('privacy_page.sections.legitimacy.title'),
            content: (
                <p>
                    <Trans i18nKey="privacy_page.sections.legitimacy.content" components={{ strong: <strong className="text-foreground" /> }} />
                </p>
            )
        },
        {
            id: 'destinatarios',
            icon: Lock,
            title: t('privacy_page.sections.recipients.title'),
            content: (
                <p>
                    {t('privacy_page.sections.recipients.content')}
                </p>
            )
        },
        {
            id: 'derechos',
            icon: Shield,
            title: t('privacy_page.sections.rights.title'),
            content: (
                <>
                    <p className="mb-4">
                        {t('privacy_page.sections.rights.intro')}
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {[
                            t('privacy_page.sections.rights.items.access', { returnObjects: true }),
                            t('privacy_page.sections.rights.items.rectification', { returnObjects: true }),
                            t('privacy_page.sections.rights.items.deletion', { returnObjects: true }),
                            t('privacy_page.sections.rights.items.opposition', { returnObjects: true }),
                            t('privacy_page.sections.rights.items.portability', { returnObjects: true }),
                            t('privacy_page.sections.rights.items.limitation', { returnObjects: true })
                        ].map((right: any, i) => (
                            <div key={i} className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                                <h4 className="font-bold text-foreground mb-1">{right.title}</h4>
                                <p className="text-sm text-muted-foreground">{right.desc}</p>
                            </div>
                        ))}
                    </div>
                    <p className="mt-6 text-muted-foreground">
                        <Trans i18nKey="privacy_page.sections.rights.outro" components={{ a: <a href="mailto:info@metalesdelsureste.com" className="text-primary hover:underline" /> }} />
                    </p>
                </>
            )
        },
        {
            id: 'conservacion',
            icon: FileText,
            title: t('privacy_page.sections.conservation.title'),
            content: (
                <p>
                    {t('privacy_page.sections.conservation.content')}
                </p>
            )
        }
    ]

    return (
        <HelmetProvider>
            <SEOHead
                title={t('privacy_page.seo.title')}
                description={t('privacy_page.seo.description')}
            />
            <div className="min-h-screen bg-background">
                <Header />

                <main className="pt-32 pb-20">
                    {/* Hero Section */}
                    <section className="relative py-16 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
                        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

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
                                    <span>{t('privacy_page.hero.back')}</span>
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
                                        <Shield className="w-8 h-8 text-primary-foreground" />
                                    </div>
                                    <span className="tag-premium">{t('privacy_page.hero.badge')}</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                                    {t('privacy_page.hero.title_start')} <span className="text-gradient-gold">{t('privacy_page.hero.title_highlight')}</span>
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                                    {t('privacy_page.hero.description')}
                                </p>
                                <div className="ornament-line mt-10" />
                            </motion.div>
                        </div>
                    </section>

                    {/* Content Sections */}
                    <section className="py-12">
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
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                                <div className="relative z-10">
                                    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                                        {t('privacy_page.cta.title_start')} <span className="text-gradient-gold">{t('privacy_page.cta.title_highlight')}</span>{t('privacy_page.cta.title_end')}
                                    </h3>
                                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                                        {t('privacy_page.cta.description')}
                                    </p>
                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                        <a
                                            href="mailto:info@metalesdelsureste.com"
                                            className="btn-premium inline-flex items-center gap-2"
                                        >
                                            <Mail className="w-5 h-5" />
                                            {t('privacy_page.cta.email_btn')}
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
                            {t('privacy_page.last_updated')}
                        </p>
                    </div>
                </main>

                <Footer />
            </div>
        </HelmetProvider>
    )
}

export default PoliticaPrivacidadPage
