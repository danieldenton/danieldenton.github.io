import Projects from "../Projects";

import painNavImg from "../../assets/painnav.jpeg"
import dcdImg from "../../assets/dcd.png"
import dilImg from "../../assets/dil.png";

const painNavigator = {
    name: "PainNavigator",
    image: painNavImg,
    iOSLink: "https://apps.apple.com/us/app/painnavigator/id1631767340",
    googlePlayLink: "https://play.google.com/store/apps/details?id=com.PainNavigator&hl=en_US",
    mobileAppGithub: "https://github.com/danieldenton/deep-cut-discovery",
    serverGithub: "https://github.com/danieldenton/deep-cut-discovery",
    createdWith: "React Native, Ruby on Rails",
}

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
  }
];

export default function ProjectsPage() {
  const projectDivs = projects.map((project, idx) => {
    return <Projects project={project} key={`project-${idx}`} />;
  });

  return (
    <div className="projects-div">
      <div className="project-imgs-div">{projectDivs}</div>
    </div>
  );
}
