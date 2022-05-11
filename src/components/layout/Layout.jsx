import Footer from "./Footer";
import Navbar from "./Navbar";
import Github from "../Github";
import LinkedIn from "../LinkedIn";

export default function Layout(props) {
  return (
    <div className="layout">
      <Navbar />
      <div className="everything-center">
        <div className="everything">
          <div className="header-div">
            <header>
              <h1 className="dd">Daniel Denton</h1>
              <h3 className="sub-header">Software Developer</h3>
            </header>
            <div className="right-header">
              <div className="right-links">
                <Github />
                <LinkedIn />
              </div>
              <h5 id="email">DanielMDenton@gmail.com</h5>
            </div>
            <main className="main">{props.children}</main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
