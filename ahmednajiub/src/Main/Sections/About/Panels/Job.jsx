import { Fragment } from "react";
import { Link } from "react-router-dom";

import "./Experience.scss";

function Job(props) {
  let data = props.data;
  return (
    <Fragment>
      <li class={"job"}>
        <div id = {"titleDiv"}>
          <h1 id={"title"}>{data.title}</h1>
        </div>
        <h1 id={"location"}>{data.location}</h1>
        <h1 id={"date"}>{data.date}</h1>
        <h1 id={"employer"}>{data.employer}</h1>
        <ul id={"details"}>
          {data.functions.map((detail) => (
            <li> {detail}</li>
          ))}
        </ul>
      </li>
    </Fragment>
  );
}
export default Job;
