import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { HiOutlineMenuAlt4, HiOutlineMoon, HiOutlineSun, HiOutlineX } from "react-icons/hi";
import { setTheme, useTheme } from "../theme";

function ThemeToggle() {
  const theme = useTheme();
  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={next === "dark" ? "Passer en thème sombre" : "Passer en thème clair"}
      title={next === "dark" ? "Thème sombre" : "Thème clair"}
      className="grid size-9 place-items-center rounded-full text-lg text-muted transition-colors hover:bg-line/60 hover:text-ink"
    >
      {theme === "dark" ? <HiOutlineSun aria-hidden="true" /> : <HiOutlineMoon aria-hidden="true" />}
    </button>
  );
}

const sections = [
  { label: "À propos", hash: "#about" },
  { label: "Compétences", hash: "#skills" },
  { label: "Projets", hash: "#projects" },
  { label: "Contact", hash: "#contact" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname, key } = useLocation();
  const [lastKey, setLastKey] = useState(key);

  // Referme le menu mobile à chaque navigation (ajustement pendant le rendu plutôt qu'un effet)
  if (key !== lastKey) {
    setLastKey(key);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = "text-muted transition-colors hover:text-ink";
  const mobileLinkClass = "block border-b border-line py-3 font-display font-semibold text-2xl";

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled || open ? "border-line bg-paper/85 backdrop-blur" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Navigation principale">
        <Link to="/" className="font-display font-semibold text-2xl leading-none tracking-display">
          Camille Melkebeek
        </Link>

        <ul className="hidden items-center gap-8 text-sm md:flex">
          {sections.map(({ label, hash }) => (
            <li key={hash}>
              <Link to={{ pathname: "/", hash }} className={linkClass}>
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/resume"
              className={`rounded-full border px-4 py-1.5 transition-colors ${
                pathname === "/resume"
                  ? "border-ink bg-ink text-paper"
                  : "border-line bg-paper/60 hover:border-ink"
              }`}
            >
              CV
            </Link>
          </li>
          <li className="-ml-4">
            <ThemeToggle />
          </li>
        </ul>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="-mr-2 p-2 text-2xl"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <HiOutlineX /> : <HiOutlineMenuAlt4 />}
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-menu" className="container-page flex flex-col pb-4 md:hidden">
          {sections.map(({ label, hash }) => (
            <li key={hash}>
              <Link to={{ pathname: "/", hash }} className={mobileLinkClass}>
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/resume" className={mobileLinkClass}>
              CV
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;
