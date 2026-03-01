import profile from "../assets/profile.jpeg";
import { useEffect } from "react";
import Typed from "typed.js";

function Home() {

  useEffect(() => {
    const typed = new Typed(".typing-text", {
      strings: ["Full Stack Developer", "React Developer", "Problem Solver"],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      id="home"
      className="vh-100 d-flex align-items-center justify-content-center text-center"
    >
      <div className="container hero-content">

        {/* IMAGE */}
        <img
          src={profile}
          alt="Sanjai"
          className="hero-image mb-4"
        />

        {/* TEXT */}
        <h1 className="display-4 fw-bold hero-title">
          Hi, I'm <span className="text-info">Sanjai</span>
        </h1>

        <h4 className="mt-3 typing-text text-warning"></h4>

        <p className="mt-3">
          Building Modern & Scalable Web Applications
        </p>

      </div>
    </section>
  );
}

export default Home;