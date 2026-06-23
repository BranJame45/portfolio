export interface Certification {
  name: { es: string; en: string };
  url: string;
  institution: string;
  year: number;
}

export const certifications: Certification[] = [
  {
    name: { es: 'AWS Lambda y Amazon API Gateway', en: 'AWS Lambda and Amazon API Gateway' },
    url: 'https://drive.google.com/file/d/15LHTdci6aHSW1e0XjcNRjswHuefVLR2d/view',
    institution: 'AWS SkillBuilder',
    year: 2026,
  },
  {
    name: { es: 'Introducción a Google Cloud Platform', en: 'Introduction to Google Cloud Platform' },
    url: 'https://drive.google.com/file/d/1rp7_JkCUj_xc0x1DID4ZbanL1pKefkAc/view',
    institution: 'Platzi',
    year: 2025,
  },
  {
    name: { es: 'Introducción a la Automatización de Pruebas', en: 'Introduction to Test Automation' },
    url: 'https://drive.google.com/file/d/1bpFrPEhPXSmBbaeLw04q08kLOc13yy-R/view',
    institution: 'Platzi',
    year: 2025,
  },
  {
    name: { es: 'Curso de Redes Informáticas de Internet', en: 'Internet Computer Networks Course' },
    url: 'https://drive.google.com/file/d/1HRKieLvnwJyvxVr1t7Cdrd_4VID4VW3W3qGD/view',
    institution: 'Platzi',
    year: 2025,
  },
  {
    name: { es: 'Hacking Ético con Kali Linux', en: 'Ethical Hacking with Kali Linux' },
    url: 'https://drive.google.com/file/d/1PEjxSZKgIjCtWcD5BKxd2E2WYVRbY2eZ/view',
    institution: 'Udemy',
    year: 2025,
  },
  {
    name: { es: 'Hacking Ético con Metasploit Framework', en: 'Ethical Hacking with Metasploit Framework' },
    url: 'https://drive.google.com/file/d/1ONlSYmTixpdc5lsnrYCB8o8okBW_1p2v/view',
    institution: 'Udemy',
    year: 2025,
  },
  {
    name: { es: 'Máster en HTML5', en: 'HTML5 Master' },
    url: 'https://drive.google.com/file/d/1voAjxd45GrQLCpLWGlYwCsmjyz1zkBxm/view',
    institution: 'Udemy',
    year: 2025,
  },
  {
    name: { es: 'Scrum Fundamentals Certified', en: 'Scrum Fundamentals Certified' },
    url: 'https://drive.google.com/file/d/19PTNsXtL1sjglwaSpT8J_LbjsDp6WNOI/view',
    institution: 'SCRUMstudy',
    year: 2025,
  },
  {
    name: { es: 'Curso de Fundamentos de Pruebas de Software', en: 'Software Testing Fundamentals Course' },
    url: 'https://drive.google.com/file/d/1yv9nnqmooIJ1T6uE2uVejJT-2XI7Olo3/view',
    institution: 'Platzi',
    year: 2025,
  },
];
