import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="h-container">
        <div className="h">
          <h1> Welcome to Home Page</h1>
          {/* <Link to="/about">About</Link>
      <br />
      <Link to="/setting">Setting</Link> */}
        </div>
      </div>
    </>
  );
};

export default Home;
