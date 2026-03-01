function Projects() {

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Modern developer portfolio built using React, Bootstrap and animated particle background.",
      live: "#",
      github: "#"
    },
    {
      title: "CGPA CALCULATOR",
      description:
        "A simple CGPA calculator built using React. It allows users to input their grades and credit hours to calculate their CGPA.",
      live: "https://sanjai090.github.io/CGPA/",
      github: "https://github.com/sanjai090/CGPA"
    }
  ];

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">My Projects</h2>

        <div className="row g-4 justify-content-center">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-5">
              <div className="card p-4 text-center h-100">
                <h4 className="mb-3">{project.title}</h4>
                <p>{project.description}</p>

                <div className="mt-3">
                  <a
                    href={project.live}
                    className="btn btn-outline-info me-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    className="btn btn-outline-light"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;