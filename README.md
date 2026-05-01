# Belterra Website

React + Vite website for Belterra Residences by Aventus.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy on Vercel

1. Upload this folder to GitHub.
2. In Vercel, choose Add New Project.
3. Import the GitHub repo.
4. Framework: Vite.
5. Build command: `npm run build`.
6. Output directory: `dist`.
7. Add your GoDaddy domain in Vercel → Settings → Domains.
8. Copy Vercel DNS records into GoDaddy DNS.

Typical Vercel DNS:
- A record: `@` → `76.76.21.21`
- CNAME: `www` → `cname.vercel-dns.com`

Use the exact records Vercel shows.
