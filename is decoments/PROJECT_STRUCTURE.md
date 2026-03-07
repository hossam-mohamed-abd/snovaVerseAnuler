# Project Structure Guide

## High-level directories

- `src/`
  - Angular application code (components, routes, app config, SSR entrypoints).
- `public/assets/`
  - Static assets used by the UI (images, videos, AR project runtime files, 3D models).
- Root configs
  - `angular.json`, `tsconfig*.json`, and `package.json` define build/test/tooling behavior.

## Important application files

- `src/app/app.routes.ts`
  - Declares all client routes.
- `src/app/components/home/`
  - Main landing page and its section components.
- `src/app/components/navbar/` and `src/app/components/footer/`
  - Shared layout elements across pages.
- `src/app/core/language.ts`
  - Language state and direction (`rtl`/`ltr`) logic.
- `src/server.ts` and `src/main.server.ts`
  - SSR server bootstrap and server app entry.

## Routing map (current)

- `/home`
- `/home/vr-service`
- `/home/AR&AI-service`
- `/home/metaverse-service`
- `/home/TourismVirtualTour`
- `/home/contact-us`
- `/not-found`

Any unknown path redirects to not-found.
