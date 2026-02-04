import { motion } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'
import heroImage from '@/assets/hero-metalwork.jpg'

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          src={heroImage}
          alt="Taller de carpintería metálica con chispas de soldadura"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        {/* Multiple gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-transparent" />
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Animated decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse-slow delay-500" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-12 md:pt-40 md:pb-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="tag-premium inline-flex items-center gap-2 mb-8">
              <Sparkles className="w-4 h-4" />
              Expertos en Carpintería Metálica
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-foreground leading-[1.1] mb-8"
          >
            Transformamos el{' '}
            <span className="text-gradient-gold relative inline-block">
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 4px rgba(234, 179, 8, 0.3)",
                    "0 0 12px rgba(234, 179, 8, 0.6)",
                    "0 0 4px rgba(234, 179, 8, 0.3)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Metal
              </motion.span>
              <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 8" preserveAspectRatio="none" fill="none">
                <path d="M0 4C50 0 150 8 200 4" stroke="url(#gold-gradient)" strokeWidth="4" strokeLinecap="round" />
                <defs>
                  <linearGradient id="gold-gradient" x1="0" y1="0" x2="200" y2="0">
                    <stop stopColor="hsl(45, 85%, 55%)" />
                    <stop offset="0.5" stopColor="hsl(38, 90%, 60%)" />
                    <stop offset="1" stopColor="hsl(45, 85%, 55%)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <br />
            <span className="text-foreground/90">en Obras de Arte</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
          >
            Fabricación de estructuras metálicas, carpintería de aluminio,
            cerrajería, forja artística y automatización de puertas.
            <span className="text-foreground font-medium"> Más de 20 años de experiencia en Andalucía.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a href="#contacto" className="btn-premium text-lg px-10 py-5 text-center">
              Solicitar Presupuesto
            </a>
            <a href="#proyectos" className="btn-outline-premium text-lg px-10 py-5 text-center">
              Ver Proyectos
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
          >
            {[
              { number: '20+', label: 'Años de Experiencia' },
              { number: '500+', label: 'Proyectos Completados' },
              { number: '100%', label: 'Clientes Satisfechos' },
              { number: '24h', label: 'Respuesta Garantizada' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 lg:p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 group hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-gold font-display mb-2">
                  {stat.number}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile to avoid overlapping */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <a
          href="#servicios"
          className="flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
          aria-label="Scroll hacia servicios"
        >
          <span className="text-sm uppercase tracking-[0.3em] font-medium">Descubre más</span>
          <div className="w-10 h-16 rounded-full border-2 border-current flex items-start justify-center pt-2 group-hover:border-primary transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-3 bg-current rounded-full"
            />
          </div>
        </a>
      </motion.div>
    </section>
  )
}
