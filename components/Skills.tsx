'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { skills } from '@/data/skills';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  const t = useTranslations('skills');

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-dark-surface">
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((category) => (
            <motion.div
              key={category.category}
              variants={item}
              className="bg-white dark:bg-dark-bg rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <h3 className="font-semibold text-lg mb-4 text-teal-primary">
                {t(`categories.${category.category}`)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-teal-primary/10 text-teal-primary text-sm rounded-full font-medium"
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
