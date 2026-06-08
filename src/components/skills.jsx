import Tilt from "react-parallax-tilt";

function Skills() {
  const skillCategories = [
    {
      title: "Web Development",
      skills: [
        { name: "HTML5", icon: "devicon-html5-plain colored" },
        { name: "CSS3", icon: "devicon-css3-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "React", icon: "devicon-react-original colored" },
        { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" }
      ]
    },
    {
      title: "Backend & Programming",
      skills: [
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" }
      ]
    },
    {
      title: "Tools & Workflow",
      skills: [
        { name: "GitHub", icon: "devicon-github-original colored" },
        { name: "Netlify", icon: "devicon-netlify-plain colored" },
        { name: "Firebase", icon: "devicon-firebase-plain colored" },
        { name: "Render", icon: "devicon-render-plain colored" },
        { name: "Railway", icon: "devicon-railway-original colored" }
      ]
    }
  ];

  return (
    <section id="skills">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="display-5 fw-bold">My Skills</h2>
          <div className="mx-auto" style={{ width: "60px", height: "4px", background: "var(--primary)" }}></div>
        </div>

        <div className="row g-4">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="col-lg-4" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="glass-card p-4 h-100">
                <h4 className="fw-bold mb-4 text-primary text-center border-bottom border-secondary border-opacity-25 pb-3">
                  {category.title}
                </h4>
                <div className="row g-3 justify-content-center text-center">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="col-4">
                      <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} perspective={800} scale={1.1}>
                        <div className="skill-box p-2">
                          <i className={`${skill.icon} display-6 mb-2 d-block`}></i>
                          <p className="small fw-bold mb-0 text-truncate">{skill.name}</p>
                        </div>
                      </Tilt>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;