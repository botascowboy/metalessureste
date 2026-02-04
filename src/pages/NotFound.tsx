import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, Phone } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="relative max-w-4xl mx-auto text-center">
            {/* Decorative elements */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              {/* 404 Number */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
              >
                <span className="text-[150px] md:text-[200px] lg:text-[250px] font-display font-bold text-gradient-gold leading-none select-none">
                  404
                </span>
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                  {t('not_found.title_start')}<span className="text-gradient-gold">{t('not_found.title_highlight')}</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                  {t('not_found.description')}
                </p>
              </motion.div>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
              >
                <Link to="/" className="btn-premium inline-flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  {t('not_found.button_home')}
                </Link>
                <Link to="/servicios" className="btn-outline-premium inline-flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  {t('not_found.button_services')}
                </Link>
              </motion.div>

              {/* Quick links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="card-premium rounded-3xl p-8 md:p-10"
              >
                <h2 className="text-xl font-display font-bold text-foreground mb-6">
                  {t('not_found.looking_for')}
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <Link
                    to="/servicios"
                    className="p-4 rounded-xl bg-muted/30 hover:bg-primary/10 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {t('not_found.nav.services')}
                    </span>
                  </Link>
                  <Link
                    to="/proyectos"
                    className="p-4 rounded-xl bg-muted/30 hover:bg-primary/10 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {t('not_found.nav.projects')}
                    </span>
                  </Link>
                  <Link
                    to="/nosotros"
                    className="p-4 rounded-xl bg-muted/30 hover:bg-primary/10 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {t('not_found.nav.about')}
                    </span>
                  </Link>
                  <Link
                    to="/contacto"
                    className="p-4 rounded-xl bg-muted/30 hover:bg-primary/10 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {t('not_found.nav.contact')}
                    </span>
                  </Link>
                </div>

                {/* Contact CTA */}
                <div className="mt-8 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <span className="text-muted-foreground">{t('common.need_help')}</span>
                  <a
                    href="tel:+34653940750"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    +34 653 94 07 50
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
