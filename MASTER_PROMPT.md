# Master Prompt — Portfolio Personal (Brandon Isla)

> Copia y pega este prompt completo en una IA (Claude, Cursor, ChatGPT) para que genere el scaffold del proyecto.

---

## PROMPT

Eres un arquitecto de software frontend. Tu tarea es crear el scaffold completo de un sitio web de portafolio personal con Next.js 15.

Lee atentamente todo lo que sigue antes de escribir cualquier archivo.

---

### CONTEXTO DEL PROYECTO

Sitio web personal de portafolio para un desarrollador backend junior llamado Brandon Isla. Es una Single Page Application con scroll, bilingüe (ES/EN), modo oscuro/claro, y animaciones sutiles al hacer scroll.

**Stack:**
- Next.js 15 (App Router)
- Tailwind CSS
- Framer Motion (animaciones)
- next-intl (internacionalización ES/EN)
- next-themes (modo oscuro/claro)
- Lucide React (iconos)
- TypeScript

**Hosting:** Vercel (free tier)

**Colores:**
- Acento principal: teal (`#14B8A6` en light, `#0D9488` en dark)
- Modo oscuro: fondo `#0F172A`, superficie `#1E293B`, texto `#F1F5F9`
- Modo claro: fondo `#F8FAFC`, superficie `#FFFFFF`, texto `#0F172A`

---

### SECCIONES DE LA APP

1. **Navbar** — Logo/nombre, links de navegación, toggle idioma (ES/EN), toggle modo (oscuro/claro), menú hamburguesa en móvil
2. **Hero** — Nombre, título profesional, subtítulo, botones "Ver proyectos" y "Descargar CV"
3. **Sobre Mí** — Foto circular, párrafo, datos rápidos (ubicación, disponibilidad, idiomas, universidad)
4. **Skills** — Grid de badges agrupados por categoría (Backend, Frontend, Cloud, DevOps, Bases de datos, Herramientas, IA)
5. **Proyectos** — Tarjetas con nombre, descripción, stack chips, botón GitHub y botón Demo
6. **Experiencia** — Timeline vertical (experiencia laboral + educación)
7. **Certificaciones** — Grid de tarjetas con links clicables a los certificados
8. **Contacto** — Links directos a email, LinkedIn, GitHub (sin formulario)
9. **Footer** — Nombre, año, links

---

### ESTRUCTURA DE ARCHIVOS QUE DEBES CREAR

```
portfolio/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Certifications.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ThemeToggle.tsx
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   ├── experience.ts
│   └── certifications.ts
├── messages/
│   ├── es.json
│   └── en.json
├── public/
│   └── cv-es.pdf              (placeholder, no crear el PDF)
├── i18n/
│   ├── request.ts
│   └── routing.ts
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── PROJECT_STRUCTURE.md       (lo generas al final, explicado abajo)
```

---

### INSTRUCCIONES DE IMPLEMENTACIÓN

**1. package.json**
Incluir las siguientes dependencias:
```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "framer-motion": "^11.0.0",
    "next-intl": "^3.0.0",
    "next-themes": "^0.3.0",
    "lucide-react": "^0.400.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/react": "^18.0.0",
    "@types/node": "^20.0.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.0.0",
    "postcss": "^8.0.0"
  }
}
```

**2. tailwind.config.ts**
Extender la paleta con los colores del proyecto:
- `teal-primary`: `#14B8A6`
- `dark-bg`: `#0F172A`
- `dark-surface`: `#1E293B`
Habilitar `darkMode: 'class'`

**3. app/[locale]/layout.tsx**
- Configurar next-intl provider
- Configurar next-themes provider (defaultTheme: 'dark')
- Importar globals.css

**4. app/[locale]/page.tsx**
Renderizar todos los componentes en orden:
```tsx
<Navbar />
<Hero />
<About />
<Skills />
<Projects />
<Experience />
<Certifications />
<Contact />
<Footer />
```

**5. Componentes — reglas generales:**
- Cada componente usa `useTranslations` de next-intl para los textos
- Animaciones con Framer Motion usando `whileInView` y `initial={{ opacity: 0, y: 20 }}`
- Clases de Tailwind para estilos, sin CSS externo
- Todos los componentes son `'use client'` si usan animaciones o estado

**6. data/ — archivos de contenido:**
Estos archivos contienen los datos reales. Créalos con datos de ejemplo coherentes con el perfil de Brandon Isla (desarrollador backend junior, Lima Perú, stack Node.js/NestJS/Python/FastAPI/Docker).

