import { Fragment, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Navigation.scss";
import Resume from "../Media/Ahmed_Resume.pdf";
function Navigation() {

  return (
    <Fragment>
      <nav>
        <Link to={"/"} class="nowrap">Ahmed Najiub</Link>
        <ul>
          <li>
            <Link to={"/#introduction"} id="Home">
              {" "}
              Home{" "}
            </Link>{" "}
          </li>
          <li>
            <Link to={"/#aboutme"}> About </Link>{" "}
          </li>
          {/* <li>
            <Link to={"/#resume"}> Resume </Link>{" "}
          </li> */}
          <li>
            <Link to={"/#projects"}> Projects </Link>{" "}
          </li>
          <li>
            <Link to={"/#contact"}> Contact me </Link>{" "}
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}

export default Navigation;
