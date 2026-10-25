import { HiArrowUpRight } from "react-icons/hi2";
import Section from "./section";
import { externalProps, socialLinks } from "../data/contact";

function ContactSection() {
  return (
    <Section id="contact" index="04" title="Contact">
      <p className="max-w-2xl font-display font-semibold text-4xl leading-tight tracking-display sm:text-5xl">
        Un projet, une alternance ou simplement une question ?{" "}
        <span className="text-accent">Écrivez-moi.</span>
      </p>

      <ul className="mt-12 divide-y divide-line border-y border-line">
        {socialLinks.map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              {...externalProps(href)}
              className="group flex items-center justify-between py-5 transition-colors hover:text-accent"
            >
              <span className="flex items-center gap-4 text-lg">
                <Icon className="text-muted transition-colors group-hover:text-accent" aria-hidden="true" />
                {label}
              </span>
              <HiArrowUpRight
                className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                aria-hidden="true"
              />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default ContactSection;
