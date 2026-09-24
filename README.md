# EK Portfolio Website

Elie Krugolets' personal portfolio. Live at **https://elie-krugolets.vercel.app**

A static site with no build step: plain HTML, CSS and JavaScript.

## Editing content

Almost everything on the site lives in [`data.js`](data.js): the about text, passport details, media kit stats, brands, work, timeline, travel places and resume. Edit it and the pages update. Stats like content views and interactions are added up from the per-account numbers in `mediaKit.accounts`.

| File | What it does |
| --- | --- |
| `index.html` | Page shell: header, ticker, footer, shared fleur-de-lis mark |
| `app.js` | Renders each chapter (About, Socials, Work, Record, Finance, High School, Travel, Resume) |
| `styles.css` | All styling, including the fleur-de-lis cursor |
| `travel.js` | The interactive travel map (loaded only on the Travel page) |
| `icons.js` | Social brand icons (Simple Icons, CC0) |
| `vendor/` | d3, topojson and the world / US map data |
| `brands/`, `avatars/`, `photo.jpg` | Logos and photos |
| `Elie_Krugolets_Resume.pdf` | The file the Resume page prints and downloads |

## Running locally

Serve the folder with any static server, for example:

```bash
npx serve -l 5180 .
```

## Deploying

The site is hosted on Vercel (project `elie-krugolets`). From this folder:

```bash
vercel deploy --prod
```
