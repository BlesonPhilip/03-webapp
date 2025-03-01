import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import Setting from "./pages/setting/setting";
import Nav from "./components/Navbar/nav";
import "./App.css";
import Error from "./pages/error/error";
const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/setting/:data" element={<Setting />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
