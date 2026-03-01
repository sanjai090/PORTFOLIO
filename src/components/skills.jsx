function Skills() {

  const skills = [
    { name: "HTML", icon: "devicon-html5-plain colored" },
    { name: "CSS", icon: "devicon-css3-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "React", icon: "devicon-react-original colored" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
    { name: "MySQL", icon: "devicon-mysql-plain colored" },
    { name: "python", icon: "devicon-python-plain colored" },
    { name: "Github", icon: "devicon-github-original colored" }
  ];

  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">My Skills</h2>

        <div className="row g-4 justify-content-center text-center">
          {skills.map((skill, index) => (
            <div key={index} className="col-4 col-md-3 col-lg-2">
              <div className="skill-card p-3">
                <i className={`${skill.icon} skill-icon`}></i>
                <p className="mt-2">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;