import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import MyBookings from "./components/MyBookings";
import CarList from "./components/CarList";
import CarDetail from "./components/CarDetail";
import BookingForm from "./components/BookingForm"; // ✅ Import Booking Form
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.css";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Header />

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/cars" />} />
          <Route path="/cars" element={<CarList />} />
          <Route path="/cars/:id" element={<CarDetail />} />
          <Route path="/book/:id" element={<BookingForm />} /> {/* ✅ Add this */}
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
