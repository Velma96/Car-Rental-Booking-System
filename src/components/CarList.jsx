import React, { useState, useEffect } from "react";
import "./CarList.css";

const CarList = () => {
  const [cars, setCars] = useState([]);