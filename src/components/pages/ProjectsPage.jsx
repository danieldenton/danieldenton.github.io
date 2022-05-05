import Projects from "../Projects";

export default function ProjectsPage({ projects }) {
  const projectDivs = projects.map((project, idx) => {
    return <Projects project={project} key={`project-${idx}`} />;
  });

  return (
    <div id="projects-div">
      <h2 className="page-header">Recent Projects</h2>
      <div className="project-imgs-div">{projectDivs}</div>
    </div>
  );
}
