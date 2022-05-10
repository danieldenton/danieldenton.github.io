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
        Recent Projects
      </Link>
      <div id="resume">
        <Link className="resume-link" to={resume} download>
          download a resume
        </Link>
      </div>
    </div>
  );
}
