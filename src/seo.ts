import { useEffect } from "react";

export const SITE_URL = "https://portfolio.c-mbk.fr";
const DEFAULT_TITLE = "Camille Melkebeek – Développeur full stack";

type PageMeta = {
  title?: string;
  path: string;
  noindex?: boolean;
};

// Met à jour le titre, l'URL canonique et l'indexation de la page courante.
// index.html contient déjà les valeurs de l'accueil pour les robots qui n'exécutent pas le JavaScript.
export function usePageMeta({ title, path, noindex = false }: PageMeta) {
  useEffect(() => {
    document.title = title ? `${title} – Camille Melkebeek` : DEFAULT_TITLE;
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", SITE_URL + path);

    if (!noindex) return;
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex";
    document.head.appendChild(robots);
    return () => robots.remove();
  }, [title, path, noindex]);
}
