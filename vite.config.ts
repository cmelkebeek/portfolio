import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      // Version "legacy" de pdf.js : le CV s'affiche aussi sur les navigateurs qui ne sont pas à jour.
      // react-pdf reste en v10 : la v11 (pdf.js 6) ne fonctionne plus sur Safari 26.0, même en legacy
      { find: /^pdfjs-dist$/, replacement: 'pdfjs-dist/legacy/build/pdf.mjs' },
      { find: /^pdfjs-dist\/web\/pdf_viewer\.mjs$/, replacement: 'pdfjs-dist/legacy/web/pdf_viewer.mjs' },
    ],
  },
  build: {
    // Le seul gros fichier est la page CV (react-pdf), chargée à la demande : l'avertissement n'est pas pertinent
    chunkSizeWarningLimit: 700,
  },
})
