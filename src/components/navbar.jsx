import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Elementum</h1>
      <ul className="nav-items">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Studio</a>
        </li>
        <li>
          <a>Services</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
        <li>
          <a>FAQs</a>
        </li>
      </ul>
      <div className="menu-icon">
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
