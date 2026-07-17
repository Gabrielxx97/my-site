# Portfólio Front-end

Site pessoal em React + Vite + Tailwind CSS, com animações Framer Motion e efeitos adaptados do [React Bits](https://reactbits.dev/).

## Stack

- React (JSX)
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React
- React Router
- ESLint

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Personalização

Edite `src/data/content.js` para atualizar nome, textos (PT/EN), projetos, experiência e links.

- `SITE.githubUsername` — usuário da API do GitHub
- `SITE.cvUrl` — caminho do CV (`public/cv.pdf`)
- `SITE.socials` — redes sociais

## Estrutura

```
src/
  components/   # UI, layout, seções e efeitos
  contexts/     # tema e idioma
  data/         # conteúdo do site
  hooks/        # scroll spy, GitHub, media query
  pages/        # Home e 404
```
