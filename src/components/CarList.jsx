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