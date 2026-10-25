import { Link } from "react-router";
import { usePageMeta } from "../seo";

const NotFound = () => {
  usePageMeta({ title: "Page introuvable", path: "/", noindex: true });

  return (
    <section className="container-page flex min-h-[60svh] flex-col items-start justify-center py-24">
      <p className="font-mono text-xs text-muted">Erreur 404</p>
      <h1 className="mt-2 font-display font-semibold text-5xl tracking-display sm:text-7xl">
        Page <span className="text-accent">introuvable.</span>
      </h1>
      <p className="mt-6 max-w-md text-lg text-muted">
        La page que vous cherchez n'existe pas ou a été déplacée.
      </p>
      <Link
        to="/"
        className="mt-10 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
      >
        Retour à l'accueil
      </Link>
    </section>
  );
};

export default NotFound;
