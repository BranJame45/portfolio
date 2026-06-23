'use client';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden bg-gradient-to-b from-teal-50/60 via-white to-[#EEF2F7] dark:from-transparent dark:via-transparent dark:to-transparent">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-primary/20 dark:bg-teal-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-400/15 dark:bg-blue-500/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-teal-primary/10 dark:bg-teal-primary/5 rounded-full blur-[80px]" />
      </div>

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, #14B8A6 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative text-center max-w-3xl">
        {/* Open to work badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-teal-primary/30 bg-teal-primary/5 text-teal-primary text-sm font-medium"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-primary" />
          </span>
          {locale === 'es' ? 'Disponible para nuevas oportunidades' : 'Open to new opportunities'}
          <MapPin size={12} />
          Lima, Perú
        </motion.div>

        {/* Name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono-code text-teal-primary text-sm tracking-widest uppercase mb-3"
        >
          {t('greeting')}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold mb-2 tracking-tight leading-none"
        >
          Brandon Jame
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl md:text-7xl font-extrabold mb-7 tracking-tight leading-none gradient-text"
        >
          Isla Cconislla
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium mb-5"
        >
          {t('title')}
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-base text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {t('subtitle')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="group px-8 py-3.5 bg-teal-primary text-white rounded-xl font-semibold hover:bg-teal-600 transition-all text-center shadow-lg shadow-teal-primary/25 hover:shadow-teal-primary/40 hover:-translate-y-0.5"
          >
            {t('cta_projects')}
          </a>
          <a
            href={locale === 'en' ? '/cv-en.pdf' : '/cv-es.pdf'}
            download
            className="px-8 py-3.5 border-2 border-teal-primary/60 text-teal-primary rounded-xl font-semibold hover:border-teal-primary hover:bg-teal-primary/5 transition-all text-center hover:-translate-y-0.5"
          >
            {t('cta_cv')}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20"
        >
          <a href="#about" className="inline-flex flex-col items-center gap-2 text-gray-400 hover:text-teal-primary transition-colors">
            <span className="text-xs font-mono-code tracking-widest uppercase">scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
