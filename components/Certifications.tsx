'use client';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { certifications } from '@/data/certifications';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Certifications() {
  const t = useTranslations('certifications');
  const locale = useLocale() as 'es' | 'en';

  return (
    <section id="certifications" className="py-20 px-4 bg-gray-50 dark:bg-dark-surface">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          {t('title')}
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {certifications.map((cert, i) => (
            <motion.a
              key={i}
              variants={item}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-1 p-4 bg-white dark:bg-dark-bg rounded-lg border border-gray-200 dark:border-gray-700 hover:border-teal-primary hover:shadow-sm transition-all group"
            >
              <span className="text-sm font-medium">{cert.name[locale]}</span>
              <span className="text-xs text-gray-500">
                {cert.institution} — {cert.year}
              </span>
              <ExternalLink
                size={14}
                className="text-gray-400 group-hover:text-teal-primary transition-colors self-end"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
