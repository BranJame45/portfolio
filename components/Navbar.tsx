'use client';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

const navLinks = ['about', 'skills', 'projects', 'experience', 'certifications', 'contact'] as const;

export default function Navbar() {
  const t = useTranslations('nav');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    ['hero', ...navLinks].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-[#0F172A]/80 backdrop-blur-md border-b border-gray-200/60 dark:border-gray-800/60 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2.5 hover:opacity-90 transition-opacity"
        >
          <div className="w-9 h-9 rounded-lg overflow-hidden ring-2 ring-teal-primary/30">
            <Image
              src="/logo.png"
              alt="Brandon Isla"
              width={36}
              height={36}
              className="object-cover"
              onError={() => {}}
            />
          </div>
          <span className="text-base font-bold hidden sm:block">
            <span className="text-teal-primary">Brandon</span>
            <span className="text-gray-700 dark:text-gray-300"> Isla</span>
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                active === link
                  ? 'text-teal-primary'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
            >
              {t(link)}
              {active === link && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute inset-0 rounded-lg bg-teal-primary/10"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}

          <div className="flex items-center gap-0.5 ml-4 pl-4 border-l border-gray-200 dark:border-gray-700">
            <button
              onClick={() => router.replace(pathname, { locale: 'es' })}
              className="text-sm px-2.5 py-1.5 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-teal-primary transition-colors"
            >
              ES
            </button>
            <button
              onClick={() => router.replace(pathname, { locale: 'en' })}
              className="text-sm px-2.5 py-1.5 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-teal-primary transition-colors"
            >
              EN
            </button>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className={`text-left text-sm py-2.5 px-3 rounded-lg transition-colors ${
                    active === link
                      ? 'bg-teal-primary/10 text-teal-primary font-medium'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {t(link)}
                </button>
              ))}
              <div className="flex items-center gap-2 pt-3 mt-1 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => router.replace(pathname, { locale: 'es' })}
                  className="text-sm px-3 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  ES
                </button>
                <button
                  onClick={() => router.replace(pathname, { locale: 'en' })}
                  className="text-sm px-3 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
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
