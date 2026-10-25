import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const GITHUB_URL = "https://github.com/cmelkebeek";
export const LINKEDIN_URL = "https://www.linkedin.com/in/camille-melkebeek-69b4491a6/";

export const CONTACT_EMAIL = "camille.mbk@outlook.com";

export const socialLinks = [
  { label: "GitHub", href: GITHUB_URL, Icon: AiFillGithub },
  { label: "LinkedIn", href: LINKEDIN_URL, Icon: FaLinkedinIn },
  ...(CONTACT_EMAIL
    ? [{ label: "E-mail", href: `mailto:${CONTACT_EMAIL}`, Icon: MdEmail }]
    : []),
];

// Les liens externes s'ouvrent dans un nouvel onglet, pas les mailto:
export const externalProps = (href: string) =>
  href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" };
