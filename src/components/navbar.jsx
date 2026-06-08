function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom border-secondary border-opacity-10 fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bold text-white fs-4" href="#home" style={{ letterSpacing: "1px" }}>
          SANJAI <span className="text-info">S</span>
        </a>
        <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <i className="bi bi-list text-white fs-2"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link text-white px-3" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white px-3" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white px-3" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white px-3" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white px-3" href="#certificates">Certificates</a>
            </li>
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <a className="btn btn-info shadow-sm px-4 fw-bold" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;