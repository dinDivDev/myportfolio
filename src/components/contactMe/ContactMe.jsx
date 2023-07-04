import { useState } from "react";
import React from "react";
import "./contactMe.style.css";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="contact-me__form">
        <h2 id="contact_me"> CONTACT </h2>
        <p>
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
      </div>

      <div class="contact-me__sub-form">
        <form action="https://formsubmit.co/Aidina9364@gmail.com" method="POST">
          <input
            placeholder="Enter your name*"
            type="text"
            name="name"
            value={formData.name}
            onChange={onChangeHandler}
          />

          <input
            placeholder="Enter your email*"
            type="email"
            name="email"
            required=""
            value={formData.email}
            onChange={onChangeHandler}
          />

          <input
            placeholder="Enter your message*"
            type="text"
            name="message"
            required=""
            value={formData.message}
            onChange={onChangeHandler}
          />

          <div className="submit_button">
            <button className="btn-contact-me" type="submit">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
