import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/BookingForm.css";

const BookingForm = ({ carId, setCar }) => {
  const [dates, setDates] = useState(null);
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !dates) {
      alert("Please enter your name and select booking dates.");
      return;
    }

    const newBooking = {
      carId,
      user,
      dates: dates.toISOString().split("T")[0], // Format date
    };

    setLoading(true);

    try {
      // ✅ Save booking
      const response = await fetch("http://localhost:3001/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBooking),
      });

      if (!response.ok) {
        throw new Error("Failed to book the car");
      }

      // ✅ Update car status to "Booked"
      const statusUpdate = await fetch(`http://localhost:3001/cars/${carId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "Booked" }),
      });

      if (!statusUpdate.ok) {
        throw new Error("Failed to update car status.");
      }

      setCar((prevCar) => ({ ...prevCar, status: "Booked" })); // ✅ Update UI

      alert("Booking successful! 🚗✅");

      setUser("");
      setDates(null);

    } catch (error) {
      console.error("Error booking the car:", error);
      alert("Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Book This Car</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        required
      />

      <DatePicker
        selected={dates}
        onChange={(date) => setDates(date)}
        minDate={new Date()}
        dateFormat="yyyy-MM-dd"
        placeholderText="Select a booking date"
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? "Booking..." : "Book Now"}
      </button>
    </form>
  );
};

export default BookingForm;
