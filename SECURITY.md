# Security Policy — Bluenture LLP

> Security practices, vulnerability reporting, and data handling guidelines for the Bluenture LLP website.

---

## Table of Contents

- [Supported Versions](#supported-versions)
- [Reporting a Vulnerability](#reporting-a-vulnerability)
- [Security Practices](#security-practices)
- [Data Handling](#data-handling)
- [Third-Party Dependencies](#third-party-dependencies)
- [Content Security](#content-security)
- [Deployment Security](#deployment-security)
- [Incident Response](#incident-response)

---

## Supported Versions

| Version | Supported |
|---------|----------|
| Latest (`main` branch) | ✅ Active |
| Previous releases | ❌ Not supported |

Security patches are applied to the latest version only. Always deploy from the `main` branch.

---

## Reporting a Vulnerability

If you discover a security vulnerability, please report it responsibly:

1. **Do NOT** open a public GitHub issue
2. Contact via **WhatsApp**: [+91 91460 86655](https://wa.me/919146086655)
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact assessment
   - Suggested fix (if any)

### Response Timeline

| Stage | Timeframe |
|-------|-----------|
| Acknowledgment | Within 48 hours |
| Initial assessment | Within 5 business days |
| Patch & resolution | Dependent on severity |

---

## Security Practices

### Framework-Level Security

The project leverages Next.js built-in security features:

- **React Server Components** — Sensitive logic runs on the server, never exposed to the client bundle
- **Automatic XSS Protection** — React escapes all rendered values by default
- **CSRF Protection** — Server Actions (if used) include CSRF tokens automatically
- **Minimal `dangerouslySetInnerHTML`** — Used only for JSON-LD structured data (statically defined, no user input)

### Authentication & Authorization

This is a **public-facing marketing website** with no user authentication system. The quote request form submits data via WhatsApp and does not require user accounts.

### Input Validation

The quote request form (`/quote`) implements:

- **Client-side validation** — Required field checks, phone number format validation
- **Type safety** — TypeScript ensures data structures are consistent throughout the application
- **No server-side data storage** — Form data is sent directly to WhatsApp; no database or API involved

---

## Data Handling

### Personal Data Collected

The quote request form collects:

| Field | Type | Purpose |
|-------|------|---------|
| Company Name | Text | Identify the requesting organization |
| Contact Number | Phone | Follow-up communication |
| Commodity Type | Select | Understand trade requirements |
| Volume | Number | Estimate order size |
| Port of Origin | Text | Logistics planning |
| Destination Port | Text | Logistics planning |
| Special Requirements | Text | Additional request details |

### Data Protection Principles

1. **Minimization** — Only essential data is collected for trade inquiries
2. **No server-side storage** — Form data is not stored on any server; it is sent directly via WhatsApp
3. **No client-side storage** — Form data is not stored in `localStorage`, `sessionStorage`, or cookies
4. **HTTPS only** — All data transmission occurs over TLS-encrypted connections

### Third-Party Scripts

| Script | Purpose | Data Sent |
|--------|---------|-----------|
| Google Analytics (GA4) | Site usage analytics | Anonymized page views, device info |
| WhatsApp (wa.me) | Quote submission | Form data entered by the user |

### Cookies

The application does **not** set any custom cookies. Standard Next.js/Vercel session cookies may be set by the hosting platform. Google Analytics may set cookies for visitor tracking (`_ga`, `_gid`).

---

## Third-Party Dependencies

### Dependency Management

- Dependencies are locked via `package-lock.json` for reproducible builds
- Only production-necessary packages are included in `dependencies`
- Dev-only tools (TypeScript, ESLint, Tailwind) are in `devDependencies`

### Current Dependencies

| Package | Version | Risk Level | Notes |
|---------|---------|-----------|-------|
| `next` | 16.1.6 | Low | Framework — actively maintained by Vercel |
| `react` / `react-dom` | 19.2.3 | Low | Core UI library — maintained by Meta |
| `framer-motion` | 12.34.3 | Low | Animation library — no network access |
| `lucide-react` | 0.575.0 | Low | SVG icon components — no network access |
| `tailwindcss` | 4.x | Low | CSS utility framework — build-time only |

### Dependency Auditing

Run regular security audits:

```bash
npm audit
npm audit fix
npm audit --json
```

---

## Content Security

### Static Assets

- All images and videos are served from the `/public` directory (same-origin)
- No external CDNs are used for media assets
- The `next/image` component applies automatic security headers to optimized images

### External Connections

| Domain | Purpose |
|--------|---------|
| `www.googletagmanager.com` | Google Analytics script |
| `wa.me` | WhatsApp quote submission |
| `fonts.googleapis.com` | Font loading (Poppins) |

### Security Headers

Configured in `next.config.ts`:

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`

---

## Deployment Security

### Environment Variables

- **No secrets are committed** to the repository
- Use `.env.local` for local development secrets (already in `.gitignore`)
- Production secrets should be configured via the hosting platform's environment variable management

### Build Security

- The `npm run build` command performs static analysis and type-checking
- ESLint rules catch common security anti-patterns

### Access Control

- Repository access should be limited to authorized team members only
- Branch protection rules should be enabled on `main`

---

## Incident Response

In the event of a security incident:

1. **Identify** — Determine the scope and nature of the breach
2. **Contain** — Take affected services offline if necessary
3. **Eradicate** — Patch the vulnerability and remove any malicious code
4. **Recover** — Redeploy from a known-good commit on `main`
5. **Review** — Conduct a post-incident review and update security practices

---

<p align="center">
  <sub>© 2026 Bluenture LLP. All rights reserved.</sub>
</p>
