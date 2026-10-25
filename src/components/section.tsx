import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  // Fond légèrement teinté, pour alterner avec les sections voisines
  tinted?: boolean;
  children: ReactNode;
};

// Section de la page d'accueil : numéro + titre éditorial à gauche, contenu à droite sur grand écran
function Section({ id, index, title, tinted = false, children }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-16 border-t border-line py-20 sm:py-28 ${tinted ? "bg-band" : ""}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="container-page grid gap-10 md:grid-cols-[12rem_1fr] md:gap-16">
        <div className="md:sticky md:top-24 md:self-start">
          <p className="font-mono text-xs text-muted">{index}</p>
          <h2 id={`${id}-title`} className="mt-2 font-display font-semibold text-4xl tracking-display">
            {title}
          </h2>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}

export default Section;
