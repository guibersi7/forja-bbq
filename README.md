# ige-monorepo

A Turborepo workspace running three Next.js 16 sites from one codebase, on a shared
UI package and a single Tailwind/TypeScript config.

The three sites started as separate projects with their own setup, their own copy of
the same components, and dependencies that drifted apart version by version. They now
share one dependency tree, one component library, and one build pipeline, while each
app keeps its own routes, content, and deploy target.

## Apps

| Workspace | Dev port | Notes |
|---|---|---|
| `@ige/church` | 3000 | Church site. Framer Motion for page transitions. |
| `@ige/forja` | 3001 | Forja BBQ site. Motion, Vercel Speed Insights. |
| `@ige/forja-m4` | 3002 | Form-heavy sibling site: react-hook-form with Zod validation. |

## Packages

| Workspace | What it holds |
|---|---|
| `@ige/ui` | Shared components: `button`, `card`, `sheet`, `navigation-menu`, plus the `cn` class merger. Built on Radix primitives with class-variance-authority and tailwind-merge. Exported per component, so an app importing a button doesn't pull in the dialog. |
| `@ige/config` | The Tailwind config and the base `tsconfig`, exported as `@ige/config/tailwind` and `@ige/config/typescript`. |

Both are private workspace packages consumed through the `*` version range, so there
is no publish step and no version bumping between the apps and the library.

## Layout

```
apps/
  church/      @ige/church      Next.js 16, React 19
  forja/       @ige/forja
  forja-m4/    @ige/forja-m4
packages/
  ui/          @ige/ui          shared components
  config/      @ige/config      tailwind + tsconfig
turbo.json                      task graph
```

## Running it

Requires Node 18+ and npm 10.

```bash
npm install          # installs every workspace at once
npm run dev          # all three apps, ports 3000-3002
npm run build        # builds everything, respecting the dependency graph
npm run lint
```

One app at a time, which is what you usually want:

```bash
npm run dev:church
npm run dev:forja
npm run dev:forja-m4
```

Same pattern for builds: `npm run build:church`, and so on. These are
`turbo --filter` calls, so a filtered build still builds `@ige/ui` first if it
changed and skips it if it didn't.

## How the task graph works

`turbo.json` declares four tasks:

- **`build`** depends on `^build`, so `@ige/ui` builds before any app that imports it.
  Outputs are cached from `.next/**`, excluding `.next/cache/**`. `.env*` files count
  as inputs, so changing an environment variable correctly busts the cache.
- **`lint`** depends on `^lint`, same ordering rule.
- **`dev`** is `persistent` and uncached, since it never terminates.
- **`clean`** is uncached.

The practical effect: touching a component in `packages/ui` rebuilds all three apps,
touching a route in `apps/forja` rebuilds only that one, and touching nothing replays
from cache.

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Radix UI · Turborepo 2.5 · npm workspaces
