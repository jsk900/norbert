import React from "react";
import { Header } from "./Header";
import "./css/contact.css";

export const Contact = () => (
  <div className="contact">
    <Header />
    <div className="contact_details">
      <img src={require("./images/contact.jpg")} alt="contact" />
      <p>
        <a href="mailto:norkart@gmx.de">Contact Me</a>
      </p>
    </div>
  </div>
);
