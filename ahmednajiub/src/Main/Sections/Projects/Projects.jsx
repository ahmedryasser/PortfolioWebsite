import React, { Fragment, useState, useEffect } from "react";
import Minesweeper from "./Minesweeper/Minesweeper";
import "./Projects.scss";
import Icon from "../../../Media/lock.jpg"

function Projects() {
    return (
      <Fragment>
        <div id={"projects"}>
        {/* <Minesweeper /> */}
        <div id={"inprogress"}> 
        <h2> Coming Soon.. </h2>
        <h3> Projects </h3>
        <img src={Icon}></img>
        </div>
        </div>
      </Fragment>
    );
  }
  export default Projects;