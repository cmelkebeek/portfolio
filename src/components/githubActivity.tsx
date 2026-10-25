import { GitHubCalendar } from "react-github-calendar";
import { GITHUB_URL } from "../data/contact";
import { useTheme } from "../theme";

function GithubActivity() {
  const theme = useTheme();

  return (
    <div className="mt-16">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-xs font-medium uppercase tracking-widest text-muted">Activité GitHub</h3>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted underline decoration-line underline-offset-4 hover:text-ink"
        >
          @cmelkebeek
        </a>
      </div>
      <div className="mt-4 overflow-x-auto rounded-lg border border-line bg-surface p-5 text-sm text-muted">
        <GitHubCalendar
          username="cmelkebeek"
          colorScheme={theme}
          blockSize={11}
          blockMargin={3}
          fontSize={12}
          theme={{
            light: ["#f0efee", "#c9cbf3", "#9ea2e8", "#6f75d9", "#4f55c9"],
            dark: ["#24242b", "#33356b", "#4b4fa3", "#6a6fd6", "#8b90f5"],
          }}
          labels={{
            months: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
            weekdays: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
            totalCount: "{{count}} contributions sur l'année écoulée",
            legend: { less: "Moins", more: "Plus" },
          }}
        />
      </div>
    </div>
  );
}

export default GithubActivity;
