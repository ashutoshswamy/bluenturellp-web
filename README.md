# Bluenture LLP — Global Trading & Sourcing Partner

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![License](https://img.shields.io/badge/License-Proprietary-red)

---

## 🌐 Overview

The Bluenture LLP website serves as the digital face of the company — showcasing services, commodities, logistics capabilities, and a global supplier network. It enables prospective clients to learn about the company's offerings and request trade quotations.

### Key Pages

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Hero section, services overview, and call-to-action |
| **About** | `/about` | Company mission, vision, values, and team |
| **Commodities** | `/commodities` | Product catalogue of traded commodities |
| **Logistics** | `/logistics` | Supply chain and logistics capabilities |
| **Network** | `/network` | Global trade network and partnerships |
| **Quote** | `/quote` | Request-a-quote form for prospective clients |

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
| **Fonts** | [Montserrat](https://fonts.google.com/specimen/Montserrat) & [Source Sans 3](https://fonts.google.com/specimen/Source+Sans+3) |
| **Linting** | [ESLint 9](https://eslint.org/) with `eslint-config-next` |

---

## 📁 Project Structure

```
bluenturellp-web/
├── app/
│   ├── layout.tsx          # Root layout (Navbar + Footer wrapper)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── about/page.tsx      # About Us page
│   ├── commodities/page.tsx# Commodities page
│   ├── logistics/page.tsx  # Logistics page
│   ├── network/page.tsx    # Network page
│   └── quote/page.tsx      # Request a Quote page
├── components/
│   ├── Navbar.tsx           # Site-wide navigation bar
│   ├── Footer.tsx           # Site-wide footer
│   └── animations/
│       ├── FadeIn.tsx       # Fade-in animation wrapper
│       ├── SlideUp.tsx      # Slide-up animation wrapper
│       └── Stagger.tsx      # Staggered children animation
├── public/
│   ├── images/              # Static images
│   ├── videos/              # Static videos
│   ├── logo.jpeg            # Company logo
│   └── favicon.ico          # Favicon & PWA icons
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── tailwind.config.ts (v4 — zero-config)
```

---

## 🎨 Design System

- **Typography**: Montserrat for headings, Source Sans 3 for body (loaded via `next/font/google`)
- **CSS Framework**: Tailwind CSS v4 with PostCSS integration
- **Animation Library**: Framer Motion for scroll-triggered and page-transition animations
- **Icon Set**: Lucide React for consistent, lightweight SVG icons

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
