# Bluenture LLP — Documentation

> Comprehensive technical documentation for the Bluenture LLP website codebase.

---

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [App Router & Routing](#app-router--routing)
- [Components](#components)
- [Styling](#styling)
- [Animations](#animations)
- [Assets & Static Files](#assets--static-files)
- [Configuration](#configuration)
- [Development Guidelines](#development-guidelines)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

---

## Architecture Overview

The application follows the **Next.js App Router** architecture (introduced in Next.js 13+). All routes are defined under the `app/` directory using file-system-based routing. The project is written entirely in **TypeScript** and uses **React Server Components** by default, with `"use client"` directives for interactive pages.

```
┌─────────────────────────────────────────┐
│              Browser (Client)           │
├─────────────────────────────────────────┤
│  Next.js App Router                     │
│  ┌───────────────────────────────────┐  │
│  │  layout.tsx (Root Layout)         │  │
│  │  ├── <Navbar />                   │  │
│  │  ├── <main>{children}</main>      │  │
│  │  └── <Footer />                   │  │
│  └───────────────────────────────────┘  │
│  ┌───────────────────────────────────┐  │
│  │  Page Components                  │  │
│  │  / → page.tsx (Home)              │  │
│  │  /about → about/page.tsx          │  │
│  │  /commodities → commodities/...   │  │
│  │  /logistics → logistics/...       │  │
│  │  /network → network/...           │  │
│  │  /quote → quote/...               │  │
│  └───────────────────────────────────┘  │
├─────────────────────────────────────────┤
│  Static Assets: /public                 │
│  Styles: Tailwind CSS v4 + globals.css  │
│  Animations: Framer Motion              │
└─────────────────────────────────────────┘
```

---

## App Router & Routing

### Root Layout (`app/layout.tsx`)

The root layout wraps every page with:

- **`<Navbar />`** — Persistent top navigation
- **`<Footer />`** — Persistent footer
- **Typography** — Montserrat (headings) and Source Sans 3 (body) loaded via `next/font/google` and applied globally
- **Metadata** — SEO title and description set at the layout level

### Page Routes

Each page is a `page.tsx` file inside its own directory under `app/`:

| Route | File | Client Directive | Description |
|-------|------|------------------|-------------|
| `/` | `app/page.tsx` | `"use client"` | Landing page with hero, services overview, CTAs |
| `/about` | `app/about/page.tsx` | Varies | Company mission, vision, values |
| `/commodities` | `app/commodities/page.tsx` | Varies | Commodity catalogue |
| `/logistics` | `app/logistics/page.tsx` | Varies | Logistics and supply chain info |
| `/network` | `app/network/page.tsx` | Varies | Global trade network |
| `/quote` | `app/quote/page.tsx` | `"use client"` | Quote request form with fields for name, email, phone, commodity, and message |

---

## Components

### Shared Components (`components/`)

#### `Navbar.tsx`
- Responsive navigation bar with mobile hamburger menu
- Highlights the active route
- Uses Framer Motion for smooth mobile menu transitions
- Links: Home, About, Commodities, Logistics, Network, Quote

#### `Footer.tsx`
- Company information, quick links, and contact details
- Consistent across all pages

### Animation Components (`components/animations/`)

Reusable Framer Motion wrapper components for scroll-triggered animations:

| Component | File | Purpose |
|-----------|------|---------|
| `FadeIn` | `FadeIn.tsx` | Fades an element in from transparent to opaque |
| `SlideUp` | `SlideUp.tsx` | Slides an element upward while fading in |
| `Stagger` | `Stagger.tsx` | Staggers the animation of child elements sequentially |

**Usage Example:**

```tsx
import { FadeIn } from '@/components/animations/FadeIn';

export default function MySection() {
  return (
    <FadeIn>
      <h2>This content fades in on scroll</h2>
    </FadeIn>
  );
}
```

---

## Styling

### Tailwind CSS v4

The project uses **Tailwind CSS v4** with PostCSS integration. Tailwind v4 uses a zero-config approach — styles are applied directly via utility classes in JSX.

- **PostCSS config**: `postcss.config.mjs`
- **Global styles**: `app/globals.css`

### Global CSS (`app/globals.css`)

Contains:
- Tailwind CSS import directives
- CSS custom properties (variables) for the design system
- Base element resets and global typography

### Conventions

- Use Tailwind utility classes for all styling (avoid inline styles)
- Use `className` strings — not CSS modules
- Responsive breakpoints follow Tailwind's mobile-first approach (`sm:`, `md:`, `lg:`, `xl:`)

---

## Animations

The project uses **Framer Motion** for all animations. Key patterns:

### Scroll-Triggered Animations

Most page sections use the animation wrapper components (`FadeIn`, `SlideUp`, `Stagger`) combined with Framer Motion's `whileInView` prop for viewport-triggered animations.

### Page-Level Animations

The home page (`app/page.tsx`) uses `motion` components and `Variants` from Framer Motion to define complex entrance animations with staggered children.

### Best Practices

1. **Use wrapper components** — Prefer `<FadeIn>`, `<SlideUp>`, `<Stagger>` over raw `motion.*` elements
2. **Performance** — Use `viewport={{ once: true }}` to prevent re-triggering on scroll
3. **Reduced motion** — Framer Motion automatically respects `prefers-reduced-motion`

---

## Assets & Static Files

### `/public/images/`

Contains all static images used across the site (hero backgrounds, about page photos, commodity images, etc.).

### `/public/videos/`

Contains video files used in hero sections or backgrounds.

### Favicons & PWA

- `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`
- `android-chrome-192x192.png`, `android-chrome-512x512.png`
- `apple-touch-icon.png`
- `site.webmanifest` — PWA manifest

### Image Optimization

Use Next.js `<Image>` component (`next/image`) for all images to benefit from:
- Automatic format conversion (WebP/AVIF)
- Lazy loading
- Responsive sizing

---

## Configuration

### `next.config.ts`

Next.js configuration file. Customize build behavior, redirects, image domains, etc.

### `tsconfig.json`

TypeScript configuration with:
- Path aliases: `@/*` maps to the project root
- Strict mode enabled
- JSX set to `preserve` (handled by Next.js)

### `eslint.config.mjs`

ESLint flat config format with `eslint-config-next` for Next.js-specific linting rules.

### `postcss.config.mjs`

PostCSS configuration integrating `@tailwindcss/postcss` for Tailwind CSS v4.

---

## Development Guidelines

### Code Conventions

1. **TypeScript** — All files use `.tsx` / `.ts` extensions. Avoid `any` types.
2. **Components** — One component per file. Use PascalCase for filenames and component names.
3. **Imports** — Use the `@/` path alias for all project imports.
4. **Client Components** — Add `"use client"` only when the component needs interactivity (hooks, event handlers, browser APIs).
5. **Images** — Always use `next/image` `<Image>` component instead of `<img>` tags.

### Adding a New Page

1. Create a new directory under `app/` (e.g., `app/services/`)
2. Add a `page.tsx` file inside:

```tsx
export default function ServicesPage() {
  return (
    <section className="min-h-screen pt-24 px-6">
      <h1 className="text-4xl font-bold">Services</h1>
    </section>
  );
}
```

3. Add the route to the `Navbar.tsx` navigation links array.

### Adding a New Animation Component

1. Create a new file in `components/animations/` (e.g., `ScaleIn.tsx`)
2. Wrap a `motion.div` with appropriate Framer Motion props
3. Accept `children` and any custom props (delay, duration, etc.)

---

## Deployment

### Vercel (Recommended)

The project is optimized for deployment on **Vercel**:

1. Connect the GitHub repository to Vercel
2. Vercel auto-detects the Next.js framework
3. Builds run automatically on push to `main`

### Other Platforms

For self-hosted or alternative platforms:

```bash
# Build the production bundle
npm run build

# Start the production server
npm run start
```

The app runs on port `3000` by default. Set the `PORT` environment variable to change it.

---

## Troubleshooting

| Issue | Solution |
|-------|---------|
| `Module not found` errors | Run `npm install` to ensure all dependencies are installed |
| Styles not loading | Verify `postcss.config.mjs` has `@tailwindcss/postcss` and restart the dev server |
| Images not displaying | Check the file path in `/public/images/` and use `<Image>` with correct `src` |
| Animations not triggering | Ensure the component has `"use client"` directive |
| Build failures | Run `npm run lint` first to catch TypeScript/ESLint errors |
| Port conflict | Kill the existing process on port 3000 or use `PORT=3001 npm run dev` |

---

<p align="center">
  <sub>© 2026 Bluenture LLP. All rights reserved.</sub>
</p>
