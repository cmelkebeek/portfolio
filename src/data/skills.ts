import type { IconType } from "react-icons";
import { TbBrandCSharp } from "react-icons/tb";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiMsqlServer,
  DiGit,
  DiVisualstudio,
} from "react-icons/di";
import {
  SiDotnet,
  SiBlazor,
  SiPhp,
  SiSymfony,
  SiPostgresql,
  SiPostman,
  SiMacos,
  SiTypescript,
  SiMariadb,
  SiKubernetes,
  SiGithubactions,
  SiProxmox,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaGitlab, FaGithub, FaHtml5, FaDocker } from "react-icons/fa";

export type Skill = {
  name: string;
  Icon: IconType;
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Langages & frameworks",
    skills: [
      { name: "C#", Icon: TbBrandCSharp },
      { name: ".NET", Icon: SiDotnet },
      { name: "Blazor", Icon: SiBlazor },
      { name: "Entity Framework", Icon: SiDotnet },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "JavaScript", Icon: DiJavascript1 },
      { name: "React", Icon: DiReact },
      { name: "Node.js", Icon: DiNodejs },
      { name: "PHP", Icon: SiPhp },
      { name: "Symfony", Icon: SiSymfony },
      { name: "HTML / CSS", Icon: FaHtml5 },
    ],
  },
  {
    title: "Bases de données",
    skills: [
      { name: "SQL Server", Icon: DiMsqlServer },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "MongoDB", Icon: DiMongodb },
      { name: "MariaDB", Icon: SiMariadb },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Docker", Icon: FaDocker },
      { name: "GitHub Actions", Icon: SiGithubactions },
      { name: "Kubernetes (notions)", Icon: SiKubernetes },
      { name: "Proxmox", Icon: SiProxmox },
    ],
  },
  {
    title: "Outils",
    skills: [
      { name: "Git", Icon: DiGit },
      { name: "GitHub", Icon: FaGithub },
      { name: "GitLab", Icon: FaGitlab },
      { name: "Visual Studio", Icon: DiVisualstudio },
      { name: "VS Code", Icon: VscVscode },
      { name: "Postman", Icon: SiPostman },
      { name: "macOS", Icon: SiMacos },
    ],
  },
];
