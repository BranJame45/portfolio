'use client';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="text-center max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Brandon Isla
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-3xl text-teal-primary font-semibold mb-6"
        >
          {t('title')}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto"
        >
          {t('subtitle')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-teal-primary text-white rounded-lg font-semibold hover:bg-teal-600 transition-colors text-center"
          >
            {t('cta_projects')}
          </a>
          <a
            href={locale === 'en' ? '/cv-en.pdf' : '/cv-es.pdf'}
            download
            className="px-8 py-3 border-2 border-teal-primary text-teal-primary rounded-lg font-semibold hover:bg-teal-primary hover:text-white transition-colors text-center"
          >
            {t('cta_cv')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
