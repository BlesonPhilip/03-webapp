import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="navi">
      <h2>React</h2>
      <div className="right">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
        <NavLink className="nav-link" to="/setting">
          Setting
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
