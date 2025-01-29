import React, { useState } from 'react';
import '../styles/BookingForm.css';

const BookingForm = ({ carId, availability }) => {
  const [dates, setDates] = useState('');
  const [user, setUser] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to book a car
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
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
