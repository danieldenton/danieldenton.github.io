import { Link } from "react-router-dom";
import resume from "../../assets/DanielDentonResume.pdf";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-link">
        Home
      </Link>
      <Link to="/about" className="navbar-link">
        About
      </Link>
      <Link to="/projects" className="navbar-link">
       Projects
      </Link>
      <a className="navbar-link"  href="/DanielDenton_resume2024.pdf" download="DanielDenton_resume2024.pdf">
        Resume
      </a>
    </div>
  );
}
