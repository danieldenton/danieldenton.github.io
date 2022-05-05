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
import reactImg from "./assets/react.png";
import javascriptImg from "./assets/javascript.png";
import nodeImg from "./assets/node.png";
import pythonImg from "./assets/python.jpeg";
import djangoImg from "./assets/django.jpeg";
import htmlImg from "./assets/html5.jpeg";
import cssImg from "./assets/css.png";
import postgresImg from "./assets/postgres.png";
import mongoImg from "./assets/mongodb.png";

export default function App() {
  const logos = [
    reactImg,
    javascriptImg,
    nodeImg,
    pythonImg,
    mongoImg,
    postgresImg,
    htmlImg,
    cssImg,
  ];

  const projects = [
    {
      name: "Deep Cut Discovery",
      image: dcdImg,
      link: "https://deepcutdiscovery.netlify.app",
      github: "https://github.com/danieldenton/deep-cut-discovery",
      createdWith: "MongoDB, Express.js, React.js, Node.js",
    },
    {
      name: "A Day in the Life",
      image: dilImg,
      link: "https://preeminent-swan-c5baf2.netlify.app/",
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

  return (
    <div className="app">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home logos={logos} />} />
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
