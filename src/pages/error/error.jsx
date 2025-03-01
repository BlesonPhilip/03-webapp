import React from "react";
import { Link } from "react-router-dom";
import "./error.css";
const error = () => {
  return (
    <div className="error">
      <h1>page not found</h1>
      <p>
        Please go back <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default error;
