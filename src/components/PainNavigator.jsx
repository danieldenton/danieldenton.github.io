import painNavImg from "../assets/painnav.jpeg"


export default function PainNavigator() {

    const painNavigator = {
        name: "PainNavigator",
        image: painNavImg,
        iOSLink: "https://apps.apple.com/us/app/painnavigator/id1631767340",
        googlePlayLink: "https://play.google.com/store/apps/details?id=com.PainNavigator&hl=en_US",
        mobileAppGithub: "https://github.com/danieldenton/deep-cut-discovery",
        serverGithub: "https://github.com/danieldenton/deep-cut-discovery",
        createdWith: "React Native, Ruby on Rails",
    }
    return (
      <div className="painNavigator-div">
        <h5 className="painNavigator-names">{painNavigator.name}</h5>
        <p className="created-with">{painNavigator.createdWith}</p>
        <div className="painNavigator-github">
          <a
            href={painNavigator.github}
            target="_blank"
            className="painNavigator-github-link"
          >
            <i class="fa-brands fa-github-square"></i>
          </a>
        </div>
        <a href={painNavigator.link} target="_blank">
          <img src={painNavigator.image} alt="A Day In The Life" className="painNavigators" />
        </a>
      </div>
    );
  }