import { Link } from "react-router";
import { HiArrowDown, HiArrowRight } from "react-icons/hi";
import SocialLinks from "./socialLinks";

function Hero() {
  return (
    // Remonte sous l'en-tête (transparent en haut de page) pour que le décor ne soit pas coupé net
    <div className="relative isolate -mt-16 overflow-hidden">
      {/* Décor : trame de points + halo cyan → violet */}
      <div className="bg-dots absolute inset-0 -z-10" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -top-32 right-[-10%] size-[34rem] rounded-full bg-accent/25 blur-[120px] dark:bg-accent/30" />
        <div className="absolute top-40 right-[20%] size-[22rem] rounded-full bg-cyan-300/30 blur-[110px] dark:bg-cyan-400/15" />
      </div>

      <section className="container-page flex min-h-svh flex-col justify-center pt-36 pb-20">
        <p className="animate-rise flex items-center gap-2 text-sm text-muted">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          Développeur en alternance chez Blue Soft
        </p>

        <h1 className="animate-rise mt-6 max-w-4xl font-display font-semibold text-5xl leading-[1.02] tracking-display [animation-delay:80ms] sm:text-7xl md:text-8xl">
          Développeur full stack, <span className="text-accent">basé en Normandie.</span>
        </h1>

        <p className="animate-rise mt-8 max-w-xl text-lg leading-relaxed text-muted [animation-delay:160ms]">
          Je m'appelle Camille Melkebeek. Je conçois des applications web de bout en bout avec{" "}
          <span className="text-ink">.NET</span> (ASP.NET, Blazor), du serveur à l'interface, et je travaille aussi avec{" "}
          <span className="text-ink">React et TypeScript</span>.
        </p>

        <div className="animate-rise mt-10 flex flex-wrap items-center gap-3 [animation-delay:240ms]">
          <Link
            to={{ pathname: "/", hash: "#projects" }}
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
          >
            Voir mes projets
            <HiArrowRight className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
          <Link
            to="/resume"
            className="inline-flex items-center rounded-full border border-line bg-paper/60 px-6 py-3 text-sm font-medium backdrop-blur transition-colors hover:border-ink"
          >
            Mon CV
          </Link>
          <SocialLinks className="ml-1" />
        </div>

        <Link
          to={{ pathname: "/", hash: "#about" }}
          className="mt-20 hidden items-center gap-2 self-start text-sm text-muted transition-colors hover:text-ink sm:inline-flex"
        >
          <HiArrowDown className="animate-bounce" aria-hidden="true" />
          Défiler
        </Link>
      </section>
    </div>
  );
}

export default Hero;
