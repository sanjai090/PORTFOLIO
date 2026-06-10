import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://sanjaispf.onrender.com/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Make sure the backend is running.");
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="display-5 fw-bold">Get In Touch</h2>
          <div className="mx-auto" style={{ width: "60px", height: "4px", background: "var(--primary)" }}></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="glass-card p-5 overflow-hidden shadow-2xl">
              <div className="row g-5">
                <div className="col-md-5" data-aos="fade-right">
                  <h4 className="fw-bold mb-4">Contact Info</h4>
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                      <i className="bi bi-envelope-at-fill text-primary"></i>
                    </div>
                    <div>
                      <p className="text-muted mb-0 small">Email</p>
                      <a href="mailto:sanjaisvhec2024@gmail.com" className="text-white text-decoration-none fw-bold">sanjaisvhec2024@gmail.com</a>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                      <i className="bi bi-geo-alt-fill text-primary"></i>
                    </div>
                    <div>
                      <p className="text-muted mb-0 small">Location</p>
                      <p className="text-white fw-bold mb-0">Tamil Nadu, India</p>
                    </div>
                  </div>
                  
                  <h5 className="fw-bold mt-5 mb-4">Let's Connect</h5>
                  <div className="d-flex gap-3">
                    <a href="https://github.com/sanjai090" target="_blank" rel="noreferrer" className="stat-tag text-decoration-none d-flex align-items-center justify-content-center" style={{ width: "45px", height: "45px", padding: "0" }}>
                      <i className="bi bi-github fs-5"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/sanjai-s-2b4bb5330/" target="_blank" rel="noreferrer" className="stat-tag text-decoration-none d-flex align-items-center justify-content-center" style={{ width: "45px", height: "45px", padding: "0" }}>
                      <i className="bi bi-linkedin fs-5"></i>
                    </a>
                    <a href="https://www.instagram.com/sanjai_satheesh_19/" target="_blank" rel="noreferrer" className="stat-tag text-decoration-none d-flex align-items-center justify-content-center" style={{ width: "45px", height: "45px", padding: "0" }}>
                      <i className="bi bi-instagram fs-5"></i>
                    </a>
                  </div>
                </div>

                <div className="col-md-7" data-aos="fade-left">
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3 text-start">
                      <div className="col-md-6 text-start">
                        <label className="form-label text-muted small ms-1">Full Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control bg-dark border-secondary bg-opacity-50 text-white p-3 shadow-none focus-border-primary" placeholder="Sanjai S" required />
                      </div>
                      <div className="col-md-6 text-start">
                        <label className="form-label text-muted small ms-1">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control bg-dark border-secondary bg-opacity-50 text-white p-3 shadow-none focus-border-primary" placeholder="sanjai@example.com" required />
                      </div>
                      <div className="col-12 text-start">
                        <label className="form-label text-muted small ms-1">Message</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="form-control bg-dark border-secondary bg-opacity-50 text-white p-3 shadow-none focus-border-primary" placeholder="Hey, I'd like to talk about..." required></textarea>
                      </div>
                      <div className="col-12 mt-4">
                        <button type="submit" className="btn btn-info btn-lg w-100 py-3 shadow-lg fw-bold border-0" style={{ background: "linear-gradient(45deg, #00d9ff, #00a1ff)" }}>Send Message</button>
                      </div>
                      {status && (
                        <div className="col-12 mt-3 text-center">
                          <p className={`fw-bold ${status.includes("success") ? "text-success" : "text-warning"}`}>{status}</p>
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;