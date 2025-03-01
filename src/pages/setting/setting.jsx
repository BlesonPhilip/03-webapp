import React from "react";
import { Link } from "react-router-dom";
import "./setting.css";
import { useParams } from "react-router-dom";
const Setting = () => {
  const res = useParams();

  return (
    <div className="s-container">
      <div className="s">
        <h1>Welcome to Setting Page</h1>
        <br />
        {/* <Link to="/">Home</Link> */}
      </div>
      <h2>{res.data}</h2>
    </div>
  );
};

export default Setting;
