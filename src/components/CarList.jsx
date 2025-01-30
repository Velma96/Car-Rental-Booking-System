import React, { useState, useEffect } from "react";
import "../styles/CarList.css";
import CarCard from "./CarCard";
import FilterPanel from "./FilterPanel";

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [filter, setFilter] = useState({ type: "", price: 100 });

  useEffect(() => {
    
    fetch("http://localhost:3001/cars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setFilteredCars(data);
      })
      .catch((err) => console.error("Error fetching cars:", err));

    
    fetch("http://localhost:3001/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error("Error fetching bookings:", err));
  }, []);

  const handleFilterChange = (type, price) => {
    setFilter({ type, price });

    const filtered = cars.filter((car) => {
      const matchesType = type ? car.type === type : true;
      const matchesPrice = car.pricePerDay <= price;
      return matchesType && matchesPrice;
    });

    setFilteredCars(filtered);
  };

  if (!filteredCars.length) {
    return <p className="no-cars">No cars available with the selected filters.</p>;
  }

  return (
    <div>
      <FilterPanel onFilterChange={handleFilterChange} />
      <div className="car-list">
        {filteredCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarList;
