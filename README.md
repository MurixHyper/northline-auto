# NORTHLINE AUTO

A complete redesign of the supplied fictional multi-brand automotive concept. English copy, Swiss-inspired typography, responsive layouts and a working selection journey.

## Run locally

Node.js 22 or newer is recommended.

```sh
npm ci
npm run dev
```

```sh
npm run test
npm run typecheck
npm run build
npm start
```

## Architecture

- Next.js App Router, TypeScript and Tailwind CSS v4.
- `src/lib/catalog.ts` is the single source of truth for fictional specifications, UAH pricing and recommendation scoring.
- Dedicated components for vehicle imagery, accessible native dialogs, the three-question finder and the demo booking flow.
- `src/components/experience.tsx` coordinates the catalogue, comparison and configuration. It is server-prerendered and hydrated for interaction.
- Design tokens and responsive rules live in `src/app/globals.css`. System-aware light/dark themes and reduced-motion support are included.
- Next Image optimizes the generated hero and landscape image. The four supplied vehicle illustrations use a small shared image atlas.
- Font files ship with the Geist package and are served locally through `next/font/local`.
- Metadata, social preview, sitemap, robots and favicon are included.

## Deployment

Import this repository into Vercel and use the detected Next.js preset. Set `NEXT_PUBLIC_SITE_URL` to the production URL if it differs from `https://northline-auto.vercel.app`.

## Content and privacy

This remains a portfolio concept, as in the supplied source. Brands, specifications and prices are fictional. Values are retained in UAH; no invented currency conversion, testimonials, availability or dealership credentials are introduced. All interactions work locally. The booking form previews a request but does not send it, persist it or book an appointment. No tracking scripts are added.

Before using this as a real dealership, replace the fictional catalogue with verified inventory, supply real business/contact details and policies, and connect a consent-aware enquiry service. Do not remove the concept disclosure until that work is complete.

See `docs/research-and-decisions.md` for source analysis, competitors and implementation choices; `docs/image-provenance.md` for imagery.

