import { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const staticProjects = [
    {
      id: 'academic-analyzer',
      title: 'ACADEMIC ANALYZER',
      description: 'A comprehensive academic dashboard for students and educators to analyze performance metrics.',
      live_url: 'https://svheccgpa.onrender.com/',
      github_url: 'https://github.com/sanjai090/ACADEMIC-DASHBOARD'
    },
    {
      id: 'portfolio',
      title: 'Personal Portfolio',
      description: 'A modern, responsive personal portfolio website built to showcase my skills, projects, and contact information.',
      live_url: 'https://sanjaispf.netlify.app/',
      github_url: 'https://github.com/sanjai090/PORTFOLIO'
    },
    {
      id: 'cgpa-calculator',
      title: 'CGPA Calculator',
      description: 'A web-based tool designed for students to easily calculate and track their Cumulative Grade Point Average (CGPA).',
      live_url: 'https://sanjai090.github.io/CGPA/',
      github_url: 'https://github.com/sanjai090/CGPA'
    }
  ];

  useEffect(() => {
    // Fetch projects from the new Node.js backend
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    fetch("http://localhost:5000/api/projects", { signal: controller.signal })
      .then((res) => {
        clearTimeout(timeoutId);
        if (!res.ok) {
          throw new Error("Failed to fetch projects");
        }
        return res.json();
      })
      .then((data) => {
        // If backend data exists, use it. Otherwise, fallback to static projects
        setProjects(data && data.length > 0 ? data : staticProjects);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setProjects(staticProjects);
        // Silently fail and show static projects instead of showing a red error
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="display-5 fw-bold">My Projects</h2>
          <div className="mx-auto" style={{ width: "60px", height: "4px", background: "var(--primary)" }}></div>
        </div>

        {loading && <p className="text-center">Loading projects...</p>}
        {error && <p className="text-center text-danger">{error}</p>}

        <div className="row g-4 justify-content-center">
          {projects.map((project, index) => (
            <div key={project.id || index} className="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay={index * 100}>
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.02}>
                <div className="glass-card p-5 text-center h-100 d-flex flex-column justify-content-between shadow-lg">
                  <div>
                    <i className="bi bi-folder2-open display-4 text-info mb-3 d-block"></i>
                    <h4 className="fw-bold mb-3">{project.title}</h4>
                    <p className="text-muted">{project.description}</p>
                  </div>

                  <div className="mt-4 pt-3 border-top border-secondary border-opacity-25">
                    <a
                      href={project.live_url}
                      className="btn btn-info px-4 me-2 shadow-sm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>

                    <a
                      href={project.github_url}
                      className="btn btn-outline-light px-4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-github me-2"></i>
                      GitHub
                    </a>
                  </div>
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;