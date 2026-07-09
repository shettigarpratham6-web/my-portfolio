# Pratham — Personal Portfolio

A vCard-style personal portfolio, built with **React + Vite** and **plain CSS**
(no CSS framework, no UI library). Inspired by the layout of
[vcard-personal-portfolio](https://codewithsadee.github.io/vcard-personal-portfolio/),
adapted with a sidebar + tab navigation for: **Home, About, Skills, Projects,
Achievements, Certifications, Education, Contact**, plus a **view-only Resume**
opened from the sidebar (no download link anywhere).

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Folder structure

```
portfolio/
├─ index.html
├─ package.json
├─ vite.config.js
├─ public/
│  ├─ favicon.svg
│  └─ avatar.jpg          ← add your own photo here (referenced in data.js)
└─ src/
   ├─ main.jsx            entry point
   ├─ App.jsx              lays out Sidebar + Navbar + active section + Resume modal
   ├─ index.css            entire design system (tokens, layout, components)
   ├─ data/
   │  └─ data.js           ← ALL editable content lives here (name, projects, etc.)
   └─ components/
      ├─ Icon.jsx           small inline SVG icon set (no icon package needed)
      ├─ Sidebar.jsx        avatar, name, contact toggle, socials, "View resume"
      ├─ Navbar.jsx         Home / About / Skills / Projects / ... tab bar
      ├─ SectionHeading.jsx shared "<tag>" heading used on every section
      ├─ ResumeModal.jsx    view-only resume overlay (Escape or click outside to close)
      └─ sections/
         ├─ Home.jsx
         ├─ About.jsx
         ├─ Skills.jsx
         ├─ Projects.jsx
         ├─ Achievements.jsx
         ├─ Certifications.jsx
         ├─ Education.jsx
         └─ Contact.jsx
```

## How navigation works

There's no router — `App.jsx` keeps the active section key in state, and
`Navbar.jsx` just calls `onChange(key)` when a tab is clicked. This mirrors the
reference site's single-page tab behavior without a page reload. If you later
want shareable URLs per section, swap this for `react-router-dom` and turn each
key into a route.

## Editing content

Open `src/data/data.js` — every section reads from here:

- `profile` — name, title, avatar path, email, phone, location, social links
- `about` — bio paragraphs + quick info grid
- `skills` — technical skills (with % levels) + tools list
- `projects` — project cards (title, tag, description, stack, link)
- `achievements` — timeline entries
- `certifications` — certification cards
- `education` — education timeline entries
- `resume` — what shows inside the view-only resume modal
- `contact` — intro line above the contact form

Add your real photo as `public/avatar.jpg` (the sidebar falls back to a
generated initial-avatar if the file isn't found, so the app never breaks).

## The resume is view-only, on purpose

`ResumeModal.jsx` renders resume content pulled from `data.js` inside an
overlay — it does **not** link to a PDF or expose a download anywhere. If you
want to swap the plain summary for an actual formatted resume image, drop an
image in `public/` and render it inside `.modal-body` instead of the list.

## Contact form

The form in `Contact.jsx` currently just confirms it was submitted — it isn't
wired to a backend. To actually receive messages, connect it to a service like
Formspree, EmailJS, or your own API endpoint inside `handleSubmit`.

## Design notes

- Fonts: **Sora** (headings), **Inter** (body), **JetBrains Mono** (labels/tags) — loaded via Google Fonts in `index.html`.
- Colors: dark slate background with a teal accent and amber secondary, defined as CSS variables at the top of `index.css`.
- Signature detail: section headings are styled like an opening tag (`<about>`), a nod to the developer/CS-student subject matter.
- Fully responsive: sidebar stacks on top on tablet/mobile, nav labels collapse to icons on small screens.
