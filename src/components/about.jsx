import React from "react";

function About() {
  const qualities = [
    { icon: "bi-lightning-charge-fill", title: "Quick Learner", desc: "Fast adaptation to new technologies and architectures." },
    { icon: "bi-code-slash", title: "Full Stack Focus", desc: "Passionate about building complete, scalable web solutions." },
    { icon: "bi-people-fill", title: "Team Player", desc: "Experienced in collaborative environments and version control." },
    { icon: "bi-award-fill", title: "Continuous Growth", desc: "Always looking to improve and learn from every challenge." }
  ];

  return (
    <section id="about">
      <div className="container" data-aos="fade-up">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">About Me</h2>
          <p className="lead mx-auto" style={{ maxWidth: "800px" }}>
            Hi, I'm Sanjai S, a passionate Computer Science Engineering student with a keen interest in Full Stack Development. 
            I enjoy building data-driven web applications, designing efficient data pipelines, and transforming raw data into 
            meaningful insights. I am dedicated to mastering modern technologies and continuously refining my craft.
          </p>
        </div>

        <div className="row g-4 mt-2">
          {qualities.map((quality, index) => (
            <div key={index} className="col-md-3" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="glass-card quality-card h-100">
                <i className={`bi ${quality.icon} quality-icon`}></i>
                <h4 className="fw-bold">{quality.title}</h4>
                <p className="small text-muted mb-0">{quality.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
