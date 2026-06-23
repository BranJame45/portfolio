'use client';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Clock } from 'lucide-react';
import { projects } from '@/data/projects';

export default function Projects() {
  const t = useTranslations('projects');
  const locale = useLocale() as 'es' | 'en';

  return (
    <section id="projects" className="py-24 px-4 bg-white dark:bg-transparent">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="section-label mb-2">03 — proyectos</p>
          <h2 className="text-4xl font-extrabold tracking-tight">{t('title')}</h2>
          <div className="mt-3 mx-auto w-12 h-1 rounded-full bg-teal-primary" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.name.en}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 280, damping: 22 }}
              className="group relative bg-slate-50 dark:bg-[#0F172A] rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-gray-800 hover:border-teal-primary/50 hover:shadow-lg hover:shadow-teal-primary/5 transition-all overflow-hidden"
            >
              {/* Project number */}
              <span className="absolute top-5 right-5 font-mono-code text-4xl font-black text-gray-100 dark:text-gray-800 select-none group-hover:text-teal-primary/15 transition-colors">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Status badge */}
              {project.status === 'in-progress' && (
                <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 mb-3 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 rounded-full font-medium border border-amber-200 dark:border-amber-800/50">
                  <Clock size={11} />
                  {t('in_progress')}
                </span>
              )}

              <h3 className="text-lg font-bold mb-2 pr-10 text-gray-900 dark:text-gray-100 group-hover:text-teal-primary transition-colors">
                {project.name[locale]}
              </h3>

              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                {project.description[locale]}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[11px] bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-teal-primary transition-colors font-medium"
                >
                  <Github size={15} />
                  {t('view_github')}
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-teal-primary transition-colors font-medium"
                  >
                    <ExternalLink size={15} />
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
