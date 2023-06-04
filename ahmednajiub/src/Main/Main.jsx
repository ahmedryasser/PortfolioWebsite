import { Fragment } from "react";

import Introduction from "./Sections/Introduction/Introduction";
import About from "./Sections/About/About";
import Projects from "./Sections/Projects/Projects";
import Contact from "./Sections/Contact/Contact";
import Linkedin from "../Media/LI-In-Bug.png";
import Instagram from "../Media/InstaIcon.png";
import Github from "../Media/GitHub.png";

import "./Main.scss";

function Main() {
  return (
    <Fragment>
      <main>
        <Introduction />
        <About />

        <Projects />
        <Contact />
        <div>
          <a href={"https://github.com/ahmedryasser"} target={"_blank"}>
            <img id={"github"} src={Github} />
          </a>
          <a
            href={"https://www.linkedin.com/in/ahmed-najiub-75a22a1aa/"}
            target={"_blank"}
          >
            <img id={"linkedin"} src={Linkedin} />
          </a>
        </div>
      </main>
    </Fragment>
  );
}

export default Main;
