import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous, je m'appelle  <span className="purple">Camille Melkebeek </span>
            et je viens de <span className="purple"> Néville, en Normandie.</span>
            <br />
            Je travaille actuellement comme <span className="purple">analyste développeur </span> chez <span className="purple">Alphatex</span>.
            <br />
            J'ai obtenu un <span className="purple">BTS Systèmes Numériques option Informatique et Réseaux</span> au lycée Jules Vernes à Mondeville 
            ainsi qu'un diplôme de <span className="purple">développeur informatique</span> au CESI de Rouen.
            <br />
            Actuellement, je suis une formation de <span className="purple">concepteur développeur d'application</span> au CESI de Rouen.
            <br />
            J'aimerais par la suite continuer mon cursus en alternance pour obtenir un <span className="purple">mastère
            manager en architecture et applications logicielles des systèmes d'information (SI)</span>. 
            <br />
            <br />
            En dehors du développement, j'aime aussi :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Le wakeboard
            </li>
            <li className="about-activity">
              <ImPointRight /> La moto
            </li>
            <li className="about-activity">
              <ImPointRight /> La pêche
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
