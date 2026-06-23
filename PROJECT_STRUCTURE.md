# Portfolio — Brandon Isla

## 1. Mapa de archivos

```
portfolio/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # Layout raíz: providers de next-intl y next-themes
│   │   └── page.tsx            # Página principal: renderiza todas las secciones
│   └── globals.css             # Estilos globales Tailwind
├── components/
│   ├── Navbar.tsx              # Barra de navegación fija con menú móvil
│   ├── Hero.tsx                # Sección de presentación principal
│   ├── About.tsx               # Sección "Sobre Mí" con foto y datos rápidos
│   ├── Skills.tsx              # Grid de tecnologías agrupadas por categoría
│   ├── Projects.tsx            # Tarjetas de proyectos personales
│   ├── Experience.tsx          # Timeline vertical de experiencia laboral/educación
│   ├── Certifications.tsx      # Grid de certificaciones con enlaces
│   ├── Contact.tsx             # Enlaces de contacto directo
│   ├── Footer.tsx              # Pie de página con navegación
│   └── ThemeToggle.tsx         # Botón de cambio modo oscuro/claro
├── data/
│   ├── projects.ts             # Datos de proyectos (nombre, descripción bilingüe, stack)
│   ├── skills.ts               # Skills agrupadas por categoría
│   ├── experience.ts           # Items de experiencia (claves de traducción)
│   └── certifications.ts      # Lista de certificaciones con enlaces a Google Drive
├── i18n/
│   ├── request.ts              # Configuración de carga de mensajes por locale
│   └── routing.ts              # Definición de locales y helpers de navegación
├── messages/
│   ├── es.json                 # Traducciones al español
│   └── en.json                 # Traducciones al inglés
├── public/
│   └── cv-es.pdf               # Curriculum vitae para descarga (agregar archivo real)
├── middleware.ts               # Middleware de next-intl para detección de locale
├── next.config.ts              # Configuración de Next.js con plugin de next-intl
├── tailwind.config.ts          # Configuración de Tailwind con colores personalizados
├── tsconfig.json               # Configuración de TypeScript
├── postcss.config.js           # Configuración de PostCSS para Tailwind
├── package.json                # Dependencias y scripts del proyecto
└── PROJECT_STRUCTURE.md        # Este archivo
```

## 2. Flujo de datos

1. Los **archivos `data/*.ts`** contienen arrays de objetos con propiedades bilingües (ej: `name: { es: "...", en: "..." }`).
2. Los **componentes** importan estos arrays y los renderizan usando `map()`.
3. Para textos bilingües, los componentes usan `useLocale()` de next-intl para obtener el locale activo y acceder a la propiedad correcta: `project.name[locale]`.
4. Los textos estáticos (títulos, descripciones, etiquetas) están en `messages/*.json` y se accede a ellos mediante `useTranslations('namespace')`.

```
data/projects.ts ──→ Projects.tsx (useLocale + useTranslations)
data/skills.ts    ──→ Skills.tsx   (useTranslations para nombres de categorías)
data/experience.ts ─→ Experience.tsx (useTranslations para textos)
data/certifications.ts ─→ Certifications.tsx (useLocale para nombres bilingües)
messages/es.json ──→ layout.tsx (NextIntlClientProvider) ──→ todos los componentes
messages/en.json ──→ layout.tsx (NextIntlClientProvider) ──→ todos los componentes
```

## 3. Cómo funciona el i18n (internacionalización)

**Arquitectura de next-intl v3:**

1. **`i18n/routing.ts`**: Define los locales disponibles (`es`, `en`) y el locale por defecto (`es`). Exporta hooks de navegación (`usePathname`, `useRouter`) mediante `createNavigation()`.

2. **`i18n/request.ts`**: Configura cómo cargar los mensajes para cada locale. Se ejecuta en el servidor y retorna el objeto de traducciones para el locale detectado.

