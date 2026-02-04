import { HelmetProvider } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Scale, Building2, FileText, Globe, Shield, Gavel, Mail, Phone, ArrowLeft, MapPin, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SEOHead } from '@/components/SEOHead'

const sections = [
    {
        id: 'objeto',
        icon: FileText,
        title: '1. Objeto',
        content: (
            <p>
                El presente Aviso Legal regula el uso del sitio web <strong className="text-foreground">metalesdelsureste.com</strong>,
                del que es titular Metales Del Sureste Andaluz SL. La navegación por el sitio web atribuye la
                condición de usuario del mismo e implica la aceptación plena y sin reservas de todas y cada una
                de las disposiciones incluidas en este Aviso Legal.
            </p>
        )
    },
    {
        id: 'acceso',
        icon: Globe,
        title: '2. Acceso y Utilización',
        content: (
            <>
                <p className="mb-4">
                    El acceso a la web tiene carácter gratuito. Los usuarios se comprometen a utilizar el sitio web
                    de conformidad con la Ley, el presente Aviso Legal, y las buenas costumbres generalmente aceptadas.
                </p>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 mt-4">
                    <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-primary" />
                        El usuario se obliga a:
                    </h4>
                    <ul className="space-y-2">
                        {[
                            'No utilizar el sitio web con fines fraudulentos',
                            'No realizar actividades ilícitas o contrarias a la buena fe',
                            'No difundir contenidos de carácter racista, xenófobo o pornográfico',
                            'No provocar daños en los sistemas del prestador o de terceros'
                        ].map((item, i) => (
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
        title: '3. Propiedad Intelectual e Industrial',
        content: (
            <>
                <p className="mb-4">
                    Todos los contenidos del sitio web, incluyendo a título enunciativo pero no limitativo:
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                    {['Textos', 'Fotografías', 'Gráficos', 'Imágenes', 'Iconos', 'Logotipos', 'Software', 'Diseño'].map((item, i) => (
                        <div key={i} className="p-3 rounded-lg bg-muted/30 border border-border/50 text-center">
                            <span className="text-sm font-medium text-foreground">{item}</span>
                        </div>
                    ))}
                </div>
                <p>
                    Son propiedad de <strong className="text-foreground">Metales Del Sureste Andaluz SL</strong> o de terceros que han
                    autorizado su uso, y están protegidos por las leyes de propiedad intelectual e industrial.
                    Queda expresamente prohibida la reproducción total o parcial de estos contenidos sin autorización
                    expresa del titular.
                </p>
            </>
        )
    },
    {
        id: 'exclusion',
        icon: Shield,
        title: '4. Exclusión de Responsabilidad',
        content: (
            <>
                <p className="mb-4">
                    Metales Del Sureste Andaluz SL no se hace responsable de:
                </p>
                <ul className="space-y-3">
                    {[
                        'Los errores u omisiones de los contenidos del sitio web',
                        'La falta de disponibilidad del portal',
                        'La transmisión de virus o programas maliciosos en los contenidos',
                        'Los daños que pudieran ocasionarse por el uso indebido de la web',
                        'La infracción de los derechos de propiedad intelectual por parte de terceros'
                    ].map((item, i) => (
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
        title: '5. Enlaces Externos',
        content: (
            <p>
                El sitio web puede contener enlaces a otras páginas web gestionadas por terceros.
                Metales Del Sureste Andaluz SL no se hace responsable del contenido ni del estado de dichos
                sitios web, y el acceso a ellos a través de nuestra web no implica que recomendemos o aprobemos
                sus contenidos. Estos enlaces se proporcionan únicamente para conveniencia del usuario.
            </p>
        )
    },
    {
        id: 'modificaciones',
        icon: FileText,
        title: '6. Modificaciones',
        content: (
            <p>
                Metales Del Sureste Andaluz SL se reserva el derecho de realizar las modificaciones que considere
                oportunas, sin aviso previo, en el contenido de su sitio web. Tanto en lo referente a los contenidos
                del sitio web, como en las condiciones de uso del mismo. Dichas modificaciones podrán realizarse a
                través de su página web por cualquier forma admisible en derecho y serán de obligado cumplimiento
                durante el tiempo en que se encuentren publicadas en la web.
            </p>
        )
    },
    {
        id: 'jurisdiccion',
        icon: Gavel,
        title: '7. Ley Aplicable y Jurisdicción',
        content: (
            <div className="p-6 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
                <p>
                    Para la resolución de todas las controversias o cuestiones relacionadas con el presente
                    sitio web o de las actividades en él desarrolladas, será de aplicación la <strong className="text-foreground">legislación española</strong>,
                    a la que se someten expresamente las partes, siendo competentes para la resolución de todos
                    los conflictos derivados o relacionados con su uso los <strong className="text-foreground">Juzgados y Tribunales de Almería</strong>.
                </p>
            </div>
        )
    }
]

const AvisoLegalPage = () => {
    return (
        <HelmetProvider>
            <SEOHead
                title="Aviso Legal | Metales Del Sureste Andaluz"
                description="Aviso Legal y Condiciones de Uso de Metales Del Sureste Andaluz SL. Información legal sobre el uso del sitio web."
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
                                    <span>Volver al inicio</span>
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
                                    <span className="tag-premium">Información Legal</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                                    Aviso <span className="text-gradient-gold">Legal</span>
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                                    Información legal sobre el uso de nuestro sitio web y las condiciones
                                    que regulan la navegación y contratación de nuestros servicios.
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
                                            Datos Identificativos
                                        </h2>
                                    </div>
                                    <p className="text-muted-foreground mb-6">
                                        En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002,
                                        de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE):
                                    </p>
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                                            <span className="text-xs text-muted-foreground">Denominación Social</span>
                                            <p className="font-semibold text-foreground">Metales Del Sureste Andaluz SL</p>
                                        </div>
                                        <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                                            <span className="text-xs text-muted-foreground">NIF</span>
                                            <p className="font-semibold text-foreground">B04738415</p>
                                        </div>
                                        <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                                            <span className="text-xs text-muted-foreground">Teléfono</span>
                                            <p className="font-semibold text-foreground">+34 653 94 07 50</p>
                                        </div>
                                        <div className="p-4 rounded-xl bg-muted/30 border border-border/50 sm:col-span-2 lg:col-span-2">
                                            <span className="text-xs text-muted-foreground">Domicilio</span>
                                            <p className="font-semibold text-foreground flex items-start gap-2">
                                                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                                C/ Paraje La Ventica, 8, 04600 Huércal-Overa, Almería, España
                                            </p>
                                        </div>
                                        <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                                            <span className="text-xs text-muted-foreground">Email</span>
                                            <p className="font-semibold text-foreground">info@metalesdelsureste.com</p>
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
                                        ¿Necesitas más <span className="text-gradient-gold">información</span>?
                                    </h3>
                                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                                        Si tienes alguna consulta sobre nuestro aviso legal o necesitas información
                                        adicional, estamos a tu disposición.
                                    </p>
                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                        <a
                                            href="mailto:info@metalesdelsureste.com"
                                            className="btn-premium inline-flex items-center gap-2"
                                        >
                                            <Mail className="w-5 h-5" />
                                            Contactar por Email
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
                            Última actualización: Febrero 2024
                        </p>
                    </div>
                </main>

                <Footer />
            </div>
        </HelmetProvider>
    )
}

export default AvisoLegalPage
