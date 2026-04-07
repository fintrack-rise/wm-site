# Within Market — marketing site

Public marketing site for **Within Market**, implemented per `within-market/wm-site-arch.md`.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4

## Local development

```bash
cd within-market/wm-site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Optional. Canonical site URL for `metadataBase` (Open Graph, etc.). Example: `https://www.example.com` |

Copy from `.env.example` if you use env files locally.

## Deploy on Vercel

1. Push this folder as its own Git repository **or** set the Vercel project **Root Directory** to `within-market/wm-site` if the repo is the monorepo root.
2. Import the repo in [Vercel](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected).
4. Add `NEXT_PUBLIC_SITE_URL` in Project → Settings → Environment Variables (Production) if you want absolute metadata URLs.
5. Deploy.

No custom `vercel.json` is required for a standard Next.js app.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, problem, solution, benefits, product preview, differentiation, audience, CTA |
| `/product` | Product overview, capabilities, how it works, trust |
| `/use-cases` | Audiences and example workflows |
| `/about` | Mission, vision, positioning |
| `/contact` | Demo / contact form (server action; extend to email or CRM) |
| `/privacy` | Placeholder privacy policy |
| `/terms` | Placeholder terms of use |

## Contact form

`app/contact/actions.ts` validates name and email, then redirects with `?thanks=1`. Wire this to Resend, Formspree, your API, or a database before production.
