import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./css/header.css";

export const Header = () => {
  return (
    <div className="menu">
      <Link to="/">
        <h3> Norbert Karraß </h3>{" "}
      </Link>{" "}
      <nav>
        <ul>
          <li>
            <NavLink
              to="/gallery"
              activeStyle={{
                color: "#3b558f"
              }}
            >
              Gallery{" "}
            </NavLink>{" "}
          </li>{" "}
          <li>
            <NavLink
              to="/about"
              activeStyle={{
                color: "#3b558f"
              }}
            >
              About{" "}
            </NavLink>{" "}
          </li>{" "}
          <li>
            <NavLink
              to="/exhibitions"
              activeStyle={{
                color: "#3b558f"
              }}
            >
              Exhibitions{" "}
            </NavLink>{" "}
          </li>{" "}
          <li>
            <NavLink
              to="/contact"
              activeStyle={{
                color: "#3b558f"
              }}
            >
              Contact{" "}
            </NavLink>{" "}
          </li>{" "}
        </ul>{" "}
      </nav>{" "}
    </div>
  );
};
