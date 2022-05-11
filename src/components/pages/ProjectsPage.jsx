import Projects from "../Projects";

export default function ProjectsPage({ projects }) {
  const projectDivs = projects.map((project, idx) => {
    return <Projects project={project} key={`project-${idx}`} />;
  });

  return (
    <div className="projects-div">
      <div className="project-imgs-div">{projectDivs}</div>
      <p id="oz">Images of Return to Oz from the 1985 film ©</p>
    </div>
  );
}
