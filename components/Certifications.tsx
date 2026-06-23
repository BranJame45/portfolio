'use client';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
import { certifications } from '@/data/certifications';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function Certifications() {
  const t = useTranslations('certifications');
  const locale = useLocale() as 'es' | 'en';

  return (
    <section id="certifications" className="py-24 px-4 bg-white dark:bg-transparent">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="section-label mb-2">05 — certificaciones</p>
          <h2 className="text-4xl font-extrabold tracking-tight">{t('title')}</h2>
          <div className="mt-3 mx-auto w-12 h-1 rounded-full bg-teal-primary" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {certifications.map((cert, i) => (
            <motion.a
              key={i}
              variants={item}
              whileHover={{ y: -3 }}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 p-4 bg-slate-50 dark:bg-[#0F172A] rounded-xl border border-slate-200 dark:border-gray-800 hover:border-teal-primary/50 hover:shadow-md hover:bg-white transition-all"
            >
              <div className="mt-0.5 p-1.5 rounded-lg bg-teal-primary/10 shrink-0">
                <Award size={14} className="text-teal-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-snug">
                  {cert.name[locale]}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {cert.institution} · {cert.year}
                </p>
              </div>
              <ExternalLink
                size={13}
                className="text-gray-300 dark:text-gray-700 group-hover:text-teal-primary transition-colors shrink-0 mt-0.5"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
