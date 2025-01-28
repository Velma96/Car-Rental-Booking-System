import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Car Rental</div>
      <ul className="navbar-menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Cars</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
