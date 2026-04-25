# Revenue Engine — Marketing Site

Production-ready Next.js marketing site for **Revenue Engine**, an AI lead generation agency serving Nashville service businesses (med spas, home services, dental, law firms, fitness, real estate).

Single-page anchor-nav layout with embedded GoHighLevel booking widget, lead capture form, lead-magnet capture, and a 5-leak audit download flow.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack, React 19) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 (CSS-first `@theme`) |
| Animation | [`motion`](https://motion.dev) (Framer Motion 12), wrapped in `MotionConfig reducedMotion="user"` |
| Icons | `lucide-react` |
| Fonts | `Inter` (body) + `Instrument_Serif` (display), via `next/font` |
| Forms | `react-hook-form` + `zod` (`@hookform/resolvers`) |
| Booking | GoHighLevel calendar iframe + `link.msgsndr.com/js/form_embed.js` |
| Lint / format | ESLint 9 (flat config) + Prettier 3 + `prettier-plugin-tailwindcss` |
| Deploy target | Vercel |

## Getting started

```bash
npm install
cp .env.local.example .env.local   # then fill in secrets — see "Environment" below
npm run dev
```

Site comes up at <http://127.0.0.1:3000> by default.

### Useful scripts

```bash
npm run dev          # Next dev server (Turbopack)
npm run build        # production build
npm run start        # serve the production build
npm run typecheck    # tsc --noEmit
npm run lint         # eslint .
npm run lint:fix     # eslint . --fix
npm run format       # prettier --write
npm run format:check # prettier --check (CI-friendly)
```

## Environment

All env vars are documented in [`.env.local.example`](./.env.local.example). Copy that file to `.env.local` and fill in:

| Variable | Required | Where it's used |
|---|---|---|
| `NEXT_PUBLIC_BOOKING_URL` | yes | `<iframe src>` in `src/components/CalEmbed.tsx`. Currently a GoHighLevel booking widget at `links.revenue-engine-ai.com`. Override with any iframe-embeddable booking URL. |
| `GHL_WEBHOOK_URL` | yes | Server-side. Receives JSON POSTs from `/api/lead` and `/api/lead-magnet`. Configure as an inbound webhook in GoHighLevel. |
| `NEXT_PUBLIC_SITE_URL` | yes | Used by `metadata`, `robots.ts`, `sitemap.ts` for canonical URLs. Set to the production origin (e.g. `https://revenueengine.ai`). |
| `NEXT_PUBLIC_FOUNDER_LOOM_URL` | optional | Linked from the "Watch the 90-second intro" CTA in the Founder section. If unset the CTA falls back to `#`. |

Without `GHL_WEBHOOK_URL` set, both lead routes log payloads to the server console and return `{ ok: true, queued: true }` so local dev still feels real.

## Deploying to Vercel

1. Push this repo to GitHub.
2. In Vercel, **Add New Project** → import the repo. Framework preset auto-detects as Next.js.
3. Under **Environment Variables**, add the four vars from the table above. Mark `GHL_WEBHOOK_URL` as **secret**; the rest are public (`NEXT_PUBLIC_*`).
4. Deploy. No special build/install commands needed — Vercel runs `npm install && npm run build`.
5. Add your custom domain on the project's **Domains** page and follow the DNS instructions.

## Where to edit copy

| Want to change | File |
|---|---|
| Hero headline, subhead, eyebrow pill | [`src/components/Hero.tsx`](src/components/Hero.tsx) |
| Three framework blocks (Voice, Messaging, Operations) | [`src/components/Frameworks.tsx`](src/components/Frameworks.tsx) |
| Voice / SMS / Dashboard mockup transcripts | [`src/components/VoiceMockup.tsx`](src/components/VoiceMockup.tsx), [`SmsMockup.tsx`](src/components/SmsMockup.tsx), [`DashboardMockup.tsx`](src/components/DashboardMockup.tsx) |
| Process timeline (Audit / Build / Launch) | [`src/components/Process.tsx`](src/components/Process.tsx) |
| Case study cards | [`src/components/Results.tsx`](src/components/Results.tsx) |
| Good-fit / not-a-fit lists | [`src/components/WhoThisIsFor.tsx`](src/components/WhoThisIsFor.tsx) |
| FAQ questions and answers | [`src/components/Faq.tsx`](src/components/Faq.tsx) |
| Founder bio, photo placeholder, Loom link | [`src/components/Founder.tsx`](src/components/Founder.tsx) |
| Final CTA H2/H1, copy near the form | [`src/components/FinalCta.tsx`](src/components/FinalCta.tsx) |
| Lead form fields, success state, submit copy | [`src/components/LeadForm.tsx`](src/components/LeadForm.tsx) |
| Lead-magnet card and email capture | [`src/components/LeadMagnet.tsx`](src/components/LeadMagnet.tsx) |
| Footer nav links, tagline, copyright | [`src/components/Footer.tsx`](src/components/Footer.tsx) |
| Sticky mobile CTA pill | [`src/components/StickyMobileCta.tsx`](src/components/StickyMobileCta.tsx) |

### Swapping the booking calendar

The booking widget is rendered as a plain iframe in [`src/components/CalEmbed.tsx`](src/components/CalEmbed.tsx). To swap providers:

1. Set `NEXT_PUBLIC_BOOKING_URL` to your new iframe-embeddable booking URL (Cal.com, SavvyCal, Calendly, another GHL link, etc.).
2. If the new provider needs its own resize/embed script, swap the `<Script src="https://link.msgsndr.com/js/form_embed.js" />` line for their script. (`@calcom/embed-react` is still installed if you want to switch back to Cal.com — see commit `981c95a` for the previous Cal-based implementation.)
3. The wrapper has `min-height: 720px` enforced via inline CSS. Bump that if your new calendar needs more vertical room before its resize script kicks in.

The component name is still `CalEmbed` to minimize import churn — feel free to rename to `BookingEmbed`.

### Swapping the GHL webhook

`/api/lead` and `/api/lead-magnet` both forward to `process.env.GHL_WEBHOOK_URL`.

1. Update `GHL_WEBHOOK_URL` in your env (Vercel → Project → Settings → Environment Variables).
2. Redeploy. No code changes needed.

The two routes send slightly different payloads:
- `/api/lead` (full strategy-call form) — name, business, phone, email, monthlyRevenue, problem, plus `source: "revenueengine.ai"` and `receivedAt`.
- `/api/lead-magnet` (5-Leak Audit) — email only, plus `source: "5-leak-audit"` and `tag: "lead-magnet"`.

Both are validated with Zod ([`src/lib/leadSchema.ts`](src/lib/leadSchema.ts)) and rate-limited per IP ([`src/lib/rateLimit.ts`](src/lib/rateLimit.ts), 5 req/min). The in-memory limiter is fine for a single Vercel instance; for multi-region or serverless concurrency, swap it for Upstash Ratelimit.

## Brand tokens

Color and font tokens live in [`src/app/globals.css`](src/app/globals.css) under `@theme { ... }`. Tailwind v4 generates utilities directly from these CSS vars (`bg-canvas`, `text-fg`, `border-line`, etc.). The original spec names (`--bg-base`, `--text-secondary`, `--accent`) are also exposed in `:root` for direct CSS use.

> **Naming note:** the surface token is `--color-canvas` (not `base`) because `--color-base` would collide with Tailwind's `text-base` font-size utility and silently stomp foreground colors. Don't rename it back without checking every `text-base` usage in the tree.

## Accessibility notes

- All interactive elements have `focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2`.
- Mobile menu has `role="dialog" aria-modal="true"` plus Escape-key close and body-scroll lock.
- FAQ accordion uses `aria-expanded` on each trigger and animates with `framer-motion` `AnimatePresence`.
- All motion respects `prefers-reduced-motion` via root-level `<MotionConfig reducedMotion="user">` and CSS `@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }`.
- Sticky mobile CTA also gates its fade transition on `useReducedMotion()`.
- Touch targets: nav buttons ≥44px, hamburger 44×44px, form fields ≥48px, FAQ rows ≥56px.
- JSON-LD `LocalBusiness` + `Service` schema lives in [`src/app/layout.tsx`](src/app/layout.tsx).

## SEO

- `robots.txt` and `sitemap.xml` are emitted from [`src/app/robots.ts`](src/app/robots.ts) and [`src/app/sitemap.ts`](src/app/sitemap.ts).
- The Open Graph image at `/opengraph-image` is generated at the edge from [`src/app/opengraph-image.tsx`](src/app/opengraph-image.tsx) using `next/og`'s `ImageResponse`.

## File structure

```
src/
  app/
    api/
      lead/route.ts             # full strategy-call form handler
      lead-magnet/route.ts      # 5-Leak Audit email handler
    globals.css                 # Tailwind v4 + brand tokens + smooth scroll
    layout.tsx                  # root layout, fonts, metadata, JSON-LD, MotionConfig
    page.tsx                    # composes the single-page site
    opengraph-image.tsx         # /opengraph-image (edge runtime)
    robots.ts                   # /robots.txt
    sitemap.ts                  # /sitemap.xml
  components/                   # all UI components
    ui/
      Button.tsx                # primary/ghost/outline + sm/md/lg
      Pill.tsx                  # eyebrow chip
      SectionHeader.tsx         # eyebrow + serif title + sub
  lib/
    cn.ts                       # clsx + tailwind-merge helper
    leadSchema.ts               # Zod schemas (lead + lead-magnet)
    rateLimit.ts                # in-memory IP rate limiter
```

## License

Private. © Revenue Engine.
