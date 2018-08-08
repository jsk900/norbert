import React from "react";
import { NavLink } from "react-router-dom";

import "./css/home.css";

const Home = () => (
  <div className="home">
    <div className="clip1" />
    <NavLink to="/gallery" activeStyle={{ color: "#f78b10" }}>
      <h1>Norbert Karrass</h1>
    </NavLink>
  </div>
);
export default Home;
