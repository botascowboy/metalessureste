import { HelmetProvider } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileText, Mail, Phone, MapPin, ArrowLeft, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SEOHead } from '@/components/SEOHead'

const sections = [
    {
        id: 'responsable',
        icon: Shield,
        title: '1. Responsable del Tratamiento',
        content: (
            <>
                <p className="mb-4">
                    En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016,
                    relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales,
                    le informamos de los siguientes aspectos:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border/50">
                        <FileText className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                            <span className="text-xs text-muted-foreground">Identidad</span>
                            <p className="font-semibold text-foreground">Metales Del Sureste Andaluz SL</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border/50">
                        <Lock className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                            <span className="text-xs text-muted-foreground">NIF</span>
                            <p className="font-semibold text-foreground">B04738415</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border/50">
                        <MapPin className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                            <span className="text-xs text-muted-foreground">Dirección</span>
                            <p className="font-semibold text-foreground">C/ Paraje La Ventica, 8, 04600 Huércal-Overa, Almería</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border/50">
                        <Mail className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                            <span className="text-xs text-muted-foreground">Email</span>
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
        title: '2. Finalidad del Tratamiento',
        content: (
            <>
                <p className="mb-4">
                    Tratamos la información que nos facilitan los interesados con las siguientes finalidades:
                </p>
                <ul className="space-y-3">
                    {[
                        'Gestionar el envío de la información que nos soliciten a través de los formularios de contacto.',
                        'Facilitar a los interesados ofertas de productos y servicios de su interés.',
                        'Mantener la relación comercial con nuestros clientes.',
                        'Enviar comunicaciones comerciales sobre nuestros servicios, siempre que hayan dado su consentimiento.'
                    ].map((item, i) => (
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
        title: '3. Legitimación',
        content: (
            <p>
                La base legal para el tratamiento de sus datos personales es el <strong className="text-foreground">consentimiento del interesado</strong> al
                rellenar los formularios de contacto y aceptar la presente política de privacidad. En caso de relación
                contractual, la base legal será la <strong className="text-foreground">ejecución de un contrato</strong>. Para el envío de comunicaciones
                comerciales, el tratamiento se realiza en base al <strong className="text-foreground">interés legítimo</strong> del responsable o al
                consentimiento del interesado.
            </p>
        )
    },
    {
        id: 'destinatarios',
        icon: Lock,
        title: '4. Destinatarios',
        content: (
            <p>
                Los datos personales no se cederán a terceros salvo obligación legal. No se realizan transferencias
                internacionales de datos a países fuera del Espacio Económico Europeo. En caso de ser necesaria alguna
                cesión de datos, se informará previamente al interesado y se solicitará su consentimiento expreso.
            </p>
        )
    },
    {
        id: 'derechos',
        icon: Shield,
        title: '5. Derechos del Interesado',
        content: (
            <>
                <p className="mb-4">
                    Cualquier persona tiene derecho a obtener confirmación sobre si tratamos datos personales que le conciernan.
                    Los interesados tienen derecho a:
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                        { title: 'Acceso', desc: 'Conocer qué datos suyos tratamos' },
                        { title: 'Rectificación', desc: 'Corregir datos inexactos' },
                        { title: 'Supresión', desc: 'Solicitar la eliminación de datos' },
                        { title: 'Oposición', desc: 'Oponerse al tratamiento' },
                        { title: 'Portabilidad', desc: 'Recibir sus datos en formato estructurado' },
                        { title: 'Limitación', desc: 'Limitar el tratamiento de datos' }
                    ].map((right, i) => (
                        <div key={i} className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                            <h4 className="font-bold text-foreground mb-1">{right.title}</h4>
                            <p className="text-sm text-muted-foreground">{right.desc}</p>
                        </div>
                    ))}
                </div>
                <p className="mt-6 text-muted-foreground">
                    Para ejercer estos derechos, puede dirigirse a nosotros mediante escrito a nuestra dirección postal
                    o por correo electrónico a <a href="mailto:info@metalesdelsureste.com" className="text-primary hover:underline">info@metalesdelsureste.com</a>.
                </p>
            </>
        )
    },
    {
        id: 'conservacion',
        icon: FileText,
        title: '6. Conservación de Datos',
        content: (
            <p>
                Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la
                que se recabaron y para determinar las posibles responsabilidades que se pudieran derivar de dicha
                finalidad. En caso de solicitudes de información, los datos se conservarán durante un plazo máximo de
                2 años desde la última comunicación. Los datos de clientes se conservarán durante la relación contractual
                y posteriormente durante los plazos legales aplicables.
            </p>
        )
    }
]

const PoliticaPrivacidadPage = () => {
    return (
        <HelmetProvider>
            <SEOHead
                title="Política de Privacidad | Metales Del Sureste Andaluz"
                description="Política de Privacidad y Protección de Datos de Metales Del Sureste Andaluz SL. Conoce cómo tratamos y protegemos tus datos personales."
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
                                        <Shield className="w-8 h-8 text-primary-foreground" />
                                    </div>
                                    <span className="tag-premium">Protección de Datos</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                                    Política de <span className="text-gradient-gold">Privacidad</span>
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                                    En Metales Del Sureste Andaluz nos comprometemos a proteger tu privacidad
                                    y garantizar la seguridad de tus datos personales.
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
                                        ¿Tienes alguna <span className="text-gradient-gold">pregunta</span>?
                                    </h3>
                                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                                        Si tienes alguna duda sobre nuestra política de privacidad o deseas ejercer
                                        tus derechos, no dudes en contactarnos.
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

export default PoliticaPrivacidadPage
