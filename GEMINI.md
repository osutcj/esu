# Gemini CLI Instructions - ESU Project

This document provides project-specific mandates and workflows for the **ESU (Engineering Summer University)** codebase, based on Next.js 15. These instructions take precedence over general defaults.

## 1. Project Overview
- **Name**: ESU - Engineering Summer University
- **Organization**: OSUT Cluj (Organizația Studenților din Universitatea Tehnică din Cluj-Napoca)
- **Core Stack**: Next.js 15+ (App Router), React 19, TypeScript, Styled-components v6, SCSS Modules.
- **Goal**: High-performance website for 11th-grade students interested in STEM.

## 2. Engineering Mandates

### Architecture & Components
- **Client Components First**: Most pages and components use `"use client"` because they rely on `styled-components` or React hooks (interactivity, animations).
- **Styling Strategy**: 
  - The project uses **Styled-components** for component-level styling.
  - **SCSS Modules** (`.module.scss`) are also used and preferred for consistency with the latest updates.
  - **Animations**: Use keyframes for `twinkle`, `drift`, `spin`, and `fade-out` effects to maintain the "starry night" aesthetic.
- **Component Organization**: 
  - Shared components in `components/` (Header, Footer, Loading).
  - Page-specific logic and styling in `app/[page]/`.
- **Images**: Prefer `next/image` for optimization. Assets are located in `/public/assets/images/`.
- **Navigation**: Use `next/link` for internal routing.

### UI & UX Standards
- **Primary Colors**: 
  - Blue: `#073B7F`, `#06265e`, `#071E46`, `#1366d3`.
  - Accent (Yellow/Gold): `#fac82d`.
- **Typography**: Poppins (Google Font) used throughout.
- **Visuals**: Modern, youth-friendly, dark blue gradients, rounded corners, and smooth transitions (`0.4s ease-in-out`).

### Technical Requirements
- **TypeScript**: Strict mode. Use `interface` for object definitions. Avoid `any`.
- **Responsive Design**: Breakpoints at `768px`, `950px`, `1050px`, `1500px`, `1800px`.
- **Loading State**: A splash screen (`Loading` component) is shown on initial load via `ClientLayout`.

## 3. Workflow Specializations

### Annual Updates (e.g., 2025 to 2026)
- When transitioning to a new edition:
  1. Rename the year-specific route directory (e.g., `app/esu2025` to `app/esu2026`).
  2. Update `layout.tsx` metadata (title, description, canonical URL).
  3. Update `page.tsx` content (dates, costs, FAQ data, document links).
  4. Update `sitemap.ts` with the new URL.
  5. Update `Header.tsx` and `Footer.tsx` with new contact details and links.

### Asset Management
- **Images**: `/public/assets/images/`
- **Documents**: `/public/assets/documente/`
- **Videos**: `/public/assets/videos/` (local storage preferred over iframes for internal aftermovies).

## 4. Verification Checklist
- [ ] Are all new user-facing strings in Romanian? (Code is in English).
- [ ] Does the component have the `"use client"` directive if it uses hooks or styled-components?
- [ ] Is the "starry night" animation (twinkle/drift) maintained in dark-themed sections?
- [ ] Has the sitemap been updated if a new page was added?
- [ ] Are images using `next/image` with proper `width`/`height` or `fill`?
