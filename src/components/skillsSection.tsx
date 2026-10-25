import Section from "./section";
import { skillGroups } from "../data/skills";

function SkillsSection() {
  return (
    <Section id="skills" index="02" title="Compétences">
      <div className="grid gap-12">
        {skillGroups.map(({ title, skills }) => (
          <div key={title}>
            <h3 className="text-xs font-medium uppercase tracking-widest text-muted">{title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {skills.map(({ name, Icon }) => (
                <li
                  key={name}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm transition-colors hover:border-ink"
                >
                  <Icon className="text-base text-muted" aria-hidden="true" />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default SkillsSection;
