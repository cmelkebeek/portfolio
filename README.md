# Portfolio – Camille Melkebeek

Mon portfolio personnel : présentation, compétences, projets et CV.

🌐 **En ligne :** [portfolio.c-mbk.fr](https://portfolio.c-mbk.fr)

## Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/), avec [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/) pour le style, polices Inter et Space Grotesk (auto-hébergées via Fontsource)
- [React Router](https://reactrouter.com/) pour la navigation
- [react-pdf](https://github.com/wojtekmaj/react-pdf) pour l'affichage du CV
- Docker + nginx pour le déploiement, derrière Traefik

## Lancer le projet en local

Prérequis : Node.js 22.22+ (24 recommandé)

```bash
npm install
npm run dev       # serveur de développement sur http://localhost:5173
npm run lint      # vérification ESLint
npm run build     # build de production dans dist/
```

Avec Docker :

```bash
docker build -t portfolio .
docker run -p 8080:80 portfolio   # http://localhost:8080
```

## Structure

```
src/
├── assets/       # images et CV (PDF)
├── components/   # composants réutilisables (navbar, cartes, liens sociaux…)
├── data/         # contenu du site : projets, compétences, liens de contact
├── pages/        # une page par route (accueil, à propos, projets, CV, 404)
└── style.css
```

Pour ajouter un projet ou une compétence, il suffit de modifier les fichiers de `src/data/`.

## Déploiement

À chaque push sur `main`, la GitHub Action [`docker-build.yml`](.github/workflows/docker-build.yml) :

1. vérifie le lint et le build ;
2. construit l'image Docker et la publie sur mon registre privé (`registry.c-mbk.fr/portfolio`), avec le tag `latest` et le SHA du commit.

Sur les pull requests, seule l'étape de vérification est exécutée.
