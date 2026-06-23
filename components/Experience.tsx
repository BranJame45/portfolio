'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { experience } from '@/data/experience';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const t = useTranslations('experience');

  return (
    <section id="experience" className="py-24 px-4 bg-teal-50/50 dark:bg-[#1E293B]/50">
      <div className="max-w-3xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="section-label mb-2">04 — experiencia</p>
          <h2 className="text-4xl font-extrabold tracking-tight">{t('title')}</h2>
          <div className="mt-3 mx-auto w-12 h-1 rounded-full bg-teal-primary" />
        </motion.div>

        <div className="relative pl-6 border-l-2 border-gray-200 dark:border-gray-700/60">
          {experience.map((item, i) => {
            const Icon = item.type === 'work' ? Briefcase : GraduationCap;
            const bullets = item.bulletCount
              ? Array.from({ length: item.bulletCount }, (_, j) => j + 1)
              : [];

            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.4 }}
                className="relative mb-10 last:mb-0 pl-6"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[calc(1.5rem+1px)] top-0 w-6 h-6 bg-teal-primary rounded-full flex items-center justify-center ring-4 ring-white dark:ring-[#1E293B]">
                  <Icon size={11} className="text-white" />
                </div>

                {/* Card */}
                <div className="bg-white dark:bg-[#0F172A] rounded-2xl p-5 border border-teal-100 dark:border-gray-800 shadow-sm shadow-teal-900/5 hover:shadow-md hover:border-teal-primary/40 transition-all">
                  <span className="font-mono-code text-xs text-teal-primary font-medium">
                    {t(`${item.key}_date`)}
                  </span>
                  <h3 className="text-base font-bold mt-1 text-gray-900 dark:text-gray-100">
                    {t(`${item.key}_title`)}
                  </h3>
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                    {t(`${item.key}_company`)}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mb-3 italic leading-relaxed">
                    {t(`${item.key}_desc`)}
                  </p>
                  {bullets.length > 0 && (
                    <ul className="space-y-2">
                      {bullets.map((n) => (
                        <li key={n} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-teal-primary shrink-0" />
                          <span className="leading-relaxed">{t(`${item.key}_bullet${n}`)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
