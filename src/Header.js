import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './css/header.css';

export const Header = () => {
  return (
    <div className="menu">
      <Link to="/">
        <h3>Norbert Karraß</h3>
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/gallery" activeStyle={{ color: '#f78b10' }}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeStyle={{ color: '#f78b10' }}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/exhibitions" activeStyle={{ color: '#f78b10' }}>
              Exhibitions
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeStyle={{ color: '#f78b10' }}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