3. **`middleware.ts`**: Intercepta las peticiones entrantes, detecta el locale preferido del usuario (cookie, header Accept-Language, o URL) y redirige a la ruta correcta. Por ejemplo, `localhost:3000` redirige a `localhost:3000/es` si el usuario tiene preferencia de español.

4. **`next.config.ts`**: Usa el plugin `createNextIntlPlugin()` para integrar next-intl con el sistema de compilación de Next.js.

5. **`app/[locale]/layout.tsx`**: Provee `NextIntlClientProvider` con los mensajes cargados a todos los componentes hijos.

6. **En componentes**: Se usa `useTranslations('namespace')` para textos estáticos y `useLocale()` para acceder a datos bilingües.

**Para cambiar de idioma**, Navbar llama a `router.replace(pathname, { locale: 'en' })`, lo que dispara una navegación al mismo path pero con el nuevo locale.

## 4. Cómo funciona el modo oscuro

1. **`next-themes`** maneja el estado del tema mediante `ThemeProvider` en el layout. Usa `attribute="class"` para aplicar la clase `dark` al `<html>`.
2. **`ThemeToggle.tsx`** es un botón que alterna entre `dark` y `light` usando `useTheme()` de next-themes.
3. **Tailwind** tiene `darkMode: 'class'` en `tailwind.config.ts`, por lo que las variantes `dark:` aplican cuando la clase `dark` está presente.
4. Colores definidos:
   - Fondo oscuro: `dark:bg-[#0F172A]` (aplica en el body del layout)
   - Superficie oscura: `dark:bg-dark-surface` (usa la variable `#1E293B` definida en Tailwind)
   - Acento: `text-teal-primary` = `#14B8A6` en light, sin cambio en dark (se mantiene visible)
5. El layout tiene `suppressHydrationWarning` en `<html>` para evitar warnings de hidratación por la diferencia entre servidor y cliente en el tema inicial.

## 5. Cómo agregar un proyecto nuevo

1. Abrir `data/projects.ts`.
2. Agregar un nuevo objeto al array `projects`:

```typescript
{
  name: { es: 'Nombre del Proyecto', en: 'Project Name' },
  description: {
    es: 'Descripción en español.',
    en: 'Description in English.',
  },
  stack: ['Tech1', 'Tech2', 'Tech3'],
  github: 'https://github.com/brandon-isla/repo-name',
  demo: 'https://demo-url.com',    // null si no tiene demo
  status: 'completed',              // 'in-progress' o 'completed'
}
```

3. No requiere cambios en componentes ni traducciones — el componente `Projects.tsx` consume automáticamente el nuevo item.

## 6. Cómo agregar una certificación nueva

1. Abrir `data/certifications.ts`.
2. Agregar un nuevo objeto al array `certifications`:

```typescript
{
  name: {
    es: 'Nombre del Certificado',
    en: 'Certificate Name',
  },
  url: 'https://drive.google.com/file/d/XXXXX/view',
}
```

3. La nueva certificación aparece automáticamente en el grid.

## 7. Cómo hacer deploy en Vercel

1. Asegurarse de tener una cuenta en [Vercel](https://vercel.com).
2. Instalar la CLI de Vercel (opcional):
   ```bash
   npm i -g vercel
   ```
3. Desde la raíz del proyecto, ejecutar:
   ```bash
   vercel
   ```
4. Seguir los pasos interactivos (login, seleccionar equipo, confirmar settings).
5. Para deploy desde GitHub:
   - Subir el repositorio a GitHub.
   - En Vercel, hacer clic en "Add New → Project".
   - Importar el repositorio.
   - Dejar configuraciones por defecto (Vercel detecta Next.js automáticamente).
   - Hacer clic en "Deploy".
6. Comandos útiles:
   ```bash
   npm run dev      # Desarrollo local
   npm run build    # Build de producción (verificar que no haya errores)
   npm run start    # Servir build localmente
   ```
