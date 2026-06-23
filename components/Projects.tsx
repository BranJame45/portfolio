'use client';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Clock } from 'lucide-react';
import { projects } from '@/data/projects';

export default function Projects() {
  const t = useTranslations('projects');
  const locale = useLocale() as 'es' | 'en';

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          {t('title')}
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name.en}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-dark-surface rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold">{project.name[locale]}</h3>
                {project.status === 'in-progress' && (
                  <span className="flex items-center gap-1 text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full whitespace-nowrap">
                    <Clock size={12} />
                    {t('in_progress')}
                  </span>
                )}
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description[locale]}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 rounded font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-teal-primary transition-colors"
                >
                  <Github size={16} />
                  {t('view_github')}
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-teal-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    {t('view_demo')}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
