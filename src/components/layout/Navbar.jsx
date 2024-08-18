import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-link">
        Home
      </Link>
      <Link to="/contact" className="navbar-link">
        Contact
      </Link>
      <Link to="/about" className="navbar-link">
        About
      </Link>
      <Link to="/projects" className="navbar-link">
       Projects
      </Link>
      <Link to="/web3" className="navbar-link">
       Web3
      </Link>
      <a className="navbar-link"  href="/DanielDenton_resume2024.pdf" download="DanielDenton_resume2024.pdf">
        Resume
      </a>
    </div>
  );
}
