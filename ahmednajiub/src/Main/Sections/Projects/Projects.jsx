import React, { Fragment, useState, useEffect } from "react";
import Minesweeper from "./Minesweeper/Minesweeper";
import "./Projects.scss";
import Icon from "../../../Media/lock.jpg"
import PeppLogo from "../../../Media/Pepperdine-logo.jpg"
import IpserLogo from "../../../Media/IpserLabLogo.jpg"
import PepperPlanLogo from "../../../Media/PepperPlan-logo.png"

function Projects() {
    return (
      <Fragment>
        

        <div class="section" id="projectSec">
        <h1>Recent Projects!</h1>
        <div class="projects">
        <div id = "ipser" class ={"project"}>
          <img src={IpserLogo}></img>

        </div>
        <div id= "Internship" class ={"project"}>
          <img src={PeppLogo}></img>

        </div>
        <div id = "Pepperplan" class ={"project"}>
          {/* <img src={PepperPlanLogo}></img> */}

        </div>
        <div id= "csclub" class ={"project"}>


        </div>
        <div id = "Portfolio" class ={"project"}>


        </div>
        <div id = "Kotlin" class ={"project"}>


        </div>
        </div>
        <button class= {"button"} id={"exploreBtn"}> Explore more </button>
      </div>
      </Fragment>
    );
  }
  export default Projects;