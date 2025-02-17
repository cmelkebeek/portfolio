import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../assets/logo.png";
import Type from "./type";

function HomeTop() {
    return (
        <section>
        <Container fluid id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Bonjour !{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>
  
                <h1 className="heading-name">
                  Je me prénomme
                  <strong className="purple"> Camille Melkebeek</strong>
                </h1>
  
                <div style={{ padding: 50, textAlign: "left" }}>
                    <Type />
                </div>
              </Col>
  
              <Col md={5} style={{ paddingBottom: 20 }}>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    );
}

export default HomeTop;