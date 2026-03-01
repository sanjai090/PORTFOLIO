function Contact() {
  return (
    <section id="contact" className="py-5 bg-dark text-white">
      <div className="container">
        <h2 className="text-center mb-5">Contact Me</h2>

        <div className="row g-4 justify-content-center">

          <div className="col-md-4">
            <a href="mailto:sanjaisatheesh1913@gmail.com" className="text-decoration-none text-white">
              <div className="card bg-secondary text-center shadow h-100 contact-card">
                <div className="card-body">
                  <i className="bi bi-envelope-fill fs-1"></i>
                  <h5 className="mt-3">Email</h5>
                  <p className="text-light">sanjaisatheesh1913@gmail.com</p>
                </div>
              </div>
            </a>
          </div>

          <div className="col-md-4">
            <a href="tel:+916383982801" className="text-decoration-none text-white">
              <div className="card bg-secondary text-center shadow h-100 contact-card">
                <div className="card-body">
                  <i className="bi bi-telephone-fill fs-1"></i>
                  <h5 className="mt-3">Phone</h5>
                  <p className="text-light">+91 63839 82801</p>
                </div>
              </div>
            </a>
          </div>

          <div className="col-md-4">
            <a href="https://github.com/sanjai090" target="_blank" rel="noreferrer" className="text-decoration-none text-white">
              <div className="card bg-secondary text-center shadow h-100 contact-card">
                <div className="card-body">
                  <i className="bi bi-github fs-1"></i>
                  <h5 className="mt-3">GitHub</h5>
                  <p className="text-light">github.com/sanjai090</p>
                </div>
              </div>
            </a>
          </div>

          <div className="col-md-4">
            <a href="https://www.linkedin.com/in/sanjai-s-2b4bb5330/" target="_blank" rel="noreferrer" className="text-decoration-none text-white">
              <div className="card bg-secondary text-center shadow h-100 contact-card">
                <div className="card-body">
                  <i className="bi bi-linkedin fs-1"></i>
                  <h5 className="mt-3">LinkedIn</h5>
                  <p className="text-light">Connect with me</p>
                </div>
              </div>
            </a>
          </div>

          <div className="col-md-4">
            <a href="https://www.instagram.com/sanjai_satheesh_19/" target="_blank" rel="noreferrer" className="text-decoration-none text-white">
              <div className="card bg-secondary text-center shadow h-100 contact-card">
                <div className="card-body">
                  <i className="bi bi-instagram fs-1"></i>
                  <h5 className="mt-3">Instagram</h5>
                  <p className="text-light">@sanjai_satheesh_19</p>
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;