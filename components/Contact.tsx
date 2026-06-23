'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const t = useTranslations('contact');

  const links = [
    {
      icon: Github,
      label: 'GitHub',
      handle: '@BranJame45',
      href: 'https://github.com/BranJame45',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      handle: 'brandon-jame-isla',
      href: 'https://www.linkedin.com/in/brandon-jame-isla-cconislla-174792313',
    },
    {
      icon: Mail,
      label: 'Email',
      handle: 'islacconislla@gmail.com',
      href: 'mailto:islacconislla@gmail.com',
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-[#EEF2F7] dark:bg-[#1E293B]/50">
      <div className="max-w-3xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="section-label mb-2">06 — contacto</p>
          <h2 className="text-4xl font-extrabold tracking-tight">{t('title')}</h2>
          <div className="mt-3 mx-auto w-12 h-1 rounded-full bg-teal-primary" />
        </motion.div>

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden mb-8"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-primary via-teal-500 to-blue-500" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_60%)]" />

          <div className="relative p-8 md:p-10 text-white">
            <p className="text-teal-100 text-sm font-mono-code tracking-widest uppercase mb-3">
              {t('subtitle')}
            </p>
            <h3 className="text-2xl md:text-3xl font-extrabold mb-2 leading-tight">
              islacconislla@gmail.com
            </h3>
            <p className="text-teal-100 text-sm mb-6">Lima, Perú · (+51) 904 802 329</p>
            <a
              href="mailto:islacconislla@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-teal-600 rounded-xl font-bold text-sm hover:bg-teal-50 transition-colors shadow-lg"
            >
              {t('email_label')}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>

        {/* Social links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -3 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-4 bg-white dark:bg-[#0F172A] rounded-2xl border border-slate-200 dark:border-gray-800 hover:border-teal-primary/50 hover:shadow-md transition-all"
            >
              <div className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 group-hover:bg-teal-primary/10 transition-colors">
                <link.icon size={18} className="text-gray-600 dark:text-gray-400 group-hover:text-teal-primary transition-colors" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-500 font-medium">{link.label}</p>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 truncate">{link.handle}</p>
              </div>
              <ArrowUpRight size={14} className="ml-auto text-gray-300 dark:text-gray-700 group-hover:text-teal-primary transition-colors shrink-0" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
