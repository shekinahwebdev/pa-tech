# PA Tech Services Marketing Website

Marketing and lead-generation website for **PA Tech Services**, a technology installation company serving homes and organizations in Liberia.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Lucide React
- Framer Motion
- Vercel-ready

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev      # local development
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint
```

## Environment variables

Copy `.env.example` to `.env.local` and adjust as needed.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL used for metadata, sitemap, and robots. |
| `QUOTE_WEBHOOK_URL` | Optional. If set, quote form submissions are posted to this endpoint. If unset, the form stays honest and asks visitors to call or WhatsApp. |

## Quote form

The quote form validates input and posts to `/api/quote`. It does not pretend a message was emailed unless `QUOTE_WEBHOOK_URL` is configured.

## Deploy on Vercel

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
4. Optionally set `QUOTE_WEBHOOK_URL` when an email or form provider is ready.

## Project notes

- Brand name on the site is **PA Tech Services**.
- Testimonials are omitted until real customer quotes are supplied.
- Project gallery cards are labeled as placeholders until installation photos are provided.
- Do not invent reviews, certifications, awards, or customer counts.
