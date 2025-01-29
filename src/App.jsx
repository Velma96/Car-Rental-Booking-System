import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import CarList from './components/CarList';
import CarDetail from './components/CarDetail';
import './styles/App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/cars" />} /> 
        <Route path="/cars" element={<CarList />} />
        <Route path="/cars/:id" element={<CarDetail />} />
        <Route path="/my-bookings" element={<div>My Bookings</div>} />
        <Route path="*" element={<div>404 - Page Not Found</div>} /> 
      </Routes>
    </div>
  );
};

export default App;


