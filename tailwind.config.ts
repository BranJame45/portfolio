import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'teal-primary': '#14B8A6',
        'teal-primary-dark': '#0D9488',
        'dark-bg': '#0F172A',
        'dark-surface': '#1E293B',
      },
    },
  },
  plugins: [],
};

export default config;
