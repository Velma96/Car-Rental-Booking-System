import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Car Rental</h1>
      <ul>
        <li><Link to="/cars">All Cars</Link></li>
        <li><Link to="/my-bookings">My Bookings</Link></li> 
      </ul>
    </nav>
  );
};

export default Navbar;
