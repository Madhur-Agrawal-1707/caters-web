# PS Caterers — Website

A premium, mobile-first catering website for **PS Caterers**, built with
Next.js (App Router), TypeScript and Tailwind CSS.

## Tech Stack

- Next.js 16 (App Router, React Server Components)
- TypeScript
- Tailwind CSS v4
- lucide-react (icons)
- No CMS, database, or auth — see `src/lib/inquiries.ts` for the
  backend-ready inquiry abstraction

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run start     # serve the production build
npm run lint      # ESLint
```

## Project Structure

```
src/
  app/            Route segments (App Router)
  components/     UI, layout, hero, sections, menu, events, gallery, forms
  config/         business.ts (contact info), site.ts (copy & SEO defaults)
  data/           menu, events, gallery, testimonials, locations, services, FAQ
  lib/            utils, whatsapp link builder, inquiry submission abstraction
  types/          shared TypeScript interfaces
public/
  images/         see public/images/README.md for asset structure
```

## Editing Content

Almost everything is data-driven — you rarely need to touch a component to
change copy or content.

| What to change              | Where |
|---|---|
| Phone, WhatsApp, email, address, city | `src/config/business.ts` |
| Homepage headline, CTAs, stats, SEO defaults | `src/config/site.ts` |
| Menu items | `src/data/menu/*.ts` |
| Events | `src/data/events.ts` |
| Gallery photos | `src/data/gallery.ts` |
| Testimonials, catering services, locations, FAQ | `src/data/content.ts` |
| Images | `public/images/` (see its README) |
| Logo | `src/components/layout/Logo.tsx` (currently a text wordmark) |

## Menu Data

The full menu was transcribed from the client's 9-page scanned PDF into
typed data files under `src/data/menu/`, split by source section
(`general.ts`, `function-menu.ts`, `stalls.ts`, `extras.ts`). Every entry
carries a `sourcePage` for traceability back to the original document.

Items whose spelling or wording was unclear in the source are flagged with
`needsClientConfirmation: true` and shown with a small "Spelling to be
confirmed" note on the menu page. **Do not silently rename these** — confirm
with the client first. Current list:

- Tikkad / Tikad
- Bara / Kachoriya
- Shilamil Rasmalai
- Kesar Bati
- Biscuiti / Biskuti
- Salad Decorate
- Paneer Angda
- Vatter Dosa
- Short Tikala
- The "Trained Hospitality & Service Staff" line item (rephrased from the
  source's gendered staffing wording — original text retained in
  `sourceName` for reference)

## Deployment

This is a standard Next.js app — deploy to Vercel, or any Node.js host that
supports `next build` / `next start`. Set the environment variables from
`.env.example` before deploying.

## Client Content Checklist

Before production launch, confirm the following (search-marked throughout
the codebase as `REPLACE_WITH_...`, `[CLIENT TO PROVIDE]`, or similar):

- [ ] Business name confirmed
- [ ] Logo supplied
- [ ] Phone confirmed (source lists two numbers: 9415456822 and 9506814862 —
      confirm which is primary)
- [ ] WhatsApp number confirmed
- [ ] Email confirmed
- [ ] Address confirmed
- [ ] City confirmed
- [ ] Service locations confirmed (or confirmation of pan-India coverage)
- [ ] Owner biography supplied
- [ ] Owner photograph supplied
- [ ] Event photographs supplied
- [ ] Food photographs supplied
- [ ] Testimonials supplied
- [ ] Menu spellings confirmed (see list above)
- [ ] Statistics confirmed (years in business, events catered, guests served)
- [ ] Social links confirmed

## Notes on What Was Intentionally Left Out

Per the brief, this build avoids fabricating any factual claims — no
invented testimonials, statistics, press mentions, celebrity clients, or
service locations. All of these render conditionally or as clearly marked
placeholders until real content is supplied, rather than showing fake data.
