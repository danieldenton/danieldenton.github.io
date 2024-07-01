import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ProjectsPage from "./components/pages/ProjectsPage";

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
              element={<ProjectsPage />}
            />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}
