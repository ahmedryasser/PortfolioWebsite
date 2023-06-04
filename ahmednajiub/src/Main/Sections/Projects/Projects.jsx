import React, { Fragment, useState, useEffect } from "react";
import Minesweeper from "./Minesweeper/Minesweeper";
import "./Projects.scss";
import Icon from "../../../Media/lock.jpg"

function Projects() {
    return (
      <Fragment>
        <h3> Some of my Projects! </h3>
        <div id = "ipser" class ={"project"}>


        </div>
        <div id= "Internship-Frontend" class ={"project"}>


        </div>
        <div id = "Internship-backend" class ={"project"}>


        </div>
        <div id= "Pepperplan" class ={"project"}>


        </div>
        <div id = "Portfolio" class ={"project"}>


        </div>
        <div id = "Kotlin" class ={"project"}>


        </div>
        <button> Explore more </button>
      </Fragment>
    );
  }
  export default Projects;