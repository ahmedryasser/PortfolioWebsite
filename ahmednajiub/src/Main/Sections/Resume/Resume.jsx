import { Fragment } from "react";
import { Link } from "react-router-dom";
import MyResume from "./Ahmed_Resume.pdf";
import "./Resume.scss";

function Resume() {
    return (
    <div >
        <a id={"resume"} href={MyResume} download={"Ahmed Najiub's Resume.pdf"}>
            <div id= {"button"}>
                Download resume
            </div>
        </a>
    </div>
    )};

export default Resume;