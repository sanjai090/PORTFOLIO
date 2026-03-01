import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
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