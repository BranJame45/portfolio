'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, GraduationCap } from 'lucide-react';

const stats = [
  { value: '2+', label: 'Años exp.' },
  { value: '4', label: 'Proyectos' },
  { value: '9', label: 'Certs.' },
  { value: '10°', label: 'Ciclo UNTELS' },
];

export default function About() {
  const t = useTranslations('about');

  const quickData = [
    { icon: MapPin,       label: t('location_label'),     value: t('location_value') },
    { icon: Clock,        label: t('availability_label'), value: t('availability_value') },
    { icon: Phone,        label: t('phone_label'),        value: t('phone_value') },
    { icon: GraduationCap,label: t('university_label'),   value: t('university_value') },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-white dark:bg-transparent">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="section-label mb-2">01 — sobre mí</p>
          <h2 className="text-4xl font-extrabold tracking-tight">{t('title')}</h2>
          <div className="mt-3 mx-auto w-12 h-1 rounded-full bg-teal-primary" />
        </motion.div>

        <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-start">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mx-auto md:mx-0 shrink-0"
          >
            <div className="relative">
              <div className="w-44 h-44 rounded-2xl p-[3px] bg-gradient-to-br from-teal-primary via-teal-400 to-blue-500 shadow-xl shadow-teal-primary/20">
                <div className="w-full h-full rounded-2xl bg-[#1E293B] flex items-center justify-center overflow-hidden">
                  <img
                    src="/logo.png"
                    alt="Brandon Isla"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const t = e.target as HTMLImageElement;
                      t.style.display = 'none';
                      if (t.parentElement) {
                        t.parentElement.innerHTML = '<span style="color:#14B8A6;font-size:3rem;font-weight:700">BJ</span>';
                      }
                    }}
                  />
                </div>
              </div>
              {/* Decorative corner accent */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-teal-primary/20 border border-teal-primary/30" />
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-[15px]"
            >
              {t('p1')}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-[15px]"
            >
              {t('p2')}
            </motion.p>

            {/* Info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {quickData.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-[#1E293B] border border-slate-200 dark:border-gray-700/60"
                  >
                    <div className="mt-0.5 p-1.5 rounded-lg bg-teal-primary/10 shrink-0">
                      <Icon size={13} className="text-teal-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-gray-500 dark:text-gray-500 uppercase tracking-wider font-medium">{item.label}</p>
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 truncate">{item.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="grid grid-cols-4 gap-3"
            >
              {stats.map((s) => (
                <div key={s.value} className="text-center p-3 rounded-xl bg-teal-primary/5 border border-teal-primary/15">
                  <p className="text-2xl font-extrabold text-teal-primary leading-none">{s.value}</p>
                  <p className="text-[10px] text-gray-500 dark:text-gray-500 mt-1 font-medium uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
