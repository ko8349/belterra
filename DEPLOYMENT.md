# Deployment Guide

## Local test

```bash
npm install
npm run dev
```

Open the local URL provided by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Vercel deployment

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

## GoDaddy domain

After deploying on Vercel:
1. Add the domain in Vercel.
2. Copy the DNS records provided by Vercel.
3. Paste them into GoDaddy DNS settings.
4. Wait for propagation.
