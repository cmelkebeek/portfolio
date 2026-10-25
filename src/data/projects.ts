import meteoapp from "../assets/meteoapp.jpg";
import moviemanager from "../assets/moviemanager.jpg";
import eatadvisor from "../assets/EatAdvisor.jpeg";
import goodfood from "../assets/goodfood.jpg";

export type Project = {
  title: string;
  description: string;
  imgPath?: string;
  techs: string[];
  ghLink?: string;
  demoLink?: string;
};

// TODO : ajouter une capture d'écran pour "Site web de vente de vin", "Pipeline CI/CD d'une application Next.js" et "Mon portfolio" (une vignette neutre s'affiche en attendant)
export const projects: Project[] = [
  {
    title: "Good Food – architecture microservices",
    imgPath: goodfood,
    description:
      "Plateforme de restauration en équipe (commande, réservation, livraison, stocks, portail franchisé) découpée en " +
      "une douzaine de microservices Go, C#, TypeScript et Python, qui communiquent en HTTP et via RabbitMQ, avec un front React et une appli mobile. " +
      "J'ai conçu l'architecture et la pipeline CI/CD GitOps (chaque push construit et versionne l'image Docker, " +
      "puis redéploie le service sur un cluster Kubernetes k3s), développé l'application mobile " +
      "et les microservices de stock (C#) et de paiement (Go, Stripe).",
    techs: ["Microservices", "Kubernetes (k3s)", "GitOps", "C#", "Go", "React Native"],
    ghLink: "https://github.com/GoodFoodCorp",
    demoLink: "https://app.c-mbk.fr",
  },
  {
    title: "Homelab",
    description:
      "Serveur personnel sous Proxmox qui fait tourner plusieurs VM et conteneurs Docker administrés avec Portainer : " +
      "le registre Docker privé utilisé par le cluster k3s de Good Food, un NAS TrueNAS, Immich pour les photos, " +
      "Home Assistant, un serveur multimédia DLNA et un serveur d'impression CUPS qui met une ancienne imprimante en réseau. " +
      "Certains services sont exposés à l'extérieur sans ouvrir de port grâce à Pangolin : un tunnel Newt les relie à un VPS.",
    techs: ["Proxmox", "Docker", "Portainer", "TrueNAS", "Pangolin", "Home Assistant"],
  },
  {
    title: "MovieManager",
    imgPath: moviemanager,
    description:
      "Site web de gestion de films : recherche d'un film, consultation de sa fiche détaillée, " +
      "ajout et suppression dans sa wishlist. Les informations sont récupérées via l'API de The Movie Database.",
    techs: ["React", "JavaScript", "API TMDB"],
    ghLink: "https://github.com/cmelkebeek/MovieManager",
  },
  {
    title: "EatAdvisor",
    imgPath: eatadvisor,
    description:
      "Application mobile de suivi des repas : ajout d'aliments via une barre de recherche ou le scan d'un code-barres, " +
      "enregistrement des repas et consultation de l'historique, avec le détail des kcal, lipides, glucides et protéines.",
    techs: ["React Native", "TypeScript"],
    ghLink: "https://github.com/cmelkebeek/EatAdvisor",
  },
  {
    title: "Application de suivi de température",
    imgPath: meteoapp,
    description:
      "Application web de suivi de la température de son logement, pièce par pièce, " +
      "avec une alerte lorsque la température est trop basse ou trop élevée. Composée d'une application et d'une API.",
    techs: ["C#", ".NET", "API REST"],
    ghLink: "https://github.com/MeteoApp/AppMeteo",
  },
  {
    title: "Site web de vente de vin",
    description:
      "Site e-commerce de vente de vin : recherche et fiche détaillée des vins, gestion du panier, " +
      "passage de commande et historique des commandes. Inscription, connexion et gestion du compte utilisateur.",
    techs: ["ASP.NET", "C#"],
    ghLink: "https://github.com/Les-vignes-nobles/Vignoble-WEB",
  },
  {
    title: "Pipeline CI/CD d'une application Next.js",
    description:
      "Chaîne d'intégration et de déploiement continus : à chaque push, GitHub Actions construit l'image Docker " +
      "et la publie sur GitHub Container Registry, puis la déploie par SSH sur un serveur AWS EC2 (production depuis main, " +
      "test depuis develop). Tests end-to-end et de composants avec Cypress, préparation du serveur avec Ansible.",
    techs: ["GitHub Actions", "Docker", "Ansible", "Cypress", "AWS EC2"],
    ghLink: "https://github.com/cmelkebeek/next-cda241",
  },
  {
    title: "Mon portfolio",
    description:
      "Le site sur lequel vous êtes : présentation de mes compétences, de mes projets et de mes informations de contact. " +
      "Déployé automatiquement avec Docker et GitHub Actions.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Docker"],
    ghLink: "https://github.com/cmelkebeek/portfolio",
    demoLink: "https://portfolio.c-mbk.fr",
  },
];
