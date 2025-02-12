import { Col, Row } from "react-bootstrap";
import { SiPostman, SiMacos } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { FaGitlab, FaGithub } from "react-icons/fa";


function DevTools() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscVscode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGitlab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
      </Col>
    </Row>
  );
}

export default DevTools;
