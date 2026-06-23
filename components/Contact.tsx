'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const t = useTranslations('contact');

  const links = [
    {
      icon: Mail,
      label: t('email_label'),
      href: 'mailto:islacconislla@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/brandon-jame-isla-cconislla-174792313',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/brandon-isla',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8"
        >
          {t('title')}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-dark-surface rounded-lg border border-gray-200 dark:border-gray-700 hover:border-teal-primary hover:text-teal-primary transition-all shadow-sm"
            >
              <link.icon size={20} />
              <span className="font-medium">{link.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
