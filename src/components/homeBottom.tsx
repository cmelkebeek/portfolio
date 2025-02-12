import { Container, Row, Col } from "react-bootstrap";
import myImg from "../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function HomeBottom() {
    return (
        <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                PETITE INTRODUCTION 
              </h1>
              <p className="home-about-body">
                J'ai découvert le développement lorsque j'étais en fin collège et j'en suis tombé amoureux. 
                <br />
                <br />Je développe souvent en 
                <i>
                  <b className="purple"> C#, Javascript et TypeScript. </b>
                </i>
                <br />
                <br />
                Mes centres d'intérêt sont principalement
                <i>
                  <b className="purple"> l'informatique </b> ainsi 
                  que le sport, plus particulièrement{" "}
                  <b className="purple">
                  le Wakeboard.
                  </b>
                </i>
                <br />
                <br />
                J'essaie d'apprendre de nouvelles choses chaque jour et de m'améliorer en tant que développeur.
                Actuellement, j'approfondis mes connaissances en <b className="purple">React et Node.js.</b>
                
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Vous pouvez me trouver sûr</h1>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/soumyajit4419"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/soumyajit4419/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
              <p>
                N'hésitez pas à me <span className="purple">contacter </span>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    )
}   

export default HomeBottom