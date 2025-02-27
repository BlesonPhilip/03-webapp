import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
const Nav = () => {
  return (
    <nav className="navi">
      <h2>React</h2>
      <div className="right">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/setting">Setting</Link>
      </div>
    </nav>
  );
};

export default Nav;
