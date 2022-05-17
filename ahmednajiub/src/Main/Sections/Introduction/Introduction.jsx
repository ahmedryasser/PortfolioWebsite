import { Fragment } from "react";
import { Link } from "react-router-dom";

import Profile from "../../../Media/photo.jpeg";
import MyResume from "../Resume/Ahmed_Resume.pdf";

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
            I am Full-Stack Developer studying Computer Science at Pepperdine
            University. I have experience programming and designing websites and
            mobile apps in my free time.
          </p>
          <a
            className={"resume"}
            href={MyResume}
            download={"Ahmed Najiub's Resume.pdf"}
          >
            Download Resume
          </a>
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
