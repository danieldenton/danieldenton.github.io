import Logos from "../Logos";
import Contact from "../Contact";

export default function Home({ logos }) {
  const skills = logos.map((logo, idx) => {
    return <Logos logo={logo} key={`logo-${idx}`} />;
  });

  return (
    <div className="home">
      <h2 className="page-header">Skills</h2>
      <div className="skills-div">{skills}</div>
      <Contact />
    </div>
  );
}
