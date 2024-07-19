import Projects from "../Projects";
import PainNavigator from "../PainNavigator";

import dcdImg from "../../assets/dcd.png";
import dilImg from "../../assets/dil.png";

const projects = [
  {
    name: "Dex Aggregator",
    image: dcdImg,
    link: "https://deepcutdiscovery.netlify.app/",
    github: "https://github.com/danieldenton/deep-cut-discovery",
    createdWith: "MongoDB, Express.js, React.js, Node.js",
  },
  {
    name: "Cloud Swap",
    image: dilImg,
    link: "https://dayinthelife.netlify.app",
    github: "https://github.com/danieldenton/day-in-life-client",
    createdWith: "MongoDB, Express.js, React.js, Node.js",
  },
  {
    name: "Blood Moon Swap",
    image: dilImg,
    link: "https://dayinthelife.netlify.app",
    github: "https://github.com/danieldenton/day-in-life-client",
    createdWith: "MongoDB, Express.js, React.js, Node.js",
  },
];

export default function Web3Page() {
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
      <div className="older-projects">
        <h5 className="pn-name">Web3 Projects</h5>
        <div className="inline">{projectDivs}</div>
      </div>
    </div>
  );
}
