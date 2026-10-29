# Meša prerada mesa

Web stranica za mesarski obrt „Meša“ iz Zenice (Vjetrenice 28).

Statični sajt bez build koraka: `index.html`, `style.css` i slike u `assets/img/`.

## Deploy (Cloudflare Pages)

- Production branch: `main`
- Framework preset: None
- Build command: prazno
- Build output directory: `/`

Svaki push na `main` automatski objavljuje novu verziju.

## Lokalni pregled

```bash
python -m http.server 5521
```

Zatim otvori http://localhost:5521.
