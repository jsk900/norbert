import React from "react";
import { Header } from "./Header";
import "./css/contact.css";

export const Contact = () => (
  <div className="contact">
    <Header />
    <div className="contact_details">
      <img src={require("./images/contact.jpg")} alt="contact" />
      <p>
        <a href="mailto:norkart@gmx.de">Please contact me for pricing, or further information</a>
      </p>
    </div>
  </div>
);
