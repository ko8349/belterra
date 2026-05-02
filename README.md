# BELTERRA Website

GitHub-ready React/Vite website for **BELTERRA Residences by Aventus**.

## Local setup

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Build

```bash
npm run build
```

The production files will be created in:

```bash
dist/
```

## Deploy to Vercel

1. Create a GitHub repository.
2. Upload this project folder to GitHub.
3. Go to Vercel and select **Add New Project**.
4. Import the GitHub repository.
5. Use these settings:
   - Framework: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
6. Deploy.
7. In Vercel, go to **Settings → Domains** and add your domain.

## Connect GoDaddy domain to Vercel

In GoDaddy DNS settings, add the records Vercel gives you.

Typical setup:

- `A` record for `@` pointing to Vercel IP
- `CNAME` record for `www` pointing to Vercel target

Use the exact DNS values shown in your Vercel domain setup screen.

## Deploy directly on GoDaddy hosting

GoDaddy standard hosting usually serves static files.

1. Run:

```bash
npm run build
```

2. Upload everything inside the `dist/` folder to your GoDaddy `public_html` folder.
3. Make sure `index.html` is at the root of `public_html`.

## Images

All images are stored in:

```bash
public/images/
```

The site expects the following filenames:

- `10.jpg`
- `08.jpg`
- `16.jpg`
- `14.jpg`
- `45.jpg`
- `42_2.jpg`
- `Marbella1.jpg`
- `Marbella2.jpg`
- `Marbella3.jpg`
- `Marbella4.jpg`

You can replace images with newer renders as long as the filenames stay the same.

## Notes

The contact form is visual only. To make it live, connect it to:
- HubSpot
- Mailchimp
- Make/Zapier webhook
- Vercel serverless function
- WhatsApp link
