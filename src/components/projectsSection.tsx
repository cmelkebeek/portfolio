import { BsGithub } from "react-icons/bs";
import { HiArrowUpRight } from "react-icons/hi2";
import Section from "./section";
import GithubActivity from "./githubActivity";
import { projects, type Project } from "../data/projects";

function ProjectThumbnail({ title, imgPath }: Pick<Project, "title" | "imgPath">) {
  return (
    <div className="aspect-[3/2] overflow-hidden rounded-lg border border-line bg-surface">
      {imgPath ? (
        <img
          src={imgPath}
          alt={`Aperçu du projet ${title}`}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="grid size-full place-items-center bg-accent-soft font-display font-semibold text-5xl text-accent" aria-hidden="true">
          {title.charAt(0)}
        </div>
      )}
    </div>
  );
}

const linkClass =
  "inline-flex items-center gap-1.5 text-sm font-medium underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent";

function ProjectsSection() {
  return (
    <Section id="projects" index="03" title="Projets" tinted>
      <ul className="divide-y divide-line border-y border-line">
        {projects.map((project, i) => (
          <li key={project.title} className="group grid gap-6 py-8 sm:grid-cols-[1fr_12rem] sm:gap-8">
            <div className="flex flex-col">
              <p className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-1 font-display font-semibold text-3xl tracking-display">{project.title}</h3>
              <p className="mt-1 text-sm text-accent">{project.techs.join(" · ")}</p>
              <p className="mt-4 leading-relaxed text-muted">{project.description}</p>
              {(project.ghLink || project.demoLink) && (
                <div className="mt-5 flex gap-5">
                  {project.ghLink && (
                    <a href={project.ghLink} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      <BsGithub aria-hidden="true" /> Code source
                    </a>
                  )}
                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      Voir le site <HiArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                </div>
              )}
            </div>
            <div className="order-first sm:order-none">
              <ProjectThumbnail title={project.title} imgPath={project.imgPath} />
            </div>
          </li>
        ))}
      </ul>
      <GithubActivity />
    </Section>
  );
}

export default ProjectsSection;
