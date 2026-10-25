import Hero from "../components/hero";
import AboutSection from "../components/aboutSection";
import SkillsSection from "../components/skillsSection";
import ProjectsSection from "../components/projectsSection";
import ContactSection from "../components/contactSection";
import { usePageMeta } from "../seo";

const Home = () => {
  usePageMeta({ path: "/" });

  return (
    <>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default Home;
