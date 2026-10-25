import Section from "./section";
import { education, experience, interests, type TimelineEntry } from "../data/profile";

function Timeline({ title, entries }: { title: string; entries: TimelineEntry[] }) {
  return (
    <div>
      <h3 className="text-xs font-medium uppercase tracking-widest text-muted">{title}</h3>
      <ul className="mt-4 divide-y divide-line border-y border-line">
        {entries.map((entry) => (
          <li key={entry.title} className="grid gap-1 py-4 sm:grid-cols-[1fr_auto] sm:gap-6">
            <div>
              <p className="font-medium">{entry.title}</p>
              <p className="text-sm text-muted">{entry.place}</p>
            </div>
            <p className="flex items-center gap-3 text-sm tabular-nums text-muted sm:justify-end">
              {entry.period}
              {entry.current && (
                <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">
                  En cours
                </span>
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AboutSection() {
  return (
    <Section id="about" index="01" title="À propos" tinted>
      <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
        <p>
          J'ai découvert le développement à la fin du collège, et c'est devenu une passion. J'habite{" "}
          <span className="text-ink">près de Rouen</span>, et je suis aujourd'hui{" "}
          <span className="text-ink">développeur en alternance chez Blue Soft</span>, après trois ans
          d'alternance comme analyste développeur chez Alphatex.
        </p>
        <p>
          Je développe principalement en <span className="text-ink">C#</span>, et je travaille aussi avec{" "}
          <span className="text-ink">JavaScript et TypeScript</span>. En ce moment, j'approfondis{" "}
          <span className="text-ink">React et Node.js</span>.
        </p>
        <p>
          Je suis actuellement en{" "}
          <span className="text-ink">mastère Manager en architecture et applications logicielles des SI</span>{" "}
          au CESI de Rouen. Attiré par l'architecture logicielle et les pratiques DevOps (conteneurisation,
          intégration et déploiement continus), je souhaite évoluer vers un rôle d'architecte.
        </p>
      </div>

      <div className="mt-14 grid gap-12">
        <Timeline title="Expérience" entries={experience} />
        <Timeline title="Formation" entries={education} />
      </div>

      <p className="mt-12 text-muted">
        En dehors du code :{" "}
        {interests.map((interest, i) => (
          <span key={interest}>
            {i > 0 && <span className="mx-2 text-line">/</span>}
            <span className="font-display text-lg font-medium text-ink">{interest}</span>
          </span>
        ))}
      </p>
    </Section>
  );
}

export default AboutSection;
