import React, { useRef, useState } from "react";
import "./Query.css";
import emailjs from "@emailjs/browser";
const Query = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    let formData = form.current;
    if (formData.user_name && formData.user_email && formData.message) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILSJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
            document.getElementsByClassName("user").value = "";
          },
          (error) => {
            setError(true);
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="contact-form" style={{ paddingTop: "70px" }} id="contact">
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <h2 className="section-title wow fadeInUp" data-wow-delay="0.2s">
            Submit Your Queries
          </h2>
          <input
            style={{ height: "2.5rem" }}
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            required
          />
          <input
            style={{ height: "2.5rem" }}
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            required
          />
          <textarea
            required
            name="message"
            className="user"
            placeholder="Message"
          />
          <input type="submit" value="Send" className="btn btn-common" />
          <p>{done && "Thanks For Contacting Us"}</p>
          <p>{error && "Something Went Wrong"}</p>
        </form>
      </div>
    </div>
  );
};

export default Query;
