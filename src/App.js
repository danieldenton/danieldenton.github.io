import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ProjectsPage from "./components/pages/ProjectsPage";

import dcdImg from "./assets/dcd.png";
import dilImg from "./assets/dil.png";
import cryptoImg from "./assets/crypto.png";
import ozImg from "./assets/oz.png";

const projects = [
  {
    name: "Deep Cut Discovery",
    image: dcdImg,
    link: "https://deepcutdiscovery.netlify.app/",
    github: "https://github.com/danieldenton/deep-cut-discovery",
    createdWith: "MongoDB, Express.js, React.js, Node.js",
  },
  {
    name: "A Day in the Life",
    image: dilImg,
    link: "https://dayinthelife.netlify.app",
    github: "https://github.com/danieldenton/day-in-life-client",
    createdWith: "MongoDB, Express.js, React.js, Node.js",
  },
  {
    name: "Crypto Watch",
    image: cryptoImg,
    link: "https://yourcryptowatch.herokuapp.com/",
    github: "https://github.com/danieldenton/cryptowatch",
    createdWith: "PostrgeSQL, Express.js, EJS, Node.js",
  },
  {
    name: "Return to Oz",
    image: ozImg,
    link: "https://danieldenton.github.io/return-to-oz-p1/",
    github: "https://github.com/danieldenton/return-to-oz-p1",
    createdWith: "Javascript, HTML5, CSS3",
  },
];

export default function App() {
  return (
    <div className="app">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/projects"
              element={<ProjectsPage projects={projects} />}
            />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}
