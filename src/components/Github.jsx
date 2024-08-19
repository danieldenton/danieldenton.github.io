import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Github() {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href="https://github.com/danieldenton"
      className="github"
    >
      <FontAwesomeIcon icon="fa-brands fa-square-github" style={{color: "white"}}/>
    </a>
  );
}
