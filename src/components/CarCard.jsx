import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CarCard.css';

const CarCard = ({ car }) => {
  const navigate = useNavigate();

  const handleViewDetails = (e) => {
    e.preventDefault();
    navigate(`/cars/${car.id}`);
  };

  return (
    <div className="car-card">
      <img className="car-image" src={car.image} alt={car.model} />
      <div className="car-details">
        <h3 className="car-model">{car.model}</h3>
        <p className="car-type">Type: {car.type}</p>
        <p className="car-price">Price per day: ${car.pricePerDay}</p>
        <p className={`car-status ${car.status === 'Booked' ? 'booked' : 'available'}`}>
          Status: {car.status || 'Available'}
        </p>
        <button onClick={handleViewDetails} className="view-details-btn">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CarCard;
