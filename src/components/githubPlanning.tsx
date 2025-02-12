import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function GithubPlanning() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Mon planning GitHub
      </h1>
      <GitHubCalendar
        username="cmelkebeek"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        colorScheme={"light"}
      />
    </Row>
  );
}

export default GithubPlanning;
