import SocialLinks from "./socialLinks";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted sm:flex-row">
        <p>© {year} Camille Melkebeek · Fait avec React &amp; Tailwind CSS</p>
        <SocialLinks className="-mr-2" />
      </div>
    </footer>
  );
}

export default Footer;
