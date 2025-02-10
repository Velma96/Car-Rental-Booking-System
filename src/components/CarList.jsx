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
    const fetchData = async () => {
      try {
        const carsRes = await fetch("http://localhost:3001/cars");
        const carsData = await carsRes.json();
        
        const bookingsRes = await fetch("http://localhost:3001/bookings");
        const bookingsData = await bookingsRes.json();

        setCars(carsData);
        setBookings(bookingsData);
        updateCarStatuses(carsData, bookingsData);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const updateCarStatuses = (cars, bookings) => {
    const updatedCars = cars.map(car => {
      const isBooked = bookings.some(booking => booking.carId === car.id);
      return { ...car, status: isBooked ? "Booked" : "Available" };
    });

    setFilteredCars(updatedCars);
  };

  const handleFilterChange = (type, price) => {
    setFilter({ type, price });

    const filtered = cars.filter((car) => {
      const matchesType = type ? car.type === type : true;
      const matchesPrice = car.pricePerDay <= price;
      return matchesType && matchesPrice;
    });

    setFilteredCars(filtered);
  };

  return (
    <div>
      <FilterPanel onFilterChange={handleFilterChange} />
      {filteredCars.length === 0 ? (
        <p className="no-cars">No cars available with the selected filters.</p>
      ) : (
        <div className="car-list">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CarList;
