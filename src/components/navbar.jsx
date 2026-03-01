function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#home">SANJAI S</a>
        <div>
          <a className="nav-link d-inline text-white" href="#home">Home |</a>
          <a className="nav-link d-inline text-white" href="#about">About | </a>
          <a className="nav-link d-inline text-white" href="#education">Education | </a>
          <a className="nav-link d-inline text-white" href="#projects">Projects | </a>
          <a className="nav-link d-inline text-white" href="#certificates">Certificates | </a>
          <a className="nav-link d-inline text-white" href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;