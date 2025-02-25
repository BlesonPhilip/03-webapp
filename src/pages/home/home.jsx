import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/about">About</Link>
      <br />
      <Link to="/setting">Setting</Link>
    </>
  );
};

export default Home;
