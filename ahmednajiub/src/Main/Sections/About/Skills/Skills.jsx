import { Fragment } from "react";
import { Link } from "react-router-dom";

import "./Skills.scss";
import Tick from "../../../../Media/blueCheck.jpg";

function Skills() {
  return (
    <Fragment>
      
      <div id="skillDiv">    
        <div id={"backend"}>
          <p id= {"backTitle"}> <span> Backend Development </span>  </p>
          <ul id = {"backList"}>
            <li> <img src={Tick}></img> Python </li>
            <li> <img src={Tick}></img> C++ </li>
            <li> <img src={Tick}></img> Java </li>
            <li> <img src={Tick}></img> SQL </li>
            <li> <img src={Tick}></img> Assembly language </li>
            <li> <img src={Tick}></img> Machine Language </li>
          </ul>
        </div>

        <div id={"frontend"}>
          <p id = {"frontTitle"}> Frontend Development </p>
          <ul id = {"frontList"}>
            <li><img src={Tick}></img> HTML </li>
            <li><img src={Tick}></img> CSS </li>
            <li><img src={Tick}></img> Javascript </li>
            <li><img src={Tick}></img> React </li>
            <li><img src={Tick}></img> Json </li>
            <li><img src={Tick}></img> Node Js </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default Skills;
