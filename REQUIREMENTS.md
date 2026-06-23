# Portafolio Personal Web — Brandon Jame Isla Cconislla

## Contexto General

Sitio web personal de portafolio para Brandon Isla, desarrollador backend junior. El objetivo es presentar de forma profesional su perfil, proyectos, experiencia y habilidades a reclutadores y empresas. Es la primera impresión digital del desarrollador, por lo que debe verse cuidado, moderno y cargar rápido.

El sitio es estático en su mayoría (no necesita backend propio), bilingüe (español/inglés con toggle), con modo oscuro/claro, y hospedado gratuitamente en Vercel o GitHub Pages.

---

## Decisiones de Diseño

- **Color dominante:** Verde agua / teal (aproximado: `#0D9488` o `#14B8A6`)
- **Estilo:** Punto medio entre minimalista y con animaciones — limpio pero no aburrido. Animaciones sutiles al hacer scroll (fade-in, slide), no animaciones pesadas o flashy.
- **Modo oscuro por defecto**, con toggle para modo claro
- **Bilingüe:** Español e inglés, con toggle visible en el navbar. El CV descargable también está disponible en el idioma seleccionado (o uno solo si no hay traducción disponible)
- **Sin formulario de contacto** — solo links directos (email, LinkedIn, GitHub)
- **Sin sección de Blog** por ahora
- **Sin estadísticas de GitHub** (repositorios, commits, etc.)
- **Sin filtros de proyectos** porque por ahora son pocos
- **Responsive:** funciona bien en móvil, tablet y desktop

---

## Stack Tecnológico

| Capa | Tecnología |
|---|---|
| Framework | **Next.js 15** (App Router) |
| Estilos | **Tailwind CSS** |
| Animaciones | **Framer Motion** (scroll animations, fade-in) |
| Internacionalización | **next-intl** (ES / EN) |
| Iconos | **Lucide React** + **Simple Icons** (para logos de tecnologías) |
| Modo oscuro | next-themes |
| Deploy | **Vercel** (free tier) |
| Dominio | `brandonisla.vercel.app` por ahora (gratis) |

No necesita backend propio ni base de datos — todo el contenido es estático en archivos de configuración JSON/TS.

---

## Secciones del Sitio

### 1. Navbar
- Logo / nombre (izquierda)
- Links de navegación: Sobre mí, Skills, Proyectos, Experiencia, Certificaciones, Contacto
- Toggle de idioma (ES / EN) con bandera o texto
- Toggle de modo (oscuro/claro) con ícono luna/sol
- En móvil: menú hamburguesa

### 2. Hero
- Nombre completo: **Brandon Jame Isla Cconislla**
- Título profesional (según idioma):
  - ES: "Desarrollador Backend Junior"
  - EN: "Junior Backend Developer"
- Subtítulo breve (1 línea): experiencia en APIs REST, integraciones y cloud
- CTA buttons: "Ver proyectos" (scroll) + "Descargar CV" (descarga PDF)
- Animación sutil de entrada (fade + slide up)
- Fondo: gradiente oscuro con acento verde agua, sin imágenes pesadas

### 3. Sobre Mí
- Foto de perfil (circular, placeholder si no hay foto disponible)
- Párrafo de 3-4 líneas sobre quién es, qué hace y qué busca
- Datos rápidos (grid pequeño):
  - Ubicación: Rímac, Lima – Perú
  - Disponibilidad: Tiempo completo / Por proyectos
  - Idiomas: Español (nativo)
  - Universidad: UNTELS – Ingeniería de Sistemas (10° ciclo)

### 4. Skills / Tecnologías
Grid de chips/badges con íconos de tecnologías agrupadas por categoría:

- **Backend:** Node.js, NestJS, Express.js, Python, FastAPI
- **Frontend:** Next.js, React, HTML, CSS, Tailwind
- **Bases de datos:** PostgreSQL, MySQL, SQL Server, Prisma, SQLAlchemy
- **Cloud:** AWS (Lambda), Google Cloud Platform
- **DevOps:** Docker, GitHub Actions (básico)
- **Herramientas:** Git, GitHub, GitLab, Swagger, Postman
- **IA / Integraciones:** Groq API, REST APIs, Bearer Token
- **Otros:** FreeMarker, Oracle NetSuite, Scrum

### 5. Proyectos
Tarjetas de proyectos, una por proyecto, con:
- Nombre del proyecto
- Descripción breve (2-3 líneas)
- Stack de tecnologías usadas (chips pequeños)
- Botón "Ver en GitHub" → link al repo
- Botón "Ver demo" → link a la app desplegada (si existe)
- Estado: "En desarrollo" | "Completado"

Proyectos a mostrar (en este orden):
1. **FinSmart** — Plataforma financiera personal con IA (NestJS, Next.js, Groq, PostgreSQL, Docker)
2. **LifeOS** — Asistente de estilo de vida con IA (NestJS, Next.js, Groq, Docker)
3. **AI Document Analyzer** — API de análisis de documentos con LLM (FastAPI, Python, Groq, Docker)
4. **Portfolio** — Este mismo sitio (Next.js, Tailwind, Framer Motion)

**Nota:** Actualizar los links y estados a medida que los proyectos se completan.

### 6. Experiencia Laboral
Timeline vertical con:

