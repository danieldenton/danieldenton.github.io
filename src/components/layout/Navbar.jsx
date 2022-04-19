import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-link">
        Home
      </Link>
      <Link to="/about" className="navbar-link">
        About
      </Link>
      <div id="resume">
        <a className="resume-link" href="DanielDentonResume.pdf" download>
          download a resume
        </a>
      </div>
    </div>
  );
}
