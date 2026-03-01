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
2. Send a detailed report to **[security@bluenturellp.com](mailto:security@bluenturellp.com)**
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
- **No `dangerouslySetInnerHTML`** — All user-facing content is statically defined; no dynamic HTML injection

### Authentication & Authorization

This is a **public-facing marketing website** with no user authentication system. The quote request form submits data but does not require user accounts.

### Input Validation

The quote request form (`/quote`) implements:

- **Client-side validation** — Required field checks, email format validation, phone number format validation
- **Type safety** — TypeScript ensures data structures are consistent throughout the application
- **No raw SQL** — The application does not connect to a database directly; form submissions are handled via external services or API endpoints

---

## Data Handling

### Personal Data Collected

The quote request form collects:

| Field | Type | Purpose |
|-------|------|---------|
| Full Name | Text | Identify the requester |
| Email Address | Email | Follow-up communication |
| Contact Number | Phone | Alternative contact method |
| Commodity of Interest | Text | Understand trade requirements |
| Message | Text | Additional request details |

### Data Protection Principles

1. **Minimization** — Only essential data is collected for trade inquiries
2. **No client-side storage** — Form data is not stored in `localStorage`, `sessionStorage`, or cookies
3. **No tracking scripts** — No third-party analytics, pixel trackers, or advertising scripts are installed
4. **HTTPS only** — All data transmission occurs over TLS-encrypted connections

### Cookies

The application does **not** set any custom cookies. Standard Next.js/Vercel session cookies may be set by the hosting platform for performance and routing purposes.

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
# Check for known vulnerabilities
npm audit

# Fix auto-fixable vulnerabilities
npm audit fix

# View detailed audit report
npm audit --json
```

---

## Content Security

### Static Assets

- All images and videos are served from the `/public` directory (same-origin)
- No external CDNs are used for media assets
- The `next/image` component applies automatic security headers to optimized images

### External Links

- External links use `target="_blank"` with implicit `rel="noopener noreferrer"` (React default for new windows)
- No external scripts are loaded from third-party origins

### Recommended Headers

When deploying, configure the following HTTP security headers (via `next.config.ts` or hosting platform):

```typescript
// next.config.ts
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
};
```

---

## Deployment Security

### Environment Variables

- **No secrets are committed** to the repository
- Use `.env.local` for local development secrets (already in `.gitignore`)
- Production secrets should be configured via the hosting platform's environment variable management (e.g., Vercel dashboard)

### Build Security

- The `npm run build` command performs static analysis and type-checking
- ESLint rules catch common security anti-patterns
- The React Compiler (`babel-plugin-react-compiler`) optimizes but does not alter security boundaries

### Access Control

- Repository access should be limited to authorized team members only
- Branch protection rules should be enabled on `main`:
  - Require pull request reviews
  - Require status checks (lint, build) to pass
  - No force pushes

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
