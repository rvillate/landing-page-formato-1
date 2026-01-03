# LocksmithLX Landing Page

Landing page para servicios de cerrajeria en Los Angeles. Proyecto React + Vite enfocado en conversion, con secciones modulares, mapa de cobertura y CTA de contacto.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS v4 (tokens en `src/index.css`)
- Zustand (tema claro/oscuro)
- i18next (ES/EN)
- Leaflet + react-leaflet (mapa y poligono de cobertura)
- lightgallery + flickr-justified-gallery (galeria opcional)
- react-icons y motion

## Caracteristicas

- Hero con CTA y lista de beneficios.
- Servicios por categoria: digital locks, traditional locks y automobiles.
- Mapa con poligono de cobertura y tiles adaptados al tema.
- Botones flotantes para llamada y SMS.
- Tema claro/oscuro persistente con Zustand.
- Textos centralizados en i18n para traducciones ES/EN.
- Secciones opcionales listas para activar: emergency, reviews, warranty, gallery, numbers.

## Requisitos

- Node.js 18+ recomendado
- npm

## Instalacion

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` inicia Vite con host
- `npm run build` compila TypeScript y genera `dist`
- `npm run preview` previsualiza `dist`
- `npm run lint` ejecuta ESLint

## Estructura

- `src/App.tsx`: orden de secciones visibles
- `src/components/sections`: secciones principales
- `src/components/gadgets/FloatingButtons.tsx`: CTA flotantes
- `src/utils/services-data-*.tsx`: data de servicios e imagenes
- `src/locales/en/translation.json`: textos en ingles
- `src/locales/es/translation.json`: textos en espanol
- `src/store/ThemeStore.ts`: tema claro/oscuro
- `assets/`: imagenes y logos

## Personalizacion rapida

- Cambiar textos: editar `src/locales/*/translation.json`.
- Cambiar imagenes: reemplazar archivos en `assets/images/...` o actualizar los imports.
- Habilitar secciones opcionales: descomentar en `src/App.tsx`.

## Deploy

- `firebase.json` esta listo para servir `dist` con Firebase Hosting.
