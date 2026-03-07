# Development Guide

## Prerequisites
- Node.js compatible with Angular 21 tooling.
- npm (project indicates `npm@10.9.4` in `package.json`).

## Install dependencies
```bash
npm install
```

## Start local development server
```bash
npm start
```
Then open `http://localhost:4200/`.

## Build the project
```bash
npm run build
```
Build output is generated in `dist/`.

## Run tests
```bash
npm test
```
The project uses Angular test tooling with Vitest dependencies present.

## Useful notes for contributors
- Keep component logic focused; most page content is composition of smaller section components.
- When adding new pages, register the route in `src/app/app.routes.ts`.
- If adding language-aware text, use `LanguageService` patterns and ensure RTL compatibility.
- Place new static media under `public/assets/` and reference with root-relative paths.
