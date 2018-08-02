import React from "react";
import Header from "./Header";
import "./css/contact.css";

const theme = "menu-bar6";

const Contact = () => (
  <div className="contact">
    <div className="clip6" />

    <Header theme={theme} />
    <section>
      <img src={require("./images/address.png")} />
      <p>Leipziger Strasse 63 10117 Berlin Germany</p>
      <img src={require("./images/phone.png")} />
      <p>+49 (0) 30 75 56 50 62</p>
      <a href="mailto:norkart@gmx.de">
        <img src={require("./images/email.png")} />
      </a>
    </section>
  </div>
);
export default Contact;
