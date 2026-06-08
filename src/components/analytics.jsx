import React from "react";

function Analytics() {
  const stats = [
    { label: "Projects Completed", value: "2+", icon: "bi-rocket-takeoff-fill" },
    { label: "Certificates Earned", value: "12+", icon: "bi-patch-check-fill" },
    { label: "Learning Journey", value: "1+ Year", icon: "bi-hourglass-split" },
    { label: "Academic CGPA", value: "9.30", icon: "bi-mortarboard-fill" }
  ];

  return (
    <section id="analytics" className="pb-0" style={{ marginTop: "-50px" }}>
      <div className="container" data-aos="fade-up">
        <div className="row g-4 justify-content-center">
          {stats.map((stat, index) => (
            <div key={index} className="col-6 col-md-3" data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="glass-card p-4 text-center border-0 shadow-lg h-100">
                <i className={`bi ${stat.icon} fs-1 text-info mb-3 d-block`} style={{ filter: "drop-shadow(0 0 8px var(--primary-glow))" }}></i>
                <h2 className="fw-bold mb-1" style={{ fontSize: "2.5rem" }}>{stat.value}</h2>
                <p className="text-muted small text-uppercase fw-bold mb-0">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Analytics;
