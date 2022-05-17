import { Fragment, useRef } from "react";
import { Link } from "react-router-dom";
// import emailjs from '@emailjs/browser';
import "./Contact.scss";

function Contact() {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_4vfbmp3', 'template_w6zt9hg', form.current, '-jLRAHRvKhPqZNVRr')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };

  return (
    <Fragment>
      <h1>Contact Me</h1>
      <div id={"contact"}>
        <form action= "mailto:contact@ahmednajiub.com?subject=myform_submission" method="GET">
          <h2> GET IN TOUCH</h2>
          <p> Name: </p>
          <input type={"text"} id={"name"} placeholder={"Your Name"}></input>
          <p> Email: </p>
          <input id={"email"} type={"email"} placeholder={"Your Email"}></input>
          <p> Subject: </p>
          <input id={"subject"} type={"text"} placeholder={"Subject"}></input>
          <p> Message: </p>
          <textarea
            id={"message"}
            rows={"4"}
            placeholder={"Your message"}
          ></textarea>
          <input type={"submit"} value={"Send"} id={"sendButton"}></input>
        </form>
      </div>
    </Fragment>
  );
}
// const onClickMailtoHandler = () => {

//   var subject = document.getElementById("subject");
//   var message = document.getElementById("message");
//   document.getElementById("mailLink").href = 'mailto:contact@ahmednajiub.com?subject=' + subject + '&body=' + message;
//   alert("Sent");
// }

export default Contact;
