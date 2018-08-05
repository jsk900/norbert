import React from "react";
import Header from "./Header";
import "./css/contact.css";

const Contact = () => (
  <div className="contact">
    <div className="clip6" />

    <Header />
    <div className="contact_details">
      <img src={require("./images/contact.jpg")} />
      <p>Leipziger Strasse 63 10117 Berlin Germany</p>
      <p>+49 (0) 30 75 56 50 62</p>
      <p>
        <a href="mailto:norkart@gmx.de">Contact Me</a>
      </p>
    </div>
  </div>
);
export default Contact;
