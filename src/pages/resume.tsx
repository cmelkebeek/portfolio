import { useState, useEffect, useRef } from "react";
import pdf from "../assets/CV_MELKEBEEK_Camille_limite.pdf";
import { HiOutlineDownload } from "react-icons/hi";
import { usePageMeta } from "../seo";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  // Version "legacy", cohérente avec l'alias défini dans vite.config.ts
  "pdfjs-dist/legacy/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const MAX_PDF_WIDTH = 860;

const Resume = () => {
  usePageMeta({ title: "CV", path: "/resume" });
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(MAX_PDF_WIDTH);

  useEffect(() => {
    function updateWidth() {
      if (containerRef.current) {
        setWidth(Math.min(containerRef.current.clientWidth, MAX_PDF_WIDTH));
      }
    }

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <section className="container-page py-16 sm:py-24">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="font-mono text-xs text-muted">CV</p>
          <h1 className="mt-2 font-display font-semibold text-5xl tracking-display sm:text-6xl">Mon parcours</h1>
        </div>
        <a
          href={pdf}
          download="CV_Camille_Melkebeek.pdf"
          className="inline-flex items-center gap-2 self-start rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent sm:self-auto"
        >
          <HiOutlineDownload aria-hidden="true" />
          Télécharger le PDF
        </a>
      </div>

      <div ref={containerRef} className="mx-auto mt-12 flex max-w-[860px] justify-center">
        <Document
          file={pdf}
          onLoadError={(error) => console.error("Erreur de chargement du PDF:", error)}
          loading={<p className="py-20 text-muted">Chargement du CV…</p>}
          error={
            <p className="py-20 text-muted">
              Impossible d'afficher le CV, vous pouvez le télécharger avec le bouton ci-dessus.
            </p>
          }
          className="overflow-hidden rounded-lg border border-line shadow-sm"
        >
          <Page pageNumber={1} width={width} />
        </Document>
      </div>
    </section>
  );
};

export default Resume;
