import { externalProps, socialLinks } from "../data/contact";

function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-1 ${className}`}>
      {socialLinks.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            {...externalProps(href)}
            aria-label={label}
            title={label}
            className="grid size-10 place-items-center rounded-full text-lg text-muted transition-colors hover:bg-line/60 hover:text-ink"
          >
            <Icon aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