`data/projects.ts` — array de proyectos:
```typescript
export const projects = [
  {
    name: { es: "FinSmart", en: "FinSmart" },
    description: { es: "Plataforma financiera personal con IA...", en: "Personal finance platform with AI..." },
    stack: ["NestJS", "Next.js", "PostgreSQL", "Groq", "Docker"],
    github: "https://github.com/brandon-isla/finsmart",
    demo: null,
    status: "in-progress"
  },
  // ... los 4 proyectos
]
```

`data/skills.ts` — agrupado por categoría
`data/experience.ts` — experiencia laboral y educación
`data/certifications.ts` — con links reales de Google Drive

**7. messages/es.json y messages/en.json**
Incluir todas las claves de traducción necesarias para todos los componentes. Ejemplo:
```json
{
  "nav": { "about": "Sobre mí", "skills": "Skills", "projects": "Proyectos" },
  "hero": { "title": "Desarrollador Backend Junior", "subtitle": "...", "cta_projects": "Ver proyectos", "cta_cv": "Descargar CV" },
  "about": { "title": "Sobre Mí", ... }
}
```

**8. i18n/routing.ts**
```typescript
import { defineRouting } from 'next-intl/routing';
export const routing = defineRouting({
  locales: ['es', 'en'],
  defaultLocale: 'es'
});
```

---

### REGLAS IMPORTANTES

- No instales ni configures bases de datos — es un sitio estático
- No crear backend — todo el contenido va en los archivos `data/`
- Los textos del CV para la sección Experiencia son:
  - **Developer Junior | LatamReady S.R.L. | Mayo 2025 – Actualidad** — integraciones NetSuite ERP, facturación electrónica España/Colombia, APIs REST, Swagger
  - **Practicante | IZIPAY | Enero 2025 – Marzo 2025** — Python scraping INDECOPI, migración de datos, reportes Excel
  - **Educación: Ingeniería de Sistemas | UNTELS | 2021 – 2026**
- Las certificaciones tienen links reales — úsalos en `data/certifications.ts`:
  - AWS Lambda: https://drive.google.com/file/d/15LHTdci6aHSW1e0XjcNRjswHuefVLR2d/view
  - GCP Intro: https://drive.google.com/file/d/1rp7_JkCUj_xc0x1DID4ZbanL1pKefkAc/view
  - Automatización Pruebas: https://drive.google.com/file/d/1bpFrPEhPXSmBbaeLw04q08kLOc13yy-R/view
  - Redes Internet: https://drive.google.com/file/d/1HRKieLvnwJyvxVr1t7Cdrd_4VID4VW3W3qGD/view
  - Kali Linux: https://drive.google.com/file/d/1PEjxSZKgIjCtWcD5BKxd2E2WYVRbY2eZ/view
  - Metasploit: https://drive.google.com/file/d/1ONlSYmTixpdc5lsnrYCB8o8okBW_1p2v/view
  - HTML5 Máster: https://drive.google.com/file/d/1voAjxd45GrQLCpLWGlYwCsmjyz1zkBxm/view
  - Scrum: https://drive.google.com/file/d/19PTNsXtL1sjglwaSpT8J_LbjsDp6WNOI/view
  - Fundamentos Testing: https://drive.google.com/file/d/1yv9nnqmooIJ1T6uE2uVejJT-2XI7Olo3/view
- El contacto es:
  - Email: islacconislla@gmail.com
  - LinkedIn: https://www.linkedin.com/in/brandon-jame-isla-cconislla-174792313
  - GitHub: (dejar placeholder `https://github.com/brandon-isla` — se actualiza después)

---

### AL FINALIZAR — genera PROJECT_STRUCTURE.md

Una vez creados todos los archivos, genera un archivo `PROJECT_STRUCTURE.md` en la raíz del proyecto con:

1. **Mapa de archivos** — árbol de carpetas con una línea de descripción por archivo
2. **Flujo de datos** — cómo fluye la información desde `data/` hasta los componentes
3. **Cómo funciona el i18n** — cómo next-intl conecta `messages/` con los componentes
4. **Cómo funciona el modo oscuro** — cómo next-themes maneja las clases
5. **Cómo agregar un proyecto nuevo** — pasos exactos para agregar una tarjeta nueva
6. **Cómo agregar una certificación nueva** — pasos exactos
7. **Cómo hacer deploy en Vercel** — comandos y pasos

Este archivo es la guía de mantenimiento del proyecto. Debe ser entendible por alguien que nunca vio el código.
