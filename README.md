# Digital Bank landing page

Responsive marketing page built with React + TypeScript + Vite and styled-components.

## Features

- Hero and CTA section in [`Intro`](src/Intro.tsx)
- Feature grid in [`Benefits`](src/Benifits.tsx)
- Article list in [`Articles`](src/Articles.tsx)
- Global layout via [`App`](src/App.tsx), [`Header`](src/Header.tsx), and [`Footer`](src/Footer.tsx)
- Global reset styles from [`globalReset.css`](src/globalReset.css)

## Tech stack

- React 19 + TypeScript
- Vite 7
- styled-components 6

## Getting started

```sh
# install deps
npm install

# start dev server
npm run dev

# lint
npm run lint

# production build
npm run build

# preview build
npm run preview
```
Scripts are defined in [package.json](package.json).

## Project structure

```
src/
  App.tsx          # composition root
  Header.tsx       # top navigation
  Intro.tsx        # hero section
  Benifits.tsx     # “Why choose us” grid
  Articles.tsx     # latest articles list
  Footer.tsx       # footer links and CTA
  globalReset.css  # global styles
```
