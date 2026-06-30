# Ruchitha Gedela — Portfolio

Premium AI/ML engineer portfolio built with Next.js 16, GSAP, Framer Motion, Lenis, and a violet glassmorphism design system.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Tech Stack

| Layer | Library |
|---|---|
| Framework | Next.js 16 App Router |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Scroll animation | GSAP + ScrollTrigger |
| Spring animation | Framer Motion |
| Smooth scroll | Lenis |
| Theming | next-themes (dark/light) |
| Icons | Lucide React |
| Command menu | cmdk |
| Fonts | Geist (sans) + Instrument Serif (display) |

---

## Customization

All resume content lives in one file:

```
src/data/resume.ts
```

Edit your name, roles, experience, projects, skills, certifications, and links there. Every section reads from this single source — you never need to touch a component to update content.

---

## Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, providers, global chrome
│   ├── page.tsx            # Assembles all sections
│   ├── globals.css         # Design tokens, glassmorphism utilities, animations
│   ├── not-found.tsx       # Custom 404
│   └── sitemap.ts          # Dynamic sitemap
├── components/
│   ├── layout/
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   ├── ambient-background.tsx   # Floating blobs + mouse-reactive light
│   │   ├── custom-cursor.tsx
│   │   ├── scroll-progress.tsx
│   │   ├── back-to-top.tsx
│   │   ├── loading-screen.tsx
│   │   ├── theme-toggle.tsx
│   │   └── command-menu.tsx         # ⌘K / Ctrl+K navigation
│   ├── sections/
│   │   ├── hero.tsx                 # GSAP character reveal, role switcher
│   │   ├── about.tsx                # Storytelling layout, stat counters
│   │   ├── experience.tsx           # Animated timeline, expandable cards
│   │   ├── projects.tsx             # Tilt cards, expandable details, metrics
│   │   ├── skills.tsx               # Category tabs, animated bubbles
│   │   ├── achievements.tsx         # Spotlight stat cards
│   │   ├── education.tsx            # Degree + certificates
│   │   └── contact.tsx              # Glass card, magnetic send button
│   └── ui/
│       ├── button.tsx               # Magnetic hover button
│       └── counter.tsx              # Animated number counter
├── data/
│   └── resume.ts                    # ← EDIT THIS to update the site
├── hooks/
│   ├── use-reduced-motion.ts
│   ├── use-lenis.ts
│   ├── use-scroll-reveal.ts
│   └── use-magnetic.ts
└── lib/
    └── utils.ts                     # cn() class-merge helper
```

---

## Features

- **Command menu** — press `⌘K` (Mac) or `Ctrl+K` (Windows/Linux) to jump between sections or open external links
- **Custom animated cursor** — dot + trailing ring on desktop, disabled on touch
- **Lenis smooth scroll** — cinematic scroll feel, respects `prefers-reduced-motion`
- **GSAP scroll reveals** — blur + slide-up reveals on every section
- **GSAP hero entrance** — character-by-character name reveal
- **Magnetic buttons** — CTAs subtly follow the cursor, spring back on leave
- **3D tilt cards** — project cards tilt on hover (perspective transform)
- **Animated counters** — numbers count up when they scroll into view
- **Ambient background** — floating violet gradient blobs + mouse-reactive radial light
- **Dark/light theme** — animated toggle, persists across sessions
- **Loading screen** — progress bar on first load, skipped for reduced motion
- **Scroll progress indicator** — thin gradient bar at the top of the viewport
- **Back-to-top button** — appears after scrolling past 80vh
- **Infinite marquee footer** — tech stack ticker
- **SEO** — metadata, OpenGraph, Twitter cards, robots.txt, sitemap

---

## Deployment

Deploy to Vercel in one command:

```bash
npx vercel
```

Or push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new).

---

## Add Your Resume PDF

Drop your resume PDF at:

```
public/Ruchitha_Gedela_Resume.pdf
```

The Resume button in the hero links to it automatically.

---

## Update Your Real URLs

In `src/data/resume.ts`, replace the placeholder URLs:

```ts
linkedin: "https://linkedin.com/in/ruchitha-gedela",
github: "https://github.com/ruchitha-gedela",
```
# RUCHITHA
