export default function About() {
  return (
    <div className="about">
      <h2 className="page-header">Bio</h2>
      <p className="bio">
        Daniel Denton is a software engineer who completed General Assembly's
        Software Engineering Emmersive in 2022. He has a background as a working
        musician as well as yoga and meditation teacher. Whether a blank canvas
        or an almost completed project, on a team or individually, he can be
        counted on to bring whatever creative piece is needed to complete the
        puzzle.
      </p>
      <h2 className="page-header">Contact</h2>
      <div id="contact-div">
        <h5 id="email">DanielMDenton@gmail.com</h5>
        <a
          href="https://www.linkedin.com/in/danielmdenton/"
          alt="linkedin.com"
          id="linkedin"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
