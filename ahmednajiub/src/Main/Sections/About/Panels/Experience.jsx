import { Fragment } from "react";
import { Link } from "react-router-dom";
import JobData from "./JobData.json";
import Job from "./Job.jsx";
import "./Experience.scss";

function Experience() {
  return (
    <Fragment>
      {/* <div id={"experienceDiv"}> */}
        <ul id={"jobs"}>
          {" "}
          {JobData.map((detail) => (
            <Job data={detail} />
          ))}
        </ul>
      {/* </div> */}
    </Fragment>
  );
}

export default Experience;
