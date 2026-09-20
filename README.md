# Seraphine Michelle Atmadjie — Portfolio

Personal portfolio site built with Next.js App Router, showcasing projects,
experience, and skills as a Computer Science student.

## Tech stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Plain CSS with light/dark theme
- Next Font (Geist / Geist Mono)

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the site locally.

## Project structure

```text
app/
  layout.tsx
  page.tsx
  globals.css

components/
  layout/
    Header.tsx
    PageShell.tsx
    AmbientBackground.tsx
  sections/
    Hero.tsx
    About.tsx
    Work.tsx
    Experience.tsx
    Skills.tsx
    Contact.tsx
  ui/
    SectionHeading.tsx

context/
  theme-context.tsx

data/
  profile.ts
  nav.ts
  projects.ts
  experience.ts
  skills.ts

public/
  experience/
  project/
  skills/
```

The page is split into reusable section components, while editable portfolio
content is kept in `data/`. This keeps the structure cleaner without changing
the portfolio content or visual design.

## Content and assets

The original portfolio content is preserved. Two image paths referenced by the
original content are not present in the supplied source archive:

- `/project/churn-dashboard.png`
- `/experience/academic-tutor.jpeg`

Add those files to the matching `public/` folders when available.

## Deploy

The project can be deployed normally to Vercel:

```bash
npm run build
```
