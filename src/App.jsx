import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Education from "./components/education";
import Projects from "./components/projects";
import Certificates from "./components/Certificates";
import Contact from "./components/contact";
import Footer from "./components/Footer";


function App() {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <>

      <Navbar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

export default App;