function Footer() {
  return (
    <footer className="py-4 mt-5" style={{ background: "rgba(0,0,0,0.5)", borderTop: "1px solid var(--border-color)" }}>
      <div className="container text-center">
        <p className="mb-2 text-white fw-bold">SANJAI S</p>
        <p className="small text-muted mb-0">
          © {new Date().getFullYear()} | Designed & Built with ❤️ using React & Bootstrap
        </p>
      </div>
    </footer>
  );
}

export default Footer;