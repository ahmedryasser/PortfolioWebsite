import { Fragment, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

function Contact() {
  const renderForm = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4vfbmp3",
        "template_w6zt9hg",
        renderForm.current,
        "-jLRAHRvKhPqZNVRr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <Fragment>
      <div id="contactme" class="section">
      <h1 id="contactintro">Contact Me</h1>
      <div id={"contact"}>
        <form onSubmit={sendEmail} ref={renderForm}>
          <h2>Lets Get In Touch!</h2>
          <p> Name: </p>
          <input
            type={"text"}
            name="user_name"
            id={"name"}
            placeholder={"Your Name"}
            required
          />
          <p> Email: </p>
          <input
            id={"email"}
            name="user_email"
            type={"email"}
            placeholder={"Your Email"}
            required
          />
          <p> Subject: </p>
          <input
            id={"subject"}
            name="subject"
            type={"text"}
            placeholder={"Subject"}
            required
          />
          <p> Message: </p>
          <textarea
            id={"message"}
            rows={"4"}
            name={"message"}
            placeholder={"Your message"}
          ></textarea>
          <button type={"submit"} class={"button"}>
            Send
          </button>
        </form>
      </div>
      </div>
    </Fragment>
  );
}
//const sendEmail = () => {
//   var subject = document.getElementById("subject");
//   var message = document.getElementById("message");
//   console.log(subject);
//   document.getElementById("mailLink").href =
//     "mailto:contact@ahmednajiub.com?subject=" + subject + "&body=" + message;
//   alert("Sent");
// };

export default Contact;
