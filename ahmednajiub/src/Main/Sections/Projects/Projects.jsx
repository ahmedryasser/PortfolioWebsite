import React, { Fragment, useState } from "react";
import Minesweeper from "./Minesweeper/Minesweeper";
import "./Projects.scss";


import PeppLogo from "../../../Media/Pepperdine-logo.png"
import IpserLogo from "../../../Media/IpserLabLogo.png"
import PepperPlanLogo from "../../../Media/PepperPlan-logo.png"
import Bonobo from "../../../Media/Bonobo.png"
import ReactWeb from "../../../Media/react.png"
import Application from "../../../Media/app-development.png"



function Projects() {
  const [hoveredId, setHoveredId] = useState(null);

  function handleHover(event) {
    const id = event.target.id;
    setHoveredId(id);
  }
  function handleUnHover(event) {
    const id = event.target.id + " unhovered";
    setHoveredId(id);
  }
    return (
      <Fragment>
        <div class="section" id = "projects">
        <h1>Recent Projects!</h1>
        <div class="projects">
        
        <div id= "internship" onTouchStart ={handleHover} onMouseEnter={handleHover} onMouseLeave={handleUnHover} className={`project ${hoveredId === "internship" ? "hovered" : "unhovered"}`}>
          <img className={`${hoveredId === "internship" ? "disappear" : ""}`} src={Bonobo}></img>
          <div className={`hoverDiv ${hoveredId === "internship" ? "" : "disappear"}`}>
            <p className="hoverTxt">
              Upgraded the University Repository Database user interface and introduced new features, including comprehensive service account tracking and robust repository dependency management.
            </p>
            <a href={"https://github.com/ahmedryasser/Pepperdine-App-Dev-Internship-contributions"}  className = {"button exploreBtn"} > Learn More </a>
          </div>
        </div>
        <div id = "Pepperplan" onTouchStart={handleHover} onMouseEnter={handleHover} onMouseLeave={handleUnHover} className={`project ${hoveredId === "Pepperplan" ? "hovered" : "unhovered"}`}>
          <img className={`${hoveredId === "Pepperplan" ? "disappear" : ""}`}  src={PepperPlanLogo}></img> 
          <div className={`hoverDiv ${hoveredId === "Pepperplan" ? "" : "disappear"}`}>
            <p className="hoverTxt">
              Developed Pepperplan, an ASP.Net Web Application, to address scheduling challenges faced by Pepperdine students. The app simplifies access to a comprehensive class database, aiding in schedule creation, prerequisite verification, and personalized plan generation.
            </p>
            <a href={"https://github.com/ahmedryasser/PepperPlan"}  className = {"button exploreBtn"} > Learn More </a>
          </div>
        </div><div id = "portfolio" onTouchStart={handleHover} onMouseEnter={handleHover} onMouseLeave={handleUnHover} className={`project ${hoveredId === "portfolio" ? "hovered" : "unhovered"}`}>
          <img className={`${hoveredId === "portfolio" ? "disappear" : ""}`} src={ReactWeb}></img>
          <div className={`hoverDiv ${hoveredId === "portfolio" ? "" : "disappear"}`}>
            <p className="hoverTxt">
              Engineered a dynamic web application utilizing React for the frontend, enriched with SASS for enhanced styling. The application is powered by a robust Firebase backend for seamless hosting and data management. Notably, an integrated email service automates communication.
            </p>
            <a href={"https://github.com/ahmedryasser/PortfolioWebsite"}  className = {"button exploreBtn"} > Learn More </a>
          </div>
        </div>
        <div id= "csclub" onTouchStart={handleHover} onMouseEnter={handleHover} onMouseLeave={handleUnHover} className={`project ${hoveredId === "csclub" ? "hovered" : "unhovered"}`}>
          <img className={`${hoveredId === "csclub" ? "disappear" : ""}`}  src={PeppLogo}></img>
          <div className={`hoverDiv ${hoveredId === "csclub" ? "" : "disappear"}`}>
            <p className="hoverTxt">
              As the president of the Computer Science Club, I taught React.js to fellow students, diversified our tech club's content, led campus improvement projects, fostered collaboration, and organized a coding competition to help students prepare for interviews.            
              </p>
          </div>
        </div>
        <div id = "ipser" onTouchStart={handleHover} onMouseEnter = {handleHover} onMouseLeave={handleUnHover} className={`project ${hoveredId === "ipser" ? "hovered" : "unhovered"}`}>
          <img className={`${hoveredId === "ipser" ? "disappear" : ""}`} src={IpserLogo}></img>
          <div className={`hoverDiv ${hoveredId === "ipser" ? "" : "disappear"}`}>
            <p className="hoverTxt">
              I led a frontend remodeling project for a startup's website, utilizing React JS, HTML, CSS/Sass, and JavaScript within an Agile methodology. I transformed the home page design with a modern aesthetic, incorporating a designer-provided photo.
            </p>
          </div>
        </div>
        
        <div id = "kotlin" onTouchStart={handleHover} onMouseEnter={handleHover} onMouseLeave={handleUnHover} className={`project ${hoveredId === "kotlin" ? "hovered" : "unhovered"}`}>
          <img className={`${hoveredId === "kotlin" ? "disappear" : ""}`} src={Application}></img>
          <div className={`hoverDiv ${hoveredId === "kotlin" ? "" : "disappear"}`}>
            <p className="hoverTxt">
              During the pandemic, I collaborated with the Computer Science Club on multiple Kotlin projects, including games like Connect 4, a Chess Dictionary, and a Memory Game. We also initiated the development of a chess game.
            </p>
            <a href={"https://github.com/ahmedryasser/KotlinProjects"}  className = {"button exploreBtn"} > Learn More </a>

          </div>
        </div>
        </div>
        <a href={"https://github.com/ahmedryasser"}  className = {"button exploreBtn"} > Explore Github </a>
        
      </div>
      </Fragment>
    );
  }
  export default Projects;