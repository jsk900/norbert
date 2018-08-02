import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import "./css/header.css";

class Header extends PureComponent {
  render() {
    return (
      <div className={this.props.theme}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/exibitions">Exibitions</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
