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
    <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Brandon Isla.
        </p>
        <div className="flex gap-6 text-sm">
          {footerLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-gray-500 dark:text-gray-400 hover:text-teal-primary transition-colors"
            >
              {t(link.key)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
