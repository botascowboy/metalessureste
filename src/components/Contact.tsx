import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react'
import { toast } from 'sonner'
import { z } from 'zod'
import { useTranslation } from 'react-i18next'

export const Contact = () => {
  const { t } = useTranslation()

  const contactSchema = useMemo(() => z.object({
    nombre: z.string().trim().min(1, t('contact_page.form.validation.name')).max(100, t('common.max_chars', { count: 100 })),
    email: z.string().trim().email(t('contact_page.form.validation.email')).max(255, t('common.max_chars', { count: 255 })),
    telefono: z.string().trim().min(9, t('contact_page.form.validation.phone')).max(20, t('common.max_chars', { count: 20 })),
    mensaje: z.string().trim().min(10, t('contact_page.form.validation.message')).max(1000, t('common.max_chars', { count: 1000 })),
  }), [t])

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const contactInfo = [
    { icon: Phone, label: t('common.form.phone'), value: t('common.phone'), href: 'tel:+34653940750' },
    { icon: MessageCircle, label: 'WhatsApp', value: t('common.phone'), href: 'https://wa.me/34653940750?text=Hola,%20me%20gustar%C3%ADa%20informaci%C3%B3n' },
    { icon: Mail, label: t('common.form.email'), value: t('common.email'), href: 'mailto:info@metalesdelsureste.com' },
    { icon: MapPin, label: t('contact.address'), value: t('contact_page.info.address_subtitle'), href: '#' },
    { icon: Clock, label: t('contact.schedule'), value: t('common.schedule'), href: '#' },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})

    const result = contactSchema.safeParse(formData)
    if (!result.success) {
      const fieldErrors: Record<string, string> = {}
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message
        }
      })
      setErrors(fieldErrors)
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
      })

      if (!response.ok) throw new Error('Error al enviar el formulario')

      toast.success(t('common.form.success'))
      setFormData({ nombre: '', email: '', telefono: '', mensaje: '' })
    } catch (error) {
      console.error('Error sending form:', error)
      toast.error(t('common.form.error'))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background layer for section separation */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 lg:mb-20"
        >
          <span className="tag-premium inline-block mb-6">
            {t('contact.badge')}
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 md:mb-8 leading-tight">
            {t('contact.title')}<span className="text-gradient-gold">{t('contact.title_highlight')}</span>{t('contact.title_end')}
          </h2>
          <p className="text-muted-foreground text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
            {t('contact.description')}
          </p>
          <div className="ornament-line mx-auto mt-8 md:mt-10" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="card-premium rounded-3xl p-5 sm:p-6 md:p-10 h-full overflow-hidden">
              <h3 className="text-2xl font-display font-bold text-foreground mb-8">
                {t('contact.info_title')}
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3 sm:gap-4 md:gap-5 group p-2 sm:p-3 md:p-4 rounded-xl hover:bg-muted/30 transition-colors duration-300 w-full min-w-0"
                  >
                    <div className="icon-container w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] md:text-sm text-muted-foreground mb-0.5 md:mb-1">{item.label}</p>
                      <p className="text-foreground font-semibold text-sm sm:text-base md:text-lg group-hover:text-primary transition-colors duration-300 break-all sm:break-normal">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-8 md:mt-10 aspect-video w-full rounded-2xl overflow-hidden border border-border/50 shadow-elevated">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3177.8!2d-1.94!3d37.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDIzJzI0LjAiTiAxwrA1NiczNi4wIlc!5e0!3m2!1ses!2ses!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t('contact_page.info.address_desc', 'Ubicación de Metales Del Sureste Andaluz')}
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="card-premium rounded-3xl p-5 sm:p-6 md:p-10 overflow-hidden" name="contact" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-6 md:mb-8">
                {t('contact.form_title')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-semibold text-foreground mb-3">
                    {t('common.form.name')} *
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('nombre')}
                    onBlur={() => setFocusedField(null)}
                    placeholder={t('common.form.name')}
                    className={`input-premium w-full ${errors.nombre ? 'border-destructive' : ''} ${focusedField === 'nombre' ? 'border-primary/50 shadow-[0_0_0_3px_hsl(45_85%_55%_/_0.1)]' : ''}`}
                  />
                  {errors.nombre && <p className="text-destructive text-sm mt-2 flex items-center gap-1"><span className="w-1 h-1 bg-destructive rounded-full" />{errors.nombre}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-3">
                    {t('common.form.email')} *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="tu@email.com"
                    className={`input-premium w-full ${errors.email ? 'border-destructive' : ''} ${focusedField === 'email' ? 'border-primary/50 shadow-[0_0_0_3px_hsl(45_85%_55%_/_0.1)]' : ''}`}
                  />
                  {errors.email && <p className="text-destructive text-sm mt-2 flex items-center gap-1"><span className="w-1 h-1 bg-destructive rounded-full" />{errors.email}</p>}
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="telefono" className="block text-sm font-semibold text-foreground mb-3">
                  {t('common.form.phone')} *
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  value={formData.telefono}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('telefono')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="+34 653 94 07 50"
                  className={`input-premium w-full ${errors.telefono ? 'border-destructive' : ''} ${focusedField === 'telefono' ? 'border-primary/50 shadow-[0_0_0_3px_hsl(45_85%_55%_/_0.1)]' : ''}`}
                />
                {errors.telefono && <p className="text-destructive text-sm mt-2 flex items-center gap-1"><span className="w-1 h-1 bg-destructive rounded-full" />{errors.telefono}</p>}
              </div>
              <div className="mt-6">
                <label htmlFor="mensaje" className="block text-sm font-semibold text-foreground mb-3">
                  {t('common.form.message')} *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('mensaje')}
                  onBlur={() => setFocusedField(null)}
                  placeholder={t('common.form.message')}
                  rows={5}
                  className={`input-premium w-full resize-none ${errors.mensaje ? 'border-destructive' : ''} ${focusedField === 'mensaje' ? 'border-primary/50 shadow-[0_0_0_3px_hsl(45_85%_55%_/_0.1)]' : ''}`}
                />
                {errors.mensaje && <p className="text-destructive text-sm mt-2 flex items-center gap-1"><span className="w-1 h-1 bg-destructive rounded-full" />{errors.mensaje}</p>}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-premium mt-8 w-full text-lg py-5 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    {t('common.form.sending')}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t('common.form.send')}
                  </>
                )}
              </button>
              <p className="text-center text-muted-foreground text-sm mt-6 flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                {t('contact.response_guarantee')}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

