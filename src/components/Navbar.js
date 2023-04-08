import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src={logo} alt="Logo" className="navbar_logo-image" />
      </div>
      <ul className="navbar_links">
        <li className="navbar_link-item">
          <Link to="/Maps" className="navbar_link">
            DropOff
          </Link>
        </li>
        <li className="navbar_link-item">
          <Link to="/RequestPickup" className="navbar_link">
            PickUp
          </Link>
        </li>
        <li className="navbar_link-item">
          <Link to="/Resources" className="navbar_link">
            Resources
          </Link>
        </li>
        <li className="navbar_link-item">
          <Link to="/ContactUs" className="navbar_link">
            Contact Us
          </Link>
        </li>
        <li className="navbar_link-item">
          <Link to="/Login" className="navbar_link">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
