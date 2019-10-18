import React from 'react';
import { NavLink } from 'react-router-dom';

import './css/home.css';

export const Home = () => (
  <div className="home">
    <h1>Norbert Karraß</h1>
    <NavLink to="/gallery">
      <div className="button"></div>
    </NavLink>
  </div>
);
