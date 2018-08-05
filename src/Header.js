import React, { PureComponent } from "react";
import { NavLink, Link } from "react-router-dom";

import "./css/header.css";

class Header extends PureComponent {
  render() {
    return (
      <div className="menu">
        <Link to="/">
          <h3>Norbert Karrass</h3>
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink to="/gallery" activeStyle={{ color: "#f78b10" }}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeStyle={{ color: "#f78b10" }}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/exibitions" activeStyle={{ color: "#f78b10" }}>
                Exibitions
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeStyle={{ color: "#f78b10" }}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
