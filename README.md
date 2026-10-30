# Meša prerada mesa

Web stranica za mesarski obrt „Meša“ iz Zenice (Vjetrenice 28), napravljena u [Astro](https://astro.build).

## Struktura

- `src/pages/index.astro`: početna stranica (sve sekcije)
- `src/layouts/Layout.astro`: `<head>`, header, footer i skripte
- `src/components/`: Header, Footer, kartica proizvoda, ikone
- `src/data/site.ts`: kontakt podaci, proizvodi i galerija. **Telefon, radno vrijeme i ponuda se mijenjaju ovdje.**
- `src/styles/global.css`: svi stilovi
- `public/assets/img/`: slike

## Razvoj

```bash
npm install
npm run dev
```

## Deploy (Cloudflare Pages)

- Production branch: `main`
- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`

Svaki push na `main` automatski objavljuje novu verziju.
