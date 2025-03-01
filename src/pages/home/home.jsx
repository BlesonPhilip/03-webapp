import React, { use } from "react";
import "./home.css";
import { Link } from "react-router-dom";
// import Nav from "../../components/Navbar/nav";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onClick = () => {
    navigate("/setting/" + value);
  };
  return (
    <>
      <div className="h-container">
        <div className="h">
          <h1> Welcome to Home Page</h1>

          {/* <Link to="/about">About</Link>
      <br />
      <Link to="/setting">Setting</Link> */}
          <input type="text" onChange={onChange} />
          <br />
          <button onClick={onClick}>Transfer to set page</button>
        </div>
      </div>
    </>
  );
};

export default Home;
