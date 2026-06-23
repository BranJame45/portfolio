export interface Project {
  name: { es: string; en: string };
  description: { es: string; en: string };
  stack: string[];
  github: string;
  demo: string | null;
  status: 'in-progress' | 'completed';
}

export const projects: Project[] = [
  {
    name: { es: 'FinSmart', en: 'FinSmart' },
    description: {
      es: 'Plataforma financiera personal con inteligencia artificial. Permite registrar ingresos, gastos, simular inversiones en plazo fijo y recibir recomendaciones personalizadas de una IA que conoce tu contexto financiero real.',
      en: 'Personal finance platform with artificial intelligence. Track income, expenses, simulate fixed-term investments and get personalized recommendations from an AI that knows your real financial context.',
    },
    stack: ['NestJS', 'Next.js', 'PostgreSQL', 'Groq', 'Docker', 'Prisma'],
    github: 'https://github.com/BranJame45/finsmart',
    demo: null,
    status: 'in-progress',
  },
  {
    name: { es: 'LifeOS', en: 'LifeOS' },
    description: {
      es: 'Asistente de estilo de vida impulsado por IA. Ayuda a gestionar hábitos, rutinas, salud y finanzas personales con recomendaciones contextuales basadas en datos del usuario.',
      en: 'AI-powered lifestyle assistant. Helps manage habits, routines, health and personal finances with contextual recommendations based on user data.',
    },
    stack: ['NestJS', 'Next.js', 'PostgreSQL', 'Groq', 'Docker', 'Recharts'],
    github: 'https://github.com/BranJame45/lifeos',
    demo: null,
    status: 'in-progress',
  },
  {
    name: { es: 'AI Document Analyzer', en: 'AI Document Analyzer' },
    description: {
      es: 'API de análisis de documentos con LLM. Extrae datos estructurados de PDFs e imágenes usando OCR, Groq API y templates personalizados para facturas, CVs y contratos.',
      en: 'Document analysis API with LLM. Extracts structured data from PDFs and images using OCR, Groq API and custom templates for invoices, CVs and contracts.',
    },
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Groq', 'Docker', 'Tesseract'],
    github: 'https://github.com/BranJame45/ai-document-analyzer',
    demo: null,
    status: 'in-progress',
  },
  {
    name: { es: 'Portfolio', en: 'Portfolio' },
    description: {
      es: 'Sitio web personal de portafolio profesional. Diseñado con Next.js 15, Tailwind CSS y Framer Motion. Bilingüe (ES/EN) con modo oscuro y claro.',
      en: 'Personal portfolio website. Built with Next.js 15, Tailwind CSS and Framer Motion. Bilingual (ES/EN) with dark and light mode.',
    },
    stack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'next-intl', 'next-themes'],
    github: 'https://github.com/BranJame45/portfolio',
    demo: 'https://branjame45.vercel.app',
    status: 'completed',
  },
];
