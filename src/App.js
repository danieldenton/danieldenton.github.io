import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

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
      createdWith: "MongoDB, Express.js, React.js, Node.js",
    },
    {
      name: "A Day in the Life",
      image: dilImg,
      link: "https://preeminent-swan-c5baf2.netlify.app/",
      createdWith: "MongoDB, Express.js, React.js, Node.js",
    },
    {
      name: "Crypto Watch",
      image: cryptoImg,
      link: "https://yourcryptowatch.herokuapp.com/",
      createdWith: "PostrgeSQL, Express.js, EJS, Node.js",
    },
    {
      name: "Return to Oz",
      image: ozImg,
      link: "https://danieldenton.github.io/return-to-oz-p1/",
      createdWith: "Javascript, HTML5, CSS3",
    },
  ];

  return (
    <div className="app">
      <Router>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={<Home logos={logos} projects={projects} />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}
