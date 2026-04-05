# ESU - Engineering Summer University

Official website for **Engineering Summer University (ESU)**, a two-week summer camp organized by [OSUT Cluj](https://osut.org/) for 11th-grade students passionate about STEM fields.

## Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Library:** React 19
- **Language:** TypeScript
- **Styling:** SCSS Modules & styled-components v6
- **Fonts:** Poppins (via next/font/google)
- **Icons:** Font Awesome 6

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, about section, counters, video, and slideshow |
| `/about` | About page with description and testimonials slideshow |
| `/echipa` | Meet the ESU team |
| `/esu2026` | ESU 2026 edition info with FAQ and documents |
| `/faq` | Frequently asked questions |

## Recent Optimizations

- **Image Preloading:** All carousel images are preloaded with `priority` for instant, smooth transitions.
- **Responsive Layouts:** Implemented "no-stretch" logo containers in the footer using `fill` and `object-fit: contain`.
- **Media Fixes:** Corrected ESU 2025 aftermovie orientation and controls through permanent video re-encoding.
- **SEO & Performance:** Optimized image dimensions (1920x1280) and updated sitemap for the 2026 edition.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Project Structure

```
.
├── app/                  # App Router pages and layouts
│   ├── layout.tsx        # Root layout (metadata, fonts, styled-components registry)
│   ├── globals.css       # Global styles
│   ├── page.tsx          # Home page
│   ├── echipa/page.tsx   # Team page
│   ├── esu2026/page.tsx  # ESU 2026 page
│   ├── faq/page.tsx      # FAQ page
│   └── about/page.tsx    # About page
├── components/           # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Loading.tsx
│   └── ClientLayout.tsx
├── lib/                  # Utilities and registries
│   └── registry.tsx      # styled-components SSR registry
└── public/               # Static assets (images, videos, documents)
```

## About ESU

Engineering Summer University brings together over 2,200+ students and 700+ volunteers across its editions. In its 12th year, participants experience university life at [UTCN](https://www.utcluj.ro/), attending lectures, labs, and recreational activities.

**Website:** [esu.osut.org](https://esu.osut.org/)
