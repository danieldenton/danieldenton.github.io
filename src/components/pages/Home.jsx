import mongo from "../../assets/mongo.png";
import postgresql from "../../assets/postgresql.png";
import django from "../../assets/djangologo.png"

export default function Home() {
  return (
    <div className="home">
      <div className="home-left">
        <div className="skills-div">
          <div className="skills">
            <i className="fa-brands fa-react"></i>
            <p className="skill-label">React.js</p>
          </div>
          <div className="skills">
            <i className="fa-brands fa-js-square"></i>
            <p className="skill-label">JavaScript</p>
          </div>
          <div className="skills">
            <i class="fa-brands fa-node-js"></i>
            <p className="skill-label">Node.js</p>
          </div>
          <div className="skills">
            <i class="fa-brands fa-python"></i>
            <p className="skill-label">Python</p>
          </div>
          <div className="skills">
            <img src={django} alt="django" id="django" />
            <p className="django-label">Django</p>
          </div>
          <div className="skills">
            <i class="fa-brands fa-html5"></i>
            <p className="skill-label">HTML5</p>
          </div>
          <div className="skills">
            <i class="fa-brands fa-css3-alt"></i>
            <p className="skill-label">CSS3</p>
          </div>
          <div className="skills">
            <i class="fa-brands fa-docker"></i>
            <p className="docker-label">Docker</p>
          </div>
          <div className="skills">
            <img src={postgresql} alt="postgresql" id="postgresql" />
            <p className="postgresql-label">PostgreSQL</p>
          </div>
          <div className="skills">
            <img src={mongo} alt="mongodb" id="mongo" />
            <p className="mongo-label">MongoDB</p>
          </div>
   
        </div>
      </div>
    </div>
  );
}
