'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function About() {
  const t = useTranslations('about');

  const quickData = [
    { label: t('location_label'), value: t('location_value') },
    { label: t('availability_label'), value: t('availability_value') },
    { label: t('languages_label'), value: t('languages_value') },
    { label: t('university_label'), value: t('university_value') },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          {t('title')}
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-48 h-48 rounded-full bg-gradient-to-br from-teal-primary to-blue-500 flex items-center justify-center text-white text-5xl font-bold shrink-0"
          >
            BI
          </motion.div>
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed"
            >
              {t('p1')}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed"
            >
              {t('p2')}
            </motion.p>
            <div className="grid grid-cols-2 gap-4">
              {quickData.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className="text-sm text-gray-500 dark:text-gray-500">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
