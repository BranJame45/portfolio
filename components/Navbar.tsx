'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navLinks = ['about', 'skills', 'projects', 'experience', 'certifications', 'contact'] as const;

export default function Navbar() {
  const t = useTranslations('nav');
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-dark-bg/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo('hero')}
          className="text-xl font-bold text-teal-primary hover:text-teal-600 transition-colors"
        >
          Brandon Isla
        </button>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-sm font-medium hover:text-teal-primary transition-colors"
            >
              {t(link)}
            </button>
          ))}
          <div className="flex items-center gap-1 ml-4 pl-4 border-l border-gray-200 dark:border-gray-700">
            <button
              onClick={() => router.replace(pathname, { locale: 'es' })}
              className="text-sm px-2 py-1 rounded hover:text-teal-primary transition-colors"
            >
              ES
            </button>
            <span className="text-gray-400">|</span>
            <button
              onClick={() => router.replace(pathname, { locale: 'en' })}
              className="text-sm px-2 py-1 rounded hover:text-teal-primary transition-colors"
            >
              EN
            </button>
          </div>
          <ThemeToggle />
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-dark-surface border-t border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="text-left text-sm py-2 hover:text-teal-primary transition-colors"
                >
                  {t(link)}
                </button>
              ))}
              <div className="flex items-center gap-2 pt-3 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => router.replace(pathname, { locale: 'es' })}
                  className="text-sm px-3 py-1 rounded hover:text-teal-primary transition-colors"
                >
                  ES
                </button>
                <span className="text-gray-400">|</span>
                <button
                  onClick={() => router.replace(pathname, { locale: 'en' })}
                  className="text-sm px-3 py-1 rounded hover:text-teal-primary transition-colors"
                >
                  EN
                </button>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
