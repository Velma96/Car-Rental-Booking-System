import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Car Rental</h1>
      <ul className="navbar-links">
        <li>
          <NavLink
            to="/cars"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Cars
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-bookings"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            My Bookings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

