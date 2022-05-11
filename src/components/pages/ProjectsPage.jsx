import Projects from "../Projects";

export default function ProjectsPage({ projects }) {
  const projectDivs = projects.map((project, idx) => {
    return <Projects project={project} key={`project-${idx}`} />;
  });

  return (
    <div className="projects-div">
      <div className="project-imgs-div">{projectDivs}</div>
    </div>
  );
}
