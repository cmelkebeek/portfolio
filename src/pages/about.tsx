import { Container, Row, Col } from "react-bootstrap";
import DevTechs from "../components/devTechs";
import Aboutcard from "../components/aboutCard";
import laptopImg from "../assets/logo.png";
import DevTools from "../components/devTools";

const About = () => {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Qui <strong className="purple">je </strong> suis ?
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Mes compétences :
        </h1>

        <DevTechs />

        <h1 className="project-heading">
          <strong className="purple">Les outils que j'utilises couramment </strong>
        </h1>
        
        <DevTools />
      </Container>
    </Container>
  );
}

export default About;
