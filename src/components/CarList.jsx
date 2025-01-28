import React, { useState, useEffect } from "react";
import "./CarList.css";

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/cars")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.error("Error fetching cars:", err));
  }, []);

  if (!cars.length) {
    return <p className="no-cars">No cars available.</p>;
  }
  return (
    <div className="car-list">
      {cars.map((car) => (
        <div
          key={car.id}
          className={`car-card ${car.availability.length === 0 ? "unavailable" : ""}`}
        >
          <img src={car.image} alt={car.model} className="car-image" />
          <div className="car-info">
          <h2>{car.model}</h2>
            <p>Type: {car.type}</p>
            <p>Price: ${car.pricePerDay}/day</p>
            