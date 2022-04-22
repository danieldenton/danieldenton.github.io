import Logos from "../Logos";
import Projects from "../Projects";
import Contact from "../Contact";

export default function Home({ logos, projects }) {
  const skills = logos.map((logo, idx) => {
    return <Logos logo={logo} key={`logo-${idx}`} />;
  });

  const projectDivs = projects.map((project, idx) => {
    return <Projects project={project} key={`project-${idx}`} />;
  });

  return (
    <div className="home">
      <h2 className="skills-header">Skills</h2>
      <div className="skills-div">{skills}</div>
      <div className="projects-div">
        <h2 className="page-header">Recent Projects</h2>
        <div className="project-imgs-div">{projectDivs}</div>
      </div>
      <Contact />
    </div>
  );
}
