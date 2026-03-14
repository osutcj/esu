# ESU - Project Context & Coding Guidelines

## 1. Project Overview

**Name:** ESU - Engineering Summer University
**Organization:** OSUT Cluj (Organizația Studenților din Universitatea Tehnică)
**Industry:** Student Organization, STEM Education, Summer Camp
**Goal:** A high-performance website to attract 11th-grade students to ESU summer camp, showcase the team, provide event info, and answer FAQs.
**Target Audience:**
1. **Students:** 11th-grade students passionate about STEM looking to apply for the summer camp.
2. **University Community:** UTCN faculty, administration, and alumni.
3. **Parents:** Looking for information about the camp, costs, documents, and logistics.

**Key Values:** Adventure, Learning, Community, Hands-on Experience.

## 2. Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (Strict mode)
- **Styling:** styled-components v6 (CSS-in-JS)
- **Fonts:** Poppins via `next/font/google` (defined in root layout)
- **Icons:** Font Awesome 6 (loaded via CDN in layout head)
- **Deployment:** esu.osut.org

## 3. Design & UX Guidelines

- **Style:** Clean, modern, youth-friendly with academic credibility.
- **Primary Colors:**
  - **Blue:** `#073B7F` (dark navy), `#06265e`, `#071E46`, `#1366d3`
  - **Yellow/Gold:** `#fac82d` (accent color for highlights, hover states)
  - **White:** `#ffffff` (text on dark backgrounds)
  - **Gray:** `#ccc` (secondary text)
- **Background:** White (`#ffffff`) for main content, dark blue (`#073B7F`) for feature sections
- **Typography:** Poppins font family throughout
- **Hero Sections:** Full-viewport-height background image with dark overlay, white centered title
- **Cards:** Gradient dark blue (`linear-gradient(145deg, #094b9c, #052d6a)`), rounded corners, hover scale effect
- **Hover Effects:** Color transitions to `#fac82d` on yellow accent, smooth `0.4s ease-in-out` transitions

## 4. Coding Principles & Best Practices

### A. Styling with styled-components

- All styles are written with styled-components CSS-in-JS
- Use transient props (prefixed with `$`) to avoid DOM attribute warnings: `$isOpen`, `$active`, `$index`
- Responsive breakpoints used: `768px`, `950px`, `1050px`, `1500px`, `1800px`
- All components using styled-components MUST have `'use client'` directive

### B. TypeScript Rules

- **No `any` types** unless absolutely necessary
- Use `interface` for object definitions
- Use transient props pattern for styled-components: `styled.div<{ $propName: boolean }>`

### C. Next.js App Router Structure

- **Client Components:** ALL components using styled-components or React hooks must have `'use client'` at the top
- **Server Components:** Only pure layout/metadata files (layout.tsx, not-found.tsx)
- **Images:** Use `<img>` tags with paths under `/public/assets/` (the assets are large/numerous; next/image can be used for optimization if needed)
- **Links:** Use `import Link from 'next/link'` for internal navigation

### D. Component Architecture

- Each page is a self-contained `'use client'` component with its own styled-components
- Shared components: `Header`, `Footer`, `Loading` (all in `src/components/`)
- `Loading` is a splash screen shown on initial load (1500ms minimum), rendered via `ClientLayout`
- `ClientLayout` wraps all pages and renders the `Loading` splash screen

### E. Assets

- All images live in `/public/assets/images/` (served as `/assets/images/...` in code)
- Documents live in `/public/assets/documente/`
- Logo images: `/assets/images/Logo-uri/`
- Banner images: `/assets/images/Banner Page/`
- Team photos: `/assets/images/Echipa/`
- Decorative icons: `/assets/images/Forme/`

## 5. Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout (metadata, fonts, styled-components registry)
│   ├── globals.css       # Global CSS reset
│   ├── page.tsx          # Home page ('use client')
│   ├── echipa/page.tsx   # Team page ('use client')
│   ├── esu2025/page.tsx  # ESU 2025 info page ('use client')
│   ├── faq/page.tsx      # FAQ page ('use client')
│   └── about/page.tsx    # About/Despre Noi page ('use client')
├── components/
│   ├── Header.tsx        # Navbar with sidenav, scroll effect ('use client')
│   ├── Footer.tsx        # Footer with logos, social links, contact ('use client')
│   ├── Loading.tsx       # Splash loading screen ('use client')
│   └── ClientLayout.tsx  # Client wrapper that includes Loading ('use client')
└── lib/
    └── registry.tsx      # styled-components SSR registry for Next.js
```

## 6. Pages & Content

### Home (`/`)
- Hero with full-screen background image and "ENGINEERING SUMMER UNIVERSITY" title
- "Ce este ESU?" description section
- Animated counters: 2200+ Participanți, 700+ Voluntari, 14 Zile
- YouTube aftermovie embed (ESU 2024)
- Photo slideshow of camp moments

### About (`/about`)
- Hero with "DESPRE NOI" title
- Two-section description about ESU
- Testimonial slideshow

### Team (`/echipa`)
- Hero with "MEET THE ESU TEAM" title
- Card grid with team member photo, name, role, quote, social links, and decorative icon

### ESU 2025 (`/esu2025`)
- Hero with "ESU 2025 / 19 IULIE - 2 AUGUST" title
- Accordion FAQ: cost, registration, required documents, important downloads

### FAQ (`/faq`)
- Hero with "FAQ" title
- Accordion with 11 questions about dates, costs, location, documents, room allocation, etc.

## 7. Key Data

- **Camp dates:** 19 iulie - 2 august 2025
- **Location:** Campus Studențesc Observator, Cluj-Napoca
- **Cost:** 650 lei/participant
- **Eligibility:** Elevi de clasa a XI-a
- **Organizer:** OSUT Cluj (osut.org)
- **Contact email:** esu.osutcluj@gmail.com
- **Social media:**
  - Facebook: engineering.summer.university
  - Instagram: engineering.summer.university
  - TikTok: @esu.osut

## 8. Response Format

- When creating a component, provide the **full code block** with `'use client'` directive
- Include all styled-components in the same file as the component
- Use the existing color palette and responsive breakpoints
- Maintain the same visual style as existing pages
