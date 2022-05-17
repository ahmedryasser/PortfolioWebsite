import { Fragment } from "react";
import { Link } from "react-router-dom";

import "./About.scss";
import Experience from "./Panels/Experience.jsx";
import Skills from "../About/Skills/Skills.jsx";

function About() {
  return (
    <Fragment>
      <h1>Who am I?</h1>
      <h2 id={"aboutme"}>More About Me</h2>

      <div id={"about"}>
        <div className={"experience"}>
          {" "}
          <Experience />
        </div>
        <div className={"skills"}>
          {" "}
          <Skills />
        </div>
      </div>
    </Fragment>
  );
}

export default About;
