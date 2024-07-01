import painNavImg from "../assets/PainNav.jpeg";

export default function PainNavigator() {
  const painNavigator = {
    name: "PainNavigator",
    image: painNavImg,
    iOSLink: "https://apps.apple.com/us/app/painnavigator/id1631767340",
    googlePlayLink:
      "https://play.google.com/store/apps/details?id=com.PainNavigator&hl=en_US",
    mobileAppGithub: "https://github.com/painnavigator/painnavigator-mobile",
    serverGithub: "https://github.com/painnavigator/pain-navigator-mobile-api",
    createdWith: "React Native, Ruby on Rails",
  };
  return (
    <div className="painNavigator-div">
      <h5 className="project-names">{painNavigator.name}</h5>
      <p className="created-with">{painNavigator.createdWith}</p>
      <div className="pn-halves">
        <div className="pn-half-div">
          <img
            src={painNavigator.image}
            alt="PainNavigator"
            className="projects"
          />
        </div>
        <div className="pn-half-div">
          <div className="painNavigator-github">
            <a
              href={painNavigator.mobileAppGithub}
              target="_blank"
              className="project-github-link"
            >
              <i class="fa-brands fa-github-square"></i>
            </a>
          </div>
          <div className="painNavigator-github">
            <a
              href={painNavigator.serverGithub}
              target="_blank"
              className="project-github-link"
            >
              <i class="fa-brands fa-github-square"></i>
            </a>
          </div>
          <div className="painNavigator-github">
            <a
              href={painNavigator.iOSLink}
              target="_blank"
              className="project-github-link"
            >
              <i class="fa-brands fa-app-store"></i>
            </a>
          </div>
          <div className="painNavigator-github">
            <a
              href={painNavigator.googlePlayLink}
              target="_blank"
              className="project-github-link"
            >
              <i class="fa-brands fa-google-play"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
