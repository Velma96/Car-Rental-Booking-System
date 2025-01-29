import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CarList from './components/CarList';
import CarDetail from './components/CarDetail';
import './styles/App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/cars" element={<CarList />} />
        <Route path="/cars/:id" element={<CarDetail />} />
        <Route path="/my-bookings" element={<div>My Bookings</div>} />
      </Routes>
    </div>
  );
};

export default App;

