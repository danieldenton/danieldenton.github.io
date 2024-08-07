import Projects from "../Projects";

import dexAgg from "../../assets/DexAgg.png";
import cloudSwap from "../../assets/CloudSwap.png";
import BMSwap from "../../assets/BMSwap.png";

const projects = [
  {
    name: "Dex Aggregator",
    image: dexAgg,
    link: "https://dex-agg1.netlify.app/",
    youtube1: "https://www.youtube.com/watch?v=NFQ12ekqSH0",
    github: "https://github.com/danieldenton/dex-aggregator",
    createdWith: "Solidity, Hardhat, Ethers.js, React, TypeScript",
  },
  {
    name: "Cloud Swap",
    image: cloudSwap,
    link: "https://cloud-swap.netlify.app/",
    github: "https://github.com/danieldenton/cloud-swap",
    createdWith: "Solidity, Hardhat, Ethers.js, React, TypeScript",
  },
  {
    name: "Blood Moon Swap",
    image: BMSwap,
    link: "https://blood-moon-swap.netlify.app/",
    github: "https://github.com/danieldenton/blood-moon-swap",
    createdWith: "Solidity, Hardhat, Ethers.js, React",
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
        <p className="pn-created-with" style={{ marginTop: "5px" }}>
          The contracts for the 3 below projects are deployed on the Eth-Sepolia
          test network. Because these projects handle tokens I created
          specifically for them, there are, or will be, video explantions. Click
          the YouTube logos to see them.
        </p>
        <div className="inline">{projectDivs}</div>
      </div>
    </div>
  );
}
