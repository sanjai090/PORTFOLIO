import profile from "../assets/profile.jpeg";
import { useEffect } from "react";
import Typed from "typed.js";

function Home() {
  useEffect(() => {
    const typed = new Typed(".typing-text", {
      strings: ["Full Stack Developer", "Problem Solver", "Tech Enthusiast"],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center text-lg-start" data-aos="fade-right">
            <h5 className="text-primary fw-bold mb-3">WELCOME TO MY PORTFOLIO</h5>
            <h1 className="display-3 fw-bold hero-title mb-3">
              I'm <span className="text-info">Sanjai S</span>
            </h1>
            <h2 className="h3 mb-4">
              A Passionate <span className="typing-text text-warning"></span>
            </h2>
            <p className="lead text-muted mb-5">
              Crafting high-performance web applications and 
              innovative digital solutions with a focus on 
              scalability and user experience.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
              <a href="#projects" className="btn btn-info btn-lg px-4 shadow-sm">View Projects</a>
              <a href="#contact" className="btn btn-outline-light btn-lg px-4">Contact Me</a>
            </div>
          </div>
          <div className="col-lg-6 text-center mt-5 mt-lg-0" data-aos="fade-left">
            <div className="position-relative d-inline-block">
              <img
                src={profile}
                alt="Sanjai"
                className="hero-image"
              />
              <div className="position-absolute top-50 start-50 translate-middle w-100 h-100 border border-info rounded-circle opacity-25 animate-ping" style={{ zIndex: -1, animation: 'pulse 3s infinite' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;