export interface SkillCategory {
  category: 'backend' | 'frontend' | 'cloud' | 'devops' | 'databases' | 'tools' | 'ai' | 'other';
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: 'backend',
    items: ['Node.js', 'NestJS', 'Express.js', 'Python', 'FastAPI'],
  },
  {
    category: 'frontend',
    items: ['Next.js', 'React', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'databases',
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'Prisma', 'SQLAlchemy'],
  },
  {
    category: 'cloud',
    items: ['AWS Lambda', 'Google Cloud Platform'],
  },
  {
    category: 'devops',
    items: ['Docker', 'GitHub Actions'],
  },
  {
    category: 'tools',
    items: ['Git', 'GitHub', 'GitLab', 'Swagger', 'Postman'],
  },
  {
    category: 'ai',
    items: ['Groq API', 'REST APIs', 'Bearer Token'],
  },
  {
    category: 'other',
    items: ['FreeMarker', 'Oracle NetSuite', 'Scrum'],
  },
];
