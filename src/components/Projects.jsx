export default function Projects({ project }) {
  return (
    <div className="project-div">
      <h5 className="project-names">{project.name}</h5>
      <p className="created-with">Created with {project.createdWith}</p>
      <div className="project-github">
        <a href={project.github} target="_blank" className="github-link">
          Github Repository
        </a>
      </div>
      <a href={project.link} target="_blank">
        <img src={project.image} alt="A Day In The Life" className="projects" />
      </a>
    </div>
  );
}
