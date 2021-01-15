import React from "react";
import { Header } from "./Header";
import { HiOutlineMail } from 'react-icons/hi';

import "./css/contact.css";

export const Contact = () => (
  <div className="contact">
    <Header />
    <div className="contact_details">
      <img src={require("./images/contact.jpg")} alt="contact" />
      <p>
        <a href="mailto:norkart@gmx.de">Please contact me for pricing, or further information <HiOutlineMail className='icon'/></a>
      </p>
    </div>
  </div>
);
