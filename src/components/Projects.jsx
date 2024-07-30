export default function Projects({ project }) {
  return (
    <div className="project-div">
      <h5 className="project-names">{project.name}</h5>
      <p className="created-with">{project.createdWith}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "200px",
          justifyContent: "space-around",
        }}
      >
        {project.youtube1 ? (
          <div className="project-youtube-link">
            <a
              href={project.youtube1}
              target="_blank"
              className="project-github-link"
            >
              <i class="fa-brands fa-youtube"></i>
            </a>
          </div>
        ) : null}
        <div className="project-github">
          <a
            href={project.github}
            target="_blank"
            className="project-github-link"
          >
            <i class="fa-brands fa-github-square"></i>
          </a>
        </div>
      </div>
      <a href={project.link} target="_blank">
        <img src={project.image} alt="A Day In The Life" className="projects" />
      </a>
    </div>
  );
}
