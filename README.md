# Mangalyam

A responsive frontend recreation of the Mangalyam wedding and celebration booking landing page, built with React and Vite. The page brings together venue and service categories, booking prompts, and trust indicators in a warm cream, gold, and burgundy visual style.

## Features

- Responsive header with navigation and account actions
- Hero section with the Mangalyam logo and booking call to action
- Six service cards: Marriage Halls, Resorts, Caterers, Hotels, Photographers, and Decorators
- Trust indicators and an app download button
- Responsive layouts for desktop, tablet, and mobile screens

The project focuses on reproducing the supplied reference design. Any interactive dialogs or controls should be considered frontend demonstrations unless connected to a real backend service.

## Built With

- React
- Vite
- CSS
- Lucide React, if used by the current implementation
- Google Fonts

## Project Assets

The page uses these supplied image assets:

- `public/images/GoldenWeddingResortPanoramaBanner.png` — panoramic wedding and resort background
- `public/images/mangalyamLogo.png` — Mangalyam logo used in the header and hero

Keep these paths unchanged unless you also update their references in the source code.

## Getting Started

### Requirements

- Node.js (an active LTS version is recommended)
- npm

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open the local URL printed in the terminal. Vite commonly uses `http://localhost:5173`.

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

Vite will print the local preview URL in the terminal.

## Design Notes

The layout uses a three-part hero composition on larger screens, with the headline on the left, the logo in the center, and the booking message on the right. Service cards form a horizontal row on desktop and adapt to a grid or stacked layout on smaller screens. The palette uses cream backgrounds, gold details, and burgundy actions to stay close to the supplied reference.

The panoramic background and logo are existing project assets; they are not recreated by the application. CSS controls their sizing, positioning, and responsive behavior.

## Project Structure

The exact structure may differ depending on the files currently in the repository. The main application files are typically:

```text
public/
  images/
    GoldenWeddingResortPanoramaBanner.png
    mangalyamLogo.png
src/
  components/
  App.jsx
  main.jsx
  style.css
index.html
package.json
vite.config.js
README.md
```

## Notes

- This is a frontend project; booking, authentication, wishlist, and app-download flows require backend services or real destination links to work beyond a visual demonstration.
- Before submission, run `npm run build` and check the page at desktop, tablet, and mobile widths.
- Confirm that the scripts and dependencies listed in `package.json` match the current project before publishing.
