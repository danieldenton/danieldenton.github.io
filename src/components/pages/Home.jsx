import reactImg from "../../assets/react.png";
import javascriptImg from "../../assets/javascript.png";
import nodeImg from "../../assets/node.png";
import dilImg from "../../assets/dil.png";
import cryptoImg from "../../assets/crypto.png";
import ozImg from "../../assets/oz.png";
import dcdImg from "../../assets/dcd.png";
import pythonImg from "../../assets/python.jpeg";
import djangoImg from "../../assets/django.jpeg";
import htmlImg from "../../assets/html5.jpeg";
import cssImg from "../../assets/css.png";
import postgresImg from "../../assets/postgres.png";
import mongoImg from "../../assets/mongodb.png";

export default function Home() {
  return (
    <div className="home">
      <div className="skills-div">
        <h2 className="page-header">Skills</h2>
        <img src={reactImg} alt="React.js" className="logos" />
        <img src={javascriptImg} alt="Javascript" className="logos" />
        <img src={nodeImg} alt="Node.js" className="logos" />
        <img src={pythonImg} alt="Python" className="logos" />
        <img src={mongoImg} alt="Python" className="logos" />
        <img src={postgresImg} alt="postgres" className="logos" />
        <img src={htmlImg} alt="HTML5" className="logos" />
        <img src={cssImg} alt="CSS3" className="logos" />
      </div>
      <div className="projects-div">
        <h2 className="page-header">Recent Projects</h2>
        <div className="project-imgs-div">
          <div id="dcd">
            <h5 className="project-names">Deep Cut Discovery</h5>
            {/* <a href="" target="_blank"> */}
            <img src={dcdImg} alt="Deep Cut Discovery" className="projects" />
            {/* </a> */}
          </div>
          <div id="dil">
            <h5 className="project-names">A Day in the Life</h5>
            <a
              href="https://preeminent-swan-c5baf2.netlify.app/"
              target="_blank"
            >
              <img src={dilImg} alt="A Day In The Life" className="projects" />
            </a>
          </div>
          <div id="crypto">
            <h5 className="project-names">Crypto Watch</h5>
            <a href="https://yourcryptowatch.herokuapp.com/" target="_blank">
              <img src={cryptoImg} alt="Crypto Watch" className="projects" />
            </a>
          </div>
          <div id="oz">
            <h5 className="project-names">Return to Oz</h5>
            <a
              href="https://danieldenton.github.io/return-to-oz-p1/"
              target="_blank"
            >
              <img src={ozImg} alt="Crypto Watch" className="projects" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
