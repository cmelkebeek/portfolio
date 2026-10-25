import "./style.css";
import { lazy, Suspense, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import NotFound from "./pages/notFound";

// Chargée à la demande : react-pdf est lourd et inutile sur la page d'accueil
const Resume = lazy(() => import("./pages/resume"));

// Gère le défilement : vers la section ciblée par l'ancre, sinon en haut de page
function useScrollOnNavigate() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
}

function App() {
  useScrollOnNavigate();

  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/resume"
            element={
              <Suspense fallback={<p className="container-page py-24 text-muted">Chargement…</p>}>
                <Resume />
              </Suspense>
            }
          />
          {/* Anciennes pages, conservées pour ne pas casser les liens existants */}
          <Route path="/about" element={<Navigate to={{ pathname: "/", hash: "#about" }} replace />} />
          <Route path="/project" element={<Navigate to={{ pathname: "/", hash: "#projects" }} replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
