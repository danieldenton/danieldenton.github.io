export default function Projects({ project }) {
  return (
    <div>
      <h5 className="project-names">{project.name}</h5>
      <p className="created-with">created with {project.createdWith}</p>
      <a href={project.link} target="_blank">
        <img src={project.image} alt="A Day In The Life" className="projects" />
      </a>
    </div>
  );
}
