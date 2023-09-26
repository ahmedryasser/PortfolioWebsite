import { Fragment } from "react";
import { Link } from "react-router-dom";

import Profile from "../../../Media/photo.jpeg";
import MyResume from "../../../Media/Ahmed_Resume.pdf";

import "./Introduction.scss";

function Introduction() {
  return (
    <Fragment>
      <div id={"introduction"}>
        <div className={"box"}>
          <div className={"message"}>{"Hello!"}</div>
          <h1>
            I'm <span>Ahmed Najiub</span>
          </h1>
          <p>
            I am a Full-Stack Developer Specializing in ASP.Net MVC and Entity Framework, with lots of project experience in REACT JS and Firebase. I love programming, designing websites, and
            mobile apps in my free time. Feel free to ask about any of my projects and how they came to be!
          </p>
          <a
            className={"nowrap resume"}
            href={MyResume}
            download={"Ahmed Najiub's Resume.pdf"}
            
          >Download Resume</a>
          <Link className={"contact"} to={"/#contact"}>
            Contact me
          </Link>
          <div className={"profile"}>
            <img src={Profile} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Introduction;
