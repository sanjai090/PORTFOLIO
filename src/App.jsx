import Navbar from "./components/navbar";
import Home from "./components/home";
import Analytics from "./components/analytics";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Certificates from "./components/Certificates";
import Contact from "./components/contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Analytics />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

export default App;