import painNavImg from "../assets/PainNav.jpeg";
import painNavImg2 from "../assets/PainNav2.jpeg";
import painNavImg3 from "../assets/PainNav3.jpeg";

export default function PainNavigator() {
  const painNavigator = {
    name: "PainNavigator",
    iOSLink: "https://apps.apple.com/us/app/painnavigator/id1631767340",
    googlePlayLink:
      "https://play.google.com/store/apps/details?id=com.PainNavigator&hl=en_US",
    mobileAppGithub: "https://github.com/painnavigator/painnavigator-mobile",
    serverGithub: "https://github.com/painnavigator/pain-navigator-mobile-api",
    createdWith: "React Native, Ruby on Rails",
    description:
      "PainNavigator is a physical therapy app for people dealing with chronic pain. It leverages the Cloudinary platform for hosting the videos which it streams. The app also tracks a users progress with their pain management with a Daily Pain Score, SMART Goals as well as Pain Journals. The app also provides access to a wellness coach for in app support.",
    description2:
      "If you would like to check out the app please contact me at danielmdenton@gmail.com for a login email and password.",
  };
  return (
    <div className="painNavigator-div">
      <h5 className="pn-name">{painNavigator.name}</h5>
      <p className="pn-created-with">{painNavigator.createdWith}</p>
      <p className="pn-created-with" style={{ marginTop: "5px" }}>
        {painNavigator.description}
      </p>
      <p className="pn-created-with" style={{ marginTop: "5px" }}>
        {painNavigator.description2}
      </p>
      <div className="pn-halves">
        <div className="pn-half-div">
          <img className="pn-image" src={painNavImg2} alt="PainNavigator" />
        </div>
        <div className="pn-half-div">
          <img className="pn-image" src={painNavImg} alt="PainNavigator" />
        </div>
        <div className="pn-half-div">
          <img className="pn-image" src={painNavImg3} alt="PainNavigator" />
        </div>
        <div className="pn-half-div">
          <div className="pn-link-container">
            <div className="pn-link-divs">
              <p>Mobile App GitHub</p>
              <a
                href={painNavigator.mobileAppGithub}
                target="_blank"
                className="project-github-link"
              >
                <i class="fa-brands fa-github-square"></i>
              </a>
            </div>
            <div className="pn-link-divs">
              <p>Server GitHub</p>
              <a
                href={painNavigator.serverGithub}
                target="_blank"
                className="project-github-link"
              >
                <i class="fa-brands fa-github-square"></i>
              </a>
            </div>
          </div>
          <div className="pn-half-div">
            <div className="pn-link-divs">
              <p>App Store</p>
              <a
                href={painNavigator.iOSLink}
                target="_blank"
                className="project-github-link"
              >
                <i class="fa-brands fa-app-store"></i>
              </a>
            </div>
            <div className="pn-link-divs">
              <p>Google Play</p>
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
    </div>
  );
}
