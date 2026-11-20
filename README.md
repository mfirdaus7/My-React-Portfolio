# Firdaus Samad | Portfolio (React)

Personal portfolio for Firdaus Samad, Front End Developer and Software Test Automation.

## Tech stack

- React 19
- Vite 7
- Bootstrap 5.3 and Bootstrap Icons
- Google Fonts: Bricolage Grotesque, IBM Plex Sans

## Features

- Responsive layout for phone, tablet and desktop (Bootstrap grid)
- Hero with photo and highlighted tech chips
- Profile summary, key skills, work experience timeline, education, certifications
- All content in one data file, so no code changes are needed to update text

## Requirements

- Node.js 20.19 or newer
- npm

## Getting started

```bash
npm install
npm run dev
```

Open the address Vite prints, usually http://localhost:5173.

## Scripts

| Command           | What it does                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload  |
| `npm run build`   | Create the production build in `dist` |
| `npm run preview` | Preview the production build locally  |

## Project structure

```
├── public/
│   └── photo.jpg        Profile photo
├── src/
│   ├── App.jsx          Page layout (Bootstrap classes)
│   ├── data.js          All portfolio content
│   ├── main.jsx         Entry point, loads Bootstrap CSS
│   └── styles.css       Theme colours, fonts and custom styles
├── index.html
├── package.json
└── vite.config.js
```

## How to edit

- **Text and content:** edit `src/data.js` (name, summary, skills, experience, education, certifications, contact details).
- **Social links and resume:** set `linkedin`, `github` and `resumeUrl` in `src/data.js`. Buttons appear only when a value is set. For the resume, put the PDF in `public/` and use its file name.
- **Layout and spacing:** edit the Bootstrap classes in `src/App.jsx` (`container`, `row`, `col-*`, `card`, `badge`, `gap-*`, `py-*`).
- **Colours and fonts:** change the CSS variables at the top of `src/styles.css`.
- **Photo:** replace `public/photo.jpg` with a square image. A larger photo gives a sharper result.

## Deploy

```bash
npm run build
```

Upload the `dist` folder to any static host, such as Netlify, Vercel, GitHub Pages or Cloudflare Pages.

## Troubleshooting

- **Blank page after deploy:** upload the contents of `dist`, not the project root. `vite.config.js` uses a relative base (`./`), so the build works from any folder.
- **Icons missing:** run `npm install` again to make sure `bootstrap-icons` is installed.
- **Install or dev server errors:** check your Node version with `node -v` (20.19 or newer).
