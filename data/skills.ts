export interface SkillCategory {
  category: 'backend' | 'frontend' | 'cloud' | 'devops' | 'databases' | 'tools' | 'ai' | 'other';
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: 'backend',
    items: ['Node.js', 'Express.js', 'NestJS', 'Python', 'FastAPI'],
  },
  {
    category: 'databases',
    items: ['PostgreSQL', 'SQL Server', 'MySQL', 'Prisma', 'SQLAlchemy'],
  },
  {
    category: 'frontend',
    items: ['Next.js', 'React', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'cloud',
    items: ['Docker', 'AWS Lambda', 'Google Cloud Platform', 'GitHub Actions'],
  },
  {
    category: 'devops',
    items: ['Git', 'GitHub', 'GitLab', 'GitKraken', 'Postman', 'Swagger'],
  },
  {
    category: 'tools',
    items: ['FreeMarker', 'Oracle NetSuite', 'REST APIs', 'Bearer Token', 'Kali Linux', 'Metasploit', 'Nmap'],
  },
  {
    category: 'ai',
    items: ['Claude Code', 'Antigravity', 'Groq API'],
  },
  {
    category: 'other',
    items: ['Scrum', 'Patrón MVC', 'Diagramas UML', 'Excel Avanzado'],
  },
];
