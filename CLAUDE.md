# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

IGE (Igreja Geração Eleita) Turborepo monorepo containing two Next.js 16 apps and shared packages. The project serves a church website and an event (Forja BBQ) website, both in Brazilian Portuguese.

## Commands

```bash
# Development
npm run dev              # Run all apps concurrently (Turbo)
npm run dev:church       # Church app only → http://localhost:3000
npm run dev:forja        # Forja app only → http://localhost:3001

# Build
npm run build            # Build all apps
npm run build:church     # Build church app only
npm run build:forja      # Build forja app only

# Other
npm run lint             # ESLint across all workspaces
npm run clean            # Turbo clean + remove node_modules
```

Filter syntax for individual packages: `npx turbo <task> --filter=@ige/church` or `--filter=@ige/forja`.

## Architecture

### Monorepo Structure

```
apps/
├── church/    (@ige/church)  – Church landing page, port 3000
└── forja/     (@ige/forja)   – Forja BBQ event site, port 3001
packages/
├── ui/        (@ige/ui)      – Shared Radix UI + CVA components
└── config/    (@ige/config)  – Shared config exports (tailwind, tsconfig)
```

### Apps

**Church** (`apps/church/`) — Single-page landing with all sections defined inline in `src/app/page.tsx` (a large "use client" component with Header, Hero, About, Cultos, Ministerios, Eventos, Video, Contato, Footer). Uses Inter + Montserrat fonts. Dark green/gold theme.

**Forja** (`apps/forja/`) — Multi-page event site with component-based architecture:
- `/` — Main page composed from `src/components/sections/` (Hero, About, Forja, CTASection, IgeKids, Details, Location) and `src/components/layout/` (Header, Footer)
- `/cardapio` — Menu/ordering page with cart and WhatsApp order integration
- `/ige-kids` — Kids attractions ticketing with all-access pass and countdown timer
- Uses Inter font. Dark/smoky BBQ theme with fire-orange accents.

### Shared UI Package (`packages/ui/`)

Shadcn-style components built on Radix UI with CVA for variants. Exports via `src/index.ts`:
- `Button` (with variants: default, destructive, outline, secondary, ghost, link)
- `Card` (Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent)
- `Sheet` (modal drawer, supports 4 sides)
- `NavigationMenu`
- `cn()` utility (clsx + tailwind-merge)

Import from `@ige/ui` or specific subpaths: `@ige/ui/button`, `@ige/ui/card`, `@ige/ui/sheet`.

## Key Technical Details

- **React 19** + **Next.js 16** with App Router (all pages use `src/app/` convention)
- **Tailwind CSS v4** with PostCSS (`@tailwindcss/postcss`), no `tailwind.config.js` — themes are defined via CSS custom properties in each app's `globals.css`
- **Lucide React** for icons
- **TypeScript** in strict mode; path alias `@/*` → `./src/*`
- **shadcn/ui** configured in church app (`components.json` with new-york style, RSC enabled)
- WhatsApp ordering uses phone number `5515991412790` hardcoded in forja cardapio/ige-kids pages
- Event date: `2026-02-21` (used in countdown timers)
- **No test framework** configured — no jest, vitest, or similar

## Animation Strategy

**Forja app** uses a tiered approach:
1. **ScrollReveal** (`src/components/ui/ScrollReveal.tsx`) — lightweight "use client" wrapper using native IntersectionObserver + CSS transitions. Used by 6 section components (About, CTASection, Forja, Details, Location, IgeKids), allowing them to remain Server Components.
2. **`motion/react`** (from the `motion` npm package, NOT `framer-motion`) — only used in pages with complex animations: cardapio, ige-kids, Hero, Header.
3. **Pure CSS animations** — Hero uses keyframe animations defined in `globals.css` (`.animate-hero-fade-in`, `.animate-hero-fade-up`).

**Church app** still uses `framer-motion` directly — not yet migrated to the `motion` package.

New sections that only need scroll-reveal should use `ScrollReveal` instead of `motion/react`.

## Performance Patterns

- Below-fold sections in forja `page.tsx` are lazy-loaded with `next/dynamic`
- `backdrop-blur` and SVG noise overlay disabled on mobile (`md:` prefix) to reduce GPU overhead
- All images converted to WebP format
- `@vercel/speed-insights` integrated in forja app

## Styling Conventions

Each app defines its own theme via CSS variables in `globals.css`:
- **Church:** `--bg-primary: #002321`, `--accent-gold: #D4AF37`
- **Forja:** `--bg-primary: #121212`, `--accent-fire: #FF5E00`

Use `var(--variable-name)` in Tailwind classes. Both apps have custom scrollbar and gradient utilities defined in their CSS files.
