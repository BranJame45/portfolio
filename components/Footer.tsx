import { useTranslations } from 'next-intl';

const footerLinks = [
  { href: '#about', key: 'about' },
  { href: '#skills', key: 'skills' },
  { href: '#projects', key: 'projects' },
  { href: '#experience', key: 'experience' },
  { href: '#certifications', key: 'certifications' },
  { href: '#contact', key: 'contact' },
];

export default function Footer() {
  const t = useTranslations('nav');

  return (
    <footer className="py-8 px-4 border-t border-slate-200 dark:border-gray-800 bg-[#EEF2F7] dark:bg-[#0F172A]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-500 font-mono-code">
          &copy; 2026 · <span className="text-teal-primary font-semibold">Brandon Isla</span>
        </p>
        <div className="flex flex-wrap justify-center gap-5 text-xs font-medium">
          {footerLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-gray-400 dark:text-gray-500 hover:text-teal-primary transition-colors uppercase tracking-wide"
            >
              {t(link.key)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
