'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { experience } from '@/data/experience';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const t = useTranslations('experience');

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          {t('title')}
        </motion.h2>
        <div className="relative pl-10 border-l-2 border-gray-200 dark:border-gray-700">
          {experience.map((item, i) => {
            const Icon = item.type === 'work' ? Briefcase : GraduationCap;
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative mb-10 last:mb-0"
              >
                <div className="absolute -left-[calc(1.25rem+5px)] top-1 w-5 h-5 bg-teal-primary rounded-full flex items-center justify-center border-4 border-white dark:border-dark-bg">
                  <Icon size={10} className="text-white" />
                </div>
                <span className="text-sm text-teal-primary font-semibold">
                  {t(`${item.key}_date`)}
                </span>
                <h3 className="text-lg font-semibold mt-1">{t(`${item.key}_title`)}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t(`${item.key}_company`)}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                  {t(`${item.key}_desc`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
