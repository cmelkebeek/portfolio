import NavBar from './components/navbar'
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router';
import Home from './pages/home';
import About from './pages/about';
import Resume from './pages/resume';
import Projects from './pages/projects';
import Footer from './components/footer';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
