import React, { useState, useEffect } from "react";
import "../styles/MyBookings.css";
import CarCard from "./CarCard";

const MyBookings = () => {
  const [bookedCars, setBookedCars] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const carsRes = await fetch("http://localhost:3001/cars");
        const bookingsRes = await fetch("http://localhost:3001/bookings");

        const carsData = await carsRes.json();
        const bookingsData = await bookingsRes.json();

        
        const matchedCars = bookingsData.map((booking) => {
          const car = carsData.find((car) => car.id === booking.carId);
          return car ? { ...car, bookingDetails: booking } : null;
        }).filter(Boolean); // Remove null values

        setBookedCars(matchedCars);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="my-bookings">
      <h2>My Bookings</h2>
      {bookedCars.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="bookings-list">
          {bookedCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
