# ESU - Engineering Summer University

Official website for **Engineering Summer University (ESU)**, a two-week summer camp organized by [OSUT Cluj](https://osut.org/) for 11th-grade students passionate about STEM fields.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** styled-components v6
- **Fonts:** Poppins (via next/font/google)
- **Icons:** Font Awesome 6

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, about section, counters, video, and slideshow |
| `/about` | About page with description and testimonials slideshow |
| `/echipa` | Meet the ESU team |
| `/esu2025` | ESU 2025 edition info with FAQ and documents |
| `/faq` | Frequently asked questions |

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
src/
├── app/
│   ├── layout.tsx        # Root layout (metadata, fonts, styled-components registry)
│   ├── globals.css       # Global styles
│   ├── page.tsx          # Home page
│   ├── echipa/page.tsx   # Team page
│   ├── esu2025/page.tsx  # ESU 2025 page
│   ├── faq/page.tsx      # FAQ page
│   └── about/page.tsx    # About page
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Loading.tsx
│   └── ClientLayout.tsx
└── lib/
    └── registry.tsx      # styled-components SSR registry
```

## About ESU

Engineering Summer University brings together over 2,200+ students and 700+ volunteers across 14+ editions. Participants experience university life at [UTCN](https://www.utcluj.ro/), attending lectures, labs, and recreational activities.

**Website:** [esu.osut.org](https://esu.osut.org/)
