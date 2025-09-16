# Bail Me — MVP (Static Site)

This is a single-file, open-source web app (no backend). It works offline and can be installed as a PWA.

## Quick preview
```bash
python3 -m http.server 8080
# Open http://localhost:8080
```

## Deploy options (pick one)

### 1) Netlify (fastest)
- Go to https://app.netlify.com/drop
- Drag & drop this folder (or the ZIP)
- Netlify will give you a public URL like `https://bailme-xyz.netlify.app`

### 2) Vercel
```bash
# Install once
npm i -g vercel
vercel deploy --name bailme-mvp /path/to/folder
```
- It will return a public URL like `https://bailme-mvp.vercel.app`

### 3) GitHub Pages
- Create a repo, e.g. `bailme-mvp`
- Push `index.html` at the repo root
- In repo Settings → Pages → set Source to **Deploy from a branch**, Branch: **main** / **root**
- Your site will be at: `https://<your-username>.github.io/bailme-mvp/`

## Custom domain (optional)
- Buy a domain (e.g., on Namecheap/GoDaddy)
- Point DNS to your hosting:
  - Netlify: add a site domain in Netlify → follow the DNS instructions (CNAME)
  - Vercel: add Domain in Project Settings → follow DNS check (CNAME/A)
  - GitHub Pages: create `CNAME` file with your domain and add a DNS CNAME to `<username>.github.io`

## Notes
- Favorites are saved in the browser via `localStorage` (no account required).
- Web Share API appears on most Android browsers; otherwise use **Copy**.
- Service Worker caches the page for offline use after first load.
