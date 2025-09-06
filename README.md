# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

## Environment configuration

The Vite setup reads common options from environment files. The following
files are included:

- `.env.development`
- `.env.test`
- `.env.production`

Each file can configure the dev server port, whether the browser opens
automatically and if vendor chunks are created during the build.

Example settings:

```
VITE_PORT=3000
VITE_OPEN=true
VITE_SPLIT_CHUNKS=false
```

Use the provided scripts to start or build with a specific mode:

- `npm run dev` – development mode
- `npm run dev:test` – test mode
- `npm run build` – production build with vendor chunk splitting
- `npm run build:test` – test build

Set `VITE_SPLIT_CHUNKS=true` in the respective environment file to enable
manual chunk splitting of vendor dependencies.

## Continuous Integration

Automated linting, testing and building run on GitHub Actions. The workflow is defined in `.github/workflows/ci.yml` and executes the same steps as local development.

## Docker

A multi-stage `Dockerfile` builds the app and serves the production files via Nginx.
Build and run the container with:

```bash
docker build -t tanzmoment-frontend .
docker run -p 8080:80 tanzmoment-frontend
```
