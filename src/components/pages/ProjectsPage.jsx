import Projects from "../Projects";
import PainNavigator from "../PainNavigator";

import dcdImg from "../../assets/dcd.png";
import dilImg from "../../assets/dil.png";

const projects = [
  {
    name: "Deep Cut Discovery",
    image: dcdImg,
    link: "https://deepcutdiscovery.netlify.app/",
    github: "https://github.com/danieldenton/deep-cut-discovery",
    createdWith: "MongoDB, Express.js, React.js, Node.js",
  },
  {
    name: "A Day in the Life",
    image: dilImg,
    link: "https://dayinthelife.netlify.app",
    github: "https://github.com/danieldenton/day-in-life-client",
    createdWith: "MongoDB, Express.js, React.js, Node.js",
  },
];

export default function ProjectsPage() {
  const projectDivs = projects.map((project, idx) => {
    return (
      <Projects
        className="project-imgs-div"
        project={project}
        key={`project-${idx}`}
      />
    );
  });

  return (
    <div className="projects-div">
      <PainNavigator />
      <div className="older-projects">
        <h5 className="pn-name">Older Projects</h5>
        <div className="inline">{projectDivs}</div>
      </div>
    </div>
  );
}
