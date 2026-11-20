# Firdaus Samad – React Portfolio

React 19 + Vite 7 + Bootstrap 5.3 + Bootstrap Icons.

## Run
```
npm install
npm run dev
```
Needs Node.js 20.19 or newer. Open the address Vite prints (usually http://localhost:5173).

## Edit
- **Content:** everything is in `src/data.js` (name, summary, skills, experience, education, certifications).
- **Layout:** `src/App.jsx` uses plain Bootstrap classes (`container`, `row`, `col-*`, `card`, `badge`), so you can change spacing or columns directly in the markup.
- **Colours and fonts:** `src/styles.css`, at the top (Bootstrap CSS variables).
- **Photo:** replace `public/photo.jpg` with a larger square photo for a sharper result.

## Publish
```
npm run build
```
Upload the `dist` folder to Netlify, Vercel, GitHub Pages or any static host.
