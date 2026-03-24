# Bluenture LLP — Global Trading & Sourcing Partner

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![License](https://img.shields.io/badge/License-Proprietary-red)

---

## 🌐 Overview

The Bluenture LLP website serves as the digital face of the company — showcasing services, commodities, logistics capabilities, and a global supplier network. It enables prospective clients to learn about the company's offerings and request trade quotations via WhatsApp.

### Key Pages

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Hero section, services overview, and call-to-action |
| **About** | `/about` | Company mission, vision, values, and team |
| **Commodities** | `/commodities` | Product catalogue of traded commodities |
| **Network** | `/network` | Global trade network and partnerships |
| **Quote** | `/quote` | Request-a-quote form with WhatsApp submission |

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **Animations** | [Framer Motion 12](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Fonts** | [Poppins](https://fonts.google.com/specimen/Poppins) (via `next/font/google`) |
| **Analytics** | [Google Analytics 4](https://analytics.google.com/) (G-VD8CNZDGNY) |
| **Linting** | [ESLint 9](https://eslint.org/) with `eslint-config-next` |

---

## 📁 Project Structure

```
bluenturellp-web/
├── app/
│   ├── layout.tsx              # Root layout (metadata, JSON-LD, GA4, Navbar + Footer)
│   ├── page.tsx                # Home page (Server Component — metadata export)
│   ├── HomeContent.tsx         # Home page UI (Client Component)
│   ├── globals.css             # Global styles
│   ├── sitemap.ts              # Dynamic sitemap generator (/sitemap.xml)
│   ├── robots.ts               # Dynamic robots.txt generator (/robots.txt)
│   ├── about/
│   │   ├── page.tsx            # About — Server Component (metadata)
│   │   └── AboutContent.tsx    # About — Client Component (UI)
│   ├── commodities/
│   │   ├── page.tsx            # Commodities — Server Component (metadata)
│   │   └── CommoditiesContent.tsx
│   ├── network/
│   │   ├── page.tsx            # Network — Server Component (metadata)
│   │   └── NetworkContent.tsx
│   └── quote/
│       ├── page.tsx            # Quote — Server Component (metadata)
│       └── QuoteContent.tsx    # Quote form with WhatsApp submission
├── components/
│   ├── Navbar.tsx              # Site-wide navigation bar
│   ├── Footer.tsx              # Site-wide footer (phone + WhatsApp)
│   └── animations/
│       ├── FadeIn.tsx
│       ├── SlideUp.tsx
│       └── Stagger.tsx
├── public/
│   ├── images/                 # Static images
│   ├── videos/                 # Static videos
│   ├── logo.jpeg               # Company logo
│   ├── site.webmanifest        # PWA manifest
│   └── favicon.ico             # Favicon & PWA icons
├── package.json
├── tsconfig.json
├── next.config.ts              # Security headers config
├── postcss.config.mjs
└── eslint.config.mjs
```

---

## 🔍 SEO Architecture

The site uses a **Server/Client Component split** for full SEO support:

- **`page.tsx`** files are **Server Components** that export `Metadata` objects (title, description, Open Graph, Twitter cards, canonical URLs)
- **`*Content.tsx`** files are **Client Components** (`"use client"`) containing the interactive UI
- **Root `layout.tsx`** defines `metadataBase`, title templates (`%s | Bluenture LLP`), JSON-LD structured data (`Organization` + `WebSite` schemas), and Google Analytics
- **`sitemap.ts`** generates `/sitemap.xml` dynamically with all page routes
- **`robots.ts`** generates `/robots.txt` allowing all crawlers

---

## 🎨 Design System

- **Typography**: Poppins (weights 300–700) loaded via `next/font/google`
- **CSS Framework**: Tailwind CSS v4 with PostCSS integration
- **Animation Library**: Framer Motion for scroll-triggered and page-transition animations
- **Icon Set**: Lucide React for consistent, lightweight SVG icons

---

## 📞 Contact Integration

- **Phone**: +91 91460 86655
- **WhatsApp**: [wa.me/919146086655](https://wa.me/919146086655)
- **Quote Form**: Submits a formatted WhatsApp message with all trade details (company, commodity, volume, ports, special requirements)

---

## 📄 Related Documents

- [Documentation](./DOCUMENTATION.md) — Architecture deep-dive, component API, and development guidelines
- [Security Policy](./SECURITY.md) — Security practices, vulnerability reporting, and data handling

---

## 👨‍💻 Developer Information

- **GitHub:** [ashutoshswami](https://github.com/ashutoshswami)
- **LinkedIn:** [ashutoshswami](https://linkedin.com/in/ashutoshswami)
- **Twitter / X:** [@ashutoswami_](https://twitter.com/ashutoswami_)
- **Support Email:** [ashutoswami397@gmail.com](mailto:ashutoswami397@gmail.com)

---

<p align="center">
  <sub>© 2026 Bluenture LLP. All rights reserved.</sub>
</p>
