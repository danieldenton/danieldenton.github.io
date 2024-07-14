import mongo from "../../assets/mongo.png";
import postgresql from "../../assets/postgresql.png";
import django from "../../assets/djangologo.png";
import typeScript from "../../assets/ts.jpeg";
import ethereum from "../../assets/etherum.png";
import ruby from "../../assets/ruby.png";
import rails from "../../assets/rails.png";
import expo from "../../assets/Expo.png";

export default function Home() {
  return (
    <div className="home">
      <div className="home-left">
        <div className="skills-div">
          <div className="skills">
            <i className="fa-brands fa-react skill-img"></i>
            <p className="skill-label">React</p>
          </div>
          <div className="skills">
            <img src={typeScript} alt="typeScript" id="ts" />
            <p className="typescript-label">TypeScript</p>
          </div>
          <div className="skills">
            <i class="fa-brands fa-node-js"></i>
            <p className="skill-label">Node.js</p>
          </div>
          <div className="skills">
            <img src={ethereum} alt="solidity" id="solidity" />
            <p className="solidity-label">Solidity</p>
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
            <img src={ruby} alt="ruby" id="ruby" />
            <p className="ruby-label">Ruby</p>
          </div>
          <div className="skills">
            <img src={rails} alt="rails" id="rails" />
            <p className="mongo-label">Rails</p>
          </div>

          <div className="skills">
            <img src={expo} alt="expo" id="expo" />
            <p className="postgresql-label">Expo Go</p>
          </div>
          <div className="skills">
            <i class="fa-brands fa-golang"></i>
            <p className="skill-label">Go</p>
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
