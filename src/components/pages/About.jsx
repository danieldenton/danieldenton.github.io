import LinkedIn from "../LinkedIn";
import Github from "../Github";

export default function About() {
  return (
    <div className="about">
      <div className="about-div">
        <h2 className="page-header">About</h2>
        <p className="bio">
          Skilled software engineer seeking opportunities in Full Stack
          development. Whether launching a project or seeing it to completion,
          working with a team or independently, cumulative skill-sets support
          quality outcomes with a drive to balance the technical with the
          creative.
        </p>
      </div>
      <div className="right-home-email">
        <div className="right-home">
          <div className="github-div">
            <Github />
          </div>
          <div className="github-div">
            <LinkedIn />
          </div>
        </div>
        <h5 id="email">danielMdenton@gmail.com</h5>
      </div>
    </div>
  );
}
