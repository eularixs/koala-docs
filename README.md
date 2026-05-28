# Koala Docs

Documentation site for [Koala](https://github.com/eularixs/koala) — native macOS API client.

Live at [koala.eularix.com](https://koala.eularix.com/docs).

## Stack

- Next.js 15 (App Router)
- Fumadocs (UI + MDX)
- Tailwind CSS 3
- Deploy: Vercel

## Develop

```
pnpm install
pnpm dev    # http://localhost:3001
```

## Add a doc page

1. Drop an `.mdx` file in `content/docs/`.
2. Add its slug to `content/docs/meta.json` `pages` array.
3. Front-matter:

```mdx
---
title: Your Page Title
description: One-line summary used in nav + meta tags.
---

Body in MDX.
```

## Deploy

Pushes to `main` auto-deploy via Vercel. Custom domain `koala.eularix.com` is configured in Vercel project settings.

## License

MIT — same as the main Koala project.
