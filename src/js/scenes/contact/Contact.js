import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <h1>GET IN TOUCH</h1>
      <div>
        <input placeholder="Name" className="input-set-1 common-input-cls" type="text"></input>
        <input placeholder="Email" className="input-set-1 common-input-cls" type="email"></input>
      </div>
      <textarea
        placeholder="How can I help you?"
        className="input-set-2 common-input-cls"
      ></textarea>
      <input type="submit" value="SEND MESSAGE" className="submit-btn"></input>
    </div>
  );
};

export default Contact;
