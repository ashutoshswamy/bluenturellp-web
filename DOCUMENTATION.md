# Bluenture LLP — Documentation

> Comprehensive technical documentation for the Bluenture LLP website codebase.

---

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [App Router & Routing](#app-router--routing)
- [SEO Implementation](#seo-implementation)
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

The application follows the **Next.js App Router** architecture. All routes are defined under the `app/` directory using file-system-based routing. The project uses a **Server/Client Component split** — each page has a Server Component (`page.tsx`) for metadata exports and a Client Component (`*Content.tsx`) for interactive UI.

```
┌─────────────────────────────────────────┐
│              Browser (Client)           │
├─────────────────────────────────────────┤
│  Next.js App Router                     │
│  ┌───────────────────────────────────┐  │
│  │  layout.tsx (Root Layout)         │  │
│  │  ├── Google Analytics (GA4)       │  │
│  │  ├── JSON-LD Structured Data      │  │
│  │  ├── <LoadingScreen />            │  │
│  │  ├── <Navbar />                   │  │
│  │  ├── <main>{children}</main>      │  │
│  │  └── <Footer />                   │  │
│  └───────────────────────────────────┘  │
│  ┌───────────────────────────────────┐  │
│  │  Page Components (Server + Client)│  │
│  │  / → page.tsx + HomeContent.tsx   │  │
│  │  /about → page.tsx + AboutContent │  │
│  │  /commodities → page.tsx + ...    │  │
│  │  /network → page.tsx + ...        │  │
│  │  /quote → page.tsx + QuoteContent │  │
│  └───────────────────────────────────┘  │
│  ┌───────────────────────────────────┐  │
│  │  Auto-Generated Routes            │  │
│  │  /sitemap.xml → sitemap.ts        │  │
│  │  /robots.txt → robots.ts          │  │
│  └───────────────────────────────────┘  │
├─────────────────────────────────────────┤
│  Static Assets: /public                 │
│  Styles: Tailwind CSS v4 + globals.css  │
│  Animations: GSAP (hero/rail) +         │
│    Framer Motion (in-view reveals) +    │
│    CSS keyframes (loading screen)       │
└─────────────────────────────────────────┘
```

---

## App Router & Routing

### Root Layout (`app/layout.tsx`)

The root layout wraps every page with:

- **Google Analytics** — GA4 tracking via `next/script` (`afterInteractive` strategy)
- **JSON-LD** — `Organization` + `WebSite` structured data for rich search results
- **Metadata** — `metadataBase`, title template (`%s | Bluenture LLP`), keywords, Open Graph, Twitter cards, robots directives, icons, manifest
- **Typography** — DM Sans loaded via `next/font/google`
- **`<LoadingScreen />`** — Brand splash shown on first load, wraps everything below
- **`<Navbar />`** — Persistent top navigation
- **`<Footer />`** — Persistent footer with phone and WhatsApp links

### Page Routes

Each page uses a Server/Client split:

| Route | Server Component | Client Component | Description |
|-------|-----------------|------------------|-------------|
| `/` | `app/page.tsx` | `app/HomeContent.tsx` | Landing page with hero, services, CTAs |
| `/about` | `app/about/page.tsx` | `app/about/AboutContent.tsx` | Mission, vision, values |
| `/commodities` | `app/commodities/page.tsx` | `app/commodities/CommoditiesContent.tsx` | Commodity catalogue |
| `/network` | `app/network/page.tsx` | `app/network/NetworkContent.tsx` | Global trade network |
| `/quote` | `app/quote/page.tsx` | `app/quote/QuoteContent.tsx` | Quote form → WhatsApp |

### Auto-Generated Routes

| Route | Source | Description |
|-------|--------|-------------|
| `/sitemap.xml` | `app/sitemap.ts` | Dynamic sitemap with all pages, priorities, and change frequencies |
| `/robots.txt` | `app/robots.ts` | Allows all crawlers, links to sitemap |

---

## SEO Implementation

### Metadata Strategy

- **`metadataBase`** — Set to `https://bluenturellp.com`, resolves all relative OG image URLs
- **Title template** — `%s | Bluenture LLP` (each page provides its own `%s` portion)
- **Per-page metadata** — Each `page.tsx` exports unique `title`, `description`, `openGraph`, `twitter`, and `alternates.canonical`
- **Keywords** — 15 SEO keywords covering trading, commodities, procurement, logistics

### Structured Data (JSON-LD)

Embedded in root layout:

- **`Organization`** — Company name, logo, URL, description, phone contact
- **`WebSite`** — Site URL, name, publisher reference, `SearchAction`

### Open Graph & Twitter Cards

Every page includes:
- `og:title`, `og:description`, `og:url`, `og:image`
- `twitter:card` (`summary_large_image`), `twitter:title`, `twitter:description`, `twitter:image`

### Technical SEO Files

- **`sitemap.ts`** — Lists all 5 pages with `lastModified`, `changeFrequency`, and `priority` values
- **`robots.ts`** — Universal allow rule, links to `/sitemap.xml`
- **`site.webmanifest`** — PWA manifest with `name`, `short_name`, `theme_color`, `start_url`

---

## Components

### Shared Components (`components/`)

#### `Navbar.tsx`
- Responsive navigation bar with mobile hamburger menu
- Highlights the active route
- Uses Framer Motion for smooth mobile menu transitions
- Links: Home, About, Commodities, Network, Quote

#### `Footer.tsx`
- Company branding and description
- Contact: Phone (+91 91460 86655) and WhatsApp link
- Hidden on the `/quote` page
- Consistent across all other pages

#### `LoadingScreen.tsx`
- Brand splash screen shown on first load, wraps `<Navbar />` / `<main>` / `<Footer />` in `layout.tsx`
- Ship icon scale + progress bar are driven by CSS keyframes (`animate-loading-ship` / `-bar` / `-out` in `globals.css`), not per-frame React state — keeps the main thread free during hydration
- A `setInterval` (10/sec, not `requestAnimationFrame`) only updates the numeric `%` label
- Dispatches a `site:loaded` window event when done, which `HomeContent.tsx` listens for to kick off the hero drop-in

#### `HeroGsapController.tsx`
- All GSAP / ScrollTrigger / `@gsap/react` logic for the home page, code-split out of `HomeContent.tsx` via `next/dynamic({ ssr: false })`
- Animates the hero container drop-in + idle bounce, and the Expertise section's scroll-scrubbed rail fill/highlight
- Mounted only after hydration so the ~144KB GSAP chunk never blocks first paint or competes with hydration on cold load

#### `ui/cobe-globe.tsx`
- WebGL network globe (`cobe`) used on the Home and Network pages, lazy-mounted via `IntersectionObserver`
- Pauses its animation loop when the tab is backgrounded (`document.hidden`)

---

## Styling

### Tailwind CSS v4

The project uses **Tailwind CSS v4** with PostCSS integration. Tailwind v4 uses a zero-config approach — styles are applied directly via utility classes in JSX.

- **PostCSS config**: `postcss.config.mjs`
- **Global styles**: `app/globals.css`

### Conventions

- Use Tailwind utility classes for all styling (avoid inline styles)
- Use `className` strings — not CSS modules
- Responsive breakpoints follow Tailwind's mobile-first approach (`sm:`, `md:`, `lg:`, `xl:`)

---

## Animations

The project splits animation work across three tools, each used where it fits best:

### GSAP (`HeroGsapController.tsx`)

- Drives the home hero's container drop-in/idle-bounce timeline and the Expertise section's `ScrollTrigger`-scrubbed rail
- Code-split via `next/dynamic({ ssr: false })` so the GSAP/ScrollTrigger/`@gsap/react` bundle loads after hydration instead of blocking it
- `useGSAP` scopes tweens to refs passed down from `HomeContent.tsx`; cleanup is automatic on unmount

### Framer Motion

- Used on every other page (`AboutContent`, `CommoditiesContent`, `NetworkContent`, `QuoteContent`, `Navbar`) for section entrances
- Pattern: `motion` components + `Variants`, `initial`/`whileInView`/`animate`, staggered children via `staggerChildren`

### CSS Keyframes (`LoadingScreen.tsx` / `globals.css`)

- The first-load splash screen's ship-scale, progress-bar fill, and fade-out are plain `@keyframes` (`loading-ship`, `loading-bar`, `loading-out`), not React state or `requestAnimationFrame`
- Keeps the main thread free for hydration + the GSAP chunk load during the exact window the splash is visible

### Best Practices

1. **Prefer transform/opacity** — GPU-accelerated properties only where animation runs every frame (scroll-linked, continuous loops)
2. **Performance** — Use `viewport={{ once: true }}` on Framer Motion `whileInView` to prevent re-triggering on scroll
3. **Reduced motion** — Framer Motion automatically respects `prefers-reduced-motion`
4. **Don't drive continuous visual state from React `setState` in a `requestAnimationFrame` loop** — it re-renders on every frame and competes with hydration/other JS on the main thread; prefer CSS animations, or throttle state updates (e.g. `setInterval` at 10/sec) when only a low-frequency readout (like a `%` label) needs React

---

## Assets & Static Files

### `/public/images/`

Contains category imagery used across the site (`agricultural_realistic.png`, `raw_materials_realistic.png`, `food_beverages_realistic.png`, `consumer_goods_realistic.png`).

### `/public/textures/`

Background texture assets (e.g. `cubes.png`) used as low-opacity section backdrops.

### `/public/container1.png`, `/public/container2.png`

Shipping-container art used in the home hero's GSAP drop-in animation.

### Favicons & PWA

- `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`
- `android-chrome-192x192.png`, `android-chrome-512x512.png`
- `apple-touch-icon.png`
- `site.webmanifest` — PWA manifest with name "Bluenture LLP"

### Image Optimization

Use Next.js `<Image>` component (`next/image`) for all images to benefit from:
- Automatic format conversion (WebP/AVIF)
- Lazy loading
- Responsive sizing

---

## Configuration

### `next.config.ts`

Next.js configuration with security headers:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy`
- `Strict-Transport-Security` (HSTS)

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
4. **Server Components** — `page.tsx` files remain Server Components (no `"use client"`) to support metadata exports.
5. **Client Components** — Interactive UI lives in `*Content.tsx` files with `"use client"` directive.
6. **Images** — Always use `next/image` `<Image>` component instead of `<img>` tags.

### Adding a New Page

1. Create a new directory under `app/` (e.g., `app/services/`)
2. Add a `page.tsx` (Server Component with metadata):

```tsx
import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services — What We Offer",
  description: "Explore our global trading services.",
  alternates: { canonical: "https://bluenturellp.com/services" },
};

export default function Services() {
  return <ServicesContent />;
}
```

3. Add a `ServicesContent.tsx` (Client Component with `"use client"`)
4. Add the route to the `Navbar.tsx` navigation links array
5. Add the route to `app/sitemap.ts`

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
npm run build
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
| Metadata not rendering | Ensure `page.tsx` does NOT have `"use client"` — metadata exports require Server Components |
| Port conflict | Kill the existing process on port 3000 or use `PORT=3001 npm run dev` |

---

<p align="center">
  <sub>© 2026 Bluenture LLP. All rights reserved.</sub>
</p>