**Developer Junior | LatamReady S.R.L. | Mayo 2025 – Actualidad**
- Desarrollo de integraciones con Oracle NetSuite ERP
- Generación automática de XML para facturación electrónica (España, Colombia)
- Integración de APIs REST con autenticación Bearer Token
- Documentación con Swagger

**Practicante en Desarrollo y Gestión de Datos | IZIPAY | Enero 2025 – Marzo 2025**
- Script Python para web scraping de INDECOPI
- Migración y clasificación de documentación histórica
- Automatización de reportes con Excel y tablas dinámicas

**Educación:**
- Ingeniería de Sistemas | UNTELS | 2021 – 2026 (esperado)

### 7. Certificaciones
Grid de tarjetas de certificaciones, cada una con:
- Nombre del certificado (clicable, abre link al certificado)
- Institución emisora (Platzi, Udemy, AWS, SCRUMstudy)
- Año
- Ícono o badge

Certificaciones a incluir:
1. AWS Lambda Foundations (SkillBuilder AWS, 2026) — link a Google Drive
2. Introducción a Google Cloud Platform (Platzi, 2025)
3. Introducción a la Automatización de Pruebas (Platzi, 2025)
4. Curso de Redes Informáticas de Internet (Platzi, 2025)
5. Hacking Ético con Kali Linux (Udemy, 2025)
6. Hacking Ético con Metasploit Framework (Udemy, 2025)
7. Máster en HTML5 (Udemy, 2025)
8. Scrum Fundamentals Certified (SCRUMstudy, 2025)
9. Curso de Fundamentos de Pruebas de Software (Platzi, 2025)

### 8. Contacto
Sección simple con:
- Texto invitando a contactar
- Botones/links con íconos:
  - Email: `islacconislla@gmail.com`
  - LinkedIn: `linkedin.com/in/brandon-jame-isla-cconislla-174792313`
  - GitHub: `github.com/[usuario]`
- Sin formulario de contacto

---

## Internacionalización (next-intl)

Estructura de archivos de traducción:

```
messages/
├── es.json
└── en.json
```

Todos los textos del sitio deben estar en ambos archivos. El toggle guarda la preferencia en localStorage.

El CV descargable:
- Si hay versión en inglés disponible: botón descarga el CV en el idioma seleccionado
- Si solo hay versión en español: botón descarga la versión en español sin importar el idioma seleccionado

---

## Animaciones (Framer Motion)

- **Hero:** fade + slide-up al cargar la página
- **Secciones al hacer scroll:** fade-in cuando entran en el viewport (usando `whileInView`)
- **Tarjetas de proyectos:** hover con ligero scale-up y sombra
- **Badges de skills:** fade-in escalonado (stagger)
- **Timeline de experiencia:** slide-in desde la izquierda al aparecer
- **Sin animaciones de fondo** (partículas, etc.) — demasiado pesadas

---

## Estructura de Carpetas

```
portfolio/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   └── page.tsx              (una sola página con scroll)
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
│   ├── projects.ts               (datos de proyectos)
│   ├── skills.ts                 (lista de tecnologías)
│   ├── experience.ts             (experiencia laboral)
│   └── certifications.ts         (certificaciones con links)
├── messages/
│   ├── es.json
│   └── en.json
├── public/
│   ├── cv-es.pdf                 (CV en español)
│   └── profile.jpg               (foto de perfil)
├── next.config.ts
├── tailwind.config.ts
└── README.md
```

---

## Paleta de Colores (Tailwind)

```
Modo oscuro (por defecto):
  Background:  #0F172A (slate-900)
  Surface:     #1E293B (slate-800)
  Accent:      #14B8A6 (teal-500)  ← verde agua
  Text:        #F1F5F9 (slate-100)
  Muted:       #94A3B8 (slate-400)

Modo claro:
  Background:  #F8FAFC (slate-50)
  Surface:     #FFFFFF
  Accent:      #0D9488 (teal-600)
  Text:        #0F172A (slate-900)
  Muted:       #64748B (slate-500)
```

---

## Fases de Desarrollo

### Fase 1: Setup + Layout base (Día 1)
- Inicializar Next.js 15 + Tailwind + next-intl + next-themes
- Configurar paleta de colores en Tailwind
- Navbar responsivo con toggles de idioma y modo
- Layout con scroll de una sola página

### Fase 2: Hero + Sobre Mí + Skills (Día 2)
- Sección Hero con animaciones Framer Motion
- Sección Sobre Mí con foto placeholder
- Grid de Skills con íconos

### Fase 3: Proyectos + Experiencia + Certificaciones (Día 3)
- Tarjetas de proyectos (con estado "En desarrollo" por ahora)
- Timeline de experiencia
- Grid de certificaciones con links

### Fase 4: Contacto + i18n + Deploy (Día 4)
- Sección de contacto
- Traducir todos los textos a inglés en `en.json`
- CV en PDF incluido en `/public`
- Deploy en Vercel
- README con preview del sitio

---

## Criterios de Éxito

- El sitio carga en menos de 3 segundos
- Funciona correctamente en móvil (responsive)
- El toggle de idioma cambia todos los textos correctamente
- El toggle de modo oscuro/claro funciona y persiste
- El CV se descarga correctamente
- Los links a GitHub, LinkedIn y certificaciones funcionan
- Las animaciones son suaves y no afectan el rendimiento
- Está desplegado en Vercel y accesible públicamente
