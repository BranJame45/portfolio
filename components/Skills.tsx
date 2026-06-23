'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { skills } from '@/data/skills';

const categoryIcon: Record<string, string> = {
  backend:   '⚙️',
  databases: '🗄️',
  frontend:  '🖥️',
  cloud:     '☁️',
  devops:    '🔀',
  tools:     '🔧',
  ai:        '🤖',
  other:     '📋',
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  const t = useTranslations('skills');

  return (
    <section id="skills" className="py-24 px-4 bg-teal-50/70 dark:bg-[#1E293B]/50">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="section-label mb-2">02 — stack</p>
          <h2 className="text-4xl font-extrabold tracking-tight">{t('title')}</h2>
          <div className="mt-3 mx-auto w-12 h-1 rounded-full bg-teal-primary" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {skills.map((category) => (
            <motion.div
              key={category.category}
              variants={item}
              whileHover={{ y: -3 }}
              className="bg-white dark:bg-[#0F172A] rounded-2xl p-5 shadow-sm shadow-teal-900/5 border border-teal-100 dark:border-gray-800 hover:border-teal-primary/50 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-xl">{categoryIcon[category.category]}</span>
                <h3 className="font-bold text-sm text-gray-800 dark:text-gray-200">
                  {t(`categories.${category.category}`)}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-teal-50 dark:bg-teal-primary/10 text-teal-700 dark:text-teal-primary text-[11px] rounded-lg font-semibold border border-teal-200 dark:border-teal-primary/20 hover:bg-teal-100 dark:hover:bg-teal-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
