# Journeymate — Premium Car Rental & Tours Website

A premium multi-page marketing website for a private car rental and outstation tour business serving Pune, Mumbai, and Nashik.

## Run & Operate

- `pnpm --filter @workspace/car-rental-site run dev` — run the frontend (served by Vite, port assigned by workflow)
- `pnpm --filter @workspace/api-server run dev` — run the API server
- `pnpm run typecheck` — full typecheck across all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite (artifacts/car-rental-site), wouter routing, framer-motion animations, Tailwind CSS v4
- No backend required — all content is hardcoded static data

## Where things live

- `artifacts/car-rental-site/src/pages/` — all page components (Home, Fleet, Services, Packages, PackageDetail, Gallery, About, Contact, NotFound)
- `artifacts/car-rental-site/src/components/layout/` — Navbar, Footer
- `artifacts/car-rental-site/src/data/` — all hardcoded business data (fleet, packages, routes, FAQs, testimonials, gallery, contact info)
- `artifacts/car-rental-site/src/index.css` — full design system (deep charcoal + amber/copper palette, serif/sans font pairing)

## Architecture decisions

- Pure static frontend — no API calls, all data lives in `src/data/index.ts`
- Wouter for client-side routing with wouter Router base from `import.meta.env.BASE_URL`
- Framer Motion for scroll-triggered animations and page transitions
- Custom lightweight lightbox in Gallery (no external library)

## Product

8-page marketing site: Home (hero, trust stats, fleet preview, routes, services, testimonials, FAQ), Fleet, Services, Packages (listing + detail pages), Gallery (masonry + lightbox), About, Contact (inquiry form).

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- No backend — do not add API calls to the frontend without also building routes in `artifacts/api-server`

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
