import React from "react";
import { Link } from "react-router-dom";
import "./Resources.css";
import Navbar from "./Navbar";

export default function Resources() {
  return (
    <>
      <Navbar />
      <h1>Welcome to the Resource Library</h1>
      <h3>Tap on a tile below to get started</h3>

      <div className="container">
        <Link to="/Resource1" className="option" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="option" id="boxOne">
            <h2>What can be recycled</h2>
          </div>
        </Link>
        <Link to="/Resource2" className="option" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="option" id="boxTwo">
            <h2>How to make better purchase decisions</h2>
          </div>
        </Link>
        <Link to="/Resource3" className="option" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="option" id="boxThree">
            <h2>How to use E-Cycle Halifax?</h2>
          </div>
        </Link>
      </div>
    </>
  );
}
