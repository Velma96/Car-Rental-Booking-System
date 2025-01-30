import React, { useState } from "react";
import "../styles/BookingForm.css";

const BookingForm = ({ carId }) => {
  const [dates, setDates] = useState("");
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !dates) {
      alert("Please enter your name and booking dates.");
      return;
    }

    const newBooking = {
      carId,
      user,
      dates: dates.split(",").map((date) => date.trim()), // Convert to an array
    };

    setLoading(true);
    
    try {
      const response = await fetch("http://localhost:3001/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBooking),
      });

      if (!response.ok) {
        throw new Error("Failed to book the car");
      }

      alert("Booking successful! 🚗✅");
      setUser("");
      setDates("");

    } catch (error) {
      console.error("Error booking the car:", error);
      alert("Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Booking Dates (comma-separated)"
        value={dates}
        onChange={(e) => setDates(e.target.value)}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Booking..." : "Book Now"}
      </button>
    </form>
  );
};

export default BookingForm;
