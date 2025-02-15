import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/projectCard";
import avatar from "../assets/logo.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Mes projets
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets que j'ai réalisés ou sur lesquels j'ai travaillé.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={avatar}
              isBlog={false}
              title="MovieManager"
              description="Site web de gestions de films, possibilité de rechercher un film, 
              voir le détail du film, de l'ajouter dans sa wishlist, possibilité de supprimer un film de sa wishlist.
              Utilisation de l'API de The Movie Database pour récupérer les informations des films.
              Le site à été réalisé en React.js"
              ghLink="https://github.com/cmelkebeek/MovieManager"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={avatar}
              isBlog={false}
              title="EatAdvisor"
              description="Application mobile de gestion de repas, 
              possibilité d'ajouter un aliment a son repas via barre de recherche ou scan de code barre, 
              possibilité d'enregistrer son repas et de voir la liste des repas enregistrer, 
              on peut aussi voir le détails du repas avec le total des kcal, lipides, glucides et protéines.
              L'application à été réalisé en React Native."
              ghLink="https://github.com/cmelkebeek/EatAdvisor"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={avatar}
              isBlog={false}
              title="My Portfolio"
              description="Site web de présentation de mes compétences, mes projets et mes informations de contact.
              Le site à été réalisé en React.js et TypeScript."
              ghLink="https://github.com/cmelkebeek/portfolio"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={avatar}
              isBlog={false}
              title="Site web de vente de vin"
              description="Site web de vente de vin, possibilité de rechercher un vin, voir le détail du vin, de l'ajouter dans son panier, possibilité de supprimer un vin de son panier.
              Possibilité de passer commande et de voir les commandes passées.
              Système de connexion, d'inscription et gestion de compte utilisateur.
              Le site à été réalisé en ASP.NET."
              ghLink="https://github.com/Les-vignes-nobles/Vignoble-WEB"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
