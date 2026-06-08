import Tilt from "react-parallax-tilt";

const projectList = [
  {
    id: 'academic-analyzer',
    title: 'ACADEMIC ANALYZER',
    description: 'A comprehensive academic dashboard for students and educators to analyze performance metrics, grades, and academic trends.',
    live_url: 'https://svheccgpa.onrender.com/',
    github_url: 'https://github.com/sanjai090/ACADEMIC-DASHBOARD'
  },
  {
    id: 'portfolio',
    title: 'PORTFOLIO WEBSITE',
    description: 'A modern, responsive personal portfolio built with React and Vite, featuring animated sections, certificate gallery, and contact form.',
    live_url: 'https://sanjaispf.netlify.app/',
    github_url: 'https://github.com/sanjai090/PORTFOLIO'
  }
];

function Projects() {
  const projects = projectList;

  return (
    <section id="projects">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="display-5 fw-bold">My Projects</h2>
          <div className="mx-auto" style={{ width: "60px", height: "4px", background: "var(--primary)" }}></div>
        </div>

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