# Ahmed Ali — Personal Portfolio

My personal portfolio site. It's where I introduce myself, show off the tech I work with, list my latest projects, and give people an easy way to get in touch.

The site is built as a single-page Next.js app with smooth scroll-linked sections and a dark/light theme toggle.

---

## What's on the site

- **Header** — short intro, profile photo, links to my resume, LinkedIn, and GitHub
- **About Me** — a quick bio plus a grid of "what I do" cards and the tools I use day-to-day
- **My Work** — pulls my GitHub repos live from the GitHub API (only ones with stars), shows the languages used, and links to the repo and live demo for each
- **Contact Me** — a form that emails me directly, powered by Web3Forms
- **Dark / Light mode** — toggle in the navbar; preference is remembered in `localStorage`

---

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 4** for styling
- **Motion** (`motion/react`) for the scroll-in animations and hover effects
- **GitHub REST API** for the live "My Work" section
- **Web3Forms** for contact form submissions

---

## Getting started

```bash
npm install
npm run dev
```

### Scripts

| Script          | What it does                       |
| --------------- | ---------------------------------- |
| `npm run dev`   | Starts the Next.js dev server      |
| `npm run build` | Production build                   |
| `npm run start` | Runs the production build          |
| `npm run lint`  | Lints the project with ESLint      |

---

## Get in touch

If you'd like to chat about an opportunity or just say hi, the contact form on the site is the fastest way — or reach me directly on [LinkedIn](https://www.linkedin.com/in/ahmedjoyali/) or [GitHub](https://github.com/TheAhmedJoy).
